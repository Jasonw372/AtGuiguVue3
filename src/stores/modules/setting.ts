import { defineStore } from 'pinia'

const useLayOutSettingStore = defineStore('SettingStore', {
  // 数据存储地址
  state: () => {
    return {
      fold: false,
    }
  },
  persist: true,
})

export default useLayOutSettingStore
