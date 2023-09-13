import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <>
      <Header name={"Zeetools"} />
      <div className="about">
        <h1>Zeetools - the story</h1>
        <div className="aboutBody">
          <p>
            Zeetools started as a personal project and slowly with the efforts
            and need, we have more than 300 tools now which are free and
            absoultely helpful.
          </p>
          Tools we have:
          <ul>
            <li>Movies</li>
            <li>Coding</li>
            <li>Code Editor</li>
            <li>API</li>
            <li>AI</li>
            <li>Extension</li>
            <li>Resume</li>
            <li>Gaming</li>
            <li>Remote</li>
            <li>Tool</li>
          </ul>
        </div>
        <h2>We are Open Source</h2>
        <p>
          Zeetools is an <strong>open project</strong>. You can visit us on
          GitHub. If you find us interesting and helpful, ⭐ our repository. If
          you want to help, you can help us by introducing an new feature,
          updating any dead links and other methods also.
        </p>
      </div>
    </>
  );
};

export default About;
