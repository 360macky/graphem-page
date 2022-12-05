import React from "react";

import logotype from "./assets/logotype.png";
import logoname from "./assets/logoname.png";

import copy from "./assets/copy.svg";
import rocket from "./assets/rocket.svg";
import code from "./assets/code.svg";
import bug from "./assets/bug.svg";
import link from "./assets/link.svg";
import lifecycle from "./assets/lifecycle.png";

function App() {
  const copyCommand = () => {
    navigator.clipboard.writeText("npm i graphem");
  };
  return (
    <div className="flex flex-col items-center w-full dark:bg-[#1b1b1b]">
      <div className="flex flex-col w-full pt-[1rem] sm:pt-[4.5rem]">
        <div className="flex w-full p-[1rem] justify-center">
          <img src={logotype} className="max-h-[6.8rem] graphem-particles" alt="Graphem logo" />
        </div>
        <div className="flex w-full justify-center">
          <img
            src={logoname}
            className="max-h-[5.4rem]"
            alt="Graphem"
            title="Graphem"
          />
        </div>
      </div>
      <div className="flex justify-center pt-[1.5rem]">
        <div className="sm:w-[30rem]">
          <p className="px-[2rem] text-[1.1rem] text-center dark:text-white">
            <b>Graphem</b> is an Open MCT plugin that allows you to connect a
            telemetry source from GraphQL in real time. Through a data
            dictionary, Graphem receives the historical data and continues the
            connection through GraphQL-WS plotting the data in real time.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-[2rem] gap-x-[1rem]">
        <div
          className="flex transition dark:border-[white] dark:bg-[#424242] bg-gradient-to-r from-[#5079F7] to-[#E535AB] hover:ring rounded-full py-[0.5rem] items-center px-[2rem] cursor-pointer active:scale-105"
          onClick={copyCommand}
          tabIndex={0}
          title="Copy to clipboard"
          role={"button"}
        >
          <p
            className="text-white text-[1.2rem] font-mono font-light"
            id="graphem-install-code"
          >
            npm i graphem
          </p>
          <img
            src={copy}
            className="h-[1.6rem] pl-[0.8rem]"
            alt="Copy to clipboard"
          />
        </div>
        <a href="https://github.com/360macky/graphem/" target={"_blank"} rel="noreferrer">
          <div
            className="flex transition dark:border-[white] dark:bg-[#424242] bg-[#424242] hover:ring rounded-full py-[0.5rem] items-center px-[2rem] cursor-pointer active:scale-105"
            tabIndex={0}
            title="GitHub Repository"
          >
            <p
              className="text-white text-[1.2rem] font-mono font-light"
              id="graphem-install-code"
            >
              GitHub Repository
            </p>
            <img
              src={link}
              className="h-[1.6rem] pl-[0.8rem]"
              alt="Copy to clipboard"
            />
          </div>
        </a>
      </div>
      <div className="flex justify-center pt-[3rem] flex-col text-center">
        <h1 className="text-[1.8rem] font-bold dark:text-white underline underline-offset-4 decoration-[#E535AB] pb-[0.5rem]">
          Core System
        </h1>
        <p className="sm:w-[45rem] dark:text-white text-[1.1rem] px-[1rem] pt-[2rem]">
          <img src={lifecycle} alt="" className="dark:invert" />
        </p>
      </div>
      <div className="flex justify-center pt-[3rem] flex-col text-center">
        <h1 className="text-[1.8rem] font-bold dark:text-white underline underline-offset-4 decoration-[#E535AB] pb-[0.5rem]">
          Contributions
        </h1>
        <p className="sm:w-[30rem] dark:text-white text-[1.1rem] px-[1rem]">
          Do you would like to contribute? Do you want to be the author of a new
          feature? Awesome! please fork the repository and make changes as you
          like. Pull requests are warmly welcome.
        </p>
      </div>
      <div className="flex justify-center pt-[3rem] flex-col text-center">
        <h1 className="text-[1.8rem] font-bold dark:text-white underline underline-offset-4 decoration-[#E535AB] pb-[0.5rem]">
          License
        </h1>
        <p className="sm:w-[30rem] dark:text-white text-[1.1rem] px-[1rem]">
          Distributed under the Apache 2.0 License. See{" "}
          <a
            href="https://github.com/360macky/graphem/blob/main/LICENSE"
            target={"_blank"}
            rel="noreferrer"
          >
            LICENSE
          </a>{" "}
          for more information.
        </p>
      </div>
      <div className="flex justify-center pt-[3rem] flex-col text-center gap-y-[1rem] mt-[2rem] pb-[3rem] bg-gray-100 dark:bg-[black] w-full">
        <div className="flex justify-center flex-col gap-y-[1rem] sm:flex-row sm:gap-x-[2rem]">
          <a href="https://github.com/360macky/graphem">
            <div className="flex items-center">
              <img src={code} className="dark:invert" alt="" />{" "}
              <h2 className="pl-[0.5rem] text-[1.2rem] dark:text-white">
                Repository
              </h2>
            </div>
          </a>
          <a href="https://github.com/360macky/graphem/graphs/contributors">
            <div className="flex items-center">
              <img src={code} className="dark:invert" alt="" />{" "}
              <h2 className="pl-[0.5rem] text-[1.2rem] dark:text-white">
                Contributors
              </h2>
            </div>
          </a>
          <a href="https://github.com/nasa/openmct">
            <div className="flex items-center">
              <img src={rocket} className="dark:invert" alt="" />{" "}
              <h2 className="pl-[0.5rem] text-[1.2rem] dark:text-white">
                NASA Open MCT
              </h2>
            </div>
          </a>
          <a href="https://github.com/360macky/graphem/issues">
            <div className="flex items-center">
              <img src={bug} className="dark:invert" alt="" />{" "}
              <h2 className="pl-[0.5rem] text-[1.2rem] dark:text-white">
                Issues
              </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
