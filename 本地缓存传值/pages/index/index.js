//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    messageList:null
  },
  onLoad: function () {
    this.getMessageList()
  },
  toDetail:function(e){
    console.log(e)
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var messageList = this.data.messageList;
    var title = messageList[index].title;
    wx.setStorageSync('title', title);
    wx.navigateTo({
      url: '/pages/detail/detail',
    })

  },

  getMessageList:function(){
    var self = this;
    wx.request({
      url: app.globalData.host,
      method:'GET',
      success:function(res){
        console.log(res)
        self.setData({
          messageList:res.data
        })
      }
    })
  },

})
