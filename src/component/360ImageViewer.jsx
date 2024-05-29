import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { VRButton, XR, Controllers, Hands } from "@react-three/xr";
import * as THREE from "three";
const Hotspot = ({ position, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <mesh position={position} onClick={() => setShowInfo(!showInfo)}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial color="purple" />
      <Html position={[0, 1, 0]} className="hotspot">
        <div
          className="hotspot-icon"
          style={{
            background: "purple",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
          }}
        ></div>
      </Html>
      {showInfo && (
        <Html position={[0, 2, 0]} className="hotspot-content">
          <div className="hotspot-popup">
            <button className="close-btn" onClick={() => setShowInfo(false)}>
              x
            </button>
            <h3>{info.title}</h3>
            <img src={info.image} alt={info.title} style={{ width: "100%" }} />
            <p>{info.description}</p>
            <p>Price: ${info.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        </Html>
      )}
    </mesh>
  );
};

const ImageViewer = () => {
  const texture = new THREE.TextureLoader().load(
    "https://i.postimg.cc/QC5r27Xg/2022-04-13-Pano360-Recinto-Building-F-Metal-W-CC.jpg"
  );

  const hotspots = [
    {
      position: [50, 0, 50],
      info: {
        title: "McLaren",
        image: "https://via.placeholder.com/150",
        description: "Product description...",
        price: "180000",
      },
    },
    // Add more hotspots here
  ];

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
          {hotspots.map((hotspot, index) => (
            <Hotspot
              key={index}
              position={hotspot.position}
              info={hotspot.info}
            />
          ))}
          <OrbitControls autoRotate autoRotateSpeed={0.5} />
        </XR>
      </Canvas>
    </>
  );
};

export default ImageViewer;
