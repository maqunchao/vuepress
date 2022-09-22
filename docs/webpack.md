1. ts-node:让node支持ts， 记录安装路径

   /Users/maxuan/.nvm/versions/node/v10.19.0/bin/ts-node

/Users/maxuan/.nvm/versions/node/v10.19.0/lib/node_modules/ts-node/dist

/Users/maxuan/.nvm/versions/node/v16.13.1/lib/node_modules/ts-node/dist

2.浏览器可以直接运行js， 不能直接运行ts，命令行 tsc把ts变成js，进行类型检查

3.ts检查在编译时候（能提示错误），js检查在执行时候（浏览器执行，用户能看到）

tsc -w 把ts文件转成js文件





前端跨域请求如何携带cookies

1.在客户端将withCredentials设置为true

```cpp
// 当发送跨域请求时，携带cookie信息
 xhr.withCredentials = true;
```

2.`res.header('Access-Control-Allow-Credentials', true);`

后台在响应信息中添加

```jsx
// 拦截所有请求
app.use((req, res, next) => {
    // 1.允许哪些客户端访问我
    // * 代表允许所有的客户端访问我
    // 注意：如果跨域请求中涉及到cookie信息传递，值不可以为*号 比如是具体的域名信息
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    // 2.允许客户端使用哪些请求方法访问我
    res.header('Access-Control-Allow-Methods', 'get,post')
    // 允许客户端发送跨域请求时携带cookie信息
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
```