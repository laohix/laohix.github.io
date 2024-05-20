import{_ as e,r as p,o,c as i,a as n,d as s,b as t,e as l}from"./app-8007fa1b.js";const c="/assets/a4ea64ee1bc0e076805ebf705d0b540c-7faa1fa0.png",u="/assets/02d43aeb4492c0ac838150ad1d600a21-7dd88379.png",r="/assets/c47ad528d01a412a85b5f2e7aff877d7-fa1a5de5.png",d="/assets/tingshu052-ebed28ac.png",k="/assets/05-4902ef3c.png",v="/assets/06-7a0cdef3.png",m="/assets/07-2ec32c2a.png",b="/assets/08-defea461.png",q="/assets/image-20211006113840156-0d2ce772.png",g="/assets/1693294256200-e5621950.png",h="/assets/image-20221205232357129_bltAkpGY52-9289c06d.png",y="/assets/image-20211006153847981-93cc4d09.png",_="/assets/tingshu053-884beebc.png",x="/assets/tingshu054-05a1761a.png",f={},w=n("h1",{id:"_1-elasticsearch概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-elasticsearch概述","aria-hidden":"true"},"#"),s(" 1 elasticsearch概述")],-1),j=n("h2",{id:"_1-1-elasticsearch简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1-elasticsearch简介","aria-hidden":"true"},"#"),s(" 1.1 elasticsearch简介")],-1),E=n("p",null,"官网: https://www.elastic.co/",-1),S=n("p",null,"ElasticSearch是一个基于Lucene的搜索服务器。它提供了一个分布式多用户能力的全文搜索引擎，基于RESTful web接口。Elasticsearch是用Java开发的，并作为Apache许可条款下的开放源码发布，是当前流行的企业级搜索引擎。",-1),T={href:"https://so.csdn.net/so/search?q=Elastic&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,"说明：Elasticsearch 8最低jdk版本要求jdk17，当前我们选择Elasticsearch版本：Elasticsearch8.5.3",-1),I={href:"https://db-engines.com/en/ranking",target:"_blank",rel:"noopener noreferrer"},O=l('<h2 id="_1-2-elasticsearch的特性" tabindex="-1"><a class="header-anchor" href="#_1-2-elasticsearch的特性" aria-hidden="true">#</a> 1.2 Elasticsearch的特性</h2><p><strong>实时</strong> 理论上数据从写入Elasticsearch到数据可以被搜索只需要1秒左右的时间，实现准实时的数据索引和查询。</p><p><strong>分布式、可扩展</strong> 天生的分布式的设计，数据分片对于应用层透明，扩展性良好，可以轻易的进行节点扩容，支持上百甚至上千的服务器节点，支持PB级别的数据存储和搜索。</p><p><strong>稳定可靠</strong> Elasticsearch的分布式、数据冗余特性提供更加可靠的运行机制，且经过大型互联网公司众多项目使用，可靠性得到验证。</p><p><strong>高可用</strong> 数据多副本、多节点存储，单节点的故障不影响<strong>集群</strong>的使用。</p><p><strong>Rest API</strong> Elasticsearch提供标准的Rest API，这使得所有支持Rest API的语言都能够轻易的使用Elasticsearch，具备多语言通用的支持特性，易于使用。Elasticsearch Version 8以后，去除了以前Transport API、High-Level API、Low-Level API，统一标准的Rest API，这将使得Elasticsearch更加容易使用，原来被诟病的API混乱问题终于得到完美解决。</p><p><strong>高性能</strong> Elasticsearch底层构建基于Lucene，具备强大的搜索能力，即便是PB级别的数据依然能够实现秒级的搜索。</p><p><strong>多客户端支持</strong> 支持Java、Python、Go、PHP、Ruby等多语言客户端，还支持JDBC、ODBC等客户端。</p><p><strong>安全支持</strong> 提供单点登录SSO、加密通信、集群角色、属性的访问控制，支持审计等功能，在安全层面上还支持集成第三方的安全组件，在Version 8以后，默认开启了HTTPS，大大简化了安全上的配置。</p><h2 id="_1-3-elasticsearch应用场景" tabindex="-1"><a class="header-anchor" href="#_1-3-elasticsearch应用场景" aria-hidden="true">#</a> 1.3 Elasticsearch应用场景</h2><p><strong>搭建日志系统</strong> 日志系统应该是Elasticsearch使用最广泛的场景之一了，Elasticsearch支持海量数据的存储和查询，特别适合日志搜索场景。广泛使用的ELK套件(Elasticsearch、Logstash、Kibana)是日志系统最经典的案例，使用Logstash和Beats组件进行日志收集，Elasticsearch存储和查询应用日志，Kibana提供日志的可视化搜索界面。</p><p><img src="'+c+'" alt="a4ea64ee1bc0e076805ebf705d0b540c"></p><p><strong>搭建数据分析系统</strong> Elasitcsearch支持数据分析，例如强大的数据聚合功能，通过搭配Kibana，提供诸如直方图、统计分组、范围聚合等方便使用的功能，能够快速实现一些数据报表等功能。 在数字化转型的大行其道的当下，需要从海量数据中发现数据的规律，从而做出一定的决策，Elasticsearch一定是最适合的解决方案之一。</p><p><img src="'+u+'" alt="02d43aeb4492c0ac838150ad1d600a21"></p><p><strong>搭建搜索系统</strong> Elasticsearch为搜索而生，用于搭建全文搜索系统是自然而然的事情，它能够提供快速的索引和搜索功能，还有相关的评分功能、分词插件等，支持丰富的搜索特性，可以用于搭建大型的搜索引擎，更加常用语实现站内搜索，例如银行App、购物App等站内商品、服务搜索。</p><p><strong>构建海量数据业务系统即席查询服务</strong> 目前大量的需要支持事务的系统使用MySQL作为数据库，但随着业务的开展，数据量会越来越大，而MySQL的性能会越来越差，虽然可以通过分库分表的方案进行解决，但是操作比较复杂，而且往往每隔一段时间就需要进行扩展，且代码需要配合修改。 这种情况下可以将数据从MySQL同步到Elasticsearch，针对实时性要求不太高或者主要查询历史数据且数据量比较大的场景使用Elasticsearch提供查询，而对需要事务实时控制的即时数据还是通过MySQL存储和查询。</p><p><img src="'+r+'" alt="c47ad528d01a412a85b5f2e7aff877d7"></p><p><strong>作为独立数据库系统</strong> Elasticsearch本身提供了数据持久化存储的能力，并且提供了增删改查的功能，在某些应用场景下可以直接当做数据库系统来使用，既提供了存储能力，又能够同时具备搜索能力，整体技术架构会比较简单，例如博客系统、评论系统。需要注意的是，Elasticsearch不支持事务，且写入的性能相对关系型数据库稍弱，所有需要使用事务的场景都不能将Elasticsearch当做唯一的数据库系统，这使得这种使用场景很少见。</p><h2 id="_1-4-全文搜索引擎" tabindex="-1"><a class="header-anchor" href="#_1-4-全文搜索引擎" aria-hidden="true">#</a> 1.4 全文搜索引擎</h2><p>Google，百度类的网站搜索，它们都是根据网页中的<strong>关键字</strong>生成索引，我们在搜索的时候输入关键字，它们会将该关键字即索引匹配到的所有网页返回；还有常见的项目中应用日志的搜索等等。对于这些非结构化的数据文本，关系型数据库搜索不是能很好的支持。</p><p>一般<strong>传统数据库</strong>，全文检索都实现的很鸡肋，因为一般也没人用数据库存文本字段。进行全文检索需要<strong>扫描整个表</strong>，如果数据量大的话即使对SQL的语法<strong>优化</strong>，也收效甚微。建立了索引，但是维护起来也很麻烦，对于 insert 和 update 操作都会重新构建索引。</p><p>这里说到的<strong>全文搜索引擎</strong>指的是目前广泛应用的主流<strong>搜索引擎</strong>。它的工作原理是计算机索引程序通过扫描文章中的每一个词，<strong>对每一个词建立一个索引，指明该词在文章中出现的次数和位置</strong>，当用户查询时，检索程序就根据事先建立的索引进行查找，并将查找的结果反馈给用户的检索方式。这个过程类似于通过字典中的检索字表查字的过程。</p><h2 id="_1-5-lucene介绍" tabindex="-1"><a class="header-anchor" href="#_1-5-lucene介绍" aria-hidden="true">#</a> 1.5 lucene介绍</h2><p>​ Lucene是Apache软件基金会Jakarta项目组的一个子项目，提供了一个简单却强大的应用程式接口，能够做全文索引和搜寻。在Java开发环境里Lucene是一个成熟的免费开源工具。就其本身而言，Lucene是当前以及最近几年最受欢迎的免费<strong>Java信息检索程序库</strong>。但Lucene只是一个提供全文搜索功能类库的核心工具包，而真正使用它还需要一个完善的服务框架搭建起来进行应用。</p><p>​ 目前市面上流行的搜索引擎软件，主流的就两款：<strong>Elasticsearch和Solr</strong>,这两款都是基于Lucene搭建的，可以独立部署启动的搜索引擎服务软件。由于内核相同，所以两者除了服务器安装、部署、管理、集群以外，对于数据的操作 修改、添加、保存、查询等等都十分类似。</p><h2 id="_1-6-倒排索引" tabindex="-1"><a class="header-anchor" href="#_1-6-倒排索引" aria-hidden="true">#</a> 1.6 倒排索引</h2><p><img src="'+d+'" alt=""></p><p><strong>倒排索引步骤:</strong></p><ul><li>数据根据词条进行分词，同时记录文档索引位置</li><li>将词条相同的数据化进行合并</li><li>对词条进行排序</li></ul><p><strong>搜索过程:</strong></p><p>先将搜索词语进行分词，分词后再倒排索引列表查询文档位置(docId)。根据docId查询文档数据。</p><h2 id="_1-7-elasticsearch、solr对比" tabindex="-1"><a class="header-anchor" href="#_1-7-elasticsearch、solr对比" aria-hidden="true">#</a> 1.7 elasticsearch、solr对比</h2><p><img src="'+k+'" alt=""></p><p><img src="'+v+'" alt=""></p><p><img src="'+m+'" alt=""></p><p><img src="'+b+'" alt=""></p><p><strong>ElasticSearch vs Solr 总结</strong></p><ul><li>es基本是开箱即用，非常简单。Solr安装略微复杂。</li><li>Solr 利用 Zookeeper 进行分布式管理，而 Elasticsearch 自身带有分布式协调管理功能。</li><li>Solr 支持更多格式的数据，比如JSON、XML、CSV，而 Elasticsearch 仅支持json文件格式。</li><li>Solr 是传统搜索应用的有力解决方案，但 Elasticsearch 更适用于新兴的实时搜索应用。</li></ul><p>现在很多互联网应用都是要求实时搜索的，所以我们选择了elasticsearch。</p><h1 id="_2-elasticsearch的安装" tabindex="-1"><a class="header-anchor" href="#_2-elasticsearch的安装" aria-hidden="true">#</a> 2 elasticSearch的安装</h1><p><strong>详见《软件环境安装》</strong></p><h1 id="_3-elasticsearch核心概念" tabindex="-1"><a class="header-anchor" href="#_3-elasticsearch核心概念" aria-hidden="true">#</a> 3 elasticsearch核心概念</h1><h3 id="_3-1-es对照数据库" tabindex="-1"><a class="header-anchor" href="#_3-1-es对照数据库" aria-hidden="true">#</a> 3.1 es对照数据库</h3><p><img src="'+q+`" alt="image-20211006113840156"></p><h3 id="_3-2-索引-index" tabindex="-1"><a class="header-anchor" href="#_3-2-索引-index" aria-hidden="true">#</a> 3.2 索引(Index)</h3><p>一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户数据的索引，另一个产品目录的索引，还有一个订单数据的索引。一个索引由一个名字来标识（必须全部是小写字母），并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。在一个集群中，可以定义任意多的索引。</p><p>能搜索的数据必须索引，这样的好处是可以提高查询速度，比如：新华字典前面的目录就是索引的意思，目录可以提高查询速度。</p><p><em><strong>Elasticsearch索引的精髓：一切设计都是为了提高搜索的性能。</strong></em></p><h3 id="_3-3-类型-type" tabindex="-1"><a class="header-anchor" href="#_3-3-类型-type" aria-hidden="true">#</a> 3.3 类型(Type)</h3><p>在一个索引中，你可以定义一种或多种类型。</p><p>一个类型是你的索引的一个逻辑上的分类/分区，其语义完全由你来定。通常，会为具有一组共同字段的文档定义一个类型。不同的版本，类型发生了不同的变化</p><table><thead><tr><th>版本</th><th>Type</th></tr></thead><tbody><tr><td>5.x</td><td>支持多种type</td></tr><tr><td>6.x</td><td>只能有一种type</td></tr><tr><td>7.x</td><td>默认不再支持自定义索引类型（默认类型为：_doc）</td></tr><tr><td>8.x</td><td>默认类型为：_doc</td></tr></tbody></table><h3 id="_3-4-文档-document" tabindex="-1"><a class="header-anchor" href="#_3-4-文档-document" aria-hidden="true">#</a> 3.4 文档(Document)</h3><p>一个文档是一个可被索引的基础信息单元，也就是一条数据</p><p>比如：你可以拥有某一个客户的文档，某一个产品的一个文档，当然，也可以拥有某个订单的一个文档。文档以<strong>JSON（Javascript Object Notation）格式</strong>来表示，而JSON是一个到处存在的互联网数据交互格式。</p><p>在一个index/type里面，你可以存储任意多的文档。</p><h3 id="_3-5-字段-field" tabindex="-1"><a class="header-anchor" href="#_3-5-字段-field" aria-hidden="true">#</a> 3.5 字段(Field)</h3><p>相当于是数据表的字段，对文档数据根据不同属性进行的分类标识。</p><h3 id="_3-6-映射-mapping" tabindex="-1"><a class="header-anchor" href="#_3-6-映射-mapping" aria-hidden="true">#</a> 3.6 映射(Mapping)</h3><p>mapping是处理数据的方式和规则方面做一些限制，如：某个字段的数据类型、默认值、分析器、是否被索引等等。这些都是映射里面可以设置的，其它就是处理ES里面数据的一些使用规则设置也叫做映射，按着最优规则处理数据对性能提高很大，因此才需要建立映射，并且需要思考如何建立映射才能对性能更好。</p><h1 id="_4-elasticsearch-基础功能" tabindex="-1"><a class="header-anchor" href="#_4-elasticsearch-基础功能" aria-hidden="true">#</a> 4 Elasticsearch 基础功能</h1><p>参考文档：https://www.elastic.co/guide/en/elasticsearch/reference/8.5/elasticsearch-intro.html</p><p>我们在Kibana（前面已经安装过） 软件给大家演示基本操作</p><p>详见《软件环境安装》</p><h3 id="_4-1-分词器" tabindex="-1"><a class="header-anchor" href="#_4-1-分词器" aria-hidden="true">#</a> 4.1 分词器</h3><p>官方提供的分词器有这么几种: Standard、Letter、Lowercase、Whitespace、UAX URL Email、Classic、Thai等，中文分词器可以使用第三方的比如IK分词器。前面我们已经安装过了。</p><p>IK分词器:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST _analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我是中国人&quot;</span>
<span class="token punctuation">}</span>
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_CHAR&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;是&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_CHAR&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;中国人&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

