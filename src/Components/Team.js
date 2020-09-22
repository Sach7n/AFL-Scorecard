import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Team = ({item}) => {
    
  let IMG = `https://squiggle.com.au${item.logo}`;

    return (
        <StyledTeams>
            <div className="main-div">
            <Link to={{ 
                          pathname: "/matches",
                          myCustomProps: item
                      }} >  
            <div className="menuBar">                   
            <div className='image'> <img  src={`${IMG}`}  alt='' /> </div>
            <div className='title'><p style={{marginTop:'5%'}}>{item.name}</p> </div>
            </div>
            </Link>                
            </div>                
            
        </StyledTeams>
    );
};

export default Team;

const StyledTeams = styled.div`
.main-div{
    text-align: center;
    height: 40px;
    width: 50%;
    margin-left:50%;
    transform:translate(-50%);
    background-color: white;
}
.menuBar{
    height:100%;
    width: 50%;
    border: 0.001px solid grey;
    border-width: 0x 0px  0px;
  }
  
.menuBar div{
    align-items:center;
    justify-content:center;
    float:left;
    height: 100%;
    padding-bottom:0;
    margin-bottom:0;
  }
  
 .menuBar img{
      max-height: 80%;
      display: block;
  }
  .image{
    width: 25px;
    
    }
  .title{
    max-height: 80%;
    align-items:center;
    justify-content:center;   
    padding-left:20%;
  }  
     
}  
  `
