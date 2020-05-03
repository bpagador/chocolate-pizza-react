import React, { Component } from 'react';
import './App.css';
import fbicon from './labassets/fb-icon.png';
import gp from './labassets/gp-icon.png';
import flic from './labassets/flic-icon.png';
import insta from './labassets/insta-icon.png';
import pint from './labassets/pint-icon.png';
import rss from './labassets/rss-icon.png';
import mail from './labassets/mail-icon.png';
import logo from './labassets/logo.png';

//import logo  from '/logo.png';


export default class Header extends Component {
    render() {
        return (
        <>
            <aside className="top-side-logo">
                <img src={fbicon} alt="Facebook" />
                <img src={gp} alt="google Plus"/>
                <img src={insta} alt="Instagram"/>
                <img src={flic} alt="flicker"/>
                <img src={pint} alt="pintrist"/>
                <img src={rss} alt="rss"/>
                <img src={mail} alt="mail"/>
            </aside>   
            <div className="logo">
                <img src={logo} alt="logo" /> 
                    <div className="logo-text">
                        <h1>Delicious</h1> 
                        <h2>the best food blog on the web.</h2>
                    </div>
                </div>
        <hr></hr>
        </>

        )
    }
}
