/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './app.css';
import { Navigation } from './Navigation';
import { Start } from './Start';
import { Form } from './Form';
import { ReactComponent as Zeppliner } from '../assets/zeppeliner.svg';
import { ReactComponent as Illustration1 } from '../assets/illustration1.svg';
import { ReactComponent as Illustration2 } from '../assets/illustration2.svg';
import { ReactComponent as Prize } from '../assets/prize.svg';

export const App: React.FC = () => {
  return (
    <div className="App">

      {/* NAVIGATION Bar */}

      <Navigation />

      {/* HEADER CONTENT*/}

      <a href="/#" id="hyperlink-header" />

      <div className="container header-container">
        <div className="content-box-header">
          <Zeppliner className="zeppeliner" />
          <h1 className="header-main text-white">Digital Transformation</h1>
          <ul className="bullet-list text-white">
            <li className="bullet-point">Rådgivning</li>
            <li className="bullet-point">Implementering</li>
            <li className="bullet-point">Resultater</li>
          </ul>
          <p className="paragraf-main text-white">Hvordan bliver din virksomhed en digital vinder i fremtiden?
            Hvilke tiltag skal der til strategisk og taktisk for at dreje forretningen i den rigtig retning? Hvilke elementer
            indeholder en succesfuld digital transformation? Vu har svarene. Pentia kan hjælpe dig på hele rejsen fra strategisk
            rådgivning til implementering.</p>
        </div>
        <div className="prevent-overlap"></div>
        <Start />
      </div>

      <a/>

      {/* BODY CONTENT */}

      <a href="/#" id="hyperlink-body" />

      <div className="container body-container">
        <h2 className="header-second text-dark">Vi kan hjælpe dig med <br /> digital transformation på to fronter</h2>
        <div className="content-box-body">

          <section className="body-section">
            <div className="body-section-container">
              <Illustration1 className="illustration illustration-1" />
              <h3 className="header-third text-dark">Strategisk rådgivning om <br /> digital Transformation</h3>
              <p className="paragraf-second text-dark">Udnytter din virksomhed sit digitale potentiale?
                Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan?
              </p>
            </div>
          </section>
          <section className="body-section">
            <div className="body-section-container">
              <Illustration2 className="illustration illustration-2" />
              <h3 className="header-third text-dark">Eksekvering af <br /> digital Transformation</h3>
              <p className="paragraf-second text-dark">
                I ved, hvad I vil, men I har brug for hjælp til at rulle strategien ud i forhold til
                organisatinoen og det digitale fundament bl.a. Sitecore.
                Det handler om mennekser og resultater.
              </p>
            </div>
          </section>
        </div>
      </div>

      <a/>
      {/* FOOTER CONTENT*/}
      <a href="/#" id="hyperlink-footer" />

      <div className="container footer-container">
        <h2 className="header-second text-white">Få 10 gode råd om <br /> digital transformation</h2>
        <p className="header-third text-white">Ja tak, jeg vil gerne høre mere om digital Transformation</p>
        <Form />
        <div className="prevent-overlap"></div>
        <div className="svg-prize-container">
          <Prize className="prize" />
          <p className="paragraf-second text-white">
            Pentia vinder pris for digital innovation 2017
          </p>
        </div>
      </div>
      <a/>

      
    </div>
  );
}

