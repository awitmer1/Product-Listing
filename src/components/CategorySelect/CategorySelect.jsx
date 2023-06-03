import React from 'react';
import './categoryselect.css'
import SortToggle from '../SortToggle/SortToggle';


const CategorySelect = ({categories, selectedCategory, setSelectedCategory, setAlphabetize}) => {

    return ( 
        <div className='category'>
            <div>
                <p>Filter by:</p>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category) => {
                    return (
                        <option value={category}>{category}</option>
                    )
                })}
            </select>
            </div>            
            <SortToggle setAlphabetize={setAlphabetize}/>
        </div>
     );
}
 
export default CategorySelect;