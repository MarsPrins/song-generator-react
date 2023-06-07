import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useBetween } from "use-between";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const usePopUp = () => {
  const [popUp, setPopUp] = useState(null);
  return {
    popUp,
    setPopUp,
  };
};

const Popup = (props) => {
  const { popUp, setPopUp } = useBetween(usePopUp);
  const songArt = props.songArt;
  const songName = props.songName;
  const songLink = props.songLink;
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;
  const path = window.location.pathname;

  const url = `${protocol}//${hostname}/shared?art=${songArt}&name=${songName}&link=${songLink}`;

  return (
    <div className="popupCont">
      <span
        onClick={() => {
          setPopUp(null);
        }}
        className="popupBg"
      ></span>
      <div className="popup">
        <div className="top">
          <div className="left">
            <img src={songArt} alt="" className="songArt" />
            <span className="url">{hostname + path}</span>
            <i
              class="fa-regular fa-copy"
              onClick={() => navigator.clipboard.writeText(url)}
            ></i>
          </div>
          <div className="right">
            <span
              onClick={() => {
                setPopUp(null);
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="shareItem">
            {
              <FacebookShareButton url={url}>
                <FacebookIcon round={true} size={80} />
              </FacebookShareButton>
            }
          </div>
          <div className="shareItem">
            {
              <LinkedinShareButton url={url}>
                <LinkedinIcon round={true} size={80} />
              </LinkedinShareButton>
            }
          </div>
          <div className="shareItem">
            {
              <PinterestShareButton url={url}>
                <PinterestIcon round={true} size={80} />
              </PinterestShareButton>
            }
          </div>
          <div className="shareItem">
            {
              <RedditShareButton url={url}>
                <RedditIcon round={true} size={80} />
              </RedditShareButton>
            }
          </div>
          <div className="shareItem">
            {
              <TelegramShareButton url={url}>
                <TelegramIcon round={true} size={80} />
              </TelegramShareButton>
            }
          </div>
          <div className="shareItem">
            {
              <TwitterShareButton url={url}>
                <TwitterIcon round={true} size={80} />
              </TwitterShareButton>
            }
          </div>
          <div className="shareItem">
            {
              <WhatsappShareButton url={url}>
                <WhatsappIcon round={true} size={80} />
              </WhatsappShareButton>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const Result = () => {
  const { popUp, setPopUp } = useBetween(usePopUp);

  const navigate = useNavigate();

  const CLIENT_ID = "972b3f97da084c1ab656c56cd1425c7d";
  const CLIENT_SECRET = "335848642cb94b7a9233424c15e5554c";

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

  const handleBack = () => {
    navigate("/");
    localStorage.clear();
  };

  if (!language) {
    handleBack();
  }

  const netherlands_skate = "2LZEgS59V2BdJ0UBbashwG?si=c7e658b3707b4996";
  const netherlands_drill = "5HtqTTx809N8zJRClS7xPu?si=f9b4769f1b7d4fcf";
  const netherlands_basic = "37i9dQZEVXbKCF6dqVpDkS?si=4e178ed21be344e5";
  const netherlands_techno = "6Opif0qbTpc96eZ1Nt9qs1?si=438fe655ba3c41c2";

  const english_skate = "37i9dQZF1DWWEcRhUVtL8n?si=db57303c62054da2";
  const english_drill = "1vaq3aKe69CMw3sXL1ezKN?si=78fe65dba8344d8b&nd=1";
  const english_basic = "37i9dQZF1E4AfEUiirXPyP?si=a8e0d48fcace4927";
  const english_techno = "1rgWMR6EYjg4ANrsGQgrdc?si=a2208551b7c24a67";

  const spain_skate = "37i9dQZF1EIhBcZ2KaZHLN?si=579639f44a3d44b2";
  const spain_drill = "1mCABcSpVsBhdOX7HcsXOw?si=0ea7ff29f8654930";
  const spain_basic = "1HN4STuuQ5p4H0ObG4AjEj?si=d63005bc66144049";
  const spain_techno = "5JFLHZqB0yER8BTRy65iTn?si=1bfb1266e16b48c0";

  const africa_skate = "0YrFV6TDPxKx11Ppnt16OA?si=ed647f495329495b";
  const africa_drill = "5JmKX2Lusk5iPAPmzF1dNo?si=bd008028bcb647de";
  const africa_basic = "3w7RsmWGNjq8c1Zee5KUmc?si=4c558c5b9b3240d1";
  const africa_techno = "6JIrEwgQwSIfdYBGBJw3LK?si=d7a5b36ef9a64479";

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
      if (style === "techno") {
        setPlaylistId(netherlands_techno);
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
      if (style === "techno") {
        setPlaylistId(english_techno);
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
      if (style === "techno") {
        setPlaylistId(spain_techno);
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
      if (style === "techno") {
        setPlaylistId(africa_techno);
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
    var downloadTimer = setInterval(function () {
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

  const handlePopup = () => {
    setPopUp(
      <Popup
        songArt={songArt ? songArt : localArt}
        songName={songName ? songName : localName}
        songLink={songLink ? songLink : localLink}
      />
    );
  };

  if (
    localStorage.getItem("art") &&
    localStorage.getItem("name") &&
    localStorage.getItem("link")
  ) {
    // return;
  }

  if (!localStorage.getItem("songLoaded")) {
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
            <p className="dif">Remember to share!</p>
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
  }

  const localArt = localStorage.getItem("art");
  const localName = localStorage.getItem("name");
  const localLink = localStorage.getItem("link");

  if ((requestedSong && !loading) || localStorage.getItem("songLoaded")) {
    localStorage.setItem("songLoaded", true);
    if (songArt) {
      localStorage.setItem("art", songArt);
      localStorage.setItem("name", songName);
      localStorage.setItem("link", songLink);
    }

    return (
      <div className="result">
        {popUp}

        <div className="resultCont">
          <img src={songArt ? songArt : localArt} alt="" className="bgBlur" />
          <span className="topLeft"></span>
          <span className="topRight"></span>
          <button
            className="back"
            onClick={() => {
              handleBack();
            }}
          >
            <i class="fa-solid fa-rotate-left"></i>
          </button>

          <button
            className="share"
            onClick={() => {
              handlePopup();
            }}
          >
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </button>

          <Link target="_blank" to={songLink ? songLink : localLink}>
            <div className="imgCont">
              <img src={songArt ? songArt : localArt} alt="song" />
              <span className="bgBefore"></span>
              <span className="playButton">
                <i class="fa-solid fa-play"></i>
              </span>
              {/* <div>get link</div> */}
            </div>
          </Link>
          <figcaption>{songName ? songName : localName}</figcaption>
        </div>
      </div>
    );
  }
};

export default Result;
