<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <button class="button" @click="versionCheck">检查更新</button>
    </div>
  </div>
</template>

<script>
import inspector from "./version-inspector";

export default {
  name: "App",
  methods: {
    versionCheck() {
      inspector().then((isConsistent) => {
        if (!isConsistent) {
          const isReload = window.confirm(
            "检测到本地版本和服务器版本不一致,点击确定更新页面 "
          );
          if (isReload) {
            window.location.reload();
          }
        }
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  width: 100px;
  height: 35px;
  font-size: 18px;
  color: #555;
}
</style>
