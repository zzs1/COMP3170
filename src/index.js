import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
//import App from "./App";
function App() {
  return (
    <div>
      <Avatar
        name="Farbus"
        image="https://randomuser.me/api/portraits/men/84.jpg"
        tagline="I sjkdjaksjdsjakd"
      />
      <Resume id="1" profile="FASEL">
        <Company name="MIRCOSOFT" from_date="Jan 2019" to_date="Jan 2020" />
        <Company name="UBISOFT" from_date="Aug 2020" to_date="Jan 2022" />
        <Company name="EA" from_date="Jan 2022" to_date="Jan 2023" />
      </Resume>
      <Portfolio>
        <Project image="https://randomuser.me/api/portraits/men/83.jpg" />
        <Project image="https://randomuser.me/api/portraits/men/82.jpg" />
        <Project image="https://randomuser.me/api/portraits/men/81.jpg" />
        <Project />
      </Portfolio>
    </div>
  );
}
function Avatar(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src={props.image} alt="" />
      </div>
      <div>
        <p className="profile">Hello,I'm {props.name}</p>
        <p className="profile-Tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

function Resume(props) {
  return (
    <div>
      <h2>Work Experience</h2>
      <ul className="work">{props.children}</ul>
    </div>
  );
}

function Company(props) {
  return (
    <ul>
      <h2 className="work-title">
        <span className="company">{props.name}</span>
        <span className="from">{props.from_date}</span>
        <span className="until">{props.to_date}</span>
      </h2>
      <p>
        Randomuser.me is a free and open-source API that generates random user
        data for testing and prototyping purposes. You can use AJAX to call the
        API and get a JSON response with user information such as name, gender,
        location, email, phone, etc. You can also customize the API parameters
        to get specific results, such as nationality, seed
      </p>
    </ul>
  );
}
function Project(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400";
  } else {
    image = props.image;
  }
  return (
    <div className="project">
      <div className="project-image">
        <img src={props.image} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue
        eget arcu dictum varius.
      </p>
      <div></div>
    </div>
  );
}
function Portfolio(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">{props.children}</div>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
