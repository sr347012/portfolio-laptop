import logo from './logo.svg';
import './App.css';
import { PresentationControls, ContactShadows, Html
  ,Float ,Environment ,useGLTF , Text3D, Text,
  OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
function App() {

  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');

  return (
    <>
    <Canvas 
     camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-3,1.5,4]
     }}
    >
      <Environment preset='city'/>
      <color  args={['#595959']} attach="background"/>
      {/* <OrbitControls makeDefault /> */}
      <PresentationControls global
       rotation={[0.13,0.1,0]}
       polar={[- 0.4, 0.2]}
       azimuth={[- 1, 0.75]}
       config = {{mass:2, tension:400}}
      >
        <Float rotationIntensity={ 0.4}>
          {/* <Text>Welcome</Text> */}
          {/* <Text3D position={[1,1,0]}>Welcome</Text3D> */}
          {/* <mesh position={[-2,-1, -2]}>
            <torusGeometry 
            args={[0.2,0.1,16,32]}/>
            <meshDepthMaterial/>
          </mesh> */}
          <rectAreaLight 
          width={2.5}
          height={1.5}
          intensity={60}
          color={'#ffffff'}
          rotation={[0.1, Math.PI, 0]}
          position={[0, 0.5, -1]}
          />
          <primitive position={[0,- 1,  2]} object={computer.scene}>
            <Html
            wrapperClass='htmlScreen'
            transform
            distanceFactor={1.1}
            position={[0, 1.56, -1.4]}
            rotation-x={ - 0.2 }>
              <iframe src='https://sr347012.github.io/portfolio-V1/'></iframe>
            </Html>
          </primitive>
        </Float>
      </PresentationControls>
     <ContactShadows position={[0, -1, 0]}
     opacity={ 0.4 }
     scale={ 5 }
     blur={ 2 }
     />
    </Canvas>
    </>

  );
}

export default App;
