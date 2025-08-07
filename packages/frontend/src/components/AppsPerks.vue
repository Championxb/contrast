<template>
  <div class="apps-perks-page">
    <div class="page-header">
      <h1>应用与特权</h1>
    </div>

    <div class="content-container">
      <div class="section-header">
        <h2>推荐应用</h2>
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="搜索应用..." />
        </div>
      </div>

      <div class="apps-grid">
        <div class="app-card" v-for="i in 6" :key="i">
          <div class="app-icon" :class="`app-${i}`">
            <span>{{ ['S', 'D', 'G', 'A', 'T', 'P'][i-1] }}</span>
          </div>
          <div class="app-info">
            <h3>{{ ['Slack', 'Dropbox', 'Google Workspace', 'Asana', 'Trello', 'PayPal'][i-1] }}</h3>
            <p>{{ ['团队沟通工具', '云存储服务', '办公套件', '项目管理工具', '看板管理工具', '支付处理'][i-1] }}</p>
            <div class="app-rating">
              <span class="stars">★★★★{{ i % 2 === 0 ? '★' : '☆' }}</span>
              <span class="rating-count">({{ 100 + i * 50 }})</span>
            </div>
          </div>
          <button class="install-btn">安装</button>
        </div>
      </div>

      <div class="section-header perks-header">
        <h2>团队特权</h2>
        <button class="view-all-btn">查看全部</button>
      </div>

      <div class="perks-grid">
        <div class="perk-card" v-for="i in 4" :key="i">
          <div class="perk-logo" :class="`perk-${i}`"></div>
          <div class="perk-info">
            <h3>{{ ['AWS 初创企业优惠', 'Figma 团队版折扣', 'WeWork 办公空间', 'Adobe Creative Cloud'][i-1] }}</h3>
            <p>{{ ['价值高达$100,000的AWS服务抵扣', '团队版首年50%折扣', '全球办公空间20%折扣', '团队订阅首年30%折扣'][i-1] }}</p>
            <div class="perk-value">价值: ¥{{ [10000, 5000, 8000, 6000][i-1] }}</div>
          </div>
          <button class="claim-btn">领取</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppsPerks'
}
</script>

