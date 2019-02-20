;(function(){
	const todos = [
		{
			id: 1,
			title: '敲代码',
			completed: true
		},
		{
			id: 2,
			title: '吃饭',
			completed: false
		},
		{
			id: 3,
			title: '睡觉觉',
			completed: true
		}
	]
	new Vue({
		data: {
			todos,
			currentEditing: null
		},
		methods: {
			handleNewTodoKeyDown(e) {
				//e  事件处理函数
				const target = e.target
				const value = target.value.trim() // 删除字符串开始和末尾的空格 
				if(!value.length){
					return
				}
				const todos = this.todos
				todos.push({
					id: todos.length ? todos[todos.length - 1].id + 1 : 1,//元素是空的就为1，否则就为最后一个元素的id+1，
					title: value,
					completed: false
				})
				target.value = ''
			},

			handleToggleAllChange(e) {
				const checked = e.target.checked
				this.todos.forEach(item => {
					item.completed = checked
				})
			},
			//当事件处理函数没有传参的时候，第一个参数就是默认的事件源对象event，当手动传递了参数时，就没有办法获取默认的event事件源对象
			//所以需要手动调用$event来接收event事件源对象
			handleRemoveTodoClick(index, e) {
				this.todos.splice(index, 1)
			},

			handleGetEditingDblclick(todo) {
				// 把这个变量等于当前双击的 todo
				this.currentEditing = todo
			},
			//编辑任务敲回车则保存
			handleSaveEditKeydown(todo, index, e){
				const target = e.target
				const value = target.value.trim()
				if(!value.length){
					this.todos.splice(index, 1)
				}else{
					todo.title = value
					this.currentEditing = null
				}
			},

			handleCancelEsc(){
				this.currentEditing = null
			},
			handleClearAllDoneClick(){
				//把需要的结果重新过滤出来赋值给todos中
				this.todos = this.todos.filter(t => !t.completed)
			}
		},
	}).$mount('#app')
})()