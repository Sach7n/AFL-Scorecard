import React,{ useEffect,useState} from 'react';
import axios from 'axios';

const Standings = props => {
    const[Stand,setStand]=useState([])
    

    useEffect(()=>{
        const fetchGames = async()=>{
          const standing = await axios(`
          https://api.squiggle.com.au/?q=standings`
          )
          setStand(standing.data)
        }
        fetchGames();
        

      },[])
    return (
        <div>
          <table className="table">
                          <tr>
                          <th>Rank</th>
                          <th>Team Name</th>
                          <th>Wins</th>
                          <th>losses</th>
                          <th>Draws</th>
                        </tr>
                          {Stand.standings && Stand.standings.map((item=>  
                           <tr>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>{item.wins}</td>
                            <td>{item.losses}</td>
                            <td>{item.draws}</td>

                        </tr>))}  
            </table>    
        </div>
    );
};

export default Standings;