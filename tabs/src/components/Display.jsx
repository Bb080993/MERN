import { useState } from 'react'

const Display=props=>{
    const{tabs, setTabs, tabIdx, setTabIdx}=props

    return(
        <>
            <div style={{display: "flex", 
                        justifyContent: "center", 
                        alignItems:"center"}}>
                {tabs[tabIdx].tabContent}
            </div>
        
        </>
    )
}
export default Display