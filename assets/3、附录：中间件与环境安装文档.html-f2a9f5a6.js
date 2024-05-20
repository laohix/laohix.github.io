import{_ as n,o as s,c as a,e}from"./app-8007fa1b.js";const i="/assets/1687145648557-7d187431.png",l="/assets/1687146133019-02a43a85.png",t="/assets/overview-5bb8ef94.png",p={},c=e(`<h1 id="附录-中间件与环境安装文档" tabindex="-1"><a class="header-anchor" href="#附录-中间件与环境安装文档" aria-hidden="true">#</a> 附录：中间件与环境安装文档</h1><h2 id="_1-lamp-环境" tabindex="-1"><a class="header-anchor" href="#_1-lamp-环境" aria-hidden="true">#</a> 1. LAMP 环境</h2><p>LAMP: Linux + Apache + MySQL + PHP；是php网站开发的基础环境。</p><p>前置：</p><ul><li>1、开通ecs</li><li>2、centos7.9版本</li><li>3、可访问公网</li><li>4、安全组放行 80，3306 端口</li></ul><h3 id="_1-安装apache-php" tabindex="-1"><a class="header-anchor" href="#_1-安装apache-php" aria-hidden="true">#</a> 1. 安装Apache+PHP</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 Apache</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> httpd
<span class="token comment"># 启动 Apache 服务 &amp; 设置开机启动</span>
systemctl start httpd
systemctl <span class="token builtin class-name">enable</span> httpd


<span class="token comment"># 安装 php5.6。</span>
<span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> https://mirror.webtatic.com/yum/el7/epel-release.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> php56w.x86_64 php56w-cli.x86_64 php56w-common.x86_64 php56w-gd.x86_64 php56w-imap.x86_64 php56w-ldap.x86_64 php56w-mysql.x86_64 php56w-pdo.x86_64 php56w-odbc.x86_64 php56w-process.x86_64 php56w-xml.x86_64 php56w-xmlrpc.x86_64

<span class="token comment">#重启httpd服务</span>
systemctl restart httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果搭配Nginx + PHP 则可以安装php7.3；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装php7.3</span>
<span class="token comment">## 运行以下命令，添加EPEL源。</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> https://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>remi-php73 php php-fpm php-mysqlnd php-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>测试PHP是否安装成功</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /var/www/html/info.php
<span class="token comment">#内容如下</span>
<span class="token operator">&lt;</span>?php
phpinfo<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
?<span class="token operator">&gt;</span>

<span class="token comment">#重启服务器</span>
systemctl restart httpd

<span class="token comment">#访问 http://你的ip/info.php； 出现下面页面则代表php安装成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="1687145648557"></p><h3 id="_2-安装mysql" tabindex="-1"><a class="header-anchor" href="#_2-安装mysql" aria-hidden="true">#</a> 2. 安装MySQL</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#准备目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/db
<span class="token builtin class-name">cd</span> /opt/db/

<span class="token comment">### 安装 MySQL 5.6：</span>
<span class="token function">wget</span> http://repo.mysql.com/mysql-community-release-el6-5.noarch.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-release-el6-5.noarch.rpm
yum repolist all <span class="token operator">|</span> <span class="token function">grep</span> mysql
yum <span class="token function">install</span> mysql-community-server <span class="token parameter variable">-y</span>

<span class="token comment">#启动mysql</span>
systemctl start mysqld


<span class="token comment">#初始化mysql，一路yes即可，要记住自己新设置的密码</span>
mysql_secure_installation


<span class="token comment">#创建初始数据库&amp;授予权限</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
create database db_wordpress character <span class="token builtin class-name">set</span> utf8 collate utf8_bin<span class="token punctuation">;</span>
grant all on db_wordpress.* to user_wp@<span class="token string">&#39;localhost&#39;</span> identified by <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
grant all on db_wordpress.* to user_wp@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-java环境" tabindex="-1"><a class="header-anchor" href="#_2-java环境" aria-hidden="true">#</a> 2. Java环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#下载jdk17</span>
<span class="token function">wget</span> https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz
<span class="token comment">#安装上传工具 以后使用命令 rz  选中文件进行上传</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> lrzsz

<span class="token comment">#解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> jdk-17_linux-x64_bin.tar.gz

<span class="token comment">#移动到指定位置； 记住全路径： /usr/local/jdk-17.0.7</span>
<span class="token function">mv</span> jdk-17.0.7 /opt/

<span class="token comment">#配置环境变量   /opt/jdk-17.0.2</span>
<span class="token function">vim</span> /etc/profile

<span class="token comment">#在最后加入下面配置，注意修改 JAVA_HOME位置为你自己的位置</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/jdk-17.0.2
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>

<span class="token comment">#使环境变量生效</span>
<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment">#验证安装成功</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="1687146133019"></p><h2 id="_3-wordpress安装" tabindex="-1"><a class="header-anchor" href="#_3-wordpress安装" aria-hidden="true">#</a> 3. WordPress安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#下载 </span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/WP
<span class="token builtin class-name">cd</span> /opt/WP
<span class="token function">wget</span> https://cn.wordpress.org/latest-zh_CN.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> latest-zh_CN.tar.gz

<span class="token comment">#把word_press代码复制到 /var/www/html 下，/var/www/html是php的网站目录</span>
<span class="token builtin class-name">cd</span> /var/www/html
<span class="token function">cp</span> <span class="token parameter variable">-rf</span> /opt/WP/wordpress/* /var/www/html/



<span class="token comment">###########配置 wordpress 访问 MYSQL</span>
<span class="token builtin class-name">cd</span> /var/www/html/
<span class="token function">cp</span> wp-config-sample.php wp-config.php
<span class="token function">vim</span> wp-config.php

<span class="token comment">##内容如下，注意修改为自己之前安装的MySQL的账号密码以及端口号</span>
<span class="token operator">&lt;</span>?php
/**
 * The base configuration <span class="token keyword">for</span> WordPress
 *
 * The wp-config.php creation script uses this <span class="token function">file</span> during the installation.
 * You don<span class="token string">&#39;t have to use the web site, you can copy this file to &quot;wp-config.php&quot;
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( &#39;</span>DB_NAME<span class="token string">&#39;, &#39;</span>db_wordpress<span class="token string">&#39; );

/** Database username */
define( &#39;</span>DB_USER<span class="token string">&#39;, &#39;</span>user_wp<span class="token string">&#39; );

/** Database password */
define( &#39;</span>DB_PASSWORD<span class="token string">&#39;, &#39;</span><span class="token number">123456</span><span class="token string">&#39; );

/** Database hostname */
define( &#39;</span>DB_HOST<span class="token string">&#39;, &#39;</span>localhost<span class="token string">&#39; );

/** Database charset to use in creating database tables. */
define( &#39;</span>DB_CHARSET<span class="token string">&#39;, &#39;</span>utf8mb4<span class="token string">&#39; );

/** The database collate type. Don&#39;</span>t change this <span class="token keyword">if</span> <span class="token keyword">in</span> doubt. */
define<span class="token punctuation">(</span> <span class="token string">&#39;DB_COLLATE&#39;</span>, <span class="token string">&#39;&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

/**<span class="token comment">#@+</span>
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases<span class="token operator">!</span> You can generate these using
 * the <span class="token punctuation">{</span>@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service<span class="token punctuation">}</span>.
 *
 * You can change these at any point <span class="token keyword">in</span> <span class="token function">time</span> to invalidate all existing cookies.
 * This will force all <span class="token function">users</span> to have to log <span class="token keyword">in</span> again.
 *
 * @since <span class="token number">2.6</span>.0
 */
define<span class="token punctuation">(</span> <span class="token string">&#39;AUTH_KEY&#39;</span>,         <span class="token string">&#39; ,kh+tKQ!*XlrMd)M)3}nn(i(Y+Kke[3KuaTMmuz B($EzqUix_v6X)Cn7QI{]+q&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
define<span class="token punctuation">(</span> <span class="token string">&#39;SECURE_AUTH_KEY&#39;</span>,  <span class="token string">&#39;LiK0-P)]}09@hK%M#9Guiu}Q3]{c{3OTep9r8GFT4lH1tVL7hKQ4f4)YKna~L~Z8&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
define<span class="token punctuation">(</span> <span class="token string">&#39;LOGGED_IN_KEY&#39;</span>,    <span class="token string">&#39;HQAx9M\`N&lt;lRusI8]MFDis$}K4)ek-YhK{tN%|Nlh&amp;?:_JGDuU:],hxC}gB}8\`7h(&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
define<span class="token punctuation">(</span> <span class="token string">&#39;NONCE_KEY&#39;</span>,        <span class="token string">&#39;$.2\`/+0)K#jaZ)V=wVW9j&lt;?NbuCf3xQt*Hsv&lt;|1ShflY:\`zi,q{QUdE{A-8r. _m&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
define<span class="token punctuation">(</span> <span class="token string">&#39;AUTH_SALT&#39;</span>,        <span class="token string">&#39;wWMitjd2mt&amp;5P;H+&amp;w_U6!r*3+fh8V[1#}^@km;xVoD7sr1W&lt;k:%O@=Kbr=y&amp;a2 &#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
define<span class="token punctuation">(</span> <span class="token string">&#39;SECURE_AUTH_SALT&#39;</span>, <span class="token string">&#39;u&amp;!&gt;mA2hpl%}7P%M!*=xHQ*x)XN|dVBJCUQz[wQNyhT}mmk+3-\`h(!.].B3ZOkwK&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
define<span class="token punctuation">(</span> <span class="token string">&#39;LOGGED_IN_SALT&#39;</span>,   <span class="token string">&#39;6h:Qh U@ME,-putJ}ViEi{#m=R9~j(YbzihIU)8lL3=@Q$V,&lt;u#+HZ_*t)z7C[ra&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
define<span class="token punctuation">(</span> <span class="token string">&#39;NONCE_SALT&#39;</span>,       <span class="token string">&#39;G.wRp$]0)lOlHc(_&amp;BiB&gt;f~2BcLpM}kIjqU[ fDT|?|B]W3=Ez,:RZT%)v&amp;W@w_&gt;&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

/**<span class="token comment">#@-*/</span>

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations <span class="token keyword">in</span> one database <span class="token keyword">if</span> you give each
 * a unique prefix. Only numbers, letters, and underscores please<span class="token operator">!</span>
 */
<span class="token variable">$table_prefix</span> <span class="token operator">=</span> <span class="token string">&#39;wp_&#39;</span><span class="token punctuation">;</span>

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to <span class="token boolean">true</span> to <span class="token builtin class-name">enable</span> the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * <span class="token keyword">in</span> their development environments.
 *
 * For information on other constants that can be used <span class="token keyword">for</span> debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define<span class="token punctuation">(</span> <span class="token string">&#39;WP_DEBUG&#39;</span>, <span class="token boolean">false</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

/* Add any custom values between this line and the <span class="token string">&quot;stop editing&quot;</span> line. */



/* That<span class="token string">&#39;s all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( &#39;</span>ABSPATH<span class="token string">&#39; ) ) {
	define( &#39;</span>ABSPATH<span class="token string">&#39;, __DIR__ . &#39;</span>/<span class="token string">&#39; );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . &#39;</span>wp-settings.php&#39;<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问：http://47.99.217.185 初始化WordPress；</p><p>后台地址：http://47.99.217.185/wp-login.php</p><p>博客地址：http://47.99.217.185</p><h2 id="_4-docker安装" tabindex="-1"><a class="header-anchor" href="#_4-docker安装" aria-hidden="true">#</a> 4. Docker安装</h2><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#卸载旧版本Docker</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine

<span class="token comment">#配置docker源</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
<span class="token function">sudo</span> yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo


<span class="token comment">#安装新版Docker,  docker compose； 允许写一个yaml配置文件，写清楚用哪些镜像启动哪些容器。</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

<span class="token comment">#启动 &amp; 开机自启</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token parameter variable">--now</span>

<span class="token comment">#配置镜像加速</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://82m9ar63.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-常用命令" tabindex="-1"><a class="header-anchor" href="#_2-常用命令" aria-hidden="true">#</a> 2. 常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#docker常用命令</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器id <span class="token function">bash</span>

<span class="token comment">#启动</span>
<span class="token function">docker</span> compose <span class="token parameter variable">-f</span> xxx.yaml up <span class="token parameter variable">-d</span> 

<span class="token comment">#得到volume 的具体位置</span>
<span class="token function">docker</span> volume inspect 你的volume名字 
<span class="token comment">#列出docker所有挂载的卷</span>
<span class="token function">docker</span> volume <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mysql、redis安装" tabindex="-1"><a class="header-anchor" href="#_3-mysql、redis安装" aria-hidden="true">#</a> 3. MySQL、Redis安装</h3><blockquote><p>安装MySQL和Redis的compose文件</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;mysql:latest&#39;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;MYSQL_DATABASE=mydatabase&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;MYSQL_PASSWORD=secret&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;MYSQL_ROOT_PASSWORD=verysecret&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;MYSQL_USER=myuser&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /opt/mysql<span class="token punctuation">:</span>/etc/mysql/conf.d <span class="token comment">#只要在外部的/opt/mysql目录下随便放一个 xx.cnf 文件，mysql自动把他当成配置文件</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;33066:3306&#39;</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /opt/redis/redis.conf<span class="token punctuation">:</span>/usr/local/etc/redis/redis.conf
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server /usr/local/etc/redis/redis.conf
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;7379:6379&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>允许root远程访问（新版MySQL无需设置）</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#mysql开启远程连接</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 你的mysql容器id <span class="token function">bash</span>
mysql <span class="token parameter variable">-uroot</span> -p你的密码
GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> WITH GRANT OPTION<span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>


<span class="token comment">#修改mysql配置文件，在[mysqld]下面加上一句话</span>
bind-address    <span class="token operator">=</span> <span class="token number">0.0</span>.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#后台启动jar应用，并且把所有日志都写到 log.txt</span>
<span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> your-jar-file.jar <span class="token operator">&gt;</span> log.txt <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-1panel" tabindex="-1"><a class="header-anchor" href="#_5-1panel" aria-hidden="true">#</a> 5. 1Panel</h2><h3 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h3><blockquote><p>1Panel 是一个现代化、开源的 Linux 服务器运维管理面板。适合小型公司快速运维需求。</p></blockquote><p><img src="`+t+`" alt="界面展示"></p><h3 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2. 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://resource.fit2cloud.com/1panel/package/quick_start.sh <span class="token parameter variable">-o</span> quick_start.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> quick_start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据引导创建，安装完成后记得放行防火墙</p><h2 id="_6-开机启动任意服务" tabindex="-1"><a class="header-anchor" href="#_6-开机启动任意服务" aria-hidden="true">#</a> 6. 开机启动任意服务</h2><h3 id="_1-制作服务文件" tabindex="-1"><a class="header-anchor" href="#_1-制作服务文件" aria-hidden="true">#</a> 1. 制作服务文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/lib/systemd/system
<span class="token function">vim</span> springbootapp.service
<span class="token comment">#内容如下</span>

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>springbootapp
<span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target remote-fs.target nss-lookup.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/opt/app/app-start.sh
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/opt/app/app-stop.sh
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-制作启动脚本" tabindex="-1"><a class="header-anchor" href="#_2-制作启动脚本" aria-hidden="true">#</a> 2. 制作启动脚本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> app-start.sh
<span class="token comment">#内容如下</span>

<span class="token comment">#!/bin/sh</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/jdk-17.0.2
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>

<span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> /opt/app/app.jar <span class="token operator">&gt;</span> /opt/app/app.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$!</span> <span class="token operator">&gt;</span> /opt/app/app-service.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-制作停止脚本" tabindex="-1"><a class="header-anchor" href="#_3-制作停止脚本" aria-hidden="true">#</a> 3. 制作停止脚本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> app-stop.sh
<span class="token comment">#内容如下</span>
<span class="token comment">#!/bin/sh</span>

<span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /opt/app/app-service.pid<span class="token variable">)</span></span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$PID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-增加执行权限" tabindex="-1"><a class="header-anchor" href="#_4-增加执行权限" aria-hidden="true">#</a> 4. 增加执行权限</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x app-start.sh
<span class="token function">chmod</span> +x app-stop.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-设置开机启动" tabindex="-1"><a class="header-anchor" href="#_5-设置开机启动" aria-hidden="true">#</a> 5. 设置开机启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl status springbootapp

systemctl <span class="token builtin class-name">enable</span> springbootapp
systemctl disable springbootapp

systemctl start springbootapp
systemctl stop springbootapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),d=[c];function r(o,u){return s(),a("div",null,d)}const m=n(p,[["render",r],["__file","3、附录：中间件与环境安装文档.html.vue"]]);export{m as default};
