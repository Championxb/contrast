<template>
  <div class="team-settings-page">
    <div class="page-header">
      <h1>团队设置</h1>
    </div>

    <!-- 导航标签 -->
    <div class="tabs">
      <button class="tab active">通用</button>
      <button class="tab">团队计划</button>
      <button class="tab">高级设置</button>
      <button class="tab">应用</button>
    </div>

    <div class="settings-container">
      <!-- 概览部分 -->
      <div class="overview-section">
        <h2>概览</h2>
        <div class="team-profile">
          <div class="team-avatar">
            <span>F</span>
          </div>
          <button class="edit-avatar-btn">编辑</button>
        </div>

        <div class="team-info-form">
          <div class="form-group">
            <label>团队名称</label>
            <div class="input-with-edit">
              <input type="text" value="飞利团队" readonly />
              <button class="edit-btn">✏️</button>
            </div>
          </div>
          <div class="form-group">
            <label>电子邮箱</label>
            <div class="input-with-edit">
              <input type="email" value="hello@fillio.com" readonly />
              <button class="edit-btn">✏️</button>
            </div>
          </div>

          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-label">活跃合同</div>
              <div class="stat-value">09</div>
              <div class="stat-arrow">→</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">已完成</div>
              <div class="stat-value green">06</div>
              <div class="stat-arrow">→</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">已取消</div>
              <div class="stat-value red">04</div>
              <div class="stat-arrow">→</div>
            </div>
          </div>

          <div class="form-group">
            <label>团队创建日期</label>
            <input type="text" value="2023年2月5日" readonly />
          </div>
          <div class="form-group">
            <label>当前计划</label>
            <input type="text" value="免费" readonly />
          </div>
        </div>
      </div>

      <!-- 管理团队部分 -->
      <div class="manage-team-section">
        <div class="section-header">
          <h2>管理团队</h2>
          <button class="add-member-btn">+ 添加成员</button>
        </div>

        <table class="team-members-table">
          <thead>
            <tr>
              <th></th>
              <th>姓名</th>
              <th>电子邮箱</th>
              <th>访问级别</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>
                <div class="user-info">
                  <div class="user-avatar bs">B</div>
                  <span>布鲁克林·西蒙斯</span>
                </div>
              </td>
              <td>curtis@example.com</td>
              <td><span class="access-level admin">管理员</span></td>
              <td>
                <div class="action-buttons">
                  <button class="delete-btn">🗑️</button>
                  <button class="edit-btn">✏️</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>
                <div class="user-info">
                  <div class="user-avatar jb">J</div>
                  <span>杰罗姆·贝尔</span>
                </div>
              </td>
              <td>lawson@example.com</td>
              <td><span class="access-level admin">管理员</span></td>
              <td>
                <div class="action-buttons">
                  <button class="delete-btn">🗑️</button>
                  <button class="edit-btn">✏️</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>
                <div class="user-info">
                  <div class="user-avatar mm">M</div>
                  <span>马文·麦金尼</span>
                </div>
              </td>
              <td>roberts@example.com</td>
              <td><span class="access-level advisor">顾问</span></td>
              <td>
                <div class="action-buttons">
                  <button class="delete-btn">🗑️</button>
                  <button class="edit-btn">✏️</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 已保存的支付方式 -->
      <div class="saved-payment-methods">
        <div class="section-header">
          <h2>已保存的支付方式</h2>
          <button class="add-new-btn">+ 添加新方式</button>
        </div>

        <div class="payment-method-item">
          <div class="payment-logo icici-bank"></div>
          <div class="payment-info">
            <span>账户: 拉菲克·拉赫曼</span>
          </div>
          <button class="expand-btn">∨</button>
        </div>

        <div class="payment-method-item">
          <div class="payment-logo mastercard"></div>
          <div class="payment-info">
            <span>卡号: 5344 **** **** 5755</span>
          </div>
          <button class="expand-btn">∨</button>
        </div>

        <div class="payment-method-item">
          <div class="payment-logo visa"></div>
          <div class="payment-info">
            <span>卡号: 5344 **** **** 5755</span>
          </div>
          <button class="expand-btn">∨</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamSettings'
}
</script>

<style scoped>
.team-settings-page {
  padding: 1.5rem;
  /* max-width: 1200px; */
  margin: 0 auto;
  height: auto;
  min-height: 100%;
  overflow-y: auto;
}

