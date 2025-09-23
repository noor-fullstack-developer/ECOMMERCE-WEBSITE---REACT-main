import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Questionform = () => {
  const [Question, setQuestion] = useState(false);
  const Qopenner = () => {
    setQuestion(!Question);
  };
  const submited = () => {
    alert("The Review had been succesfully registered");
  };
  return (
    <>
      <button
        className="font-light hover:shadow-[0_0_0_1px_rgba(0,0,0,1)] shadow-[0_0_0_1px_rgba(0,0,0,0.25)] px-10 my-5 py-2"
        onClick={Qopenner}
      >
        Ask A Question
      </button>
      {Question && (
        <motion.form
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[85rem] shadow-[0_0_15px_0_rgba(0,0,0,0.25)] p-6"
        >
          <div className="flex gap-5 flex-col">
            <span className="font-light text-gray-700">ASK A QUESTION</span>
            <span className="font-light text-gray-700 text-[15px]">
              * Indicates a required field
            </span>
            {/*Input of Question */}
            <div className="flex flex-col gap-2">
              <span className="font-light text-gray-700">*Question:</span>
              <input
                placeholder="Enter Question Here"
                className="border p-3"
                required
              ></input>
            </div>
            {/*User name and Email */}
            <div className="flex justify-between gap-4 items-center">
              <div className="flex flex-col gap-2 w-1/2">
                <span className="font-light text-gray-700">
                  *Use your name:
                </span>
                <input
                  placeholder="Enter Name Here"
                  className="border p-2"
                  required
                ></input>
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <span className="font-light text-gray-700">*Email:</span>
                <input
                  placeholder="Enter Email Here"
                  className="border p-2"
                  type="Email"
                  required
                ></input>
              </div>
            </div>
            <button
              className="bg-black text-white w-1/6 p-2 font-bold tracking-widest"
              type="submit"
              onClick={submited}
            >
              Post
            </button>
          </div>
        </motion.form>
      )}
    </>
  );
};

export default Questionform;
