import logo from './logo.svg';
import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

function App() {
  const [value , setValue] = useState(0)
  const [level , setLevel] = useState("")
  const [pdvalue , setPvalue] = useState("")
  const [pyramidValue , setPyramidValue] = useState([
    {
      id : 0,
      value  : 5,
      name : "Very High",
      flag : false,
      wid : 100
    },
    {
      id : 1,
      value  : 4,
      name : "High",
      flag : false,
      wid : 80
    },
    {
      id : 2,
      value  : 3,
      name : "Mid",
      flag : false,
      wid : 60
    },
    {
      id : 3,
      value  : 2,
      name : "Low",
      flag : false,
      wid : 40
    },
    {
      id : 4,
      value  : 1,
      name : "Very Low",
      flag : false,
      wid : 20
    }
  ])

  // functionality for select the pyramid bar

  const handlePyramid = (index) =>{
    console.log("index" , index)
    const temp = [...pyramidValue]
    let data = temp.find((item) => item.id === index)
    setLevel(data.name) // pyramid level name
    setPvalue(data.value) // pyramid level value
    temp.forEach((ele) =>{
      if(ele.id + 1 > index){
        ele.flag = true
      }
      else{
        ele.flag = false
      }
    })
    setPyramidValue(temp)
  }

  // functionality to change the backgroundColor of selected pyramid

  const checkpyramidValue = (i) =>{
    return "red"
  }
  return (
    <div className="App">
      <h1>Intellect</h1>
       <div className='main_box'>
           <div className='circularBox'>
            {/* circular bar */}
              <div className='inner_cBox'><CircularProgressbar value={value} minValue={0} maxValue={10} text={value} /></div>
              {/* range for circular bar */}
              <input type="range" value={value} onChange={(e) => setValue(e.target.value)} id="points" name="points" min="0" max="10"></input>
           </div>
           <div className='prograssBox'>
                <div className='inner_progress'>
                  {/* showing the value of pyramid */}
                  <h3>{level} <span>{pdvalue == "" ? "" : `: ${pdvalue}`}</span></h3>
                  <ul>
                    {
                      pyramidValue.map((item , index) =>{
                        return <li key={index} style={{width : `${item.wid}%` , backgroundColor : item.flag ? checkpyramidValue(index) : ""}} onClick={(e) => handlePyramid(index)}></li>
                      })
                    }
                  </ul>
                </div>
           </div>
       </div>
    </div>
  );
}

export default App;

// in All my Perviouse Company they do the manual testing of 
// i don't have experience in writing a test case
// i am learning Jest, Enzyme





// Question 2 : Assume you have to develop a web app for our existing mobile application, how will you plan the project?

// Answer
// 1. Identify the scope of the project: Determine the scope of the project by understanding the desired features of the web application, the timeline for development and the budget for the project.

// 2. Establish project goals: Establish specific, measurable goals for the web application.

// 3. Analyze the existing mobile application: Analyze the existing mobile application to understand the features, functionalities and user experience.

// 4. Identify the target audience: Identify the target audience for the web application and create user personas to better understand their needs.

// 5. Develop the architecture: Develop the architecture for the web application, including the overall design, navigation structure and content organization.

// 6. Design the user interface: Design the user interface for the web application, including the layout, colors, typography and overall look and feel.

// 7. Create the content: Create the content for the web application, including text, images and videos.

// 8. Test the application: Test the web application to ensure that it works as expected and meets the goals of the project.

// 9. Launch the application: Launch the web application and monitor the performance.



// Question 3 : provide all the libraries/frameworks you have experience with examples(not limited to ReactJS). Eg. chart, sockets.

// Answer
// 1. NodeJs
// 2. ExpressJs
// 3. JQuery
// 4. Bootstrap
// 5. MUI
// 6. Moment.js
// 7. Redux
// 8. Charts.JS
// 9. AWS S3


// Question 4 : Install the Intellect app (you can install the app from this link), go through the flow of the app and detect
// user experience issues in Intellect app. Map out what your findings are.

// Answer

// 1.username in app :- i think should be captialize
// 2.I think a soft music in background will be great during reading the quotes

