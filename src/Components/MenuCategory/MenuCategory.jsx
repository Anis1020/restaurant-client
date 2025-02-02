import { Link } from "react-router-dom";
import PopularMenuCard from "../PopularMenuCard/PopularMenuCard";
import Cover from "../Shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2  gap-6 my-4">
        {items.map((menu) => (
          <PopularMenuCard key={menu._id} menu={menu}></PopularMenuCard>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline btn-success">Success</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
