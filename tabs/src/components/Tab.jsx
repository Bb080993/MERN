import { useState } from 'react'

const Tab=props=>{
    const{tabs, setTabs, tabIdx, setTabIdx}=props

    const handleContentShown=(e, index)=>{
        e.preventDefault()
        setTabIdx(index)
       
    }

    
    return(
        tabs.map((tab, index)=>(
             <div  className={tabs.tabClass} key={index} 
                    style={{
                        border: "2px solid black", 
                        width:"100px", height:"50px",
                        padding: "5px", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems:"center",
                        backgroundColor:"pink"}}  
                    onClick={(e)=>handleContentShown(e, index)}>
               { tab.tabNumber}
            </div>
        )
    )
)}
export default Tab


// const Tab=props=>{
// const {number, message, content, setContent}=props

// const handleContentShown=(e, contentFromTab)=>{
//     e.preventDefault()
//     setContent(contentFromTab)
// }
// return(

//     <h1 onClick={(e)=>handleContentShown(e, message)}>Tab {number}</h1>
// )


// }
// export default Tab