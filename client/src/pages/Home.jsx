import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-700 flex items-center justify-center">
      <div className="px-4 py-12 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-white">Auth App!</h1>
        <p className="mb-4 text-white font-semibold">
          This full-stack application is built using the MERN stack, which
          includes MongoDB, Express, React, and Node.js. It features user
          authentication, allowing users to sign up, log in, and log out, with
          access to certain routes restricted to authenticated users only.
        </p>
        <p className="mb-4 text-white font-semibold">
          The front-end is crafted with React and utilizes React Router for
          seamless client-side navigation. The back-end is constructed with
          Node.js and Express, and the application uses MongoDB for data
          storage. Authentication is managed using JSON Web Tokens (JWT).
        </p>
        <p className="mb-4 text-white font-semibold">
          This app is designed to be a foundation for developing full-stack web
          applications with authentication capabilities using the MERN stack.
          You are welcome to use it as a base for your own projects!
        </p>
      </div>
    </div>
  );
};

export default Home;
