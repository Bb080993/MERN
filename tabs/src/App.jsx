import { useState } from 'react'
import Tab from './components/Tab'
import Display from './components/Display'
import './App.css'

function App(){
  const arrOfTabObj=[
    {tabNumber: "Tab 1", tabContent: "This is tab 1"},
    {tabNumber: "Tab 2", tabContent: "This is tab 2"},
    {tabNumber: "Tab 3", tabContent: "This is tab 3"},
    {tabNumber: "Tab 4", tabContent: "This is tab 4"}
  ]
  const [tabs, setTabs]=useState(arrOfTabObj)
  const [tabIdx, setTabIdx]=useState(0)
  return(
    <>
      <div className="main">
        <div className="tabs">
          <Tab tabs={tabs} setTabs={setTabs} tabIdx={tabIdx} setTabIdx={setTabIdx}/>
        </div>
        <div className="display">
          <Display tabs={tabs} setTabs={setTabs} tabIdx={tabIdx} setTabIdx={setTabIdx}/>
        </div>
      </div>
    
    </>
  )
}

export default App

// function App() {
//   const[content, setContent]= useState("")
  

//   return (
//     <div className='main'>
//       <div className="tabs" >
//         <div className="tab1" style={{backgroundColor: "red"}}>
//           <Tab  number={1} message={"This is tab 1"} content={content} setContent={setContent}/>
//         </div>
//         <Tab  number={2} message={"This is tab 2"} content={content} setContent={setContent}/>
//         <Tab  number={3} message={"This is tab 3"} content={content} setContent={setContent}/>

//       </div>
//     <div className="display">

//       <Display  message={content} />

//     </div>


//     </div>
    
//   )
// }

// export default App
