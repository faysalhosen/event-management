import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleAuthProvider, } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";



const Login = () => {
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn,googleSignIn } = useContext(AuthContext);


  const handleLogin = (e) => {

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        toast.success("Login successfull.",result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(`login failed, ${error.message}`);
        // console.log(error.message);
      });
      

      

  };
  

  const handleGoogleSignIN = (e) => {
    e.preventDefault()
    googleSignIn(auth, provider)
    .then(result => {console.log("signInWithGoogle", result.user)})
    .catch(error=>{console.error(error.message)})
  } 
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email..."
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary mb-3">Login</button>
                <button className=" hidden btn btn-primary " onClick={handleGoogleSignIN}>Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
