import { useRef } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
  const captchaRef = useRef(null);
  //   const [disable, setDisable] = useState(true);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="pt-14">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>name field is required</span>}
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Optional</span>
                </label>
                <input
                  type="text"
                  {...register("photo")}
                  placeholder="Photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input type="checkbox" name="terms" ref={captchaRef} required />
                <span>Accept Our terms & Condition</span>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  //   disabled={disable}
                  value={"Registration"}
                />
              </div>
            </form>
            <div>
              <h1 className="flex gap-6 justify-center py-4">
                <span className="flex bg-pink-400 p-2 rounded-2xl items-center gap-4 text-2xl">
                  <FaGoogle />
                  Google
                </span>
                <span className="flex bg-pink-400 p-2 rounded-2xl items-center gap-4 text-2xl">
                  <FaGithub />
                  GitHub
                </span>
              </h1>
              <h2 className="my-4 text-center">
                Are you new here? Please{" "}
                <Link className="btn btn-link" to={"/login"}>
                  Register
                </Link>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
