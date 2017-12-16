import React from 'react';
import CurrentlyReading from './MyRead/CurrentlyReading';
import WantToRead from './MyRead/WantToRead';
import Read from './MyRead/Read';

const MyRead = () => {
    return(
        <div>
            <CurrentlyReading/>
            <WantToRead/>
            <Read/>
        </div>
    );
}

export default MyRead;