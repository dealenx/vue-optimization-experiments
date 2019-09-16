<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="MyComponent" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';

export default {
  name: "app",
  components: {
    HelloWorld: () =>
      import(
        /* webpackChunkName: "hello-world" */ "./components/HelloWorld.vue"
      ),
    MyComponent: () =>
      import(
        /* webpackChunkName: "my-component" */ "./components/MyComponent.vue"
      )
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
