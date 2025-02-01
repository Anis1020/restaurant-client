import { useEffect, useState } from "react";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import PopularMenuCard from "../../Components/PopularMenuCard/PopularMenuCard";

const PopularMenu = () => {
  const [menus, setMenus] = useState([]);
  console.log(menus);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenus(popularMenu);
      });
  }, []);
  return (
    <div className="my-6">
      <SectionTitle
        heading={"FROM POPULAR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2  gap-6 my-4">
        {menus.map((menu) => (
          <PopularMenuCard key={menu._id} menu={menu}></PopularMenuCard>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
