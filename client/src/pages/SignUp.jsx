const SignUp = () => {
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-gray-100 border border-gray-300 rounded-lg p-3  "
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-gray-100 border border-gray-300 rounded-lg p-3  "
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-gray-100 border border-gray-300 rounded-lg p-3  "
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg uppercase">
          Sign Up
        </button>
      </form>
      <p className="text-center mt-5 flex gap-2">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 font-semibold">
          Login
        </a>
      </p>
    </div>
  );
};

export default SignUp;
