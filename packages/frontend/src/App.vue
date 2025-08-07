<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
// import HelloApi from './components/HelloApi.vue'
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="app">
    <!-- <HelloApi /> -->
    <Header class="header" :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div class="main-container">
      <Sidebar :isSidebarOpen="isSidebarOpen" />
      <main class="main-content" :class="{ 'sidebar-open': isSidebarOpen }">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}

* {
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.app > .header {
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
}
@media (max-width: 768px) {
  .app {
    height: auto;
    min-height: 100vh;
    overflow: scroll;
  }
}

.main-container {
  display: flex;
  flex: 1;
  position: relative;
}

.main-content {
  flex: 1;
  transition: margin-left 0.3s ease;
  margin-top: 44px;

  overflow: auto;
}

@media (max-width: 768px) {
  .main-content {
    overflow: visible;
  }
}

@media (max-width: 991px) {
  .main-content.sidebar-open {
    margin-left: 250px;
  }
}

@media (min-width: 992px) {
  .main-content {
    margin-left: 0px;
  }
}
</style>
