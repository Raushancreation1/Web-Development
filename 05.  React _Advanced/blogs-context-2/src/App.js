import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import BlogDetails from "./components/BlogDetails";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import BlogPage from "./Pages/BlogPage";
import { Routes, Route, useSearchParams} from "react-router-dom";



export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams ();
  const location= useLocation(); 

  useEffect( () => {
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {

      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number (page), tag );
    }
    else if(location.pathname.includes("categoies")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null , category);
    }

    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search] );
  
  

  return (
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/blogs/:blogId" element= {<BlogPage/>} />
      <Route path="/tags/:tag" element= {<TagPage/>} />
      <Route path="/categories/:categorie" element= {<CategoryPage/>} />

    </Routes>
    
  );
}
