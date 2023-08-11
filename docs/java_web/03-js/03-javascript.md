# 一、HelloWorld
## 1、目标
用户点击一个按钮，点击之后弹出一个警告框，警告框里显示HelloWorld。

## 2、代码
```javascript
<body>

    <button id="btn">点我，有本事你点我！</button>
    
</body>
<!-- 为什么放在 body 标签后面？ -->
<!-- 因为浏览器按顺序加载HTML标签，如果script标签在button标签前面， -->
<!-- 那么script标签中JavaScript代码执行时，就无法加载button标签对应的元素对象。 -->
<script type="text/javascript">
    // 1、查找按钮对象
    var btnEle = document.getElementById("btn");

    // ※在浏览器的控制台打印 btnEle 变量的值
    console.log("btnEle="+btnEle);

    // 2、声明一个函数，函数每次执行时都弹出一个alert()警告框
    function showAlert() {
        // ※alert()是系统内置的函数，可以直接调用
        alert("HelloWorld");
    }

    // 3、给按钮对象绑定单击事件响应函数
    // ※语法格式：元素对象.事件属性 = 响应函数的引用
    // ※注意：函数的名称就是函数的引用，后面千万不要加括号
    // ※函数名（或函数引用）后面加括号表示调用、执行这个函数
    btnEle.onclick = showAlert;

</script>
```

# 二、基本语法
## 1、数据类型
### ①基本数据类型
- 字符串：JavaScript中不区分字符和字符串，单引号、双引号定义的都是字符串。
- 数值类型：JavaScript中不区分整数和小数。
- 布尔类型：true和false

### ②引用类型
- 对象
- 数组
- 函数：JavaScript中函数也是一种特殊的对象
- 正则表达式

### ③类型之间的转换
- 字符串转换为布尔类型的规则是：非空字符串转换为true，空字符串转换为false
- 数值类型转换为布尔类型：非零的数值（哪怕是负数）：转换为true，为零的数值：转换为false
- 字符串可以自动转换为数值：在数学运算中转换
    - 但是注意：+号和字符串在一起会被理解为字符串连接

### ④两个特殊值
- NaN：not a number，意思是“非数字”，用来表示当前计算结果不是数字。
- undefined：未定义。

## 2、变量
- ES6之前的语法规则中，使用var关键词声明变量。
- ES6开始的语法规则中，除了var，还可以使用let关键词声明变量。
- 一个变量声明之后，可以赋值任何类型。
- 一个变量在使用过程中，仍然可以赋值各种不同的类型。
- JavaScript中标识符严格区分大小写。
- 在声明变量之前打印变量不会报错，只是返回undefined。

<br/>

建议：我们继续延续我们Java中开发的编码习惯即可。

<br/>

## 3、分支结构
注意：其它数据类型可以转回为布尔类型，例如："false"坑。<br/>

## 4、循环结构
```javascript
// 通过 for ... in 循环结构获取数组的各个下标
for(var index in arr) {
    // 根据下标从数组中读取对应的值
    var value = arr[index];
    console.log("for in value="+value);
}

console.log("===============");

var obj = new Object();
obj.objId = 5;
obj.objName = "tom";
obj.objAge = 20;

// 通过 for ... in 循环结构获取对象中每一个属性名
for(var propName in obj) {
    // 根据属性名从对象中读取对应的属性值
    console.log(propName + "=" + obj[propName]);
}
```

# 二、函数
## 1、系统内置函数
- alert()：弹出一个警告框。
- confirm()：弹出一个确认框。
- prompt()：弹出输入框
- isNaN()：判断传入的参数是否是非数字

