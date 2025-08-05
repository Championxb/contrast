<template>
  <div class="compliance-documents-page">
    <div class="page-header">
      <h1>合规文档</h1>
    </div>

    <!-- 导航标签 -->
    <div class="tabs">
      <button class="tab active">全部</button>
      <button class="tab">活跃</button>
      <button class="tab">已完成</button>
      <button class="tab">应用</button>
    </div>

    <div class="documents-container">
      <div class="documents-header">
        <div class="document-count">20 文档</div>
        <div class="search-filter">
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="搜索合同..." />
          </div>
          <div class="filter-dropdown">
            <button class="filter-btn">文件类型 ▼</button>
          </div>
        </div>
      </div>

      <table class="documents-table">
        <thead>
          <tr>
            <th></th>
            <th>承包商名称</th>
            <th>类型</th>
            <th>承包商名称</th>
            <th>SSN/TIN</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>
              <div class="document-info">
                <div class="document-icon pdf">PDF</div>
                <div class="document-details">
                  <div class="document-name">产品需求</div>
                  <div class="document-date">上传于 2023年2月5日</div>
                </div>
              </div>
            </td>
            <td>个人</td>
            <td>
              <div class="user-info">
                <div class="user-avatar bs">B</div>
                <span>布鲁克林·西蒙斯</span>
              </div>
            </td>
            <td>19070720934</td>
            <td><span class="status active">活跃</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>
              <div class="document-info">
                <div class="document-icon pdf">PDF</div>
                <div class="document-details">
                  <div class="document-name">拉菲克合同</div>
                  <div class="document-date">上传于 2023年2月5日</div>
                </div>
              </div>
            </td>
            <td>个人</td>
            <td>
              <div class="user-info">
                <div class="user-avatar jb">J</div>
                <span>杰罗姆·贝尔</span>
              </div>
            </td>
            <td>19660129278</td>
            <td><span class="status active">活跃</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>
              <div class="document-info">
                <div class="document-icon doc">DOC</div>
                <div class="document-details">
                  <div class="document-name">阿波罗 NDA 萨比尔</div>
                  <div class="document-date">上传于 2023年2月5日</div>
                </div>
              </div>
            </td>
            <td>个人</td>
            <td>
              <div class="user-info">
                <div class="user-avatar mm">M</div>
                <span>马文·麦金尼</span>
              </div>
            </td>
            <td>19880507067</td>
            <td><span class="status completed">已完成</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>
              <div class="document-info">
                <div class="document-icon doc">DOC</div>
                <div class="document-details">
                  <div class="document-name">飞利目标</div>
                  <div class="document-date">上传于 2023年2月5日</div>
                </div>
              </div>
            </td>
            <td>个人</td>
            <td>
              <div class="user-info">
                <div class="user-avatar mm">M</div>
                <span>马文·麦金尼</span>
              </div>
            </td>
            <td>19960907111</td>
            <td><span class="status active">活跃</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>
              <div class="document-info">
                <div class="document-icon pdf">PDF</div>
                <div class="document-details">
                  <div class="document-name">飞利推介文稿</div>
                  <div class="document-date">上传于 2023年2月5日</div>
                </div>
              </div>
            </td>
            <td>个人</td>
            <td>
              <div class="user-info">
                <div class="user-avatar dr">D</div>
                <span>达琳·罗伯逊</span>
              </div>
            </td>
            <td>19830331839</td>
            <td><span class="status active">活跃</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>
              <div class="document-info">
                <div class="document-icon pdf">PDF</div>
                <div class="document-details">
                  <div class="document-name">六月合同</div>
                  <div class="document-date">上传于 2023年2月5日</div>
                </div>
              </div>
            </td>
            <td>个人</td>
            <td>
              <div class="user-info">
                <div class="user-avatar dr">D</div>
                <span>达琳·罗伯逊</span>
              </div>
            </td>
            <td>19964305749</td>
            <td><span class="status completed">已完成</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">📄</button>
                <button class="more-btn">⋮</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>
              <div class="document-info">
                <div class="document-icon pdf">PDF</div>
                <div class="document-details">
                  <div class="document-name">史蒂夫 NDA 项目</div>
                  <div class="document-date">上传于 2023年2月5日</div>
                </div>
              </div>
            </td>
            <td>个人</td>
            <td>
              <div class="user-info">
                <div class="user-avatar mm">M</div>
                <span>马文·麦金尼</span>
              </div>
            </td>
            <td>19750908788</td>
            <td><span class="status active">活跃</span></td>
            <td>
              <div class="action-buttons">
                <button class="view-btn">📄</button>
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
  name: 'ComplianceDocuments'
}
</script>

<style scoped>
.compliance-documents-page {
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
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
  overflow-x: auto;
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

/* 文档容器样式 */
.documents-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.documents-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f1f3f4;
}

.document-count {
  font-size: 0.9rem;
  color: #5f6368;
}

.search-filter {
  display: flex;
  gap: 1rem;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: #f1f3f4;
  border-radius: 24px;
  padding: 0.5rem 1rem;
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

.filter-btn {
  background-color: #f1f3f4;
  border: none;
  border-radius: 24px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* 文档表格样式 */
.documents-table {
  width: 100%;
  border-collapse: collapse;
}

.documents-table th, .documents-table td {
  padding: 1rem 1.5rem;
  text-align: left;
  font-size: 0.9rem;
}

.documents-table th {
  font-weight: 500;
  color: #5f6368;
  border-bottom: 1px solid #f1f3f4;
}

.documents-table tbody tr {
  border-bottom: 1px solid #f1f3f4;
}

.documents-table tbody tr:last-child {
  border-bottom: none;
}

.document-info {
  display: flex;
  align-items: center;
}

.document-icon {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 0.8rem;
  margin-right: 1rem;
}

.document-icon.pdf {
  background-color: #f44336;
}

.document-icon.doc {
  background-color: #1a73e8;
}

.document-details {
  display: flex;
  flex-direction: column;
}

.document-name {
  font-weight: 500;
}

.document-date {
  font-size: 0.8rem;
  color: #5f6368;
  margin-top: 0.3rem;
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

.status.active {
  background-color: #e8f5e9;
  color: #4caf50;
}

.status.completed {
  background-color: #e8eaf6;
  color: #9c27b0;
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

@media (max-width: 992px) {
  .documents-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .search-filter {
    width: 100%;
  }
  
  .search-box {
    flex: 1;
  }
  
  .documents-table {
    display: block;
    overflow-x: auto;
  }
}
</style>