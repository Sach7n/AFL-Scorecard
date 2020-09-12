import React from 'react';

const ShowMatches = ({item}) => {
    
    return (
        <div>
           {item.date} {item.ateam}:{item.ascore}={item.hscore}:{item.hteam}
        </div>
    );
};

export default ShowMatches;