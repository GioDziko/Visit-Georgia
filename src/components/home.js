import React, { Fragment } from "react";
import Firstsection from "./firstSection";
import SecondSection from "./secondSection";
import Navbar from "./navbar";
import "./css/home.css"
import Footer from "../components/footer";
function Home (){
    return(
        <div classname="home" >
            <Navbar />
            <Firstsection />
            <SecondSection />
            <Footer />
        </div>
    );
}
export default Home