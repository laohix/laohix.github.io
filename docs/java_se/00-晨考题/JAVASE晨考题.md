# 晨考题

## day01

1.jdk,jre,jvm分别是什么，有什么关系

> jdk：Java开发工具包
>
> jre：Java运行环境
>
> jvm：Java虚拟机
>
> jdk包含jre，jre包含jvm

2.环境变量配置为jdk的哪个目录

> bin目录

3.编译命令是什么，编译是将什么文件编译为什么文件

> javac
>
> 将.java文件编译成.class文件

4.使用什么命令运行class文件

>java 类名

5.public ，class，static，void，main(String[] args)单词表示什 么意思

>public：公共的
>
>class：类
>
>static：静态的
>
>void：空的，无效的
>
>main：主要的
>
>String：字符串
>
>args：arguments，参数，复数

6.java跨平台的核心是什么

> jvm虚拟机，jvm相当于一个软件，在不同的平台模拟相同的运行环境，实现Java程序的跨平台

7.公开的类，名称有什么要求

> 类名与文件名相同

8.一个源文件中可以书写多个类吗

> 可以，但是公共的类只能有一个

9.一个源文件中是否可以包含两个同名的类

> 不能



## day02

1.变量的命名规范

> 使用单词，以字母、下划线、美元符号、人民币符号开头，可以包含数字，见名知意

2.类名的命名规范

> 大写驼峰

3.自动类型转换的前提条件？

> 1、两种类型要兼容
>
> 2、目标类型范围大于原类型范围

4.强制类型转换的写法？

> 目标类型 变量名 = (目标类型) 原类型 变量名;

5.八种基本数据类型有哪些？

> 4类8种：整型、浮点型、布尔类型、字符类型
>
> 整数：byte、short、int、long
>
> 浮点型：float、double
>
> 布尔类型：boolean
>
> 字符类型：char

6.什么是常量

> 程序运行期间不能改变的值

7.byte的取值范围是什么？为什么取这个范围

> -128 ~ 127
>
> byte占1个字节，1个字节占8位，每位只能存1或0，所以最大值为128，最小值为-127

8.String属于基本数据类型还是引用数据类型？

> 引用数据类型

9.什么是标识符？

> 凡是需要我们自定义的内容就是标识符



## day03

1.八种基本数据类型有哪些？

> 4类8种：byte、short、int、long、float、double、boolean、char

2.分别写明你知道的位运算符的运算方式

> “<<”：左移运算符，左移几位，表示乘以2的几次方
>
> “>>”：右移运算符，右移几位，表示除以2的几次方
>
> “>>>”：无符号右移，空缺位以0填充，也就是最终都会变成正数
>
> “&”：与运算，二进制同为1则为1，否则为0
>
> “|”：或运算，二进制有1则为1，否则为0
>
> “^”：异或运算，二进制相同为0，不同为1
>
> “~”：取反运算，二进制全部取反，0为1，1为0

3.自动类型转换的前提条件？

>1、类型要兼容
>
>2、目标类型范围大于原类型范围

4.强制类型转换的写法？

> 目标类型 类型名 = (目标类型) 原类型 类型名

5.++表示什么意思？在前在后的区别

> 表示变量自增1
>
> 在前：先自增，再计算表达式
>
> 在后：先计算表达式，再自增

6.a*=3表示什么意思？

> a = a * 3

7.&&和&的区别?

> “&&”：短路与，如果前面的表达式不成立（值为false），后面的表达式不再执行
>
> “&”：与，无论前面表达式是否成立，所有的表达式都要执行

8.||和|的区别？

> “||”：短路或，如果前面的表达式成立（值为true），后面的表达式将不再执行
>
> “|”：或，无论千面的表达式是否成立，所有的表达式都要执行

9.以下语句将执行什么？ System.out.print(20==20 ? "条件成立":"条件不成 立");

> 条件成立

10.如何接收用户输入的信息，分别写明接收不同类型数据的方法

> Scanenr工具类，Scanner input = new Scanner(System.in);
>
> 字符串：next()、nextLine()
>
> 整数：nextByte()、nextShort()、nextInt()、nextLong()
>
> 浮点数：nextFloat()、nextDouble()
>
> 布尔：nextBoolean()



## day04

1.if(表达式) 表达式的最终值为什么类型？

> 布尔类型

2.多重if用来处理什么样的情况？

> 处理某个值处于某个连续区间的情况

3.多重if中的else必须写吗

> 不是必须

4.Scanner类接收整数，浮点数，字符串分别使用哪些方法

> 整数：nextByte()、nextShort()、nextInt()、nextLong()
>
> 浮点数：nextFloat()、nextDouble()
>
> 字符串：next()、nextLine()

5.Scanner类需要导入哪个包？如何导包

>import java.utils.Scanner;

6.多重if处理区间的值，条件编写有什么顺序要求

>升序或者降序，不能时乱序

7.switch支持的数据类型以及break在switch中的作用

> byte、short、int、字符、字符串、枚举
>
> 跳出switch结构

