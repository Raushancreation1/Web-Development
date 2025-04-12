import React, { useContext, useState, useEffect } from 'react'
import { useLocation, useNavigation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from "../components/Header"
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigation();
  const {setLoading, loading} = useContext(AppContext)

  const blogId = location.pathname.split("/").at(-1)

  async function fetchRelatedBlogs () {
    setLoading(true);
    let url= `${baseUrl}?blogId=${blogId}`;

    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs)
    }
    catch(error){

    }

  }



  return (
    <div>
      <Header/>
      <div>
        <button
        onClick={() => navigation(-1)}>
          Back
        </button>
      </div>
      {
        loading ? 
        (<div>
          <p>Loading</p>

        </div>) :
        blog ?
        (<div>
          <BlogDetails post={blog}/>
          <h2>Related Blogs</h2>
          {
            relatedblogs.map( (post) => (
              <div key={post.id}>
                <BlogDetails post={post}/>
              </div>
            ))
          }

          </div>):
          (<div>
            <p>No Blog Found</p>
          </div>)
        
      }

    </div>
  )
}

export default BlogPage