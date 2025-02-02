import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";

import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
const Menu = () => {
  const [menus] = useMenu();
  const dessert = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const soup = menus.filter((item) => item.category === "soup");
  const salad = menus.filter((item) => item.category === "salad");
  const offered = menus.filter((item) => item.category === "offered");
  return (
    <div className="">
      <Helmet>
        <title>Food Hub | Menus</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menus"}></Cover>
      <SectionTitle
        heading={"Offer"}
        subHeading={"don t miss the offer"}
      ></SectionTitle>
      {/* offered item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menuitem*/}
      <MenuCategory
        items={dessert}
        title="dessert"
        coverImg={dessertImg}
      ></MenuCategory>{" "}
      <MenuCategory
        items={pizza}
        title="pizza"
        coverImg={pizzaImg}
      ></MenuCategory>{" "}
      <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>{" "}
      <MenuCategory
        items={salad}
        title="salad"
        coverImg={saladImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
