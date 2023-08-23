# 1 记录日志

记录日志：记录业务人员的操作日志【删除数据、修改数据、新增操作...】

## 1.1 记录日志的意义

后台管理系统记录操作日志的意义非常重要，主要体现在以下几个方面：

1、安全性：操作日志可以记录管理员的操作行为，以此来监控和防止管理员滥用权限或者进行其他不当操作。如果后台管理系统没有记录操作日志，

那么一旦出现不当操作，就无法对其进行追踪和定位，造成不可估量的安全风险。

2、追溯性：操作日志可以帮助管理员及时发现问题，并可以通过日志进行快速定位和处理。例如某个用户投诉自己的订单异常，管理员可以直接通过

查询该订单的操作日志，找到问题所在并进行修改或解决。

因此，后台管理系统记录操作日志，对于维护系统的安全稳定性、保障客户数据的完整性和隐私性、提高系统及时响应和处理能力等方面具有重要意

义，是保障企业正常运营和客户满意度的重要手段。

## 1.2 日志数据表结构

记录操作日志的表结构如下所示：

```sql
CREATE TABLE `sys_oper_log` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '日志主键',
  `title` varchar(50) DEFAULT '' COMMENT '模块标题',
  `business_type` varchar(20) DEFAULT '0' COMMENT '业务类型（0其它 1新增 2修改 3删除）',
  `method` varchar(100) DEFAULT '' COMMENT '方法名称',
  `request_method` varchar(10) DEFAULT '' COMMENT '请求方式',
  `operator_type` varchar(20) DEFAULT '0' COMMENT '操作类别（0其它 1后台用户 2手机端用户）',
  `oper_name` varchar(50) DEFAULT '' COMMENT '操作人员',
  `dept_name` varchar(50) DEFAULT '' COMMENT '部门名称',
  `oper_url` varchar(255) DEFAULT '' COMMENT '请求URL',
  `oper_ip` varchar(128) DEFAULT '' COMMENT '主机地址',
  `oper_param` varchar(2000) DEFAULT '' COMMENT '请求参数',
  `json_result` varchar(2000) DEFAULT '' COMMENT '返回参数',
  `status` int DEFAULT '0' COMMENT '操作状态（0正常 1异常）',
  `error_msg` varchar(2000) DEFAULT '' COMMENT '错误消息',
  `oper_time` datetime DEFAULT NULL COMMENT '操作时间',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint NOT NULL DEFAULT '0' COMMENT '删除标记（0:不可用 1:可用）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb3 COMMENT='操作日志记录';
```

## 1.3 记录日志思想

**原始做法的伪代码实现**：

```java
// 保存品牌的方法
@PostMapping("save")
public Result save( @RequestBody Brand brand) {
    
    // 创建SysOperLog对象封装操作日志的相关参数
    SysOperLog sysOperLog = new SysOperLog() ;
    sysOperLog.setTitle("品牌管理")
    sysOperLog.setBusinessType("新增品牌")
    sysOperLog.setMethod("com.atguigu.spzx.product.controller.BrandController.save()")
    ...
	
    //执行业务操作
    brandService.save(brand);
    Result result = Result.build(null , ResultCodeEnum.SUCCESS) ; 
    
    // 将响应结果设置到SysOperLog对象中
    sysOperLog.setJsonResult(JSON.toJsonString(result)) ;
    
    // 保存日志数据
    sysOperLogService.save(sysOperLog) ;
    
    return result ;
}


// 修改品牌的方法
@PostMapping("updateById")
public Result updateById( @RequestBody Brand brand) {
    
    // 创建SysOperLog对象封装操作日志的相关参数
    SysOperLog sysOperLog = new SysOperLog() ;
    sysOperLog.setTitle("品牌管理")
    sysOperLog.setBusinessType("修改品牌")
    sysOperLog.setMethod("com.atguigu.spzx.product.controller.BrandController.updateById()")
    ...
	
    //执行业务操作
    brandService.updateById(brand);
    Result result = Result.build(null , ResultCodeEnum.SUCCESS) ; 
    
    // 将响应结果设置到SysOperLog对象中
    sysOperLog.setJsonResult(JSON.toJsonString(result)) ;
    
    // 保存日志数据
    sysOperLogService.save(sysOperLog) ;
    
    return result ;
}
```

上述方式存在的弊端：

1、需要更改每一个业务接口，不符合开闭原则(对修改关闭对扩展开放)

2、在每一个业务接口中都需要添加记录日志的代码，影响开发效率

3、业务接口中添加记录日志的代码非常类似，每一个业务接口中都编写一次代码复用性较差

