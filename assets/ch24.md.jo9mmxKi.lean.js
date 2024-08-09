import{_ as s,D as r,c as l,I as o,w as n,a4 as i,j as e,a as t,o as c}from"./chunks/framework.DtvhUNIn.js";const h="/assets/CH-UN24.B6uM_hUi.jpg",S=JSON.parse('{"title":"Chap24. PARTIAL BOUNDARIES 不完全边界","description":"","frontmatter":{},"headers":[],"relativePath":"ch24.md","filePath":"ch24.md","lastUpdated":1723191287000}'),d={name:"ch24.md"},p=i("",22),u=e("p",null,"It should be clear that this sets the stage for a future architectural boundary. The necessary dependency inversion is in place in an attempt to isolate the Client from the ServiceImpl. It should also be clear that the separation can degrade pretty rapidly, as shown by the nasty dotted arrow in the diagram. Without reciprocal interfaces, nothing prevents this kind of backchannel other than the diligence and discipline of the developers and architects.",-1),b=e("blockquote",null,[e("p",null,"很明显，上述设计为未来构建完整的系统架构边界打下了坚实基础。为了未来将 Client 与 ServiceImpl 隔离，必要的依赖反转已经做完了。同时，我们也能清楚地看到，图中的虚线箭头代表了未来有可能很快就会出问题的隔离问题。由于没有采用双向反向接口，这部分就只能依赖开发者和架构师的自律性来保证组件持久隔离了。")],-1),m=e("h2",{id:"facades-门户模式",tabindex:"-1"},[t("FACADES 门户模式 "),e("a",{class:"header-anchor",href:"#facades-门户模式","aria-label":'Permalink to "FACADES 门户模式"'},"​")],-1),f=e("p",null,"An even simpler boundary is the Facade pattern, illustrated in Figure 24.2. In this case, even the dependency inversion is sacrificed. The boundary is simply defined by the Facade class, which lists all the services as methods, and deploys the service calls to classes that the client is not supposed to access.",-1),y=e("blockquote",null,[e("p",null,"下面，我们再来看一个更简单的架构边界设计：采用门户模式（facade pattern），其架构如图 24.2 所示。在这种模式下，我们连依赖反转的工作都可以省了。这里的边界将只能由 Facade 类来定义，这个类的背后是一份包含了所有服务函数的列表，它会负责将 Client 的调用传递给对 client 不可见的服务函数。")],-1),g=i("",9);function k(_,w,v,I,q,T){const a=r("Figures");return c(),l("div",null,[p,o(a,{figure:"24-1"},{default:n(()=>[t("The Strategy pattern")]),_:1}),u,b,m,f,y,o(a,{figure:"24-2"},{default:n(()=>[t("The Facade pattern")]),_:1}),g])}const N=s(d,[["render",k]]);export{S as __pageData,N as default};
