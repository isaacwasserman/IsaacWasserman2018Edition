import React, { Component } from 'react'
import { Link } from "gatsby"
import styles from '../resources/css/header.css';

const Header = () => (
  <header>
    <Link to="/"><div id="title">Isaac Wasserman</div></Link>
    <nav id="nav">
      <span><Link to="/technology">Technologist</Link>,</span>&nbsp;
      <span><Link to="/photography">Photographer</Link>,</span>&nbsp;
      <span><Link to="/cooking">Chef</Link>.</span>
    </nav>
  </header>
)

export default Header;
