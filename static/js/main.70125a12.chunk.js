(this.webpackJsonpreactproject2=this.webpackJsonpreactproject2||[]).push([[0],{46:function(e,t,a){e.exports=a(67)},52:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),m=a(9),s=a.n(m),u=a(13),o=a(5),i=a(8),E=a(6),h=(a(52),a(73),a(53),a(56),a(69)),b=a(70),f=function(){return r.a.createElement("div",{className:"about-div"},r.a.createElement("div",{className:"jumbo"},r.a.createElement(h.a,{className:"jumbo"},r.a.createElement("h1",null,"Real Time Currency Data"),r.a.createElement("p",null,"List currencies and their exchange rates"),r.a.createElement(i.b,{to:"/names"},r.a.createElement("p",null,r.a.createElement(b.a,{variant:"primary"},"Currency List"))))),r.a.createElement("div",{className:"jumbo"},r.a.createElement(h.a,{className:"jumbo"},r.a.createElement("h1",null,"Find Individual Exchange Rates"),r.a.createElement("p",null,"Pick a currency and find their exchange rates against 30 other major currencies"),r.a.createElement(i.b,{to:"/converter"},r.a.createElement("p",null,r.a.createElement(b.a,{variant:"primary"},"Pick Currency"))))),r.a.createElement("div",{className:"jumbo"},r.a.createElement(h.a,{className:"jumbo"},r.a.createElement("h1",null,"Euro Historical Exchange Rates"),r.a.createElement("p",null,"Find historical exchange rates against the euro from up to 20 years ago. Find the standard deviation and the average price as well!"),r.a.createElement(i.b,{to:"/historicalpricing"},r.a.createElement("p",null,r.a.createElement(b.a,{variant:"primary"},"Historical Rates"))))))},p=(a(60),function(e){var t=e.match.params.symbol,a=Object(n.useState)([]),l=Object(o.a)(a,2),c=l[0],m=l[1],E=Object(n.useState)(""),h=Object(o.a)(E,2),b=h[0],f=h[1],p=Object(n.useState)([]),d=Object(o.a)(p,2),y=d[0],v=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frankfurter.app/latest?from=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log("data.rates",n.rates),n.rates,f(n.date),m(n.rates),r=Object.keys(n.rates),v(r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frankfurter.app/latest?from=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,f(n.date),m(n.rates),r=Object.keys(n.rates),v(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var j=[];console.log("converArray",y),console.log("nameArray",e.nameArray);for(var g=0;g<y.length;g++)j.push(y[g],e.nameArray[g]);console.log("ultArray",j);var O=Object.keys(c).map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"table-h4",key:t},r.a.createElement(i.b,{to:"/currencies/".concat(e)},e," ")))})),N=(Object.keys(c).map((function(e,t){return r.a.createElement(r.a.Fragment,null,e)})),Object.keys(c).map((function(t,a){for(var n=0;n<e.nameArray.length;n++)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"table-h4",key:a},r.a.createElement(i.b,{to:"/currencies/".concat(t)},t," ",e.nameArray[n])))})),Object.values(c).map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},e)}))),k=N.map((function(e,a){return r.a.createElement("h4",{className:"table-h4",key:a},t)})),S=N.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},"1")})),C=N.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},"=")}));return r.a.createElement("div",{className:"table-div"},r.a.createElement("h1",{className:"individual-currency-h1"},"Rates Against: ",t," (",b,")"),r.a.createElement("table",{className:"table table-dark table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," "),r.a.createElement("th",null,"Currency"),r.a.createElement("th",null," "),r.a.createElement("th",null,b," Exchange Rate"),r.a.createElement("th",null,"Base Currency"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,S),r.a.createElement("td",null,k),r.a.createElement("td",null,C),r.a.createElement("td",null,N),r.a.createElement("td",null,O)))))}),d=a(71),y=a(41),v=(a(61),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),E=i[0],h=i[1],f=Object(n.useState)([]),p=Object(o.a)(f,2),v=p[0],j=p[1],g=Object(n.useState)(""),O=Object(o.a)(g,2),N=O[0],k=O[1],S=e.currencyKeys.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}));return r.a.createElement("div",{className:"form-div"},r.a.createElement("h1",null,"Currency Converter"),r.a.createElement(d.a,{onSubmit:function(e){e.preventDefault(),console.log("PreventDefault"),function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frankfurter.app/latest?from=".concat(l));case 2:return t=e.sent,e.next=5,t.json();case 5:for(n in a=e.sent,j(a.rates),v)n===E&&k(v[n]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}},r.a.createElement(d.a.Row,{className:"align-items-center"},r.a.createElement(y.a,{xs:"auto",className:"my-1"},r.a.createElement(d.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(d.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(e){c(e.target.value)}},r.a.createElement("option",{selected:!0},"Currency..."),S)),r.a.createElement(y.a,{xs:"auto",className:"my-1"},r.a.createElement(d.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(d.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(e){h(e.target.value)}},r.a.createElement("option",{selected:!0},"Currency..."),S)),r.a.createElement(y.a,{xs:"auto",className:"my-1"},r.a.createElement(b.a,{type:"submit"},"Submit")))),N?r.a.createElement("h1",null,"1 ",l," = ",N," ",E):null)}),j=(a(63),function(e){var t=e.currencyKeys.map((function(e,t){return r.a.createElement(i.b,{className:"nav-link",to:"/currencies/".concat(e)},r.a.createElement("h6",{className:"symbol",key:t},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"nav-h3"},"Quick Nav"),r.a.createElement("h1",{className:"currencyNamesSymb"},t))}),g=(a(64),function(e){var t=[],a=[];e.nameAndSymbolArray.forEach((function(e,a){t.push(e[0])})),e.nameAndSymbolArray.forEach((function(e,t){a.push(e[1])})),console.log(t),console.log(a);var n=t.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},r.a.createElement(i.b,{to:"/currencies/".concat(e)},e," "))})),l=a.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},e)}));return r.a.createElement("div",{className:"table-div"},r.a.createElement("h1",{className:"individual-currency-h1-names"},"Currency Names and Symbols"),r.a.createElement("table",{className:"table table-dark table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"nameTr"}," Symbol"),r.a.createElement("th",{className:"nameTr"},"Name"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"nameTr-data"},n),r.a.createElement("td",{className:"nameTr-data"},l)))))}),O=a(74),N=a(72),k=function(e){var t=e.currencyKeys.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),a=[1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),l=[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"history"},"Insert Parameters (Data Against The Euro)"),r.a.createElement("p",null,"Note: returns all data points for up to 90 days. Above that, it starts sampling by week or month based on the breadth of the date range."),r.a.createElement("p",null,"PULLS DATA TO CURRENT DATE"),r.a.createElement(d.a,{onSubmit:e.handleSubmit},r.a.createElement(d.a.Row,{className:"align-items-center"},r.a.createElement(y.a,{xs:"auto",className:"my-1"},r.a.createElement(d.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(d.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(t){e.handleChange1(t.target.value)}},r.a.createElement("option",{selected:!0},"Currency..."),t)),r.a.createElement(y.a,{xs:"auto",className:"my-1"},r.a.createElement(d.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(d.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(t){var a=t.target.value;t.target.value<10?(console.log("yes"),a="0"+t.target.value,e.handleChange2(a),console.log(a)):(console.log("no"),e.handleChange2(a))}},r.a.createElement("option",{selected:!0},"Month..."),l)),r.a.createElement(y.a,{xs:"auto",className:"my-1"},r.a.createElement(d.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(d.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(t){var a=t.target.value;t.target.value<10?(console.log("yes"),a="0"+t.target.value,e.handleChange3(a),console.log(a)):(console.log("no"),e.handleChange3(a))}},r.a.createElement("option",{selected:!0},"Day..."),n)),r.a.createElement(y.a,{xs:"auto",className:"my-1"},r.a.createElement(d.a.Label,{className:"mr-sm-2",for:"inlineFormCustomSelect",srOnly:!0},"Preference"),r.a.createElement(d.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",custom:!0,onChange:function(t){console.log(t.target.value),e.handleChange4(t.target.value)}},r.a.createElement("option",{selected:!0},"Year..."),a)),r.a.createElement(y.a,{xs:"auto",className:"my-1"},r.a.createElement(b.a,{type:"submit"},"Submit")))))},S=(a(65),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(""),s=Object(o.a)(m,2),u=s[0],i=s[1],E=Object(n.useState)(""),h=Object(o.a)(E,2),b=h[0],f=h[1],p=Object(n.useState)(""),d=Object(o.a)(p,2),y=d[0],v=d[1],j=Object(n.useState)(""),g=Object(o.a)(j,2),O=g[0],N=g[1],k=Object(n.useState)(""),S=Object(o.a)(k,2),C=S[0],x=S[1],F=Object(n.useState)(""),w=Object(o.a)(F,2),A=w[0],D=w[1],L=Object(n.useState)(""),R=Object(o.a)(L,2),T=R[0],P=R[1],K=function(e){},U=function(e){};return r.a.createElement(r.a.Fragment,null,e.endDate?r.a.createElement("input",{className:"sd",type:"button",onClick:function(){var t=e.exchangeRate.reduce((function(e,t){return e+t}))/e.exchangeRate.length;v(t);var a=e.exchangeRate.map((function(e,a){return e-t})).map((function(e,t){return e*e})).reduce((function(e,t){return e+t}))*(1/e.exchangeRate.length),n=Math.sqrt(a);c(n);var r=t+n;i(r),e.getUpperBound(r);var l=t-n;f(l),e.getLowerBound(l);var m=r+n;N(m);var s=l-n;x(s),D(m+n),P(s-n),K(),U()},value:"Calculate Standard Deviation"}):null,l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"table-div"},r.a.createElement("table",{className:"table table-dark table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Average Price"),r.a.createElement("th",null,"Standard Deviation"),r.a.createElement("th",null,"1SD Lower - Upper"),r.a.createElement("th",null,"2SD Lower - Upper"),r.a.createElement("th",null,"3SD Lower - Upper"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,y.toFixed(8)),r.a.createElement("td",null,l.toFixed(8)),r.a.createElement("td",null,b.toFixed(8)," - ",u.toFixed(8)),r.a.createElement("td",null,C.toFixed(8)," - ",O.toFixed(8)),r.a.createElement("td",null,T.toFixed(8)," - ",A.toFixed(8))))))):null)}),C=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),E=i[0],h=i[1],b=Object(n.useState)([]),f=Object(o.a)(b,2),p=f[0],d=f[1],y=Object(n.useState)([]),v=Object(o.a)(y,2),j=v[0],g=v[1],O=Object(n.useState)(""),N=Object(o.a)(O,2),C=N[0],x=N[1],F=Object(n.useState)(""),w=Object(o.a)(F,2),A=w[0],D=w[1],L=Object(n.useState)(""),R=Object(o.a)(L,2),T=R[0],P=R[1],K=Object(n.useState)(""),U=Object(o.a)(K,2),B=U[0],H=U[1],I=Object(n.useState)(""),J=Object(o.a)(I,2),M=J[0],Y=J[1],G=Object(n.useState)(""),_=Object(o.a)(G,2),q=_[0],Q=_[1],X=Object(n.useState)(""),z=Object(o.a)(X,2),V=z[0],W=z[1];console.log("symbol",l);var Z=p.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},l," ",r.a.createElement("span",{className:"change"}," / ",E," "))})),$=p.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},e)})),ee=j.map((function(e,t){return r.a.createElement("h4",{className:"table-h4",key:t},e)}));return r.a.createElement("div",{className:"hisoricalDataDiv"},r.a.createElement(k,{currencyKeys:e.currencyKeys,handleSubmit:function(e){e.preventDefault();var t="".concat(T,"-").concat(M,"-").concat(B);(function(){var e=Object(u.a)(s.a.mark((function e(){var a,n,r,c,m,u,o,i,E;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frankfurter.app/".concat(t,"..?to=").concat(l));case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,h(n.base),r=Object.keys(n.rates),d(r),r[0],x(n.start_date),D(n.end_date),c=Object.values(n.rates).map((function(e,t){return e})),m=Object.values(c).map((function(e,t){return e})),(u=[])[0],o=m[0],i=Object.keys(o).map((function(e,t){return e})),i.join(" "),m.length>0)for(E in m)u.push(m[E][l]);g(u);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},handleChange1:function(e){c(e)},handleChange2:function(e){Y(e)},handleChange3:function(e){H(e)},handleChange4:function(e){P(e)}}),r.a.createElement("div",null,r.a.createElement(S,{exchangeRate:j,endDate:A,getLowerBound:function(e){Q(e),console.log("lower",q)},getUpperBound:function(e){W(e),console.log("upper",V)}})),A?r.a.createElement("div",{className:"table-div"},r.a.createElement("h1",{className:"individual-currency-h1 "},"Historical Data (Against The Euro)"),r.a.createElement("table",{className:"table table-dark table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Currency"),r.a.createElement("th",null,"(",C,") -- (",A,")"),r.a.createElement("th",null,"Exchange Rate"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,Z),r.a.createElement("td",null,$),r.a.createElement("td",null,ee))))):null)},x=(a(66),function(){return r.a.createElement("div",{class:"bottom"},r.a.createElement("div",{class:"bottom-nav"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h5",null,"Back To Top")),r.a.createElement("li",null,r.a.createElement("a",{href:"#top"},"Top")),r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"#projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact"},"Contact")))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h5",null,"Connect")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.youtube.com/watch?v=JYjdbw7XD3U&feature=youtu.be"},"YouTube")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://linkdin.com"},"LinkdIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://facebook.com"},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://instagram.com"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://github.com"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://copen.io"},"Codepen")))),r.a.createElement("div",null,r.a.createElement("ul",{class:"hide"},r.a.createElement("li",null,r.a.createElement("h5",null,"Contact")),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:someone@yoursite.com?subject=Mail from Our Site"},"Email")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://linkdin.com"},"LinkdIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://facebook.com"},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://instagram.com"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://github.com"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://copen.io"},"Codepen"))))))});var F=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),m=Object(o.a)(c,2),h=(m[0],m[1]),b=Object(n.useState)([]),d=Object(o.a)(b,2),y=d[0],k=d[1],S=Object(n.useState)([]),F=Object(o.a)(S,2),w=F[0],A=F[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,c,m,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frankfurter.app/latest");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,h(a.rates),n=Object.keys(a.rates).map((function(e,t){return e})),l(n),e.next=11,fetch("https://api.frankfurter.app/currencies");case 11:return r=e.sent,e.next=14,r.json();case 14:c=e.sent,m=Object.values(c),k(m),u=Object.entries(c),A(u);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(O.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",id:"top"},r.a.createElement(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(O.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(N.a,{className:"mr-auto"},r.a.createElement(N.a.Link,{href:"/"},"Home"),r.a.createElement(i.b,{className:"nav-link",to:"/names"},"Names"),r.a.createElement(i.b,{className:"nav-link",to:"/converter"},"Currency Converter")),r.a.createElement(N.a,null,r.a.createElement(i.b,{className:"nav-link",to:"/historicalpricing"},"Euro Historical Data")))),r.a.createElement("main",null,r.a.createElement("div",{className:"main-section"},r.a.createElement(N.a,{defaultActiveKey:"/home",className:"flex-column"},r.a.createElement(j,{currencyKeys:a})),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:f}),r.a.createElement(E.a,{exact:!0,path:"/currencies/:symbol",render:function(e){return r.a.createElement(p,Object.assign({nameArray:y},e))}}),r.a.createElement(E.a,{exact:!0,path:"/converter",render:function(e){return r.a.createElement(v,Object.assign({currencyKeys:a},e))}}),r.a.createElement(E.a,{exact:!0,path:"/currencies/:symbol",render:function(e){return r.a.createElement(j,Object.assign({currencyKeys:a},e))}}),r.a.createElement(E.a,{exact:!0,path:"/names",render:function(e){return r.a.createElement(g,Object.assign({currencyKeys:a,nameAndSymbolArray:w},e))}}),r.a.createElement(E.a,{exact:!0,path:"/historicalpricing",render:function(e){return r.a.createElement(C,Object.assign({currencyKeys:a,nameAndSymbolArray:w},e))}})))),r.a.createElement("footer",null,r.a.createElement(x,null)))};c.a.render(r.a.createElement(i.a,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.70125a12.chunk.js.map