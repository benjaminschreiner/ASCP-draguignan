import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const Entete = (props) => (
  <header>
    <nav className="nav-extended">
      <div className="nav-wrapper">
        <img src="images/logoAssos.png" alt="Catégorie voyage" className="ico_categorie" />
        <h1>ASCP-Draguignan</h1>
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="badges.html">Inscription</a></li>
          <li><a href="collapsible.html">Connexion</a></li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><a href="badges.html">Inscription</a></li>
          <li><a href="collapsible.html">Connexion</a></li>
        </ul>
      </div>
    {/* Lien du Router pour le menu */}
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab"><Link to="/">Accueil</Link></li>
          <li className="tab"><Link to="/Prestation">Prestation</Link></li>
          <li className="tab"><Link to="/media">Photos/Vidéos</Link></li>
          <li className="tab"><Link to="/Forum">Forum</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Entete;
