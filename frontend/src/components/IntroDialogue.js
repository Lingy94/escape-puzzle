import React, { Component } from 'react';
import '../css/IntroDialogue.css';

const text = "How did I get here......... I gotta get outta here, fast..."

class IntroDialogue extends Component {

    typeText = () => {
        const dialogue = document.querySelector('.dialogue');

        setTimeout(() => {
            text.split('').map((char, index) => {
                setTimeout(() => {
                    dialogue.innerHTML += char
                }, index * 75)
            })
        }, 5000)
        
    }

    fadeIn = () => {
        
        const container = document.querySelector('.intro-container');
        const textWindow = document.querySelector('.intro-dialogue-container');
        container.classList.add('fadeIn')
        textWindow.classList.add('fadeInText')
    }

    // fadeIn_loop = (a) => {
    // if (el.style.opacity > 0.01) {
    //     el.style.opacity = el.style.opacity - a;
    //     setTimeout("FadeIn(" + el + ")", 16); //about 1/60 a second
    // } else {
    //     el.style.opacity = 0;
    // }
    // }

    

    componentDidMount() {
        this.fadeIn()
        this.typeText()
    }

    render() {
        return (
            <div className="intro-container">
                <div className="intro-dialogue-container" onClick={this.props.hideDialogue}>
                    <p className="dialogue"></p>
                </div>


            </div>
        )
    }
}

export default IntroDialogue