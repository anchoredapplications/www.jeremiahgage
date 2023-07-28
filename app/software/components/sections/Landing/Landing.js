"use client"
import { useEffect } from 'react'
import styles from './Landing.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Skill from '../Skills/Skill';

function Landing() {
    const maxTimes = 2;
    var blink = false;
    // array with texts to type in typewriter
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        blink = !blink;
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            if (i>=maxTimes) {
                this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
                return
            };
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'|</span>';

        var that = this;
        var delta = 200 - Math.random() * 50;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        
        setTimeout(function() {
            that.tick();
        }, delta);
    };

    useEffect(() => {
        var elements = if (document) document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

    }, [])

    return (
        <div className={styles.landing}>
            <div>
                <div className={styles.heading}>
                    <h1 className={styles.h1}>Jeremiah</h1>
                    <h1 className={styles.h1}>Gage</h1>
                    <br></br>
                    <hr></hr>
                    <h2 className={`${styles.h1} typewrite`} href="" data-period="2000" data-type='[ "I am a human.", "I am a creator.", "I am a software engineer."]'>
                        <span className="wrap"></span>
                    </h2>
                </div>
            </div>
            <div className={styles.seeAlso}>
                <Skill link={process.env.NEXT_PUBLIC_LINKED_IN_URL}>
                    <FontAwesomeIcon className={styles.icon} prefix={'fal'} size={'4x'} icon={faLinkedin} />
                </Skill>
                <Skill link={process.env.NEXT_PUBLIC_RESUME_URL} >
                    <FontAwesomeIcon className={styles.icon} prefix={'fal'} size={'4x'} icon={faFilePdf} />
                </Skill>
            </div>
        </div>
    );
}


export default Landing;
