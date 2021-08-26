import React from 'react'

const FilterForm = ( {filterText, handleFilterChange} ) =>  {
    return(
        <div>
            <p>Filter country with <input value ={filterText} onChange={handleFilterChange}/></p>
        </div>
)
}
export default FilterForm