import React from "react";

const Question4 = (props) => {
  const img1 = props.img1;
  const img2 = props.img2;
  const img3 = props.img3;
  const img4 = props.img4;
  const option1 = props.option1;
  const option2 = props.option2;
  const option3 = props.option3;
  const option4 = props.option4;

  const handleClick = (e) => {
    localStorage.setItem("language", e);
    window.location.reload();
  };

  return (
    <div className="questionWrapper questionX">
      <button
        className="question"
        onClick={() => {
          handleClick(option1);
        }}
      >
        <img src={img1} alt="" />
        <h2>{option1}</h2>
      </button>
      <button
        className="question"
        onClick={() => {
          handleClick(option2);
        }}
      >
        <img src={img2} alt="" />
        <h2>{option2}</h2>
      </button>
      <button
        className="question"
        onClick={() => {
          handleClick(option3);
        }}
      >
        <img src={img3} alt="" />
        <h2>{option3}</h2>
      </button>
      <button
        className="question"
        onClick={() => {
          handleClick(option4);
        }}
      >
        <img src={img4} alt="" />
        <h2>{option4}</h2>
      </button>
    </div>
  );
};

export default Question4;
