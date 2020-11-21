import React from "react";
import Image from "next/image";
import markdownStyles from "../components/markdown-styles.module.css";

export function AccueilEdito({ accueil }: any) {
  return (
    <div className="bg-white" id="edito">
      <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight m-3 sm:m-4 sm:text-4xl">
              {accueil.titreEdito}
            </h2>
            {accueil.imageEdito ? (
              <div className="mx-auto w-64 sm:w-64">
                <Image
                  className="relative object-center rounded-full"
                  src={accueil.imageEdito.url}
                  width={accueil?.imageEdito?.width}
                  height={accueil?.imageEdito?.height}
                  layout="responsive"
                />
              </div>
            ) : null}

            <div
              className={`${markdownStyles["markdown"]} text-xl leading-7 text-gray-500`}
              dangerouslySetInnerHTML={{ __html: accueil.edito }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
