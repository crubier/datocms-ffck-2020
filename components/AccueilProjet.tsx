import React from "react";
import Image from "next/image";
import markdownStyles from "../components/markdown-styles.module.css";

export function AccueilProjet({ accueil, allProjets }: any) {
  return (
    <div
      id="projet"
      className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {accueil.titreProjet}
          </h2>
          {accueil.imageProjet ? (
            <Image
              src={accueil.imageProjet.url}
              width={accueil?.imageProjet?.width}
              height={accueil?.imageProjet?.height}
              layout="responsive"
            />
          ) : null}

          <div
            className={`${markdownStyles["markdown"]} mt-3 mx-auto text-xl leading-7 text-gray-500 sm:mt-4`}
            dangerouslySetInnerHTML={{ __html: accueil.texteProjet }}
          ></div>
        </div>
        {/* <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"> */}
        {allProjets.map(({ key: categorie, values: projets }) => {
          return (
            <>
              <h3 className="text-xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-2xl sm:leading-10 mt-12">
                {categorie}
              </h3>
              <div
                key={categorie}
                className="mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
              >
                {projets.map((projet) => (
                  <div
                    key={projet.slug}
                    id={`projet-${projet.slug}`}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <a
                      href={`/projet/${projet.slug}`}
                      className="hover:underline"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          className="h-48 w-full object-cover"
                          src={projet.image.url}
                          width={projet.image.width}
                          height={projet.image.height}
                          layout="responsive"
                          alt=""
                        />
                      </div>
                    </a>
                    {/* <div className="flex-1 bg-white p-6 flex flex-col justify-between"> */}
                    {/* <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                          <a href="#" className="hover:underline">
                            {projet.categorie}
                          </a>
                        </p>
                        <a href="#" className="block">
                          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            {projet.titre}
                          </h3> */}
                    {/* <p className="mt-3 text-base leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto accusantium praesentium eius, ut
                            atque fuga culpa, similique sequi cum eos quis
                            dolorum.
                          </p> */}
                    {/* </a>
                      </div> */}
                    {/* <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm leading-5 font-medium text-gray-900">
                        <a href="#" className="hover:underline">
                          Roel Aufderhar
                        </a>
                      </p>
                      <div className="flex text-sm leading-5 text-gray-500">
                        <time dateTime="2020-03-16">Mar 16, 2020</time>
                        <span className="mx-1">&middot;</span>
                        <span>6 min read</span>
                      </div>
                    </div>
                  </div> */}
                    {/* </div> */}
                  </div>
                ))}
              </div>
            </>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
}
