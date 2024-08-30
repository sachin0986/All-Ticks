import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "../utils/Constants";

const style = {
    footer: `flex justify-between h-38 bg-black`,
    footer_Left: `flex `,
    Logo: ` pt-20 pl-10 text-white`,
    text_h: `pt-20 pr-20 text-base text-white font-bold pr-20`,
    text_p: `text-base text-white pr-20 pb-20`
    
}




const Footer = () => {
    return(
        <div className={style.footer}>
            <div className={style.footer_Left}>
                <a href={GITHUB_URL} className={style.Logo}><RiGithubLine size={40}/></a> 
                <a href={LINKEDIN_URL} className={style.Logo}><FaLinkedin size={40}/></a> 
            </div>
            <div>
            <h3 className={style.text_h}>© 2024 All Ticks</h3>
            <p className={style.text_p}>made with love @sachinarora</p>
            </div>
        </div>
    );
};

export default Footer;