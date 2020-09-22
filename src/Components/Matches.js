import React,{useEffect,useState} from 'react';

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
      
      
      Match.games && Match.games.sort((a, b) => a.date > b.date ? -1 : 1)

      if(selectedTeam)
      {
      
      let filtered = [];
      filtered=Match.games && Match.games.filter(item=>(item.hteam ===selectedTeam.name || item.ateam ===selectedTeam.name))

      {if(filtered){
       
        return <ShowMatches key={filtered.id} item={filtered} Team={selectedTeam}/>
        }}}
        else{
            return  <AllMatches key={Match.games && Match.games.id} item={Match.games} Team={selectedTeam}/>
           
            }
      
      return (
        <>
        <div>
        
        </div>
        </>
       )    
};

export default Matches;