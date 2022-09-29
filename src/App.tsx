import React from "react";

import logotype from "./assets/logotype.png";
import logoname from "./assets/logoname.png";

import copy from "./assets/copy.svg";
import rocket from "./assets/rocket.svg";
import code from "./assets/code.svg";
import bug from "./assets/bug.svg";

function App() {
  const copyCommand = () => {
    navigator.clipboard.writeText("npm i graphem");
  };
  return (
    <div className="flex flex-col items-center w-full dark:bg-[#1b1b1b]">
      <div className="flex flex-col w-full pt-[1rem] sm:pt-[2.5rem]">
        <div className="flex w-full p-[1rem] justify-center">
          <img src={logotype} className="max-h-[6.8rem]" alt="Graphem logo" />
        </div>
        <div className="flex w-full justify-center">
          <img
            src={logoname}
            className="max-h-[5rem]"
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
      <div className="flex justify-center pt-[2rem]">
        <div
          className="flex transition bg-[#6d6d6d] dark:bg-[#424242] active:bg-gradient-to-r active:from-[#5079F7] active:to-[#E535AB] rounded-full py-[0.5rem] items-center px-[2rem] cursor-pointer"
          onClick={copyCommand}
          tabIndex={0}
          title="Copy to clipboard"
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
      </div>
      <div className="flex justify-center pt-[3rem] flex-col text-center">
        <h1 className="text-[1.8rem] font-bold dark:text-white">
          Contributions
        </h1>
        <p className="sm:w-[30rem] dark:text-white text-[1.1rem] px-[1rem]">
          Do you would like to contribute? Do you want to be the author of a new
          feature? Awesome! please fork the repository and make changes as you
          like. Pull requests are warmly welcome.
        </p>
      </div>
      <div className="flex justify-center pt-[3rem] flex-col text-center gap-y-[1rem] mb-[2rem]">
        <h1 className="text-[1.8rem] font-bold dark:text-white">
          Useful resources
        </h1>
        <div className="flex flex-col gap-y-[1rem] sm:flex-row sm:gap-x-[2rem]">
          <a href="https://github.com/nasa/openmct">
            <div className="flex items-center">
              <img src={rocket} className="dark:invert" alt="" />{" "}
              <h2 className="pl-[0.5rem] text-[1.2rem] dark:text-white">
                NASA Open MCT
              </h2>
            </div>
          </a>
          <a href="https://github.com/360macky/graphem">
            <div className="flex items-center">
              <img src={code} className="dark:invert" alt="" />{" "}
              <h2 className="pl-[0.5rem] text-[1.2rem] dark:text-white">
                Source code
              </h2>
            </div>
          </a>
          <a href="https://github.com/360macky/graphem">
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
