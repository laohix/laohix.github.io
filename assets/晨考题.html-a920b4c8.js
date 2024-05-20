import{_ as e,o as n,c as i,e as s}from"./app-8007fa1b.js";const a={},d=s(`<h1 id="晨考题" tabindex="-1"><a class="header-anchor" href="#晨考题" aria-hidden="true">#</a> 晨考题</h1><h2 id="_2023-07-10" tabindex="-1"><a class="header-anchor" href="#_2023-07-10" aria-hidden="true">#</a> 2023-07-10</h2><p>1、请列出Servlet生命周期中的各个环节。</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.创建对象：无参构造器
2.初始化：init()
3.处理请求：
 - Servlet方法中：service(request, response)
 - HttpServlet方法中：doXxx(request, response)
4.销毁：destory()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、Servlet生命周期中的各个环节分别在什么时候执行？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.创建对象：默认在第一次接收到请求时才创建
2.初始化：创建对象之后立即执行
3.处理请求：每一次接收到请求
4.销毁：Web应用卸载之前
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、Servlet生命周期中的各个环节的执行次数。</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.创建对象：
 - 1次
 - 每一个Servlet只创建一次对象，每个Servlet是单例的
 - doXxx()方法可能并发执行，所以不要在doXxx()方法中修改共享数据
2.初始化：1次
3.处理请求：0次或多次
4.销毁：1次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、默认情况下Servlet什么时候创建对象？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.默认情况下在第一次接收到请求时创建对象
2.问题：会导致第一次访问的用户体验不好
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、如何让Servlet在Web应用启动时创建对象？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.在web.xml中配置Servlet时，增加 load-on-startup 配置
2.&lt;load-on-startup&gt;&lt;/load-on-startup&gt;
3.中间写数字，数值越小，启动顺序越靠前
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、如何理解Servlet容器？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.存储所有的Servlet对象
2.管理Servlet的生命周期（创建、处理请求、销毁）
3.Tomcat就是Servlet容器的典型代表
 - Tomcat对外：可以接收并处理Http请求
 - Tomcat对内：可以执行Java代码
4.Servlet容器有很多具体产品
 - Tomcat
 - Jetty
 - JBoss
 - Glassfish
 - Weblogic
 - Websphere
5.所有执行Servlet标准的容器应用，可以实现相同Servlet版本不同容器的迁移
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、ServletContext对象代表什么？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.ServletContext对象代表当前Web应用
2.整个Web应用中只存在一份（单例）
3.Servlet对象的3个功能
 - 作为域对象
 - 获取Web应用的初始化参数
 - 把虚拟路径转换为真实的物理路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、如何理解域对象？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.用来存储数据（对象）的
2.用于在不同的Servlet中共享数据
3.用于所有的Servlet获取初始化参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9、如何读写ServletContext域？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.写操作：setAttribute(&quot;属性名&quot;, Object)
2.读操作：getAttribute(&quot;属性名&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>10、如何通过ServletContext读取Web应用初始化参数？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.配置：
&lt;!-- 配置Web应用初始化参数 --&gt;
&lt;context-param&gt;
    &lt;param-name&gt;SpringConfigLocation&lt;/param-name&gt;
    &lt;param-value&gt;spring-core.xml&lt;/param-value&gt;
&lt;/context-param&gt;
2.读取
servletContext.getInitParameter(&quot;SpringConfigLocation&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2023-07-11" tabindex="-1"><a class="header-anchor" href="#_2023-07-11" aria-hidden="true">#</a> 2023-07-11</h2><p>01、如何理解页面渲染的概念？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.HTML技术本身来说，里面的内容都是写死固定的
2.实际开发中需要在HTML标签内动态的显示内容
3.HTML技术本身无法实现数据的动态显示，需要其他技术辅助实现
4.页面渲染
 - 开发时：编写表达式
 - 运行时：计算表达式
 - 计算后：显示表达式计算得到值
5.页面渲染分类
 - 后端渲染：表达式背后是Java代码
 	- JSP
 	- Velocity
 	- Freemarker
 	- Thymeleaf
 - 前端渲染：表达式背后是JavaScript代码
 	- 原生API操作：DOM操作, Ajax操作
 	- 使用框架：Vue, axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>02、如何理解请求转发的机制？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.概念：服务器端组件接收到请求之后，在服务器内部把请求转交给另一个组件（资源）继续处理，另一个资源返回响应
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>03、如何理解请求重定向的机制？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.概念：服务器端组件接收到请求并处理完之后，给浏览器返回一个特殊的响应，告诉浏览器访问第二个资源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>04、请说说请求转发和重定向的区别。</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.请求次数：
 - 请求转发：浏览器只发送了一次请求
 - 重定向：浏览器发送了2个请求
2.浏览器地址栏：
 - 请求转发：显示的是第一个资源的地址
 - 重定向：显示的是第二个资源的地址
3.是否可以通过请求域携带数据
 - 请求转发：可以
 - 重定向：不可以
4.路径是否包含contextPath
 - 请求转发：请求转发的路径是给服务器解析的，斜杠开头是web应用根目录，所以不包含contxtPath
 - 重定向：请求转发的路径是给浏览器解析的，斜杠开头是tomcat服务的根目录，所以需要包含contextPath
5.是否可以访问web应用之外的资源
 - 请求转发：可以，目标资源仅限于web应用内部
 - 重定向：不可以
6.是否可以访问WEB-INF下的资源
 - 请求转发：可以
 - 重定向：不可以
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>05、如何获取请求参数：一个名字带一个值？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>request.getParameter(&quot;属性值&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>06、如何获取请求参数：一个名字带多个值？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>request.getParameterValues(&quot;属性值&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>07、如何动态获取contextPath？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>request.getContextPath()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>08、如何实现请求转发？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>request.getRequestDispatcher(&quot;相对路径地址&quot;).forward(request, response)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>09、如何实现请求重定向？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>response.sendRedirect(&quot;绝对路径地址&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>10、如何向请求域保存数据？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>request.setAttribute(&quot;属性名&quot;, Object类型属性值)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>11、如何从请求域读取数据？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>Object 属性值 = request.getAttribute(&quot;属性名&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>12、如何给响应体指定内容类型？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>response.setHeader(&quot;Content-Type&quot;, &quot;text/html;charset=utf-8&quot;)
response.setContentType(&quot;text/html;charset=utf-8&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>13、如何编写绝对路径？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.看路径是给服务器解析还是浏览器解析
 - 服务器(不需要contextPath)
 	- 请求转发目标资源的路径
 	- web.xml中的路径
 - 浏览器(需要contextPath)
 	- HTML（css,js）中的路径
 	- 重定向目标资源的路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2023-07-12" tabindex="-1"><a class="header-anchor" href="#_2023-07-12" aria-hidden="true">#</a> 2023-07-12</h2><p>1.如何把数据存入会话域？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 1.获取HttpSession对象</span>
<span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.把数据存入会话域</span>
session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;属性名&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Object</span>属性值<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.如何从会话域读取数据？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 1.获取HttpSession对象</span>
<span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.从会话域中读取数据</span>
<span class="token class-name">Object</span> 属性值 <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;属性名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 保证属性名一致，就一定能取出来吗？</span>
<span class="token comment">// 不一定，还要看session是否是同一个</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.请简述Cookie工作机制</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.最初Cookie是在服务端创建的
 - Cookie cookie = new Cookie(&quot;名&quot;, &quot;值&quot;)
2.添加到响应头中
 - response.addCookie(cookie)
3.服务端返回响应时响应头中携带Cookie信息
 - Set-Cookie: 名=值
4.浏览器保存接收到的Cookie
 - 会话级别
 - 持久化级别
5.浏览器再次给服务器发送请求，携带上匹配的Cookie
 - domain属性：域名是否匹配
 - path属性：路径是否匹配
6.浏览器携带Cookie的请求消息头
 - Cookie: 名=值
7.服务端接收到请求后，尝试去读Cookie
 - Cookie<span class="token punctuation">[</span><span class="token punctuation">]</span> cookies = request.getCookie();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.请简述Cookie时效性管理</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.从时效性分为两类
 - 会话级别：在浏览器内存中保存，浏览器关闭时释放Cookie
 - 持久化级别：在浏览器硬盘中保存，浏览器关闭时不会释放Cookie，而是时间到期再释放Cookie
2.设置方式：cookie.setMaxAge(int expire)方法
 - expire为正数：把Cookie对象设置为持久化级别
 - expire为0：告诉浏览器释放删除这个Cookie
 - expire为负数：把Cookie对象设置为会话级别
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.请简述HttpSession工作机制</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.request.getSession()时，检查当前请求中是否携带了JSESSIONID这个Cookie
 - 没携带：
 	- 创建新的HttpSession对象
 	- 创建对应的Cookie，name为JSESSIONID，value为HttpSession对象的id值（唯一标识）
 - 携带了：
 	- 根据JSESSIONID这个Cookie的value查找对应的HttpSession对象
 		- 能找到：就把当前找到的HttpSession对象作为getSession()方法的返回值
 		- 找不到：创建新的HttpSession对象作为getSession()方法的返回值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.请简述HttpSession时效性管理</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1。核心原则：超过最大空闲时间的HttpSession对象会被释放
2.设计初衷：如果没有超时时间的设定，浏览器释放的HttpSession对象，服务端不会删除，导致不断新建没有删除，最终内存耗尽
3.相关API：
 - 获取当前HttpSession对象的最大空闲时间：session.getMaxInactiveInterval()
 - 设置当前HttpSession对象的最大空闲时间：seesion.setMaxInactiveInterval(int seconds)
4.HttpSession默认存活时间：30分钟
 - 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.如何创建一个Filter？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.创建Filter类
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8.请简述过滤器的三要素</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.拦截：通过配置filter-mapping拦截到指定的请求，才能执行后续操作
2.过滤：执行我门自己的逻辑
3.放行：满足条件，就放行请求，chain.doFilter(request, response)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2023-07-14" tabindex="-1"><a class="header-anchor" href="#_2023-07-14" aria-hidden="true">#</a> 2023-07-14</h2><p>1.请介绍一下Filter生命周期中的各个环节，包括：（什么时候执行、调用哪个方法、可以执行几次）</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.创建对象：Web应用启动时执行；无参构造器；只执行1次，单例的。
2.初始化：创建对象之后立即执行；init()方法；只执行1次。
3.拦截过滤请求：每次接收到需要过滤的请求时执行；doFilter(HttpServletRequest request, HttpServletResponse response)方法；可以执行多次。
4.对象销毁：Web应用卸载或Tomcat关闭之前；destory()方法；只执行1次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.请说明一下Filter链执行和放行的关系。</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>在链条中的各个Filter执行过程中，如果有任何一个没有放行，那么后面的Filter就不执行了，包括目标资源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.Filter链执行顺序是以什么为依据的？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>按照web.xml中filter-mapping的书写顺序来决定的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.Listener在Web应用中起的作用是什么？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>监听后端程序中某些特定的事件，一旦接听事件触发，执行事先准备好的程序

1.针对域对象的生命周期进行监听：创建和销段时触发事件
 - 请求域所在的请求对象：HttpServletRequest
 - 会话域所在的会话对象：HttpSession
 - 应用域所在的应用对象：ServletContext
2.针对域对象存入数据、移除数据、替换数据进行监听
 - attributeAdded（ServletXxxAttributeEvent event）
 - attributeRemoved（ServletXxxAttributeEvent event）
 - attributeReplaced（ServletXxxAttributeEvent event）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.在JavaScript函数中this指向的是什么？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.在非箭头函数中，this指向调用者，谁调用的this就指向谁
2.在箭头函数中，箭头函数中没有this，所以this指向上一级的调用者对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6.箭头函数可以如何简写？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.只有一个参数时可以省略小括号
2.箭头函数中只有一行代码可以省略大括号和return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>7.什么是页面渲染？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.页面显示数据使用的技术基础是HTML
2.但是HTML不能动态显示数据，HTML里面的数据都是静态的
3.对于一些动态变化的值
 - 在编码时，使用特定的表达式占位符编写
 - 在程序运行时，使用动态的计算结果替换表达式的内容进行展示
4.渲染技术：
 - 前端渲染：JS、Vue、React
 - 后端渲染：jsp、thymeleaf、freemark
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2023-07-15" tabindex="-1"><a class="header-anchor" href="#_2023-07-15" aria-hidden="true">#</a> 2023-07-15</h2><p>1.为什么使用箭头函数能够简化我们对this关键字的使用？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.箭头函数没有自己的this，它的this是指向外层作用域的this，这意味着在箭头函数内部访问this与外部作用域的this相同，不会发生变化，可以避免this绑定错误的问题
2.箭头函数没有arguments对象
3.箭头函数不能作为构造函数使用，因为它没有自己的this，无法使用new操作符创建对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.如果两个操作，A需要等待B完成之后才能执行，那么它们之间是同步的还是异步的？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>同步操作
 - 同一个线程内：同一个线程内的操作天然就是按照顺序来执行的
 - 多个不同线程内：本来是异步的，但是如果我们加了同步锁（synchronized），那么线程就必须的到锁才能执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.如果两个操作，A不必等待B完成，二者同时并行执行，那么它们之间是同步的还是异步的？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>异步操作：
 - 异步操作可能是在不同的线程，也可能是在不同的进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.在异步编程中，Promise对象本身、then()方法、cathc()方法分别起什么作用？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.Promise对象：构造函数接受一个函数作为参数，该函数有两个参数 resolve、reject
 - resolve：将Promise对象的状态从“未完成”变为“成功”（pending =&gt; resolved），在异步操作成功时调用，将异步操作的结果，作为参数传递出去
 - reject：将Promise对象的状态从“未完成”变为“失败”（pending =&gt; rejected）,在异步操作失败时调用，并将异步操作的报错，作为参数传递出去
2.then()方法：处理Promise中成功的结果
3.catch()方法：处理Promise中失败的结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.Promise对象的三种状态分别是什么？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.pending：进行中
2.resolved：已完成，又称 Fulfilled
3.rejected：已失败
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.npm run bird如何理解？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>就是到package.json文件中script下面找到一个bird的脚本，并执行里面的命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7.在JavaScript事件绑定中，如何取消控件默认行为？</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>1.控件默认行为
 - 超链接：点击之后就会跳转页面
 - 表单中的提交按钮：点击之后就会提交表单
2.取消默认行为：event.preventDefault()
3.阻止事件冒泡：event.stopPropagation()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,96),l=[d];function t(r,v){return n(),i("div",null,l)}const u=e(a,[["render",t],["__file","晨考题.html.vue"]]);export{u as default};
