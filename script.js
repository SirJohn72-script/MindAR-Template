const THREE = window.MINDAR.IMAGE.THREE

/* Is important to import the cnd of MindAR*/
//<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.5/dist/mindar-image-three.prod.js"></script>

document.addEventListener('DOMContentLoaded', () => {
  const start = async () => {
    const mindARThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.getElementById('TrackingContainer'),
      imageTargetSrc: './image-tracking/targets.mind',
    })

    /* There is no need to create the rendere, scene, and camera*/
    const { renderer, scene, camera } = mindARThree
    const geometry = new THREE.PlaneGeometry(1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      transparent: true,
      opacity: 0.4,
    })
    const plane = new THREE.Mesh(geometry, material)

    /* three.js group element */
    const anchor = mindARThree.addAnchor(0)
    anchor.group.add(plane)

    /* Trigger the AR Engine */
    await mindARThree.start()

    /* Render Scene */
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera)
    })
  }

  start()
})
