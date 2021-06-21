import { BlogCard } from "./BlogCard";
import { GridLayout } from "../GridLayout";

const blogs = [
  "nftbb",
  "streampoll",
  "sayhappy",
  "nftbb",
  "streampoll",
  "sayhappy",
];

export const BlogPosts = () => {
  return (
    <GridLayout title={"Blog"}>
      {blogs.map((blog, index) => {
        return <BlogCard key={`${blog}-${index}`} title={blog} />;
      })}
    </GridLayout>
  );
};
