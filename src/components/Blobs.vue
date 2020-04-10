<template>
    <div id="blobs">
      <img src="../assets/img/blobs/blob-shape.svg">
      <img src="../assets/img/blobs/blob-shape(1).svg">
      <img src="../assets/img/blobs/blob-shape(2).svg">
      <img src="../assets/img/blobs/blob-shape(3).svg">
      <img src="../assets/img/blobs/blob-shape(4).svg">
      <img src="../assets/img/blobs/blob-shape(5).svg">
      <img src="../assets/img/blobs/blob-shape(6).svg">
      <img src="../assets/img/blobs/blob-shape(7).svg">
    </div>
</template>

<script>
export default {
  name: 'Blobs'
}
</script>

<style scoped>
#blobs {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #111;
  z-index: -1;
}
</style>
