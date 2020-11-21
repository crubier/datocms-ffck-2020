import Image from "next/image";
import { fetchAPI } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import { AccueilEquipe } from "../components/AccueilEquipe";
import { AccueilTitre } from "../components/AccueilTitre";
import { AccueilEdito } from "../components/AccueilEdito";
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
      <AccueilEdito accueil={accueil} />
      <AccueilEquipe accueil={accueil} allEquipes={allEquipes} />
      <AccueilProjet accueil={accueil} allProjets={allProjets} />
      <AccueilQuestion accueil={accueil} allQuestions={allQuestions} />
      <AccueilContact accueil={accueil} />
      <div className="fixed bottom-6 right-6">
        <span className="inline-flex rounded-md shadow-sm">
          <a
            href={"#menu"}
            className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-gray-200 hover:bg-gray-100 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-gray-400 transition ease-in-out duration-150"
          >
            Accueil
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                // d="M 5.293 12.707 a 1 1 90 0 0 1.414 0 L 10 9.414 l 3.293 3.293 a 1 1 90 1 0 1.414 -1.414 l -4 -4 a 1 1 90 0 0 -1.414 0 l -4 4 a 1 1 90 0 0 0 1.414 z"
                d="M 5.293 14.707 a 1 1 90 0 0 1.414 0 L 10 11.414 l 3.293 3.293 a 1 1 90 1 0 1.414 -1.414 l -4 -4 a 1 1 90 0 0 -1.414 0 l -4 4 a 1 1 90 0 0 0 1.414 z M 5.293 9.707 a 1 1 90 0 0 1.414 0 L 10 6.414 l 3.293 3.293 a 1 1 90 1 0 1.414 -1.414 l -4 -4 a 1 1 90 0 0 -1.414 0 l -4 4 a 1 1 90 0 0 0 1.414 z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </span>
      </div>
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
          responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 1600, h: 1200, blendMode: multiply, blendAlpha: 80, blendColor: "1C64F2"}) {
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
        titreContact
        texteContact
        projetDetaille {
          url
        }
        projetSynthese {
          url
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
    		detailPdf {
          url
        }
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