**AOP记录日志**

AOP记录日志的主要优点包括：

1、低侵入性：AOP记录日志不需要修改原有的业务逻辑代码，只需要新增一个切面即可。

2、统一管理：通过AOP记录日志可以将各个模块中需要记录日志的部分进行统一管理，降低了代码重复度，提高了代码可维护性和可扩展性。

3、提升效率：通过引入AOP记录日志，可以避免手动编写日志记录代码，减少了开发人员的工作量，提升了开发效率。

4、安全性：通过AOP记录日志，可以收集系统的操作日志，帮助管理员及时发现问题并进行调整，从而提高系统的安全性。



**AOP记录日志的整体思想**：

1、基于自定义注解来确定切入点【优势：可以通过自定义注解携带一些变化的参数，比如模块名称】

2、基于环绕通知来完成日志记录



## 1.4 切面类环境搭建

### 1.4.1 日志模块创建

具体步骤：

1、在common模块下创建一个独立的记录日志的模块【common-log】

2、在该模块下加入如下的依赖

```xml
<dependencies>

    <dependency>
        <groupId>com.atguigu.spzx</groupId>
        <artifactId>spzx-model</artifactId>
        <version>1.0-SNAPSHOT</version>
        <scope>provided</scope>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-aop</artifactId>
    </dependency>
    
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <scope>provided</scope>
    </dependency>
    
    <dependency>
        <groupId>com.atguigu.spzx</groupId>
        <artifactId>common-util</artifactId>
        <version>1.0-SNAPSHOT</version>
    </dependency>

</dependencies>
```

### 1.4.2 Log

自定义Log注解，如下所示：

```java
//  com.atguigu.spzx.common.log.annotation;
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface Log {		// 自定义操作日志记录注解

    public String title() ;								// 模块名称
    public OperatorType operatorType() default OperatorType.MANAGE;	// 操作人类别
    public int businessType() ;     // 业务类型（0其它 1新增 2修改 3删除）
    public boolean isSaveRequestData() default true;   // 是否保存请求的参数
    public boolean isSaveResponseData() default true;  // 是否保存响应的参数
    
}
```

### 1.4.3 OperatorType

操作人枚举类定义：

```java
// com.atguigu.spzx.common.log.enums;
public enum OperatorType {		// 操作人类别

    OTHER,		// 其他
    MANAGE,		// 后台用户
    MOBILE		// 手机端用户
}
```

### 1.4.4 LogAspect

定义一个切面类，并且在该切面类中提供一个环绕通知方法，代码如下所示：

```java
// com.atguigu.spzx.common.log.aspect;
@Aspect
@Component
@Slf4j
public class LogAspect {            // 环绕通知切面类定义

    @Around(value = "@annotation(sysLog)")
    public Object doAroundAdvice(ProceedingJoinPoint joinPoint , Log sysLog) {
        log.info("LogAspect...doAroundAdvice方法执行了");
        Object proceed = null;
        try {
            proceed = joinPoint.proceed();              // 执行业务方法
        } catch (Throwable e) {                         // 代码执行进入到catch中，业务方法执行产生异常
            throw new RuntimeException(e);
        }
        return proceed ;                                // 返回执行结果
    }

}
```

### 1.4.5 EnableLogAspect

想让LogAspect这个切面类在其他的业务服务中进行使用，那么就需要该切面类纳入到Spring容器中。Spring Boot默认会扫描和启动类所在包相同包

中的bean以及子包中的bean。而LogAspect切面类不满足扫描条件，因此无法直接在业务服务中进行使用。那么此时可以通过自定义注解进行实现，

代码如下所示：

```java
// com.atguigu.spzx.common.log.annotation;
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Import(value = LogAspect.class)            // 通过Import注解导入日志切面类到Spring容器中
public @interface EnableLogAspect {
    
}
```

### 1.4.6 测试日志切面类

在ManagerApplication服务的启动类上添加**EnableLogAspect**注解，在要添加日志功能的业务接口方法上添加**Log**注解，启动服务进行测试。



## 1.5 保存日志数据

更改LogAspect切面类代码完成日志数据数据的保存。

### 1.5.1 SysOperLog

定义一个与日志数据库表相对应的实体类：

```java
// com.atguigu.spzx.model.entity.system;
@Data
public class SysOperLog extends BaseEntity {

	private String title;					// 模块标题
	private String method;					// 方法名称
	private String requestMethod;			// 请求方式
	private String operatorType;			// 操作类别（0其它 1后台用户 2手机端用户）
    private Integer businessType ;			// 业务类型（0其它 1新增 2修改 3删除）
	private String operName;				// 操作人员
	private String operUrl;					// 请求URL
	private String operIp;					// 主机地址
	private String operParam;				// 请求参数
	private String jsonResult;				// 返回参数
	private Integer status;					// 操作状态（0正常 1异常）
	private String errorMsg;				// 错误消息

}
```

