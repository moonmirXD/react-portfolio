import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ScrollToTop from "react-scroll-to-top";
import Hero from "./views/hero/hero";
import Header from "./views/header/header";
import Work from "./views/work/work";
import Project from "./views/project/project";
import Expertise from "./views/expertise/expertise";
import Skill from "./views/skill/skill";
import Contact from "./views/contact/contact";

import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Visit from "./views/visit/visit";

function App() {
  return (
    <div className='App'>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='stylesheet' href='./assets/styles/main.css' />

      <title>Raiiiisu's Portfolio</title>

      <Router>
        {/* <Header />
        <Hero />
        <Work />
        <Project />
        <Expertise />
        <Skill />
        <Contact />
        <ScrollToTop
          smooth
          color='black'
          style={{ backgroundColor: "#DBF3FA" }}
        /> */}
        <Switch>
          <Route path='/visit'>
            <Visit />
          </Route>
          <Route path='/'>
            <Header />
            <Hero />
            <Work />
            <Project />
            <Expertise />
            <Skill />
            <Contact />
            <ScrollToTop
              smooth
              color='black'
              style={{ backgroundColor: "#DBF3FA" }}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
