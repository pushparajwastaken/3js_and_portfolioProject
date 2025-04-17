import React from "react";
import { meshBounds, useGLTF } from "@react-three/drei";
import { useRef } from "react";
const Target = () => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltfs"
  );
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Target;
