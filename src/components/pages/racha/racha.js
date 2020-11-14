import React,{useRef,useEffect} from "react";
import Navbar from "../../navbar";
import "./racha.css";
import {TweenMax} from "gsap"; 
import { Tween } from "gsap/gsap-core";
import Footer from "../../footer";
import { Link } from "react-router-dom";


import Shovi from "../../photos&videos/shovi.jpg";
import Racha_video from "../../photos&videos/racha_video.mp4"
import Lobiani from "../../photos&videos/lobiani.jpg"
import Nikorwminda from "../../photos&videos/nikorwminda.jpg"
import Shaori from "../../photos&videos/shaori.jpg"
function Racha (){

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
        <div id="racha" >
            <Navbar />

            <div className="img_container"  >
            <video src={Racha_video} autoPlay loop muted ref={el=>video=el} ></video>
                </div>
            <div className="Racha_container" >
                <div className="Racha_container_1" >
                    <img id="Racha_img" src={Shovi} ></img>
                    <div className="Racha_text" >
                        <p>
                        Racha (also Račha, Georgian: რაჭა, Račʼa) is a highland area in western Georgia, located in the upper Rioni river valley and hemmed in by the Greater Caucasus mountains. Under Georgia's current subdivision, Racha is included in the Racha-Lechkhumi and Kvemo Svaneti region (mkhare) as the municipalities of Oni and Ambrolauri.
                        Racha occupies 2,854 km2 in the north-eastern corner of western Georgia. Spurs of the Greater Caucasus crest separates Racha from the Georgian historical regions of Svaneti and Lechkhumi on the north-west and from Imereti on the south, while the main Caucasus ridge forms a boundary with Russia’s North Ossetia. On the east, Racha is bordered by breakaway South Ossetia, officially part of Georgia's Shida Kartli region.  
                        </p>
                    </div>
                </div>

                <div className="Racha_container_2" >
                    <div className="reason-div" >
                        <div className="reasons" >
                            <h1 id="racha_reasons" >Reasons</h1>
                        </div>
                        <h1>
                            why u should visit Racha
                        </h1>
                        <hr className="racha_hr" />
                    </div>
                    <div className="Racha_info_container " >
                        <a className="link" href="https://georgiantravelguide.com/ka/shaoris-tsqalsatsavi" target="_blank" >
                            <img  className="img" src={Shaori}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p> <span>Shaori</span> Lake </p>
                        </div>
                    </div>


                    <div className="Racha_info_container " >
                        <a className="link" href="https://ka.wikipedia.org/wiki/%E1%83%9C%E1%83%98%E1%83%99%E1%83%9D%E1%83%A0%E1%83%AC%E1%83%9B%E1%83%98%E1%83%9C%E1%83%93%E1%83%98%E1%83%A1_%E1%83%A2%E1%83%90%E1%83%AB%E1%83%90%E1%83%A0%E1%83%98" target="_blank">
                            <img  className="img" src={Nikorwminda}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Nikorwminda</span> church</p>
                        </div>
                    </div>

                    <div className="Racha_info_container " >
                        <a className="link" href="https://georgiastartshere.com/georgian-food-cuisine/" target="_blank" >
                            <img  className="img" src={Lobiani}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Georgian</span> Cuisine</p>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Racha