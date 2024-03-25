import { useEffect, useState } from "react";
import { delateBlog, getBlogs } from "../utlis";
import BlogCard from "../Components/BlogCard";
import EmptyState from "../Components/EmptyState";


const Bookmarks = () => {
  
  const [blogs, setBlogs] = useState([]);

  
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);


  const handleDelate = (id) => {
    delateBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  
  if (blogs.length === 0) {
    return (
      <EmptyState
        message={"No Bookmarks Available!"}
        address={"/"}
        label={"Go to Home"}
        address2={"/blogs"}
        label2={"go to blogs"}
      ></EmptyState>
    );
  }
  return (
    <div className="grid justify-center gap-8 px-4 sm:px-8 lg:px-12 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          handleDelate={handleDelate}
          delateAble={true}
          key={blog.id}
          blog={blog}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
