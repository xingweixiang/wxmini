// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://jiehai.gs/program/index_banner1.png',
      'http://jiehai.gs/program/index_banner2.png'
    ],
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiperCurrent: 0,
    brandCurrent:0,
    imgCaseUrls :[
      'http://jiehai.gs/program/index_cases01.png',
      'http://jiehai.gs/program/index_cases02.png'
    ],
    imgNewsUrls: [
      'http://jiehai.gs/program/index_news01.png',
      'http://jiehai.gs/program/index_news02.png',
      'http://jiehai.gs/program/index_news03.png'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  swiperChange:function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })  
  },
  brandChange: function (e) {
    this.setData({
      brandCurrent: e.detail.current
    })
  },
  morecase:function(){
    wx.switchTab({
      url: '/pages/cases/cases'
    })
  },
  morenews:function(){
    wx.switchTab({
      url: '/pages/news/news'
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '027-84808278'
    })
  }
})