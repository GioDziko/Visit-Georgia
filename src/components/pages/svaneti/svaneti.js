import React,{useRef,useEffect} from "react";
import Navbar from "../../navbar";
import "./svaneti.css";
import {TweenMax} from "gsap"; 
import { Tween } from "gsap/gsap-core";
import Footer from "../../footer";
import { Link } from "react-router-dom";


import Mestia from "../../photos&videos/svaneti_1.jpg";
import Svaneti_video from "../../photos&videos/svaneti-video.mp4"
import Museum from "../../photos&videos/museum.jpg"
import Kubdari from "../../photos&videos/kubdari.jpg"
import Ski from "../../photos&videos/ski.jpg"
import Lamaria from "../../photos&videos/lamaria.jpg"
import Shkara from "../../photos&videos/shkara.jpg"
import Shkara_2 from "../../photos&videos/shkara_1.jpg"
function Svaneti (){

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
        <div id="svaneti" >
            <Navbar />

            <div className="img_container"  >
            <video src={Svaneti_video} autoPlay loop muted ref={el=>video=el} ></video>
                </div>
            <div className="svaneti_container" >
                <div className="svaneti_container_1" >
                    <img id="svaneti_img" src={Mestia} ></img>
                    <div className="svaneti_text" >
                        <p>
                        Breathtakingly wild and mysterious, Svaneti is an ancient land locked in the Caucasus, so remote that it was never tamed by any ruler. Uniquely picturesque villages and snow-covered, 4000m-plus peaks rising above flower-strewn alpine meadows provide a superb backdrop to the many walking trails. Svaneti’s emblem is the koshki (defensive stone tower), designed to house villagers at times of invasion and local strife (until recently Svaneti was renowned for its murderous blood feuds). Around 175 koshkebi, most originally built between the 9th and 13th centuries, survive here today.
                        </p>
                    </div>
                    <img id="svaneti_img" src={Shkara_2} ></img>
                    <div className="svaneti_text" >
                        <p>
                        Shkhara is the high point and the eastern anchor of a massif known as the Bezingi (or Bezengi) Wall, a 12-kilometre-long (7.5 mi) ridge. It is a large, steep peak in a heavily glaciated region, and presents serious challenges to mountaineers. Its north face (on the Russian side) is 1,500 metres (4,900 ft) high and contains several classic difficult routes. The significant sub-summit Shkhara West, at 5,068 m (16,627 ft), is a climbing objective in its own right, and a traverse of the entire Bezingi Wall is considered "Europe's longest, most arduous, and most committing expedition".
                        </p>
                    </div>
                </div>

                <div className="svaneti_container_2" >
                    <div className="reason-div" >
                        <div className="reasons" >
                            <h1 id="svaneti_reasons" >Reasons</h1>
                        </div>
                        <h1>
                            why u should visit Svaneti
                        </h1>
                        <hr className="svaneti_hr" />
                    </div>
                    <div className="svaneti_info_container " >
                        <a className="link" href="https://www.lonelyplanet.com/georgia/the-mountains/mestia/attractions/svaneti-history-ethnography-museum/a/poi-sig/502808/359333" target="_blank" >
                            <img  className="img" src={Museum}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p> <span>History and Ethnography </span> Museum </p>
                        </div>
                    </div>


                    <div className="svaneti_info_container " >
                        <a className="link" href="https://en.wikipedia.org/wiki/Ushguli_church_of_the_Mother_of_God" target="_blank">
                            <img  className="img" src={Lamaria}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Lamaria </span> Church</p>
                        </div>
                    </div>

                    <div className="svaneti_info_container " >
                        <a className="link" href="https://en.wikipedia.org/wiki/Shkhara" target="_blank" >
                            <img  className="img" src={Shkara}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Shkhara </span>Trip</p>
                        </div>
                    </div>

                    <div className="svaneti_info_container " >
                        <a className="link" href="https://gemrielia.ge/recipe/843-kubdari-svanuri-delikatesi/" target="_blank" >
                            <img  className="img" src={Kubdari}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Local</span> Cuisine</p>
                        </div>
                    </div>


                    <div className="svaneti_info_container " >
                        <a className="link" href="https://georgiantravelguide.com/ka/satkhilamuro-kurorti-hatsvali" target="_blank" >
                            <img  className="img" src={Ski}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Ski</span> Until April</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Svaneti