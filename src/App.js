import Navbar from "./component/Navbar/navbar";
import Intro from './component/Intro/intro';
import Skill from "./component/skills/skill";
import Works from "./component/Works/works";
import Contact from "./component/Contact/contact";


function  App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skill/>
        <Works/>
        <Contact/>
        
        
    </div>
  );
}

export default App;
