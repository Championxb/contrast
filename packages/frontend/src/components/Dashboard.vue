<template>
  <div class="dashboard">
    <div class="welcome-header">
      <div>
        <p class="date">星期日, 3月04日</p>
        <h1 class="greeting">晚上好！拉菲克</h1>
      </div>
    </div>

    <!-- 卡片区域 -->
    <div class="cards-container">
      <!-- 总余额卡片 -->
      <div class="card balance-card">
        <div class="card-header">
          <span class="card-icon">💰</span>
          <span class="growth-indicator positive">+23% <span class="info-icon">ℹ️</span></span>
        </div>
        <div class="card-title">总余额</div>
        <div class="card-value">¥ 34,500.12</div>
      </div>

      <!-- 已支付卡片 -->
      <div class="card paid-card">
        <div class="card-header">
          <span class="card-icon">✓</span>
          <span class="dropdown">每月 ▼</span>
        </div>
        <div class="card-title">总支付</div>
        <div class="card-value">¥ 4,500.12</div>
      </div>

      <!-- 待付款卡片 -->
      <div class="card due-card">
        <div class="card-header">
          <span class="due-count">2 待付款</span>
          <button class="pay-btn">支付</button>
        </div>
        <div class="card-value">¥ 1,320</div>
      </div>

      <!-- 提交卡片 -->
      <div class="card submission-card">
        <div class="card-header">
          <span class="submission-count">4 提交</span>
          <button class="approve-btn">批准</button>
        </div>
        <div class="card-value">¥ 4,434.89</div>
      </div>
    </div>

    <!-- 本月支付表格 -->
    <div class="table-section">
      <div class="table-header">
        <h2>本月支付</h2>
        <div class="toggle-container">
          <span>最近 30 天</span>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>
        </div>
      </div>

      <table class="payments-table">
        <thead>
          <tr>
            <th></th>
            <th>日期</th>
            <th>姓名</th>
            <th>卡片</th>
            <th>金额</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox"></td>
            <td>2月25日</td>
            <td>萨凡纳·阮</td>
            <td><span class="card-type visa">VISA</span> •••• 447</td>
            <td>¥2,623.69</td>
            <td><span class="status success">成功</span></td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>2月25日</td>
            <td>杰罗姆·贝尔</td>
            <td><span class="card-type visa">VISA</span> •••• 994</td>
            <td>¥162.96</td>
            <td><span class="status processing">处理中</span></td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>2月24日</td>
            <td>克里斯汀·沃森</td>
            <td><span class="card-type amex">AMEX</span> •••• 798</td>
            <td>¥284.83</td>
            <td><span class="status success">成功</span></td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>2月20日</td>
            <td>达雷尔·斯图尔特</td>
            <td><span class="card-type mastercard">MC</span> •••• 536</td>
            <td>¥2,004.13</td>
            <td><span class="status failed">失败</span></td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>2月15日</td>
            <td>珍妮·威尔逊</td>
            <td><span class="card-type other">其他</span> •••• 816</td>
            <td>¥2,728.95</td>
            <td><span class="status success">成功</span></td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>2月15日</td>
            <td>卡梅隆·威廉姆森</td>
            <td><span class="card-type visa">VISA</span> •••• 467</td>
            <td>¥6,359.67</td>
            <td><span class="status success">成功</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 全球团队部分 -->
    <div class="global-team-section">
      <div class="section-header">
        <h2>全球团队</h2>
        <span class="countries-count">3 国家</span>
      </div>

      <div class="team-stats">
        <div class="donut-chart">
          <div class="donut-number">18</div>
        </div>

        <div class="countries-list">
          <div class="country-item">
            <div class="country-flag us-flag"></div>
            <div class="country-name">美国</div>
            <div class="country-bar">
              <div class="progress-bar us-bar"></div>
            </div>
            <div class="country-count">10</div>
          </div>

          <div class="country-item">
            <div class="country-flag ireland-flag"></div>
            <div class="country-name">爱尔兰</div>
            <div class="country-bar">
              <div class="progress-bar ireland-bar"></div>
            </div>
            <div class="country-count">3</div>
          </div>

          <div class="country-item">
            <div class="country-flag canada-flag"></div>
            <div class="country-name">加拿大</div>
            <div class="country-bar">
              <div class="progress-bar canada-bar"></div>
            </div>
            <div class="country-count">5</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      // 这里可以添加需要的数据
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 1.5rem;
  background-color: #f8f9fa;
}

.welcome-header {
  margin-bottom: 1.5rem;
}

.date {
  margin: 0;
  color: #5f6368;
  font-size: 0.9rem;
}

