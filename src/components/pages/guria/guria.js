import React,{useRef,useEffect} from "react";
import Navbar from "../../navbar";
import "./guria.css";
import {TweenMax} from "gsap"; 
import { Tween } from "gsap/gsap-core";
import Footer from "../../footer";
import { Link } from "react-router-dom";


import Bakhmaro from "../../photos&videos/bakhmaro.jpg";
import Guria_video from "../../photos&videos/guria_video.mp4"
import Gomismta from "../../photos&videos/gomismta.jpg"
import Tsitsinatela from "../../photos&videos/tsitsinatela.jpg"
import Dendrologiuri from "../../photos&videos/dendrologiuri.jpg"

function Guria (){

    let video=useRef(null);

    useEffect(()=>{
        TweenMax.fromTo(
            video,
            2,
            {x:"-100%"},
            {x:"0%",ease:"Power3.easeInOut"}
            
        )
    })


    return(
        <div id="guria" >
            <Navbar />

            <div className="img_container"  >
            <video src={Guria_video} autoPlay loop muted ref={el=>video=el} ></video>
                </div>
            <div className="guria_container" >
                <div className="guria_container_1" >
                    <img id="guria_img" src={Gomismta} ></img>
                    <div className="guria_text" >
                        <p>
                        It is a beautiful mountainous resort located at 2,000m altitude. Besides its heavenly landscape, beautiful pine forests, alpine meadows and amazing views the area is notable for its small cute cottages that are scattered throughout the green valleys with a river flowing through them. The resort offers its visitors the mixture of sea and mountain air that is beneficial for people with respiratory problems. Bakhmaro in Guria region is the highest alpine climatic resort in Georgia. The average annual relative humidity is 73 percent .The surrounding mountains are a source of Bakhmaro bottled spring water, which is similar to Borjomi water in its chemical composition. Every year, on August 19, dozens of riders compete in a horse race in Bakhmaro as part of the celebration of the Transfiguration of Jesus. How to get there: Bakhmaro is located in the district of Chokhatauri on the Meskheti mountain range in the Guria region. Distance from Tbilisi is around 360 km – a journey time of around four and half hours. This is the highest alpine climate resort in Georgia.
                        </p>
                    </div>
                </div>

                <div className="guria_container_2" >
                    <div className="reason-div" >
                        <div className="reasons" >
                            <h1 id="guria_reasons" >Reasons</h1>
                        </div>
                        <h1>
                            why u should visit Guria
                        </h1>
                        <hr className="guria_hr" />
                    </div>
                    <div className="guria_info_container " >
                        <a className="link" href="https://georgiantravelguide.com/en/bakhmaro-happiness-over-the-clouds" target="_blank" >
                            <img  className="img" src={Bakhmaro}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p> <span>Bakhmaro</span> curort </p>
                        </div>
                    </div>


                    <div className="guria_info_container " >
                        <a className="link" href="https://georgiantravelguide.com/en/tsitsinatela" target="_blank">
                            <img  className="img" src={Tsitsinatela}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Tsitsinatela</span> park</p>
                        </div>
                    </div>

                    <div className="guria_info_container " >
                        <a className="link" href="https://georgiantravelguide.com/en/shekvetili-dendrological-park" target="_blank" >
                            <img  className="img" src={Dendrologiuri}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Dendrological</span> Park</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Guria