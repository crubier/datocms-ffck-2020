import Image from "next/image";
import { fetchAPI } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import markdownStyles from "../../components/markdown-styles.module.css";

export default function Equipe({ equipe }) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="absolute top-2 right-2">
        <a
          href="/"
          //   type="button"
          className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        >
          <span className="sr-only">Open menu</span>
          {/* <!-- Heroicon name: x --> */}
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
      </div>
      {/* <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div> */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <p className="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">
            Une équipe
          </p>
          <h1 className="mt-2 mb-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {equipe?.nom}
          </h1>
          <p className="text-center mb-8 text-xl text-gray-500 leading-8">
            {equipe?.titre}
          </p>
        </div>

        <div className="prose prose-lg text-gray-500 mx-auto">
          <figure>
            <Image
              className="w-full rounded-lg object-contain"
              src={equipe?.photo.url}
              alt={equipe?.nom}
              width="1310"
              height="873"
            />
          </figure>

          {/* <div className="max-w-2xl mx-auto"> */}
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: equipe?.presentation }}
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await fetchAPI(
    `query EquipeBySlug($slug: String) {
  equipe(filter: {slug: {eq: $slug}}) {
    nom
    slug
    photo {
      url
    }
    titre
    presentation
  }
}`,
    {
      preview,
      variables: {
        slug: params.slug,
      },
    }
  );

  const presentation = await markdownToHtml(data?.equipe?.presentation || "");

  return {
    props: {
      preview,
      equipe: {
        ...data?.equipe,
        presentation,
      },
    },
  };
}

export async function getStaticPaths() {
  const data = await fetchAPI(`query AllEquipe {
    allEquipes(orderBy:nom_ASC,first:20){
      slug
    }
  }
  `);

  return {
    paths: data?.allEquipes?.map((equipe) => `/equipe/${equipe?.slug}`) || [],
    fallback: false,
  };
}
