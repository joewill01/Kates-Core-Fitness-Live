<template>
  <div>
    <div class="header_space" />
    <div class="page_header">
      <div class="brand_holder">
        <span class="brand" /><span class="vertical-line" /><h1>LIVE</h1>
      </div>
      <div class="nav-holder">
        <ul>
          <li @click="logout()">
            <a><b>Log out</b></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page_header',
  methods: {
    logout() {
      this.logout_user();
    },
  },
};
</script>

<style scoped>

.page_header {
    height: 80px;
    background-color: #222;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.header_space {
  height: 80px;
  width: 100%;
  background-color: black;
  opacity: 0;
}

.nav-holder {
    height: 100%;
    float: right;
    margin-right: 30px;
}

.nav-holder ul {
    height: 100%;

    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.nav-holder li {
    float: left;
    padding: 7px;
    color: #eee;
}

.brand_holder {
    margin-left: 30px;
}
</style>
