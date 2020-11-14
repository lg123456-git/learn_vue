const app = new Vue({
	el: '#app',
	data:{
		books: [
			{
				id: 1,
				name: '《算法导论》',
				price:85.00,
				date:'2020-1',
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				price:200.00,
				date:'2020-2',
				count: 1
			},
			{
				id: 3,
				name: '《编程原理》',
				price:85.11,
				date:'2020-3',
				count: 1
			},
			{
				id: 4,
				name: '《信息安全》',
				price:99.00,
				date:'2020-5',
				count: 1
			}
		]
	},
	methods:{
		decrement(index){
			//判断数量为0不能再减
			
			if(this.books[index].count > 1){
				this.books[index].count--;
			}
		},
		increment(index){
			this.books[index].count++;
		},
		
		getFinalPrice(price){
			return "￥" + price.toFixed(2);
		},
		//移除按钮点击事件
		removeBtn(index){
			this.books.splice(index,1);
		}
	},
	 computed:{
		totalPrice(){
			/* let totalPrice = 0;
			for(let i = 0;i < this.books.length;i++){
				totalPrice = totalPrice + this.books[i].price * this.books[i].count;
			}
			return totalPrice; */
			return this.books.reduce(function(pre,book){
				return pre + book.price * book.count;
			},0);
		}
	},
	/* 过滤器里面也是方法 */
	filters:{
		showPrice(price){
			return "￥" + price.toFixed(2);
		}
	}

})

/* 三个高阶函数filter/map/reduce */

/* 
	1、filter过滤返回true或false
	2、map赋值
	3、遍历
 
 */

let nums = [10,55,88,55,,101,120];

let newNums = nums.filter(function(n){
		return n < 100;
	}).map(function(n){
		return n * 2;
	}).reduce(function(preValue,n){
		return preValue + n;
	},0)
	
let newNums2 = nums.filter(n => n < 100).map(n => n*2).reduce((pre,n) => pre + n);



console.log("newNums:"+newNums);
console.log("newNums2:"+newNums2);