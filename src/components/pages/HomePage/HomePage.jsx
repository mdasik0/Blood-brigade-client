import { useState } from "react";

const HomePage = () => {
  const [circle, setCircle] = useState(false);
  return (
    <div className="bg-stone-900 h-screen text-white flex justify-center items-center">
      <div className="bg-white rounded-xl overflow-hidden h-[500px] relative w-[300px]">
        <div
          onClick={() => setCircle(!circle)}
          className={`bg-blue-400 h-36 w-36 left-20 absolute duration-300   ${
            circle ? "scale-150 -top-16 rounded-full " : "top-16  rounded-xl"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default HomePage;
