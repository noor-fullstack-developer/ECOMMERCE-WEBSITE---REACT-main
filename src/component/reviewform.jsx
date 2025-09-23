import React, { useState } from "react";
import star from "../assets/star.svg";
import { motion } from "framer-motion";

const Reviewform = () => {
  const [Review, setReview] = useState(false);

  const openner = () => {
    setReview(!Review);
  };

  const submited = (e) => {
    e.preventDefault();
    alert("The Review has been successfully registered");
  };

  return (
    <>
      <button
        className="font-light hover:shadow-[0_0_0_1px_rgba(0,0,0,1)] shadow-[0_0_0_1px_rgba(0,0,0,0.25)] px-10 my-5 py-2"
        onClick={openner}
      >
        Write A Review
      </button>

      {Review && (
        <motion.form
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[85rem] shadow-[0_0_15px_0_rgba(0,0,0,0.25)] p-6"
          onSubmit={submited} // submit handler here
        >
          <div className="flex gap-5 flex-col">
            <span className="font-light text-gray-700">WRITE A REVIEW</span>
            <span className="font-light text-gray-700 text-[15px]">
              * Indicates a required field
            </span>

            <div className="flex items-center gap-2">
              <span>Score:</span>
              <img src={star} className="h-6 mt-2" alt="stars" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-light text-gray-700">*Title:</span>
              <input
                placeholder="Enter Title Here"
                className="border p-3"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-light text-gray-700">*Review:</span>
              <input
                placeholder="Enter Review Here"
                className="border p-5"
                required
              />
            </div>

            <div className="flex justify-between gap-4 items-center">
              <div className="flex flex-col gap-2 w-1/2">
                <span className="font-light text-gray-700">
                  *Use your name:
                </span>
                <input
                  placeholder="Enter Name Here"
                  className="border p-2"
                  required
                />
              </div>

              <div className="flex flex-col w-1/2 gap-2">
                <span className="font-light text-gray-700">*Email:</span>
                <input
                  placeholder="Enter Email Here"
                  className="border p-2"
                  type="email"
                  required
                />
              </div>
            </div>

            <button
              className="bg-black text-white w-1/6 p-2 font-bold tracking-widest"
              type="submit"
            >
              Post
            </button>
          </div>
        </motion.form>
      )}
    </>
  );
};

export default Reviewform;
