import React, { useContext, useState, useCallback, useEffect } from "react";
import "./Guide.scss";
import {
  HomeIcon,
  TrendingIcon,
  SubscriptionIcon,
  LibraryIcon,
  HistoryIcon,
  VideoIcon,
  WatchLaterIcon,
  LikeIcon,
  DownArrowIcon,
  PlayListIcon,
  UpArrowIcon,
  LiveIcon,
  GamingIcon,
  LiveDefaultIcon,
  FlagIcon
} from "./Icons";
import {
  SettingsIcon,
  HelpIcon,
  FeedIcon
} from "../Navbar/NavComponents/Icons";
import { MenuIcon } from "../Navbar/NavComponents/Icons";
import YoutubeLogo from "../../Images/Youtube_icon.svg";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";

// Play List var
// This should be an API Call
const PlayList = [
  "Heavy Metal",
  "Web Development",
  "Python Tutorials",
  "Blockchain Tutorials",
  "Django Tutorials",
  "Funny Cats",
  "C++",
  "Philosophy",
  "Physics",
  "Biology"
];

// Subscriptions var
// This should be an API Call

const FrontSubscriptions = [
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJy4aoHWxMClOcfkfUlJXUwQ2dLAHh4a0Aib4g=s88-c-k-c0xffffffff-no-rj-mo",
    name: "Traversy Media",
    isLive: false,
    notiExist: true,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJzwrsKkJImi7xpc3UgWjhlLsvnJfL1uHrU2lg=s88-c-k-c0xffffffff-no-rj-mo",
    name: "DW News",
    isLive: true,
    notiExist: false,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJyQkeNdfhtpumh9Ed-z8dhG_b84GXyDpUFJFQ=s88-c-k-c0xffffffff-no-rj-mo",
    name: "Sky News",
    isLive: true,
    notiExist: true,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJxPc4xr9aOmZDA-KoZ_AvCIRIxQlmZaBPuuwQ=s88-c-k-c0xffffffff-no-rj-mo",
    name: "Dev Ed",
    isLive: false,
    notiExist: true,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJxJjb4-tS0xF64xzI24w-AkBY_mMMfevVlynA=s88-c-k-c0xffffffff-no-rj-mo",
    name: "ABC News",
    isLive: true,
    notiExist: true,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJxXqpUjcBXNAvNkvJrIDSgwpL04Tiui60_Y=s88-c-k-c0xffffffff-no-rj-mo",
    name: "Corey Schafer",
    isLive: false,
    notiExist: false,
    channelLink: ""
  }
];

// sort by isLive: true to show live channels first in the list

FrontSubscriptions.sort((x, y) => {
  return x.isLive === y.isLive ? 0 : x.isLive ? -1 : 1;
});

const Subscriptions = [
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJyAbeXRdP8TNAr93sWbuwvHtW93W1Smi8SfYg=s88-c-k-c0xffffffff-no-rj-mo",
    name: "ChrisFix",
    isLive: false,
    notiExist: true,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJwRqkpm42CAQQzwJ8suNcqnmiXW1MrrQo0x6g=s88-c-k-c0xffffffff-no-rj-mo",
    name: "Alter Bridge",
    isLive: false,
    notiExist: true,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJwvTJlMpRuCEDVaYJYAu021S6P5FQjwzSByHA=s88-c-k-c0xffffffff-no-rj-mo",
    name: "him",
    isLive: false,
    notiExist: false,
    channelLink: ""
  },

  {
    img:
      "https://yt3.ggpht.com/a/AATXAJzy2NzG2CUH1JnOeTdq6UJBZ1ir5h-YhvAF5w=s88-c-k-c0xffffffff-no-rj-mo",
    name: "Audioslave",
    isLive: false,
    notiExist: false,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJykB-vkpK4WB_3--wQUc1GVwYkSrLXrYOOPKg=s88-c-k-c0xffffffff-no-rj-mo",
    name: "freeCodeCamp.rog",
    isLive: false,
    notiExist: true,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJzw9CM8g-N3e0YUl5z7sxB8c8Nym9tktEBBKw=s88-c-k-c0xffffffff-no-rj-mo",
    name: "Vaush",
    isLive: false,
    notiExist: false,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJxXiZ6pK3ccheOaLLapBxPmNX_blGrwKeBMOQ=s88-c-k-c0xffffffff-no-rj-mo",
    name: "sentdex",
    isLive: false,
    notiExist: true,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJzGUJdH8PJ5d34Uk6CYZmAMWtam2Cpk6tU_Qw=s88-c-k-c0xffffffff-no-rj-mo",
    name: "Linus Tech Tips",
    isLive: false,
    notiExist: true,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJx0FvvEN3GA7WxUsQArVMbHan6rd93h-UGBAA=s88-c-k-c0xffffffff-no-rj-mo",
    name: "Nirvana",
    isLive: false,
    notiExist: false,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJwNzMorrQSVGUO-yZGchUu4EBlZHsYCm0pHEQ=s88-c-k-c0xffffffff-no-rj-mo",
    name: "BBC News",
    isLive: false,
    notiExist: false,
    channelLink: ""
  },
  {
    img:
      "https://yt3.ggpht.com/a/AATXAJzK29hC1dizskwV4fP7N0bsXDN-Y2ucKriEHQ=s88-c-k-c0xffffffff-no-rj-mo",
    name: "DIT Perks",
    isLive: false,
    notiExist: true,
    channelLink: ""
  }
];

// Sort Subscriptions by Character
Subscriptions.sort((x, y) => {
  const a = x.name.charAt(0);
  const b = y.name.charAt(0);
  return a > b ? 1 : a < b ? -1 : 0;
});

const Guide = React.memo(({ ShowGuide }) => {
  // Show more State
  const [IsShowMore, setIsShowMore] = useState(false);

  // Subscription Show More State

  const [SubIsShowMore, setSubIsShowMore] = useState(false);

  // Theme context
  const [YtTheme] = useContext(ThemeContext);
  const Theme = YtTheme.isDarkTheme;

  // ===========================
  //  Handle Show More Or Less
  //============================

  const HandleShowMoreOrLess = useCallback(() => {
    setIsShowMore(!IsShowMore);
  }, [setIsShowMore, IsShowMore]);

  const HandleSubscriptionShowMoreOrLess = useCallback(() => {
    setSubIsShowMore(!SubIsShowMore);
  }, [setSubIsShowMore, SubIsShowMore]);

  const ReturnTheme = () => {
    return Theme ? "dark" : "light";
  };

  useEffect(() => {
    if (document.getElementById("hvc") != null) {
      document.getElementById("hvc").style.marginLeft = ShowGuide
        ? "240px"
        : "72px";
    }
  }, [ShowGuide]);

  const line_guide = `line_guide line_guide-${ReturnTheme()}`;

  const content_wrapper = `content_wrapper content_wrapper-${ReturnTheme()}`;

  // transform: `translateX(${ShowGuide ? "0" : "-100"}%)`,
  return (
    <div
      style={{
        //transform: `translateX(${ShowGuide ? "0" : "-100"}%)`,
        display: ShowGuide ? "" : "none",
        transitionDuration: "3000ms"
      }}
      id="GuideG"
      className="guide_general_container"
    >
      <div className={`guide_container guide_container-${ReturnTheme()}`}>
        <div className="content_container">
          {/*--------------------*/}
          <div title="Home" className={content_wrapper}>
            <div className="content_logo">
              <HomeIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Home</div>
            </div>
          </div>
          {/*--*/}
          <div title="Trending" className={content_wrapper}>
            <div className="content_logo">
              <TrendingIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Trending</div>
            </div>
          </div>
          {/*--*/}
          <div title="Subscriptions" className={content_wrapper}>
            <div className="content_logo">
              <SubscriptionIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Subscriptions</div>
            </div>
          </div>
          <div className={`${line_guide} line_guide_in`}></div>
          {/*--------------------*/}
          <div title="Library" className={content_wrapper}>
            <div className="content_logo">
              <LibraryIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Library</div>
            </div>
          </div>
          {/*--*/}
          <div title="History" className={content_wrapper}>
            <div className="content_logo">
              <HistoryIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">History</div>
            </div>
          </div>
          {/*--*/}
          <div title="Your videos" className={content_wrapper}>
            <div className="content_logo">
              <VideoIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Your videos</div>
            </div>
          </div>
          {/*--*/}
          <div title="Watch later" className={content_wrapper}>
            <div className="content_logo">
              <WatchLaterIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Watch later</div>
            </div>
          </div>
          {/*--*/}
          <div title="Liked videos" className={content_wrapper}>
            <div className="content_logo">
              <LikeIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Liked videos</div>
            </div>
          </div>
          {/* <== START SHOW MORE AREA ==> */}
          {IsShowMore &&
            PlayList.map((play, index) => {
              return (
                <div title={play} key={index} className={content_wrapper}>
                  <div className="content_logo">
                    <PlayListIcon />
                  </div>
                  <div className="content_arte">
                    <div className="content_text">{play}</div>
                  </div>
                </div>
              );
            })}

          <div
            title={`Show ${IsShowMore ? "less" : "more"}`}
            onClick={HandleShowMoreOrLess}
            className={content_wrapper}
          >
            <div className="content_logo">
              {IsShowMore ? <UpArrowIcon /> : <DownArrowIcon />}
            </div>
            <div className="content_arte">
              <div className="content_text">
                {`Show ${IsShowMore ? "less" : "more"}`}
              </div>
            </div>
          </div>
          {/* <== END SHOW MORE AREA ==> */}
          <div className={`${line_guide} line_guide_in`}></div>
          {/* <== START SUBSCRIPTIONS AREA ==> */}
          <div className={`subtitle subtitle-${ReturnTheme()}`}>
            SUBSCRIPTIONS
          </div>
          {/* --- FrontSubscriptions --- */}
          {FrontSubscriptions.map((FrontSub, index) => {
            return (
              <div
                key={index}
                title={FrontSub.name}
                className={content_wrapper}
              >
                <div className="content_logo">
                  <img
                    className={`cha_img cha_img-${ReturnTheme()}`}
                    height="24"
                    width="24"
                    src={FrontSub.img}
                    alt=""
                  />
                </div>
                <div className="content_arte">
                  <div className="content_text">{FrontSub.name}</div>
                </div>
                <div className="sy_logo">
                  <LiveIcon
                    isLive={FrontSub.isLive}
                    notiExist={FrontSub.notiExist}
                    Theme={Theme}
                  />
                </div>
              </div>
            );
          })}

          {/* ---- Subscriptions show true ----*/}
          {SubIsShowMore &&
            Subscriptions.map((FrontSub, index) => {
              return (
                <div
                  key={index}
                  title={FrontSub.name}
                  className={content_wrapper}
                >
                  <div className="content_logo">
                    <img
                      className={`cha_img cha_img-${ReturnTheme()}`}
                      height="24"
                      width="24"
                      src={FrontSub.img}
                      alt=""
                    />
                  </div>
                  <div className="content_arte">
                    <div className="content_text">{FrontSub.name}</div>
                  </div>
                  <div className="sy_logo">
                    <LiveIcon
                      isLive={FrontSub.isLive}
                      notiExist={FrontSub.notiExist}
                      Theme={Theme}
                    />
                  </div>
                </div>
              );
            })}

          <div
            title={`Show ${SubIsShowMore ? "less" : "more"}`}
            onClick={HandleSubscriptionShowMoreOrLess}
            className={content_wrapper}
          >
            <div className="content_logo">
              {IsShowMore ? <UpArrowIcon /> : <DownArrowIcon />}
            </div>
            <div className="content_arte">
              <div className="content_text">
                {`Show ${
                  SubIsShowMore ? "less" : `${Subscriptions.length} more`
                }`}
              </div>
            </div>
          </div>

          {/* <== END SUBSCRIPTIONS AREA ==> */}
          <div className={`${line_guide} line_guide_in`}></div>
          {/* <== START MORE FROM YOUTUBE AREA ==> */}
          <div className={`subtitle subtitle-${ReturnTheme()}`}>
            MORE FROM YOUTUBE
          </div>
          <div title="Gaming" className={content_wrapper}>
            <div className="content_logo">
              <GamingIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Gaming</div>
            </div>
          </div>
          <div title="Live" className={content_wrapper}>
            <div className="content_logo">
              <LiveDefaultIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Live</div>
            </div>
          </div>
          {/* <== END MORE FROM YOUTUBE AREA ==> */}
          <div className={`${line_guide} line_guide_in`}></div>
          <div title="Settings" className={content_wrapper}>
            <div className="content_logo">
              <SettingsIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Settings</div>
            </div>
          </div>
          <div title="Report history" className={content_wrapper}>
            <div className="content_logo">
              <FlagIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Report history</div>
            </div>
          </div>
          <div title="Help" className={content_wrapper}>
            <div className="content_logo">
              <HelpIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Help</div>
            </div>
          </div>
          <div title="Send feedback" className={content_wrapper}>
            <div className="content_logo">
              <FeedIcon />
            </div>
            <div className="content_arte">
              <div className="content_text">Send feedback</div>
            </div>
          </div>
          {/* <== ABOUT AREA ==> */}
          <div className={`${line_guide} line_guide_in`}></div>
          <div className={`aboutext aboutext-${ReturnTheme()}`}>
            <div className="tx">
              Cloning YouTube with pure scss, js and React Framework 2020.
            </div>
            <div className="tx">Author: Larbi Sahli</div>
            <div className="tx">
              Source code:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={`lt lt-${ReturnTheme()}`}
                href="https://github.com/larbisahli"
              >
                YouTube-Clone
              </a>
            </div>
            <div target="_blank" rel="noopener noreferrer" className="tx tx-x">
              GitHub:{" "}
              <a
                className={`lt lt-${ReturnTheme()}`}
                href="https://github.com/larbisahli"
              >
                larbisahli
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Guide;