.page-header {
  margin-bottom: 1.5rem;
}

.page-header h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
}

/* 标签样式 */
.tabs {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;
  overflow: hidden;
}

.tab {
  padding: 0.8rem 1.5rem;
  background: none;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
}

.tab.active {
  color: #1a73e8;
  font-weight: 500;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1a73e8;
}

/* 设置容器样式 */
.settings-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  overflow-y: visible;
}

@media (min-width: 992px) {
  .settings-container {
    grid-template-columns: 1fr 2fr;
  }
  
  .saved-payment-methods {
    grid-column: 1 / -1;
  }
}

/* 概览部分样式 */
.overview-section {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.overview-section h2 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.team-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.team-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #1a73e8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.edit-avatar-btn {
  background: none;
  border: none;
  color: #1a73e8;
  font-size: 0.9rem;
  cursor: pointer;
}

.team-info-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 0.9rem;
  color: #5f6368;
  margin-bottom: 0.5rem;
}

.form-group input {
  padding: 0.8rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-size: 0.9rem;
}

.input-with-edit {
  display: flex;
  align-items: center;
}

.input-with-edit input {
  flex: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-with-edit .edit-btn {
  background: none;
  border: 1px solid #dadce0;
  border-left: none;
  padding: 0.8rem;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  position: relative;
}

.stat-label {
  font-size: 0.8rem;
  color: #5f6368;
}

.stat-value {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 0.5rem;
}

.stat-value.green {
  color: #4caf50;
}

.stat-value.red {
  color: #f44336;
}

.stat-arrow {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  color: #5f6368;
}

/* 管理团队部分样式 */
.manage-team-section {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
}

.add-member-btn, .add-new-btn {
  background: none;
  border: none;
  color: #1a73e8;
  font-size: 0.9rem;
  cursor: pointer;
}

.team-members-table {
  width: 100%;
  border-collapse: collapse;
}

.team-members-table th, .team-members-table td {
  padding: 1rem;
  text-align: left;
  font-size: 0.9rem;
  border-bottom: 1px solid #f1f3f4;
}

.team-members-table th {
  font-weight: 500;
  color: #5f6368;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  margin-right: 0.8rem;
  min-width: 30px; /* 确保最小宽度固定 */
  flex-shrink: 0; /* 防止在flex布局中被压缩 */
}

.user-avatar.bs {
  background-color: #f44336;
}

.user-avatar.jb {
  background-color: #ff9800;
}

.user-avatar.mm {
  background-color: #9c27b0;
}

.access-level {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 16px;
  font-size: 0.8rem;
}

.access-level.admin {
  background-color: #e8f0fe;
  color: #1a73e8;
}

.access-level.advisor {
  background-color: #e8f5e9;
  color: #4caf50;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.delete-btn, .edit-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #5f6368;
  padding: 0.3rem;
}

/* 已保存的支付方式样式 */
.saved-payment-methods {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.payment-method-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #f1f3f4;
}

.payment-method-item:last-child {
  border-bottom: none;
}

.payment-logo {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 1rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.icici-bank {
  background-color: #f44336;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.icici-bank::after {
  content: "I";
}

.mastercard {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%23ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"/><path fill="%23d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"/><path fill="%23ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"/></svg>');
}

.visa {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%231565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/><path fill="%23FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.177 1.991.177l.466-2.242c0 0-1.358-.515-3.019-.515-3.019 0-4.758 1.693-4.758 3.94 0 2.421 4.071 2.357 4.071 3.85 0 .342-.208.966-1.952.966-1.518 0-2.927-.494-2.927-.494l-.488 2.205c0 0 1.387.557 3.149.557 2.466 0 4.758-1.693 4.758-3.969C29.586 23.434 26.369 23.251 26.369 22.206z"/></svg>');
}

.payment-info {
  flex: 1;
  font-size: 0.9rem;
}

.expand-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #5f6368;
}

@media (max-width: 768px) {
  .team-members-table {
    display: block;
    overflow-x: auto;
  }
}

@media (max-width: 991px) {
  .settings-container {
    overflow-y: visible;
    height: auto;
  }
  
  .team-settings-page {
    overflow-y: auto;
    height: auto;
  }
}
</style>