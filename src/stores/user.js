import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const isLogin = ref(false)

  /**
   * 设置用户信息
   * @param {Object} object 用户信息
   */
  function set(object) {
    user.value = object
    let expirationDate = new Date(new Date().setMonth(new Date().getMonth() + 1))
    let userJson = JSON.stringify(object)
    document.cookie = 'user=' + userJson + ';expires=' + expirationDate
    isLogin.value = true
  }
  /**
   * 获取本地用户
   * @returns boolean 是否存在
   */
  function localUser() {
    let cookieUser = getCookie('user')
    if (cookieUser) {
      user.value = JSON.parse(cookieUser)
      isLogin.value = true
    } else {
      user.value = {}
      isLogin.value = false
    }
    return isLogin.value
  }
  /**
   * 登录
   * @param {Object} data 登录数据
   * @param {Function} success 成功回调
   * @param {Function} error 失败回调
   */
  const login = (data, success, error) => {
    axios
      .post('http://phpapi.kuloutiantang.top/www/index/login', data)
      .then((res) => {
        if (res.data.code == 1) {
          set(data)
          success(res)
          return true
        } else {
          logout()
          error(res)
          return false
        }
      })
      .catch((err) => {
        logout()
        error(err)
        return false
      })
  }
  /**
   * 退出登录并清除本地用户
   * @returns boolean 是否成功
   */
  function logout() {
    user.value = {}
    document.cookie = 'user=;expires=' + new Date(0)
    isLogin.value = false
    return true
  }

  // 其他函数
  /**
   * 获取cookie
   * @param {String} name cookie名称
   * @returns cookie值
   */
  const getCookie = (name) => {
    var strcookie = document.cookie //获取cookie字符串
    var arrcookie = strcookie.split('; ') //分割
    //遍历匹配
    for (var i = 0; i < arrcookie.length; i++) {
      var arr = arrcookie[i].split('=')
      if (arr[0] == name) {
        return arr[1]
      }
    }
    return ''
  }

  return { user, isLogin, set, localUser, login, logout }
})