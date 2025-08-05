<template>
  <div class="payment-methods-page">
    <div class="page-header">
      <h1>支付方式</h1>
      <button class="add-new-btn">添加新方式 +</button>
    </div>

    <!-- 银行卡信息 -->
    <div class="payment-card">
      <div class="payment-card-header">
        <div class="payment-card-logo icici-bank"></div>
        <div class="payment-card-info">
          <span>账户: 拉菲克·拉赫曼</span>
        </div>
        <div class="payment-card-number">
          <span>卡号: 5344 **** **** 5755</span>
        </div>
        <div class="payment-card-actions">
          <button class="action-btn">⋮</button>
          <button class="expand-btn">∧</button>
        </div>
      </div>

      <div class="payment-card-details">
        <div class="details-row">
          <div class="details-label">银行名称:</div>
          <div class="details-value">First Century Bank</div>
        </div>
        <div class="details-row">
          <div class="details-label">路由(ABA):</div>
          <div class="details-value">061120009</div>
        </div>
        <div class="details-row">
          <div class="details-label">账户号码:</div>
          <div class="details-value">4534 3455 3453 5755</div>
          <div class="copy-info">
            <span class="copy-text">复制信息</span>
            <span class="copy-icon">📋</span>
          </div>
        </div>
        <div class="details-row balance-row">
          <div class="current-balance">
            <span>当前余额:</span>
            <span class="balance-amount">¥12,000</span>
          </div>
          <div class="balance-actions">
            <button class="edit-btn">
              <span class="edit-icon">✏️</span>
              <span>编辑</span>
            </button>
            <button class="remove-btn">
              <span class="remove-icon">🗑️</span>
              <span>删除</span>
            </button>
          </div>
        </div>
        <div class="details-row button-row">
          <button class="deposit-btn">存款</button>
          <button class="withdraw-btn">提款</button>
        </div>
      </div>
    </div>

    <!-- 万事达卡信息 -->
    <div class="payment-card">
      <div class="payment-card-header">
        <div class="payment-card-logo mastercard"></div>
        <div class="payment-card-info">
          <span>到期日期: 12/2023</span>
        </div>
        <div class="payment-card-number">
          <span>卡号: 5344 **** **** 5755</span>
        </div>
        <div class="payment-card-actions">
          <button class="action-btn">⋮</button>
          <button class="expand-btn">∨</button>
        </div>
      </div>
    </div>

    <!-- Visa卡信息 -->
    <div class="payment-card">
      <div class="payment-card-header">
        <div class="payment-card-logo visa"></div>
        <div class="payment-card-info">
          <span>到期日期: 12/2023</span>
        </div>
        <div class="payment-card-number">
          <span>卡号: 5344 **** **** 5755</span>
        </div>
        <div class="payment-card-actions">
          <button class="action-btn">⋮</button>
          <button class="expand-btn">∨</button>
        </div>
      </div>
    </div>

    <!-- 支付历史 -->
    <div class="payment-history">
      <div class="section-header">
        <h2>支付历史</h2>
        <a href="#" class="see-all-link">查看全部</a>
      </div>

      <table class="payments-table">
        <thead>
          <tr>
            <th></th>
            <th>发票</th>
            <th>收款人</th>
            <th>状态</th>
            <th>支付日期 <span class="sort-icon">↓</span></th>
            <th>金额 <span class="sort-icon">↓</span></th>
            <th>支付用途</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox"></td>
            <td>发票 #452</td>
            <td>
              <div class="user-info">
                <div class="user-avatar bs">B</div>
                <span>布鲁克林·西蒙斯</span>
              </div>
            </td>
            <td><span class="status paid">已支付</span></td>
            <td>2023年2月5日</td>
            <td>¥4,500</td>
            <td>里程碑 1</td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">📄</button>
                <button class="more-btn">→</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>发票 #453</td>
            <td>
              <div class="user-info">
                <div class="user-avatar jb">J</div>
                <span>杰罗姆·贝尔</span>
              </div>
            </td>
            <td><span class="status paid">已支付</span></td>
            <td>2023年2月5日</td>
            <td>¥4,500</td>
            <td>里程碑 2</td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">📄</button>
                <button class="more-btn">→</button>
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
  name: 'PaymentMethods'
}
</script>

<style scoped>
.payment-methods-page {
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

.add-new-btn {
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 0.6rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* 支付卡片样式 */
.payment-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  overflow: hidden;
}

.payment-card-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #f1f3f4;
}

.payment-card-logo {
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

.payment-card-info {
  flex: 1;
  font-size: 0.9rem;
  color: #5f6368;
}

.payment-card-number {
  font-size: 0.9rem;
  color: #5f6368;
  margin-right: 1rem;
}

.payment-card-actions {
  display: flex;
  align-items: center;
}

.action-btn, .expand-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #5f6368;
  padding: 0.3rem;
}

.payment-card-details {
  padding: 1rem;
  background-color: #f9f9f9;
}

.details-row {
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
}

.details-row:last-child {
  margin-bottom: 0;
}

.details-label {
  width: 120px;
  font-size: 0.9rem;
  color: #5f6368;
}

.details-value {
  font-size: 0.9rem;
  flex: 1;
}

.copy-info {
  display: flex;
  align-items: center;
  color: #f44336;
  font-size: 0.8rem;
  cursor: pointer;
}

.copy-icon {
  margin-left: 0.3rem;
}

.balance-row {
  justify-content: space-between;
}

.current-balance {
  font-size: 0.9rem;
}

.balance-amount {
  font-weight: 500;
  font-size: 1.1rem;
  margin-left: 0.5rem;
}

.balance-actions {
  display: flex;
  gap: 1rem;
}

.edit-btn, .remove-btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #5f6368;
  cursor: pointer;
}

.edit-icon, .remove-icon {
  margin-right: 0.3rem;
}

.button-row {
  justify-content: flex-start;
  gap: 1rem;
}

.deposit-btn, .withdraw-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 24px;
  font-size: 0.9rem;
  cursor: pointer;
}

.deposit-btn {
  background-color: #1a73e8;
  color: white;
  border: none;
}

.withdraw-btn {
  background-color: white;
  color: #5f6368;
  border: 1px solid #dadce0;
}

/* 支付历史样式 */
.payment-history {
  margin-top: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
}

.see-all-link {
  color: #1a73e8;
  text-decoration: none;
  font-size: 0.9rem;
}

.payments-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.payments-table th, .payments-table td {
  padding: 1rem;
  text-align: left;
  font-size: 0.9rem;
}

.payments-table th {
  background-color: #f9f9f9;
  font-weight: 500;
  color: #5f6368;
}

.sort-icon {
  font-size: 0.8rem;
  margin-left: 0.3rem;
}

.payments-table tbody tr {
  border-bottom: 1px solid #f1f3f4;
}

.payments-table tbody tr:last-child {
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

.status {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 16px;
  font-size: 0.8rem;
}

.status.paid {
  background-color: #e8f0fe;
  color: #1a73e8;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.view-btn, .more-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #5f6368;
  padding: 0.3rem;
}

@media (max-width: 768px) {
  .payment-card-header {
    flex-wrap: wrap;
  }
  
  .payment-card-number {
    width: 100%;
    margin: 0.5rem 0;
  }
  
  .payments-table {
    display: block;
    overflow-x: auto;
  }
}
</style>