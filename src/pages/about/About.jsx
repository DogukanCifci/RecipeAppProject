import React from "react";

import {
  AboutArticle,
  AboutContainer,
  AboutHeader,
  AboutImage,
  MySpan,
  Text,
} from "./AboutStyles";
import CodingImage from "../../assets/coding.svg";
const About = () => {
  return (
    <div>
      <AboutContainer>
        <AboutImage src={CodingImage} />
        <AboutHeader>
          About Software Developer <MySpan>Dogukan Cifci</MySpan>
        </AboutHeader>
        <AboutArticle>
          <AboutHeader dogukan style={{ textAlign: "right" }}>
            I'm Dogukan
          </AboutHeader>
          <Text>I am currently learning Full-Stack Development Languages.</Text>
          <Text>
            I've already known JS, ReactJS, Native, NodeJS,MongoDB, SQL, Python,
            AWS Services
          </Text>
          <Text>
            <span
              mailto="dogukancifci@gmail.com"
              style={{ textDecoration: "underline", color: "white" }}
            >
              Send email :
            </span>
            dogukancifci@gmail.com
          </Text>
        </AboutArticle>
      </AboutContainer>
    </div>
  );
};

export default About;
