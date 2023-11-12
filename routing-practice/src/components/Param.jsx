import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, useParams} from "react-router-dom"

const Param=(props)=>{

    const{word, color, colorTwo}=useParams()

    return(
        //isNan()= is not a number. Used ternary operator. If it was not a number, then p tag
        //was about word. If was a number, p tag said number
        isNaN(word)?
            <p style={color ?{ color:color, backgroundColor:colorTwo}: null}>The word is: {word}</p>:
            //ternary operator in style to check if color params were sent through route
            <p>The number is: {word}</p>

    )
}

export default Param