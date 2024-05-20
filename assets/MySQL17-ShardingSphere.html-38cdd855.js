const l=JSON.parse('{"key":"v-8ad177c6","path":"/mysql/MySQL17-ShardingSphere.html","title":"第01章 高性能架构模式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1 读写分离架构","slug":"_1-读写分离架构","link":"#_1-读写分离架构","children":[]},{"level":2,"title":"2 数据库分片架构","slug":"_2-数据库分片架构","link":"#_2-数据库分片架构","children":[{"level":3,"title":"2.1 垂直分片","slug":"_2-1-垂直分片","link":"#_2-1-垂直分片","children":[]},{"level":3,"title":"2.2 水平分片","slug":"_2-2-水平分片","link":"#_2-2-水平分片","children":[]}]},{"level":2,"title":"3 读写分离和数据分片架构","slug":"_3-读写分离和数据分片架构","link":"#_3-读写分离和数据分片架构","children":[]},{"level":2,"title":"4 实现方式","slug":"_4-实现方式","link":"#_4-实现方式","children":[{"level":3,"title":"4.1 程序代码封装","slug":"_4-1-程序代码封装","link":"#_4-1-程序代码封装","children":[]},{"level":3,"title":"4.2 中间件封装","slug":"_4-2-中间件封装","link":"#_4-2-中间件封装","children":[]},{"level":3,"title":"4.3 常用解决方案","slug":"_4-3-常用解决方案","link":"#_4-3-常用解决方案","children":[]}]},{"level":2,"title":"1、简介","slug":"_1、简介","link":"#_1、简介","children":[]},{"level":2,"title":"2、ShardingSphere-JDBC","slug":"_2、shardingsphere-jdbc","link":"#_2、shardingsphere-jdbc","children":[]},{"level":2,"title":"3、ShardingSphere-Proxy","slug":"_3、shardingsphere-proxy","link":"#_3、shardingsphere-proxy","children":[]},{"level":2,"title":"1、MySQL主从同步原理","slug":"_1、mysql主从同步原理","link":"#_1、mysql主从同步原理","children":[]},{"level":2,"title":"2 一主多从配置","slug":"_2-一主多从配置","link":"#_2-一主多从配置","children":[{"level":3,"title":"2.1 准备主服务器","slug":"_2-1-准备主服务器","link":"#_2-1-准备主服务器","children":[]},{"level":3,"title":"2.2 准备从服务器","slug":"_2-2-准备从服务器","link":"#_2-2-准备从服务器","children":[]},{"level":3,"title":"2.3 启动主从同步","slug":"_2-3-启动主从同步","link":"#_2-3-启动主从同步","children":[]},{"level":3,"title":"2.4 实现主从同步","slug":"_2-4-实现主从同步","link":"#_2-4-实现主从同步","children":[]},{"level":3,"title":"2.5 停止和重置","slug":"_2-5-停止和重置","link":"#_2-5-停止和重置","children":[]},{"level":3,"title":"2.6 常见问题","slug":"_2-6-常见问题","link":"#_2-6-常见问题","children":[]}]},{"level":2,"title":"1 创建SpringBoot程序","slug":"_1-创建springboot程序","link":"#_1-创建springboot程序","children":[{"level":3,"title":"1.1 创建项目","slug":"_1-1-创建项目","link":"#_1-1-创建项目","children":[]},{"level":3,"title":"1.2 配置pom","slug":"_1-2-配置pom","link":"#_1-2-配置pom","children":[]},{"level":3,"title":"1.3 创建实体类","slug":"_1-3-创建实体类","link":"#_1-3-创建实体类","children":[]},{"level":3,"title":"1.4 创建Mapper","slug":"_1-4-创建mapper","link":"#_1-4-创建mapper","children":[]},{"level":3,"title":"1.5 application.properties","slug":"_1-5-application-properties","link":"#_1-5-application-properties","children":[]},{"level":3,"title":"1.6 shardingsphere.yaml","slug":"_1-6-shardingsphere-yaml","link":"#_1-6-shardingsphere-yaml","children":[]},{"level":3,"title":"1.7 主启动类","slug":"_1-7-主启动类","link":"#_1-7-主启动类","children":[]}]},{"level":2,"title":"2 测试","slug":"_2-测试","link":"#_2-测试","children":[{"level":3,"title":"2.1 写入操作测试","slug":"_2-1-写入操作测试","link":"#_2-1-写入操作测试","children":[]},{"level":3,"title":"2.2 事务测试","slug":"_2-2-事务测试","link":"#_2-2-事务测试","children":[]},{"level":3,"title":"2.3 负载均衡测试","slug":"_2-3-负载均衡测试","link":"#_2-3-负载均衡测试","children":[]},{"level":3,"title":"常见错误","slug":"常见错误","link":"#常见错误","children":[]}]},{"level":2,"title":"1 准备服务器","slug":"_1-准备服务器","link":"#_1-准备服务器","children":[{"level":3,"title":"1.1 创建server-user容器","slug":"_1-1-创建server-user容器","link":"#_1-1-创建server-user容器","children":[]},{"level":3,"title":"1.2 创建server-order容器","slug":"_1-2-创建server-order容器","link":"#_1-2-创建server-order容器","children":[]}]},{"level":2,"title":"2 程序实现","slug":"_2-程序实现","link":"#_2-程序实现","children":[{"level":3,"title":"2.1 创建实体类","slug":"_2-1-创建实体类","link":"#_2-1-创建实体类","children":[]},{"level":3,"title":"2.2 创建Mapper","slug":"_2-2-创建mapper","link":"#_2-2-创建mapper","children":[]},{"level":3,"title":"2.3 配置垂直分片","slug":"_2-3-配置垂直分片","link":"#_2-3-配置垂直分片","children":[]}]},{"level":2,"title":"3 测试垂直分片","slug":"_3-测试垂直分片","link":"#_3-测试垂直分片","children":[]},{"level":2,"title":"1 准备服务器","slug":"_1-准备服务器-1","link":"#_1-准备服务器-1","children":[{"level":3,"title":"1.1 创建server-order0容器","slug":"_1-1-创建server-order0容器","link":"#_1-1-创建server-order0容器","children":[]},{"level":3,"title":"1.2 创建server-order1容器","slug":"_1-2-创建server-order1容器","link":"#_1-2-创建server-order1容器","children":[]}]},{"level":2,"title":"2 基本水平分片","slug":"_2-基本水平分片","link":"#_2-基本水平分片","children":[{"level":3,"title":"2.1 数据源配置","slug":"_2-1-数据源配置","link":"#_2-1-数据源配置","children":[]},{"level":3,"title":"2.3 标椎分片表配置","slug":"_2-3-标椎分片表配置","link":"#_2-3-标椎分片表配置","children":[]},{"level":3,"title":"2.4 行表达式","slug":"_2-4-行表达式","link":"#_2-4-行表达式","children":[]},{"level":3,"title":"2.5 分布式序列算法","slug":"_2-5-分布式序列算法","link":"#_2-5-分布式序列算法","children":[]}]},{"level":2,"title":"3 多表关联","slug":"_3-多表关联","link":"#_3-多表关联","children":[{"level":3,"title":"3.1 创建关联表","slug":"_3-1-创建关联表","link":"#_3-1-创建关联表","children":[]},{"level":3,"title":"3.2 创建实体类","slug":"_3-2-创建实体类","link":"#_3-2-创建实体类","children":[]},{"level":3,"title":"3.3 创建Mapper","slug":"_3-3-创建mapper","link":"#_3-3-创建mapper","children":[]},{"level":3,"title":"3.4 配置关联表","slug":"_3-4-配置关联表","link":"#_3-4-配置关联表","children":[]},{"level":3,"title":"3.5 测试插入数据","slug":"_3-5-测试插入数据","link":"#_3-5-测试插入数据","children":[]}]},{"level":2,"title":"4 绑定表","slug":"_4-绑定表","link":"#_4-绑定表","children":[{"level":3,"title":"4.1 创建VO对象","slug":"_4-1-创建vo对象","link":"#_4-1-创建vo对象","children":[]},{"level":3,"title":"4.2 添加Mapper方法","slug":"_4-2-添加mapper方法","link":"#_4-2-添加mapper方法","children":[]},{"level":3,"title":"4.3 测试关联查询","slug":"_4-3-测试关联查询","link":"#_4-3-测试关联查询","children":[]},{"level":3,"title":"4.4 配置绑定表","slug":"_4-4-配置绑定表","link":"#_4-4-配置绑定表","children":[]}]},{"level":2,"title":"5 广播表","slug":"_5-广播表","link":"#_5-广播表","children":[{"level":3,"title":"5.1 什么是广播表","slug":"_5-1-什么是广播表","link":"#_5-1-什么是广播表","children":[]},{"level":3,"title":"5.2 创建广播表","slug":"_5-2-创建广播表","link":"#_5-2-创建广播表","children":[]},{"level":3,"title":"5.3 程序实现","slug":"_5-3-程序实现","link":"#_5-3-程序实现","children":[]},{"level":3,"title":"5.4 测试广播表","slug":"_5-4-测试广播表","link":"#_5-4-测试广播表","children":[]}]}],"git":{"updatedTime":1698505765000,"contributors":[{"name":"laohai","email":"1409117198@qq.com","commits":1}]},"filePathRelative":"mysql/MySQL17-ShardingSphere.md","excerpt":""}');export{l as data};
