import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';


function ModelViewer() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}

const Model = () => {
    const gltf = useLoader(GLTFLoader, MacbookPro);
  
    return <primitive object={gltf.scene} />;
};

export default ModelViewer