## 2、用户自定义函数
### ①基本用法
```javascript
// 1、声明函数
// 形参列表只需要指定变量名，不需要写类型或var关键词
function sum(i, j) {
    return i+j;
}

// 2、调用函数
var sumResult = sum(5, 6);
console.log("sumResult="+sumResult);

// 3、以另一种方式声明函数
// 函数引用赋值给一个变量，此时函数本身不需要命名
// 没有起名字的函数，我们叫匿名函数
var showMessage = function(){
    console.log("I am a message.");
};

// 4、调用函数：变量名就相当于函数名
showMessage();
```

### ②神经病用法
```javascript
// 5、把函数名赋值给另一个变量
var printMessage = showMessage;

// 6、继续使用变量名作为函数名调用函数
printMessage();

// 7、把变量名作为另一个函数的参数传进去
function doPrintMessage(funName) {
    // 在函数名（或者说函数的引用）后面加括号表示调用函数
    funName();
}

// 8、把指向函数对象的变量作为参数传入doPrintMessage(funName)函数
doPrintMessage(printMessage);

// 9、声明一个函数，函数的返回值也是一个函数
function returnFun() {
    return function() {
        console.log("I am a very good message.");
    };
}

// 10、调用函数返回的函数
console.log(returnFun());
returnFun()();

// 11、原地调用一个匿名函数
(function (){
    alert("我已经疯了！");
})();
```

## 3、this关键字
函数中的this关键字指向调用函数的那个对象。
```javascript
// 12、声明一个函数测试this关键字
function showName() {
    console.log(this.stuName);
}

var stu01 = new Object();
stu01.stuName = "peter";

var stu02 = new Object();
stu02.stuName = "mary";

// 函数的引用赋值给对象的属性
stu01.showName = showName;
stu02.showName = showName;

// 调用函数
stu01.showName();
stu02.showName();
```

# 三、对象
## 1、创建对象
```javascript
// 1、创建对象方式一
var obj01 = new Object();

// 3、创建对象方式二
var obj02 = {
    "weaponId":666,
    "weaponName":"大狙",
    "weaponPrice":1000.22
};
```

## 2、给对象属性赋值
```javascript
// 2、给对象属性赋值就直接操作即可
obj01.soldierId = 5;
obj01.soldierName = "Jack";
obj01.soldierJob = "cooker";
```

# 四、数组
```javascript
// 1、创建数组方式一
var arr01 = new Array();
console.log(arr01);

// 2、创建数组方式二
var arr02 = ["aaa", "bbb", "ccc"];
console.log(arr02);

// 3、调用push()方法向数组存入元素（相当于堆栈操作中的压栈）
arr01.push("apple");
arr01.push("banana");
arr01.push("orange");
console.log(arr01);

arr02.push("ddd");
arr02.push("eee");
arr02.push("fff");
console.log(arr02);

// 4、和压栈对应的操作是弹栈
var popValue = arr02.pop();
console.log(popValue);
console.log(arr02);

// 5、调用reverse()方法把数组元素倒序排列
arr02.reverse();
console.log(arr02);

// 6、把数组元素连成字符串
var arr02Str = arr02.join(",");
console.log(arr02Str);

// 7、把字符串根据指定的符号拆分为数组
arr02 = arr02Str.split(",");
console.log(arr02);

// 8、在指定索引位置删除指定个数的数组元素
arr02.splice(2, 2);
console.log(arr02);

// 9、数组切片
arr02.push("uuu", "vvv", "www", "xxx", "yyy", "zzz");
console.log(arr02);

// 从 start 参数指定的索引开始，到 end 参数指定的索引结束
// 选取半闭半开区间进行切片（也就是说不包括end索引指向的元素）
var arr03 = arr02.slice(2, 5);
console.log(arr03);
```

# 五、JSON格式
## 1、语法
- JSON格式边界的符号只有两种：
    - {}表示这个JSON数据是一个JSON对象
    - []表示这个JSON数据是一个JSON数组
- JSON对象的语法
    - {}中是由多组key:value对组成的
    - key:value对之间用逗号分开
    - key和value之间用冒号分开
    - key固定就是字符串类型
