import React from "react";
import { Name, StyledHome, Title } from "../styles/Home.styled";
import "./style.css";
import { IconContext } from "react-icons";
import { IoIosCall, IoMdMail } from "react-icons/io";
import {
  SiLinkedin,
  SiGithub,
  SiMinutemailer,
  SiTwitter,
  SiPhonepe,
} from "react-icons/si";
import { Type } from "./Type";
import {

  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import downloadIcon from "../../assets/icons/download-icon.svg";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
         <Title>Hello, I'm Naresh Babu</Title>
        <Name ><Type /> </Name>
       
        <p className="content">I craft websites that are as unique as you and transform your ideas into seamless digital experiences</p>
        <div id="contactdiv">
          <a
            href="https://github.com/boobalannaresh"
            target="_blank"
            rel="noopener noreferrer"
          
          >
            <SiGithub size={30} />
          </a>
          <a
           href="https://www.linkedin.com/in/nareshbabu-k-57a361271/"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <SiLinkedin size={30}  />
          </a>

          <a href="tel:+919159553177">
            <IoIosCall size={30} />
          </a>
          <a href="mailto:nareshbabuk21@gmail.com">
            <IoMdMail size={30}  />
          </a>
        </div>
        <Resume className="resume">
            <ResumeLink
              download="Naresh Babu"
              href="https://drive.google.com/file/d/1_3wSbSijwL-Qwn0nElY5a4YDkc5B2JP6/view?usp=sharing"
              target={"_blank"}
              icon={downloadIcon}
            >
              View Resume
            </ResumeLink>
          </Resume>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