POST _analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我是中国人&quot;</span>
<span class="token punctuation">}</span>
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_CHAR&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;是&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_CHAR&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;中国人&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;国人&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Standard分词器:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST _analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我是中国人&quot;</span>
<span class="token punctuation">}</span>

结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;IDEOGRAPHIC&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;是&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;IDEOGRAPHIC&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;中&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;IDEOGRAPHIC&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;国&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;IDEOGRAPHIC&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;人&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;IDEOGRAPHIC&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-索引操作" tabindex="-1"><a class="header-anchor" href="#_4-2-索引操作" aria-hidden="true">#</a> 4.2 索引操作</h3><p>ES 软件的索引可以类比为 MySQL 中表的概念，创建一个索引，类似于创建一个表</p><h4 id="_4-2-1-创建索引" tabindex="-1"><a class="header-anchor" href="#_4-2-1-创建索引" aria-hidden="true">#</a> 4.2.1 创建索引</h4><p>语法: PUT /{索引名称}</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /my_index

结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;shards_acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2-查看所有索引" tabindex="-1"><a class="header-anchor" href="#_4-2-2-查看所有索引" aria-hidden="true">#</a> 4.2.2 查看所有索引</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">GET</span> <span class="token operator">/</span>_cat<span class="token operator">/</span>indices<span class="token operator">?</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+`" alt="69329425620"></p><h4 id="_4-2-3-查看单个索引" tabindex="-1"><a class="header-anchor" href="#_4-2-3-查看单个索引" aria-hidden="true">#</a> 4.2.3 查看单个索引</h4><p>语法: GET /{索引名称}</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /my_index
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;my_index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;allocation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;_tier_preference&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data_content&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;provided_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;creation_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1693294063006&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kYMuXUZQRumMGqHoV0fDJw&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8050099&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-4-删除索引" tabindex="-1"><a class="header-anchor" href="#_4-2-4-删除索引" aria-hidden="true">#</a> 4.2.4 删除索引</h4><p>语法: DELETE /{索引名称}</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>DELETE /my_index
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-文档操作" tabindex="-1"><a class="header-anchor" href="#_4-3-文档操作" aria-hidden="true">#</a> 4.3 文档操作</h3><p>文档是 ES 软件搜索数据的最小单位, 不依赖预先定义的模式，所以可以将文档类比为表的一行JSON类型的数据。我们知道关系型数据库中，要提前定义字段才能使用，在Elasticsearch中，对于字段是非常灵活的，有时候我们可以忽略该字段，或者动态的添加一个新的字段。</p><h4 id="_4-3-1-创建文档" tabindex="-1"><a class="header-anchor" href="#_4-3-1-创建文档" aria-hidden="true">#</a> 4.3.1 创建文档</h4><p>语法:</p><p>PUT /{索引名称}/{类型}/{id}</p><p>{</p><p>jsonbody</p><p>}</p><p>在创建数据时，需要指定唯一性标识，那么请求范式 POST，PUT 都可以</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /my_index/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;小米手机&quot;</span>,
  <span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;小米&quot;</span>,
  <span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
  <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3999</span>
