import React from 'react';

const AllMatches = ({item}) => {
    return (
        <div>
           {item.date} {item.ateam}:{item.ascore}={item.hscore}:{item.hteam}
        </div>
    );
};

export default AllMatches;