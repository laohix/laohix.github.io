## 常用类API

### 1. 包装类

#### 1.1 构造方法

> 包装类
>
> 基本数据类型  ：byte   short   int     long    float   double  boolean   char
>
> 包装类类型   : Byte     Short  Integer Long     Float  Double  Boolean   Character
>
>
> 每个包装类都支持传入一个对应的基本数据类型作为参数构造实例
>
> 除了Character类之外 其他类7个包装类还支持传入一个字符串构造实例
>
>
> 使用字符串构造Number子类实例 字符串内容必须可以解析为对应内容的 正确的数值才可以 否则运行报错
>
> NumberFormatException  数字格式化异常
>
>
> Boolean 实例传入字符串 字符串内容不能为null 不区分大小写 内容为true
>
> 则为true  其他的都为false

```java
package com.atguigu.test1;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 10:04
 *  包装类
 *  基本数据类型  ：byte   short   int     long    float   double  boolean   char
 *  包装类类型   : Byte     Short  Integer Long     Float  Double  Boolean   Character
 *
 *  每个包装类都支持传入一个对应的基本数据类型作为参数构造实例
 *  除了Character类之外 其他类7个包装类还支持传入一个字符串构造实例
 *
 *  使用字符串构造Number子类实例 字符串内容必须可以解析为对应内容的 正确的数值才可以 否则运行报错
 *  NumberFormatException  数字格式化异常
 *
 *  Boolean 实例传入字符串 字符串内容不能为null 不区分大小写 内容为true
 *  则为true  其他的都为false
 *
 */
public class TestWrapper {
    public static void main(String[] args) {
        Byte b4 = new Byte("abc");

        System.out.println(b4);






        Byte b1 = new Byte((byte)12);

        System.out.println("b1 = " + b1);

        byte b = 20;

        Byte b2 = new Byte(b);

        System.out.println("b2 = " + b2);

        Byte b3 = new Byte("123");

        System.out.println("b3 = " + b3);

        System.out.println("--------------------------------------------------------");

        Short s1 = new Short((short)200);

        System.out.println("s1 = " + s1);

        short s = 100;

        Short s2 = new Short(s);

        System.out.println("s2 = " + s2);

        Short s3 = new Short("230");

        System.out.println("s3 = " + s3);

        System.out.println("--------------------------------------------------------");

        Integer i1 = new Integer(122);

        System.out.println("i1 = " + i1);

        Integer i2 = new Integer("123");

        System.out.println("i2 = " + i2);

        System.out.println("--------------------------------------------------------");

        Long l1 = new Long(122L);

        System.out.println("l1 = " + l1);

        Long l2 = new Long("1234");

        System.out.println("l2 = " + l2);

        System.out.println("--------------------------------------------------------");

        Float f1 = new Float(3.14);

        System.out.println("f1 = " + f1);

        Float f2 = new Float(3.14F);

        System.out.println("f2 = " + f2);

        Float f3 = new Float("3.14");

        System.out.println("f3 = " + f3);

        System.out.println("--------------------------------------------------------");

        Double d1 = new Double(200);

        System.out.println("d1 = " + d1);

        Double d2 = new Double(200.5);

        System.out.println("d2 = " + d2);

        Double d3 = new Double("1234");

        System.out.println("d3 = " + d3);

        System.out.println("--------------------------------------------------------");

        Boolean bl1 = new Boolean(true);

        System.out.println("bl1 = " + bl1);

        Boolean bl2 = new Boolean("tRuE");

        System.out.println("bl2 = " + bl2);

        Boolean bl3 = new Boolean("hello");

        System.out.println("bl3 = " + bl3);

        Boolean bl4 = new Boolean("abc");

        System.out.println("bl4 = " + bl4);

        Boolean bl5 = new Boolean("false");

        System.out.println("bl5 = " + bl5);

        System.out.println("--------------------------------------------------------");

        Character ch1 = new Character('a');

        System.out.println("ch1 = " + ch1);

        Character ch2 = new Character('1');

        System.out.println("ch2 = " + ch2);

        Character ch3 = new Character('中');

        System.out.println("ch3 = " + ch3);











    }
}

```