<span class="token punctuation">}</span>

返回结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
  <span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
  <span class="token string">&quot;_version&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
  <span class="token string">&quot;_seq_no&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
  <span class="token string">&quot;_primary_term&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;found&quot;</span><span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;小米手机&quot;</span>,
    <span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;小米&quot;</span>,
    <span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
    <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3999</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-2-查看文档" tabindex="-1"><a class="header-anchor" href="#_4-3-2-查看文档" aria-hidden="true">#</a> 4.3.2 查看文档</h4><p>语法:GET /{索引名称}/{类型}/{id}</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /my_index/_doc/1
结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
  <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
  <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
  <span class="token string">&quot;_version&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;_seq_no&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;_primary_term&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;found&quot;</span> <span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;小米手机&quot;</span>,
    <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;小米&quot;</span>,
    <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
    <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">3999</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-3-查询所有文档" tabindex="-1"><a class="header-anchor" href="#_4-3-3-查询所有文档" aria-hidden="true">#</a> 4.3.3 查询所有文档</h4><h5 id="语法-get-索引名称-search" tabindex="-1"><a class="header-anchor" href="#语法-get-索引名称-search" aria-hidden="true">#</a> 语法: GET /{索引名称}/_search</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /my_index/_search

结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span><span class="token builtin class-name">:</span> <span class="token number">941</span>,
  <span class="token string">&quot;timed_out&quot;</span><span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
      <span class="token string">&quot;relation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;hits&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
        <span class="token string">&quot;_score&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
        <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;小米手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;小米&quot;</span>,
          <span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3999</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-4-修改文档" tabindex="-1"><a class="header-anchor" href="#_4-3-4-修改文档" aria-hidden="true">#</a> 4.3.4 修改文档</h4><p>语法:</p><p>PUT /{索引名称}/{类型}/{id}</p><p>{</p><p>jsonbody</p><p>}</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /my_index/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;小米手机&quot;</span>,
  <span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;小米&quot;</span>,
  <span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
  <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token number">4500</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-5-修改局部属性" tabindex="-1"><a class="header-anchor" href="#_4-3-5-修改局部属性" aria-hidden="true">#</a> 4.3.5 修改局部属性</h4><p>语法:</p><p>POST /{索引名称}/_update/{docId} { &quot;doc&quot;: { &quot;属性&quot;: &quot;值&quot; } }</p><p><strong>注意：这种更新只能使用post方式。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_update/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;doc&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token number">4500</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-6-删除文档" tabindex="-1"><a class="header-anchor" href="#_4-3-6-删除文档" aria-hidden="true">#</a> 4.3.6 删除文档</h4><p>语法: DELETE /{索引名称}/{类型}/{id}</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DELETE /my_index/_doc/1
