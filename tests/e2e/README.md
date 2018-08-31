#前端自动化测试工具

API文档地址：http://nightwatchjs.org/gettingstarted
分三步： 配置环境， 执行命令， 查看测试报告

### 一、配置环境：
1、java环境   
  jdk下载地址(jdk版本需为1.8版本)： 
  http://dl-t1.wmzhe.com/30/30118/jdk_8.0.1310.11_64.exe （64位）
  http://dl-t1.wmzhe.com/30/30119/JDK_8.0.1310.11_32bit.exe （32位）
  环境变量配置
  教程：https://jingyan.baidu.com/article/02027811629b941bcc9ce521.html

2、node环境
  node下载地址：https://nodejs.org/en/

### 二、执行命令
  1、 yarn
  2、 yarn nw:install  // 安装selenum环境（这里需要注意对应版本：http://blog.csdn.net/huilan_same/article/details/51896672）
  3、 yarn nw:start    // 启动selenum环境（如果已经启动请忽略）
  4、 yarn chrome      // 执行chrome测试
  5、 yarn phantomjs   // 此命令运维在服务器上测试命令（需要注意服务器没有浏览器 ，统命测试用例代码需要区分）


### 三、查看测试报告
  本地会创建一个report报告目录和selenium-debug测试报告文档 