#### 1.2 基本数据类型包装类互转

> 包装类常用方法：
>
> xxxValue() : 每个包装类都有这样的一个方法 用于将包装类对象转换为基本数据类型

```java
package com.atguigu.test2;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 10:43
 *  包装类常用方法：
 *      xxxValue() : 每个包装类都有这样的一个方法 用于将包装类对象转换为基本数据类型
 *
 */
public class TestWrapperMethod1 {
    public static void main(String[] args) {


        Byte b1 = new Byte((byte)12);

        byte b = b1.byteValue();

        System.out.println("b = " + b);


        System.out.println("--------------------------------------------------------");

        Short s1 = new Short((short)200);

        short i = s1.shortValue();

        System.out.println("i = " + i);

        System.out.println("--------------------------------------------------------");

        Integer i1 = new Integer(122);

        int i2 = i1.intValue();

        System.out.println("i2 = " + i2);

        System.out.println("--------------------------------------------------------");

        Long l1 = new Long(122L);

        long l = l1.longValue();

        System.out.println("l = " + l);

        System.out.println("--------------------------------------------------------");

        Float f1 = new Float(3.14);

        float v = f1.floatValue();

        System.out.println("v = " + v);

        System.out.println("--------------------------------------------------------");

        Double d1 = new Double(200);

        double v1 = d1.doubleValue();

        System.out.println("v1 = " + v1);

        System.out.println("--------------------------------------------------------");

        Boolean bl1 = new Boolean(true);

        boolean b2 = bl1.booleanValue();

        System.out.println("b2 = " + b2);


        System.out.println("--------------------------------------------------------");

        Character ch1 = new Character('a');

        char c = ch1.charValue();

        System.out.println("c = " + c);


    }
}

```



> valueOf() 每个包装类都提供有这样的一个方法  用于将基本数据类型转换为包装类对象
>
> *  除了Character类之外 其他的包装类 使用此方法  还支持传入一个合法的字符串

```java
package com.atguigu.test2;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 10:48
 *  valueOf() 每个包装类都提供有这样的一个方法  用于将基本数据类型转换为包装类对象
 *  除了Character类之外 其他的包装类 使用此方法  还支持传入一个合法的字符串
 */
public class TestWrapperMethod2 {
    public static void main(String[] args) {
        Byte aByte = Byte.valueOf((byte) 100);

        System.out.println("aByte = " + aByte);

        Byte aByte1 = Byte.valueOf("123");

        System.out.println("aByte1 = " + aByte1);

        System.out.println("----------------------------------");

        Short aShort = Short.valueOf((short) 122);

        System.out.println("aShort = " + aShort);

        Short aShort1 = Short.valueOf("123");

        System.out.println("aShort1 = " + aShort1);

        System.out.println("----------------------------------");

        Integer integer = Integer.valueOf(111);

        System.out.println("integer = " + integer);

        Integer integer1 = Integer.valueOf("123");

        System.out.println("integer1 = " + integer1);

        System.out.println("----------------------------------");

        Long aLong = Long.valueOf(123);

        System.out.println("aLong = " + aLong);

        Long aLong1 = Long.valueOf("123");

        System.out.println("aLong1 = " + aLong1);

        System.out.println("----------------------------------");

        Boolean truE = Boolean.valueOf("truE");

        System.out.println("truE = " + truE);

        Boolean aBoolean = Boolean.valueOf(true);

        System.out.println("aBoolean = " + aBoolean);


        System.out.println("----------------------------------");

        Character character = Character.valueOf('1');

        System.out.println("character = " + character);


    }
}

```

#### 1.3 字符串基本数据类型互转

> toString():以字符串形式返回包装对象表示的基本类型数据（基本类型->字符串）

