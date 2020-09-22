import React,{useContext} from 'react';
import Team from './Team';
import {TeamsContext} from '../TeamContext'
import styled from 'styled-components';


const TeamList = () => {
    
  const { Items } = useContext(TeamsContext)

    return (
    
    <div >
        
            {Items.teams && Items.teams.map((item) => (
            <Team key={item.id} item={item}> </Team> 
           ))}

        </div>
    );
};

export default TeamList;