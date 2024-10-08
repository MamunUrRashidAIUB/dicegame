import { useState } from "react"
import styled from "styled-components"

const Selectnumber = () => {
    const numbersarr=[1,2,3,4,5,6]
    const[isselectednumber,setselectednumber]=useState();
    console.log(isselectednumber);
  return (
    <div>
        {numbersarr.map((value,i)=> <Box onClick={()=>setselectednumber(value)} key={i}>{value}</Box>)}
    </div>
  )
}

export default Selectnumber
const Box = styled.div`
background-color:white ;
color:black;
height: 72px;
width:72px ;
font-weight: 800;
place-items: center;
display:grid;
border:1px solid black`;



