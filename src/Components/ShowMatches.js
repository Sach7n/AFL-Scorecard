import React,{useState,useContext} from 'react';
import {TeamsContext} from '../TeamContext'
import styled from 'styled-components';
import Pagination from './Pagination';

const ShowMatches = ({item}) => {

    const[postsPerPage, setpostPerPage]=useState(15) 
    const[currentPage, setCurrentPage]=useState(1)
     const { Items } = useContext(TeamsContext)
   
    

       const indexOfLastPost = currentPage * postsPerPage;
       const indexOfFirstPost= indexOfLastPost - postsPerPage;
       const currentPost = item && item.slice(indexOfFirstPost,indexOfLastPost);     
 // Change page
        const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <MatchWrap>
            <div className='grid-container'>             
          <div className='item-5'>Date</div>
           <div className='item-1'>Home Team</div>
           <div className='item-2'>Home score</div>
           <div className='item-3'>Away Score</div>
           <div className='item-4'>Away Team</div>
 
          </div>
            {currentPost.map(item=>(<div className='grid-container'>
              <div className='item-5'>{item.date}</div>
           <div className='item-1'>{item.hteam}</div>
           <div className='item-2'>{item.hscore}</div>
           <div className='item-3'>{item.ascore}</div>
           <div className='item-4'>{item.ateam}</div>
           </div>
           ))}

          <Pagination postsPerPage={postsPerPage}   totalPosts={item && item.length}   paginate={paginate}/>
           
        </MatchWrap>
    );
};

export default ShowMatches;

const MatchWrap = styled.div`
.grid-container {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    background-color: #ddd;
    padding: 10px;
  }
  
  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 25px;
  }
  
  .item3 { grid-area: 1 / 4 / 3 / 3; }
  .item2 { grid-area: 2 / 3 / 3 / 4; }
  .item1 { grid-area: 4 / 4 / 4 / 2; }
  .item4 { grid-area: 1 / 2 / 2 / 3; }
  .item5 { grid-area: 1 / 2 / 2 / 3; }
  

`