8.变量的命名规范

> 以字母、下划线、美元符号、人民币符号开头、可以包含数字、小写驼峰命名、见名知意、有意义

9.比较字符串的内容使用什么方法？

> equals()

10.case后边的值可以有重复的吗？比如有两个 case 2: ……case 2:……

> 不能重复

11.学过哪些循环，分别有什么特点，循环四个必不可少 的部分是什么

> while(){…}：先判断，再执行循环体
>
> do…while()：先执行循环体，再判断
>
> for(){}：先判断，再执行循环体
>
> 循环计数器变量初始化、循环判断条件、循环体、循环计数器变量变化

12.三种循环的执行和应用场景区别

> while和do…while主要用于循环次数不确定的情况，也可以用于循环次数的确定的情况
>
> for主要用于循环次数确定的情况



## day05

1.如何定义方法，定义在哪里？

> 访问修饰符 返回值类型 方法名(参数…) {
>
> ​	方法体
>
> }
>
> 定义再类中，与main方法平级

2.如何调用方法？

> 在要调用方法的地方：方法名(实参)

3.形参和实参的区别？形参规定了哪些内容

> 形参：形式参数，在定义方法时，规定了参数的个数、类型、顺序
>
> 实参：实际参数，在调用方法时传递的参数，必须按照形参的规定
>
> 形参规定了参数的个数、类型、顺序

4.break和continue的区别

> break：可以使用在switch和循环结构中，在switch中表示跳出switch结构，在循环中，表示结束当前循环
>
> continue：只能在循环结构中使用，表示跳过本次循环，继续下一次循环

5.双重循环外层循环变量与内层循环变量的关系

> 外层循环变量变化一次，内层循环变量变化一轮

6.switch支持的数据类型

> byte、short、int、char、String、枚举

7.循环中存在switch，switch中的break会影响循环吗

> 不会

8.描述局部变量：定义位置 默认值 作用范围 是否可重名等几个方面

> 定义位置：方法体中
>
> 默认值：没有默认值，必须先赋值，再使用
>
> 作用范围：离定义位置对最近的大括号以内
>
> 是否可以重复：重合范围内不能重名，不重合的范围可以重名
>
> 存储位置：基本数据类型都在栈中，引用数据类型，名字在栈，值在堆中
>
> 生命周期：随着方法进栈而创建，随着方法出栈而销毁

9.包名的命名规范，类名的命名规范

> 包：域名反写，全部小写，中间以点分隔，中间存在几个点表示有几个文件夹，不能以点开头或结尾
>
> 类：大写驼峰



## day06

1.用一句话描述数组（三个特点）

> 一块连续的存储空间，存储多个类型相同的值，长度固定

2.数组的长度是哪个属性

> length

3.数组的下标从几开始

> 0

4.数组在内存中的位置，数组名字和数组中的值

> 数组名字在栈，值在堆中

5.创建数组的四种方式

> 静态初始化：
>
> 1、先创建再初始化
>
> 数据类型[] 数组名;
>
> 数组名 = new 数据类型[数组长度];
>
> 2、创建并初始化
>
> 数据类型[] 数组名 = new 数据类型[数组长度];
>
> 动态初始化：
>
> 3、初始化并赋值（繁）
>
> 数据类型[] 数组名 = new 数据类型[]{1, 2, 3};
>
> 4、初始化并赋值（简）
>
> 数据类型[] 数组名 = {1, 2, 3, 4};

6.求数组中最大值的思路是什么

> 1.设置数组第一个数为最大值
>
> 2.依次与其他元素比较，如果有更大的值，交换最大值的头衔

7.分别写明各个类型数组的默认值

> byte：0
>
> short：0
>
> int：0
>
> long：0L
>
> float：0.0F
>
> double：0.0
>
> char：\u0000
>
> boolean：false
>
> 其他引用类型：null

8.数组长度为3，添加下标为3的元素可以吗？会发生什么

> 不可以，数组下标越界异常，ArrayOutBoundsException

9.return关键字的几种使用情况 分别说明

> 1.有返回值的方法，返回返回值类型或子类的值
>
> 2.没有返回值的方法，表示结束方法
>
> 3.在分支结构中，确保每个分支都有返回

10.方法重载的概念

> 在同一个类或者父子类中，方法名相同，参数的个数、类型、顺序不同，与访问权限修饰符、返回值类型无关



## day07

1.用一句话描述数组

> 一块连续的存储空间，存储多个类型相同的值，长度固定

2.值传递和引用传递的区别

> 值传递：传递的是值，方法中对变量的修改，不会影响原来的数
>
> 引用传递：传递的是地址值，方法中对变量的修改，会影响原来的值
>
> Java中没有引用传递，“引用传递”传递的依然是值，是地址值

3.Arrays类toString，copyOf，sort，binarySearch方法的作用

> toString()：将数组中的元素拼接转换为字符转返回
>
> copyOf()：复制数组
>
> sort()：将数组中的元素进行升序排序（快速排序）
>
> binarySearch()：对数组进行二分查找

