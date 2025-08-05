<template>
  <div class="contracts-page">
    <div class="page-header">
      <h1>合同</h1>
      <div class="header-actions">
        <button class="export-btn">
          <span class="export-icon">⬇️</span>
          导出CSV
        </button>
        <button class="add-contract-btn">
          添加新合同 +
        </button>
      </div>
    </div>

    <div class="contracts-container">
      <div class="filters-bar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="搜索合同..." />
        </div>
        <div class="filter-buttons">
          <button class="filter-btn">
            <span class="filter-icon">🔍</span>
            筛选
          </button>
          <button class="filter-btn">
            合同类型 ▼
          </button>
          <button class="filter-btn">
            合同状态 ▼
          </button>
          <button class="refresh-btn">
            🔄
          </button>
        </div>
      </div>

      <div class="contracts-summary">
        <span>总计 20 个合同</span>
      </div>

      <table class="contracts-table">
        <thead>
          <tr>
            <th></th>
            <th>日期 <span class="sort-icon">↓</span></th>
            <th>承包商名称</th>
            <th>角色</th>
            <th>金额 <span class="sort-icon">↓</span></th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>2月25日</td>
            <td>
              <div class="user-info">
                <div class="user-avatar bs">B</div>
                <span>布鲁克林·西蒙斯</span>
              </div>
            </td>
            <td>产品设计师</td>
            <td>¥5,300</td>
            <td><span class="status pending">待处理</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">👁️</button>
                <button class="download-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>2月25日</td>
            <td>
              <div class="user-info">
                <div class="user-avatar jb">J</div>
                <span>杰罗姆·贝尔</span>
              </div>
            </td>
            <td>内容撰写</td>
            <td>¥5,457</td>
            <td><span class="status processing">处理中</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">👁️</button>
                <button class="download-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>2月20日</td>
            <td>
              <div class="user-info">
                <div class="user-avatar mm">M</div>
                <span>马文·麦金尼</span>
              </div>
            </td>
            <td>支持经理</td>
            <td>¥3,459</td>
            <td><span class="status success">成功</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">👁️</button>
                <button class="download-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>2月18日</td>
            <td>
              <div class="user-info">
                <div class="user-avatar mm">M</div>
                <span>马文·麦金尼</span>
              </div>
            </td>
            <td>动画师</td>
            <td>¥6,769</td>
            <td><span class="status processing">处理中</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">👁️</button>
                <button class="download-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>2月15日</td>
            <td>
              <div class="user-info">
                <div class="user-avatar dr">D</div>
                <span>达琳·罗伯逊</span>
              </div>
            </td>
            <td>内容撰写</td>
            <td>¥5,454</td>
            <td><span class="status pending">待处理</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">👁️</button>
                <button class="download-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>2月10日</td>
            <td>
              <div class="user-info">
                <div class="user-avatar dr">D</div>
                <span>达琳·罗伯逊</span>
              </div>
            </td>
            <td>内容撰写</td>
            <td>¥5,300</td>
            <td><span class="status success">成功</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">👁️</button>
                <button class="download-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>2月10日</td>
            <td>
              <div class="user-info">
                <div class="user-avatar mm">M</div>
                <span>马文·麦金尼</span>
              </div>
            </td>
            <td>支持经理</td>
            <td>¥7,456</td>
            <td><span class="status processing">处理中</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">👁️</button>
                <button class="download-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>2月10日</td>
            <td>
              <div class="user-info">
                <div class="user-avatar mm">M</div>
                <span>马文·麦金尼</span>
              </div>
            </td>
            <td>动画师</td>
            <td>¥5,226</td>
            <td><span class="status pending">待处理</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">👁️</button>
                <button class="download-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contracts'
}
</script>

<style scoped>
.contracts-page {
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.page-header h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.export-btn, .add-contract-btn {
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.export-btn {
  background-color: white;
  color: #5f6368;
  border: 1px solid #dadce0;
}

.export-icon {
  margin-right: 0.5rem;
}

.add-contract-btn {
  background-color: #1a73e8;
  color: white;
  border: none;
}

/* 合同容器样式 */
.contracts-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.filters-bar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #f1f3f4;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: #f1f3f4;
  border-radius: 4px;
  padding: 0.5rem;
  width: 250px;
}

.search-icon {
  margin-right: 0.5rem;
  color: #5f6368;
}

.search-box input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 0.9rem;
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
}

.filter-btn, .refresh-btn {
  background-color: #f1f3f4;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.filter-icon {
  margin-right: 0.5rem;
}

.refresh-btn {
  padding: 0.5rem;
}

.contracts-summary {
  padding: 1rem;
  font-size: 0.9rem;
  color: #5f6368;
}

/* 合同表格样式 */
.contracts-table {
  width: 100%;
  border-collapse: collapse;
}

.contracts-table th, .contracts-table td {
  padding: 1rem;
  text-align: left;
  font-size: 0.9rem;
}

.contracts-table th {
  font-weight: 500;
  color: #5f6368;
  border-bottom: 1px solid #f1f3f4;
}

.sort-icon {
  font-size: 0.8rem;
  margin-left: 0.3rem;
}

.contracts-table tbody tr {
  border-bottom: 1px solid #f1f3f4;
}

.contracts-table tbody tr:last-child {
  border-bottom: none;
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

.user-avatar.dr {
  background-color: #4caf50;
}

.status {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 16px;
  font-size: 0.8rem;
}

.status.pending {
  background-color: #f1f3f4;
  color: #5f6368;
}

.status.processing {
  background-color: #e8f0fe;
  color: #1a73e8;
}

.status.success {
  background-color: #e8f5e9;
  color: #4caf50;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.view-btn, .download-btn, .more-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #5f6368;
  padding: 0.3rem;
}

@media (max-width: 992px) {
  .filters-bar {
    flex-direction: column;
    gap: 1rem;
  }
  
  .search-box {
    width: 100%;
  }
  
  .filter-buttons {
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .contracts-table {
    display: block;
    overflow-x: auto;
  }
}
</style>