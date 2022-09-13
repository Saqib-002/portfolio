import {Routes,Route} from "react-router-dom";
import './App.css';
import Navigation from './routes/navigation/Navigation';

// import routes
import Home from "./routes/Home/home";
import Projects from "./routes/projects/projects";
import About from "./routes/about/about";
import Contact from "./routes/contact/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
