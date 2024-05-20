import{_ as n,o as s,c as a,e as p}from"./app-8007fa1b.js";const t="/assets/数组的扩容-495b76ab.png",e={},o=p(`<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="_1-返回值和返回值类型" tabindex="-1"><a class="header-anchor" href="#_1-返回值和返回值类型" aria-hidden="true">#</a> 1. 返回值和返回值类型</h3><blockquote><p>如果方法声明返回值类型 不是void 那么必须在方法体中使用return返回具体的值 要求值必须和声明类型匹配</p><p>return关键字：表示结束方法并且返回内容 所以在return关键字之后不能书写任何代码</p></blockquote><h4 id="_1-1-情况1-一个return返回结果" tabindex="-1"><a class="header-anchor" href="#_1-1-情况1-一个return返回结果" aria-hidden="true">#</a> 1.1 情况1： 一个return返回结果</h4><blockquote><p>有返回值的方法三种调用方式</p><p>没有返回值的方法 只能单独调用 不能接收 也不能打印</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/30 10:21
 *  编写方法实现两个数求和计算
 *
 *  有返回值的方法三种调用方式
 *  没有返回值的方法 只能单独调用  不能接收 也不能打印
 *
 *  return关键字：表示结束方法并且返回内容  所以在return关键字之后不能书写任何代码
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAdd</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m1方法执行了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;main方法开始执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直接调用方法</span>

        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 先接收返回值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sum = &quot;</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将返回值打印</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直接打印方法 先执行add方法 再将方的返回值进行打印</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        System.out.println(m1());;</span>



        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;main执行完毕&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-情况2-分支结构-多个return" tabindex="-1"><a class="header-anchor" href="#_1-2-情况2-分支结构-多个return" aria-hidden="true">#</a> 1.2 情况2：分支结构 多个return</h4><blockquote><p>在分支结构中返回结果 必须保证每一条分支都有正确的返回值 即可以书写多个return</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/30 10:34
 *  在分支结构中返回结果 必须保证每一条分支都有正确的返回值 即可以书写多个return
 *  返回值只认类型 务必要将返回的数据 和 方法声明所定义的返回值类型保持一致
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestReturn</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">isEven1</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;偶数&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;奇数&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">isEven3</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;偶数&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&quot;奇数&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">isEven2</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&quot;偶数&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;奇数&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isEven4</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">isEven5</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> num <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">isEven4</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token operator">?</span> <span class="token string">&quot;偶数&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;奇数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">isEven4</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;偶数&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;奇数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-情况3-返回值为void-也可以使用return" tabindex="-1"><a class="header-anchor" href="#_1-3-情况3-返回值为void-也可以使用return" aria-hidden="true">#</a> 1.3 情况3：返回值为void 也可以使用return</h4><blockquote><p>在方法声明返回值为void的情况 也可以使用return 此时return只表示结束方法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/30 10:43
 *  如果方法声明返回值类型 不是void  那么必须在方法体中使用return返回具体的值
 *  在方法声明返回值为void的情况 也可以使用return  此时return只表示结束方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestVoidReturn</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 结束方法 即 方法将停止执行  注意和break的区别</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;show方法执行完毕&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-方法重载" tabindex="-1"><a class="header-anchor" href="#_2-方法重载" aria-hidden="true">#</a> 2. 方法重载</h3><blockquote><p>方法重载：同一个类或者父子类中的方法 名称相同 参数列表(个数、类型、顺序)不同 即可称之为方法重载</p><p>跟返回值类型 访问权限修饰符无关</p><p>在我们调用重载的方法的时候 会根据我们传入的实参匹配到唯一一个与之对应的方法 所以 无需担心</p><p>方法名称都一张 不知道调用哪个方法 这个问题</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/30 11:18
 *  方法重载：同一个类或者父子类中的方法 名称相同 参数列表(个数、类型、顺序)不同 即可称之为方法重载
 *  跟返回值类型 访问权限修饰符无关
 *
 *  在我们调用重载的方法的时候 会根据我们传入的实参匹配到唯一一个与之对应的方法 所以 无需担心
 *  方法名称都一张 不知道调用哪个方法 这个问题
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMethodOverLoad</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> c<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> c<span class="token punctuation">,</span><span class="token keyword">int</span> d<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c <span class="token operator">+</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> c<span class="token punctuation">,</span><span class="token keyword">int</span> d<span class="token punctuation">,</span><span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c <span class="token operator">+</span> d <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><h3 id="_1-数组的概念" tabindex="-1"><a class="header-anchor" href="#_1-数组的概念" aria-hidden="true">#</a> 1. 数组的概念</h3><blockquote><p>一组**<code>连续</code><strong>的存储空间，存储多个</strong><code>相同</code><strong>数据类型的值，长度是</strong><code>固定</code>**的。</p></blockquote><h3 id="_2-数组的定义" tabindex="-1"><a class="header-anchor" href="#_2-数组的定义" aria-hidden="true">#</a> 2. 数组的定义</h3><blockquote><p>先声明、再分配空间： 数据类型[] 数组名;</p><p>数组名 = new 数据类型[长度]; 声明并分配空间：数据类型[] 数组名 = new 数据类型[长度];</p><p>声明并赋值（繁）： 数据类型[] 数组名 = new 数据类型[]{value1,value2,value3,...};</p><p>声明并赋值（简）： 数据类型[] 数组名 = {value1,value2,value3,...};</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/30 14:15
 *  数组定义三种方式
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestArrayDefine</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 方式1 先声明 再分配空间</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr1<span class="token punctuation">;</span>
        arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 方式2 声明并且分配空间</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


        <span class="token comment">// 方式3 声明并且赋值 繁琐</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


        <span class="token comment">// 方式4 声明并且赋值 简单</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr4 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-数组的使用" tabindex="-1"><a class="header-anchor" href="#_3-数组的使用" aria-hidden="true">#</a> 3. 数组的使用</h3><blockquote><p>数组的使用</p><p>元素：数组中的每个数据 称之为元素</p><p>下标、角标、索引、index ： 下标表示数组中元素的编号 自动生成 从0开始 往后依次+1</p><p>数组的访问：获取数组中元素的值 以及 给元素赋值 这些操作 都属于数组的访问</p><p>赋值 数组名[下标] = 值；</p><p>取值 System.out.println(数组名[下标]);</p><p>数组下标越界异常：访问不存在的下标 将会数组下标越界异常 ArrayIndexOutOfBoundsException</p><p>异常会导致程序中断</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/30 14:40
 *  数组的使用
 *      元素：数组中的每个数据 称之为元素
 *      下标、角标、索引、index ： 下标表示数组中元素的编号 自动生成 从0开始 往后依次+1
 *      数组的访问：获取数组中元素的值 以及 给元素赋值 这些操作 都属于数组的访问
 *          赋值 数组名[下标] = 值；
 *          取值 System.out.println(数组名[下标]);
 *
 *  数组下标越界异常：访问不存在的下标 将会数组下标越界异常  ArrayIndexOutOfBoundsException
 *  异常会导致程序中断
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestArrayUse</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 赋值</span>
        arr1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
        arr1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">78</span><span class="token punctuation">;</span>
        arr1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">88</span><span class="token punctuation">;</span>
<span class="token comment">//        arr1[5566] = 99;</span>

        <span class="token comment">// 取值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数组中的第一个元素值为：&quot;</span> <span class="token operator">+</span> arr1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数组中的第二个元素值为：&quot;</span> <span class="token operator">+</span> arr1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数组中的第三个元素值为：&quot;</span> <span class="token operator">+</span> arr1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        System.out.println(&quot;数组中的第四个元素值为：&quot; + arr1[3]);</span>



    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-数组的遍历" tabindex="-1"><a class="header-anchor" href="#_4-数组的遍历" aria-hidden="true">#</a> 4. 数组的遍历</h3><blockquote><p>遍历：逐一对数组中的元素进行访问 这个过程称之为遍历 使用 循环来遍历数组</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/30 14:50
 *  遍历：逐一对数组中的元素进行访问  这个过程称之为遍历 使用 循环来遍历数组
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestArrayForeach</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 赋值 使用循环遍历赋值</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入第&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;个元素的值&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span>  input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 取值 使用循环遍历取值</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>






    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-数组的属性" tabindex="-1"><a class="header-anchor" href="#_5-数组的属性" aria-hidden="true">#</a> 5. 数组的属性</h3><blockquote><p>数组的属性：length 是一个int类型的数据 表示数组的长度</p><p>使用方式 ： 数组名.length</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/30 14:57
 *  数组的属性：length 是一个int类型的数据 表示数组的长度
 *  使用方式 ： 数组名.length
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestArrayField</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">564</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">63</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-数组的默认值" tabindex="-1"><a class="header-anchor" href="#_6-数组的默认值" aria-hidden="true">#</a> 6.数组的默认值</h3><blockquote><p>数组的默认值</p><p>数组在开辟完空间以后 是有默认值的</p><p>整数 0</p><p>浮点 0.0</p><p>字符 \\u0000</p><p>布尔 false</p><p>其他 null</p><p>Arrays工具类 位于java.util包 此类提供了有专门用于操作数组的各种方法</p><p>Arrays.toString(数组名) ： 将数组中的元素转换为字符串</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/30 15:33
 *  数组的默认值
 *  数组在开辟完空间以后 是有默认值的
 *  整数  0
 *  浮点  0.0
 *  字符  \\u0000
 *  布尔  false
 *
 *  其他  null
 *
 *  Arrays工具类 位于java.util包 此类提供了有专门用于操作数组的各种方法
 *  Arrays.toString(数组名) ： 将数组中的元素转换为字符串
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestArrayDefaultValue</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args   <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;main方法开始执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">byte</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;str = &quot;</span> <span class="token operator">+</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>




        <span class="token keyword">short</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  s1  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">short</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> i1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>i1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">long</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> l1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>l1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">float</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> f1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">float</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">double</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">boolean</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> bl1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>bl1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">char</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> ch1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>ch1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> strings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-数组的扩容" tabindex="-1"><a class="header-anchor" href="#_7-数组的扩容" aria-hidden="true">#</a> 7. 数组的扩容</h3><p><img src="`+t+`" alt=""></p><blockquote><p>数组的扩容 ：数组的长度是固定的 一旦定义以后 是无法改变</p><p>扩容的步骤：</p><p>1.创建一个更长的数组</p><p>2.将原数组中的内元素 依次复制到新数组中</p><p>3.将原数组引用(变量)指向新的数组</p><p>数组作为引用数据类型 其数组名(引用)中保存的是数组在内存中的地址 所以 将一个数组 赋值 给另外一个数组 赋值的是地址</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/5/30 15:48
 *  数组的扩容 ：数组的长度是固定的 一旦定义以后 是无法改变
 *  扩容的步骤：
 *  1.创建一个更长的数组
 *  2.将原数组中的内元素 依次复制到新数组中
 *  3.将原数组引用(变量)指向新的数组
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestArrayGrow</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> oldArr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> newArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>oldArr<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> oldArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> oldArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 数组作为引用数据类型 其数组名(引用)中保存的是数组在内存中的地址</span>
        <span class="token comment">// 所以 将一个数组 赋值 给另外一个数组 赋值的是地址</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;地址赋值之前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oldArr地址值：&quot;</span> <span class="token operator">+</span> oldArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;newArr地址值：&quot;</span> <span class="token operator">+</span>  newArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oldArr长度：&quot;</span> <span class="token operator">+</span> oldArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;newArr长度：&quot;</span> <span class="token operator">+</span>  newArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>


        oldArr <span class="token operator">=</span> newArr<span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;地址赋值之后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oldArr地址值：&quot;</span> <span class="token operator">+</span> oldArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;newArr地址值：&quot;</span> <span class="token operator">+</span>  newArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oldArr长度：&quot;</span> <span class="token operator">+</span> oldArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;newArr长度：&quot;</span> <span class="token operator">+</span>  newArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),c=[o];function l(i,u){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","day06-方法和数组.html.vue"]]);export{r as default};
