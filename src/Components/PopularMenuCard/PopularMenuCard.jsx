const PopularMenuCard = ({ menu }) => {
  const { name, recipe, image, price } = menu;
  return (
    <>
      <div className="flex gap-4 items-center bg-base-100  shadow-xl p-3">
        <img
          src={image}
          alt=""
          className="w-16 h-16 rounded-b-full rounded-tr-full"
        />
        <div>
          <h1>{name}-----------</h1>
          <p>{recipe}</p>
        </div>
        <p className="text-purple-400">{price}</p>
      </div>
    </>
  );
};

export default PopularMenuCard;
