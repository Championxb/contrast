<template>
  <aside class="sidebar" :class="{ 'open': isSidebarOpen }">
    <div class="team-info">
      <div class="team-avatar">
        <span>F</span>
      </div>
      <div class="team-details">
        <h3>飞利团队</h3>
        <p>hello@fillio.com</p>
      </div>
      <button class="expand-btn">▼</button>
    </div>

    <div class="menu">
      <h4>菜单</h4>
      <ul class="menu-list">
        <li class="menu-item" :class="{ 'active': isActive('Dashboard') }">
          <router-link to="/">
            <span class="menu-icon">🏠</span>
            <span>首页</span>
          </router-link>
        </li>
        <li class="menu-item" :class="{ 'active': isActive('ContractorType') }">
          <router-link to="/contractor-type">
            <span class="menu-icon">📝</span>
            <span>创建合同</span>
          </router-link>
        </li>
        <li class="menu-item" :class="{ 'active': isActive('Contracts') }">
          <router-link to="/contracts">
            <span class="menu-icon">📄</span>
            <span>合同</span>
          </router-link>
        </li>
        <li class="menu-item" :class="{ 'active': isActive('PaymentMethods') }">
          <router-link to="/payment-methods">
            <span class="menu-icon">💰</span>
            <span>支付</span>
          </router-link>
        </li>
        <li class="menu-item" :class="{ 'active': isActive('ComplianceDocuments') }">
          <router-link to="/compliance-documents">
            <span class="menu-icon">📁</span>
            <span>公司文档</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/invoice-receipts">
            <span class="menu-icon">🧾</span>
            <span>发票收据</span>
            <span class="badge">8</span>
          </router-link>
        </li>
        <li class="menu-item" :class="{ 'active': isActive('TeamSettings') }">
          <router-link to="/team-settings">
            <span class="menu-icon">⚙️</span>
            <span>团队设置</span>
          </router-link>
        </li>
      </ul>

      <h4 class="organization-title">组织</h4>
      <ul class="menu-list">
        <li class="menu-item">
          <router-link to="/apps-perks">
            <span class="menu-icon">🧩</span>
            <span>应用与特权</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/tax-forms">
            <span class="menu-icon">📋</span>
            <span>税务表格</span>
            <span class="badge new">新</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/organization-settings">
            <span class="menu-icon">⚙️</span>
            <span>组织设置</span>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="create-contract-btn-container">
      <router-link to="/contractor-type" class="create-contract-btn">
        创建合同 <span class="plus-icon">+</span>
      </router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isSidebarOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isActive(routeName) {
      return this.$route.name === routeName;
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  position: fixed;
  top: 60px;
  bottom: 0;
  left: -250px;
  transition: left 0.3s ease;
  z-index: 90;
  overflow-y: auto;
}

.sidebar.open {
  left: 0;
}

@media (min-width: 992px) {
  .sidebar {
    position: sticky;
    top: 60px;
    left: 0;
    height: calc(100vh - 60px);
  }
}

.team-info {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
}

.team-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #1a73e8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 0.8rem;
}

.team-details h3 {
  margin: 0;
  font-size: 0.9rem;
}

.team-details p {
  margin: 0;
  font-size: 0.8rem;
  color: #5f6368;
}

.expand-btn {
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  color: #5f6368;
}

.menu {
  flex: 1;
}

.menu h4 {
  padding: 0 1rem;
  margin: 1rem 0 0.5rem;
  font-size: 0.8rem;
  color: #5f6368;
  text-transform: uppercase;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  display: flex;
  padding: 0;
  position: relative;
}

.menu-item a {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  width: 100%;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
}

.menu-item:hover {
  background-color: #f1f3f4;
}

.menu-item.active {
  background-color: #e8f0fe;
  color: #1a73e8;
  border-radius: 0 24px 24px 0;
  margin-right: 1rem;
}

.menu-icon {
  margin-right: 0.8rem;
  font-size: 1.1rem;
}

.badge {
  background-color: #f25c54;
  color: white;
  border-radius: 12px;
  padding: 0.1rem 0.4rem;
  font-size: 0.7rem;
  margin-left: auto;
}

.badge.new {
  background-color: #ff9800;
}

.organization-title {
  margin-top: 1.5rem;
}

.create-contract-btn-container {
  padding: 1rem;
}

.create-contract-btn {
  width: 100%;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.plus-icon {
  margin-left: 0.5rem;
  font-size: 1.2rem;
}
</style>