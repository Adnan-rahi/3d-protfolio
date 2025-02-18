/* eslint-disable react/no-unknown-property */
import { MeshDistortMaterial, Sphere } from "@react-three/drei"

const Shape = () => {
  return (
    <>
        <Sphere args={[1, 100, 200]} scale={2.3}>
            <MeshDistortMaterial 
                color="#FFC0CB"
                attach="material"
                distort={0.5}
                speed={2}
            />
        </Sphere>
        <ambientLight intensity={2} />
        <directionalLight position={[1, 2, 3]} />
    </>
  )
}

export default Shape