import React from 'react'
import Header from '../components/Header'
import { useNavigation, useLocation } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {

  const navigation = useNavigation();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>
      <div>
        <button
      onClick={() => navigation(-1)}
      >
        Back
        </button>
        <h2>
          Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage