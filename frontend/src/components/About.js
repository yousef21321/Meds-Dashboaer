import React from 'react';
import "../Router.css";
import Header from '../shared/Header';
import dashboard from "./images2/svg-6.svg";
import "../style/About.css";
const About = () => {
 
  const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lighttextDesc: false,
    topLine: 'Manage records with ease',
    headline: 'Unlimited records management with zero extra fees',
    description: 'Get access to our exclusive web app that allows you to manage your firms business whitout getting charged any additional fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: dashboard,
    alt: 'car',
    dark: true,
    primary: true,
    darkText: false
  };

  return (<>
    <Header/>

    <div className={homeObjOne.lightBg ? 'section' : 'section darkBg'}>
    <div className="section-inner">
      <div className="section-header">{homeObjOne.topLine}</div>
      <h1 className={homeObjOne.lightText ? 'section-header' : 'section-header dark'}>{homeObjOne.headline}</h1>
      <p className={homeObjOne.lightText ? 'section-desc' : 'section-desc dark'}>{homeObjOne.description}</p>
      <img className="nnn" src={homeObjOne.img} alt={homeObjOne.alt} />

      <a href="#" className="section-btn">{homeObjOne.buttonLabel}</a>
    </div>
  </div>
  </>
  );
};







export default About;
