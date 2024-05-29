import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { VRButton, XR, Controllers, Hands } from "@react-three/xr";
import * as THREE from "three";

const ImageViewer = () => {
  const texture = new THREE.TextureLoader().load(
    "https://i.postimg.cc/QC5r27Xg/2022-04-13-Pano360-Recinto-Building-F-Metal-W-CC.jpg"
  );

  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <mesh>
            <sphereGeometry args={[500, 60, 40]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
          </mesh>
          <mesh position={[0, 0, -10]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color="red" />
            <Html position={[0, 1, 0]} className="hotspot">
              <div className="hotspot-content">
                <h3>Product Title</h3>
                <p>Description of the product goes here.</p>
                <button>Buy Now</button>
              </div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6ZAm27NvFCY?si=NdHi717qholYXLBg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Html>
          </mesh>
          <OrbitControls autoRotate autoRotateSpeed={0.5} />
        </XR>
      </Canvas>
    </>
  );
};

export default ImageViewer;
