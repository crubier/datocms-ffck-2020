import Image from "next/image";
import { fetchAPI } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import { AccueilEquipe } from "../components/AccueilEquipe";
import { AccueilTitre } from "../components/AccueilTitre";
import { AccueilMenu } from "../components/AccueilMenu";
import { AccueilProjet } from "../components/AccueilProjet";
import { AccueilQuestion } from "../components/AccueilQuestion";

export default function Accueil({
  accueil,
  allEquipes,
  allProjets,
  allQuestions,
}) {
  return (
    <div className="relative bg-gray-50">
      <AccueilMenu accueil={accueil} />
      <AccueilTitre accueil={accueil} />
      <AccueilEquipe accueil={accueil} allEquipes={allEquipes} />
      <AccueilProjet accueil={accueil} allProjets={allProjets} />
      <AccueilQuestion accueil={accueil} allQuestions={allQuestions} />
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await fetchAPI(
    `
{
  accueil {
    titre
    sousTitre
    imageCouverture {
      url
      responsiveImage(imgixParams: {fm: jpg, fit: fillmax,w: 1200, h: 800}) {
        src
      }
    }
    edito
    titreEdito
    sousTitreEdito
    imageEdito {
      url
    }
    titreEquipe
    sousTitreEquipe
    texteEquipe
    imageEquipe {
      url
    }
    titreProjet
    sousTitreProjet
    texteProjet
    imageProjet {
      url
    }
    titreQuestions
    sousTitreQuestions
    texteQuestions
    imageQuestions {
      url
    }
  }
  allEquipes(orderBy: nom_ASC) {
    nom
    slug
    titre
    photo {
      url
    }
  }
  allProjets(orderBy: categorie_ASC) {
    categorie
    slug
    titre
    image {
      url
    }
  }
  allQuestions(orderBy: question_ASC) {
    question
    reponseRapide
    slug
    image {
      url
    }
  }
}
`,
    {
      preview,
    }
  );

  return {
    props: {
      preview,
      allEquipes: data?.allEquipes,
      allProjets: data?.allProjets,
      allQuestions: data?.allQuestions,
      accueil: {
        ...data?.accueil,
        edito: await markdownToHtml(data?.accueil?.edito || ""),
        texteEquipe: await markdownToHtml(data?.accueil?.texteEquipe || ""),
        texteProjet: await markdownToHtml(data?.accueil?.texteProjet || ""),
        texteQuestions: await markdownToHtml(
          data?.accueil?.texteQuestions || ""
        ),
      },
    },
  };
}
