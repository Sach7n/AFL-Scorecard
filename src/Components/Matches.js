import React,{useEffect,useState} from 'react';
import styled from 'styled-components';

import axios from 'axios';
import ShowMatches from './ShowMatches'
import AllMatches from './AllMatches'

const Matches = props => {

    const[Match,setMatch]=useState([])
    const selectedTeam = props.location.myCustomProps;

    useEffect(()=>{
        const fetchGames = async()=>{
          const games = await axios(`
          https://api.squiggle.com.au/?q=games`
          )
          setMatch(games.data)
           }
        fetchGames();
        

      },[])
      
      
      let Filtered1=null;
      if(selectedTeam){
      let filtered = [];
      filtered=Match.games && Match.games.filter(item=>(item.hteam ===selectedTeam.name || item.ateam ===selectedTeam.name))
      {filtered && filtered.sort((a, b) => a.date > b.date ? -1 : 1)}
      
      
      {if(filtered){
        Filtered1= filtered.map((item) => (
         <ShowMatches key={item.id} item={item}> </ShowMatches>
        ))}}}
        else{
          Match.games && Match.games.sort((a, b) => a.date > b.date ? -1 : 1)
          Filtered1=Match.games && Match.games.map((item) => (
            <AllMatches key={item.id}  item={item}> </AllMatches>
           
            ))}
            console.log(Filtered1)
      return (
        <>
        <div>
        {Filtered1}
        </div>
        </>
       )    
};

export default Matches;