import{_ as n,o as s,c as a,e}from"./app-8007fa1b.js";const t="/assets/img001-4a454bc4.png",p="/assets/img002-209e7e81.png",i="/assets/img003-8bc632ed.png",c="/assets/img004-466f43af.png",l="/assets/img005-a419b3f2.png",o={},u=e(`<h1 id="今天目标" tabindex="-1"><a class="header-anchor" href="#今天目标" aria-hidden="true">#</a> 今天目标</h1><ul><li>ES6新语法： <ul><li>箭头函数： <ul><li>rest参数</li><li>spread参数</li></ul></li><li>创建类： <ul><li>class关键词</li><li>constructor关键词</li><li>get关键词</li><li>set关键词</li><li>声明私有属性</li></ul></li><li>多线程操作：使用Promise <ul><li>使用Promise执行异步操作</li><li>Promise异步操作成功之后怎么办？</li><li>Promise异步操作失败之后怎么办？</li><li>Promise对象的三个状态</li><li>如何解决回调地狱问题？</li></ul></li><li>模块化开发：代码的暴露和导入 <ul><li>分别导出</li><li>统一导出</li><li>默认导出</li></ul></li></ul></li><li>前端工程化环境搭建： <ul><li>Node.js</li><li>Vite</li></ul></li><li>Vue3初步使用</li></ul><h1 id="一、箭头函数" tabindex="-1"><a class="header-anchor" href="#一、箭头函数" aria-hidden="true">#</a> 一、箭头函数</h1><h2 id="_1、箭头函数和this的回顾" tabindex="-1"><a class="header-anchor" href="#_1、箭头函数和this的回顾" aria-hidden="true">#</a> 1、箭头函数和this的回顾</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

  

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn01<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我你会发财！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn02<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我你会幸福！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn03<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我你会优雅！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

    <span class="token comment">// 1、声明一个函数</span>

    <span class="token keyword">function</span> <span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

  

    <span class="token comment">// 2、创建两个对象</span>

    <span class="token keyword">let</span> obj01 <span class="token operator">=</span> <span class="token punctuation">{</span>

        info<span class="token operator">:</span><span class="token string">&quot;i am obj01&quot;</span><span class="token punctuation">,</span>

        _showInfo<span class="token operator">:</span> showInfo

    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> obj02 <span class="token operator">=</span> <span class="token punctuation">{</span>

        info<span class="token operator">:</span><span class="token string">&quot;i am obj02&quot;</span><span class="token punctuation">,</span>

        _showInfo<span class="token operator">:</span> showInfo

    <span class="token punctuation">}</span><span class="token punctuation">;</span>

  

    <span class="token comment">// 3、分别通过两个不同的对象调用showInfo()</span>

    obj01<span class="token punctuation">.</span><span class="token function">_showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    obj02<span class="token punctuation">.</span><span class="token function">_showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;==================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

    <span class="token comment">// 4、探索回调函数中的this</span>

    <span class="token comment">// [1]setTimeout()函数中的this</span>

    <span class="token comment">// setTimeout(回调函数,以毫秒为单位的延迟时间)函数可以在指定的延迟时间之后执行回调函数</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">// 代表浏览器窗口的 window 对象</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

    <span class="token comment">// [2]单击响应函数中的this</span>

    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">// 代表按钮标签的那个DOM元素对象</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">;</span>

  

    <span class="token comment">// [3]在单击响应函数中使用setTimeout()函数</span>

    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn02&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">// 代表按钮标签的那个DOM元素对象</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token comment">// 代表浏览器窗口的 window 对象</span>

            <span class="token comment">// ※此时在延迟调用的这个回调函数中，如果需要使用按钮元素对象，就不能使用this来引用</span>

            <span class="token comment">// 内外两层回调函数中this不同，会给我们开发带来很大的不便</span>

            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">;</span>

  

    <span class="token comment">// [4]使用箭头函数解决内外this不同导致使用不便的问题</span>

    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn03&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

            <span class="token comment">// 使用箭头函数之后，内层回调函数就可以通过this引用到外层回调的this</span>

            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;延迟调用：&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

  
  

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_2、rest参数" tabindex="-1"><a class="header-anchor" href="#_2、rest参数" aria-hidden="true">#</a> 2、rest参数</h2><h3 id="_1普通函数使用arguments即可实现可变参数效果" tabindex="-1"><a class="header-anchor" href="#_1普通函数使用arguments即可实现可变参数效果" aria-hidden="true">#</a> ①普通函数使用arguments即可实现可变参数效果</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 有了函数中可以直接使用的 arguments 其实不需要设计可变参数</span>

<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

  

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2箭头函数中无法使用arguments" tabindex="-1"><a class="header-anchor" href="#_2箭头函数中无法使用arguments" aria-hidden="true">#</a> ②箭头函数中无法使用arguments</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 但是箭头函数中无法使用 arguments</span>

<span class="token comment">// let funSum = ()=&gt;{</span>

<span class="token comment">//     for(let i = 0; i &lt; arguments.length; i++) {</span>

<span class="token comment">//         console.log(arguments[i]);</span>

<span class="token comment">//     }</span>

<span class="token comment">// };</span>

<span class="token comment">// funSum(1);</span>

<span class="token comment">// funSum(1,2);</span>

<span class="token comment">// funSum(1,2,3);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3箭头函数使用rest参数实现可变参数效果" tabindex="-1"><a class="header-anchor" href="#_3箭头函数使用rest参数实现可变参数效果" aria-hidden="true">#</a> ③箭头函数使用rest参数实现可变参数效果</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 箭头函数中想要实现可变参数的效果，需要使用rest参数</span>

<span class="token keyword">let</span> <span class="token function-variable function">funSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>numbers</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">let</span> number <span class="token operator">=</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

        count <span class="token operator">+=</span> number<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">funSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">funSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// rest参数只能写在整个参数列表最后</span>

<span class="token comment">// let funShowMsg = (info, ...args, param)=&gt;{};</span>

  

<span class="token comment">// rest参数不能写多个</span>

<span class="token comment">// let funShowMsg = (...args, ...param)=&gt;{};</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_3、spread参数" tabindex="-1"><a class="header-anchor" href="#_3、spread参数" aria-hidden="true">#</a> 3、spread参数</h2><h3 id="_1基本用法" tabindex="-1"><a class="header-anchor" href="#_1基本用法" aria-hidden="true">#</a> ①基本用法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、声明一个数组</span>

<span class="token keyword">let</span> happyThings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;eat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;drink&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watchTV&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sleep&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  

<span class="token comment">// 2、使用spread参数的形式把数组作为实参传给函数</span>

<span class="token keyword">function</span> <span class="token function">showHappyThings</span><span class="token punctuation">(</span><span class="token parameter">thing01<span class="token punctuation">,</span> thing02<span class="token punctuation">,</span> thing03<span class="token punctuation">,</span> thing04</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>thing01<span class="token punctuation">,</span> thing02<span class="token punctuation">,</span> thing03<span class="token punctuation">,</span> thing04<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

  

<span class="token function">showHappyThings</span><span class="token punctuation">(</span>happyThings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> happyThings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> happyThings<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> happyThings<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 3、通过spread参数形式把数组拆开，依次传入函数的各个参数位置</span>

<span class="token function">showHappyThings</span><span class="token punctuation">(</span><span class="token operator">...</span>happyThings<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 4、此时如果使用解构表达式，会因为函数声明方式不匹配，参数只传给了第一个参数</span>

<span class="token function">showHappyThings</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2其它用法" tabindex="-1"><a class="header-anchor" href="#_2其它用法" aria-hidden="true">#</a> ②其它用法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 5、给数组下标位置赋值</span>

<span class="token keyword">let</span> someThingArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;walk&quot;</span><span class="token punctuation">,</span> <span class="token operator">...</span>happyThings<span class="token punctuation">,</span> <span class="token operator">...</span>happyThings<span class="token punctuation">]</span><span class="token punctuation">;</span>

  

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>someThingArr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 错误写法</span>

<span class="token comment">// someThingArr[2] = ...happyThings;</span>

  

<span class="token comment">// 6、给对象属性赋值</span>

<span class="token keyword">let</span> p1<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> p2<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> p3<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">gender</span><span class="token operator">:</span><span class="token string">&quot;boy&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">...</span>p1<span class="token punctuation">,</span><span class="token operator">...</span>p2<span class="token punctuation">,</span><span class="token operator">...</span>p3<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h1 id="二、创建类" tabindex="-1"><a class="header-anchor" href="#二、创建类" aria-hidden="true">#</a> 二、创建类</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、使用class关键字声明一个类</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token comment">// 2、声明一个私有属性</span>

    #personId <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

  

    personName<span class="token punctuation">;</span>

    personAge<span class="token punctuation">;</span>

  

    <span class="token comment">// 3、在类内部声明函数读取私有属性</span>

    <span class="token function">showPersonId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#personId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

  

    <span class="token comment">// 5、为私有属性提供 GET 方法</span>

    <span class="token keyword">get</span> <span class="token function">_personId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;GET 方法被调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#personId<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

  

    <span class="token comment">// 6、为私有属性提供 SET 方法</span>

    <span class="token keyword">set</span> <span class="token function">_personId</span><span class="token punctuation">(</span><span class="token parameter">personId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;SET 方法被调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>#personId <span class="token operator">=</span> personId<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

  

    <span class="token comment">// 8、使用 constructor 关键字声明构造器</span>

    <span class="token comment">// ※和Java不同，不会因为声明了有参构造器而取消无参构造器</span>

    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">personId<span class="token punctuation">,</span> personName<span class="token punctuation">,</span> personAge</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>#personId <span class="token operator">=</span> personId<span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>personName <span class="token operator">=</span> personName<span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>personAge <span class="token operator">=</span> personAge<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

  

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span><span class="token function">showPersonId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 4、在类外部访问私有属性</span>

<span class="token comment">// [1]写操作</span>

<span class="token comment">// person.#personId = 100;</span>

  

<span class="token comment">// [2]读操作</span>

<span class="token comment">// console.log(person.#personId);</span>

  

<span class="token comment">// 6、通过 SET 方法设置私有属性的值</span>

person<span class="token punctuation">.</span>_personId <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>

  

<span class="token comment">// 7、通过 GET 方法获取私有属性的值</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>_personId<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 类中定义的 GET、SET 方法不能像调用方法一样使用</span>

<span class="token comment">// Uncaught TypeError: person.personId is not a function</span>

<span class="token comment">// person.personId(777);</span>

  

<span class="token comment">// 9、调用有参构造器创建对象</span>

<span class="token keyword">let</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">999</span><span class="token punctuation">,</span> <span class="token string">&quot;name999&quot;</span><span class="token punctuation">,</span> <span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 10、声明一个类继承Person</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    subject<span class="token punctuation">;</span>

    <span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// Uncaught SyntaxError: invalid access of private field on &#39;super&#39;</span>

        <span class="token comment">// console.log(super.#personId, super.personName, super.personAge, this.subject);</span>

  

        <span class="token comment">// 对于非私有的属性，子类继承到自己这儿了，所以不要用super访问父类的这些属性了，父类这些属性是undefined</span>

        <span class="token comment">// console.log(super._personId, super.personName, super.personAge, this.subject);</span>

  

        <span class="token comment">// 无法继承的私有属性，通过super访问父类的GET、SET方法，能够继承的非私有属性使用this访问</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span>_personId<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>personName<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>personAge<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subject<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">personId<span class="token punctuation">,</span> personName<span class="token punctuation">,</span> personAge<span class="token punctuation">,</span> subject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">super</span><span class="token punctuation">(</span>personId<span class="token punctuation">,</span> personName<span class="token punctuation">,</span> personAge<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>subject <span class="token operator">=</span> subject<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">let</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">777</span><span class="token punctuation">,</span> <span class="token string">&quot;name777&quot;</span><span class="token punctuation">,</span> <span class="token number">777</span><span class="token punctuation">,</span> <span class="token string">&quot;Java777&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

student<span class="token punctuation">.</span><span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 11、声明一个类包含静态方法</span>

<span class="token keyword">class</span> <span class="token class-name">SomeUtils</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> utilsName<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>str <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> str <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;字符串不能为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

  

        <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

  

<span class="token comment">// 12、访问静态属性</span>

SomeUtils<span class="token punctuation">.</span>utilsName <span class="token operator">=</span> <span class="token string">&quot;ATGUIGU UTIL&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>SomeUtils<span class="token punctuation">.</span>utilsName<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 13、调用静态方法</span>

<span class="token keyword">let</span> reverseResult <span class="token operator">=</span> SomeUtils<span class="token punctuation">.</span><span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token string">&quot;abcde&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;reverseResult = &quot;</span> <span class="token operator">+</span> reverseResult<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

SomeUtils<span class="token punctuation">.</span><span class="token function">reverseStr</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h1 id="三、promise" tabindex="-1"><a class="header-anchor" href="#三、promise" aria-hidden="true">#</a> 三、Promise</h1><h2 id="_1、helloworld" tabindex="-1"><a class="header-anchor" href="#_1、helloworld" aria-hidden="true">#</a> 1、HelloWorld</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、“主线程”每隔1秒打印信息</span>

<span class="token comment">// setInterval(回调函数,以毫秒为单位的时间间隔);</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;-----------主线程打印信息-----------&quot;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 2、创建 Promise 对象执行类似操作</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token comment">// 线程内要执行的操作</span>

    <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;***************子线程打印信息***************&quot;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_2、then-方法" tabindex="-1"><a class="header-anchor" href="#_2、then-方法" aria-hidden="true">#</a> 2、then()方法</h2><h3 id="_1代码" tabindex="-1"><a class="header-anchor" href="#_1代码" aria-hidden="true">#</a> ①代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、创建 Promise 对象</span>

<span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token comment">// Promise 对象要执行的任务</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Promise 本身要执行的任务！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

    <span class="token comment">// 调用 resolve 代表的方法，在参数位置传入任务执行的结果</span>

    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务执行的结果：生化武器设计图和配方！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 2、Promise执行任务成功之后，如果我们需要再做一个后续操作，那么就可以封装到 then() 方法中</span>

promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Promise 任务执行成功！result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2分析" tabindex="-1"><a class="header-anchor" href="#_2分析" aria-hidden="true">#</a> ②分析</h3><h4 id="_1-为了便于分析调整代码" tabindex="-1"><a class="header-anchor" href="#_1-为了便于分析调整代码" aria-hidden="true">#</a> [1]为了便于分析调整代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">promiseCallBack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Promise 本身要执行的任务！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务执行的结果：生化武器设计图和配方！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>promiseCallBack<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> <span class="token function-variable function">thenCallBack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Promise 任务执行成功！result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

  

promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>thenCallBack<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="_2-result是怎么传的" tabindex="-1"><a class="header-anchor" href="#_2-result是怎么传的" aria-hidden="true">#</a> [2]result是怎么传的？</h4><p><img src="`+t+'" alt="images"></p><br><h4 id="_3-回调函数的设定" tabindex="-1"><a class="header-anchor" href="#_3-回调函数的设定" aria-hidden="true">#</a> [3]回调函数的设定</h4><p><img src="'+p+`" alt="images"></p><br><h2 id="_3、catch-方法" tabindex="-1"><a class="header-anchor" href="#_3、catch-方法" aria-hidden="true">#</a> 3、catch()方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、创建 Promise 对象</span>

<span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Promise 子线程任务*************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;子线程任务执行结果！●●●&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;出错了！救命！○○○&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 2、指定子线程任务成功后要做的操作</span>

promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Promise 子线程任务*************成功了！result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 3、指定子线程任务失败后要做的操作</span>

promise<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errorMessage</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Promise 子线程任务-------------失败了！errorMessage = &quot;</span> <span class="token operator">+</span> errorMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_4、promise对象的三个状态" tabindex="-1"><a class="header-anchor" href="#_4、promise对象的三个状态" aria-hidden="true">#</a> 4、Promise对象的三个状态</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1、创建 Promise 对象</span>

<span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;子线程任务正在执行……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

        <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  

        <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;子线程任务执行结果！●●●&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;出错了！救命！○○○&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 打印内容：Promise { &lt;state&gt;: &quot;pending&quot; }</span>

<span class="token comment">// 说明 Promise 对象的状态是：pending</span>

<span class="token comment">// 表示任务正在执行</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 2、指定子线程任务成功后要做的操作</span>

promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token comment">// 打印内容：Promise { &lt;state&gt;: &quot;fulfilled&quot;, &lt;value&gt;: &quot;子线程任务执行结果！●●●&quot; }</span>

    <span class="token comment">// 说明 Promise 对象的状态是：fulfilled</span>

    <span class="token comment">// 表示任务已经执行完成</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 3、指定子线程任务失败后要做的操作</span>

promise<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errorMessage</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token comment">// 打印内容：Promise { &lt;state&gt;: &quot;rejected&quot;, &lt;reason&gt;: &quot;出错了！救命！○○○&quot; }</span>

    <span class="token comment">// 说明 Promise 对象的状态是：rejected</span>

    <span class="token comment">// 表示任务失败了</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>三个状态是不可逆的：</p><ul><li>pending进入fulfilled就不能回到pending了。</li><li>pending进入rejected就不能回到pending了。</li></ul><br><h2 id="_5、all-方法" tabindex="-1"><a class="header-anchor" href="#_5、all-方法" aria-hidden="true">#</a> 5、all()方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> taskOne <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;任务1111111111111111111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务结果11111111111111111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> taskTwo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;任务2222222222222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务结果2222222222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// reject(&quot;任务2222222失败：error&quot;);</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> taskThree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;任务33333333333333333&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务结果333333333333333333333333&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// all()静态方法作用：对多个异步任务进行汇总</span>

<span class="token keyword">let</span> promiseAll <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>taskOne<span class="token punctuation">,</span> taskTwo<span class="token punctuation">,</span> taskThree<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 汇总的所有任务都成功之后，执行then()设定的回调函数</span>

promiseAll<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token comment">// result 是所有成功的任务的结果组成的数组</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 汇总的所有任务中有任何一个失败，就会执行catch()设定的回调函数</span>

promiseAll<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errorMessage</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token comment">// errorMessage 是失败的任务的错误信息</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>errorMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_6、回调地狱" tabindex="-1"><a class="header-anchor" href="#_6、回调地狱" aria-hidden="true">#</a> 6、回调地狱</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 回调任务有多个，此时我们需要获取各个任务的结果</span>

<span class="token keyword">let</span> taskOne <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;任务1111111111111111111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务结果11111111111111111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> taskTwo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;任务2222222222222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务结果2222222222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> taskThree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;任务33333333333333333&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务结果333333333333333333333333&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 在第一个任务的 then 回调函数中获取第一个任务的执行结果</span>

taskOne<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;第一个任务的结果：&quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

    <span class="token comment">// 在确保拿到第一个任务结果之后，再去获取第二个任务的结果</span>

    taskTwo<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;第二个任务的结果：&quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

        <span class="token comment">// 在确保拿到第二个任务结果之后，再去获取第三个任务的结果</span>

        taskThree<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;第三个任务的结果：&quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errorMessage</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;第三个任务失败：errorMessage = &quot;</span> <span class="token operator">+</span> errorMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errorMessage</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;第二个任务失败：errorMessage = &quot;</span> <span class="token operator">+</span> errorMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errorMessage</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;第一个任务失败：errorMessage = &quot;</span> <span class="token operator">+</span> errorMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_7、解决回调地狱问题" tabindex="-1"><a class="header-anchor" href="#_7、解决回调地狱问题" aria-hidden="true">#</a> 7、解决回调地狱问题</h2><h3 id="_1代码效果" tabindex="-1"><a class="header-anchor" href="#_1代码效果" aria-hidden="true">#</a> ①代码效果</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 回调任务有多个，此时我们需要获取各个任务的结果</span>

<span class="token keyword">let</span> taskOne <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;任务1111111111111111111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务结果11111111111111111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> taskTwo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;任务2222222222222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务结果2222222222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">let</span> taskThree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;任务33333333333333333&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;任务结果333333333333333333333333&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> taskOneResult <span class="token operator">=</span> <span class="token keyword">await</span> taskOne<span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>taskOneResult<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> taskTwoResult <span class="token operator">=</span> <span class="token keyword">await</span> taskTwo<span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>taskTwoResult<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

    <span class="token keyword">let</span> taskThreeResult <span class="token operator">=</span> <span class="token keyword">await</span> taskThree<span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>taskThreeResult<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

  

<span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2关键词语法说明" tabindex="-1"><a class="header-anchor" href="#_2关键词语法说明" aria-hidden="true">#</a> ②关键词语法说明</h3><ul><li>await：就是为了直接拿到Promise对象执行任务成功后的结果 <ul><li>await右侧的表达式一般为一个promise对象，但是也可以是一个其他值</li><li>如果表达式是promise对象，await返回的是promise成功的值</li><li>如果表达式是其他值，则直接返回该值</li><li>await会等右边的promise对象执行结束，然后再获取结果,后续代码也会等待await的执行</li><li>await必须在async函数中，但是async函数中可以没有await</li><li>如果await右边的promise失败了，就会抛出异常，此时需要通过 try ... catch 捕获处理</li></ul></li><li>async：当一个函数内使用了await，那么这个函数必须使用async声明 <ul><li>async标识函数后，async函数的返回值会变成一个promise对象</li><li>如果函数内部返回的数据是一个非promise对象，async函数的结果会返回一个成功状态 promise对象</li><li>如果函数内部返回的是一个promise对象，则async函数返回的状态与结果由该对象决定</li><li>如果函数内部抛出的是一个异常，则async函数返回的是一个失败的promise对象</li></ul></li></ul><br><h3 id="_3异步执行-同步收集" tabindex="-1"><a class="header-anchor" href="#_3异步执行-同步收集" aria-hidden="true">#</a> ③异步执行，同步收集</h3><p><img src="`+i+'" alt="images"></p><br><ul><li>异步执行：并发执行，节约执行任务的总时间</li><li>同步收集：每个任务都要等执行完了才能拿到结果</li></ul><br><h1 id="四、es6模块化开发" tabindex="-1"><a class="header-anchor" href="#四、es6模块化开发" aria-hidden="true">#</a> 四、ES6模块化开发</h1><h2 id="_1、组件化、模块化开发思想" tabindex="-1"><a class="header-anchor" href="#_1、组件化、模块化开发思想" aria-hidden="true">#</a> 1、组件化、模块化开发思想</h2><p>整个项目的层级结构：</p><ul><li>项目级别-------&gt;人</li><li>子系统级别-------&gt;消化系统、免疫系统、血液循环系统、呼吸系统……</li><li>模块级别-------&gt;器官：心、肝、脾、胃、肾……</li><li>组件级别（类）-------&gt;组织：肌肉组织、结缔组织、脂肪组织……</li><li>方法级别-------&gt;细胞</li><li>代码级别-------&gt;细胞壁、细胞液、细胞核</li></ul><br><h2 id="_2、语法层面" tabindex="-1"><a class="header-anchor" href="#_2、语法层面" aria-hidden="true">#</a> 2、语法层面</h2><ul><li>export：导出 <ul><li>一段JavaScript代码，放在专门的*.js文件中，使用export关键词导出之后，才能在有需要的页面导入</li></ul></li><li>import：导入 <ul><li>在当前*.js文件的JavaScript代码中使用import导入其它文件导出的代码</li></ul></li></ul><br><p><img src="'+c+`" alt="images"></p><br><h2 id="_3、基础设定" tabindex="-1"><a class="header-anchor" href="#_3、基础设定" aria-hidden="true">#</a> 3、基础设定</h2><ul><li>import语句不写在HTML的script标签中</li><li>import语句写在*.js文件中，然后通过script标签导入到HTML文件</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 一定要把type属性设置为module --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./scripts/app.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、具体导出方式" tabindex="-1"><a class="header-anchor" href="#_4、具体导出方式" aria-hidden="true">#</a> 4、具体导出方式</h2><h3 id="_1分别导出" tabindex="-1"><a class="header-anchor" href="#_1分别导出" aria-hidden="true">#</a> ①分别导出</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出一个变量（常量）</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">&quot;i love you&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415926</span><span class="token punctuation">;</span>

  

<span class="token comment">// 导出一个函数</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sayHelloToYou</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token string">&quot;you are stupid.&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

  

<span class="token comment">// 导出一个类</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token punctuation">{</span>

    teacherName<span class="token punctuation">;</span>

    teacherAge<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2批量导出" tabindex="-1"><a class="header-anchor" href="#_2批量导出" aria-hidden="true">#</a> ②批量导出</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token string">&quot;happy info&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">printGood</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;good&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

  

<span class="token comment">// 批量一起导出</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>

    age<span class="token punctuation">,</span>

    info<span class="token punctuation">,</span>

    printGood

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3默认导出" tabindex="-1"><a class="header-anchor" href="#_3默认导出" aria-hidden="true">#</a> ③默认导出</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> userName <span class="token operator">=</span> <span class="token string">&quot;peter&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> userName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、具体导入方式" tabindex="-1"><a class="header-anchor" href="#_5、具体导入方式" aria-hidden="true">#</a> 5、具体导入方式</h2><h3 id="_1批量导入" tabindex="-1"><a class="header-anchor" href="#_1批量导入" aria-hidden="true">#</a> ①批量导入</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// *代表module.js中暴露的所有成员，export01代表所有成员所属的对象</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> export01 <span class="token keyword">from</span> <span class="token string">&quot;./export01.js&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2分别导入" tabindex="-1"><a class="header-anchor" href="#_2分别导入" aria-hidden="true">#</a> ②分别导入</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>message<span class="token punctuation">,</span> <span class="token constant">PI</span><span class="token punctuation">,</span> sayHelloToYou<span class="token punctuation">,</span> Teacher<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./export01.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>age <span class="token keyword">as</span> ageAliar<span class="token punctuation">,</span> info<span class="token punctuation">,</span> printGood<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./export02.js&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_3默认导入" tabindex="-1"><a class="header-anchor" href="#_3默认导入" aria-hidden="true">#</a> ③默认导入</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> userName<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./export03.js&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h1 id="五、前端工程化环境搭建" tabindex="-1"><a class="header-anchor" href="#五、前端工程化环境搭建" aria-hidden="true">#</a> 五、前端工程化环境搭建</h1><h2 id="_1、node-js安装" tabindex="-1"><a class="header-anchor" href="#_1、node-js安装" aria-hidden="true">#</a> 1、Node.js安装</h2><ul><li>双击安装程序：node-v18.16.0-x64.msi</li><li>选择一个非中文、没有空格的目录</li><li>后面一直下一步……</li><li>验证： <ul><li>查看Node.js版本：node -v</li><li>查看npm版本：npm -v</li><li>运行JavaScript文件： <ul><li>进入JavaScript文件所在目录</li><li>运行node JavaScript文件名</li></ul></li></ul></li></ul><br><h2 id="_2、npm设置" tabindex="-1"><a class="header-anchor" href="#_2、npm设置" aria-hidden="true">#</a> 2、npm设置</h2><h3 id="_1设置阿里镜像" tabindex="-1"><a class="header-anchor" href="#_1设置阿里镜像" aria-hidden="true">#</a> ①设置阿里镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="_2验证设置镜像是否成功" tabindex="-1"><a class="header-anchor" href="#_2验证设置镜像是否成功" aria-hidden="true">#</a> ②验证设置镜像是否成功</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="_3设置本地存储目录" tabindex="-1"><a class="header-anchor" href="#_3设置本地存储目录" aria-hidden="true">#</a> ③设置本地存储目录</h3><p>记得提前创建一下这个目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix D:<span class="token punctuation">\\</span>node-repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="_4验证设置本地存储目录是否成功" tabindex="-1"><a class="header-anchor" href="#_4验证设置本地存储目录是否成功" aria-hidden="true">#</a> ④验证设置本地存储目录是否成功</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config get prefix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="_5升级npm" tabindex="-1"><a class="header-anchor" href="#_5升级npm" aria-hidden="true">#</a> ⑤升级npm</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> npm@9.6.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="_6npm执行工程初始化" tabindex="-1"><a class="header-anchor" href="#_6npm执行工程初始化" aria-hidden="true">#</a> ⑥npm执行工程初始化</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果是生成package.json文件。</p><br><h3 id="_7npm执行package-json中的脚本" tabindex="-1"><a class="header-anchor" href="#_7npm执行package-json中的脚本" aria-hidden="true">#</a> ⑦npm执行package.json中的脚本</h3><p><img src="`+l+'" alt="images"></p><br><h1 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> 六、总结</h1><ul><li>箭头函数中this的使用方法</li><li>箭头函数中rest参数、spread参数用法敲一遍</li><li>面向对象： <ul><li>使用class声明一个类</li><li>在类中声明一个私有属性</li><li>给私有属性声明GET、SET方法</li><li>通过GET、SET方法访问私有属性</li><li>使用constructor关键字声明构造器</li><li>测试类之间的继承</li></ul></li><li>Promise <ul><li>使用Promise创建子线程：每隔1秒打印一句话</li><li>通过then()函数设置Promise任务成功后的操作</li><li>通过catch()函数设置Promise任务失败后的操作</li><li>能说出来Promise对象的三种不同状态</li><li>使用async、await关键字优雅的获取多个异步任务的结果</li></ul></li><li>ES6模块导出： <ul><li>在HTML文件中引入app.js</li><li>在app.js中引入export.js文件导出（暴露）的资源</li></ul></li><li>前端工程化环境搭建 <ul><li>确保Node.js已安装</li><li>确保npm已安装，版本升级到9.6.6</li><li>对某一个前端工程执行npm初始化</li><li>使用npm run名称运行package.json中的某个脚本</li></ul></li></ul>',133),d=[u];function r(v,k){return s(),a("div",null,d)}const b=n(o,[["render",r],["__file","08-前端工程化.html.vue"]]);export{b as default};
