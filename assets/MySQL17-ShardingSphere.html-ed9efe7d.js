import{_ as p,r as c,o,c as l,a as n,d as s,b as e,e as t}from"./app-8007fa1b.js";const i="/assets/f3sf72c372_Y6Gp_o1mnS-844a4732.jpg",u="/assets/byvc14m9u4_i4jyAWmsg3-d4a51eb7.png",r="/assets/mrbjw6pa34_pI5iijwvoj-32068474.jpg",d="/assets/zl_v8wxlxx_q2rXVryusE-e997b714.png",k="/assets/vd89gir10g_Jy8ApNVS18-48c6c6a1.jpg",v="/assets/o430_hmmor_sqvI6P4KEV-650991ff.png",m="/assets/4qgh6-ilpc_Yj5Iae60Ua-fbb6710b.png",b="/assets/-3e0g79e6m_t6S52t2arw-cdff05e3.jpg",g="/assets/har5mqe0sj_IGrd1Ae4vw-cfb57e85.jpg",y="/assets/y94h6j6im2_U5GKQAjOvd-1406b13e.png",h="/assets/d8fczz43m__qnWrUBAKB0-4d74878d.png",_="/assets/image-20230630154123720-547ea519.png",w="/assets/lnc6h93xqd_swoSpPZSiD-1cd87cd0.png",S="/assets/17_le4epnn_GgEvmzPu6e-34c1740a.png",f="/assets/ru5tb-iw4m_ErYyvAj4cn-1e74439a.png",I="/assets/1xstp60eo6_-9n3PvCMHi-9d9bef0d.png",x="/assets/u1pg7w73wm_z8oE-qxJ85-babaa767.png",T="/assets/05siw4bhe_1XFf4wVaQv-ce00f181.png",A="/assets/ps9egepu4z_n3Tg6k58-B-826a59e6.png",N="/assets/4o9tim8u3k_1MTdBERUOI-2395791f.png",j="/assets/image-20230118232739869-65a92725.png",q={},E=t('<h1 id="第01章-高性能架构模式" tabindex="-1"><a class="header-anchor" href="#第01章-高性能架构模式" aria-hidden="true">#</a> 第01章 高性能架构模式</h1><p>互联网业务兴起之后，海量用户加上海量数据的特点，单个数据库服务器已经难以满足业务需要，必须考虑数据库集群的方式来提升性能。</p><p>高性能数据库集群：</p><p>1、第一种方式是**“读写分离”**</p><p>2、第二种方式是**“数据库分片”**</p><h2 id="_1-读写分离架构" tabindex="-1"><a class="header-anchor" href="#_1-读写分离架构" aria-hidden="true">#</a> 1 读写分离架构</h2><p><strong>读写分离原理：</strong> 读写分离的基本原理是将数据库读写操作分散到不同的节点上，下面是其基本架构图：</p><p><img src="'+i+'" alt=""></p><p><strong>读写分离的基本实现：</strong></p><ul><li><p>主库负责处理事务性的增删改操作，从库负责处理查询操作，能够有效的避免由数据更新导致的行锁，使得整个系统的查询性能得到极大的改善。</p></li><li><p>读写分离是根据 SQL 语义的分析，将读操作和写操作分别路由至主库与从库。</p></li><li><p>通过一主多从的配置方式，可以将查询请求均匀的分散到多个数据副本，能够进一步的提升系统的处理能力。</p></li><li><p>使用多主多从的方式，不但能够提升系统的吞吐量，还能够提升系统的可用性，可以达到在任何一个数据库宕机，甚至磁盘物理损坏的情况下</p><p>仍然不影响系统的正常运行。</p></li></ul><p><strong>下图展示了根据业务需要，将用户表的写操作和读操路由到不同的数据库的方案：</strong></p><p><img src="'+u+'" alt=""></p><h2 id="_2-数据库分片架构" tabindex="-1"><a class="header-anchor" href="#_2-数据库分片架构" aria-hidden="true">#</a> 2 数据库分片架构</h2><p><strong>读写分离的问题：</strong></p><p>读写分离分散了数据库读写操作的压力，但没有分散存储压力，为了满足业务数据存储的需求，就需要<strong>分库、分表</strong>。</p><p><strong>数据分片：</strong></p><p>将存放在单一数据库中的数据分散地存放至多个数据库或表中，以达到提升性能瓶颈以及可用性的效果。 数据分片的有效手段是对关系型数据库进行</p><p><strong>分库和分表</strong>。数据分片的拆分方式又分为<strong>垂直分片和水平分片</strong>。</p><h3 id="_2-1-垂直分片" tabindex="-1"><a class="header-anchor" href="#_2-1-垂直分片" aria-hidden="true">#</a> 2.1 垂直分片</h3><p>就是一个数据库中的表分散的存储到不同的数据库中</p><p><strong>垂直分库：</strong></p><p>按照业务拆分的方式称为垂直分片，又称为纵向拆分，它的核心理念是<strong>专库专用</strong>。 在拆分之前，一个数据库由多个数据表构成，每个表对应着不同的</p><p>业务。而拆分之后，则是按照业务<strong>将表进行归类，分布到不同的数据库</strong>中，从而将压力分散至不同的数据库。</p><p><img src="'+r+'" alt=""></p><p>下图展示了根据业务需要，将用户表和订单表垂直分片到不同的数据库的方案：</p><p><img src="'+d+'" alt=""></p><p>垂直拆分可以缓解数据量和访问量带来的问题，但无法根治。如果垂直拆分之后，<strong>表中的数据量依然超过单节点所能承载的阈值，则需要水平分片</strong></p><p><strong>来进一步处理。</strong></p><p><strong>垂直分表：</strong></p><p><strong>垂直分表适合将表中某些不常用的列，或者是占了大量空间的列拆分出去。</strong></p><p>假设我们是一个婚恋网站，用户在筛选其他用户的时候，主要是用 age 和 sex 两个字段进行查询，而 nickname 和 description 两个字段主要用于展</p><p>示，一般不会在业务查询中用到。description 本身又比较长，因此我们可以将这两个字段独立到另外一张表中，这样在查询 age 和 sex 时，就能带来</p><p>一定的性能提升。</p><p>垂直分表引入的复杂性主要体现在表操作的数量要增加。例如，原来只要一次查询就可以获取 name、age、sex、nickname、description，现在需要</p><p>两次查询，一次查询获取 name、age、sex，另外一次查询获取 nickname、description。</p><p><img src="'+k+'" alt=""></p><h3 id="_2-2-水平分片" tabindex="-1"><a class="header-anchor" href="#_2-2-水平分片" aria-hidden="true">#</a> 2.2 水平分片</h3><p>水平分片：把一张表的数据拆分到不同的数据库表中</p><p>水平分片又称为横向拆分。 相对于垂直分片，它不再将数据根据业务逻辑分类，而是通过某个字段（或某几个字段），根据某种规则将<strong>数据</strong>分散至多</p><p>个库或表中**，**每个分片仅包含数据的一部分。 例如：根据主键分片，偶数主键的记录放入 0 库（或表），奇数主键的记录放入 1 库（或表），如下</p><p>图所示。</p><p><img src="'+v+'" alt=""></p><blockquote><p><strong>阿里巴巴Java开发手册：</strong> 【推荐】单表行数超过 <strong>500 万行</strong>或者单表容量<strong>超过 2GB</strong>，才推荐进行分库分表。 说明：如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。</p></blockquote><h2 id="_3-读写分离和数据分片架构" tabindex="-1"><a class="header-anchor" href="#_3-读写分离和数据分片架构" aria-hidden="true">#</a> 3 读写分离和数据分片架构</h2><p>下图展现了将数据分片与读写分离<strong>一同使用</strong>时，应用程序与数据库集群之间的复杂拓扑关系。</p><p><img src="'+m+'" alt=""></p><h2 id="_4-实现方式" tabindex="-1"><a class="header-anchor" href="#_4-实现方式" aria-hidden="true">#</a> 4 实现方式</h2><p>读写分离和数据分片和业务系统对接具体的实现方式一般有两种： <strong>程序代码封装和中间件封装</strong>。</p><h3 id="_4-1-程序代码封装" tabindex="-1"><a class="header-anchor" href="#_4-1-程序代码封装" aria-hidden="true">#</a> 4.1 程序代码封装</h3><p>程序代码封装指在代码中抽象一个<strong>数据访问层（或中间层封装）</strong>，实现读写操作分离和数据库服务器连接的管理。</p><p><strong>其基本架构是：</strong> 以读写分离为例</p><p><img src="'+b+'" alt=""></p><h3 id="_4-2-中间件封装" tabindex="-1"><a class="header-anchor" href="#_4-2-中间件封装" aria-hidden="true">#</a> 4.2 中间件封装</h3><p>中间件封装指的是<strong>独立一套系统出来</strong>，实现读写操作分离和数据库服务器连接的管理。对于业务服务器来说，访问中间件和访问数据库没有区别，在</p><p>业务服务器看来，中间件就是一个数据库服务器。</p><p><strong>基本架构是：</strong> 以读写分离为例</p><p><img src="'+g+'" alt=""></p><h3 id="_4-3-常用解决方案" tabindex="-1"><a class="header-anchor" href="#_4-3-常用解决方案" aria-hidden="true">#</a> 4.3 常用解决方案</h3><p>Apache ShardingSphere（程序级别和中间件级别）</p><p>MyCat（数据库中间件）</p><h1 id="第02章-shardingsphere" tabindex="-1"><a class="header-anchor" href="#第02章-shardingsphere" aria-hidden="true">#</a> 第02章 ShardingSphere</h1><h2 id="_1、简介" tabindex="-1"><a class="header-anchor" href="#_1、简介" aria-hidden="true">#</a> 1、简介</h2>',62),D={href:"https://shardingsphere.apache.org/index_zh.html",title:"https://shardingsphere.apache.org/index_zh.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://shardingsphere.apache.org/document/5.1.1/cn/overview/",title:"https://shardingsphere.apache.org/document/5.1.1/cn/overview/",target:"_blank",rel:"noopener noreferrer"},L=t('<p>Apache ShardingSphere 由 JDBC、Proxy 和 Sidecar（规划中）这 3 款既能够独立部署，又支持混合部署配合使用的产品组成。</p><h2 id="_2、shardingsphere-jdbc" tabindex="-1"><a class="header-anchor" href="#_2、shardingsphere-jdbc" aria-hidden="true">#</a> 2、ShardingSphere-JDBC</h2><p><strong>程序代码封装</strong></p><p>定位为轻量级 Java 框架，<strong>在 Java 的 JDBC 层提供的额外服务</strong>。 它使用客户端直连数据库，<strong>以 jar 包形式提供服务</strong>，无需额外部署和依赖，可</p><p>理解为增强版的 JDBC 驱动，完全兼容 JDBC 和各种 ORM 框架。</p><p><img src="'+y+'" alt=""></p><h2 id="_3、shardingsphere-proxy" tabindex="-1"><a class="header-anchor" href="#_3、shardingsphere-proxy" aria-hidden="true">#</a> 3、ShardingSphere-Proxy</h2><p><strong>中间件封装</strong></p><p>定位为透明化的<strong>数据库代理端</strong>，提供封装了数据库二进制协议的服务端版本，用于完成对异构语言的支持。 目前提供 MySQL 和 PostgreSQL版</p><p>本，它可以使用任何兼容 MySQL/PostgreSQL 协议的访问客户端（如：MySQL Command Client, MySQL Workbench, Navicat 等）操作数据，对</p><p>DBA 更加友好。</p><p><img src="'+h+'" alt=""></p><h1 id="第03章-mysql主从同步" tabindex="-1"><a class="header-anchor" href="#第03章-mysql主从同步" aria-hidden="true">#</a> 第03章 MySQL主从同步</h1><h2 id="_1、mysql主从同步原理" tabindex="-1"><a class="header-anchor" href="#_1、mysql主从同步原理" aria-hidden="true">#</a> 1、MySQL主从同步原理</h2><p><img src="'+_+'" alt="image-20230630154123720"></p><p><strong>基本原理：</strong></p><p>slave会从master读取binlog来进行数据同步</p><p><strong>具体步骤：</strong></p><ul><li><p>step1：master将数据改变记录到二进制日志（binary log）中。</p></li><li><p>step2：当slave上执行 start slave 命令之后，slave会创建一个IO 线程用来连接master，请求master中的binlog。</p></li><li><p>step3：当slave连接master时，master会创建一个 log dump 线程，用于发送 binlog 的内容。在读取 binlog 的内容的操作中，会对主节点上的</p><p>binlog 加锁，当读取完成并发送给从服务器后解锁。</p></li><li><p>step4：IO 线程接收主节点 binlog dump 进程发来的更新之后，保存到 中继日志（relay log） 中。</p></li><li><p>step5：slave的SQL线程，读取relay log日志，并解析成具体操作，从而实现主从操作一致，最终数据一致。</p></li></ul><h2 id="_2-一主多从配置" tabindex="-1"><a class="header-anchor" href="#_2-一主多从配置" aria-hidden="true">#</a> 2 一主多从配置</h2><p>服务器规划：使用docker方式创建，主从服务器IP一致，端口号不一致</p><p><img src="'+w+`" alt=""></p><ul><li>主服务器：容器名<code>atguigu-mysql-master</code>，端口<code>3306</code></li><li>从服务器：容器名<code>atguigu-mysql-slave1</code>，端口<code>3307</code></li><li>从服务器：容器名<code>atguigu-mysql-slave2</code>，端口<code>3308</code></li></ul><p><strong>注意：</strong> 如果此时防火墙是开启的，<code>则先关闭防火墙，并重启docker</code>，否则后续安装的MySQL无法启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#关闭docker</span>
systemctl stop <span class="token function">docker</span>
<span class="token comment">#关闭防火墙</span>
systemctl stop firewalld
<span class="token comment">#启动docker</span>
systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-准备主服务器" tabindex="-1"><a class="header-anchor" href="#_2-1-准备主服务器" aria-hidden="true">#</a> 2.1 准备主服务器</h3><ul><li><strong>step1：在docker中创建并启动MySQL主服务器：</strong><code>端口3306</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql01_conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql01_data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>atguigu <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> master <span class="token punctuation">\\</span>
mysql:8.0.29
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>step2：创建MySQL主服务器配置文件：</strong></li></ul><p>默认情况下MySQL的binlog日志是自动开启的，可以通过如下配置定义一些可选配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /var/lib/docker/volumes/mysql01_conf/_data/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置如下内容</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>[mysqld]
<span class="token comment"># 服务器唯一id，默认值1</span>
<span class="token key attr-name">server-id</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token comment"># 设置日志格式，默认值ROW</span>
<span class="token key attr-name">binlog_format</span><span class="token punctuation">=</span><span class="token value attr-value">ROW</span>
<span class="token comment"># 二进制日志名，默认binlog</span>
<span class="token key attr-name">log-bin</span><span class="token punctuation">=</span><span class="token value attr-value">binlog</span>
<span class="token comment"># 设置需要复制的数据库，默认复制全部数据库</span>
<span class="token comment">#binlog-do-db=mytestdb1</span>
<span class="token comment">#binlog-do-db=mytestdb2</span>

<span class="token comment"># 设置不需要复制的数据库</span>
<span class="token comment">#binlog-ignore-db=mysql</span>
<span class="token comment">#binlog-ignore-db=infomation_schema</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>binlog格式说明：</p><ul><li><p>binlog_format=STATEMENT：日志记录的是主机数据库的<code>写指令</code>，性能高，但是now()之类的函数以及获取系统参数的操作会出现主从数据不</p><p>同步的问题。</p></li><li><p>binlog_format=ROW（默认）：日志记录的是主机数据库的<code>写后的数据</code>，批量操作时性能较差，解决now()或者 user()或者 @@hostname 等操</p><p>作在主从机器上不一致的问题。</p></li><li><p>binlog_format=MIXED：是以上两种level的混合使用，有函数用ROW，没函数用STATEMENT，但是无法识别系统变量</p></li></ul><p>重启MySQL容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 选做：如果客户端连不上，则修改默认密码校验方式</span>
<span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;1234&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>step5：主机中查询master状态：</strong></li></ul><p>执行完此步骤后<code>不要再操作主服务器MYSQL</code>，防止主服务器状态值变化</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#进入容器：env LANG=C.UTF-8 避免容器中显示中文乱码</span>
docker <span class="token keyword">exec</span> <span class="token operator">-</span>it master env LANG<span class="token operator">=</span>C<span class="token punctuation">.</span>UTF<span class="token operator">-</span><span class="token number">8</span> <span class="token operator">/</span>bin<span class="token operator">/</span>bash

<span class="token comment">#进入容器内的mysql命令行</span>
mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p

<span class="token comment"># 查询master阶段的状态</span>
<span class="token keyword">SHOW</span> MASTER <span class="token keyword">STATUS</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>记下<code>File</code>和<code>Position</code>的值。执行完此步骤后不要再操作主服务器MYSQL，防止主服务器状态值变化。</p><p><img src="`+S+`" alt=""></p><h3 id="_2-2-准备从服务器" tabindex="-1"><a class="header-anchor" href="#_2-2-准备从服务器" aria-hidden="true">#</a> 2.2 准备从服务器</h3><p>可以配置多台从机slave1、slave2...，这里以配置slave1为例</p><ul><li><strong>step1：在docker中创建并启动MySQL从服务器：</strong><code>端口3307</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3307</span>:3306 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql02_conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql02_data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>atguigu <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> slave01 <span class="token punctuation">\\</span>
mysql:8.0.29
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>step2：创建MySQL从服务器配置文件：</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /var/lib/docker/volumes/mysql02_conf/_data/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置如下内容：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>[mysqld]
<span class="token comment"># 服务器唯一id，每台服务器的id必须不同，如果配置其他从机，注意修改id</span>
<span class="token key attr-name">server-id</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
<span class="token comment"># 中继日志名，默认xxxxxxxxxxxx-relay-bin</span>
<span class="token comment">#relay-log=relay-bin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启MySQL容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart slave01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>step4：在从机上配置主从关系：</strong></li></ul><p>在<strong>从机</strong>上执行以下SQL操作</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#进入容器：</span>
docker <span class="token keyword">exec</span> <span class="token operator">-</span>it slave01 env LANG<span class="token operator">=</span>C<span class="token punctuation">.</span>UTF<span class="token operator">-</span><span class="token number">8</span> <span class="token operator">/</span>bin<span class="token operator">/</span>bash

<span class="token comment">#进入容器内的mysql命令行</span>
mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p

<span class="token comment"># 关闭从节点服务</span>
stop slave <span class="token punctuation">;</span>

<span class="token comment"># 设置主节点</span>
CHANGE MASTER <span class="token keyword">TO</span> MASTER_HOST<span class="token operator">=</span><span class="token string">&#39;192.168.200.100&#39;</span><span class="token punctuation">,</span>MASTER_USER<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>MASTER_PASSWORD<span class="token operator">=</span><span class="token string">&#39;atguigu&#39;</span><span class="token punctuation">,</span>MASTER_PORT<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>MASTER_LOG_FILE<span class="token operator">=</span><span class="token string">&#39;binlog.000003&#39;</span><span class="token punctuation">,</span>MASTER_LOG_POS<span class="token operator">=</span><span class="token number">1357</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-启动主从同步" tabindex="-1"><a class="header-anchor" href="#_2-3-启动主从同步" aria-hidden="true">#</a> 2.3 启动主从同步</h3><p>启动从机的复制功能，执行SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">START</span> SLAVE<span class="token punctuation">;</span>

<span class="token comment">-- 查看状态（不需要分号）</span>
<span class="token keyword">SHOW</span> SLAVE <span class="token keyword">STATUS</span>\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>两个关键进程：</strong> 下面两个参数都是Yes，则说明主从配置成功！</p><p><img src="`+f+`" alt=""></p><h3 id="_2-4-实现主从同步" tabindex="-1"><a class="header-anchor" href="#_2-4-实现主从同步" aria-hidden="true">#</a> 2.4 实现主从同步</h3><p>在主机中执行以下SQL，在从机中查看数据库、表和数据是否已经被同步</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db_user<span class="token punctuation">;</span>
<span class="token keyword">USE</span> db_user<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_user <span class="token punctuation">(</span>
 id <span class="token keyword">BIGINT</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
 uname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> t_user<span class="token punctuation">(</span>uname<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;zhang3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> t_user<span class="token punctuation">(</span>uname<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span>@<span class="token variable">@hostname</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-停止和重置" tabindex="-1"><a class="header-anchor" href="#_2-5-停止和重置" aria-hidden="true">#</a> 2.5 停止和重置</h3><p>需要的时候，可以使用如下SQL语句</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 在从机上执行。功能说明：停止I/O 线程和SQL线程的操作。</span>
stop slave<span class="token punctuation">;</span> 

<span class="token comment">-- 在从机上执行。功能说明：用于删除SLAVE数据库的relaylog日志文件，并重新启用新的relaylog文件。</span>
reset slave<span class="token punctuation">;</span>

<span class="token comment">-- 在主机上执行。功能说明：删除所有的binglog日志文件，并将日志索引文件清空，重新开始所有新的日志文件。</span>
<span class="token comment">-- 用于第一次进行搭建主从库时，进行主库binlog初始化工作；</span>
reset master<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-常见问题" tabindex="-1"><a class="header-anchor" href="#_2-6-常见问题" aria-hidden="true">#</a> <strong>2.6 常见问题</strong></h3><h4 id="问题1" tabindex="-1"><a class="header-anchor" href="#问题1" aria-hidden="true">#</a> 问题1</h4><p>启动主从同步后，常见错误是<code>Slave_IO_Running： No 或者 Connecting</code> 的情况，此时查看下方的 <code>Last_IO_ERROR</code>错误日志，根据日志中显示</p><p>的错误信息在网上搜索解决方案即可</p><p><img src="`+I+`" alt=""></p><p><strong>典型的错误例如：</strong><code>Last_IO_Error: Got fatal error 1236 from master when reading data from binary log: &#39;Client requested master to start replication from position &gt; file size&#39;</code></p><p><strong>解决方案：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 在从机停止slave</span>
SLAVE STOP<span class="token punctuation">;</span>

<span class="token comment">-- 在主机查看mater状态</span>
<span class="token keyword">SHOW</span> MASTER <span class="token keyword">STATUS</span><span class="token punctuation">;</span>

<span class="token comment">-- 在主机刷新日志</span>
FLUSH LOGS<span class="token punctuation">;</span>

<span class="token comment">-- 再次在主机查看mater状态（会发现File和Position发生了变化）</span>

<span class="token keyword">SHOW</span> MASTER <span class="token keyword">STATUS</span><span class="token punctuation">;</span>

<span class="token comment">-- 修改从机连接主机的SQL，并重新连接即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="问题2" tabindex="-1"><a class="header-anchor" href="#问题2" aria-hidden="true">#</a> 问题2</h4><p>启动docker容器后提示 <code>WARNING: IPv4 forwarding is disabled. Networking will not work.</code></p><p><img src="`+x+`" alt=""></p><p>此错误，虽然不影响主从同步的搭建，但是如果想从远程客户端通过以下方式连接docker中的MySQL则没法连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>administrator<span class="token operator">&gt;</span>mysql <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.100.201 <span class="token parameter variable">-P</span> <span class="token number">3306</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方案：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#修改配置文件：</span>
<span class="token function">vim</span> /usr/lib/sysctl.d/00-system.conf
<span class="token comment">#追加</span>
<span class="token assign-left variable">net.ipv4.ip_forward</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment">#接着重启网络</span>
systemctl restart network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="第04章-shardingsphere-jdbc读写分离" tabindex="-1"><a class="header-anchor" href="#第04章-shardingsphere-jdbc读写分离" aria-hidden="true">#</a> 第04章 ShardingSphere-JDBC读写分离</h1><h2 id="_1-创建springboot程序" tabindex="-1"><a class="header-anchor" href="#_1-创建springboot程序" aria-hidden="true">#</a> 1 创建SpringBoot程序</h2><h3 id="_1-1-创建项目" tabindex="-1"><a class="header-anchor" href="#_1-1-创建项目" aria-hidden="true">#</a> 1.1 创建项目</h3><p>项目类型：Spring Initializr</p>`,86),M={href:"http://start.aliyun.com",title:"http://start.aliyun.com",target:"_blank",rel:"noopener noreferrer"},O=t(`<p>项目名：sharding-jdbc-demo</p><p>SpringBoot版本：2.3.7.RELEASE</p><h3 id="_1-2-配置pom" tabindex="-1"><a class="header-anchor" href="#_1-2-配置pom" aria-hidden="true">#</a> 1.2 配置pom</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.reporting.outputEncoding</span><span class="token punctuation">&gt;</span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.reporting.outputEncoding</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring-boot.version</span><span class="token punctuation">&gt;</span></span>3.0.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring-boot.version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.shardingsphere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>shardingsphere-jdbc-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.4.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.yaml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>snakeyaml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.33<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.glassfish.jaxb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jaxb-runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.0.30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${spring-boot.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${spring-boot.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mainClass</span><span class="token punctuation">&gt;</span></span>com.atguigu.shardingjdbcdemo.ShardingJdbcDemoApplication<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mainClass</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skip</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skip</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>repackage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>repackage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-创建实体类" tabindex="-1"><a class="header-anchor" href="#_1-3-创建实体类" aria-hidden="true">#</a> 1.3 创建实体类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">IdType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableId</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableName</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;t_user&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> uname<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-创建mapper" tabindex="-1"><a class="header-anchor" href="#_1-4-创建mapper" aria-hidden="true">#</a> 1.4 创建Mapper</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">BaseMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-application-properties" tabindex="-1"><a class="header-anchor" href="#_1-5-application-properties" aria-hidden="true">#</a> 1.5 application.properties</h3><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 由 ShardingSphere 提供的数据源接管数据库操作</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.shardingsphere.driver.ShardingSphereDriver</span>

<span class="token comment"># 指定专门针对 ShardingSphere 进行配置的配置文件</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:shardingsphere:classpath:shardingsphere.yaml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-shardingsphere-yaml" tabindex="-1"><a class="header-anchor" href="#_1-6-shardingsphere-yaml" aria-hidden="true">#</a> 1.6 shardingsphere.yaml</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mode</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> Standalone
  <span class="token key atrule">repository</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> JDBC

<span class="token key atrule">dataSources</span><span class="token punctuation">:</span>
  <span class="token key atrule">write_ds</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3306/db_user
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu
  <span class="token key atrule">read_ds_0</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3307/db_user
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu
  <span class="token key atrule">read_ds_1</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3308/db_user
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu

<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token tag">!READWRITE_SPLITTING</span>
    <span class="token key atrule">dataSources</span><span class="token punctuation">:</span>
      <span class="token key atrule">readwrite_ds</span><span class="token punctuation">:</span>
        <span class="token key atrule">writeDataSourceName</span><span class="token punctuation">:</span> write_ds
        <span class="token key atrule">readDataSourceNames</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> read_ds_0
          <span class="token punctuation">-</span> read_ds_1
        <span class="token key atrule">transactionalReadQueryStrategy</span><span class="token punctuation">:</span> PRIMARY
        <span class="token key atrule">loadBalancerName</span><span class="token punctuation">:</span> round_robin
    <span class="token key atrule">loadBalancers</span><span class="token punctuation">:</span>
      <span class="token key atrule">random</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> RANDOM
      <span class="token key atrule">round_robin</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> ROUND_ROBIN
      <span class="token key atrule">weight</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> WEIGHT
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">read_ds_0</span><span class="token punctuation">:</span> <span class="token number">1</span>
          <span class="token key atrule">read_ds_1</span><span class="token punctuation">:</span> <span class="token number">2</span>

<span class="token key atrule">props</span><span class="token punctuation">:</span>
  <span class="token key atrule">sql-show</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-主启动类" tabindex="-1"><a class="header-anchor" href="#_1-7-主启动类" aria-hidden="true">#</a> 1.7 主启动类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShardingMainType</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ShardingMainType</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_2-测试" tabindex="-1"><a class="header-anchor" href="#_2-测试" aria-hidden="true">#</a> 2 测试</h2><h3 id="_2-1-写入操作测试" tabindex="-1"><a class="header-anchor" href="#_2-1-写入操作测试" aria-hidden="true">#</a> 2.1 写入操作测试</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">UserMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReadwriteTest</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 写入数据的测试
   */</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setUname</span><span class="token punctuation">(</span><span class="token string">&quot;张三丰&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-事务测试" tabindex="-1"><a class="header-anchor" href="#_2-2-事务测试" aria-hidden="true">#</a> 2.2 事务测试</h3><p>为了保证主从库间的事务一致性，避免跨服务的分布式事务，ShardingSphere-JDBC的<code>主从模型中，事务中的数据读写均用主库</code>。<br></p><ul><li>ShardingSphere默认：并没有设定事务中的读操作仅访问主库</li><li>所以为了保证上述效果，需要我们自己手动设定</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 指定事务中读操作采用的策略：PRIMARY 表示在事务中读操作访问主库</span>
<span class="token key atrule">transactionalReadQueryStrategy</span><span class="token punctuation">:</span> PRIMARY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不添加@Transactional：insert对主库操作，select对从库操作</li><li>添加@Transactional：则insert和select均对主库操作</li><li><strong>注意：</strong> 在JUnit环境下的@Transactional注解，默认情况下就会对事务进行回滚（即使在没加注解@Rollback，也会对事务回滚）</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 事务测试
 */</span>
<span class="token annotation punctuation">@Transactional</span><span class="token comment">//开启事务</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testTrans</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span><span class="token function">setUname</span><span class="token punctuation">(</span><span class="token string">&quot;铁锤&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> eachUser <span class="token operator">:</span> users<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;eachUser = &quot;</span> <span class="token operator">+</span> eachUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-负载均衡测试" tabindex="-1"><a class="header-anchor" href="#_2-3-负载均衡测试" aria-hidden="true">#</a> 2.3 负载均衡测试</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * 读数据测试
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users1 <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> users1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user = &quot;</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users2 <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//执行第二次测试负载均衡</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> users2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user = &quot;</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 负载均衡测试
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLoadBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 先在主库插入 insert into t_user(uname) values (@@hostname);</span>
        <span class="token comment">// 数据同步方式设置为 statement，让从库和主库容易区分</span>
        <span class="token comment">// 然后专门查询刚刚插入的记录</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> uname <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;uname = &quot;</span> <span class="token operator">+</span> uname<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在web请求中测试负载均衡</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/userController&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试负载均衡策略
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;selectAll&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        users<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误" aria-hidden="true">#</a> 常见错误</h3><p><img src="`+T+`" alt=""></p><p>ShardingSphere-JDBC远程连接的方式默认的密码加密规则是：mysql_native_password</p><p>因此需要在服务器端修改服务器的密码加密规则，如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;1234&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="第05章-shardingsphere-jdbc垂直分片" tabindex="-1"><a class="header-anchor" href="#第05章-shardingsphere-jdbc垂直分片" aria-hidden="true">#</a> 第05章 ShardingSphere-JDBC垂直分片</h1><h2 id="_1-准备服务器" tabindex="-1"><a class="header-anchor" href="#_1-准备服务器" aria-hidden="true">#</a> 1 准备服务器</h2><p>服务器规划：使用<code>docker</code>方式创建如下容器</p><p><img src="`+A+`" alt=""></p><ul><li>服务器：容器名<code>server-user</code>，端口 <code>3301</code></li><li>服务器：容器名<code>server-order</code>，端口<code>3302</code></li></ul><h3 id="_1-1-创建server-user容器" tabindex="-1"><a class="header-anchor" href="#_1-1-创建server-user容器" aria-hidden="true">#</a> 1.1 创建server-user容器</h3><ul><li><strong>step1：创建容器：</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3301</span>:3306 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql_user_conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql_user_data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>atguigu <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> server-user <span class="token punctuation">\\</span>
mysql:8.0.29

ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;1234&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>step2：创建数据库：</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#进入容器：</span>
docker <span class="token keyword">exec</span> <span class="token operator">-</span>it server<span class="token operator">-</span><span class="token keyword">user</span> env LANG<span class="token operator">=</span>C<span class="token punctuation">.</span>UTF<span class="token operator">-</span><span class="token number">8</span> <span class="token operator">/</span>bin<span class="token operator">/</span>bash
<span class="token comment">#进入容器内的mysql命令行</span>
mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p

<span class="token comment"># 创建数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db_user<span class="token punctuation">;</span>
<span class="token keyword">USE</span> db_user<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_user <span class="token punctuation">(</span>
 id <span class="token keyword">BIGINT</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
 uname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-创建server-order容器" tabindex="-1"><a class="header-anchor" href="#_1-2-创建server-order容器" aria-hidden="true">#</a> 1.2 创建server-order容器</h3><ul><li><strong>step1：创建容器：</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3302</span>:3306 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql_order_conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql_order_data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>atguigu <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> server-order <span class="token punctuation">\\</span>
mysql:8.0.29

ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;1234&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>step2：创建数据库：</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#进入容器：</span>
docker <span class="token keyword">exec</span> <span class="token operator">-</span>it server<span class="token operator">-</span><span class="token keyword">order</span> env LANG<span class="token operator">=</span>C<span class="token punctuation">.</span>UTF<span class="token operator">-</span><span class="token number">8</span> <span class="token operator">/</span>bin<span class="token operator">/</span>bash

<span class="token comment">#进入容器内的mysql命令行</span>
mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p

<span class="token comment"># 创建order数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db_order<span class="token punctuation">;</span>
<span class="token keyword">USE</span> db_order<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_order <span class="token punctuation">(</span>
  id <span class="token keyword">BIGINT</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  order_no <span class="token keyword">int</span><span class="token punctuation">,</span>
  user_id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
  amount <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-程序实现" tabindex="-1"><a class="header-anchor" href="#_2-程序实现" aria-hidden="true">#</a> 2 程序实现</h2><h3 id="_2-1-创建实体类" tabindex="-1"><a class="header-anchor" href="#_2-1-创建实体类" aria-hidden="true">#</a> 2.1 创建实体类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">IdType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableId</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableName</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;t_order&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> orderNo<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> userId<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> amount<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-创建mapper" tabindex="-1"><a class="header-anchor" href="#_2-2-创建mapper" aria-hidden="true">#</a> 2.2 创建Mapper</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Order</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">BaseMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OrderMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Order</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-配置垂直分片" tabindex="-1"><a class="header-anchor" href="#_2-3-配置垂直分片" aria-hidden="true">#</a> 2.3 配置垂直分片</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mode</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> Standalone
  <span class="token key atrule">repository</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> JDBC

<span class="token key atrule">dataSources</span><span class="token punctuation">:</span>
  <span class="token key atrule">write_ds</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3306/db_user
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu
  <span class="token key atrule">read_ds_0</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3307/db_user
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu
  <span class="token key atrule">read_ds_1</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3308/db_user
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu
  <span class="token key atrule">server-user</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3301/db_user<span class="token punctuation">?</span>useSSL=false<span class="token important">&amp;characterEncoding=UTF8</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu
  <span class="token key atrule">server-order</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3302/db_order<span class="token punctuation">?</span>useSSL=false<span class="token important">&amp;characterEncoding=UTF8</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu

<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token tag">!READWRITE_SPLITTING</span>
    <span class="token key atrule">dataSources</span><span class="token punctuation">:</span>
      <span class="token key atrule">readwrite_ds</span><span class="token punctuation">:</span>
        <span class="token key atrule">writeDataSourceName</span><span class="token punctuation">:</span> write_ds
        <span class="token key atrule">readDataSourceNames</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> read_ds_0
          <span class="token punctuation">-</span> read_ds_1
        <span class="token key atrule">transactionalReadQueryStrategy</span><span class="token punctuation">:</span> PRIMARY
        <span class="token key atrule">loadBalancerName</span><span class="token punctuation">:</span> weight
    <span class="token key atrule">loadBalancers</span><span class="token punctuation">:</span>
      <span class="token key atrule">random</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> RANDOM
      <span class="token key atrule">round_robin</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> ROUND_ROBIN
      <span class="token key atrule">weight</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> WEIGHT
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">read_ds_0</span><span class="token punctuation">:</span> <span class="token number">1</span>
          <span class="token key atrule">read_ds_1</span><span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token punctuation">-</span> <span class="token tag">!SHARDING</span>
    <span class="token key atrule">tables</span><span class="token punctuation">:</span>
      <span class="token key atrule">t_user</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>user.t_user
      <span class="token key atrule">t_order</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order.t_order

<span class="token key atrule">props</span><span class="token punctuation">:</span>
  <span class="token key atrule">sql-show</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-测试垂直分片" tabindex="-1"><a class="header-anchor" href="#_3-测试垂直分片" aria-hidden="true">#</a> 3 测试垂直分片</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShardingTest</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">OrderMapper</span> orderMapper<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 垂直分片：插入数据测试
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsertOrderAndUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setUname</span><span class="token punctuation">(</span><span class="token string">&quot;强哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        order<span class="token punctuation">.</span><span class="token function">setOrderNo</span><span class="token punctuation">(</span><span class="token number">10000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        order<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        order<span class="token punctuation">.</span><span class="token function">setAmount</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 垂直分片：查询数据测试
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectFromOrderAndUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Order</span> order <span class="token operator">=</span> orderMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="第06章-shardingsphere-jdbc水平分片" tabindex="-1"><a class="header-anchor" href="#第06章-shardingsphere-jdbc水平分片" aria-hidden="true">#</a> 第06章 ShardingSphere-JDBC水平分片</h1><p><strong>分片键</strong>：通过分片键结合分片算法，来决定数据到底应该存储哪一个数据库表中。</p><h2 id="_1-准备服务器-1" tabindex="-1"><a class="header-anchor" href="#_1-准备服务器-1" aria-hidden="true">#</a> 1 准备服务器</h2><p>服务器规划：使用<code>docker</code>方式创建如下容器</p><p><img src="`+N+`" alt=""></p><ul><li>服务器：容器名<code>server-order0</code>，端口<code>3310</code></li><li>服务器：容器名<code>server-order1</code>，端口<code>3311</code></li></ul><h3 id="_1-1-创建server-order0容器" tabindex="-1"><a class="header-anchor" href="#_1-1-创建server-order0容器" aria-hidden="true">#</a> 1.1 创建server-order0容器</h3><ul><li><strong>step1：创建容器：</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3310</span>:3306 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql_order0_conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql_order0_data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>atguigu <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> server-order0 <span class="token punctuation">\\</span>
mysql:8.0.29

ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;1234&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>step3：创建数据库：</strong></li></ul><p><code>注意：</code>水平分片的id需要在业务层实现，<code>不能依赖数据库的主键自增</code></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#进入容器：</span>
docker <span class="token keyword">exec</span> <span class="token operator">-</span>it server<span class="token operator">-</span>order0 env LANG<span class="token operator">=</span>C<span class="token punctuation">.</span>UTF<span class="token operator">-</span><span class="token number">8</span> <span class="token operator">/</span>bin<span class="token operator">/</span>bash

<span class="token comment">#进入容器内的mysql命令行</span>
mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p

<span class="token comment"># 创建对应的数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db_order<span class="token punctuation">;</span>
<span class="token keyword">USE</span> db_order<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_order0 <span class="token punctuation">(</span>
  id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
  order_no <span class="token keyword">int</span><span class="token punctuation">,</span>
  user_id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
  amount <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_order1 <span class="token punctuation">(</span>
  id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
  order_no <span class="token keyword">int</span><span class="token punctuation">,</span>
  user_id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
  amount <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-创建server-order1容器" tabindex="-1"><a class="header-anchor" href="#_1-2-创建server-order1容器" aria-hidden="true">#</a> 1.2 创建server-order1容器</h3><ul><li><strong>step1：创建容器：</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3311</span>:3306 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql_order1_conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> mysql_order1_data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>atguigu <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> server-order1 <span class="token punctuation">\\</span>
mysql:8.0.29

ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;1234&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>step2：创建数据库：</strong> 和server-order0相同</li></ul><p><code>注意：</code>水平分片的id需要在业务层实现，不能依赖数据库的主键自增</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 创建对应的数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db_order<span class="token punctuation">;</span>
<span class="token keyword">USE</span> db_order<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_order0 <span class="token punctuation">(</span>
  id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
  order_no <span class="token keyword">int</span><span class="token punctuation">,</span>
  user_id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
  amount <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_order1 <span class="token punctuation">(</span>
  id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
  order_no <span class="token keyword">int</span><span class="token punctuation">,</span>
  user_id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
  amount <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-基本水平分片" tabindex="-1"><a class="header-anchor" href="#_2-基本水平分片" aria-hidden="true">#</a> 2 基本水平分片</h2><h3 id="_2-1-数据源配置" tabindex="-1"><a class="header-anchor" href="#_2-1-数据源配置" aria-hidden="true">#</a> 2.1 数据源配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server-order0</span><span class="token punctuation">:</span>
  <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
  <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
  <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
  <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3310/db_order<span class="token punctuation">?</span>useSSL=false<span class="token important">&amp;characterEncoding=UTF8</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu
<span class="token key atrule">server-order1</span><span class="token punctuation">:</span>
  <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
  <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
  <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
  <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3311/db_order<span class="token punctuation">?</span>useSSL=false<span class="token important">&amp;characterEncoding=UTF8</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-标椎分片表配置" tabindex="-1"><a class="header-anchor" href="#_2-3-标椎分片表配置" aria-hidden="true">#</a> 2.3 标椎分片表配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token tag">!READWRITE_SPLITTING</span>
    <span class="token key atrule">dataSources</span><span class="token punctuation">:</span>
      <span class="token key atrule">readwrite_ds</span><span class="token punctuation">:</span>
        <span class="token key atrule">writeDataSourceName</span><span class="token punctuation">:</span> write_ds
        <span class="token key atrule">readDataSourceNames</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> read_ds_0
          <span class="token punctuation">-</span> read_ds_1
        <span class="token key atrule">transactionalReadQueryStrategy</span><span class="token punctuation">:</span> PRIMARY
        <span class="token key atrule">loadBalancerName</span><span class="token punctuation">:</span> weight
    <span class="token key atrule">loadBalancers</span><span class="token punctuation">:</span>
      <span class="token key atrule">random</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> RANDOM
      <span class="token key atrule">round_robin</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> ROUND_ROBIN
      <span class="token key atrule">weight</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> WEIGHT
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">read_ds_0</span><span class="token punctuation">:</span> <span class="token number">1</span>
          <span class="token key atrule">read_ds_1</span><span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token punctuation">-</span> <span class="token tag">!SHARDING</span>
    <span class="token key atrule">tables</span><span class="token punctuation">:</span>
      <span class="token key atrule">t_user</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>user.t_user
      <span class="token key atrule">t_order</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order0.t_order0<span class="token punctuation">,</span>server<span class="token punctuation">-</span>order0.t_order1<span class="token punctuation">,</span>server<span class="token punctuation">-</span>order1.t_order0<span class="token punctuation">,</span>server<span class="token punctuation">-</span>order1.t_order1
        <span class="token key atrule">databaseStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> user_id
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_db_alg
        <span class="token key atrule">tableStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> order_no
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_alg
    <span class="token key atrule">shardingAlgorithms</span><span class="token punctuation">:</span>
      <span class="token key atrule">order_db_alg</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span> user_id % 2<span class="token punctuation">}</span>
      <span class="token key atrule">order_alg</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> t_order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span> order_no % 2<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改Order实体类的主键策略：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//@TableId(type = IdType.AUTO)//依赖数据库的主键自增策略</span>
<span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">ASSIGN_ID</span><span class="token punctuation">)</span><span class="token comment">//分布式id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：保留上面配置中的一个分片表节点分别进行测试，检查每个分片节点是否可用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 水平分片：插入数据测试
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsertOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    order<span class="token punctuation">.</span><span class="token function">setOrderNo</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    order<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    order<span class="token punctuation">.</span><span class="token function">setAmount</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    orderMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-行表达式" tabindex="-1"><a class="header-anchor" href="#_2-4-行表达式" aria-hidden="true">#</a> 2.4 行表达式</h3><p>优化上一步的分片表配置</p>`,86),B={href:"https://shardingsphere.apache.org/document/5.1.1/cn/features/sharding/concept/inline-expression/",target:"_blank",rel:"noopener noreferrer"},C=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token tag">!SHARDING</span>
    <span class="token key atrule">tables</span><span class="token punctuation">:</span>
      <span class="token key atrule">t_user</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>user.t_user
      <span class="token key atrule">t_order</span><span class="token punctuation">:</span>
        <span class="token comment"># 把当前 t_order 拆分后所有表都列出来</span>
        <span class="token comment"># actualDataNodes: server-order0.t_order0,server-order0.t_order1,server-order1.t_order0,server-order1.t_order1</span>
        <span class="token comment"># 使用行表达式简化节点指定方式</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order$<span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>.t_order$<span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-分布式序列算法" tabindex="-1"><a class="header-anchor" href="#_2-5-分布式序列算法" aria-hidden="true">#</a> 2.5 分布式序列算法</h3><p><strong>雪花算法：</strong></p>`,3),U={href:"https://shardingsphere.apache.org/document/5.1.1/cn/features/sharding/concept/key-generator/",target:"_blank",rel:"noopener noreferrer"},G=n("p",null,"水平分片需要关注全局序列，因为不能简单的使用基于数据库的主键自增。",-1),H=n("p",null,"分库分表以后表的主键字段就不能使用自增策略，因此可能出现重复数据。",-1),P=n("p",null,"所以分布式系统中，有了单独生成主键的生成策略：",-1),Q=n("p",null,"1、uuid",-1),Y=n("p",null,"2、redis",-1),z=n("p",null,"3、雪花算法(shardingsphere：SnowflakeKeyGenerateAlgorithm)",-1),W={href:"https://so.csdn.net/so/search?q=%E9%9B%AA%E8%8A%B1%E7%AE%97%E6%B3%95&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},F=t('<p>生成的64位ID结构如下：<br></p><p><img src="'+j+`" alt="image-20230118232739869"></p><p>雪花算法是 64 位 的二进制，一共包含了四部分：</p><ul><li>第一部分：占用1个二进制位，是符号位，也就是最高位，始终是0，没有任何意义，因为要是唯一计算机二进制补码中就是负数，0才是正数。</li><li>第二部分：占用41个二进制位，是时间戳，具体到毫秒，41位的二进制可以使用69年，如果时间计算基准年为1970年，那么到2039年就不能再用了，当前也可以指定一个基准年。</li><li>第三部分：占用10个二进制位，是机器标识，可以全部用作机器ID，也可以用来标识机房ID + 机器ID，10位最多可以表示1024台机器。</li><li>第四部分：占用12个二进制位，是计数序列号，也就是同一台机器上同一时间，理论上还可以同时生成不同的ID，12位的序列号能够区分出4096个ID。</li></ul><p>这里有两种方案：一种是基于MyBatisPlus的id策略；一种是ShardingSphere-JDBC的全局序列配置。</p><p><code>基于MyBatisPlus的id策略：</code>将Order类的id设置成如下形式</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">ASSIGN_ID</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>基于ShardingSphere-JDBC的全局序列配置</code>：和前面的MyBatisPlus的策略二选一</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token tag">!SHARDING</span>
    <span class="token key atrule">tables</span><span class="token punctuation">:</span>
      <span class="token key atrule">t_user</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>user.t_user
      <span class="token key atrule">t_order</span><span class="token punctuation">:</span>
        <span class="token comment"># 把当前 t_order 拆分后所有表都列出来</span>
        <span class="token comment"># actualDataNodes: server-order0.t_order0,server-order0.t_order1,server-order1.t_order0,server-order1.t_order1</span>
        <span class="token comment"># 使用行表达式简化节点指定方式</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order$<span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>.t_order$<span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>
        <span class="token comment"># 数据库级别的拆分策略</span>
        <span class="token key atrule">databaseStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token comment"># 数据分片所依赖的字段</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> user_id
            <span class="token comment"># 具体的分片算法，引用一个我们自己起的名字</span>
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_db_alg
        <span class="token comment"># 表级别的拆分策略</span>
        <span class="token key atrule">tableStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> order_no
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_alg
        <span class="token comment"># 指定主键生成策略</span>
        <span class="token key atrule">keyGenerateStrategy</span><span class="token punctuation">:</span>
          <span class="token comment"># 指定使用策略的主键字段名</span>
          <span class="token key atrule">column</span><span class="token punctuation">:</span> id
          <span class="token comment"># 具体主键生成策略名称（我们自己起的名字）</span>
          <span class="token key atrule">keyGeneratorName</span><span class="token punctuation">:</span> alg_snowflake
    <span class="token key atrule">shardingAlgorithms</span><span class="token punctuation">:</span>
      <span class="token comment"># 给具体的拆分策略由开发人员我们自己起个名字</span>
      <span class="token key atrule">order_db_alg</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token comment"># 计算如何分流的具体表达式</span>
          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span> user_id % 2<span class="token punctuation">}</span>
      <span class="token key atrule">order_alg</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> t_order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span> order_no % 2<span class="token punctuation">}</span>
    <span class="token comment"># 具体的主键生成器</span>
    <span class="token key atrule">keyGenerators</span><span class="token punctuation">:</span>
      <span class="token comment"># 我们自己设定一个名字，便于在需要的地方引用</span>
      <span class="token key atrule">alg_snowflake</span><span class="token punctuation">:</span>
        <span class="token comment"># 指定具体的算法名称，SNOWFLAKE 代表雪花算法</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> SNOWFLAKE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，需要将实体类中的id策略修改成以下形式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//当配置了shardingsphere-jdbc的分布式序列时，自动使用shardingsphere-jdbc的分布式序列</span>
