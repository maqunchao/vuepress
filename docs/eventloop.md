![eventloop](/Users/maxuan/Desktop/eventloop.png)

https://naotu.baidu.com/file/ca3f1b0fc81dd5537b70b3b84232ecac

![image-20220225145514611](https://mqc-img.oss-cn-shanghai.aliyuncs.com/img/image-20220225145514611.png)

1. 一个Event Loop可以有一个或多个事件队列，但是只有一个微任务队列。
2. 微任务队列全部执行完会重新渲染一次
3. 每个宏任务执行完都会重新渲染一次
4. requestAnimationFrame处于渲染阶段，不在微任务队列，也不在宏任务队列

常见宏任务:
1. `script` (可以理解为外层同步代码)
2. `setTimeout/setInterval`
3. `setImmediate`(Node.js)

4. I/O

5. UI事件

6. `postMessage`   

常见微任务有：

1. `Promise`
2. `process.nextTick`(Node.js)
3. `Object.observe`
4. `MutaionObserver`

   >  

   
