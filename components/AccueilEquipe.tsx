import React from "react";
import Image from "next/image";
import markdownStyles from "../components/markdown-styles.module.css";

export function AccueilEquipe({ accueil, allEquipes }: any) {
  return (
    <div className="bg-gray-50" id="equipe">
      <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight m-3 sm:m-4 sm:text-4xl">
              {accueil.titreEquipe}
            </h2>
            {accueil.imageEquipe ? (
              <div className="mx-auto w-96 sm:w-96 bg-white rounded-xl">
                <Image
                  className="relative object-center bg-white"
                  src={accueil.imageEquipe.url}
                  width={accueil?.imageEquipe?.width}
                  height={accueil?.imageEquipe?.height}
                  layout="responsive"
                />
              </div>
            ) : null}

            <div
              className={`${markdownStyles["markdown"]} text-xl leading-7 text-gray-500`}
              dangerouslySetInnerHTML={{ __html: accueil.texteEquipe }}
            />
          </div>
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight m-6 sm:m-4 sm:text-4xl mt-12">
            Notre Équipe
          </h2>
          <ul className="mx-auto grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-16 lg:max-w-5xl sm:mx-auto sm:max-w-xl">
            {allEquipes &&
              allEquipes.map((equipe) => (
                <li key={equipe.slug} id={`equipe-${equipe.slug}`}>
                  <a href={`/equipe/${equipe.slug}`}>
                    <div className="space-y-6">
                      {/* <img
                        className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                        src={equipe?.photo?.url}
                        alt=""
                      /> */}
                      <div className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56">
                        <Image
                          className="rounded-full  object-contain"
                          src={equipe?.photo?.url}
                          layout="responsive"
                          width={160}
                          height={160}
                          alt={equipe.titre}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h4>{equipe?.nom}</h4>
                          <p className="text-blue-600">{equipe.titre}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
