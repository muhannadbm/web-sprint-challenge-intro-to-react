// Write your Character component here
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const StyledCharacter = styled.div`
margin-bottom: 1rem !important;
:hover{
    background-color: #03456d;
}
 @-webkit-keyframes slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
    background-color: white;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
    background-color: ${({theme})=> theme.primary};

  }
}
@keyframes slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
    background-color: white;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
    background-color: ${({theme})=> theme.primary};

  }
}

 @-webkit-keyframes slide-out-bck-center {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-1100px);
            transform: translateZ(-1100px);
    opacity: 0;
  }
}
@keyframes slide-out-bck-center {
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-1100px);
            transform: translateZ(-1100px);
    opacity: 0;
    letter-spacing: 0.2rem;
  }
}


.enter {
	-webkit-animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


}

div{
    border-radius: 50px;
    padding: 2rem;
margin-top: 1rem;
}

.leave {
	-webkit-animation: slide-out-bck-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: slide-out-bck-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

}

p{
    margin: auto;
}
.normal {
    transform: rotate(0deg);
    transition: 0.5s;
}
.rotated{
    transform: rotate(90deg);
    transition: 0.3s;
}
a{
margin-left: 2rem;
display: inline-block;
border: 1px solid;
border-radius: 100%;
padding: 0 0.4rem;
}
padding: 1rem;
font-family: 'Space Mono', monospace;
border: solid 3px #03456d;
width: 30%;
display: flex;
color: white;
margin: auto;
flex-direction: column;
`

export default function Character(props){
const {name, birth, id} = props
const [currentCharacter, setCurrentCharacter] = useState(null)
const [details, setDetails] = useState(null)
useEffect(()=> {
    if(currentCharacter === null) {setTimeout(()=>{setDetails(null) }, 1000)}
    else{
    axios.get(`https://swapi.dev/api/people/${currentCharacter}`).then(res => {

            setDetails(res.data)

    }).catch(e=>{console.log(e)}) }
},[currentCharacter])

const selectCharacter = (id) => {
    if(id === currentCharacter){
        setCurrentCharacter(null)
    }
    else{
    setCurrentCharacter(id)}
}
return(
<StyledCharacter onClick={() => selectCharacter(id)}>
    <p>
    {name} born in {birth} <a  className={currentCharacter === id ? "rotated": "normal"} >></a></p> 
    {details && <div className={currentCharacter === id ? "enter": "leave"}><p>Name: {details.name}</p>
    <p>Height: {details.height}</p>
    <p>Mass: {details.mass}</p>
    <p>Hair color: {details.hair_color}</p>
    <p>Skin color: {details.skin_color}</p>
    <p>Eye color: {details.eye_color}</p>
    <p>Gender: {details.gender}</p></div>}

    </StyledCharacter>
)
}