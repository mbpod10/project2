(this.webpackJsonpreactproject2=this.webpackJsonpreactproject2||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),m=a(10),s=a.n(m),u=a(15),o=a(5),i=a(9),E=a(7),h=(a(92),a(204),a(93),a(96),a(200)),b=a(201),f=function(){return r.a.createElement("div",{className:"about-div"},r.a.createElement("div",{className:"jumbo"},r.a.createElement(h.a,{className:"jumbo"},r.a.createElement("h1",null,"Real Time Currency Data"),r.a.createElement("p",null,"List currencies and their exchange rates"),r.a.createElement(i.b,{to:"/names"},r.a.createElement("p",null,r.a.createElement(b.a,{variant:"primary"},"Currency List"))))),r.a.createElement("div",{className:"jumbo"},r.a.createElement(h.a,{className:"jumbo"},r.a.createElement("h1",null,"Find Individual Exchange Rates"),r.a.createElement("p",null,"Pick a currency and find their exchange rates against 30 other major currencies"),r.a.createElement(i.b,{to:"/converter"},r.a.createElement("p",null,r.a.createElement(b.a,{variant:"primary"},"Pick Currency"))))),r.a.createElement("div",{className:"jumbo"},r.a.createElement(h.a,{className:"jumbo"},r.a.createElement("h1",null,"Euro Historical Exchange Rates"),r.a.createElement("p",null,"Find historical exchange rates against the euro from up to 20 years ago. Find the standard deviation and the average price as well!"),r.a.createElement(i.b,{to:"/historicalpricing"},r.a.createElement("p",null,r.a.createElement(b.a,{variant:"primary"},"Historical Rates"))))))},d=(a(99),function(e){var t=e.match.params.symbol,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],m=c[1],E=Object(n.useState)(""),h=Object(o.a)(E,2),b=h[0],f=h[1],d=Object(n.useState)([]),p=Object(o.a)(d,2),v=p[0],y=p[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frankfurter.app/latest?from=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log("data.rates",n.rates),n.rates,f(n.date),m(n.rates),r=Object.keys(n.rates),y(r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frankfurter.app/latest?from=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,f(n.date),m(n.rates),r=Object.keys(n.rates),y(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);for(var j=[],O=0;O<v.length;O++)j.push(v[O],e.nameArray[O]);var g=Object.keys(l).map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"table-h4",key:t},r.a.createElement(i.b,{to:"/currencies/".concat(e)},e," ")))})),N=(Object.keys(l).map((function(e,t){return r.a.createElement(r.a.Fragment,null,e)})),Object.keys(l).map((function(t,a){for(var n=0;n<e.nameArray.length;n++)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"table-h4",key:a},r.a.createElement(i.b,{to:"/currencies/".concat(t)},t," ",e.nameArray[n])))})),Object.values(l).map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},e)}))),k=N.map((function(e,a){return r.a.createElement("h4",{className:"table-h4",key:a},t)})),S=N.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},"1")})),x=N.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},"=")}));return r.a.createElement("div",{className:"table-div"},r.a.createElement("h1",{className:"individual-currency-h1"},"Rates Against: ",t," (",b,")"),r.a.createElement("table",{className:"table table-dark table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," "),r.a.createElement("th",null,"Currency"),r.a.createElement("th",null," "),r.a.createElement("th",null,b," Exchange Rate"),r.a.createElement("th",null,"Base Currency"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,S),r.a.createElement("td",null,k),r.a.createElement("td",null,x),r.a.createElement("td",null,N),r.a.createElement("td",null,g)))))}),p=a(202),v=a(79),y=(a(100),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),E=i[0],h=i[1],f=Object(n.useState)([]),d=Object(o.a)(f,2),y=d[0],j=d[1],O=Object(n.useState)(""),g=Object(o.a)(O,2),N=g[0],k=g[1],S=e.currencyKeys.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}));return r.a.createElement("div",{className:"form-div"},r.a.createElement("h1",null,"Currency Converter"),r.a.createElement(p.a,{onSubmit:function(e){e.preventDefault(),function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frankfurter.app/latest?from=".concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:for(n in a=e.sent,j(a.rates),y)n===E&&k(y[n]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}},r.a.createElement(p.a.Row,{className:"align-items-center"},r.a.createElement(v.a,{xs:"auto",className:"my-1"},r.a.createElement(p.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(p.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(e){l(e.target.value)}},r.a.createElement("option",{selected:!0},"Currency..."),S)),r.a.createElement(v.a,{xs:"auto",className:"my-1"},r.a.createElement(p.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(p.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(e){h(e.target.value)}},r.a.createElement("option",{selected:!0},"Currency..."),S)),r.a.createElement(v.a,{xs:"auto",className:"my-1"},r.a.createElement(b.a,{type:"submit"},"Submit")))),N?r.a.createElement("h1",null,"1 ",c," = ",N," ",E):null)}),j=(a(102),function(e){var t=e.currencyKeys.map((function(e,t){return r.a.createElement(i.b,{className:"nav-link",to:"/currencies/".concat(e)},r.a.createElement("h6",{className:"symbol",key:t},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"nav-h3"},"Quick Nav"),r.a.createElement("h1",{className:"currencyNamesSymb"},t))}),O=(a(103),function(e){var t=[],a=[];e.nameAndSymbolArray.forEach((function(e,a){t.push(e[0])})),e.nameAndSymbolArray.forEach((function(e,t){a.push(e[1])}));var n=t.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},r.a.createElement(i.b,{to:"/currencies/".concat(e)},e," "))})),c=a.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},e)}));return r.a.createElement("div",{className:"table-div"},r.a.createElement("h1",{className:"individual-currency-h1-names"},"Currency Names and Symbols"),r.a.createElement("table",{className:"table table-dark table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"nameTr"}," Symbol"),r.a.createElement("th",{className:"nameTr"},"Name"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"nameTr-data"},n),r.a.createElement("td",{className:"nameTr-data"},c)))))}),g=a(205),N=a(203),k=function(e){var t=e.currencyKeys.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),a=[1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),c=[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"history"},"Insert Parameters (Data Against The Euro)"),r.a.createElement("p",null,"Note: returns all data points for up to 90 days. Above that, it starts sampling by week or month based on the breadth of the date range."),r.a.createElement("p",null,"PULLS DATA TO CURRENT DATE"),r.a.createElement("p",null,"BGN Data Not Working"),r.a.createElement(p.a,{onSubmit:e.handleSubmit},r.a.createElement(p.a.Row,{className:"align-items-center"},r.a.createElement(v.a,{xs:"auto",className:"my-1"},r.a.createElement(p.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(p.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(t){e.handleChange1(t.target.value)}},r.a.createElement("option",{selected:!0},"Currency..."),t)),r.a.createElement(v.a,{xs:"auto",className:"my-1"},r.a.createElement(p.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(p.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(t){var a=t.target.value;t.target.value<10?(a="0"+t.target.value,e.handleChange2(a)):e.handleChange2(a)}},r.a.createElement("option",{selected:!0},"Month..."),c)),r.a.createElement(v.a,{xs:"auto",className:"my-1"},r.a.createElement(p.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(p.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(t){var a=t.target.value;t.target.value<10?(a="0"+t.target.value,e.handleChange3(a)):e.handleChange3(a)}},r.a.createElement("option",{selected:!0},"Day..."),n)),r.a.createElement(v.a,{xs:"auto",className:"my-1"},r.a.createElement(p.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(p.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(t){console.log(t.target.value),e.handleChange4(t.target.value)}},r.a.createElement("option",{selected:!0},"Year..."),a)),r.a.createElement(v.a,{xs:"auto",className:"my-1"},r.a.createElement(b.a,{type:"submit"},"Submit")))))},S=(a(104),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(""),s=Object(o.a)(m,2),u=s[0],i=s[1],E=Object(n.useState)(""),h=Object(o.a)(E,2),b=h[0],f=h[1],d=Object(n.useState)(""),p=Object(o.a)(d,2),v=p[0],y=p[1],j=Object(n.useState)(""),O=Object(o.a)(j,2),g=O[0],N=O[1],k=Object(n.useState)(""),S=Object(o.a)(k,2),x=S[0],C=S[1],F=Object(n.useState)(""),w=Object(o.a)(F,2),A=w[0],D=w[1],R=Object(n.useState)(""),L=Object(o.a)(R,2),T=L[0],P=L[1],K=function(e){},B=function(e){};return r.a.createElement(r.a.Fragment,null,e.endDate?r.a.createElement("input",{className:"sd",type:"button",onClick:function(){var t=e.exchangeRate.reduce((function(e,t){return e+t}))/e.exchangeRate.length;y(t);var a=e.exchangeRate.map((function(e,a){return e-t})).map((function(e,t){return e*e})).reduce((function(e,t){return e+t}))*(1/e.exchangeRate.length),n=Math.sqrt(a);l(n);var r=t+n;i(r),e.getUpperBound(r);var c=t-n;f(c),e.getLowerBound(c);var m=r+n;N(m);var s=c-n;C(s),D(m+n),P(s-n),K(),B()},value:"Calculate Standard Deviation"}):null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"table-div"},r.a.createElement("table",{className:"table table-dark table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Average Price"),r.a.createElement("th",null,"Standard Deviation"),r.a.createElement("th",null,"1SD Lower - Upper"),r.a.createElement("th",null,"2SD Lower - Upper"),r.a.createElement("th",null,"3SD Lower - Upper"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,v.toFixed(8)),r.a.createElement("td",null,c.toFixed(8)),r.a.createElement("td",null,b.toFixed(8)," - ",u.toFixed(8)),r.a.createElement("td",null,x.toFixed(8)," - ",g.toFixed(8)),r.a.createElement("td",null,T.toFixed(8)," - ",A.toFixed(8))))))):null)}),x=a(80),C=function(e){var t={labels:e.date,datasets:[{label:"Exchange Rate Of (x) "+e.symbol+" = 1 Euro (Higher Rates Means "+e.symbol+" Is Less Valuable)",data:e.exchangeRate}]};return r.a.createElement(x.a,{data:t})},F=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),E=i[0],h=i[1],b=Object(n.useState)([]),f=Object(o.a)(b,2),d=f[0],p=f[1],v=Object(n.useState)([]),y=Object(o.a)(v,2),j=y[0],O=y[1],g=Object(n.useState)(""),N=Object(o.a)(g,2),x=N[0],F=N[1],w=Object(n.useState)(""),A=Object(o.a)(w,2),D=A[0],R=A[1],L=Object(n.useState)(""),T=Object(o.a)(L,2),P=T[0],K=T[1],B=Object(n.useState)(""),H=Object(o.a)(B,2),I=H[0],U=H[1],M=Object(n.useState)(""),G=Object(o.a)(M,2),J=G[0],Y=G[1],_=Object(n.useState)(""),q=Object(o.a)(_,2),Q=(q[0],q[1]),V=Object(n.useState)(""),W=Object(o.a)(V,2),X=(W[0],W[1]),z=d.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},c," ",r.a.createElement("span",{className:"change"}," / ",E," "))})),Z=d.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},e)})),$=j.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},e)}));return r.a.createElement("div",{className:"hisoricalDataDiv"},r.a.createElement(k,{currencyKeys:e.currencyKeys,handleSubmit:function(e){e.preventDefault();var t="".concat(P,"-").concat(J,"-").concat(I);(function(){var e=Object(u.a)(s.a.mark((function e(){var a,n,r,l,m,u,o,i,E;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frankfurter.app/".concat(t,"..?to=").concat(c));case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,h(n.base),r=Object.keys(n.rates),p(r),r[0],F(n.start_date),R(n.end_date),l=Object.values(n.rates).map((function(e,t){return e})),m=Object.values(l).map((function(e,t){return e})),(u=[])[0],o=m[0],i=Object.keys(o).map((function(e,t){return e})),i.join(" "),m.length>0)for(E in m)u.push(m[E][c]);O(u);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},handleChange1:function(e){l(e)},handleChange2:function(e){Y(e)},handleChange3:function(e){U(e)},handleChange4:function(e){K(e)}}),r.a.createElement("div",null,r.a.createElement(S,{exchangeRate:j,endDate:D,getLowerBound:function(e){Q(e)},getUpperBound:function(e){X(e)}})),D?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chart"},r.a.createElement(C,{exchangeRate:j,date:d,symbol:c})),r.a.createElement("div",{className:"table-div"},r.a.createElement("h1",{className:"individual-currency-h1 "},"Historical Data (Against The Euro)"),r.a.createElement("table",{className:"table table-dark table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Currency"),r.a.createElement("th",null,"(",x,") -- (",D,")"),r.a.createElement("th",null,"Exchange Rate"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,z),r.a.createElement("td",null,Z),r.a.createElement("td",null,$)))))):null)},w=(a(197),function(){return r.a.createElement("div",{class:"bottom"},r.a.createElement("div",{class:"bottom-nav"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h5",null,"Back To Top")),r.a.createElement("li",null,r.a.createElement("a",{href:"#top"},"Top")),r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"#projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact"},"Contact")))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h5",null,"Connect")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=JYjdbw7XD3U&feature=youtu.be"},"YouTube")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://linkdin.com"},"LinkdIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://facebook.com"},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://instagram.com"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://github.com"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://copen.io"},"Codepen")))),r.a.createElement("div",null,r.a.createElement("ul",{class:"hide"},r.a.createElement("li",null,r.a.createElement("h5",null,"Contact")),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:someone@yoursite.com?subject=Mail from Our Site"},"Email")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://linkdin.com"},"LinkdIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://facebook.com"},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://instagram.com"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://github.com"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://copen.io"},"Codepen"))))))});var A=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),h=(m[0],m[1]),b=Object(n.useState)([]),p=Object(o.a)(b,2),v=p[0],k=p[1],S=Object(n.useState)([]),x=Object(o.a)(S,2),C=x[0],A=x[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,l,m,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frankfurter.app/latest");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,h(a.rates),n=Object.keys(a.rates).map((function(e,t){return e})),c(n),e.next=11,fetch("https://api.frankfurter.app/currencies");case 11:return r=e.sent,e.next=14,r.json();case 14:l=e.sent,m=Object.values(l),k(m),u=Object.entries(l),A(u);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",id:"top"},r.a.createElement(g.a.Brand,{href:"/"}),r.a.createElement(g.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(g.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(N.a,{className:"mr-auto"},r.a.createElement(i.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(i.b,{className:"nav-link",to:"/names"},"Names"),r.a.createElement(i.b,{className:"nav-link",to:"/converter"},"Currency Converter")),r.a.createElement(N.a,null,r.a.createElement(i.b,{className:"nav-link",to:"/historicalpricing"},"Euro Historical Data")))),r.a.createElement("main",null,r.a.createElement("div",{className:"main-section"},r.a.createElement(N.a,{defaultActiveKey:"/home",className:"flex-column"},r.a.createElement(j,{currencyKeys:a})),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:f}),r.a.createElement(E.a,{exact:!0,path:"/currencies/:symbol",render:function(e){return r.a.createElement(d,Object.assign({nameArray:v},e))}}),r.a.createElement(E.a,{exact:!0,path:"/converter",render:function(e){return r.a.createElement(y,Object.assign({currencyKeys:a},e))}}),r.a.createElement(E.a,{exact:!0,path:"/currencies/:symbol",render:function(e){return r.a.createElement(j,Object.assign({currencyKeys:a},e))}}),r.a.createElement(E.a,{exact:!0,path:"/names",render:function(e){return r.a.createElement(O,Object.assign({currencyKeys:a,nameAndSymbolArray:C},e))}}),r.a.createElement(E.a,{exact:!0,path:"/historicalpricing",render:function(e){return r.a.createElement(F,Object.assign({currencyKeys:a,nameAndSymbolArray:C},e))}})))),r.a.createElement("footer",null,r.a.createElement(w,null)))};l.a.render(r.a.createElement(i.a,null,r.a.createElement(A,null)),document.getElementById("root"))},86:function(e,t,a){e.exports=a(198)},92:function(e,t,a){},93:function(e,t,a){},96:function(e,t,a){},99:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.d0c5c979.chunk.js.map