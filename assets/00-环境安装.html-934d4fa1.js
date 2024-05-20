import{_ as l,r as t,o,c as r,a as e,d as a,b as s,e as i}from"./app-8007fa1b.js";const c="/assets/docker001-71269c37.png",d="/assets/image-20221128104310609_LxQ7RVSyLq-4ed637b0.png",p={},u=i('<h1 id="听书软件环境安装" tabindex="-1"><a class="header-anchor" href="#听书软件环境安装" aria-hidden="true">#</a> 听书软件环境安装</h1><p>电商软件环境安装部署</p><h1 id="一、环境准备" tabindex="-1"><a class="header-anchor" href="#一、环境准备" aria-hidden="true">#</a> 一、环境准备</h1><h2 id="_1安装docker" tabindex="-1"><a class="header-anchor" href="#_1安装docker" aria-hidden="true">#</a> 1安装docker</h2><p>环境安装：</p><blockquote><p>yum -y install gcc-c++</p></blockquote><p>第一步：安装必要的一些系统工具</p><blockquote><p>yum install -y yum-utils device-mapper-persistent-data lvm2</p></blockquote><p>第二步：添加软件源信息</p>',9),m={href:"http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo",title:"http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>第三步：更新并安装Docker-CE</p><blockquote><p>yum makecache fast yum -y install docker-ce</p></blockquote><p>第四步：开启Docker服务</p><blockquote><p>service docker start systemctl enable docker</p></blockquote><p>第五步：测试是否安装成功</p><blockquote><p>docker -v</p></blockquote><p>第六步：配置镜像加速器</p><p>您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器</p><blockquote><p>sudo mkdir -p /etc/docker</p></blockquote><p>新建daemon.json文件内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
	<span class="token string">&quot;registry-mirrors&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span>,<span class="token string">&quot;http://hubmirror.c.163.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),b={href:"https://help.aliyun.com/document_detail/60750.html?spm=a2c4g.60743.0.i1",target:"_blank",rel:"noopener noreferrer"},k=i('<p><img src="'+c+`" alt=""></p><pre><code>{
	&quot;registry-mirrors&quot;:[&quot;https://q0awbeqk.mirror.aliyuncs.com&quot;]
}
</code></pre><blockquote><p>sudo systemctl daemon-reload sudo systemctl restart docker</p></blockquote><h2 id="_2安装mysql" tabindex="-1"><a class="header-anchor" href="#_2安装mysql" aria-hidden="true">#</a> 2安装mysql</h2><p>已安装或能访问忽略</p><p>第一步：拉取镜像</p><blockquote><p>docker pull mysql:8.0.29</p></blockquote><p>第二步：启动</p><blockquote><p>docker run --name gmalldocker_mysql --restart=always -v /home/ljaer/mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0.29</p></blockquote><p>第三步：测试mysql</p><p>进入容器：</p><blockquote><p>docker exec -it gmalldocker_mysql /bin/bash</p></blockquote><p>登录mysql：</p><p>mysql -u root -p</p><p>root</p><p>如果顺利进入，安装成功</p><h2 id="_3安装kafka" tabindex="-1"><a class="header-anchor" href="#_3安装kafka" aria-hidden="true">#</a> 3安装kafka</h2><p>第一步：拉取zookeeper、kafka镜像</p><blockquote><p>docker pull wurstmeister/zookeeper</p><p>docker pull wurstmeister/kafka</p></blockquote><p>第二步：启动zookeeper、kafka</p><blockquote><p>docker run -d --name zookeeper -p 2181:2181 -e TZ=&quot;Asia/Shanghai&quot; --restart always wurstmeister/zookeeper</p><p>docker run -d --name kafka -p 9092:9092 -e KAFKA_BROKER_ID=0 -e KAFKA_ZOOKEEPER_CONNECT=192.168.200.130:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.200.130:9092 -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 -e TZ=&quot;Asia/Shanghai&quot; wurstmeister/kafka</p></blockquote><p>参数介绍： --name：容器名字 -p：端口号 KAFKA_BROKER_ID：该ID是集群的唯一标识 KAFKA_ADVERTISED_LISTENERS：kafka发布到zookeeper供客户端使用的服务地址。 KAFKA_ZOOKEEPER_CONNECT：zk的连接地址 KAFKA_LISTENERS：允许使用PLAINTEXT侦听器</p><p>第三步：进入kafka容器内部</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> kafka /bin/bash
<span class="token builtin class-name">cd</span> /opt/kafka_2.13-2.8.1/bin
通过生产者想topic 发送消息
./kafka-console-producer.sh --broker-list <span class="token number">192.168</span>.200.130:9092 <span class="token parameter variable">--topic</span> atguigu（topic名）
另外打开一个窗口 消费者消费消息
kafka-console-consumer.sh --bootstrap-server <span class="token number">192.168</span>.200.130:9092 <span class="token parameter variable">--topic</span> atguigu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4安装redis" tabindex="-1"><a class="header-anchor" href="#_4安装redis" aria-hidden="true">#</a> 4安装redis</h2><p>已安装或能访问忽略</p><p>第一步：拉取镜像</p><blockquote><p>docker pull redis:7.0.10</p></blockquote><p>第二步：启动</p><blockquote><p>docker run --name=gmalldocker_redis -d -p 6379:6379 --restart=always redis</p></blockquote><h2 id="_5安装nacos" tabindex="-1"><a class="header-anchor" href="#_5安装nacos" aria-hidden="true">#</a> 5安装nacos</h2><p>已安装或能访问忽略</p><p>第一步：拉取镜像</p><blockquote><p>docker pull nacos/nacos-server:v2.1.1</p></blockquote><p>第二步：启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
-e MODE=standalone \\
-p 8848:8848 \\
-p 9848:9848 \\
-p 9849:9849 \\
--name nacos2.1.1 \\
--restart=always \\
nacos/nacos-server:v2.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6安装sentinel" tabindex="-1"><a class="header-anchor" href="#_6安装sentinel" aria-hidden="true">#</a> 6安装sentinel</h2><p>已安装或能访问忽略</p><p>第一步：拉取镜像</p><blockquote><p>docker pull bladex/sentinel-dashboard</p></blockquote><p>第二步：启动</p><blockquote><p>docker run --name=gmalldocker_sentinel-dashboard --restart=always -p 8858:8858 -d bladex/sentinel-dashboard:latest</p></blockquote><h2 id="_7安装elasticsearch" tabindex="-1"><a class="header-anchor" href="#_7安装elasticsearch" aria-hidden="true">#</a> 7安装elasticsearch</h2><p>已安装或能访问忽略</p><p>第一步：拉取镜像</p><blockquote><p>docker pull elasticsearch:8.5.0</p></blockquote><p>第二步：启动</p><p>需要在宿主机建立：两个文件夹</p><blockquote><p>rm -rf /opt/elasticsearch</p><p>mkdir -p /opt/elasticsearch/{config,plugins,data}</p><p>项配置中文分词器直接去github下载拷贝到plugins目录再重启即可</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">unzip</span>
<span class="token function">unzip</span> elasticsearch-analysis-ik-8.5.0.zip <span class="token parameter variable">-d</span> ik-analyzer
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> elasticsearch-analysis-ik-8.5.0.zip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>制作配置文件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &lt;&lt;EOF&gt; /opt/elasticsearch/config/elasticsearch.yml
xpack.security.enabled: false
xpack.license.self_generated.type: basic
xpack.security.transport.ssl.enabled: false  # 不配报错
xpack.security.enrollment.enabled: true
http.host: 0.0.0.0
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>授予权限</p><blockquote><p>chmod -R 777 /opt/elasticsearch</p></blockquote><p>执行</p><div class="language-纯文本 line-numbers-mode" data-ext="纯文本"><pre class="language-纯文本"><code>docker run --name elasticsearch -p 9200:9200 -p 9300:9300 \\
--net elastic \\
--restart=always \\
-e &quot;discovery.type=single-node&quot; \\
-e ES_JAVA_OPTS=&quot;-Xms1024m -Xmx1024m&quot; \\
-v /opt/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \\
-v /opt/elasticsearch/data:/usr/share/elasticsearch/data \\
-v /opt/elasticsearch/plugins:/usr/share/elasticsearch/plugins \\
-d elasticsearch:8.5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果运行时提示elastic 未找到 执行这个命令 ： docker network create elastic</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 重置下面两个密码，注意：需等待es启动
docker exec -it elasticsearch bin/elasticsearch-reset-password -u elastic  -i  # -i 表示自定义密码 给java客户端用的
docker exec -it elasticsearch bin/elasticsearch-reset-password -u kibana_system -i  # 给 kibana 用的

用户名: elastic 密码可以使用: 111111
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：安装中文分词器</p><ol><li>下载elasticsearch-analysis-ik-8.5.0.zip</li><li>上传到/mydata/elasticsearch/plugins 目录后，解压：unzip elasticsearch-analysis-ik-8.5.0.zip -d ik-analyzer <strong>必须删除原来的压缩包elasticsearch-analysis-ik-8.5.0.zip</strong></li><li>重启es：docker restart a24eb9941759</li></ol><p>a24eb9941759：表示容器ID 运行时，需要改成自己的容器ID</p><h2 id="_8安装logstash-filebeat-暂时不需要" tabindex="-1"><a class="header-anchor" href="#_8安装logstash-filebeat-暂时不需要" aria-hidden="true">#</a> 8安装logstash/filebeat -- 暂时不需要</h2><p>安装 logstash</p><p>第一步：拉取镜像</p><blockquote><p>docker pull logstash:7.8.0</p></blockquote><p>第二步：需要提前在linux服务器上环境 /mydata/logstash/logstash.conf,内容如下</p><blockquote><p>mkdir -p /mydata/logstash</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>input <span class="token punctuation">{</span>
  tcp <span class="token punctuation">{</span>
  mode =&gt; <span class="token string">&quot;server&quot;</span>
  host =&gt; <span class="token string">&quot;0.0.0.0&quot;</span>
  port =&gt; <span class="token number">5044</span>
  codec =&gt; json_lines
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter<span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
  elasticsearch <span class="token punctuation">{</span>
  hosts =&gt; <span class="token string">&quot;192.168.200.128:9200&quot;</span>
  index =&gt; <span class="token string">&quot;gmall-%{+YYYY.MM.dd}&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：创建容器</p><div class="language-纯文本 line-numbers-mode" data-ext="纯文本"><pre class="language-纯文本"><code>docker run --name gmalldocker_logstash -p 5044:5044 \\
--restart=always \\
--link gmalldocker_elasticsearch:es \\
-v /mydata/logstash/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \\
-d logstash:7.8.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装Filebeat</p><p>第一步：授权</p><p>chmod 777 -R /var/log/messages</p><p>第二步：启动日志收集器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
  --name=filebeat \\
  --restart=always \\
  -v filebeat-conf:/usr/share/filebeat \\
  -v /var/log/messages:/var/log/messages \\
  --link 1833f6a65c2a:gmalldocker_elasticsearch \\
  elastic/filebeat:7.8.0
  
  1833f6a65c2a: es容器的ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：修改配置文件：</p><div class="language-纯文本 line-numbers-mode" data-ext="纯文本"><pre class="language-纯文本"><code>进入到目录：
cd /var/lib/docker/volumes/filebeat-conf/_data
修改配置文件
vim filebeat.yml
内容如下
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /var/log/messages
filebeat.config:
  modules:
    path: \${path.config}/modules.d/*.yml
    reload.enabled: false

processors:
  - add_cloud_metadata: ~
  - add_docker_metadata: ~

output.elasticsearch:
  hosts: &#39;192.168.200.128:9200&#39;
  indices:
   - index: &quot;filebeat-%{+yyyy.MM.dd}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启filebeat 容器，运行检索模块</p><p>效果：以后虚拟机上的所有日志都会收集保存到es中，可以在kibana中进行检索。</p><p>第四步： 创建可视化面板</p><p>在左侧菜单栏<strong>点击Discover</strong> 选项，就可以看到filebeat 收集的数据了。</p><h2 id="_9安装kibana" tabindex="-1"><a class="header-anchor" href="#_9安装kibana" aria-hidden="true">#</a> 9安装kibana</h2><p>第一步：拉取镜像</p><p>docker pull kibana:8.5.0</p><p>第二步：启动</p><p>删除一些目录</p><p>rm -rf /opt/kibana mkdir -p /opt/kibana/{config,data}</p><p>创建配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> kibana <span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601 <span class="token parameter variable">-d</span> kibana:8.5.0

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /opt/kibana/config/kibana.yml
server.host: <span class="token string">&quot;0.0.0.0&quot;</span>  <span class="token comment"># 不配报错</span>
server.shutdownTimeout: <span class="token string">&quot;5s&quot;</span>
elasticsearch.hosts: <span class="token punctuation">[</span> <span class="token string">&quot;http://elasticsearch:9200&quot;</span> <span class="token punctuation">]</span>
elasticsearch.username: <span class="token string">&quot;kibana_system&quot;</span>  <span class="token comment"># 不能用 elastic </span>
elasticsearch.password: <span class="token string">&quot;111111&quot;</span>
i18n.locale: <span class="token string">&quot;zh-CN&quot;</span>
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>停止删除正在运行的容器</p><p>docker stop kibana &amp;&amp; docker rm kibana</p><p>启动kibana</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">--name</span> kibana <span class="token punctuation">\\</span>
<span class="token parameter variable">--net</span> elastic <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /opt/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601 <span class="token parameter variable">-d</span> kibana:8.5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录kibana ，注意需要使用elastic 用户登录不能使用 kibana_system 这个用户登录。</p><p>测试：在Kibana开发工具中，测试安装分词词库是否可以使用！</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET  /_analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span>     <span class="token string">&quot;我是中国人&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10安装zipkin" tabindex="-1"><a class="header-anchor" href="#_10安装zipkin" aria-hidden="true">#</a> 10安装zipkin</h2><p>第一步：拉取镜像</p><blockquote><p>docker pull openzipkin/zipkin</p></blockquote><p>第二步：启动</p><blockquote><p>docker run --name zipkin --restart=always -d -p 9411:9411 openzipkin/zipkin</p></blockquote><h2 id="_11安装minio" tabindex="-1"><a class="header-anchor" href="#_11安装minio" aria-hidden="true">#</a> 11安装minio</h2><p>已安装或能访问忽略</p><p>第一步：拉取镜像</p><blockquote><p>docker pull minio/minio</p></blockquote><p>第二步：启动</p><div class="language-纯文本 line-numbers-mode" data-ext="纯文本"><pre class="language-纯文本"><code>docker run \\
-p 9000:9000 \\
-p 9001:9001 \\
--name=gmalldocker_minio \\
-d --restart=always \\
-e &quot;MINIO_ROOT_USER=admin&quot; \\
-e &quot;MINIO_ROOT_PASSWORD=admin123456&quot; \\
-v /home/data:/data \\
-v /home/config:/root/.minio \\
minio/minio server /data --console-address &quot;:9001&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,107),h={href:"http://IP:9001/minio/login%EF%BC%8C%E7%99%BB%E5%BD%95%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B4%A6%E6%88%B7%E5%AF%86%E7%A0%81admin/admin123456%E7%99%BB%E5%BD%95",title:"http://IP:9001/minio/login，登录使用自定义账户密码admin/admin123456登录",target:"_blank",rel:"noopener noreferrer"},g=i('<p><strong>注意</strong>：文件上传时，需要调整一下linux 服务器的时间与windows 时间一致！</p><blockquote><p>第一步：安装ntp服务 yum -y install ntp 第二步：开启开机启动服务 systemctl enable ntpd 第三步：启动服务 systemctl start ntpd 第四步：更改时区 timedatectl set-timezone Asia/Shanghai 第五步：启用ntp同步 timedatectl set-ntp yes 第六步：同步时间 ntpq -p</p></blockquote><h2 id="_12安装在线yapi-服务器-不需要" tabindex="-1"><a class="header-anchor" href="#_12安装在线yapi-服务器-不需要" aria-hidden="true">#</a> 12安装在线Yapi 服务器--不需要</h2><p>拉取镜像</p><blockquote><p>docker pull mongo:4.2.5</p></blockquote><p>启动mongo</p><blockquote><p>docker run -d --name mongo-yapi --restart=always -p 27017:27017 -v /mydata/mongodb:/data/db mongo:4.2.5</p></blockquote><p>获取Yapi 镜像</p><blockquote><p>docker pull registry.cn-hangzhou.aliyuncs.com/anoy/yapi</p></blockquote><p>初始化Yapi 数据库索引以及管理员账号</p><blockquote><p>docker run -it --rm --link mongo-yapi:mongo --entrypoint npm --workdir /api/vendors registry.cn-hangzhou.aliyuncs.com/anoy/yapi run install-server</p></blockquote><p><img src="'+d+'" alt=""></p><p>启动Yapi 服务</p><blockquote><p>docker run -d --name yapi --restart=always --link mongo-yapi:mongo --workdir /api/vendors -p 3000:3000 registry.cn-hangzhou.aliyuncs.com/anoy/yapi server/app.js</p></blockquote>',14),q={href:"http://192.168.200.128:3000",title:"http://192.168.200.128:3000",target:"_blank",rel:"noopener noreferrer"},_=e("a",{href:"mailto:admin@admin.com",title:"admin@admin.com"},"admin@admin.com",-1),y=e("h1",{id:"注意",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#注意","aria-hidden":"true"},"#"),a(" 注意：")],-1),f=e("p",null,"停止所有的容器",-1),x=e("blockquote",null,[e("p",null,"docker stop $(docker ps -aq)")],-1),E=e("p",null,"删除所有的容器",-1),A=e("blockquote",null,[e("p",null,"docker rm $(docker ps -aq)")],-1),z=e("p",null,"#删除所有的镜像",-1),w=e("blockquote",null,[e("p",null,"docker rmi $(docker images -q)")],-1);function I(O,S){const n=t("ExternalLinkIcon");return o(),r("div",null,[u,e("blockquote",null,[e("p",null,[a("yum-config-manager --add-repo "),e("a",m,[a("http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo"),s(n)])])]),v,e("p",null,[a("以上镜像不能使用了，使用阿里云的镜像！ "),e("a",b,[a("官方镜像加速 (aliyun.com)"),s(n)])]),k,e("p",null,[a("浏览器访问："),e("a",h,[a("http://IP:9001/minio/login，登录使用自定义账户密码admin/admin123456登录"),s(n)])]),g,e("p",null,[a("使用Yapi "),e("a",q,[a("http://192.168.200.128:3000"),s(n)]),a(" 登录账号 "),_,a("，密码 ymfe.org")]),y,f,x,E,A,z,w])}const K=l(p,[["render",I],["__file","00-环境安装.html.vue"]]);export{K as default};