结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
  <span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
  <span class="token string">&quot;_version&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5</span>,
  <span class="token string">&quot;result&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;deleted&quot;</span>,
  <span class="token string">&quot;_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
    <span class="token string">&quot;successful&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;failed&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;_seq_no&quot;</span><span class="token builtin class-name">:</span> <span class="token number">6</span>,
  <span class="token string">&quot;_primary_term&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-映射mapping" tabindex="-1"><a class="header-anchor" href="#_4-4-映射mapping" aria-hidden="true">#</a> 4.4 映射mapping</h3><p>创建数据库表需要设置字段名称，类型，长度，约束等；索引库也一样，需要知道这个类型下有哪些字段，每个字段有哪些约束信息，这就叫做<strong>映射(mapping)</strong>。</p><h4 id="_4-4-1-查看映射" tabindex="-1"><a class="header-anchor" href="#_4-4-1-查看映射" aria-hidden="true">#</a> 4.4.1 查看映射</h4><p>语法: GET /{索引名称}/_mapping</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /my_index/_mapping
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;my_index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span><span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span><span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;ignore_above&quot;</span><span class="token operator">:</span> <span class="token number">256</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-2-动态映射" tabindex="-1"><a class="header-anchor" href="#_4-4-2-动态映射" aria-hidden="true">#</a> 4.4.2 动态映射</h4><p>在关系数据库中，需要事先创建数据库，然后在该数据库下创建数据表，并创建 表字段、类型、长度、主键等，最后才能基于表插入数据。而Elasticsearch中不 需要定义Mapping映射（即关系型数据库的表、字段等），在文档写入 Elasticsearch时，会根据文档字段<strong>自动识别类型</strong>，这种机制称之为<strong>动态映射</strong>。</p><p>映射规则对应:</p><table><thead><tr><th>数据</th><th>对应的类型</th></tr></thead><tbody><tr><td>null</td><td>字段不添加</td></tr><tr><td>true|flase</td><td>boolean</td></tr><tr><td>字符串</td><td>text</td></tr><tr><td>数值</td><td>long</td></tr><tr><td>小数</td><td>float</td></tr><tr><td>日期</td><td>date</td></tr></tbody></table><h4 id="_4-4-3-静态映射" tabindex="-1"><a class="header-anchor" href="#_4-4-3-静态映射" aria-hidden="true">#</a> 4.4.3 静态映射</h4><p>静态映射是在Elasticsearch中也可以事先定义好映射，即手动映射，包含文档的各字段类型、分词器等，这称为<strong>静态映射</strong>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#删除原创建的索引</span>
DELETE /my_index

