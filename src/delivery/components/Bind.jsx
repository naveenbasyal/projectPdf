import React from "react";

const Bind = () => {
  return (
    <>
      <div className="bind  my-5">
        <h4 className=" dim">Bind Document</h4>
        <p>
          Build an easy to read, long lasting, impressive bound book from your
          pdf file with these binding options.
        </p>
        {/* <h5>Binding *</h5> */}
        <div className="container">
          <input type="radio" />
          <label className="mx-1"> Spiral Bound Book</label>
        </div>
        <div className="container">
          <input type="radio" />
          <label className="mx-1">
            3 Staples with Plastic Cover and Tape on Spine
          </label>
        </div>
        <div className="container">
          <input type="radio" />
          <label className="mx-1"> 2 Staples on Left Edge</label>
        </div>
        <div className="container">
          <input type="radio" />
          <label className="mx-1"> Loose Leaf ( No Binding )</label>
        </div>
      </div>
      <hr class="hr hr-blurry" />
    </>
  );
};

export default Bind;
