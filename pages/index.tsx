import Image from "next/image";
import { fetchAPI } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import { AccueilEquipe } from "../components/AccueilEquipe";
import { AccueilTitre } from "../components/AccueilTitre";
import { AccueilMenu } from "../components/AccueilMenu";
import { AccueilProjet } from "../components/AccueilProjet";
import { AccueilQuestion } from "../components/AccueilQuestion";
import { AccueilContact } from "../components/AccueilContact";
import { groupByArray } from "../lib/utils";

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
      <AccueilContact accueil={accueil} />
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
      responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 1200, h: 800, blendMode:multiply, blendAlpha:80, blendColor:"1C64F2"}) {
        src
      }
    }
    edito
    titreEdito
    sousTitreEdito
    imageEdito {
      url
      width
      height
    }
    titreEquipe
    sousTitreEquipe
    texteEquipe
    imageEquipe {
      url
      width
      height
    }
    titreProjet
    sousTitreProjet
    texteProjet
    imageProjet {
      url
      width
      height
    }
    titreQuestions
    sousTitreQuestions
    texteQuestions
    imageQuestions {
      url
      width
      height
    }
  }
  allEquipes(orderBy: nom_ASC) {
    nom
    slug
    titre
    photo {
      url
      width
      height
    }
  }
  allProjets(orderBy: categorie_ASC) {
    categorie
    slug
    titre
    image {
      url
      width
      height
    }
  }
  allQuestions(orderBy: question_ASC) {
    question
    reponseRapide
    slug
    image {
      url
      width
      height
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
      allProjets: groupByArray(data?.allProjets, "categorie"),
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
