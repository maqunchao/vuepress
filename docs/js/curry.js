function add (){
    let args = Array.prototype.slice.call(arguments);

    let inner = function (){
        args.push(...arguments);
        //  args = [...args, ...arguments];
        return inner;
    }
    //重写inner的toString方法
    inner.toString = function(){
        return args.reduce(function(preV, cur){
            return preV + cur
        })
    }
    return inner;
}

const result =  add(1)(2)(3);
console.log("111", parseInt(result))

//定长的柯里化
function curry (fn){
    //获取原函数的参数长度
    const argLength = fn.length;
    //保留预留参数
    const presetArgs = [].slice.call(arguments, 1)

    //返回一个新函数
    return function (){
        //新函数调用继续传参
        const restArgs = [].slice.call(arguments);
        const allArgs = [...presetArgs, ...restArgs];
         if(allArgs.length >= argLength){
            //如果参数够了， 就执行原函数
            return fn.apply(this, allArgs);
         } else {
            //继续执行 递归
            return curry.call(null, fn, ...allArgs)
         }
    }

}

function fn(a, b, c) {
    return a + b + c;
  }
  var curried = curry(fn);
  console.log( curried(1, 2, 3)); // 6
  curried(1, 2)(3); // 6
  curried(1)(2, 3); // 6
  curried(1)(2)(3); // 6
  curried(7)(8)(9); // 24
  
//参数不定长的柯里化

function curry1(fn){
    //保留预留参数
    let presetArgs = [].slice.call(arguments, 1)
    function curried (){
        // 新函数调用时会继续传参
        const restArgs = [].slice.call(arguments)
        presetArgs = [...presetArgs, ...restArgs];
        return curry1.call(null, fn, ...presetArgs)
    }
    // 重写toString
    curried.toString = function() {
        return fn.apply(null, presetArgs)
    }
    return curried;
}
function dynamicAdd() {
    return [...arguments].reduce((prev, curr) => {
      return prev + curr
    }, 0)
  }
let addS = curry1(dynamicAdd);
const result1 = addS(1)(5)(7)( 8,9)
console.log("result1", parseInt(result1))