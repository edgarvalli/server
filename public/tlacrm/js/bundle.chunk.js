(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{270:function(e,t,a){e.exports=a(519)},433:function(e,t){},435:function(e,t){},470:function(e,t){},471:function(e,t){},517:function(e,t,a){},519:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),i=a.n(s),o=a(25),c=a(26),l=a(28),u=a(27),m=a(29),p=a(4),d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={openDrawer:!1,params:{onSearch:function(e){return console.log(e)},child:!1,parentView:"",title:"Navbar"},credentials:""},a.toggleDrawer=function(){return a.setState({openDrawer:!a.state.openDrawer})},a.showSearchBar=function(){var e=document.querySelector("#search-bar-container"),t=document.querySelector("#search-bar");e.classList.contains("search-bar-show")?e.classList.remove("search-bar-show"):(e.classList.add("search-bar-show"),t.focus())},a.setParams=function(e){return a.setState({params:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){"credentials"in navigator?this.setState({credentials:"Credentials API is supported"}):this.setState({credentials:"Credentials API is not supported"})}},{key:"changeView",value:function(e){this.props.navigation.go(e),this.toggleDrawer()}},{key:"logout",value:function(){window.confirm("\xbfDeseas cerrar sesi\xf3n?")?(localStorage.clear(),sessionStorage.clear(),window.location.reload()):this.toggleDrawer()}},{key:"toggleFullScreen",value:function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}},{key:"mainBar",value:function(){var e=this,t=this.state.params.onSearch;return r.a.createElement("div",null,r.a.createElement(p.a,{position:"fixed"},r.a.createElement(p.v,{className:"navbar"},r.a.createElement(p.m,{onClick:this.toggleDrawer},"menu"),r.a.createElement(p.w,{variant:"h6",color:"inherit"},this.state.params.title),r.a.createElement(p.m,{onClick:this.showSearchBar},"search"),r.a.createElement("div",{className:"search-bar",id:"search-bar-container"},r.a.createElement(p.m,{color:"action",onClick:this.showSearchBar},"arrow_back"),r.a.createElement("input",{type:"search",id:"search-bar",placeholder:this.state.params.placeholder||"Buscador",onChange:function(e){return t(e.target.value)}})))),r.a.createElement(p.s,{open:this.state.openDrawer,onClose:this.toggleDrawer,onOpen:this.toggleDrawer},r.a.createElement(p.n,null,r.a.createElement(p.o,null,r.a.createElement(p.p,null,r.a.createElement(p.b,{src:"https://lh3.googleusercontent.com/-zjdfJx44dfQ/AAAAAAAAAAI/AAAAAAAAAos/SukJQdVUzJU/s60-p-rw-no-il/photo.jpg"})),r.a.createElement(p.r,null,"Edgar Eduardo Valli Mu\xf1oz"))),r.a.createElement(p.i,null),r.a.createElement(p.n,{className:"w-drawer"},r.a.createElement(p.o,{onClick:function(){return e.changeView("Clients")}},"Clientes"),r.a.createElement(p.o,{onClick:function(){return e.logout()}},"Cerrar Session"),r.a.createElement(p.o,{onClick:function(){return e.toggleFullScreen()}},"FullScreen"),r.a.createElement(p.o,null,r.a.createElement(p.w,{variant:"caption"},this.state.credentials)))))}},{key:"childBar",value:function(){var e=this.state.params,t=e.parentView,a=e.title,n=this.props.navigation;return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(p.v,{className:"navbar"},r.a.createElement(p.m,{onClick:function(){return n.go(t)}},"arrow_back"),r.a.createElement(p.w,{variant:"h6",color:"inherit"},a),r.a.createElement("div",null))))}},{key:"render",value:function(){return this.state.params.child?this.childBar():this.mainBar()}}]),t}(n.Component),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={display:"fixed",title:"Enviando datos al servidor"},a.setVisible=function(e){return a.setState({display:"fixed",title:e})},a.setHide=function(){return a.setState({display:"none"})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.display,a=e.title;return r.a.createElement("div",{className:"loader",style:{display:t}},r.a.createElement(p.h,{variant:"indeterminate",color:"primary"}),r.a.createElement(p.w,{variant:"caption",style:{marginLeft:20}},a||"Enviando datos al servidor"))}}]),t}(n.Component),f=d,v=h,g=a(12),b=a.n(g),w=a(22),y="ckUQU!@YtN%8Phtp9tXtC6W96PeV8Kd4mcMpB==Bs9JUK8B=*JKNX!C$K%3a",E="https://ev-server.ddns.net/api/tlacrm",k=a(120),x=a.n(k),C=function(e){var t="https://ev-server.ddns.net/api/tlacrm/users/login",a=localStorage.getItem("session")||sessionStorage.getItem("session"),n={headers:{"Content-Type":"Application/Json",Accept:"Application/Json"},method:"get"};return a&&(a=JSON.parse(a),n.headers.Token=a.token),{authentication:function(){var e=Object(w.a)(b.a.mark(function e(a,r){var s,i,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.method="post",n.body=JSON.stringify(a),e.next=4,fetch(t,n).catch(function(e){return console.log(e)});case 4:return s=e.sent,e.next=7,s.json();case 7:(i=e.sent).error&&alert(i.message),r?(o=new x.a(y),localStorage.setItem("loggedIn",!0),localStorage.setItem("currentView","Clients"),localStorage.setItem("session",JSON.stringify({username:a.username,password:o.encrypt(a.password),token:i.token,autoLogin:!0}))):(sessionStorage.setItem("loggedIn",!0),sessionStorage.setItem("currentView","Clients"),sessionStorage.setItem("session",JSON.stringify({token:i.token})));case 10:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),loginAgain:function(){var e=Object(w.a)(b.a.mark(function e(){var r,s,i,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new x.a(y),s={username:a.username,password:r.decrypt(a.password)},n.method="post",n.body=JSON.stringify(s),e.next=6,fetch(t,n).catch(function(e){return console.log(e)});case 6:return i=e.sent,e.next=9,i.json();case 9:if(!(o=e.sent).error){e.next=12;break}return e.abrupt("return",alert(o.message));case 12:a.token=o.token,localStorage.setItem("session",JSON.stringify(a));case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),get:function(){var t=Object(w.a)(b.a.mark(function t(){var r,s;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n).catch(function(e){return console.log(e)});case 2:return r=t.sent,t.next=5,r.json();case 5:if(!(s=t.sent).error){t.next=17;break}if(!s.tokenExpired){t.next=17;break}if(!a.autoLogin){t.next=17;break}return t.next=11,this.loginAgain();case 11:return t.next=13,fetch(e,n).catch(function(e){return console.log(e)});case 13:return r=t.sent,t.next=16,r.json();case 16:s=t.sent;case 17:return t.abrupt("return",s);case 18:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),post:function(){var t=Object(w.a)(b.a.mark(function t(r){var s,i;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.method="post",n.body=JSON.stringify(r),t.next=4,fetch(e,n).catch(function(e){return console.log(e)});case 4:return s=t.sent,t.next=7,s.json();case 7:if(!(i=t.sent).error){t.next=19;break}if(!i.tokenExpired){t.next=19;break}if(!a.autoLogin){t.next=19;break}return t.next=13,this.loginAgain();case 13:return t.next=15,fetch(e,n).catch(function(e){return console.log(e)});case 15:return s=t.sent,t.next=18,s.json();case 18:i=t.sent;case 19:return t.abrupt("return",i);case 20:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),uploadFile:function(){var e=Object(w.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",autoLogin:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"login",value:function(){var e=Object(w.a)(b.a.mark(function e(t){var a,n,r,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state,n=a.username,r=a.password,s=a.autoLogin,"https://ev-server.ddns.net/api/tlacrm/users/login",e.next=5,C("https://ev-server.ddns.net/api/tlacrm/users/login").authentication({username:n,password:r},s);case 5:window.location.reload();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.login(t)},className:"login-container"},r.a.createElement("div",{className:"bg-login"}),r.a.createElement(p.d,null,r.a.createElement(p.g,null),r.a.createElement(p.f,null,r.a.createElement(p.u,{label:"Usuario",fullWidth:!0,value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})},tabIndex:1}),r.a.createElement(p.u,{label:"Contrase\xf1a",type:"password",fullWidth:!0,value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},tabIndex:2})),r.a.createElement(p.e,null,r.a.createElement(p.l,{container:!0},r.a.createElement(p.l,{item:!0,xs:3}),r.a.createElement(p.l,{item:!0,xs:6},r.a.createElement(p.k,{control:r.a.createElement(p.t,{value:!0,color:"primary",onChange:function(t){return e.setState({autoLogin:t.target.checked})}}),label:"Auto Login",tabIndex:3})),r.a.createElement(p.l,{item:!0,xs:3}),r.a.createElement(p.l,{item:!0,xs:12},r.a.createElement(p.c,{fullWidth:!0,variant:"contained",color:"primary",type:"submit"},"Login"))))))}}]),t}(n.Component),S=function(e){return e.clients.map(function(t){return r.a.createElement(p.n,{key:t._id},r.a.createElement(p.o,{onClick:function(){return function(e){var t=document.getElementById(e),a=t.getAttribute("status"),n=document.getElementById("icon-"+e);"expanded"===a?(t.style.height=0,t.setAttribute("status","collapsed"),n.classList.remove("list-item-icon")):(t.style.height="10rem",t.setAttribute("status","expanded"),n.classList.add("list-item-icon"))}(t._id)},className:"touchable"},r.a.createElement(p.r,{secondary:t.cellphone||""},t.name),r.a.createElement(p.q,null,r.a.createElement(p.m,{style:{transition:"all .5s"},id:"icon-"+t._id},"keyboard_arrow_down"))),r.a.createElement(O,{client:t,navigation:e.navigation}))})},O=function(e){var t=e.client,a=e.navigation,n=e.onRefresh;return r.a.createElement("div",{className:"expanded",id:t._id,status:"collapsed"},["Llamar","Detalles","Mostrar Presupuestos","Mostrar Trabajos","Eliminar"].map(function(e,s){return r.a.createElement(p.w,{variant:"caption",key:e+s,onClick:function(){return function(e){switch(e){case 0:window.open("tel:+52 ".concat(t.cellphone),"_blank");break;case 1:a.go("ClientForm",{action:"update",id:t._id});break;case 2:case 3:break;case 4:if(window.confirm("\xbfDeseas eliminar el registro (Se eliminaran todos los trabajos y presupuestos relacionados)?")){var r="".concat(E,"/clients/remove/").concat(t._id);C().get(r).then(function(e){if(e.error)return alert(e.message);n()})}break;default:return null}}(s)},className:"touchable"},e)}))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={clients:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.navigation.setNavbarParams({title:"Clientes",placeholder:"Buscar Cliente",onSearch:function(t){return e.searchClients(t)},onRefresh:function(){return e.fetchClients()}}),this.fetchClients()}},{key:"fetchClients",value:function(){var e=Object(w.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.refs.loader.setVisible(),t="".concat(E,"/clients/fetch/1"),e.next=4,C(t).get();case 4:if(!(a=e.sent).error){e.next=7;break}return e.abrupt("return",alert(a.message));case 7:this.setState({clients:a.data.clients}),this.refs.loader.setHide();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"searchClients",value:function(){var e=Object(w.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return",this.fetchClients());case 2:return a="".concat(E,"/clients/search/").concat(t),e.next=5,C(a).get();case 5:if(!(n=e.sent).error){e.next=8;break}return e.abrupt("return",alert(n.message));case 8:this.setState({clients:n.data.clients});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(v,{ref:"loader"}),r.a.createElement(p.l,{container:!0},r.a.createElement(p.l,{item:!0,xs:12},r.a.createElement(p.n,{component:"nav"},r.a.createElement(S,{clients:this.state.clients,navigation:this.props.navigation})))),r.a.createElement("span",{className:"fab-fixed"},r.a.createElement(p.j,{color:"primary","aria-label":"Add",onClick:function(){return e.props.navigation.go("ClientForm")}},r.a.createElement(p.m,null,"add"))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).clientAttributes=[{name:"name",type:"text",label:"Nombre",required:!0},{name:"cellphone",label:"Celular",type:"tel",required:!0},{name:"phone",label:"Telefono",type:"tel"},{name:"address",label:"Direcci\xf3n"},{name:"hood",label:"Colonia"},{name:"county",label:"Municipio"},{name:"state",label:"Estado"},{name:"country",label:"Pais"},{name:"zip",label:"Codigo Postal",type:"number"}],a.invoiceAttributes=[{name:"rfc",label:"RFC"},{name:"forma_de_pago",label:"Forma de Pago"},{name:"uso_de_factura",label:"Uso de factura"}],a.state={values:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.navigation;e.setNavbarParams({child:!0,parentView:"Clients",title:"Datos Clientes"}),"update"===e.getParams().action&&this.getValues(e.getParams().id)}},{key:"getValues",value:function(){var e=Object(w.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.refs.loader.setVisible(),a="".concat(E,"/clients/getone/").concat(t),e.next=4,C(a).get();case 4:if(!(n=e.sent).error){e.next=7;break}return e.abrupt("return",alert(n.message));case 7:delete n.data._id,this.setState({values:n.data}),this.refs.loader.setHide();case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault(),"update"===this.props.navigation.getParams().action?this.updateClient():this.addClient()}},{key:"updateClient",value:function(){var e=Object(w.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.state.values,a="".concat(E,"/clients/update"),e.next=5,C(a).post({id:this.props.navigation.getParams().id,client:t});case 5:if(!(n=e.sent).error){e.next=8;break}return e.abrupt("return",alert(n.message));case 8:this.props.navigation.go("Clients"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"addClient",value:function(){var e=Object(w.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.state.values,a="".concat(E,"/clients/add"),e.next=5,C(a).post(t);case 5:if(!(n=e.sent).error){e.next=8;break}return e.abrupt("return",alert(n.message));case 8:this.props.navigation.go("Clients"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var a=this.state.values;a[e]=t,this.setState({values:a})}},{key:"render",value:function(){var e=this,t=this.props.navigation;return r.a.createElement("div",{className:"container padding-1 margin-1"},"update"===t.getParams().action&&r.a.createElement(v,{ref:"loader"}),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(p.l,{container:!0},r.a.createElement(p.l,{item:!0,xs:12},this.clientAttributes.map(function(t,a){return r.a.createElement(p.u,{key:t.name+a,name:t.name,id:t.name,label:t.label,fullWidth:!0,type:t.type||"text",required:t.required||!1,tabIndex:1,autoComplete:t.autoComplete||"off",value:e.state.values[t.name]||"",onChange:function(a){var n=a.target;return e.handleChange(t.name,n.value)}})})),r.a.createElement(p.l,{item:!0,xs:12},r.a.createElement(p.k,{control:r.a.createElement(p.t,{value:!0,color:"primary",onChange:function(t){var a=t.target;return e.handleChange("invoice",a.checked)}}),label:"Datos de factura",tabIndex:1})),r.a.createElement(p.l,{item:!0,xs:12},this.state.values.invoice&&this.invoiceAttributes.map(function(t,a){return r.a.createElement(p.u,{key:t.name+a,name:t.name,id:t.name,label:t.label,fullWidth:!0,type:t.type||"text",required:t.required||!1,tabIndex:1,autoComplete:t.autoComplete||"off",value:e.state.values[t.name]||"",onChange:function(a){var n=a.target;return e.handleChange(t.name,n.value)}})})),r.a.createElement(p.l,{xs:12,item:!0},r.a.createElement(p.c,{variant:"contained",color:"primary",fullWidth:!0,type:"submit"},"Enviar")))))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.navigation.setNavbarParams({title:"Clientes"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},"Hello")}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={views:{Login:j,Clients:A,ClientForm:I,Job:N},currentView:"Clients",params:{},loggedIn:!1,isMobile:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.breakPoints(),"true"===(localStorage.getItem("loggedIn")||sessionStorage.getItem("loggedIn"))?this.setState({loggedIn:!0,currentView:localStorage.getItem("currentView")}):this.setState({loggedIn:!1})}},{key:"breakPoints",value:function(){var e=window.innerWidth;/Mobile/.test(navigator.userAgent)?this.setState({isMobile:!0}):e>768&&this.setState({isMobile:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.views,n=t.currentView,s=t.isMobile,i=a[n],o={go:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.setState({currentView:t,params:a})},setNavbarParams:function(t){return e.refs.navbar.setParams(t)},isMobile:s,getParams:function(){return e.state.params}};return this.state.loggedIn?r.a.createElement("div",null,r.a.createElement(f,{ref:"navbar",navigation:o}),r.a.createElement(i,{navigation:o})):r.a.createElement(j,null)}}]),t}(n.Component);a(517),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[270,2,1]]]);
//# sourceMappingURL=main.57fbb6fe.chunk.js.map