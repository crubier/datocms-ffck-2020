import Image from "next/image";
import { fetchAPI } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import markdownStyles from "../../components/markdown-styles.module.css";

export default function Question({ question }) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="absolute top-2 right-2">
        <a
          href="/#question"
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

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <p className="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">
            Vos questions
          </p>
          <h1 className="mt-2 mb-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {question?.question}
          </h1>
          {/* <p className="text-center mb-8 text-xl text-gray-500 leading-8">
            {question?.categorie}
          </p> */}
        </div>

        <div className="prose prose-lg text-gray-500 mx-auto">
          {question?.image ? (
            <figure className="text-center h-120">
              <Image
                className="w-full h-120 rounded-lg object-contain"
                src={question?.image?.url}
                alt={question?.question}
                layout="fixed"
                width="480"
                height="480"
                priority
              />
            </figure>
          ) : null}

          {/* <div className="max-w-2xl mx-auto"> */}
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: question?.reponseLongue }}
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await fetchAPI(
    `query QuestionBySlug($slug: String) {
  question(filter: {slug: {eq: $slug}}) {
    question
    slug
    image {
      url
    }
    reponseRapide
    reponseLongue
  }
}`,
    {
      preview,
      variables: {
        slug: params.slug,
      },
    }
  );

  return {
    props: {
      preview,
      question: {
        ...data?.question,
        reponseLongue: await markdownToHtml(
          data?.question?.reponseLongue || ""
        ),
      },
    },
  };
}

export async function getStaticPaths() {
  const data = await fetchAPI(`query AllQuestion {
    allQuestions(orderBy:question_ASC,first:20){
      slug
    }
  }
  `);

  return {
    paths:
      data?.allQuestions?.map((question) => `/question/${question?.slug}`) ||
      [],
    fallback: false,
  };
}
