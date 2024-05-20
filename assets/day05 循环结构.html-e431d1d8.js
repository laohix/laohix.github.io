import{_ as n,o as s,c as a,e as p}from"./app-8007fa1b.js";const t={},e=p(`<h2 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构" aria-hidden="true">#</a> 循环结构</h2><h3 id="_1-打印三角形" tabindex="-1"><a class="header-anchor" href="#_1-打印三角形" aria-hidden="true">#</a> 1. 打印三角形</h3><blockquote><p>使用多重循环打印三角形</p><p>左半部分为到三角形</p><p>右半部分为一个直角三角形 每一行元素的个数为 行号 * 2 - 1</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/28 9:10
 *  使用多重循环打印三角形
 *  左半部分为到三角形
 *  右半部分为一个直角三角形  每一行元素的个数为  行号 * 2  - 1
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestTriangle</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 左半部分</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>j <span class="token operator">&gt;=</span> i<span class="token punctuation">;</span>j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;$&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 右半部分</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j <span class="token operator">&lt;=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span><span class="token number">1</span>   <span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 换行</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-课堂练习" tabindex="-1"><a class="header-anchor" href="#_2-课堂练习" aria-hidden="true">#</a> 2. 课堂练习</h3><h4 id="_2-1-银行菜单" tabindex="-1"><a class="header-anchor" href="#_2-1-银行菜单" aria-hidden="true">#</a> 2.1 银行菜单</h4><blockquote><p>打印银行菜单。（要求使用：switch、do while）</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/28 9:32
 *  打印银行菜单。（要求使用：switch、do while）
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestBankMenu</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> choice<span class="token punctuation">;</span>
        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;********************欢迎使用钱真多银行菜单系统********************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;1.开户   2.存款   3.取款   4.转账   5.修改密码  6.查询余额  0.退出&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            choice <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">switch</span><span class="token punctuation">(</span>choice<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行开户功能&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行存款功能&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行取款功能&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行转账功能&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行修改密码功能&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行查询余额功能&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;谢谢使用，再见~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;输入有误，请重新输入&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>choice <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>







    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-打印数列" tabindex="-1"><a class="header-anchor" href="#_2-2-打印数列" aria-hidden="true">#</a> 2.2 打印数列</h4><blockquote><p>使用循环输出 100、95、90、85.......5</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/28 9:45
 *  使用循环输出 100、95、90、85.......5
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPrintNumber</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">-=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-break关键字补充" tabindex="-1"><a class="header-anchor" href="#_3-break关键字补充" aria-hidden="true">#</a> 3. break关键字补充</h3><blockquote><p>break关键字在多重循环中的使用</p><p>break默认情况：只会对离break关键字最近的结构产生作用</p><p>也可以在指定的结构之前 加上标记 然后再break关键字之后指定对应的标记 跳出指定的结构</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/28 9:49
 *  break关键字在多重循环中的使用
 *
 *  break默认情况：只会对离break关键字最近的结构产生作用
 *  也可以在指定的结构之前 加上标记 然后再break关键字之后指定对应的标记 跳出指定的结构
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestBreak</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>j <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sb <span class="token operator">:</span> <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>j <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">break</span> sb<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>






    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="_1-方法的概念" tabindex="-1"><a class="header-anchor" href="#_1-方法的概念" aria-hidden="true">#</a> 1. 方法的概念</h3><blockquote><p>一系列代码指令的集合，用于解决特定的问题，可以反复使用。</p></blockquote><h3 id="_2-方法的格式" tabindex="-1"><a class="header-anchor" href="#_2-方法的格式" aria-hidden="true">#</a> 2. 方法的格式</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> 方法名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-方法的定义位置" tabindex="-1"><a class="header-anchor" href="#_3-方法的定义位置" aria-hidden="true">#</a> 3.方法的定义位置</h3><blockquote><p>与main方法平级</p></blockquote><h3 id="_4-方法的调用" tabindex="-1"><a class="header-anchor" href="#_4-方法的调用" aria-hidden="true">#</a> 4. 方法的调用</h3><blockquote><p>在需要调用方法的位置直接书写方法名即可。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/28 14:29
 *  使用方法打印符号
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPrintSign1</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;床前明月光&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;疑是地上霜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;举头望明月&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;低头思故乡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-方法的参数" tabindex="-1"><a class="header-anchor" href="#_5-方法的参数" aria-hidden="true">#</a> 5.方法的参数</h3><blockquote><p>参数：调用方法时传递的数据称之为参数</p><p>形参：形式参数 方法定义的时候书写的参数 称之为形参</p><p>形参规定了参数的**<code>个数、类型、顺序</code>** 表示实参必须遵循这个规定</p><p>实参：方法调用的时候传入的参数 必须符合形参的约定</p></blockquote><h4 id="_5-1-单个参数" tabindex="-1"><a class="header-anchor" href="#_5-1-单个参数" aria-hidden="true">#</a> 5.1 单个参数</h4><blockquote><p>使用参数实现 可以让用户灵活的指定横线的个数</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/28 15:16
 *  使用参数实现 可以让用户灵活的指定横线的个数
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPrintSign</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;床前明月光&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;疑是地上霜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;举头望明月&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> numa <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> numb <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> numa <span class="token operator">+</span> numb<span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;低头思故乡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     *  参数：调用方法时传递的数据称之为参数
     *  形参：形式参数 方法定义的时候书写的参数 称之为形参
     *  形参规定了参数的个数、类型、顺序 表示实参必须遵循这个规定
     *
     *  实参：方法调用的时候传入的参数 必须符合形参的约定
     * <span class="token keyword">@param</span> <span class="token parameter">count</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> count<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-多个参数" tabindex="-1"><a class="header-anchor" href="#_5-2-多个参数" aria-hidden="true">#</a> 5.2 多个参数</h4><blockquote><p>使用多个参数实现 让用户灵活的指定 符号的 个数 以及符号的类型</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/28 15:51
 *  使用多个参数实现 让用户灵活的指定 符号的 个数 以及符号的类型
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPrintSign</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;床前明月光&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;疑是地上霜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&quot;%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;举头望明月&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> sign <span class="token operator">=</span> <span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> sign<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;低头思故乡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printSign</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">,</span><span class="token class-name">String</span> sign<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> count<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>sign<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","day05 循环结构.html.vue"]]);export{k as default};
