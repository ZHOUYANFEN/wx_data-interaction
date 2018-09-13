//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    messageList:null

  },
  onLoad: function () {
    this.getMessageList();
  },
  toDetail:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var messageList = this.data.messageList;
    var title = messageList[index].title;
    wx.navigateTo({
      url:'/pages/detail/detail?title='+title,
    })
  },
  
  getMessageList:function(){
    var self = this;
    wx.request({
      url: 'http://127.0.0.1:8080/detail.json',
      method:'GET',
      success:function(res){
        console.log(res);
        self.setData({
          messageList:res.data
        })
      }
    })
  }
  

})
