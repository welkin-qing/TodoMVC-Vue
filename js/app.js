;(function(){
	window.app = new Vue({
		data: {
			todos: JSON.parse(window.localStorage.getItem('todos')||'[]'),//localstorage从本地存储拿到数据
			currentEditing: null
		},
		watch: {
			todos: {//监视todos的改变，当todos发生改变时，做业务处理
				handler(val, oldval){
					console.log(val[0],oldval[0])
					window.localStorage.setItem('todos', JSON.stringify(this.todos))
				},
				deep: true//深度监视
				//immediate:true  //无论变化与否，上来就开始调用一次
			}
		},
		computed: {//计算属性
			remaningCount: {
				get(){
					return this.todos.filter(t => !t.completed).length
				},
				//当实例.remaningCount=xxx的时候会自动调用set方法
				set(){
					console.log('1111')
				}
			},
			tlggleAllstatus: {
				get(){
					return this.todos.every(t=>t.completed)
				},
				set() {
					const checked = !this.tlggleAllstatus
					this.todos.forEach(item => {
						item.completed = checked
					})
				}
			}
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