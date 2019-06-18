// pages/wish/wish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setWidthH:"",//初始化设置宽高
    inputkBot:0,//输入框位置
    getInpFocus:"",
    isShowInp:"none",
    screenHeight:0,
    screenwidth:0,
    yourWish:"",
    wishes:[
      "希望今年赚够一个亿",
      "希望今年赚够二个亿",
      "希望今年赚够三个亿",
      "希望今年赚够四个亿",
      "希望今年赚够五个亿",
      "希望今年赚够六个亿",
      "希望今年赚够七个亿",
      "希望今年赚够八个亿",
      "希望今年赚够九个亿",
      "希望今年赚够十个亿",
      "希望今年赚够十一个亿",
      "希望今年赚够十二个亿",
      "希望今年赚够十三个亿",
      "希望今年赚够十四个亿",
      "希望今年赚够十五个亿",
      "希望今年赚够十六个亿",
      "希望今年赚够十七个亿",
      "希望今年赚够十八个亿",
      "希望今年赚够十九个亿",
      "希望今年赚够二十个亿"
    ],
    anis1:[],//动画的位置，清空就回0
    anis2:[],
    anis3:[],
    anis4:[],
    style1:[],
    style2:[],
    style3:[],
    style4:[],
    nowi:0,//纵向排列计数
    danmi:3,//弹幕累计计数
    alli:8,//纵向8列
    singTime:15000,//单条弹幕走动时间
    startTime:0,
    wishAble:true,//是否能许愿
    useable:"",//不能许愿时候添加灰色样式
  },
  onLoad: function(options){
      this.data.sys = wx.getSystemInfoSync();
      function makeFit(obj) {//返回宽高差的一半，
        var tx = (obj.y - obj.x) / 2;
        var ty = (obj.y - obj.x) / 2;
        return { x: tx, y: ty }
      }
      var tr = makeFit({ x: this.data.sys.screenWidth, y: this.data.sys.screenHeight })
      this.setData({
        setWidthH: "width:" + this.data.sys.screenHeight + 'px;height:' + this.data.sys.screenWidth + "px;transform:rotate(90deg) translate(" + tr.y + "px," + tr.x + "px);-webkit-transform:rotate(90deg) translate(" + tr.y + "px," + tr.x + "px);",
        screenHeight:this.data.sys.screenHeight,
        screenwidth: this.data.sys.screenWidth
      });
    //开始逻辑
    //获得开始的时间   
    this.makei();
  },
  onReady: function () { },
  onShow: function (){},
  makei:function(){  
    var ti = this.data.danmi;
    ti++;if(ti>4){ti=1;}
    this.setData({
      danmi: ti
    });
    this.interPos();    
  },
  interPos:function(){    
    this.makePos("anis" + this.data.danmi, "style" + this.data.danmi);
    setTimeout(this.makei,this.data.singTime/3.01);
  },
  makePos:function(arr,sty){    
    var tarr=[],tarrs=[];
    var ti;
    for(let i=this.data.nowi,j=0;j<this.data.alli;i++,j++){
      if(i<this.data.wishes.length){
        ti=i;
      }else{
        ti=i-this.data.wishes.length;
      }
      tarr[j] = {};
      tarr[j].value = this.data.wishes[ti];
      var tl = Math.round(Math.random() * 1300);
      tarr[j].style = 'padding-left:' + tl + 'rpx;-webkit-transition:transform '+this.data.singTime/1000+'s linear;';
      tarrs[j]='-webkit-transform:translateX(-5100rpx);';
    }
    var tmpni = this.data.danmi;
    var tni =tmpni==1 ? 3:(tmpni==2 ? 4:(tmpni==3 ? 1:2));
    this.setData({
      [arr]:tarr,
      nowi:ti+1
    });
    var _this=this;
    setTimeout(function(){
      _this.setData({
        ["anis"+tni]:[],
        ["style"+tni]:[],
        [sty]:tarrs
      },10)
    });
  },
  makeDanMu: function () {
  },
  getYourWish:function(e){    
      this.setData({
        yourWish: e.detail.value
      });
  },
  sendWish:function(){
    if(this.data.yourWish==''){
      wx.showToast({title:"请您输入愿望",icon:"none",mask:true});
      return;
    }
    var tmparr=this.data.wishes;
    tmparr.push(this.data.yourWish);
    this.setData({
      wishes:tmparr,
      yourWish:"",
      wishAble:false
    });
    wx.showToast({
      title:"许愿成功~"
    });
    this.closeinp();
  },
  showInpk:function(){
    if (!this.data.wishAble){return;}
    this.setData({
      isShowInp:"block",
      getInpFocus:"true"
    });
  },
  closeinp:function(){
    this.setData({
      isShowInp: "none",
      getInpFocus: ""
    });
  },
  backhome:function(){
    wx.navigateTo({url:"../index/index"});
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