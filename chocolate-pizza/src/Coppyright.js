import React, { Component } from 'react'
import smalllogo from './labassets/small-logo.png';


export default class Coppyright extends Component {
    render() {
        return (
            <>
            <line className="baseline">
            <div className="copy">
                <img src={smalllogo} className="byline" alt="small logo" />
                <h6>delicious &#169; {this.props.copydate} &middot; All Rigths Reserved. </h6>
                        <h6>proudly published with Ghost.</h6>
                </div>
                </line>
            

            </>
        )
    }
}