.greeting {
  margin: 0.3rem 0 0;
  font-size: 1.8rem;
  font-weight: 500;
}

/* 卡片区域样式 */
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (max-width: 1200px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
}

.card {
  background-color: white;
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.card-icon {
  font-size: 1.2rem;
}

.growth-indicator {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
}

.growth-indicator.positive {
  color: #4caf50;
}

.info-icon {
  margin-left: 0.3rem;
  font-size: 0.8rem;
  color: #5f6368;
}

.dropdown {
  font-size: 0.8rem;
  color: #5f6368;
}

.card-title {
  color: #5f6368;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.card-value {
  font-size: 1.5rem;
  font-weight: 500;
}

.due-count, .submission-count {
  font-size: 0.9rem;
  color: #5f6368;
}

.pay-btn, .approve-btn {
  padding: 0.4rem 1rem;
  border-radius: 16px;
  border: none;
  font-size: 0.8rem;
  cursor: pointer;
}

.pay-btn {
  background-color: #e8f0fe;
  color: #1a73e8;
}

.approve-btn {
  background-color: #e8f5e9;
  color: #4caf50;
}

/* 表格区域样式 */
.table-section {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.table-header h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
}

.toggle-container {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #5f6368;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 0.8rem;
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
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #1a73e8;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.payments-table {
  width: 100%;
  border-collapse: collapse;
}

.payments-table th {
  text-align: left;
  padding: 0.8rem;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 500;
  color: #5f6368;
  font-size: 0.9rem;
}

.payments-table td {
  padding: 0.8rem;
  border-bottom: 1px solid #e0e0e0;
  font-size: 0.9rem;
}

.card-type {
  display: inline-block;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
  margin-right: 0.3rem;
}

.visa {
  background-color: #eef5ff;
  color: #1a73e8;
}

.mastercard {
  background-color: #fff4e5;
  color: #ff9800;
}

.amex {
  background-color: #e8f5e9;
  color: #4caf50;
}

.other {
  background-color: #f1f3f4;
  color: #5f6368;
}

.status {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 16px;
  font-size: 0.8rem;
}

.success {
  background-color: #e8f5e9;
  color: #4caf50;
}

.processing {
  background-color: #e8f0fe;
  color: #1a73e8;
}

.failed {
  background-color: #ffebee;
  color: #f44336;
}

/* 全球团队部分样式 */
.global-team-section {
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
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
}

.countries-count {
  font-size: 0.9rem;
  color: #5f6368;
}

.team-stats {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .team-stats {
    flex-direction: column;
  }
}

.donut-chart {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    #4caf50 0% 60%,
    #ffeb3b 60% 80%,
    #e0e0e0 80% 100%
  );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.donut-chart::before {
  content: "";
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
}

.donut-number {
  position: relative;
  font-size: 1.8rem;
  font-weight: 500;
}

.countries-list {
  flex: 1;
}

.country-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.country-flag {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 0.8rem;
  background-size: cover;
}

.us-flag {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%23f0f0f0" d="M0 85.33h512v341.33H0z"/><path fill="%23d80027" d="M0 85.33h512v42.67H0zm0 85.34h512v42.67H0zm0 85.33h512v42.67H0zm0 85.33h512v42.67H0z"/><path fill="%232e3192" d="M0 85.33h256v170.67H0z"/></svg>');
}

.ireland-flag {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%23f0f0f0" d="M0 85.33h512v341.33H0z"/><path fill="%236da544" d="M0 85.33h170.67v341.33H0z"/><path fill="%23ff9811" d="M341.33 85.33H512v341.33H341.33z"/></svg>');
}

.canada-flag {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%23f0f0f0" d="M0 85.33h512v341.33H0z"/><path fill="%23d80027" d="M0 85.33h170.67v341.33H0zm341.33 0H512v341.33H341.33zM288 279.7l32-16-16-8v-16l-32 16 16-32h-16l-16-24-16 24h-16l16 32-32-16v16l-16 8 32 16-8 16h48z"/></svg>');
}

.country-name {
  width: 80px;
  font-size: 0.9rem;
}

.country-bar {
  flex: 1;
  height: 8px;
  background-color: #f1f3f4;
  border-radius: 4px;
  margin: 0 1rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 4px;
}

.us-bar {
  width: 100%;
  background-color: #4caf50;
}

.ireland-bar {
  width: 30%;
  background-color: #ffeb3b;
}

.canada-bar {
  width: 50%;
  background-color: #ff9800;
}

.country-count {
  font-size: 0.9rem;
  font-weight: 500;
}
</style>