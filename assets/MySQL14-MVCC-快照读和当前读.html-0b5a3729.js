import{_ as n,o as s,c as a,e as t}from"./app-8007fa1b.js";const e={},o=t(`<h1 id="一、mvcc概述" tabindex="-1"><a class="header-anchor" href="#一、mvcc概述" aria-hidden="true">#</a> 一、MVCC概述</h1><p>一想到并发控制，很多人第一反应就是加锁，的确，加锁确实是解决并发问题最常见的方案。但是，其实除了加锁以外，在数据库领域，还有一种无锁的方案可以来实现并发控制，那就是大名鼎鼎的MVCC。</p><br><p>MVCC （Multi Version Concurrency Control），多版本并发控制。顾名思义，MVCC 是通过<strong>数据行的多个版本管理来实现数据库的并发控制</strong> 。</p><p>这项技术使得在InnoDB的事务隔离级别下执行 <strong>一致性读</strong> 操作有了保证。 换言之，就是为了查询一些正在被另一个事务更新的行，并且可以看到它们被更新之前的值，这样在做查询的时候就不用等待另一个事务释放锁。</p><p>在并发场景下，读写操作可能出现以下三种情况：</p><blockquote><p>读-读并发</p><p>写-写并发</p><p>读-写并发</p></blockquote><p>我们都知道，在没有写的情况下发读-读并是不会出现问题的，而写-写并发这种情况比较常用的就是通过加锁的方式实现。那么，读-写并发则可以通过MVCC的机制解决。 MVCC在MySQL InnoDB中的实现主要是为了提高数据库并发性能，用更好的方式去处理 读-写冲突 ，做到 即使有<strong>读写冲突</strong>时，也能做到 <strong>不加锁 ，</strong></p><p><strong>非阻塞并发读</strong>指的就是<strong>快照读</strong>, 而非<strong>当前读</strong>。当前读实际上是一种加锁的操作，是悲观锁的实现。而MVCC本质是采用乐观锁思想的一种方式。</p><h1 id="二、快照读" tabindex="-1"><a class="header-anchor" href="#二、快照读" aria-hidden="true">#</a> 二、快照读</h1><p>快照读又叫<strong>一致性读</strong>，读取的是快照数据。<strong>不加锁的简单的 SELECT 都属于快照读</strong>，即不加锁的非阻塞读；比如这样：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT * FROM xx_table WHERE ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之所以出现快照读的情况，是基于提高并发性能的考虑，快照读的实现是基于MVCC，它在很多情况下，避免了加锁操作，降低了开销。 既然是基于多版本，那么<strong>快照读可能读到的并不一定是数据的最新版本，而有可能是之前的历史版本</strong>。 快照读的前提是隔离级别不是串行级别，串行级别下的快照读会退化成当前读。</p><h1 id="三、当前读" tabindex="-1"><a class="header-anchor" href="#三、当前读" aria-hidden="true">#</a> 三、当前读</h1><p>和快照读相对应的另外一个概念叫做当前读，<strong>当前读读取的是记录的最新版本</strong>（最新数据，而不是历史版本的数据）， 读取时还要保证其他并发事务不能修改当前记录，会对读取的记录进行加锁。<strong>加锁的SELECT，或者对数据进行增删改都会进行当前读</strong>。 比如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> xx_table <span class="token keyword">LOCK</span> <span class="token operator">IN</span> <span class="token keyword">SHARE</span> <span class="token keyword">MODE</span><span class="token punctuation">;</span>  <span class="token comment"># 共享锁</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> xx_table <span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span><span class="token punctuation">;</span>			<span class="token comment"># 排它锁</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> xx_table <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>					<span class="token comment"># 排它锁</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> xx_table <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>					<span class="token comment"># 排它锁</span>
<span class="token keyword">UPDATE</span> xx_table <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>							<span class="token comment"># 排它锁</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),p=[o];function c(r,l){return s(),a("div",null,p)}const i=n(e,[["render",c],["__file","MySQL14-MVCC-快照读和当前读.html.vue"]]);export{i as default};
