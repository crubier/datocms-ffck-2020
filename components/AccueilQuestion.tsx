import React from "react";
import Image from "next/image";
import markdownStyles from "../components/markdown-styles.module.css";

export function AccueilQuestion({ accueil, allQuestions }: any) {
  console.log();
  return (
    <div className="bg-white" id="questions">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 m-3 sm:m-4  text-center">
          {accueil.titreQuestions}
        </h2>
        {accueil.imageQuestions ? (
          <div className="mx-auto h-24 w-64 sm:w-64 sm:h-24">
            <Image
              className="relative object-center"
              src={accueil.imageQuestions.url}
              width={accueil?.imageQuestions?.width}
              height={accueil?.imageQuestions?.height}
              layout="responsive"
            />
          </div>
        ) : null}
        <div
          className={`${markdownStyles["markdown"]} text-center text-xl leading-7 text-gray-500`}
          dangerouslySetInnerHTML={{ __html: accueil.texteQuestions }}
        />
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2  md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {allQuestions &&
              allQuestions.map((question) => (
                <div
                  key={question.slug}
                  id={`question-${question.slug}`}
                  className="space-y-2"
                >
                  <a href={`/question/${question.slug}`}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {question.question}
                    </dt>
                    <dd className="text-base leading-6 text-gray-500">
                      {question.reponseRapide}
                    </dd>
                  </a>
                </div>
              ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