4.复制数组的几种方式

> 1.循环遍历数组复制
>
> 2.System.arraycopy(src, srcPos, dest. destPos, length)方法
>
> 3.Arrays.copyOf(scr, length)方法

5.手写冒泡排序

>```java
>for (int i = 0; i < arr.length - 1; i++) {
>    boolean flag = true;
>    for (int j = 0; j < arr.length - 1 - i; j++) {
>        if (arr[j] > arr[j + 1]) {
>            int temp = arr[j];
>            arr[j] = arr[j+1];
>            arr[j+1] = temp;
>            flag = false;
>        }
>    }
>    if (flag) {
>        return;
>    }
>}
>```

6.break和continue的区别？

> break：用于switch或循环语句中，用于跳出switch结构或结束当前循环结构
>
> continue：只能用于循环结构，用于跳过这一次循环，继续下一次循环

7.外层循环与内层循环的关系？

> 外层循环变化一次，内层循环变化一轮

8.描述局部变量特点，从以下几个方法面：定义位置，作 用范围，是否可以重名，默认值等

> | 描述     | 局部变量                                               | 实例变量                                       |
> | -------- | ------------------------------------------------------ | ---------------------------------------------- |
> | 定义位置 | 方法体中                                               | 类中                                           |
> | 作用范围 | 离定义位置最近的大括号之内                             | 整个类中                                       |
> | 默认值   | 没有默认值，必须先赋值，再使用                         | 与数组默认值相同                               |
> | 重名问题 | 重合范围内不能重名，不重合范围内可以重名               | 可以与局部变量重名                             |
> | 存储位置 | 基本数据类型值存储在栈中，引用类型名字在栈中，值在堆中 | 对象存储在堆中，所以实例变量全部存在堆中       |
> | 生命周期 | 随着方法进栈而创建，随着方法出栈而销毁                 | 随着对象的创建而创建，随着对象被垃圾回收而销毁 |

9.选择排序的比较原理

> 选择一个值，依次与其他元素比较，遇到需要交换的元素，先不交换，用要交换位置的值继续向后比较，等待一轮比较结束之后，再进行交换
>
> ```java
> for (int i = 0; i < arr.length - 1; i++) {
>     int index = i;
>     for (int j = i + 1; j < arr.length; j++) {
>         if (arr[index] > arr[j]) {
>             index = j;
>         }
>     }
>     if (index != i) {
>         int temp = arr[i];
>         arr[i] = arr[index];
>         arr[index] = temp;
>     }
> }
> ```

10.数组在内存中的位置，名字和值分别存在哪里

> 名字在栈，值在堆中

11.二分查找的比较原理，有什么要求

> 1.先设定一个中间值
>
> 2.比中间值大，从右边查找；比中间值小从左边查找
>
> 3.重复以上操作，直到中间值等于要查找的值或者没有找到结束
>
> ```java
> public int binarySearch(int[] arr, int num) {
>     int left = 0;
>     int right = arr.length;
>     
>     while (left <= right) {
>         int middle = (left + right) / 2;
>         if (num > arr[middle]) {
>             left = middle + 1;
>         } else if (num < arr[middle]) {
>             right = middle - 1;
>         } else if (num == arr[middle]) {
>             return middle;
>         }
>     }
>     return -1;
> }
> ```



## day08

1.类和对象什么关系

> 类是对象的抽象
>
> 对象是类的具体

2.什么是属性和方法

> 一类事物共有的特征，称之为属性
>
> 一类事物共有的行为，称之为方法

3.普通方法的定义格式

> 访问修饰符 返回值类型 方法名(参数…) {
>
> ​	方法体
>
> }

4.什么是形参，什么是实参

> 形参：形式参数，定义方法时书写的参数，规定了参数的个数、类型、顺序
>
> 实参：实际参数，调用方法时书写的参数，必须按照形参的规定

5.怎样创建对象

> 类名 对象名 = new 类名();

6.怎样访问对象的属性和方法

> 对象名.属性名;
>
> 对象名.方法名(参数);

7.main方法能直接访问对象的属性和方法吗

> 不能，必须先new对象，再使用对象名加点访问属性或方法

8.你怎么理解万物皆对象

> 一切事物都可以通过分析其属性特征和方法行为来具体表示

9.局部变量和实例变量的区别

> | 描述     | 局部变量                                           | 实例变量                                       |
> | -------- | -------------------------------------------------- | ---------------------------------------------- |
> | 定义位置 | 方法体中                                           | 类中                                           |
> | 作用范围 | 定义位置到最近的大括号内                           | 整个类中                                       |
> | 默认值   | 没有默认值，必须先赋值，再使用                     | 和数组的默认值一样                             |
> | 重名问题 | 重合范围内不能重名，不重合范围可以重名             | 可以和局部变量重名，就近原则                   |
> | 存储位置 | 基本数据类型在栈中，引用数据类型名字在栈，值在堆中 | 对象在堆中，所以全部在堆中                     |
> | 生命周期 | 随着方法进栈而创建，随着方法出栈而销毁             | 随着对象的创建而创建，随着对象被垃圾回收而销毁 |



