(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{139:function(e,t,a){"use strict";a.r(t);var c=a(33),n=a(5),r=a(6),s=a(8),o=a(7),i=a(0),l=a.n(i),d=a(21),h=a.n(d),u=a(18),p=a(34),j=a(56),b=a(57),m=a(11),f=a(3),g=a.n(f),v=a(58),O=a(15),x=a(25),y=a.n(x),w=a(19);y.a.interceptors.response.use(null,(function(e){var t,a,c;return w.b.error(e.message),(null===(t=e.response)||void 0===t?void 0:t.data.Message)?w.b.error(null===(c=e.response)||void 0===c?void 0:c.data.Message):w.b.error(null===(a=e.response)||void 0===a?void 0:a.data),Promise.reject(e)}));var k={get:y.a.get,post:y.a.post,put:y.a.put,patch:y.a.patch,delete:y.a.delete},C="TYPE_IN_CITYNAME_FIELD",N="weatherData",D="SelectedOption";function S(e){return Object(O.a)(g.a.mark((function t(){var a,c,n,r,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=JSON.parse('["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3","EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud","Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS","keIkcwQuwHMsCqZJawOVskNUec3ErVQq"]'),n=g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,c){t(k.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(a[n],"&details=true")).catch((function(e){console.error(e),w.b.info("API KEY HAS BEEN CHANGED")})))})).catch((function(e){console.error(e),w.b.info("API KEY HAS BEEN CHANGED")}));case 2:if(!(c=t.sent)){t.next=5;break}return t.abrupt("return",{v:M.dispatch(F(c))});case 5:case"end":return t.stop()}}),t)})),r=0;case 3:if(!(r<a.length)){t.next=11;break}return t.delegateYield(n(r),"t0",5);case 5:if("object"!==typeof(s=t.t0)){t.next=8;break}return t.abrupt("return",s.v);case 8:r++,t.next=3;break;case 11:case"end":return t.stop()}}),t)})))}function F(e){return{type:N,weatherData:null===e||void 0===e?void 0:e.data.DailyForecasts}}function I(e){return{type:D,code:e.code,city:e.city}}var A={userInput:{err:!1},weatherData:[],code:"215854",city:"Tel Aviv",geo:!1,loading:!0};var M=Object(p.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(m.a)(Object(m.a)({},e),{},{userInput:Object(m.a)(Object(m.a)({},e.err),{},{err:t.err})});case N:return Object(m.a)(Object(m.a)({},e),{},{weatherData:t.weatherData,loading:!1});case D:return Object(m.a)(Object(m.a)({},e),{},{code:t.code,city:t.city,loading:!0,geo:t.geo||!1});default:return e}}),Object(b.composeWithDevTools)(Object(p.applyMiddleware)(j.a))),T=(a(94),a(95),a(13)),E=a.n(T),L=a(66),H=a(59),z=a.n(H),P=a(1),V=l.a.createContext({theme:"light",toggleTheme:function(){}}),q=function(e){var t=e.children,a=Object(i.useState)(""),c=Object(L.a)(a,2),n=c[0],r=c[1],s="light"===n?"dark":"light",o=function(e){localStorage.setItem("theme",JSON.stringify(e))};return Object(i.useEffect)((function(){localStorage.getItem("theme")?r(JSON.parse(localStorage.getItem("theme"))):function(){var e=z()().format("H");e>=6&&e<18?(r("light"),o("light")):(r("dark"),o("dark"))}()}),[]),Object(P.jsx)(V.Provider,{value:{theme:n,colorTheme:s,toggleTheme:function(){var e="light"===n?"dark":"light";r(e),o(e)}},children:t})},J=a(65),R=a(60),Y=a.n(R),Z=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).getLocations=function(e,t){c.setState({loading:!0}),c.props.getLocations(e).then((function(e){c.setState({loading:!1}),t(e)}))},c.loadSuggestions=Y()(c.getLocations,500),c.onInputChange=function(e){c.props.placenameHandler(e)},c.onChange=function(e){c.props.selectedOption({city:e.label,code:e.code}),c.props.getForcast(e.code)},c.state={locationsApi:[],loading:!1,defaultOptions:[]},c.customStyles={noOptionsMessage:function(e){return Object(m.a)(Object(m.a)({},e),{},{background:"black",color:"red"})},option:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{borderBottom:"1px dotted pink",color:t.isSelected?"blue":"dark"===c.context.colorTheme?"white":"black",padding:10,backgroundColor:"dark"===c.context.colorTheme?t.isFocused?"#2684FF":"#212529 !important":t.isFocused?"#2684FF":console.log(t,"lll")})},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(m.a)(Object(m.a)({},e),{},{opacity:a,transition:"opacity 300ms"})}},c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.props.getLocations();case 3:t=e.sent,this.setState({defaultOptions:t,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(P.jsxs)("div",{className:"basic-single col-4 m-4 mx-auto search-bar",children:[this.props.err?Object(P.jsx)("span",{className:"text-danger",children:"Only english letters allowed"}):"",Object(P.jsx)(J.a,{styles:this.customStyles,classNamePrefix:"select",placeholder:"Search a city...",isSearchable:"true",name:"cities",defaultOptions:this.state.defaultOptions,loadOptions:this.loadSuggestions,isLoading:this.state.loading,onChange:this.onChange,onInputChange:this.onInputChange,noOptionsMessage:function(e){var t=e.inputValue;return/[^A-Za-z-\s]/gi.test(t)?"Searching should be done in English letters only":"No results found"}})]})}}]),a}(i.Component);Z.contextType=V;var U=Object(u.b)((function(e){return{err:e.userInput.err,DailyForecasts:e.DailyForecasts}}),(function(e){return{placenameHandler:function(e){return M.dispatch(function(e){var t=/[^A-Za-z-\s]/gi.test(e);return{type:C,err:!(!t||""===e)}}(e))},getForcast:function(e){return M.dispatch(S(e))},selectedOption:function(e){return M.dispatch(I(e))},getLocations:function(e){return M.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Tel Aviv";return Object(O.a)(g.a.mark((function t(){var a,c,n,r,s,o,i,l,d,h,u,p;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!/[^A-Za-z-\s]/gi.test(e)){t.next=2;break}return t.abrupt("return",[]);case 2:n=JSON.parse('["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3","EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud","Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS","keIkcwQuwHMsCqZJawOVskNUec3ErVQq"]'),r=g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,c){t(k.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(n[a],"&q=").concat(e)).catch((function(e){console.error(e),w.b.info("API KEY HAS BEEN CHANGED")})))})).catch((function(e){console.error(e),w.b.info("API KEY HAS BEEN CHANGED")}));case 2:if(!(c=t.sent)){t.next=5;break}return t.abrupt("return","break");case 5:a===n.length-1&&w.b.info("ALL API KEYS HAS BEEN USED TRY AGAIN TOMORROW");case 6:case"end":return t.stop()}}),t)})),s=0;case 5:if(!(s<n.length)){t.next=13;break}return t.delegateYield(r(s),"t0",7);case 7:if("break"!==t.t0){t.next=10;break}return t.abrupt("break",13);case 10:s++,t.next=5;break;case 13:if(o=[],null===(a=c)||void 0===a?void 0:a.data){i=Object(v.a)(c.data);try{for(i.s();!(l=i.n()).done;)d=l.value,h=d.AdministrativeArea.LocalizedName+" - "+d.LocalizedName,u=d.Country.LocalizedName,p=d.Key,o.push({label:h,value:u,code:p})}catch(j){i.e(j)}finally{i.f()}}return t.abrupt("return",o);case 16:case"end":return t.stop()}}),t)})))}(e))}}}))(Z),K=function(){return Object(P.jsxs)("div",{className:"half-column relative top-line integrations-wrapper",children:[Object(P.jsxs)("div",{className:"integration-icon zoominfo",children:[Object(P.jsx)("img",{src:"https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png",alt:"ZoomInfo logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png",alt:"ZoomInfo logo"})})]}),Object(P.jsxs)("div",{className:"integration-icon marketo",children:[Object(P.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/331/331383.png",alt:"Marketo logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/331/331383.png",alt:"Marketo logo"})})]}),Object(P.jsxs)("div",{className:"integration-icon salesforce",children:[Object(P.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",alt:"Salesforce logo",className:"lazyloaded","data-ll-status":"loaded",width:"57"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",alt:"Salesforce logo"})})]}),Object(P.jsxs)("div",{className:"integration-icon chrome",children:[Object(P.jsx)("img",{src:"https://www.zoominfo.com/wp-content/uploads/2020/11/chrome.svg",alt:"Chrome logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"https://www.zoominfo.com/wp-content/uploads/2020/11/chrome.svg",alt:"Chrome logo"})})]}),Object(P.jsxs)("div",{className:"integration-icon salesloft",children:[Object(P.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",alt:"salesloft logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",alt:"salesloft logo"})})]}),Object(P.jsxs)("div",{className:"integration-icon ringlead",children:[Object(P.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/919/919851.png?pad=10,10,10,10&ext=png&bg=FFFFFFFF",alt:"ringlead logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/919/919851.png?pad=10,10,10,10&ext=png&bg=FFFFFFFF",alt:"ringlead logo"})})]}),Object(P.jsxs)("div",{className:"integration-icon outreach",children:[Object(P.jsx)("img",{src:"/weather--react/2725760.png",alt:"outreach logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"/weather--react/2725760.png",alt:"outreach logo"})})]}),Object(P.jsx)("div",{className:"integration-icon microsoft",children:Object(P.jsxs)("a",{href:"tel:+972527249942",children:[Object(P.jsx)("img",{src:"/weather--react/2936030.png",alt:"microsoft logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"/weather--react/2936030.png",alt:"microsoft logo"})})]})}),Object(P.jsxs)("div",{className:"integration-icon eloqua",children:[Object(P.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/128/2721/2721155.png",alt:"eloqua logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/128/2721/2721155.png",alt:"eloqua logo"})})]}),Object(P.jsxs)("div",{className:"integration-icon hubspot",children:[Object(P.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2076/2076808.png",alt:"hubspot logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2076/2076808.png",alt:"hubspot logo"})})]}),Object(P.jsx)("div",{className:"integration-icon snowflake",children:Object(P.jsxs)("a",{href:"mailto:hthrkuh8@gmail.com",children:[Object(P.jsx)("img",{src:"/weather--react/3296464.png",alt:"snowflake logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"/weather--react/3296464.png",alt:"snowflake logo"})})]})}),Object(P.jsxs)("div",{className:"integration-icon stack",children:[Object(P.jsx)("img",{src:"https://www.zoominfo.com/wp-content/uploads/2021/02/stack-logo-5.svg",alt:"stack logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"https://www.zoominfo.com/wp-content/uploads/2021/02/stack-logo-5.svg",alt:"stack logo"})})]}),Object(P.jsxs)("div",{className:"integration-icon bullhorn",children:[Object(P.jsx)("img",{src:"https://pic2.zhimg.com/v2-9fc9ae8f1d0e95aed316a92f71dc4ba1_xs.jpg?source=172ae18b",alt:"bullhorn logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("img",{src:"https://pic2.zhimg.com/v2-9fc9ae8f1d0e95aed316a92f71dc4ba1_xs.jpg?source=172ae18b",alt:"bullhorn logo"})})]})]})},G=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(P.jsxs)("div",{className:"form-switch pt-5 p-0",children:[Object(P.jsx)("span",{className:"",children:"\u2103"}),Object(P.jsx)("input",{type:"checkbox",className:"form-check-input mx-3",id:"customSwitches",onChange:function(t){return e.props.handleOnChange(t)},checked:this.props.checked,defaultChecked:!0}),Object(P.jsx)("label",{className:"form-check-label",htmlFor:"customSwitches",children:"\u2109"})]})}}]),a}(i.Component),_=a(27),B=a.n(_),W=function(e){var t=e.selectedDay,a=e.dayIndex,c=e.dayDate,n=e.dayIcon,r=e.dayMinTemp,s=e.dayMaxTemp,o=e.selectedConvert,i=e.handleDaySelection;return Object(P.jsx)("div",{className:"border border-2 border-dark me-1 mb-2 single-day ".concat(t===a?"selected":""),onClick:i,children:Object(P.jsxs)("div",{className:"flex-row bd-highlight m-2 ",children:[Object(P.jsx)("h6",{children:Object(P.jsx)(B.a,{format:"ddd",children:c})}),Object(P.jsx)("img",{className:"small-image",src:"https://developer.accuweather.com/sites/default/files/".concat(n>=10?n:"0"+n,"-s.png"),alt:"weather-icon"}),Object(P.jsxs)("h6",{children:[s," ",o?"\xb0F":"\xb0C"]}),Object(P.jsxs)("h6",{children:[r," ",o?"\xb0F":"\xb0C"]})]})})},Q=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={},c}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.weatherData,a=e.selectedCity,c=e.selectedDay,n=e.handleDaySelection,r=e.selectedConvert,s=this.context,o=s.theme,i=s.colorTheme;return Object(P.jsxs)("div",{id:a,className:"border border-3 border-".concat(o," container col-11 mx-auto mt-2 gray  rounded text-").concat(i),children:[t[0]?Object(P.jsx)("div",{className:"d-flex p-2 bd-highlight justify-content-center top-weather",children:Object(P.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(P.jsx)("h4",{children:a}),Object(P.jsx)(B.a,{format:"dddd",children:t[c].Date}),Object(P.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(P.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(t[c].Day.Icon>=10?t[c].Day.Icon:"0"+t[c].Day.Icon,"-s.png"),alt:"weather-icon"}),Object(P.jsx)("p",{children:t[c].Day.IconPhrase})]})]})}):null,Object(P.jsx)("div",{className:"bd-highlight bottom-weather d-flex flex-wrap justify-content-center p-2",children:t.map((function(e,t){return Object(P.jsx)(W,{selectedDay:c,dayIndex:t,dayDate:e.Date,dayIcon:e.Day.Icon,dayMaxTemp:r?e.Temperature.Maximum.Value:((parseFloat(e.Temperature.Maximum.Value)-32)/1.8).toFixed(2),dayMinTemp:r?e.Temperature.Minimum.Value:((parseFloat(e.Temperature.Minimum.Value)-32)/1.8).toFixed(2),selectedConvert:r,handleDaySelection:function(){return n(t)}},e.EpochDate)}))})]})}}]),a}(i.Component);Q.contextType=V;var X=Object(u.b)((function(e){return{weatherData:e.weatherData}}),(function(e){return{}}))(Q),$=(a(108),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(P.jsx)("div",{id:"",className:"pb-3",children:Object(P.jsx)("div",{className:"fav-btn",children:Object(P.jsx)("span",{code:this.props.code,city:this.props.city,onClick:this.props.handleOnChange,className:"favme dashicons dashicons-heart ".concat(this.props.active?"active":""),children:this.props.active?"Remove from favorits":"Add to favorites"})})})}}]),a}(i.Component));function ee(){T(document).click((function(e){T(".collapse").hasClass("show")&&!T("nav").is(e.target)&&0===T("nav").has(e.target).length&&T(".navbar-toggler").click()})),T(".favme").on("click touchstart",(function(){T(this).toggleClass("is_animating")})),T(".favme").on("animationend",(function(){T(this).toggleClass("is_animating")}))}var te=a(143),ae=a(142),ce=function(e){return!Object(te.a)(e)&&!Object(ae.a)(e)},ne=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).updateAddress=function(){var e=Object(O.a)(g.a.mark((function e(t){var a,n,r,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse('["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3","EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud","Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS","keIkcwQuwHMsCqZJawOVskNUec3ErVQq"]'),e.prev=1,e.next=4,k.get("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(n[0],"&q=").concat(t));case 4:a=e.sent.data,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,k.get("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(n[3],"&q=").concat(t));case 11:a=e.sent.data;case 12:return e.prev=12,ce(a)&&(r=a.AdministrativeArea.EnglishName,s=a.Key,c.setState({city:r}),c.props.selectedOption({city:r,code:s,geo:!0}),c.props.getForcast(s)),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,7,12,15]])})));return function(t){return e.apply(this,arguments)}}(),c.formatCoords=function(e,t){return"".concat(e,",").concat(t)},c.getAddress=Object(O.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("geolocation"in navigator)){e.next=3;break}return e.next=3,navigator.geolocation.getCurrentPosition(function(){var e=Object(O.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=c.formatCoords(t.coords.latitude,t.coords.longitude),c.updateAddress(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)}))),c.state={},c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getAddress()}},{key:"render",value:function(){return Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Using geolocation JavaScript API in React"}),Object(P.jsxs)("span",{children:["your location :",this.state.city||Object(P.jsx)("span",{className:"text-danger",children:" please confirm access to your location "})]})]})}}]),a}(i.Component),re=Object(u.b)((function(e){return{code:e.code,city:e.city}}),(function(e){return{selectedOption:function(e){return M.dispatch(I(e))},getForcast:function(e){return M.dispatch(S(e))}}}))(ne),se=a(4),oe=a(63),ie=a.n(oe),le=function(){return Object(P.jsxs)("div",{className:"loading",children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{})]})},de=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).fav=function(e){E()(e.target).toggleClass("active"),c.setState({fav:c.props.fav(e)})},c.state={fav:[],selectedDay:0,selectedConvert:!0},c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=ie.a.parse(this.props.location.search),a=t.code,c=t.selectedCity;a&&this.props.selectedOption({code:a,city:c}),this.props.getForcast(a||this.props.code).then((function(){ee(),e.setState({fav:e.props.initfav()})}))}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(){var e=Object(O.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.location.search===this.props.location.search||this.props.geo||(this.props.selectedOption({code:"215854",city:"Tel Aviv"}),this.props.getForcast("215854"));case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.context,a=t.theme,c=t.colorTheme;return Object(P.jsx)(l.a.Fragment,{children:Object(P.jsxs)("div",{className:"pb-5 bg-".concat(c," text-").concat(a," text-center"),style:{minHeight:"inherit"},children:[Object(P.jsx)("h1",{className:"pt-4",children:"Weather Forcast"}),this.props.location.search?"":Object(P.jsx)(re,{handleOnChange:this.handleOnChange}),Object(P.jsx)(G,{handleOnChange:function(t){e.setState({selectedConvert:e.props.temperatureConverter(t)})},checked:this.selectedConvert}),Object(P.jsx)(K,{}),Object(P.jsx)(U,{}),Object(P.jsx)("div",{className:"content",children:this.props.weatherData?[Object(P.jsx)($,{city:this.props.city,code:this.props.code,active:this.state.fav.flat().indexOf(this.props.code)>-1,handleOnChange:function(t){return e.fav(t)}},"fav"),this.props.loading?Object(P.jsx)(le,{},"Loading"):0===Object.keys(this.props.weatherData).length?"":Object(P.jsx)(X,{handleDaySelection:function(t){e.props.handleDaySelection(t),e.setState({selectedDay:t})},selectedDay:this.state.selectedDay,selectedCity:this.props.city,selectedConvert:this.state.selectedConvert},"WeeklyWeatherContainer")]:""}),Object(P.jsx)("a",{href:"https://www.hitwebcounter.com",rel:"noreferrer",target:"_blank",children:Object(P.jsx)("img",{src:"https://hitwebcounter.com/counter/counter.php?page=7826724&style=0001&nbdigits=5&type=page&initCount=0",title:"Free Counter",alt:"web counter",border:"0"})}),Object(P.jsx)("div",{id:"sfcbg6g2l2n5jf3rhu8t5y6m5r3f5h9e82x"}),Object(P.jsx)("noscript",{children:Object(P.jsx)("a",{href:"https://www.freecounterstat.com",title:"hit counter for website",children:Object(P.jsx)("img",{src:"https://counter6.stat.ovh/private/freecounterstat.php?c=bg6g2l2n5jf3rhu8t5y6m5r3f5h9e82x",border:"0",title:"hit counter for website",alt:"hit counter for website"})})})]})})}}]),a}(i.Component);de.contextType=V;var he=Object(u.b)((function(e){return{weatherData:e.weatherData,code:e.code,city:e.city,loading:e.loading,geo:e.geo}}),(function(e){return{getForcast:function(e){return M.dispatch(S(e))},selectedOption:function(e){return M.dispatch(I(e))}}}))(Object(se.f)(de)),ue=a(22),pe=a(64),je=a.n(pe),be=a(43),me=function(e){var t=e.iconType;return Object(P.jsx)("div",{children:"light"===t?Object(P.jsx)("p",{className:"text-toggle",children:Object(P.jsx)(be.b,{})}):Object(P.jsx)("p",{className:"text-toggle",children:Object(P.jsx)(be.a,{})})})},fe=function(){var e=Object(i.useContext)(V),t=e.theme,a=e.toggleTheme;return Object(P.jsx)("div",{className:"flex justify-between items-center px-5 py-5",children:Object(P.jsx)("div",{children:Object(te.a)(t)?null:Object(P.jsx)(je.a,{checked:"light"===t,icons:{checked:Object(P.jsx)(me,{iconType:"light"}),unchecked:Object(P.jsx)(me,{iconType:"dark"})},onChange:a})})})},ge=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={},c}return Object(r.a)(a,[{key:"render",value:function(){var e=this.context.colorTheme;return Object(P.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e," bg-").concat(e),style:{border:"solid",zIndex:1,borderColor:"darksalmon"},children:Object(P.jsxs)("div",{className:"container-fluid",children:[Object(P.jsx)(ue.c,{className:"navbar-brand",to:{pathname:"/weather--react",search:"",hash:"",state:{}},children:"Home"}),Object(P.jsx)("button",{className:"navbar-toggler ms-sm-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(P.jsx)("span",{className:"navbar-toggler-icon"})}),Object(P.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(P.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsx)(ue.c,{className:"nav-link",to:"/MyFav",children:"MyFav"})})}),Object(P.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsx)(fe,{})})})]}),Object(P.jsx)("div",{className:"navbar-brand text-wrap",children:"Weather App"})]})})}}]),a}(i.Component);ge.contextType=V;var ve=ge,Oe=function(e){var t=e.weatherData,a=e.selectedCity,c=e.code,n=e.selectedDay,r=(e.handleDaySelection,e.selectedConvert),s=e.fav;return Object(P.jsx)("div",{className:"single-day col-11 flex-fill m-0 m-2 navbar-brand",children:Object(P.jsxs)("div",{id:a,code:c,className:"container h-100  mx-auto mt-2 gray  rounded text-white ",children:[t[0]?Object(P.jsx)(ue.b,{className:" navbar-brand",to:{pathname:"/weather--react/",search:"?selectedCity="+a+"&code="+c},children:Object(P.jsx)("div",{className:" d-flex p-2 bd-highlight justify-content-center text-light text-break ",children:Object(P.jsxs)("div",{className:"flex-row bd-highlight text-wrap",children:[Object(P.jsx)("h4",{children:a}),Object(P.jsx)(B.a,{format:"dddd",children:t[n].Date}),Object(P.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(P.jsx)("span",{className:"",children:r?t[n].Temperature.Minimum.Value+" F\xb0":((parseFloat(t[n].Temperature.Minimum.Value)-32)/1.8).toFixed(2)+" C\xb0"}),"                            ",Object(P.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(t[n].Day.Icon>=10?t[n].Day.Icon:"0"+t[n].Day.Icon,"-s.png"),alt:"weather-icon"}),Object(P.jsx)("span",{children:r?t[n].Temperature.Maximum.Value+" F\xb0":((parseFloat(t[n].Temperature.Maximum.Value)-32)/1.8).toFixed(2)+" C\xb0"}),Object(P.jsx)("p",{children:t[n].Day.IconPhrase})]})]})})}):null,Object(P.jsx)($,{city:a,code:c,active:!0,handleOnChange:function(e){return s(e)}},c)]})})},xe=function(){return Object(P.jsxs)("div",{className:"loading",children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{})]})},ye=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).data=function(){c.state.fav.length?Promise.all(c.state.fav.map(function(){var e=Object(O.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.props.getForcast(t[1]);case 2:return e.abrupt("return",c.props.weatherData);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())).then((function(e){c.setState({weatherData:e})})):c.setState({fav:c.props.fav()})},c.fav=function(e){E()(e.target).toggleClass("active"),c.props.fav(e),c.data()},c.state={selectedDay:(new Date).getDay(),selectedConvert:!0,weatherData:[],fav:c.props.fav()},c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.state.fav&&this.data(),ee()}},{key:"componentWillMount",value:function(){this.setState({fav:this.props.initfav()})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.context,a=t.theme,n=t.colorTheme;return Object(P.jsxs)("div",{className:"pb-5 bg-".concat(n," text-").concat(a," text-center"),style:{minHeight:"inherit"},children:[Object(P.jsx)("h1",{className:"pt-4",children:"My favorites"}),this.state.weatherData.length?Object(P.jsx)(G,{handleOnChange:function(t){e.setState({selectedConvert:e.props.temperatureConverter(t)})},checked:this.selectedConvert}):"",Object(P.jsx)("div",{className:"d-flex flex-lg-nowrap flex-wrap",children:this.state.weatherData.length&&this.state.fav.length?this.state.fav.map((function(t,a){var n=Object(c.a)(e.state.weatherData[a]).findIndex((function(t){return e.state.selectedDay===new Date(t.Date).getDay()}));return Object(P.jsx)(Oe,{handleDaySelection:function(t){e.setState({selectedDay:t})},selectedDay:n,selectedCity:t[0],code:t[1],weatherData:e.state.weatherData[a],selectedConvert:e.state.selectedConvert,fav:e.fav},a)})):this.state.fav.length?Object(P.jsx)(xe,{},"Loading"):Object(P.jsx)("h1",{children:"No favorites found"})})]})}}]),a}(i.Component);ye.contextType=V;var we=Object(u.b)((function(e){return{weatherData:e.weatherData,selectedOption:e.selectedOption,code:e.code,city:e.city}}),(function(e){return{getForcast:function(e){return M.dispatch(S(e))},selectedOption:function(e){return M.dispatch(I(e))}}}))(ye),ke=(a(136),a(137),function(){return Object(P.jsx)("footer",{children:Object(P.jsxs)("div",{className:"text-center",children:[Object(P.jsx)("span",{children:"made with love by yair \u2665"}),Object(P.jsx)("div",{style:{position:"fixed",bottom:0,border:0,left:0},children:Object(P.jsx)("a",{href:"https://github.com/hthrkuh/weather--react",className:"github-corner","aria-label":"View source on GitHub",target:"_blank",rel:"noreferrer noopener",children:Object(P.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#292929",color:"#fff",transform:"scale(-1, -1)"},"aria-hidden":"true",children:[Object(P.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(P.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),Object(P.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})})})]})})}),Ce=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).handleDaySelection=function(e){return e},e.temperatureConverter=function(e){return e.target.checked},e.fav=function(t){var a=e.state.myfav;if(t){var n=t.target;if(-1===Object(c.a)(n.classList).indexOf("active")){var r=a.findIndex((function(e){return e[1]===n.getAttribute("code")}));a.splice(r,1)}else a.push([n.getAttribute("city"),n.getAttribute("code")]);localStorage.setItem("fav",JSON.stringify(a))}return a},e.initfav=function(){return e.state.myfav},e.state={myfav:localStorage.getItem("fav")?JSON.parse(localStorage.getItem("fav")):[]},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.context,a=t.theme,c=t.colorTheme;return Object(P.jsx)(u.a,{store:M,children:Object(P.jsx)(q,{children:Object(P.jsxs)(ue.a,{children:[Object(P.jsx)(w.a,{}),Object(P.jsx)("header",{className:" bg-".concat(c," text-").concat(a),children:Object(P.jsx)(ve,{})}),Object(P.jsx)("main",{className:"flex-column",style:{minHeight:"100vh"},children:Object(P.jsxs)(se.c,{children:[Object(P.jsx)(se.a,{path:"/MyFav",component:function(){return Object(P.jsx)(we,{initfav:e.initfav,myfav:e.state.myfav,temperatureConverter:e.temperatureConverter,handleDaySelection:e.handleDaySelection,fav:e.fav})}}),Object(P.jsx)(se.a,{path:"/weather--react/",exact:!0,component:function(){return Object(P.jsx)(he,{initfav:e.initfav,temperatureConverter:e.temperatureConverter,handleDaySelection:e.handleDaySelection,fav:e.fav})}})]})}),Object(P.jsx)(ke,{})]})})})}}]),a}(i.Component);Ce.contextType=V,h.a.render(Object(P.jsx)(Ce,{}),document.getElementById("root"))},94:function(e,t,a){},95:function(e,t,a){}},[[139,1,2]]]);
//# sourceMappingURL=main.8b4804a1.chunk.js.map