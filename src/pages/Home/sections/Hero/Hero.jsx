import React, { Suspense, useRef, useEffect, useMemo } from "react";
import styles from "./Hero.module.css";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import EncryptButton from "../../../../components/Button/EncryptButton";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

// Responsive Animated Robot Model
function AnimatedRobot() {
  const group = useRef();
  const { scene, animations } = useGLTF(
    "/free_droide_de_seguridad_k-2so_by_oscar_creativo.glb"
  );
  const { actions } = useAnimations(animations, group);
  const { viewport } = useThree();

  // Responsive scale and position based on screen width
  const { scale, position } = useMemo(() => {
    const isMobile = viewport.width < 6;
    return {
      scale: isMobile ? [0.5, 0.5, 0.5] : [0.8, 0.8, 0.8],
      position: isMobile ? [0.85, -0.5, 0] : [2.3, -1.0, 0],
    };
  }, [viewport.width]);

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
        scale={scale}
        position={position}
        rotation={[0, -Math.PI / 12, 0]} // slight turn to face center
      />
    </group>
  );
}

export default function Hero({scrollTargetRef}) {
  function scroll(){
    console.log("Clicked", scrollTargetRef.current);
    
    scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
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
      <div className={styles.overlay}></div>
      <div className={`${styles["header-content"]} ${styles.container}`}>
        <h1 className={styles["header-title"]}>
          <span className={styles["up"]}>HI!</span>
          <span className={styles["down"]}>I am NAVNIT</span>
        </h1>
        <p className={styles["header-subtitle"]}>FULLSTACK WEB DEVELOPER</p>
        <EncryptButton onClick={scroll} data={"console.log('me')"}/>
      </div>
    </div>
  );
}