## day09

1.封装的作用，实现封装的步骤？

> 作用：防止给属性错误的赋值，减少构建大型项目的风险，提高代码的可重用性，降低耦合度
>
> 步骤：
>
> 1.属性私有化
>
> 2.对私有属性提供对外公开的get、set方法对其取值和复制操作

2.封装中get和set方法分别作用？

> get：取值
>
> set：属性赋值

3.现有Student类属性：String name,int age，手写实现封装

> ```java
> public class Student {
>     private String name;
>     private int age;
>     
>     public void setName(String name) {
>         this.name = name;
>     }
>     public void setAge(int age) {
>         this.age = age;
>     }
>     public String getName() {
>         return this.name;
>     }
>     public int getAge() {
>         return this.age;
>     }
> }
> ```

4.根据第三题提供的属性手写所有的构造方法 只写构造声明即可

> ```java
> public Student() {}
> public Student(String name) {
>     this.name = name;
> }
> public Student(String name, int age) {
>     this.name = name;
>     this.age = age;
> }
> ```

5.包的命名规范是什么？

> 域名反写，全部小写，中间使用点隔开，中间有几个点，表示有几个子文件夹，不能以点开头或结尾

6.this关键字的含义和适用场景

> this表示本类当前对象
>
> 1.当局部变量与实例属性同名时，使用this.属性名来区分
>
> 2.this调用本类方法
>
> 3.this调用本类构造方法，必须写在第一句

7.类的访问修饰符有哪些，分别代表什么意义？

> public：公开的，任何位置都能访问
>
> 默认不写：默认的，只能在本包中访问

8.类的成员访问修饰符有哪些，分别代表什么意义？

> | 修饰符    | 本类中 | 同包中 | 不同包，子类 | 任何位置 |
> | --------- | ------ | ------ | ------------ | -------- |
> | private   | √      |        |              |          |
> | 默认不写  | √      | √      |              |          |
> | protected | √      | √      | √            |          |
> | public    | √      | √      | √            | √        |

9.继承关键字，子类与父类的关系

> 关键字：extends
>
> 子类和父类是is-a的关系，子类是父类

10.super关键字的含义和适用场景

> super表示引用父类的信息（不是对象）
>
> 1.访问父类的属性，super.属性名
>
> 2.访问父类方法，super.方法名(参数)
>
> 3.子类构造访问父类构造方法，super()，必须写在第一句，可以与this同时使用，但是只能调用父类或子类构造的其中一个，不能同时调用



## day10

1.静态变量使用什么修饰，特点是什么？与非静态变量有什么区别？

> static
>
> 表示静态变量，只在内存中存在一份，静态变量属于整个类，不属于任何对象，但被本类的所有对象所共享
>
> 区别：
>
> 静态变量属于类，只存在一份，且在类加载的时候就初始化了
>
> 非静态变量属于实例，每创建一个对象就存在一份，没有关联

2.父子类之间构造方法的访问规则

> 1.子类默认访问父类的无参构造，除非手动访问了父类的有参构造
>
> 2.子类必须访问父类的无参构造或有参构造其中的一个

3.构造方法的特点

> 无参构造默认存在
>
> 如果书写了有参构造，那么无参构造将被覆盖，如需使用必须显示书写

4.静态代码块什么时候执行，有什么执行规则

> 类加载的时候执行，如果有多个，按照书写时的顺序执行，每个只执行一次

5.静态方法如何访问？

> 在本类中，直接使用方法名访问
>
> 不再本类中，使用类名点方法名访问

6.this和super访问本类以及父类的构造方法有什么要求

> 必须写在方法的第一句

7.能不能同时在一个构造方法中使用this和super

> this和super可以同时使用
>
> this和super调用构造都必须写在第一句
>
> 所以不能同时使用this和super调用构造方法

8.静态方法中如何访问实例属性和方法？

> 先创建对象，再通过对象名加点访问属性和方法

9.静态方法中能不能使用this和super关键字？

> 不能

10.对象创建的过程

> 1.先加载类对应的class文件（只加载一次，静态变量有了默认值）
>
> 2.在堆中开辟对应的空间（实例属性有了默认值）
>
> 3.将堆中的地址赋值为栈中的引用



## day11

1.Object类常用的方法用哪些？

> toString()
>
> equals()
>
> hashCode()
>
> wait()
>
> notify()
>
> notifyAll()
>
> clone()
>
> getClass()
>
> finalize()

2.编写一个Student有属性name和idCard,实现封装并重写 equals方法，如果name和idCard都相等则比较为true； (伪代码)

