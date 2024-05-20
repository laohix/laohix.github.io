const l=JSON.parse('{"key":"v-d8c837a8","path":"/interview/02.Java%E6%A1%86%E6%9E%B6/02.Spring%E3%80%81SpringMVC%E3%80%81SpringBoot/Spring%E3%80%81SpringMVC%E3%80%81SpringBoot.html","title":"Spring、SpringMVC、SpringBoot","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"1. 什么是 Spring IOC 容器？","slug":"_1-什么是-spring-ioc-容器","link":"#_1-什么是-spring-ioc-容器","children":[]},{"level":2,"title":"2. 如何实现一个Spring容器","slug":"_2-如何实现一个spring容器","link":"#_2-如何实现一个spring容器","children":[]},{"level":2,"title":"3. 什么是依赖注入？可以通过多少种方式完成依赖注入？","slug":"_3-什么是依赖注入-可以通过多少种方式完成依赖注入","link":"#_3-什么是依赖注入-可以通过多少种方式完成依赖注入","children":[]},{"level":2,"title":"4. BeanFactory 和 ApplicationContext的区别？","slug":"_4-beanfactory-和-applicationcontext的区别","link":"#_4-beanfactory-和-applicationcontext的区别","children":[]},{"level":2,"title":"5. 构造函数注入和 setter 注入","slug":"_5-构造函数注入和-setter-注入","link":"#_5-构造函数注入和-setter-注入","children":[]},{"level":2,"title":"6. spring 提供了哪些配置方式？","slug":"_6-spring-提供了哪些配置方式","link":"#_6-spring-提供了哪些配置方式","children":[]},{"level":2,"title":"7. Spring 中的 bean 的作用域有哪些?","slug":"_7-spring-中的-bean-的作用域有哪些","link":"#_7-spring-中的-bean-的作用域有哪些","children":[]},{"level":2,"title":"8. 深入谈谈对Ioc的理解？","slug":"_8-深入谈谈对ioc的理解","link":"#_8-深入谈谈对ioc的理解","children":[]},{"level":2,"title":"9. 将一个类声明为Spring的 bean 的注解有哪些?","slug":"_9-将一个类声明为spring的-bean-的注解有哪些","link":"#_9-将一个类声明为spring的-bean-的注解有哪些","children":[]},{"level":2,"title":"10. Spring 中的 bean 生命周期?","slug":"_10-spring-中的-bean-生命周期","link":"#_10-spring-中的-bean-生命周期","children":[]},{"level":2,"title":"11.什么是bean的自动装配，有哪些方式？","slug":"_11-什么是bean的自动装配-有哪些方式","link":"#_11-什么是bean的自动装配-有哪些方式","children":[]},{"level":2,"title":"12. Spring中出现同名bean怎么办？","slug":"_12-spring中出现同名bean怎么办","link":"#_12-spring中出现同名bean怎么办","children":[]},{"level":2,"title":"13. Spring 怎么解决循环依赖问题？","slug":"_13-spring-怎么解决循环依赖问题","link":"#_13-spring-怎么解决循环依赖问题","children":[]},{"level":2,"title":"14. Spring 中的单例 bean 的线程安全问题？","slug":"_14-spring-中的单例-bean-的线程安全问题","link":"#_14-spring-中的单例-bean-的线程安全问题","children":[]},{"level":2,"title":"15. 什么是 AOP？","slug":"_15-什么是-aop","link":"#_15-什么是-aop","children":[]},{"level":2,"title":"16. 谈谈对Aop的理解","slug":"_16-谈谈对aop的理解","link":"#_16-谈谈对aop的理解","children":[]},{"level":2,"title":"17. AOP 有哪些实现方式？","slug":"_17-aop-有哪些实现方式","link":"#_17-aop-有哪些实现方式","children":[]},{"level":2,"title":"18. Spring 框架中用到了哪些设计模式？","slug":"_18-spring-框架中用到了哪些设计模式","link":"#_18-spring-框架中用到了哪些设计模式","children":[]},{"level":2,"title":"19. Spring 事务实现方式有哪些以及原理","slug":"_19-spring-事务实现方式有哪些以及原理","link":"#_19-spring-事务实现方式有哪些以及原理","children":[]},{"level":2,"title":"20. Spring事务的隔离级别","slug":"_20-spring事务的隔离级别","link":"#_20-spring事务的隔离级别","children":[]},{"level":2,"title":"21. Spring事务定义的传播规则","slug":"_21-spring事务定义的传播规则","link":"#_21-spring事务定义的传播规则","children":[]},{"level":2,"title":"22. Spring事务什么时候会失效","slug":"_22-spring事务什么时候会失效","link":"#_22-spring事务什么时候会失效","children":[]},{"level":2,"title":"23. SpringMVC 工作原理了解吗?","slug":"_23-springmvc-工作原理了解吗","link":"#_23-springmvc-工作原理了解吗","children":[]},{"level":2,"title":"24. 简单介绍 Spring MVC 的核心组件","slug":"_24-简单介绍-spring-mvc-的核心组件","link":"#_24-简单介绍-spring-mvc-的核心组件","children":[]},{"level":2,"title":"25. @Controller 注解有什么用？","slug":"_25-controller-注解有什么用","link":"#_25-controller-注解有什么用","children":[]},{"level":2,"title":"26. @RestController 和 @Controller 有什么区别？","slug":"_26-restcontroller-和-controller-有什么区别","link":"#_26-restcontroller-和-controller-有什么区别","children":[]},{"level":2,"title":"27. @RequestMapping 和 @GetMapping 注解的不同之处在哪里？","slug":"_27-requestmapping-和-getmapping-注解的不同之处在哪里","link":"#_27-requestmapping-和-getmapping-注解的不同之处在哪里","children":[]},{"level":2,"title":"28. @RequestParam 和 @PathVariable 两个注解的区别","slug":"_28-requestparam-和-pathvariable-两个注解的区别","link":"#_28-requestparam-和-pathvariable-两个注解的区别","children":[]},{"level":2,"title":"29. 返回 JSON 格式使用什么注解？","slug":"_29-返回-json-格式使用什么注解","link":"#_29-返回-json-格式使用什么注解","children":[]},{"level":2,"title":"30. 什么是springmvc拦截器以及如何使用它？","slug":"_30-什么是springmvc拦截器以及如何使用它","link":"#_30-什么是springmvc拦截器以及如何使用它","children":[]},{"level":2,"title":"31. 为什么要用SpringBoot?","slug":"_31-为什么要用springboot","link":"#_31-为什么要用springboot","children":[]},{"level":2,"title":"32.Spring Boot 自动配置原理？","slug":"_32-spring-boot-自动配置原理","link":"#_32-spring-boot-自动配置原理","children":[]},{"level":2,"title":"33. Spring Boot中如何实现对不同环境的属性配置文件的支持？","slug":"_33-spring-boot中如何实现对不同环境的属性配置文件的支持","link":"#_33-spring-boot中如何实现对不同环境的属性配置文件的支持","children":[]},{"level":2,"title":"34. Spring Boot 的核心注解是哪个？它主要由哪几个注解组成的？","slug":"_34-spring-boot-的核心注解是哪个-它主要由哪几个注解组成的","link":"#_34-spring-boot-的核心注解是哪个-它主要由哪几个注解组成的","children":[]},{"level":2,"title":"35. 你如何理解 Spring Boot 中的 Starter？","slug":"_35-你如何理解-spring-boot-中的-starter","link":"#_35-你如何理解-spring-boot-中的-starter","children":[]},{"level":2,"title":"36. Spring Boot Starter 的工作原理是什么？","slug":"_36-spring-boot-starter-的工作原理是什么","link":"#_36-spring-boot-starter-的工作原理是什么","children":[]},{"level":2,"title":"37. 什么是嵌入式服务器？为什么要使用嵌入式服务器?","slug":"_37-什么是嵌入式服务器-为什么要使用嵌入式服务器","link":"#_37-什么是嵌入式服务器-为什么要使用嵌入式服务器","children":[]}],"git":{"updatedTime":1716198854000,"contributors":[{"name":"laohai","email":"1409117198@qq.com","commits":1}]},"filePathRelative":"interview/02.Java框架/02.Spring、SpringMVC、SpringBoot/Spring、SpringMVC、SpringBoot.md","excerpt":""}');export{l as data};
