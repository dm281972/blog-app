import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

// type Post = {
//   id: number;
//   body: string;
//   title: string;
// };
// type PostDetailProps = {
//   post: Post;
// };
//({ post }: PostDetailProps)
const PostDetails = ({ src }: { src: string }) => {
  const id = 1;
  return (
    // <div className="flex flex-col min-h-[300px] lg:max-h-[200px] xs:max-h-[600px] p-3 justify-center items-center text-black-100 bg-primary-blue-100 hover:shadow-md rounded-3xl group;">
    //   <div className="w-full my-2 ">
    //     <img
    //       src="/assets/images/blog.png"
    //       alt="blog-image"
    //       className="object-cover  bg-no-repeat"
    //     />
    //   </div>
    //   <div className="w-full flex justify-between items-start gap-2">
    //     <h2 className="text-[22px] leading-[26px] font-bold capitalize text-white;">
    //       {post.title ? post.title : "title"}
    //     </h2>
    //   </div>

    //     <Link
    //       to={`posts/${post.id}`}
    //       className="p-2 bg-purple-600 hover:bg-purple-900 text-white rounded-md mt-2 "
    //     >
    //       Read more
    //     </Link>

    // </div>
    <Link to={`posts/${id}`}>
      <Card
        className="max-w-[310px]"
        renderImage={() => (
          <img
            className=" box-border object-cover h-[170px] "
            src={src}
            alt="image 1"
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="discription text-black text-[14px] ">
          This code sets up the DELETE route in Express, which receives the
          program ID and detail ID as parameters
        </p>
      </Card>
    </Link>
  );
};

export default PostDetails;
