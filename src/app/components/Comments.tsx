"use client";
import React from "react";
import { useState } from "react";

function Comments() {
  const [comments, setcomments] = useState([]);
  const [comment, setcomment] = useState("");
  const comentors = ["ALi", "Ahmed", "Maaz", "Shehbaz", "Talha"];
  const handleComments = (e: any) => {
    e.preventDefault();
    // const comment = e.target.comment.value;
    setcomments([...comments, comment]);
    setcomment("");
  };
  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold">Comments</h2>
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mt-4 bg-gray-800 my-2 p-2 rounded"
          >
            <div>
              <p className="text-sm font-semibold">
                {comentors[Math.floor(Math.random() * comentors.length)]}
              </p>
              <p className="text-xs text-gray-200">2 hours ago</p>
            </div>
            <p className="text-lg mt-2 ">{comment}</p>
          </div>
        ))}
        <form onSubmit={handleComments}>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comments;
