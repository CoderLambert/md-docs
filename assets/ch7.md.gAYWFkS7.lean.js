import{_ as n,D as i,c as r,I as a,w as s,a4 as l,j as e,a as t,o as h}from"./chunks/framework.ffW4nm55.js";const c="/md-docs/assets/CH-UN07.BtXmm21v.jpg",L=JSON.parse('{"title":"Chap7. SRP: THE SINGLE RESPONSIBILITY PRINCIPLE SRP：单一职责原则","description":"","frontmatter":{},"headers":[],"relativePath":"ch7.md","filePath":"ch7.md","lastUpdated":1723185624000}'),p={name:"ch7.md"},u=l("",29),d=l("",9),m=l("",29),b=e("p",null,"The downside of this solution is that the developers now have three classes that they have to instantiate and track. A common solution to this dilemma is to use the Facade pattern (Figure 7.4).",-1),f=e("blockquote",null,[e("p",null,"这种解决方案的坏处在于：程序员现在需要在程序里处理三个类。另一种解决办法是使用 Facade 设计模式（见图 7.4）。")],-1),k=e("p",null,"The EmployeeFacade contains very little code. It is responsible for instantiating and delegating to the classes with the functions.",-1),y=e("blockquote",null,[e("p",null,"这样一来，EmployeeFacade 类所需要的代码量就很少了，它仅仅包含了初始化和调用三个具体实现类的函数。")],-1),g=e("p",null,"Some developers prefer to keep the most important business rules closer to the data. This can be done by keeping the most important method in the original Employee class and then using that class as a Facade for the lesser functions (Figure 7.5).",-1),_=e("blockquote",null,[e("p",null,"当然，也有些程序员更倾向于把最重要的业务逻辑与数据放在一起，那么我们也可以选择将最重要的函数保留在 Employee 类中，同时用这个类来调用其他没那么重要的函数（见图 7.5）。")],-1),q=e("p",null,"You might object to these solutions on the basis that every class would contain just one function. This is hardly the case. The number of functions required to calculate pay, generate a report, or save the data is likely to be large in each case. Each of those classes would have many private methods in them.",-1),T=e("blockquote",null,[e("p",null,"读者也许会反对上面这些解决方案，因为看上去这里的每个类中都只有一个函数。事实上并非如此，因为无论是计算工资、生成报表还是保存数据都是一个很复杂的过程，每个类都可能包含了许多私有函数。")],-1),O=e("p",null,"Each of the classes that contain such a family of methods is a scope. Outside of that scope, no one knows that the private members of the family exist.",-1),S=e("blockquote",null,[e("p",null,"总而言之，上面的每一个类都分别容纳了一组作用于相同作用域的函数，而在该作用域之外，它们各自的私有函数是互相不可见的。")],-1),P=e("h2",{id:"conclusion-本章小结",tabindex:"-1"},[t("CONCLUSION 本章小结 "),e("a",{class:"header-anchor",href:"#conclusion-本章小结","aria-label":'Permalink to "CONCLUSION 本章小结"'},"​")],-1),C=e("p",null,"The Single Responsibility Principle is about functions and classes—but it reappears in a different form at two more levels. At the level of components, it becomes the Common Closure Principle. At the architectural level, it becomes the Axis of Change responsible for the creation of Architectural Boundaries. We’ll be studying all of these ideas in the chapters to come.",-1),w=e("blockquote",null,[e("p",null,"单一职责原则主要讨论的是函数和类之间的关系——但是它在两个讨论层面上会以不同的形式出现。在组件层面，我们可以将其称为共同闭包原则（Common Closure Principle)，在软件架构层面，它则是用于奠定架构边界的变更轴心（Axis of Change）。我们在接下来的章节中会深入学习这些原则。")],-1);function v(I,E,R,A,N,F){const o=i("Figures");return h(),r("div",null,[u,a(o,{figure:"7-1"},{default:s(()=>[t("The Employee class")]),_:1}),d,a(o,{figure:"7-2"},{default:s(()=>[t("Shared algorithm")]),_:1}),m,a(o,{figure:"7-3"},{default:s(()=>[t("The three classes do not know about each other")]),_:1}),b,f,a(o,{figure:"7-4"},{default:s(()=>[t("The Facade pattern")]),_:1}),k,y,g,_,a(o,{figure:"7-5"},{default:s(()=>[t("The most important method is kept in the original Employee class and used as a Facade for the lesser functions")]),_:1}),q,T,O,S,P,C,w])}const x=n(p,[["render",v]]);export{L as __pageData,x as default};
