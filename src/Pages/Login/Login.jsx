import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link,useLocation,useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';



const Login = () => {
    const { signIn }= useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

const onSubmit = data =>{
    const {email,password} = data

    signIn(email,password)
    .then(() =>{
      navigate(location?.state ? location.state:'/')
     toast.success('Login Success')
    })
    .catch(()=>{
       toast.error('something went wrong')
    })

}




    return (
        <div className="hero mt-14 mb-14">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" 
                {...register("email", { required: true })}
                />
                 {errors.email && (
                        <span className="text-red-500">This field is required</span>
                      )}
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered"
                {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
                
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
                <p className="text-center">Do Not Have Account? <Link className="text-blue-800 font-bold" to={'/register'}>Register now</Link></p>
            </div>
          </div>
        </div>
      </div>
          );
      };
    

export default Login;