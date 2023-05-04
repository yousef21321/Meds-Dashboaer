import React from "react";
import Video from "./video.mp4";
import Header2 from "./Header2";
import myImage from "./lo.png";
import dashboard from "./svg-6.svg";
import Sidebar from "./sidebar";
const Dashboard = () => {
  return (
    <>
      <Header2 />

      <div class="container-fluid documentation">
        <div className="row">
          <Sidebar />

          <div className="col-md-9 col-xl-10 main-panel">
            <div className="main-panel-wrapper">
              <div className="video-background2">
                <video autoPlay loop muted>
                  <source src={Video} type="video/mp4" />
                </video>

                <div class="col-md-9 col-xl-10 main-panel">
                  <div class="main-panel-wrapper">
                    <h2 class="mt-2 text-center font-weight-light text-muted text-uppercase mb-4">
                      Documentation
                    </h2>
                    <div class="card grid-margin">
                      <div class="card-body">
                        <h3 id="introduction" class="mb-4">
                          Introduction
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card grid-margin">
                  <div className="card-body">
                    <div
                      className={
                        homeObjOne.lightBg ? "section" : "section darkBg"
                      }
                    >
                      <div className="section-inner">
                        <div className="section-header">
                          {homeObjOne.topLine}
                        </div>
                        <h1
                          className={
                            homeObjOne.lightText
                              ? "section-header"
                              : "section-header dark"
                          }
                        >
                          {homeObjOne.headline}
                        </h1>
                        <p
                          className={
                            homeObjOne.lightText
                              ? "section-desc"
                              : "section-desc dark"
                          }
                        >
                          {homeObjOne.description}
                        </p>
                        <img
                          className="nnn"
                          src={homeObjOne.img}
                          alt={homeObjOne.alt}
                        />

                        <a href="#" className="section-btn">
                          {homeObjOne.buttonLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Manage records with ease",
  headline: "Unlimited records management with zero extra fees",
  description:
    "Get access to our exclusive web app that allows you to manage your firms business whitout getting charged any additional fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: dashboard,
  alt: "car",
  dark: true,
  primary: true,
  darkText: false,
};

export default Dashboard;
