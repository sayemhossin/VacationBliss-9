import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";


const UpdateProfile = () => {

const {updateUserProfile} = useContext(AuthContext)


const handleSubmit = (e) =>{

   const photo = e.target.photo.value
   const name = e.target.name.value
   updateUserProfile(name,photo)
   .then(() =>{
   
  
   })
   .catch(err=>{
       console.log(err)
   })

}




    return (
        <div className="hero mt-12 mb-12">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Your Profile</h1>
          
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
            <form onSubmit={handleSubmit} className="card-body">

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="Name" className="input input-bordered"  />
                
              </div>




              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered"  />
              </div>

             

              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateProfile;