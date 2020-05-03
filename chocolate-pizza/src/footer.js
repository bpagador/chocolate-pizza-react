import React, { Component } from 'react'
import vanpic from './labassets/van-pic.png';
import smallLogo from './labassets/small-logo.png';

export default class footer extends Component {
    render() {
        return (
            <>
                <line class="thick-lines">bild the line</line>

                <img src={vanpic} id ="vanessa" alt="vanpic" />

            <button class="share">share</button>
            <line>bild the line</line>
            <section class="author">

            <asside id="baseline">
                <img src={smallLogo} id="byline" alt="logo" />
            </asside>
        
                    <h3 className="author-name">{this.props.author}</h3>
            <p>Food enthusiast, photography fan. 
        Add a pinch of raw foodism and that's pretty much who I am.</p>
        </section>
<button class="share">share recipe</button>

           </>
        )
    }
}
