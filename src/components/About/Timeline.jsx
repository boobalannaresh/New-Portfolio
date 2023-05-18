import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineCarRepair } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";


export const Timeline = () => {
  
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={"white"}>
          <VerticalTimelineElement
            date={"Oct  2022 - Apr  2023"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={< IoIosSchool />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              GUVI IIT MADRAS
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Chennai
              
            </h4>
            <p data-aos="fade-right">
              Studied
              Fullstack developer Program / MERN Stack
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Nov 2018 - Dec 2019"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<MdOutlineCarRepair />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Lanson Toyota
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Chennai
            </h4>
            <p data-aos="fade-right">
            Worked as a Technician ( Light Motor Vehicle )
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"May 2017 - Jun 2018"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<GiAutoRepair/>}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              V.S.T. Service Station
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Vellore
            </h4>
            <p data-aos="fade-right">
            Worked as a Technical Assistant ( Heavy Motor Vehicle )
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jul 2013 - Apr 2017"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<IoIosSchool/>}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              SKP Engineering Collage
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Thiruvannamalai
            </h4>
            <p data-aos="fade-right">
              Studied B.E Mechanical Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jun 2011 - Apr 2013"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<IoIosSchool/>}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Thiruvalluvar Higher Secondary School 
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Gudiyattam
            </h4>
            <p data-aos="fade-right">
              Studied HSC Maths ComputerScience <br/> State Board
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jun 2010 - Apr 2011"}
            contentStyle={{
              boxShadow: `gray`,
              border: "3px solid white",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `white`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid white",
            }}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
            icon={<IoIosSchool />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Thiruvalluvar High School
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              in Gudiyattam
            </h4>
            <p data-aos="fade-right">
              Studied SSC State Board 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<BsFillStarFill />}
            iconStyle={{
              border: ` 3px solid white`,
              backgroundColor: `white`,
              color: `crimson`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};