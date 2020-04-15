(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{329:function(e,t,a){"use strict";a.r(t);var s=a(33),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_808服务配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_808服务配置"}},[e._v("#")]),e._v(" 808服务配置")]),e._v(" "),a("p",[e._v("本小节会介绍808服务的配置选项。")]),e._v(" "),a("p",[e._v("默认的配置可以在\n"),a("a",{attrs:{href:"https://github.com/hylexus/jt-framework/tree/master/jt-808-server-spring-boot-stater/src/main/resources/META-INF/default-jt808-server-config.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("default-jt808-server-config.yml"),a("OutboundLink")],1),e._v("\n中查看。\n并且已经将默认的配置加入到了 "),a("code",[e._v("Spring")]),e._v(" 的 "),a("code",[e._v("PropertySources")]),e._v(" 中，并将其置于最后，名称为 "),a("code",[e._v("default-jt808-server-config")]),e._v(" 。")]),e._v(" "),a("p",{},[a("img",{attrs:{src:e.$withBase("/img/default-config-property-source.png"),alt:"default-config-property-source"}})]),e._v(" "),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[e._v("#")]),e._v(" 配置项")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("jt808")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("print-component-statistics")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("entity-scan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("handler-scan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("exception-handler-scan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("msg-processor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("thread-pool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n")])])]),a("h2",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[e._v("#")]),e._v(" server")]),e._v(" "),a("h3",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[e._v("#")]),e._v(" port")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("int")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("6808")])])]),e._v(" "),a("p",[a("code",[e._v("Netty")]),e._v(" 服务器的TCP端口。")]),e._v(" "),a("h3",{attrs:{id:"boss-thread-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boss-thread-count"}},[e._v("#")]),e._v(" boss-thread-count")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("int")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("0")])])]),e._v(" "),a("p",[e._v("默认值 "),a("code",[e._v("0")]),e._v(" 表示交由 "),a("code",[e._v("Netty")]),e._v(" 处理。")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("bossGroup "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NioEventLoopGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("bossThreadCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h3",{attrs:{id:"worker-thread-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#worker-thread-count"}},[e._v("#")]),e._v(" worker-thread-count")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("int")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("0")])])]),e._v(" "),a("p",[e._v("默认值 "),a("code",[e._v("0")]),e._v(" 表示交由 "),a("code",[e._v("Netty")]),e._v(" 处理。")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("workerGroup "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("NioEventLoopGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("workThreadCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h2",{attrs:{id:"entity-scan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity-scan"}},[e._v("#")]),e._v(" entity-scan")]),e._v(" "),a("h3",{attrs:{id:"enabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabled"}},[e._v("#")]),e._v(" enabled")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("true")])])]),e._v(" "),a("p",[e._v("是否启用实体扫描功能。启用后，请求报文可以自动映射到使用 "),a("code",[e._v("@Jt808ReqMsgBody")]),e._v(" 标记的 "),a("code",[e._v("请求消息体实体类")]),e._v(" 。")]),e._v(" "),a("p",[e._v("使用基于注解的 "),a("code",[e._v("请求体消息实体类")]),e._v(" "),a("RouterLink",{attrs:{to:"/jt-808/guide/annotation-based-dev/req-msg-mapping.html"}},[e._v("请参考这里")]),e._v("。")],1),e._v(" "),a("h3",{attrs:{id:"enable-builtin-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-builtin-entity"}},[e._v("#")]),e._v(" enable-builtin-entity")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("true")])])]),e._v(" "),a("p",[e._v("是否自动注册内置的 "),a("code",[e._v("请求消息体实体类")]),e._v("。\n内置的 "),a("code",[e._v("请求消息体实体类")]),e._v(" 包括：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("AuthRequestMsgBody")]),e._v(" : 鉴权消息 "),a("code",[e._v("请求消息体实体类")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("EmptyRequestBody")]),e._v(" : 一个空的 "),a("code",[e._v("请求消息体实体类")]),e._v("。")])]),e._v(" "),a("h3",{attrs:{id:"base-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-packages"}},[e._v("#")]),e._v(" base-packages")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("String")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v('""')])])]),e._v(" "),a("p",[a("code",[e._v("请求消息体实体类")]),e._v(" 所在的包名，多个以逗号分隔。")]),e._v(" "),a("h3",{attrs:{id:"register-builtin-request-msg-converters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-builtin-request-msg-converters"}},[e._v("#")]),e._v(" register-builtin-request-msg-converters")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("true")])])]),e._v(" "),a("p",[e._v("是否自动注册内置的 "),a("code",[e._v("RequestMsgBodyConverter")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"handler-scan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handler-scan"}},[e._v("#")]),e._v(" handler-scan")]),e._v(" "),a("h3",{attrs:{id:"enabled-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabled-2"}},[e._v("#")]),e._v(" enabled")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("true")])])]),e._v(" "),a("p",[e._v("是否启用基于注解的MsgHandler功能。启用后，消息处理可以用 "),a("code",[e._v("@Jt808RequestMsgHandlerMapping")]),e._v(" 来处理。")]),e._v(" "),a("p",[e._v("使用基于注解的 "),a("code",[e._v("MsgHandler")]),e._v(" "),a("RouterLink",{attrs:{to:"/jt-808/guide/annotation-based-dev/msg-handler-register.html"}},[e._v("请参考这里")]),e._v("。")],1),e._v(" "),a("h3",{attrs:{id:"base-packages-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-packages-2"}},[e._v("#")]),e._v(" base-packages")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("String")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v('""')])])]),e._v(" "),a("p",[e._v("基于注解的 "),a("code",[e._v("MsgHandler")]),e._v(" 所在的包名，多个以逗号分隔。")]),e._v(" "),a("h3",{attrs:{id:"register-builtin-msg-handlers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-builtin-msg-handlers"}},[e._v("#")]),e._v(" register-builtin-msg-handlers")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("true")])])]),e._v(" "),a("p",[e._v("是否自动注册内置的 "),a("code",[e._v("MsgHandler")]),e._v(" 。")]),e._v(" "),a("h2",{attrs:{id:"exception-handler-scan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exception-handler-scan"}},[e._v("#")]),e._v(" exception-handler-scan")]),e._v(" "),a("h3",{attrs:{id:"enabled-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabled-3"}},[e._v("#")]),e._v(" enabled")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("true")])])]),e._v(" "),a("p",[e._v("是否启用全局异常处理机制。启用后，可以用类似于 "),a("code",[e._v("Spring")]),e._v(" 的全局异常处理的方式来处理异常。")]),e._v(" "),a("p",[e._v("使用基于注解的 "),a("code",[e._v("ExceptionHandler")]),e._v(" "),a("RouterLink",{attrs:{to:"/jt-808/guide/annotation-based-dev/exception-handler.html"}},[e._v("请参考这里")]),e._v("。")],1),e._v(" "),a("h3",{attrs:{id:"base-packages-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-packages-3"}},[e._v("#")]),e._v(" base-packages")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("String")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v('""')])])]),e._v(" "),a("p",[e._v("基于注解的 "),a("code",[e._v("ExceptionHandler")]),e._v(" 所在的包名，多个以逗号分隔。")]),e._v(" "),a("h3",{attrs:{id:"register-builtin-exception-handlers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-builtin-exception-handlers"}},[e._v("#")]),e._v(" register-builtin-exception-handlers")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("true")])])]),e._v(" "),a("p",[e._v("是否自动注册内置的 "),a("code",[e._v("ExceptionHandler")]),e._v(" 。")]),e._v(" "),a("h2",{attrs:{id:"msg-processor-thread-pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-processor-thread-pool"}},[e._v("#")]),e._v(" msg-processor.thread-pool")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("此处为 "),a("code",[e._v("消息处理线程池")]),e._v(" 相关的配置。其实就是 "),a("code",[e._v("Java线程池")]),e._v(" 几个关键参数的配置。")])]),e._v(" "),a("h3",{attrs:{id:"core-pool-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-pool-size"}},[e._v("#")]),e._v(" core-pool-size")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("int")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("Runtime.getRuntime().availableProcessors() + 1")])])]),e._v(" "),a("p",[e._v("消息处理线程池的核心线程数，即 "),a("code",[e._v("java.util.concurrent.ThreadPoolExecutor.corePoolSize")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"maximum-pool-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maximum-pool-size"}},[e._v("#")]),e._v(" maximum-pool-size")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("int")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("2 * corePoolSize")])])]),e._v(" "),a("p",[e._v("同 "),a("code",[e._v("java.util.concurrent.ThreadPoolExecutor.maximumPoolSize")]),e._v(" 。")]),e._v(" "),a("h3",{attrs:{id:"keep-alive-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-time"}},[e._v("#")]),e._v(" keep-alive-time")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("Duration")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("60s")])])]),e._v(" "),a("p",[e._v("同 "),a("code",[e._v("java.util.concurrent.ThreadPoolExecutor.keepAliveTime")]),e._v(" 。")]),e._v(" "),a("h3",{attrs:{id:"blocking-queue-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blocking-queue-size"}},[e._v("#")]),e._v(" blocking-queue-size")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("int")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("20")])])]),e._v(" "),a("p",[a("code",[e._v("java.util.concurrent.ThreadPoolExecutor.workQueue")]),e._v(" 的 "),a("code",[e._v("size()")]),e._v(" 。")]),e._v(" "),a("h3",{attrs:{id:"thread-name-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thread-name-format"}},[e._v("#")]),e._v(" thread-name-format")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("String")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("808-msg-processor-%d")])])]),e._v(" "),a("p",[e._v("线程池中线程的命名格式。")]),e._v(" "),a("h2",{attrs:{id:"其他配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他配置"}},[e._v("#")]),e._v(" 其他配置")]),e._v(" "),a("h3",{attrs:{id:"print-component-statistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#print-component-statistics"}},[e._v("#")]),e._v(" print-component-statistics")]),e._v(" "),a("ul",[a("li",[e._v("类型："),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("默认值："),a("code",[e._v("true")])])]),e._v(" "),a("p",[a("code",[e._v("jt808.print-component-statistics")]),e._v(" 表示是否开启服务启动完成后显示组件统计信息。")]),e._v(" "),a("p",[e._v("这些统计信息可以显示已经注册的 "),a("code",[e._v("MsgConverter")]),e._v(" 、 "),a("code",[e._v("MsgHandler")]),e._v(" 等组件。类似于下图所示：")]),e._v(" "),a("p",{},[a("img",{attrs:{src:e.$withBase("/img/print-component-statistics.png"),alt:"print-component-statistics"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);