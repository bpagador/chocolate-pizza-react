import React, { Component } from 'react'
import choco from './labassets/choco-pizza.png'
import list from './labassets/list-bg.png'

export default class artical extends Component {
    render() {
        return (
            <>
                  
            <box className="recipe-box">
            <img src= {choco} id="main-image" alt="choco-pizza"/>
            
                <p>Add Brown sugar and stir to dissolved. Have all of the figs toss in a 
                saucepan with water and lemon juice. Cook over medium heat, stirring  frequently, until you have chunky dash mixture. 
                Add salt with one or two stirs, set aside and let cool completely.</p> 

                <p>Ice cream: In a small pot over medium heat, 
                combine milk, and granulated sugar until sugar is completely 
                dissolved and the milk is just barely lukewarm. Whisk in the yolks. 
                Set mixture in the fridge and wait until the fig mixture is cooled. </p>
                
                <p>Using an ice cream machine, pour liquids into the frozen basin 
                    and process according to manufacturer's instructions, i.e., let's 
                    spin and thicken for 20 minutes before adding mascarpone, fig jam 
                    mixture, and the nuts. Continue to process  =/- 10 minutes. Poor 
                    semi-frozen mixture into a Pyrex dish or glass Tupperware. Freeze 
                    for at least two hours before serving. 
                </p>
            </box>
        <box>
                    <img src={list} className="recipe-background" />
            <ul>
                <li>1 1/2 cups milk</li>
                <li>1/2 cup mascarpone</li>
                <li>1/2 tsp pink salt</li>
                <li>1lb Black Mission Figs</li>
                <li>1/2 cup brown suger</li>
                <li>2-4 tbsp water</li>
                <li>1/12 cuvps heavy cream</li>
                <li> 4/3 ganulated sugar</li>
                <li>2 egg yolks</li>
                <li>1 lemon, juced</li>
                <li>2 tbsp butter</li>
                <li>1 cup huney roasted pecans, roughly chopped</li>
            </ul>
        </box>
                
        </>
        )
    }
}
