import{_ as n,o as s,c as a,e as t}from"./app-8007fa1b.js";const p={},e=t(`<h2 id="前提介绍" tabindex="-1"><a class="header-anchor" href="#前提介绍" aria-hidden="true">#</a> 前提介绍</h2><h3 id="_1-之前内容总结" tabindex="-1"><a class="header-anchor" href="#_1-之前内容总结" aria-hidden="true">#</a> 1. 之前内容总结</h3><ul><li>1.之前的内容比较零碎</li><li>2.之前的内容之间关联性不强，或者没有关联性</li><li>3.之前的内容需要我们理解的不多</li></ul><h3 id="_2-面向对象部分内容介绍" tabindex="-1"><a class="header-anchor" href="#_2-面向对象部分内容介绍" aria-hidden="true">#</a> 2. 面向对象部分内容介绍</h3><ul><li>1.面向对象部分内容 细节 零碎的知识点也很多</li><li>2.面向对象部分内容 彼此之间关联性很强</li><li>3.面向对象部分内容 需要我们理解的非常多</li></ul><h3 id="_3-学习过程注意事项" tabindex="-1"><a class="header-anchor" href="#_3-学习过程注意事项" aria-hidden="true">#</a> 3. 学习过程注意事项</h3><ul><li>1.多敲 多练 多记忆</li><li>2.多思考</li><li>3.多问</li></ul><h2 id="初识面向对象" tabindex="-1"><a class="header-anchor" href="#初识面向对象" aria-hidden="true">#</a> 初识面向对象</h2><h3 id="_1-万物皆对象" tabindex="-1"><a class="header-anchor" href="#_1-万物皆对象" aria-hidden="true">#</a> 1. 万物皆对象</h3><blockquote><p>自然界中的任何事物 我们都可以通过分析其特征和行为 将其描述的具体。</p></blockquote><h3 id="_2-特征-属性" tabindex="-1"><a class="header-anchor" href="#_2-特征-属性" aria-hidden="true">#</a> 2. 特征---属性</h3><blockquote><p>特征：是指一类事物共有的信息 使用属性描述</p><p>比如：人 都有 姓名 年龄 身高 体重 等等</p></blockquote><h3 id="_3-行为-方法" tabindex="-1"><a class="header-anchor" href="#_3-行为-方法" aria-hidden="true">#</a> 3. 行为---方法</h3><blockquote><p>行为：是指一类事物共有的动作 使用方法描述</p><p>比如：人都可以 吃饭 睡觉 学习 做运动 等等</p></blockquote><h3 id="_4-类和对象的关系" tabindex="-1"><a class="header-anchor" href="#_4-类和对象的关系" aria-hidden="true">#</a> 4. 类和对象的关系</h3><blockquote><p><strong><code>类是对象的抽象</code></strong> ： 类是一个抽象的概念 比如 人类 动物类 电脑类 等等 我们只根据这些类是无法知道具体是哪个事物的 所以 类是抽象的概念</p><p><strong><code>对象是类的具体</code></strong>：对象是真真实实存在的 看得见 摸得着的一个实体 所以是具体的概念</p></blockquote><h3 id="_5-创建类和对象" tabindex="-1"><a class="header-anchor" href="#_5-创建类和对象" aria-hidden="true">#</a> 5. 创建类和对象</h3><blockquote><p>学生类 类是对象的抽象 对象是类的具体</p><p>描述一类事物 从两个方面：特征和行为</p><p>特征--属性：姓名 年龄 身高 体重 学号 性别 班级 ……</p><p>行为--方法：学习 睡觉 吃饭 玩游戏 做运动</p><p>实例 ： 真真实实存在的一个个例 对象</p><p>f-filed : 字段 属性 成员变量 实例属性 实例变量</p><p>m-method : 方法 也就是行为</p><p>使用static修饰的方法 称之为 静态方法</p><p>没有使用static修饰的方法 称之为普通方法 也叫 实例方法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/2 10:24
 *  学生类   类是对象的抽象 对象是类的具体
 *  描述一类事物 从两个方面：特征和行为
 *
 *  特征--属性：姓名  年龄 身高 体重 学号 性别 班级 ……
 *  行为--方法：学习 睡觉 吃饭 玩游戏 做运动
 *
 *  实例 ： 真真实实存在的一个个例  对象
 *  f-filed : 字段 属性 成员变量 实例属性 实例变量
 *  m-method : 方法 也就是行为
 *
 *  使用static修饰的方法 称之为 静态方法
 *  没有使用static修饰的方法 称之为普通方法 也叫 实例方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>
    <span class="token keyword">double</span> weight<span class="token punctuation">;</span>
    <span class="token class-name">String</span> studentNo<span class="token punctuation">;</span>
    <span class="token keyword">char</span> sex<span class="token punctuation">;</span>
    <span class="token class-name">String</span> gradeName<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学生在学习&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学生在睡觉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学生在吃饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建对象</span>
        <span class="token comment">// 格式 类名 对象名 =  new 类名();</span>
        <span class="token class-name">Student</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 访问对象的属性</span>
        <span class="token comment">// 格式</span>
        <span class="token comment">// 赋值 对象名.属性名 = 值;</span>
        <span class="token comment">// 取值 System.out.println(对象名.属性名);</span>
        stu1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;赵四&quot;</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>studentNo <span class="token operator">=</span> <span class="token string">&quot;sz888&quot;</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">188.5</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>weight <span class="token operator">=</span> <span class="token number">75.8</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token char">&#39;男&#39;</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>gradeName <span class="token operator">=</span> <span class="token string">&quot;三年二班&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>studentNo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>weight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>gradeName<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 访问对象的行为</span>
        <span class="token comment">// 格式 对象名.方法名();</span>
        stu1<span class="token punctuation">.</span><span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-实例变量" tabindex="-1"><a class="header-anchor" href="#_6-实例变量" aria-hidden="true">#</a> 6. 实例变量</h3><table><thead><tr><th>描述</th><th>局部变量</th><th>实例变量</th></tr></thead><tbody><tr><td>定义位置</td><td>定义在方法体内</td><td>定义在类中</td></tr><tr><td>作用范围</td><td>离当前变量最近的大括号以内</td><td>整个类中</td></tr><tr><td>默认值</td><td>没有默认值</td><td>有默认值，与数组相同</td></tr><tr><td>重名问题</td><td>重合的作用范围以内，不能重名</td><td>可以与局部变量重名，就近原则使用</td></tr><tr><td>存储位置</td><td>基本数据类型存在栈中，引用数据类型名字在栈，值在堆</td><td>全部存在堆中，因为对象保存在堆中</td></tr><tr><td>生命周期</td><td>随着方法的入栈而生效，随着方法的出栈而死亡</td><td>随着对象的创建而生效，随着对象被垃圾回收而死亡。</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test2</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/2 10:24
 *  学生类   类是对象的抽象 对象是类的具体
 *  描述一类事物 从两个方面：特征和行为
 *
 *  目前问题：当前使用对象访问方法执行 没有显示对象的 姓名 信息 所以不太直观
 *  我们应该将 对象的 姓名信息进行展示
 *
 *  实例变量
 *  定义位置：定义在类中
 *  作用范围：本类中  离当前变量最近的大括号之内
 *  默认值：有默认值 与数组相同
 *  重名问题：可以与局部变量重名
 *
 *
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>
    <span class="token keyword">double</span> weight<span class="token punctuation">;</span>
    <span class="token class-name">String</span> studentNo<span class="token punctuation">;</span>
    <span class="token keyword">char</span> sex<span class="token punctuation">;</span>
    <span class="token class-name">String</span> gradeName<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;学生在学习&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;学生在睡觉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;学生在吃饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的名字是：&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的年龄是：&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的性别是：&quot;</span> <span class="token operator">+</span> sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的身高是：&quot;</span> <span class="token operator">+</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的体重是：&quot;</span> <span class="token operator">+</span> weight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的班级是：&quot;</span> <span class="token operator">+</span> gradeName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的学号是：&quot;</span> <span class="token operator">+</span> studentNo<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>



    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建对象</span>
        <span class="token comment">// 格式 类名 对象名 =  new 类名();</span>
        <span class="token class-name">Student</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 访问对象的属性</span>
        <span class="token comment">// 格式</span>
        <span class="token comment">// 赋值 对象名.属性名 = 值;</span>
        <span class="token comment">// 取值 System.out.println(对象名.属性名);</span>
        stu1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;赵四&quot;</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>studentNo <span class="token operator">=</span> <span class="token string">&quot;sz888&quot;</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">188.5</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>weight <span class="token operator">=</span> <span class="token number">75.8</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token char">&#39;男&#39;</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span>gradeName <span class="token operator">=</span> <span class="token string">&quot;三年二班&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>studentNo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>weight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>gradeName<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 访问对象的行为</span>
        <span class="token comment">// 格式 对象名.方法名();</span>
        stu1<span class="token punctuation">.</span><span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建对象</span>
        <span class="token comment">// 格式 类名 对象名 =  new 类名();</span>
        <span class="token class-name">Student</span> stu2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 访问对象的属性</span>
        <span class="token comment">// 格式</span>
        <span class="token comment">// 赋值 对象名.属性名 = 值;</span>
        <span class="token comment">// 取值 System.out.println(对象名.属性名);</span>
        stu2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;广坤&quot;</span><span class="token punctuation">;</span>
        stu2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span><span class="token punctuation">;</span>
        stu2<span class="token punctuation">.</span>studentNo <span class="token operator">=</span> <span class="token string">&quot;sz666&quot;</span><span class="token punctuation">;</span>
        stu2<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">188</span><span class="token punctuation">;</span>
        stu2<span class="token punctuation">.</span>weight <span class="token operator">=</span> <span class="token number">75</span><span class="token punctuation">;</span>
        stu2<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token char">&#39;男&#39;</span><span class="token punctuation">;</span>
        stu2<span class="token punctuation">.</span>gradeName <span class="token operator">=</span> <span class="token string">&quot;三年二班&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>studentNo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>weight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>gradeName<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 访问对象的行为</span>
        <span class="token comment">// 格式 对象名.方法名();</span>
        stu2<span class="token punctuation">.</span><span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu2<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu2<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu2<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Student</span> stu3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu3<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-构造方法" tabindex="-1"><a class="header-anchor" href="#_7-构造方法" aria-hidden="true">#</a> 7. 构造方法</h3><blockquote><p>构造方法：用于创建对象的特殊方法</p><p>名称与类名完全相同。</p><p>没有返回值类型。</p><p>创建对象时，触发构造方法的调用，不可通过句点手动调用。</p><p>格式 ： 访问修饰符 + 类名(){}</p></blockquote><blockquote><p>如果没有在类中显示定义构造方法，则编译器(JVM)默认提供无参构造方法。</p><p>但是 如果书写了有参构造方法 无参构造将会被覆盖 如需使用 必须 显式 书写</p><p>根据构造方法重载规则 我们在一个类中可以写很多构造方法</p><p>实际开发中 我们针对一个类 只写两个构造方法 一个无参构造 一个全参构造 即可</p><p>构造方法重载：同一个类中的构造方法 参数列表不同</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test3</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/2 10:24
 *  学生类
 *
 *  构造方法：用于创建对象的特殊方法
 *      名称与类名完全相同。
 *      没有返回值类型。
 *      创建对象时，触发构造方法的调用，不可通过句点手动调用。
 *
 *  格式 ：    访问修饰符 + 类名()<span class="token punctuation">{</span><span class="token punctuation">}</span>
 *  普通方法： 访问修饰符 +  返回值类型 + 方法名()<span class="token punctuation">{</span><span class="token punctuation">}</span>
 *
 *  如果没有在类中显示定义构造方法，则编译器(JVM)默认提供无参构造方法。
 *  但是 如果书写了有参构造方法 无参构造将会被覆盖 如需使用 必须  显式  书写
 *
 *
 *  构造方法重载：同一个类中的构造方法 参数列表不同
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>
    <span class="token class-name">String</span> studentNo<span class="token punctuation">;</span>
    <span class="token keyword">char</span> sex<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;学生在学习&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;学生在睡觉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;学生在吃饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的名字是：&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的年龄是：&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的性别是：&quot;</span> <span class="token operator">+</span> sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的身高是：&quot;</span> <span class="token operator">+</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的学号是：&quot;</span> <span class="token operator">+</span> studentNo<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Student类无参构造方法执行了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        name <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> n<span class="token punctuation">,</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">double</span> h<span class="token punctuation">,</span><span class="token keyword">char</span> s<span class="token punctuation">,</span><span class="token class-name">String</span> sNo<span class="token punctuation">)</span><span class="token punctuation">{</span>
        name <span class="token operator">=</span> n<span class="token punctuation">;</span>
        age <span class="token operator">=</span> a<span class="token punctuation">;</span>
        height <span class="token operator">=</span> h<span class="token punctuation">;</span>
        sex <span class="token operator">=</span> s<span class="token punctuation">;</span>
        studentNo <span class="token operator">=</span> sNo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu1<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Student</span> stu2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">,</span> <span class="token char">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;sz8956&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu2<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Student</span> stu3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;广坤&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu3<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        stu3<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">185</span><span class="token punctuation">;</span>
        stu3<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token char">&#39;男&#39;</span><span class="token punctuation">;</span>
        stu3<span class="token punctuation">.</span>studentNo <span class="token operator">=</span> <span class="token string">&quot;sz8945&quot;</span><span class="token punctuation">;</span>

        stu3<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-this关键字" tabindex="-1"><a class="header-anchor" href="#_8-this关键字" aria-hidden="true">#</a> 8.this关键字</h3><blockquote><p>this关键字 表示当前正在使用的对象</p><p>可以访问本类中的</p><p>属性 this.属性名</p><p>方法 this.方法名(实参列表)</p><p>构造方法 this(实参列表) this访问本类的构造方法 只能在本类构造的第一句</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>test4</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> WHD
 * <span class="token keyword">@description</span> TODO
 * <span class="token keyword">@date</span> 2023/6/2 10:24
 *  学生类
 *  this关键字 表示当前正在使用的对象
 *  可以访问本类中的
 *  属性  this.属性名
 *  方法  this.方法名(实参列表)
 *  构造方法 this(实参列表) this访问本类的构造方法 只能在本类构造的第一句
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>
    <span class="token class-name">String</span> studentNo<span class="token punctuation">;</span>
    <span class="token keyword">char</span> sex<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的名字是：&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的年龄是：&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// printName();</span>
        <span class="token function">printAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的性别是：&quot;</span> <span class="token operator">+</span> sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的身高是：&quot;</span> <span class="token operator">+</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的学号是：&quot;</span> <span class="token operator">+</span> studentNo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Student类无参构造方法执行了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>




    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">double</span> height<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">double</span> height<span class="token punctuation">,</span> <span class="token keyword">char</span> sex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token keyword">double</span> height<span class="token punctuation">,</span> <span class="token keyword">char</span> sex<span class="token punctuation">,</span> <span class="token class-name">String</span> studentNo<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>height<span class="token punctuation">,</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>studentNo <span class="token operator">=</span> studentNo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;赵四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        stu1<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------------------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Student</span> stu2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;广坤&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">185</span><span class="token punctuation">,</span> <span class="token char">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;sz897845&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        stu2<span class="token punctuation">.</span><span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","day08-初识面向对象.html.vue"]]);export{k as default};
