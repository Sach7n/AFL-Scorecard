import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Team = ({item}) => {
    
  let IMG = `https://squiggle.com.au${item.logo}`;

    return (
        <StyledTeams>
            <div className="main-div">
            <Link className="link-t" to={{ 
                          pathname: "/matches",
                          myCustomProps: item
                      }} >  
            <div className="team-cont">                   
            <div className='image'> <img  src={`${IMG}`}  alt='' /> </div>
            <div className='title'><p >{item.name}</p> </div>
            </div>
            </Link>                
            </div>                
            
        </StyledTeams>
    );
};

export default Team;

const StyledTeams = styled.div`
.main-div{
  display:flex column;
  top:0;
  width:100%;
  height:10%;
  margin:0rem 1rem 0rem 0rem;
}
.team-cont{
  position:relative;
  display:flex;
  width:20rem;
  top:0;
  left:50%;
  justify-content: around;
  border-radius: 10px;
  transform:translateX(-50%);
 }
 .team-cont:hover {
  background-color: #e1e1e1;
  }
 .link-t{
  text-decoration:none;   
  }
  .image{
    margin:2% 1% 2% 5%;
  }
 .image img{
      height:25px;
      width: 25px;
      margin-top:0;
      display: block;
  }
  .title{
    margin-left:15%;
  }  
  .title p{
    margin-top:16%;
    color: #f51707;
  }
}  
  `
