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
            <div className='team-contain'>             
          <div className='time'>Date</div>
           <div className="home-team">Home Team</div>
           <div className="line1">Home score</div>
           <div className='line1'>Away Score</div>
           <div className="away-team">Away Team</div>
 
          </div>
            {currentPost.map(item=>(<div className='team-contain'>
              <div className="time"><p>{item.date}</p></div>
           
           <div className="home-team">
             <p>{item.hteam}</p>
           </div>

           <div className="line1">
             <p>{item.hscore}</p>
             <p>-</p>
             <p>{item.ascore}</p>
           </div>
           
           <div className="away-team">
             <p>{item.ateam}</p>
           </div>
           
           </div>
           ))}

          <Pagination postsPerPage={postsPerPage}   totalPosts={item && item.length}   paginate={paginate}/>
           
        </MatchWrap>
    );
};

export default ShowMatches;

const MatchWrap = styled.div`
.team-contain{
  position:relative;
  display:flex;
  width:70%;
  top:0;
  border-radius: 10px;
  margin-left:12%;
  margin-bottom:2%;
  color:#f1f1f1;
  background-image: linear-gradient(to top, #7f84a3, #8088ba);
  box-shadow: 0px 0px 20px 0.5px #8488c4;
  }
.team-contain>div{
  margin:0 0 0.5rem 2rem;    
}
.time{
  width:15rem;
  color: #f1f1f1;
}
.time p{
  margin-top:12%;
  width:5rem;
}
.home-team{
  display:flex;
  width:13rem;   

}

.home-team p{
  font-size: 1.8em;
  color: #f1f1f1;
  font-weight: 900;
  text-shadow: 0px 1px 2px rgba(0,0,0,0.4),
               0px 2px 4px rgba(0,0,0,0.1),
               0px 5px 7px rgba(0,0,0,0.1);
}
.line1{
  display:flex;
  width:10rem;
}
.line1 p{
  margin:1.8rem 1.2rem 0 1rem;
  font-size: 1.8em;
  color: #f1f1f1;
  font-weight: 900;
  text-shadow: 0px 1px 2px rgba(0,0,0,0.4),
               0px 2px 4px rgba(0,0,0,0.1),
               0px 5px 7px rgba(0,0,0,0.1);
}
.away-team{
  display:flex;
  width:15rem;

}
.away-team p{
  margin-left:1.2rem;
  font-size: 1.8em;
  color: #f1f1f1;
  font-weight: 900;
  text-shadow: 0px 1px 2px rgba(0,0,0,0.4),
               0px 2px 4px rgba(0,0,0,0.1),
               0px 5px 7px rgba(0,0,0,0.1);
}
@media only screen and (max-width: 768px){
  .main-div {
    width:100%;
    margin:o;
    padding:0;
  }
  .main-div p{
    font-size:1rem;
  }
    .team-contain{
      width:100%;
      margin:0;
      padding:0;
    }
    .team-contain>div{
      margin:0;    
      width:23%;
    }
    .time p{
      font-size:0.5rem;  
      color: #f1f1f1;
    }
    .line1 p{
      margin:10% 5% 0 0;
    }

@media only screen and (max-width: 500px){
  .main-div {
    width:100%;
    margin:o;
    padding:0;
  }
  .main-div p{
    font-size:0.5rem;
  }
    .team-contain{
      width:100%;
      margin:0;
      padding:0;
    }
    .team-contain>div{
      margin:0;    
      width:23%;
    }
    .time p{
      font-size:0.2rem;  
      color: #f1f1f1;
    }
    .line1 p{
      margin:10% 5% 0 0;
    }   
`