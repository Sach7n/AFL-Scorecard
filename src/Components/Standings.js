import React,{ useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';


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
        <StandWrap>
        <div className='main-div'>
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
        </StandWrap>
    );
};

export default Standings;

const StandWrap = styled.div`
.main-div{
  overflow-x:auto; 
}
.table {
  border-collapse: collapse;
  width: 100%;
}

.table td, .table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.table tr:nth-child(even){background-color: #f2f2f2;}

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-image: linear-gradient(to top, #7f84a3, #8088ba);
  color: white;
}
`