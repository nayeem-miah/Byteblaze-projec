import { Link } from "react-router-dom";
import placeholder from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const BlogCard = ({blog, delateAble, handleDelate}) => {
    const {title,description,cover_image,published_at,id} = blog;

  return (
<div className="flex relative">
<Link to={`/blog/${id}`}
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto transition border-2 hover:scale-105 border-primary border-opacity-30 hover:border-secondary group hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeholder}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-600">{new Date(published_at).toDateString()}</span>
        <p>
          {description}
        </p>
      </div>
    </Link>
    {
        delateAble && (<div onClick={()=> handleDelate(id)}
             className="absolute bg-primary p-3 rounded-full hover:scale-105 -top-5 -right-1 hover:primary hover:opacity-95 opacity-80" ><MdDeleteForever size={20} className="text-secondary group-hover:text-primary"></MdDeleteForever></div>)
    }

            
</div>
  );
};

BlogCard.propTypes ={
    blog:PropTypes.object.isRequired,
    handleDelate: PropTypes.func.isRequired,
    delateAble: PropTypes.bool.isRequired
}

export default BlogCard;
