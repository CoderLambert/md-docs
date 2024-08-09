import{_ as n,D as r,c as l,I as a,w as s,a4 as i,j as e,a as t,o as c}from"./chunks/framework.DtvhUNIn.js";const h="/assets/CH-UN27.DEHXO2K-.jpg",V=JSON.parse('{"title":"Chap27. SERVICES: GREAT AND SMALL 服务：宏观与微观","description":"","frontmatter":{},"headers":[],"relativePath":"books/cleanArch/ch27.md","filePath":"books/cleanArch/ch27.md","lastUpdated":1723198909000}'),d={name:"books/cleanArch/ch27.md"},p=i("",42),u=i("",29),b=e("h2",{id:"component-based-services-基于组件的服务",tabindex:"-1"},[t("COMPONENT-BASED SERVICES 基于组件的服务 "),e("a",{class:"header-anchor",href:"#component-based-services-基于组件的服务","aria-label":'Permalink to "COMPONENT-BASED SERVICES 基于组件的服务"'},"​")],-1),m=e("p",null,"The obvious question is: Can we do that for services? And the answer is, of course: Yes! Services do not need to be little monoliths. Services can, instead, be designed using the SOLID principles, and given a component structure so that new components can be added to them without changing the existing components within the service.",-1),f=e("blockquote",null,[e("p",null,"那么，问题来了：服务化也可以做到这一点吗？答案是肯定的。服务并不一定必须是小型的单体程序。服务也可以按照 SOLID 原则来设计，按照组件结构来部署，这样就可以做到在添加/删除组件时不影响服务中的其他组件。")],-1),v=e("p",null,"Think of a service in Java as a set of abstract classes in one or more jar files. Think of each new feature or feature extension as another jar file that contains classes that extend the abstract classes in the first jar files. Deploying a new feature then becomes not a matter of redeploying the services, but rather a matter of simply adding the new jar files to the load paths of those services. In other words, adding new features conforms to the Open-Closed Principle.",-1),y=e("blockquote",null,[e("p",null,"我们可以将 Java 中的服务看作是一个或多个 jar 文件中的一组抽象类，而每个新功能或功能扩展都是另一个 jar 文件中的类，它们都扩展了之前 jar 文件中的抽象类。这样一来，部署新功能就不再是部署服务了，而只是简单地在服务的加载路径下增加一个 jar 文件。换句话说，这种增加新功能的过程符合开闭原则（OCP）。")],-1),g=e("p",null,"The service diagram in Figure 27.3 shows the structure. The services still exist as before, but each has its own internal component design, allowing new features to be added as new derivative classes. Those derivative classes live within their own components.",-1),w=e("blockquote",null,[e("p",null,"这种服务的架构如图 27.3 所示。我们可以看到，在该架构中服务仍然和之前一样，但是每个服务中都增加了内部组件结构，以便使用衍生类来添加新功能，而这些衍生类都有各自所生存的组件。")],-1),k=e("h2",{id:"cross-cutting-concerns-横跨型变更",tabindex:"-1"},[t("CROSS-CUTTING CONCERNS 横跨型变更 "),e("a",{class:"header-anchor",href:"#cross-cutting-concerns-横跨型变更","aria-label":'Permalink to "CROSS-CUTTING CONCERNS 横跨型变更"'},"​")],-1),T=e("p",null,"What we have learned is that architectural boundaries do not fall between services. Rather, those boundaries run through the services, dividing them into components.",-1),q=e("blockquote",null,[e("p",null,"现在我们应该已经明白了，系统的架构边界事实上并不落在服务之间，而是穿透所有服务，在服务内部以组件的形式存在。")],-1),_=e("p",null,"To deal with the cross-cutting concerns that all significant systems face, services must be designed with internal component architectures that follow the Dependency Rule, as shown in the diagram in Figure 27.4. Those services do not define the architectural boundaries of the system; instead, the components within the services do.",-1),E=e("blockquote",null,[e("p",null,"为了处理这个所有大型系统都会遇到的横跨型变更问题，我们必须在服务内部采用遵守依赖关系原则的组件设计方式，如图 27.4 所示。总而言之，服务边界并不能代表系统的架构边界，服务内部的组件边界才是。")],-1),S=e("h2",{id:"conclusion-本章小结",tabindex:"-1"},[t("CONCLUSION 本章小结 "),e("a",{class:"header-anchor",href:"#conclusion-本章小结","aria-label":'Permalink to "CONCLUSION 本章小结"'},"​")],-1),x=e("p",null,"As useful as services are to the scalability and develop-ability of a system, they are not, in and of themselves, architecturally significant elements. The architecture of a system is defined by the boundaries drawn within that system, and by the dependencies that cross those boundaries. That architecture is not defined by the physical mechanisms by which elements communicate and execute.",-1),C=e("blockquote",null,[e("p",null,"虽然服务化可能有助于提升系统的可扩展性和可研发性，但服务本身却并不能代表整个系统的架构设计。系统的架构是由系统内部的架构边界，以及边界之间的依赖关系所定义的，与系统中各组件之间的调用和通信方式无关。")],-1),I=e("p",null,"A service might be a single component, completely surrounded by an architectural boundary. Alternatively, a service might be composed of several components separated by architectural boundaries. In rare2 cases, clients and services may be so coupled as to have no architectural significance whatever.",-1),A=e("blockquote",null,[e("p",null,"一个服务可能是一个独立组件，以系统架构边界的形式隔开。一个服务也可能由几个组件组成，其中的组件以架构边界的形式互相隔离。在极端情况下，客户端和服务端甚至可能会由于耦合得过于紧密而不具备系统架构意义上的隔离性。")],-1);function N(O,R,D,L,P,F){const o=r("Figures");return c(),l("div",null,[p,a(o,{figure:"27-1"},{default:s(()=>[t("Services arranged to implement the taxi aggregator system")]),_:1}),u,a(o,{figure:"27-2"},{default:s(()=>[t("Using an object-oriented approach to deal with cross-cutting concerns")]),_:1}),b,m,f,v,y,g,w,a(o,{figure:"27-3"},{default:s(()=>[t("Each service has its own internal component design, enabling new features to be added as new derivative classes")]),_:1}),k,T,q,_,E,a(o,{figure:"27-4"},{default:s(()=>[t("Services must be designed with internal component architectures that follow the Dependency Rule")]),_:1}),S,x,C,I,A])}const j=n(d,[["render",N]]);export{V as __pageData,j as default};
