import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';



export const TeamsContext = React.createContext();
export const { Consumer } = TeamsContext;

const TeamContext = props => {
    const[Items,setItems]=useState([])
    const[IsLoading,setIsLoading]=useState(true)
  
    
    useEffect(()=>{
      const fetchItems = async()=>{
        const teams = await axios(`
        https://api.squiggle.com.au/?q=teams`
        )
      
        setItems(teams.data)
        setIsLoading(false)
        
    }
      fetchItems();
  
    },[])
       
   
   
    return (
    <Router>    
    <TeamsContext.Provider value={{Items,setItems}}>
       {props.children}
    </TeamsContext.Provider>  
    </Router>
    );
};

export default TeamContext;