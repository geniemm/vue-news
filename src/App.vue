<template>
  <div id="app">
    <!-- 1 Strongly Recommended
    <ToolBar></ToolBar> -->
    <!-- 2 Essential -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data(){
    return {
      loadingStatus: false,
    }
  },  
  methods: {
    startSpinnder(){
      this.loadingStatus = true;
    },
    endSpinnder(){
      this.loadingStatus = false;
    }
  },
  created(){
    bus.$on('start:spinner',() => this.loadingStatus = true);
    bus.$on('end:spinner', this.endSpinnder);
  },
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinnder);
    bus.$off('end:spinner', this.endSpinnder);
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a{
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
