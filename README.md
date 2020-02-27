# vue 的学习历程

## vue 的基本认识

### 四大特征

- 声明式编程（区别于 DOM 编程）
- 响应式数据流，让数据的变化来驱动页面的更新
- 数据双向流 v-model
- 数据驱动（编程思想，一切以数据为核心）

### 常用指令

> 数据绑定

```javascript
v - model; //最重要的
v - text; //文本遇到标签不会渲染
v - html; //遇到html标签，会将标签效果渲染出来
```

> 事件

```javascript
v-on: ---> @
//在vue中不在需要使用原生的写法，可以使用vue提供的
v-on:click ---> @click
v-on:mouseenter ---> @mouseenter
```

> 样式

```javascript
v-bind: ---> :
//在标签中加上 : 之后，表示这个标签属性交给了vue去管理
v-bind:class="className" ---> :class="className"
```

> 流程分支

```javascript
v-if & v-else-if & v-else //这三个要连在一起使用
v-show
/*
  注意 v-if 和 v-show 之间的区别：
  v-if是直接删除、增加节点实现显示与隐藏，
  而v-show是控制标签的display属性实现显示与隐藏
  所以v-show的性能会稍微好一点
*/
```

> 循环

```javascript
v-for
//数组的循环:
v-for="(item, index) in arr"

//对象的循环:
v-for="(value, key, index) in obj"
```

> 其他

```javascript
v - pre; //当有大段的纯静态代码，我们不希望vue去解析的时候，在这段代码最外层的标签上加 v-pre，vue就会自动忽略这些代码，从而提升运行的效率

v - clock; //避免闪屏，几乎不用

v - once; //加上这个属性，模板只会被解析一次
```
