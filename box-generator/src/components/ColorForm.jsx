import { useState } from 'react'

const ColorForm=(props)=>{
    const [color, setColor]=useState("")
    const [boxList, setBoxList]=useState([])

    const createBox=e=>{
        e.preventDefault();
        
        setBoxList([...boxList, color])
        console.log(boxList)

        setColor("")
    }
    const boxColor=e=>{
        setColor(e.target.value)
    }
    
    
    return(
        <>
            <h1>Create a Box</h1>
            <form onSubmit={createBox}>
                <label >What color box?</label>
                <input type="text" value={color} onChange={ boxColor }/>
                <button>Submit</button>
            </form>

           
        {boxList.map( (oneColor, index) => { return <div key={index} style={{backgroundColor:oneColor, display: "inline-block", margin:"10px", width:'100px', height:'100px'}}></div>})}
        
           
        </>
    )
}
export default ColorForm