import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../store/slices/products.slice'
import getConfig from '../../utils/getConfig'

const CategoryFilter = () => {
 
    const [categories, setCategories] = useState()
    useEffect(() => {
        const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
      axios.get(URL,getConfig())
    .then(res=> setCategories(res.data.data.categories))
    .catch(err=>console.log(err))
    }, [])

    const dispatch = useDispatch()
const handleClick= id =>{
    dispatch(getProductByCategory(id))
}
const handleAllProduct= ()=>{
    dispatch(getAllProducts())
}


  return (
    <div>
        <h3>Category</h3>
        <ul>
            <li onClick={handleAllProduct}>All Product</li>
{
    categories?.map(category => 
    <li onClick={()=>handleClick(category.id)} key={category.id}>{category.name}</li>)
}
        </ul>
    </div>
  )
}

export default CategoryFilter