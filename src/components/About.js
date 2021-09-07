import React,{useState} from 'react'

export default function About(props) {
    // const [btntext, setBtnText] = useState("Enable dark mode")
    //  const [myStyle, setMyStyle] = useState( {
    //      color:'black',
    //      backgroundColor:'white',
        
    // })
    let myStyle={
      color:props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode === 'dark'?'rgb(58 54 54)':'white',
      // border: '2px solid',
      // borderColor: props.mode === 'dark'?'white':'gray'
    }
  //  const toggleStyle=()=>{
  //       if(myStyle.color=='black'){
  //           setMyStyle({
  //               color:'white',
  //               backgroundColor:'black',
  //               border:'1px solid white'
  //           })
  //           setBtnText("Enable Light mode");
  //       }else{
  //           setMyStyle({
  //               color:'black',
  //               backgroundColor:'white'
  //           })
  //           setBtnText("Enable Dark mode");
  //       }
   // }
    return (
        
        <div className="container" style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Developer Info
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Made By Saumya Shah</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Purpose
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>This is a simple website which allows the user to manipulate with text forms.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>You can contact the developer via github.</p>
      </div>
    </div>
  </div>
</div>
</div>

)
    }    

      {/* <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button> */}
