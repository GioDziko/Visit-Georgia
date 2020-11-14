import "./css/navbar.css";
import React,{Component, Fragment, useState} from "react";

import { HashLink as Link } from 'react-router-hash-link';
// iconebi chawerilia


export default class Navbar extends Component{
    HamburgerClick=()=>{
        const hamburger=document.querySelector(".hamburger");
        const navLinks=document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        navLinks.classList.toggle("open");
        links.forEach(link=>{
            link.classList.toggle("fade");
        })
    }
    render(){
        return(
            <Fragment>
                <nav>
                <div className="hamburger" onClick={this.HamburgerClick} >
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
        
                <ul className="nav-links">
                    <li><Link to="/#firstSection">Home</Link></li>
                    <li><Link to="/home#secondSection">Destinations</Link></li>
                    <li><Link to="/home#contact">Contact</Link></li>
                </ul>
            </nav>
            </Fragment>
            );
    }
}
