// pages/pict/pict.js
const ctx = wx.createCanvasContext("makepic");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    timg:{},
    cutImg:[],
    cWidth:0,//画布宽
    cHeight:0,//画布高
    positions:[],
    imgPos:[],
    isCanShow:"block",//画布是否渲染
    setWidthH: "",//初始化设置宽高
    nowNone:'',
    nowPos:'',
    isResetShow:"block"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化宽高
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
//开始显示
    wx.showLoading({title:"正在加载"});
    var sysInfo=wx.getSystemInfoSync();
    this.setData({
      cWidth:sysInfo.screenWidth*600/750, /*获得canvas画布的像素点数*/
      cHeight:sysInfo.screenWidth*600/750
    });
    var _this=this;
    wx.request({
      url:"http://192.168.31.211/suport/getUrl.php",
      success:function(res){
        wx.getImageInfo({
          src:res.data,
          success:function(re){
            _this.setData({
              timg:re
            });           
            _this.makeStart();
          }
        });
      }
    });
    //初始化位置信息
    this.initStyle();
    this.randomPos();
  },
  initStyle:function(wid){
    var tst=[];
    var tpo=[];
    var tw=194;
    var tcout=0;
    var tshow=false;
    if(wid){tw=wid;}    
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        var tob={};
        var position="left:"+(j*200+(200-tw)/2)+"rpx;top:"+(i*200+(200-tw)/2)+"rpx;";
        tob.width = "width:" + tw + "rpx;height:" + tw + "rpx;";
        tob.show="";
        tob.id=tcout;
        tob.pos=tcout;//要把pos随机乱序，点击的时候要切换pos值，检测是否通关的时候 要检测pos值和id值是否都一致
      //  if (this.data.nowNone!==''){ if (this.data.nowNone == tcout) { tob.show ="box-shadow:0 0 5px 3px #cc33cc;";}}
        tcout++;
        tst.push(tob)
        tpo.push(position);
      }
    }    
    this.setData({
      imgPos:tst,
      positions:tpo
    }); 
  },
  randomPos: function () {
    //随机乱序    
    var tst = this.data.imgPos;
    var randoma = [0, 1, 2, 3, 4, 5, 6, 7,8];
    for (let k = 0; k < 9; k++) {
      var tk = Math.floor(Math.random() * randoma.length);
      tst[k].pos = randoma[tk];
      tst[k].show="";
      randoma.splice(tk,1);
    }
   // console.log(tst, this.data.nowNone)    
    this.setData({
      imgPos: tst,
      nowNone: '',
      nowPos: '',
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  makeStart:function(){
    var thisimg=this.data.timg;
    ctx.drawImage(thisimg.path, 0,0,thisimg.width,thisimg.height, 0, 0, this.data.cWidth, this.data.cHeight);
    ctx.draw(false,this.startCut);    
  },
  startCut: function(){
    var tw = this.data.cWidth / 3;
    var _this = this;
    var tallimg = [];
    var tcounti=0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        wx.canvasToTempFilePath({
          x: j * tw,
          y: i * tw,
          width: tw,
          height: tw,
          destWidth: _this.data.cWidth,
          destHeight: _this.data.cHeight,
          canvasId: "makepic",
          success: function (res) {
            tallimg.push(res.tempFilePath);
            tcounti++;
          }
        });
      }
    }
    checkeCutOver();
    function checkeCutOver(){
      if (tcounti>=9){
        _this.setData({
          cutImg: tallimg,
          isCanShow:"none"
        });
        wx.hideLoading();
        _this.startGame();
      }else{
        setTimeout(checkeCutOver,200);
      }
    }
    
  },  
  startGame:function(){
    //拼图游戏开始
    console.log("游戏开始");
  },
  makeStep:function(e){
    var id=e.target.dataset.id,
        pos=e.target.dataset.pos;
    if(this.data.nowNone===""){
      this.data.nowNone=id;
      this.data.nowPos=pos;
      var tpos = this.data.imgPos;
      tpos[id].show ="transform:scale(1.1,1.1);z-index:99;box-shadow:0 0 2px 1px rgba(0,0,0,0.3);"// "box-shadow:0 0 1px 1px #cc33cc;";
      this.setData({
        imgPos: tpos        
      });
    }else{
      var tpos = this.data.imgPos;
      tpos[this.data.nowNone].show = "";
      tpos[this.data.nowNone].pos =pos;
      tpos[id].pos = this.data.nowPos
      this.setData({
        imgPos: tpos,
        nowPos:"",
        nowNone:""
      });
    }
   // if (!this.checkCanMove(pos)){return;}    
    if (this.checkPass()){        
      this.initStyle(200);
      wx.showToast({title:"恭喜过关"});
      this.setData({
        isResetShow:"none"
      });
      setTimeout(function(){
        wx.navigateTo({ url: '../index/index' });
      },1000);      
    }
  },
  checkCanMove:function(ind){//检查当前块是否可以移动
    var tnone=this.data.nowNone;
    if((ind+1)==tnone && ind!=2 && ind!=5){return true;}
    if ((ind - 1) == tnone && ind != 3 && ind != 6) { return true; }
    if ((ind + 3) == tnone) { return true; }
    if ((ind - 3) == tnone) { return true; }
    return false;
  },
  checkPass:function(){
    for(let i=0;i<9;i++){
      if (this.data.imgPos[i].id != this.data.imgPos[i].pos){return false;}
    }
    return true;
  },
  viewImage:function(e){//预览图片    
    
    var tsrc=this.data.timg.path;
    wx.previewImage({
      current:'123',
      urls:[tsrc]
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