```java
package com.atguigu.test2;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 10:53
 *  toString():以字符串形式返回包装对象表示的基本类型数据（基本类型->字符串）
 */
public class TestWrapperMethod3 {
    public static void main(String[] args) {
        String s = Byte.toString((byte) 111);

        System.out.println("s = " + s);


        String s1 = Short.toString((short) 111);

        System.out.println("s1 = " + s1);


        String s2 = Integer.toString(111);

        System.out.println("s2 = " + s2);

        String s3 = Long.toString(12L);

        System.out.println("s3 = " + s3);


        String s4 = Float.toString(3.5F);

        System.out.println("s4 = " + s4);

        String s5 = Double.toString(200);

        System.out.println("s5 = " + s5);

        String s6 = Boolean.toString(false);

        System.out.println("s6 = " + s6);

        String a = Character.toString('a');

        System.out.println("a = " + a);


    }
}

```



> parseXXX()：把字符串转换为相应的基本数据类型数据（Character除外）（字符串->基本类型）

```java
package com.atguigu.test2;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 10:56
 *  parseXXX()：把字符串转换为相应的基本数据类型数据（Character除外）（字符串->基本类型）
 */
public class TestWrapperMethod4 {
    public static void main(String[] args) {
        byte b = Byte.parseByte("123");

        System.out.println("b = " + b);

        short i = Short.parseShort("111");

        System.out.println("i = " + i);

        int i1 = Integer.parseInt("1234");

        System.out.println("i1 = " + i1);

        long l = Long.parseLong("123");

        System.out.println("l = " + l);

        boolean abc = Boolean.parseBoolean("abc");

        System.out.println("abc = " + abc);

        float v = Float.parseFloat("123.5F");

        System.out.println("v = " + v);

        double v1 = Double.parseDouble("123");

        System.out.println("v1 = " + v1);



    }
}

```

#### 1.4 包装类面试题

> Short Integer Long Character 包装类面试题：
>
> 1.Integer对象直接使用=号赋值 取值范围在byte取值以内 两个取值相同的对象==比较为true
>
> 超出范围 则比较为false
>
>
> 总结：Integer包装类底层帮我们维护了一个Integer类型的数组 如果我们直接使用=号赋值在byte取值范围以内
>
> 则直接从数组中取出对应的元素 所以多次取出的为同一个对象 所以地址相同
>
> 如果超出byte取值范围 将直接new一个新的对象 所以地址不同
>
> JDK这么做的目的是为了节省内存空间
>
>
> 只要是new出来的对象 地址都不同

```java
package com.atguigu.test3;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 11:08
 *  ==和equals的区别？
 *
 *  Short Integer Long Character 包装类面试题：
 *  1.Integer对象直接使用=号赋值 取值范围在byte取值以内 两个取值相同的对象==比较为true
 *  超出范围 则比较为false
 *
 *  总结：Integer包装类底层帮我们维护了一个Integer类型的数组 如果我们直接使用=号赋值在byte取值范围以内
 *  则直接从数组中取出对应的元素 所以多次取出的为同一个对象 所以地址相同
 *  如果超出byte取值范围 将直接new一个新的对象 所以地址不同
 *  JDK这么做的目的是为了节省内存空间
 *
 *  只要是new出来的对象 地址都不同
 */
public class TestWrapperInterview {
    public static void main(String[] args) {

        Integer a = new Integer(12);
        Integer b = new Integer(12);
        System.out.println(a == b);


        Integer.valueOf(-128);
        Integer i1 = -128; // 装箱 Integer.valueOf(-128)
        Integer i2 = -128;// 装箱 Integer.valueOf(-128)

        System.out.println(i1 == i2); // true

        Integer i3 = 128;// 装箱 Integer.valueOf(128)
        Integer i4 = 128;// 装箱 Integer.valueOf(128)

        System.out.println(i3 == i4); // false

//        Short Long Character

        Character ch1 = 100;
        Character ch2 = 100;

        System.out.println(ch1 == ch2);

        Character ch3 = 200;
        Character ch4 = 200;

        System.out.println(ch3== ch4);

    }
}

```



### 2. String类

