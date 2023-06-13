import React from 'react';
import './categoryselect.css'
import SortToggle from '../SortToggle/SortToggle';


const CategorySelect = ({categories, setSelectedCategory, setAlphabetize}) => {

    return ( 
        <div className='category'>
            <div>
                <p>Filter by:</p>
            <select onClick={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category) => {
                    return (
                        <option key={category} value={category}>{category}</option>
                    )
                })}
            </select>
            </div>            
            <SortToggle setAlphabetize={setAlphabetize}/>
        </div>
     );
}
 
export default CategorySelect;