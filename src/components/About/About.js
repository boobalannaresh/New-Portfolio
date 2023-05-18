import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "./Profile Photo.png";
import { Timeline } from "./Timeline";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">About Me</SectionTitle>
      </SectionHeading>

      <AboutContent>
        <AboutImage src={myImage} />
        <AboutDetailsContainer>
          <StyledParagraph>
         I seek to work in a competitive field and ready to accept the
                 challenges, utilizing my skills would like to work with a 
                 highly esteemed company
               
                which gives me a platform to use my expertise and
              skills for mutual growth and
                 benefit of company and myself.
            
          </StyledParagraph>
          <StyledParagraph>
          I Started off my self-learning journey with online tutorials Google, YouTube, etc and took a step further and Enrolled in the GUVI IIT MADRAS Fullstack developer Program which involved extensive programming and real world projects. Later, I learned MERN Stack From Guvi and built an Website using React JS, Node, Express Js, MongoDB. </StyledParagraph>
         
          
        </AboutDetailsContainer>
      </AboutContent>
      <Timeline />
    </StyledAbout>
  );
};

export default About;
