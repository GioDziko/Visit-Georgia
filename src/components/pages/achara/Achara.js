import React,{useRef,useEffect} from "react";
import Navbar from "../../navbar";
import "./Achara.css"
import Batumi from "../../photos&videos/batumi.jpg";
import Batumi_video from "../../photos&videos/batumi_video.mp4"
import Food from "../../photos&videos/food.jpeg"
import Dolphinarium from "../../photos&videos/dolphinarium.jpg"
import ProtectedAreas from "../../photos&videos/protectedAreas.jpg"
import { Link } from "react-router-dom";
import Footer from "../../footer";

import {TweenMax} from "gsap"; 
import { Tween } from "gsap/gsap-core";

function Achara (){
    let image=useRef(null);

    useEffect(()=>{
        TweenMax.fromTo(
            image,
            2,
            {x:"-100%"},
            {x:"0%",ease:"Power3.easeInOut"}
            
        )
    })

    return(
        <div id="achara" >
            <Navbar />

            <div className="img_container" ref={el=>{image=el}} >
            <video src={Batumi_video} autoPlay loop muted ></video>
                </div>
            <div className="achara_container" >
                <div className="achara_container_1" >
                    <img id="batumi_img" src={Batumi} ></img>
                    <div className="achara_text" >
                        <p>
                        Batumi Boulevard is one of the main attractions for the town’s visitors. The wide boulevard follows the seaside and is full of beach bars, café-lounges, restaurants, amusement rides for children and various colorful and dancing fountains. In addition to unique vegetation, you will find in Batumi Boulevard many interesting sculptures and architectural monuments. Batumi Boulevard has a history of over a century. Its construction began in 1881.
                        Its creation was the idea of Batumi district governor Mekalov, who commissioned the coastal boulevard to be built to a famous Prussian gardener named Reseller. Later, the planned development of the boulevard was handed over to a French gardener and designer invited to Georgia, Mikheil d’Alphonse, who is referred to in historical records as the “Kind Genie of Batumi Seaside”.
                        The development of the boulevard also owes much to Gordeziani, who studied in France and was appointed the manager of the City Park Boulevard in 1917. The first colorful dancing fountains of the Boulevard have been functioning since 1977. In 2009, the length of the Boulevard was significantly increased and now reaches 7 kilometers. The so-called New Boulevard was designed by a Spanish architect and built in accordance with the latest standards.    
                        </p>
                    </div>
                </div>

                <div className="achara_container_2" >
                    <div className="reason-div" >
                        <div className="reasons" >
                            <h1 id="achara_reasons" >Reasons</h1>
                        </div>
                        <h1>
                            why u should visit Adjara
                        </h1>
                        <hr className="achara_hr" />
                    </div>
                    <div className="achara_info_container " >
                        <a className="link" href="https://georgiastartshere.com/georgian-food-cuisine/" target="_blank" >
                            <img  className="img" src={Food}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p> <span>Georgian</span> Cuisine </p>
                        </div>
                    </div>


                    <div className="achara_info_container " >
                        <a className="link" href="https://apa.gov.ge/ge/protected-areas/reserve" target="_blank">
                            <img  className="img" src={ProtectedAreas}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Protected</span> Areas</p>
                        </div>
                    </div>

                    <div className="achara_info_container " >
                        <a className="link" href="http://dolphinarium.ge/ka/" target="_blank" >
                            <img  className="img" src={Dolphinarium}></img>
                        </a>
                        
                        <div className="textHolder" >
                            <p><span>Dolphinarium</span> Batumi</p>
                        </div>
                    </div>


                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Achara