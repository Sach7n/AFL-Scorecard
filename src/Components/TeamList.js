import React,{useContext} from 'react';
import Team from './Team';
import styled from 'styled-components';
import {TeamsContext} from '../TeamContext'

const TeamList = () => {
    
  const { Items } = useContext(TeamsContext)

    return (
    
    <StyledTeamList >
        
            {Items.teams && Items.teams.map((item) => (
            <Team key={item.id} item={item}> </Team> 
           ))}

        </StyledTeamList>
    );
};

export default TeamList;

const StyledTeamList = styled.div`

`