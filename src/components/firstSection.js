import "./css/firstSection.css";
import React,{Component, useState,useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import Batumi from "./photos&videos/Batumi.mp4"
import {TweenMax} from "gsap"; 
import { Tween } from "gsap/gsap-core";

function FirstSection () {
    let hero=useRef(null);
    let headline=useRef(null);
    let headline_1=useRef(null);
    
    useEffect(()=>{
        TweenMax.fromTo(
            hero,
            1,
            {height:"0%"},
            {height:"100%",ease:"Power3.easeInOut"}
            
        )
        TweenMax.fromTo(
            hero,
            3,
            {width:"80%"},
            {width:"100%",ease:"Power3.easeInOut"}
            
        )
            TweenMax.fromTo(
                headline,
                3,
                {fontSize:"0px",opacity:0},
                {opacity:1, fontSize:"50px",ease:"Power3.easeInOut"}
            )
       
            TweenMax.fromTo(
                headline_1,
                3,
                {fontSize:"0px",opacity:0},
                {opacity:1, fontSize:"50px",ease:"Power3.easeInOut"}
            )
    })
    return(
        <section className="home_body" id="firstSection" >
            <div className="hero" ref={el=>{hero=el}} >
                <video src={Batumi} autoPlay loop muted ></video>
            </div>
            <div className="text_holder" >
                <h1 className="headline_1" ref={el=>{headline_1=el}} >ADVENTURES AWAITS</h1>
                <h1 className="headline" ref={el=>{headline=el}} >
                        Spend summer in <span className="georgia" >Georgia</span>
                </h1>
            </div>
        </section>
    );
}

export default FirstSection