// components/scroll-view/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeIndex: {
      type: Number,
      value: 0
    },
    tabList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    changeTabs(e) {
      const targetIndex= e.currentTarget.dataset.index
      this.setData({
        activeIndex: targetIndex
      })
    },
    
  }
})
