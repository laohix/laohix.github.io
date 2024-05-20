import{_ as n,o as s,c as a,e as t}from"./app-8007fa1b.js";const e="/assets/网络模型-00d18cef.png",p="/assets/七层模型-9c20343c.png",c="/assets/TCP和UDP对比-a04ca03f.png",o={},l=t('<h2 id="网络编程" tabindex="-1"><a class="header-anchor" href="#网络编程" aria-hidden="true">#</a> 网络编程</h2><h3 id="_1-名词解释" tabindex="-1"><a class="header-anchor" href="#_1-名词解释" aria-hidden="true">#</a> 1. 名词解释</h3><blockquote><p>IP Internet Protocol 网络协议 用于标识位于网络的每一台计算机</p><p>DNS Domain Name System 用于解析域名 将域名转换解析为与之关联的IP地址</p><p>端口号 用于标识计算机上每一个进程的编号 0 ~ 65535</p><p>Socket 套接字 属于发送 接收数据的载体</p></blockquote><h3 id="_2-网络模型" tabindex="-1"><a class="header-anchor" href="#_2-网络模型" aria-hidden="true">#</a> 2. 网络模型</h3><blockquote><p>网络七层模型是 比 以下 五层 多了两层 ：会话层 和 表示层 因为七层模型太过理想化 未被实现 我们所使用的 是五层模型</p></blockquote><p><img src="'+e+'" alt=""></p><p><img src="'+p+`" alt=""></p><h3 id="_3-tcp" tabindex="-1"><a class="header-anchor" href="#_3-tcp" aria-hidden="true">#</a> 3.TCP</h3><blockquote><p>TCP : 传输控制协议（Transmission Control Protocol）</p><p>面向连接的 安全的 可靠的传输协议</p></blockquote><blockquote><p>三次握手和四次挥手</p><p>TCP协议的三次握手：</p><p>​ 第一次：客户端向服务器发送连接请求</p><p>​ 第二次：服务器向客户端响应连接请求</p><p>​ 第三次：客户端与服务器建立连接</p><p>TCP协议的四次挥手：</p><p>​ 第一次：客户端向服务器发送断开连接请求</p><p>​ 第二次：服务器向客服端响应收到断开连接请求(因为TCP连接是双向的，所以此时服务器依然可以 向客户端发送信息)</p><p>​ 第三次：客户端等待服务器发送信息完成，向服务器确定全部信息发送完毕，并且断开客户端与服务器的连接</p><p>​ 第四次：服务器向客户端断开连接</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">ServerSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/19 14:09
 *  服务器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">8899</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器已启动……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 因为我们需要处理多个客户端的请求 所以我们需要编写死循环实现 服务器的持续监听</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token class-name">Socket</span> socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">new</span> <span class="token class-name">ServerThread</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>




    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/19 14:14
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServerThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Socket</span> socket<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ServerThread</span><span class="token punctuation">(</span><span class="token class-name">Socket</span> socket<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>socket <span class="token operator">=</span> socket<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">BufferedReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">OutputStream</span> outputStream <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;你好客户端&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            socket<span class="token punctuation">.</span><span class="token function">shutdownOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/19 14:12
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">8899</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OutputStream</span> outputStream <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;你好 服务器 我是客户端1号&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        socket<span class="token punctuation">.</span><span class="token function">shutdownOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">BufferedReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器的回话是：&quot;</span> <span class="token operator">+</span>  reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/19 14:12
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">8899</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OutputStream</span> outputStream <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;你好 服务器 我是客户端2号&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        socket<span class="token punctuation">.</span><span class="token function">shutdownOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">BufferedReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器的回话是：&quot;</span> <span class="token operator">+</span>  reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-udp" tabindex="-1"><a class="header-anchor" href="#_4-udp" aria-hidden="true">#</a> 4. UDP</h3><blockquote><p>基于UDP协议的数据传输</p><p>User Datagram Protocol 非面向连接的 不安全 不可靠的传输协议</p><p>将数据、源、目的封装成数据包，不需要建立连接</p><p>每个数据报的大小限制在64K内</p><p>发送不管对方是否准备好，接收方收到也不确认，故是不可靠的</p><p>可以广播发送</p><p>发送数据结束时无需释放资源，开销小，速度快</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/19 15:28
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// DatagramPacket构造方法四个参数</span>
        <span class="token comment">// 1.发送数据byte数组</span>
        <span class="token comment">// 2.数据长度</span>
        <span class="token comment">// 3.地址对象 IP地址</span>
        <span class="token comment">// 4.端口号</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;你好，服务器&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token class-name">InetAddress</span> localHost <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getLocalHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token number">8899</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建数据包、报  对象</span>
        <span class="token class-name">DatagramPacket</span> sendPacket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>length <span class="token punctuation">,</span>localHost <span class="token punctuation">,</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建Socket对象</span>
        <span class="token class-name">DatagramSocket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 发送数据</span>
        socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>sendPacket<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 准备一个长度为100的数组</span>
        <span class="token keyword">byte</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> receiveData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 定义接收数据的长度</span>
        <span class="token keyword">int</span> receiveLength <span class="token operator">=</span> receiveData<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token comment">// 准备要接收数据的数据包  长度 大小 任意指定 有可能存在无法完整接收的情况</span>
        <span class="token class-name">DatagramPacket</span> receivePacket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>receiveData<span class="token punctuation">,</span>receiveLength<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 接收数据 此时数据在数据包对象中</span>
        socket<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>receivePacket<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 解析数据包对象</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data1 <span class="token operator">=</span> receivePacket<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 将数据包byte数组 转换为字符串对象</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器发送的信息为：&quot;</span> <span class="token operator">+</span>  <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>data1<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data1<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/19 15:27
 *  基于UDP协议的数据传输
 *  DatagramSocket  发送接收数据类
 *  DatagramPackage 数据报类
 *  InetAddress  包含IP地址信息类
 *  SocketAddress 包含 IP地址 和 端口号信息类
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token comment">// 创建Socket对象 指定端口号为8899 没有指定IP地址 表示默认为本机</span>
        <span class="token class-name">DatagramSocket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">8899</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;启动服务器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 准备接收数据数组</span>
        <span class="token keyword">byte</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> receiveData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 定义接收数据长度</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> receiveData<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token comment">// 创建数据包对象 用于接收数据</span>
        <span class="token class-name">DatagramPacket</span> receivePacket  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>receiveData<span class="token punctuation">,</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 接收数据</span>
        socket<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>receivePacket<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 解析数据 将数据从 数据包中取出</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> receivePacket<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 将获取到的数据 转换为字符串对象</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;客户端发送的信息为：&quot;</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 定义发送数据</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;你好客户端&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">// 将数据转换为byte数组</span>
        <span class="token keyword">byte</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> sendData <span class="token operator">=</span> msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 定义数据长度</span>
        <span class="token keyword">int</span> sendLength <span class="token operator">=</span> sendData<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token comment">// 因为我们目前属于服务器向客户端回复信息</span>
        <span class="token comment">// 所客户端的地址 以及 端口号信息 我们可以直接从第一次接收到的数据包对象获取</span>
        <span class="token comment">// 通过接收到数据包 获取 要发送给客户端的地址 和 端口号信息</span>
        <span class="token class-name">SocketAddress</span> socketAddress <span class="token operator">=</span> receivePacket<span class="token punctuation">.</span><span class="token function">getSocketAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建发送数据包对象</span>
        <span class="token class-name">DatagramPacket</span> sendPacket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>sendData<span class="token punctuation">,</span>sendLength<span class="token punctuation">,</span>socketAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 发送数据</span>
        socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>sendPacket<span class="token punctuation">)</span><span class="token punctuation">;</span>





    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-tcp和udp区别" tabindex="-1"><a class="header-anchor" href="#_5-tcp和udp区别" aria-hidden="true">#</a> 5.TCP和UDP区别</h3><p><img src="`+c+'" alt=""></p>',20),i=[l];function u(k,d){return s(),a("div",null,i)}const v=n(o,[["render",u],["__file","day20-网络编程.html.vue"]]);export{v as default};
