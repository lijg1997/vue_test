# todolist

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## todolist 总结

> 根据项目的功能拆分组件

- header
- list
  - item
- footer

> 数据驱动

- 在分析数据的时候，发现所有的组件都用到了这些数据，所以把数据放在 App 身上是最合适的

> 组件功能的实现

## header

- 实现任务的动态增加，涉及到子向父传数据
- 两种实现方法：
  - 1 通过父向子传递一个函数，子组件通过 props 接收并检验，在子组件中调用函数，通过参数把数据传给父组件
  - 2 父组件向子组件传递一个自定义方法，子组件通过 this.\$emit('eventName',value)直接调用，实现向父组件传数据(推荐使用)

## list

- 展示任务列表
- 涉及到父向子传递数据，并且的两层
  - App ---> list ---> item
  - list 接收并检验传过来的数据，item 组件标签循环遍历之后传递到 item 组件中展示数据

## item

- 勾选完成项目
  - 涉及到非父子传数据(这里是孙向爷)两种方式
    - 总线中的两种<br>App 里注册 this.bus.$on('eventName', callback)<br> 1. 先转存一份checked数据，实现数据绑定的勾选与不勾选，定义change事件，通过勾选与非勾选改变的值，调用this.bus.$emit('eventName', value)实现孙向爷的数据传递<br>2.使用计算属性的 get，set 方法，不需要再转存数据；在 get 方法里获取到 App 里的状态，控制勾选与不勾选；在 set 方法里，通过 set 方法接收到的 value 的值，调用 this.bus.\$emit('eventName', value)实现孙向爷的数据传递
    - pubsub ---> PunSub.subscribe('eventName', callback)<br> PubSub.publish('eventName' value)(要安装包，不建议)
