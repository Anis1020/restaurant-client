import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import PopularMenuCard from "../../Components/PopularMenuCard/PopularMenuCard";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter((menu) => menu.category === "popular");
  return (
    <div className="my-6">
      <SectionTitle
        heading={"FROM POPULAR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2  gap-6 my-4">
        {popular.map((menu) => (
          <PopularMenuCard key={menu._id} menu={menu}></PopularMenuCard>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
