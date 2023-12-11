import "./InfoContainer.css";
import Highlights from "../Highlights/Highlights";
// import Image from "../../";

const highlights = [
  "Summarize Key Findings",
  "Compare Between Documents",
  "Search For Answers",
  "Ask in Any Language",
];

const InfoContainer = () => {
  return (
    <div className="info-container">
      <div className="app-sumo">
        <img
          className="app-sumo-logo"
          src={require("../../images/appsumo.png")}
          alt="app-sumo-logo"
        />
        <h5>Now on AppSumo</h5>
        <div className="inner-app-sumo">Get Lifetime Deal &gt;</div>
      </div>

      <div className="info-caption">
        Your second brain for maximizing productivity
      </div>

      <div className="description">
        <p>
          Afforai is an AI chatbot that searches, summarizes, and translates
          info from multiple sources
        </p>
        <p>
          to produce trustworthy research. Feed lengthy research documents to
          stacks of dry
        </p>
        <p>compliance requirements and extract the key findings you need.</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        {highlights.map((highlight) => (
          <Highlights highlight={highlight} />
        ))}
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button className="info-btn">Try for free</button>
        <button className="info-btn">View pricing</button>
      </div>
    </div>
  );
};

export default InfoContainer;
