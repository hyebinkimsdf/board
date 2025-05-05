"use client";

import { useRouter } from "next/navigation";

export default function Write() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Post published successfully!");
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Write a Post</h1>
      <form className="w-full max-w-lg">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the title of your post"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            id="content"
            placeholder="Write your post content here..."
            rows={10}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </form>
    </div>
  );
}
