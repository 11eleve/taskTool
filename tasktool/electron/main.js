const { app, BrowserWindow } = require("electron");
// 导入 Node.js 的 path 模块
const path = require("node:path");
const fs = require("fs");
 
let win;
// 配置electron的应用窗口
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 如果你需要在渲染进程中使用Node.js
      // 连接与渲染层的交互
      preload: path.join(__dirname, "preload.js"),
    },
  });
  
  // 连接本机前端页面的端口号
  win.loadURL("http://localhost:5173")
 
  // 打开开发工具
  win.webContents.openDevTools();
 
};
 
// 这段程序将会在 Electron 结束初始化和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow();
});
 
// 关闭所有窗口时退出应用
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});