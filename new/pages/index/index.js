//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    allimg:[
      "http://www.twobyoung.com/ether/img/index/back.jpg",
      "http://www.twobyoung.com/ether/img/index/dz1.png",
      "http://www.twobyoung.com/ether/img/index/dz2.png",
      "http://www.twobyoung.com/ether/img/index/dz3.png",
      "http://www.twobyoung.com/ether/img/index/dz4.png",
      "http://www.twobyoung.com/ether/img/index/dz5.png",
      "http://www.twobyoung.com/ether/img/index/dz6.png",
      "http://www.twobyoung.com/ether/img/index/dz7.png",
      "http://www.twobyoung.com/ether/img/index/dz8.png",
      "http://www.twobyoung.com/ether/img/index/but.png",
      "http://www.twobyoung.com/ether/img/index/title.png",
      "http://www.twobyoung.com/ether/img/shaizi/1.png",
      "http://www.twobyoung.com/ether/img/shaizi/2.png",
      "http://www.twobyoung.com/ether/img/shaizi/3.png",
      "http://www.twobyoung.com/ether/img/shaizi/4.png",
      "http://www.twobyoung.com/ether/img/shaizi/5.png",
      "http://www.twobyoung.com/ether/img/shaizi/6.png",
      "http://www.twobyoung.com/ether/img/shaizi/7.png",
      "http://www.twobyoung.com/ether/img/shaizi/8.png",
      "http://www.twobyoung.com/ether/img/shaizi/9.png",
      "http://www.twobyoung.com/ether/img/shaizi/10.png",
      "http://www.twobyoung.com/ether/img/shaizi/11.png",
      "http://www.twobyoung.com/ether/img/shaizi/12.png",
      "http://www.twobyoung.com/ether/img/shaizi/13.png",
      "http://www.twobyoung.com/ether/img/shaizi/14.png",
      "http://www.twobyoung.com/ether/img/shaizi/15.png",
      "http://www.twobyoung.com/ether/img/shaizi/16.png",
      "http://www.twobyoung.com/ether/img/shaizi/17.png",
      "http://www.twobyoung.com/ether/img/shaizi/zs.png",
      "http://www.twobyoung.com/ether/img/shaizi/ad.png",
      "http://www.twobyoung.com/ether/img/index/logok.png",      
      "http://www.twobyoung.com/ether/img/index/logokac.png",
      "http://www.twobyoung.com/ether/img/logo/1.jpg",
      "http://www.twobyoung.com/ether/img/logo/2.jpg",
      "http://www.twobyoung.com/ether/img/logo/3.jpg",
      "http://www.twobyoung.com/ether/img/logo/4.jpg",
      "http://www.twobyoung.com/ether/img/logo/5.jpg",
      "http://www.twobyoung.com/ether/img/logo/6.jpg",
      "http://www.twobyoung.com/ether/img/logo/7.jpg",
      "http://www.twobyoung.com/ether/img/logo/8.jpg",
      "http://www.twobyoung.com/ether/img/logo/9.jpg",
      "http://www.twobyoung.com/ether/img/logo/10.jpg",
      "http://www.twobyoung.com/ether/img/logo/11.jpg",
      "http://www.twobyoung.com/ether/img/logo/12.jpg",      
      "http://www.twobyoung.com/ether/img/index/enter.png"
    ],
    allimgi:0,
    allimgload:"0",
    loadOver:"none",
    zhezhao:'block',//加载框的显示与否，以上都是加载框的数据
    atime:3000,
    numi:1,
    aimg:17,
    imgt:20,
    isTou:true,
    showShaizi:"none",//以上是色子的逻辑数据
    setWidthH:"",//初始化设置宽高
    touchjh:"",//进入按钮交互
    musicCtrl:"musicac",//音乐控制
    isMusicPlay:true,//音乐当前是否在播放
    tishiShow:"none",//显示抽中提示框显示与否
    tishiRenwu:"阅读任务",//要显示的任务内容
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    this.data.sys = wx.getSystemInfoSync();    
    function makeFit(obj){//返回宽高差的一半，
        var tx=(obj.y-obj.x)/2;
      var ty = (obj.y - obj.x) / 2;
      return {x:tx,y:ty}
    }
    var tr=makeFit({x:this.data.sys.screenWidth,y:this.data.sys.screenHeight})
    this.setData({
      setWidthH: "width:" + this.data.sys.screenHeight + 'px;height:' + this.data.sys.screenWidth + "px;transform:rotate(90deg) translate(" + tr.y + "px," + tr.x + "px);-webkit-transform:rotate(90deg) translate(" + tr.y + "px," + tr.x +"px);"
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        //全局获取信息的回调函数
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      })
    }
  },
  onReady:function(){
    this.data.music=wx.createAudioContext("music");
    this.data.music.play();
  },
  ctrlMusic:function(){
    if (this.data.isMusicPlay){
      this.data.music.pause();
      this.setData({ musicCtrl: "", isMusicPlay:false });
    }else{
      this.data.music.play();
      this.setData({ musicCtrl: "musicac", isMusicPlay:true });
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  loadImgs:function(){//加载图片函数
      this.data.allimgi++;
      this.setData({
        allimgload:Math.round(this.data.allimgi/this.data.allimg.length*100)
      });
      if(this.data.allimgi==this.data.allimg.length){
        this.setData({
          zhezhao:"none",
          loadOver:"block"
        });
        //图片加载完成，开始逻辑
        //setTimeout(this.changeBack,500);
      }
  },
  touchStartf:function(){
    this.setData({
      touchjh:"transform:scale(0.9,0.9);-webkit-transform:scale(0.9,0.9);"
    });
  },
  touchEndf:function(){
    this.setData({
      touchjh: ""
    });
    this.startChange();
  },
  startChange:function(){
    this.data.isTou = true;
    this.setData({
      isTou:true,
      showShaizi:"block"
    });
    this.changeBack();
  },
  changeBack:function(){    
    this.data.atime-=this.data.imgt;
    var that=this;
    if(this.data.atime<=0){
      this.data.atime=2000;
      this.data.isTou=false;
  //【【后台获取目前要做的任务，展示给客户，需要提前请求；】】
      this.setData({numi:'zs'});
      setTimeout(()=>{
        that.setData({
          tishiShow:"block",
          tishiRenwu:"shdifd"//更改显示的任务内容
        });
      },500);      
      setTimeout(()=>{
        that.setData({
          showShaizi:"none",
          tishiShow: "none",
          tishiRenwu: "shdifd"//更改显示的任务内容
        });
        wx.navigateTo({ url: "../video/vid"})
      },2000);      
      return;
      }
    if(this.data.numi<this.data.aimg){this.setData({numi:++this.data.numi});}
    else { this.setData({ numi:1});}
    if (this.data.isTou){
        setTimeout(this.changeBack, this.data.imgt);
      }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
})
