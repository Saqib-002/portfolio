import { useEffect,useState } from "react";
import {Routes,Route} from "react-router-dom";
import './App.css';
import Navigation from './routes/navigation/Navigation';

// import routes
import Home from "./routes/Home/home";
import Projects from "./routes/projects/projects";
import About from "./routes/about/about";
import Contact from "./routes/contact/contact";
import Header from "./components/header/header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Themes from "./components/Themes/themes";

function App() {
  const [theme,setTheme]=useState('blue');
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="App">
      <Themes setTheme={setTheme}/>
      <Header theme={theme}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigation theme={theme}/>}>
              <Route index element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
