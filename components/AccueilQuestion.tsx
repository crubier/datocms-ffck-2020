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
          <Image
            className="object-center"
            src={accueil.imageQuestions.url}
            width={accueil?.imageQuestions?.width}
            height={accueil?.imageQuestions?.height}
            layout="responsive"
          />
        ) : null}
        <div
          className={`${markdownStyles["markdown"]} "text-xl leading-7 text-gray-500"`}
          dangerouslySetInnerHTML={{ __html: accueil.texteQuestions }}
        />
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {allQuestions &&
              allQuestions.map((question) => (
                <div key={question.slug} className="space-y-2">
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
            {/* <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                What's the best thing about Switzerland?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                I don't know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                How do you make holy water?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                You boil the hell out of it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Why do you never see elephants hiding in trees?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Because they're so good at it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                What do you call someone with no body and no nose?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Why can't you hear a pterodactyl go to the bathroom?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Because the pee is silent. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Why did the invisible man turn down the job offer?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                He couldn't see himself doing it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div> */}
          </dl>
        </div>
      </div>
    </div>
  );
}
