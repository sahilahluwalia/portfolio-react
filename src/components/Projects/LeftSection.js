import React from "react";

const LeftSection = ({ headLine, collection }) => {
  return (
    <>
      <h2 class="text-4xl sm:text-5xl cursor-auto font-bold py-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-blue-500">
        {headLine}
      </h2>
      <div class="text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-1/2 ">
        {collection?.map((item) => {
          return (
            <>
              <ul class="hover:text-brightgreen ">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <p>{item.name} </p>
                </a>
                {item.currentlyBuilding && (
                  <span class=" items-center rounded-md flex w-fit mt-2 justify-center bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Currently Building
                  </span>
                )}
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default LeftSection;
