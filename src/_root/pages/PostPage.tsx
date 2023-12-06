import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type PostParams = {
  body: string;
  id: number;
  title: string;
};

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState<PostParams>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const result = await response.json();
        console.log(result);
        setPost(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex-center w-full  p-5 ">
      <div className="max-w-[1440px] ">
        <div className="my-3 max-w-[970px]  w-full">
          <h2 className="underline text-black ">Nature</h2>
          {/* <div className="bg-black h-[2.5rem] min-w-[2.5rem] rounded-full "></div> */}
          <h1 className="my-2 text-3xl font-semibold capitalize text-dark-1">
            read this title how is it ??
            {/* {post?.title} */}
          </h1>
          <h4 className="text-black text-[14px] ">Author name</h4>
        </div>
        <div className="w-full flex justify-center">
          <img
            src="/assets\images\img-3.avif"
            alt="blog-post "
            className="object-conver w-[970px]  h-[250px]xs:h-[200px] sm:h-[350px] md:h-[450px] lg:h-[550px]"
          />
        </div>

        <div className="flex-start flex-col">
          <div className="my-3">
            <p className="p-2 text-[12px] md:text-[16px] lg:text-[18px] text-dark-1 lflex max-w-[970px] fles-center   md:px-32 sm:px-16">
              This code sets up the DELETE route in Express, which receives the
              program ID and detail ID as parameters, then uses Mongoose to
              delete the specified detail from the program's "details" array. It
              responds with JSON indicating success or failure. Ensure that
              you've imported and defined your Mongoose model for "Program" and
              have established a MongoDB connection before using this code This
              code sets up the DELETE route in Express, which receives the
              program ID and detail ID as parameters, then uses Mongoose to
              delete the specified detail from the program's "details" array. It
              responds with JSON indicating success or failure. Ensure that
              you've imported and defined your Mongoose model for "Program" and
              have established a MongoDB connection before using this code This
              code sets up the DELETE route in Express, which receives the
              program ID and detail ID as parameters, then uses Mongoose to
              delete the specified detail from the program's "details" array. It
              responds with JSON indicating success or failure. Ensure that
              you've imported and defined your Mongoose model for "Program" and
              have established a MongoDB connection before using this code This
              code sets up the DELETE route in Express, which receives the
              program ID and detail ID as parameters, then uses Mongoose to
              delete the specified detail from the program's "details" array. It
              responds with JSON indicating success or failure. Ensure that
              you've imported and defined your Mongoose model for "Program" and
              have established a MongoDB connection before using this code
              {/* {post?.body}
            {post?.body}
            {post?.body}
            {post?.body}
            {post?.body}
            {post?.body} */}
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img
              src="/assets\images\img-5.avif"
              alt="blog-post "
              className="object-conver w-[970px]  h-[250px]xs:h-[200px] sm:h-[350px] md:h-[450px] lg:h-[550px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPage;
