1.一个返回react元素的函数就是组件  类组件和函数组件
2.react函数式理念  函数式组件没有this  类组件包含this
所有函数的this都是参数,由调用绝对,所以是改变的
箭头函数里面的this不会改变, 因为箭头函数不接受this

return 后面不能回车, 想回车加上()
不要修改传过来的props, setState对更新进行优化,会将大批量的更新合并成一次更新, 会调用render函数

react hooks:  useState不能放到函数外面, const['值', '更新函数'] = useState(默认值);
https://codesandbox.io/s/floral-https-hrmyv?file=/src/index.js(简易使用)

react-router: https://codesandbox.io/s/distracted-sun-obfok?file=/src/styles.css

3.CSS in React 

3.1 根据css前缀
<div className ={`class1  class-${name}`}> </div>, 第2个className带着变量

classnames 这个库 接受多个字符串 组件设置多个class

3.2 CSS in JS
推荐styled-components https://codesandbox.io/s/rjr43532wo
emotion https://codesandbox.io/s/9yvlrp86pw 
css modules