/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 roomModel.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/roomModel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.floor.geometry} material={materials.ground} position={[0, 1.8, 0]} />
      <group position={[-1.07, 1.2, -0.6]} rotation={[0, 1.03, 0]} scale={0.75}>
        <mesh geometry={nodes.Circle004.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Circle004_1.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Circle009.geometry} material={nodes.Circle009.material} position={[-0.03, 0.01, 0]} />
      </group>
      <mesh geometry={nodes.walls.geometry} material={materials.Material} position={[0, 0.02, 0]} scale={1.52} />
      <mesh geometry={nodes.desk.geometry} material={materials.wood} position={[-1.08, 1.19, -0.03]} scale={[0.38, 0.03, 0.8]}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.desk_legs} position={[0.8, -15.2, 0.89]} scale={[2.67, 40, 1.25]} />
        <mesh geometry={nodes.Cylinder001.geometry} material={materials.desk_legs} position={[0.8, -15.2, -0.91]} scale={[2.67, 40, 1.25]} />
        <mesh geometry={nodes.Cylinder002.geometry} material={materials.desk_legs} position={[-0.82, -15.2, -0.92]} scale={[2.67, 40, 1.25]} />
        <mesh geometry={nodes.Cylinder003.geometry} material={materials.desk_legs} position={[-0.82, -15.2, 0.9]} scale={[2.67, 40, 1.25]} />
      </mesh>
      <mesh geometry={nodes.monitpr.geometry} material={materials.monitor}>
        <mesh geometry={nodes.Cube066_2.geometry} material={materials.monitor_foot} />
        <mesh geometry={nodes.Plane.geometry} material={materials.monitor_foot} />
      </mesh>
      <mesh geometry={nodes.keyboard.geometry} material={materials['Material.012']} position={[-0.9, 1.22, -0.08]} scale={[0.06, 0.19, 0.16]}>
        <mesh geometry={nodes.Keys.geometry} material={materials['Material.012']} position={[13.86, -6.3, 0.5]} scale={[0.15, 0.05, 0.06]} />
      </mesh>
      <mesh geometry={nodes.bike_front_wheel.geometry} material={materials.bike_parts_black} position={[0.8, 1.85, -1.25]} rotation={[-1.7, -1.4, -1.7]}>
        <group scale={[0.66, 1, 1]}>
          <mesh geometry={nodes.Circle.geometry} material={materials.bike_parts_black} />
          <mesh geometry={nodes.Circle_1.geometry} material={materials.bike_tire_sidewalls} />
        </group>
        <mesh geometry={nodes.Circle002.geometry} material={materials.bike_parts_black} position={[0, -0.01, 0]} rotation={[-Math.PI, 0, 0]} scale={-1.03} />
      </mesh>
      <mesh geometry={nodes.bike.geometry} material={materials.bike_saddle} position={[0.13, 2.6, -1.27]} rotation={[-1.67, -1.35, -1.67]} scale={[0.05, 0.13, 0.14]}>
        <mesh geometry={nodes.Chain.geometry} material={materials.bike_parts_black} position={[1.19, -4.74, 1.2]} rotation={[0.05, 0, -1.57]} scale={[0.72, 1.75, 0.69]} />
        <mesh geometry={nodes.Circle003.geometry} material={materials.bike_parts_black} position={[0.87, -5.19, -1.6]} rotation={[0.05, 0, -1.57]} scale={[0.61, 1.48, 0.58]} />
        <mesh geometry={nodes.Circle004_2.geometry} material={materials.bike_parts_black} position={[1.19, -4.74, 1.2]} rotation={[0.05, 0, -1.57]} scale={[0.72, 1.75, 0.69]} />
        <group position={[-0.01, -4.74, 1.21]} rotation={[0.05, 0, 0]} scale={[12.14, 7.54, 7.17]}>
          <mesh geometry={nodes.Circle008.geometry} material={materials.bike_parts_black} />
          <mesh geometry={nodes.Circle008_1.geometry} material={materials.bike_tire_sidewalls} />
        </group>
        <mesh geometry={nodes.Circle006.geometry} material={materials.bike_parts_black} position={[-0.01, -4.78, 1.21]} rotation={[-3.09, 0, 0]} scale={[-18.72, -7.71, -7.34]} />
        <mesh geometry={nodes.Cylinder005_1.geometry} material={materials.bike_parts_black} position={[0.04, -0.43, -4.42]} rotation={[-1.26, 0, 0]} scale={[-0.48, -0.61, -0.13]} />
        <mesh geometry={nodes.Cylinder006.geometry} material={materials.bike_parts_black} position={[-0.01, -4.74, 1.21]} rotation={[0.05, 0, 0]} scale={[18.29, 7.54, 7.17]} />
        <mesh geometry={nodes.Cylinder007.geometry} material={nodes.Cylinder007.material} position={[0, -5.19, -1.6]} rotation={[0.05, 0, -1.57]} scale={[0.22, 0.48, 0.21]} />
        <mesh geometry={nodes.Cylinder008.geometry} material={materials.bike_parts_black} position={[0.68, -5.19, -1.6]} rotation={[1.53, 0, -1.57]} scale={[0.15, 0.27, 0.16]} />
        <mesh geometry={nodes.Cylinder009.geometry} material={materials.bike_parts_black} position={[-0.54, -5.19, -1.6]} rotation={[1.53, 0, -1.57]} scale={[-0.15, -0.27, -0.16]} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.bike_frame} position={[0, -1.91, -0.54]} rotation={[0.05, 0, 0]} scale={[18.29, 7.54, 7.17]} />
        <mesh geometry={nodes.Plane003.geometry} material={materials.bike_frame} position={[0, -1.91, -0.54]} rotation={[0.05, 0, 0]} scale={[18.29, 7.54, 7.17]} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.bike_parts_shiny_black} position={[1.92, -5.18, -2.84]} rotation={[1.5, 0, 0]} scale={[0.44, 0.19, 0.28]} />
        <mesh geometry={nodes.Plane006.geometry} material={materials.bike_parts_shiny_black} position={[-1.78, -5.2, -0.36]} rotation={[-1.64, 0, 0]} scale={[-0.44, -0.19, -0.28]} />
        <mesh geometry={nodes.Plane007.geometry} material={materials.bike_parts_black} position={[3.67, -0.19, -5.32]} rotation={[-0.82, 0, 0]} scale={[0.19, 0.14, 0.14]} />
        <mesh geometry={nodes.Plane008.geometry} material={materials.bike_parts_shiny_black} position={[3.67, 0.03, -5.76]} rotation={[-2.12, 0, 0]} scale={[-0.12, -0.09, -0.09]} />
        <mesh geometry={nodes.Plane009.geometry} material={materials.bike_parts_black} position={[-3.67, -0.19, -5.32]} rotation={[-0.82, 0, 0]} scale={[0.19, 0.14, 0.14]} />
        <mesh geometry={nodes.Plane010.geometry} material={materials.bike_parts_shiny_black} position={[-3.67, 0.03, -5.76]} rotation={[-2.12, 0, 0]} scale={[-0.12, -0.09, -0.09]} />
        <mesh geometry={nodes.Vert001.geometry} material={materials.bike_parts_black} position={[0, -0.29, -4.83]} rotation={[-0.02, -0.01, 0]} scale={[18.29, 7.54, 7.17]} />
        <mesh geometry={nodes.Vert003.geometry} material={materials.bike_parts_black} position={[0, -1.67, -0.44]} rotation={[0.05, 0, 0]} scale={[18.29, 7.54, 7.17]} />
      </mesh>
      <mesh geometry={nodes.bike_holder.geometry} material={materials.wood} position={[0.38, 2.32, -1.53]} rotation={[Math.PI / 2, 0, 0]} scale={[0.16, 0.11, 0.05]} />
      <group position={[-1.32, 1.3, 0.27]} rotation={[-0.01, 0.27, 0.08]} scale={[0.06, 0.08, 0.05]}>
        <mesh geometry={nodes.Cube065.geometry} material={materials.white_shiny} />
        <mesh geometry={nodes.Cube065_1.geometry} material={materials.speaker} />
        <mesh geometry={nodes.Plane013.geometry} material={materials.speaker} position={[-0.13, -1.2, 0.02]} rotation={[0.01, 0, -0.08]} scale={[0.95, 0.67, 0.95]} />
      </group>
      <group position={[-1.33, 1.3, -0.53]} rotation={[-0.01, -0.27, 0.07]} scale={[0.06, 0.08, 0.05]}>
        <mesh geometry={nodes.Cube066.geometry} material={materials.white_shiny} />
        <mesh geometry={nodes.Cube066_1.geometry} material={materials.speaker} />
        <mesh geometry={nodes.Plane015.geometry} material={materials.speaker} position={[-0.13, -1.2, 0.02]} rotation={[0.01, 0, -0.08]} scale={[0.95, 0.67, 0.95]} />
      </group>
      <mesh geometry={nodes.floor_planks.geometry} material={materials.wood} position={[1.28, 0.44, 0.01]} rotation={[0, Math.PI / 2, 0]} scale={[1.25, 0.03, 0.1]} />
      <mesh geometry={nodes.mouse.geometry} material={materials['Material.012']} position={[-0.88, 1.24, -0.37]} scale={[0.05, 0.02, 0.03]}>
        <mesh geometry={nodes.Cylinder011.geometry} material={materials['Material.012']} position={[-0.66, 0.04, 0.01]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.55, 0.1, 0.17]} />
      </mesh>
      <mesh geometry={nodes.laptop_stand.geometry} material={materials.laptop_stand} position={[-1.16, 1.21, 0.49]} rotation={[0, 0.41, 0]} scale={[0.1, 0.01, 0.13]} />
      <mesh geometry={nodes.shelf.geometry} material={materials['Material.012']} position={[-1.41, 2.04, 0.42]} rotation={[0, Math.PI / 2, 0]} scale={[0.81, 1, 0.16]} />
      <group position={[-1.01, 1.89, -1.3]} rotation={[0, 0.28, 0.74]} scale={0.04}>
        <mesh geometry={nodes.Circle001.geometry} material={materials.floor_lamp} />
        <mesh geometry={nodes.Circle001_1.geometry} material={materials.lamp_inner} />
        <mesh geometry={nodes.Cylinder012.geometry} material={materials.floor_lamp} position={[0.02, -1.93, -0.1]} rotation={[-Math.PI / 2, -0.84, -Math.PI]} scale={0.59} />
        <mesh geometry={nodes.Cylinder013.geometry} material={materials.floor_lamp} position={[-21.37, -25.58, -0.1]} rotation={[-3.11, -0.03, -2.41]} scale={[-3.37, -0.2, -3.37]} />
        <mesh geometry={nodes.Cylinder014.geometry} material={materials.floor_lamp} position={[-21.06, -25.24, -0.1]} rotation={[0.03, 0.03, -0.74]} scale={0.43} />
        <mesh geometry={nodes.Cylinder015.geometry} material={materials.floor_lamp} position={[0, -1.48, -0.06]} scale={[0.43, 0.02, 0.43]} />
      </group>
      <mesh geometry={nodes.Plane017.geometry} material={materials.monitor_foot} />
      <mesh geometry={nodes.Plane017_1.geometry} material={materials.laptop_trackpad} />
      <mesh geometry={nodes.Laptop_Keys.geometry} material={materials.laptop_keyboard} rotation={[0, 0.4, -0.26]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.Plane020.geometry} material={materials.monitor_foot} />
      <mesh geometry={nodes.Plane020_1.geometry} material={materials.laptop_screen} />
      <mesh geometry={nodes.rug.geometry} material={materials['Material.005']} position={[0.67, 0.5, 0.66]} scale={[0.89, 1, 0.89]} />
      <mesh geometry={nodes.deskmat.geometry} material={materials['Material.005']} position={[-0.92, 1.22, -0.1]} scale={[0.24, 0.16, 0.49]} />
      <mesh geometry={nodes.drawer.geometry} material={materials.drawer} position={[-0.98, 0.82, 1.16]}>
        <mesh geometry={nodes.Cube061_1.geometry} material={materials.drawer} position={[0.28, -0.27, 0]} scale={[0.01, 0.07, 0.17]} />
      </mesh>
      <mesh geometry={nodes.plant.geometry} material={materials['Material.012']} position={[0.76, -1.18, 1.61]} rotation={[0, Math.PI / 2, 0]} scale={[0.1, 0.08, 0.1]}>
        <mesh geometry={nodes.leaves002.geometry} material={materials.plant} scale={[0.18, 0.23, 0.31]} />
      </mesh>
      <mesh geometry={nodes.Kamera.geometry} material={materials.camera} position={[-1.4, 2.1, 0.95]} rotation={[0, 1.2, 0]} scale={[0.09, 0.05, 0.05]}>
        <mesh geometry={nodes.Cylinder022.geometry} material={materials.camera} position={[0.08, 0.13, 0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.32, 0.35, 0.59]} />
      </mesh>
      <mesh geometry={nodes.vr_glasses.geometry} material={materials.vr_glasses} position={[-1.32, 2.11, 0.49]} rotation={[0, 0.75, 0]} scale={[0.09, 0.05, 0.05]}>
        <mesh geometry={nodes.Cube062.geometry} material={materials.vr_glasses} position={[1, 0.12, -0.91]} scale={[11.02, 20.81, 20.81]} />
        <mesh geometry={nodes.Cylinder010.geometry} material={materials.vr_glasses} position={[1.06, -0.09, -1.66]} rotation={[Math.PI, 0, Math.PI]} scale={[-0.04, -0.37, -0.12]} />
        <mesh geometry={nodes.Cylinder019.geometry} material={materials.vr_glasses} position={[1.01, -0.48, -1.65]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.19, 0.02, 0.19]} />
        <mesh geometry={nodes.Cylinder020.geometry} material={materials.vr_glasses} position={[-1.05, -0.09, -1.65]} scale={[-0.04, -0.37, -0.12]} />
        <mesh geometry={nodes.Cylinder021.geometry} material={materials.vr_glasses} position={[-1, -0.48, -1.66]} rotation={[0, 0, -Math.PI / 2]} scale={[0.19, 0.02, 0.19]} />
      </mesh>
      <mesh geometry={nodes.seat.geometry} material={materials['seat fabric']} position={[-0.55, -0.06, -0.01]} rotation={[-Math.PI, 1.22, -Math.PI]}>
        <mesh geometry={nodes.Circle010.geometry} material={materials.seat_casters} position={[0.82, 0.56, 0.66]} rotation={[Math.PI / 2, 0, 0]} scale={0.03} />
        <mesh geometry={nodes.Circle011.geometry} material={materials.seat_casters} position={[0.82, 0.56, 0.64]} rotation={[Math.PI / 2, 0, 0]} scale={0.03} />
        <mesh geometry={nodes.Circle012.geometry} material={materials.seat_casters} position={[0.65, 0.56, 0.42]} rotation={[Math.PI / 2, 0, -2.88]} scale={0.03} />
        <mesh geometry={nodes.Circle013.geometry} material={materials.seat_casters} position={[0.65, 0.56, 0.45]} rotation={[Math.PI / 2, 0, -2.88]} scale={0.03} />
        <mesh geometry={nodes.Circle014.geometry} material={materials.seat_casters} position={[0.4, 0.56, 0.52]} rotation={[Math.PI / 2, 0, -2.86]} scale={0.03} />
        <mesh geometry={nodes.Circle015.geometry} material={materials.seat_casters} position={[0.39, 0.56, 0.54]} rotation={[Math.PI / 2, 0, -2.86]} scale={0.03} />
        <mesh geometry={nodes.Circle016.geometry} material={materials.seat_casters} position={[0.41, 0.56, 0.79]} rotation={[Math.PI / 2, 0, -3.13]} scale={0.03} />
        <mesh geometry={nodes.Circle017.geometry} material={materials.seat_casters} position={[0.41, 0.56, 0.81]} rotation={[Math.PI / 2, 0, -3.13]} scale={0.03} />
        <mesh geometry={nodes.Circle018.geometry} material={materials.seat_casters} position={[0.66, 0.56, 0.88]} rotation={[Math.PI / 2, 0, 1.26]} scale={0.03} />
        <mesh geometry={nodes.Circle019.geometry} material={materials.seat_casters} position={[0.68, 0.56, 0.87]} rotation={[Math.PI / 2, 0, 1.26]} scale={0.03} />
        <mesh geometry={nodes.Cube001.geometry} material={materials['seat fabric']} position={[0.24, 0, 0]} scale={[0.69, 1, 1]} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['seat fabric']} position={[0.24, 0, 0]} scale={[0.69, 1, 1]} />
        <mesh geometry={nodes.Cube003.geometry} material={materials['seat fabric']} position={[0.24, 0, 0]} scale={[0.69, 1, 1]} />
        <mesh geometry={nodes.Cube004.geometry} material={materials['seat fabric']} position={[-0.08, 0, 0]} scale={[1.07, 1, 1]} />
        <mesh geometry={nodes.Cube005.geometry} material={materials['seat fabric']} position={[-0.08, 0, 0]} scale={[1.07, 1, 1]} />
        <mesh geometry={nodes.Cylinder023.geometry} material={materials['seat metal']} />
        <mesh geometry={nodes.Cylinder024.geometry} material={materials['seat metal']} />
        <mesh geometry={nodes.Cylinder025.geometry} material={materials['seat metal']} />
        <mesh geometry={nodes.Cylinder026.geometry} material={materials['seat metal']} position={[1.17, 0.01, 0.12]} rotation={[0, 0, 1.27]} scale={0.82} />
        <mesh geometry={nodes.Cylinder027_1.geometry} material={materials['seat metal']} position={[0.26, 0.01, -0.06]} rotation={[0, 1.26, 1.27]} scale={0.82} />
        <mesh geometry={nodes.Cylinder028.geometry} material={materials['seat metal']} position={[-0.2, 0.01, 0.75]} rotation={[Math.PI, Math.PI / 5, -1.87]} scale={0.82} />
        <mesh geometry={nodes.Cylinder029.geometry} material={materials['seat metal']} position={[0.43, 0.01, 1.44]} rotation={[-Math.PI, -Math.PI / 5, -1.87]} scale={0.82} />
        <mesh geometry={nodes.Cylinder030.geometry} material={materials['seat metal']} position={[1.28, 0.01, 1.05]} rotation={[0, -1.26, 1.27]} scale={0.82} />
      </mesh>
      <mesh geometry={nodes['3d_printer'].geometry} material={materials.printer_extrusion} position={[-0.94, 1.22, 1.16]} scale={0.74}>
        <mesh geometry={nodes.Cube010.geometry} material={materials.printer_extrusion} position={[-0.07, -0.05, -0.17]} />
        <mesh geometry={nodes.Cube039_1.geometry} material={materials.printer_extrusion} position={[-0.07, -0.05, 0.17]} />
        <mesh geometry={nodes.Cube040_1.geometry} material={materials.printer_extrusion} position={[0.13, -0.05, 0]} scale={[0, 0.02, 0.19]} />
        <mesh geometry={nodes.Cube041.geometry} material={materials.printer_extrusion} position={[-0.07, -0.03, 0.11]} />
        <mesh geometry={nodes.Cube042_1.geometry} material={materials.printer_extrusion} position={[-0.27, -0.05, 0]} />
        <mesh geometry={nodes.Cube043.geometry} material={materials.printer_extrusion} position={[-0.07, 0.35, 0]} />
        <mesh geometry={nodes.Cube044.geometry} material={materials.printer_extrusion} position={[-0.07, -0.05, 0]} scale={[0.2, 0.02, 0.01]} />
        <mesh geometry={nodes.Cube045.geometry} material={materials.printer_extrusion} position={[0.17, -0.03, 0.11]} />
        <mesh geometry={nodes.Cube046.geometry} material={materials.printer_extrusion} position={[-0.31, -0.03, 0.11]} />
        <mesh geometry={nodes.Cube047.geometry} material={materials.printer_extrusion} position={[-0.07, 0.17, 0.17]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Cube048.geometry} material={materials.printer_extrusion} position={[-0.07, 0.17, -0.17]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Cube049.geometry} material={materials.printer_extrusion} position={[-0.07, -0.03, -0.11]} />
        <mesh geometry={nodes.Cube050.geometry} material={materials.printer_extrusion} position={[0.17, -0.03, -0.11]} />
        <mesh geometry={nodes.Cube051.geometry} material={materials.printer_extrusion} position={[-0.31, -0.03, -0.11]} />
        <mesh geometry={nodes.Cube052.geometry} material={materials.printer_extrusion} position={[-0.07, 0.37, 0.17]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Cube053_1.geometry} material={materials.printer_extrusion} position={[-0.07, 0.37, -0.17]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Cube054.geometry} material={materials.printer_plate} position={[-0.04, -0.02, 0]} />
        <mesh geometry={nodes.Cube055.geometry} material={materials.printer_extrusion} position={[-0.09, 0.41, 0.09]} />
        <mesh geometry={nodes.Cube056.geometry} material={materials.printer_extrusion} position={[-0.03, 0.03, 0]} />
        <mesh geometry={nodes.Cube057.geometry} material={materials.printer_extrusion} position={[-0.03, 0.03, 0.17]} />
        <mesh geometry={nodes.Cube058.geometry} material={materials.printer_extrusion} position={[-0.03, 0.03, -0.17]} />
        <mesh geometry={nodes.Cube059.geometry} material={materials.printer_extrusion} position={[0, 0.03, 0]} />
        <mesh geometry={nodes.Cylinder016.geometry} material={materials.filament_roll} position={[-0.1, 0.45, 0.09]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Cylinder017.geometry} material={materials.filament} position={[-0.12, 0.44, 0.09]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Cylinder018.geometry} material={materials.filament_roll} position={[-0.15, 0.45, 0.09]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Plane017_2.geometry} material={materials.filament} position={[-0.02, -0.01, 0]} />
        <mesh geometry={nodes.Plane018.geometry} material={materials.filament} position={[-0.12, 0.44, 0.18]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/roomModel.glb')