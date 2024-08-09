import{_ as h,D as o,c as l,I as a,w as t,a4 as n,j as e,a as s,o as r}from"./chunks/framework.DtvhUNIn.js";const p="/assets/CH-UN29.W3gQ381w.jpg",O=JSON.parse('{"title":"Chap29. CLEAN EMBEDDED ARCHITECTURE 整洁的嵌入式架构","description":"","frontmatter":{},"headers":[],"relativePath":"books/cleanArch/ch29.md","filePath":"books/cleanArch/ch29.md","lastUpdated":1723198909000}'),d={name:"books/cleanArch/ch29.md"},k=n("",84),c=e("p",null,"The separation between hardware and the rest of the system is a given—at least once the hardware is defined (Figure 29.2). Here is where the problems often begin when you are trying to pass the App-titude test. There is nothing that keeps hardware knowledge from polluting all the code. If you are not careful about where you put things and what one module is allowed to know about another module, the code will be very hard to change. I’m not just talking about when the hardware changes, but when the user asks for a change, or when a bug needs to be fixed.",-1),u=e("blockquote",null,[e("p",null,"硬件与系统其他部分的分隔是既定的——至少在硬件设计完成之后如此（如图 29.2 所示）。这也是在我们试图通过程序适用测试之时往往会发生问题的地方。因为没有什么东西可以真正阻碍硬件实现细节污染到应用代码。如果我们在构建代码的时候不够小心，没有小心安排哪些模块之间可以互相依赖，代码很快就非常难以更改了。请注意，这里所说的变更不仅仅是指来自硬件的变更，还包括用户的功能性变更、修复代码中的 Bug。")],-1),g=e("p",null,"Software and firmware intermingling is an anti-pattern. Code exhibiting this anti-pattern will resist changes. In addition, changes will be dangerous, often leading to unintended consequences. Full regression tests of the whole system will be needed for minor changes. If you have not created externally instrumented tests, expect to get bored with manual tests—and then you can expect new bug reports.",-1),y=e("blockquote",null,[e("p",null,"另外，软件与固件集成在一起也属于设计上的反模式（anti-pattern）。符合这种反模式的代码修改起来都会很困难。同时，这种代码也很危险，容易造成意外事故，这导致它经历任何微少的改动都需要进行完整的回归测试。如果没有完善的测试流程，那么你就等着无穷无尽的手工测试吧——同时还有纷沓而来的 Bug 报告。")],-1),E=e("h3",{id:"the-hardware-is-a-detail-硬件是实现细节",tabindex:"-1"},[s("The Hardware Is a Detail 硬件是实现细节 "),e("a",{class:"header-anchor",href:"#the-hardware-is-a-detail-硬件是实现细节","aria-label":'Permalink to "The Hardware Is a Detail 硬件是实现细节"'},"​")],-1),m=e("p",null,"The line between software and firmware is typically not so well defined as the line between code and hardware, as shown in Figure 29.3.",-1),f=e("blockquote",null,[e("p",null,"软件与固件之间的边界往往没有代码与硬件之间的边界那么清晰，如图 29.3 所示。")],-1),b=e("p",null,"One of your jobs as an embedded software developer is to firm up that line. The name of the boundary between the software and the firmware is the hardware abstraction layer (HAL) (Figure 29.4). This is not a new idea: It has been in PCs since the days before Windows.",-1),w=e("blockquote",null,[e("p",null,"所以，我们的工作之一就是将这个边界定义得更清晰一些。软件与固件之间的边界被称为硬件抽象层（HAL），如图 29.4 所示。这不是一个新概念，它在 PC 上的存在甚至可以追溯到 Windows 诞生之前。")],-1),A=n("",45),F=e("p",null,"A clean embedded architecture isolates software from the operating system, through an operating system abstraction layer (OSAL) (Figure 29.6). In some cases, implementing this layer might be as simple as changing the name of a function. In other cases, it might involve wrapping several functions together.",-1),v=e("blockquote",null,[e("p",null,"整洁的嵌入式架构会引入操作系统抽象层（OSAL，如图 29.6 所示），将软件与操作系统分割开。在某些情况下，实现这个抽象层就像给函数改个名字那么简单。而在另一些情况下，则需要将几个函数封装在一起。")],-1),D=n("",29);function _(C,T,q,I,S,B){const i=o("Figures");return r(),l("div",null,[k,a(i,{figure:"29-1"},{default:t(()=>[s("Three layers")]),_:1}),c,u,a(i,{figure:"29-2"},{default:t(()=>[s("Hardware must be separated from the rest of the system")]),_:1}),g,y,E,m,f,a(i,{figure:"29-3"},{default:t(()=>[s("The line between software and firmware is a bit fuzzier than the line between code and hardware")]),_:1}),b,w,a(i,{figure:"29-4"},{default:t(()=>[s("The hardware abstraction layer")]),_:1}),A,a(i,{figure:"29-5"},{default:t(()=>[s("Adding in an operating system")]),_:1}),F,v,a(i,{figure:"29-6"},{default:t(()=>[s("The operating system abstraction layer")]),_:1}),D])}const R=h(d,[["render",_]]);export{O as __pageData,R as default};
