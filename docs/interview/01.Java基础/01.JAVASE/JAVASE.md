# JavaSE

## 目录

-   [1、写出Java的四类八种基本数据类](#1写出Java的四类八种基本数据类)
-   [2、& 和 && 的区别 ](#2-和--的区别-)
-   [3、switch的参数可以是什么类型](#3switch的参数可以是什么类型)
-   [4、说出实例变量和局部变量的区别](#4说出实例变量和局部变量的区别)
-   [5、static关键字都能修饰什么？ 都有什么特点](#5static关键字都能修饰什么-都有什么特点)
-   [6、overload和override的区别](#6overload和override的区别)
-   [7、 final 和 finally的区别](#7-final-和-finally的区别)
-   [8、 this和super都能用到哪些地方](#8-this和super都能用到哪些地方)
-   [9、 接口与抽象类的区别](#9-接口与抽象类的区别)
-   [10、 静态变量与实例变量的区别](#10-静态变量与实例变量的区别)
-   [11、throw和throws 的区别](#11throw和throws-的区别)
-   [12、String,StringBuilder 与 StringBuffer 的区别](#12StringStringBuilder-与-StringBuffer-的区别)
-   [13、 == 和 equals的区别](#13--和-equals的区别)
-   [14、包装类拆箱装箱](#14包装类拆箱装箱)
-   [15、异常结构图](#15异常结构图)
-   [16、 HashSet 的去重原理](#16-HashSet-的去重原理)
-   [17、集合与数组的区别](#17集合与数组的区别)
-   [18、多线程的五种实现方式](#18多线程的五种实现方式)
-   [19、多线程的生命周期](#19多线程的生命周期)
-   [20、TreeSet和HashSet的区别](#20TreeSet和HashSet的区别)
-   [21、所学习的io流一共分为几类](#21所学习的io流一共分为几类)
-   [22、map的三种遍历方式](#22map的三种遍历方式)
-   [23、HashMap与HashTable 的区别](#23HashMap与HashTable-的区别)
-   [24、ArrayList和LinkedList的区别](#24ArrayList和LinkedList的区别)
-   [25、什么是反射](#25什么是反射)
-   [26、深拷贝和浅拷贝](#26深拷贝和浅拷贝)

## 1、写出Java的四类八种基本数据类

整数                      byte short int long

小数(浮点)             float double

布尔                      boolean

字符                      char

## 2、& 和 && 的区别&#x20;

&  符号的左右两边,无论真或假都要执行

&& 符号的左边如果为假,符号的右边不再执行,提高了代码的执行效率

## 3、switch的参数可以是什么类型

byte，short，int，char，String，枚举

## 4、说出实例变量和局部变量的区别

1, 物理位置

成员变量: 类中方法外

局部变量: 方法中或方法定义的小括号里面

2, 内存位置

成员变量: 在堆内存中

局部变量: 通常在栈内存中（栈帧）

3, 生命周期

成员变量: 随着对象创建而产生,随着对象的消失而消失

局部变量: 随着方法的调用而产生,随着方法调用结束而消失

4,有无默认值&#x20;

成员变量: 有默认值, 整数0,小数0.0 字符 ‘\u0000’ 布尔 false 引用数据类型 null

局部变量: 没有默认值,使用的时候,必须先赋值

## 5、static关键字都能修饰什么？ 都有什么特点

1, 修饰成员变量, 叫静态变量 具有共享性,节省内存空间；

2, 修饰方法: 静态方法: 可以直接使用类名.进行调用；

3, 修饰代码块: 静态代码块 ,给静态变量进行赋值；

4, 修饰类: 静态内部类；

## 6、overload和override的区别

overload 是重载  要求在同一个类中,方法名相同,参数列表不同与返回值类型无关 。

参数列表不同表现在: 个数不同, 数据类型顺序不同,数据类型不同。

![](image/Snipaste_2023-09-11_23-44-15_cGOhfc8JMK.png)

![](image/image_NbyMFXIzrq.png)

![](image/image_3LFML38aGN.png)

override是重写 要求发生在子父级的继承关系中,方法名相同,参数列表相同,返回值类型是父类返回值类型本身或其子类, 异常等于父类本身异常类型或小于父类本身异常。

**把控细节**：构造方法不能被重写,因为构造方法要求,方法名与类名保持一致 **.**

**返回值**：

**父类：**

![](image/image_XQ_B_s49j8.png)

**子类：**

![](image/image_p0XDdRo9Hk.png)

![](image/image_xE91sIqVK4.png)

![](image/image_b5KwsPrYqU.png)

&#x20;**异常**：

**父类：**

![](image/image_BWfXGqUFdK.png)

**子类：**

![](image/image_CtFyF82WFI.png)

![](image/image_0cNkUkp_CP.png)

## 7、 final 和 finally的区别

**final 是权限修饰符, 表示最终的, 能修饰 变量, 方法,和类**。

修饰变量: 变成了常量。

修饰方法: 变成了最终的方法,不能被重写,但是可以被正常调用。

修饰类: 变成的最终的类,不能有子类,但是可以被正常创建对象。

**finally 是一个代码块,只能与我们的 try代码块连用,表示无论代码是否发生异常,finally里面的代码都要执行**。

finally强制退出两种方式：System.exit()、

**Finally把控细节：**

```java
package se.finals;


public class FinallyDemo {
    public static void main(String[] args) {


        FinallyDemo finallyDemo = new FinallyDemo();
        // finallyDemo.finallyTestTryNoResult(); 
        // System.out.println(finallyDemo.finallyTestTryResult()); 
        / /System.out.println(finallyDemo.finallyTestCatchResult()); 

         System.out.println(finallyDemo.finallyTestFinallyResult()); 
    }

    // 1.都没有返回值
    public void finallyTestTryNoResult() {
        try {
            System.out.println("try code block invoked");
            //int i = 1 / 0;
            throw new Exception();
        } catch (Exception e) {
            System.out.println("catch code block invoked");
        } finally {
            System.out.println("finally code block invoked");
        }
    }

    // 2.try有返回值
    public String finallyTestTryResult() {
        try {
            System.out.println("try code block invoked");
            return "no result";
            //throw new Exception();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("catch code block invoked");
        } finally {
            System.out.println("finally code block invoked");
        }
        return "result";

    }

    // 3.catch有返回值
    public String finallyTestCatchResult() {

        try {
            System.out.println("try code block invoked");
            //throw new Exception();
            int i = 1 / 0;
            return "no result";
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("catch code block invoked");
            return "error";
        } finally {
            System.out.println("finally code block invoked");
        }

    }

    // 4.finally有返回值
    public String finallyTestFinallyResult() {

        try {
            System.out.println("try code block invoked");
            //throw new Exception();
            int i = 1 / 0;
            return "no result";
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("catch code block invoked");
            return "error";
        } finally {
            System.out.println("finally code block invoked");
            return "success";
        }

    }


}
```

## 8、 this和super都能用到哪些地方

1、访问成员变量

this：可以区分成员变量与局部变量重名问题,如果本类没有这个成员变量,也可以调用父类的成员变量。

super：可以区分本类成员变量与父类成员变量重名问题，只能调用父类的成员变量。

2、访问成员方法                             &#x20;

this：可以调用本类的成员方法,如果本类没有这个成员方法,也可以调用父类的成员方法。

super：只能调用父类的成员方法。

3、访问构造器

this：可以通过this() 或 this(参数) 让其本类的构造方法直接相互调用。

super：子类通过super() 或 super(参数) 调用父类的构造方法。

## 9、 接口与抽象类的区别

![](image/image_-q4Ewc-z0q.png)

**把控细节**：

**抽象类：**

**例子（example）：**

```java
package se.abstracts;


public abstract class AbstractDemo {

    // 抽象类和普通类基本没有区别（只是多了一个可以定义抽象方法）
    private int a;// 成员变量
    private static int b;//静态变量
    private static final int c = 1;//常量

    // 1.抽象类中静态方法--有方法的实现
    public static void a() {

    }

    // 2.抽象类中构造方法
    public AbstractDemo(int a) {
        this.a = a;
    }

    // 3.抽象类中实例方法
    public void b() {

    }

    // 4.抽象类中定义一个抽象方法，注意没有方法实现体。
    //public abstract void c(){ //fail
    //
    //}
    public abstract void c();// ok

}

```

**接口**：

**例子（example）：**

```java
package se.abstracts;


public interface InterfaceDemo extends InterfaceDemo1, InterfaceDemo2 {
    // 1.接口中不能定义静态方法--但是可以有静态方法的实现
    public static void a() {

    }
    //public static void b();//fail
    
    // 2.接口中不可以定义构造方法
    //public InterfaceDemo(){//fail
    //
    //}

    // 3.接口中不可以定义实例方法（没有static  也没有abstract关键字）
    //public void c();//fail
    // 4.接口中不能定义变量--只能有常量
    public static final int d = 1;
    //public int x;//fail

    // 5.接口中所有的默认方法都是public abstract修饰  且访问修饰符必须要是public或者不写，不写则使用默认(注意：默认指的不是default)
    // 抽象类中的访问修饰符四种都可以（public protected private 不写）
    void world();// public abstract

    // 1.8允许接口中有方法的实现，但是必须用关键字default修饰
    default String hello() {
        return "hello";
    }


}

```

## 10、 静态变量与实例变量的区别

内存位置 : 静态变量在方法区中,实例变量在堆内存中。

生命周期 : 静态变量随着.class文件加载而产生,随着.class文件结束而结束; 实例变量随着对象的创建而产生,随着对象的结束而结束。

调用方式: 静态变量既可以通过 类名.直接进行调用, 也可以通过对象名.进行调用; 实例变量只能通过 对象名.进行访问。

## 11、throw和throws 的区别

throw 是具体抛出一个异常对象,在方法的内部, 后面有且只能有一个异常对象,代码一旦遇到了throw证明出现了问题,代码就会停止,线程会异常退出。

throws 是异常的声明, 在方法定义的小括号后面,后面可以跟多个异常的类型,方法有throws,代码不一定发生异常。

## 12、String,StringBuilder 与 StringBuffer 的区别

String、StringBuilder、StringBuffer是不可变的字符串序列,因此该类不可以被继承，也即没有子类。

**相同点**：

**String类**：

![](image/1_jv4gzKqvxS.png)

**StringBuilder类：**

![](image/image_CT1w2movtT.png)

**StringBuffer类：**

![](image/image_o9-91DL0VR.png)

**不同点：**

StringBuilder类中的大多数方法没有加Synchronized关键字修饰。而StringBuffer类中的大多数方法都是加了Synchronized关键字修饰，正因为如此，在多线程操作的时候，StringBuffer会比StringBuilder安全，但是其效率会偏低。

## 13、 == 和 equals的区别

\== 既可以比较基本数据类型,也可以比较引用数据类型,比较基本数据类型,比较的是具体的值,比较引用数据类型比较是地址值。

equals只能比较引用数据类型,重写之前比较的是引用数据类型的地址值,重写之后,根据重自定义写的规则，比较的是引用数据类型的内容。

## 14、包装类拆箱装箱

**装箱：** 将基本类型转换成包装类对象。

**拆箱：** 将包装类对象转换成基本类型的值。

**区别：** 以int和Integer为例。

（1）Integer是int的包装类，int则是java的一种基本数据类型；

（2）Integer变量必须实例化后才能使用，而int变量不需要；

（3）Integer实际是对象的引用，当new一个Integer时，实际上是生成一个指针指向此对象；而int则是直接存储数据值；

（4）Integer的默认值是null，int的默认值是0。

java为什么要引入自动装箱和拆箱的功能？主要是用于java集合中，List\<Inteter>list=new ArrayList\<Integer>();

list集合如果要放整数的话，只能放对象，不能放基本类型，因此需要将整数自动装箱成对象。

**例子（example）：**

```java
package se.packing;

/**
 * @Author huzhongkui
 * @Date 2023--08--31:14:45
 * 聪明出于勤奋,天才在于积累
 **/
public class IntAndIntegerDemo {
    public static void main(String[] args) {

        // 一组：两个Integer对象比较
        // 结论：两个对象比较 地址一定不等，则结果为false
        Integer integer = new Integer(66);
        Integer integer1 = new Integer(66);
        System.out.println(integer == integer1);
        
        // 二组：Integer类型属性值和int属性值比较
        // 结论：包装类Integer和基本数据类型比较的时候，将包装类自动拆箱为int，然后进行比较，本质就是两个int变量进行比较，只要两个变量的值相等，则结果就为true
        Integer integer2 = new Integer(88);
        //Integer a = 88;
        int i = 88;
        System.out.println(integer2 == i);
        
        // 三组：new Integer()类型变量值和Integer类型的变量值比较
        // 结论：new Integer() 堆中地址 Integer 常量池中地址，地址不等
        Integer integer3 = new Integer(88);
        Integer j = 88;
        System.out.println(integer3 == j);

        // 四组：Integer类型的变量值和Integer类型的变量值(范围在：[-128~127]相等,)
        // 其它则不相等会创建新的Integer对象
        Integer k = -129;
        Integer l = -129;
        System.out.println(k == l);
    }
}

```

## 15、异常结构图

![](image/image_n65MRvxzxu.png)

## 16、 HashSet 的去重原理

如果两个对象的hashCode值不同，直接插入成功。
如果两个对象的hashCode值相同，再比较两个对象的地址值。如果地址值相同，即同一个对象，插入失败（无需继续判断）反之，则会继续调用equals方法比较，如果equals方法返回true，插入失败；如果equals方法返回false，插入成功。

## 17、集合与数组的区别

集合与数组都是容器

数组既可以存基本数据类型也可以存引用数据类型,数组的长度固定不能发生改变

集合只能存引用数据类型,可以存任意的引用数据类型,长度可变

## 18、多线程的五种实现方式

1, 继承Thread,重写run方法,最后创建Thread 的子类对象,调用start()方法开启线程任务

**例子（example）：**

```java
package se.thread.create;


public class CreateThread_1 {
    public static void main(String[] args) {

        Thread thread = new Thread(new MyThread());
        thread.start();
    }
}


class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("do some  thing");
    }
}

```

2, 实现Runnable接口,重写run方法,创建Runnable 的实现类对象,通过Thread 的构造传递,调用start() 方法开启线程任务

**例子（example）：**

```java
package se.thread.create;


public class CreateThread_2 {
    public static void main(String[] args) {

        Thread thread = new Thread(new MyRunnable());
        thread.start();
    }
}

class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("do some thing");
    }
}
```

3, 实现Callable接口,重写call方法,创建Callable的实现类对象,将Callable 的实现类对象,传递到FutureTask的构造方法中,最后将FutureTask传递到Thread 的构造方法中,通过start()方法开启线程任务

**例子（example）：**

```java
package se.thread.create;

import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;


public class CreateThread_3 {
    public static void main(String[] args) {
        FutureTask<Integer> futureTask = new FutureTask<Integer>(new MyCallable());
        Thread thread = new Thread(futureTask);
    }
}

/**
 * Callable 和Runnable接口有什么区别
 * 1、Callable接口中也是一个函数式接口 里面拥有一个call方法
 * 2、Callable接口的call方法可以有返回值。
 * 3、Callable接口中的call方法可以抛异常（run()方法和call()方法都能抓异常）
 */
class MyCallable implements Callable<Integer> {
    // 抛异常
    @Override
    public Integer call() throws Exception {
        // 抓异常
        try {
            System.out.println("do some thing");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 100;
    }
}

class MyRunnable implements Runnable {

    @Override
    public void run() {
        // 抓异常
        try {
            int i = 1 / 0;
        } catch (Exception e) {
            System.out.println("do some thing");
            e.printStackTrace();
        }
    }
}
```

4、使用线程池创建

**例子（example）：**

```java
package se.thread.create;

import java.util.concurrent.*;


public class CreateThread_4 {
    public static void main(String[] args) {

        // 比如使用线程池工具类
        ExecutorService executorService = Executors.newFixedThreadPool(1);
        executorService.submit(() -> {
            System.out.println("do some thing");
        });


        // 比如自定义线程池
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(10,20,30,TimeUnit.MINUTES,new LinkedBlockingQueue<>());

        threadPoolExecutor.execute(new Runnable() {
            @Override
            public void run() {
                System.out.println("do some thing");
            }
        });
    }
}




```

5、使用jdk1.8自带的异步编排方式

**例子（example）：**

```java
package se.thread.create;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;


public class CreateThread_5 {
    public static void main(String[] args) {
        // 使用异步编排
        CompletableFuture.runAsync(() -> {
            System.out.println("开始执行一个任务");
        });
    }
}




```

**把控细节**：其实不管是哪种方式创建，底层都是通过实现Runnable接口方式创建线程。

## 19、多线程的生命周期

源码中一共定义了6钟状态。

![](image/image_YqoM7Um4ux.png)

（1）新建（*NEW*）：线程对象刚给创建，但未启动（start）

**例子（example）：**

```java
package se.thread.life;


public class Thread_New {
    public static void main(String[] args) {

        Thread thread = new Thread();// 只要线程new出来
        System.out.println("线程的名字"+thread.getName()+"线程的状态:"+thread.getState());

    }
}

```

（2）可运行（*RUNNABLE*）：线程已被启动，可以被调度或正在被调度。

**例子（example）：**

```java
package se.thread.life;


public class Thread_Runnable {
    public static void main(String[] args) {

        Thread thread = new Thread(()->{
            System.out.println("1111");
            System.out.println("线程的状态"+Thread.currentThread().getState());
        });
        thread.start();
        System.out.println("线程的状态"+thread.getState());
    }
}

```

（3）锁阻塞（*BLOCKED*）：当前线程要获取的锁对象正在被其他线程占用，此时该线程处于Blocked状态。

**例子（example）：**

```java
package se.thread.life;


public class Thread_Blocked {
    public static void main(String[] args) {

        Object o = new Object();
        Thread threadA = new Thread(()->{
            synchronized (o){
                System.out.println("11111");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        },"A");

        threadA.start();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Thread threadB = new Thread(()->{
          synchronized (o){

          }
        },"B");
        threadB.start();
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("线程"+threadB.getName()+"状态"+threadB.getState());

    }
}

```

（4）等待阻塞（*WAITING*）：当前线程遇到了wait()，join()等方法。

**例子（example）：**

```java
package se.thread.life;


public class Thread_Waiting {

    // 使用wait、notify或者notifyAll的时候必须要要结合synchronized使用
    public static void main(String[] args) throws InterruptedException {
        Object o = new Object();
        Thread thread = new Thread(() -> {
            synchronized (o) {
                try {
                    for (int i = 1; i <10 ; i++) {
                        System.out.println("i---"+i);
                        if(i==5){
                            o.wait();// 使用对象的wait方法时 必要要有一个对象和synchronized
                            // 如若不结合synchronized  那么就会出现一个监视器对象状态异常IllegalMonitorStateException。
                            // 任何一个对象中都有一个ObjectMonitor对象。监视器锁。管程技术。
                        }
                    }

                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

        });
        thread.start();
        Thread.sleep(2000);
        System.out.println(thread.getState());


        Thread thread1 = new Thread(()->{
          //  o.notify();//使用notify或者notifyAll()都要结合synchronized使用，不然就会出现监视器异常IllegalMonitorStateException
           synchronized (o){
               System.out.println("do some thing");
            o.notify();
           }
        });
        thread1.start();

        System.out.println("end");
    }
}

```

（5）限时等待（*TIMED\_WAITING*）：当前线程调用了sleep(时间)，wait(时间)，join(时间)等方法。

**例子（example）：**

```java
package se.thread.life;
public class Thread_TimeWaiting {

    public static void main(String[] args) throws InterruptedException {

        Object o = new Object();
        Thread thread = new Thread(()->{
          synchronized (o){
              try {
                  // 线程调用wait(5000)方法
                  o.wait(5000);
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
        });
        thread.start();
        // 线程调用sleep(5000)方法
        Thread.sleep(5000);
        // 线程调用join(5000)方法
        thread.join(5000);
        System.out.println(thread.getState());
    }
}

```

（6）终止（*TERMINATED*）：线程正常结束或异常提前退出。

**例子（example）：**

```java
package se.thread.life;
public class Thread_Terminated {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> {
            int i = 0;
            System.out.println("1111");
            try {
                i = 10 / 0;
            } catch (Exception e) {
                e.printStackTrace();
            }
            System.out.println(i);
        });
        thread.start();
        Thread.sleep(100);
        System.out.println(thread.getState());
    }
}

```

## 20、TreeSet和HashSet的区别

**1、速度和内部实现**：

HashSet 内部使用哈希表来存储元素，因此它的查找、插入和删除操作的[时间复杂度](https://www.zhihu.com/search?q=时间复杂度\&search_source=Entity\&hybrid_search_source=Entity\&hybrid_search_extra={"sourceType":"answer","sourceId":3049364903} "时间复杂度")都是 O(1)。而 TreeSet 内部使用的是红黑树，因此它的时间复杂度为 O(log n)。

**2、排序方式：**

HashSet 不保证元素的顺序，因为它是根据哈希值来存储和检索元素的。而 TreeSet 则可以保证元素的顺序，因为它是根据元素的自然顺序或者比较器来进行排序的

**3、接口：**

HashSet 实现了 Set 接口，而 TreeSet 实现了 SortedSet 接口。

**4 使用场景**：

如果需要快速地插入、删除和查找元素，并且不关心它们的顺序，那么可以使用 HashSet。如果需要对元素进行比较、排序，那么可以使用 TreeSet。

## 21、所学习的io流一共分为几类

IO流根据流向 有输入流和输出流两种

IO流根据类型分类有 字节输入输出流 和 字符输入输出流 &#x20;

字节输入流  InputStream

字节输出流 OutputStream

字符输入流 Reader

字符输出流 Writer

![](image/image_IavBSdntFt.png)

![](image/image_8OVV7Wdg-K.png)

**把控细节：**

字节流是万能流,可以处理任意的文件。

字符流不是万能流,基本上用来处理纯文本文件。

## 22、map的三种遍历方式

方式一：增强for

方式二：EntrySet迭代

方式三：KeySet迭代

**例子（example）：**

```java
package se.collect.map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

/**
 * @Author huzhongkui
 * @Date 2023--09--19:09:03
 * 聪明出于勤奋,天才在于积累
 **/
public class MapForDemo {
    public static void main(String[] args) {
        HashMap<String, String> map = new HashMap<>();
        map.put("name", "zs");
        map.put("age", "18");
        map.put("sex", "男");
        map.put("address", "武汉市");

        // 方式一：增强for
        //for (Map.Entry<String, String> entry : map.entrySet()) {
            //System.out.println("map的key:"+entry.getKey()+",map的value:"+entry.getValue());
        //}
        // 方式二：EntrySet迭代
        //Set<Map.Entry<String, String>> entries = map.entrySet();
        //Iterator<Map.Entry<String, String>> iterator = entries.iterator();
        //while (iterator.hasNext()) {
        //    Map.Entry<String, String> next = iterator.next();
        //    System.out.println("map的key:" + next.getKey() + ",map的value:" + next.getValue());
        //}

        //方式三：keySet迭代
        Iterator<String> keySetIterator = map.keySet().iterator();
        while (keySetIterator.hasNext()) {
            String key = keySetIterator.next();
            String value = map.get(key);
            System.out.println("map的key:"+key+",map的value:"+value);
        }
    }
}

```

## 23、HashMap与HashTable 的区别

**（1**）线程安全性不同

HashMap是线程不安全的，HashTable是线程安全的，其中的方法大多数是Synchronize的，在多线程并发的情况下，可以直接使用HashTable，但是使用HashMap时必须自己增加同步处理。

**HashMap:**

![](image/image_jmI6y9tfgf.png)

**HashTable:**

![](image/image_xgx1scpo4a.png)

**（2**）是否提供**contains**方法

HashMap只有containsValue和containsKey方法；HashTable有contains、containsKey和containsValue三个方法，其中contains和containsValue方法功能相同。

**HashMap:**

![](image/image_HEQ6q3lmDi.png)

**HashTable:**

![](image/image_T-9szbF4sx.png)

**（3**）**key**和**value**是否允许**null**值

Hashtable中，key和value都不允许出现null值。HashMap中，null可以作为键，这样的键只有一个；可以有一个或多个键所对应的值为null。

**HashMap:**

![](image/image_vTc6NXU7xi.png)

**HashTable:**

![](image/image_8F_nj6g8JV.png)

**（4**）数组初始化和扩容机制

**初始化**：HashTable在不指定容量的情况下的默认容量为11；而HashMap在不指定容量的时候，并不会提前构建指定长度大小的数组。而是当第一次put元素的时候才会去创建一个容量大小为16的数组，这点一定要注意！！！

**HashTable:**

![](image/image_DWoR0_oGl7.png)

**HashMap:**

![](image/image_aSPhBh5OM1.png)

![](image/2__ZlUqi0oMp.png)

![](image/3_DGOJNxeBsm.png)

**扩容**：Hashtable扩容时，将容量变为原来的2倍加1，而HashMap扩容时，将容量变为原来的2倍。

**HashMap:**

![](image/image_DvqppfWZih.png)

**HashTable:**

![](image/4_nsQ8c6bYq6.png)

## 24、ArrayList和LinkedList的区别

**ArrayList**：基于动态数组，连续内存存储，适合下标访问（随机访问），扩容机制：因为数组长度固定，超出长度存数据时需要新建数组，然后将老数组的数据拷贝到新数组，如果不是尾部插入数据还会涉及到元素的移动（往后复制一份，插入新元素），使用尾插法并指定初始容量可以极大提升性能、甚至超过linkedList（需要创建大量的node对象）。

**LinkedList**：基于链表，可以存储在分散的内存中，适合做数据插入及删除操作，不适合查询：需要逐一遍历。遍历LinkedList必须使用iterator不能使用for循环，因为每次for循环体内通get(i)取得某一元素时都需要对list重新进行遍历，性能消耗极大。另外不要试图使用indexOf等返回元素索引，并利用其进行遍历，使用indexlOf对list进行了遍历，当结果为空时会遍历整个列表。

## 25、什么是反射

**什么是Java反射机制：**

反射就是在程序运行时期，动态的获取类信息并操作该类成员（构造方法，成员变量，成员方法）的过程，这种动态获取类的信息以及动态调用对象的方法的功能来自于Java 语言的反射。

Java的反射机制的实现要借助于4个类Class，Constructor，Field，Method;

其中Class代表的时类对象，Constructor－类的构造器对象，Field－类的属性对象，Method－类的方法对象。通过这四个对象我们可以粗略的看到一个类的各个组成部分。

**Java** **反射机制提供功能**

在运行时判断任意一个对象所属的类。

在运行时构造任意一个类的对象。

在运行时判断任意一个类所具有的成员变量和方法。

在运行时调用任意一个对象的方法。

**例子（example）：**

```java
package se.reflective;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

/**
 * @Author huzhongkui
 * @Date 2023--09--19:10:30
 * 聪明出于勤奋,天才在于积累
 **/
public class ReflectiveDemo {

    public static void main(String[] args) {

        try {
            //1.获取任意一个对象所属的类
            Student student = new Student();
            Class<? extends Student> aClass1 = student.getClass();
            System.out.println(aClass1);
            //2.构造任意一个类对象
            Student student1 = aClass1.newInstance();
            System.out.println(student1);
            //3.获取任意一个类中的构造方法
            Class<?> aClass = Class.forName("se.reflective.Student");
            for (Constructor<?> declaredConstructor : aClass.getDeclaredConstructors()) {
                Object instance = declaredConstructor.newInstance();
                System.out.println(instance);
            }
            //4. 获取任意一个类中的方法
            for (Method declaredMethod : aClass.getDeclaredMethods()) {
                System.out.println("Student类中的方法:" + declaredMethod.getName());
            }
            //5. 获取任意一个类中的成员变量
            for (Field declaredField : aClass.getDeclaredFields()) {
                System.out.println("Student类中的成员变量" + declaredField.getName());
            }
            //6.调用任意一个对象的方法
            System.out.println(student1.getAge());
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}


```

## 26、深拷贝和浅拷贝

深拷贝和浅拷贝就是指对象的拷贝，一个对象中存在两种类型的属性，一种是基本数据类型，一种是实例对象的引用。

1.浅拷贝是指，对基本数据类型进行值传递，对引用数据类型进行引用传递般的拷贝。

2.深拷贝是指，对基本数据类型进行值传递，对引用数据类型，创建一个新的对象，并复制其内容，此为深拷贝。

![](image/image_306ijJ6YzJ.png)

**浅拷贝例子：**

```java
package se.copy;

import lombok.Data;

/**
 * @Author huzhongkui
 * @Date 2023--08--31:13:59
 * 聪明出于勤奋,天才在于积累
 **/

class Person implements Cloneable {
    private String name;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Phone getPhone() {
        return phone;
    }
    public void setPhone(Phone phone) {
        this.phone = phone;
    }
    private Phone phone;
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

class Phone implements Cloneable {
    private String name;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
public class ShallowCopy {
    // 浅拷贝
    public static void main(String[] args) throws CloneNotSupportedException {
        Phone phone = new Phone();
        phone.setName("小米");

        // 创建一个Person对象（原对象）
        Person person = new Person();
        person.setName("hzk");
        // 设置引用类型属性
        person.setPhone(phone);
        // 打印原对象的属性值
        System.out.println(person);
        System.out.println(person.getName());
        System.out.println(person.getPhone());
        System.out.println(person.getPhone().getName());

        System.out.println("-----------------");
        // 克隆一个Person对象(克隆对象)
        Person copyPerson = (Person) person.clone();
        // 打印克隆对象的属性值
        System.out.println(copyPerson);
        System.out.println(copyPerson.getName());
        System.out.println(copyPerson.getPhone());
        System.out.println(copyPerson.getPhone().getName());


        // 浅拷贝由于会拷贝引用数据类型的地址，因此修改拷贝对象的值，其被拷贝对象的值也会跟着变化。反之，同理。
        copyPerson.getPhone().setName("华为");

        System.out.println("原对象的引用类型Phone值" + person.getPhone().getName());
        System.out.println("克隆对象的引用类型Phone值" + copyPerson.getPhone().getName());

    }

}

```

**运行结果：**

![](image/image_voIXPNScw5.png)

**深拷贝例子：**

```java
package se.copy;

/**
 * @Author huzhongkui
 * @Date 2023--08--31:13:59
 * 聪明出于勤奋,天才在于积累
 **/
class Person1 implements Cloneable {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Phone1 getPhone() {
        return phone;
    }

    public void setPhone(Phone1 phone) {
        this.phone = phone;
    }

    private Phone1 phone;

    @Override
    protected Object clone() throws CloneNotSupportedException {
//        return super.clone();
        //继续利用clone()方法，对该对象的引用类型变量再实现一次clone()方法。
        // 要想深克隆 要不就是序列化和反序列化 要不就是继续clone
        Person1 person = (Person1) super.clone();
        person.setPhone((Phone1) person.getPhone().clone());
        return person;
    }
}


class Phone1 implements Cloneable {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

public class DeepCopy {

    // 深拷贝
    public static void main(String[] args) throws CloneNotSupportedException {
        Phone1 phone1 = new Phone1();
        phone1.setName("小米");

        Person1 person1 = new Person1();
        person1.setName("hzk");
        person1.setPhone(phone1);

        System.out.println(person1);
        System.out.println(person1.getName());
        System.out.println(person1.getPhone());
        System.out.println(person1.getPhone().getName());

        System.out.println("-----------------");
        Person1 copyPerson1 = (Person1) person1.clone();
        System.out.println(copyPerson1);
        System.out.println(copyPerson1.getName());
        System.out.println(copyPerson1.getPhone());
        System.out.println(copyPerson1.getPhone().getName());


        System.out.println("-----------------");
        // 深拷贝不会拷贝引用数据类型的地址（而是会创建一个新对象空间），因此修改拷贝对象的值，其被拷贝对象的值不会跟着变化。反之，同理。
        copyPerson1.getPhone().setName("华为");

        System.out.println("原对象的引用类型Phone值---" + person1.getPhone().getName());
        System.out.println("克隆对象的引用类型Phone值---" + copyPerson1.getPhone().getName());
    }
}

```

**运行结果**

![](image/图片_HMK6d_wm1r.png)
