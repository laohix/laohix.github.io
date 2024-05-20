import{_ as n,o as s,c as a,e as p}from"./app-8007fa1b.js";const t="/assets/算数运算符-96c44926.png",e="/assets/和---f124e5a7.png",o="/assets/赋值运算符-affe3564.png",c="/assets/关系运算符-7449ca93.png",l="/assets/逻辑运算符-4acb7c7b.png",i="/assets/位运算符-9ff92dc0.png",u="/assets/运算符优先级-52b15a74.png",k={},r=p(`<h2 id="变量和数据类型" tabindex="-1"><a class="header-anchor" href="#变量和数据类型" aria-hidden="true">#</a> 变量和数据类型</h2><h3 id="_1-强制类型转换的特殊情况" tabindex="-1"><a class="header-anchor" href="#_1-强制类型转换的特殊情况" aria-hidden="true">#</a> 1. 强制类型转换的特殊情况</h3><blockquote><p>强制类型转换 特殊情况</p><p>如需修改类名 在类名的末尾 alt + 回车 rename file 即可</p><p>正数属于三码合一 正数的原返补码都一样</p><p>​ 原码：可以通俗的理解为我们人能够直观的看明白的一种表示形式</p><p>​ 反码：在原码的基础之上 符号位不变 其余各位取反 是0改为1 是1 改为0</p><p>​ 补码：在反码的基础值上 +1</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 强制类型转换 特殊情况
 *
 * 如需修改类名 在类名的末尾 alt + 回车  rename file 即可
 *
 *  正数属于三码合一 正数的原返补码都一样
 *  原码：可以通俗的理解为我们人能够直观的看明白的一种表示形式
 *  反码：在原码的基础之上 符号位不变 其余各位取反 是0改为1  是1 改为0
 *  补码：在反码的基础值上 +1
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestForceConvertSpecial</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 长度不够 高位截断</span>
        <span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">257</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span>s1<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 符号位发生变化</span>
        <span class="token keyword">short</span> s2 <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span> b2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span>s2<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b2 = &quot;</span> <span class="token operator">+</span> b2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 符号位发生变化</span>
        <span class="token keyword">short</span> s3 <span class="token operator">=</span> <span class="token number">129</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span> b3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span>s3<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b3 = &quot;</span> <span class="token operator">+</span> b3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-自动类型转换补充" tabindex="-1"><a class="header-anchor" href="#_2-自动类型转换补充" aria-hidden="true">#</a> 2. 自动类型转换补充</h3><blockquote><p>两个操作数有一个为double，计算结果提升为double。</p><p>如果操作数中没有double，有一个为float，计算结果提升为float。</p><p>如果操作数中没有float，有一个为long，计算结果提升为long。</p><p>如果操作数中没有long，有一个为int，计算结果提升为int。</p><p>如果操作数中没有int，均为short或byte或者char，计算结果仍旧提升为int。</p><p>总结：多个操作数进行数学计算 结果会提升为所有操作数中取值范围最大的类型</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 9:44
 *  两个操作数有一个为double，计算结果提升为double。
 *  如果操作数中没有double，有一个为float，计算结果提升为float。
 *  如果操作数中没有float，有一个为long，计算结果提升为long。
 *  如果操作数中没有long，有一个为int，计算结果提升为int。
 *  如果操作数中没有int，均为short或byte或者char，计算结果仍旧提升为int。
 *
 *  总结：多个操作数进行数学计算 结果会提升为所有操作数中取值范围最大的类型
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAutoConvert</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">float</span> b <span class="token operator">=</span> <span class="token number">3.5F</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> c <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">short</span> e <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span> f <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> g <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>

        <span class="token keyword">double</span> result1 <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>

        <span class="token keyword">float</span> result2 <span class="token operator">=</span>  b <span class="token operator">+</span> c<span class="token punctuation">;</span>

        <span class="token keyword">long</span> result3 <span class="token operator">=</span> c <span class="token operator">+</span> d<span class="token punctuation">;</span>

        <span class="token keyword">int</span> result4 <span class="token operator">=</span> d <span class="token operator">+</span> e<span class="token punctuation">;</span>

        <span class="token keyword">int</span> result5 <span class="token operator">=</span> e <span class="token operator">+</span> f<span class="token punctuation">;</span>

        <span class="token keyword">int</span> result6 <span class="token operator">=</span> e <span class="token operator">+</span> f <span class="token operator">+</span> g<span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">char</span> ch1 <span class="token operator">=</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ch1 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// B  66</span>






    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-运算符" tabindex="-1"><a class="header-anchor" href="#_3-运算符" aria-hidden="true">#</a> 3. 运算符</h3><h4 id="_3-1-算数运算符" tabindex="-1"><a class="header-anchor" href="#_3-1-算数运算符" aria-hidden="true">#</a> 3.1 算数运算符</h4><p><img src="`+t+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 9:52
 *  算数运算符
 *  + - * / %
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMathSign</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> a <span class="token operator">*</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> a <span class="token operator">/</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>


        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c <span class="token operator">%</span> d <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-和" tabindex="-1"><a class="header-anchor" href="#_3-2-和" aria-hidden="true">#</a> 3.2 ++ 和 --</h4><p><img src="`+e+`" alt=""></p><blockquote><p>++ 或者 -- 单独作为一条语句书写 在前在后 是没有区别的</p><p>++ 或者 -- 不是单独作为一条语句书写 在前在后 是有区别的 ​ 其他的 包括 但不限于 赋值 比较 等等 ​ 如果++或者-- 在前 先执行++或者-- 再执行其他的 ​ 如果++或者-- 在后 先执行其他的 再执行++或者--</p></blockquote><blockquote><p>当使用++或者--操作同一个变量 再赋值给本身的情况 JVM会生成一个临时变量 来保存原本的值 然后把原本的值再赋值给n 所以n中保存的是10 而++或者--的操作 被保存在了一个临时变量中 而这个临时变量我们是无法访问</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span> <span class="token comment">// 包的声明永远在Java文件的第一行</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 10:24
 *  ++ 和 --
 *  ++ 表示自增1
 *  -- 表示自减1
 *
 *  main 或者 psvm 回车  生成main方法
 *  sout 回车 生成输出语句
 *  soutv 回车 生成输出语句 并且 将上一行的变量进行打印
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMathOperation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        a<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 结果等同于  a = a + 1;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token operator">++</span>b<span class="token punctuation">;</span> <span class="token comment">// 结果等同于  b = b + 1;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b = &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        c<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 结果等同于 c = c -1;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c = &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token operator">--</span>d<span class="token punctuation">;</span> <span class="token comment">// 结果等同于d = d -1;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;d = &quot;</span> <span class="token operator">+</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// ++ 或者 -- 单独作为一条语句书写 在前在后 是没有区别的</span>
        <span class="token comment">// ++ 或者 -- 不是单独作为一条语句书写 在前在后 是有区别的</span>
        <span class="token comment">//      其他的 包括 但不限于 赋值 比较 等等</span>
        <span class="token comment">//      如果++或者-- 在前 先执行++或者-- 再执行其他的</span>
        <span class="token comment">//      如果++或者-- 在后 先执行其他的  再执行++或者--</span>

        <span class="token keyword">int</span> e <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> f <span class="token operator">=</span> e<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;f = &quot;</span> <span class="token operator">+</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;e = &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token operator">++</span>j<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;k = &quot;</span> <span class="token operator">+</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;j = &quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 当使用++或者--操作同一个变量 再赋值给本身的情况 JVM会生成一个临时变量</span>
        <span class="token comment">// 来保存原本的值 然后把原本的值再赋值给n  所以n中保存的是10</span>
        <span class="token comment">// 而++或者--的操作 被保存在了一个临时变量中 而这个临时变量我们是无法访问</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        n <span class="token operator">=</span> n<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;n = &quot;</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
        m <span class="token operator">=</span> <span class="token operator">++</span>m<span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m = &quot;</span> <span class="token operator">+</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-赋值运算符" tabindex="-1"><a class="header-anchor" href="#_3-3-赋值运算符" aria-hidden="true">#</a> 3.3 赋值运算符</h4><p><img src="`+o+`" alt=""></p><blockquote><p>赋值运算符</p><p>= 直接赋值</p><p>+= 求和之后赋值</p><p>-= 求差之后赋值</p><p>*= 求积之后赋值</p><p>/= 求商之后赋值</p><p>%= 求余之后赋值</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 10:47
 *  赋值运算符
 *  =   直接赋值
 *  += 求和之后赋值
 *  -= 求差之后赋值
 *  *= 求积之后赋值
 *  /= 求商之后赋值
 *  %= 求余之后赋值
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAssignmentOperation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        a <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 结果等同于  a = a + 10;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

        a <span class="token operator">-=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 结果等同于 a = a - 10;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>


        a <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 结果等同于 a = a * 10;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

        a <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 结果等同于 a = a / 10;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

        a <span class="token operator">%=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 结果等同于  a = a % 10;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        s1 <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">// 这里实现了隐式的类型转换  是JVM帮我们实现的</span>

        <span class="token keyword">short</span> s2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        s2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>s2 <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-关系运算符" tabindex="-1"><a class="header-anchor" href="#_3-4-关系运算符" aria-hidden="true">#</a> 3.4 关系运算符</h4><p><img src="`+c+`" alt=""></p><blockquote><p>关系运算符</p><p>&#39;&gt;&#39;大于</p><p>&lt; 小于</p><p>&#39;&gt;=&#39; 大于等于</p><p>&lt;= 小于等于</p><p>== 等等于判断是否相等 相等为true 不等为false</p><p>!= 不等于 判断是否不相等 不相等为true 相等为false</p><p>关系运算最终的结果都为布尔类型 表示这种关系是否成立</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 10:55
 *  关系运算符
 *  &gt; 大于
 *  &lt; 小于
 *  &gt;= 大于等于
 *  &lt;= 小于等于
 *  == 等等于判断是否相等 相等为true 不等为false
 *  != 不等于 判断是否不相等 不相等为true 相等为false
 *
 *  关系运算最终的结果都为布尔类型 表示这种关系是否成立
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestRelationOperation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b<span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&gt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_3-5-逻辑运算符" aria-hidden="true">#</a> 3.5 逻辑运算符</h4><p><img src="`+l+`" alt=""></p><blockquote><p>逻辑运算符 ： 两个操作数 或者 表达式 进行逻辑比较 最终的结果为布尔类型</p><p>&amp;&amp; 短路与 要求两个或者多个表达式都成立 则结果为true</p><p>短路与 有短路的效果 如果前边表达式不成立 则后续的表达式不再执行了</p><p>&amp; 与 要求两个或者多个表达式都成立 则结果为true</p><p>没有短路效果 不管前边的表达式结果如何 都将执行完所有的表达式</p><p>|| 短路或 要求两个或者多个表达式至少有一个成立 则结果为true</p><p>短路或 有短路的效果 如果前边的条件已经成立 后续的表达式不再执行</p><p>| 或 要求两个或者多个表达式至少有一个成立 则结果为true</p><p>没有短路效果 不管前边的表达式结果如何 都将执行完所有的表达式</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 11:19
 *  逻辑运算符 ： 两个操作数 或者 表达式 进行逻辑比较 最终的结果为布尔类型
 *
 *  &amp;&amp; 短路与 要求两个或者多个表达式都成立 则结果为true
 *  短路与 有短路的效果 如果前边表达式不成立 则后续的表达式不再执行了
 *
 *
 *  &amp;  与     要求两个或者多个表达式都成立 则结果为true
 *  没有短路效果 不管前边的表达式结果如何 都将执行完所有的表达式
 *
 *
 *  || 短路或 要求两个或者多个表达式至少有一个成立 则结果为true
 *  短路或 有短路的效果 如果前边的条件已经成立 后续的表达式不再执行
 *
 *  | 或      要求两个或者多个表达式至少有一个成立 则结果为true
 *  没有短路效果 不管前边的表达式结果如何 都将执行完所有的表达式
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLogicOperation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b <span class="token operator">&gt;</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>b <span class="token operator">&gt;</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> e <span class="token operator">=</span> <span class="token number">55</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> f <span class="token operator">=</span> <span class="token number">66</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d <span class="token operator">&gt;</span> e<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>e <span class="token operator">&lt;</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d <span class="token operator">&gt;</span> e<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>e <span class="token operator">&gt;</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d <span class="token operator">&lt;</span> e<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>e <span class="token operator">&lt;</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d <span class="token operator">&gt;</span> e<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>e <span class="token operator">&lt;</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d <span class="token operator">&gt;</span> e<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>e <span class="token operator">&gt;</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>d <span class="token operator">&lt;</span> e<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>e <span class="token operator">&lt;</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token operator">?</span> <span class="token string">&quot;成年了&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;未成年&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">int</span> numa <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> numb <span class="token operator">=</span> numa <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">?</span> <span class="token number">55</span> <span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;numb = &quot;</span> <span class="token operator">+</span> numb<span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 11:28
 *  逻辑运算符练习题 结合 ++ 和 --
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLogicOperationExercise</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> y<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token operator">++</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;y = &quot;</span> <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;x = &quot;</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>


        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token operator">++</span>b<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token operator">++</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b = &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>



        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>c <span class="token operator">&gt;</span> <span class="token operator">++</span>d<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>c <span class="token operator">&lt;</span> <span class="token operator">++</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c = &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;d = &quot;</span> <span class="token operator">+</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>


        <span class="token keyword">int</span> e <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> f <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">&gt;</span> f<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>e <span class="token operator">&lt;</span> <span class="token operator">++</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;e = &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;f = &quot;</span> <span class="token operator">+</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>


        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span>j <span class="token operator">&gt;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> <span class="token operator">++</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;j = &quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;k = &quot;</span> <span class="token operator">+</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>







    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-6-三元运算符" tabindex="-1"><a class="header-anchor" href="#_3-6-三元运算符" aria-hidden="true">#</a> 3.6 三元运算符</h4><blockquote><p>对布尔表达式进行判断 如果条件成立 则执行结果1 条件不成立 执行结果2</p><p>布尔表达式?结果1:结果2</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 11:19
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLogicOperation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>


        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token operator">?</span> <span class="token string">&quot;成年了&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;未成年&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">int</span> numa <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> numb <span class="token operator">=</span> numa <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">?</span> <span class="token number">55</span> <span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;numb = &quot;</span> <span class="token operator">+</span> numb<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-7-位运算符" tabindex="-1"><a class="header-anchor" href="#_3-7-位运算符" aria-hidden="true">#</a> 3.7 位运算符</h4><p><img src="`+i+`" alt=""></p><blockquote><p>位运算符</p><p>&lt;&lt; 左移 左移几位表示乘以2的几次方 会有可能变为负数的情况</p><p>&#39;&gt;&gt;&#39;右移 右移几位表示除以2的几次方</p><p>如果符号位为0 则右移完以后空缺位 以0填充</p><p>如果符号位为1 则右移为以后空缺位 以1填充</p><p>&#39;&gt;&gt;&gt;&#39;无符号右移 不管符号位是0还是1 右移完以后 统一以0填充 即不管是正数还是负数 无符号右移之后都会变为正数</p><p>&amp; 相同二进制位 都为1 则结果为1 其他的均为0</p><p>可以将1 看做为true 0看做为false 进行逻辑比较</p><p>| 相同二进制为 都为1 或者 有一个为1 则结果为1 其他均为0</p><p>可以将1 看做为true 0看做为false 进行逻辑比较</p><p>^ 异或(找不同) 相同二进制位 不相同 则结果为1 相同 则结果为0</p><p>~取反 包括符号位在内 每一个二进制位都去反 是0改为1 是1改为0</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 13:55
 *  位运算符
 *  &lt;&lt; 左移 左移几位表示乘以2的几次方 会有可能变为负数的情况
 *  &gt;&gt; 右移 右移几位表示除以2的几次方
 *      如果符号位为0  则右移完以后空缺位 以0填充
 *      如果符号位为1  则右移为以后空缺位 以1填充
 *
 *  &gt;&gt;&gt; 无符号右移 不管符号位是0还是1 右移完以后 统一以0填充 即不管是正数还是负数 无符号右移之后都会变为正数
 *
 *  &amp; 相同二进制位 都为1 则结果为1  其他的均为0
 *      可以将1 看做为true 0看做为false 进行逻辑比较
 *
 *  | 相同二进制为 都为1  或者 有一个为1  则结果为1  其他均为0
 *      可以将1 看做为true 0看做为false 进行逻辑比较
 *
 *  ^ 异或(找不同) 相同二进制位 不相同 则结果为1  相同 则结果为0
 *
 *  ~取反 包括符号位在内 每一个二进制位都去反  是0改为1  是1改为0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestBitOperation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;&lt;</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span> <span class="token comment">// 复制整行快捷键  ctrl + d</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b <span class="token operator">&gt;&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b <span class="token operator">&gt;&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b <span class="token operator">&gt;&gt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b <span class="token operator">&gt;&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c <span class="token operator">&gt;&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c <span class="token operator">&gt;&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">126</span> <span class="token operator">&amp;</span> <span class="token number">53</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">126</span> <span class="token operator">|</span> <span class="token number">53</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">126</span> <span class="token operator">^</span> <span class="token number">53</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-运算符的优先级" tabindex="-1"><a class="header-anchor" href="#_4-运算符的优先级" aria-hidden="true">#</a> 4. 运算符的优先级</h3><blockquote><p>运算符的优先级不需要记忆。</p><p>必须知道：</p><p>1.小括号的优先级最高</p><p>2.赋值运算符的优先级最低</p></blockquote><p><img src="`+u+`" alt=""></p><h3 id="_5-包的概念" tabindex="-1"><a class="header-anchor" href="#_5-包的概念" aria-hidden="true">#</a> 5. 包的概念</h3><blockquote><p>包就是文件夹 用于堆Java文件分门别类的管理 更加方便</p><p>包的命名规范：域名倒置 全部小写 不能以点开头或者结尾 可以包含点 每存在一个点 就相当于一个子文件夹</p><p>www.baidu.com com.baidu.xxx 具体包名</p><p>在包中定义的java文件 必须在源文件的第一行声明所在包 使用package关键字来声 明</p></blockquote><h3 id="_6-scanner类" tabindex="-1"><a class="header-anchor" href="#_6-scanner类" aria-hidden="true">#</a> 6.Scanner类</h3><blockquote><p>Scanner类是JDK提供的一个工具类，位于java.util这个包中 作用为接收用户在控制台输入的内容 以实现让程序和用户产生交互效果。</p><p>使用此类必须要导包，使用import关键字在包声明之后的位置，导包。(只要是使用不再同一个包中的类，必须导包)。</p><p>此类提供了如下方法，用于接收不同类型的数据。</p><p><code>next() : 接收字符串</code></p><p>nextByte() 接收byte类型的整数</p><p>nextShort() 接收short类型的整数</p><p><code>nextInt() ：接收int类型的整数</code></p><p>nextLong() 接收long类型的整数</p><p>nextFloat() : 接收float类型的浮点数</p><p><code>nextDouble()： 接收double类型的浮点数</code></p><p><code>nextBoolean() : 接收布尔类型的数据</code></p><p>nextLine() 接收整行的内容 不管这一行有什么</p><p>注意：没有nextChar() 也就是即使你需要让用户输入一个字符 也必须使用next()方法接收为一个字符串</p><p><code>如果输入了和接收类型不匹配的数据 将会出现: 输入不匹配异常 InputMismatchException</code></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 14:42
 *  提示用户输入相关信息并且打印
 *  如果输入了和接收类型不匹配的数据 将会出现: 输入不匹配异常  InputMismatchException
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestInputMessage</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建一个Scanner文本扫描器 取名为 input</span>
        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 提示用户输入名字</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您的姓名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 接收用户输入的信息 并且赋值给name变量</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 将用户输入的内容打印</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你输入的名字为： &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您的年龄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> age <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;您输入的年龄为：&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您的分数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">double</span> score <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;您输入的分数为：&quot;</span> <span class="token operator">+</span> score<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您今天开心吗？&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">boolean</span> isHappy <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>isHappy <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token operator">?</span> <span class="token string">&quot;很开心&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;不开心&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>isHappy <span class="token operator">?</span> <span class="token string">&quot;很开心&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;不开心&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支结构" tabindex="-1"><a class="header-anchor" href="#分支结构" aria-hidden="true">#</a> 分支结构</h2><h3 id="_1-基本if结构" tabindex="-1"><a class="header-anchor" href="#_1-基本if结构" aria-hidden="true">#</a> 1. 基本if结构</h3><blockquote><p>语法： if(布尔表达式){ ​ //代码块1 }</p><p>后续代码...</p><p>执行流程： 对布尔表达式进行判断。 结果为true，则先执行代码块1，再执行后续代码。 结果为false，则跳过代码块1，直接执行后续代码。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 15:32
 *  根据用户输入的年龄 判断用户是否成年 并且进行打印
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIf2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您的年龄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> age <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;恭喜你，成年了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-if-else结构" tabindex="-1"><a class="header-anchor" href="#_2-if-else结构" aria-hidden="true">#</a> 2. if-else结构</h3><blockquote><p>语法： if(布尔表达式){ ​ //代码块1 }else{ ​ //代码块2 } 后续代码...</p><p>执行流程： 对布尔表达式进行判断。 结果为true，则先执行代码块1，再退出整个结构，执行后续代码。 结果为false，则先执行代码块2，再退出整个结构，执行后续代码。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 15:40
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIfElse2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您的年龄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> age <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;恭喜你，成年了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;很遗憾，未成年，猥琐发育&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-多重if结构" tabindex="-1"><a class="header-anchor" href="#_3-多重if结构" aria-hidden="true">#</a> 3. 多重if结构</h3><blockquote><p>语法： if(布尔表达式1){ ​ //代码块1 }else if(布尔表达式2){ ​ //代码块2 }else if(布尔表达式3){ ​ //代码块3 }else{ ​ //代码块4 }</p><p>执行流程： 表达式1为true，则执行代码块1，再退出整个结构。</p><p>表达式2为true，则执行代码块2，再退出整个结构。</p><p>表达式3为true，则执行代码块3，再退出整个结构。</p><p>以上均为false，则执行代码块4，再退出整个结构。</p><p>注意：相互排斥，有一个为true，其他均不再执行， 适用于区间判断。</p></blockquote><blockquote><p>多重if 可以用于判断多种情况 通常用于区间判断</p><p>使用多重if处理连续区间的情况 条件必须是有序的 升序或者 降序</p><p>else if 结构没有个数限制 根据情况书写</p><p>else if 不能单独出现 必须结合 if结构</p><p>多重if中的else结构是可选的 根据需求是否书写</p><p>但是注意 如果不书写else结构 那么整个多重if可能为多选0</p></blockquote><blockquote><p>需求：根据成绩判断等级</p><p>大于90分 优秀</p><p>大于80分 良好</p><p>大于70分 中等</p><p>大于等于60分 及格</p><p>小于60 不及格</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/26 15:45
 *  多重if 可以用于判断多种情况  通常用于区间判断
 *  使用多重if处理连续区间的情况 条件必须是有序的 升序或者 降序
 *  else if 不能单独出现 必须结合 if结构
 *  多重if中的else结构是可选的 根据需求是否书写
 *  但是注意 如果不书写else结构 那么整个多重if可能为多选0
 *
 *  需求：根据成绩判断等级
 *  大于90分  优秀
 *  大于80分  良好
 *  大于70分  中等
 *  大于等于60分 及格
 *  小于60 不及格
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestManyIf1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您的分数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">double</span> score <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>score <span class="token operator">&gt;</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;优秀&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>score <span class="token operator">&gt;</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;良好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>score <span class="token operator">&gt;</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中等&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>score <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;及格&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>




    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),d=[r];function v(m,b){return s(),a("div",null,d)}const g=n(k,[["render",v],["__file","day03 变量和数据类型.html.vue"]]);export{g as default};
