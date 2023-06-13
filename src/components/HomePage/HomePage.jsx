import Catagory from "../Catagory/Catagory";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo/HomeSectionTwo";
import HomeSectionThree from "./HomeSectionThree/HomeSectionThree";
import HomeSectionFour from "./HomeSectionFour/HomeSectionFour";
import HomeSectionFive from "./HomeSectionFive/HomeSectionFive";
import HomeSectionSix from "./HomeSectionSix/HomeSectionSix";
import LastSection from "../LastSection/LastSection";

const HomePage = () => {
  return (
    <>
      <Header logo="{Finsweet" />
      <HomeSectionOne />
      <HomeSectionTwo />
      <Catagory heading="Choose A Catagory" />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <LastSection />
      <Footer logo="{Finsweet" />
    </>
  );
};

export default HomePage;
