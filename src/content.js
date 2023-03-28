import './App.css';
import { PresentationControls, ContactShadows, Html, useMatcapTexture
  ,Float ,Environment ,useGLTF , Text3D, Text,
  OrbitControls } from '@react-three/drei';
import { CylinderGeometry } from 'three';
function Content() {

  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
  const meshArr = [...Array(10)];
  const matcapTextureTorus = useMatcapTexture('3E3D39_D6CEAF_91BAC1_897966', 256);
  const matcapTextureCyl = useMatcapTexture('3E3E3E_AEAEAE_848484_777777', 256);
  const matcapTexturePoly = useMatcapTexture('3F4441_D1D7D6_888F87_A2ADA1', 256);
  const matcapTextureMono = useMatcapTexture('433D3F_A58D7D_786760_8C7C6D', 256);
  return (
    <>
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

          <group>

            {meshArr.map((item)=>(
              <mesh position={[(Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random())]}>
              
              <cylinderGeometry args={[0.2,0.2,0.6,20]} />
              <meshMatcapMaterial matcap={ matcapTextureCyl[0] } />
            </mesh>
            ))
            }
            {meshArr.map((item)=>(
              <mesh position={[(Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5)]}>
              
              <torusGeometry args={[0.2,0.1,16,32]}/>
              <meshMatcapMaterial matcap={ matcapTextureTorus[0] } />

            </mesh>
            ))
            }
            {meshArr.map((item)=>(
              <mesh position={[(Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5)]}>
              
              <coneGeometry args={[0.2,0.5,32]}/>
              <meshMatcapMaterial matcap={ matcapTexturePoly[0] } />

            </mesh>
            ))
            }
            {meshArr.map((item)=>(
              <mesh position={[(Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5)]}>
              
              <boxGeometry args={[0.2,0.2,0.2]}/>
              <meshMatcapMaterial matcap={ matcapTextureMono[0] } />

            </mesh>
            ))
            }

          </group>

          <rectAreaLight 
          width={2.5}
          height={1.5}
          intensity={60}
          color={'#ffffff'}
          rotation={[0.1, Math.PI, 0]}
          position={[0, 0.5, -1]}
          />
          <primitive position={[0,- 1,  3]} object={computer.scene}>
            <Html
            wrapperClass='htmlScreen'
            transform
            distanceFactor={1.1}
            position={[0, 1.56, -1.4]}
            rotation-x={ - 0.27 }>
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

    </>

  );
}

export default Content;
