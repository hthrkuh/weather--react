(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var n=a(29),c=a(4),r=a.n(c),s=a(14),i=a(5),o=a(6),l=a(9),h=a(8),d=a(0),u=a.n(d),j=a(22),p=a.n(j),b=(a(67),a(53)),v=(a(68),a(20)),f=a.n(v),m=a(10),x=a.n(m),O=a(25),g=a(59),y=a(60),C=a(54),w=a.n(C),k=a(1),N=u.a.createContext({theme:"light",toggleTheme:function(){}}),D=function(e){var t=e.children,a=Object(d.useState)(""),n=Object(y.a)(a,2),c=n[0],r=n[1],s="light"===c?"dark":"light",i=function(e){localStorage.setItem("theme",JSON.stringify(e))};return Object(d.useEffect)((function(){localStorage.getItem("theme")?r(JSON.parse(localStorage.getItem("theme"))):function(){var e=w()().format("H");e>=6&&e<18?(r("light"),i("light")):(r("dark"),i("dark"))}()}),[]),Object(k.jsx)(N.Provider,{value:{theme:c,colorTheme:s,toggleTheme:function(){var e="light"===c?"dark":"light";r(e),i(e)}},children:t})},S=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onInputChange=function(e){/^[a-zA-Z]+$/.test(e)?n.setState({err:!1}):n.setState({err:!0})},n.state={},n.customStyles={option:function(e,t){return Object(O.a)(Object(O.a)({},e),{},{borderBottom:"1px dotted pink",color:t.isSelected?"blue":"dark"===n.context.colorTheme?"white":"black",padding:10,backgroundColor:"dark"===n.context.colorTheme?t.isFocused?"#2684FF":"#212529 !important":t.isFocused?"#2684FF":console.log(t,"lll")})},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(O.a)(Object(O.a)({},e),{},{opacity:a,transition:"opacity 300ms"})}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{className:"basic-single col-4 m-4 mx-auto search-bar",children:[this.state.err?Object(k.jsx)("span",{className:"text-danger",children:"Only english letters allowed"}):"",Object(k.jsx)(g.a,{styles:this.customStyles,classNamePrefix:"select",placeholder:"Search a city...",isSearchable:"true",name:"cities",options:this.props.locations,onChange:function(t){return e.props.handleOnChange(t.label,t.code)},onInputChange:this.onInputChange})]})}}]),a}(d.Component);S.contextType=N;var F=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{className:"form-switch pt-5 p-0",children:[Object(k.jsx)("span",{className:"",children:"\u2103"}),Object(k.jsx)("input",{type:"checkbox",className:"form-check-input mx-3",id:"customSwitches",onChange:function(t){return e.props.handleOnChange(t)},checked:this.props.checked,defaultChecked:!0}),Object(k.jsx)("label",{className:"form-check-label",htmlFor:"customSwitches",children:"\u2109"})]})}}]),a}(d.Component),I=a(21),T=a.n(I),A=function(e){var t=e.selectedDay,a=e.dayIndex,n=(e.dayKey,e.dayDate),c=e.dayIcon,r=e.dayMinTemp,s=e.dayMaxTemp,i=e.selectedConvert,o=e.handleDaySelection;return Object(k.jsx)("div",{className:"single-day ".concat(t===a?"selected":""),onClick:o,children:Object(k.jsxs)("div",{className:"flex-row bd-highlight m-2 ",children:[Object(k.jsx)("h6",{children:Object(k.jsx)(T.a,{format:"ddd",children:n})}),Object(k.jsx)("img",{className:"small-image",src:"https://developer.accuweather.com/sites/default/files/".concat(c>=10?c:"0"+c,"-s.png"),alt:"weather-icon"}),Object(k.jsxs)("h6",{children:[s," ",i?"\xb0F":"\xb0C"]}),Object(k.jsxs)("h6",{children:[r," ",i?"\xb0F":"\xb0C"]})]})})},M=function(e){var t=e.weatherData,a=e.selectedCity,n=e.selectedDay,c=e.handleDaySelection,r=e.selectedConvert;return Object(k.jsxs)("div",{id:a,className:"container col-11 mx-auto mt-2 gray  rounded text-white ",children:[t[0]?Object(k.jsx)("div",{className:"d-flex p-2 bd-highlight justify-content-center top-weather",children:Object(k.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(k.jsx)("h4",{children:a}),Object(k.jsx)(T.a,{format:"dddd",children:t[n].Date}),Object(k.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(k.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(t[n].Day.Icon>=10?t[n].Day.Icon:"0"+t[n].Day.Icon,"-s.png"),alt:"weather-icon"}),Object(k.jsx)("p",{children:t[n].Day.IconPhrase})]})]})}):null,Object(k.jsx)("div",{className:"bd-highlight bottom-weather d-flex flex-wrap justify-content-center p-2",children:t.map((function(e,t){return Object(k.jsx)(A,{selectedDay:n,dayIndex:t,dayDate:e.Date,dayIcon:e.Day.Icon,dayMaxTemp:r?e.Temperature.Maximum.Value:((parseFloat(e.Temperature.Maximum.Value)-32)/1.8).toFixed(2),dayMinTemp:r?e.Temperature.Minimum.Value:((parseFloat(e.Temperature.Minimum.Value)-32)/1.8).toFixed(2),selectedConvert:r,handleDaySelection:function(){return c(t)}},e.EpochDate)}))})]})},L=(a(104),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(k.jsx)("div",{id:"",className:"pb-3",children:Object(k.jsx)("div",{className:"fav-btn",children:Object(k.jsx)("span",{code:this.props.code,city:this.props.city,onClick:this.props.handleOnChange,className:"favme dashicons dashicons-heart ".concat(this.props.active?"active":""),children:this.props.active?"Remove from favorits":"Add to favorites"})})})}}]),a}(d.Component));function H(){m(document).click((function(e){m(".collapse").hasClass("show")&&!m("nav").is(e.target)&&0===m("nav").has(e.target).length&&m(".navbar-toggler").click()})),m(".favme").on("click touchstart",(function(){m(this).toggleClass("is_animating")})),m(".favme").on("animationend",(function(){m(this).toggleClass("is_animating")}))}var V=a(138),J=a(137),q=function(e){return!Object(V.a)(e)&&!Object(J.a)(e)},P=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateAddress=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3&q=".concat(t));case 3:a=e.sent.data,q(a)&&(c=a.AdministrativeArea.EnglishName,s=a.Key,n.setState({city:c}),n.props.handleOnChange(c,s,1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),n.formatCoords=function(e,t){return"".concat(e,",").concat(t)},n.getAddress=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("geolocation"in navigator)){e.next=3;break}return e.next=3,navigator.geolocation.getCurrentPosition(function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.formatCoords(t.coords.latitude,t.coords.longitude),n.updateAddress(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)}))),n.state={},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getAddress()}},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h4",{children:"Using geolocation JavaScript API in React"}),Object(k.jsxs)("span",{children:["your location :",this.state.city||"please confirm access to your location"]})]})}}]),a}(d.Component),E=a(3),W=a(57),Z=a.n(W),_=function(){return Object(k.jsxs)("div",{className:"loading",children:[Object(k.jsx)("div",{}),Object(k.jsx)("div",{})]})},U=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getLocations=Object(s.a)(r.a.mark((function e(){var t,a,c,s,i,o,l,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://dataservice.accuweather.com/locations/v1/topcities/150?apikey=".concat(n.api_key[0]));case 2:t=e.sent,a=[],c=Object(b.a)(t.data);try{for(c.s();!(s=c.n()).done;)i=s.value,o=i.AdministrativeArea.EnglishName,l=i.Country.EnglishName,h=i.Key,a.push({label:o,value:l,code:h})}catch(r){c.e(r)}finally{c.f()}n.setState({locationsApi:a});case 7:case"end":return e.stop()}}),e)}))),n.handleOnChange=function(){var e=Object(s.a)(r.a.mark((function e(t,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({code:a,selectedCity:t,loading:!0}),e.next=3,n.props.getForcast(a);case 3:c=e.sent,n.isLoading=setTimeout((function(){n.setState({weatherForcast:c,loading:!1})}),500);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.fav=function(e){x()(e.target).toggleClass("active"),n.setState({fav:n.props.fav(e)})},n.api_key=["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3","Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS","keIkcwQuwHMsCqZJawOVskNUec3ErVQq"],n.state={loading:!0,locationsApi:[],selectedCity:"Tel Aviv",weatherForcast:[],fav:[],selectedDay:0,selectedConvert:!0,code:"215854"},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLocations();case 2:t=Z.a.parse(this.props.location.search),a=t.code,n=t.selectedCity,this.handleOnChange(n||this.state.selectedCity,a||this.state.code),H(),this.setState({fav:this.props.initfav()});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearTimeout(this.isLoading)}},{key:"componentDidUpdate",value:function(e,t){e.location.search!==this.props.location.search&&this.handleOnChange("Tel Aviv","215854")}},{key:"render",value:function(){var e=this,t=this.context,a=t.theme,n=t.colorTheme;return Object(k.jsx)(u.a.Fragment,{children:Object(k.jsxs)("div",{className:"pb-5 bg-".concat(n," text-").concat(a," text-center"),style:{minHeight:"inherit"},children:[Object(k.jsx)("h1",{className:"pt-4",children:"Weather Forcast"}),this.props.location.search?"":Object(k.jsx)(P,{handleOnChange:this.handleOnChange}),Object(k.jsx)(F,{handleOnChange:function(t){e.setState({selectedConvert:e.props.temperatureConverter(t)})},checked:this.selectedConvert}),Object(k.jsx)(S,{locations:this.state.locationsApi,handleOnChange:this.handleOnChange}),Object(k.jsx)("div",{className:"content",children:this.state.weatherForcast?[Object(k.jsx)(L,{city:this.state.selectedCity,code:this.state.code,active:this.state.fav.flat().indexOf(this.state.code)>-1,handleOnChange:function(t){return e.fav(t)}},"fav"),this.state.loading?Object(k.jsx)(_,{},"Loading"):0===Object.keys(this.state.weatherForcast).length?"":Object(k.jsx)(M,{handleDaySelection:function(t){e.props.handleDaySelection(t),e.setState({selectedDay:t})},selectedDay:this.state.selectedDay,selectedCity:this.state.selectedCity,weatherData:this.state.weatherForcast,selectedConvert:this.state.selectedConvert},"WeeklyWeatherContainer")]:""})]})})}}]),a}(d.Component);U.contextType=N;var R=Object(E.f)(U),B=a(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(58),G=a.n(Q),K=a(37),Y=function(e){var t=e.iconType;return Object(k.jsx)("div",{children:"light"===t?Object(k.jsx)("p",{className:"text-toggle",children:Object(k.jsx)(K.b,{})}):Object(k.jsx)("p",{className:"text-toggle",children:Object(k.jsx)(K.a,{})})})},z=function(){var e=Object(d.useContext)(N),t=e.theme,a=e.toggleTheme;return Object(k.jsx)("div",{className:"flex justify-between items-center px-5 py-5",children:Object(k.jsx)("div",{children:Object(V.a)(t)?null:Object(k.jsx)(G.a,{checked:"light"===t,icons:{checked:Object(k.jsx)(Y,{iconType:"light"}),unchecked:Object(k.jsx)(Y,{iconType:"dark"})},onChange:a})})})},$=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.context.colorTheme;return Object(k.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e," bg-").concat(e),style:{border:"solid",zIndex:1,borderColor:"darksalmon"},children:Object(k.jsxs)("div",{className:"container-fluid",children:[Object(k.jsx)(B.c,{className:"navbar-brand",to:{pathname:"/weather--react",search:"",hash:"",state:{}},children:"Home"}),Object(k.jsx)("button",{className:"navbar-toggler ms-sm-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(k.jsx)("span",{className:"navbar-toggler-icon"})}),Object(k.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(k.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(B.c,{className:"nav-link",to:"/MyFav",children:"MyFav"})})}),Object(k.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(z,{})})})]}),Object(k.jsx)("div",{className:"navbar-brand text-wrap",children:"Herolo - Weather App"})]})})}}]),a}(d.Component);$.contextType=N;var X=$,ee=function(e){var t=e.weatherData,a=e.selectedCity,n=e.code,c=e.selectedDay,r=(e.handleDaySelection,e.selectedConvert),s=e.fav;return Object(k.jsx)("div",{className:"col-11 flex-fill m-0 m-2 navbar-brand",children:Object(k.jsxs)("div",{id:a,code:n,className:"container h-100  mx-auto mt-2 gray  rounded text-white ",children:[t[0]?Object(k.jsx)(B.b,{className:" navbar-brand",to:{pathname:"/weather--react",search:"?selectedCity="+a+"&code="+n},children:Object(k.jsx)("div",{className:"d-flex p-2 bd-highlight justify-content-center text-light text-break ",children:Object(k.jsxs)("div",{className:"flex-row bd-highlight text-wrap",children:[Object(k.jsx)("h4",{children:a}),Object(k.jsx)(T.a,{format:"dddd",children:t[c].Date}),Object(k.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(k.jsx)("span",{className:"",children:r?t[c].Temperature.Minimum.Value+" F\xb0":((parseFloat(t[c].Temperature.Minimum.Value)-32)/1.8).toFixed(2)+" C\xb0"}),"                            ",Object(k.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(t[c].Day.Icon>=10?t[c].Day.Icon:"0"+t[c].Day.Icon,"-s.png"),alt:"weather-icon"}),Object(k.jsx)("span",{children:r?t[c].Temperature.Maximum.Value+" F\xb0":((parseFloat(t[c].Temperature.Maximum.Value)-32)/1.8).toFixed(2)+" C\xb0"}),Object(k.jsx)("p",{children:t[c].Day.IconPhrase})]})]})})}):null,Object(k.jsx)(L,{city:a,code:n,active:!0,handleOnChange:function(e){return s(e)}},n)]})})},te=function(){return Object(k.jsxs)("div",{className:"loading",children:[Object(k.jsx)("div",{}),Object(k.jsx)("div",{})]})},ae=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).refresh=function(){n.state.fav&&n.data().then((function(e){n.setState({weatherData:e})}))},n.data=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(n.state.fav.map((function(e,t){return n.props.getForcast(e[1])}))).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)}))),n.fav=function(e){x()(e.target).toggleClass("active"),n.props.fav(e),n.refresh()},n.state={loading:!0,locationsApi:[],selectedCity:0,weatherForcast:[],selectedDay:(new Date).getDay(),selectedConvert:!0,code:"",weatherData:[],fav:n.props.fav()},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refresh(),H()}},{key:"componentWillMount",value:function(){this.setState({fav:this.props.initfav()})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.context,a=t.theme,c=t.colorTheme;return Object(k.jsxs)("div",{className:"pb-5 bg-".concat(c," text-").concat(a," text-center"),style:{minHeight:"inherit"},children:[Object(k.jsx)("h1",{className:"pt-4",children:"My favorites"}),this.state.weatherData.length?Object(k.jsx)(F,{handleOnChange:function(t){e.setState({selectedConvert:e.props.temperatureConverter(t)})},checked:this.selectedConvert}):"",Object(k.jsx)("div",{className:"d-flex flex-lg-nowrap flex-wrap",children:this.state.weatherData.length?this.state.fav.map((function(t,a){return Object(k.jsx)(ee,{handleDaySelection:function(t){e.setState({selectedDay:t})},selectedDay:Object(n.a)(e.state.weatherData[0]).findIndex((function(t){return e.state.selectedDay===new Date(t.Date).getDay()})),selectedCity:t[0],code:t[1],weatherData:e.state.weatherData[a],selectedConvert:e.state.selectedConvert,fav:e.fav},a)})):this.state.fav.length?Object(k.jsx)(te,{},"Loading"):Object(k.jsx)("h1",{children:"No favorites found"})})]})}}]),a}(d.Component);ae.contextType=N;a(132);var ne=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getForcast=function(){var t=Object(s.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(a,"?apikey=").concat(e.api_key[0],"&details=true"));case 2:return n=t.sent,t.abrupt("return",n.data.DailyForecasts);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleDaySelection=function(e){return e},e.temperatureConverter=function(e){return e.target.checked},e.fav=function(t){var a=e.state.myfav;if(t){var c=t.target;if(-1===Object(n.a)(c.classList).indexOf("active")){var r=a.findIndex((function(e){return e[1]===c.getAttribute("code")}));a.splice(r,1)}else a.push([c.getAttribute("city"),c.getAttribute("code")]);localStorage.setItem("fav",JSON.stringify(a))}return a},e.initfav=function(){return e.state.myfav},e.api_key=["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3","Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS","keIkcwQuwHMsCqZJawOVskNUec3ErVQq"],e.state={myfav:localStorage.getItem("fav")?JSON.parse(localStorage.getItem("fav")):[]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.context,a=t.theme,n=t.colorTheme;return Object(k.jsx)(D,{children:Object(k.jsxs)(B.a,{children:[Object(k.jsx)("header",{className:" bg-".concat(n," text-").concat(a),children:Object(k.jsx)(X,{})}),Object(k.jsx)("main",{className:"flex-column",style:{minHeight:"450px"},children:Object(k.jsxs)(E.c,{children:[Object(k.jsx)(E.a,{path:"/MyFav",component:function(){return Object(k.jsx)(ae,{initfav:e.initfav,myfav:e.state.myfav,getForcast:e.getForcast,temperatureConverter:e.temperatureConverter,handleDaySelection:e.handleDaySelection,fav:e.fav,isAuthed:!0})}}),Object(k.jsx)(E.a,{path:"/weather--react",exact:!0,component:function(){return Object(k.jsx)(R,{initfav:e.initfav,getForcast:e.getForcast,temperatureConverter:e.temperatureConverter,handleDaySelection:e.handleDaySelection,fav:e.fav,isAuthed:!0})}})]})}),Object(k.jsx)("footer",{children:Object(k.jsxs)("div",{className:"text-center",children:[Object(k.jsx)("span",{children:"made with love by yair \u2665"}),Object(k.jsx)("div",{style:{position:"fixed",bottom:0,border:0,left:0},children:Object(k.jsx)("a",{href:"https://github.com/",className:"github-corner","aria-label":"View source on GitHub",target:"_blank",rel:"noreferrer noopener",children:Object(k.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#292929",color:"#fff",transform:"scale(-1, -1)"},"aria-hidden":"true",children:[Object(k.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(k.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),Object(k.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})})})]})})]})})}}]),a}(d.Component);ne.contextType=N,p.a.render(Object(k.jsx)(ne,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,a){},68:function(e,t,a){}},[[134,1,2]]]);
//# sourceMappingURL=main.f331259b.chunk.js.map