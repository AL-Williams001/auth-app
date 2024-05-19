import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col  gap-3">
        <img
          src={currentUser.profilePicture}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover self-center cursor-pointer mb-2 mt-2"
        />
        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
          className="bg-gray-100 border border-gray-300 rounded-lg p-3 "
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
          className="bg-gray-100 border border-gray-300 rounded-lg p-3 "
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-gray-100 border border-gray-300 rounded-lg p-3 "
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg uppercase">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer font-semibold">
          Delete Account
        </span>
        <span className="text-red-700 cursor-pointer font-semibold">
          {" "}
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
