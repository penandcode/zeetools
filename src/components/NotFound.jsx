import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header name={"Zeetools"} />
      <div className="notFound">
        <div className="titleNF">404</div>
        <div>
          几ㄖㄒ 千ㄖㄩ几ᗪ
          <p>你太爛了</p>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
        {/* <div></div> */}
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
