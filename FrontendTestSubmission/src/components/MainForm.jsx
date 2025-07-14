import React, { useState } from "react";
import { getShortUrl } from "../services/urlServices";

const MainForm = () => {
  const [shortUrl, setShortUrl] = useState("");

  const [url, seturl] = useState("");
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    console.log(shortUrl);

    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  function handleChange(e) {
    seturl(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await getShortUrl(url);
      if (response.data.success) setShortUrl(response.data.shortUrl);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <article className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-60 w-150 m-auto mt-30 p-5 rounded">
      <h2 className="text-2xl">Shorten your url for easy access:</h2>
      <form className="flex mt-3" onSubmit={handleSubmit}>
        <input
          value={url}
          className="bg-white p-2 w-full"
          type="text"
          placeholder="Enter your url"
          onChange={handleChange}
        />
        <input
          className="bg-zinc-900 text-white p-2"
          type="submit"
          value="short url"
        />
      </form>
      <p className="bg-white mt-5 p-3 rounded">
        <span className="font-semibold mr-3">Short Url:</span>{" "}
        <a href={shortUrl}>{shortUrl}</a>
      </p>
      <button className="bg-zinc-900 mt-2 p-3 text-white" onClick={copyText}>
        {copied ? "Copied to Clipboard" : "Copy Link"}
      </button>
    </article>
  );
};

export default MainForm;
