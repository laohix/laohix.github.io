import{_ as n,o as s,c as a,e as p}from"./app-8007fa1b.js";const t={},e=p(`<h2 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h2><h3 id="_1-进程" tabindex="-1"><a class="header-anchor" href="#_1-进程" aria-hidden="true">#</a> 1.进程</h3><blockquote><p>进程：进行中的应用程序 属于CPU分配资源的最小单位</p></blockquote><h3 id="_2-线程" tabindex="-1"><a class="header-anchor" href="#_2-线程" aria-hidden="true">#</a> 2. 线程</h3><blockquote><p>线程：包含在进程之内 属于CPU调度执行的最小单位</p></blockquote><h3 id="_3-进程和线程的关系" tabindex="-1"><a class="header-anchor" href="#_3-进程和线程的关系" aria-hidden="true">#</a> 3. 进程和线程的关系</h3><blockquote><p>线程是包含在进程之内的，一个进程至少包含一个线程，否则将无法执行。</p></blockquote><h3 id="_4-线程是否为越多越好" tabindex="-1"><a class="header-anchor" href="#_4-线程是否为越多越好" aria-hidden="true">#</a> 4. 线程是否为越多越好？</h3><blockquote><p>不是的，要结合实际的硬件环境而言。</p></blockquote><h3 id="_5-关于多核心" tabindex="-1"><a class="header-anchor" href="#_5-关于多核心" aria-hidden="true">#</a> 5.关于多核心</h3><blockquote><p>多核心是将一个CPU分成多部分，同时协同分工合作，提高用户体验。</p></blockquote><h3 id="_6-关于线程的执行" tabindex="-1"><a class="header-anchor" href="#_6-关于线程的执行" aria-hidden="true">#</a> 6. 关于线程的执行</h3><blockquote><p>在单核心CPU下，多个线程是轮流交替执行的，而非并行执行。</p><p>底层是以时间片来切换多个线程的，每个线程最多执行20ms，执行完以后切换下一个线程，如此随机轮流交替执行，所以我们看上去，就好像是同时执行的，其实是轮流交替执行的。</p></blockquote><h3 id="_7-并发和并行" tabindex="-1"><a class="header-anchor" href="#_7-并发和并行" aria-hidden="true">#</a> 7. 并发和并行</h3><blockquote><p>并发：同时发生，轮流交替执行。</p><p>并行：真正意义上的同时执行。</p></blockquote><h3 id="_8-主线程" tabindex="-1"><a class="header-anchor" href="#_8-主线程" aria-hidden="true">#</a> 8.主线程</h3><blockquote><p>Thread 类 线程类</p><p>currentThread() 获取当前正在执行的线程对象</p><p>getName() 获取当前线程名称</p><p>setName(String name) 设置当前线程名称</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 9:41
 *  Thread 类 线程类
 *  currentThread() 获取当前正在执行的线程对象
 *  getName() 获取当前线程名称
 *  setName(String name) 设置当前线程名称
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThread</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>thread<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        thread<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;主线程&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>thread<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>




    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-创建线程" tabindex="-1"><a class="header-anchor" href="#_9-创建线程" aria-hidden="true">#</a> 9.创建线程</h3><blockquote><p>创建线程方式1：继承Thread</p><p>run() 方法中的内容为子线程最终要执行的内容</p><p>面试题：调用start方法调用run方法的区别？</p><p>调用start方法会开启新的线程</p><p>调用run方法 属于使用main线程调用run方法 不会开启新的线程</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 9:43
 *  创建线程方式1：继承Thread
 *  run() 方法中的内容为子线程最终要执行的内容
 *
 *  面试题：调用start方法调用run方法的区别？
 *  调用start方法会开启新的线程
 *  调用run方法 属于使用main线程调用run方法 不会开启新的线程
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThread1</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;----&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyThread1</span> th1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建线程对象</span>
        th1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;线程A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 启动线程</span>

<span class="token comment">//        th1.run();</span>

        <span class="token class-name">MyThread1</span> th2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;=====线程B=====&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        th2.run();</span>
    <span class="token punctuation">}</span>





<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>创建线程方式2 ： 实现Runnable接口 重写 run方法</p><p>Thread(Runnable runnable) 传入一个Runnable实现类构造Thread对象</p><p>Thread(Runnable runnable, String name) 传入一个Runnable实现类 和 线程名称 构造Thread对象</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 9:50
 *  创建线程方式2 ： 实现Runnable接口 重写 run方法
 *  Thread(Runnable runnable) 传入一个Runnable实现类构造Thread对象
 *  Thread(Runnable runnable, String name) 传入一个Runnable实现类 和 线程名称  构造Thread对象
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RunnableImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;---&quot;</span> <span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RunnableImpl</span> runnable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RunnableImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> th1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">)</span><span class="token punctuation">;</span>

        th1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;线程A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        th1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> th2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span> <span class="token string">&quot;***线程B***&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        th2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-线程的状态" tabindex="-1"><a class="header-anchor" href="#_10-线程的状态" aria-hidden="true">#</a> 10.线程的状态</h3><blockquote><p>线程的状态 ：创建 ---》就绪 ----》运行 ----》阻塞 ----》 死亡</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 10:18
 *  线程的状态 ：创建 ---》就绪 ----》运行 ----》阻塞 ----》 死亡
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThreadStatus</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 运行</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;run方法开始执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 阻塞</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token comment">// 死亡</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestThreadStatus</span> th1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThreadStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建</span>

        th1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 就绪</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-线程的礼让" tabindex="-1"><a class="header-anchor" href="#_11-线程的礼让" aria-hidden="true">#</a> 11.线程的礼让</h3><blockquote><p>线程的礼让：暂停当前线程 ，礼让其他线程先执行，但是不保证其他线程一定会先执行</p><p>yield()</p><p>线程插队和礼让的区别?</p><p>插队表示将当前线程停止执行 一定会先执行其他的插队线程</p><p>而礼让表示当前线程愿意做出使用CPU的让步 优先执行其他线程 但是CPU可以忽略这个让步 所以 不一定其他线程</p><p>会要优先执行</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 10:40
 *  线程的礼让：暂停当前线程 ，礼让其他线程先执行，但是不保证其他线程一定会先执行
 *  yield()
 *
 *  线程插队和礼让的区别?
 *  插队表示将当前线程停止执行 一定会先执行其他的插队线程
 *  而礼让表示当前线程愿意做出使用CPU的让步  优先执行其他线程 但是CPU可以忽略这个让步 所以 不一定其他线程
 *  会要优先执行
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThreadYield</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程礼让&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">+</span> <span class="token string">&quot;===&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestThreadYield</span> th1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThreadYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;*****线程A*****&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">TestThreadYield</span> th2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThreadYield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;线程B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-线程的插队" tabindex="-1"><a class="header-anchor" href="#_12-线程的插队" aria-hidden="true">#</a> 12.线程的插队</h3><blockquote><p>线程的插队：当前线程等待插队线程先执行完毕 或者 等待指定之间 然后当前线程再执行</p><p>public final void join() 等待插队线程执行完毕</p><p>public final void join(long mills) 等待插队线程执行指定时间</p><p>public final void join(long mills,int nanos)等待插队线程执行指定时间</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 10:33
 *  线程的插队：当前线程等待插队线程先执行完毕 或者 等待指定之间 然后当前线程再执行
 *  public final void join() 等待插队线程执行完毕
 *  public final void join(long mills) 等待插队线程执行指定时间
 *  public final void join(long mills,int nanos)等待插队线程执行指定时间
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThreadJoin</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span>i <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;----&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestThreadJoin</span> th1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThreadJoin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        th1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;*****线程A*****&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        th1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;子线程插队&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                th1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;----&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>



    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-线程的优先级" tabindex="-1"><a class="header-anchor" href="#_13-线程的优先级" aria-hidden="true">#</a> 13.线程的优先级</h3><blockquote><p>线程的优先级：线程优先级 从1~ 10 1最低 10最高 默认为5</p><p>优先级高的线程获取CPU资源的概率较大 并不一定能够保证绝对的优先执行</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 10:25
 *  线程的优先级：线程优先级 从1~ 10  1最低 10最高 默认为5
 *  优先级高的线程获取CPU资源的概率较大 并不一定能够保证绝对的优先执行
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThreadPriority</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;===&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestThreadPriority</span> th1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThreadPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>th1<span class="token punctuation">.</span><span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;线程A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th1<span class="token punctuation">.</span><span class="token function">setPriority</span><span class="token punctuation">(</span><span class="token constant">MIN_PRIORITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
        th1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">TestThreadPriority</span> th2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThreadPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>th2<span class="token punctuation">.</span><span class="token function">getPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;******线程B******&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th2<span class="token punctuation">.</span><span class="token function">setPriority</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token constant">MAX_PRIORITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
        th2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-线程安全" tabindex="-1"><a class="header-anchor" href="#_14-线程安全" aria-hidden="true">#</a> 14.线程安全</h3><blockquote><p>我们可以通过Java中的synchronized关键字实现线程安全</p><p>synchronized 单词释义： 同步</p><p>synchronized 用于修饰方法 或者 代码块</p><p>分别表示在同一时间只能有一个线程 访问这个方法 或者代码块 其他的线程排队 等待前边的线程执行完毕 再继续执行</p><p>同步代码块中小括号内书写this 也可以书写其他的对象 如果需要多个线程同步</p><p>则必须保证锁定的是同一个对象才可以</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 14:28
 *  使用多线程模拟抢票  三个人 抢十张票
 *  必须保证：不能超卖 不能重卖
 *
 *  目前所存在的线程安全问题原因：
 *  当一个条件成立的情况下 可能会进入到循环中多个线程
 *
 *  解决方案：我们应该保证同一时间只能有一个线程访问买票的逻辑代码   其他的线程排队等待
 *  等待前边的线程买票完毕 后续的线程再继续买票
 *
 *  具体方法：我们可以通过Java中的synchronized关键字实现线程安全
 *  synchronized 单词释义： 同步
 *  synchronized 用于修饰方法 或者 代码块
 *  分别表示在同一时间只能有一个线程 访问这个方法 或者代码块  其他的线程排队 等待前边的线程执行完毕 再继续执行
 *
 *
 *  手写同步关键字：synchronized
 *
 *  同步代码块中小括号内书写this 也可以书写其他的对象 如果需要多个线程同步
 *  则必须保证锁定的是同一个对象才可以
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuyTicket2</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> ticketCount <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ticketCount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                ticketCount<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;抢到第&quot;</span><span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">-</span> ticketCount<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;张票，还剩余&quot;</span> <span class="token operator">+</span> ticketCount <span class="token operator">+</span><span class="token string">&quot;张票&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BuyTicket2</span> runnable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuyTicket2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> th1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> th2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span><span class="token string">&quot;广坤&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> th3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span><span class="token string">&quot;大拿&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        th1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Hashtable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Vector</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 14:28
 * 使用多线程模拟抢票  三个人 抢十张票
 * 必须保证：不能超卖 不能重卖
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * 目前所存在的线程安全问题原因：
 * 当一个条件成立的情况下 可能会进入到循环中多个线程
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * 解决方案：我们应该保证同一时间只能有一个线程访问买票的逻辑代码   其他的线程排队等待
 * 等待前边的线程买票完毕 后续的线程再继续买票
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * 具体方法：我们可以通过Java中的synchronized关键字实现线程安全
 * synchronized 单词释义： 同步
 * synchronized 用于修饰方法 或者 代码块
 * 分别表示在同一时间只能有一个线程 访问这个方法 或者代码块  其他的线程排队 等待前边的线程执行完毕 再继续执行
 *
 * 回顾我们之前所接触线程安全的类 都是使用synchronized关键字修饰方法实现线程安全的
 * StringBuffer Hashtable Vector
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuyTicket3</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> ticketCount <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>ticketCount <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            ticketCount<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;抢到第&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">-</span> ticketCount<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;张票，还剩余&quot;</span> <span class="token operator">+</span> ticketCount <span class="token operator">+</span> <span class="token string">&quot;张票&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BuyTicket3</span> runnable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuyTicket3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> th1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span> <span class="token string">&quot;赵四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> th2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span> <span class="token string">&quot;广坤&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> th3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span> <span class="token string">&quot;大拿&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        th1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-生产者消费者模式" tabindex="-1"><a class="header-anchor" href="#_15-生产者消费者模式" aria-hidden="true">#</a> 15.生产者消费者模式</h3><blockquote><p>线程之间的通信：多个线程之间进行数据的传递 接收</p><p>生产者消费者模式(不属于设计模式)</p><p>1.生产什么 消费什么</p><p>2.持续生产 持续消费</p><p>3.没有生产 不能消费</p><p>4.不能重复消费</p><p>5.保证产品的完整性</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 15:32
 *  线程之间的通信：多个线程之间进行数据的传递 接收
 *  生产者消费者模式(不属于设计模式)
 *  1.生产什么 消费什么
 *  2.持续生产 持续消费
 *  3.没有生产 不能消费
 *  4.不能重复消费
 *  5.保证产品的完整性
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> mainFrame<span class="token punctuation">;</span> <span class="token comment">// 电脑主机</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> screen<span class="token punctuation">;</span> <span class="token comment">// 显示器</span>

    <span class="token keyword">private</span> <span class="token keyword">boolean</span> flag <span class="token punctuation">;</span> <span class="token comment">// 默认为false表示可以生产 不能消费 为true 可以消费 不能生产</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFlag</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>flag <span class="token operator">=</span> flag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Computer{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;mainFrame=&#39;&quot;</span> <span class="token operator">+</span> mainFrame <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, screen=&#39;&quot;</span> <span class="token operator">+</span> screen <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token class-name">String</span> mainFrame<span class="token punctuation">,</span> <span class="token class-name">String</span> screen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mainFrame <span class="token operator">=</span> mainFrame<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>screen <span class="token operator">=</span> screen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMainFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> mainFrame<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMainFrame</span><span class="token punctuation">(</span><span class="token class-name">String</span> mainFrame<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mainFrame <span class="token operator">=</span> mainFrame<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> screen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScreen</span><span class="token punctuation">(</span><span class="token class-name">String</span> screen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>screen <span class="token operator">=</span> screen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 15:38
 *  wait() 导致当前线程等待，直到另一个线程调用该对象的 notify()方法或 notifyAll()方法
 *  notify()  唤醒正在等待的线程 如果有多个线程正在等待 随机唤醒其中某一个正在等待的线程
 *
 *  notify()  和 notifyAll() 的区别？
 *      notify() 唤醒一个正在等待的线程 如果有多个线程正在等待 随机唤醒其中某一个正在等待的线程
 *      notifyAll() 唤醒所有正在等待的线程
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Producer</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Computer</span> computer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Producer</span><span class="token punctuation">(</span><span class="token class-name">Computer</span> computer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>computer <span class="token operator">=</span> computer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>computer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>computer<span class="token punctuation">.</span><span class="token function">isFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        computer<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    computer<span class="token punctuation">.</span><span class="token function">setMainFrame</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&quot;号联想主机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    computer<span class="token punctuation">.</span><span class="token function">setScreen</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&quot;号联想显示器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;生产了&quot;</span><span class="token operator">+</span> i <span class="token operator">+</span><span class="token string">&quot;号联想电脑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                    computer<span class="token punctuation">.</span><span class="token function">setScreen</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&quot;号华为显示器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    computer<span class="token punctuation">.</span><span class="token function">setMainFrame</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&quot;号华为主机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;生产了&quot;</span><span class="token operator">+</span> i <span class="token operator">+</span><span class="token string">&quot;号华为电脑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                computer<span class="token punctuation">.</span><span class="token function">setFlag</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                computer<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 15:40
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Computer</span> computer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span><span class="token class-name">Computer</span> computer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>computer <span class="token operator">=</span> computer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>


        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>computer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>computer<span class="token punctuation">.</span><span class="token function">isFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        computer<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>computer<span class="token punctuation">.</span><span class="token function">getMainFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;====&quot;</span> <span class="token operator">+</span> computer<span class="token punctuation">.</span><span class="token function">getScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                computer<span class="token punctuation">.</span><span class="token function">setFlag</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                computer<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test5</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 15:41
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Computer</span> computer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Producer</span> producer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Producer</span><span class="token punctuation">(</span>computer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Consumer</span> consumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span>computer<span class="token punctuation">)</span><span class="token punctuation">;</span>

        producer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        consumer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-锁" tabindex="-1"><a class="header-anchor" href="#_16-锁" aria-hidden="true">#</a> 16.锁</h3><blockquote><p>锁 Lock</p><p>面试题：什么是CAS</p><p>CAS属于乐观锁思想 当前线程认为其他任何线程都没有操作改变当前线程正在操作的数据</p><p>每次对数据进行操作先将数据进行读取 再操作 如果数据没有改变 则直接进行操作</p><p>如果数据已经改变 则再次读取 再次操作 重复这个过程</p><p>乐观锁 CAS Compare And Swap 自旋锁(无锁)</p><p>悲观锁 synchronized</p><p>同步锁 死锁(逻辑错误) 可重入锁 可重入锁之读锁 可重入锁之写锁</p><p>什么是可重入锁？</p><p>同一个线程对象 重复的获得一个锁对象 不应该产生死锁</p><p>synchronized就属于可重入锁</p><p>什么是死锁？</p><p>因为逻辑错误 导致的多个线程 竞争同一资源 互不相让 僵持不下的一种现象</p><p>公平锁和非公平锁？</p><p>公平锁是指多个线程 按照某种规则轮流访问资源 都可以访问到指定资源对象</p><p>非公平锁表示没有任何规则 哪个线程抢占到资源就可以执行 容易产生某个线程一直占用资源的情况</p></blockquote><blockquote><p>使用多线程模拟抢票 三个人 抢十张票</p><p>必须保证：不能超卖 不能重卖</p><p>Lock接口实现类 ReentrantLock 可重入锁</p><p>lock() 方法表示上锁</p><p>unlock() 表示解锁 解锁的操作通常放在finally代码块中</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span><span class="token class-name">Lock</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span><span class="token class-name">ReentrantLock</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/16 14:28
 *  使用多线程模拟抢票  三个人 抢十张票
 *  必须保证：不能超卖 不能重卖
 *
 *  Lock接口实现类 ReentrantLock  可重入锁
 *  lock() 方法表示上锁
 *  unlock() 表示解锁 解锁的操作通常放在finally代码块中
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuyTicket2</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> ticketCount <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ticketCount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                ticketCount<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;抢到第&quot;</span><span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">-</span> ticketCount<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;张票，还剩余&quot;</span> <span class="token operator">+</span> ticketCount <span class="token operator">+</span><span class="token string">&quot;张票&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>



            <span class="token punctuation">}</span>




    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BuyTicket2</span> runnable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuyTicket2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> th1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> th2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span><span class="token string">&quot;广坤&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> th3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span><span class="token string">&quot;大拿&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        th1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        th3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-其他创建线程的方式" tabindex="-1"><a class="header-anchor" href="#_17-其他创建线程的方式" aria-hidden="true">#</a> 17 .其他创建线程的方式</h3><blockquote><p>回顾我们目前创建线程的方式存在哪些问题？</p><p>目前我们是通过继承Thread类 以及 实现 Runnable 接口的方式实现创建线程</p><p>1.这两种方式都无法在线程执行完毕以后 返回数据</p><p>2.这两种方式都无法抛出、声明异常</p><p>我们还可以使用Callable接口实现创建线程</p><p>FutureTask 属于 RunnableFuture的实现类</p><p>RunnableFuture接口 继承 自 Runnable接口</p><p>所以 FutureTask也属于 Runnable的实现类</p><p>FutureTask构造方法支持传入一个Callable接口实现类</p><p>最终 FutureTask依然作为参数传入到Thread构造方法中</p><p>FutureTask的泛型 要和 Callable的泛型保持一致</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Callable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ExecutionException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">FutureTask</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/17 9:38
 *  回顾我们目前创建线程的方式存在哪些问题？
 *  目前我们是通过继承Thread类 以及 实现 Runnable 接口的方式实现创建线程
 *  1.这两种方式都无法在线程执行完毕以后 返回数据
 *  2.这两种方式都无法抛出、声明异常
 *
 *  我们还可以使用Callable接口实现创建线程
 *
 *  FutureTask 属于 RunnableFuture的实现类
 *  RunnableFuture接口 继承 自  Runnable接口
 *  所以 FutureTask也属于 Runnable的实现类
 *
 *  FutureTask构造方法支持传入一个Callable接口实现类
 *
 *  最终 FutureTask依然作为参数传入到Thread构造方法中
 *
 *  FutureTask的泛型 要和 Callable的泛型保持一致
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestCreateThread</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程名称：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ExecutionException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestCreateThread</span> callable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestCreateThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> futureTask <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>callable<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>futureTask<span class="token punctuation">,</span> <span class="token string">&quot;线程A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>futureTask<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>



<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>回顾我们目前所使用三种创建线程的方式</p><p>1.继承Thread类</p><p>2.实现Runnable接口</p><p>3.实现Callable接口</p><p>以上三种方式创建线程存在如下问题：</p><p>1.创建的线程都属于独立的对象 不能统一管理</p><p>2.如果在多线程场景下 独立的线程对象将会频繁的创建 和 销毁 影响程序性能</p><p>3.以上创建线程的方式不能执行一些定时任务</p><p>这些问题我们可以通过线程池解决</p><p>线程池属于是一个用于管理多个线程对象的容器 可以通过Executors这个类的静态方法创建</p><p>线程池中的线程对象 使用完毕以后 并不会立即回收 而是存放在线程池中 以便于后续继续使用</p><p>static newCachedThreadPool() 根据当前任务需要创建一个不定数量线程的线程池</p><p>static newFixedThreadPool(int nThreads) 创建一个指定线程数量的线程池</p><p>static newScheduledThreadPool(int corePoolSize) 创建一个指定数量 并且可以执行定时任务的线程池</p><p>static newSingleThreadExecutor() 创建一个单个线程的线程池</p><p>ThreadPoolExecutor()构造方法参数描述</p><p>corePoolSize 核心线程数</p><p>keepAliveTime 保持空闲时间 60L 表示线程对象的空闲时间为60秒 在60秒之后没有任务 将被回收</p><p>TimeUnit 时间单位 SECONDS</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ExecutorService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Executors</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ScheduledExecutorService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/17 10:17
 *  回顾我们目前所使用三种创建线程的方式
 *  1.继承Thread类
 *  2.实现Runnable接口
 *  3.实现Callable接口
 *
 *
 *  以上三种方式创建线程存在如下问题：
 *  1.创建的线程都属于独立的对象 不能统一管理
 *  2.如果在多线程场景下 独立的线程对象将会频繁的创建 和 销毁 影响程序性能
 *  3.以上创建线程的方式不能执行一些定时任务
 *
 *  这些问题我们可以通过线程池解决
 *  线程池属于是一个用于管理多个线程对象的容器 可以通过Executors这个类的静态方法创建
 *  线程池中的线程对象 使用完毕以后 并不会立即回收 而是存放在线程池中 以便于后续继续使用
 *
 *  static newCachedThreadPool()  根据当前任务需要创建一个不定数量线程的线程池
 *  static newFixedThreadPool(int nThreads)  创建一个指定线程数量的线程池
 *  static newScheduledThreadPool(int corePoolSize) 创建一个指定数量 并且可以执行定时任务的线程池
 *  static newSingleThreadExecutor() 创建一个单个线程的线程池
 *
 *
 *  ThreadPoolExecutor()构造方法参数描述
 *  corePoolSize 核心线程数
 *  keepAliveTime 保持空闲时间  60L  表示线程对象的空闲时间为60秒 在60秒之后没有任务 将被回收
 *  TimeUnit 时间单位  SECONDS
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThreadPool</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ExecutorService</span> es1 <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        es1<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;---hello 线程池1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        es1<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;***hello 线程池1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">ExecutorService</span> es2 <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        es2<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;***hello 线程池2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        es2<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;***hello 线程池2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">ScheduledExecutorService</span> es3 <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newScheduledThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        es3<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;延迟执行：&quot;</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;***hello 线程池3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ExecutorService</span> es4 <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        es4<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;***hello 线程池4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        es4<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;***hello 线程池4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-递归" tabindex="-1"><a class="header-anchor" href="#_18-递归" aria-hidden="true">#</a> 18.递归</h3><blockquote><p>递归：将一个大的问题 拆分为若干个小的问题 逐步解决 必须有正确的出口</p><p>举例： 赵四 广坤 小宝 大拿</p><p>递归可以解决哪些问题呢？</p><p>斐波那契数列</p><p>汉诺塔问题</p><p>等等</p><p>1.求1~5之间的和</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/17 10:43
 *  递归：将一个大的问题 拆分为若干个小的问题 逐步解决  必须有正确的出口
 *
 *  举例： 赵四  广坤   小宝    大拿
 *
 *  递归可以解决哪些问题呢？
 *  斐波那契数列
 *  汉诺塔问题
 *  等等
 *
 *
 *  1.求1~5之间的和
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getNum5</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> num <span class="token operator">+</span> <span class="token function">getNum4</span><span class="token punctuation">(</span>num <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getNum4</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num <span class="token operator">+</span> <span class="token function">getNum3</span><span class="token punctuation">(</span>num <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getNum3</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num <span class="token operator">+</span> <span class="token function">getNum2</span><span class="token punctuation">(</span>num <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getNum2</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num <span class="token operator">+</span> <span class="token function">getNum1</span><span class="token punctuation">(</span>num <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getNum1</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> num <span class="token operator">+</span> <span class="token function">getNum</span><span class="token punctuation">(</span>num <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getFactorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> num <span class="token operator">*</span> <span class="token function">getFactorial</span><span class="token punctuation">(</span>num <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num5 <span class="token operator">=</span> <span class="token function">getNum5</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num5 = &quot;</span> <span class="token operator">+</span> num5<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getNum</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getFactorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>







    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","day19-多线程.html.vue"]]);export{k as default};
