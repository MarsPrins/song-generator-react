import React, { useEffect, useState } from "react";
import Question1 from "../components/Question1";
import Question2 from "../components/Question2";
import Question3 from "../components/Question3";
import Question4 from "../components/Question4";
import { useNavigate } from "react-router-dom";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("../img", false, /\.(png|jpeg|svg)$/));

const Question = () => {
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      if (localStorage.getItem("songLoaded")) {
        navigate("/results");
      }
      navigate("/quiz");
      localStorage.clear();
    }
  });

  const gender = localStorage.getItem("gender")
    ? localStorage.getItem("gender")
    : null;
  const race = localStorage.getItem("race")
    ? localStorage.getItem("race")
    : null;
  const style = localStorage.getItem("style")
    ? localStorage.getItem("style")
    : null;
  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : null;

  const extension = ".jpeg";

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  console.log(screenSize.width);

  const question1 = (
    <Question1
      img1={images["woman" + extension]}
      img2={images["man" + extension]}
      option1={"woman"}
      option2={"man"}
    />
  );
  const question2 = (
    <Question2
      img1={images["black-" + gender + extension]}
      img2={images["white-" + gender + extension]}
      option1={"black"}
      option2={"white"}
    />
  );
  const question3 = (
    <Question3
      img1={images["skate-" + race + "-" + gender + extension]}
      img2={images["drill-" + race + "-" + gender + extension]}
      img3={images["techno-" + race + "-" + gender + extension]}
      img4={images["basic-" + race + "-" + gender + extension]}
      option1={"skate"}
      option2={"drill"}
      option3={"techno"}
      option4={"basic"}
    />
  );
  const question4 = (
    <Question4
      img1={
        images[
          screenSize.width >= 480
            ? "netherlands" + extension
            : "netherlands-mobile" + extension
        ]
      }
      img2={images["english" + extension]}
      img3={images["spain" + extension]}
      img4={images["africa" + extension]}
      option1={"netherlands"}
      option2={"english"}
      option3={"spain"}
      option4={"africa"}
    />
  );

  if (!gender) {
    return question1;
  }
  if (gender && !race && !style && !language) {
    return question2;
  }
  if (race && !style && !language) {
    return question3;
  }
  if (style && !language) {
    return question4;
  }
  if (language) {
    window.location.pathname = "/results";
  }
};

export default Question;