- JSON数组的语法
    - []中是由多组value组成的
    - value之间用逗号分开
- value的类型：不管在JSON对象还是JSON数组中，value类型都适用下面的规则
    - value可以是基本数据类型
    - value可以是引用数据类型
        - JSON对象
        - JSON数组

<br/>

```json
# JSON对象
{"stuId":10, "stuName":"tom"}
# JSON数组
["aaa", "bbb", "ccc"]
# 嵌套的JSON对象
{
    "stuId":10, 
    "stuName":"tom",
    "school": {
        "schoolName": "atguigu",
        "schoolAge": 10,
        "subjectArr": ["Java", "H5", "Big Data"]
    }
}
# 嵌套的JSON数组
[
    {
        "shenzhen":"number one"
    },
    {
        "wuhan":"number two"
    },
    {
        "shanghai":"number three"
    }
]
```

## 2、JSON对象转字符串
```javascript
JSON.stringify(jsonObj);
```

## 3、字符串转JSON对象
```javascript
JSON.parse(jsonStr);
```

# 六、引入方式
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript引入方式</title>
</head>
<body>

    <!-- 通常不建议使用，因为这种方式意味着结构和行为耦合。 -->
    <button onclick="alert('Hello!');">引入方式一：内嵌到HTML标签</button>

    <!-- JavaScript 代码仅限于当前页面使用。 -->
    <button id="btn01">引入方式二：内嵌到script标签</button>

    <!-- JavaScript 代码不局限于当前页面使用。 -->
    <!-- 或引入其它JavaScript库或框架。 -->
    <button id="btn02">引入方式三：引入外部JS文件</button>
    
</body>
<script>
    document.getElementById("btn01").onclick = function(){alert("HelloWorld!")};
</script>

<!-- 使用 src 属性指定外部 JS 文件的路径 -->
<!-- 如果script标签是用来引入外部 JS 文件，那么script标签内部什么代码都不要写 -->
<script src="script/work.js">
    alert("我是来捣乱的！");
</script>

<!-- 如果script标签是用来引入外部 JS 文件，那么script标签不要当作单标签结束 -->
<!-- <script src="script/work.js"/> -->
</html>
```

# 七、BOM
## 1、概念
BOM：Browser Object Model浏览器对象模型。这是为了方便我们在JavaScript程序中操作浏览器的特定功能而封装的一系列对象。
<br/>

## 2、思想
现实世界的事物要体现到IT系统中，就需要把现实世界的事物进行抽象，抽取现实事物的主要特征，然后在IT系统中创建一个模型来对应。模型在代码中通过对象来体现。<br/>
比如：现实世界中的一个人，我们开发员工档案管理系统就只关注这个人作为员工的这方面。<br/>
在员工信息中，我们提取下面数据到程序中：
- 员工编号
- 员工姓名
- 员工籍贯
- 员工所在部门

<br/>

有了这些信息就可以声明一个类来代表现实世界的员工。

<br/>

总结：现实世界事物 --> 抽象出模型 --> 封装为对象 --> 通过对象操作数据

## 3、操作举例
```javascript
<body>

    <button id="btn01">点我去尚硅谷学习！</button>
    <button id="btn02">点我去尚硅谷学习！[省略了href属性]</button>
    
</body>
<script>
    // 1、系统内置了window对象代表浏览器窗口，可以直接使用
    // 2、读操作
    // window.location.href返回浏览器地址栏当前的 URL 地址
    console.log(window.location.href);

    // 3、写操作
    document.getElementById("btn01").onclick=function(){
        window.location.href="http://www.atguigu.com";
    };

    document.getElementById("btn02").onclick=function(){
        window.location="http://www.atguigu.com";
    };

