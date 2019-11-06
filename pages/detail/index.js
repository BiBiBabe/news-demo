// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '1', value: '男', checked: true},
      { name: '0', value: '女' },
    ],
    seleted : '',
    data: '',
    region: [],
    customItem: '全部',
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    let value = e.detail.value;
    this.setData({
      seleted : "选中的value：" + value
    })
  },

  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  navigateTo(e){
    wx.navigateTo({
      url: '/pages/intro/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
})