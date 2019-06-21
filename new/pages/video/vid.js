// pages/video/vid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoSrc:"",
    setWidthH: "",//初始化设置宽高
    errorMes:"错误信息： "
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.sys = wx.getSystemInfoSync();
    function makeFit(obj) {//返回宽高差的一半，
      var tx = (obj.y - obj.x) / 2;
      var ty = (obj.y - obj.x) / 2;
      return { x: tx, y: ty }
    }
    var tr = makeFit({ x: this.data.sys.screenWidth, y: this.data.sys.screenHeight })
    this.setData({
      setWidthH: "width:" + this.data.sys.screenHeight + 'px;height:' + this.data.sys.screenWidth + "px;transform:rotate(90deg) translate(" + tr.y + "px," + tr.x + "px);-webkit-transform:rotate(90deg) translate(" + tr.y + "px," + tr.x + "px);"
    });
    //if(this.data.sys.system)// 判断系统类型，选择视频样式
    wx.updateShareMenu({//设置分享
      success:function(){
       // console.log('成功：',arguments)
      },
      fail:function(){
       // console.log("失败：",arguments);
      }
    });   
     },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (){    
    this.data.vid1=wx.createVideoContext("video");    
    this.updataSrc();
  },
  updataSrc:function(){
    
    var that = this;
    wx.request({
      url: "http://47.92.115.105/internetResources/queryByType",
      method:"post",
      header: {
        'content-Type':'application/x-www-form-urlencoded' // 默认值
      },
      data:{"type":1},
      success: function (res) {
        console.log(res);
        that.setData({
          videoSrc: res.data.data[0].url,          
        });
        that.pauseVid();
        that.checkNetWork();
      },
      fail:function(res){
        
      }    
    });
  },
  checkNetWork:function(){
    var that = this;
    wx.getNetworkType({
      success: function(res){
        var ty = res.networkType.toLowerCase();
        if (ty != "wifi") {//非wifi
          wx.showModal({//confirm消息点击框
            title: "温馨提示",
            content: "您目前正在4G模式下，观看视频会产生流量，您确定观看么？",
            confirmText: "立即观看",
            cancelText: "暂时不要",
            success: function (res) {//点击观看
              if (res.confirm) {
                that.playVid();
              } else {//返回首页
                wx.redirectTo({url: "../index/index"});
              }
            },
            fail: function(){//调用失败
            }
          });
        } else {
          that.playVid();
        }
      },fail:function(res){
      }
    });
  },
  loadNow:function(){
    //wx.showLoading({title:"loading"});
  },
  showError:function(){    
      wx.showToast({"title":"视频出错了,请关闭页面重试~",mask:true});
  },
  playVid:function(){
    this.data.vid1.play();    
   // this.data.vid1.requestFullScreen();
  },
  pauseVid:function(){
    this.data.vid1.pause();
  },
  closeVid:function(){
      var that=this;
      this.data.vid1.pause();
      wx.showModal({
        title:"关闭视频？",
        content:"关闭视频将无法完成任务，您确定关闭视频吗？",
        cancelText:"关闭",
        confirmText:"继续看",
        success:function(res){
          if(res.confirm){
            that.data.vid1.play();
          }else{
            wx.redirectTo({ url: "../index/index" })
          }          
        },
        fail:function(){          
        }
      });
  },
  playend: function () {
    wx.showToast({//layer.msg类的提示框，自动隐藏
      title: "任务完成",
      icon: "success",
      duration: 1500,
      success: function () {
        setTimeout(() => { wx.redirectTo({url:'../index/index?gg=1'}); }, 1500);
      }
    });
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
  onShareAppMessage: function (e) {    
   
  }
})