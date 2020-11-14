import React from "react";
import "./css/footer.css";
import { FiFacebook } from 'react-icons/fi';
import { GrInstagram } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
function Footer (){
    return(
        <section className="Contact" id="contact">
        <h1>Contact information</h1>
        <ul id="contact-ul">
            <li>
                <a href="https://www.facebook.com/gio.dziko/" target="_blank" >
                    <FiFacebook className="icons" />
                    Facebook
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/gio_dzirkvelishvili/" target="_blank" >
                    <GrInstagram className="icons" />
                    Instagram
                </a>
            </li>
            <li>
                <a href="https://github.com/GioDziko" target="_blank" >
                    <AiFillGithub className="icons" />
                    Github
                </a>
            </li>
        </ul>
        <hr class="hr"/>
        <footer class="footer">
            
            <p>
                &copy; Created and Designed by Dziko  
            </p>
        </footer>
        </section>

    );
}

export default Footer
