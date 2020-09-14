// pages/reportRepair/reportRepair.js
const areaList  = require("../../utils/area.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    showPopup:false,
    areaList,
    valueArea:[],
    currentDate: '请选择上门时间',
    minDate: new Date().getTime(),
    // 展示年月日文字
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }else if(type === 'day'){
        return `${value}日`;
      }else if(type === 'hour'){
        return `${value}时`;
      }else if(type === 'minute'){
        return `${value}分`;
      }
      return value;
    },
    // 展示半点时间
    filter(type, options) {
      if (type === 'minute') {
        return options.filter((option) => option % 10 === 0);
      }
      return options;
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nbTitle: '添加故障描述',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },
   // 展示弹出层地区
   showPopup() {
    this.setData({ show: true });
  },
     // 展示弹出层时间
     showTime() {
      this.setData({ showDate: true });
    },
  // 关闭弹出层
  onClose() {
    this.setData({ show: false });
    this.setData({ showDate: false });
  },
  // 地区
  confirm(val){
    var addrInfo = val.detail.values[0].name+'-'+val.detail.values[1].name+'-'+val.detail.values[2].name;
    this.setData({ valueArea: addrInfo });
    this.setData({ show: false });
  },
  // 确认时间弹框
  confirmTime(value){
    this.setData({ showDate: false });
    // 时间戳转为年月日格式
    let date = new Date(value.detail);
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let m = date.getMinutes();
    m = m < 10 ? ('0' + m) : m;
    let selectTime =  y + '-' + MM + '-' + d + ' ' + h + ':' + m;
    this.setData({ currentDate: selectTime });
  },
})