import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        user && <div className="flex mt-12 mb-7 flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
            <Helmet>
                <title>Profile-VacationBliss</title>
            </Helmet>
        <img src={user.photoURL} alt="" className="w-72 h-72 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">

       <div>
       <h1 className="md:text-xl text-gray-400"><span className="font-extrabold text-gray-500">Creation Date:</span> {user.metadata.
creationTime}</h1>
       </div>
     
            <div className="my-2 space-y-4 md:space-y-8">
               
            <h1 className="text-xl md:text-3xl text-gray-600 mt-5 md:mt-12 font-bold">Name: {user.displayName}</h1>
                <h2 className="text-xl text-gray-600  font-semibold sm:text-2xl">
                    Email: {user.reloadUserInfo.email}
                </h2>

                <p className="px-5 text-xs sm:text-base dark:text-gray-600"><span className="font-bold">User Id: </span>{user.uid}</p>
            </div>
            <div className="flex justify-end">
            <h1 className="text-xl font-bold text-gray-700 mt-4 md:mr-20">Want To <Link className="text-blue-700 font-extrabold" to={'/updateProfile'}>Update Profile?</Link></h1>
            </div>
        </div>
    </div>
    );
};

export default Profile;