import React from "react";

import logo from "../assets/img/MainLogo.png";

export default function Opening(props) {
  return (
    <div className="Container opening-page">
      {/* <img className="BackgroundImage" src={ bgImg }></img> */}
      <div className="bg-video-container">
        <div className="overlay"></div>
        <iframe src="https://www.youtube.com/embed/WEIZdab6ns8?loop=1&controls=0&autoplay=1&rel=0&disablekb=1&fs=0&iv_load_policy=3&playlist=WEIZdab6ns8" title="UTADA PV" frameBorder="0" allow="autoplay; encrypted-media; gyroscope;"></iframe>
      </div>
      <img className="logo" src={ logo }></img>
      <div className="opening-to-main-button" onClick={() => props.setCurrPage("Main")}>
        {/* <img src={arrow} alt="To Main Page" className="arrow" /> */}
        <svg t="1620889415952" className="arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2496" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M512 48c256.26 0 464 207.74 464 464S768.26 976 512 976 48 768.26 48 512 255.74 48 512 48z m0 64c-220.914 0-400 179.086-400 400s179.086 400 400 400 400-179.086 400-400-179.086-400-400-400z m64.87 203.641l0.378 0.36 0.377 0.372L750.29 489.038a31.921 31.921 0 0 1 6.656 9.703 31.826 31.826 0 0 1 2.62 10.422l0.04 0.568 0.037 0.8 0.02 0.633v0.501c0 0.425-0.009 0.848-0.025 1.27l-0.033 0.662-0.04 0.574a31.847 31.847 0 0 1-8.254 19.054l-0.25 0.27-0.4 0.42-0.37 0.378-172.666 172.665c-12.497 12.496-32.758 12.496-45.255 0-12.372-12.372-12.495-32.354-0.37-44.878l0.37-0.377 118.037-118.038H296c-17.673 0-32-14.327-32-32 0-17.496 14.042-31.713 31.47-31.996l0.53-0.004h354.408L532.37 361.627c-12.497-12.496-12.497-32.758 0-45.254 12.248-12.249 31.955-12.492 44.5-0.732z" p-id="2497"></path></svg>
      </div>
    </div>
  );
}
