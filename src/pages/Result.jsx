import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  const CLIENT_ID = "972b3f97da084c1ab656c56cd1425c7d";
  const CLIENT_SECRET = "335848642cb94b7a9233424c15e5554c";

  const [loggedIn, setLogin] = useState("no");
  const [loading, setLoading] = useState(false);
  const [requestedSong, setRequestedSong] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [songName, setSongName] = useState("");
  const [songArt, setSongArt] = useState("");
  const [songLink, setSongLink] = useState("");
  const [playlistLength, setPlaylistLength] = useState();
  const [playlistId, setPlaylistId] = useState("");

  const style = localStorage.getItem("style")
    ? localStorage.getItem("style")
    : null;
  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : null;

  const netherlands_skate = "2LZEgS59V2BdJ0UBbashwG?si=c7e658b3707b4996";
  const netherlands_drill = "5HtqTTx809N8zJRClS7xPu?si=f9b4769f1b7d4fcf";
  const netherlands_basic = "37i9dQZEVXbKCF6dqVpDkS?si=4e178ed21be344e5";
  const netherlands_emo = "7yvxJmnyvwSpoS15ANiUBf?si=11b805c502bf4968";

  const english_skate = "37i9dQZF1DWWEcRhUVtL8n?si=db57303c62054da2";
  const english_drill = "1vaq3aKe69CMw3sXL1ezKN?si=78fe65dba8344d8b&nd=1";
  const english_basic = "37i9dQZF1E4AfEUiirXPyP?si=a8e0d48fcace4927";
  const english_emo = "6nxPNnmSE0d5WlplUsa5L3?si=829e47f65cbd4aae";

  const spain_skate = "37i9dQZF1EIhBcZ2KaZHLN?si=579639f44a3d44b2";
  const spain_drill = "1mCABcSpVsBhdOX7HcsXOw?si=0ea7ff29f8654930";
  const spain_basic = "1HN4STuuQ5p4H0ObG4AjEj?si=d63005bc66144049";
  const spain_emo = "3Y6leZNygriswKhwVHoz8F?si=96b0c4579da64b61";

  const africa_skate = "0YrFV6TDPxKx11Ppnt16OA?si=ed647f495329495b";
  const africa_drill = "5JmKX2Lusk5iPAPmzF1dNo?si=bd008028bcb647de";
  const africa_basic = "3w7RsmWGNjq8c1Zee5KUmc?si=4c558c5b9b3240d1";
  const africa_emo = "4Bsd3RZCYAISXtZHEufzgr?si=2baed1d0435a4030";

  useEffect(() => {
    //netherlands
    if (language === "netherlands") {
      if (style === "skate") {
        setPlaylistId(netherlands_skate);
      }
      if (style === "drill") {
        setPlaylistId(netherlands_drill);
      }
      if (style === "basic") {
        setPlaylistId(netherlands_basic);
      }
      if (style === "emo") {
        setPlaylistId(netherlands_emo);
      }
    }
    //english
    if (language === "english") {
      if (style === "skate") {
        setPlaylistId(english_skate);
      }
      if (style === "drill") {
        setPlaylistId(english_drill);
      }
      if (style === "basic") {
        setPlaylistId(english_basic);
      }
      if (style === "emo") {
        setPlaylistId(english_emo);
      }
    }
    //spain
    if (language === "spain") {
      if (style === "skate") {
        setPlaylistId(spain_skate);
      }
      if (style === "drill") {
        setPlaylistId(spain_drill);
      }
      if (style === "basic") {
        setPlaylistId(spain_basic);
      }
      if (style === "emo") {
        setPlaylistId(spain_emo);
      }
    }
    //africa
    if (language === "africa") {
      if (style === "skate") {
        setPlaylistId(africa_skate);
      }
      if (style === "drill") {
        setPlaylistId(africa_drill);
      }
      if (style === "basic") {
        setPlaylistId(africa_basic);
      }
      if (style === "emo") {
        setPlaylistId(africa_emo);
      }
    }
  });

  useEffect(() => {
    var authParamters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParamters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  const dataInfo = (e) => {
    console.log(e);
    setPlaylistLength(e.tracks.total - 1);
    const useableLength = playlistLength ? playlistLength : 20;
    console.log("length : " + playlistLength);
    var num = Math.floor(Math.random() * useableLength);
    console.log("num : " + num);
    setSongName(e.tracks.items[num].track.name);
    setSongArt(e.tracks.items[num].track.album.images[0].url);
    setSongLink(e.tracks.items[num].track.external_urls.spotify);
  };

  async function getTrack() {
    setLoading(true);
    const randTimeLeft = Math.floor(Math.random() * 10);

    var timeleft = randTimeLeft;
    var downloadTimer = setInterval(function() {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        setLoading(false);
        setRequestedSong(true);
      }
      timeleft -= 1;
    }, 1000);
    var trackParamaters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var fetchTracks = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      trackParamaters
    )
      .then((result) => result.json())
      .then((data) => dataInfo(data));
  }

  if (loading) {
    return (
      <div className="result">
        <div class="loader">
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>Loading Results</p>
        </div>
      </div>
    );
  }
  if (!requestedSong && !loading) {
    return (
      <div className="result">
        <div className="getSongCont">
          <button
            className="getSong"
            onClick={() => {
              getTrack();
            }}
          >
            Get results
          </button>
        </div>
      </div>
    );
  }
  if (requestedSong && !loading) {
    localStorage.setItem("songLoaded", true);
    return (
      <div className="result">
        <div className="resultCont">
          <img src={songArt} alt="" className="bgBlur" />
          <button
            onClick={() => {
              navigate("/");
              localStorage.removeItem("gender");
              localStorage.removeItem("race");
              localStorage.removeItem("style");
              localStorage.removeItem("language");
            }}
          >
            <i class="fa-solid fa-rotate-left"></i>
          </button>

          <Link target="_blank" to={songLink}>
            <img src={songArt} alt="song" />
            {/* <div>get link</div> */}
          </Link>
          <figcaption>{songName}</figcaption>
        </div>
      </div>
    );
  }
};

export default Result;
