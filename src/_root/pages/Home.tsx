import { useEffect, useState } from "react";
//import { Hero } from "../../components/shared";
import PostDetails from "../../components/shared/PostDetails";
type Post = {
  id: number;
  body: string;
  title: string;
};

const Home = () => {
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const result = await response.json();

        setData(result.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="w-full mt-2">
      <div className="w-full  ">
        <div className="relative flex-center  mx-4">
          <div className="absolute  text-white bottom-10  mx-2">
            <h2 className="underline ">Nature</h2>
            <div className="flex justify-start items-center my-3">
              <h1 className="font-bold text-[20px] md:text-[32px]">
                
                Noteworthy technology acquisitions 2021
              </h1>
            </div>

            <p className="hidden sm:block">
              This code sets up the DELETE route in Express, which receives the
              program ID and detail ID as parameters,
            </p>
          </div>
          <img
            src="/assets/images/img-2.avif"
            alt=""
            className="w-[970px]  h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover"
          />
        </div>
      </div>

      <div className=" sm:px-16  max-w-[1440px] mx-auto" id="discover">
        <section
          // className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4 py-8"
          className="flex flex-wrap justify-center  gap-4 py-8"
        >
          {/* {data?.map((post) => (
            //<PostDetails key={post.id} post={post} />
            
          ))} */}

          <PostDetails src="/assets/images/img-1.avif" />
          <PostDetails src="/assets/images/img-2.avif" />
          <PostDetails src="/assets/images/img-3.avif" />
          <PostDetails src="/assets/images/img-4.avif" />
          <PostDetails src="/assets/images/img-7.avif" />
          <PostDetails src="/assets/images/img-5.avif" />
          <PostDetails src="/assets/images/img-6.avif" />

          <PostDetails src="/assets/images/blog.png" />
          <PostDetails src="/assets/images/blog.png" />
          <PostDetails src="/assets/images/blog.png" />
          <PostDetails src="/assets/images/blog.png" />
        </section>
      </div>
    </section>
  );
};

export default Home;
