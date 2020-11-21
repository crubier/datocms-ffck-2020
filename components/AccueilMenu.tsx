import React, { useState } from "react";

import { Transition } from "@headlessui/react";

export function AccueilMenu({ accueil }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative bg-white shadow" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:pl-0">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          {/* <div className="w-0 flex-1 flex">
            <a href="#" className="inline-flex "> */}
          {/* <h2 className="text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-xl sm:leading-none md:text-xl lg:text-xl xl:text-xl">
                <span className="text-blue-600">{accueil.titre}</span>
              </h2> */}
          {/* <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                alt="Workflow"
              /> */}
          {/* </a>
          </div> */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden ml-0 md:ml-0 md:flex space-x-6 ">
            <a
              href="#edito"
              className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150 flex-no-wrap"
            >
              Pourquoi?
            </a>
            <a
              href="#equipe"
              className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150 flex-no-wrap"
            >
              Equipe
            </a>
            <a
              href="#projet"
              className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150 flex-no-wrap"
            >
              Projet
            </a>
            <a
              href="#questions"
              className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150 flex-no-wrap"
            >
              Questions
            </a>
            <a
              href="#contact"
              className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150 flex-no-wrap"
            >
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a
              target="_blank"
              href={accueil.projetDetaille.url}
              className={` whitespace-no-wrap inline-flex items-center justify-center text-base leading-6 font-medium  text-gray-500  hover:text-gray-900  transition  ease-in-out  duration-150`}
            >
              Projet (PDF)
              <svg
                className="-mr-1 ml-1 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              <a
                target="_blank"
                href={accueil.projetSynthese.url}
                className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
              >
                Synthèse (PDF)
                <svg
                  className="-mr-1 ml-1 h-5 w-5 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            onBlur={() => setIsOpen(false)}
            className="z-20 absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg">
              <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      {/* <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                        alt="Workflow"
                      /> */}
                      <h2 className="text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-xl sm:leading-none md:text-xl lg:text-xl xl:text-xl">
                        <span className="text-blue-600">{accueil.titre}</span>
                      </h2>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-6 w-6"
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
                      </button>
                    </div>
                  </div>
                  <div>
                    <nav className="grid gap-y-8">
                      <a
                        href="#edito"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {/* <svg
                          className="flex-shrink-0 h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg> */}
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Pourquoi ?
                        </div>
                      </a>
                      <a
                        href="#equipe"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {/* <svg
                          className="flex-shrink-0 h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg> */}
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Équipe
                        </div>
                      </a>
                      <a
                        href="#projet"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {/* <svg
                          className="flex-shrink-0 h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg> */}
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Projet
                        </div>
                      </a>
                      <a
                        href="#questions"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {/* <svg
                          className="flex-shrink-0 h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg> */}
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Questions / Anti Fake News
                        </div>
                      </a>
                      <a
                        href="#contact"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {/* <svg
                          className="flex-shrink-0 h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg> */}
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Contact
                        </div>
                      </a>
                      {/* <a
                        href="#"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Integrations
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Automations
                        </div>
                      </a> */}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  {/* <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Docs
                    </a>
                    <a
                      href="#"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Enterprise
                    </a>
                    <a
                      href="#"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Help Center
                    </a>
                    <a
                      href="#"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Guides
                    </a>
                    <a
                      href="#"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Security
                    </a>
                    <a
                      href="#"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Events
                    </a>
                  </div> */}
                  <div className="space-y-6">
                    <span className="w-full flex rounded-md shadow-sm">
                      <a
                        target="_blank"
                        href={accueil.projetSynthese.url}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                      >
                        Synthèse du projet (PDF)
                        <svg
                          className="-mr-1 ml-1 h-5 w-5 text-blue-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </span>
                    <p className="text-center text-base leading-6 font-medium text-gray-500">
                      <a
                        target="_blank"
                        href={accueil.projetDetaille.url}
                        className="flex items-center justify-center  text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
                      >
                        Projet détaillé (PDF)
                        <svg
                          className="-mr-1 ml-1 h-5 w-5 text-blue-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
