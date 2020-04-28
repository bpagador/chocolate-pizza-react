import React, { Component } from 'react'
import LogoTop from './header/LogoTop.js'
import LogoLink from './header/LogoLink'

export default class header extends Component {
    render() {
        return (
            <div>
                the hader
                <LogoTop />
                <LogoLink />
            </div>
        )
    }
}
