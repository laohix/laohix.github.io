import{_ as n,o as s,c as a,e}from"./app-8007fa1b.js";const p="/assets/类成员访问权限-fc799d86.png",t={},c=e(`<h2 id="封装和继承" tabindex="-1"><a class="header-anchor" href="#封装和继承" aria-hidden="true">#</a> 封装和继承</h2><h3 id="_1-封装" tabindex="-1"><a class="header-anchor" href="#_1-封装" aria-hidden="true">#</a> 1. 封装</h3><blockquote><p>封装：面向对象三大特征之一 将类中的属性隐藏在类的内部 不让外部直接访问 而是通过公开的getter 以及 setter</p><p>方法来实现属性的访问</p><p>属性私有 每个属性使用private修饰</p><p>方法公开 针对每个属性编写两个方法 用于属性的赋值setter 和 取值getter</p><p>高内聚 一个类中的信息应该直接与本类关联 不能间接关联 或者 没有关联 即必须有紧密连接关系</p><p>低耦合 降低紧密连接程度 降低耦合度意味着各个组件之间的紧密连接程度降低 随之将提高扩展性</p></blockquote><blockquote><p>便于使用者正确使用系统，防止错误修改属性 降低了构建大型系统的风险 提高程序的可重用性 降低程序之间的耦合度</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 9:06
 *  企鹅类(宠物类)
 *      属性：名字 性别 健康值
 *      方法：打印企鹅信息
 *
 *  封装：面向对象三大特征之一 将类中的属性隐藏在类的内部 不让外部直接访问 而是通过公开的getter 以及 setter
 *  方法来实现属性的访问
 *
 *  属性私有 每个属性使用private修饰
 *  方法公开 针对每个属性编写两个方法 用于属性的赋值setter 和 取值getter
 *
 *  高内聚 一个类中的信息应该直接与本类关联 不能间接关联 或者 没有关联  即必须有紧密连接关系
 *  低耦合 降低紧密连接程度 降低耦合度意味着各个组件之间的紧密连接程度降低  随之将提高扩展性
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Penguin</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span>  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">char</span> sex<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token keyword">char</span> sex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>sex <span class="token operator">==</span> <span class="token char">&#39;雌&#39;</span> <span class="token operator">||</span> sex <span class="token operator">==</span> <span class="token char">&#39;雄&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;企鹅性别赋值不合法，将使用默认性别：雄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token char">&#39;雄&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">char</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> health<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHealth</span><span class="token punctuation">(</span><span class="token keyword">int</span> health<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>health <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> health <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;企鹅健康值赋值不合法，将使用默认值：80&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getHealth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> health<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 9:11
 *  企鹅测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPenguin</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Penguin</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        p1.name = &quot;小白&quot;;</span>
<span class="token comment">//        p1.sex = &#39;男&#39;;</span>
<span class="token comment">//        p1.health = -5678;</span>
        p1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;小白&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p1<span class="token punctuation">.</span><span class="token function">setSex</span><span class="token punctuation">(</span><span class="token char">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p1<span class="token punctuation">.</span><span class="token function">setHealth</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">789</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        System.out.println(p1.name);</span>
<span class="token comment">//        System.out.println(p1.sex);</span>
<span class="token comment">//        System.out.println(p1.health);</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">getHealth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">Penguin</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-访问权限修饰符" tabindex="-1"><a class="header-anchor" href="#_2-访问权限修饰符" aria-hidden="true">#</a> 2. 访问权限修饰符</h3><h4 id="_2-1-类的访问权限" tabindex="-1"><a class="header-anchor" href="#_2-1-类的访问权限" aria-hidden="true">#</a> 2.1 类的访问权限</h4><blockquote><p>类的访问权限：</p><p>public： 本项目中任何位置都可以访问</p><p>默认不写： 只能在同包中访问</p></blockquote><h4 id="_2-2-类成员的访问权限" tabindex="-1"><a class="header-anchor" href="#_2-2-类成员的访问权限" aria-hidden="true">#</a> 2.2 类成员的访问权限</h4><p><img src="`+p+`" alt=""></p><h4 id="_2-3-补充" tabindex="-1"><a class="header-anchor" href="#_2-3-补充" aria-hidden="true">#</a> 2.3 补充</h4><blockquote><p>如果需要在同一个作用域访问两个同名 但是不同包的类 可以使用全限定名使用一个类</p><p>包名 + 类名 = 全限定名</p></blockquote><h3 id="_3-javabean" tabindex="-1"><a class="header-anchor" href="#_3-javabean" aria-hidden="true">#</a> 3.JavaBean</h3><blockquote><p>JavaBean是一种Java语言写成的可重用组件。</p><p>所谓javaBean，是指符合如下标准的Java类： 类是公共的 有一个无参的公共的构造器 有属性，且有对应的get、set方法</p></blockquote><h3 id="_4-继承" tabindex="-1"><a class="header-anchor" href="#_4-继承" aria-hidden="true">#</a> 4. 继承</h3><blockquote><p>子类与父类是is-a关系 表示子类和父类 符合 is-a的关系 才要使用继承设计。</p><p>继承是Java中实现代码重用的重要手段之一。Java中只支持单根继承，即一个类只能有一个直接父类。</p><p>何时使用继承？ 继承与真实世界类似 只要说“猫是哺乳动物”，猫的很多属性、行为就不言自明了 藏獒是一种狗</p><p>将子类共有的信息编写在父类中</p><p>将子类独有的信息编写在子类中</p></blockquote><h3 id="_5-子类继承父类哪些内容" tabindex="-1"><a class="header-anchor" href="#_5-子类继承父类哪些内容" aria-hidden="true">#</a> 5. 子类继承父类哪些内容</h3><blockquote><p>继承public和protected修饰的属性和方法，不管子类和父类是否在同一个包里</p><p>继承默认权限修饰符修饰的属性和方法，但子类和父类必须在同一个包里</p><p>private修饰的属性和方法不能被继承</p></blockquote><h3 id="_6-不能继承哪些内容" tabindex="-1"><a class="header-anchor" href="#_6-不能继承哪些内容" aria-hidden="true">#</a> 6. 不能继承哪些内容</h3><blockquote><p>private成员</p><p>子类与父类不在同包，使用默认访问权限的成员</p><p>构造方法</p></blockquote><h3 id="_7-super关键字" tabindex="-1"><a class="header-anchor" href="#_7-super关键字" aria-hidden="true">#</a> 7. super关键字</h3><blockquote><p>super关键字 super用于表示父类的信息 是包含在this之内的</p><p>super可以访问父类的属性、方法、构造方法</p></blockquote><h4 id="_7-1-访问属性" tabindex="-1"><a class="header-anchor" href="#_7-1-访问属性" aria-hidden="true">#</a> 7.1 访问属性</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:32
 *  宠物类 父类
 *  父类中书写子类共有的信息 (属性和方法)
 *
 *  关于属性 和 字段
 *  严格意义来说 直接写在类中的变量 称之为 字段 只有给这些字段添加了 封装以后 才可以被称之为属性
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> health<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> love<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getHealth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> health<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHealth</span><span class="token punctuation">(</span><span class="token keyword">int</span> health<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getLove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLove</span><span class="token punctuation">(</span><span class="token keyword">int</span> love<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>love <span class="token operator">=</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的名字是：&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的健康值是：&quot;</span> <span class="token operator">+</span> health<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的亲密值是：&quot;</span> <span class="token operator">+</span> love<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:27
 *  狗类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> strain<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getStrain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStrain</span><span class="token punctuation">(</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">,</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>love <span class="token operator">=</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6<span class="token punctuation">.</span></span><span class="token class-name">Pet</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 14:35
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> furColor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getFurColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> furColor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFurColor</span><span class="token punctuation">(</span><span class="token class-name">String</span> furColor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>furColor <span class="token operator">=</span> furColor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">,</span><span class="token class-name">String</span> furColor<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>furColor <span class="token operator">=</span> furColor<span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>love <span class="token operator">=</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-2-访问方法" tabindex="-1"><a class="header-anchor" href="#_7-2-访问方法" aria-hidden="true">#</a> 7.2 访问方法</h4><blockquote><p>我们在子类的方法中可以使用super.方法名() 访问父类的方法 以实现功能组合的效果</p><p>对于父类的方法</p><p>我们可以使用super.方法名() 访问</p><p>也可以使用 this.方法名() 访问</p><p>也可以直接写方法名() 访问</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:28
 *  企鹅类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Penguin</span> <span class="token keyword">extends</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">String</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">,</span><span class="token class-name">String</span> sex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>love <span class="token operator">=</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printPenguin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;企鹅的性别是：&quot;</span> <span class="token operator">+</span> sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test6</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test7<span class="token punctuation">.</span></span><span class="token class-name">Cat</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 14:42
 *  super访问父类的方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPet2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
        <span class="token class-name">Penguin</span> penguin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token string">&quot;大白&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;雄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        penguin<span class="token punctuation">.</span><span class="token function">printPenguin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-访问构造" tabindex="-1"><a class="header-anchor" href="#_7-3-访问构造" aria-hidden="true">#</a> 7.3 访问构造</h4><blockquote><p>子类构造方法 默认都将访问父类的无参构造方法</p><p>除非子类构造方法 访问父类的有参构造方法 则不再访问父类的无参构造</p><p>总结：子类构造方法 要么访问父类的无参构造 要么访问父类的有参构造 二选一</p><p>在子类构造中 可以同时使用this和super关键字 但是不同同时使用this和super访问本类 以及 父类的构造方法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test8</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:32
 *  宠物类 父类
 *  父类中书写子类共有的信息 (属性和方法)
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> health<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> love<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getHealth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> health<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHealth</span><span class="token punctuation">(</span><span class="token keyword">int</span> health<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getLove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLove</span><span class="token punctuation">(</span><span class="token keyword">int</span> love<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>love <span class="token operator">=</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的名字是：&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的健康值是：&quot;</span> <span class="token operator">+</span> health<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宠物的亲密值是：&quot;</span> <span class="token operator">+</span> love<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Pet</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>love <span class="token operator">=</span> love<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test8</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:27
 *  狗类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> strain<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getStrain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStrain</span><span class="token punctuation">(</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *  注意 ： 不能同时在子类的构造中 使用 super和 this分别访问 父类 和 本类的构造方法
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@param</span> <span class="token parameter">health</span>
     * <span class="token keyword">@param</span> <span class="token parameter">love</span>
     * <span class="token keyword">@param</span> <span class="token parameter">strain</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">,</span><span class="token class-name">String</span> strain<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>health<span class="token punctuation">,</span>love<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>strain <span class="token operator">=</span> strain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printDog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// super.print(); print(); this.print();</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;狗狗的品种是:&quot;</span> <span class="token operator">+</span> strain<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test8</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/3 11:28
 *  企鹅类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Penguin</span> <span class="token keyword">extends</span> <span class="token class-name">Pet</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">String</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Penguin</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> health<span class="token punctuation">,</span><span class="token keyword">int</span> love<span class="token punctuation">,</span><span class="token class-name">String</span> sex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>health<span class="token punctuation">,</span>love<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// alt + shift + ↑↓ 移动整行代码</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printPenguin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;企鹅的性别是：&quot;</span> <span class="token operator">+</span> sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),o=[c];function i(l,u){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","day09-封装和继承.html.vue"]]);export{d as default};
