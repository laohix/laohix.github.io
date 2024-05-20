import{_ as n,o as s,c as a,e as t}from"./app-8007fa1b.js";const p="/assets/整数-2f0a4192.png",e="/assets/浮点类型-3773e325.png",o="/assets/字符类型-bb112bc0.png",c="/assets/布尔类型-af4e574c.png",l="/assets/转义字符-634c1051.png",i="/assets/字符串-e9611fed.png",u={},k=t(`<h2 id="变量和数据类型" tabindex="-1"><a class="header-anchor" href="#变量和数据类型" aria-hidden="true">#</a> 变量和数据类型</h2><h3 id="_1-变量的概念" tabindex="-1"><a class="header-anchor" href="#_1-变量的概念" aria-hidden="true">#</a> 1. 变量的概念</h3><blockquote><p>生活中我们通常需要记录数据，程序中也是如此，生活中通过各种方式途径来记录数据，程序中使用变量记录数据。</p><p>生活中的数据有不同的数据类型，程序中也是如此。</p></blockquote><h3 id="_2-变量的定义方式" tabindex="-1"><a class="header-anchor" href="#_2-变量的定义方式" aria-hidden="true">#</a> 2. 变量的定义方式</h3><blockquote><p>先声明，再赋值：【常用】 数据类型 变量名; 变量名 = 值;</p><p>声明并赋值：【常用】 数据类型 变量名 = 值;</p><p>多个同类型变量的声明与赋值：【了解】 数据类型 变量1 , 变量2 , 变量3 = 值3 , 变量4 , 变量5 = 值5;</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestVariableDefine</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 变量的定义方式</span>
		
		<span class="token comment">// 方式1 先声明 再赋值</span>
		<span class="token keyword">int</span> a<span class="token punctuation">;</span>
		a <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
        a <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token comment">// 方式2 连声明带赋值写为一条语句</span>
		<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token comment">// 方式3（了解） 同时声明多个    同类型  的变量</span>
		<span class="token comment">// 一下语句只有 e取值55  h 取值66 其余四个变量是没有值的 </span>
		<span class="token comment">// 未赋值的局部变量不能使用 </span>
		<span class="token keyword">int</span> c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e <span class="token operator">=</span> <span class="token number">55</span> <span class="token punctuation">,</span> f <span class="token punctuation">,</span>g <span class="token punctuation">,</span>h <span class="token operator">=</span> <span class="token number">66</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// System.out.println(c);</span>
		<span class="token comment">// System.out.println(d);</span>
		<span class="token comment">// System.out.println(f);</span>
		<span class="token comment">// System.out.println(g);</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-数据类型" tabindex="-1"><a class="header-anchor" href="#_3-数据类型" aria-hidden="true">#</a> 3.数据类型</h3><h4 id="_3-1-整数类型" tabindex="-1"><a class="header-anchor" href="#_3-1-整数类型" aria-hidden="true">#</a> 3.1 整数类型</h4><blockquote><p>给long类型赋值 需要根据情况是否必须在值的末尾追加L<br> 大小写都可以 推荐大写 因为小写阅读性差 如果取值范围在int以内 则L 可加 可不加 如果取值范围超出int 则必须在值的末尾追加L 否则编译报错</p></blockquote><p><img src="`+p+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDataTypeInteger</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 整数类型 整数默认的类型为int类型  </span>
		<span class="token comment">// byte 1个字节 取值范围 -128 ~ 127 </span>
		<span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
		<span class="token keyword">byte</span> b2 <span class="token operator">=</span> <span class="token number">120</span><span class="token punctuation">;</span>
		<span class="token keyword">byte</span> b3 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">110</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b1的取值为：&quot;</span> <span class="token operator">+</span> b1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b2的取值为：&quot;</span> <span class="token operator">+</span> b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b3的取值为：&quot;</span> <span class="token operator">+</span> b3<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// byte b4 = -129;</span>
		<span class="token comment">// System.out.println(&quot;b4的取值为：&quot; + b4);</span>
		
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token comment">// short 类型 短整型  2个字节 取值范围 -32768 ~ 32767 </span>
		<span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">2356</span><span class="token punctuation">;</span>
		<span class="token keyword">short</span> s2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">8855</span><span class="token punctuation">;</span>
		<span class="token keyword">short</span> s3 <span class="token operator">=</span> <span class="token number">18956</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s1的取值为：&quot;</span> <span class="token operator">+</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s2的取值为：&quot;</span> <span class="token operator">+</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;s3的取值为：&quot;</span> <span class="token operator">+</span>s3<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token comment">// short s4 = 32768;</span>
		<span class="token comment">// System.out.println(&quot;s4的取值为：&quot; +s4);</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// int 类型 4个字节 取值范围 -2147483648 ~ 2147483647</span>
		
		<span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token number">89457845</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> i2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">12457412</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> i3 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i1的取值为：&quot;</span> <span class="token operator">+</span> i1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i2的取值为：&quot;</span> <span class="token operator">+</span> i2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i3的取值为：&quot;</span> <span class="token operator">+</span> i3<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;int最大的取值为：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;int最小的取值为：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token comment">// int i4 = 2147483648;</span>
		<span class="token comment">// System.out.println(&quot;i4的取值为：&quot; + i4);</span>
		
		
		<span class="token comment">// long 类型8个字节 取值范围  -9223372036854775808 ~ 9223372036854775807</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;long类型最大的取值为：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;long类型最小的取值为：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 给long类型赋值 需要根据情况是否必须在值的末尾追加L  </span>
		<span class="token comment">// 大小写都可以 推荐大写 因为小写阅读性差</span>
		<span class="token comment">// 如果取值范围在int以内 则L 可加 可不加 </span>
		<span class="token comment">// 如果取值范围超出int  则必须在值的末尾追加L  否则编译报错</span>
		
		<span class="token keyword">long</span> l1 <span class="token operator">=</span> <span class="token number">256L</span><span class="token punctuation">;</span>
		<span class="token keyword">long</span> l2 <span class="token operator">=</span> <span class="token number">8857845</span><span class="token punctuation">;</span>
		<span class="token keyword">long</span> l3 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">894551245</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;l1的取值为：&quot;</span> <span class="token operator">+</span>  l1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;l2的取值为：&quot;</span> <span class="token operator">+</span>  l2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;l3的取值为：&quot;</span> <span class="token operator">+</span>  l3<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">long</span> l4 <span class="token operator">=</span> <span class="token number">2147483648l</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;l4的取值为：&quot;</span> <span class="token operator">+</span>  l4<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		
		
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-浮点数类型" tabindex="-1"><a class="header-anchor" href="#_3-2-浮点数类型" aria-hidden="true">#</a> 3.2 浮点数类型</h4><blockquote><p>float和double都属于近似值 无法保存精确值</p><p>给double类型赋值 如果取值范围超出了float 则必须在值的末尾追加 D</p></blockquote><p><img src="`+e+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFloatDouble</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// float和double都属于近似值 无法保存精确值 </span>
		<span class="token comment">// float -3.4E+38 ~ -1.4E-45</span>
		<span class="token comment">// 给double类型赋值 如果取值范围超出了float  则必须在值的末尾追加 D </span>
		
		<span class="token keyword">float</span> f1 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">340000000000000000000000000000000000000F</span><span class="token punctuation">;</span>
		
		<span class="token keyword">float</span> f2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">0.0000000000000000000000000000000000000000000014F</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token comment">// float正数取值范围 1.4E-45 ~ 3.4E+38</span>
		
		<span class="token keyword">float</span> f3 <span class="token operator">=</span> <span class="token number">0.0000000000000000000000000000000000000000000014F</span><span class="token punctuation">;</span>

		<span class="token keyword">float</span> f4 <span class="token operator">=</span> <span class="token number">340000000000000000000000000000000000000F</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f3<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f4<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">25.5</span><span class="token punctuation">;</span>
		<span class="token keyword">double</span> d2 <span class="token operator">=</span> <span class="token number">33.5</span><span class="token punctuation">;</span>
		<span class="token keyword">double</span> d3 <span class="token operator">=</span> <span class="token number">38947841241543.5</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d3<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-字符类型" tabindex="-1"><a class="header-anchor" href="#_3-3-字符类型" aria-hidden="true">#</a> 3.3 字符类型</h4><blockquote><p>字符赋值：char c1 = &#39;A&#39;;（通过&#39;&#39;描述为字符赋值）</p><p>整数赋值：char c2 = 65;（通过十进制数65在字符集中对应的字符赋值）</p><p>进制赋值：char c3 = &#39;\\u0041&#39;;（通过十六进制数41在字符集中所对应的字符赋值）</p></blockquote><p><img src="`+o+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestChar</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// char类型  取值范围  无符号数  0 ~ 65535</span>
		<span class="token comment">// 三种赋值方式</span>
		<span class="token comment">// 方式1  直接使用英文单引号包括任意一个内容</span>
		
		<span class="token keyword">char</span> ch1 <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">char</span> ch2 <span class="token operator">=</span> <span class="token char">&#39;中&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">char</span> ch3 <span class="token operator">=</span> <span class="token char">&#39;2&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">char</span> ch4 <span class="token operator">=</span> <span class="token char">&#39;-&#39;</span><span class="token punctuation">;</span>
		
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch1中保存的内容为:&quot;</span> <span class="token operator">+</span> ch1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch2中保存的内容为:&quot;</span> <span class="token operator">+</span> ch2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch3中保存的内容为:&quot;</span> <span class="token operator">+</span> ch3<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch4中保存的内容为:&quot;</span> <span class="token operator">+</span> ch4<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// char ch5 = &#39;28&#39;;</span>
		<span class="token comment">// System.out.println(&quot;ch5中保存的内容为:&quot; + ch5);</span>
		
		<span class="token comment">// 方式2  直接赋值在0~65535之内的整数  </span>
		<span class="token comment">// ASCII 美国标准信息交换码  是一张编码表  </span>
		<span class="token comment">// 记录了 大小写英文字母 以及一些标点符号 指令等等  一共128个  </span>
		
		<span class="token keyword">char</span> ch5 <span class="token operator">=</span> <span class="token number">65</span><span class="token punctuation">;</span> <span class="token comment">// A</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch5中保存的内容为:&quot;</span> <span class="token operator">+</span> ch5<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">char</span> ch6 <span class="token operator">=</span> <span class="token number">66</span><span class="token punctuation">;</span> <span class="token comment">// B</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch6中保存的内容为:&quot;</span> <span class="token operator">+</span> ch6<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">char</span> ch7 <span class="token operator">=</span> <span class="token number">67</span><span class="token punctuation">;</span> <span class="token comment">// C</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch7中保存的内容为:&quot;</span> <span class="token operator">+</span> ch7<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token comment">// Unicode编码表 万国码 记录了世界上大多数国家的语言 是一个十六进制的编码表</span>
		<span class="token comment">// 中文的取值范围是  \\u4e00 ~ \\u9fa5</span>
		<span class="token keyword">char</span> ch8 <span class="token operator">=</span> <span class="token number">20013</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch8中的内容为：&quot;</span> <span class="token operator">+</span>  ch8<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">char</span> ch9 <span class="token operator">=</span> <span class="token number">20320</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch9中的内容为：&quot;</span> <span class="token operator">+</span>  ch9<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">char</span> ch10 <span class="token operator">=</span> <span class="token number">19990</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch10中的内容为：&quot;</span> <span class="token operator">+</span>  ch10<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">char</span> ch11 <span class="token operator">=</span> <span class="token number">0X4e16</span><span class="token punctuation">;</span> <span class="token comment">// 以0X开头 表示是十六进制整数数值</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ch11中的内容为：&quot;</span> <span class="token operator">+</span>  ch11<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 方式3 使用英文的单引号包括 以杠u开头的十六进制的 Unicode编码 </span>
		
		<span class="token keyword">char</span> c1 <span class="token operator">=</span> <span class="token char">&#39;\\u4e00&#39;</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">char</span> c2 <span class="token operator">=</span> <span class="token char">&#39;\\u4e01&#39;</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">char</span> c3 <span class="token operator">=</span> <span class="token char">&#39;\\u9fa5&#39;</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c3<span class="token punctuation">)</span><span class="token punctuation">;</span>	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-布尔类型" tabindex="-1"><a class="header-anchor" href="#_3-4-布尔类型" aria-hidden="true">#</a> 3.4 布尔类型</h4><p><img src="`+c+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestBoolean</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 布尔类型 取值 为 true 或者 false  仅可以描述真 或者 假</span>
		
		
		<span class="token keyword">boolean</span> bl1 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">boolean</span> bl2 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
		<span class="token keyword">boolean</span> bl3 <span class="token operator">=</span> a <span class="token operator">&gt;</span> b<span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bl1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bl2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bl3<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-转义字符" tabindex="-1"><a class="header-anchor" href="#_4-转义字符" aria-hidden="true">#</a> 4. 转义字符</h3><blockquote><p>转义字符可以用于保存一些特殊的符号 或者实现一些特定的效果</p></blockquote><p><img src="`+l+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestConvertChar</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 转义字符</span>
		<span class="token keyword">char</span> ch1 <span class="token operator">=</span> <span class="token char">&#39;\\&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ch1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token comment">// \\n 表示换行 </span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a\\nb\\nc\\nedfg\\n g\\nh\\nello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token comment">// \\t 制表位 可以保证在大多数情况上下行文本对齐 </span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;春\\t风\\t得\\t意\\t马\\t蹄\\t疾&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一\\t日\\t看\\t尽\\t长\\t安\\t花&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token comment">// \\\\ 保存一个斜杠  需要写两个</span>
		<span class="token keyword">char</span> ch2 <span class="token operator">=</span> <span class="token char">&#39;\\\\&#39;</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ch2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		
		<span class="token keyword">char</span> ch3 <span class="token operator">=</span> <span class="token char">&#39;\\&quot;&#39;</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ch3<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-string类型" tabindex="-1"><a class="header-anchor" href="#_5-string类型" aria-hidden="true">#</a> 5.String类型</h3><p><img src="`+i+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestString</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 引用数据类型 String类型  </span>
		<span class="token comment">// 任何英文双引号包括的内容都属于字符串  </span>
		
		<span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
		
		<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;hello world &quot;</span><span class="token punctuation">;</span>
		
		<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token string">&quot;世界你好&quot;</span><span class="token punctuation">;</span>
		
		<span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token string">&quot;1234456&quot;</span><span class="token punctuation">;</span>
		
		
		<span class="token class-name">String</span> str5 <span class="token operator">=</span> <span class="token string">&quot;\\&quot;   saabswe  fdspfpkwwqer  cdsdkqlwek 范德萨发叫你姐前往&quot;</span><span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-常量" tabindex="-1"><a class="header-anchor" href="#_6-常量" aria-hidden="true">#</a> 6. 常量</h3><blockquote><p>是指程序中无法改变的数据 称之为常量</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestConstant</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 变量 </span>
		<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
		a <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
		a <span class="token operator">=</span> <span class="token number">235</span><span class="token punctuation">;</span>
		<span class="token comment">// 常量 </span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-标识符" tabindex="-1"><a class="header-anchor" href="#_7-标识符" aria-hidden="true">#</a> 7. 标识符</h3><blockquote><p>凡是需要自定义名称的内容 都属于标识符</p><p>比如：类名 变量名 等等</p></blockquote><h3 id="_8-标识符命名规范" tabindex="-1"><a class="header-anchor" href="#_8-标识符命名规范" aria-hidden="true">#</a> 8. 标识符命名规范</h3><p>所有的标识符统一使用单词 ，不能使用拼音 更不允许使用中文 或者其他一些特殊符号 ，见名知义，有意义。</p><ul><li>类名 ： 首单词首字母大写，后续每一个新的单词首字母大写，其余字母小写。大写驼峰命名法。</li><li>变量名/方法名 ： 字(字母)、下(下划线)、美(美元符号)、人(人民币符号 )、数(数字)、骆驼 (小写驼峰命名) <ul><li>变量名可以以字母、下划线、美元符号、人民币符号开头，可以包含数字，不能以数字开头。</li></ul></li></ul><h3 id="_9-类型转换" tabindex="-1"><a class="header-anchor" href="#_9-类型转换" aria-hidden="true">#</a> 9. 类型转换</h3><blockquote><p>自动提升 手动下降</p></blockquote><h4 id="_9-1-自动类型转换" tabindex="-1"><a class="header-anchor" href="#_9-1-自动类型转换" aria-hidden="true">#</a> 9.1 自动类型转换</h4><blockquote><p>自动类型转换： 两种类型相互兼容。 目标类型(等号左边)取值范围大于源类型取值范围(等号右边)。 byte &lt; short &lt; int &lt; long &lt; float &lt; double 从较小的取值范围类型 可以 自动提升为 较大的取值范围类型</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAutoConvert</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 自动类型转换：</span>
		<span class="token comment">// 两种类型相互兼容。</span>
		<span class="token comment">// 目标类型(等号左边)取值范围大于源类型取值范围(等号右边)。</span>
		<span class="token comment">// byte &lt; short &lt; int &lt; long &lt; float &lt; double </span>
		<span class="token comment">// 从较小的取值范围类型 可以 自动提升为 较大的取值范围类型   </span>
		
		
		
		<span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
		<span class="token keyword">short</span> s1 <span class="token operator">=</span> b1<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">short</span> s2 <span class="token operator">=</span> <span class="token number">556</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> i1 <span class="token operator">=</span> s2<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">int</span> i2 <span class="token operator">=</span> <span class="token number">8956</span><span class="token punctuation">;</span>
		<span class="token keyword">long</span> l1 <span class="token operator">=</span> i2<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>l1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">long</span> l2 <span class="token operator">=</span> <span class="token number">895645L</span><span class="token punctuation">;</span>
		<span class="token keyword">float</span> f1 <span class="token operator">=</span> l2<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">float</span> f2 <span class="token operator">=</span> <span class="token number">35.5F</span><span class="token punctuation">;</span>
		<span class="token keyword">double</span> d1 <span class="token operator">=</span> f2<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">;</span>	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-2-强制类型转换" tabindex="-1"><a class="header-anchor" href="#_9-2-强制类型转换" aria-hidden="true">#</a> 9.2 强制类型转换</h4><blockquote><p>强制类型转换 两种类型相互兼容。 目标类型(等号左边)取值范围 小于 源类型(等号右边)取值范围。 从较大的取值范围 向 较小的取值范围转换 必须强制类型转换</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestForceConvert</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 强制类型转换</span>
		<span class="token comment">// 两种类型相互兼容。</span>
		<span class="token comment">// 目标类型(等号左边)取值范围 小于  源类型(等号右边)取值范围。</span>
		<span class="token comment">// 从较大的取值范围  向  较小的取值范围转换  必须强制类型转换 </span>
		
		<span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
		<span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span>s1<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token number">5689</span><span class="token punctuation">;</span>
		<span class="token keyword">short</span> s2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span>i1<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">long</span> l1 <span class="token operator">=</span> <span class="token number">895645</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> i2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>l1<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">float</span> f1 <span class="token operator">=</span> <span class="token number">3.5F</span><span class="token punctuation">;</span>
		<span class="token keyword">long</span> l2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>f1<span class="token punctuation">;</span> <span class="token comment">// 浮点数强转为整数 小数将抹去 </span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>l2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
		<span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">22.5</span><span class="token punctuation">;</span>
		<span class="token keyword">float</span> f2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span>d1<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f2<span class="token punctuation">)</span><span class="token punctuation">;</span>	

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),r=[k];function d(v,m){return s(),a("div",null,r)}const y=n(u,[["render",d],["__file","day02 变量和数据类型.html.vue"]]);export{y as default};
