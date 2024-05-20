import{_ as n,o as s,c as a,e as p}from"./app-8007fa1b.js";const e="/assets/虚方法调用过程-0e4826a0.png",t={},c=p(`<h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h2><h3 id="_1-多态向上转型" tabindex="-1"><a class="header-anchor" href="#_1-多态向上转型" aria-hidden="true">#</a> 1.多态向上转型</h3><blockquote><p>多态： 同一个引用类型 使用不同的实例而执行不同操作</p><p>父类引用指向子类对象 属于多态向上转型</p><p>向上转型：此时通过父类的引用 可以访问的是 子类重写父类的方法 或者 继承 父类的方法</p><p>不能访问子类独有的方法</p><p>使用向上转型将无法访问子类独有的方法，为什么还要使用呢？</p><p>因为使用了向上转型以后 虽然调用的方法个数受到了影响 但是我们可以通过这种方式提高程序的灵活性</p><p>多态向上转型具体的表现：</p><p>1.父类作为形参 子类作为实参</p><p>2.父类作为声明返回值 实际返回值为子类类型</p><p>3.父类类型的数组、集合 其元素为子类类型</p><p>对于创建对象的语句而言： 等号左边的称之为引用 等号右边的为对象</p></blockquote><h4 id="_1-1-父类作为形参" tabindex="-1"><a class="header-anchor" href="#_1-1-父类作为形参" aria-hidden="true">#</a> 1.1 父类作为形参</h4><blockquote><p>父类作为形参 实参为子类类型 属于多态向上转型 可以提高程序的灵活性</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 15:38
 *  主人类
 *  属性：名字 年龄 性别 ……
 *  方法：
 *      1.带宠物去看病
 *      2.抽奖送宠物方法
 *      一等奖 送企鹅一只
 *      二等奖 送狗狗一只
 *      三等奖 送猫咪
 *      幸运奖 送成年东北虎一只
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Master</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">toHospitalWithPet</span><span class="token punctuation">(</span><span class="token class-name">Pet</span> pet<span class="token punctuation">)</span><span class="token punctuation">{</span>
        pet<span class="token punctuation">.</span><span class="token function">cure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-父类作为返回值" tabindex="-1"><a class="header-anchor" href="#_1-2-父类作为返回值" aria-hidden="true">#</a> 1.2 父类作为返回值</h4><blockquote><p>父类作为声明返回值 实际返回值为子类类型 也是多态向上转型的表现形式之一</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 15:38
 *  主人类
 *  属性：名字 年龄 性别 ……
 *  方法：
 *      1.带宠物去看病
 *      2.抽奖送宠物方法
 *      一等奖 送企鹅一只
 *      二等奖 送狗狗一只
 *      三等奖 送猫咪
 *      幸运奖 送成年东北虎一只
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Master</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Pet</span> <span class="token function">givePet</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">switch</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
               <span class="token class-name">Penguin</span> penguin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token string">&quot;大白&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;雄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token keyword">return</span> penguin<span class="token punctuation">;</span>
           <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
               <span class="token class-name">Dog</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;大黄&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;金毛&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token keyword">return</span> dog<span class="token punctuation">;</span>
           <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
               <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token keyword">return</span> cat<span class="token punctuation">;</span>
           <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
               <span class="token class-name">Tiger</span> tiger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tiger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token keyword">return</span> tiger<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-父类作为数组类型" tabindex="-1"><a class="header-anchor" href="#_1-3-父类作为数组类型" aria-hidden="true">#</a> 1.3 父类作为数组类型</h4><blockquote><p>父类类型的数组 其元素为具体的子类类型 也属于多态向上转型</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 15:28
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPet</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     
        <span class="token class-name">Pet</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> pets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pet</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token class-name">Penguin</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token string">&quot;大白&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;雄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        pets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> p<span class="token punctuation">;</span>
        pets<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;大黄&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;金毛&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        pets<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> cat<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-多态向下转型" tabindex="-1"><a class="header-anchor" href="#_2-多态向下转型" aria-hidden="true">#</a> 2. 多态向下转型</h3><blockquote><p>多态向下转型：</p><p>什么是向下转型?</p><p>将父类类型转换为子类类型</p><p>为什么需要向下转型?</p><p>当我们向上转型以后 是无法访问子类独有的方法 如需访问 则必须向下转型</p><p><code>向下转型是将指向子类对象的父类引用 转换为子类类型</code></p><p><code>而不是将一个指向父类对象的父类引用 转换为子类类型</code></p><p><code>总结：也就是必须先向上转型 才可以向下转型</code></p><p>在实际开发中，我们会使用<code>instanceof</code>关键字在向下转型之前进行类型判断 以避免类型转换异常</p><p>用法 ： 对象名 instanceof 类名 表示此对象是否属于此类类型</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/7 9:38
 *  多态向下转型：
 *    什么是向下转型  将父类类型转换为子类类型
 *    为什么需要向下转型 当我们向上转型以后 是无法访问子类独有的方法 如需访问 则必须向下转型
 *
 *
 *  向下转型是将指向子类对象的父类引用 转换为子类类型
 *  而不是将一个指向父类对象的父类引用 转换为子类类型
 *  总结：也就是必须先向上转型 才可以向下转型
 *
 *  在实际开发中，我们会使用instanceof关键字在向下转型之前进行类型判断 以避免类型转换异常
 *
 *  用法 ： 对象名 instanceof 类名 表示此对象是否属于此类类型
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Pet</span> pet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>pet <span class="token keyword">instanceof</span> <span class="token class-name">Dog</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Dog</span> dog <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Dog</span><span class="token punctuation">)</span>pet<span class="token punctuation">;</span>

        	dog<span class="token punctuation">.</span><span class="token function">playWithMaster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Pet</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token keyword">instanceof</span>  <span class="token class-name">Dog</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Dog</span> dog2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Dog</span><span class="token punctuation">)</span>p1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;类型不匹配&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>



        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Dog</span> dog1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        dog1<span class="token punctuation">.</span><span class="token function">playWithMaster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dog1<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dog1<span class="token punctuation">.</span><span class="token function">cure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-关于向上向下转型" tabindex="-1"><a class="header-anchor" href="#_3-关于向上向下转型" aria-hidden="true">#</a> 3. 关于向上向下转型</h3><blockquote><p>分析：我们重写顶层父类Object类中的equals方法，本身父类中的方法形参为Object类型，因为考虑到所有子类的可重用性，所以参数类型为顶级父类，这里属于多态向上转型。但我们在实际使用的时候，应该是一个具体的类型，比如 Person、Dog等等，所以这时我们需要向下转型。</p><p>总结：</p><p>向上转型是为了灵活性，扩展性</p><p>向下转型是为了实用性</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1<span class="token punctuation">.</span></span><span class="token class-name">Dog</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/6 10:41
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> idCard<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getIdCard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> idCard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setIdCard</span><span class="token punctuation">(</span><span class="token class-name">String</span> idCard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>idCard <span class="token operator">=</span> idCard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> idCard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>idCard <span class="token operator">=</span> idCard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span>  <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span>obj<span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>idCard<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>idCard<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;56789454798764612984552&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Person</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;56789454798764612984552&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Dog</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-多态相关原理" tabindex="-1"><a class="header-anchor" href="#_4-多态相关原理" aria-hidden="true">#</a> 4. 多态相关原理</h3><blockquote><p>面试极少问： 关于多态的底层实现原理</p><p>虚方法（Virtual Method ）和非虚方法</p><p>虚方法：</p><p>可以被子类继承 并且重写的方法 称之为虚方法</p><p>即在编译期间无法确定方法的版本的 这种方法 称之为虚方法</p><p>JVM底层是通过 #invokevirtual 这个指令来实现方法的调用的</p><p>非虚方法：</p><p>非虚方法即在编译期间可以确定方法的版本的 这种方法 称之为非虚方法</p><p>比如 private修饰的方法 static修饰的方法 final修饰的方法(不能被重写)</p><p>JVM底层是通过 #invokestatic 这个指令来实现方法的调用的</p><p>关于方法的隐藏和方法的覆盖：</p><p>如果在子类中书写和父类完全相同的静态方法 属于方法的隐藏 因为通过多态的方式依然可以访问到父类的方法</p><p>如果在子类中对父类的实例方法进行重写 属于方法的覆盖 因为不管是通过子类对象 还是多态的方式 都无法访问父类的方法</p><p>动态绑定和静态绑定</p><p>虚方法属于动态绑定 因为在编译期间 无法确定方法的版本 所以只有在程序运行期间 动态的创建对象 从而确定方法的版本信息</p><p>非虚方法 因为在编译期间 就可以确定方法的版本 所以是跟调用此方法的对象 或者类 静态绑定</p><p>虚方法表：即只要是虚方法(子类可以继承并且重写的方法)就存在此表中 是一个数组结构 当我们访问一个虚方法的时候</p><p>先从本类即子类中查找 如果没有 再依次向上从父类中查找</p></blockquote><p><img src="`+e+`" alt=""></p><h3 id="_5-抽象类" tabindex="-1"><a class="header-anchor" href="#_5-抽象类" aria-hidden="true">#</a> 5. 抽象类</h3><blockquote><p>1.抽象方法没有方法体 必须存在于抽象类中 均使用abstract修饰</p><p>2.抽象类不能直接new对象 必须通过new子类的方式创建对象(即多态向上转型的方式)</p><p>3.子类必须重写父类中的所有抽象方法 除非子类也是抽象类</p><p>4.抽象类中可以书写普通属性 普通方法 静态方法 构造方法</p><p>5.抽象类实现多态的方式与之前一致</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/7 15:11
 *  门 父类  抽象类
 *  子类 普通门 防盗门
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Door</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> brand<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> price<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBrand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> brand<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBrand</span><span class="token punctuation">(</span><span class="token class-name">String</span> brand<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">double</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Door</span><span class="token punctuation">(</span><span class="token class-name">String</span> brand<span class="token punctuation">,</span> <span class="token keyword">double</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Door</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>




<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/7 15:13
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommonDoor</span> <span class="token keyword">extends</span> <span class="token class-name">Door</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;普通门开门，插入钥匙，轻轻一转，zhi~ya~一声，门开了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;普通门关门，duang的一声，门关了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/7 15:15
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityDoor</span> <span class="token keyword">extends</span> <span class="token class-name">Door</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;防盗门开门，输入密码，人脸识别，门开了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;防盗门关门，自动关门&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/7 15:17
 *  人类 行为 操作门
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openCommonDoor</span><span class="token punctuation">(</span><span class="token class-name">CommonDoor</span> commonDoor<span class="token punctuation">)</span><span class="token punctuation">{</span>
        commonDoor<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">closeCommonDoor</span><span class="token punctuation">(</span><span class="token class-name">CommonDoor</span> commonDoor<span class="token punctuation">)</span><span class="token punctuation">{</span>
        commonDoor<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openSecurityDoor</span><span class="token punctuation">(</span><span class="token class-name">SecurityDoor</span> securityDoor<span class="token punctuation">)</span><span class="token punctuation">{</span>
        securityDoor<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">closeSecurityDoor</span><span class="token punctuation">(</span><span class="token class-name">SecurityDoor</span> securityDoor<span class="token punctuation">)</span><span class="token punctuation">{</span>
        securityDoor<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 以上四个方法针对每一种都书写 了具体的方法来实现开和关</span>
    <span class="token comment">// 这种方式不灵活 如果后续更多的门的子类 还要继续编写更多的 方法</span>
    <span class="token comment">// 我们应该编写一个方法 实现所有门的开和关</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openDoor</span><span class="token punctuation">(</span><span class="token class-name">Door</span> door<span class="token punctuation">)</span><span class="token punctuation">{</span>
        door<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">closeDoor</span><span class="token punctuation">(</span><span class="token class-name">Door</span> door<span class="token punctuation">)</span><span class="token punctuation">{</span>
        door<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Door</span> <span class="token function">buyDoor</span><span class="token punctuation">(</span><span class="token keyword">double</span> price<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>price <span class="token operator">&gt;</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SecurityDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/7 15:16
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Door</span> commonDoor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommonDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commonDoor<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        commonDoor<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Door</span> securityDoor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SecurityDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        securityDoor<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        securityDoor<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">CommonDoor</span> cd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommonDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">SecurityDoor</span> sd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SecurityDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        person<span class="token punctuation">.</span><span class="token function">openDoor</span><span class="token punctuation">(</span>cd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">openDoor</span><span class="token punctuation">(</span>sd<span class="token punctuation">)</span><span class="token punctuation">;</span>

        person<span class="token punctuation">.</span><span class="token function">closeDoor</span><span class="token punctuation">(</span>cd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">closeDoor</span><span class="token punctuation">(</span>sd<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Door</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> doors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Door</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        doors<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommonDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        doors<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> sd<span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-final关键字" tabindex="-1"><a class="header-anchor" href="#_6-final关键字" aria-hidden="true">#</a> 6.final关键字</h3><blockquote><p>final关键字可以修饰属性、方法、类</p></blockquote><h4 id="_6-1-修饰属性" tabindex="-1"><a class="header-anchor" href="#_6-1-修饰属性" aria-hidden="true">#</a> 6.1 修饰属性</h4><blockquote><p>final 修饰属性</p><p>final修饰的属性称之为常量 名称全部大写 多个单词之间使用下划线分割</p><p>基本数据类型常量：使用final修饰基本数据类型 表示其值只能被赋值一次 且不能改变</p><p>引用数据类型常量：使用final修饰引用数据类型 地址不能改变 但是地址中的值是可以改变的</p><p>常量的赋值：通常(99%)在定义的时候直接赋值 或者 在构造方法中赋值</p><p>这两种赋值方式 都是为了保证在使用常量之前是有值的</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test8</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/7 15:58
 *  final 修饰属性
 *  final修饰的属性称之为常量 名称全部大写 多个单词之间使用下划线分割
 *  基本数据类型常量：使用final修饰基本数据类型 表示其值只能被赋值一次 且不能改变
 *  引用数据类型常量：使用final修饰引用数据类型 地址不能改变 但是地址中的值是可以改变的
 *
 *  常量的赋值：通常(99%)在定义的时候直接赋值 或者 在构造方法中赋值
 *  这两种赋值方式 都是为了保证在使用常量之前是有值的
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFinalFiled</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">double</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> radius<span class="token punctuation">;</span>

    <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">COUNTRY_NAME</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">TestFinalFiled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token constant">COUNTRY_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">TestFinalFiled</span><span class="token punctuation">(</span><span class="token keyword">double</span> radius<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
        <span class="token constant">COUNTRY_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;中华人民共和国&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">final</span> <span class="token keyword">char</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token constant">SIGNS</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TestFinalFiled</span> testFinalFiled <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestFinalFiled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        testFinalFiled.pi = 3.34;</span>
        testFinalFiled<span class="token punctuation">.</span>radius <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> testFinalFiled<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> testFinalFiled<span class="token punctuation">.</span>radius <span class="token operator">*</span> testFinalFiled<span class="token punctuation">.</span>radius <span class="token punctuation">)</span><span class="token punctuation">;</span>


        testFinalFiled<span class="token punctuation">.</span><span class="token constant">SIGNS</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
        testFinalFiled<span class="token punctuation">.</span><span class="token constant">SIGNS</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;b&#39;</span><span class="token punctuation">;</span>
        testFinalFiled<span class="token punctuation">.</span><span class="token constant">SIGNS</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>通常情况下，不允许被改变的数据，往往也没有必要存在多份，所以我们可以再加上static修饰</p><p>表示：静态常量 作用范围也通常设置为public 因为静态常量 需要被更多的类使用</p><p>关于静态常量的赋值：通常在定义的时候直接赋值 或者 在静态代码块中赋值</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test8</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/7 16:13
 *  通常情况下，不允许被改变的数据，往往也没有必要存在多份，所以我们可以再加上static修饰
 *  表示：静态常量 作用范围也通常设置为public  因为静态常量 需要被更多的类使用
 *
 *  关于静态常量的赋值：通常在定义的时候直接赋值 或者 在静态代码块中赋值
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestStaticFinalField</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">double</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">COUNTRY_NAME</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span><span class="token punctuation">{</span>
        <span class="token constant">COUNTRY_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-修饰方法" tabindex="-1"><a class="header-anchor" href="#_6-2-修饰方法" aria-hidden="true">#</a> 6.2 修饰方法</h4><blockquote><p>final修饰方法 表示此方法可以被继承 不能被子类重写</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test8</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/7 16:18
 *  final修饰方法 表示此方法可以被继承  不能被子类重写
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFinalMethod</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span>  <span class="token keyword">void</span> <span class="token function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

<span class="token comment">//    @Override</span>
<span class="token comment">//    public void m1() {</span>
<span class="token comment">//</span>
<span class="token comment">//    }</span>

<span class="token punctuation">}</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-修饰类" tabindex="-1"><a class="header-anchor" href="#_6-3-修饰类" aria-hidden="true">#</a> 6.3 修饰类</h4><blockquote><p>final修饰类 表示此类不能被继承</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test8</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/7 16:21
 *  final修饰类 表示此类不能被继承
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFinalClass</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">//class D extends C{</span>
<span class="token comment">//</span>
<span class="token comment">//}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),o=[c];function i(l,u){return s(),a("div",null,o)}const k=n(t,[["render",i],["__file","day12-多态和抽象类.html.vue"]]);export{k as default};
