import bg from "../../assets/home/chef-service.jpg";
const BistroAbout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        // backgroundImage: "url('../../assets/home/chef-service.jpg')", //not working
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "700px",
        height: "300px",
        margin: "0 auto",
      }}
      className="flex justify-center items-center "
    >
      <div className="bg-white space-y-2 text-black w-8/12  p-5 text-center rounded">
        <h1 className="text-2xl font-bold ">BISTRO BOSS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quos
          odit culpa! Cumque quis ab rerum! Aliquid assumenda harum
          consequuntur.
        </p>
      </div>
    </div>
  );
};

export default BistroAbout;
