//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello Witch',
    text:''
  },

  establish: function () {
    wx.navigateTo({
      url: '/pages/establish/establish',
    })
  },
  //事件处理函数

  onLoad: function () {
  },

})
