import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "../components/HackerRoom.jsx";
const Hero = () => {
  return (
    <section className="min-h-screen w-full flex-col border-2 border-blue-500 relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl  font-medium text-white text-center font-serif ">
          Hi,I am Pushparaj <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Learning and Improving Daily
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="">
          <Suspense fallback={null}></Suspense>
        </Canvas>
      </div>
    </section>
  );
};
export default Hero;
