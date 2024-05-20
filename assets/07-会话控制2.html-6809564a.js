import{_ as n}from"./img005-b5a67712.js";import{_ as s,o as a,c as t,e}from"./app-8007fa1b.js";const p="/assets/img006-ce8f4eb0.png",l="/assets/img007-0c695e3e.png",i="/assets/img008-f215bd7d.png",c={},o=e('<h1 id="今天目标" tabindex="-1"><a class="header-anchor" href="#今天目标" aria-hidden="true">#</a> 今天目标</h1><ul><li>Filter <ul><li>Filter生命周期</li><li>Filter链</li><li>Filter匹配规则（了解）</li><li>注解方式配置Filter（了解）</li></ul></li><li>Listener <ul><li>概念</li><li>HelloWorld</li><li>其它监听器类型（了解）</li></ul></li><li>JavaScript基本语法复习</li><li>前端工程化：ES6语法规则 <ul><li>简介</li><li>变量</li><li>模板字符串</li><li>解构表达式</li><li>箭头函数</li><li>对象相关的新关键字</li><li>对象拷贝</li></ul></li></ul><h1 id="一、过滤器" tabindex="-1"><a class="header-anchor" href="#一、过滤器" aria-hidden="true">#</a> 一、过滤器</h1><h2 id="_1、提出问题" tabindex="-1"><a class="header-anchor" href="#_1、提出问题" aria-hidden="true">#</a> 1、提出问题</h2><p><img src="'+n+`" alt="images"></p><br><h2 id="_2、三要素" tabindex="-1"><a class="header-anchor" href="#_2、三要素" aria-hidden="true">#</a> 2、三要素</h2><h3 id="_1拦截" tabindex="-1"><a class="header-anchor" href="#_1拦截" aria-hidden="true">#</a> ①拦截</h3><p>作为过滤器这样的组件，首先需要能够把请求拦截住，然后才能做后续的相关操作。</p><br><h3 id="_2过滤" tabindex="-1"><a class="header-anchor" href="#_2过滤" aria-hidden="true">#</a> ②过滤</h3><p>通常是基于业务功能的需要，在拦截到请求之后编写特定的代码，对请求进行相关的处理或检查。<br></p><p>最典型的就是登录检查：检查当前请求是否已经登录。</p><br><h3 id="_3放行" tabindex="-1"><a class="header-anchor" href="#_3放行" aria-hidden="true">#</a> ③放行</h3><p>如果当前请求满足过滤条件，那么就应该放行：让请求继续去找它原本要访问的资源。</p><br><h2 id="_3、helloworld" tabindex="-1"><a class="header-anchor" href="#_3、helloworld" aria-hidden="true">#</a> 3、HelloWorld</h2><h3 id="_1创建filter类" tabindex="-1"><a class="header-anchor" href="#_1创建filter类" aria-hidden="true">#</a> ①创建Filter类</h3><p>要求实现接口：jakarta.servlet.Filter。更简洁的做法是继承jakarta.servlet.http.HttpFilter类。</p><br><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**  
 * 假设请求中携带一个特定的请求参数表示用户已经登录，可以访问私密资源。  
 * 特定请求参数名称：message，特定的值：monster  
 */</span><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Filter01HelloWorld</span> <span class="token keyword">extends</span> <span class="token class-name">HttpFilter</span> <span class="token punctuation">{</span>  
  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>  
  
        <span class="token comment">// 1、获取请求参数  </span>
        <span class="token class-name">String</span> message <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
        <span class="token comment">// 2、检查请求参数是否满足预设的要求  </span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;monster&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token comment">// 3、满足条件的请求放行  </span>
            chain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
            <span class="token comment">// 4、不满足预设条件就把请求转发到拒绝页面  </span>
            request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/WEB-INF/pages/forbidden.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2注册" tabindex="-1"><a class="header-anchor" href="#_2注册" aria-hidden="true">#</a> ②注册</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 注册 Filter --&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span>  
    <span class="token comment">&lt;!-- Filter 友好名称 --&gt;</span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>Filter01HelloWorld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>  
  
    <span class="token comment">&lt;!-- Filter 全类名 --&gt;</span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>com.atguigu.filter.filter.Filter01HelloWorld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>  
    <span class="token comment">&lt;!-- 引用 Filter 友好名称 --&gt;</span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>Filter01HelloWorld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>  
  
    <span class="token comment">&lt;!-- 当前 Filter 要拦截的请求的 URL 地址的匹配模式 --&gt;</span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/private/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_4、filter生命周期" tabindex="-1"><a class="header-anchor" href="#_4、filter生命周期" aria-hidden="true">#</a> 4、Filter生命周期</h2><table><thead><tr><th></th><th>Servlet生命周期</th><th>Filter生命周期</th></tr></thead><tbody><tr><td>创建对象</td><td>第一次接收到请求创建对象<br>通过反射调用无参构造器<br>执行一次</td><td>Web应用启动时创建对象<br>通过反射调用无参构造器<br>执行一次</td></tr><tr><td>初始化</td><td>创建对象之后立即执行<br>init()方法<br>执行一次</td><td>创建对象之后立即执行<br>init()方法<br>执行一次</td></tr><tr><td>干活</td><td>每一次接收到请求，处理请求<br>service()方法<br>可能多次</td><td>每一次接收到请求，过滤请求<br>doFilter()方法</td></tr><tr><td>销毁</td><td>Web应用卸载时执行<br>destroy()方法<br>执行一次</td><td>Web应用卸载时执行<br>destroy()方法<br>执行一次</td></tr></tbody></table><br><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>filter<span class="token punctuation">.</span>filter</span><span class="token punctuation">;</span>  
  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">FilterChain</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpFilter</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>  
  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>  
  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Filter02LifeCycle</span> <span class="token keyword">extends</span> <span class="token class-name">HttpFilter</span> <span class="token punctuation">{</span>  
  
    <span class="token comment">// 生命周期相关：无参构造器  </span>
    <span class="token keyword">public</span> <span class="token class-name">Filter02LifeCycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Filter02LifeCycle 执行了无参构造器！创建了对象！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token comment">// 生命周期相关：初始化操作  </span>
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Filter02LifeCycle 执行了init()方法，初始化完成！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token comment">// 生命周期相关：清理或销毁操作  </span>
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Filter02LifeCycle 执行了destroy()方法！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token comment">// 生命周期相关：过滤请求操作  </span>
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Filter02LifeCycle 执行了doFilter()方法！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        chain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>Filter02LifeCycle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>com.atguigu.filter.filter.Filter02LifeCycle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>Filter02LifeCycle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>  
    <span class="token comment">&lt;!-- 拦截当前 Web 应用下的所有资源 --&gt;</span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、filter链" tabindex="-1"><a class="header-anchor" href="#_5、filter链" aria-hidden="true">#</a> 5、Filter链</h2><h3 id="_1filter链的形成" tabindex="-1"><a class="header-anchor" href="#_1filter链的形成" aria-hidden="true">#</a> ①Filter链的形成</h3><p>当多个Filter拦截同一个资源，那么访问这个资源的请求就需要逐个经过各个Filter。<br></p><p><img src="`+p+'" alt="images"></p><br><h3 id="_2filter链的执行" tabindex="-1"><a class="header-anchor" href="#_2filter链的执行" aria-hidden="true">#</a> ②Filter链的执行</h3><ul><li>每个Filter都放行，请求才能到达原本要访问的目标资源</li><li>有任何一个Filter没有放行，那么后面的Filter和目标资源就都不会被执行</li><li>Filter如果没有放行，那么需要给出响应。例如：转发、重定向等方式。</li><li>Filter如果没有放行，也没有给出响应，那么浏览器窗口就是一片空白。</li></ul><br><h3 id="_3filter链执行的顺序" tabindex="-1"><a class="header-anchor" href="#_3filter链执行的顺序" aria-hidden="true">#</a> ③Filter链执行的顺序</h3><p>参考web.xml中filter-mapping的顺序：</p><ul><li>filter-mapping靠前的：Filter执行时在外层（先执行：先开始，后结束）</li><li>filter-mapping靠后的：Filter执行时在内层（后执行：后开始，先结束）</li></ul><br><p>本质上来说，同一个Filter链中的各个方法都是在同一个线程里依次调用的方法：</p><br><p><img src="'+l+`" alt="images"></p><br><h3 id="_4引申" tabindex="-1"><a class="header-anchor" href="#_4引申" aria-hidden="true">#</a> ④引申</h3><ul><li>方法栈：同一个线程内，先调用的方法后结束；后调用的方法先结束</li><li>同一个线程内，所有操作本质上都是按顺序执行的。前面操作没有执行完，后面操作就需要等待（操作之间需要彼此等待：同步）。</li><li>在不同线程（或进程）内，各个操作都不需要等待其它线程中操作的执行（操作之间不需要彼此等待：异步）。</li></ul><br><h2 id="_6、filter匹配规则-了解" tabindex="-1"><a class="header-anchor" href="#_6、filter匹配规则-了解" aria-hidden="true">#</a> 6、Filter匹配规则（了解）</h2><ul><li>模糊匹配（现在使用和建议使用的）</li><li>精确匹配（从程序结构角度来说，更适合在Servlet中来做）</li><li>扩展名匹配（偶尔使用）</li><li>servlet-name匹配</li></ul><h2 id="_7、基于注解配置filter-了解" tabindex="-1"><a class="header-anchor" href="#_7、基于注解配置filter-了解" aria-hidden="true">#</a> 7、基于注解配置Filter（了解）</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>filter<span class="token punctuation">.</span>filter</span><span class="token punctuation">;</span>  
  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">FilterChain</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebFilter</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpFilter</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>  
  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>  
  
<span class="token comment">// 注解替代 web.xml 中的配置  </span>
<span class="token annotation punctuation">@WebFilter</span><span class="token punctuation">(</span>filterName <span class="token operator">=</span> <span class="token string">&quot;Filter07Annotation&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;/annotation/*&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Filter07Annotation</span> <span class="token keyword">extends</span> <span class="token class-name">HttpFilter</span> <span class="token punctuation">{</span>  
  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Filter07Annotation执行了！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        chain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、监听器" tabindex="-1"><a class="header-anchor" href="#二、监听器" aria-hidden="true">#</a> 二、监听器</h1><h2 id="_1、观察者模式" tabindex="-1"><a class="header-anchor" href="#_1、观察者模式" aria-hidden="true">#</a> 1、观察者模式</h2><ul><li>观察者：监控『被观察者』的行为，一旦发现『被观察者』触发了事件，就会调用事先准备好的方法执行操作。</li><li>被观察者：『被观察者』一旦触发了被监控的事件，就会被『观察者』发现。</li></ul><br><p><img src="`+i+`" alt="images"></p><br><p>监听器就是在我们后端程序中监听特定的事件，一旦被监听的事件触发，就会执行事先准备好的程序。</p><br><h2 id="_2、helloworld" tabindex="-1"><a class="header-anchor" href="#_2、helloworld" aria-hidden="true">#</a> 2、HelloWorld</h2><h3 id="_1目标" tabindex="-1"><a class="header-anchor" href="#_1目标" aria-hidden="true">#</a> ①目标</h3><p>监听ServletContext对象的生命周期：</p><ul><li>在ServletContext对象初始化时触发事件</li><li>在ServletContext对象销毁前触发事件</li></ul><br><h3 id="_2java代码" tabindex="-1"><a class="header-anchor" href="#_2java代码" aria-hidden="true">#</a> ②Java代码</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>listener</span><span class="token punctuation">;</span>  
  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletContext</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletContextEvent</span></span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletContextListener</span></span><span class="token punctuation">;</span>  
  
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyServletContextListener</span> <span class="token keyword">implements</span> <span class="token class-name">ServletContextListener</span> <span class="token punctuation">{</span>  
  
    <span class="token keyword">public</span> <span class="token class-name">MyServletContextListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyServletContextListener创建对象。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextInitialized</span><span class="token punctuation">(</span>  
            <span class="token comment">// 事件对象：代表当前触发的事件：ServletContext 对象完成初始化（或 Web 应用启动）  </span>
            <span class="token class-name">ServletContextEvent</span> sce<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">ServletContext</span> servletContext <span class="token operator">=</span> sce<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;servletContext = &quot;</span> <span class="token operator">+</span> servletContext <span class="token operator">+</span> <span class="token string">&quot; contextInitialized()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        servletContext<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;appAttrName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;appAttrValueInit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextDestroyed</span><span class="token punctuation">(</span>  
            <span class="token comment">// 事件对象：代表当前触发的事件：ServletContext 对象即将要释放（或 Web 应用停止）  </span>
            <span class="token class-name">ServletContextEvent</span> sce<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">ServletContext</span> servletContext <span class="token operator">=</span> sce<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;servletContext = &quot;</span> <span class="token operator">+</span> servletContext <span class="token operator">+</span> <span class="token string">&quot; contextDestroyed()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3web-xml配置" tabindex="-1"><a class="header-anchor" href="#_3web-xml配置" aria-hidden="true">#</a> ③web.xml配置</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>listener</span><span class="token punctuation">&gt;</span></span>  
    <span class="token comment">&lt;!-- 指定全类名即可 --&gt;</span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>listener-class</span><span class="token punctuation">&gt;</span></span>com.atguigu.listener.MyServletContextListener<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>listener-class</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>listener</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、es6新语法" tabindex="-1"><a class="header-anchor" href="#三、es6新语法" aria-hidden="true">#</a> 三、ES6新语法</h1><h2 id="_1、变量" tabindex="-1"><a class="header-anchor" href="#_1、变量" aria-hidden="true">#</a> 1、变量</h2><ul><li>记住：在ES6新语法中，使用let声明变量更好！</li></ul><br><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、使用 let 关键字声明变量</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a=&quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 2、使用 let 比 var 更严谨</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

  

<span class="token comment">// 使用 let 声明的变量，作用域就是从声明的地方开始</span>

<span class="token comment">// 如果在声明前使用，会报错：Uncaught ReferenceError: Cannot access &#39;c&#39; before initialization</span>

<span class="token comment">// console.log(c);</span>

<span class="token comment">// let c = 10;</span>

  

<span class="token comment">// let 不能重复声明变量</span>

<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// Uncaught SyntaxError: Identifier &#39;n&#39; has already been declared</span>

<span class="token comment">// let n = 100;</span>

<span class="token comment">// console.log(n);</span>

  

<span class="token comment">// let 变量只能在花括号内部访问</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">88</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">// console.log(y);</span>

  

<span class="token comment">// let 声明的全局变量，不会作为 window 的属性</span>

<span class="token keyword">var</span> atguigu <span class="token operator">=</span> <span class="token string">&quot;is very good&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>atguigu<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> good <span class="token operator">=</span> <span class="token string">&quot;good is very good&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>good<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、常量" tabindex="-1"><a class="header-anchor" href="#_2、常量" aria-hidden="true">#</a> 2、常量</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用 const 声明常量</span>

<span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415926</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// PI = 5;</span>

  

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">188</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、模板字符串" tabindex="-1"><a class="header-anchor" href="#_3、模板字符串" aria-hidden="true">#</a> 3、模板字符串</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、多行普通字符串</span>

<span class="token keyword">let</span> ulStr <span class="token operator">=</span>

<span class="token string">&#39;&lt;ul&gt;&#39;</span><span class="token operator">+</span>

<span class="token string">&#39;&lt;li&gt;JAVA&lt;/li&gt;&#39;</span><span class="token operator">+</span>

<span class="token string">&#39;&lt;li&gt;html&lt;/li&gt;&#39;</span><span class="token operator">+</span>

<span class="token string">&#39;&lt;li&gt;VUE&lt;/li&gt;&#39;</span><span class="token operator">+</span>

<span class="token string">&#39;&lt;/ul&gt;&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ulStr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 2、多行模板字符串</span>

<span class="token keyword">let</span> ulStr2 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">

    &lt;ul&gt;

        &lt;li&gt;JAVA&lt;/li&gt;

        &lt;li&gt;html&lt;/li&gt;

        &lt;li&gt;VUE&lt;/li&gt;

    &lt;/ul&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ulStr2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 3、普通字符串拼接</span>

<span class="token keyword">let</span> name <span class="token operator">=</span><span class="token string">&#39;张小明&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> infoStr <span class="token operator">=</span>name<span class="token operator">+</span><span class="token string">&#39;被评为本年级优秀学员&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>infoStr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 4、模板字符串拼接</span>

<span class="token keyword">let</span> infoStr2 <span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">被评为本年级优秀学员</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>infoStr2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、解构表达式" tabindex="-1"><a class="header-anchor" href="#_4、解构表达式" aria-hidden="true">#</a> 4、解构表达式</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、使用数组形式的解构表达式</span>

<span class="token keyword">let</span> <span class="token punctuation">[</span>a1<span class="token punctuation">,</span> b1<span class="token punctuation">,</span> c1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;t&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 2、在解构表达式中指定默认值</span>

<span class="token keyword">let</span> <span class="token punctuation">[</span>a2<span class="token punctuation">,</span> b2<span class="token punctuation">,</span> c2<span class="token punctuation">,</span> d2 <span class="token operator">=</span> <span class="token string">&quot;u&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;t&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 3、使用对象中的属性给解构表达式中同名的变量赋值</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span>stuName<span class="token punctuation">,</span> stuAge<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">stuName</span><span class="token operator">:</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">stuAge</span><span class="token operator">:</span> <span class="token number">528</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stuName<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stuAge<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">soldierName</span><span class="token operator">:</span>soldierNameNew<span class="token punctuation">,</span> <span class="token literal-property property">soldierAge</span><span class="token operator">:</span>soldierAgeNew<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">soldierName</span><span class="token operator">:</span><span class="token string">&quot;jerry&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">soldierAge</span><span class="token operator">:</span><span class="token number">324</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>soldierNameNew<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>soldierAgeNew<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 4、使用解构表达式声明函数的形参</span>

<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

  

<span class="token comment">// 使用数组作为调用函数的实参</span>

<span class="token keyword">var</span> sumResult <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sumResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、箭头函数" tabindex="-1"><a class="header-anchor" href="#_5、箭头函数" aria-hidden="true">#</a> 5、箭头函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、传统方式声明函数</span>

<span class="token keyword">let</span> <span class="token function-variable function">fun01</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  

<span class="token comment">// 2、箭头函数方式声明函数</span>

<span class="token keyword">let</span> <span class="token function-variable function">fun02</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;初步编写箭头函数。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">fun02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 3、箭头函数中只有一行代码可以省略大括号</span>

<span class="token keyword">let</span> <span class="token function-variable function">fun03</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;编写箭头函数。省略大括号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fun03</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 4、只有一个参数时可以省略小括号</span>

<span class="token keyword">let</span> <span class="token function-variable function">fun04</span> <span class="token operator">=</span> <span class="token parameter">p</span><span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;编写箭头函数。只有一个参数时可以省略小括号 p=&quot;</span> <span class="token operator">+</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fun04</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 5、箭头函数中只有一行代码可以省略大括号和return</span>

<span class="token keyword">let</span> <span class="token function-variable function">fun05</span> <span class="token operator">=</span> <span class="token parameter">p</span><span class="token operator">=&gt;</span>p<span class="token operator">+</span><span class="token number">100</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> fun05Result <span class="token operator">=</span> <span class="token function">fun05</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;箭头函数中只有一行代码可以省略大括号和return fun05Result = &quot;</span> <span class="token operator">+</span> fun05Result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> 四、总结</h1><ul><li>理论 <ul><li>理解并且能够表达Filter生命周期各个环节 <ul><li>什么时候执行</li><li>调用哪个方法</li><li>执行几次</li></ul></li><li>理解Filter链的工作机制</li><li>能够正确表述Filter链执行顺序是以什么为依据的</li><li>理解Listener在Web应用中起的作用</li><li>前端：理解JavaScript函数中this的指向（单击响应函数中的this和回调函数中this指向的对象不同）</li></ul></li><li>操作 <ul><li>测试Filter生命周期</li><li>测试Filter链</li><li>测试Listener的HelloWorld</li><li>前端：使用let声明变量</li><li>前端：使用const声明常量</li><li>前端：使用模板字符串</li><li>前端：声明箭头函数，测试各种不同简化写法</li></ul></li></ul>`,87),u=[o];function r(d,k){return a(),t("div",null,u)}const b=s(c,[["render",r],["__file","07-会话控制2.html.vue"]]);export{b as default};
