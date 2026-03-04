import { useRouter as vueUseRouter } from 'vue-router'

/**
 * 封装的路由hook，提供路由相关的方法
 * @returns {Object} 路由实例和常用方法
 */
export function GlHookuseRouter() {
  const router = vueUseRouter()

  /**
   * 跳转到指定路径
   * @param {string} path - 目标路径
   * @param {Object} query - 查询参数
   */
  const push = (name, query = {}) => {
    router.push({ name, query })
  }

  /**
   * 替换当前路由
   * @param {string} path - 目标路径
   * @param {Object} query - 查询参数
   */
  const replace = (path, query = {}) => {
    router.replace({ path, query })
  }

  /**
   * 后退一步
   */
  const back = () => {
    router.back()
  }

  /**
   * 前进一步
   */
  const forward = () => {
    router.forward()
  }

  /**
   * 跳转到指定历史记录
   * @param {number} n - 跳转的步数
   */
  const go = (n) => {
    router.go(n)
  }

  return {
    router,
    push,
    replace,
    back,
    forward,
    go
  }
}