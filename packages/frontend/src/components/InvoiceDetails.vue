<template>
  <div class="invoice-details-page">
    <div class="invoice-container">
      <div class="invoice-sidebar">
        <div class="payment-methods-section">
          <h2>支付方式</h2>
          
          <!-- 银行卡信息 -->
          <div class="payment-card">
            <div class="payment-card-header">
              <div class="payment-card-logo icici-bank"></div>
              <div class="payment-card-info">
                <span>账户: 拉菲克·拉赫曼</span>
              </div>
            </div>
          </div>

          <!-- 银行详情 -->
          <div class="bank-details">
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
          </div>

          <!-- 万事达卡信息 -->
          <div class="payment-card">
            <div class="payment-card-header">
              <div class="payment-card-logo mastercard"></div>
              <div class="payment-card-info">
                <span>到期日期: 12/2023</span>
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
            </div>
          </div>

          <!-- 支付历史 -->
          <div class="payment-history">
            <h2>支付历史</h2>
            <table class="payments-table">
              <thead>
                <tr>
                  <th></th>
                  <th>发票</th>
                  <th>收款人</th>
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
                </tr>
                <tr class="active">
                  <td><input type="checkbox"></td>
                  <td>发票 #453</td>
                  <td>
                    <div class="user-info">
                      <div class="user-avatar jb">J</div>
                      <span>杰罗姆·贝尔</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="invoice-details">
        <div class="invoice-header">
          <h2>发票详情</h2>
        </div>

        <div class="invoice-info">
          <h3>发票 #453</h3>

          <div class="info-grid">
            <div class="info-group">
              <div class="info-label">状态</div>
              <div class="info-value">
                <span class="status paid">已支付</span>
              </div>
            </div>
            <div class="info-group">
              <div class="info-label">支付用途</div>
              <div class="info-value">完成里程碑 1</div>
            </div>
            <div class="info-group">
              <div class="info-label">支付日期</div>
              <div class="info-value">2023年3月15日</div>
            </div>
          </div>

          <div class="payment-parties">
            <div class="payment-to">
              <div class="info-label">支付给</div>
              <div class="user-card">
                <div class="user-avatar jb">J</div>
                <div class="user-details">
                  <div class="user-name">杰罗姆·贝尔</div>
                  <div class="user-email">jerome.bell@gmail.com</div>
                </div>
              </div>
              <div class="payment-method">
                <div class="payment-logo icici-bank"></div>
                <div class="payment-bank">ICICI 银行</div>
              </div>
              <div class="payment-address">
                利兹北部, HL 2345<br>
                英国
              </div>
            </div>

            <div class="payment-from">
              <div class="info-label">支付方</div>
              <div class="user-card">
                <div class="user-avatar ft">F</div>
                <div class="user-details">
                  <div class="user-name">飞利团队</div>
                  <div class="user-email">hello@fillio.com</div>
                </div>
              </div>
              <div class="payment-method">
                <div class="payment-logo visa"></div>
                <div class="payment-card-number">***** 467</div>
              </div>
              <div class="payment-address">
                鲁帕扬塔楼, 沙普贡<br>
                锡尔赫特
              </div>
            </div>
          </div>

          <div class="invoice-items">
            <table class="items-table">
              <thead>
                <tr>
                  <th>项目</th>
                  <th>金额</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="item-details">
                      <div class="item-name">登陆页面</div>
                      <div class="item-description">完成首页，含3次修改</div>
                    </div>
                  </td>
                  <td class="item-amount">¥345.00</td>
                </tr>
                <tr>
                  <td>
                    <div class="item-details">
                      <div class="item-name">仪表板</div>
                      <div class="item-description">完成首页，含3次修改</div>
                    </div>
                  </td>
                  <td class="item-amount">¥345.00</td>
                </tr>
                <tr class="total-row">
                  <td>总金额</td>
                  <td class="total-amount">¥690.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="invoice-description">
            <div class="info-label">描述</div>
            <div class="description-editor">
              <div class="editor-toolbar">
                <button class="toolbar-btn">🔤</button>
                <button class="toolbar-btn">B</button>
                <button class="toolbar-btn"><i>I</i></button>
                <button class="toolbar-btn"><u>U</u></button>
                <span class="separator"></span>
                <button class="toolbar-btn">•</button>
                <button class="toolbar-btn">1.</button>
              </div>
              <div class="editor-content">
                研究：进行市场研究，收集用户见解并了解客户需求，以便为设计过程提供信息
              </div>
              <div class="editor-footer">
                <span class="char-count">0/250</span>
              </div>
            </div>
          </div>

          <div class="invoice-actions">
            <button class="download-btn">
              <span class="btn-icon">📄</span>
              下载 PDF
            </button>
            <div class="action-buttons">
              <button class="share-btn">分享</button>
              <button class="delete-btn">删除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceDetails'
}
</script>

