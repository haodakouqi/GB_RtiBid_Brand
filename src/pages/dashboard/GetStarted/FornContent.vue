<template>
  <div class="contact-us">
    <!-- 成功消息提示 -->
    <div 
      v-if="showSuccess" 
      class="success-message"
      :class="{ 'show': showSuccess }"
    >
      Submission successful! We will contact you as soon as possible.
    </div>

    <div class="container">
      <h1 class="title">Contact US</h1>
      <p class="subtitle">See What Our Experts Can Do For You.</p>

      <form @submit.prevent="handleSubmit" class="form">
        <!-- 第一行：姓名 + 邮箱 -->
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Full Name <span class="required">*</span></label>
            <input
              v-model="form.fullName"
              type="text"
              class="form-input"
              placeholder="Enter Full Name"
              @blur="validateField('fullName')"
            />
            <p v-if="errors.fullName" class="error-text">{{ errors.fullName }}</p>
          </div>

          <div class="form-group">
            <label class="form-label">Email <span class="required">*</span></label>
            <input
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="Enter Email"
              @blur="validateField('email')"
            />
            <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
          </div>
        </div>

        <!-- 第二行：联系方式 + 国家 -->
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Phone/Wechat ID/Skype <span class="required">*</span></label>
            <input
              v-model="form.contact"
              type="text"
              class="form-input"
              placeholder="Enter Phone/Wechat ID/Skype"
              @blur="validateField('contact')"
            />
            <p v-if="errors.contact" class="error-text">{{ errors.contact }}</p>
          </div>

          <div class="form-group">
            <label class="form-label">Country <span class="required">*</span></label>
            <select
              v-model="form.country"
              class="form-select"
              @change="validateField('country')"
            >
              <option value="">Select Country</option>
              <option v-for="item in countryOptions" :key="item.value" :value="item.value">
                {{ item.label }}
              </option>
            </select>
            <p v-if="errors.country" class="error-text">{{ errors.country }}</p>
          </div>
        </div>

        <!-- 第三行：公司 + 公司类型 -->
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Company <span class="required">*</span></label>
            <input
              v-model="form.company"
              type="text"
              class="form-input"
              placeholder="Enter Company"
              @blur="validateField('company')"
            />
            <p v-if="errors.company" class="error-text">{{ errors.company }}</p>
          </div>

          <div class="form-group">
            <label class="form-label">Company Type</label>
            <input
              v-model="form.companyType"
              type="text"
              class="form-input"
              placeholder="Enter Company Type"
            />
          </div>
        </div>

        <!-- 兴趣领域 -->
        <div class="form-group full-width">
          <label class="form-label">I am interested in...(Multiple choice)</label>
          <input
            v-model="form.interests"
            type="text"
            class="form-input"
            placeholder="Enter"
          />
        </div>

        <!-- 来源渠道 -->
        <div class="form-group full-width">
          <label class="form-label">How did you hear about us?</label>
          <input
            v-model="form.source"
            type="text"
            class="form-input"
            placeholder="Enter"
          />
        </div>

        <!-- 提交按钮 -->
        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 表单数据
const form = reactive({
  fullName: '',
  email: '',
  contact: '',
  country: '',
  company: '',
  companyType: '',
  interests: '',
  source: ''
})

// 错误信息
const errors = reactive({
  fullName: '',
  email: '',
  contact: '',
  country: '',
  company: ''
})

// 成功消息显示状态
const showSuccess = ref(false)

// 国家枚举列表

const countryOptions = [
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'PL', label: 'Poland' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'BR', label: 'Brazil' },
  { value: 'JP', label: 'Japan' },
  { value: 'CN', label: 'China' },
  { value: 'IN', label: 'India' },
  { value: 'AU', label: 'Australia' },
  { value: 'CA', label: 'Canada' },
  { value: 'MX', label: 'Mexico' },
  { value: 'SG', label: 'Singapore' },
  { value: 'KR', label: 'South Korea' },
  { value: 'TW', label: 'Taiwan' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'TR', label: 'Turkey' },
  { value: 'SE', label: 'Sweden' },
  { value: 'NO', label: 'Norway' },
  { value: 'DK', label: 'Denmark' },
  { value: 'FI', label: 'Finland' },
  { value: 'CH', label: 'Switzerland' },
  { value: 'AT', label: 'Austria' },
  { value: 'BE', label: 'Belgium' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'GR', label: 'Greece' },
  { value: 'PT', label: 'Portugal' },
  { value: 'IE', label: 'Ireland' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'AR', label: 'Argentina' },
  { value: 'CL', label: 'Chile' },
  { value: 'CO', label: 'Colombia' },
  { value: 'PE', label: 'Peru' },
  { value: 'PH', label: 'Philippines' },
  { value: 'TH', label: 'Thailand' },
  { value: 'VN', label: 'Vietnam' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'HK', label: 'Hong Kong' },
  { value: 'IL', label: 'Israel' },
  { value: 'SA', label: 'Saudi Arabia' },
  { value: 'EG', label: 'Egypt' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'KE', label: 'Kenya' },
  { value: 'Other', label: 'Other' }
]

