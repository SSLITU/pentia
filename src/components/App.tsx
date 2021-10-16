import React from 'react';

import './app.css';
import { Navigation } from './Navigation';
import { Start } from './Start';
import { ReactComponent as Zeppliner } from '../assets/zeppeliner.svg';
import { ReactComponent as Illustration1 } from '../assets/illustration1.svg';
import { ReactComponent as Illustration2 } from '../assets/illustration2.svg';
import { ReactComponent as Prize } from '../assets/prize.svg';

export const App = () => {
  return (
    <div className="App">
      {/* make into a header?? */}
      <div className="container header-container">
        <Navigation />

        {/* HEADER PART */}
        <div className="content-box-header">
          <Zeppliner className="zeppeliner" />
          <h1 className="header-main">Digital Transformation</h1>
          <ul className="bullet-list">
            <li className="bullet-point">Rådgivning</li>
            <li className="bullet-point">Implementering</li>
            <li className="bullet-point">Resultater</li>
          </ul>
          <p className="paragraf-main">Hvordan bliver din virksomhed en digital vinder i fremtiden?
            Hvilke tiltag skal der til strategisk og taktisk for at dreje forretningen i den rigtig retning? Hvilke elementer
            indeholder en succesfuld digital transformation? Vu har svarene. Pentia kan hjælpe dig på hele rejsen fra strategisk
            rådgivning til implementering.</p>

        </div>

        <div className="prevent-overlap"></div>
        {/* The start navigation Helt klart en anden folder */}
        {/*
        <div className="start-navigation-container">
          <a href="/" className="start-navigation">
            Start din rejse her
            <span className="dots dot-1">.</span>
            <span className="dots dot-2">.</span>
            <span className="dots dit-3">.</span>
          </a>
        </div> */}

        <Start />

      </div>

      {/* BODY PART */}

      <div className="container body-container">
        <h2 className="header-second">Vi kan hjælpe dig med <br/> digital transformation på to fronter</h2>

        <div className="content-box-body">
          {/* Måske bare et loop over sanity ting */}
          {/* Så man ikke behøver at gå ind i koden hver gang man skal ændre noget! */}

          <section className="body-section">
            <div className="body-section-container">
            <Illustration1 className="illustration illustration-1" />
              <h3 className="header-third">Strategisk rådgivning om <br /> digital Transformation</h3>
              <p className="paragraf-second">Udnytter din virksomhed sit digitale potentiale?
                Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan?
              </p>
            </div>
          </section>

          <section className="body-section">
            <div className="body-section-container">
              <Illustration2 className="illustration illustration-2" />
              <h3 className="header-third">Eksekvering af <br /> digital Transformation</h3>
              <p className="paragraf-second">
                I ved, hvad I vil, men I har brug for hjælp til at rulle strategien ud i forhold til
                organisatinoen og det digitale fundament bl.a. Sitecore.
                Det handler om mennekser og resultater.
              </p>
            </div>
          </section>

        </div>
      </div>



      {/* FOOTER PART */}
      {/* Contact Form, probably the most challenging for me! */}

      <div className="container footer-container">
        <div className="content-box">
          <h2 className="header-second">Få 10 gode råd om digital transformation</h2>
          <p>Ja tak, jeg vil gerne høre mere om digital Transformation</p>
        </div>

        <form action="/" method="post" className="m-t-4">
          <div className="field">
            <label className="label" for-tag="navn">Navn</label>
            <div className="control">
              <input className="input" type="text" id="navn" name="navn" required />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <label className="label" for-tag="mobil">Mobil</label>
                <div className="control">
                  <input className="input" type="tel" id="mobil" name="mobil" required pattern="^[0-9 ]*$" />
                </div>
              </div>
              <div className="field">
                <label className="label" for-tag="email">E-mail</label>
                <div className="control">
                  <input className="input" type="email" id="email" name="email" required />
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <label className="label" for-tag="postnr">Postnr</label>
                <div className="control">
                  <input className="input" type="number" id="postnr" name="postnr" pattern="[0-9]{3,4}" required />
                </div>
              </div>
              <div className="field">
                <label className="label" for-tag="by">By</label>
                <div className="control">
                  <input className="input" type="text" id="by" name="by" required />
                </div>
              </div>
            </div>
          </div>

          <div className="buttons is-centered m-t-2">
            <input className="button is-large is-danger is-inverted" type="submit" value="Ring mig op" />
          </div>
        </form>

        {/* POKAL section */}

        <div className="svg-prize-container">
          <Prize className="prize"/>
        </div>

        {/* Jeg kan nok godt låne lidt fra logo style */}
        <p className="paragraf-second">
          Pentia vinder pris for digital innovation 2017
        </p>

      </div>

    </div>
  );
}

