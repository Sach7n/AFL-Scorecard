import React,{useState} from 'react';
import Pagination from './Pagination';
import styled from 'styled-components';

const AllMatches = ({item},{Team}) => {

    const[year,setYear]=useState()
    const[postsPerPage, setpostPerPage]=useState(15) 
    const[currentPage, setCurrentPage]=useState(1)

       const indexOfLastPost = currentPage * postsPerPage;
       const indexOfFirstPost= indexOfLastPost - postsPerPage;
       const currentPost = item && item.slice(indexOfFirstPost,indexOfLastPost);     
      
        const paginate = pageNumber => setCurrentPage(pageNumber);

        const handleSelect = (event) => {
        setYear(event.target.value);
        item = item.filter(item=>(item.date ===year ))
        };

    return (
        <AllWrap>
        <div className='main-div'> 
              {currentPost && currentPost.map(item=>(<div className='team-contain'>
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
        </div>
        </AllWrap>

    );
};

export default AllMatches;

const AllWrap = styled.div`
.main-div{
  display:flex column;
  top:0;
  left:0;
  width:100%;
  height:10%;
  margin:2rem 1rem 2rem 0rem;
}
.team-contain{
  position:relative;
  display:flex;
  width:70%;
  top:0;
  border-radius: 10px;
  margin-left:12%;
  margin-bottom:2%;
  box-shadow: 0px 0px 20px 0.5px #8488c4;
  background-image: linear-gradient(to top, #7f84a3, #8088ba);
 
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