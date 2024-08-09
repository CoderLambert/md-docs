import{_ as s,D as n,c as l,I as o,w as i,a4 as r,j as e,a as t,o as c}from"./chunks/framework.DtvhUNIn.js";const h="/assets/CH-UN34.B57XJgH7.jpg",F=JSON.parse('{"title":"Chap34. THE MISSING CHAPTER 拾遗","description":"","frontmatter":{},"headers":[],"relativePath":"ch34.md","filePath":"ch34.md","lastUpdated":1723191287000}'),d={name:"ch34.md"},p=r("",15),u=r("",11),m=e("h2",{id:"ports-and-adapters-端口和适配器",tabindex:"-1"},[t("PORTS AND ADAPTERS 端口和适配器 "),e("a",{class:"header-anchor",href:"#ports-and-adapters-端口和适配器","aria-label":'Permalink to "PORTS AND ADAPTERS 端口和适配器"'},"​")],-1),b=e("p",null,"As Uncle Bob has said, approaches such as “ports and adapters,” the “hexagonal architecture,” “boundaries, controllers, entities,” and so on aim to create architectures where business/domain-focused code is independent and separate from the technical implementation details such as frameworks and databases. To summarize, you often see such code bases being composed of an “inside” (domain) and an “outside” (infrastructure), as suggested in Figure 34.3.",-1),y=e("blockquote",null,[e("p",null,"如 Bob 大叔所说，通过采用“端口和适配器”“六边形架构”“边界、控制器、实体”等，我们可以创造出一个业务领域代码与具体实现细节（数据库、框架等）隔离的架构。总结下来，如图 34.3 所示，我们可以区分出代码中的内部代码（领域，Domain）与外部代码（基础设施，Infrastructure）。")],-1),g=e("p",null,"The “inside” region contains all of the domain concepts, whereas the “outside” region contains the interactions with the outside world (e.g., UIs, databases, third-party integrations). The major rule here is that the “outside” depends on the “inside”—never the other way around. Figure 34.4 shows a version of how the “view orders” use case might be implemented.",-1),f=e("blockquote",null,[e("p",null,"内部区域包含了所有的领域概念，而外部区域则包含了与外界交互的部分（例如 UI、数据库、第三方集成等）。这里主要的规则是，只有外部代码能依赖内部代码，反之则不能。图 34.4 展示了 “查看订单”这个业务用例是如何用这种方式实现的。")],-1),w=e("p",null,[t("The "),e("code",null,"com.mycompany.myapp.domain"),t(" package here is the “inside,” and the other packages are the “outside.” Notice how the dependencies flow toward the “inside.” The keen-eyed reader will notice that the OrdersRepository from previous diagrams has been renamed to simply be Orders. This comes from the world of domain-driven design, where the advice is that the naming of everything on the “inside” should be stated in terms of the “ubiquitous domain language.” To put that another way, we talk about “orders” when we’re having a discussion about the domain, not the “orders repository.”")],-1),k=e("blockquote",null,[e("p",null,[t("这里 "),e("code",null,"com.mycompnay.myapp.domain"),t(" 包是内部代码，另外一个包是外部代码。注意这里的依赖关系是由外向内的。眼尖的读者可以注意到之前的 OrderRepository 类现在被改名为 Orders。这个概念基于领域驱动设计理念，其中要求内部代码都应该用独特的领域语言来描述。换句话说，我们在业务领域里面讨论的应该是 Orders，而不是“OrdersRepository”。")])],-1),v=r("",15),_=r("",12),T=r("",16),I=e("p",null,"Moving from left to right, in the “package by layer” approach, the OrdersService and OrdersRepository interfaces need to be public, because they have inbound dependencies from classes outside of their defining package. In contrast, the implementation classes (OrdersServiceImpl and JdbcOrdersRepository) can be made more restrictive (package protected). Nobody needs to know about them; they are an implementation detail.",-1),q=e("blockquote",null,[e("p",null,"从左向右，在 “按层封装”方式中，OrderService 与 OrderRepository 需要 public 修饰符，因为包外的类需要依赖它们。然而，具体实现类（OrdersServiceImpl 和 JdbcOrdersRepository）则可以设置更细致的访问权限（包范围内的 protected）。不需要有人依赖它们，它们是具体的实现细节。")],-1),O=e("p",null,"In the “package by feature” approach, the OrdersController provides the sole entry point into the package, so everything else can be made package protected. The big caveat here is that nothing else in the code base, outside of this package, can access information related to orders unless they go through the controller. This may or may not be desirable.",-1),S=e("blockquote",null,[e("p",null,"在“按功能封装”模式中，OrdersController 是整个包的入口，所以其他的类都可以设置为包范围内的 protected。这里的一个问题是，代码库中的其他代码都必须通过控制器才能访问订单信息——这可能是好处，也可能是坏处，视实际情况而定。")],-1),A=e("p",null,"In the ports and adapters approach, the OrdersService and Orders interfaces have inbound dependencies from other packages, so they need to be made public. Again, the implementation classes can be made package protected and dependency injected at runtime.",-1),C=e("blockquote",null,[e("p",null,"在端口与适配器模式中，OrderService 与 Orders 接口都有来自包外的依赖关系，所以需要 public 修饰符。同样，实现类可以设置为包范围内 protected，依赖在运行时注入。")],-1),P=r("",21),E=e("p",null,"This approach to organizing source code will also work, but be aware of the potential trade-off. It’s what I call the “Périphérique anti-pattern of ports and adapters.” The city of Paris, France, has a ring road called the Boulevard Périphérique, which allows you to circumnavigate Paris without entering the complexities of the city. Having all of your infrastructure code in a single source code tree means that it’s potentially possible for infrastructure code in one area of your application (e.g., a web controller) to directly call code in another area of your application (e.g., a database repository), without navigating through the domain. This is especially true if you’ve forgotten to apply appropriate access modifiers to that code.",-1),N=e("blockquote",null,[e("p",null,"这种代码组织方式是可行的，但是需要额外注意随之而来的问题。我称这个问题为“端口与适配器模式中的 Peripherique 反模式”。法国巴黎有一条环形公路，名字是 Peripherique 大道。这条大道允许车辆环绕巴黎而不需要进入社区。同样的，将所有的基础设施代码放在同一个源代码树中，就有可能使得应用中的一个区域的基础设施代码（Web 控制器）直接调用另外一个区域的代码（数据库访问），而不经过领域代码。如果没有设置正确的访问修饰符，就更是如此了。")],-1),R=e("h2",{id:"conclusion-the-missing-advice-本章小结-本书拾遗",tabindex:"-1"},[t("CONCLUSION: THE MISSING ADVICE 本章小结：本书拾遗 "),e("a",{class:"header-anchor",href:"#conclusion-the-missing-advice-本章小结-本书拾遗","aria-label":'Permalink to "CONCLUSION: THE MISSING ADVICE 本章小结：本书拾遗"'},"​")],-1),J=e("p",null,"The whole point of this chapter is to highlight that your best design intentions can be destroyed in a flash if you don’t consider the intricacies of the implementation strategy. Think about how to map your desired design on to code structures, how to organize that code, and which decoupling modes to apply during runtime and compile-time. Leave options open where applicable, but be pragmatic, and take into consideration the size of your team, their skill level, and the complexity of the solution in conjunction with your time and budgetary constraints. Also think about using your compiler to help you enforce your chosen architectural style, and watch out for coupling in other areas, such as data models. The devil is in the implementation details.",-1),x=e("blockquote",null,[e("p",null,"这一章的中心思想就是，如果不考虑具体实现细节，再好的设计也无法长久。必须要将设计映射到对应的代码结构上，考虑如何组织代码树，以及在编译期和运行期采用哪种解耦合的模式。保持开放，但是一定要务实，同时要考虑到团队的大小、技术水平，以及对应的时间和预算限制。最好能利用编译器来维护所选的系统架构设计风格，小心防范来自其他地方的耦合模式，例如数据结构。所有的实现细节都是关键的！")],-1);function M(D,L,U,V,B,W){const a=n("Figures");return c(),l("div",null,[p,o(a,{figure:"34-1"},{default:i(()=>[t("Package by layer")]),_:1}),u,o(a,{figure:"34-2"},{default:i(()=>[t("Package by feature")]),_:1}),m,b,y,o(a,{figure:"34-3"},{default:i(()=>[t("A code base with an inside and an outside")]),_:1}),g,f,w,k,o(a,{figure:"34-4"},{default:i(()=>[t("View orders use case")]),_:1}),v,o(a,{figure:"34-5"},{default:i(()=>[t("Relaxed layered architecture")]),_:1}),_,o(a,{figure:"34-6"},{default:i(()=>[t("View orders use case")]),_:1}),T,o(a,{figure:"34-7"},{default:i(()=>[t("All four architectural approaches are the same")]),_:1}),I,q,O,S,A,C,o(a,{figure:"34-8"},{default:i(()=>[t("Grayed-out types are where the access modifier can be made more restrictive")]),_:1}),P,o(a,{figure:"34-9"},{default:i(()=>[t("Domain and infrastructure code")]),_:1}),E,N,R,J,x])}const G=s(d,[["render",M]]);export{F as __pageData,G as default};
