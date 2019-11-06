// pages/index/index.js
const order = ['demo1', 'demo2', 'demo3']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newslist: [
      { id: '1', title: '习近平同土耳其总统埃尔多安会谈', subtitle: '人民日报', time: '2017年7月3日' },
      { id: '2', title: '习近平: 不忘初心牢记使命勇于担当甘于奉献 在新时代的长征路上做出新的更大贡献', subtitle: '人民日报', time: '2017年7月3日' },
      { id: '3', title: '习近平在“不忘初心，牢记使命”主题教育工作会议上的讲话', subtitle: '人民日报', time: '2017年7月3日' },
      { id: '4', title: '国家主席习近平签署发布特赦令：在中华人民共和国成立70周年之际对九类服刑罪犯实行特赦', subtitle: '人民日报', time: '2017年7月3日' },
    ],
    piclist: [
      { id: '1', img: '../../images/pic/1.png', img1: '../../images/pic/2.png', img2: '../../images/pic/3.png', title: '习近平同土耳其总统埃尔多安举行会谈', subtitle: '央视网', time: '2017-10-18' },
      { id: '2', img: '../../images/pic/4.png', img1: '../../images/pic/5.png', img2: '../../images/pic/6.png', title: '高清图集·习近平六月精彩镜头全记录', subtitle: '央视网', time: '2017-10-18' },
      { id: '3', img: '../../images/pic/7.png', img1: '../../images/pic/8.png', img2: '../../images/pic/9.png', title: '抢先看！习近平主席出席G20大阪峰会日程', subtitle: '央视网', time: '2017-10-18' },
      { id: '4', img: '../../images/pic/10.png', img1: '../../images/pic/11.png', img2: '../../images/pic/12.png', title: '高清图集·习近平的“十九大时间”', subtitle: '央视网', time: '2017-10-18' },
    ],
    tabList: [ '新闻通稿', '照片', '视频', '讲话全文', '版面', '政策', '法律法规', '测试', '测试', ],
    activeIndex: 0,
  },

  goToDetail(e){
    const id = e.currentTarget.dataset.id
    console.log('id:', id)
    wx.navigateTo({
      url: `/pages/detail/index?foodId=${id}`
    })
  },

  scroll(e) {
    console.log(e)
  },

  changeTabs(e) {
    const targetIndex= e.currentTarget.dataset.index
    this.setData({
      activeIndex: targetIndex
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})