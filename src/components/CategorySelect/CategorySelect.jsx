import React from 'react';
import './categoryselect.css'


const CategorySelect = ({categories, selectedCategory, setSelectedCategory}) => {

    return ( 
        <div className='category'>
            <p>Filter by:</p>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category) => {
                    return (
                        <option value={category}>{category}</option>
                    )
                })}
            </select>
        </div>
     );
}
 
export default CategorySelect;