### 1.5.2 LogAspect

日志切面类代码修改，如下所示：

```java
// com.atguigu.spzx.common.log.aspect;
@Aspect
@Component
@Slf4j
public class LogAspect {            // 环绕通知切面类定义

    @Autowired
    private AsyncOperLogService asyncOperLogService ;

    @Around(value = "@annotation(sysLog)")
    public Object doAroundAdvice(ProceedingJoinPoint joinPoint , Log sysLog) {

        // 构建前置参数
        SysOperLog sysOperLog = new SysOperLog() ;
        beforeHandleLog(sysLog , joinPoint , sysOperLog) ;
        Object proceed = null;
        try {
            proceed = joinPoint.proceed();                      // 执行业务方法
            afterHandlLog(sysLog , proceed , sysOperLog , 0 , null) ;  // 构建响应结果参数
        } catch (Throwable e) {                                 // 代码执行进入到catch中，业务方法执行产生异常
            e.printStackTrace();                                // 打印异常信息
            afterHandlLog(sysLog , proceed , sysOperLog , 1 , e.getMessage()) ;
        }

        // 保存日志数据
        asyncOperLogService.saveSysOperLog(sysOperLog);

        // 返回执行结果
        return proceed ;
    }

    private void afterHandlLog(Log sysLog, Object proceed, SysOperLog sysOperLog, int status , String errorMsg) {
        if(sysLog.isSaveResponseData()) {
            sysOperLog.setJsonResult(JSON.toJSONString(proceed));
        }
        sysOperLog.setStatus(status);
        sysOperLog.setErrorMsg(errorMsg);
    }

    private void beforeHandleLog(Log sysLog, ProceedingJoinPoint joinPoint, SysOperLog sysOperLog) {

        // 设置操作模块名称
        sysOperLog.setTitle(sysLog.title());
        sysOperLog.setOperatorType(sysLog.operatorType().name());

        // 获取目标方法信息
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature() ;
        Method method = methodSignature.getMethod();
        sysOperLog.setMethod(method.getDeclaringClass().getName());

        // 获取请求相关参数
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = requestAttributes.getRequest();
        sysOperLog.setRequestMethod(request.getMethod());
        sysOperLog.setOperUrl(request.getRequestURI());
        sysOperLog.setOperIp(IpUtil.getIpAddress(request));

        // 设置请求参数
        if(sysLog.isSaveRequestData()) {
            String requestMethod = sysOperLog.getRequestMethod();
            if (HttpMethod.PUT.name().equals(requestMethod) || HttpMethod.POST.name().equals(requestMethod)) {
                String params = argsArrayToString(joinPoint.getArgs());
                sysOperLog.setOperParam(params);
            }
        }
        sysOperLog.setOperName(AuthContextUtil.get().getUserName());

    }

    // 参数拼装
    private String argsArrayToString(Object[] paramsArray) {
        String params = "";
        if (paramsArray != null && paramsArray.length > 0) {
            for (Object o : paramsArray) {
                if (!StringUtils.isEmpty(o) && !isFilterObject(o)) {
                    try {
                        Object jsonObj = JSON.toJSON(o);
                        params += jsonObj.toString() + " ";
                    } catch (Exception e) {
                    }
                }
            }
        }
        return params.trim();
    }

    /**
     * 判断是否需要过滤的对象。
     *
     * @param o 对象信息。
     * @return 如果是需要过滤的对象，则返回true；否则返回false。
     */
    @SuppressWarnings("rawtypes")
    public boolean isFilterObject(final Object o) {
        Class<?> clazz = o.getClass();
        if (clazz.isArray()) {       // 判断是否为数组类型
            return clazz.getComponentType().isAssignableFrom(MultipartFile.class);  // 如果是数组，判断其元素类型是否为MultipartFile或其子类
        } else if (Collection.class.isAssignableFrom(clazz)) { // 判断是否为Collection集合类型
            Collection collection = (Collection) o;
            for (Object value : collection) {  // 只要有一个元素的类型为MultipartFile或其子类，则认为该集合对象为过滤对象
                return value instanceof MultipartFile;
            }
        } else if (Map.class.isAssignableFrom(clazz)) {  // 判断是否为Map集合类型
            Map map = (Map) o;
            for (Object value : map.entrySet()) {  // 只要有一个Value的类型是MultipartFile或其子类，则认为该映射对象为过滤对象
                Map.Entry entry = (Map.Entry) value;
                return entry.getValue() instanceof MultipartFile;
            }
        }

        // 如果以上条件都不满足，最后判断对象本身是否为MultipartFile、HttpServletRequest、HttpServletResponse类的实例
        return o instanceof MultipartFile || o instanceof HttpServletRequest || o instanceof HttpServletResponse ;
    }
}
```

