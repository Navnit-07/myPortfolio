import React, { Suspense, useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import CustomButton from "../../../../components/Button/CustomButton";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

function AnimatedRobot() {
  const group = useRef();
  const { scene, animations } = useGLTF(
    "/free_droide_de_seguridad_k-2so_by_oscar_creativo.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["Wave"]) {
      actions["Wave"].reset().fadeIn(0.3).play();
    } else if (animations.length > 0) {
      const [first] = Object.keys(actions);
      actions[first].play();
    }
  }, [actions, animations]);

  return (
    <group ref={group} dispose={null}>
      <primitive
        object={scene}
        scale={[0.8, 0.8, 0.8]}
        position={[2.2, -1.3, 0]}
        rotation={[0, Math.PI / 6, 0]}
      />
    </group>
  );
}

export default function Hero() {
  return (
    <div className={styles.header}>
      <div className={styles.canvasWrapper}>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />
          <Suspense fallback={null}>
            <AnimatedRobot />
            <Environment preset="sunset" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className={styles["overlay"]}></div>
      <div className={`${styles["header-content"]} ${styles.container}`}>
        <h1 className={styles["header-title"]}>
          <span className={styles["up"]}>HI!</span>
          <span className={styles["down"]}>I am NAVNIT</span>
        </h1>
        <p className={styles["header-subtitle"]}>FULLSTACK WEB DEVELOPER</p>
        <CustomButton children={"Visit My Works"} opacity={"0.99"} />
      </div>
    </div>
  );
}
