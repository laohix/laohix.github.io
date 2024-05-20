import{_ as n,o as s,c as a,e as p}from"./app-8007fa1b.js";const t={},e=p(`<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><h3 id="_1-接口概念" tabindex="-1"><a class="header-anchor" href="#_1-接口概念" aria-hidden="true">#</a> 1. 接口概念</h3><blockquote><p><strong><code>接口 相当于一种约定 接口只关注约定本身 不关注具体实现</code></strong></p></blockquote><blockquote><p>1.接口中所有的方法默认为全局抽象方法 即使用public abstract修饰</p><p>2.接口不能直接new对象 必须通过new实现类(子类)的方式创建对象 多态向上转型</p><p>3.实现类(子类)必须实现(重写)接口中所有的抽象方法 除非子类也是抽象类 或者 子类也是接口</p><p>4.接口中不能书写普通属性(默认为全局静态常量) 普通方法(JDK8开始可以使用default编写普通方法) 静态方法 构造方法</p><p>5.接口实现多态的方式与之前一致</p><p>6.一个类只能继承一个父类 但是可以实现多个接口</p><p>7.一个接口 可以 继承 多个接口</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 11:02
 *  打印机类
 *  墨盒 ： 彩色 黑色
 *  纸张 ： A4 B5
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Printer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">InkBox</span> inkBox<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Paper</span> paper<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setInkBox</span><span class="token punctuation">(</span><span class="token class-name">InkBox</span> inkBox<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>inkBox <span class="token operator">=</span> inkBox<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">InkBox</span> <span class="token function">getInkBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> inkBox<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPaper</span><span class="token punctuation">(</span><span class="token class-name">Paper</span> paper<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>paper <span class="token operator">=</span> paper<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Paper</span> <span class="token function">getPaper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> paper<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getInkBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInkBoxType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;在 &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPaper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPaperType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;纸张上打印&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InkBox</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">getInkBoxType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 11:04
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BlackInkBox</span> <span class="token keyword">implements</span>  <span class="token class-name">InkBox</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInkBoxType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;黑色墨盒&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 11:04
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ColorInkBox</span> <span class="token keyword">implements</span>  <span class="token class-name">InkBox</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInkBoxType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;彩色墨盒&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Paper</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">getPaperType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 11:05
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A4</span> <span class="token keyword">implements</span>  <span class="token class-name">Paper</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPaperType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;A4&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 11:05
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">B5</span> <span class="token keyword">implements</span>  <span class="token class-name">Paper</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPaperType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;B5&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 11:09
 *  当你关注事物的本质 使用抽象类
 *  当你关注某个功能 使用接口
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Printer</span> hp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Printer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">InkBox</span> black <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlackInkBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InkBox</span> color <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ColorInkBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        hp<span class="token punctuation">.</span><span class="token function">setInkBox</span><span class="token punctuation">(</span>black<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Paper</span> a4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Paper</span> b5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        hp<span class="token punctuation">.</span><span class="token function">setPaper</span><span class="token punctuation">(</span>a4<span class="token punctuation">)</span><span class="token punctuation">;</span>

        hp<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">InkBox</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> inkBoxes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InkBox</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        inkBoxes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlackInkBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        inkBoxes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ColorInkBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-接口和抽象类" tabindex="-1"><a class="header-anchor" href="#_2-接口和抽象类" aria-hidden="true">#</a> 2. 接口和抽象类</h3><blockquote><p><strong><code>当你关注事物的本质 使用抽象类</code></strong></p><p><strong><code>当你关注某个功能 使用接口</code></strong></p></blockquote><blockquote><p>相同点</p><p>代表系统的抽象层</p><p>都不能被实例化</p><p>都能包含抽象方法</p><p>用于描述系统提供的服务，不必提供具体实现</p><p>不同点</p><p>在抽象类中可以为部分方法提供默认实现，而接口中只能包含抽象方法</p><p>抽象类便于复用，接口便于代码维护</p><p>一个类只能继承一个直接的父类，但可以实现多个接口</p></blockquote><blockquote><p>使用原则</p><p>接口做系统与外界交互的窗口</p><p>接口提供服务</p><p>接口本身一旦制定，就不允许随意修改</p><p>抽象类可完成部分功能实现，还有部分功能可作为系统的扩展点</p></blockquote><blockquote><p>多用组合，少用继承</p><p>针对接口编程</p><p>针对扩展开放，针对改变关闭</p></blockquote><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2><h3 id="_1-try-catch处理异常" tabindex="-1"><a class="header-anchor" href="#_1-try-catch处理异常" aria-hidden="true">#</a> 1. try-catch处理异常</h3><h4 id="_1-1-情况1" tabindex="-1"><a class="header-anchor" href="#_1-1-情况1" aria-hidden="true">#</a> 1.1 情况1</h4><blockquote><p>使用try-catch处理异常情况1 ： 正常捕获到异常</p><p>try代码块中保存可能出现异常的代码</p><p>catch用于捕获异常</p><p>try 或者 catch 均不能单独出现 try必须结合catch 或者 catch-finally 或者 finally</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">InputMismatchException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 14:50
 *  使用try-catch处理异常情况1 ： 正常捕获到异常
 *  try代码块中保存可能出现异常的代码
 *  catch用于捕获异常
 *
 *  try 或者 catch 均不能单独出现 try必须结合catch  或者 catch-finally  或者 finally
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestTryCatch1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token class-name">Scanner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;请输入被除数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num1 <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;请输入除数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num2 <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1<span class="token operator">+</span><span class="token string">&quot;/&quot;</span><span class="token operator">+</span> num2 <span class="token operator">+</span><span class="token string">&quot;=&quot;</span><span class="token operator">+</span> num1<span class="token operator">/</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">InputMismatchException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;感谢使用本程序！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-情况2" tabindex="-1"><a class="header-anchor" href="#_1-2-情况2" aria-hidden="true">#</a> 1.2 情况2</h4><blockquote><p>使用try-catch处理异常情况2 ：使用多个catch块捕获多种异常</p><p>使用多个catch块捕获多种异常 注意先写子类 然后再写父类 不推荐只写一个父类的方式处理异常</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">InputMismatchException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 14:59
 *  使用try-catch处理异常情况2 ：使用多个catch块捕获多种异常
 *  使用多个catch块捕获多种异常 注意先写子类 然后再写父类 不推荐只写一个父类的方式处理异常
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestTryCatch2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token class-name">Scanner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;请输入被除数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num1 <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;请输入除数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num2 <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1<span class="token operator">+</span><span class="token string">&quot;/&quot;</span><span class="token operator">+</span> num2 <span class="token operator">+</span><span class="token string">&quot;=&quot;</span><span class="token operator">+</span> num1<span class="token operator">/</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">InputMismatchException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">ArithmeticException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;感谢使用本程序！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-finally" tabindex="-1"><a class="header-anchor" href="#_2-finally" aria-hidden="true">#</a> 2. finally</h3><blockquote><p>finally：表示不管是否出现异常 以及异常是否被捕获到 都将执行的代码</p><p>finally 不能单独出现 必须结合 try 或者 try-catch</p><p>finally不执行的唯一情况 ： 在执行之前退出JVM虚拟机</p><p>System.exit(int status) : 0表示正常退出 非0表示非正常退出</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">InputMismatchException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 15:30
 *  finally ： 表示不管是否出现异常 以及异常是否被捕获到 都将执行的代码
 *  finally 不能单独出现 必须结合 try 或者 try-catch
 *  finally不执行的唯一情况 ： 在执行之前退出JVM虚拟机
 *
 *  System.exit(int status) : 0表示正常退出 非0表示非正常退出
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFinally</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token class-name">Scanner</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;请输入被除数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num1 <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;请输入除数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num2 <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1<span class="token operator">+</span><span class="token string">&quot;/&quot;</span><span class="token operator">+</span> num2 <span class="token operator">+</span><span class="token string">&quot;=&quot;</span><span class="token operator">+</span> num1<span class="token operator">/</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//            System.exit(12);</span>

        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">InputMismatchException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;感谢使用本程序！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>finally面试题 : 注意区分返回值为基本数据类型 还是引用数据类型</p><p>回顾 值传递 和 引用传递</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 15:36
 *  finally面试题 : 注意区分返回值为基本数据类型 还是引用数据类型
 *  回顾 值传递 和 引用传递 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFinallyInterview</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
            num<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> num<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
            num<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getNums</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>nums <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> nums<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token function">getNums</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-throw和throws" tabindex="-1"><a class="header-anchor" href="#_3-throw和throws" aria-hidden="true">#</a> 3. throw和throws</h3><blockquote><p>throws 表示在方法声明的位置 声明异常</p><p>根据声明异常类型的不同 调用者需要做出不同的处理</p><p>运行时异常：RuntimeException 及其子类属于运行时异常 调用者不必处理</p><p>检查异常(CheckedException)：除了RuntimeException之外的其他异常 都属于检查异常</p><p>调用者必须处理 可以继续往后声明给JVM虚拟机 也可以 使用try-catch处理</p><p>throw 表示在方法体内抛出异常</p><p>针对抛出的异常 需要做出不同的处理</p><p>运行时异常 直接抛出 无需任何处理</p><p>检查异常 抛出以后 必须声明</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 15:49
 *  throws 表示在方法声明的位置 声明异常
 *  根据声明异常类型的不同 调用者需要做出不同的处理
 *  运行时异常：RuntimeException 及其子类属于运行时异常 调用者不必处理
 *  检查异常(CheckedException)：除了RuntimeException之外的其他异常 都属于检查异常
 *  调用者必须处理 可以继续往后声明给JVM虚拟机 也可以 使用try-catch处理
 *
 *  throw 表示在方法体内抛出异常
 *  针对抛出的异常 需要做出不同的处理
 *  运行时异常 直接抛出 无需任何处理
 *  检查异常 抛出以后 必须声明
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThrowAndThrows</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">,</span><span class="token class-name">ArithmeticException</span><span class="token punctuation">,</span><span class="token class-name">ClassCastException</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">inputAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// ……</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> age <span class="token operator">&gt;</span> <span class="token number">130</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;年龄不合法，必须在1 ~ 130 之间&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ……</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IOException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">m3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">m4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">inputAge</span><span class="token punctuation">(</span><span class="token number">155</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token function">m5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-自定义异常" tabindex="-1"><a class="header-anchor" href="#_4-自定义异常" aria-hidden="true">#</a> 4. 自定义异常</h3><blockquote><p>自定义异常步骤</p><p>1.继承 Throwable 或者 Exception 或者 RuntimeException 任意其中一个</p><p>继承Throwable 或者 Exception 表示 检查异常 继承RuntimeException 表示为运行时异常</p><p>2.调用父类的有参构造方法完成异常信息初始化</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 16:06
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&lt;</span> <span class="token number">130</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InputAgeOutOfBoundsException</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/9 16:07
 *  自定义异常步骤
 *  1.继承 Throwable 或者 Exception  或者 RuntimeException 任意其中一个
 *  继承Throwable 或者  Exception 表示 检查异常 继承RuntimeException 表示为运行时异常
 *  2.调用父类的有参构造方法完成异常信息初始化
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InputAgeOutOfBoundsException</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">InputAgeOutOfBoundsException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","day13-接口与异常.html.vue"]]);export{k as default};
