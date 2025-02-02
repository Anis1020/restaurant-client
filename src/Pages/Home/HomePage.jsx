import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import BistroAbout from "../../Components/BistroAbout/BistroAbout";
import Category from "../../Components/Category/Category";
import ChefRecommend from "../../Components/ChefRecoment/ChefRecommend";
import SpecialItem from "../../Components/Shared/SpecialItem";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";
import PopularMenu from "../PopularMenu/PopularMenu";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Food Hubs</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroAbout></BistroAbout>
      <PopularMenu></PopularMenu>
      <ChefRecommend></ChefRecommend>
      <SpecialItem></SpecialItem>
      <TestimonialCard></TestimonialCard>
    </div>
  );
};

export default HomePage;
