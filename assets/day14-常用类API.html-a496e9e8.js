import{_ as n,o as s,c as a,e as t}from"./app-8007fa1b.js";const p={},e=t(`<h2 id="常用类api" tabindex="-1"><a class="header-anchor" href="#常用类api" aria-hidden="true">#</a> 常用类API</h2><h3 id="_1-包装类" tabindex="-1"><a class="header-anchor" href="#_1-包装类" aria-hidden="true">#</a> 1. 包装类</h3><h4 id="_1-1-构造方法" tabindex="-1"><a class="header-anchor" href="#_1-1-构造方法" aria-hidden="true">#</a> 1.1 构造方法</h4><blockquote><p>包装类</p><p>基本数据类型 ：byte short int long float double boolean char</p><p>包装类类型 : Byte Short Integer Long Float Double Boolean Character</p><p>每个包装类都支持传入一个对应的基本数据类型作为参数构造实例</p><p>除了Character类之外 其他类7个包装类还支持传入一个字符串构造实例</p><p>使用字符串构造Number子类实例 字符串内容必须可以解析为对应内容的 正确的数值才可以 否则运行报错</p><p>NumberFormatException 数字格式化异常</p><p>Boolean 实例传入字符串 字符串内容不能为null 不区分大小写 内容为true</p><p>则为true 其他的都为false</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 10:04
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
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestWrapper</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Byte</span> b4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Byte</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b4<span class="token punctuation">)</span><span class="token punctuation">;</span>






        <span class="token class-name">Byte</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Byte</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b1 = &quot;</span> <span class="token operator">+</span> b1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

        <span class="token class-name">Byte</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Byte</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b2 = &quot;</span> <span class="token operator">+</span> b2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Byte</span> b3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Byte</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b3 = &quot;</span> <span class="token operator">+</span> b3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Short</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Short</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = &quot;</span> <span class="token operator">+</span> s1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">short</span> s <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

        <span class="token class-name">Short</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Short</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 = &quot;</span> <span class="token operator">+</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Short</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Short</span><span class="token punctuation">(</span><span class="token string">&quot;230&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s3 = &quot;</span> <span class="token operator">+</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">122</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i1 = &quot;</span> <span class="token operator">+</span> i1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i2 = &quot;</span> <span class="token operator">+</span> i2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Long</span> l1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Long</span><span class="token punctuation">(</span><span class="token number">122L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;l1 = &quot;</span> <span class="token operator">+</span> l1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Long</span> l2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Long</span><span class="token punctuation">(</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;l2 = &quot;</span> <span class="token operator">+</span> l2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Float</span> f1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;f1 = &quot;</span> <span class="token operator">+</span> f1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Float</span> f2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float</span><span class="token punctuation">(</span><span class="token number">3.14F</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;f2 = &quot;</span> <span class="token operator">+</span> f2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Float</span> f3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float</span><span class="token punctuation">(</span><span class="token string">&quot;3.14&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;f3 = &quot;</span> <span class="token operator">+</span> f3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Double</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Double</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;d1 = &quot;</span> <span class="token operator">+</span> d1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Double</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Double</span><span class="token punctuation">(</span><span class="token number">200.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;d2 = &quot;</span> <span class="token operator">+</span> d2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Double</span> d3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Double</span><span class="token punctuation">(</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;d3 = &quot;</span> <span class="token operator">+</span> d3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Boolean</span> bl1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;bl1 = &quot;</span> <span class="token operator">+</span> bl1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Boolean</span> bl2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;tRuE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;bl2 = &quot;</span> <span class="token operator">+</span> bl2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Boolean</span> bl3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;bl3 = &quot;</span> <span class="token operator">+</span> bl3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Boolean</span> bl4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;bl4 = &quot;</span> <span class="token operator">+</span> bl4<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Boolean</span> bl5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;bl5 = &quot;</span> <span class="token operator">+</span> bl5<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Character</span> ch1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch1 = &quot;</span> <span class="token operator">+</span> ch1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Character</span> ch2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span><span class="token char">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch2 = &quot;</span> <span class="token operator">+</span> ch2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Character</span> ch3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span><span class="token char">&#39;中&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch3 = &quot;</span> <span class="token operator">+</span> ch3<span class="token punctuation">)</span><span class="token punctuation">;</span>











    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-基本数据类型包装类互转" tabindex="-1"><a class="header-anchor" href="#_1-2-基本数据类型包装类互转" aria-hidden="true">#</a> 1.2 基本数据类型包装类互转</h4><blockquote><p>包装类常用方法：</p><p>xxxValue() : 每个包装类都有这样的一个方法 用于将包装类对象转换为基本数据类型</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 10:43
 *  包装类常用方法：
 *      xxxValue() : 每个包装类都有这样的一个方法 用于将包装类对象转换为基本数据类型
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestWrapperMethod1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>


        <span class="token class-name">Byte</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Byte</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">byte</span> b <span class="token operator">=</span> b1<span class="token punctuation">.</span><span class="token function">byteValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b = &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Short</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Short</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">short</span> i <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">shortValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">122</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> i2 <span class="token operator">=</span> i1<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i2 = &quot;</span> <span class="token operator">+</span> i2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Long</span> l1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Long</span><span class="token punctuation">(</span><span class="token number">122L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">long</span> l <span class="token operator">=</span> l1<span class="token punctuation">.</span><span class="token function">longValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;l = &quot;</span> <span class="token operator">+</span> l<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Float</span> f1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">float</span> v <span class="token operator">=</span> f1<span class="token punctuation">.</span><span class="token function">floatValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;v = &quot;</span> <span class="token operator">+</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Double</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Double</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">double</span> v1 <span class="token operator">=</span> d1<span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;v1 = &quot;</span> <span class="token operator">+</span> v1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Boolean</span> bl1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">boolean</span> b2 <span class="token operator">=</span> bl1<span class="token punctuation">.</span><span class="token function">booleanValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b2 = &quot;</span> <span class="token operator">+</span> b2<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Character</span> ch1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">char</span> c <span class="token operator">=</span> ch1<span class="token punctuation">.</span><span class="token function">charValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c = &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>valueOf() 每个包装类都提供有这样的一个方法 用于将基本数据类型转换为包装类对象</p><ul><li>除了Character类之外 其他的包装类 使用此方法 还支持传入一个合法的字符串</li></ul></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 10:48
 *  valueOf() 每个包装类都提供有这样的一个方法  用于将基本数据类型转换为包装类对象
 *  除了Character类之外 其他的包装类 使用此方法  还支持传入一个合法的字符串
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestWrapperMethod2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Byte</span> aByte <span class="token operator">=</span> <span class="token class-name">Byte</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aByte = &quot;</span> <span class="token operator">+</span> aByte<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Byte</span> aByte1 <span class="token operator">=</span> <span class="token class-name">Byte</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aByte1 = &quot;</span> <span class="token operator">+</span> aByte1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Short</span> aShort <span class="token operator">=</span> <span class="token class-name">Short</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token number">122</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aShort = &quot;</span> <span class="token operator">+</span> aShort<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Short</span> aShort1 <span class="token operator">=</span> <span class="token class-name">Short</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aShort1 = &quot;</span> <span class="token operator">+</span> aShort1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Integer</span> integer <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;integer = &quot;</span> <span class="token operator">+</span> integer<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Integer</span> integer1 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;integer1 = &quot;</span> <span class="token operator">+</span> integer1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Long</span> aLong <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aLong = &quot;</span> <span class="token operator">+</span> aLong<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Long</span> aLong1 <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aLong1 = &quot;</span> <span class="token operator">+</span> aLong1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Boolean</span> truE <span class="token operator">=</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;truE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;truE = &quot;</span> <span class="token operator">+</span> truE<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Boolean</span> aBoolean <span class="token operator">=</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;aBoolean = &quot;</span> <span class="token operator">+</span> aBoolean<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Character</span> character <span class="token operator">=</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token char">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;character = &quot;</span> <span class="token operator">+</span> character<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-字符串基本数据类型互转" tabindex="-1"><a class="header-anchor" href="#_1-3-字符串基本数据类型互转" aria-hidden="true">#</a> 1.3 字符串基本数据类型互转</h4><blockquote><p>toString():以字符串形式返回包装对象表示的基本类型数据（基本类型-&gt;字符串）</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 10:53
 *  toString():以字符串形式返回包装对象表示的基本类型数据（基本类型-&gt;字符串）
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestWrapperMethod3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token class-name">Byte</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span> <span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s = &quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token class-name">Short</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 = &quot;</span> <span class="token operator">+</span> s1<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 = &quot;</span> <span class="token operator">+</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">12L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s3 = &quot;</span> <span class="token operator">+</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">String</span> s4 <span class="token operator">=</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">3.5F</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s4 = &quot;</span> <span class="token operator">+</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> s5 <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s5 = &quot;</span> <span class="token operator">+</span> s5<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> s6 <span class="token operator">=</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s6 = &quot;</span> <span class="token operator">+</span> s6<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>parseXXX()：把字符串转换为相应的基本数据类型数据（Character除外）（字符串-&gt;基本类型）</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 10:56
 *  parseXXX()：把字符串转换为相应的基本数据类型数据（Character除外）（字符串-&gt;基本类型）
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestWrapperMethod4</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token class-name">Byte</span><span class="token punctuation">.</span><span class="token function">parseByte</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b = &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">short</span> i <span class="token operator">=</span> <span class="token class-name">Short</span><span class="token punctuation">.</span><span class="token function">parseShort</span><span class="token punctuation">(</span><span class="token string">&quot;111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i1 = &quot;</span> <span class="token operator">+</span> i1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">long</span> l <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">parseLong</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;l = &quot;</span> <span class="token operator">+</span> l<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">boolean</span> abc <span class="token operator">=</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token function">parseBoolean</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;abc = &quot;</span> <span class="token operator">+</span> abc<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">float</span> v <span class="token operator">=</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&quot;123.5F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;v = &quot;</span> <span class="token operator">+</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">double</span> v1 <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;v1 = &quot;</span> <span class="token operator">+</span> v1<span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-包装类面试题" tabindex="-1"><a class="header-anchor" href="#_1-4-包装类面试题" aria-hidden="true">#</a> 1.4 包装类面试题</h4><blockquote><p>Short Integer Long Character 包装类面试题：</p><p>1.Integer对象直接使用=号赋值 取值范围在byte取值以内 两个取值相同的对象==比较为true</p><p>超出范围 则比较为false</p><p>总结：Integer包装类底层帮我们维护了一个Integer类型的数组 如果我们直接使用=号赋值在byte取值范围以内</p><p>则直接从数组中取出对应的元素 所以多次取出的为同一个对象 所以地址相同</p><p>如果超出byte取值范围 将直接new一个新的对象 所以地址不同</p><p>JDK这么做的目的是为了节省内存空间</p><p>只要是new出来的对象 地址都不同</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 11:08
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
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestWrapperInterview</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Integer</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span> <span class="token comment">// 装箱 Integer.valueOf(-128)</span>
        <span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span><span class="token comment">// 装箱 Integer.valueOf(-128)</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1 <span class="token operator">==</span> i2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

        <span class="token class-name">Integer</span> i3 <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span><span class="token comment">// 装箱 Integer.valueOf(128)</span>
        <span class="token class-name">Integer</span> i4 <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span><span class="token comment">// 装箱 Integer.valueOf(128)</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i3 <span class="token operator">==</span> i4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">//        Short Long Character</span>

        <span class="token class-name">Character</span> ch1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">Character</span> ch2 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ch1 <span class="token operator">==</span> ch2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Character</span> ch3 <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
        <span class="token class-name">Character</span> ch4 <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ch3<span class="token operator">==</span> ch4<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-string类" tabindex="-1"><a class="header-anchor" href="#_2-string类" aria-hidden="true">#</a> 2. String类</h3><blockquote><p>length() 返回字符串长度</p><p>equals() 比较字符串内容</p><p>equalsIgnoreCase() 忽略大小写比较</p><p>toLowerCase() 转换为小写</p><p>toUpperCase() 转换为大写</p><p>concat() 拼接字符串</p><p>indexOf(int num) : 根据传入的int类型的数值(ASCII或者Unicode编码十进制) 查找第一次出现的位置 未找到返回-1</p><p>indexOf(String str) : 根据传入的String类型的参数 查找对应的位置 未找到返回-1</p><p>lastIndexOf(int num):根据传入的int类型的数值(ASCII或者Unicode编码十进制) 查找最后一次的位置 未找到返回-1</p><p>lastIndexOf(String str num):根据传入的String类型参数 查找最后一次的位置 未找到返回-1</p><p>subString(int beginIndex) : 从指定下标截取到字符串末尾</p><p>subString(int beginIndex,int endIndex) : 从指定下标截取到指定位置结束 (包前不包后)</p><p>trim() 去除字符串中首尾的空格</p><p>split(String str) : 根据指定的字符串拆分字符串 返回值为一个字符串数组</p><p>char charAt(int index) : 根据指定下标返回对应的char字符</p><p>boolean contains(CharSequence s ) : 判断当前字符串是否包含某一个字符串</p><p>boolean endsWith(String suffix) :判断当前字符串是否以某一个字符串结尾</p><p>boolean startsWith(String prefix) :判断当前字符串是否以某一个字符串开头</p><p>boolean isEmpty() ：判断当前字符串是否为空</p><p>String replace(char oldChar, char newChar) ：替换字符串</p><p>String replace(CharSequence target, CharSequence replacement) ：替换字符串</p><p>String replaceAll(String regex, String replacement) ：根据正则表达式替换字符串</p></blockquote><h3 id="_3-stringbuffer和stringbuilder" tabindex="-1"><a class="header-anchor" href="#_3-stringbuffer和stringbuilder" aria-hidden="true">#</a> 3.StringBuffer和StringBuilder</h3><blockquote><p>String不可变对象，任何对字符串内容的改变都会产生新的对象</p><p>所以 如果需要频繁的修改一个字符串的内容 不要使用String 推荐使用StringBuffer或者StringBuilder</p><p>String底层是以char数组维护字符串的 任何字符串都以char数组形式存储</p><p>为什么String对象是不可变对象？</p><p>1.因为char数组是final修饰的 而final修饰数组表示此数组地址不能改变</p><p>2.此数组是private修饰的 所以外界无法访问</p><p>3.String类是final修饰的 其他类无法继承此类</p><p>2.有没有什么方式可以使String对象可变</p><p>有 使用反射可以改变字符串内容</p></blockquote><blockquote><p><strong><code>面试题：String类，StringBuffer和StringBuilder的区别？</code></strong></p><p>String是不可变对象</p><p>StringBuffer和StringBuilder是可变对象</p><p>StringBuffer是线程安全的 JDK1.0</p><p>StringBuilder线程不安全 JDK1.5</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 15:29
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
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestStringBufferStringBuilder</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>

        str1 <span class="token operator">+=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> condition <span class="token operator">=</span> <span class="token string">&quot;电脑&quot;</span><span class="token punctuation">;</span>

        condition <span class="token operator">+=</span> <span class="token string">&quot;笔记本&quot;</span><span class="token punctuation">;</span>

        condition <span class="token operator">+=</span> <span class="token string">&quot;联想&quot;</span><span class="token punctuation">;</span>

        condition <span class="token operator">+=</span> <span class="token string">&quot;CPU 9代i7&quot;</span><span class="token punctuation">;</span>

        condition <span class="token operator">+=</span> <span class="token string">&quot;GTX 3050TI&quot;</span><span class="token punctuation">;</span>

        condition <span class="token operator">+=</span> <span class="token string">&quot;1T SSD&quot;</span><span class="token punctuation">;</span>

        condition <span class="token operator">+=</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>

        sb<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 包前 不 包后</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>

        sb<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;hello world 666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>

        sb<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;世界你好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>

        sb<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong><code>String类面试题：</code></strong></p><p>String类型直接使用等号赋值 会先去字符串常量池中查找 是否存在当前内容的对象</p><p>如果存在 则直接使用已存在的地址</p><p>如果不存在 则重新存放</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 15:58
 *  String类面试题：
 *  String类型直接使用等号赋值 会先去字符串常量池中查找 是否存在当前内容的对象
 *  如果存在 则直接使用以存在的地址
 *  如果不存在 则重新存放
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestString</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1 <span class="token operator">==</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1 <span class="token operator">==</span> str3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str3 <span class="token operator">==</span> str4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-math类" tabindex="-1"><a class="header-anchor" href="#_4-math类" aria-hidden="true">#</a> 4.Math类</h3><blockquote><p>Math类提供的有常用的数学计算的方法 和 两个静态常量</p><p>abs() 返回绝对值</p><p>ceil() 向上取整</p><p>floor() 向下取整</p><p>round() 四舍五入</p><p>random() 随机数</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 14:51
 *  Math类提供的有常用的数学计算的方法 和 两个静态常量
 *  abs() 返回绝对值
 *  ceil() 向上取整
 *  floor() 向下取整
 *  round() 四舍五入
 *  random() 随机数
 *
 *  课后练习：随机生成一个100以内的整数 让用户猜这个数字 分别提示猜大了 或者 猜小了 直到猜对 最后打印猜了几次
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMath</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math<span class="token punctuation">.</span>E</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">3.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">3.9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">3.4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取一个100以内的随机数</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取一个17以内的随机数</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">17</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-random类" tabindex="-1"><a class="header-anchor" href="#_5-random类" aria-hidden="true">#</a> 5. Random类</h3><blockquote><p>Random类提供了更多的随机数的获取方式</p><p>nextInt() : 随机int类型数值</p><p>nextInt(int bound) : 根据指定范围生成int数值</p><p>nextDouble() :生成随机double数值</p><p>nextLong() 生成long类型随机数值</p><p>nextBoolean() : 生成随机布尔数据</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 14:59
 *  Random类提供了更多的随机数的获取方式
 *  nextInt() : 随机int类型数值
 *  nextInt(int bound) : 根据指定范围生成int数值
 *  nextDouble() :生成随机double数值
 *  nextLong() 生成long类型随机数值
 *  nextBoolean() : 生成随机布尔数据
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestRandom</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Random</span> ran1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ran1<span class="token punctuation">.</span><span class="token function">nextBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ran1<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ran1<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ran1<span class="token punctuation">.</span><span class="token function">nextLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ran1<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-system类-了解" tabindex="-1"><a class="header-anchor" href="#_6-system类-了解" aria-hidden="true">#</a> 6. System类(了解)</h3><blockquote><p>System类提供了与系统相关的信息获取的方法</p><p>currentTimeMillis() ： 返回1970年1月1日0点0分0秒到目前的毫秒数</p><p>exit(int status) ：退出JVM虚拟机</p><p>status : 退出虚拟机状态码 传入任何数值都能退出虚拟机</p><p>0表示程序正常结束退出</p><p>非0 表示非正常退出</p><p>gc() ： 运行垃圾回收器 但不能保证对象立即回收</p><p>getProperties() ：获得系统相关的所有的属性值</p><p>getProperty(String key) ：根据key值获取到一个value 系统相关的属性信息</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/18 16:12
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
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSystem</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        System system = new System();</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>

        str1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">gc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        System.exit(89567546);</span>

        <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;java.version&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;file.encoding&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        properties<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将所有的系统信息打印</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序退出&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-runtime类-了解" tabindex="-1"><a class="header-anchor" href="#_7-runtime类-了解" aria-hidden="true">#</a> 7. Runtime类(了解)</h3><blockquote><p>Runtime类表示运行时类 此类对象记录了程序运行过程中的信息</p><p>此类被设计为单例模式(设计模式) 即此类不能new对象</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/20 9:31
 *  Runtime类表示运行时类 此类对象记录了程序运行过程中的信息
 *  此类被设计为单例模式(设计模式) 即此类不能new对象
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestRuntime</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Runtime</span> runtime <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 内存相关信息 单位为字节</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;空闲内存：&quot;</span> <span class="token operator">+</span> runtime<span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最大内存：&quot;</span> <span class="token operator">+</span> runtime<span class="token punctuation">.</span><span class="token function">maxMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总内存：&quot;</span> <span class="token operator">+</span> runtime<span class="token punctuation">.</span><span class="token function">totalMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        runtime<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\funny\\\\10秒让整个屏幕开满玫瑰花\\\\点我.exe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



        runtime<span class="token punctuation">.</span><span class="token function">gc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">gc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 调用Runtime类中的gc()  garbage collection 方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用Runtime类中的exit方法</span>
        runtime<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-java-util-date类" tabindex="-1"><a class="header-anchor" href="#_8-java-util-date类" aria-hidden="true">#</a> 8. java.util.Date类</h3><blockquote><p>java.util.Date 日期类 提供了关于日期处理的常用方法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/20 9:48
 *  java.util.Date  日期类 提供了关于日期处理的常用方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDate</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Date</span> date1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>date1<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1900</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;月：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>date1<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;日：&quot;</span> <span class="token operator">+</span> date1<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;天：&quot;</span> <span class="token operator">+</span> date1<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;时：&quot;</span> <span class="token operator">+</span> date1<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;分：&quot;</span> <span class="token operator">+</span> date1<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;秒：&quot;</span> <span class="token operator">+</span> date1<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Date</span> date2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date2<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">Date</span> date3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">5689218978975L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Date</span> date4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date4<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>SimpleDateFormat 日期格式化类 提供了转换日期格式 以及 字符串 日期 互转的方法</p><p>SimpleDateFormat() : 使用默认模板格式处理日期</p><p>SimpleDateFormat(String pattern) : 指定模板格式处理日期</p><p>format() ： 将日期转换为字符串对象</p><p>parse() : 将字符串解析为日期对象</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">sun<span class="token punctuation">.</span>java2d<span class="token punctuation">.</span>pipe<span class="token punctuation">.</span></span><span class="token class-name">SpanShapeRenderer</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">ParseException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/20 9:56
 *  SimpleDateFormat 日期格式化类 提供了转换日期格式 以及 字符串 日期 互转的方法
 *
 *  SimpleDateFormat() : 使用默认模板格式处理日期
 *  SimpleDateFormat(String pattern) : 指定模板格式处理日期
 *  format() ： 将日期转换为字符串对象
 *  parse() : 将字符串解析为日期对象
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSimpleDateFormat</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ParseException</span> <span class="token punctuation">{</span>
        <span class="token class-name">SimpleDateFormat</span> sdf1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Date</span> date1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> dateStr1 <span class="token operator">=</span> sdf1<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dateStr1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Date</span> parseDate1 <span class="token operator">=</span> sdf1<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;23-3-21 下午10:10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>parseDate1<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// Date parseDate2 = sdf1.parse(&quot;1998-01-01 10:10:10&quot;);// 使用默认无参构造 必须遵循默认的模板格式</span>

        <span class="token comment">// System.out.println(parseDate2);</span>

        <span class="token class-name">SimpleDateFormat</span> sdf2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy年MM月dd日 HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Date</span> date2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sdf2<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sdf2<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;2012年12月12日 10:01:01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-java-util-calendar类" tabindex="-1"><a class="header-anchor" href="#_9-java-util-calendar类" aria-hidden="true">#</a> 9. java.util.Calendar类</h3><blockquote><p>Calendar 日历类 此类提供常用的日期处理方式 此类不能new对象</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Calendar</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/20 10:11
 *  Calendar 日历类  此类提供常用的日期处理方式  此类不能new对象
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestCalendar</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Calendar</span> instance <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年&quot;</span> <span class="token operator">+</span> instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;月&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;日&quot;</span> <span class="token operator">+</span> instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_MONTH</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;天&quot;</span> <span class="token operator">+</span> instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_WEEK</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;时&quot;</span> <span class="token operator">+</span> instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">HOUR</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;分&quot;</span> <span class="token operator">+</span> instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;秒&quot;</span> <span class="token operator">+</span> instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">SECOND</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-jdk8日期相关的api" tabindex="-1"><a class="header-anchor" href="#_10-jdk8日期相关的api" aria-hidden="true">#</a> 10.JDK8日期相关的API</h3><h4 id="_10-1-localdate" tabindex="-1"><a class="header-anchor" href="#_10-1-localdate" aria-hidden="true">#</a> 10.1 LocalDate</h4><blockquote><p>LocalDate 只包含年月日</p><ul><li>now() 获取LocalDate对象 获取当前时间 年月日</li><li>of() 根据指定参数获取LocalDate对象 年月日</li></ul></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDate</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/20 10:41
 *  LocalDate 只包含年月日
 *  now() 获取LocalDate对象 获取当前时间 年月日
 *  of() 根据指定参数获取LocalDate对象 年月日
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLocalDate</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LocalDate</span> now <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年：&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;月：&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;日：&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getDayOfMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一年中的天数：&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getDayOfYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一周中的天数：&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getDayOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">LocalDate</span> of <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">2001</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>of<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-2-localtime" tabindex="-1"><a class="header-anchor" href="#_10-2-localtime" aria-hidden="true">#</a> 10.2 LocalTime</h4><blockquote><p>LocalTime 只包含时分秒</p><p>now() 获取当前时分秒</p><p>of() 根据指定参数获取时分秒</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalTime</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/20 10:45
 *  LocalTime 只包含时分秒
 *  now() 获取当前时分秒
 *  of() 根据指定参数获取时分秒
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLocalTime</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LocalTime</span> now <span class="token operator">=</span> <span class="token class-name">LocalTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getHour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getMinute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getSecond</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">LocalTime</span> of <span class="token operator">=</span> <span class="token class-name">LocalTime</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>of<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-3-localdatetime" tabindex="-1"><a class="header-anchor" href="#_10-3-localdatetime" aria-hidden="true">#</a> 10.3 LocalDateTime</h4><blockquote><p>LocalDateTime 包含年月日 时分秒</p><p>now() 获取当前年月日十分秒</p><p>of() 根据指定参数获取年月日 时分秒</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDateTime</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/20 10:47
 *  LocalDateTime 包含年月日 时分秒
 *  now() 获取当前年月日十分秒
 *  of() 根据指定参数获取年月日 时分秒
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLocalDateTime</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LocalDateTime</span> now <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;月&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;日&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getDayOfMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;时&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getHour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;分&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getMinute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;秒&quot;</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getSecond</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">LocalDateTime</span> of <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1911</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>of<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-bigdecimal类" tabindex="-1"><a class="header-anchor" href="#_11-bigdecimal类" aria-hidden="true">#</a> 11. BigDecimal类</h3><blockquote><p>BigDecimal 可以保存任意精度 任意长度 的小数</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">RoundingMode</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/20 10:54
 *  BigDecimal 可以保存任意精度  任意长度 的小数
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestBigDecimal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> bd1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;57854878457874545.787842115487841238952632688955654&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">BigDecimal</span> bd2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;578548.7878421154&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>bd2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>bd2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>bd2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>bd2<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">HALF_UP</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-biginteger" tabindex="-1"><a class="header-anchor" href="#_12-biginteger" aria-hidden="true">#</a> 12. BigInteger</h3><blockquote><p>BigInteger 保存任意长度的整数</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigInteger</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/20 10:58
 *  BigInteger 保存任意长度的整数
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestBigInteger</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigInteger</span> bd1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigInteger</span><span class="token punctuation">(</span><span class="token string">&quot;788945458754123568796232326789623&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigInteger</span> bd2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigInteger</span><span class="token punctuation">(</span><span class="token string">&quot;789623&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>bd2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>bd2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>bd2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bd1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>bd2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-枚举" tabindex="-1"><a class="header-anchor" href="#_13-枚举" aria-hidden="true">#</a> 13. 枚举</h3><blockquote><p>枚举是由一组固定的 全局 静态 常量组成的类型</p><p>所有的枚举类 都继承字 Enum类</p><p>枚举类型不能new对象</p><p>枚举不能继承其他的类(因为默认继承了Enum) 但是可以实现接口</p><p>枚举中依然可以书写普通属性，普通方法，静态方法，构造方法 其中构造方法不能使用public修饰</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Employee</span> <span class="token keyword">implements</span>  <span class="token class-name">Work</span><span class="token punctuation">{</span>
    <span class="token function">MANAGER</span><span class="token punctuation">(</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;经理&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">PRESIDENT</span><span class="token punctuation">(</span><span class="token string">&quot;大拿&quot;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;董事长&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">CTO</span><span class="token punctuation">(</span><span class="token string">&quot;广坤&quot;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&quot;技术总监&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">CEO</span><span class="token punctuation">(</span><span class="token string">&quot;刘能&quot;</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&quot;总裁&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> job<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Employee</span> <span class="token function">getEmployeeById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Employee</span><span class="token punctuation">[</span><span class="token punctuation">]</span> employees <span class="token operator">=</span> <span class="token class-name">Employee</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> employees<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>id <span class="token operator">==</span> employees<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> employees<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>



    <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> job<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>job <span class="token operator">=</span> job<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> job<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJob</span><span class="token punctuation">(</span><span class="token class-name">String</span> job<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>job <span class="token operator">=</span> job<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;在工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/3/20 11:22
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestEmployee</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Employee</span> employee1 <span class="token operator">=</span> <span class="token class-name">Employee</span><span class="token punctuation">.</span><span class="token function">getEmployeeById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>employee1<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>employee1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>employee1<span class="token punctuation">.</span><span class="token function">getJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        employee1<span class="token punctuation">.</span><span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Work</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">doWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,67),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","day14-常用类API.html.vue"]]);export{k as default};
