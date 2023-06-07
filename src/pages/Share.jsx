import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Share = () => {
  const params = new URLSearchParams(document.location.search);
  const songName = params.get("name");
  const songArt = params.get("art");
  const songLink = params.get("link");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
    localStorage.removeItem("gender");
    localStorage.removeItem("race");
    localStorage.removeItem("style");
    localStorage.removeItem("language");
  };

  return (
    <div className="share">
      <div className="resultCont">
        <img src={songArt} alt="" className="bgBlur" />
        <span className="topLeft"></span>
        <button
          className="topLeft"
          onClick={() => {
            handleBack();
          }}
        >
          <i class="fa-solid fa-arrow-left"></i>
          <p>Get your own song!</p>
        </button>

        <Link target="_blank" to={songLink}>
          <img src={songArt} alt="song" />
        </Link>
        <figcaption>{songName}</figcaption>
      </div>
    </div>
  );
};

export default Share;
