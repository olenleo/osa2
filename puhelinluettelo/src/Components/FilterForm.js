import React from 'react'

const FilterForm = ( {filterText, handleFilterChange} ) =>  {
    return(
        <p>Filter names with <input value ={filterText} onChange={handleFilterChange}/></p>
)
}
export default FilterForm