import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PostList from "../../components/posts/PostList";
import "./category.css";
import { useDispatch, useSelector } from "react-redux"
import { fetchPostsBasedOnCategory } from "../../redux/apiCalls/postApiCall";


const Category = () => {
    const dispatch = useDispatch();

    const { postsCate } = useSelector(state => state.post)

    const { category } = useParams();

    useEffect(() => {
      dispatch(fetchPostsBasedOnCategory(category))
      window.scrollTo(0,0);
    }, [category]);

    return ( 
    <div className="category">
      {postsCate.length === 0 ? (
       <>
        <h1 className="category-not-found">
        Post With <span>{category}</span> category not found
        </h1>
        <Link to="/posts" className="category-not-found-link">
          go to posts page
        </Link>
       </>
      ) : (
       <>
        <h1 className="category-title">Posts based on {category}</h1>
        <PostList posts={postsCate} />
       </>
      
 ) }
   
    </div>
   );
}
 
export default Category;