> length() 返回字符串长度
>
> equals() 比较字符串内容
>
> equalsIgnoreCase() 忽略大小写比较
>
> toLowerCase() 转换为小写
>
> toUpperCase() 转换为大写
>
> concat() 拼接字符串
>
> indexOf(int num) : 根据传入的int类型的数值(ASCII或者Unicode编码十进制) 查找第一次出现的位置 未找到返回-1
>
> indexOf(String str) : 根据传入的String类型的参数  查找对应的位置 未找到返回-1
>
> lastIndexOf(int num):根据传入的int类型的数值(ASCII或者Unicode编码十进制) 查找最后一次的位置 未找到返回-1
>
> lastIndexOf(String str  num):根据传入的String类型参数 查找最后一次的位置 未找到返回-1
>
> subString(int beginIndex) : 从指定下标截取到字符串末尾
>
> subString(int beginIndex,int endIndex) : 从指定下标截取到指定位置结束 (包前不包后)
>
> trim() 去除字符串中首尾的空格
>
> split(String str) : 根据指定的字符串拆分字符串 返回值为一个字符串数组
>
>  char charAt(int index) : 根据指定下标返回对应的char字符
>
> boolean contains(CharSequence s ) : 判断当前字符串是否包含某一个字符串
>
> boolean endsWith(String suffix) :判断当前字符串是否以某一个字符串结尾
>
> boolean startsWith(String prefix) :判断当前字符串是否以某一个字符串开头
>
> boolean isEmpty()  ：判断当前字符串是否为空
>
> String replace(char oldChar, char newChar)  ：替换字符串
>
> String replace(CharSequence target, CharSequence replacement)  ：替换字符串
>
> String replaceAll(String regex, String replacement) ：根据正则表达式替换字符串

### 3.StringBuffer和StringBuilder

> String不可变对象，任何对字符串内容的改变都会产生新的对象
>
> 所以 如果需要频繁的修改一个字符串的内容 不要使用String  推荐使用StringBuffer或者StringBuilder
>
> String底层是以char数组维护字符串的 任何字符串都以char数组形式存储
>
>
> 为什么String对象是不可变对象？
>
> 1.因为char数组是final修饰的  而final修饰数组表示此数组地址不能改变
>
> 2.此数组是private修饰的 所以外界无法访问
>
> 3.String类是final修饰的 其他类无法继承此类
>
> 2.有没有什么方式可以使String对象可变
>
> 有  使用反射可以改变字符串内容

> **`面试题：String类，StringBuffer和StringBuilder的区别？`**
>
>  String是不可变对象
>
> StringBuffer和StringBuilder是可变对象
>
> StringBuffer是线程安全的 JDK1.0
>
> StringBuilder线程不安全  JDK1.5

```java
package com.atguigu.test7;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 15:29
 *  String不可变对象，任何对字符串内容的改变都会产生新的对象
 *  String底层是以char数组维护字符串的 任何字符串都以char数组形式存储
 *
 *  为什么String对象是不可变对象？
 *      1.因为char数组是final修饰的  而final修饰数组表示此数组地址不能改变
 *      2.此数组是private修饰的 所以外界无法访问
 *      3.String类是final修饰的 其他类无法继承此类
 *
 *  2.有没有什么方式可以使String对象可变
 *      有  使用反射可以改变字符串内容
 *
 *
 *  StringBuffer 和 StringBuilder 两者都是可变字符序列 (可变字符串)
 *
     *  String类，StringBuffer和StringBuilder的区别？
 *  String是不可变对象
 *  StringBuffer和StringBuilder是可变对象
 *  StringBuffer是线程安全的 JDK1.0
 *  StringBuilder线程不安全  JDK1.5
 *
 *
 */
public class TestStringBufferStringBuilder {
    public static void main(String[] args) {
        String str1 = "abc";

        str1 += "hello";

        String condition = "电脑";

        condition += "笔记本";

        condition += "联想";

        condition += "CPU 9代i7";

        condition += "GTX 3050TI";

        condition += "1T SSD";

        condition += "200";

        StringBuilder sb = new StringBuilder();

        sb.append(true);

        sb.append(200);

        sb.append('a');

        sb.append(new char[]{'a','b','c'});

        System.out.println(sb);

        sb.delete(0, 3); // 包前 不 包后

        System.out.println(sb);

        sb.insert(3, "hello world 666");

        System.out.println(sb);

        sb.replace(0, 5, "世界你好");

        System.out.println(sb);

        sb.reverse();

        System.out.println(sb);


    }
}

```

