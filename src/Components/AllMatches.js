import React,{useState} from 'react';
import Pagination from './Pagination';

const AllMatches = ({item}) => {

    const[year,setYear]=useState()
    const[postsPerPage, setpostPerPage]=useState(25) 
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
        <>
        <div>
        <select value={year} onChange={handleSelect}>
        <option value=''>All</option>
        <option value='2019'>Europe</option>
        <option value='2018'>Asia</option>
        <option value='2017'>Africa</option>
        <option value='2016'>Americas</option>
        <option value='2015'>Oceania</option>
        <option value='2014'>Oceania</option>
        </select>
        </div>
        <div><table className="table">
        <tr>
        <th>Date</th>
        <th>Home Team Name</th>
        <th>Home Team Score</th>
        <th>Away team Name</th>
        <th>Away team Score</th>
      </tr>
      
           {currentPost && currentPost.map(item=>(
           <tr><td>{item.date}</td>
           <td>{item.hteam}</td>
           <td>{item.hscore}</td>
           <td>{item.ascore}</td>
           <td>{item.ateam}</td>           
           </tr>))}
      

         </table>  
          <Pagination postsPerPage={postsPerPage}   totalPosts={item && item.length}   paginate={paginate}/>
        </div>
        </>
    );
};

export default AllMatches;