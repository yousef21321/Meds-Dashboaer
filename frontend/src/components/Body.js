import React from "react";
import "../style/Body.css";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import "./images/pre-1.png";
import myImage4 from "./magic_hand_pills (1).svg";
import myImage5 from "./patient_sitting_with_phone (1)11.svg";
import myImage6 from "./manufacturer_icon.svg";


import Video from "../style/video.mp4";
<video autoPlay loop muted src={Video} type="video/mp4" />;
const Body = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
<br/>
<br/>
<br/>

        <div className="content">
          <section class="home" id="home">
            <div class="content">
              <h1>The best health care team</h1>
              <h3>our heros work 24 hours</h3>
              <a href="#" class="btn">
                work with us
              </a>
            </div>
          </section>
{/* //.......................................................................................................... */}
     
      <div id="container">
          <div className="">
            <div className="undefined ">
              <div className="_3PFI">
                <div className="_2qOx">
                  <div className="">
                    <main className="_3dzY ">
                      
                      <div className="bodyne">
                        <div
                          className="_2I6S _2mN8"
                          style={{
                            backgroundColor: "#ff4500",
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          }}
                        >
                          <div className="_2CbN">
                            <div className="_3q9I" style={{ padding: 0 }}>
                              <div className="_1b5C">
                                Prescription delivery that's fast, easy and
                                secure
                              </div>
                              <div className="kSoG">
                                <span className="_2L0C">
                                  America's largest and fastest prescription
                                  delivery service.
                                </span>
                              </div>
                              <div className="t1vT">
                                <button
                                  type="button"
                                  className="
    
    _1ipg
    
  "
                                >
                                  Sign Up
                                </button>
                              </div>
                            </div>
                            <div className="_3XEH">
                              
      <img className="IziK" src={myImage4} alt="My Image" />
                            </div>
                          </div>
                        </div>
                        <div className="_2gch">
                          <div className="_1zqG ">
                            <div className="_2RtO ">
                             
                             
                              <div className="_2clk"> </div>
                            </div>
                          </div>
                        </div>
                        <div className="_2I6S _2mN8">
                          <div className="_2CbN">
                            <div className="_3q9I" style={{ padding: 0 }}>
                              <div className="_1b5C">How it works</div>
                              <div className="kSoG">
                                Skip the pharmacy line. Get your prescriptions
                                delivered to you in as little as two hours.
                              </div>
                              <div className="_1zqG xWlm">
                                <div className="_2RtO _1RRD">
                                 

                                  <div className="_1za2">
                                    <div className="_27f8 _2a-6">
                                      Click the link
                                    </div>
                                    <div className="_2mCj _2a-6">
                                      Nimble will send you a text message with a
                                      link to order your prescriptions
                                    </div>
                                  </div>
                                </div>
                                <div className="_2RtO _1RRD">
                                  
                                  <div className="_1za2">
                                    <div className="_27f8 _2a-6">
                                      Place your order
                                    </div>
                                    <div className="_2mCj _2a-6">
                                      Purchase your prescriptions using Nimble.
                                    </div>
                                  </div>
                                </div>
                                <div className="_2RtO _1RRD">
                                 
                                  <div className="_1za2">
                                    <div className="_27f8 _2a-6">
                                      Get your prescription delivered
                                    </div>
                                    <div className="_2mCj _2a-6">
                                      Receive your prescriptions when and where
                                      you want them.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                            </div>
                            <div className="_3XEH">
                              
                                    <img  className="IziK" src={myImage5} alt="My Image" />

                            </div>
                          </div>
                        </div>
                        
                                  
                        
                        <div className="AxbY _3_eG">
                          <div
                            className="_2k_k"
                            style={{ backgroundColor: "rgb(255, 240, 240)" }}
                          >
                            <div className="_2sJ7 ">
                             
      <img className="_257s" src={myImage6} alt="My Image" />


                              <div className="_19f2">
                                For pharma manufacturers
                              </div>
                              <div className="_27zt">
                                Reach customers where they are.
                              </div>
                              <button
                                type="button"
                                className="
    _3XfI
    _1ipg
    
  "
                              >
                                Learn more
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                   
                          </div>

                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                          <section class="precautions" id="precautions">
        <h1 class="heading">take precautions against covid-19</h1>

        <div class="column">
          <div class="box-container">
            <h3 class="title">things you should DO</h3>

            <div class="box">
              <div class="info">
                <h3>wash your hand</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  odit quo saepe illum tempora corrupti sint distinctio,
                  perferendis maxime illo!
                </p>
              </div>
            </div>

            <div class="box">
              <div class="info">
                <h3>always wear a mask</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  odit quo saepe illum tempora corrupti sint distinctio,
                  perferendis maxime illo!
                </p>
              </div>
            </div>

            <div class="box">
              <div class="info">
                <h3>stay home during fever</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  odit quo saepe illum tempora corrupti sint distinctio,
                  perferendis maxime illo!
                </p>
              </div>
            </div>
          </div>

          <div class="box-container">
            <h3 class="title">things you should NOT DO</h3>

            <div class="box">
              <div class="info">
                <h3>avoid close contact with animals</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  odit quo saepe illum tempora corrupti sint distinctio,
                  perferendis maxime illo!
                </p>
              </div>
            </div>

            <div class="box">
              <div class="info">
                <h3>avoid close contact with peoples</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  odit quo saepe illum tempora corrupti sint distinctio,
                  perferendis maxime illo!
                </p>
              </div>
            </div>

            <div class="box">
              <div class="info">
                <h3>avoid crowded area</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  odit quo saepe illum tempora corrupti sint distinctio,
                  perferendis maxime illo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>

      </div>

    </>
  );
};
export default Body;
