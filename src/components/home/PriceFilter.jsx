import React from 'react'

const PriceFilter = ({setObjFilterPrice}) => {
  
    const submit= e =>{
        e.preventDefault()
        const obj={
            from:+e.target.fromPrice.value,
            to:+e.target.toPrice.value
        }
        setObjFilterPrice(obj)  
       
    }

  return (
    <form onSubmit={submit} className='price-filter'>
        <h3>Price</h3>
        <ul>
            <li>
                <label htmlFor="fromPrice">From</label>
                <input  className='input-price' type="number" id='fromPrice'/>
            </li>
            <li>
                <label htmlFor="toPrice">To</label>
                <input className='input-price' type="number" id='toPrice'/>
            </li>
        </ul>
        <button className='active__stl-btn'>Filter Price</button>
    </form>
  )
}

export default PriceFilter