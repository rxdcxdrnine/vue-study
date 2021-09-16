<template>
  <div id="app">
    <tool-bar />
    <router-view />
    <!-- <router-view v-slot="{ Component }">
      <transition name="page" :before-enter="beforeEnter">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    // 다른 컴포넌트로부터 이벤트 버스를 통해 이벤트에 대한 메서드 등록
    this.emitter.on("start:spinner", this.startSpinner);
    this.emitter.on("end:spinner", this.endSpinner);
  },
  beforeUnMounted() {
    // 이벤트 버스에 이벤트가 쌓이지 않도록 제거
    this.emitter.off("start:spinner", this.startSpinner);
    this.emitter.off("end:spinner", this.endSpinner);
  },
};
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  color: #42b883;
  text-decoration: underline;
}

/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter-from, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
