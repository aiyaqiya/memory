//index.js
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
      "http://www.twobyoung.com/ether/img/index/enter.png",
      "http://www.twobyoung.com/ether/img/ques/back.jpg",
      "http://www.twobyoung.com/ether/img/ques/backhome.png",
      "http://www.twobyoung.com/ether/img/ques/titleback.png",
      "http://www.twobyoung.com/ether/img/ques/fault.png",
      "http://www.twobyoung.com/ether/img/ques/right.png",
      "http://www.twobyoung.com/ether/img/laohj/back.png",
      "http://www.twobyoung.com/ether/img/laohj/but.png",
      "http://www.twobyoung.com/ether/img/laohj/butac.png",
      "http://www.twobyoung.com/ether/img/laohj/front.png",
      "http://www.twobyoung.com/ether/img/laohj/list.jpg",
      "http://www.twobyoung.com/ether/img/laohj/return.png",
      "http://www.twobyoung.com/ether/img/index/choujbut.png",
      "http://www.twobyoung.com/ether/img/laohj/background.png",
      "http://www.twobyoung.com/ether/img/index/share.jpg",
      "http://www.twobyoung.com/ether/img/index/sharehd.jpg",
    ],
    allimgi: 0,
    allimgload:"0",
    loadOver:"none",
    zhezhao:'block',//加载框的显示与否，以上都是加载框的数据
    atime:3000,
    numi:1,
    aimg:17,
    imgt:20,
    isTou:true,
    showShaizi:"none",//以上是色子的逻辑数据
    isHuodShow:"none",//显示活动规则
    setWidthH:"",//初始化设置宽高
    touchjh:"",//进入按钮交互
    isShowEnter:"block",//点击进入按钮显示
    isShowChouj:"none",//主页开始老虎机抽奖按钮显示
    isNotimesShow:"none",//没有次数
    musicCtrl:"musicac",//音乐控制
    isMusicPlay:true,//音乐当前是否在播放
    tishiShow:"none",//显示抽中提示框显示与否
    tishiRenwu:"阅读任务",//要显示的任务内容
    isGuoGK:"none",//是否通关
    nowGuanKa:0,//当前通过的关卡数
    choujTimes:0,//抽奖次数
    isLaohjShow:"none",//老虎机是否显示
    laohjButAc:"",//老虎机按键是否激活状态管理
    laohjImage:{},//logo图片信息
    laohjtops:['0','0','0'],//老虎机三张图的top值
    animation1:{},//老虎机动画1.2.3
    animation2:{},
    animation3:{},
    isLaohjZhj:"none",//老虎机摇中
    isLaohjJP:"",//老虎机中奖的奖品名    
    isLaohjLJ:"",//老虎机中奖的领奖方式    
    guoguan:['','','','','','','','','','','',''],
    userInfo: {},    
    hasUserInfo: false,
    laohjRuning:false,//老虎机正在转与否
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
    //检测是否带参数，判断来源
    var canshu = this.getAllUrl(),tjia=0;
    if (JSON.stringify(canshu) !== "{}") {
      //临时逻辑，完成一关关卡+1
      console.log(canshu.gg)
      if (canshu.gg) {
        tjia=1;
      }
      //正式逻辑，传值给后台
      wx.request({
        url: "http://123.56.69.131/suport/save.php",
        data: { id: canshu.id },
        success: function (res) {
         // console.log(res)
        }
      })
    }
    //请求通过关卡数判断是否显示老虎机
    var that=this;
    wx.request({url:"http://123.56.69.131/suport/tongg.php",
      success:function(res){
        var guog = parseInt(res.data.guog) + tjia,
              choujt=res.data.choujtime;
          var tarr=['','','','','','','','','','','',''];
        for (var i = 0; i < guog;i++){
            tarr[i]='ac';
          }
          that.setData({
            guoguan:tarr
          });
        if (guog>=12){
            that.setData({              
              isGuoGK:"block",
              isShowEnter:"none",
              isShowChouj:"block",
              choujTimes: choujt//抽奖次数
            });
          };
        that.setData({
          nowGuanKa: guog,
          });
      }
    });
    
  },
  onReady:function(){
    this.data.music=wx.createAudioContext("music");
    this.data.music.play();
    //设置分享带转发详情信息
    wx.updateShareMenu({
      withShareTicket: true      
    });   
  }, 
  onShareAppMessage: function (res) {//设置分享内容
    return {
      title: "开心！我要去现场看爱豆了，你要一起嘛？",
      imageUrl: "http://www.twobyoung.com/ether/img/index/sharehd.jpg",
      path: "/pages/index/index?id=123456",
      success: function (res) {//回调函数有已被官方【【【【关闭】】】】
        var shareTicket = res.shareTickets[0] || '';        
        wx.getShareInfo({//这里边是获取分享完后被分享去处的信息          
          shareTicket:shareTicket,
          success:function(res){
             console.log(res);
             wx.showModel({
               title:"text",
               text:JSON.stringify(res)
             });
          }
        });
      }
    }
  },
  getAllUrl: function (){//获取当前路径所带参数
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    return currentPage.options;
  },
  ctrlMusic:function(){
    if (this.data.isMusicPlay){
      this.data.music.pause();
      this.setData({ musicCtrl: "", isMusicPlay:false});
    }else{
      this.data.music.play();
      this.setData({ musicCtrl: "musicac", isMusicPlay:true });
    }
  },
  getCJTimes:function(){
    var that=this;
    wx.request({
      url:"http://123.56.69.131/suport/tongg.php",
      success:function(res){
        var chouj = res.data.choujtime;
        console.log(res);
        that.setData({
          choujTimes:chouj
        });
      }
    });
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
        //图片加载完成，开始逻辑
        var that=this;
        that.setData({
          zhezhao: "none",
          loadOver: "block"          
        });        
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
  changeBack:function(){//掷骰子函数
    this.data.atime-=this.data.imgt;
    var that=this;
    if(this.data.atime<=0){
      //模拟数据
      var moniData=[{name:'广告任务',value:"ad"},{name:"知识问答",value:"zs"}];
      var obj=Math.random()>0.5 ? moniData[0]:moniData[1];
      this.data.atime=2000;
      this.data.isTou=false;
  //【【后台获取目前要做的任务，展示给客户，需要提前请求；】】
      this.setData({ numi: obj.value});
      setTimeout(()=>{
        that.setData({
          tishiShow:"block",
          tishiRenwu: '【'+obj.name+'】'//更改显示的任务内容
        });
      },500);      
      setTimeout(()=>{
        that.setData({
          showShaizi:"none",
          tishiShow: "none",
          tishiRenwu: ""//更改显示的任务内容
          });
          if(obj.name=="广告任务"){
            wx.redirectTo({ url: "../video/vid" });
          }else{
            wx.navigateTo({ url: "../mess/mess" });
          }
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
  },
  backhomep:function(){//返回整个小程序首页的函数
    this.setData({
      isGuoGK:"none",
      isLaohjZhj:"none",
      isLaohjShow:"none"
    });
    return;
    wx.navigateTo({url:"../index/index"});
  },
  showLaohj:function(){//初始化并显示老虎机
    //判断有没有次数
    if(this.data.choujTimes==0){
      this.showNoTimes();
      return;
    }
    this.setData({
      isLaohjShow: "block",
      isGuoGK: "none",
    });
    var that=this;    
    const query = wx.createSelectorQuery();   
    query.select(".laohj_cimg1").boundingClientRect();
    //imageQuery.selectViewport().scrollOffset();    
    query.exec(function (res) {    
      var imgInfo = { h: res[0].width, w: res[0].height }
      that.setData({
        laohjImage: imgInfo,
      });
    });     
  },
  closeLaohuj:function(){//关闭老虎机
    this.setData({
      isLaohjShow: "none"      
    });
  },
  laohujGo:function(){
    this.setData({
      laohjButAc:"ac"
    });
  },
  laohujGot:function(){    
    this.setData({
      laohjButAc: ""
    });
    //如果正在抽奖，则不进行操作
    if (this.data.laohjRuning){return;}
    //判断有没有次数    
    if (this.data.choujTimes == 0) {
      this.showNoTimes();
      this.getCJTimes();
      return;
    }
    this.setData({
      choujTimes: this.data.choujTimes - 1
    });
    this.data.laohjRuning=true;//劫持按钮，在执行完之前不允许再次操作
    //老虎机开始转，可以在请求之后获得中奖与否之后再执行

    var zhongj = Math.round(Math.random()) - Math.round(Math.random());//目前中奖是随机的
    this.laohujRun(zhongj);
    this.data.zhongj=zhongj;
  },
  laohujRun:function(bo){
    var count=12;
    var yaotimes=5;
    var that=this;    
    var tops;
    setZhongj(bo);
    var all = this.data.laohjImage.h;    
    var one = all/count;    
    const sto0=wx.createAnimation({
      duration:0,
    });
    const sto1=wx.createAnimation({
      duration:100,
      timingFunction: "linear"
    });
    const sto2 = wx.createAnimation({
      duration: 200,
      timingFunction: "linear"
    });
    const sto3 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear"
    });
    const sto4 = wx.createAnimation({
      duration: 400,
      timingFunction: "linear"
    });
    const sto5 = wx.createAnimation({
      duration: 500,
      timingFunction: "linear"
    });
    const sto6 = wx.createAnimation({
      duration: 600,
      timingFunction: "linear"
    });
    const sto7 = wx.createAnimation({
      duration: 700,
      timingFunction: "linear"
    });
    const sto8 = wx.createAnimation({
      duration: 800,
      timingFunction: "linear"
    });
    const sto9 = wx.createAnimation({
      duration: 900,
      timingFunction: "linear"
    });    
    function getV(str) {
      if (str == "0") { return sto0; }
      if (str == "1") { return sto1; }
      if (str == "2") { return sto2; }
      if (str == "3") { return sto3; }
      if (str == "4") { return sto4; }
      if (str == "5") { return sto5; }
      if (str == "6") { return sto6; }
      if (str == "7") { return sto7; }
      if (str == "8") { return sto8; }
      if (str == "9" || str == "10" || str == "11") { return sto9; }
    }
    makeRun();
    function makeRun(){
      laohjRun(1, makeStop);
      setTimeout(() => { laohjRun(2, makeStop);},300);
      setTimeout(() => { laohjRun(3, makeStop);}, 600);
    }
    function laohjRun(ti, callb){
      var tstart=0;
      var tstr = "animation" + ti, ani = getV(5);      
      g();
      function g(){
        that.setData({ [tstr]: sto0.top(0).step().export()});
        that.setData({ [tstr]:ani.top(-all).step().export()});
        tstart++;if(tstart>=yaotimes){//停止动画
          setTimeout(function(){callb(ti);},500);
        }else{
          setTimeout(g,500);
        }
      }
    }
    function makeStop(ti){
      var tstr="animation"+ti,ani=getV(tops[ti-1]);
     that.setData({
        [tstr]:ani.top(-tops[ti-1]*one+one/15).step().export() 
        });
      //【【【当前抽奖结束】】】
      if (ti >= 3) {
        setTimeout(function(){
          that.data.laohjRuning = false;
          switch (that.data.zhongj) {
            case -1: {
              that.showZhongj("100积分", "请在【我的】->【个人信息】->【积分记录】中查看");
              break;
            }
            case 0: {
              that.showZhongj("周杰伦演唱会周边T恤衫", "请在右下角【领奖记录】中填写收货地址领取");
              break;
            }
            case 1: {
              that.showZhongj("周杰伦演唱会门票一张", "请用右下角【领奖记录】中说明的方式兑换");
              break;
            }
          }
        },1000);      
      }
    }
    function setZhongj(bo) {//bo为number值，1返回都一样，0；两个一样，-1都不一样    
      tops = [0, 0, 0];
      if (bo==1) {
        var ti = Math.floor(Math.random() * count);
        tops = [ti, ti, ti];
      } else if(bo==0){
          var ti = Math.floor(Math.random() * count);
          tops[0]=tops[1]=ti;
        var ti1 = Math.floor(Math.random() * count);
          while (ti1==ti) {
              ti1 = Math.floor(Math.random() * count);
          }          
          tops[2] = ti1;        
      }else{
        for(var i=0;i<3;i++){
          var ti = Math.floor(Math.random() * count);
          while(tops.indexOf(ti)>-1){
            ti = Math.floor(Math.random() * count);
          }
          tops[i]=ti;
        }
      }
    }
  },
  closeHuodgz:function(){
    this.setData({
      isHuodShow: "none"
    });
  },
  showHuodgz(){
      this.setData({
        isHuodShow:"block"
      })
  },
  showLingj:function(){//跳转领奖记录页面
    wx.navigateTo({
      url:"../lingj/lingj"
    });
  }, 
  showNoTimes:function(){
    this.setData({ isNotimesShow:"block"});
  },
  hideNoTimes:function(){
    this.setData({ isNotimesShow: "none" });
  },
  showZhongj:function(a,c){
    this.setData({
      isLaohjZhj:"block",
      isLaohjJP: a,      
      isLaohjLJ: c
    });
  },
  hideZhongj:function(){
    this.setData({
      isLaohjZhj: "none",
      isLaohjJP:'',      
      isLaohjLJ: ""
    });
  }
});
/*
  isLaohjJP: "",//老虎机中奖的奖品名  
  isLaohjLJ: "",//老虎机中奖的领奖方式    
*/