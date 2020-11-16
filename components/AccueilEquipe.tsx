import React from "react";
import Image from "next/image";
import markdownStyles from "../components/markdown-styles.module.css";

export function AccueilEquipe({ accueil, allEquipes }: any) {
  return (
    <div className="bg-white" id="equipe">
      <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
              {accueil.titreEquipe}
            </h2>

            <p className="text-xl leading-7 text-gray-500">
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: accueil.texteEquipe }}
              />
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {allEquipes &&
                allEquipes.map((equipe) => (
                  <a href={`/equipe/${equipe.slug}`}>
                    <li>
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <div className="w-16 h-16 lg:w-20 lg:h-20">
                          <Image
                            className="rounded-full object-cover"
                            src={equipe?.photo?.url}
                            layout="responsive"
                            width={64}
                            height={64}
                            alt={equipe.titre}
                          />
                        </div>

                        <div className="font-medium text-lg leading-6 space-y-1">
                          <h4>{equipe.nom}</h4>
                          <p className="text-blue-600">{equipe.titre}</p>
                        </div>
                      </div>
                    </li>
                  </a>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
