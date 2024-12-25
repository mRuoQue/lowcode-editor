
[github:](https://github.com/mRuoQue/lowcode-editor.git)

**加班加到死，上班摸鱼抽空写....**



### 架构设计

 对于需要低代码方案的企业来说，无疑为公司带来巨大能效，实现当下*降本增效*的伟大理想， 只需要前期进行低代码平台构建。

 对于需求不高，内容不密集的企业，赶潮流最终是*得不偿失*，害人害己。

- 低代码还是需要一些培训才能熟练使用，并不是开箱即用
- 如果依赖于第三方组件库，功能包，更新起来会很复杂，有意想不到的BUG
- 依赖于第三方框架，迭代起来不可控  

**应用场景：**
- 小程序商城
- H5活动页
- 海报生成
- 后台系统，及移动端逻辑交互清晰的系统
- ...

**最多使用拖拽方式：**
- 左侧：组件区域（提供给使用者需要的组件类型）
- 中间：画布区域（根据左侧的组件类型生成对应的组件，组成页面）
- 右侧：属性设置区域（对画布区域生成的组件，进行修改设置，一般包括：属性设置，事件设置，动画设置）
- 其他区域根据设计自行补充（功能设置：撤回、预览、发布等...）



### 一、制定接口规范（类似表设计，制定出一套应用于全局的数据格式）
```javascript

// 描述组件
type ：Component {
  name:"button",
  type:"Button",
  label:"按钮",
  id:UUID(),
  visibla:false,
  props:{
    text:"按钮",
    PropType:"success",
    size:"small"
    ...
  },
  ...


    
// 组件集合
  type ：Components {
    page:"home",  // 对应路由或者业务
    position:"header",
    children:[
      {},
      {}
    ]
  }
}

```

### 二、组件区和画布区映射关系
这里需要实现外接组件库的接口定义，也就是将外部组件库再平台使用，需要实现**适配**

```javascript

// 组件区是个Array类型，将组件的类型作为key，组件本身作为value，保存起来
function (){
  const components =[],  // 组件区展示的组件列表
        componentMap = {}  // 画布区域需要渲染的组件

  // ...这里进行了一个拖拽操作，将组件区域的组件拖入画布，于是画布上生成了一个组件
  const laodComponent = (component)=>{
    components.push(component)
    componentMap[component.type] = component
    // 这样就建立了关系
  }
  
  return {
  components,
  componentMap,
  laodComponent,
  ...
}
}

```

### 三、画布功能
 - 样式隔离，在一个iframe上进行渲染，提供iframe全局通信方法
 - 组件位置计算
 - 辅助线计算 组件拖拉缩放
 - 生成json schema，用来从新渲染画布区域 y = f (x)

### 四、属性设置
- 选中画布中组件，得到当前组件的props，遍历出可修改的属性，在属性区域以对应的input进行操作，
- 修改属性时，生成新的props值，更新json schema，更新画布

### 五、功能区
- 删除
- 撤回
- 预览
- 导出
- 保存
- 发布
- ...
### 六、导出的json schema，跨平台

```javascript
{
  "name":"lowcode",
  "version":"0.0.0",
  "components":[
    type ：Components
    ...
  ], // 组件区集合
  "renderComponents"：{
    "page":"home", // 加载的页面
    "children":[
      {
        type ：Component 
        ...
      }
    ],
    "props":{
      "title":"",
      "width":"100%",
       ...
    } // 页面的props
  }
  "extends":{},
  ...
}
```