>```java
>public class Student {
>    private String name;
>    private String idCard;
>    // 构造方法
>    public Student() {}
>    public Student(String name, String idCard) {
>        this.name = name;
>        this.idCard = idCard;
>    }
>    // get set
>    public setName(String name) {
>        this.name = name;
>    }
>    public setIdCard(String idCard) {
>        this.age = age;
>    }
>    public String getName() {
>        return this.name;
>    }
>    public String getIdCard() {
>        return this.idCard;
>    }
>    // toString
>    public boolean equals(Object obj) {
>        if (this == obj) {
>            return true;
>        }
>        if (!obj instanceof Student) {
>            return false;
>        }
>        Student stu = (Student) obj;
>        if (this.name.equals(stu.name) && this.idCard.equals(stu.idCard)) {
>            return true;
>        }
>        return false;
>    }
>    // hashCode
>    public int hashCode() {
>        int result = 1;
>        int prime = 31;
>        result = result * prime + this.name == null ? 0 : this.name.hashCode();
>        result = result * prime + this.idCrad == null ? 0 : this.idCard.hashCode();
>        return result;
>    }
>}
>```

3.在上个类的基础上重写toString方法，输出对象信息

> ```java
> public String toString() {
>     return "Student: {name = " + this.name + ", age = " + this.age + "}"
> }
> ```

4.子类可以继承父类的哪些内容？

> 在任意位置，子类可以继承父类public、protected修饰的属性和方法
>
> 在同一个包中，子类可以访问父类默认不写修饰的属性和方法
>
> 子类不能继承父类private修饰的属性和方法

5.==和equals的区别，详细说明基本和引用数据类型

> ==：
>
> 1.基本类型比较值
>
> 2.引用类型比较地址值
>
> equals：
>
> 1.默认比较的是两个对象的地址值
>
> 2.String比较的地址值和内容
>
> 3.也可以重写equals方法实现自定义比较规则

6.为什么重写equals要重写hashCode方法

> 1.默认情况下，两个对象equals比较为true，hashCode的值也相等，我门重写了equals方法，为了保持默认的规则，所以也要重写hashCode方法
>
> 2.散列数据类型中，同时以equals比较为true和hashCode值相等作为去重的判断条件

7.static可以修饰哪些内容，分别有什么特点

> static修饰属性：静态变量，内存中只存在一份，属于类，不属于对象
>
> static修饰方法：静态方法，属于类，使用类名调用
>
> static修饰代码块：静态代码块，类加载时执行，只执行一次

8.描述方法重写

> 1.父子类之间
>
> 2.方法名相同，参数列表也相同，返回值相同或者是子类，访问权限修饰符不能小（严）于父类
>
> 3.不能声明或抛出比父类更多的异常
>
> 4.静态方法可以被继承，静态方法不能被重写，可以被隐藏

9.什么是多态？

> 使用同一个引用指向不同的对象执行不同的操作
>
> 父类引用指向子类对象
>
> 父类作为方法的形参，方法的实参是子类对象
>
> 父类作为方法的返回值类型，返回值是子类对象
>
> 父类作为数组或集合的类型，元素是子类对象

10.向上转型可以访问哪些方法？

> 向上转型：可以访问子类继承或重写父类的方法，不能访问子类独有的方法



## day12

1.请写出抽象类的所有特点

> 1.抽象方法在抽象类中，都使用abstract关键字修饰
>
> 2.抽象类不能实例化，必须通过new子类的方式
>
> 3.子类必须实现所有的抽象方法，除非子类也是抽象类
>
> 4.抽象类中可以编写普通属性、普通方法、静态属性、静态方法、构造方法
>
> 5.实现多态和之前一样

2.类和对象的关系

> 类是对象的抽象
>
> 对象是类的具体

3.java中支持多继承吗？

> 不支持

4.final关键字的作用

> final修饰的属性，表示这个属性为常量，只能赋值一次，不能被修改
>
> final修饰的方法，表示这个方法可以被继承，不能被重写
>
> final修饰的类，表示这个类不能被继承

5.多态的表现形式，如何避免转型报错

> 向上转型：
>
> 父类作为作为形参，实参作为子类对象
>
> 父类作为返回值类型，返回值为子类对象
>
> 父类作为数组、集合的类型，元素为子类类型
>
> 在类型转换之前先用instanceof关键字判断

6.静态方法如何访问实例属性和方法，实例方法如何访问静态属性和方法

> 先创建对象，使用对象名加点访问
>
> 本类中直接访问，其他类，通过类名加点访问

7.面向对象的特征是什么？详细描述

> 封装：将属性私有化，对外提供公共的get,set方法来取值和赋值
>
> 继承：子类继承父类，子类与父类是is-a的关系，共有的属性和方法写在父类，独有的属性和方法写在子类
>
> 多态：同一个引用使用不同的实例执行不同的操作，父类引用执行子类对象

8.==和equals的区别？

> ==
>
> 1.基本数据类型比较值
>
> 2.引用数据类型比较对象的地址值
>
> equals
>
> 1.默认比较的是地址值，String比较地址值，也比较内容
>
> 2.可以重写equals方法实现自定义的比较规则

9.如果引用数据类型强转错误，将会出现什么异常

>类转换异常，ClassCastException

