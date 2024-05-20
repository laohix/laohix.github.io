import{_ as n,o as s,c as a,e as t}from"./app-8007fa1b.js";const p="/assets/类加载器-d2c9994d.png",e={},c=t(`<h2 id="注解和反射" tabindex="-1"><a class="header-anchor" href="#注解和反射" aria-hidden="true">#</a> 注解和反射</h2><h3 id="_1-注解" tabindex="-1"><a class="header-anchor" href="#_1-注解" aria-hidden="true">#</a> 1. 注解</h3><blockquote><p>注解</p><p>1.回顾我们之前所接触过的注解 @Override @Deprecated @SuppressWarnings @FunctionalInterface</p><p>分析：以上注解 可以书写在不同的位置 有不同的作用 有的需要写值 有的不能写值</p><p>2.如何控制这些注解书写的位置 、如何使这些注解有不同的作用 等等</p><p>通过@Target注解控制注解可以书写的位置</p><p>我们也可以通过自定义注解来实现这些效果</p><p>3.注解是由来</p><p>注解是JDK1.5新增的内容</p><p>4.注解用来解决什么问题呢？</p><p>早期的Java项目中 复杂度非常之高 所以项目中会存在很多的配置文件 阅读性差 书写性差</p><p>所以 在JDK1.5引入了注解来解决这个问题 最初的梦想是 零配置(配置文件全部消失)</p><p>目前的情况：注解 + 配置文件</p><p>注解也确实简略 省略了 大量的配置文件 但是配置文件依然是不能完全杜绝的</p><p>注解采用了一种思想：约定大于配置</p><p>5.元注解</p><p>用于修饰注解的注解 称之为元注解</p><p>@Target 用于规定注解书写的位置 不写表示此注解可以加在任何位置</p><p>@Retention 用于规定注解的保留策略</p><p>​ CLASS 表示在二进制文件中生效 默认为此效果</p><p>​ RESOURCE 表示在源代码中生效</p><p>​ RUNTIME 表示在运行期间生效</p><p>@Documented 被此注解修饰的注解可以保存在帮助文档中</p><p>@Inherited 被此注解修饰的注解 可以被子类继承</p></blockquote><blockquote><p>注解属性和赋值</p><p>注解属性支持的数据类型 ： 八种基本数据类型、String、枚举、Class类型 和 以上类型对应的数组类型</p><p>注解中的属性必须有值</p><p>注解属性的赋值：</p><p>1.如果注解中只有一个属性 并且属性名为value 则可以直接写值</p><p>2.如果为数组类型 一个元素直接赋值 多个元素 加上大括号</p><p>3.否则其他的情况都必须写为 属性名 = 属性值 这种写法</p><p>4.我们也可以使用default关键字给注解加上默认值</p></blockquote><h3 id="_2-junit单元测试" tabindex="-1"><a class="header-anchor" href="#_2-junit单元测试" aria-hidden="true">#</a> 2. JUnit单元测试</h3><blockquote><p>JUnit Java Unit 单元测试框架 是一个专业的测试框架(别人写好的一些类 接口 方法 等等 )</p><p>回顾我们之前怎么测试我们写的代码 使用main方法 但是一个类只能有一个main方法 所以 不能满足我们实际的开发需求</p><p>我们可以使用Junit单元测试框架</p><p>我们目前所使用src目录 表示源文件目录 是用于存放Java源文件的 所以规范而言 测试的代码 不应该存放在 src目录下</p><p>应该单独创建一个测试目录</p><p>1.在项目下创建文件夹 取名为test</p><p>2.右键将此目录标记为测试资源根目录</p></blockquote><blockquote><p>@Test 注解 加在方法上 表示此方法可以单独执行</p><p>@Before 表示此类中的@Test修饰的方法执行之前都执行一次</p><p>@After 表示此类中的@Test修饰的方法执行之后都执行一次</p><p>@BeforeClass 本类中的方法执行之前只执行一次</p><p>@AfterClass 本类中的方法执行之后只执行一次</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/20 10:43
 *  @Test 注解 加在方法上 表示此方法可以单独执行
 *  @Before 表示此类中的@Test修饰的方法执行之前都执行一次
 *  @After 表示此类中的@Test修饰的方法执行之后都执行一次
 *
 *  @BeforeClass 本类中的方法执行之前只执行一次
 *  @AfterClass 本类中的方法执行之后只执行一次
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestJUnit</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Before</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行前置操作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@After</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行后置操作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@BeforeClass</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">beforeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;本类中的方法执行之前只执行一次&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@AfterClass</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">afterClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;本类中的方法执行之后只执行一次&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m1方法执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">/</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m3方法执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-反射" tabindex="-1"><a class="header-anchor" href="#_3-反射" aria-hidden="true">#</a> 3.反射</h3><blockquote><p>反射 在程序运行期间 动态的获取某个类的信息(属性、方法、构造方法) 并且访问</p><p>也就是不通过new对象的方式 依然可以访问类中的属性 方法 和 构造方法</p><p>生活中的反射：倒车镜 拍X光片 IDE的自动提示功能 等等</p><p>综合生活中常见的反射的操作 我们发现 反射在有些情况下是必不可少的</p><p>JUnit框架</p><p>如果在程序运行过程中 不知道需要什么类型的对象 以及 不知道需要获取多少个对象 该如何创建对象呢？</p><p>Spring IOC Inversion Of Control 容器 就是使用反射技术帮我们创建对象的</p><p>万物皆对象：类也是对象 方法也是对象 属性也是对象 构造器也是对象</p><p>java.lang.Class 用于表示类类型</p><p>java.lang.reflect.Field 字段类 类型</p><p>java.lang.reflect.Method 方法类 类型</p><p>java.lang.reflect.Constructor 构造器类 类型</p></blockquote><h4 id="_3-1-获取属性" tabindex="-1"><a class="header-anchor" href="#_3-1-获取属性" aria-hidden="true">#</a> 3.1 获取属性</h4><blockquote><p>Field类 所有的字段都属于此类的对象</p><p>通过Class类提供的如下方法获取Field字段</p><p>Field getField(String fieldName) 根据指定的名称获取public修饰的属性</p><p>Field [] getFields() 获取本类中所有的public修饰的属性</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/20 15:08
 *  Field类 所有的字段都属于此类的对象
 *  通过Class类提供的如下方法获取Field字段
 *
 *  Field getField(String fieldName) 根据指定的名称获取public修饰的属性
 *  Field [] getFields() 获取本类中所有的public修饰的属性
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFiled1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 根据全限定名获取Class对象</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> stuClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.test6.Student&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 根据具体的名称获取单个字段对象</span>
            <span class="token class-name">Field</span> heightField <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 打印字段对象的名称 和 类型</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>heightField<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;===&quot;</span> <span class="token operator">+</span> heightField<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 获取所有的public修饰的字段对象</span>
            <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 遍历数组</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Field</span> f <span class="token operator">:</span> fields<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 打印字段对象的名称 和 类型</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;===&quot;</span> <span class="token operator">+</span> f<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchFieldException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>获取非公开的属性</p><p>Field getDeclaredField(String fieldName) : 根据属性名获取一个属性对象 可以是任何访问修饰符修饰</p><p>Field [] getDeclaredFields() : 获取所有属性对象 可以是任何访问修饰符修饰</p><p>Field类方法</p><p>第一个参数 表示给哪个对象的name属性赋值</p><p>第二个参数 具体的属性值</p><p>set(Object obj,Object value)</p><p>取值传参 表示声明 访问哪个对象的此属性值</p><p>get(Object obj)</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/20 15:19
 *  获取非公开的属性
 *  Field getDeclaredField(String fieldName) : 根据属性名获取一个属性对象 可以是任何访问修饰符修饰
 *  Field [] getDeclaredFields() : 获取所有属性对象 可以是任何访问修饰符修饰
 *
 *  Field类方法
 *  第一个参数 表示给哪个对象的name属性赋值
 *  第二个参数 具体的属性值
 *  set(Object obj,Object value)
 *
 *  取值传参 表示声明 访问哪个对象的此属性值
 *  get(Object obj)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestField2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> stuClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.test6.Student&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredFields <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Object</span> obj <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Field</span> declaredField <span class="token operator">:</span> declaredFields<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>declaredField<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;====&quot;</span> <span class="token operator">+</span> declaredField<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Field</span> nameField <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 调用此方法表示忽略JVM安全检查 即不再抛出异常 即可以访问了</span>
            nameField<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 第一个参数 表示给哪个对象的name属性赋值</span>
            <span class="token comment">// 第二个参数 具体的属性值</span>
            nameField<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 取值传参 表示声明 访问哪个学生对象的 name属性值</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>nameField<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchFieldException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InstantiationException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalAccessException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-获取方法" tabindex="-1"><a class="header-anchor" href="#_3-2-获取方法" aria-hidden="true">#</a> 3.2 获取方法</h4><blockquote><p>Class类提供的两个方法</p><p>Method getMethod(String name,Class&lt;?&gt;... parameterType)</p><p>根据方法名和形参列表获取一个public或者继承自父类的方法</p><p>Method [] getMethods() 获取本类中所有public修饰的 和 继承自父类的方法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationTargetException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/20 15:34
 *  Class类提供的两个方法
 *  Method getMethod(String name,Class<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>?</span><span class="token punctuation">&gt;</span></span>... parameterType)
 *  根据方法名和形参列表获取一个public或者继承自父类的方法
 *
 *  Method [] getMethods() 获取本类中所有public修饰的 和 继承自父类的方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMethod1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> stuClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.test6.Student&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;-----&quot;</span> <span class="token operator">+</span>   method<span class="token punctuation">.</span><span class="token function">getParameterCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Method</span> noParameterM4 <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;m4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Object</span> obj <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            noParameterM4<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


            <span class="token class-name">Method</span> intParameterM4 <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;m4&quot;</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            intParameterM4<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Method</span> twoParameterM4 <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;m4&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            twoParameterM4<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchMethodException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InstantiationException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalAccessException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InvocationTargetException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Method getDeclaredMethod(String name,Class&lt;?&gt;... parameterType)</p><p>根据方法名和形参列表获取一个任意修饰符修饰的 本类中定义的方法 (不包括继承自父类的方法)</p><p>Method [] getDeclaredMethods() 获取本类中所有的任意修饰符修饰的已定义的方法(不包括继承自父类的方法)</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/20 15:46
 *  Method getDeclaredMethod(String name,Class<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>?</span><span class="token punctuation">&gt;</span></span>... parameterType)
 *   根据方法名和形参列表获取一个任意修饰符修饰的 本类中定义的方法 (不包括继承自父类的方法)
 *
 *    Method [] getDeclaredMethods() 获取本类中所有的任意修饰符修饰的已定义的方法(不包括继承自父类的方法)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMethod2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> stuClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.test6.Student&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredMethods <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> declaredMethod <span class="token operator">:</span> declaredMethods<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>declaredMethod<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;---&quot;</span> <span class="token operator">+</span> declaredMethod<span class="token punctuation">.</span><span class="token function">getParameterCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Method</span> m1 <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;m1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        m1<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 忽略JVM安全检查 即可以访问</span>

        <span class="token class-name">Object</span> obj <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        m1<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-获取构造器" tabindex="-1"><a class="header-anchor" href="#_3-3-获取构造器" aria-hidden="true">#</a> 3.3 获取构造器</h4><blockquote><p>Class类提供如下方法获取构造器对象</p><p>Constructor getConstructor(Class&lt;?&gt; ...parameterType) 根据参数列表获取一个public修饰的构造器</p><p>Constructor [] getConstructors() 获取本类中所有的public修饰的构造器</p><p>Class类中的newInstance() 和 Constructor类中的newInstance(Object...args)</p><p>注意区分</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test8</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/20 15:53
 *  Class类提供如下方法获取构造器对象
 *
 *  Constructor getConstructor(Class<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>?</span><span class="token punctuation">&gt;</span></span> ...parameterType) 根据参数列表获取一个public修饰的构造器
 *  Constructor [] getConstructors() 获取本类中所有的public修饰的构造器
 *
 *
 *  Class类中的newInstance()  和 Constructor类中的newInstance(Object...args)
 *  注意区分
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestConstructors1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> stuClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.test6.Student&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> constructor <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Object</span> obj <span class="token operator">=</span> constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;stu = &quot;</span> <span class="token operator">+</span> stu<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> constructors <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> con <span class="token operator">:</span> constructors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>con<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;=======&quot;</span> <span class="token operator">+</span> con<span class="token punctuation">.</span><span class="token function">getParameterCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Class类提供如下方法获取构造器对象</p><p>Constructor getDeclaredConstructor(Class&lt;?&gt; ...parameterType) 根据参数列表获取任意修饰符修饰的构造器</p><p>Constructor [] getDeclaredConstructors() 获取本类中所有任意修饰符修饰的构造器</p><p>Class类中的newInstance() 和 Constructor类中的newInstance(Object...args)</p><p>注意区分</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test8</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6<span class="token punctuation">.</span></span><span class="token class-name">Student</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/20 15:53
 *  Class类提供如下方法获取构造器对象
 *
 *  Constructor getDeclaredConstructor(Class<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>?</span><span class="token punctuation">&gt;</span></span> ...parameterType) 根据参数列表获取任意修饰符修饰的构造器
 *  Constructor [] getDeclaredConstructors() 获取本类中所有任意修饰符修饰的构造器
 *
 *
 *  Class类中的newInstance()  和 Constructor类中的newInstance(Object...args)
 *  注意区分
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestConstructors2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> stuClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.test6.Student&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> constructor <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        constructor<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Object</span> obj <span class="token operator">=</span> constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;stu = &quot;</span> <span class="token operator">+</span> stu<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredConstructors <span class="token operator">=</span> stuClass<span class="token punctuation">.</span><span class="token function">getDeclaredConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> con <span class="token operator">:</span> declaredConstructors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>con<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;----&quot;</span> <span class="token operator">+</span> con<span class="token punctuation">.</span><span class="token function">getParameterCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-类加载器" tabindex="-1"><a class="header-anchor" href="#_4-类加载器" aria-hidden="true">#</a> 4. 类加载器</h3><p><img src="`+p+`" alt="111"></p><blockquote><p>类加载器的作用：</p><p>加载类的</p></blockquote><blockquote><p>类加载的过程:</p><p>当程序主动使用某个类时，如果该类还未被加载到内存中，则系统会通过如下三个步骤来对该类进行初始化。</p><p>①加载类(load) ： 将类的class文件读入内存，并为之创建一个java.lang.Class对象。此过程由类加载器完成</p><p>将class文件字节码内容加载到内存中，并将这些数据转换成方法区的运行时数据结构，然后生成一个代表这个类的java.lang.Class对象。这个加载的过程需要类加载器参与。</p><p>②链接(link) ： 将类的二进制数据合并到JRE中</p><p>验证：确保加载的类信息符合JVM规范，例如：以cafe开头，没有安全方面的问题</p><p>准备：正式为类变量（static）分配内存并设置类变量默认初始值的阶段，这些内存都将在方法区中进行分配(静态区)。</p><p>解析：将类、接口、字段和方法的符号引用转为直接引用。</p><p>③初始化(Initialize) : JVM负责对类进行初始化</p><p>执行类构造器&lt;clinit&gt;()方法的过程。类构造器&lt;clinit&gt;()方法是由编译期自动收集类中所有类变量的赋值动作和静态代码块中的语句合并产生的。（类构造器是构造类信息的，不是构造该类对象的构造器）。</p><p>当初始化一个类的时候，如果发现其父类还没有进行初始化，则需要先触发其父类的初始化。</p><p>虚拟机会保证一个类的&lt;clinit&gt;()方法在多线程环境中被正确加锁和同步。</p></blockquote><blockquote><p>BootStrap ClassLoader 顶层(核心)类加载器 C:\\Program Files\\Java\\jre1.8.0_131\\lib\\ rt.jar</p><p>Extension ClassLoader 扩展类加载器 C:\\Program Files\\Java\\jre1.8.0_131\\lib\\ext.*.jar</p><p>Application ClassLoader 引用程序类加载器 加载自定义的类</p><p>自定义类加载器 继承ClassLoad 重写 findClass()方法</p></blockquote><blockquote><p>双亲委派模型(机制) ：</p><p>当JVM需要加载一个类时 先委托给上级的类加载器来加载 以此类推</p><p>这样的设计的目的是为了保证Java中的源代码不被污染 入侵</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">sun<span class="token punctuation">.</span>net<span class="token punctuation">.</span>spi<span class="token punctuation">.</span>nameservice<span class="token punctuation">.</span>dns<span class="token punctuation">.</span></span><span class="token class-name">DNSNameService</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/21 11:24
 *  类加载器 ClassLoader
 *
 *
 *  类加载作用？加载类的
 *
     *  类加载的过程:
     *  当程序主动使用某个类时，如果该类还未被加载到内存中，则系统会通过如下三个步骤来对该类进行初始化。
     *  ①加载类(load) ： 将类的class文件读入内存，并为之创建一个java.lang.Class对象。此过程由类加载器完成
     *  将class文件字节码内容加载到内存中，并将这些数据转换成方法区的运行时数据结构，然后生成一个代表这个类的java.lang.Class对象。这个加载的过程需要类加载器参与。
     *
     *  ②链接(link) ： 将类的二进制数据合并到JRE中
     *      验证：确保加载的类信息符合JVM规范，例如：以cafe开头，没有安全方面的问题
     *      准备：正式为类变量（static）分配内存并设置类变量默认初始值的阶段，这些内存都将在方法区中进行分配(静态区)。
     *      解析：将类、接口、字段和方法的符号引用转为直接引用。
     *  ③初始化(Initialize) : JVM负责对类进行初始化
     *  执行类构造器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>clinit</span><span class="token punctuation">&gt;</span></span>()方法的过程。类构造器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>clinit</span><span class="token punctuation">&gt;</span></span>()方法是由编译期自动收集类中所有类变量的赋值动作和静态代码块中的语句合并产生的。（类构造器是构造类信息的，不是构造该类对象的构造器）。
     *  当初始化一个类的时候，如果发现其父类还没有进行初始化，则需要先触发其父类的初始化。
     *  虚拟机会保证一个类的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>clinit</span><span class="token punctuation">&gt;</span></span>()方法在多线程环境中被正确加锁和同步。
 *
 *
 *  类加载器有哪些类型
 *  BootStrap ClassLoader  顶层(核心)类加载器 C:\\Program Files\\Java\\jre1.8.0_131\\lib\\ rt.jar
 *  Extension ClassLoader   扩展类加载器 C:\\Program Files\\Java\\jre1.8.0_131\\lib\\ext.*.jar
 *  Application ClassLoader 引用程序类加载器 加载自定义的类
 *  自定义类加载器 继承ClassLoad 重写 findClass()方法
 *
 *  双亲委派模型(机制) ：
 *  当JVM需要加载一个类的时候 先委托给上级的类加载器来加载 以此类推
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Note</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Note</span> note <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Note</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> note<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



        <span class="token class-name">DNSNameService</span> dnsNameService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DNSNameService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dnsNameService<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dnsNameService<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),o=[c];function l(i,u){return s(),a("div",null,o)}const d=n(e,[["render",l],["__file","day21-注解和反射.html.vue"]]);export{d as default};
