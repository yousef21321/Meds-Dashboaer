import "../style/Footer.css"
import React from "react";
import myImage from './location.d9932e71.svg';
import myImage2 from './pharma.b4bb3c84.png';
import myImage3 from './medicine.cda9bfc6.png';

const Footer = () => {
  return (<>
      <footer className="sc-krVALI kLancU">

  <img src={myImage} alt="My Image" class= "sc-hCcOGj fqkBfZ"  />

      <div className="sc-folSmy eTTURZ">
        <h1 className="sc-bjLpWZ eAwMnq">Contact details</h1>
        <h3 className="sc-fFCXAk cQIxYe">Sunshine hospital</h3>
        <h3 className="sc-fFCXAk cQIxYe">Surat city</h3>
        <h3 className="sc-fFCXAk cQIxYe">395007</h3>
        <h3 className="sc-fFCXAk cQIxYe">Phone number: +91-7428640792</h3>
      </div>
      <img src={myImage2} alt="My Image" class= "sc-hCcOGj fqkBfZ"  />

      <div className="sc-folSmy eTTURZ">
        <h1 className="sc-bjLpWZ eAwMnq">Services</h1>
        <h3 className="sc-fFCXAk cQIxYe">Buy medicines</h3>
        <h3 className="sc-fFCXAk cQIxYe">Sell medicines</h3>
        <h3 className="sc-fFCXAk cQIxYe">Generic medicine distribution</h3>
        <h3 className="sc-fFCXAk cQIxYe">Others</h3>
      </div>
      <img src={myImage3} alt="My Image" class= "sc-hCcOGj fqkBfZ"  />

  </footer>
      </>
  );
} 
  export default Footer;
