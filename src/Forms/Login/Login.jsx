import { useEffect, useRef, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      console.log("validate success");
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <h2>login page coming soon</h2>
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
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="Captcha"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleCaptcha}
                  className="btn btn-outline btn-xs"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  disabled={disable}
                  value={"Login"}
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
                <Link className="btn btn-link" to={"/register"}>
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

export default Login;