> **`String类面试题：`**
>
> String类型直接使用等号赋值 会先去字符串常量池中查找 是否存在当前内容的对象
>
> 如果存在 则直接使用已存在的地址
>
> 如果不存在 则重新存放

```java
package com.atguigu.test7;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 15:58
 *  String类面试题：
 *  String类型直接使用等号赋值 会先去字符串常量池中查找 是否存在当前内容的对象
 *  如果存在 则直接使用以存在的地址
 *  如果不存在 则重新存放
 */
public class TestString {
    public static void main(String[] args) {
        String str1 = "abc";
        String str2 = "abc";
        String str3 = new String("abc");
        String str4 = new String("abc");

        System.out.println(str1 == str2); // true

        System.out.println(str1 == str3); // false

        System.out.println(str3 == str4);// false

    }
}

```





### 4.Math类

> Math类提供的有常用的数学计算的方法 和 两个静态常量
>
> abs() 返回绝对值
>
> ceil() 向上取整
>
> floor() 向下取整
>
> round() 四舍五入
>
> random() 随机数

```java
package com.atguigu.test6;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 14:51
 *  Math类提供的有常用的数学计算的方法 和 两个静态常量
 *  abs() 返回绝对值
 *  ceil() 向上取整
 *  floor() 向下取整
 *  round() 四舍五入
 *  random() 随机数
 *
 *  课后练习：随机生成一个100以内的整数 让用户猜这个数字 分别提示猜大了 或者 猜小了 直到猜对 最后打印猜了几次
 *
 */
public class TestMath {
    public static void main(String[] args) {
        System.out.println(Math.E);

        System.out.println(Math.PI);

        System.out.println(Math.abs(-33));

        System.out.println(Math.ceil(3.1));

        System.out.println(Math.floor(3.9));

        System.out.println(Math.round(3.4));

        System.out.println("-----------------------------------------------");

        // 获取一个100以内的随机数
        System.out.println(Math.random());
        System.out.println((int)(Math.random() * 100) );

        // 获取一个17以内的随机数
        System.out.println((int)(Math.random() * 17) );



    }
}

```



### 5. Random类

> Random类提供了更多的随机数的获取方式
>
> nextInt() : 随机int类型数值
>
> nextInt(int bound) : 根据指定范围生成int数值
>
> nextDouble() :生成随机double数值
>
> nextLong() 生成long类型随机数值
>
> nextBoolean() : 生成随机布尔数据

```java
package com.atguigu.test6;

import java.util.Random;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 14:59
 *  Random类提供了更多的随机数的获取方式
 *  nextInt() : 随机int类型数值
 *  nextInt(int bound) : 根据指定范围生成int数值
 *  nextDouble() :生成随机double数值
 *  nextLong() 生成long类型随机数值
 *  nextBoolean() : 生成随机布尔数据
 */
public class TestRandom {
    public static void main(String[] args) {
        Random ran1 = new Random();

        System.out.println(ran1.nextBoolean());
        System.out.println(ran1.nextInt());
        System.out.println(ran1.nextInt(100));
        System.out.println(ran1.nextLong());
        System.out.println(ran1.nextDouble());


    }
}

```



### 6. System类(了解)

> System类提供了与系统相关的信息获取的方法
>
> currentTimeMillis()  ： 返回1970年1月1日0点0分0秒到目前的毫秒数
>
> exit(int status) ：退出JVM虚拟机
>
> status : 退出虚拟机状态码 传入任何数值都能退出虚拟机
>
> 0表示程序正常结束退出
>
> 非0 表示非正常退出
>
> gc() ： 运行垃圾回收器 但不能保证对象立即回收
>
> getProperties() ：获得系统相关的所有的属性值
>
> getProperty(String key) ：根据key值获取到一个value  系统相关的属性信息

