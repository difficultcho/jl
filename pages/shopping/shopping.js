// shopping.js

Page({
  data: {
  },
  onLoad() {
  },
  // 导航到新页面的方法
  navigateToNewPage() {
    wx.navigateTo({
      url: '/pages/newpage/newpage',
      // 设置新页面从右侧滑入的动画
      animationType: 'slide-in-right',
      // 动画持续时间，默认300ms
      animationDuration: 300
    })
  }
})
