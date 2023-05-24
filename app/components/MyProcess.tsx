import React from "react";

const MyProcess = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 justify-center">
      <h1 className="text-3xl">My work process</h1>
      <ol className="max-w-[800px]">
        <li className="grid grid-cols-5 grid-rows-2">
          <h1 className="text-8xl font-light row-span-2 justify-self-end pr-4">
            01
          </h1>
          <h2 className="text-3xl font-medium col-span-4 self-end">Brief:</h2>
          <p className="text-xl col-span-4">
            Understand project requirements and objectives.
          </p>
        </li>
        <li className="grid grid-cols-5 grid-rows-2">
          <h1 className="text-8xl font-light row-span-2 justify-self-end pr-6">
            02
          </h1>
          <h2 className="text-3xl font-medium col-span-4 self-end">
            Research:
          </h2>
          <p className="text-xl col-span-4">
            Conduct thorough analysis and gather inspiration.
          </p>
        </li>
        <li className="grid grid-cols-5 grid-rows-2">
          <h1 className="text-8xl font-light row-span-2 justify-self-end pr-6">
            03
          </h1>
          <h2 className="text-3xl font-medium col-span-4 self-end">
            Content Planning:
          </h2>
          <p className="text-xl col-span-4">
            Strategize content structure and messaging.
          </p>
        </li>
        <li className="grid grid-cols-5 grid-rows-2">
          <h1 className="text-8xl font-light row-span-2 justify-self-end pr-6">
            04
          </h1>
          <h2 className="text-3xl font-medium col-span-4 self-end">
            Sketching:{" "}
          </h2>
          <p className="text-xl col-span-4">
            Create visual blueprints for layout and functionality.
          </p>
        </li>
        <li className="grid grid-cols-5 grid-rows-2">
          <h1 className="text-8xl font-light row-span-2 justify-self-end pr-6">
            05
          </h1>
          <h2 className="text-3xl font-medium col-span-4 self-end">
            Development:{" "}
          </h2>
          <p className="text-xl col-span-4">
            Bring designs to life through coding and implementation.{" "}
          </p>
        </li>
        <li className="grid grid-cols-5 grid-rows-2">
          <h1 className="text-8xl font-light row-span-2 justify-self-end pr-6">
            06
          </h1>
          <h2 className="text-3xl font-medium col-span-4 self-end">
            Send-off:{" "}
          </h2>
          <p className="text-xl col-span-4">
            Deliver the final product and ensure client satisfaction.{" "}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default MyProcess;
