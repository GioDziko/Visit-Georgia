import "./css/secondSection.css";
import React,{Component, Fragment, useState,useRef,useEffect} from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {TweenMax} from "gsap"; 
import { Tween } from "gsap/gsap-core";
import Batumi from "./photos&videos/538101.jpg";
import Signagi from "./photos&videos/signagi_1.jpg";
import Svaneti from "./photos&videos/svaneti.jpg";
import Racha from "./photos&videos/racha.jpg";
import Samegrelo from "./photos&videos/samegrelo.jpg";
import Guria from "./photos&videos/guria.jpg";
function SecondSection (){
    let secondSection=useRef(null);

    useEffect(()=>{
        TweenMax.fromTo(
            secondSection,
            1,
            {x:"-100%",opacity:"0"},
            {x:"0%",opacity:"1",ease:"Power3.easeInOut"}
            
        )
    })

    return(
        <section className="secondSection" id="secondSection" ref={el=>{secondSection=el}} >
            <div className="container">
                <div className="achara info_container " >
                    <Link className="link" to="/achara#achara" >
                        <img  className="img" src={Batumi}></img>
                    </Link>
                    
                    <div className="textHolder" >
                        <p>Follow Colors in Ajara, <span>Georgia</span></p>
                    </div>
                </div>
                <div className="signagi info_container " >
                    
                    <Link className="link" to="/kakheti#kakheti" >
                        <img  className="img" src={Signagi}></img>
                    </Link>
                    <div className="textHolder" >
                    <p>Taste best wine in Kakheti, <span>Georgia</span></p>
                    </div>
                    
                </div>
                <div className="svaneti info_container " >
                    
                    <Link className="link" to="/svaneti#svaneti" >
                        <img  className="img" src={Svaneti}></img>
                    </Link>
                    <div className="textHolder" >
                    <p>Let freedom ring in Svaneti, <span>Georgia</span></p>
                    </div>
                    
                </div>
                <div className="racha info_container " >
                    
                    <Link className="link" to="/racha#racha" >
                        <img  className="img" src={Racha}></img>
                    </Link>
                    <div className="textHolder" >
                    <p>Feel free in Racha, <span>Georgia</span></p>
                    </div>
                    
                </div>
                <div className="guria info_container " >
                    
                    <Link className="link" to="/guria#guria" >
                        <img  className="img" src={Guria}></img>
                    </Link>
                    <div className="textHolder" >
                    <p>Guria - happiness over the Clouds <span>Georgia</span></p>
                    </div>
                    
                </div>
                <div className="samegrelo info_container " >
                    
                    <Link className="link" to="/samegrelo#samegrelo" >
                        <img  className="img" src={Samegrelo}></img>
                    </Link>
                    <div className="textHolder" >
                    <p>Explore wild nature in Samegrelo, <span>Georgia</span></p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default SecondSection