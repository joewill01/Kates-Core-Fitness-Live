<template>
    <div class="hello">
        <h1>Name: {{user.first_name}} {{user.last_name}}</h1>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  },
  data() {
    return {
      msg: 'Administrator page',
      user: {},
    };
  },
};
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
