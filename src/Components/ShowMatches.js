import React,{useState} from 'react';
import Pagination from './Pagination';

const ShowMatches = ({item}) => {

    const[postsPerPage, setpostPerPage]=useState(25) 
    const[currentPage, setCurrentPage]=useState(1)

       const indexOfLastPost = currentPage * postsPerPage;
       const indexOfFirstPost= indexOfLastPost - postsPerPage;
       const currentPost = item && item.slice(indexOfFirstPost,indexOfLastPost);     
 // Change page
        const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
        {currentPost.map(item=>(<div>{item.date}</div>))}
          <Pagination postsPerPage={postsPerPage}   totalPosts={item && item.length}   paginate={paginate}/>
           
        </div>
    );
};

export default ShowMatches;