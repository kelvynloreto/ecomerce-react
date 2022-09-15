 import React from 'react'
 
 const InputSearch = ({setInputSearch}) => {
    const handleChange=e=>{
        setInputSearch(e.target.value.trim().toLowerCase());
    }
   return (
     <div className='search-container'>
        <input type="text" onChange={handleChange} placeholder='What are you looking for?' />
     </div>
   )
 }
 
 export default InputSearch