### 1.5.3 AsyncOperLogService

在common-log模块中定义保存日志数据的service接口，然后在具体的业务服务中给出实现。

```java
//  com.atguigu.spzx.common.log.service;
public interface AsyncOperLogService {			// 保存日志数据
    public abstract void saveSysOperLog(SysOperLog sysOperLog) ;
}

// com.atguigu.spzx.manager.service;
@Service
public class AsyncOperLogServiceImpl implements AsyncOperLogService {

    @Autowired
    private SysOperLogMapper sysOperLogMapper;

    @Async      // 异步执行保存日志操作
    @Override
    public void saveSysOperLog(SysOperLog sysOperLog) {
        sysOperLogMapper.insert(sysOperLog);
    }
    
}
```

注意：要想通过异步线程执行saveSysOperLog方法，那么此时就需要在启动类上添加**@EnableAsync**注解。

### 1.5.4 SysOperLogMapper

SysOperLogMapper持久层接口：

```java
// com.atguigu.spzx.manager.mapper;
@Mapper
public interface SysOperLogMapper {
    public abstract void insert(SysOperLog sysOperLog);
}
```

### 1.5.5 SysOperLogMapper.xml

在SysOperLogMapper.xml映射文件中添加如下的SQL语句：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.atguigu.spzx.manager.mapper.SysOperLogMapper">

    <insert id="insert" >
        insert into sys_oper_log (
            id,
            title,
            method,
            request_method,
            operator_type,
            oper_name,
            oper_url,
            oper_ip,
            oper_param,
            json_result,
            status,
            error_msg
        ) values (
                 #{id},
                 #{title},
                 #{method},
                 #{requestMethod},
                 #{operatorType},
                 #{operName},
                 #{operUrl},
                 #{operIp},
                 #{operParam},
                 #{jsonResult},
                 #{status},
                 #{errorMsg}
             )
    </insert>

</mapper>
```

在需要添加操作日志的接口方法上添加**@Log**注解进行测试。

## 1.6 事务失效

当我们自定义了切面类以后，如果不注意异常的处理，那么此时就会出现事务失效的情况。

### 1.6.1 事务失效演示

以给角色分配菜单的代码为例，演示事务失效的问题，代码如下所示：

```java
// com.atguigu.spzx.manager.service.impl.SysRoleMenuServiceImpl
@Log(title = "角色菜单模块" , businessType = 2 )		
@Transactional
@Override
public void doAssign(AssginMenuDto assginMenuDto) {

    // 根据角色的id删除其所对应的菜单数据
    sysRoleMenuMapper.deleteByRoleId(assginMenuDto.getRoleId());

    int a = 1 / 0 ;		// 手动抛出异常

    // 获取菜单的id
    List<Map<String, Number>> menuInfo = assginMenuDto.getMenuIdList();
    if(menuInfo != null && menuInfo.size() > 0) {
        sysRoleMenuMapper.doAssign(assginMenuDto) ;
    }

}
```

**注意**：不加@Log注解事务可以进行回滚，但是加上该注解以后事务就会失效。

### 1.6.2 问题分析

Spring的事务控制是通过aop进行实现的，在框架底层会存在一个事务切面类，当业务方法产生异常以后，事务切面类感知到异常以后事务进行回滚。

当系统中存在多个切面类的时候，Spring框架会按照**@Order**注解的值对切面进行排序，@Order的值越小优先级越高，@Order的值越大优先级越

低。优先级越高的切面类越优先执行，当我们没有给切面类指定排序值的时候，我们自定义的切面类的优先级和aop切面类的优先级相同，那么此时

**事务切面类的优先级要高于自定义切面类**，那么切面类的执行顺序如下所示：

![image-20230613152408005](assets/image-20230613152408005.png) 

当在自定义切面类中对异常进行了捕获，没有将异常进行抛出，那么此时事务切面类是感知不到异常的存在，因此事务失效。

### 1.6.3 问题解决

解决方案一：使用@Order注解提高自定义切面类的优先级

解决方案二：在自定义切面类的catch中进行异常的抛出









































