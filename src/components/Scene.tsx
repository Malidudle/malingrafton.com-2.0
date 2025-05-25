"use client";

import { ContactShadows, Environment, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { AnimationMixer, LoopRepeat, Group } from "three";

function Model() {
  const { scene, animations } = useGLTF("/abstract.glb");
  const mixer = useRef<AnimationMixer | null>(null);
  const modelRef = useRef<Group>(null);

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.setLoop(LoopRepeat, Infinity);
      action.play();
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5; // Adjust speed by changing the multiplier
    }
  });

  return (
    <group ref={modelRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="h-[600px]">
      <Canvas shadows camera={{ position: [250, 250, 250], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight
          position={[-5, 5, -5]}
          intensity={0.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        <Model />

        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.4}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
