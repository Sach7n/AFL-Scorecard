import React from 'react';
import styled from 'styled-components';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PagiWrap>
      <ul id='pagination'>
        {pageNumbers.map(number => (
          <li key={number} >
            <a onClick={() => paginate(number)} >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </PagiWrap>
  );
};

export default Pagination;
const PagiWrap = styled.div`
#pagination {
  margin: 0;
  padding: 0;
  text-align:center;
 text-size:10%; 
}
#pagination li {
  display: inline;
  box-shadow: 0 0 0 0.5px;
}
#pagination li a {
  display: inline-block;
  text-decoration: none;
  padding: 5px 10px;
  color: black;
}

#pagination li a:hover,#pagination li a:active{
  background-color: #4caf50;
  color: #fff;
  cursor:pointer;
}
@media only screen and (max-width: 500px){
  #pagination {
    font-size:2%;    
  }
 
}
`