</script>
```

# 八、DOM [重点]
## 1、概念
DOM：Document Object Model文档对象模型。<br/>
- 模型：把整个HTML文档作为一个模型
- 对象：用window.document对象来代表HTML文档
- 浏览器加载机制：浏览器把HTML文档加载到内存的过程中，每读取一个HTML标签就创建一个元素对象，这个元素对象会存入document对象中。

## 2、节点
HTML文档中所有对象都被看作节点（Node）。节点在进一步细分：
- 元素节点（Element）：对应HTML标签
- 属性节点（Attr）：对应HTML标签中的属性
- 文本节点（Text）：对应文本标签体

<br/>

> 这几个类型之间是父子关系。Element、Attr、Text都可以看做是Node的子类。<br/>
> 这个说法是帮助我们理解，实际上JavaScript这门语言中没有“类”的概念。

<br/>

## 3、DOM树
### ①元素之间的关系
- 纵向：
    - 父子关系
    - 先辈和后代的关系
- 横向：兄弟关系

<br/>

### ②元素和属性的关系
把HTML标签封装为元素对象，HTML标签的属性就是元素对象的属性。<br/>

### ③元素和文本的关系
元素对象和它里面的文本节点对象也是父子关系。<br/>

## 4、元素查找
### ①整个文档范围内查找
使用document对象调用getElementByXxx()方法就是在整个文档范围内查找。
- document.getElementById("id值") 返回id值对应的单个对象。
- document.getElementsByTagName("标签名") 返回标签名对应的多个对象。
- document.getElementsByName("表单标签的name属性值") 根据表单标签的name属性值查询对象。

<br/>

### ②指定元素范围内查找
- 全部子节点：元素对象.childNodes
- 全部子元素：元素对象.children
- 第一个子元素：元素对象.firstElementChild
- 最后一个子元素：元素对象.lastElementChild

<br/>

### ③查找元素的父元素
- 方式一：parentElement
- 方式二：parentNode

### ④查找元素的兄弟元素
- 前一个兄弟元素：previousElementSibling
- 后一个兄弟元素：nextElementSibling

## 5、读写元素属性
- 读操作：元素对象.属性名
- 写操作：元素对象.属性名=新属性值

## 6、读写文本标签体
### ①innerText属性
- 读操作：元素对象.innerText
- 写操作：元素对象.innerText=新文本值
注意：新文本值中如果包含HTML标签代码，不会被解析

### ②innerHTML属性
- 读操作：元素对象.innerHTML
- 写操作：元素对象.innerHTML=新文本值
注意：新文本值中如果包含HTML标签代码，能够被解析

# 九、事件驱动 [重点]
## 1、类比
|生活中的例子|事件驱动|
|---|---|
|地雷|事件响应函数|
|兵工厂生产地雷|声明事件响应函数|
|找到埋地雷的位置|把绑定事件响应函数的元素对象给查出来|
|埋地雷|把事件响应函数绑定到元素上|
|触发引信|用户在浏览器窗口进行操作的时候触发了事件|
|地雷爆炸|事件响应函数执行|

## 2、事件类型
### ①文本框值改变事件
```javascript
// 1、查找文本框元素对象
var inputEle = document.getElementsByName("username")[0];

// 2、声明事件响应函数
function showUsername() {
    // 我们希望在这个函数中获取到用户输入的新值
    // this 在事件响应函数中代表触发事件的元素对象
    console.log("用户输入的新数据：" + this.value);
}

// 3、事件绑定
// 事件类型：值改变
// ※特殊说明：值改变事件要触发需要满足两个条件
// 条件1：当前控件失去焦点
// 条件2：值确实发生了改变
inputEle.onchange = showUsername;
```

### ②失去焦点
```javascript
// 事件类型：失去焦点
inputEle.onblur = function() {
    console.log("文本框失去了焦点。");
};
```

### ③鼠标移动事件
HTML设置：
```html
<img id="dongGe" src="images/wanghaodong.jpg" />
```

<br/>

CSS样式设置：
```css
img {
    display: none;
}
```

<br/>

JavaScript代码：
```javascript
// 1、获取div元素对象
var divEle = document.getElementById("swimmingPool");
var imgEle = document.getElementById("dongGe");

