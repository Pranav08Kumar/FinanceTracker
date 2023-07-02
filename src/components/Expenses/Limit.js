import React, { useState } from "react";
import "./Limit.css";

const Limit = (prop) => {
  const [pressed, setPressed] = useState(false);
  const [Limit, setLimit] = useState('');

  const limitHandlerA = (event) => {
    const maxVal = event.target.value;

    setLimit(maxVal);
  };
  const submitHandlerA = (event) => {
    event.preventDefault();
    const limitData = Limit;
    prop.props(limitData);
    setLimit("");
    setPressed(true);
    setPressed(false);
  };
  const isClicked = () => {
    setPressed(true);
  };
  const isSet = () => {
    setPressed(false);
  };
  const defaHandler = () => {
    prop.isDefa(true);
  };

  return (
    <form className="form-style" onSubmit={submitHandlerA}>
      <div>
        {!pressed && (
          <button className="button-format-button1" onClick={isClicked}>
            Add A limit
          </button>
        )}
        {pressed && (
          <div>
            <h2>
              <label className="label-color">Enter The max Limit</label>
            </h2>

            <input
              type="number"
              min="100"
              step="0.1"
              onChange={limitHandlerA}
              value={Limit}
            ></input>

            <div>
              <button className="button-format" onClick={isSet}>
                Cancel
              </button>
              <button className="button-format" type="submit">
                Submit
              </button>
              <button className="button-format" onClick={defaHandler}>Default</button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};
export default Limit;
