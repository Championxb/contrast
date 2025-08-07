<template>
  <div class="organization-settings-page">
    <div class="page-header">
      <h1>组织设置</h1>
    </div>

    <div class="settings-container">
      <!-- 组织信息部分 -->
      <div class="settings-section">
        <h2>组织信息</h2>
        <div class="org-profile">
          <div class="org-logo">
            <span>F</span>
          </div>
          <button class="edit-logo-btn">更改徽标</button>
        </div>

        <div class="form-group">
          <label>组织名称</label>
          <div class="input-with-edit">
            <input type="text" value="飞利科技有限公司" readonly />
            <button class="edit-btn">✏️</button>
          </div>
        </div>

        <div class="form-group">
          <label>行业</label>
          <div class="input-with-edit">
            <input type="text" value="信息技术" readonly />
            <button class="edit-btn">✏️</button>
          </div>
        </div>

        <div class="form-group">
          <label>组织规模</label>
          <div class="input-with-edit">
            <input type="text" value="50-100人" readonly />
            <button class="edit-btn">✏️</button>
          </div>
        </div>

        <div class="form-group">
          <label>网站</label>
          <div class="input-with-edit">
            <input type="url" value="https://fillio.com" readonly />
            <button class="edit-btn">✏️</button>
          </div>
        </div>

        <div class="form-group">
          <label>组织描述</label>
          <div class="textarea-with-edit">
            <textarea readonly>飞利科技是一家专注于人工智能和数据分析的科技公司，致力于为企业提供智能化解决方案。</textarea>
            <button class="edit-btn">✏️</button>
          </div>
        </div>
      </div>

      <!-- 联系信息部分 -->
      <div class="settings-section">
        <h2>联系信息</h2>
        
        <div class="form-group">
          <label>电子邮箱</label>
          <div class="input-with-edit">
            <input type="email" value="contact@fillio.com" readonly />
            <button class="edit-btn">✏️</button>
          </div>
        </div>

        <div class="form-group">
          <label>电话</label>
          <div class="input-with-edit">
            <input type="tel" value="+86 10 8888 8888" readonly />
            <button class="edit-btn">✏️</button>
          </div>
        </div>

        <div class="form-group">
          <label>地址</label>
          <div class="textarea-with-edit">
            <textarea readonly>北京市海淀区中关村科技园区8号楼15层</textarea>
            <button class="edit-btn">✏️</button>
          </div>
        </div>
      </div>

      <!-- 法律信息部分 -->
      <div class="settings-section">
        <h2>法律信息</h2>
        
        <div class="form-group">
          <label>营业执照号</label>
          <div class="input-with-edit">
            <input type="text" value="91110108MA01ABCDEF" readonly />
            <button class="edit-btn">✏️</button>
          </div>
        </div>

        <div class="form-group">
          <label>税号</label>
          <div class="input-with-edit">
            <input type="text" value="110108123456789" readonly />
            <button class="edit-btn">✏️</button>
          </div>
        </div>

        <div class="form-group">
          <label>法定代表人</label>
          <div class="input-with-edit">
            <input type="text" value="张明" readonly />
            <button class="edit-btn">✏️</button>
          </div>
        </div>
      </div>

      <!-- 安全设置部分 -->
      <div class="settings-section">
        <h2>安全设置</h2>
        
        <div class="setting-item">
          <div class="setting-info">
            <h3>双因素认证</h3>
            <p>为您的账户添加额外的安全层</p>
          </div>
          <div class="setting-control">
            <label class="switch">
              <input type="checkbox" checked />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="setting-item">
          <div class="setting-info">
            <h3>单点登录 (SSO)</h3>
            <p>使用您的组织身份提供商进行身份验证</p>
          </div>
          <div class="setting-control">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="setting-item">
          <div class="setting-info">
            <h3>IP地址限制</h3>
            <p>限制可以访问您账户的IP地址</p>
          </div>
          <div class="setting-control">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </div>

        <div class="setting-item">
          <div class="setting-info">
            <h3>会话超时</h3>
            <p>设置非活动状态后的自动注销时间</p>
          </div>
          <div class="setting-control">
            <select>
              <option>30分钟</option>
              <option>1小时</option>
              <option>2小时</option>
              <option>4小时</option>
              <option>8小时</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 危险区域部分 -->
      <div class="settings-section danger-zone">
        <h2>危险区域</h2>
        
        <div class="danger-item">
          <div class="danger-info">
            <h3>删除组织</h3>
            <p>此操作将永久删除您的组织及其所有数据，无法恢复。</p>
          </div>
          <button class="danger-btn">删除组织</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizationSettings'
}
</script>

<style scoped>
.organization-settings-page {
  padding: 1.5rem;
}

.page-header {
  margin-bottom: 1.5rem;
}

.page-header h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
}

.settings-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 992px) {
  .settings-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .settings-section:nth-child(n+3) {
    grid-column: span 2;
  }
}

.settings-section {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.settings-section h2 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.org-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.org-logo {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: #1a73e8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.edit-logo-btn {
  background: none;
  border: none;
  color: #1a73e8;
  font-size: 0.9rem;
  cursor: pointer;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  color: #5f6368;
  margin-bottom: 0.5rem;
}

.input-with-edit {
  display: flex;
  align-items: center;
}

.input-with-edit input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 0.9rem;
}

.textarea-with-edit {
  display: flex;
  align-items: stretch;
}

.textarea-with-edit textarea {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 0.9rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
}

.edit-btn {
  background: none;
  border: 1px solid #dadce0;
  border-left: none;
  padding: 0.8rem;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #f1f3f4;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-info h3 {
  margin: 0 0 0.3rem;
  font-size: 1rem;
}

.setting-info p {
  margin: 0;
  font-size: 0.8rem;
  color: #5f6368;
}

.setting-control select {
  padding: 0.5rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-size: 0.9rem;
}

/* 开关样式 */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #1a73e8;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.danger-zone {
  border: 1px solid #ffebee;
}

.danger-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.danger-info h3 {
  margin: 0 0 0.3rem;
  font-size: 1rem;
  color: #f44336;
}

.danger-info p {
  margin: 0;
  font-size: 0.8rem;
  color: #5f6368;
}

.danger-btn {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .danger-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .danger-btn {
    margin-top: 1rem;
  }
}
</style>