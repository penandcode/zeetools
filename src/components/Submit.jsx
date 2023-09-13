import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

// const

const Submit = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const Formfield = ({ name, question, handleUpdate, value, prev, next }) => {
    
    return (
      <>
        <div className="card">
          <h2>{question}</h2>
          <input
            name={name}
            value={value}
            onChange={(event) => handleUpdate(event)}
          />
          <div className="cardButton">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      </>
    );
  };

  const Form = ({ step }) => {

    const [formData, setFormData] = useState({
      toolName: "",
      toolLink: "",
      userName: "",
      userEmail: "",
    });

    const handleUpdate = (event) => {
      setFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    };

    const next = () => setStep((step) => step + 1);

    const prev = () => setStep((step) => step - 1);

    switch (step) {
      case 0:
        return (
          <>
            <div className="card">
              <h2>Let&apos;s add a tool to submit.</h2>
              <div className="cardButton">
                <button>Prev</button>
                <button onClick={next}>Next</button>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <Formfield
            question={"Name of the tool."}
            prev={prev}
            next={next}
            name={"toolName"}
            value={formData.toolName}
            handleUpdate={handleUpdate}
          />
        );
      case 2:
        return (
          <Formfield
            question={"URL of the tool"}
            prev={prev}
            next={next}
            name={"toolLink"}
            value={formData.toolLink}
            handleUpdate={handleUpdate}
          />
        );
      case 3:
        return (
          <Formfield
            question={"Please enter your name"}
            prev={prev}
            next={next}
            name={"userName"}
            value={formData.userName}
            handleUpdate={handleUpdate}
          />
        );
      case 4:
        return (
          <Formfield
            question={"Please enter your email"}
            prev={prev}
            next={next}
            name={"userEmail"}
            value={formData.userEmail}
            handleUpdate={handleUpdate}
          />
        );
      case 5:
        return (
          <div className="card">
            <h2>Thanks for your response.</h2>
            <div className="cardButton">
              <button onClick={() => navigate("/")}>Go to Home</button>
            </div>
          </div>
        );
    }
  };
  return (
    <>
      <Header name={"Zeetools"} />
      <div className="submit">
        <Form step={step} />
      </div>
    </>
  );
};

export default Submit;
