[简体中文](https://github.com/welkin-qing/todomvc-vue)  | English

<div align="center">

![](https://github.com/welkin-qing/todomvc-vue/blob/master/img/mylogo.png)

一个基于 Vue 框架开发的 ToDoMVC 实例

An instance of ToDoMVC based on Vue

![](https://github.com/welkin-qing/todomvc-vue/blob/master/img/release-1.0-darkcyan.svg)
![](https://github.com/welkin-qing/todomvc-vue/blob/master/img/build-passing-brightgreen.svg)
![](https://github.com/welkin-qing/todomvc-vue/blob/master/img/dependencies-up%20to%20date-brightgreen.svg)
![](https://github.com/welkin-qing/todomvc-vue/blob/master/img/license-MIT-darkcyan.svg)

</div>

-----

# Installation and use
```js
git clone git@github.com:welkin-qing/todomvc-vue.git
cd todomvc-vue
npm install
npm run dev/ npm start
```
-----

# The basic configuration
### Download the ToDoMVC template
https://github.com/tastejs/todomvc-app-template
### Configure browser-sync browser synchronization test tool and configure scripts

```js
cnpm install --save-dev browser-sync
```
# The basic function
###  Add tasks
1. Press enter to add to task list
2. Determine whether the data is non-null, if so, do not add; Clear the text box after adding

### Action item
1. Linkage style to switch task completion status
2. Delete task items
3. Double-click the label to edit the task item

### Edit task item
1. Edit text to get focus automatically (using custom instructions)
2. Press enter or lose focus to save text
3. In the input state, esc unedits
4. Display all unfinished Numbers; Click clear completed item to clear all completed tasks (using calculated properties)

### Data persistence
1. Persist the data to localStorage to achieve localStorage
2. Use watch to monitor changes, deletions and additions of data

### Routing switching state
1. Click the link to filter the output of the array (using hash)
2. Refresh and maintain the filtering state
3. Switch the click link style

### The custom directive gets the focus
1. Use global directives to get the focus right from the start (no need later)
2. Use the instruction to obtain the Dom element that is applied to the instruction, so that it can obtain the focus

###### Attention
cnpm install --production  just load the packages in dependencies

