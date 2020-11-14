import React,{useRef,useEffect} from "react";
import Navbar from "../../navbar";
import "./samegrelo.css";
import {TweenMax} from "gsap"; 
import { Tween } from "gsap/gsap-core";
import Footer from "../../footer";
import { Link } from "react-router-dom";


import Foti from "../../photos&videos/foti.jpg";
import Samegrelo_video from "../../photos&videos/samegrelo_video.mp4"
import Elarji from "../../photos&videos/elarji.jpg"
import Dadianebi from "../../photos&videos/dadianebi.jpg"
import Kanioni from "../../photos&videos/kanioni.jpg"
function Samegrelo (){

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
        <div id="samegrelo" >
            <Navbar />

            <div className="img_container"  >
            <video src={Samegrelo_video} autoPlay loop muted ref={el=>video=el} ></video>
                </div>
            <div className="samegrelo_container" >
                <div className="samegrelo_container_1" >
                    <img id="samegrelo_img" src={Foti} ></img>
                    <div className="samegrelo_text" >
                        <p>
                        The recorded history of Poti and its environments spans over 26 centuries. In Classical antiquity and the early Middle Ages, the area was occupied by the Greek polis of Phasis which was established by the colonists from Miletus led by one Themistagoras at the very end of the 7th, and probably at the beginning of the 6th century BC. The famed Greek semi-mythological voyage of Jason and the Argonauts in search of the Golden Fleece would have entered Georgia at this port and traveled up the river to what is today Kutaisi.
                        </p>
                    </div>
                </div>

                <div className="samegrelo_container_2" >
                    <div className="reason-div" >
                        <div className="reasons" >
                            <h1 id="samegrelo_reasons" >Reasons</h1>
                        </div>
                        <h1>
                            why u should visit Samegrelo
                        </h1>
                        <hr className="samegrelo_hr" />
                    </div>
                    <div className="samegrelo_info_container " >
                        <a className="link" href="https://georgiantravelguide.com/ka/shaoris-tsqalsatsavi" target="_blank" >
                            <img  className="img" src={Dadianebi}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p> <span>Dadiani</span> Palace </p>
                        </div>
                    </div>


                    <div className="samegrelo_info_container " >
                        <a className="link" href="https://ka.wikipedia.org/wiki/%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D%E1%83%A0%E1%83%AC%E1%83%9B%E1%83%98%E1%83%9C%E1%83%93%E1%83%98%E1%83%A1_%E1%83%A2%E1%83%90%E1%83%AB%E1%83%90%E1%83%A0%E1%83%98" target="_blank">
                            <img  className="img" src={Kanioni}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Martvili</span> canyon</p>
                        </div>
                    </div>

                    <div className="samegrelo_info_container " >
                        <a className="link" href="https://georgiastartshere.com/georgian-food-cuisine/" target="_blank" >
                            <img  className="img" src={Elarji}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Unique</span> Dishes</p>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Samegrelo