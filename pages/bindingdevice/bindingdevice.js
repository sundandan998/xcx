// pages/bindingdevice/bindingdevice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    value: 0,
    show: true,
    option: [
      { text: '蓝牙设备', value: 0 },
      { text: 'HPT', value: 1 },
      { text: 'IGFIDGOI', value: 2 },
      { text: 'DGMFMOPD', value: 3 },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nbTitle: '绑定净水设备',
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
    wx.showModal({
      title: '绑定成功',
      content: '您的设备已绑定成功~',
      success: function (res) {
        if (res.confirm) {  
          console.log('点击确认回调')
        } else {   
          console.log('点击取消回调')
        }
      }
    })
  }
})