// @ts-nocheck
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: IvanPetrov (https://sketchfab.com/IvanPetrov)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/toy-car-2-eafa89451a9b4f8a84cf9cd486111695
Title: toy car 2
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Car(props) {
  const { nodes, materials } = useGLTF("/car.glb");
  return (
    <group
      position={[0, 25.2, 0]}
      scale={[0.04, 0.04, 0.04]}
      {...props}
      dispose={null}
    >
      <group position={[0.056, 0, 1.712]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box005_kuzov_0.geometry}
          material={materials.kuzov}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box005_okno_0.geometry}
          material={materials.okno}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box005_niz_0.geometry}
          material={materials.material}
        />
      </group>
      <group
        position={[1.424, 15.858, -6.54]}
        rotation={[-2.235, 0.087, -0.011]}
        scale={[1, 1, 0.278]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_zrachok_0.geometry}
          material={materials.zrachok}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_glaz_0.geometry}
          material={materials.glaz}
        />
      </group>
      <group
        position={[-2.868, 15.813, -6.492]}
        rotation={[-2.224, -0.098, 0.043]}
        scale={[1, 1, 0.278]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_zrachok_0.geometry}
          material={materials.zrachok}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_glaz_0.geometry}
          material={materials.glaz}
        />
      </group>
      <group position={[10.2, 0, 11.228]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Capsule001_hrom_0.geometry}
          material={materials.hrom}
          position={[3.039, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferCyl001_shinka_0.geometry}
          material={materials.shinka}
          position={[2.123, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001_hrom_0.geometry}
          material={materials.hrom}
          position={[1.94, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus002_hrom_0.geometry}
          material={materials.hrom}
          position={[1.877, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
      <group position={[10.2, 0, -11.907]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Capsule002_hrom_0.geometry}
          material={materials.hrom}
          position={[3.039, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferCyl002_shinka_0.geometry}
          material={materials.shinka}
          position={[2.123, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus003_hrom_0.geometry}
          material={materials.hrom}
          position={[1.94, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus004_hrom_0.geometry}
          material={materials.hrom}
          position={[1.877, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
      <group
        position={[-10.032, 0, -11.905]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Capsule003_hrom_0.geometry}
          material={materials.hrom}
          position={[3.039, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferCyl003_shinka_0.geometry}
          material={materials.shinka}
          position={[2.123, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus005_hrom_0.geometry}
          material={materials.hrom}
          position={[1.94, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus006_hrom_0.geometry}
          material={materials.hrom}
          position={[1.877, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
      <group
        position={[-10.032, 0, 11.229]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Capsule004_hrom_0.geometry}
          material={materials.hrom}
          position={[3.039, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferCyl004_shinka_0.geometry}
          material={materials.shinka}
          position={[2.123, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus007_hrom_0.geometry}
          material={materials.hrom}
          position={[1.94, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus008_hrom_0.geometry}
          material={materials.hrom}
          position={[1.877, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_fara_per_0.geometry}
        material={materials.fara_per}
        position={[10.332, 5.527, -19.934]}
        rotation={[-1.041, 0.132, -0.077]}
        scale={[0.744, 0.701, 1.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002_fara_per_0.geometry}
        material={materials.fara_per}
        position={[-10.129, 5.527, -19.934]}
        rotation={[-1.085, -0.302, -0.081]}
        scale={[0.744, 0.701, 1.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003_fara_z_0.geometry}
        material={materials.fara_z}
        position={[-9.774, 3.96, 20.459]}
        rotation={[-1.946, -0.303, -0.078]}
        scale={[0.744, 0.701, 1.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004_fara_z_0.geometry}
        material={materials.fara_z}
        position={[9.881, 3.96, 20.459]}
        rotation={[-1.954, 0.185, 0.114]}
        scale={[0.744, 0.701, 1.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box007_10_-_Default_0"].geometry}
        material={materials["10_-_Default"]}
        position={[0, 0.405, -17.198]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box008_teeth_0.geometry}
        material={materials.teeth}
        position={[-0.038, 2.952, -21.429]}
        rotation={[-1.299, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box009_teeth_0.geometry}
        material={materials.teeth}
        position={[-0.038, 0.219, -21.796]}
        rotation={[-1.503, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object001_nos_0.geometry}
        material={materials.material_10}
        position={[12.323, 0, 11.212]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box010__0.geometry}
        material={materials.Box010__0}
        position={[0, -2.942, -24.058]}
        rotation={[-1.484, 0, 0]}
        scale={0.945}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box011_nomer_0.geometry}
        material={materials.nomer}
        position={[0, -2.559, 24.011]}
        rotation={[-1.658, 0, -Math.PI]}
        scale={0.945}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001_cifra_0.geometry}
        material={materials.cifra}
        position={[0.022, -2.057, -24.051]}
        rotation={[-3.054, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002_cifra_0.geometry}
        material={materials.cifra}
        position={[0.022, -1.783, 24.056]}
        rotation={[-0.087, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/car.glb");
