<template>
    <div class="hello-api">
        <h2>后端API测试</h2>
        
        <div class="api-buttons">
            <button @click="fetchWelcome" :disabled="loading" class="api-button">
                获取欢迎信息
            </button>
            
            <button @click="fetchHello" :disabled="loading" class="api-button">
                获取Hello信息
            </button>
            
            <button @click="fetchUserInfo" :disabled="loading" class="api-button">
                获取用户信息
            </button>
            
            <button @click="fetchProducts" :disabled="loading" class="api-button">
                获取产品列表
            </button>
        </div>
        
        <div v-if="loading" class="loading">
            加载中...
        </div>
        
        <div v-if="error" class="error">
            {{ error }}
        </div>
        
        <div v-if="data" class="result">
            <h3>API响应: <span class="endpoint">{{ currentEndpoint }}</span></h3>
            <pre>{{ JSON.stringify(data, null, 2) }}</pre>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { API } from '../api';

export default {
    name: 'HelloApi',
    setup() {
        const data = ref(null);
        const loading = ref(false);
        const error = ref(null);
        const currentEndpoint = ref('');

        // 通用请求处理函数
        const fetchApiData = async (apiCall, endpoint) => {
            loading.value = true;
            error.value = null;
            currentEndpoint.value = endpoint;
            
            try {
                data.value = await apiCall();
            } catch (err) {
                error.value = `获取数据失败: ${err.message}`;
                console.error(err);
            } finally {
                loading.value = false;
            }
        };

        // 获取欢迎信息
        const fetchWelcome = () => fetchApiData(API.getWelcome, '/');
        
        // 获取Hello信息
        const fetchHello = () => fetchApiData(API.getHello, '/hello');
        
        // 获取用户信息
        const fetchUserInfo = () => fetchApiData(API.getUserInfo, '/api/user');
        
        // 获取产品列表
        const fetchProducts = () => fetchApiData(API.getProducts, '/api/products');

        return {
            data,
            loading,
            error,
            currentEndpoint,
            fetchWelcome,
            fetchHello,
            fetchUserInfo,
            fetchProducts
        };
    }
};
</script>

<style scoped>
.hello-api {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    max-width: 600px;
}

.api-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.api-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.api-button:hover {
    background-color: #45a049;
}

.api-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

.loading {
    margin: 15px 0;
    font-style: italic;
    color: #666;
}

.error {
    color: #ff0000;
    margin: 10px 0;
    padding: 10px;
    background-color: #ffeeee;
    border-radius: 4px;
}

.result {
    margin-top: 20px;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 4px;
}

.endpoint {
    font-family: monospace;
    background-color: #e0e0e0;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 14px;
}

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 4px;
    border-left: 3px solid #4CAF50;
}
</style>