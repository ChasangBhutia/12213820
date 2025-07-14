import React from "react";

const MainForm = () => {
  return (
    <article className="bg-red-200 h-50 w-150 m-auto mt-30 p-5 rounded">
      <h2 className="text-2xl">Shorten your url for easy access:</h2>
      <form className="flex mt-3">
        <input
          className="bg-white p-2 rounded w-full"
          type="text"
          placeholder="Enter your url"
        />
        <input className="bg-yellow-300 p-2" type="submit" value="short url" />
      </form>
      <p className="bg-white mt-5 p-3 rounded">Your shorten Link: </p>
    </article>
  );
};

export default MainForm;
