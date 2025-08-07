<template>
  <div class="invoice-receipts-page">
    <div class="page-header">
      <h1>发票收据</h1>
    </div>

    <div class="content-container">
      <div class="filter-section">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="搜索发票..." />
        </div>
        <div class="filter-options">
          <select>
            <option>所有状态</option>
            <option>已支付</option>
            <option>待处理</option>
            <option>已取消</option>
          </select>
          <select>
            <option>所有日期</option>
            <option>本月</option>
            <option>上个月</option>
            <option>过去3个月</option>
          </select>
          <button class="filter-btn">筛选</button>
        </div>
      </div>

      <div class="invoices-list">
        <table>
          <thead>
            <tr>
              <th>发票编号</th>
              <th>日期</th>
              <th>客户</th>
              <th>金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 8" :key="i">
              <td><router-link :to="`/invoice-details/${1000 + i}`">#INV-{{ 1000 + i }}</router-link></td>
              <td>{{ new Date(2023, i-1, i*3).toLocaleDateString('zh-CN') }}</td>
              <td>客户 {{ i }}</td>
              <td>¥{{ (i * 1000).toFixed(2) }}</td>
              <td>
                <span :class="['status-badge', i % 3 === 0 ? 'pending' : i % 3 === 1 ? 'paid' : 'cancelled']">
                  {{ i % 3 === 0 ? '待处理' : i % 3 === 1 ? '已支付' : '已取消' }}
                </span>
              </td>
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

      <div class="pagination">
        <button class="page-btn prev">上一页</button>
        <div class="page-numbers">
          <button class="page-number active">1</button>
          <button class="page-number">2</button>
          <button class="page-number">3</button>
          <span>...</span>
          <button class="page-number">8</button>
        </div>
        <button class="page-btn next">下一页</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceReceipts'
}
</script>

<style scoped>
.invoice-receipts-page {
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

.content-container {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.filter-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: #f1f3f4;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  width: 300px;
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

.filter-options {
  display: flex;
  gap: 0.5rem;
}

.filter-options select {
  padding: 0.5rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-size: 0.9rem;
}

.filter-btn {
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.invoices-list {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #f1f3f4;
}

th {
  font-weight: 500;
  color: #5f6368;
}

td a {
  color: #1a73e8;
  text-decoration: none;
}

.status-badge {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 16px;
  font-size: 0.8rem;
}

.status-badge.pending {
  background-color: #fff8e1;
  color: #ff9800;
}

.status-badge.paid {
  background-color: #e8f5e9;
  color: #4caf50;
}

.status-badge.cancelled {
  background-color: #ffebee;
  color: #f44336;
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

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

.page-btn {
  background: none;
  border: 1px solid #dadce0;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.page-numbers {
  display: flex;
  align-items: center;
  margin: 0 1rem;
}

.page-number {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 50%;
  margin: 0 0.2rem;
  cursor: pointer;
}

.page-number.active {
  background-color: #1a73e8;
  color: white;
}

@media (max-width: 768px) {
  .filter-section {
    flex-direction: column;
  }
  
  .search-box {
    width: 100%;
  }
  
  .filter-options {
    width: 100%;
    overflow-x: auto;
  }
}
</style>