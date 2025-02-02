import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  //   console.log(watch("example"));
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="py-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <input placeholder="name" {...register("name")} />
        </div>{" "}
        <div>
          <input
            placeholder="category"
            {...register("category", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>
        <div>
          {/* include validation with required or other standard HTML validation rules */}
          <input
            placeholder="price"
            {...register("price", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.price && <span>This field is required</span>}
        </div>
        <div>
          <input className="btn btn-accent" type="submit" value={"Add Item"} />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
