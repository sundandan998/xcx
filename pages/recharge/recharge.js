// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nbTitle: '充值中心',
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
      // 弹框
      dialog :function(){
        // 判断是弹框还是跳转页面
        // wx.showModal({
        //   title: '温馨提示',
        //   confirmText:"我知道了",
        //   content: '请开启手机蓝牙，否则无法进行充值操作',
        //   success: function (res) {
        //     if (res.confirm) {  
        //       console.log('点击确认回调')
        //     } else {   
        //       console.log('点击取消回调')
        //     }
        //   }
        // })
      },
  // 跳转到充值中心成功
  rechargeSuccess(){
    wx.navigateTo({
      url: '../rechargeSuccess/rechargeSuccess',
    })
  }
})