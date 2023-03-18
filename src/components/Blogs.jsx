import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "blog 1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia sunt nihil nisi. Porro aliquam voluptatem tempora,perspiciatis et odio",
      coverImage:
        "https://cdn.dribbble.com/users/2814689/screenshots/14486461/figma-for-dribble-v1_4x.jpg",
    },
    {
      id: 2,
      title: "blog 2",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia sunt nihil nisi. Porro aliquam voluptatem tempora,perspiciatis et odio",
      coverImage:
        "https://cdn.dribbble.com/users/2814689/screenshots/14486461/figma-for-dribble-v1_4x.jpg",
    },
    {
      id: 3,
      title: "blog 3",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia sunt nihil nisi. Porro aliquam voluptatem tempora,perspiciatis et odio",
      coverImage:
        "https://cdn.dribbble.com/users/2814689/screenshots/14486461/figma-for-dribble-v1_4x.jpg",
    },
  ];

  return (
    <div className='w-full bg-[#f9f9f9] py-[50px] '>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 ss:grid-cols-1 sm:grid-cols-2 gap-8 px-4 text-black'>
          {blogs.map((blog) => (
            <div className='bg-white rounded-xl overflow-hidden drop-shadow-md' key={blog.id}>
              <img
                className='h-56 w-full object-cover'
                src={blog.coverImage}
              />
              <div className='p-8 '>
                <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                <p className='text-gray-600 text-xl'>
                  {blog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;