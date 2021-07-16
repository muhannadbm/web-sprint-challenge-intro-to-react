import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character.js';
import styled from 'styled-components';
import themes from './themes';
import axios from 'axios';


const StyledHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
a{
  height: 50%;
  background-color: ${({theme})=> theme.primary};;
  color: white;
  padding: 0.3rem 0.9rem;
  font-size: 1.4rem;
  box-shadow: 3px 2px 5px white;
}
h1:hover{
font-size: 2.4rem;
}
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])


  useEffect(()=> {

    axios.get('https://swapi.dev/api/people').then(res => {
      setCharacters(res.data)
      console.log('original is running')
    }).catch(e => {console.log(e)}) 
     }, [])
  

  return (
    <div className="App">
<StyledHeader>
      <h1 className="Header">React Wars</h1>
      </StyledHeader>

  {  characters.map((e , index) => {
      return <Character id = {index + 1} name = {e.name} birth = {e.birth_year}/>
     
        }) 
      }

    </div>
  );
}

export default App;
