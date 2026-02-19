import React from "react";

const SingleOrigin = () => {
  return (
    <section className="routemein border mt-2 ">
      <div className="main  border p-2">
        <div className="grid gird-cols-1 lg:grid-cols-2 justify-center items-center gap-14 border w-full">
          {/* Image Part */}
          <div className="order-2 lg:order-1 flex flex-col justify-items-center w-full border">
            <h1 className="subHeading text-[#8B5E3C] font-sans text-center ">
              This is Image Section
            </h1>
          </div>

          {/* Maine Contain */}
          <div className="order-1 lg:order-2 flex justify-center items-center border w-full">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter ">
              The Soul of Every<br /> 
              <span>Single Origin</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleOrigin;
<div className="main lg:flex-row p-1">
  <h1 className="text-2xl text-center font-bold">
    {" "}
    This is SingleOrigin Section{" "}
  </h1>
  <h1 className="text-2xl text-center font-bold">
    {" "}
    This is SingleOrigin Section{" "}
  </h1>
</div>;
