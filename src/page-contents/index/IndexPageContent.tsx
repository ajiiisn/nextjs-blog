import React from 'react';
import ColorSchemeSwitcher from '../../shared/components/ColoSchemeSwitcher/ColorSchemeSwitcher';

const IndexPageContent = () => {
  return (
    <>
      <ColorSchemeSwitcher />
      <main className="bg-gray-800 font-mono relative overflow-hidden h-screen">
        <div className="flex relative items-center z-20">
          <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div className="flex flex-col my-10">
              <img src="/avatar.png" className="rounded-full w-28 mx-auto" />
              <p className="text-3xl my-6 text-center  dark:text-gray-100">Hi, Aji is here</p>
              <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-gray-300 text-gray-800 text-center py-2">
                Building digital products, brands, and experiences.
              </h2>
              <div className="flex items-center justify-center mt-4">
                <a
                  href="#"
                  className="py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-md rounded-xl"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPageContent;
