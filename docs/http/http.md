1. 浏览器输入一个地址后， 首先浏览器会查找自己的缓存看之前是是否访问过了， 缓存中是否有对应的ip， 如果没有去操作系统（hosts：手动添加对应的地址的 ip）的中缓存去找， 再没有就去ISP（网络运营商）

2. http中通过3次握手建立tcp连接

   SYN（synchronize）同步， 同步信息，  ACK(acknowledge)获悉，

   为什么一定要3次握手， 因为加入a发完消息，后因为网络延迟，超时了， a挂断了， 然后B发送消息给A， A收不到， 就建立链接失败了， 所以a收到b的消息 一定要回复；

   建立链接成功后， 就开始进行http内容的传输

![image-20220423162415482](https://mqc-img.oss-cn-shanghai.aliyuncs.com/img/image-20220423162415482.png)

4.4次挥手断开tcp链接

为啥2,3不合并成1次， 因为2-3之间可能还有消息发送

{
  "key": "",
  "command": "workbench.action.toggleActivityBarVisibility"
}

![image-20220423162835761](https://mqc-img.oss-cn-shanghai.aliyuncs.com/img/image-20220423162835761.png)



4.http请求

http协议里面url是不支持锚点的，会自动删掉

 1请求行  2请求头 3回车换行，4消息体 

 1 状态行  2响应头 3.回车换行 4消息体

![image-20220423174521406](https://mqc-img.oss-cn-shanghai.aliyuncs.com/img/image-20220423174521406.png)





DNS优化， 预解析 pre-fetch

TCP优化  并发链接

并行请求和连接复用不冲突， 因为第2批的并行请求中， 可以会继续在第一批的并行请求中建立链接进行复用 

http管道化bug ：导致请求之间的顺序存在依赖性， 并行不能达到最快的速度， 假如发出了3个请求，按照1，2，3顺序，那如果第2个请求先返回的结果， 会当成第一个请求的响应结果， 所以需要按照顺序响应。![image-20220504224658752](https://mqc-img.oss-cn-shanghai.aliyuncs.com/img/image-20220504224658752.png)

