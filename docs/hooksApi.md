React.memo:

```javascript
useCallBack(x=>log(x), [m]);
等价于
useMemo(() =>x=>log(x), [m]);
第一个参数()=>value, 第2个参数是依赖[];
memo能实现函数组件的重用, 不用每次刷新, 但是如果函数组件中有父组件传递的函数,因为app每次都是刷新的, 倒是函数的地址改变, 导致组件仍然会刷新, 所以使用useMemo
useMemo能实现函数的重用, 不用每次都刷新,
useMemo返回的是函数运行的结果，而useCallback返回的是函数
```

forwardRef使用于自定义函数组件和复杂组件用 来引用自定义组件用的ref,  props无法传递ref属性

class组件可以直接用ref

否则使用ref只能调用原生的语义化组件,例如input, button

useImperativeHanle(理解为setRef) 设置一个自定义的ref

![image-20220801190444109](https://mqc-img.oss-cn-shanghai.aliyuncs.com/img/image-20220801190444109.png)

