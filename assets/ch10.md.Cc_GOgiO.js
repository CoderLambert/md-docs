import{_ as s,D as i,c as r,I as a,w as n,j as e,a as t,a4 as l,o as c}from"./chunks/framework.DtvhUNIn.js";const h="/assets/CH-UN10.Bb_LGb5_.jpg",L=JSON.parse('{"title":"Chap10. ISP: THE INTERFACE SEGREGATION PRINCIPLE ISP：接口隔离原则","description":"","frontmatter":{},"headers":[],"relativePath":"ch10.md","filePath":"ch10.md","lastUpdated":1723191287000}'),d={name:"ch10.md"},u=e("h1",{id:"chap10-isp-the-interface-segregation-principle-isp-接口隔离原则",tabindex:"-1"},[t("Chap10. ISP: THE INTERFACE SEGREGATION PRINCIPLE ISP：接口隔离原则 "),e("a",{class:"header-anchor",href:"#chap10-isp-the-interface-segregation-principle-isp-接口隔离原则","aria-label":'Permalink to "Chap10. ISP: THE INTERFACE SEGREGATION PRINCIPLE ISP：接口隔离原则"'},"​")],-1),p=e("p",null,[e("img",{src:h,alt:""})],-1),_=e("p",null,"The Interface Segregation Principle (ISP) derives its name from the diagram shown in Figure 10.1.",-1),g=e("blockquote",null,[e("p",null,"“接口隔离原则（ISP）”这个名字来自图 10.1 所示的这种软件结构。")],-1),m=e("p",null,"In the situation illustrated in Figure 10.1, there are several users who use the operations of the OPS class. Let’s assume that User1 uses only op1, User2 uses only op2, and User3 uses only op3.",-1),f=e("blockquote",null,[e("p",null,"在图 10.1 所描绘的应用中，有多个用户需要操作 OPS 类。现在，我们假设这里的 User1 只需要使用 op1，User2 只需要使用 op2，User3 只需要使用 op3。")],-1),S=e("p",null,"Now imagine that OPS is a class written in a language like Java. Clearly, in that case, the source code of User1 will inadvertently depend on op2 and op3, even though it doesn’t call them. This dependence means that a change to the source code of op2 in OPS will force User1 to be recompiled and redeployed, even though nothing that it cared about has actually changed.",-1),y=e("blockquote",null,[e("p",null,"在这种情况下，如果 OPS 类是用 Java 编程语言编写的，那么很明显，User1 虽然不需要调用 op2、op3，但在源代码层次上也与它们形成依赖关系。这种依赖意味着我们对 OPS 代码中 op2 所做的任何修改，即使不会影响到 User1 的功能，也会导致它需要被重新编译和部署。")],-1),P=e("p",null,"This problem can be resolved by segregating the operations into interfaces as shown in Figure 10.2.",-1),b=e("p",null,"Again, if we imagine that this is implemented in a statically typed language like Java, then the source code of User1 will depend on U1Ops, and op1, but will not depend on OPS. Thus a change to OPS that User1 does not care about will not cause User1 to be recompiled and redeployed.",-1),I=e("blockquote",null,[e("p",null,"这个问题可以通过将不同的操作隔离成接口来解决，具体如图 10.2 所示。同样，我们也假设这个例子是用 Java 这种静态类型语言来实现的，那么现在 User1 的源代码会依赖于 U1Ops 和 op1，但不会依赖于 OPS。这样一来，我们之后对 OPS 做的修改只要不影响到 User1 的功能，就不需要重新编译和部署 User1 了。")],-1),k=l('<h2 id="isp-and-language-isp-与编程语言" tabindex="-1">ISP AND LANGUAGE ISP 与编程语言 <a class="header-anchor" href="#isp-and-language-isp-与编程语言" aria-label="Permalink to &quot;ISP AND LANGUAGE ISP 与编程语言&quot;">​</a></h2><p>Clearly, the previously given description depends critically on language type. Statically typed languages like Java force programmers to create declarations that users must import, or use, or otherwise include. It is these included declarations in source code that create the source code dependencies that force recompilation and redeployment.</p><blockquote><p>很明显，上述例子很大程度上也依赖于我们所釆用的编程语言：对于 Java 这样的静态类型语言来说，它们需要程序员显式地 import、use 或者 include 其实现功能所需要的源代码。而正是这些语句带来了源代码之间的依赖关系，这也就导致了某些模块需要被重新编译和重新部署。</p></blockquote><p>In dynamically typed languages like Ruby and Python, such declarations don’t exist in source code. Instead, they are inferred at runtime. Thus there are no source code dependencies to force recompilation and redeployment. This is the primary reason that dynamically typed languages create systems that are more flexible and less tightly coupled than statically typed languages.</p><blockquote><p>而对于 Ruby 和 Python 这样的动态类型语言来说，源代码中就不存在这样的声明，它们所用对象的类型会在运行时被推演出来，所以也就不存在强制重新编译重新部署的必要性。这就是动态类型语言要比静态类型语言更灵活、耦合度更松的原因。</p></blockquote><p>This fact could lead you to conclude that the ISP is a language issue, rather than an architecture issue.</p><blockquote><p>当然，如果仅仅就这样说的话，读者可能会误以为 ISP 只是一个与编程语言的选择紧密相关的设计原则，而非软件架构问题，这就错了。</p></blockquote><h2 id="isp-and-architecture-isp-与软件架构" tabindex="-1">ISP AND ARCHITECTURE ISP 与软件架构 <a class="header-anchor" href="#isp-and-architecture-isp-与软件架构" aria-label="Permalink to &quot;ISP AND ARCHITECTURE ISP 与软件架构&quot;">​</a></h2><p>If you take a step back and look at the root motivations of the ISP, you can see a deeper concern lurking there. In general, it is harmful to depend on modules that contain more than you need. This is obviously true for source code dependencies that can force unnecessary recompilation and redeployment—but it is also true at a much higher, architectural level.</p><blockquote><p>回顾一下 ISP 最初的成因：在一般情况下，任何层次的软件设计如果依赖于不需要的东西，都会是有害的。从源代码层次来说，这样的依赖关系会导致不必要的重新编译和重新部署，对更高层次的软件架构设计来说，问题也是类似的。</p></blockquote><p>Consider, for example, an architect working on a system, S. He wants to include a certain framework, F, into the system. Now suppose that the authors of F have bound it to a particular database, D. So S depends on F. which depends on D (Figure 10.3).</p><blockquote><p>例如，我们假设某位软件架构师在设计系统 S 时，想要在该系统中引入某个框架 F。这时候，假设框架 F 的作者又将其捆绑在一个特定的数据库 D 上，那么就形成了 S 依赖于 F，F 又依赖于 D 的关系（参见图 10.3）。</p></blockquote>',12),C=e("p",null,"Now suppose that D contains features that F does not use and, therefore, that S does not care about. Changes to those features within D may well force the redeployment of F and, therefore, the redeployment of S. Even worse, a failure of one of the features within D may cause failures in F and S.",-1),T=e("blockquote",null,[e("p",null,"在这种情况下，如果 D 中包含了 F 不需要的功能，那么这些功能同样也会是 S 不需要的。而我们对 D 中的这些功能的修改将会导致 F 需要被重新部署，后者又会导致 S 的重新部署。更糟糕的是，D 中一个无关功能的错误也可能会导致 F 和 S 运行出错。")],-1),N=e("h2",{id:"conclusion-本章小结",tabindex:"-1"},[t("CONCLUSION 本章小结 "),e("a",{class:"header-anchor",href:"#conclusion-本章小结","aria-label":'Permalink to "CONCLUSION 本章小结"'},"​")],-1),E=e("p",null,"The lesson here is that depending on something that carries baggage that you don’t need can cause you troubles that you didn’t expect.",-1),w=e("blockquote",null,[e("p",null,"本章所讨论的设计原则告诉我们：任何层次的软件设计如果依赖了它并不需要的东西，就会带来意料之外的麻烦。")],-1),U=e("p",null,"We’ll explore this idea in more detail when we discuss the Common Reuse Principle in Chapter 13, “Component Cohesion.”",-1),v=e("blockquote",null,[e("p",null,"我们将会在第 13 章“组件聚合”中讨论共同复用原则的时候再来深入探讨更多相关的细节。")],-1);function F(q,A,O,D,R,x){const o=i("Figures");return c(),r("div",null,[u,p,_,g,a(o,{figure:"10-1"},{default:n(()=>[t("The Interface Segregation Principle")]),_:1}),m,f,S,y,P,b,I,a(o,{figure:"10-2"},{default:n(()=>[t("Segregated operations")]),_:1}),k,a(o,{figure:"10-3"},{default:n(()=>[t("A problematic architecture")]),_:1}),C,T,N,E,w,U,v])}const H=s(d,[["render",F]]);export{L as __pageData,H as default};
