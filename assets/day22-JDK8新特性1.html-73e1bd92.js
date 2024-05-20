import{_ as n,o as s,c as a,e as p}from"./app-8007fa1b.js";const t={},c=p(`<h2 id="jdk8新特性" tabindex="-1"><a class="header-anchor" href="#jdk8新特性" aria-hidden="true">#</a> JDK8新特性</h2><h3 id="_1-接口相关" tabindex="-1"><a class="header-anchor" href="#_1-接口相关" aria-hidden="true">#</a> 1.接口相关</h3><blockquote><p>在JDK8中接口中可以书写普通方法 和 静态方法</p><p>1.普通方法使用default来修饰</p><p>2.静态方法直接书写</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接口中的普通方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接口中的静态方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">A1</span> <span class="token keyword">implements</span>  <span class="token class-name">A</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;重写m1方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对接口中的方法扩展&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B1</span> <span class="token keyword">extends</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">B1</span><span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-集合类相关的" tabindex="-1"><a class="header-anchor" href="#_2-集合类相关的" aria-hidden="true">#</a> 2.集合类相关的</h3><blockquote><p>1.ArrayList加载数组时机发生了改变，由原来的执行无参构造初始化长度为10的数组改变为了第一次添加元素初始化长度为10的数组</p><p>2.HashMap由原来的数组 + 单向链表 变为了 数组 + 单向链表 + 红黑树</p></blockquote><h3 id="_3-函数式接口" tabindex="-1"><a class="header-anchor" href="#_3-函数式接口" aria-hidden="true">#</a> 3.函数式接口</h3><blockquote><p>函数式接口 ： 函数式接口是指接口中只有一个抽象方法的接口 即可称之为函数式接口 SAM 接口</p><p>SAM Single Abstract Method 通常使用@FunctionalInterface注解修饰</p><p>函数式编程 ： 函数式编程是一种编程思想 就像面向对象 、面向过程编程一样 属于一种编程思想</p><p>函数式编程在很多语言中都有 比较具有代表性 最早使用函数式编程思想的 Haskell</p><p>函数式编程特点 ： 强调使用哪个函数执行了什么操作 不关心是谁 调用这个函数</p><p>注意：代码越简洁 前期我们理解起来越难 后续用起来越舒服</p></blockquote><h3 id="_4-lambda表达式" tabindex="-1"><a class="header-anchor" href="#_4-lambda表达式" aria-hidden="true">#</a> 4.lambda表达式</h3><blockquote><p>使用lambda表达式 其实属于对函数式接口语法的一种优化 即书写起来更为简洁 优雅 属于JDK1.8新增的内容</p><p>使用格式 参数列表，可以不加类型，直接写参数名称 (参数列表)-&gt;{方法体};</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 *  lambda表达式的前提 ： 必须为函数式接口 (抽象类无法使用lambda表达式 )
 */</span>

<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token keyword">class</span> <span class="token class-name">C1</span> <span class="token keyword">implements</span>  <span class="token class-name">C</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TestC</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">C</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;匿名内部类的方式重写m1方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        c1<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 没有参数 没有返回值 方法体只有一条语句</span>
        <span class="token class-name">C</span> c2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;lambda表达式的方式重写m1方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        c2<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">D</span> d1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token class-name">String</span> b<span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world &quot;</span> <span class="token operator">+</span> a  <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 有参数 没有返回值 方法体只有一条语句</span>
        d1<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">D</span> d2 <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span> <span class="token operator">+</span> a <span class="token operator">+</span> b <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 有参数 有返回值 方法体只有一条语句 return必须省略 直接写返回值</span>
        <span class="token class-name">E</span> e1 <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">-&gt;</span>  a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e1<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 有参数 有返回值  方法体多条语句</span>
        <span class="token class-name">E</span> e2 <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法体1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法体2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法体3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e2<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">E</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token keyword">interface</span> <span class="token class-name">D</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token class-name">String</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-方法引用" tabindex="-1"><a class="header-anchor" href="#_5-方法引用" aria-hidden="true">#</a> 5.方法引用</h3><blockquote><p>方法引用 ： 将一个方法的方法体(功能)用作当前函数式接口中的抽象方法的方法体(功能) 引用</p><p>构造方法引用 类名 :: new 根据函数式接口中的抽象方法 来匹配一个构造器 用于本方法的方法体执行</p><p>普通方法引用 对象名 :: 方法名 根据函数式接口中的抽象方法 来匹配一个普通方法 用于本方法的方法体执行</p><p>静态方法引用 类名 :: 方法名 根据函数式接口中的抽象方法 来匹配一个静态方法 用于本方法的方法体执行</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>print<span class="token punctuation">.</span></span><span class="token class-name">Book</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/4/28 10:18
 *  方法引用 ： 将一个方法的方法体(功能)用作当前函数式接口中的抽象方法的方法体(功能)  引用
 *
 *  构造方法引用 类名 :: new 根据函数式接口中的抽象方法 来匹配一个构造器  用于本方法的方法体执行
 *  普通方法引用 对象名 :: 方法名 根据函数式接口中的抽象方法 来匹配一个普通方法  用于本方法的方法体执行
 *  静态方法引用 类名 :: 方法名 根据函数式接口中的抽象方法 来匹配一个静态方法  用于本方法的方法体执行
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Note</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A</span> a1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;lambda表达式的方式实现m1方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">A</span> a2 <span class="token operator">=</span> <span class="token class-name">Student</span> <span class="token operator">::</span> <span class="token keyword">new</span><span class="token punctuation">;</span>
        a2<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">B</span> b1 <span class="token operator">=</span> <span class="token class-name">Student</span> <span class="token operator">::</span> <span class="token keyword">new</span><span class="token punctuation">;</span>
        b1<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;abc hello world&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">C</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span> c1 <span class="token operator">=</span> str1 <span class="token operator">::</span> <span class="token function">startsWith</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">C</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span> c2 <span class="token operator">=</span> str1 <span class="token operator">::</span> <span class="token function">charAt</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c2<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">C</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> c3 <span class="token operator">=</span> str1 <span class="token operator">::</span> <span class="token function">concat</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c3<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token string">&quot;666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">C</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span> c4 <span class="token operator">=</span> str1 <span class="token operator">::</span> <span class="token function">contains</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c4<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">C</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> c5 <span class="token operator">=</span> <span class="token class-name">String</span> <span class="token operator">::</span> <span class="token function">valueOf</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c5<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Math.random()</span>

        <span class="token class-name">D</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> d1 <span class="token operator">=</span> <span class="token class-name">Math</span> <span class="token operator">::</span> <span class="token function">random</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">C</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">,</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> c6 <span class="token operator">=</span> <span class="token class-name">Math</span> <span class="token operator">::</span> <span class="token function">ceil</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c6<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token number">5.3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// System.out.println();</span>
        <span class="token class-name">E</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> e1 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out <span class="token operator">::</span> <span class="token function">println</span><span class="token punctuation">;</span>
        e1<span class="token punctuation">.</span><span class="token function">m1</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">E</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">P</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token class-name">P</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">D</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token class-name">R</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">C</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">P</span><span class="token punctuation">,</span><span class="token class-name">R</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token class-name">R</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token class-name">P</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Student有参构造方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Student无参构造方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),e=[c];function o(l,i){return s(),a("div",null,e)}const k=n(t,[["render",o],["__file","day22-JDK8新特性1.html.vue"]]);export{k as default};
