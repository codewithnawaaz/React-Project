import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="/download.jpeg" alt="avtar"></img>;
}
function Intro() {
  return (
    <div>
      <h1>Adil Nawaz</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="React" emoji="💪" color="red" />
      <Skill name="Phython" emoji="💪" color="yellow" />
      <Skill name="Java script" emoji="💪" color="green" />
      <Skill name="Html" emoji="💪" color="orange" />
      <Skill name="Css" emoji="💪" color="blue" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
