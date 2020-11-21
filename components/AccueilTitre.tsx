import React from "react";
import Image from "next/image";

export function AccueilTitre({ accueil }: any) {
  return (
    <main className="lg:relative" id="accueil">
      {/* <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="text-blue-600">{accueil.titre}</span>
          </h2>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            {accueil.sousTitre}
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                target="_blank"
                href="https://www.datocms-assets.com/37238/1605521357-projet-federal-2021-2024-synthese.pdf"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Synthèse du Projet
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                target="_blank"
                href="https://www.datocms-assets.com/37238/1605521551-projet-federal-2021-2024.pdf"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Projet Complet
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative w-full h-screen flex justify-center content-center">
        <Image
          // style={{ position: "absolute" }}
          className="absolute inset-0 w-full h-full object-cover"
          // className="absolute inset-0 w-60 h-60 object-contain"
          // width={5840}
          // height={3056}
          // layout="fixed"
          // layout="responsive"
          // layout="intrinsic"
          layout="fill"
          loading={"eager"}
          priority
          src={accueil.imageCouverture.responsiveImage.src}
          alt={accueil.titre}
        />

        <div className="z-10 flex content-center justify-center align-middle h-full w-full items-center">
          <div className="">
            <h1 className="md:text-8xl sm:text-8xl text-7xl tracking-tight leading-10 font-extrabold text-white text-center md:mb-12 sm:mb-12 mb-8">
              FFCK
            </h1>
            <h2 className="md:text-7xl sm:text-6xl text-5xl leading-10 text-white text-center md:mb-10 sm:mb-8 mb-4">
              {accueil.titre}
            </h2>
            <h3 className="md:text-2xl sm:text-2xl text-2xl max-w-md mx-auto  text-white text-center md:mb-12 sm:mb-12 mb-8">
              {accueil.sousTitre}
            </h3>
            <div className="flex justify-center flex-col md:flex-row">
              <div className="mt-0 rounded-md shadow">
                <a
                  href="#projet"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                >
                  Voir le projet fédéral 2024
                </a>
              </div>
              <div className="rounded-md shadow mt-4 md:mt-0 md:ml-4">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out"
                >
                  Nous contacter / Poser une question
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