10.现有子类Cake，父类Food，分别书写向上转型和向下转型并标明

> Food food = new Cake();
>
> Cake cake = (Cake) food;

11.向上转型可以调用哪些方法？

> 向上转型：可以调用子类继承和重写父类的方法，不能调用子类独有的方法

12.instanceof关键字的作用

> 判断左侧对象是否是右侧类型



## day13

1.异常的体系结构，写出三个父类

> Throwable
>
> - Error
> - Exception
>    - RuntimeException

2.try-catch-finally-throw-throws关键字分别用途是什么？

> try：包裹执行可能出现异常的代码
>
> catch：捕获异常，处理异常
>
> throw：抛出异常
>
> throws：在方法声明本方法出现的异常

3.RuntimeException和CheckedException有在处理上有什 么不同？

> RuntimeException：运行时异常，无需处理
>
> CheckException：检查异常，编译期异常，需要处理，try…catch或声明处理

4.try-catch-finally中 如果try中已经return了值 那么 finally中对返回值的操作会不会改变返回值？

> 如果返回子是基本数据类型，不会改变返回值
>
> 如果返回值是引用数据类型，会改变返回值

5.接口的所有特点

> 1.接口中的方法默认为全局抽象方法，public abstract修饰
>
> 2.不能被实例化，必须通过new实现类的方式创建对象
>
> 3.子类必须实现接口中的所有抽象方法，除非子类是抽象类或者接口
>
> 4.接口中不能书写普通属性（默认为全局静态常量），普通方法（jdk8可以写默认方法）、静态方法、构造方法
>
> 5.接口实现多态和之前一样
>
> 6.一个类只能继承一个父类，但可以继承多个接口
>
> 7.接口可以继承多个接口

6.自定义异常的步骤

> 1.继承Throwable、Exception、RuntimeException之一
>
> 2.调用父类构造方法完成异常信息的初始化

7.多态向上转型的三种表现形式

> 1.父类作为方法的形参，实参是子类对象
>
> 2.父类作为方法的返回值类型，返回值是子类对象
>
> 3.父类作为数组、集合的类型，元素是子类对象

8.java支持多继承吗？

> 不支持，但是接口可以继承多个接口，实现类似多继承的效果

9.什么时候使用接口，什么时候使用抽象类？

> 当你关注事物的本质，使用抽象类
>
> 当你关注某个功能，使用接口



## day14

1.String类为什么不可变，有没有什么方式使String可变

> 1.String类使用final修饰，不能被继承
>
> 2.String底层使用char数组维护，此数组使用final修饰，不能改变地址
>
> 3.char组同时使用private修饰，其他类无法访问
>
> 使用反射可以修改字符串的内容

2.String，StringBuffer和StringBuilder的区别

> String：不可变字符串对象
>
> StringBuffer、StringBuilder：可变字符串对象
>
> StringBuffer：线程安全
>
> StringBuilder：线程不安全

3.int,long,char,short包装类使用==比较的特点

> 1.如果直接赋值默认byte范围以内的数，==比较为true
>
> 2.如果直接赋值默认byte范围以外的数，==比较为false
>
> 3.如果通过new的方式创建的，==比较都为false

4.什么是自动拆箱和装箱，jdk版本有什么要求？代码举 例并标明

> 要求jdk1.5以上
>
> 自动装箱：将基本数据类型自动转换为包装类型，相当于调用valueOf()方法，Integer n1= 10;
>
> 自动拆箱：将包装类型自动转换为基本数据类型，相当于调用xxxValue()方法，int n2 = n1;

5.Math类获取随机数的方式，向上取整，向下取整，四舍五入

> 随机数：Math.random()
>
> 向上取整：Math.ceil()
>
> 向下取整：Math.floor()
>
> 四舍五入：Math.round()

6.Random类获取随机数的方式

> nextInt()
>
> nextInt(int bound)
>
> nextLong()
>
> nextFloat()
>
> nextDouble()
>
> nextBoolean()

7.NumberFormatException是什么异常？代码说明会导致 这种异常的情况

> 数字转换异常

8.写出你知道的String类常用方法

> length()
>
> equals()
>
> equalsIgnoreCase()
>
> toUpperCase()
>
> toLowerCase()
>
> concat()
>
> trim()
>
> indexOf()
>
> lastIndexOf()
>
> substring()
>
> split()
>
> charAt()
>
> reaplce()
>
> replaceAll()
>
> contains()
>
> startsWith()
>
> endsWith()
>
> isEmpty()

9.基本数据类型以及对应包装类

> | 基本类型 | 包装类型  |
> | -------- | --------- |
> | byte     | Byte      |
> | short    | Short     |
> | int      | Integer   |
> | long     | Long      |
> | float    | Float     |
> | double   | Double    |
> | char     | Character |
> | boolean  | Boolean   |



## day15

1.写出你所知道的日期相关类

> Date
>
> Calendar
>
> SimpleDateFormat
>
> LocalDate
>
> LocalTime
>
> LocalDateTime

