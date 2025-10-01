import bg from "../component/assets/reg-bg.jpg";
import ring from "../component//assets/hidden.png";
// import ring1 from "../component/assets/hidden1.png";
import angara from "../component/assets/angara.svg";
import { useState } from "react";

const Register = () => {
  const [hidden, setHidden] = useState(false);
  const [phone, setPhone] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  if (hidden) return null;

  const handleContinue = () => {
    localStorage.setItem("register_phone", phone);
    localStorage.setItem("register_subscribe", subscribe ? "true" : "false");
    // continue logic here
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat bg-cover flex justify-evenly items-center h-full overflow-hidden rounded-2xl shadow-lg"
    >
      <button
        onClick={() => setHidden(true)}
        type="button"
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold bg-white bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center shadow"
        aria-label="Close"
      >
        &times;
      </button>
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={ring} alt="Ring" width={180} className="mb-2" />
      </div>
      <div className="flex flex-col justify-center items-center px-8 py-6 bg-transparent bg-opacity-80 rounded-xl">
        <h2 className="font-bold text-lg mb-2">Welcome To</h2>
        <img src={angara} alt="Angara Logo" className="h-12 mb-2" />
        <span className="text-gray-500 font-medium text-sm mb-4 text-center">
          Get 5% additional discount on your first order
        </span>
        <input
          type="tel"
          placeholder="+91 | Enter your mobile number*"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="border w-64 border-gray-400 rounded p-2 mt-2 focus:outline-none focus:border-blue-400"
        />
        <button
          onClick={handleContinue}
          type="button"
          className="bg-gray-200 mt-5 rounded px-8 py-2 font-semibold hover:bg-gray-300 transition"
        >
          Continue
        </button>
        <span className="mt-5 text-sm text-gray-500 text-center">
          By continuing, I agree to{" "}
          <span className="text-black underline cursor-pointer">T&amp;C</span> &amp;{" "}
          <span className="text-black underline cursor-pointer">Privacy Policy</span>
        </span>
        <div className="flex items-center gap-2 mt-5">
          <input
            type="checkbox"
            id="subscribe"
            checked={subscribe}
            onChange={() => setSubscribe(!subscribe)}
          />
          <label htmlFor="subscribe" className="text-gray-500 cursor-pointer">
            Subscribe for exclusive offers from Angara
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
