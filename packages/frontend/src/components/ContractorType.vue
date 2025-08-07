<template>
  <div class="contractor-type-page">
    <div class="modal-container">
      <div class="modal-header">
        <button class="back-btn" @click="goBack">←</button>
        <button class="close-btn" @click="closeModal">✕</button>
      </div>

      <div class="modal-content">
        <h1>您需要什么类型的承包商合同？</h1>
        <p class="subtitle">通过选择最相关的类型开始创建您的合同</p>

        <div class="contract-types">
          <div class="contract-type">
            <div class="contract-icon fixed-rate"></div>
            <h3>固定费率</h3>
            <p>每次付款都有固定费率的合同</p>
            <div class="radio-container">
              <input type="radio" name="contract-type" id="fixed-rate">
              <label for="fixed-rate" class="radio-label"></label>
            </div>
          </div>

          <div class="contract-type selected">
            <div class="contract-icon milestone"></div>
            <h3>里程碑</h3>
            <p>随着项目完成而支付的合同</p>
            <div class="radio-container">
              <input type="radio" name="contract-type" id="milestone" checked>
              <label for="milestone" class="radio-label"></label>
            </div>
          </div>

          <div class="contract-type">
            <div class="contract-icon hourly"></div>
            <h3>按小时计费</h3>
            <p>按工作小时数支付的合同</p>
            <div class="radio-container">
              <input type="radio" name="contract-type" id="hourly">
              <label for="hourly" class="radio-label"></label>
            </div>
          </div>
        </div>

        <button class="continue-btn" @click="continueToNext">继续</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContractorType',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    closeModal() {
      this.$router.push('/');
    },
    continueToNext() {
      // 这里可以根据选择的合同类型导航到不同的页面
      // 目前简单地导航到合同列表页面
      this.$router.push('/contracts');
    }
  }
}
</script>

<style scoped>
.contractor-type-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}

.modal-container {
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.back-btn, .close-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #5f6368;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.back-btn:hover, .close-btn:hover {
  background-color: #f1f3f4;
}

.modal-content {
  padding: 1rem 2rem 2rem;
  text-align: center;
}

h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #5f6368;
  margin-bottom: 2rem;
}

.contract-types {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .contract-types {
    grid-template-columns: repeat(3, 1fr);
  }
}

.contract-type {
  border: 1px solid #dadce0;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

.contract-type:hover {
  border-color: #1a73e8;
}

.contract-type.selected {
  border-color: #1a73e8;
  background-color: #e8f0fe;
}

.contract-icon {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: #f1f3f4;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.fixed-rate::after {
  content: "📄";
}

.milestone::after {
  content: "📊";
}

.hourly::after {
  content: "⏱️";
}

.contract-type h3 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.contract-type p {
  font-size: 0.9rem;
  color: #5f6368;
  text-align: center;
  margin-bottom: 1rem;
}

.radio-container {
  position: absolute;
  bottom: 1rem;
}

input[type="radio"] {
  display: none;
}

.radio-label {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #dadce0;
  position: relative;
  cursor: pointer;
}

input[type="radio"]:checked + .radio-label {
  border-color: #1a73e8;
}

input[type="radio"]:checked + .radio-label::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #1a73e8;
}

.continue-btn {
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 0.8rem 3rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.continue-btn:hover {
  background-color: #1565c0;
}
</style>