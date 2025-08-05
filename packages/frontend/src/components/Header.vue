<template>
  <header class="header">
    <div class="logo-container">
      <button class="menu-toggle" @click="toggleSidebar" v-if="!isSidebarOpen">☰</button>
      <button class="menu-toggle" @click="toggleSidebar" v-else>✕</button>
      <router-link to="/" class="logo-link">
        <img src="/vite.svg" class="logo" alt="ProDeel logo" />
        <span class="logo-text">ProDeel</span>
      </router-link>
    </div>
    <div class="search-container">
      <span class="search-icon">🔍</span>
      <input type="text" placeholder="在此搜索..." class="search-input" />
    </div>
    <div class="header-actions">
      <button class="notification-btn">
        <span class="notification-icon">🔔</span>
        <span class="notification-badge"></span>
      </button>
      <button class="theme-btn">🌙</button>
      <div class="avatar">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="用户头像" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isSidebarOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-sidebar'],
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    }
  }
}
</script>

<style scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo-container {
  display: flex;
  align-items: center;
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  display: block;
  color: #5f6368;
}

@media (min-width: 992px) {
  .menu-toggle {
    display: none;
  }
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 2rem;
  margin-right: 0.5rem;
}

.logo-text {
  font-weight: bold;
  font-size: 1.2rem;
  color: #4285f4;
}

.search-container {
  display: none;
  align-items: center;
  background-color: #f1f3f4;
  border-radius: 24px;
  padding: 0.5rem 1rem;
  width: 300px;
}

@media (min-width: 768px) {
  .search-container {
    display: flex;
  }
  
  .header {
    /* padding: 0.8rem 1.5rem; */
  }
}

.search-icon {
  margin-right: 0.5rem;
  color: #5f6368;
}

.search-input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 0.9rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .header-actions {
    gap: 1rem;
  }
}

.notification-btn, .theme-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #5f6368;
  position: relative;
}

.notification-badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: #f25c54;
  border-radius: 50%;
}

.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>