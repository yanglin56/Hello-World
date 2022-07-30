# 浅析 URL

## 今天的主要内容为 🚀

1. [URL 包含哪几部分，每部分分别有什么作用](#jump1)
2. [DNS 的作用是什么，nslookup 命令怎么用](#jump2)
3. [IP 的作用是什么，ping 命令怎么用](#jump3)
4. [域名是什么，分别哪几类域名](#jump4)

## 开始吧

###  <span id="jump1">1. URL 包含哪几部分，每部分分别有什么作用 </span>
* URL是什么
  * 代表着是统一资源定位符（Uniform Resource Location，缩写为URL）
  * URL就是一个给定的独特资源在 Web 上的地址
  
   ```javascript
   举个例子🫠
   https://developer.mozilla.org
   ```
* URL的特点
  * 每个有效的 URL 都指向一个唯一的资源
  * 这个资源可以是一个 HTML 页面，一个 CSS 文档，一幅图像，等等
  * 有时候也会出现一个 URL 指向了不存在的或是被移动过的资源，因为通过 URL 呈现的资源和 URL 本身由 Web 服务器处理，所以 web 服务器的拥有者需要认真地维护资源以及与它关联的URL

* URL包含的部分
  ```javascript
  举个例子🫠
  
  http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
  ```
  Protocol+Domain Name+Port+Path to the file+Parameters+Ancho  
  协议+域名或ip+端口号+路径（网络服务器上资源的路径）+查询字符串（提供给网络服务器的额外参数）+锚点（资源本身的另一部分的锚点）

  1.  协议
    * http是协议
    * 表明了浏览器必须使用何种协议
    * 通常都是HTTP协议或是HTTP协议的安全版，即HTTPS
  2. 域名或IP
    * www.example.com是域名
    * 表明正在请求哪个Web服务器
    * 域名就是IP的别称
    * 可以直接使用IP address, 但是因为它不太方便，所以它不经常在网络上使用
  3. 端口号
    * :80 是端口
    * 表示用于访问Web服务器上的资源的技术“门”
    * 如果Web服务器使用HTTP协议的标准端口（HTTP为80，HTTPS为443）来授予其资源的访问权限，则通常会被忽略。否则是强制性的。
  4. 路径（网络服务器上资源的路径）
    * /path/to/myfile.html 是网络服务器上资源的路径
    * 在Web的早期阶段，像这样的路径表示Web服务器上的物理文件位置
    * 如今，它主要是由没有任何物理现实的Web服务器处理的抽象
  5. 查询字符串
    * ?key1=value1&key2=value2 是提供给网络服务器的额外参数
    * 这些参数是用 & 符号分隔的键/值对列表
    * 每个Web服务器都有自己关于参数的规则，唯一可靠的方式来知道特定Web服务器是否处理参数是通过询问Web服务器所有者
  6. 锚点
    * #SomewhereInTheDocument 是资源本身的另一部分的锚点
    * 锚点表示资源中的一种“书签”，给浏览器显示位于该“加书签”位置的内容的方向
    * 例如，在HTML文档上，浏览器将滚动到定义锚点的位置;在视频或音频文档上，浏览器将尝试转到锚代表的时间
    * 注意的是，＃后面的部分（也称为片段标识符）从来没有发送到请求的服务器
###  <span id="jump2">2. DNS 的作用是什么，nslookup 命令怎么用</span>
* DNS是什么
  * DNS (Domain Name System) 域名系统
  * 是一个层次化、分散化的Internet连接资源命名系统
  * DNS维护着一个包含域名与对应资源例如IP地址的列表
  * 最突出的功能是将易于记忆的域名(例如mozilla.org)翻译成为数字化的IP地址(例如151.106.5.172)
* DNS的作用
  * 让域名与IP对应的网络服务，让用户在访问网站时，不再需要输入冗长难记的IP地址，只需输入域名即可访问，因为DNS服务会自动将域名转换成正确的IP地址
* nslookup 命令的用法
  * nslookup：name server lookup 域名查询
  * dns服务查询，通过域名查询资源。【用来监测网络中DNS服务器是否可以实现域名解析的工具】
用于互动式地查询域名记录。【可以获取域名对应的ip】
  * nslookup有两种模式：交互模式（nslookup 不加参数）与非交互模式（nslookup + 参数）
  * nslookup与ping的区别在于nslookup返回的结果更丰富，主要针对dns服务器的排错，收集dns服务器的信息。
###  <span id="jump3">3. IP 的作用是什么，ping 命令怎么用</span>
* IP是什么
  * Internet Protocol 因特网协议
  * 规定网络地址的协议，叫做IP协议。它所定义的地址，就被称为IP地址。
  * 非常底层的协议，没有IP就不能上网
  * 其本质就是提供互联网上唯一性标识，如果唯一性无法保证，互联网就彻底乱套了。
* IP分两种
  * 内网IP（Inside IP）
  * 外网IP（Outside IP）
  * 内网和外网是隔绝的，两者间唯一的通道是路由器（Router）
* IP的作用
  * 约定了两件事
  * 如何定位一台设备（为每一台计算机分配IP地址）
  * 如何封装数据报文，以跟其他设备交流（确定哪些地址在同一个子网络）
* ping 命令的用法
  * 在网络中ping是一个十分强大的TCP/IP工具
  * ping命令是用来探测本机与网络中另一主机之间是否可达的命令
  * 如果两台主机之间ping不通，则表明这两台主机不能建立起连接
  * ping是定位网络通不通的一个重要手段
  ```javascript
  例如，确定下现在的本机是否可以连上百度,那么在命令行程序中输入 ping http://baidu.com

  在一定的时间内，如果本机收到了应答包，则说明它与http://baidu.com之间网络可达，如果没有收到，则说明网络不可达

  除了监测是否可达以外，ping命令还可以利用应答时间和发起时间之间的差值，计算出数据包的延迟耗时
  ```
###  <span id="jump4">4. 域名是什么，分别哪几类域名</span>
* 域名是什么
  * (Domain Name)简单理解为通往你网站的路，简称域名、网域，是由一串用点分隔的名字组成的Internet上某一台计算机或计算机组的名称
  * 域名是对IP的别称
* 分别哪几类域名
  * 根域名（root domain）
    * 根域名.root对于所有域名都是一样的，所以平时是省略的
    * 实际是：en.wikipedia.org.root
  * 顶级域名（TLD）
    * 一般顶级域名（gTLD）
      * eg: .com、.org 
    * 国别顶级域名（ccTLD）
      * eg: .cn、.io、.tv
  * 次级域名（SLD）
    * 即： wikipedia
  * 子域名【eg: en】
  * 三级域名（主机名 host）
    * 即：www