2.写出你知道的异常以及异常出现的原因

> ImputMismathchException 输入不匹配异常
>
> ArrayIndexOutOfBoundsException 数组下标越界
>
> ClassCastException 类型转换异常
>
> NullPointerExceprion 空指针异常
>
> ClassNotFoundException 类未找到异常
>
> NumberFormatException 数字格式化异常

3.instanceof关键字的作用

> 判断左边对象是否属于右边的类型

4.final、finally、finalize的区别？

> final：修饰属性，常量，方法，不能被重写，能被继承，类，不能被继承
>
> finally：异常关键字，包裹无论是否出现异常都将执行的代码
>
> finalize：gc执行垃圾回收，自动执行的方法，相当于“析构函数”

5.Collection和Collections的区别？

> Collection：集合类的父接口
>
> Collections：集合工具类

6.ArrayList增删改查方法？

> add()
> remove()
>
> set()
>
> get()

7.ArrayList结合特点 是否有序 是否有下标 是否线程安全 是否允许重复 允许元素为null等 初始化容量以及扩容机制？

> ArrayList：有序，有下标，线程不安全，允许重复，允许为null，初始容量为0，第一次添加元素为10，懒加载，超出数组长度进行扩容，默认是1.5倍

8.List、Set和Collection的关系？

> Collection是List、Set的父接口



## day16

1.JDK8HashMap数据结构

> 每个节点包含4部分：key、value、根据key和值计算的哈希值，指向下一个元素的引用
>
> jdk1.7：数组 + 链表
>
> jdk1.8：数组 + 链表 + 红黑树

2.HashMap特点(是否有序，是否可为null，是否可重复， 是否线程安全，初始容量多少，负载因子的含义，扩容多 少)

> HashMap的特点：无序，key和value的值都可以为null，key不能重复，value可以，线程不安全，初始容量为16，负载因子为0.75，表示元素存储到总容量的75%就进行扩容，扩容2倍

3.HashMap和Hashtable的区别

> HashMap：线程不安全，key和value的值都可以为null，初始长度为16，扩容为2倍
>
> Hashtable：线程安全，key和value的值都不能为null，初始长度为11，扩容为2倍+1

4.Properties类，推荐使用什么方法存放数据，不推荐使 用什么方法，为什么

> 推荐：setProperties(String name)
>
> 不推荐：put()，putAll()

5.遍历HashMap的几种方式

> 1.使用keySet()，获取所有的key，根据所有的key获取所有的值
>
> 2.使用values()，获取所有的值
>
> 3.使用entrySet()，获取所有的键值对组合
>
> 4.获取以上方法的迭代器方式遍历

6.说出你所知道的集合体系中的接口和实现类分别都有哪些

> Collection：集合父接口
>
> - List
>   - ArrayList
>   - LinkedList
>   - Vector
> - Set
>   - HashSet
>   - TreeSet
>   - LinkedHashSet
>
> Map
>
> - HashMap
> - Hashtable
> - TreeMap
> - LinkedHashMap

 7.LinkedList底层数据结构 和 集合特点？

> 每个节点包含3个部分：指向前一个元素的引用、指向后一个元素引用、元素本身
>
> 有序、有下标、可以为null、可以重复、线程不安全，没有初始长度，无需扩容
>
> 查询、修改效率低，因为修改前需要先查询
>
> 插入、删除效率高，因为无需移动元素
>
> 查询优化：如果查找的下标小于中间值，从前往后找，否则从后往前找

8.TreeMap存储自定义的数据类型 有什么要求

> 自定义类型需要实现Comparable接口实现compareTo方法自定义比较规则

9.HashSet去除重复元素的依据是什么？

> 两个对象equals比较为true，同时hashCode的值相等

10.ArrayList和Vector的区别

> ArrayList：线程不安全，初始值容量为10，扩容为1.5倍
>
> Vector：线程安全，初始容量为11，扩容为2倍



## day17

1.写出你所知道的File类用于操作文件的方法

> getName()	获取文件名
>
> getPath()	获取相对路径
>
> getAbsolutePath()	获取绝对路径
>
> getParent()	获取父级目录
>
> length()	文件大小（字节）
>
> isHiddlen()	否为隐藏文件
>
> canExecute()	是否可执行
>
> canRead()	是否可读
>
> canWrite()	是否可写
>
> exists()	是否存在
>
> isFile()	是否是文件
>
> isDirectory()	是否是文件夹
>
> delete()	删除文件

2.字节流读写父类分别是，读写方法分别是什么，支持什么类型的参数

> InputStream：read() 、read(byte[] b,  int off, int len)
>
> OutputStream：write(byte b)、write(byte[] b,  int off, int len)

3.如何每次读取两个字节

> 将byte数组的长度定义为2

4.字符流读写父类分别是，读写方法分别是什么，支持什 么类型的参数

> Reader：read()、read(char[] data, int index, int length)
>
> Writer：write()、write(char[] data, int index, int length)

