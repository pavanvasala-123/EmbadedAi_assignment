import React from 'react'
import CategoryItem from '../Categories/CategoryItem'
import '../Categories/Categories.css'

const categories = [
    {categoryName :"Helpers"},
    {categoryName :"Anime Game Characters"},
    {categoryName :"Games"},
    {categoryName :"Anime"},
    {categoryName :"Game Caharacters"},
    {categoryName :"Comedy"},
    {categoryName :"VTuber"},
    {categoryName :"Books"},
    {categoryName :"Image Generating"},
    {categoryName :"Discussion"},
    {categoryName :"Language Learning"},
    {categoryName :"History"},
    {categoryName :"Religion"},
    {categoryName :"Animals"},
    {categoryName :"Philosophy"},
    {categoryName :"Politics"},
   
]

const Categories = () => {
  return (
    <div className='categoty_con'>
      {
        categories.map(eachCategory => <CategoryItem category ={eachCategory}/>)
      }
    </div>
  )
}

export default Categories
