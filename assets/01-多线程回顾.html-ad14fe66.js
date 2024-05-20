import{_ as n,o as e,c as a,e as s}from"./app-8007fa1b.js";const i="/assets/img001-23393f1d.png",d="/assets/img002-ff8db422.png",l="/assets/img003-ec9e4925.png",t="/assets/img004-8cbdb53d.png",r="/assets/img005-224b10b1.png",c="/assets/img006-0b5d117e.png",u="/assets/img007-48eabf5d.png",v="/assets/img008-645ea39f.png",o="/assets/img009-dea8da35.png",p="/assets/img010-294612de.png",m="/assets/img011-9e875f37.png",b="/assets/img012-13bd2cfd.png",h={},k=s('<h1 id="一、相似概念辨析" tabindex="-1"><a class="header-anchor" href="#一、相似概念辨析" aria-hidden="true">#</a> 一、相似概念辨析</h1><h2 id="_1、程序、进程、线程" tabindex="-1"><a class="header-anchor" href="#_1、程序、进程、线程" aria-hidden="true">#</a> 1、程序、进程、线程</h2><h3 id="_1程序" tabindex="-1"><a class="header-anchor" href="#_1程序" aria-hidden="true">#</a> ①程序</h3><p>程序从开发到发布的过程：源程序（源代码） → 打包封装 → 应用软件</p><p>笼统的来说，源程序、应用软件都可以称之为『程序』。</p><p>相对于进程、线程来说，程序是一个<strong>静态</strong>的概念。</p><h3 id="_2进程" tabindex="-1"><a class="header-anchor" href="#_2进程" aria-hidden="true">#</a> ②进程</h3><ul><li>内部视角：程序运行起来就是一个进程。所以相对于程序来说，进程是一个<strong>动态</strong>的概念。</li><li>外部视角：站在操作系统的层次上来说，现代的大型操作系统都是支持多进程模式运行的，这样操作系统就可以同时执行很多个任务。</li></ul><h3 id="_3线程" tabindex="-1"><a class="header-anchor" href="#_3线程" aria-hidden="true">#</a> ③线程</h3><p>在一个进程中，需要同时处理多个不同任务，每一个任务由一个线程来执行。从这个意义上来说，我们可以<span style="color:blue;font-weight:bold;"> 把进程看做是线程的容器</span>。</p><p><img src="'+i+`" alt=""></p><br><h2 id="_2、串行、并行、并发" tabindex="-1"><a class="header-anchor" href="#_2、串行、并行、并发" aria-hidden="true">#</a> 2、串行、并行、并发</h2><h3 id="_1串行" tabindex="-1"><a class="header-anchor" href="#_1串行" aria-hidden="true">#</a> ①串行</h3><p>多个操作<strong>在同一个线程内</strong>按顺序执行。这种情况下的工作模式我们往往也称之为：<strong>同步</strong> 。按照同步模式执行的多个操作，当前操作没有结束时，下一个操作就必须<strong>等待</strong>。处于等待中的状态往往也称为：<strong>阻塞</strong>（block）。</p><h3 id="_2并行、并发" tabindex="-1"><a class="header-anchor" href="#_2并行、并发" aria-hidden="true">#</a> ②并行、并发</h3><p>并行和并发都是以异步的模式来执行操作的。<strong>异步</strong>工作模式下不同线程内的操作互相不需要等待。</p><ul><li>并行：多个 CPU（或 CPU 核心）同时执行多个任务</li><li>并发：一个 CPU（或 CPU 核心）同时执行多个任务</li></ul><h2 id="_3、sleep-和-wait-区别" tabindex="-1"><a class="header-anchor" href="#_3、sleep-和-wait-区别" aria-hidden="true">#</a> 3、sleep() 和 wait() 区别</h2><p>二者最关键的区别是下面两点：</p><ul><li>sleep() 会让线程<strong>拿着锁</strong>去睡</li><li>wait() 会让线程<strong>放开锁</strong>去睡</li></ul><h3 id="_1sleep-进入等待状态不释放锁" tabindex="-1"><a class="header-anchor" href="#_1sleep-进入等待状态不释放锁" aria-hidden="true">#</a> ①sleep() 进入等待状态不释放锁</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 1、创建一个对象，作为锁对象
Object lockObj=new Object();

// 2、创建执行 sleep 的线程
        new Thread(()-&gt;{

        System.out.println(Thread.currentThread().getName()+&quot; begin&quot;);
// ※ 两个线程使用同一个锁对象，就会存在竞争关系
synchronized (lockObj){
        System.out.println(Thread.currentThread().getName()+&quot; get lock&quot;);
        try{

        // ※ sleep() 方法拿着锁去睡
        TimeUnit.SECONDS.sleep(5);
        }catch(InterruptedException e){
        e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName()+&quot; release lock&quot;);

        }
        System.out.println(Thread.currentThread().getName()+&quot; end&quot;);

        },&quot;thread-a&quot;).start();

// ※ 让主线程睡一会儿，确保 a 线程先启动
        try{TimeUnit.SECONDS.sleep(1);}catch(InterruptedException e){}

// 3、创建竞争锁的线程
        new Thread(()-&gt;{

        System.out.println(Thread.currentThread().getName()+&quot; begin&quot;);
// ※ 两个线程使用同一个锁对象，就会存在竞争关系
synchronized (lockObj){
        System.out.println(Thread.currentThread().getName()+&quot; get lock&quot;);
        }

        System.out.println(Thread.currentThread().getName()+&quot; end&quot;);
        },&quot;thread-b&quot;).start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><blockquote><p>thread-a begin thread-a get lock thread-b begin thread-a release lock thread-b get lock thread-b end thread-a end</p></blockquote><h3 id="_2wait-进入等待状态释放锁" tabindex="-1"><a class="header-anchor" href="#_2wait-进入等待状态释放锁" aria-hidden="true">#</a> ②wait() 进入等待状态释放锁</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 1、创建一个对象，作为锁对象
Object lockObj=new Object();

// 2、创建执行 sleep 的线程
        new Thread(()-&gt;{

        System.out.println(Thread.currentThread().getName()+&quot; begin&quot;);
// ※ 两个线程使用同一个锁对象，就会存在竞争关系
synchronized (lockObj){
        System.out.println(Thread.currentThread().getName()+&quot; get lock&quot;);
        try{

        // ※ wait() 方法放开锁去睡
        lockObj.wait(5000);

        }catch(InterruptedException e){
        e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName()+&quot; release lock&quot;);

        }
        System.out.println(Thread.currentThread().getName()+&quot; end&quot;);

        },&quot;thread-a&quot;).start();

// ※ 让主线程睡一会儿，确保 a 线程先启动
        try{TimeUnit.SECONDS.sleep(1);}catch(InterruptedException e){}

// 3、创建竞争锁的线程
        new Thread(()-&gt;{

        System.out.println(Thread.currentThread().getName()+&quot; begin&quot;);
// ※ 两个线程使用同一个锁对象，就会存在竞争关系
synchronized (lockObj){
        System.out.println(Thread.currentThread().getName()+&quot; get lock&quot;);
        }

        System.out.println(Thread.currentThread().getName()+&quot; end&quot;);
        },&quot;thread-b&quot;).start();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p><blockquote><p>thread-a begin thread-a get lock thread-b begin thread-b get lock thread-b end thread-a release lock thread-a end</p></blockquote><h3 id="_3小结" tabindex="-1"><a class="header-anchor" href="#_3小结" aria-hidden="true">#</a> ③小结</h3><table><thead><tr><th>比较的内容</th><th>wait()</th><th>sleep()</th></tr></thead><tbody><tr><td>声明位置</td><td>Object 类</td><td>Thread 类</td></tr><tr><td>影响线程的方式</td><td>通过调用 wait() 方法的对象影响到线程</td><td>直接影响当前线程</td></tr><tr><td>性质</td><td>非静态方法</td><td>静态方法</td></tr><tr><td>释放锁资源</td><td><strong>放开锁进入等待</strong></td><td><strong>不释放锁进入等待</strong></td></tr><tr><td>同步要求</td><td>必须在同步上下文中使用</td><td>不要求在同步上下文中</td></tr><tr><td>应用场景</td><td>用于线程间通信</td><td>用来让线程暂停一段时间</td></tr></tbody></table><br><h2 id="_4、同步方法和同步代码块" tabindex="-1"><a class="header-anchor" href="#_4、同步方法和同步代码块" aria-hidden="true">#</a> 4、同步方法和同步代码块</h2><h3 id="_1对比" tabindex="-1"><a class="header-anchor" href="#_1对比" aria-hidden="true">#</a> ①对比</h3><h4 id="_1-相同点" tabindex="-1"><a class="header-anchor" href="#_1-相同点" aria-hidden="true">#</a> [1]相同点</h4><p>都会用到synchronized关键字。</p><h4 id="_2-区别" tabindex="-1"><a class="header-anchor" href="#_2-区别" aria-hidden="true">#</a> [2]区别</h4><table><thead><tr><th>比较的方面</th><th>同步代码块</th><th>同步方法</th></tr></thead><tbody><tr><td>锁定的范围</td><td>代码块自身的范围</td><td>整个方法体</td></tr><tr><td>锁对象</td><td>传入对象就是锁对象</td><td>静态同步方法：方法所在类.class<br>非静态同步方法：this</td></tr></tbody></table><br><h3 id="_2同步方法锁对象案例" tabindex="-1"><a class="header-anchor" href="#_2同步方法锁对象案例" aria-hidden="true">#</a> ②同步方法锁对象案例</h3><h4 id="_1-第一种情况" tabindex="-1"><a class="header-anchor" href="#_1-第一种情况" aria-hidden="true">#</a> [1]第一种情况</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Demo04SynchMethod {

    // 第一种情况：用同一个对象调用两个非静态的同步方法
    // 执行的效果：等发短信执行完成之后，才打印打电话
    public static void situation01(String[] args) {

        // 1、创建 Phone 对象作为多个线程共享的对象
        Phone phone = new Phone();

        // 2、创建发短信的线程
        new Thread(() -&gt; {

            phone.sendShortMessage();

        }, &quot;thread-a&quot;).start();

        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
        }

        // 3、创建打电话的线程
        new Thread(() -&gt; {

            phone.call();

        }, &quot;thread-b&quot;).start();

    }

}

class Phone {

    // this
    public synchronized void sendShortMessage() {

        System.out.println(Thread.currentThread().getName() + &quot; 发短信&quot;);

        try {
            TimeUnit.SECONDS.sleep(5);
        } catch (InterruptedException e) {
        }
    }

    // this
    public synchronized void call() {
        System.out.println(Thread.currentThread().getName() + &quot; 打电话&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-第二种情况" tabindex="-1"><a class="header-anchor" href="#_2-第二种情况" aria-hidden="true">#</a> [2]第二种情况</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 第二种情况：用两个不同的对象调用分别两个非静态的同步方法
// 执行的效果：各自执行，不需要等待
// 1、创建 Phone 对象作为多个线程共享的对象
Phone phone01=new Phone();
        Phone phone02=new Phone();

// 2、创建发短信的线程
        new Thread(()-&gt;{

        phone01.sendShortMessage();

        },&quot;thread-a&quot;).start();

        try{TimeUnit.SECONDS.sleep(1);}catch(InterruptedException e){}

// 3、创建打电话的线程
        new Thread(()-&gt;{

        phone02.call();

        },&quot;thread-b&quot;).start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-第三种情况" tabindex="-1"><a class="header-anchor" href="#_3-第三种情况" aria-hidden="true">#</a> [3]第三种情况</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Demo04SynchMethod {

    // 第三种情况：两个线程分别调用两个静态同步方法
    // 执行效果：等发短信执行完成之后，才打印打电话
    public static void main(String[] args) {

        // 1、创建 A 线程发短信
        new Thread(() -&gt; {

            Phone.sendShortMessage();

        }, &quot;thread-a&quot;).start();

        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
        }

        // 2、创建 B 线程打电话
        new Thread(() -&gt; {

            Phone.call();

        }, &quot;thread-b&quot;).start();

    }

}

class Phone {

    // Phone.class
    public static synchronized void sendShortMessage() {

        System.out.println(Thread.currentThread().getName() + &quot; 发短信&quot;);

        try {
            System.out.println(Thread.currentThread().getName() + &quot; 开始睡觉&quot;);
            TimeUnit.SECONDS.sleep(5);
            System.out.println(Thread.currentThread().getName() + &quot; 结束睡觉&quot;);
        } catch (InterruptedException e) {
        }
    }

    // Phone.class
    public static synchronized void call() {
        System.out.println(Thread.currentThread().getName() + &quot; 打电话&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-第四种情况" tabindex="-1"><a class="header-anchor" href="#_4-第四种情况" aria-hidden="true">#</a> [4]第四种情况</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Demo04SynchMethod {

    public static void main(String[] args) {

        // 第四种情况：类名调用静态同步方法；对象调用非静态同步方法
        // 执行效果：各自执行，不需要等待
        // 1、创建 A 线程发短信
        new Thread(() -&gt; {

            Phone.sendShortMessage();

        }, &quot;thread-a&quot;).start();

        try {
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e) {
        }

        // 2、创建 Phone 对象
        Phone phone = new Phone();

        // 3、创建 B 线程打电话
        new Thread(() -&gt; {

            phone.call();

        }, &quot;thread-b&quot;).start();
    }
}

class Phone {

    // Phone.class
    public static synchronized void sendShortMessage() {

        System.out.println(Thread.currentThread().getName() + &quot; 发短信&quot;);

        try {
            System.out.println(Thread.currentThread().getName() + &quot; 开始睡觉&quot;);
            TimeUnit.SECONDS.sleep(5);
            System.out.println(Thread.currentThread().getName() + &quot; 结束睡觉&quot;);
        } catch (InterruptedException e) {
        }
    }

    // this
    public synchronized void call() {
        System.out.println(Thread.currentThread().getName() + &quot; 打电话&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-结论" tabindex="-1"><a class="header-anchor" href="#_5-结论" aria-hidden="true">#</a> [5]结论</h4><ul><li>结论1：静态同步方法使用类.class作为锁对象；非静态同步方法使用this作为锁对象</li><li>结论2：多个线程如果使用同一个锁对象就会有竞争关系；否则没有竞争关系</li></ul><br><h2 id="_5、练习-卖票的例子" tabindex="-1"><a class="header-anchor" href="#_5、练习-卖票的例子" aria-hidden="true">#</a> 5、练习：卖票的例子</h2><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Demo05SaleTicket {

    // 票库存数量
    private int stock = 10;

    // 声明卖票的方法
    public synchronized void saleTicket() {
        if (stock &gt; 0) {
            System.out.println(Thread.currentThread().getName() + &quot; 号窗口操作：还剩&quot; + --stock + &quot;张票，&quot;);
        } else {
            System.out.println(&quot;票卖完了！！！&quot;);
        }
    }

    public static void main(String[] args) {

        // 创建当前类的对象
        Demo05SaleTicket demo = new Demo05SaleTicket();

        // 开三个窗口卖票
        new Thread(() -&gt; {

            while (true) {

                try {
                    TimeUnit.SECONDS.sleep(1);
                } catch (InterruptedException e) {
                }

                demo.saleTicket();

            }

        }, &quot;0001&quot;).start();

        new Thread(() -&gt; {

            while (true) {

                try {
                    TimeUnit.SECONDS.sleep(1);
                } catch (InterruptedException e) {
                }

                demo.saleTicket();

            }

        }, &quot;0002&quot;).start();

        new Thread(() -&gt; {

            while (true) {

                try {
                    TimeUnit.SECONDS.sleep(1);
                } catch (InterruptedException e) {
                }

                demo.saleTicket();

            }

        }, &quot;0003&quot;).start();

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、创建多线程" tabindex="-1"><a class="header-anchor" href="#二、创建多线程" aria-hidden="true">#</a> 二、创建多线程</h1><p>无论有多少种形式，创建多线程的真正的方法，其实只有两种：</p><blockquote><p>继承 Thread 类 实现 Runnable 接口</p></blockquote><p>其它形式都是这两种方式的变体。</p><h2 id="_1、继承-thread-类" tabindex="-1"><a class="header-anchor" href="#_1、继承-thread-类" aria-hidden="true">#</a> 1、继承 Thread 类</h2><h3 id="_1实现方式" tabindex="-1"><a class="header-anchor" href="#_1实现方式" aria-hidden="true">#</a> ①实现方式</h3><ul><li>第一步：继承 Thread 类</li><li>第二步：重写 run() 方法</li><li>第三步：创建 Thread 子类对象</li><li>第四步：调用 start() 方法启动线程</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class CreateThread01Extends {

    public static void main(String[] args) {
        DemoThread demo = new DemoThread(&quot;AAA&quot;);
        demo.start();
    }

}

class DemoThread extends Thread {

    public DemoThread(String threadName) {
        super(threadName);
    }

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + &quot; thread working ...&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2start-方法和-run-方法区别" tabindex="-1"><a class="header-anchor" href="#_2start-方法和-run-方法区别" aria-hidden="true">#</a> ②start() 方法和 run() 方法区别</h3><p>调用 run() 方法仅仅只是调用了一个子类中重写的父类方法，并没有真正开启一个新的线程，还是在当前线程运行，也就是 main 线程。</p><h3 id="_3评价" tabindex="-1"><a class="header-anchor" href="#_3评价" aria-hidden="true">#</a> ③评价</h3><p>因为 Java 是单继承的，一个类继承了 Thread 类就不能继承其它类，所以通常不采用这个办法创建多线程。</p><h2 id="_2、实现-runnable-接口" tabindex="-1"><a class="header-anchor" href="#_2、实现-runnable-接口" aria-hidden="true">#</a> 2、实现 Runnable 接口</h2><h3 id="_1实现-runnable-接口形式" tabindex="-1"><a class="header-anchor" href="#_1实现-runnable-接口形式" aria-hidden="true">#</a> ①实现 Runnable 接口形式</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class CreateThread02Impl {

    public static void main(String[] args) {

        // 第四步：创建实现了 Runnable 接口的类的对象
        MyRunnableThread runnable = new MyRunnableThread();

        // 第五步：创建 Thread 类对象
        // 参数1：runnable 对象
        // 参数2：线程名称
        Thread thread = new Thread(runnable, &quot;thread 002&quot;);

        // 第六步：调用 Thread 对象的 start() 方法启动线程
        thread.start();
    }

}

// 第一步：实现 Runnable 接口
class MyRunnableThread implements Runnable {

    // 第二步：实现 run() 方法
    @Override
    public void run() {

        // 第三步：编写线程中的逻辑代码
        System.out.println(Thread.currentThread().getName() + &quot; is working&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2匿名内部类形式" tabindex="-1"><a class="header-anchor" href="#_2匿名内部类形式" aria-hidden="true">#</a> ②匿名内部类形式</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 第一步：以匿名内部类的方式创建 Runnable 接口类型的对象
Runnable runnable=new Runnable(){
@Override
public void run(){
        // 第二步：编写线程中的逻辑代码
        System.out.println(Thread.currentThread().getName()+&quot; is working&quot;);
        }
        };

// 第三步：创建 Thread 类对象
// 参数1：runnable 对象
// 参数2：线程名称
        Thread thread=new Thread(runnable,&quot;thread 003&quot;);

// 第四步：调用 Thread 对象的 start() 方法启动线程
        thread.start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3lambda-表达式形式" tabindex="-1"><a class="header-anchor" href="#_3lambda-表达式形式" aria-hidden="true">#</a> ③Lambda 表达式形式</h3><h4 id="_1-有声明变量的形式" tabindex="-1"><a class="header-anchor" href="#_1-有声明变量的形式" aria-hidden="true">#</a> [1]有声明变量的形式</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 编写 Lambda 表达式的口诀：
// 复制小括号
// 写死右箭头
// 落地大括号

// 第一步：以匿名内部类的方式创建 Runnable 接口类型的对象
Runnable runnable=()-&gt;{
        // 第二步：编写线程中的逻辑代码
        System.out.println(Thread.currentThread().getName()+&quot; is working&quot;);
        };

// 第三步：创建 Thread 类对象
// 参数1：runnable 对象
// 参数2：线程名称
        Thread thread=new Thread(runnable,&quot;thread 004&quot;);

// 第四步：调用 Thread 对象的 start() 方法启动线程
        thread.start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-不声明变量形式" tabindex="-1"><a class="header-anchor" href="#_2-不声明变量形式" aria-hidden="true">#</a> [2]不声明变量形式</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 第一步：创建 Thread 类对象并调用 start() 方法启动线程
// 参数1：以Lambda 表达式形式创建的 runnable 对象
// 参数2：线程名称
new Thread(()-&gt;{
        // 第二步：编写线程中的逻辑代码
        System.out.println(Thread.currentThread().getName()+&quot; is working&quot;);
        },&quot;thread 005&quot;).start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、使用-callable-接口配合-futuretask" tabindex="-1"><a class="header-anchor" href="#_3、使用-callable-接口配合-futuretask" aria-hidden="true">#</a> 3、使用 Callable 接口配合 FutureTask</h2><p>该方案最核心的价值是：使用 Callable 接口限定的功能 + Future 接口限定的功能 = 汇总各个线程执行结果</p><p>最终执行汇总操作的这一步会被阻塞，直到前面各个线程完成了计算。</p><h3 id="_1futuretask类和runnable接口的关系" tabindex="-1"><a class="header-anchor" href="#_1futuretask类和runnable接口的关系" aria-hidden="true">#</a> ①FutureTask类和Runnable接口的关系</h3><p><img src="`+d+`" alt="img.png"></p><p>从继承关系能够看到，FutureTask本身也间接实现了Runnable接口。FutureTask类的对象也是Runnable接口的实例，可以用于在创建Thread对象时，传入Thread构造器。</p><h3 id="_2future-接口" tabindex="-1"><a class="header-anchor" href="#_2future-接口" aria-hidden="true">#</a> ②Future 接口</h3><h4 id="_1-停止任务" tabindex="-1"><a class="header-anchor" href="#_1-停止任务" aria-hidden="true">#</a> [1]停止任务</h4><p>方法声明：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>boolean cancel(boolean mayInterruptIfRunning);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果尚未启动，它将停止任务。如果已启动，则仅在 mayInterrupt 为 true 时才会中断任务。</p><h4 id="_2-获取任务的结果" tabindex="-1"><a class="header-anchor" href="#_2-获取任务的结果" aria-hidden="true">#</a> [2]获取任务的结果</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>V get()throws InterruptedException,ExecutionException;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果任务完成，它将立即返回结果，否则将等待任务完成，然后返回结果。</p><h4 id="_3-判断任务是否完成" tabindex="-1"><a class="header-anchor" href="#_3-判断任务是否完成" aria-hidden="true">#</a> [3]判断任务是否完成</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>boolean isDone();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果任务完成，则返回true，否则返回false。</p><h3 id="_3futuretask-类的构造器" tabindex="-1"><a class="header-anchor" href="#_3futuretask-类的构造器" aria-hidden="true">#</a> ③FutureTask 类的构造器</h3><h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> [1]介绍</h4><p>FutureTask 类兼具 Runnable 和 Future 接口的功能，并方便地将两种功能组合在一起。关于 FutureTask 类的使用有如下建议：</p><ul><li>在主线程中需要执行比较耗时的操作时，但又不想阻塞主线程时，可以把这些作业交给 Future 对象在后台完成</li><li>当主线程将来需要时，就可以通过 Future 对象获得后台作业的计算结果或者执行状态</li><li>一般 FutureTask 多用于耗时的计算，主线程可以在完成自己的任务后，再去获取结果。</li><li>仅在计算完成时才能检索结果；如果计算尚未完成，则阻塞 get() 方法</li><li>一旦计算完成，就不能再重新开始或取消计算</li><li>get() 方法而获取结果只有在计算完成时获取，否则会一直阻塞直到任务转入完成状态，然后会返回结果或者抛出异常</li><li>get() 只执行一次，因此get() 方法放到最后</li></ul><h4 id="_2-可以使用的构造器" tabindex="-1"><a class="header-anchor" href="#_2-可以使用的构造器" aria-hidden="true">#</a> [2]可以使用的构造器</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public FutureTask(Callable&lt;V&gt; callable){
        if(callable==null)
        throw new NullPointerException();
        this.callable=callable;
        this.state=NEW;       // ensure visibility of callable
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据这个构造器，我们知道，创建 FutureTask 对象时，传入一个 Callable 类型的对象即可。</p><h3 id="_4callable-接口" tabindex="-1"><a class="header-anchor" href="#_4callable-接口" aria-hidden="true">#</a> ④Callable 接口</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
@FunctionalInterface
public interface Callable&lt;V&gt; {
    /**
     * Computes a result, or throws an exception if unable to do so.
     *
     * @return computed result
     * @throws Exception if unable to compute a result
     */
    V call() throws Exception;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 call() 方法的声明我们可以看出，它有一个返回值。这个返回值可以将当前线程内计算结果返回。</p><h3 id="_5测试代码" tabindex="-1"><a class="header-anchor" href="#_5测试代码" aria-hidden="true">#</a> ⑤测试代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 1.创建三个FutureTask对象，封装三个线程的执行逻辑
FutureTask&lt;Integer&gt; task01=new FutureTask&lt;&gt;(()-&gt;{

        int result=(int)(Math.random()*Math.random()*100);

        System.out.println(Thread.currentThread().getName());

        return result;
        });
        FutureTask&lt;Integer&gt; task02=new FutureTask&lt;&gt;(()-&gt;{

        int result=(int)(Math.random()*Math.random()*1000);

        System.out.println(Thread.currentThread().getName());

        return result;
        });
        FutureTask&lt;Integer&gt; task03=new FutureTask&lt;&gt;(()-&gt;{

        int result=(int)(Math.random()*Math.random()*10000);

        System.out.println(Thread.currentThread().getName());

        return result;
        });

// 2.创建三个线程对象，然后启动线程
        new Thread(task01,&quot;thread01&quot;).start();
        new Thread(task02,&quot;thread02&quot;).start();
        new Thread(task03,&quot;thread03&quot;).start();

// 3.上面三个线程执行完成后，可以收集它们各自运算的结果
        Integer task01Result=task01.get();
        Integer task02Result=task02.get();
        Integer task03Result=task03.get();

        System.out.println(&quot;task01Result = &quot;+task01Result);
        System.out.println(&quot;task02Result = &quot;+task02Result);
        System.out.println(&quot;task03Result = &quot;+task03Result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6callable和runnable对比" tabindex="-1"><a class="header-anchor" href="#_6callable和runnable对比" aria-hidden="true">#</a> ⑥Callable和Runnable对比</h3><table><thead><tr><th>Runnable接口</th><th>Callable接口</th></tr></thead><tbody><tr><td>重写run()方法</td><td>重写call()方法</td></tr><tr><td>run()没有返回值</td><td>call()有返回值</td></tr><tr><td>run()没有声明抛出异常</td><td>call()声明抛出Exception</td></tr><tr><td>没有汇总各个线程结果的机制</td><td>有汇总各个线程结果的机制</td></tr></tbody></table><h3 id="_7callable接口方案的特点" tabindex="-1"><a class="header-anchor" href="#_7callable接口方案的特点" aria-hidden="true">#</a> ⑦Callable接口方案的特点</h3><p><img src="`+l+`" alt="img.png"></p><p>该方案仅在具体任务计算完成时才能检索结果；如果计算尚未完成，则阻塞 get() 方法。一旦计算完成，就不能再重新开始或取消计算。get() 方法获取结果只有在计算完成时获取，否则会一直阻塞直到任务转入完成状态，然后会返回结果或者抛出异常， 且只计算一次。</p><p>好处就是对于包含多个操作的任务，可以节约处理任务的时间。举例分析如下：</p><p>假设我们现在有 5 个操作要执行，每个操作耗时如下：</p><ul><li>操作1：1秒</li><li>操作2：5秒</li><li>操作3：6秒</li><li>操作4：2秒</li><li>操作5：3秒</li></ul><p>如果这些操作按顺序执行，那么需要：1 + 5 + 6 + 2 + 3 = 17秒</p><p>如果这些操作并行执行，那么需要：6秒——和耗时最长的任务时间一致</p><br><h2 id="_4、线程池" tabindex="-1"><a class="header-anchor" href="#_4、线程池" aria-hidden="true">#</a> 4、线程池</h2><h3 id="_1参考代码" tabindex="-1"><a class="header-anchor" href="#_1参考代码" aria-hidden="true">#</a> ①参考代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 1.创建线程池对象
ExecutorService pool=Executors.newFixedThreadPool(5);

// 2.给线程池对象分配任务，每一个任务是一个线程
        pool.execute(()-&gt;{
        System.out.println(Thread.currentThread().getName()+&quot; &quot;+new Date());
        });

        pool.execute(()-&gt;{
        System.out.println(Thread.currentThread().getName()+&quot; &quot;+new Date());
        });

        pool.execute(()-&gt;{
        System.out.println(Thread.currentThread().getName()+&quot; &quot;+new Date());
        });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2开发建议" tabindex="-1"><a class="header-anchor" href="#_2开发建议" aria-hidden="true">#</a> ②开发建议</h3><p>阿里开发手册中对线程创建的规定：</p><p><img src="`+t+'" alt="img.png"></p><br><p><img src="'+r+`" alt="img.png"></p><p>结论：实际开发中，建议使用『自定义线程池』的方式创建多线程。在创建自定义线程池时，使用合理的参数。</p><h2 id="_5、并行计算-了解" tabindex="-1"><a class="header-anchor" href="#_5、并行计算-了解" aria-hidden="true">#</a> 5、并行计算[了解]</h2><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; list=Arrays.asList(&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;);

// 串行计算
        list.stream().forEach(System.out::print);

        System.out.println();

// 并行计算
        list.parallelStream().forEach(System.out::print);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、timer-定时任务-了解" tabindex="-1"><a class="header-anchor" href="#_6、timer-定时任务-了解" aria-hidden="true">#</a> 6、Timer 定时任务[了解]</h2><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 1、创建 Timer 对象封装定时任务中要执行的操作
// 每一个 Timer 对象会使用一个线程来执行定时任务
Timer timer01=new Timer();

// 2、调用 schedule() 指定任务和执行周期
// 参数1：timerTask 封装具体任务操作
// 参数2：delay 指定定时任务延迟多久后开始执行
// 参数3：period 指定定时任务执行的时间间隔
        timer01.schedule(new TimerTask(){
@Override
public void run(){
        System.out.println(Thread.currentThread().getName()+&quot; is working&quot;);
        }
        },0,1000);

        Timer timer02=new Timer();

        timer02.schedule(new TimerTask(){
@Override
public void run(){
        System.out.println(Thread.currentThread().getName()+&quot; is working&quot;);
        }
        },0,1000);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Timer-0 is working Timer-1 is working Timer-0 is working Timer-1 is working</p></blockquote><br><h2 id="_7、spring-异步方法-了解" tabindex="-1"><a class="header-anchor" href="#_7、spring-异步方法-了解" aria-hidden="true">#</a> 7、Spring 异步方法[了解]</h2><p>在 Spring 环境下，如果组件 A（假设是 ControllerA）要调用组件 B（假设是 ServiceB）的多个方法，而且希望这些方法能够异步执行。</p><h3 id="_1准备-springboot-环境" tabindex="-1"><a class="header-anchor" href="#_1准备-springboot-环境" aria-hidden="true">#</a> ①准备 SpringBoot 环境</h3><h4 id="_1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_1-引入依赖" aria-hidden="true">#</a> [1]引入依赖</h4><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>
&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;version&gt;2.5.2&lt;/version&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-创建主启动类" tabindex="-1"><a class="header-anchor" href="#_2-创建主启动类" aria-hidden="true">#</a> [2]创建主启动类</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-创建-service" tabindex="-1"><a class="header-anchor" href="#_3-创建-service" aria-hidden="true">#</a> [3]创建 Service</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
@Service
public class DemoService {

    public void doSth() {
        System.out.println(&quot;Demo Service &quot; + Thread.currentThread().getName());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-创建-controller" tabindex="-1"><a class="header-anchor" href="#_4-创建-controller" aria-hidden="true">#</a> [4]创建 Controller</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
@RestController
public class DemoController {

    @Autowired
    private DemoService demoService;

    @RequestMapping(&quot;/demo/test/async&quot;)
    public String callServiceMethod() {

        demoService.doSth();
        demoService.doSth();
        demoService.doSth();
        demoService.doSth();
        demoService.doSth();

        return &quot;success&quot;;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2使用异步方法" tabindex="-1"><a class="header-anchor" href="#_2使用异步方法" aria-hidden="true">#</a> ②使用异步方法</h3><h4 id="_1-开启异步功能" tabindex="-1"><a class="header-anchor" href="#_1-开启异步功能" aria-hidden="true">#</a> [1]开启异步功能</h4><p>在主启动类使用 @EnableAsync 注解：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 开启支持异步方法调用功能
@EnableAsync
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-标记异步方法" tabindex="-1"><a class="header-anchor" href="#_2-标记异步方法" aria-hidden="true">#</a> [2]标记异步方法</h4><p>在想要异步调用的方法上使用 @Async 注解：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
@Service
public class DemoService {

    // 在想要实现异步调用的方法上加 @Async注解
    @Async
    public void doSth() {
        System.out.println(&quot;Demo Service &quot; + Thread.currentThread().getName());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、小结" tabindex="-1"><a class="header-anchor" href="#_8、小结" aria-hidden="true">#</a> 8、小结</h2><p>面试中如果被问到：创建多线程有哪些方法，至少要能说上来前四种。后面五种是用来卷别人、吹牛的。</p><p>其实 Fork Join、CompletableFuture 也可以，后面会讲到。</p><ul><li>[基本] 继承 Thread 类</li><li>[基本] 实现 Runnable 接口</li><li>[基本] 线程池</li><li>[基本] Callable + FutureTask</li><li>[内卷] CompletableFuture（后面讲）</li><li>[内卷] Fork Join（后面讲）</li><li>[内卷] 并行计算</li><li>[内卷] Timer 定时任务</li><li>[内卷] Spring 的异步方法调用</li></ul><h1 id="三、多线程的生命周期" tabindex="-1"><a class="header-anchor" href="#三、多线程的生命周期" aria-hidden="true">#</a> 三、多线程的生命周期</h1><h2 id="_1、线程状态的枚举类" tabindex="-1"><a class="header-anchor" href="#_1、线程状态的枚举类" aria-hidden="true">#</a> 1、线程状态的枚举类</h2><p>在 java.lang.Thread 类中，有一个枚举类：State</p><table><thead><tr><th>状态</th><th>说明</th></tr></thead><tbody><tr><td>NEW</td><td>新建状态，代表线程刚刚创建出来，还没有启动</td></tr><tr><td>RUNNABLE</td><td>就绪状态，代表线程已经启动了，在等待CPU的时间片</td></tr><tr><td>RUNNING</td><td>运行状态，代表线程已经得到了CPU时间片，开始执行了（因为这个状态时间很短，所以JDK后面的版本就去掉了这个值）</td></tr><tr><td>BLOCKED</td><td>阻塞状态，线程执行过程中遇到了synchronized并且没有得到锁</td></tr><tr><td>WAITING</td><td>等待状态，线程执行过程中调用了wait()方法，停止执行，被其它线程唤醒后才能继续执行</td></tr><tr><td>TIMED_WAITING</td><td>限时等待状态，线程执行过程中调用了Thread.sleep()或wait(time)，停止执行，到达指定时间之后，会继续执行</td></tr><tr><td>TERMINATED</td><td>结束状态，线程结束，停止执行</td></tr></tbody></table><h2 id="_2、拍摄线程执行快照" tabindex="-1"><a class="header-anchor" href="#_2、拍摄线程执行快照" aria-hidden="true">#</a> 2、拍摄线程执行快照</h2><p><img src="`+c+'" alt="img.png"></p><br><h2 id="_3、runnable" tabindex="-1"><a class="header-anchor" href="#_3、runnable" aria-hidden="true">#</a> 3、RUNNABLE</h2><p><img src="'+u+'" alt="img.png"></p><br><h2 id="_4、blocked" tabindex="-1"><a class="header-anchor" href="#_4、blocked" aria-hidden="true">#</a> 4、BLOCKED</h2><p><img src="'+v+`" alt="img.png"></p><br><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Demo12LifeCycle</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;thread-a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Demo12LifeCycle</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;thread-b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_5、waiting" tabindex="-1"><a class="header-anchor" href="#_5、waiting" aria-hidden="true">#</a> 5、WAITING</h2><p><img src="`+o+`" alt="img.png"></p><br><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Demo12LifeCycle</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Demo12LifeCycle</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_6、timed-waiting" tabindex="-1"><a class="header-anchor" href="#_6、timed-waiting" aria-hidden="true">#</a> 6、TIMED_WAITING</h2><p><img src="`+p+`" alt="img.png"></p><br><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="四、线程间通信" tabindex="-1"><a class="header-anchor" href="#四、线程间通信" aria-hidden="true">#</a> 四、线程间通信</h1><h2 id="_1、功能" tabindex="-1"><a class="header-anchor" href="#_1、功能" aria-hidden="true">#</a> 1、功能</h2><p>一个大任务拆分成各个小任务并分配到新创建线程中执行之后，还需要各个子线程彼此配合才能完成，此时就需要线程间通信<br></p><h2 id="_2、可用-api" tabindex="-1"><a class="header-anchor" href="#_2、可用-api" aria-hidden="true">#</a> 2、可用 API</h2><p>Object 类中有如下方法可以用于线程间通信：</p><table><thead><tr><th>方法名</th><th>方法功能</th></tr></thead><tbody><tr><td>wait()</td><td>让当前线程进入等待</td></tr><tr><td>notify()</td><td>随机唤醒一个等待中的线程</td></tr><tr><td>notifyAll()</td><td>唤醒全部等待中的线程</td></tr></tbody></table><h2 id="_3、案例" tabindex="-1"><a class="header-anchor" href="#_3、案例" aria-hidden="true">#</a> 3、案例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo13Communication</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 不该干活的时候，就歇着</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 该干活的时候，干活</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; number = &quot;</span> <span class="token operator">+</span> <span class="token operator">++</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 自己的活干完，叫别的线程起来干活</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">subValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 不该干活的时候，就歇着</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 该干活的时候，干活</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; number = &quot;</span> <span class="token operator">+</span> <span class="token operator">--</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 自己的活干完，叫别的线程起来干活</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Demo13Communication</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo13Communication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建两个线程，一个执行加法，一个执行减法</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    demo<span class="token punctuation">.</span><span class="token function">addValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;thread-a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    demo<span class="token punctuation">.</span><span class="token function">subValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;thread-b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_4、虚假唤醒" tabindex="-1"><a class="header-anchor" href="#_4、虚假唤醒" aria-hidden="true">#</a> 4、虚假唤醒</h2><p>没有重新执行是否该干活的判断，所以真正执行加法、减法操作的时候，可能是不该执行的时候执行了：<br></p><p><img src="`+m+'" alt="img.png"></p><br><p>解决方案：把 if 判断改成 while 循环：</p><br><p><img src="'+b+'" alt="img.png"></p>',192),g=[k];function T(_,y){return e(),a("div",null,g)}const w=n(h,[["render",T],["__file","01-多线程回顾.html.vue"]]);export{w as default};
