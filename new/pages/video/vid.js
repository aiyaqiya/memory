// pages/video/vid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoSrc:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.updateSHareMenu({//设置分享
      success:function(){
        console.log('成功：',arguments)
      },
      fail:function(){
        console.log("失败：",arguments);
      }
    });
    var that=this;
    wx.request({
        url:"http://www.twobyoung.com/suport/index.php",
        success:function(res){
          console.log(res);
          that.setData({
            videoSrc:res.data
          });
        }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (){
    this.data.vid1=wx.createVideoContext("video");
    console.log(this.data.vid1)
    //this.data.vid1.play();
  },
  playVid:function(){    
    this.data.vid1.play();
    console.log("play")
  },
  pauseVid:function(){    
    this.data.vid1.pause();
    console.log("pause")
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

  }
})