<template>
  <div id="app">
    <PageHeader v-if="$route.meta.noHeader !== true" />
    <router-view/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';

export default {
  name: 'App',
  components: { PageHeader },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

html, body {
  margin: 0;
  padding: 0;
  color: white;
  -webkit-user-select: none;
  background-color: black;
}

textarea:focus, select:focus, input:focus, button:focus { outline: none; }

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}

.brand_holder {
    height: 100%;
    display: flex;
    align-items: center;

    float: left;
}

.brand_holder h1 {
    line-height: 60px;
    font-weight: 700;
    color: #eee;
    font-size: 24px;
    margin-left: 16px;
}

.vertical-line {
    display: block;
    width: 1px;
    height: 100%;
    background-color: #999;
}

.brand_holder .vertical-line {
    margin-left: 16px;
    height: 35px;
}

.brand {
    display: inline-block;
    height: 60px;
    width: 60px;
    background-image: url('./assets/img/logo-180.png');
    background-size: cover;
}

</style>