```java
package com.atguigu.test7;

import java.util.Properties;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/18 16:12
 *  System类提供了与系统相关的信息获取的方法
 *  currentTimeMillis()  ： 返回1970年1月1日0点0分0秒到目前的毫秒数
 *  exit(int status) ：退出JVM虚拟机
 *      status : 退出虚拟机状态码 传入任何数值都能退出虚拟机
 *      0表示程序正常结束退出
 *      非0 表示非正常退出
 *  gc() ： 运行垃圾回收器 但不能保证对象立即回收
 *  getProperties() ：获得系统相关的所有的属性值
 *  getProperty(String key) ：根据key值获取到一个value  系统相关的属性信息
 *
 */
public class TestSystem {
    public static void main(String[] args) {
//        System system = new System();

        System.out.println(System.currentTimeMillis());

        String str1 = "abc";

        str1 = null;

        System.gc();

        System.out.println(str1);

//        System.exit(89567546);

        Properties properties = System.getProperties();

        System.out.println(properties.getProperty("user.name"));
        System.out.println(properties.getProperty("java.version"));
        System.out.println(properties.getProperty("file.encoding"));


        properties.list(System.out); // 将所有的系统信息打印


        System.out.println("程序退出");


    }
}

```



### 7. Runtime类(了解)

>  Runtime类表示运行时类 此类对象记录了程序运行过程中的信息
>
> 此类被设计为单例模式(设计模式) 即此类不能new对象

```java
package com.atguigu.test1;

import java.io.IOException;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/20 9:31
 *  Runtime类表示运行时类 此类对象记录了程序运行过程中的信息
 *  此类被设计为单例模式(设计模式) 即此类不能new对象
 */
public class TestRuntime {
    public static void main(String[] args) throws IOException {
        Runtime runtime = Runtime.getRuntime();

        // 内存相关信息 单位为字节
        System.out.println("空闲内存：" + runtime.freeMemory() / 1024 / 1024);
        System.out.println("最大内存：" + runtime.maxMemory() / 1024 / 1024);
        System.out.println("总内存：" + runtime.totalMemory() / 1024 / 1024);


        runtime.exec("D:\\funny\\10秒让整个屏幕开满玫瑰花\\点我.exe");



        runtime.gc();
        System.gc();// 调用Runtime类中的gc()  garbage collection 方法
        System.exit(10); // 调用Runtime类中的exit方法
        runtime.exit(10);


    }
}

```



### 8. java.util.Date类

> java.util.Date  日期类 提供了关于日期处理的常用方法

```java
package com.atguigu.test1;

import java.util.Date;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/20 9:48
 *  java.util.Date  日期类 提供了关于日期处理的常用方法
 */
public class TestDate {
    public static void main(String[] args) {
        Date date1 = new Date();
        System.out.println("年：" + (date1.getYear() + 1900));
        System.out.println("月：" + (date1.getMonth() + 1));
        System.out.println("日：" + date1.getDate());
        System.out.println("天：" + date1.getDay());
        System.out.println("时：" + date1.getHours());
        System.out.println("分：" + date1.getMinutes());
        System.out.println("秒：" + date1.getSeconds());


        System.out.println(date1);
        System.out.println(date1.toString());

        System.out.println("----------------------------------------------");

        Date date2 = new Date(123, 11, 12);

        System.out.println(date2);


        Date date3 = new Date(5689218978975L);

        System.out.println(date3);

        Date date4 = new Date(System.currentTimeMillis());

        System.out.println(date4);


    }
}

```

> SimpleDateFormat 日期格式化类 提供了转换日期格式 以及 字符串 日期 互转的方法
>
>
> SimpleDateFormat() : 使用默认模板格式处理日期
>
> SimpleDateFormat(String pattern) : 指定模板格式处理日期
>
> format() ： 将日期转换为字符串对象
>
> parse() : 将字符串解析为日期对象

