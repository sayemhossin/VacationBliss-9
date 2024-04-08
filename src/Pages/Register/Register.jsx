import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const Register = () => {
const {createUser} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

const onSubmit = data =>{
    const {email,name,password,photo} = data

    createUser(email,password)
    .then(result =>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })

}


    return (
        <div className="hero mt-14 mb-14">
  <div className="hero-content flex-col w-full">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleSubmit(onSubmit)} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" 
           {...register("name", { required: true })}
          />
           {errors.name && <span className="text-red-500">This field is required</span>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered"
           {...register("photo")}
          />
        </div>


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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div>
                <p className="text-center">Have Account? <Link className="text-blue-800 font-bold" to={'/login'}>Login Now</Link></p>
            </div>
    </div>
  </div>
</div>
    );
};

export default Register;