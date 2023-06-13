import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Catagory from "../Catagory/Catagory";
import LastSection from "../LastSection/LastSection";
import BlogSectionOne from "./BlogSectionOne/BlogSectionOne";
import BlogSectionTwo from "./BlogSectionTwo/BlogSectionTwo";

const BlogPage = () => {
  return (
    <>
      <Header logo="{Finsweet" />
      <BlogSectionOne />
      <BlogSectionTwo />
      <Catagory heading="All Categories" />
      <LastSection />
      <Footer logo="{Finsweet" />
    </>
  );
};

export default BlogPage;