<style scoped>
.invoice-details-page {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.invoice-container {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
}

/* 侧边栏样式 */
.invoice-sidebar {
  width: 35%;
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-right: 1px solid #e0e0e0;
}

@media (max-width: 992px) {
  .invoice-container {
    flex-direction: column;
  }
  
  .invoice-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }
}

.payment-methods-section h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1.5rem;
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

/* 银行详情样式 */
.bank-details {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
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

/* 支付历史样式 */
.payment-history {
  margin-top: 2rem;
}

.payment-history h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
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
  padding: 0.8rem;
  text-align: left;
  font-size: 0.9rem;
}

.payments-table th {
  background-color: #f9f9f9;
  font-weight: 500;
  color: #5f6368;
}

.payments-table tbody tr {
  border-bottom: 1px solid #f1f3f4;
}

.payments-table tbody tr:last-child {
  border-bottom: none;
}

.payments-table tbody tr.active {
  background-color: #e8f0fe;
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

.user-avatar.ft {
  background-color: #1a73e8;
}

/* 发票详情样式 */
.invoice-details {
  flex: 1;
  padding: 1.5rem;
  background-color: white;
}

.invoice-header {
  margin-bottom: 1.5rem;
}

.invoice-header h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
}

.invoice-info h3 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}

.info-group {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: 0.9rem;
  color: #5f6368;
  margin-bottom: 0.5rem;
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

/* 支付方和收款方样式 */
.payment-parties {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .payment-parties {
    grid-template-columns: 1fr;
  }
}

.payment-to, .payment-from {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.user-card {
  display: flex;
  align-items: center;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 500;
}

.user-email {
  font-size: 0.8rem;
  color: #5f6368;
}

.payment-method {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.payment-logo {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  margin-right: 0.8rem;
}

.payment-bank, .payment-card-number {
  font-size: 0.9rem;
}

.payment-address {
  font-size: 0.9rem;
  color: #5f6368;
  line-height: 1.5;
}

/* 发票项目样式 */
.invoice-items {
  margin-bottom: 2rem;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
}

.items-table th, .items-table td {
  padding: 1rem;
  text-align: left;
  font-size: 0.9rem;
  border-bottom: 1px solid #f1f3f4;
}

.items-table th {
  font-weight: 500;
  color: #5f6368;
}

.item-details {
  display: flex;
  flex-direction: column;
}

.item-name {
  font-weight: 500;
}

.item-description {
  font-size: 0.8rem;
  color: #5f6368;
  margin-top: 0.3rem;
}

.item-amount {
  font-weight: 500;
}

.total-row {
  font-weight: 500;
}

.total-amount {
  font-size: 1.1rem;
}

/* 描述编辑器样式 */
.invoice-description {
  margin-bottom: 2rem;
}

.description-editor {
  border: 1px solid #dadce0;
  border-radius: 8px;
  overflow: hidden;
}

.editor-toolbar {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #dadce0;
  background-color: #f9f9f9;
}

.toolbar-btn {
  background: none;
  border: none;
  padding: 0.3rem 0.5rem;
  margin-right: 0.3rem;
  cursor: pointer;
  font-size: 0.9rem;
}

.separator {
  width: 1px;
  height: 20px;
  background-color: #dadce0;
  margin: 0 0.5rem;
}

.editor-content {
  padding: 1rem;
  min-height: 100px;
  font-size: 0.9rem;
  line-height: 1.5;
}

.editor-footer {
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  border-top: 1px solid #dadce0;
  background-color: #f9f9f9;
}

.char-count {
  font-size: 0.8rem;
  color: #5f6368;
}

/* 发票操作按钮样式 */
.invoice-actions {
  display: flex;
  justify-content: space-between;
}

.download-btn {
  display: flex;
  align-items: center;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
}

.btn-icon {
  margin-right: 0.5rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
}

.share-btn, .delete-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
}

.share-btn {
  background-color: white;
  color: #5f6368;
  border: 1px solid #dadce0;
}

.delete-btn {
  background-color: white;
  color: #f44336;
  border: 1px solid #dadce0;
}

@media (max-width: 576px) {
  .invoice-actions {
    flex-direction: column;
    gap: 1rem;
  }
  
  .download-btn {
    width: 100%;
    justify-content: center;
  }
  
  .action-buttons {
    width: 100%;
  }
  
  .share-btn, .delete-btn {
    flex: 1;
    text-align: center;
  }
}
</style>