<span class="token comment">#创建索引，并同时指定映射关系和分词器等。</span>
PUT /my_index
<span class="token punctuation">{</span>
  <span class="token string">&quot;mappings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;properties&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>,
        <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;store&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ik_max_word&quot;</span>,
        <span class="token string">&quot;search_analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ik_smart&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;keyword&quot;</span>,
        <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;store&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;keyword&quot;</span>,
        <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;store&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;integer&quot;</span>,
        <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;store&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;acknowledged&quot;</span> <span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;shards_acknowledged&quot;</span> <span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>type分类如下:</strong></p><ul><li>字符串：text(支持分词)和 keyword(不支持分词)。</li><li>text：该类型被用来索引长文本，在创建索引前会将这些文本进行分词，转化为词的组合，建立索引；允许es来检索这些词，text类型不能用来排序和聚合。</li><li>keyword：该类型不能分词，可以被用来检索过滤、排序和聚合，keyword类型不可用text进行分词模糊检索。</li><li>数值型：long、integer、short、byte、double、float</li><li>日期型：date</li><li>布尔型：boolean</li><li>特殊数据类型：nested</li></ul><h4 id="_4-4-4-nested-介绍" tabindex="-1"><a class="header-anchor" href="#_4-4-4-nested-介绍" aria-hidden="true">#</a> 4.4.4 nested 介绍</h4><p>nested：类型是一种特殊的对象object数据类型(specialised version of the object datatype )，允许对象数组彼此独立地进行索引和查询。</p><p>demo： 建立一个普通的index</p><p>如果linux 中有这个my_comment_index 先删除！DELETE /my_comment_index</p><p>步骤1：建立一个索引（ 存储博客文章及其所有评论）</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>PUT my_comment_index/_doc/1
{
  &quot;title&quot;: &quot;狂人日记&quot;,
  &quot;body&quot;: &quot;《狂人日记》是一篇象征性和寓意很强的小说，当时，鲁迅对中国国民精神的麻木愚昧颇感痛切。&quot;,
  &quot;comments&quot;: [
    {
      &quot;name&quot;: &quot;张三&quot;,
      &quot;age&quot;: 34,
      &quot;rating&quot;: 8,
      &quot;comment&quot;: &quot;非常棒的文章&quot;,
      &quot;commented_on&quot;: &quot;30 Nov 2023&quot;
    },
    {
      &quot;name&quot;: &quot;李四&quot;,
      &quot;age&quot;: 38,
      &quot;rating&quot;: 9,
      &quot;comment&quot;: &quot;文章非常好&quot;,
      &quot;commented_on&quot;: &quot;25 Nov 2022&quot;
    },
    {
      &quot;name&quot;: &quot;王五&quot;,
      &quot;age&quot;: 33,
      &quot;rating&quot;: 7,
      &quot;comment&quot;: &quot;手动点赞&quot;,
      &quot;commented_on&quot;: &quot;20 Nov 2021&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，所以我们有一个文档描述了一个帖子和一个包含帖子上所有评论的内部对象评论。 但是Elasticsearch搜索中的内部对象并不像我们期望的那样工作。</p><p>步骤2 : 执行查询</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /my_comment_index/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;comments.name&quot;: &quot;李四&quot;
          }
        },
        {
          &quot;match&quot;: {
            &quot;comments.age&quot;: 34
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果：居然正常的响应结果了</p><p><img src="`+h+`" alt=""></p><blockquote><p>原因分析：comments 字段默认的数据类型是Object，故我们的文档内部存储为： { &quot;title&quot;: [ 狂人日记], &quot;body&quot;: [ 《狂人日记》是一篇象征性和寓意很强的小说，当时... ], &quot;comments.name&quot;: [ 张三, 李四, 王五 ], &quot;comments.comment&quot;: [ 非常棒的文章,文章非常好,王五,... ], &quot;comments.age&quot;: [ 33, 34, 38 ], &quot;comments.rating&quot;: [ 7, 8, 9 ] }</p></blockquote><p>我们可以清楚地看到，comments.name和comments.age之间的关系已丢失。这就是为什么我们的文档匹配李四和34的查询。</p><p>步骤3：删除当前索引</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>DELETE /my_comment_index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>步骤4：建立一个nested 类型的（comments字段映射为nested类型，而不是默认的object类型）</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT my_comment_index
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nested&quot;</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


PUT my_comment_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;狂人日记&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;《狂人日记》是一篇象征性和寓意很强的小说，当时，鲁迅对中国国民精神的麻木愚昧颇感痛切。&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;非常棒的文章&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30 Nov 2023&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;文章非常好&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;25 Nov 2022&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rating&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手动点赞&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;commented_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20 Nov 2021&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新执行步骤1，使用nested 查询</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /my_comment_index/_search
{
  &quot;query&quot;: {
    &quot;nested&quot;: {
      &quot;path&quot;: &quot;comments&quot;,
      &quot;query&quot;: {
        &quot;bool&quot;: {
          &quot;must&quot;: [
            {
              &quot;match&quot;: {
                &quot;comments.name&quot;: &quot;李四&quot;
              }
            },
            {
              &quot;match&quot;: {
                &quot;comments.age&quot;: 34
              }
            }
          ]
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果发现没有返回任何的文档，这是何故？</p><p>当将字段设置为nested 嵌套对象将数组中的每个对象索引为单独的隐藏文档，这意味着可以独立于其他对象查询每个嵌套对象。文档的内部表示：</p><blockquote><p>{ { &quot;comments.name&quot;: [ 张三], &quot;comments.comment&quot;: [ 非常棒的文章 ], &quot;comments.age&quot;: [ 34 ], &quot;comments.rating&quot;: [ 9 ] }, { &quot;comments.name&quot;: [ 李四], &quot;comments.comment&quot;: [ 文章非常好 ], &quot;comments.age&quot;: [ 38 ], &quot;comments.rating&quot;: [ 8 ] }, { &quot;comments.name&quot;: [ 王五], &quot;comments.comment&quot;: [手动点赞], &quot;comments.age&quot;: [ 33 ], &quot;comments.rating&quot;: [ 7 ] }, { &quot;title&quot;: [ 狂人日记 ], &quot;body&quot;: [ 《狂人日记》是一篇象征性和寓意很强的小说，当时，鲁迅对中国... ] } }</p></blockquote><p>每个内部对象都在内部存储为单独的隐藏文档。 这保持了他们的领域之间的关系。</p><h2 id="_5-dsl高级查询" tabindex="-1"><a class="header-anchor" href="#_5-dsl高级查询" aria-hidden="true">#</a> 5 DSL高级查询</h2><h3 id="_5-1-dsl概述" tabindex="-1"><a class="header-anchor" href="#_5-1-dsl概述" aria-hidden="true">#</a> 5.1 DSL概述</h3><p>Query DSL概述: Domain Specific Language(领域专用语言)，Elasticsearch提供了基于JSON的DSL来定义查询。</p><p><strong>DSL概览:</strong></p><p><img src="`+y+`" alt="image-20211006153847981"></p><p>准备数据:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /my_index/_doc/1
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span>:1,<span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;华为笔记本电脑&quot;</span>,<span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;华为&quot;</span>,<span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,<span class="token string">&quot;price&quot;</span>:5388<span class="token punctuation">}</span>

PUT /my_index/_doc/2
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span>:2,<span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;华为手机&quot;</span>,<span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;华为&quot;</span>,<span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,<span class="token string">&quot;price&quot;</span>:5500<span class="token punctuation">}</span>

PUT /my_index/_doc/3
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span>:3,<span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;VIVO手机&quot;</span>,<span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;vivo&quot;</span>,<span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,<span class="token string">&quot;price&quot;</span>:3600<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-dsl查询" tabindex="-1"><a class="header-anchor" href="#_5-2-dsl查询" aria-hidden="true">#</a> 5.2 DSL查询</h3><h4 id="_5-2-1-查询所有文档" tabindex="-1"><a class="header-anchor" href="#_5-2-1-查询所有文档" aria-hidden="true">#</a> 5.2.1 查询所有文档</h4><p>match_all:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;timed_out&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">3</span>,
      <span class="token string">&quot;relation&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
    <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;2&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5500</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;3&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">3</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;VIVO手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;vivo&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">3600</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-2-匹配查询-match" tabindex="-1"><a class="header-anchor" href="#_5-2-2-匹配查询-match" aria-hidden="true">#</a> 5.2.2 匹配查询(match)</h4><p>match:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为智能手机&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">3</span>,
  <span class="token string">&quot;timed_out&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
      <span class="token string">&quot;relation&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0.5619608</span>,
    <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;2&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0.5619608</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5500</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0.35411233</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-3-多字段匹配" tabindex="-1"><a class="header-anchor" href="#_5-2-3-多字段匹配" aria-hidden="true">#</a> 5.2.3 多字段匹配</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;multi_match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为智能手机&quot;</span>,
      <span class="token string">&quot;fields&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span>,<span class="token string">&quot;category&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;timed_out&quot;</span><span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
      <span class="token string">&quot;relation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1.5619192</span>,
    <span class="token string">&quot;hits&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2&quot;</span>,
        <span class="token string">&quot;_score&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1.5619192</span>,
        <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
          <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5500</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
        <span class="token string">&quot;_score&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1.489748</span>,
        <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span>,
          <span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3&quot;</span>,
        <span class="token string">&quot;_score&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0.59518534</span>,
        <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
          <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;VIVO手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vivo&quot;</span>,
          <span class="token string">&quot;images&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3600</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-4-关键字精确查询" tabindex="-1"><a class="header-anchor" href="#_5-2-4-关键字精确查询" aria-hidden="true">#</a> 5.2.4 关键字精确查询</h4><p><strong>term:关键字不会进行分词。</strong> 相当于where title = ?;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
   <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
     <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
       <span class="token string">&quot;value&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为手机&quot;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;timed_out&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
      <span class="token string">&quot;relation&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span> <span class="token builtin class-name">:</span> null,
    <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-6-多关键字精确查询" tabindex="-1"><a class="header-anchor" href="#_5-2-6-多关键字精确查询" aria-hidden="true">#</a> 5.2.6 多关键字精确查询</h4><p>where title in ()</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
   <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
     <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
       <span class="token string">&quot;华为手机&quot;</span>,
       <span class="token string">&quot;华为&quot;</span>
     <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;timed_out&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
      <span class="token string">&quot;relation&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
    <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;2&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5500</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-7-范围查询" tabindex="-1"><a class="header-anchor" href="#_5-2-7-范围查询" aria-hidden="true">#</a> 5.2.7 范围查询</h4><p>范围查询使用range。</p><ul><li>gte: 大于等于</li><li>lte: 小于等于</li><li>gt: 大于</li><li>lt: 小于</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span>,
        <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5000</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;timed_out&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
      <span class="token string">&quot;relation&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
    <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;3&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;VIVO手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;vivo&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-8-指定返回字段" tabindex="-1"><a class="header-anchor" href="#_5-2-8-指定返回字段" aria-hidden="true">#</a> 5.2.8 指定返回字段</h4><p><strong>query同级增加_source进行过滤。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
   <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
     <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
       <span class="token string">&quot;华为手机&quot;</span>,
       <span class="token string">&quot;华为&quot;</span>
     <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span>,<span class="token string">&quot;category&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-9-组合查询" tabindex="-1"><a class="header-anchor" href="#_5-2-9-组合查询" aria-hidden="true">#</a> 5.2.9 组合查询</h4><p>bool 各条件之间有and,or或not的关系</p><ul><li>must: 各个条件都必须满足，所有条件是and的关系</li><li>should: 各个条件有一个满足即可，即各条件是or的关系</li><li>must_not: 不满足所有条件，即各条件是not的关系</li><li>filter: 与must效果等同，但是它不计算得分，效率更高点。</li></ul><h5 id="must" tabindex="-1"><a class="header-anchor" href="#must" aria-hidden="true">#</a> must</h5><p>各个条件都必须满足，所有条件是and的关系</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
              <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">5400</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.2923405</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.2923405</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="should" tabindex="-1"><a class="header-anchor" href="#should" aria-hidden="true">#</a> should</h5><p>各个条件有一个满足即可，即各条件是or的关系</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;should&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span>,
              <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;timed_out&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">3</span>,
      <span class="token string">&quot;relation&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
    <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;3&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1.0</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">3</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;VIVO手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;vivo&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">3600</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;2&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0.5619608</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5500</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0.35411233</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果should和must同时存在，他们之间是and关系：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;should&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span>,
              <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>,
      <span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span>,
              <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;timed_out&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
      <span class="token string">&quot;relation&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span> <span class="token builtin class-name">:</span> null,
    <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="must-not" tabindex="-1"><a class="header-anchor" href="#must-not" aria-hidden="true">#</a> must_not</h5><p>不满足所有条件，即各条件是not的关系</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;must_not&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span>,
              <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;timed_out&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
      <span class="token string">&quot;relation&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span> <span class="token builtin class-name">:</span> null,
    <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h5><p>与must效果等同，但是它不计算得分，效率更高点。</p><p><strong>_score的分值为0</strong> 在Elasticsearch中，<code>_score</code> 字段代表每个文档的相关性分数（relevance score）。这个分数用于衡量一个文档与特定查询的匹配程度，它是基于搜索查询的条件和文档的内容来计算的。相关性分数越高，表示文档与查询的匹配度越高，排名也越靠前。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;timed_out&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
      <span class="token string">&quot;relation&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0.0</span>,
    <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0.0</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;2&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0.0</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5500</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-10-聚合查询" tabindex="-1"><a class="header-anchor" href="#_5-2-10-聚合查询" aria-hidden="true">#</a> 5.2.10 聚合查询</h4><p>聚合允许使用者对es文档进行统计分析，类似与关系型数据库中的group by，当然还有很多其他的聚合，例如取最大值、平均值等等。</p><h5 id="max" tabindex="-1"><a class="header-anchor" href="#max" aria-hidden="true">#</a> max</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;max_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;max_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">5500.0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="min" tabindex="-1"><a class="header-anchor" href="#min" aria-hidden="true">#</a> min</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;min_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;max_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3600.0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="avg" tabindex="-1"><a class="header-anchor" href="#avg" aria-hidden="true">#</a> avg</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;avg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">4829.333333333333</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sum" tabindex="-1"><a class="header-anchor" href="#sum" aria-hidden="true">#</a> sum</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;sum_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;sum_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">14488.0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="stats" tabindex="-1"><a class="header-anchor" href="#stats" aria-hidden="true">#</a> stats</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;stats_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;stats_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;count&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;min&quot;</span> <span class="token operator">:</span> <span class="token number">3600.0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;max&quot;</span> <span class="token operator">:</span> <span class="token number">5500.0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;avg&quot;</span> <span class="token operator">:</span> <span class="token number">4829.333333333333</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum&quot;</span> <span class="token operator">:</span> <span class="token number">14488.0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="terms" tabindex="-1"><a class="header-anchor" href="#terms" aria-hidden="true">#</a> terms</h5><p>桶聚合相当于sql中的group by语句</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;groupby_category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;groupby_category&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;vivo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以对桶继续下钻：计算每个品牌对应的平均值是多少！</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;groupby_category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;avg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;groupby_category&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">5444.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;vivo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3600.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-11-排序" tabindex="-1"><a class="header-anchor" href="#_5-2-11-排序" aria-hidden="true">#</a> 5.2.11 排序</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;price&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;_score&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
结果:
<span class="token punctuation">{</span>
  <span class="token string">&quot;took&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;timed_out&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;_shards&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;successful&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;skipped&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;failed&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;total&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;value&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
      <span class="token string">&quot;relation&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;max_score&quot;</span> <span class="token builtin class-name">:</span> null,
    <span class="token string">&quot;hits&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;1&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0.35411233</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;sort&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
          <span class="token number">5388</span>,
          <span class="token number">0.35411233</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>,
      <span class="token punctuation">{</span>
        <span class="token string">&quot;_index&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;my_index&quot;</span>,
        <span class="token string">&quot;_type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;_doc&quot;</span>,
        <span class="token string">&quot;_id&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;2&quot;</span>,
        <span class="token string">&quot;_score&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0.5619608</span>,
        <span class="token string">&quot;_source&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
          <span class="token string">&quot;title&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为手机&quot;</span>,
          <span class="token string">&quot;category&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;华为&quot;</span>,
          <span class="token string">&quot;images&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span>,
          <span class="token string">&quot;price&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">5500</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;sort&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
          <span class="token number">5500</span>,
          <span class="token number">0.5619608</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-12-分页查询" tabindex="-1"><a class="header-anchor" href="#_5-2-12-分页查询" aria-hidden="true">#</a> 5.2.12 分页查询</h4><p>分页的两个关键属性:from、size。</p><ul><li>from: 当前页的起始索引，默认从0开始。 from = (pageNum - 1) * size</li><li>size: 每页显示多少条</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
结果<span class="token operator">:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token number">5500</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-13-高亮显示" tabindex="-1"><a class="header-anchor" href="#_5-2-13-高亮显示" aria-hidden="true">#</a> 5.2.13 高亮显示</h4><p>无检索不高亮</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># 检索数据
GET /my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pre_tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;font color:#e4393c&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;post_tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&lt;/font&gt;&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.996705</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.996705</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5500</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;font color:#e4393c&gt;华&lt;/font&gt;&lt;font color:#e4393c&gt;为&lt;/font&gt;&lt;font color:#e4393c&gt;手&lt;/font&gt;&lt;font color:#e4393c&gt;机&lt;/font&gt;&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.100845</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VIVO手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vivo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3600</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;VIVO&lt;font color:#e4393c&gt;手&lt;/font&gt;&lt;font color:#e4393c&gt;机&lt;/font&gt;&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.78038335</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为笔记本电脑&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5388</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;font color:#e4393c&gt;华&lt;/font&gt;&lt;font color:#e4393c&gt;为&lt;/font&gt;笔记本电脑&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-java-api操作es" tabindex="-1"><a class="header-anchor" href="#_6-java-api操作es" aria-hidden="true">#</a> 6 Java Api操作ES</h1><h2 id="_6-1-elasticsearch-java-api-client" tabindex="-1"><a class="header-anchor" href="#_6-1-elasticsearch-java-api-client" aria-hidden="true">#</a> 6.1 Elasticsearch Java API Client</h2><p>官方文档：https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/8.5/installation.html</p><h3 id="_6-1-1-搭建项目" tabindex="-1"><a class="header-anchor" href="#_6-1-1-搭建项目" aria-hidden="true">#</a> 6.1.1 搭建项目</h3><p>1、创建项目：elasticsearch_demo</p><p><img src="`+_+'" alt=""></p><p><img src="'+x+`" alt=""></p><p>2、导入pom.xml：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.0.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.atguigu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch_demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>co.elastic.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.5.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.12.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-1-2-配置连接" tabindex="-1"><a class="header-anchor" href="#_6-1-2-配置连接" aria-hidden="true">#</a> 6.1.2 配置连接</h3><p>在启动类配置es连接</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>elasticsearch</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span></span><span class="token class-name">ElasticsearchClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>json<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span></span><span class="token class-name">JacksonJsonpMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>transport<span class="token punctuation">.</span></span><span class="token class-name">ElasticsearchTransport</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>transport<span class="token punctuation">.</span>rest_client<span class="token punctuation">.</span></span><span class="token class-name">RestClientTransport</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">Header</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpHost</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>auth<span class="token punctuation">.</span></span><span class="token class-name">AuthScope</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>auth<span class="token punctuation">.</span></span><span class="token class-name">UsernamePasswordCredentials</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">BasicCredentialsProvider</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span>message<span class="token punctuation">.</span></span><span class="token class-name">BasicHeader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">RestClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticsearchDemoApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ElasticsearchDemoApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ElasticsearchClient</span> <span class="token function">buildElasticsearchClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BasicCredentialsProvider</span> credsProv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BasicCredentialsProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        credsProv<span class="token punctuation">.</span><span class="token function">setCredentials</span><span class="token punctuation">(</span>
                <span class="token class-name">AuthScope</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">UsernamePasswordCredentials</span><span class="token punctuation">(</span><span class="token string">&quot;elastic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;111111&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">RestClient</span> restClient <span class="token operator">=</span> <span class="token class-name">RestClient</span>
                <span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token class-name">HttpHost</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;http://139.198.127.41:9200&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setHttpClientConfigCallback</span><span class="token punctuation">(</span>hc <span class="token operator">-&gt;</span> hc
                        <span class="token punctuation">.</span><span class="token function">setDefaultCredentialsProvider</span><span class="token punctuation">(</span>credsProv<span class="token punctuation">)</span>
                <span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Create the transport with a Jackson mapper</span>
        <span class="token class-name">ElasticsearchTransport</span> transport <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestClientTransport</span><span class="token punctuation">(</span>
                restClient<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">JacksonJsonpMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// And create the API client</span>
        <span class="token class-name">ElasticsearchClient</span> esClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ElasticsearchClient</span><span class="token punctuation">(</span>transport<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> esClient<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-1-3-测试查询" tabindex="-1"><a class="header-anchor" href="#_6-1-3-测试查询" aria-hidden="true">#</a> 6.1.3 测试查询</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>elasticsearch_demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span></span><span class="token class-name">ElasticsearchClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">SearchResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">ElasticsearchDemoApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ElasticsearchClient</span> elasticsearchClient<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//  创建查询请求对象</span>
        <span class="token comment">//        SearchRequest.Builder request = new SearchRequest.Builder();</span>
        <span class="token comment">//        //  QueryBuilders.queryString()</span>
        <span class="token comment">//        SearchRequest searchRequest = request.index(&quot;my_index&quot;).query(q -&gt; {</span>
        <span class="token comment">//            return q.match(f -&gt; {</span>
        <span class="token comment">//                return f.field(&quot;title&quot;).query(&quot;华为&quot;);</span>
        <span class="token comment">//            });</span>
        <span class="token comment">//        }).build();</span>
        <span class="token comment">//        //  获取到查询结果集对象</span>
        <span class="token comment">//        SearchResponse&lt;Object&gt; search = elasticsearchClient.search(searchRequest, Object.class);</span>
        <span class="token comment">//        System.out.println(search);</span>

        <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> search <span class="token operator">=</span> elasticsearchClient<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> s<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;my_index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>f <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>f1 <span class="token operator">-&gt;</span> f1<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//  遍历获取数据</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Hit</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> hit <span class="token operator">:</span> search<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>id=<span class="token number">2</span><span class="token punctuation">,</span> title=华为手机<span class="token punctuation">,</span> category=华为<span class="token punctuation">,</span> images=http<span class="token operator">:</span><span class="token comment">//www.gulixueyuan.com/xm.jpg, price=5500}</span>
<span class="token punctuation">{</span>id=<span class="token number">1</span><span class="token punctuation">,</span> title=华为笔记本电脑<span class="token punctuation">,</span> category=华为<span class="token punctuation">,</span> images=http<span class="token operator">:</span><span class="token comment">//www.gulixueyuan.com/xm.jpg, price=5388}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,243);function C(L,A){const a=p("ExternalLinkIcon");return o(),i("div",null,[w,j,E,S,n("p",null,[n("a",T,[s("Elastic"),t(a)]),s("官方宣布Elasticsearch进入Version 8，在速度、扩展、高相关性和简单性方面开启了一个全新的时代。")]),P,n("p",null,[n("a",I,[s("DB-Engines Ranking - popularity ranking of database management systems"),t(a)])]),O])}const D=e(f,[["render",C],["__file","02-ElasticSearch入门.html.vue"]]);export{D as default};
