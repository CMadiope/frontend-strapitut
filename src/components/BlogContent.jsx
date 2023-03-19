import React from "react";

const BlogContent = () => {
  const blog = {
    id: 1,
    title: "10 Days of Solidarity",
    desc: "Learn how to use Solidarity in 10 days",
    converImg:
      "https://cdn.dribbble.com/users/2814689/screenshots/14486461/figma-for-dribble-v1_4x.jpg",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sequi commodi doloribus id laborum porro?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sequi commodi doloribus id laborum porro?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis porro accusamus corrupti exercitationem excepturi facere, asperiores tenetur vitae quod cupiditate explicabo, maiores veritatis consectetur, unde cumque assumenda iusto laborum eveniet ea neque est. Sit aliquid consectetur, sint saepe dolores quibusdam. Aut quae laborum hic culpa totam, quasi voluptas magni velit iusto omnis debitis sequi deserunt explicabo, temporibus accusamus inventore, repudiandae non quisquam doloremque. Dolorum laudantium inventore dolore repellat molestiae earum quibusdam omnis ipsum nihil ducimus nam porro atque quidem ex sit consequuntur animi, voluptatem sunt iure nemo fuga tempore voluptatum. Quia, ullam! Obcaecati ab incidunt aperiam tempora fugit quae fugiat.",
    authorName: "Jane Doe",
    authorImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    authorDesc: "Web Developer",
  };

  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-y-8  sm:gap-8  px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
          <div className='col-span-2 gap-8 '>
            <img
              src={blog.converImg}
              alt='/'
              className='h-56 w-full object-cover'
            />
            <h1 className='font-bold text-2x my-1 pt-5'>{blog.title}</h1>
            <div className='pt-5'>
              <p className=''>{blog.content}</p>
            </div>
          </div>
          <div className='w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px] '>
            <div>
              <img
                src={blog.authorImg}
                alt='/'
                className='p-2 w-32 h-32 rounded-full mx-auto object-cover'
              />
              <h1 className='font-bold text-2xl text-center  text-gray-900 pt-3'>
                {blog.authorName}
              </h1>
              <p className='text-center text-gray-900 font-medium'>
                {blog.authorDesc}
              </p>
            </div>
          </div>
          <div className=''></div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
