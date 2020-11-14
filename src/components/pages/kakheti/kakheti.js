import React,{useRef,useEffect} from "react";
import Navbar from "../../navbar";
import "./kakheti.css";
import {TweenMax} from "gsap"; 
import { Tween } from "gsap/gsap-core";
import Footer from "../../footer";
import { Link } from "react-router-dom";


import Signagi from "../../photos&videos/signagi.jpg";
import Kakheti_video from "../../photos&videos/kakheti_video.mp4"
import Wine from "../../photos&videos/wine.jpg"
import Gelati from "../../photos&videos/gelati.jpg"
import Mwvadi from "../../photos&videos/mwvadi.jpg"
function Kakheti (){

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
        <div id="kakheti" >
            <Navbar />

            <div className="img_container"  >
            <video src={Kakheti_video} autoPlay loop muted ref={el=>video=el} ></video>
                </div>
            <div className="kakheti_container" >
                <div className="kakheti_container_1" >
                    <img id="kakheti_img" src={Signagi} ></img>
                    <div className="kakheti_text" >
                        <p>
                        Kakheti is the largest region of Georgia. It is one of the diverse regions, but it is also known to everyone, that Kakheti is the land of Grapes. The fifth part of vineyards in the nation belong to Kakheti, while grapes grown here amount to the half of the grape harvest in the country. But, of course, this is not everything. As soon as you get close to Kakheti, on the way the smell of hot, freshly baked traditional Shoti (local special bread, kind of long pointed loaf) will hit you. You will have an itch of eating it immediately, with local amazing cheese and butter. Oh, and most delicious, Churchxela (known as Georgian Snikersi). Once you tasta KaKhetian cousin, you will hardly ever wish anything better.  
                        </p>
                    </div>
                </div>

                <div className="kakheti_container_2" >
                    <div className="reason-div" >
                        <div className="reasons" >
                            <h1 id="kakheti_reasons" >Reasons</h1>
                        </div>
                        <h1>
                            why u should visit Kakheti
                        </h1>
                        <hr className="kakheti_hr" />
                    </div>
                    <div className="kakheti_info_container " >
                        <a className="link" href="https://en.wikipedia.org/wiki/Georgian_wine" target="_blank" >
                            <img  className="img" src={Wine}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p> <span>Georgian</span> Wine </p>
                        </div>
                    </div>


                    <div className="kakheti_info_container " >
                        <a className="link" href="https://en.wikipedia.org/wiki/Gelati_Monastery" target="_blank">
                            <img  className="img" src={Gelati}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Historical</span> Monuments</p>
                        </div>
                    </div>

                    <div className="kakheti_info_container " >
                        <a className="link" href="https://georgiastartshere.com/georgian-food-cuisine/" target="_blank" >
                            <img  className="img" src={Mwvadi}></img>
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

export default Kakheti