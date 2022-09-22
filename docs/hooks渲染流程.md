hooks渲染流程

1.首次渲染 render<App/>(函数组件名称)

2.调用App() 得到虚拟dom 创建真实dom

3.用户点击button, 调用setN(n+1), 再次render<App/>

4.调用App(), 得到虚拟dom,  domDiff更新真实dom

5.每次调用App();都会运行useState(0)

![image-20211228103532481](https://mqc-img.oss-cn-shanghai.aliyuncs.com/img/image-20211228103532481.png)

ReactDOM.render(<App />, rootElement);



useState() 做了什么:

简易实现 useState,  多个useState时候,  _state是以数组形式存储(实际以链表), 每次setN(n+1)时, 这个n是独立的, 

[[ -s "$HOME/.profile" ]] && source "$HOME/.profile" # Load the default .profile

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

var timeInfo = {

​	beforeTime : 0,

​	nextClick(callBack){

​		**const** time = **new** Date().getTime();

​		if(time - beforeTime > 2000){

​			this.beforeTime = time;

​			callBack();

​		}

​	}

}

