// pages/mess/mess.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setWidthH:'',    
    nowQuest:"",
    answer1:"",
    answer2: "",
    answer3: "",
    answer4: "",
    nowQuesi:0,
    wordNumber:"一",
    questions:[],
    quesTitle: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    utoux:"http://www.twobyoung.com/ether/img/ques/toux.png",
    uname:"当前用户",
    isGuoGK:"none",//过关框显示
    isWGuoGK: "none",//未过关框显示
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
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
    //引入wxParse
    var WxParse = require('../wxParse/wxParse.js');
    //模拟数据    
    var moniData=[
      { title:"请问李宁几岁了？请问李宁几岁了？",answers:["阿斯蒂芬阿萨",18,20,22],answer:0},
      { title: "请问杰克琼斯几岁了？请问杰克琼斯几岁了？请问杰克琼斯几岁了？", answers: [15, 18, 20, 22], answer:2 },
      { title: "请问张白芷几岁了？", answers: [24, 28, 30, 42], answer: 3 },
    ];
    this.data.questions=moniData;
    this.makeQues();
  //设置头像   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {    
    //WxParse.wxParse('content', 'html', content, that, 0)
    //wx.startPullDownRefresh();//直接执行下拉刷新
  },
  makeQues:function(obj){
    if(this.data.nowQuesi>=this.data.questions.length){
      setTimeout(() => {
        this.setData({
          isGuoGK: "block"
        });
      }, 500);
      return;
    }
    var obj = this.data.questions[this.data.nowQuesi];    
    this.setData({
      nowQuest:obj.title,
      answer1:obj.answers[0]+'',
      answer2:obj.answers[1]+'',
      answer3:obj.answers[2]+'',
      answer4:obj.answers[3]+'',
      wordNumber:this.data.quesTitle[this.data.nowQuesi]
    });    
    this.data.nowQuesi += 1;
  },
  checkQues:function(e){    
    var ind=e.target.dataset.set;
    if(ind==this.data.questions[this.data.nowQuesi-1].answer){
      this.makeQues();
    }else{
      setTimeout(()=>{
        this.setData({
          isWGuoGK:"block"
        });
      },500);      
    }
  },
  reChanlege:function(){
      this.data.nowQuesi = 0;
      this.setData({
        isWGuoGK: "none",      
      });
      this.makeQues();
  },
  backhomep:function(){
    //this.reChanlege();
    wx.redirectTo({url:"../index/index"});
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
  //  wx.showToast({title:"触底啦~"});
    //console.log("触底啦")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})