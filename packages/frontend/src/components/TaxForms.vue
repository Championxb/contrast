<template>
  <div class="tax-forms-page">
    <div class="page-header">
      <h1>税务表格</h1>
      <span class="badge new">新</span>
    </div>

    <div class="content-container">
      <div class="intro-section">
        <div class="intro-text">
          <h2>简化您的税务合规</h2>
          <p>我们的税务表格系统帮助您轻松管理所有必要的税务文件，确保您的业务合规并避免潜在的罚款。</p>
          <button class="get-started-btn">开始使用</button>
        </div>
        <div class="intro-image">
          <div class="tax-illustration"></div>
        </div>
      </div>

      <div class="forms-section">
        <h3>可用表格</h3>
        
        <div class="forms-grid">
          <div class="form-card">
            <div class="form-icon w9"></div>
            <div class="form-info">
              <h4>W-9表格</h4>
              <p>用于美国纳税人识别号和证明</p>
              <div class="form-meta">
                <span class="required-tag">必填</span>
                <span class="form-date">更新于: 2023年10月</span>
              </div>
            </div>
            <button class="form-action-btn">填写</button>
          </div>
          
          <div class="form-card">
            <div class="form-icon w8ben"></div>
            <div class="form-info">
              <h4>W-8BEN表格</h4>
              <p>外国个人受益所有人的预扣税证明</p>
              <div class="form-meta">
                <span class="optional-tag">可选</span>
                <span class="form-date">更新于: 2023年8月</span>
              </div>
            </div>
            <button class="form-action-btn">填写</button>
          </div>
          
          <div class="form-card">
            <div class="form-icon w8bene"></div>
            <div class="form-info">
              <h4>W-8BEN-E表格</h4>
              <p>外国实体受益所有人的预扣税证明</p>
              <div class="form-meta">
                <span class="optional-tag">可选</span>
                <span class="form-date">更新于: 2023年9月</span>
              </div>
            </div>
            <button class="form-action-btn">填写</button>
          </div>
          
          <div class="form-card">
            <div class="form-icon i1099"></div>
            <div class="form-info">
              <h4>1099-NEC表格</h4>
              <p>非雇员补偿信息申报</p>
              <div class="form-meta">
                <span class="required-tag">必填</span>
                <span class="form-date">更新于: 2023年12月</span>
              </div>
            </div>
            <button class="form-action-btn">填写</button>
          </div>
        </div>
      </div>

      <div class="submitted-forms-section">
        <h3>已提交的表格</h3>
        
        <table class="submitted-forms-table">
          <thead>
            <tr>
              <th>表格类型</th>
              <th>提交日期</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>W-9表格</td>
              <td>2023年1月15日</td>
              <td><span class="status-badge approved">已批准</span></td>
              <td>
                <div class="action-buttons">
                  <button class="view-btn">查看</button>
                  <button class="download-btn">下载</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1099-NEC表格</td>
              <td>2023年2月10日</td>
              <td><span class="status-badge pending">审核中</span></td>
              <td>
                <div class="action-buttons">
                  <button class="view-btn">查看</button>
                  <button class="download-btn">下载</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaxForms'
}
</script>

<style scoped>
.tax-forms-page {
  padding: 1.5rem;
}

.page-header {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.page-header h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
}

.badge.new {
  background-color: #ff9800;
  color: white;
  border-radius: 12px;
  padding: 0.1rem 0.4rem;
  font-size: 0.7rem;
  margin-left: 0.5rem;
}

.content-container {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.intro-section {
  display: flex;
  margin-bottom: 2rem;
  gap: 2rem;
}

.intro-text {
  flex: 1;
}

.intro-text h2 {
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.intro-text p {
  color: #5f6368;
  margin-bottom: 1.5rem;
}

.get-started-btn {
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
}

.intro-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tax-illustration {
  width: 100%;
  height: 200px;
  background-color: #f1f3f4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.tax-illustration::after {
  content: "📊";
  font-size: 4rem;
}

.forms-section, .submitted-forms-section {
  margin-bottom: 2rem;
}

.forms-section h3, .submitted-forms-section h3 {
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.forms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.form-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.form-icon {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.form-icon.w9 {
  background-color: #4285F4;
}

.form-icon.w9::after {
  content: "W9";
}

.form-icon.w8ben {
  background-color: #0F9D58;
}

.form-icon.w8ben::after {
  content: "W8";
}

.form-icon.w8bene {
  background-color: #F4B400;
}

.form-icon.w8bene::after {
  content: "W8E";
}

.form-icon.i1099 {
  background-color: #DB4437;
}

.form-icon.i1099::after {
  content: "1099";
}

.form-info {
  flex: 1;
}

.form-info h4 {
  margin: 0 0 0.3rem;
  font-size: 1rem;
}

.form-info p {
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
  color: #5f6368;
}

.form-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
}

.required-tag {
  color: #f44336;
}

.optional-tag {
  color: #5f6368;
}

.form-date {
  color: #5f6368;
}

.form-action-btn {
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.submitted-forms-table {
  width: 100%;
  border-collapse: collapse;
}

.submitted-forms-table th, .submitted-forms-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #f1f3f4;
}

.submitted-forms-table th {
  font-weight: 500;
  color: #5f6368;
}

.status-badge {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 16px;
  font-size: 0.8rem;
}

.status-badge.approved {
  background-color: #e8f5e9;
  color: #4caf50;
}

.status-badge.pending {
  background-color: #fff8e1;
  color: #ff9800;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.view-btn, .download-btn {
  background: none;
  border: 1px solid #dadce0;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  cursor: pointer;
}

.view-btn {
  color: #1a73e8;
}

.download-btn {
  color: #5f6368;
}

@media (max-width: 768px) {
  .intro-section {
    flex-direction: column;
  }
  
  .submitted-forms-table {
    display: block;
    overflow-x: auto;
  }
}
</style>