5.如果读取文件乱码，如何处理

> InputStreamReader

6.如何指定写入文件的编码格式

> OutputStreamWriter

7.BufferedReader和BufferedWriter独的方法分别是什么

> BufferedReader：readLine()	读取一行
>
> BufferedWriter：newLine()	换行

8.什么是序列化和反序列化，被序列化的类有什么要求

> 序列化：将对象保存到二进制文件中，对象必须实现序列化接口
>
> 反序列化：将保存有对象的二进制文件读取为对象

9.transient关键字的作用

> 被transient修饰的信息，不能被序列化



## day18

1.线程的状态

> 创建 –> 就绪 –> 运行 –> 阻塞 –> 死亡
>
> NEW
>
> RUNNABLE
>
> BLOCKED
>
> WAITING
>
> TIMED_WAITING
>
> TERMINATED

2.创建线程的方式

> 继承Thread类重写run方法
>
> 实现Runnable接口实现run方法
>
> 实现Callable接口，结合Feture使用
>
> 线程池

3.调用start和调用run方法的区别

> start：开启一个新线程
>
> run：main线程执行run方法，不会开启新线程

4.线程调度常用的方法

> setPriority()
>
> yield()
>
> join()
>
> sleep()
>
> wait()
>
> notify()

5.进程和线程的区别

> 进程：进行中的应用程序，有独立的内存资源
>
> 线程：包含在进程中，每个进程至少有一个线程

6.礼让和插队有什么区别

> 礼让：当前线程对CPU的使用做出让步，让其他线程优先执行，但是其他线程不一定会优先执行
>
> 插队：当前线程等待插队线程先执行完毕，再继续执行

7.同步的关键字，同步的作用是什么？

> synchronized：实现线程安全

8.我们之前接触过哪些线程安全的类，底层如何实现线程安全？

> StringBuffer、Vector、Hashtable
>
> 底层通过使用synchronized关键字修饰方法实现线程安全



## day20

1.ip地址的组成包含什么？

> IP地址由32位二进制组成，每8位用点分隔，使用10进制表示
>
> 包含两部分：网络号、主机号

2.http是什么协议？

> 超文本传输协议

3.tcp和udp的特点是什么？

> TCP：传输控制协议，是安全的、可靠的传输协议
>
> UDP：用户数据报协议，是不安全，不可靠的传输协议

4.描述tcp三次握手和四次挥手

>三次握手：
>
>- 客户端发送连接请求
>- 服务端响应连接请求
>- 客户端与服务端进行连接
>
>四次挥手：
>
>- 客户端发送断开连接请求
>- 服务端确认收到请求，可以继续传输未完成的数据
>- 服务端发送断开连接请求
>- 客户端响应确认请求，断开连接

5.什么是端口？

> 作为运行中的程序的唯一标识

6.什么是DNS

> 域名解析系统

7.TCP/UDP 协议传输涉及到哪些类

> Socket
>
> ServerSocket
>
> DatagramSocket
>
> DatagramPacket
>
> InetAddress
>
> SocketAddress



## Day21

1.如何获取一个Class对象，有哪些方式

> Class.forName(“全限定类名”)
>
> 类名.class
>
> 对象名.getClass()
>
> 类加载器.loadClass(“全限定类名”)

2.根据Class对象调用无参构造创建一个实例(代码实现)

> Constructor con = clazz.getDeclaredConstructor();
>
> Object obj = con.newInstance();

3.手写单例模式任意一种

> ```java
> public class Singleton {
>     private static final Singleton INSTANCE;
>     private Singleton() {}
>     public Singleton getInstance() {
>         return INSTANCE;
>     }
> }
> ```

4.获取一个类对象的所有字段(代码实现)

> Field[] fields = clazz.getDeclaredFields();

5.根据名字获获取一个类对象的某个字段，设置值并且访问(代码实现)

> Field field = clazz.getDeclaredField(“字段名”);
>
> field.set(对象名, 属性值);
>
> field.get(对象名)

6.反射的概念

> 在程序运行期间，动态的获取某个类的信息（属性、方法、构造），并访问

7.元注解有哪些，分别表示什么含义

> @Target	表示规定注解的书写的位置
>
> @Retention	表示注解的保留策略
>
> @Documented	表示该注解可以保留到帮助文档中
>
> @Inhrited	表示该注解可以被继承

8.注解属性赋值的特点

> 1.必须有值，如果只有一属性，且属性名为value，直接赋值
>
> 2.如果有属性为数组类型，一个值直赋值，多个值使用大括号包裹
>
> 3.其他情况，多个属性，使用 属性名=属性值 的方式赋值
>
> 4.也可以是default关键字为注解赋默认值

9.final，finalize和finally的区别

>final：修饰属性、方法、类，属性：常量，不能被修改，方法：不能被重写，类：不能被继承
>
>finalize：Object类中的方法，当一个类被gc垃圾回收时，自动调用这个方法，相当于析构函数
>
>finally：异常关键字，无论代码是否发生异常都会执行的代码
