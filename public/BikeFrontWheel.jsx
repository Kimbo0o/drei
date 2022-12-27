/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 bikeFrontWheel.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/bikeFrontWheel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.bike_front_wheel.geometry} material={materials.bike_parts_black} position={[0.8, 1.85, -1.25]}>
        <group scale={[0.66, 1, 1]}>
          <mesh geometry={nodes.Circle.geometry} material={materials.bike_parts_black} />
          <mesh geometry={nodes.Circle_1.geometry} material={materials.bike_tire_sidewalls} />
        </group>
        <mesh geometry={nodes.spokes.geometry} material={materials.bike_parts_black} position={[0, -0.01, 0]} scale={-1.03} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/bikeFrontWheel.glb')