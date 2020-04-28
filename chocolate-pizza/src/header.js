import React, { Component } from 'react'
import LogoLink from './header/LogoLink'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <img className="logo-top" src="./lab-assets/logo.png" alt=""/>
                    <p className="logo-text">Delicious</p>
                    <p className="logo-subtext">The best food blog on the web!</p>
                </div>
                <LogoLink />
            </header>
        )
    }
}
