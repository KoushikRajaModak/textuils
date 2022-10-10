// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
const [alert, setalert] = useState(null)
const showalert=(message,type)=>{
  setalert({
msg:message,
type:type
  })
  setTimeout(()=>{
    setalert(null);
  },2000);
}

const [mode, setMode] = useState("light")

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor=' #121738 ';
    showalert("Dark mode is Enable","success");
    document.title="Text is Dark mode"
    setInterval(() => {
      document.title=" Text is WoW"
    }, 2000);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showalert("Light mode is Enable","success");
    document.title="Text is light mode"
    setInterval(() => {
      document.title="Install Text"
    }, 1500);
  }

}
  return (
    <>
    {/* <Router>
      <Navbar title="koushik" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
     
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/" component={TextForm}>
          <div ><TextForm showalert={showalert} heading="Text Analise" mode={mode}/></div>
          </Route>
       
        </Switch> 
   
   
     </div>
     </Router> */}
     <Navbar title="koushik" mode={mode} toggleMode={toggleMode} />
     <div ><TextForm showalert={showalert} heading="Text Analise" mode={mode}/></div>
    </>
  );
}

export default App;