// 字段校验方法
const validateField = (field) => {
  switch (field) {
    case 'fullName':
      errors.fullName = form.fullName ? '' : 'Full name is required'
      break
    case 'email':
      if (!form.email) {
        errors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email address'
      } else {
        errors.email = ''
      }
      break
    case 'contact':
      errors.contact = form.contact ? '' : 'Contact information is required'
      break
    case 'country':
      errors.country = form.country ? '' : 'Country is required'
      break
    case 'company':
      errors.company = form.company ? '' : 'Company name is required'
      break
  }
}

// 整体表单校验
const validateForm = () => {
  // 校验所有必填字段
  validateField('fullName')
  validateField('email')
  validateField('contact')
  validateField('country')
  validateField('company')

  // 检查是否存在错误
  return Object.values(errors).every(error => error === '')
}

// 提交处理
const handleSubmit = () => {
  if (validateForm()) {
    // 模拟提交成功
    showSuccess.value = true
    
    // 3秒后隐藏成功消息
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)

    // 重置表单
    // Object.keys(form).forEach(key => {
    //   form[key] = ''
    // })
  }
}
</script>

<style lang="less" scoped>
.contact-us {
  padding: 64px 16px 90px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 80px 24px;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .title {
    font-size: 48px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 16px 0;
    line-height: 1.2;

    @media (max-width: 767px) {
      font-size: 36px;
    }
  }

  .subtitle {
    font-size: 20px;
    color: #4B5563;
    margin: 0 0 48px 0;

    @media (max-width: 767px) {
      font-size: 18px;
      margin-bottom: 32px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .form-row {
    display: flex;
    gap: 24px;

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 16px;
    }
  }

  .form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &.full-width {
      flex: 1 1 100%;
    }
  }

  .form-label {
    font-size: 14px;
    font-weight: 500;
    color: #111827;
    line-height: 1.4;
  }

  .required {
    color: #EF4444;
  }

  .form-input,
  .form-select {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    font-size: 16px;
    color: #111827;
    background-color: #fff;
    box-sizing: border-box;
    transition: border-color 0.2s ease;

    &::placeholder {
      color: #9CA3AF;
    }

    &:focus {
      outline: none;
      border-color: #3B82F6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }

  .form-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
    background-position: right 16px center;
    background-repeat: no-repeat;
    background-size: 20px;
  }

  .error-text {
    font-size: 12px;
    color: #EF4444;
    margin: 0;
    line-height: 1.3;
  }

  .submit-btn {
    align-self: flex-start;
    padding: 12px 32px;
    background-color: #1D4ED8;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #1E40AF;
    }

    &:active {
      background-color: #1E3A8A;
    }

    @media (max-width: 767px) {
      align-self: stretch;
    }
  }

  // 成功消息样式（Element Plus Message风格）
  .success-message {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    padding: 12px 20px;
    background-color: #f0f9eb;
    color: #67c23a;
    font-size: 14px;
    font-weight: 400;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 2001;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 300px;
    max-width: 700px;
    // border-left: 4px solid #67c23a;

    // &::before {
    //   content: '✓';
    //   font-size: 16px;
    //   font-weight: bold;
    // }

    &.show {
      animation: slideDown 0.5s ease-out forwards;
    }
  }

  // 从上面下来的动画
  @keyframes slideDown {
    0% {
      transform: translateX(-50%) translateY(-100px);
      opacity: 0;
    }
    80% {
      transform: translateX(-50%) translateY(5px);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }
}
</style>