<style scoped>
.apps-perks-page {
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

.search-box {
  display: flex;
  align-items: center;
  background-color: #f1f3f4;
  border-radius: 4px;
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

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.app-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.app-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 1rem;
}

.app-1 {
  background-color: #4A154B;
}

.app-2 {
  background-color: #0061FF;
}

.app-3 {
  background-color: #4285F4;
}

.app-4 {
  background-color: #FC636B;
}

.app-5 {
  background-color: #0079BF;
}

.app-6 {
  background-color: #003087;
}

.app-info {
  flex: 1;
}

.app-info h3 {
  margin: 0 0 0.3rem;
  font-size: 1rem;
}

.app-info p {
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
  color: #5f6368;
}

.app-rating {
  display: flex;
  align-items: center;
}

.stars {
  color: #FFC107;
  font-size: 0.9rem;
}

.rating-count {
  font-size: 0.8rem;
  color: #5f6368;
  margin-left: 0.5rem;
}

.install-btn {
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.perks-header {
  margin-top: 2rem;
}

.view-all-btn {
  background: none;
  border: none;
  color: #1a73e8;
  font-size: 0.9rem;
  cursor: pointer;
}

.perks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.perk-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.perk-logo {
  height: 100px;
  background-size: cover;
  background-position: center;
}

.perk-1 {
  background-color: #232F3E;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%23FF9900" d="M13.527,25.755c0,0.968,0.104,1.748,0.307,2.342c0.209,0.6,0.489,1.242,0.852,1.937 c0.13,0.208,0.185,0.416,0.185,0.617c0,0.273-0.164,0.545-0.494,0.817l-1.638,1.091c-0.234,0.156-0.465,0.234-0.686,0.234 c-0.266,0-0.53-0.13-0.795-0.382c-0.355-0.39-0.658-0.799-0.917-1.235c-0.26-0.438-0.519-0.922-0.779-1.458 c-1.946,2.292-4.392,3.436-7.339,3.436c-2.096,0-3.767-0.6-5.017-1.807c-1.248-1.201-1.872-2.812-1.872-4.834 c0-2.142,0.759-3.879,2.285-5.214c1.521-1.333,3.554-2.001,6.103-2.001c0.842,0,1.713,0.072,2.622,0.208 c0.909,0.138,1.852,0.343,2.825,0.617V17.9c0-1.861-0.389-3.168-1.159-3.922c-0.775-0.753-2.089-1.131-3.942-1.131 c-0.842,0-1.706,0.104-2.599,0.312c-0.888,0.208-1.755,0.482-2.599,0.817c-0.39,0.156-0.68,0.247-0.868,0.274 c-0.188,0.026-0.325,0.039-0.415,0.039c-0.364,0-0.549-0.273-0.549-0.817v-1.287c0-0.429,0.057-0.743,0.17-0.939 c0.117-0.195,0.325-0.39,0.636-0.584c0.795-0.416,1.744-0.764,2.853-1.04c1.105-0.273,2.279-0.412,3.516-0.412 c2.681,0,4.651,0.613,5.911,1.833c1.255,1.222,1.885,3.082,1.885,5.578V25.755L13.527,25.755z M7.045,28.476 c0.816,0,1.664-0.15,2.553-0.444c0.888-0.298,1.677-0.838,2.368-1.625c0.39-0.481,0.678-1.014,0.852-1.599 c0.17-0.584,0.26-1.287,0.26-2.103v-1.014c-0.727-0.182-1.495-0.325-2.301-0.429c-0.805-0.104-1.593-0.156-2.361-0.156 c-1.69,0-2.929,0.334-3.724,1.001c-0.795,0.669-1.19,1.612-1.19,2.834c0,1.144,0.293,2.001,0.887,2.576 C4.981,28.19,5.853,28.476,7.045,28.476L7.045,28.476z M26.834,30.062c-0.468,0-0.783-0.085-0.991-0.26 c-0.209-0.17-0.389-0.56-0.549-1.157l-6.139-20.193c-0.156-0.602-0.234-0.999-0.234-1.183c0-0.481,0.242-0.743,0.727-0.743h2.971 c0.572,0,0.968,0.091,1.177,0.274c0.209,0.182,0.376,0.572,0.519,1.17l4.392,17.304l4.08-17.304 c0.13-0.602,0.285-0.991,0.481-1.17c0.195-0.182,0.602-0.274,1.209-0.274h2.423c0.607,0,1.014,0.091,1.222,0.274 c0.209,0.182,0.376,0.572,0.494,1.17l4.132,17.517l4.522-17.517c0.143-0.602,0.312-0.991,0.519-1.17 c0.209-0.182,0.607-0.274,1.177-0.274h2.825c0.481,0,0.727,0.247,0.727,0.743c0,0.143-0.02,0.299-0.052,0.468 c-0.033,0.17-0.091,0.394-0.182,0.673L41.871,28.645c-0.156,0.602-0.337,0.991-0.549,1.157c-0.209,0.17-0.524,0.26-0.952,0.26 h-2.599c-0.607,0-1.014-0.091-1.222-0.274c-0.209-0.182-0.376-0.572-0.494-1.17l-4.054-16.888l-4.002,16.875 c-0.117,0.602-0.285,0.991-0.494,1.17c-0.209,0.182-0.627,0.274-1.235,0.274h-2.599V30.062z"/></svg>');
}

.perk-2 {
  background-color: #F24E1E;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%23FFFFFF" d="M26.5,24c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5S26.5,22.6,26.5,24z M24,34c-5.5,0-10-4.5-10-10 s4.5-10,10-10s10,4.5,10,10S29.5,34,24,34z M34,24c0-5.5-4.5-10-10-10v20C29.5,34,34,29.5,34,24z M14,24c0,5.5,4.5,10,10,10V14 C18.5,14,14,18.5,14,24z"/></svg>');
}

.perk-3 {
  background-color: #00D1C5;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%23FFFFFF" d="M41,7H7v34h34V7z M24,37c-7.2,0-13-5.8-13-13s5.8-13,13-13s13,5.8,13,13S31.2,37,24,37z M24,15 c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S29,15,24,15z"/></svg>');
}

.perk-4 {
  background-color: #FF0000;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%23FFFFFF" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4 C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1 c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z M20,24v8l8-4L20,24z"/></svg>');
}

.perk-info {
  padding: 1rem;
  flex: 1;
}

.perk-info h3 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
}

.perk-info p {
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
  color: #5f6368;
}

.perk-value {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4caf50;
}

.claim-btn {
  background: none;
  border: none;
  border-top: 1px solid #e0e0e0;
  padding: 0.8rem;
  color: #1a73e8;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .search-box {
    width: 100%;
  }
}
</style>