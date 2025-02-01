const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 space-y-3  text-center my-5 mx-auto">
      <hr />
      <h1> {heading} </h1>
      <hr />
      <p className="text-sm text-purple-400">-------{subHeading}-------</p>
    </div>
  );
};

export default SectionTitle;
