import { useLoaderData } from "react-router-dom";
import placeholder from "../assets/404.jpg";
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';


const Content = () => {
  const blog = useLoaderData();
  const { title, cover_image,body_html, id, tags, url  } = blog;

  // console.log(blog)
  return (
    <div
      to={`/blog/${id}`}
      rel="noopener noreferrer"
      href="#"
      className=" mx-auto  border border-opacity-30 p-2 group hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeholder}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
        {tags.map((tag) => (
          <a
            key={tag}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className=" space-y-2">
        <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </a>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        
      </div>
    </div>
  );
};

export default Content;
