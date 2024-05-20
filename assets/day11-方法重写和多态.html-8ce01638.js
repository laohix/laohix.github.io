import{_ as n,o as s,c as a,e as p}from"./app-8007fa1b.js";const e={},t=p(`<h2 id="方法重写和多态" tabindex="-1"><a class="header-anchor" href="#方法重写和多态" aria-hidden="true">#</a> 方法重写和多态</h2><h3 id="_1-方法重写概念" tabindex="-1"><a class="header-anchor" href="#_1-方法重写概念" aria-hidden="true">#</a> 1. 方法重写概念</h3><blockquote><p>方法重写 Overrides 方法重载 Overload</p><p>1.存在于父子类之间(子类对父类的方法进行重写 必须有继承关系)</p><p>2.方法名称相同</p><p>3.参数列表相同</p><p>4.返回值相同(或者是其子类)</p><p>5.访问权限不能小于(严于)父类</p><p>6.静态方法可以继承 但是不能被重写</p><p>7.不能抛出、声明比父类更多的异常</p><p>@Override 注解表示子类重写父类的方法 可以提高代码的阅读性</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:32
 *  宠物类 父类
 *  父类中书写子类共有的信息 (属性和方法)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> health<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> love<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getHealth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> health<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHealth</span><span class="token punctuation">(</span><span class="token keyword">int</span> health<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getLove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLove</span><span class="token punctuation">(</span><span class="token keyword">int</span> love<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>love <span class="token operator">=</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

     <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的名字是：&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的健康值是：&quot;</span> <span class="token operator">+</span> health<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的亲密值是：&quot;</span> <span class="token operator">+</span> love<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>love <span class="token operator">=</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:27
 *  狗类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> strain<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getStrain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStrain</span><span class="token punctuation">(</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">,</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>health<span class="token punctuation">,</span>love<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *  方法重写 Overrides  方法重载 Overload
     *  1.存在于父子类之间(子类对父类的方法进行重写 必须有继承关系)
     *  2.方法名称相同
     *  3.参数列表相同
     *  4.返回值相同(或者是其子类)
     *  5.访问权限不能小于(严于)父类
     *  6.静态方法可以继承 但是不能被重写
     *
     *  7.不能抛出、声明比父类更多的异常
     *
     * @Override 注解表示子类重写父类的方法 可以提高代码的阅读性
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;狗狗的品种是:&quot;</span> <span class="token operator">+</span> strain<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:28
 *  企鹅类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Penguin</span> <span class="token keyword">extends</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">String</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">,</span><span class="token class-name">String</span> sex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>health<span class="token punctuation">,</span>love<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// alt + shift + ↑↓ 移动整行代码</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;企鹅的性别是：&quot;</span> <span class="token operator">+</span> sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-object类" tabindex="-1"><a class="header-anchor" href="#_2-object类" aria-hidden="true">#</a> 2. Object类</h3><blockquote><p>Object类是所有类的父类 所有对象包括数组都实现了此类的方法。</p><p>我们通常对Object类中的方法进行重写，以实现自定义需求的效果(私人订制)，</p></blockquote><h3 id="_3-重写tostring方法" tabindex="-1"><a class="header-anchor" href="#_3-重写tostring方法" aria-hidden="true">#</a> 3. 重写toString方法</h3><blockquote><p>当我们直接打印一个对象 相当于调用此对象的toString方法</p><p>1.为什么直接输出对象会出现包名+ 类名(全限定名) + hash值</p><p>因为直接打印一个对象 相当于调用此对象的toString方法</p><p>2.为什么调用toString就会出现包名+ 类名(全限定名) + hash值</p><p>因为父类Object类中就是这样实现的</p><p>3.我们自定义的类 为什么要重写toString呢？</p><p>因为我们通常获取到包名类名hash值 是没有用的 我们希望直接打印对象 就获取到此对象的属性名 和 属性值</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 9:53
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Student{name = &#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;&#39;,age = &quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;赵四&quot;</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>

        <span class="token comment">// 当我们直接打印一个对象 相当于调用此对象的toString方法</span>
        <span class="token comment">// 1.为什么直接输出对象会出现包名+ 类名(全限定名) + hash值</span>
        <span class="token comment">// 因为直接打印一个对象 相当于调用此对象的toString方法</span>
        <span class="token comment">// 2.为什么调用toString就会出现包名+ 类名(全限定名) + hash值</span>
        <span class="token comment">// 因为父类Object类中就是这样实现的</span>
        <span class="token comment">// 3.我们自定义的类 为什么要重写toString呢？</span>
        <span class="token comment">// 因为我们通常获取到包名类名hash值 是没有用的 我们希望直接打印对象 就获取到此对象的属性名 和 属性值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-重写equals方法" tabindex="-1"><a class="header-anchor" href="#_4-重写equals方法" aria-hidden="true">#</a> 4. 重写equals方法</h3><blockquote><p><strong><code>面试题：== 和equals的区别?</code></strong></p><p>==比较基本数据类型 比较值</p><p>==比较引用数据类型 比较地址</p><p>equals本身也比较地址 但是我们可以重写equals方法 自定义比较规则</p><p>String类就是对Object类中的equals方法进行了重写 ： 将原本的比较地址 重写了为了比较地址 并且 比较内容</p><p>为什么要重写equals方法？</p><p>因为父类中的equals方法实现原本为比较地址 但是在实际开发中 我们要结合现实生活中的情况</p><p>来比较对象 比如 比较两个人 根据名字 和 身份证号比较更加合理</p><p>所以我们就可以重写equals方法 将原本的比较地址 重写为比较名字和身份证号</p><p>如何区分当前调用的哪个类中的方法 或者 哪个类中的属性？</p><p>观察点之前的对象是哪个类的对象 即调用哪个类中的属性和方法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 10:41
 *  alt + insert
 *
 *  equals方法本身的作用？
 *  比较两个对象的地址值是否相同 如果是则返回为true  如果不是则返回为false
 *
 *  面试题：== 和equals的区别?
 *  ==比较基本数据类型 比较值
 *  ==比较引用数据类型 比较地址
 *  equals本身也比较地址 但是我们可以重写equals方法 自定义比较规则
 *  String类就是对Object类中的equals方法进行了重写 ： 将原本的比较地址 重写了为了比较地址 并且 比较内容
 *
 *  为什么要重写equals方法？
 *  因为父类中的equals方法实现原本为比较地址 但是在实际开发中 我们要结合现实生活中的情况
 *  来比较对象 比如 比较两个人 根据名字 和 身份证号比较更加合理
 *  所以我们就可以重写equals方法 将原本的比较地址 重写为比较名字和身份证号
 *
 *  如何区分当前调用的哪个类中的方法 或者 哪个类中的属性？
 *  观察点之前的对象是哪个类的对象 即调用哪个类中的属性和方法
 *
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> idCard<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getIdCard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> idCard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setIdCard</span><span class="token punctuation">(</span><span class="token class-name">String</span> idCard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>idCard <span class="token operator">=</span> idCard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> idCard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>idCard <span class="token operator">=</span> idCard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 为什么形参的Object类型的 ？</span>
        <span class="token comment">// 因为这里是方法重写 要求参数列表必须跟父类相同 而父类中就是Object类型</span>

        <span class="token comment">// 为什么这里要强制类型转换？</span>
        <span class="token comment">// 因为Object类型的参数是无法访问name和idCard这两个属性的 所以要向下转型</span>
        <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span>obj<span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>idCard<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>idCard<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;56789454798764612984552&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Person</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;56789454798764612984552&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1 <span class="token operator">==</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>


        <span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str4 <span class="token operator">=</span> str3<span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str3 <span class="token operator">==</span> str4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-重写hashcode方法" tabindex="-1"><a class="header-anchor" href="#_5-重写hashcode方法" aria-hidden="true">#</a> 5.重写hashCode方法</h3><blockquote><p>hashCode方法的作用？ 返回当前对象的hash值</p><p>hash值是什么？</p><p>hash值并不是地址值 Java中的地址我们是无法获取到的</p><p>根据对象的地址等信息 使用杂凑算法所计算出来的一个数值</p><p>为什么要重写hashCode方法？</p><p>1.默认情况下 hashCode 是根据地址所计算出来的 equals方法是比较地址</p><p>所以 两个对象equals比较为true 则hash值相同/相等 但是目前我们重写了equals方法 打破了这种默认规则</p><p>所以 我们要继续重写hashCode以维持这种规则</p><p>2.在散列数据结构中 默认以equals比较为true 并且hashCode相同作为去除重复的依据</p><p>3.在实际开发中 equals方法和 hashCode方法是绑定在一起 要么都重写 要么都不重写</p><p>总结：最终重写hashCode()方法要实现的效果 当equals比较为true 则hashCode相等</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Objects</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 10:41
 *  hashCode方法的作用？ 返回当前对象的hash值
 *
 *  hash值是什么？
 *  hash值并不是地址值 Java中的地址我们是无法获取到的
 *  根据对象的地址等信息 使用杂凑算法所计算出来的一个数值
 *
 *  为什么要重写hashCode方法？
 *  1.默认情况下 hashCode 是根据地址所计算出来的  equals方法是比较地址
 *  所以 两个对象equals比较为true 则hash值相同/相等  但是目前我们重写了equals方法 打破了这种默认规则
 *  所以 我们要继续重写hashCode以维持这种规则
 *
 *  2.在散列数据结构中 默认以equals比较为true 并且hashCode相同作为去除重复的依据
 *
 *  3.在实际开发中 equals方法和 hashCode方法是绑定在一起 要么都重写 要么都不重写
 *
 *  总结：最终重写hashCode()方法要实现的效果 当equals比较为true 则hashCode相等
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> idCard<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getIdCard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> idCard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setIdCard</span><span class="token punctuation">(</span><span class="token class-name">String</span> idCard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>idCard <span class="token operator">=</span> idCard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> idCard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>idCard <span class="token operator">=</span> idCard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>




<span class="token comment">//    public boolean equals(Object obj){</span>
<span class="token comment">//        if(this == obj){</span>
<span class="token comment">//            return true;</span>
<span class="token comment">//        }</span>
<span class="token comment">//        Person p1 = (Person)obj;</span>
<span class="token comment">//</span>
<span class="token comment">//        if(this.name.equals(p1.name) &amp;&amp; this.idCard.equals(p1.idCard)){</span>
<span class="token comment">//            return true;</span>
<span class="token comment">//        }</span>
<span class="token comment">//        return false;</span>
<span class="token comment">//    }</span>

<span class="token comment">//    public  int hashCode() {</span>
<span class="token comment">//        int result = 1; // 最终要返回的hash值结果、</span>
<span class="token comment">//        int prime = 12; // 权重 31 计算hash值的重要条件</span>
<span class="token comment">//        result = result * prime + this.name == null ? 0 : this.name.hashCode();</span>
<span class="token comment">//        result = result * prime + this.idCard == null ? 0 : this.idCard.hashCode();</span>
<span class="token comment">//</span>
<span class="token comment">//        return result;</span>
<span class="token comment">//    }</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> o<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> o<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>idCard<span class="token punctuation">,</span> person<span class="token punctuation">.</span>idCard<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> name <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> name<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        result <span class="token operator">=</span> <span class="token number">31</span> <span class="token operator">*</span> result <span class="token operator">+</span> <span class="token punctuation">(</span>idCard <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> idCard<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;56789454798&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Person</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;56789454798&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>为什么使用权重31计算hash值？</p><p>1.因为别人都用31</p><p>2.因为31是一个特殊的质数 任何数乘以31 等于这个数 左移5位 减去这个数本身</p><p>n * 31 = (n &lt;&lt; 5) - n</p><p>总结：使用哪个数值计算hash值都可以 但是使用31效率更高</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 14:22
 *  为什么使用权重31计算hash值？
 *  1.因为别人都用31
 *  2.因为31是一个特殊的质数 任何数乘以31 等于这个数 左移5位 减去这个数本身
 *  n * 31 = (n &lt;&lt; 5) - n
 *
 *  总结：使用哪个数值计算hash值都可以 但是使用31效率更高
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPrime</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-多态" tabindex="-1"><a class="header-anchor" href="#_6-多态" aria-hidden="true">#</a> 6. 多态</h3><blockquote><p>多态： 同一个引用类型 使用不同的实例而执行不同操作</p><p>父类引用指向子类对象 属于多态向上转型</p><p>向上转型：此时通过父类的引用 可以访问的是 子类重写父类的方法 或者 继承 父类的方法</p><p>不能访问子类独有的方法</p><p>使用向上转型将无法访问子类独有的方法，为什么还要使用呢？</p><p>因为使用了向上转型以后 虽然调用的方法个数受到了影响 但是我们可以通过这种方式提高程序的灵活性</p><p>多态向上转型具体的表现：</p><p>1.父类作为形参 子类作为实参</p><p>2.父类作为声明返回值 实际返回值为子类类型</p><p>3.父类类型的数组、集合 其元素为子类类型</p><p>对于创建对象的语句而言： 等号左边的称之为引用 等号右边的为对象</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:32
 *  宠物类 父类
 *  父类中书写子类共有的信息 (属性和方法)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> health<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> love<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getHealth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> health<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHealth</span><span class="token punctuation">(</span><span class="token keyword">int</span> health<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getLove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLove</span><span class="token punctuation">(</span><span class="token keyword">int</span> love<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>love <span class="token operator">=</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

     <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的名字是：&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的健康值是：&quot;</span> <span class="token operator">+</span> health<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的亲密值是：&quot;</span> <span class="token operator">+</span> love<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>love <span class="token operator">=</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物看病&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:27
 *  狗类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> strain<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getStrain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStrain</span><span class="token punctuation">(</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">,</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>health<span class="token punctuation">,</span>love<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;狗狗的品种是:&quot;</span> <span class="token operator">+</span> strain<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;狗狗看病，打针，吃药，吃骨头，健康值恢复&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setHealth</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:28
 *  企鹅类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Penguin</span> <span class="token keyword">extends</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">String</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">,</span><span class="token class-name">String</span> sex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>health<span class="token punctuation">,</span>love<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// alt + shift + ↑↓ 移动整行代码</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;企鹅的性别是：&quot;</span> <span class="token operator">+</span> sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;企鹅看病，打针，疗养，吃小鱼，健康值恢复&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">setHealth</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 15:38
 *  主人类
 *  属性：名字 年龄 性别 ……
 *  方法：
 *      1.带宠物去看病
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Master</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">toHospitalWithDog</span><span class="token punctuation">(</span><span class="token class-name">Dog</span> dog<span class="token punctuation">)</span><span class="token punctuation">{</span>
        dog<span class="token punctuation">.</span><span class="token function">cure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">toHospitalWithPenguin</span><span class="token punctuation">(</span><span class="token class-name">Penguin</span> penguin<span class="token punctuation">)</span><span class="token punctuation">{</span>
        penguin<span class="token punctuation">.</span><span class="token function">cure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 以上两个方法可以实现给现有宠物看病 但是未来如果有更多的宠物子类</span>
    <span class="token comment">// 则还需要编写更多的方法来实现宠物看病</span>
    <span class="token comment">// 这种方式 不符合 开闭原则(软件设计中的一个原则)</span>
    <span class="token comment">// 开 对扩展开放  闭 对修改源代码关闭</span>
    <span class="token comment">// 我们应该编写一个方法 用于实现给所有的宠物看病</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">toHospitalWithPet</span><span class="token punctuation">(</span><span class="token class-name">Pet</span> pet<span class="token punctuation">)</span><span class="token punctuation">{</span>
        pet<span class="token punctuation">.</span><span class="token function">cure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>







<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 15:56
 *  多态的方式实现宠物看病 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Master</span> master <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Master</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Dog</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;大黄&quot;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;金毛&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Penguin</span> penguin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token string">&quot;大白&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;雄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        master<span class="token punctuation">.</span><span class="token function">toHospitalWithPet</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pet pet = new Dog();</span>
        master<span class="token punctuation">.</span><span class="token function">toHospitalWithPet</span><span class="token punctuation">(</span>penguin<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pet pet = new Penguin();</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token function">m1</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token keyword">double</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>多态实现学生去学校案例</p><p>分析：电脑有不同的具体的子类类型 而学生去学校 只需要根据实际的情况选择具体的子类产品即可 在代码编写阶段 我们只需要考虑需要什么产品 而不必考虑产品具体的属性 、类型</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 16:04
 *  学生类
 *  方法：去学校
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">gotoSchool</span><span class="token punctuation">(</span><span class="token class-name">Computer</span> computer<span class="token punctuation">)</span><span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DeskComputer</span> deskComputer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeskComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">NoteBook</span> noteBook <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NoteBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">IPad</span> iPad <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IPad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        student<span class="token punctuation">.</span><span class="token function">gotoSchool</span><span class="token punctuation">(</span>deskComputer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">gotoSchool</span><span class="token punctuation">(</span>noteBook<span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">gotoSchool</span><span class="token punctuation">(</span>iPad<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Computer</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;电脑信息打印&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DeskComputer</span> <span class="token keyword">extends</span> <span class="token class-name">Computer</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;台式电脑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NoteBook</span> <span class="token keyword">extends</span> <span class="token class-name">Computer</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;笔记本电脑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">IPad</span> <span class="token keyword">extends</span> <span class="token class-name">Computer</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;平板电脑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),c=[t];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","day11-方法重写和多态.html.vue"]]);export{k as default};
