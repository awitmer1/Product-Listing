import React, { useState } from 'react';
import './SortToggle.css';

const SortToggle = ({setAlphabetize}) => {
    
    const [buttonAZ, setButtonAZ] = useState('a-z');
    const [buttonText, setButtonText] = useState('Sort Alphabetically (A-Z)')

    function handleClick() {
        if(buttonAZ === 'a-z'){
            setButtonAZ('z-a');
            setButtonText('Reverse Alphabetically (Z-A)');
            setAlphabetize('z-a');
        } else {
            setButtonAZ('a-z');
            setButtonText('Sort Alphabetically (A-Z)');
            setAlphabetize('a-z');
        }
      
    }

    return ( 
        <div className='sort-toggle'>
            <button className={buttonAZ} onClick={handleClick}>{buttonText}</button>
        </div>
     );
}
 
export default SortToggle;