```java
package com.atguigu.test1;

import sun.java2d.pipe.SpanShapeRenderer;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/20 9:56
 *  SimpleDateFormat 日期格式化类 提供了转换日期格式 以及 字符串 日期 互转的方法
 *
 *  SimpleDateFormat() : 使用默认模板格式处理日期
 *  SimpleDateFormat(String pattern) : 指定模板格式处理日期
 *  format() ： 将日期转换为字符串对象
 *  parse() : 将字符串解析为日期对象
 */
public class TestSimpleDateFormat {
    public static void main(String[] args) throws ParseException {
        SimpleDateFormat sdf1 = new SimpleDateFormat();

        Date date1 = new Date();

        String dateStr1 = sdf1.format(date1);

        System.out.println(dateStr1);

        Date parseDate1 = sdf1.parse("23-3-21 下午10:10");

        System.out.println(parseDate1);


        // Date parseDate2 = sdf1.parse("1998-01-01 10:10:10");// 使用默认无参构造 必须遵循默认的模板格式

        // System.out.println(parseDate2);

        SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");

        Date date2 = new Date();

        System.out.println(sdf2.format(date2));

        System.out.println(sdf2.parse("2012年12月12日 10:01:01"));

    }

}

```



### 9. java.util.Calendar类

> Calendar 日历类  此类提供常用的日期处理方式  此类不能new对象

```java
package com.atguigu.test1;

import java.util.Calendar;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/20 10:11
 *  Calendar 日历类  此类提供常用的日期处理方式  此类不能new对象
 */
public class TestCalendar {
    public static void main(String[] args) {
        Calendar instance = Calendar.getInstance();

        System.out.println("年" + instance.get(Calendar.YEAR));
        System.out.println("月" + (instance.get(Calendar.MONTH) + 1));
        System.out.println("日" + instance.get(Calendar.DAY_OF_MONTH));
        System.out.println("天" + instance.get(Calendar.DAY_OF_WEEK));

        System.out.println("时" + instance.get(Calendar.HOUR));
        System.out.println("分" + instance.get(Calendar.MINUTE));
        System.out.println("秒" + instance.get(Calendar.SECOND));
    }
}

```



### 10.JDK8日期相关的API

#### 10.1 LocalDate

> LocalDate 只包含年月日
> *  now() 获取LocalDate对象 获取当前时间 年月日
> *  of() 根据指定参数获取LocalDate对象 年月日

```java
package com.atguigu.test2;

import java.time.LocalDate;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/20 10:41
 *  LocalDate 只包含年月日
 *  now() 获取LocalDate对象 获取当前时间 年月日
 *  of() 根据指定参数获取LocalDate对象 年月日
 */
public class TestLocalDate {
    public static void main(String[] args) {
        LocalDate now = LocalDate.now();

        System.out.println(now);


        System.out.println("年：" + now.getYear());
        System.out.println("月：" + now.getMonth());
        System.out.println("日：" + now.getDayOfMonth());
        System.out.println("一年中的天数：" + now.getDayOfYear());
        System.out.println("一周中的天数：" + now.getDayOfWeek());


        LocalDate of = LocalDate.of(2001, 12, 12);

        System.out.println(of);


    }
}

```



#### 10.2 LocalTime

>  LocalTime 只包含时分秒
>
> now() 获取当前时分秒
>
> of() 根据指定参数获取时分秒

```java
package com.atguigu.test2;

import java.time.LocalTime;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/20 10:45
 *  LocalTime 只包含时分秒
 *  now() 获取当前时分秒
 *  of() 根据指定参数获取时分秒
 */
public class TestLocalTime {
    public static void main(String[] args) {
        LocalTime now = LocalTime.now();

        System.out.println(now.toString());

        System.out.println(now.getHour());
        System.out.println(now.getMinute());
        System.out.println(now.getSecond());
        System.out.println(now.getNano());

        LocalTime of = LocalTime.of(12, 12, 12);
        System.out.println(of);


    }
}

```



