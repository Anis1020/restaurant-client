const FoodCard = ({ items }) => {
  const { name, image, price, recipe } = items;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute top-1 right-5 p-2 rounded-3xl">
          {price} $
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
