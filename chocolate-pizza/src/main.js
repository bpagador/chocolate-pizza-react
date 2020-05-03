import React, { Component } from 'react'
import print from './labassets/print-icon.png';

export default class main extends Component {
    render() {
        return (
            <>  
        <section id="top">
            <section id="chocolate-pizza"> 
                <h3>Chocolate Pizza</h3> 
                        <h2>posted on {this.props.date}</h2> 
            </section>

            <div id="print-div">
                <img src={print} alt="print"/>
                <h2>print</h2> 
            </div>
        </section>
           </>
        )
    }
}
