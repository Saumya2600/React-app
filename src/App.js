import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap';
import Navbar1 from './components/Navbar1';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      showAlert("Dark Mode has been enabled",'success');
      document.body.style.backgroundColor="rgb(58 54 54)";
      
    }else{
      setMode('light');
      showAlert("Light Mode has been enabled","success");
      document.body.style.backgroundColor="white";
    }
  }
  // const toggleMode1=()=>{
  //   if(mode==='light'){
  //     setMode('dark');
  //     //showAlert("Dark Mode has been enabled",'success');
  //     document.body.style.backgroundColor="#d22727";
      
  //   }else{
  //     setMode('light');
  //     //showAlert("Light Mode has been enabled","success");
  //     document.body.style.backgroundColor="white";
  //   }
  // }
  const [mode, setMode] = useState('light'); //whether dark mode oos enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1100)
  }
  return (
    <div>
      <Router>
      <Navbar1 title="Text-Utils" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert} />
      <div className="container my-3 text-center">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
         <TextForm showAlert={showAlert} heading="All in One - Word Counter, Copy, Reverse & More" mode={mode} /> 
          </Route>
        </Switch>
       {/* <About/> */}
       </div>
       </Router>
    </div>
  );
}

export default App;
