import SectionTitle from "./SectionTitle/SectionTitle";
import featured from "../../assets/home/featured.jpg";
const SpecialItem = () => {
  return (
    <div
      className=" bg-fixed   relative "
      style={{
        backgroundImage: `url(${featured})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-base-200 absolute h-full w-full opacity-20 "></div>
      <div className="w-6/12 mx-auto py-9    z-40">
        <SectionTitle
          heading={"From Our Special Menu"}
          subHeading={"Check it out"}
        ></SectionTitle>
        <div className="flex  gap-3 items-center pb-16 ">
          <img className=" w-6/12" src={featured} alt="" />
          <div className="w-6/12 text-white p-1 ">
            <h3>February 1 2025</h3>
            <h3>From Our Special Menu</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              maxime nulla sunt enim quasi facere.
            </p>
            <button className="btn btn-outline btn-success bg-black  border-0 border-b-4  mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialItem;
