// pages/mess/mess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //引入wxParse
    var WxParse = require('../wxParse/wxParse.js');
    var content ="<div class='content'><h6 style='border-bottom:1px solid #ddd;height:34px;line-height:34px;text-align:center;font-size:18px;margin-top:60px;'>123456</h6>\
    <p style='display:block;text-aling:justify;font-size:14px;color:#666;text-indent:30px;'>\
    我是一颗小小的石头，深深地埋在泥土之中，\
    我愿铺起，一条五彩的路，\
    让人们去迎接黎明，迎接欢乐。\
    <img src='https://upload-images.jianshu.io/upload_images/2349442-e17d84ffd564b6d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp'/>\
    </p></div>";
    var that=this;
    WxParse.wxParse('content', 'html', content, that, 0)
    var content1 ="<div class='content'><img src='https://upload-images.jianshu.io/upload_images/2349442-e17d84ffd564b6d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp'/></div>";
    setTimeout(()=>{WxParse.wxParse('content','html',content1,that,0);},1500);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (){

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