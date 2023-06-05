const Question1 = (props) => {
  const img1 = props.img1;
  const img2 = props.img2;
  const option1 = props.option1;
  const option2 = props.option2;

  const handleClick = (e) => {
    localStorage.setItem("gender", e);
    window.location.reload();
  };

  return (
    <div className="questionWrapper">
      <span className="overlay"></span>
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
    </div>
  );
};

export default Question1;
