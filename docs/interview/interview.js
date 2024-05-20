const interview = [
  {
    text: '面试专题01',
    link: '',
    children: [
      {
        text: '高频面试题',
        link: '/interview/00.高频面试题/高频面试题.md',
      },
      {
        text: 'Java基础',
        link: '/interview/01.Java基础/01.JAVASE/JAVASE.md',
        children: [
          {
            text: '01.JAVASE',
            link: '/interview/01.Java基础/01.JAVASE/JAVASE.md',
          },
          {
            text: '02.集合类',
            link: '/interview/01.Java基础/02.集合类/集合类.md',
          },
        ],
      },
      {
        text: 'Java框架',
        link: '/interview/02.Java框架/01.MyBatis/MyBatis.md',
        children: [
          {
            text: '01.MyBatis',
            link: '/interview/02.Java框架/01.MyBatis/MyBatis.md',
          },
          {
            text: '02.Spring、SpringMVC、SpringBoot',
            link: '/interview/02.Java框架/02.Spring、SpringMVC、SpringBoot/Spring、SpringMVC、SpringBoot.md',
          },
          {
            text: '03.SpringCloud',
            link: '/interview/02.Java框架/03.SpringCloud/SpringCloud.md',
          },
        ],
      },
      {
        text: 'Java高级',
        link: '/interview/03.Java高级/01.JVM/JVM.md',
        children: [
          {
            text: '01.JVM',
            link: '/interview/03.Java高级/01.JVM/JVM.md',
          },
          {
            text: '02.JUC',
            link: '/interview/03.Java高级/02.JUC/JUC.md',
          },
          {
            text: '04.线程、并发',
            link: '/interview/07.分布式/线程、并发/线程、并发.md',
          },
          {
            text: '05.设计模式',
            link: '/interview/03.Java高级/03.设计模式/设计模式.md',
          },
        ],
      },
      {
        text: '分布式',
        link: '/interview/07.分布式/微服务、分布式/微服务、分布式.md',
        children: [
          {
            text: '01.微服务、分布式',
            link: '/interview/07.分布式/微服务、分布式/微服务、分布式.md',
          },
          {
            text: '02.Cloud核心中间件',
            link: '/interview/07.分布式/Cloud核心中间件/Cloud核心中间件.md',
          },
        ],
      },
    ],
  },
  {
    text: '面试专题02',
    link: '',
    children: [
      {
        text: '中间件',
        link: '/interview/04.数据库/MySQL/MySQL.md',
        children: [
          {
            text: '01.MYSQL',
            link: '/interview/04.数据库/MySQL/MySQL.md',
          },
          {
            text: '02.Redis',
            link: '/interview/05.缓存/Redis/Redis.md',
          },
          {
            text: '03.消息队列',
            link: '/interview/06.消息队列/RabbitMQ/RabbitMQ.md',
          },
          {
            text: '04.ElasticSearch',
            link: '/interview/07.分布式/ElasticSearch/ElasticSearch.md',
          },
        ],
      },
      {
        text: '场景题',
        link: '/interview/08.场景题/场景题/场景题.md',
        children: [
          {
            text: '01.场景题',
            link: '/interview/08.场景题/场景题/场景题.md',
          },
          {
            text: '02.项目上线问题排查',
            link: '/interview/08.场景题/项目上线问题排查/项目上线问题排查.md',
          },
          {
            text: '03.人事面试',
            link: '/interview/09.人事面试/人事面试.md',
          },
        ],
      },
      {
        text: '其他',
        link: '/interview/10.网络/计算机网络/计算机网络.md',
        children: [
          {
            text: '01.计算机网络',
            link: '/interview/10.网络/计算机网络/计算机网络.md',
          },
          {
            text: '02.Netty',
            link: '/interview/10.网络/Netty/Netty.md',
          },
          {
            text: '03.Tomcat',
            link: '/interview/10.网络/Tomcat/Tomcat.md',
          },
          {
            text: '04.云计算',
            link: '/interview/11.热门领域概念/云计算/云计算.md',
          },
        ],
      },
    ],
  },
]

export default interview
