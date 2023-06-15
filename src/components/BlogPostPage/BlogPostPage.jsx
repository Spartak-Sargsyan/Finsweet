import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LastSection from "../LastSection/LastSection";
import BlogPostSectionOne from "./BlogPostSectionOne/BlogPostSectionOne";
import BlogPostSectionThree from "./BlogPostSectionThree/BlogPostSectionThree";
import BlogPostSectionTwo from "./BlogPostSectionTwo/BlogPostSectionTwo";

const BlogPostPage = () => {
  return (
    <>
      <Header logo="{Finsweet" />
      <BlogPostSectionOne />
      <BlogPostSectionTwo />
      <BlogPostSectionThree />
      <LastSection />
      <Footer logo="{Finsweet" />
    </>
  );
};

export default BlogPostPage;