// 2、绑定事件响应函数
divEle.onmousemove = function() {
    // 3、打印事件对象
    // console.log(event);

    // 4、通过事件对象获取鼠标的坐标
    // console.log(event.clientX + " " + event.clientY);

    // 5、把鼠标坐标信息写入div中，作为它的文本值
    this.innerText = event.clientX + " " + event.clientY;

    // 6、让图片显示
    imgEle.style = "display:block;position:absolute;top:"+(event.clientY+10)+"px;left:"+(event.clientX+10)+"px;";
};
```

## 3、取消控件默认行为
### ①提出问题
- 删除记录的超链接：点击后我们希望弹出确认框，用户如果点击取消，则不跳转页面。
- 表单验证：点击提交按钮之后，执行表单验证，表单验证如果通不过，那么就不提交表单。

### ②默认行为
- 超链接点击之后会跳转页面
- 表单的提交按钮点击之后会提交表单

### ③取消默认行为实现方式
```javascript
// 调用事件对象的方法
event.preventDefault();
```

## 4、取消事件冒泡
### ①概念
每一个元素处理完事件（事件响应函数执行完）之后，默认会把事件向上传递给自己的父元素，父元素如果没有绑定对应类型的事件响应函数，那么就什么都不会发生。如果父元素绑定了对应的事件响应函数，就会导致父元素再处理一遍这个事件

### ②阻止的方式
```javascript
event.stopPropagation();
```

## 5、回调函数
### ①普通函数
我们自己声明一个函数，我们自己调用。<br/>

### ②回调函数
我们自己声明一个函数，交给系统来调用。<br/>
```javascript
// 这里我们声明的函数，仅仅只是声明了，我们自己并没有在后面的代码中去调用它。
// 函数的引用赋值给onclick属性之后，我们就没有再管它了
// 浏览器在监听到用户单击的事件之后，才调用这个函数
document.getElementById("outerDiv").onclick = function() {
    alert("你点击了【外层】div");
};
```

<br/>

### ③Java中的回调函数
```java
public class RunnableTest{

    public static void main(String[] args){
        Runnable runnable = new Runnable(){

            // 我们声明了这个方法，但是真正调用的时候是系统来调用的
            public void run() {
                System.out.println(Thread.currentThread().getName());
            }
        };

        // 调用 start() 方法启动线程
        new Thread(runnable).start();
    }

}
```

<br/>

# 十、正则表达式
## 1、概念
根据功能的需求，在原始字符串数据中，把我们想要的匹配出来。

## 2、应用场景
- 模式验证：用正则表达式规定一个格式，检查字符串是否满足这个格式。比如：检查手机号、邮箱、身份证号……
- 匹配读取：在原始字符串数据中，把我们需要的字符串读取出来。
- 匹配替换：在原始字符串数据中，把匹配固定模式的字符串替换成指定的数据。

## 3、创建正则表达式
### ①对象形式
```javascript
var source = "Hello tom,good afternoon.";

// 1、创建正则表达式对象
// 方式一：对象方式
// reg 是 regular 的缩写，意思是正规的、常规的
// exp 是 expression 的缩写，意思是表达式
// 在 RegExp 构造器中传入正则表达式本身
// "a" 正则表达式表示：被检测的字符串，有a这个字符就匹配，否则不匹配
var reg = new RegExp("a");

