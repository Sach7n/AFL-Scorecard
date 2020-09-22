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
        <div>
        <select value={year} onChange={handleSelect}>
        <option value=''>All</option>
        <option value='2019'>2019</option>
        <option value='2018'>2018</option>
        <option value='2017'>2017</option>
        <option value='2016'>2016</option>
        <option value='2015'>2015</option>
        <option value='2014'>2014</option>
        </select>
        </div>
        <div className='grid-container'>             
          <div className='item-5'>Date</div>
           <div className='item-1'>Home Team</div>
           <div className='item-2'>Home score</div>
           <div className='item-3'>Away Score</div>
           <div className='item-4'>Away Team</div>
 
          </div>
        <div> 
              {currentPost && currentPost.map(item=>(<div className='grid-container'>
              <div className='item-5'>{item.date}</div>
           <div className='item-1'>{item.hteam}</div>
           <div className='item-2'>{item.hscore}</div>
           <div className='item-3'>{item.ascore}</div>
           <div className='item-4'>{item.ateam}</div>
           </div>
           ))}
      
          <Pagination postsPerPage={postsPerPage}   totalPosts={item && item.length}   paginate={paginate}/>
        </div>
        </AllWrap>

    );
};

export default AllMatches;

const AllWrap = styled.div`
.grid-container {
  display: grid;
  grid-template-columns: repeat(5,1fr);
  background-color: #ddd;
  grid-auto-rows: 70px; 
  padding:10px;
  
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 15px 0;
  font-size: 25px;
}

.item3 { grid-area: 1 / 4 / 3 / 3; }
.item2 { grid-area: 2 / 3 / 3 / 4; }
.item1 { grid-area: 4 / 4 / 4 / 2; }
.item4 { grid-area: 1 / 2 / 2 / 3; }
.item5 { grid-area: 1 / 2 / 2 / 3; }

@media only screen and (max-width: 768px){
  .grid-container {
    grid-template-columns: repeat(auto-fill,5,1fr);
    padding: 2px;
  }
.grid-container > div {
  font-size: 15px;
 
}
.item3 { grid-area: 2 / 4 ; }
.item2 { grid-area: 2 / 4 ; }
.item1 { grid-area: 2 / 4 ; }
.item4 { grid-area: 2 / 4 ; }

}

`