<span class="token comment">//当没有配置shardingsphere-jdbc的分布式序列时，自动依赖数据库的主键自增策略</span>
<span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-多表关联" tabindex="-1"><a class="header-anchor" href="#_3-多表关联" aria-hidden="true">#</a> 3 多表关联</h2><h3 id="_3-1-创建关联表" tabindex="-1"><a class="header-anchor" href="#_3-1-创建关联表" aria-hidden="true">#</a> 3.1 创建关联表</h3><p>在<code>server-order0、server-order1</code>服务器中分别创建两张订单详情表<code>t_order_item0、t_order_item1</code></p><p>我们希望<code>同一个用户的订单表和订单详情表中的数据都在同一个数据源中，避免跨库关联</code>，因此这两张表我们使用<strong>相同的分片策略</strong>。</p><p>那么在<code>t_order_item</code>中我们也需要创建<code>order_no</code>和<code>user_id</code>这两个分片键</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_order_item0<span class="token punctuation">(</span>
    id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    order_no <span class="token keyword">int</span><span class="token punctuation">,</span>
    user_id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    price <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>count<span class="token punctuation">\`</span></span> <span class="token keyword">INT</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_order_item1<span class="token punctuation">(</span>
    id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    order_no <span class="token keyword">int</span><span class="token punctuation">,</span>
    user_id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    price <span class="token keyword">DECIMAL</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>count<span class="token punctuation">\`</span></span> <span class="token keyword">INT</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-创建实体类" tabindex="-1"><a class="header-anchor" href="#_3-2-创建实体类" aria-hidden="true">#</a> 3.2 创建实体类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">IdType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableId</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableName</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;t_order_item&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderItem</span> <span class="token punctuation">{</span>
    <span class="token comment">//当配置了shardingsphere-jdbc的分布式序列时，自动使用shardingsphere-jdbc的分布式序列</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> orderNo<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> userId<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> price<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-创建mapper" tabindex="-1"><a class="header-anchor" href="#_3-3-创建mapper" aria-hidden="true">#</a> 3.3 创建Mapper</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shargingjdbcdemo<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">OrderItem</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OrderItemMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderItem</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-配置关联表" tabindex="-1"><a class="header-anchor" href="#_3-4-配置关联表" aria-hidden="true">#</a> 3.4 配置关联表</h3><p>t_order_item的分片表、分片策略、分布式序列策略和t_order一致</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token tag">!SHARDING</span>
    <span class="token key atrule">tables</span><span class="token punctuation">:</span>
      <span class="token key atrule">t_user</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>user.t_user
      <span class="token key atrule">t_order</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>.t_order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>
        <span class="token key atrule">databaseStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> user_id
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_db_alg
        <span class="token key atrule">tableStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> order_no
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_alg
        <span class="token key atrule">keyGenerateStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">column</span><span class="token punctuation">:</span> id
          <span class="token key atrule">keyGeneratorName</span><span class="token punctuation">:</span> alg_snowflake
      <span class="token key atrule">t_order_item</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>.t_order_item$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>
        <span class="token key atrule">databaseStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> user_id
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_db_alg
        <span class="token key atrule">keyGenerateStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">column</span><span class="token punctuation">:</span> id
          <span class="token key atrule">keyGeneratorName</span><span class="token punctuation">:</span> alg_snowflake
        <span class="token key atrule">tableStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> order_no
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_item_alg
    <span class="token key atrule">shardingAlgorithms</span><span class="token punctuation">:</span>
      <span class="token key atrule">order_db_alg</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span> user_id % 2<span class="token punctuation">}</span>
      <span class="token key atrule">order_alg</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> t_order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span> order_no % 2<span class="token punctuation">}</span>
      <span class="token key atrule">order_item_alg</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> t_order_item$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span> order_no % 2<span class="token punctuation">}</span>
    <span class="token key atrule">keyGenerators</span><span class="token punctuation">:</span>
      <span class="token key atrule">alg_snowflake</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> SNOWFLAKE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-测试插入数据" tabindex="-1"><a class="header-anchor" href="#_3-5-测试插入数据" aria-hidden="true">#</a> 3.5 测试插入数据</h3><p>同一个用户的订单表和订单详情表中的数据都在同一个数据源中，避免跨库关联</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试关联表插入
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsertOrderAndOrderItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

          <span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          order<span class="token punctuation">.</span><span class="token function">setOrderNo</span><span class="token punctuation">(</span><span class="token number">100000</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
          order<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          orderMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">long</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">OrderItem</span> orderItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderItem<span class="token punctuation">.</span><span class="token function">setOrderNo</span><span class="token punctuation">(</span><span class="token number">100000</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderItem<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderItem<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderItem<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderItemMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>orderItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

          <span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          order<span class="token punctuation">.</span><span class="token function">setOrderNo</span><span class="token punctuation">(</span><span class="token number">100000</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
          order<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          orderMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">long</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">OrderItem</span> orderItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderItem<span class="token punctuation">.</span><span class="token function">setOrderNo</span><span class="token punctuation">(</span><span class="token number">100000</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderItem<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderItem<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderItem<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderItemMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>orderItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-绑定表" tabindex="-1"><a class="header-anchor" href="#_4-绑定表" aria-hidden="true">#</a> 4 绑定表</h2><p><code>绑定表：</code>指分片规则一致的一组分片表。 使用绑定表进行多表关联查询时，必须使用分片键进行关联，否则会出现笛卡尔积关联或跨库关联。</p><p><strong>需求：</strong> 查询每个订单的订单号和总订单金额</p><h3 id="_4-1-创建vo对象" tabindex="-1"><a class="header-anchor" href="#_4-1-创建vo对象" aria-hidden="true">#</a> 4.1 创建VO对象</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderVo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> orderNo<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> amount<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-添加mapper方法" tabindex="-1"><a class="header-anchor" href="#_4-2-添加mapper方法" aria-hidden="true">#</a> 4.2 添加Mapper方法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OrderMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Order</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;SELECT o.order_no, SUM(i.price * i.count) AS amount&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;FROM t_order o JOIN t_order_item i ON o.order_no = i.order_no&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;GROUP BY o.order_no&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderVo</span><span class="token punctuation">&gt;</span></span> <span class="token function">getOrderAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-测试关联查询" tabindex="-1"><a class="header-anchor" href="#_4-3-测试关联查询" aria-hidden="true">#</a> 4.3 测试关联查询</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * 测试关联表查询
     */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetOrderAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderVo</span><span class="token punctuation">&gt;</span></span> orderAmountList <span class="token operator">=</span> orderMapper<span class="token punctuation">.</span><span class="token function">getOrderAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    orderAmountList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-配置绑定表" tabindex="-1"><a class="header-anchor" href="#_4-4-配置绑定表" aria-hidden="true">#</a> 4.4 配置绑定表</h3><p>在原来水平分片配置的基础上添加如下配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">rules</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token tag">!SHARDING</span>
        <span class="token key atrule">bindingTables</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> t_order<span class="token punctuation">,</span>t_order_item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完绑定表后再次进行关联查询的测试：</p><ul><li><strong>如果不配置绑定表：测试的结果为8个SQL。</strong> 多表关联查询会出现笛卡尔积关联。</li><li><strong>如果配置绑定表：测试的结果为4个SQL。</strong> 多表关联查询不会出现笛卡尔积关联，关联查询效率将大大提升。</li></ul><br><h2 id="_5-广播表" tabindex="-1"><a class="header-anchor" href="#_5-广播表" aria-hidden="true">#</a> 5 广播表</h2><h3 id="_5-1-什么是广播表" tabindex="-1"><a class="header-anchor" href="#_5-1-什么是广播表" aria-hidden="true">#</a> 5.1 什么是广播表</h3><p><strong>指所有的分片数据源中都存在的表，表结构及其数据在每个数据库中均完全一致</strong>。 适用于数据量不大且需要与海量数据的表进行关联查询的场景，例如：字典表。</p><p>广播具有以下特性：</p><p>（1）插入、更新操作会实时在所有节点上执行，保持各个分片的数据一致性</p><p>（2）查询操作，只从一个节点获取</p><p>（3）可以跟任何一个表进行 JOIN 操作</p><h3 id="_5-2-创建广播表" tabindex="-1"><a class="header-anchor" href="#_5-2-创建广播表" aria-hidden="true">#</a> 5.2 创建广播表</h3><p>在server-order0、server-order1和server-user服务器中分别创建t_dict表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_dict<span class="token punctuation">(</span>
    id <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    dict_type <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-程序实现" tabindex="-1"><a class="header-anchor" href="#_5-3-程序实现" aria-hidden="true">#</a> 5.3 程序实现</h3><h4 id="_5-3-1-创建实体类" tabindex="-1"><a class="header-anchor" href="#_5-3-1-创建实体类" aria-hidden="true">#</a> 5.3.1 创建实体类</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;t_dict&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dict</span> <span class="token punctuation">{</span>
    <span class="token comment">//可以使用MyBatisPlus的雪花算法</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">ASSIGN_ID</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> dictType<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-2-创建mapper" tabindex="-1"><a class="header-anchor" href="#_5-3-2-创建mapper" aria-hidden="true">#</a> 5.3.2 创建Mapper</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>shardingjdbcdemo<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DictMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Dict</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-3、配置广播表" tabindex="-1"><a class="header-anchor" href="#_5-3-3、配置广播表" aria-hidden="true">#</a> 5.3.3、配置广播表</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mode</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> Standalone
  <span class="token key atrule">repository</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> JDBC

<span class="token key atrule">dataSources</span><span class="token punctuation">:</span>
  <span class="token comment">#  write_ds:</span>
  <span class="token comment">#    dataSourceClassName: com.zaxxer.hikari.HikariDataSource</span>
  <span class="token comment">#    driverClassName: com.mysql.jdbc.Driver</span>
  <span class="token comment">#    jdbcUrl: jdbc:mysql://192.168.200.100:3306/db_user</span>
  <span class="token comment">#    username: root</span>
  <span class="token comment">#    password: atguigu</span>
  <span class="token comment">#  read_ds_0:</span>
  <span class="token comment">#    dataSourceClassName: com.zaxxer.hikari.HikariDataSource</span>
  <span class="token comment">#    driverClassName: com.mysql.jdbc.Driver</span>
  <span class="token comment">#    jdbcUrl: jdbc:mysql://192.168.200.100:3307/db_user</span>
  <span class="token comment">#    username: root</span>
  <span class="token comment">#    password: atguigu</span>
  <span class="token comment">#  read_ds_1:</span>
  <span class="token comment">#    dataSourceClassName: com.zaxxer.hikari.HikariDataSource</span>
  <span class="token comment">#    driverClassName: com.mysql.jdbc.Driver</span>
  <span class="token comment">#    jdbcUrl: jdbc:mysql://192.168.200.100:3308/db_user</span>
  <span class="token comment">#    username: root</span>
  <span class="token comment">#    password: atguigu</span>
  <span class="token key atrule">server-user</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3301/db_user<span class="token punctuation">?</span>useSSL=false<span class="token important">&amp;characterEncoding=UTF8</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu
  <span class="token comment">#  server-order:</span>
  <span class="token comment">#    dataSourceClassName: com.zaxxer.hikari.HikariDataSource</span>
  <span class="token comment">#    type: com.zaxxer.hikari.HikariDataSource</span>
  <span class="token comment">#    driverClassName: com.mysql.jdbc.Driver</span>
  <span class="token comment">#    jdbcUrl: jdbc:mysql://192.168.200.100:3302/db_order?useSSL=false&amp;characterEncoding=UTF8</span>
  <span class="token comment">#    username: root</span>
  <span class="token comment">#    password: atguigu</span>
  <span class="token key atrule">server-order0</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3310/db_order<span class="token punctuation">?</span>useSSL=false<span class="token important">&amp;characterEncoding=UTF8</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu
  <span class="token key atrule">server-order1</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataSourceClassName</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">jdbcUrl</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.200.100<span class="token punctuation">:</span>3311/db_order<span class="token punctuation">?</span>useSSL=false<span class="token important">&amp;characterEncoding=UTF8</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> atguigu

<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token comment">#  - !READWRITE_SPLITTING</span>
  <span class="token comment">#    dataSources:</span>
  <span class="token comment">#      readwrite_ds:</span>
  <span class="token comment">#        writeDataSourceName: write_ds</span>
  <span class="token comment">#        readDataSourceNames:</span>
  <span class="token comment">#          - read_ds_0</span>
  <span class="token comment">#          - read_ds_1</span>
  <span class="token comment">#        transactionalReadQueryStrategy: PRIMARY</span>
  <span class="token comment">#        loadBalancerName: weight</span>
  <span class="token comment">#    loadBalancers:</span>
  <span class="token comment">#      random:</span>
  <span class="token comment">#        type: RANDOM</span>
  <span class="token comment">#      round_robin:</span>
  <span class="token comment">#        type: ROUND_ROBIN</span>
  <span class="token comment">#      weight:</span>
  <span class="token comment">#        type: WEIGHT</span>
  <span class="token comment">#        props:</span>
  <span class="token comment">#          read_ds_0: 1</span>
  <span class="token comment">#          read_ds_1: 4</span>
  <span class="token punctuation">-</span> <span class="token tag">!SHARDING</span>
    <span class="token key atrule">tables</span><span class="token punctuation">:</span>
      <span class="token key atrule">t_user</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>user.t_user
      <span class="token key atrule">t_order</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>.t_order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>
        <span class="token key atrule">databaseStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> user_id
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_db_alg
        <span class="token key atrule">tableStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> order_no
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_alg
        <span class="token key atrule">keyGenerateStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">column</span><span class="token punctuation">:</span> id
          <span class="token key atrule">keyGeneratorName</span><span class="token punctuation">:</span> alg_snowflake
      <span class="token key atrule">t_order_item</span><span class="token punctuation">:</span>
        <span class="token key atrule">actualDataNodes</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>.t_order_item$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>
        <span class="token key atrule">databaseStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> user_id
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_db_alg
        <span class="token key atrule">keyGenerateStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">column</span><span class="token punctuation">:</span> id
          <span class="token key atrule">keyGeneratorName</span><span class="token punctuation">:</span> alg_snowflake
        <span class="token key atrule">tableStrategy</span><span class="token punctuation">:</span>
          <span class="token key atrule">standard</span><span class="token punctuation">:</span>
            <span class="token key atrule">shardingColumn</span><span class="token punctuation">:</span> order_no
            <span class="token key atrule">shardingAlgorithmName</span><span class="token punctuation">:</span> order_item_alg
    <span class="token key atrule">shardingAlgorithms</span><span class="token punctuation">:</span>
      <span class="token key atrule">order_db_alg</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> server<span class="token punctuation">-</span>order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span> user_id % 2<span class="token punctuation">}</span>
      <span class="token key atrule">order_alg</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> t_order$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span> order_no % 2<span class="token punctuation">}</span>
      <span class="token key atrule">order_item_alg</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
        <span class="token key atrule">props</span><span class="token punctuation">:</span>
          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> t_order_item$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span> order_no % 2<span class="token punctuation">}</span>
    <span class="token key atrule">keyGenerators</span><span class="token punctuation">:</span>
      <span class="token key atrule">alg_snowflake</span><span class="token punctuation">:</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> SNOWFLAKE
    <span class="token key atrule">bindingTables</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> t_order<span class="token punctuation">,</span>t_order_item
  <span class="token punctuation">-</span> <span class="token tag">!BROADCAST</span>
    <span class="token key atrule">tables</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> t_dict

<span class="token key atrule">props</span><span class="token punctuation">:</span>
  <span class="token key atrule">sql-show</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-测试广播表" tabindex="-1"><a class="header-anchor" href="#_5-4-测试广播表" aria-hidden="true">#</a> 5.4 测试广播表</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">DictMapper</span> dictMapper<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
     * 广播表：每个服务器中的t_dict同时添加了新数据
     */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testBroadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name">Dict</span> dict <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dict<span class="token punctuation">.</span><span class="token function">setDictType</span><span class="token punctuation">(</span><span class="token string">&quot;type1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dictMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>dict<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
     * 查询操作，只从一个节点获取数据
     * 随机负载均衡规则
 * Actual SQL: server-order1 ::: SELECT  id,dict_type  FROM t_dict
     */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectBroadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Dict</span><span class="token punctuation">&gt;</span></span> dicts <span class="token operator">=</span> dictMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dicts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61);function J($,V){const a=c("ExternalLinkIcon");return o(),l("div",null,[E,n("p",null,[s("官网："),n("a",D,[s("https://shardingsphere.apache.org/index_zh.html"),e(a)])]),n("p",null,[s("文档："),n("a",R,[s("https://shardingsphere.apache.org/document/5.1.1/cn/overview/"),e(a)])]),L,n("p",null,[s("SpringBoot脚手架："),n("a",M,[s("http://start.aliyun.com"),e(a)])]),O,n("p",null,[n("a",B,[s("https://shardingsphere.apache.org/document/5.1.1/cn/features/sharding/concept/inline-expression/"),e(a)])]),C,n("p",null,[n("a",U,[s("https://shardingsphere.apache.org/document/5.1.1/cn/features/sharding/concept/key-generator/"),e(a)])]),G,H,P,Q,Y,z,n("p",null,[n("a",W,[s("雪花算法"),e(a)]),s("是推特开源的分布式ID生成算法，用于在不同的机器上生成唯一的ID的算法。该算法生成一个64bit的数字作为分布式ID，保证这个ID自增并且全局唯一。")]),F])}const X=p(q,[["render",J],["__file","MySQL17-ShardingSphere.html.vue"]]);export{X as default};
