import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  console.log(blogs);
  const blogs1 = [
    {
      id: 1,
      title: "blog 1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia sunt nihil nisi. Porro aliquam voluptatem tempora,perspiciatis et odio",
      coverImage:
        "https://cdn.dribbble.com/users/2814689/screenshots/14486461/figma-for-dribble-v1_4x.jpg",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sequi commodi doloribus id laborum porro?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sequi commodi doloribus id laborum porro?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis porro accusamus corrupti exercitationem excepturi facere, asperiores tenetur vitae quod cupiditate explicabo, maiores veritatis consectetur, unde cumque assumenda iusto laborum eveniet ea neque est. Sit aliquid consectetur, sint saepe dolores quibusdam. Aut quae laborum hic culpa totam, quasi voluptas magni velit iusto omnis debitis sequi deserunt explicabo, temporibus accusamus inventore, repudiandae non quisquam doloremque. Dolorum laudantium inventore dolore repellat molestiae earum quibusdam omnis ipsum nihil ducimus nam porro atque quidem ex sit consequuntur animi, voluptatem sunt iure nemo fuga tempore voluptatum. Quia, ullam! Obcaecati ab incidunt aperiam tempora fugit quae fugiat.",
      authorName: "Jane Doe",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      authorDesc: "Web Developer",
    },
    {
      id: 2,
      title: "blog 2",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia sunt nihil nisi. Porro aliquam voluptatem tempora,perspiciatis et odio",
      coverImage:
        "https://cdn.dribbble.com/users/2814689/screenshots/14486461/figma-for-dribble-v1_4x.jpg",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sequi commodi doloribus id laborum porro?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sequi commodi doloribus id laborum porro?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis porro accusamus corrupti exercitationem excepturi facere, asperiores tenetur vitae quod cupiditate explicabo, maiores veritatis consectetur, unde cumque assumenda iusto laborum eveniet ea neque est. Sit aliquid consectetur, sint saepe dolores quibusdam. Aut quae laborum hic culpa totam, quasi voluptas magni velit iusto omnis debitis sequi deserunt explicabo, temporibus accusamus inventore, repudiandae non quisquam doloremque. Dolorum laudantium inventore dolore repellat molestiae earum quibusdam omnis ipsum nihil ducimus nam porro atque quidem ex sit consequuntur animi, voluptatem sunt iure nemo fuga tempore voluptatum. Quia, ullam! Obcaecati ab incidunt aperiam tempora fugit quae fugiat.",
      authorName: "Jane Doe",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      authorDesc: "Web Developer",
    },
    {
      id: 3,
      title: "blog 3",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia sunt nihil nisi. Porro aliquam voluptatem tempora,perspiciatis et odio",
      coverImage:
        "https://cdn.dribbble.com/users/2814689/screenshots/14486461/figma-for-dribble-v1_4x.jpg",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sequi commodi doloribus id laborum porro?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sequi commodi doloribus id laborum porro?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis porro accusamus corrupti exercitationem excepturi facere, asperiores tenetur vitae quod cupiditate explicabo, maiores veritatis consectetur, unde cumque assumenda iusto laborum eveniet ea neque est. Sit aliquid consectetur, sint saepe dolores quibusdam. Aut quae laborum hic culpa totam, quasi voluptas magni velit iusto omnis debitis sequi deserunt explicabo, temporibus accusamus inventore, repudiandae non quisquam doloremque. Dolorum laudantium inventore dolore repellat molestiae earum quibusdam omnis ipsum nihil ducimus nam porro atque quidem ex sit consequuntur animi, voluptatem sunt iure nemo fuga tempore voluptatum. Quia, ullam! Obcaecati ab incidunt aperiam tempora fugit quae fugiat.",
      authorName: "Jane Doe",
      authorImg:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      authorDesc: "Web Developer",
    },
  ];

  return (
    <div className='w-full bg-[#f9f9f9] py-[50px] '>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 ss:grid-cols-1 sm:grid-cols-2 gap-8 px-4 text-black'>
          {blogs.data.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                <img
                  className='h-56 w-full object-cover'
                  src={`http://localhost:1337${blog.coverImage}`}
                />
                <div className='p-8 '>
                  <h3 className='font-bold text-2xl my-1'>
                    {blog.attributes.blogTitle}
                  </h3>
                  <p className='text-gray-600 text-xl'>{blog.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