#### 10.3 LocalDateTime

> LocalDateTime 包含年月日 时分秒
>
> now() 获取当前年月日十分秒
>
> of() 根据指定参数获取年月日 时分秒

```java
package com.atguigu.test2;

import java.time.LocalDateTime;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/20 10:47
 *  LocalDateTime 包含年月日 时分秒
 *  now() 获取当前年月日十分秒
 *  of() 根据指定参数获取年月日 时分秒
 */
public class TestLocalDateTime {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();

        System.out.println(now);


        System.out.println("年" + now.getYear());
        System.out.println("月" + now.getMonth());
        System.out.println("日" + now.getDayOfMonth());
        System.out.println("时" + now.getHour());
        System.out.println("分" + now.getMinute());
        System.out.println("秒" + now.getSecond());


        LocalDateTime of = LocalDateTime.of(1911, 12, 12, 12, 12, 12);

        System.out.println(of);


    }
}

```



### 11. BigDecimal类

> BigDecimal 可以保存任意精度  任意长度 的小数

````java
package com.atguigu.test3;

import java.math.BigDecimal;
import java.math.RoundingMode;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/20 10:54
 *  BigDecimal 可以保存任意精度  任意长度 的小数
 */
public class TestBigDecimal {
    public static void main(String[] args) {
        BigDecimal bd1 = new BigDecimal("57854878457874545.787842115487841238952632688955654");

        BigDecimal bd2 = new BigDecimal("578548.7878421154");


        System.out.println(bd1.add(bd2));

        System.out.println(bd1.subtract(bd2));

        System.out.println(bd1.multiply(bd2));

        System.out.println(bd1.divide(bd2, 15, RoundingMode.HALF_UP));


    }
}

````



### 12. BigInteger

> BigInteger 保存任意长度的整数

```java
package com.atguigu.test3;

import java.math.BigInteger;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/20 10:58
 *  BigInteger 保存任意长度的整数
 */
public class TestBigInteger {
    public static void main(String[] args) {
        BigInteger bd1 = new BigInteger("788945458754123568796232326789623");
        BigInteger bd2 = new BigInteger("789623");

        System.out.println(bd1.add(bd2));

        System.out.println(bd1.subtract(bd2));

        System.out.println(bd1.multiply(bd2));

        System.out.println(bd1.divide(bd2));


    }
}

```



### 13. 枚举

> 枚举是由一组固定的  全局 静态 常量组成的类型
>
> 所有的枚举类 都继承字 Enum类
>
> 枚举类型不能new对象
>
> 枚举不能继承其他的类(因为默认继承了Enum)  但是可以实现接口
>
> 枚举中依然可以书写普通属性，普通方法，静态方法，构造方法 其中构造方法不能使用public修饰

```java
package com.atguigu.test4;

public enum Employee implements  Work{
    MANAGER("赵四",1,"经理"),
    PRESIDENT("大拿",2,"董事长"),
    CTO("广坤",3,"技术总监"),
    CEO("刘能",4,"总裁")
    ;

    private String name;
    private String job;
    private int id;

    public static Employee getEmployeeById(int id){
        Employee[] employees = Employee.values();
        for(int i = 0;i < employees.length;i++){
            if(id == employees[i].id){
                return employees[i];
            }
        }
        return null;

    }



    Employee(String name, int id, String job){
        this.name = name;
        this.id = id;
        this.job = job;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public void doWork() {
        System.out.println(name + "在工作");
    }
}

```

```java
package com.atguigu.test4;

/**
 * @author WHD
 * @description TODO
 * @date 2023/3/20 11:22
 */
public class TestEmployee {
    public static void main(String[] args) {
        Employee employee1 = Employee.getEmployeeById(1);

        System.out.println(employee1.getId());
        System.out.println(employee1.getName());
        System.out.println(employee1.getJob());

        employee1.doWork();


    }
}

```



```java
package com.atguigu.test4;

public interface Work {
    void doWork();
}

```