var checkResult = reg.test(source);
console.log("checkResult = " + checkResult);
```

### ②直接量形式
```javascript
// 方式二：直接量方式
// 类似的，JSON 对象、JSON 数组也相当于是用直接量的方式创建
// {"userName":"tom"} ["a","b","c"]
reg = /w/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);
```

## 4、正则表达式语法
### ①正则表达式的组成
#### [1]普通字符
用字符本身进行匹配。
```javascript
reg = /Hello/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);
```

#### [2]元字符
使用一些在正则表达式中有特定含义的字符，来检测字符串
```javascript
// ^ 表示：要求目标字符串以指定内容开头
// ^T 表示：要求目标字符串以T开头
reg = /^T/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);
```

|代码|说明|
|-|-|
|.|匹配除换行字符以外的任意字符。|
|\w|匹配字母或数字或下划线等价于[a-zA-Z0-9 _]|
|\W|匹配任何非单词字符。等价于[^A-Za-z0-9 _]|
|\s|匹配任意的空白符，包括空格、制表符、换页符等等。等价于[\f\n\r\t\v]。|
|\S|匹配任何非空白字符。等价于[^\f\n\r\t\v]。|
|\d|匹配数字。等价于[0-9]。|
|\D|匹配一个非数字字符。等价于[^0-9]|
|\b|匹配单词的开始或结束|
|^|匹配字符串的开始，但在[]中使用表示取反|
|$|匹配字符串的结束|

### ②字符集合
如果我们想要设定的规则，是一组字符中的某一个，那么就可以使用字符集合来设置。字符集合用[]定义。

#### [1]匹配列表中任何一个
```javascript
reg = /[oda]/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);

reg = /[xyz]/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);
```

#### [2]匹配列表外任何一个
```javascript
// [^oda]表示：目标字符串不能包含o、d、a中的任何一个
reg = /[^oda]/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);
```

#### [3]用字符范围定义集合
```javascript
// [A-Z]表示：包含大写字母中的任何一个即可
// [a-z]表示：包含小写字母中的任何一个即可
// [0-9]表示：包含数字中的任何一个即可
// [A-Za-z]表示：包含字母中的任何一个即可
// [A-Za-z0-9]表示：包含字母、数字中的任何一个即可
reg = /[A-Z]/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);
```

### ③字符出现次数
|代码|说明|
|-|-|
|*|出现零次或多次|
|+|出现一次或多次|
|?|出现零次或一次|
|{n}|出现n次|
|{n,}|出现n次或多次|
|{n,m}|出现n到m次|

## 5、举例
### ①格式验证
注意：此时是使用正则表达式对象调用方法
```javascript
var source = "Hello tom!Good morning!";
var reg = /W/;
var checkResult = reg.test(source);
console.log("checkResult = " + checkResult);

reg = /G/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);
```

### ②匹配读取
注意：此时是使用字符串对象调用方法
```javascript
reg = /[A-Z]/;
var matchArray = source.match(reg);
console.log(matchArray);
```

### ③替换
注意：此时是使用字符串对象调用方法
```javascript
reg = /o/;
var replaceResult = source.replace(reg, "*");
console.log(replaceResult);
```

### ④全文查找
```javascript
reg = /[A-Z]/g;
matchArray = source.match(reg);
console.log(matchArray);

reg = /o/g;
replaceResult = source.replace(reg, "*");
console.log(replaceResult);
```

### ⑤忽略大小写
```javascript
reg = /[A-Z]/gi;
matchArray = source.match(reg);
console.log(matchArray);
```

### ⑥使用元字符
```javascript
reg = /^H/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);

reg = /^U/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);

// ^H\.$表示要求目标字符串以H开头，以点结尾。
// ^符号必须写在前面，$符号必须写在后面
// \.表示对.进行转义，因为.本身是匹配任意一个字符
// .*表示任意字符可以出现零次或多次
reg = /^H.*\.$/;
checkResult = reg.test(source);
console.log("checkResult = " + checkResult);
```

### ⑦使用字符集合
```javascript
var splitArr = source.split(" ");
reg = /^[a-z].*[a-z]$/;
for (var i = 0; i < splitArr.length; i++) {
    var value = splitArr[i];
    console.log("value = " + value + " " + reg.test(value));
}
```