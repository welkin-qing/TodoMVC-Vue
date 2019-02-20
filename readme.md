# 基本配置
## 下载mvc模板
https://github.com/tastejs/todomvc-app-template
## 配置browser-sync浏览器同步测试工具及配置scripts
cnpm install --save-dev browser-sync
#### 注意
cnpm install --production 可以只装dependencies中的包

#  添加任务
1. 敲回车添加到任务列表中
2. 判断是否为非空数据，若是，则不添加；添加完成后清空文本框

# 任务项
1. 联动样式，切换任务完成状态
2. 删除任务项
3. 双击label编辑任务项

# 编辑任务项
1. 编辑文本自动获得焦点
2. 敲回车或者失去焦点则保存文本
3. 输入状态下，esc取消编辑
4. 点击清楚完成项，清除所有已完成任务

