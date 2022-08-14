const THREE = window.MINDAR.IMAGE.THREE

document.addEventListener('DOMContentLoaded', () => {
  const start = async () => {
    const mindARThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.getElementById('TrackingContainer'),
      imageTargetSrc: './image-tracking/targets.mind',
    })

    const { renderer, scene, camera } = mindARThree
    const geometry = new THREE.PlaneGeometry(1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      transparent: true,
      opacity: 0.4,
    })
    const plane = new THREE.Mesh(geometry, material)
    const anchor = mindARThree.addAnchor(0)
    anchor.group.add(plane) /* three.js group element */

    /* Trigger the AR Engine */
    await mindARThree.start()

    /* Render Scene */
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera)
    })
  }

  start()
})
