(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t);var n=a(33),c=a(4),r=a(5),s=a(7),i=a(6),o=a(0),l=a.n(o),h=a(19),d=a.n(h),u=a(16),p=a(34),j=a(57),b=a(58),f=a(12),v=a(25),m=a.n(v),O=a(24);m.a.interceptors.response.use(null,(function(e){return O.b.error(e.message),O.b.error(e.response.data.Message),Promise.reject(e)}));var x={get:m.a.get,post:m.a.post,put:m.a.put,patch:m.a.patch,delete:m.a.delete},y="TYPE_IN_CITYNAME_FIELD",g="weatherData",w="SelectedOption",C=["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3","Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS","EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud","keIkcwQuwHMsCqZJawOVskNUec3ErVQq"];function k(e){return function(){try{return x.get("https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(C[2],"&details=true")).then((function(e){I.dispatch(D(e))}))}catch(t){return x.get("https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(C[3],"&details=true")).then((function(e){I.dispatch(D(e))}))}}}function D(e){return{type:g,weatherData:e.data.DailyForecasts}}function N(e){return{type:w,code:e.code,city:e.city}}var S={api_key:["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3","Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS","EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud","keIkcwQuwHMsCqZJawOVskNUec3ErVQq"],userInput:{err:!1},weatherData:[],code:"215854",city:"Tel Aviv",loading:!0,data:{callerError:!1}};var I=Object(p.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(f.a)(Object(f.a)({},e),{},{userInput:Object(f.a)(Object(f.a)({},e.err),{},{err:t.err})});case g:return Object(f.a)(Object(f.a)({},e),{},{weatherData:t.weatherData,loading:!1});case w:return Object(f.a)(Object(f.a)({},e),{},{code:t.code,city:t.city,loading:!0});default:return e}}),Object(b.composeWithDevTools)(Object(p.applyMiddleware)(j.a))),F=(a(93),a(10)),T=a.n(F),A=a(59),M=a(21),L=(a(95),a(11)),E=a.n(L),H=a(65),_=a(66),V=a(60),P=a.n(V),J=a(1),q=l.a.createContext({theme:"light",toggleTheme:function(){}}),W=function(e){var t=e.children,a=Object(o.useState)(""),n=Object(_.a)(a,2),c=n[0],r=n[1],s="light"===c?"dark":"light",i=function(e){localStorage.setItem("theme",JSON.stringify(e))};return Object(o.useEffect)((function(){localStorage.getItem("theme")?r(JSON.parse(localStorage.getItem("theme"))):function(){var e=P()().format("H");e>=6&&e<18?(r("light"),i("light")):(r("dark"),i("dark"))}()}),[]),Object(J.jsx)(q.Provider,{value:{theme:c,colorTheme:s,toggleTheme:function(){var e="light"===c?"dark":"light";r(e),i(e)}},children:t})},R=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onInputChange=function(e){n.props.placenameHandler(e)},n.onChange=function(e){n.props.selectedOption({city:e.label,code:e.code}),n.props.getForcast(e.code)},n.state={},n.customStyles={option:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{borderBottom:"1px dotted pink",color:t.isSelected?"blue":"dark"===n.context.colorTheme?"white":"black",padding:10,backgroundColor:"dark"===n.context.colorTheme?t.isFocused?"#2684FF":"#212529 !important":t.isFocused?"#2684FF":console.log(t,"lll")})},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(f.a)(Object(f.a)({},e),{},{opacity:a,transition:"opacity 300ms"})}},n}return Object(r.a)(a,[{key:"render",value:function(){return Object(J.jsxs)("div",{className:"basic-single col-4 m-4 mx-auto search-bar",children:[this.props.err?Object(J.jsx)("span",{className:"text-danger",children:"Only english letters allowed"}):"",Object(J.jsx)(H.a,{styles:this.customStyles,classNamePrefix:"select",placeholder:"Search a city...",isSearchable:"true",name:"cities",options:this.props.locations,onChange:this.onChange,onInputChange:this.onInputChange})]})}}]),a}(o.Component);R.contextType=q;var U=Object(u.b)((function(e){return{err:e.userInput.err,DailyForecasts:e.DailyForecasts}}),(function(e){return{placenameHandler:function(e){return I.dispatch(function(e){var t=/^[a-zA-Z]+$/.test(e);return{type:y,err:!t&&""!==e}}(e))},getForcast:function(e){return I.dispatch(k(e))},selectedOption:function(e){return I.dispatch(N(e))}}}))(R),Y=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(J.jsxs)("div",{className:"form-switch pt-5 p-0",children:[Object(J.jsx)("span",{className:"",children:"\u2103"}),Object(J.jsx)("input",{type:"checkbox",className:"form-check-input mx-3",id:"customSwitches",onChange:function(t){return e.props.handleOnChange(t)},checked:this.props.checked,defaultChecked:!0}),Object(J.jsx)("label",{className:"form-check-label",htmlFor:"customSwitches",children:"\u2109"})]})}}]),a}(o.Component),Z=a(27),B=a.n(Z),K=function(e){var t=e.selectedDay,a=e.dayIndex,n=e.dayDate,c=e.dayIcon,r=e.dayMinTemp,s=e.dayMaxTemp,i=e.selectedConvert,o=e.handleDaySelection;return Object(J.jsx)("div",{className:"single-day ".concat(t===a?"selected":""),onClick:o,children:Object(J.jsxs)("div",{className:"flex-row bd-highlight m-2 ",children:[Object(J.jsx)("h6",{children:Object(J.jsx)(B.a,{format:"ddd",children:n})}),Object(J.jsx)("img",{className:"small-image",src:"https://developer.accuweather.com/sites/default/files/".concat(c>=10?c:"0"+c,"-s.png"),alt:"weather-icon"}),Object(J.jsxs)("h6",{children:[s," ",i?"\xb0F":"\xb0C"]}),Object(J.jsxs)("h6",{children:[r," ",i?"\xb0F":"\xb0C"]})]})})},G=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.weatherData,a=e.selectedCity,n=e.selectedDay,c=e.handleDaySelection,r=e.selectedConvert;return Object(J.jsxs)("div",{id:a,className:"container col-11 mx-auto mt-2 gray  rounded text-white ",children:[t[0]?Object(J.jsx)("div",{className:"d-flex p-2 bd-highlight justify-content-center top-weather",children:Object(J.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(J.jsx)("h4",{children:a}),Object(J.jsx)(B.a,{format:"dddd",children:t[n].Date}),Object(J.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(J.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(t[n].Day.Icon>=10?t[n].Day.Icon:"0"+t[n].Day.Icon,"-s.png"),alt:"weather-icon"}),Object(J.jsx)("p",{children:t[n].Day.IconPhrase})]})]})}):null,Object(J.jsx)("div",{className:"bd-highlight bottom-weather d-flex flex-wrap justify-content-center p-2",children:t.map((function(e,t){return Object(J.jsx)(K,{selectedDay:n,dayIndex:t,dayDate:e.Date,dayIcon:e.Day.Icon,dayMaxTemp:r?e.Temperature.Maximum.Value:((parseFloat(e.Temperature.Maximum.Value)-32)/1.8).toFixed(2),dayMinTemp:r?e.Temperature.Minimum.Value:((parseFloat(e.Temperature.Minimum.Value)-32)/1.8).toFixed(2),selectedConvert:r,handleDaySelection:function(){return c(t)}},e.EpochDate)}))})]})}}]),a}(o.Component),Q=Object(u.b)((function(e){return{weatherData:e.weatherData}}),(function(e){return{}}))(G),z=(a(110),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(J.jsx)("div",{id:"",className:"pb-3",children:Object(J.jsx)("div",{className:"fav-btn",children:Object(J.jsx)("span",{code:this.props.code,city:this.props.city,onClick:this.props.handleOnChange,className:"favme dashicons dashicons-heart ".concat(this.props.active?"active":""),children:this.props.active?"Remove from favorits":"Add to favorites"})})})}}]),a}(o.Component));function X(){L(document).click((function(e){L(".collapse").hasClass("show")&&!L("nav").is(e.target)&&0===L("nav").has(e.target).length&&L(".navbar-toggler").click()})),L(".favme").on("click touchstart",(function(){L(this).toggleClass("is_animating")})),L(".favme").on("animationend",(function(){L(this).toggleClass("is_animating")}))}var $=a(145),ee=a(144),te=function(e){return!Object($.a)(e)&&!Object(ee.a)(e)},ae=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).updateAddress=function(){var e=Object(M.a)(T.a.mark((function e(t){var a,c,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(n.props.api_key[2],"&q=").concat(t));case 3:a=e.sent.data,e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,x.get("https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(n.props.api_key[3],"&q=").concat(t));case 10:a=e.sent.data;case 11:return e.prev=11,te(a)&&(c=a.AdministrativeArea.EnglishName,r=a.Key,n.setState({city:c}),n.props.selectedOption({city:c,code:r})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,6,11,14]])})));return function(t){return e.apply(this,arguments)}}(),n.formatCoords=function(e,t){return"".concat(e,",").concat(t)},n.getAddress=Object(M.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("geolocation"in navigator)){e.next=3;break}return e.next=3,navigator.geolocation.getCurrentPosition(function(){var e=Object(M.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.formatCoords(t.coords.latitude,t.coords.longitude),n.updateAddress(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)}))),n.state={},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getAddress()}},{key:"render",value:function(){return Object(J.jsxs)("div",{children:[Object(J.jsx)("h4",{children:"Using geolocation JavaScript API in React"}),Object(J.jsxs)("span",{children:["your location :",this.state.city||"please confirm access to your location"]})]})}}]),a}(o.Component),ne=Object(u.b)((function(e){return{code:e.code,city:e.city,api_key:e.api_key}}),(function(e){return{selectedOption:function(e){return I.dispatch(N(e))}}}))(ae),ce=a(3),re=a(63),se=a.n(re),ie=function(){return Object(J.jsxs)("div",{className:"loading",children:[Object(J.jsx)("div",{}),Object(J.jsx)("div",{})]})},oe=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getLocations=Object(M.a)(T.a.mark((function e(){var t,a,c,r,s,i,o,l;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/locations/v1/topcities/150?apikey=".concat(n.props.api_key[1]));case 3:t=e.sent,e.next=12;break;case 6:return e.prev=6,e.t0=e.catch(0),O.b.info("API KEY HAS BEEN CHANGED"),e.next=11,x.get("https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/locations/v1/topcities/150?apikey=".concat(n.props.api_key[2]));case 11:t=e.sent;case 12:if(e.prev=12,a=[],t){c=Object(A.a)(t.data);try{for(c.s();!(r=c.n()).done;)s=r.value,i=s.AdministrativeArea.EnglishName,o=s.Country.EnglishName,l=s.Key,a.push({label:i,value:o,code:l})}catch(h){c.e(h)}finally{c.f()}n.setState({locationsApi:a})}return e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[0,6,12,16]])}))),n.fav=function(e){E()(e.target).toggleClass("active"),n.setState({fav:n.props.fav(e)})},n.state={locationsApi:[],fav:[],selectedDay:0,selectedConvert:!0},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(M.a)(T.a.mark((function e(){var t,a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLocations();case 2:return t=se.a.parse(this.props.location.search),a=t.code,n=t.selectedCity,a&&this.props.selectedOption({code:a,city:n}),e.next=6,this.props.getForcast(a||this.props.code);case 6:X(),this.setState({fav:this.props.initfav()});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearTimeout(this.isLoading)}},{key:"componentDidUpdate",value:function(e,t){e.location.search!==this.props.location.search&&this.props.selectedOption("Tel Aviv","215854")}},{key:"render",value:function(){var e=this,t=this.context,a=t.theme,n=t.colorTheme;return Object(J.jsx)(l.a.Fragment,{children:Object(J.jsxs)("div",{className:"pb-5 bg-".concat(n," text-").concat(a," text-center"),style:{minHeight:"inherit"},children:[Object(J.jsx)("h1",{className:"pt-4",children:"Weather Forcast"}),this.props.location.search?"":Object(J.jsx)(ne,{handleOnChange:this.handleOnChange}),Object(J.jsx)(Y,{handleOnChange:function(t){e.setState({selectedConvert:e.props.temperatureConverter(t)})},checked:this.selectedConvert}),Object(J.jsx)(U,{locations:this.state.locationsApi}),Object(J.jsx)("div",{className:"content",children:this.props.weatherData?[Object(J.jsx)(z,{city:this.props.city,code:this.props.code,active:this.state.fav.flat().indexOf(this.props.code)>-1,handleOnChange:function(t){return e.fav(t)}},"fav"),this.props.loading?Object(J.jsx)(ie,{},"Loading"):0===Object.keys(this.props.weatherData).length?"":Object(J.jsx)(Q,{handleDaySelection:function(t){e.props.handleDaySelection(t),e.setState({selectedDay:t})},selectedDay:this.state.selectedDay,selectedCity:this.props.city,selectedConvert:this.state.selectedConvert},"WeeklyWeatherContainer")]:""})]})})}}]),a}(o.Component);oe.contextType=q;var le=Object(u.b)((function(e){return{weatherData:e.weatherData,selectedOption:e.selectedOption,code:e.code,city:e.city,api_key:e.api_key}}),(function(e){return{getForcast:function(e){return I.dispatch(k(e))},selectedOption:function(e){return I.dispatch(N(e))}}}))(Object(ce.f)(oe)),he=a(20);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=a(64),ue=a.n(de),pe=a(42),je=function(e){var t=e.iconType;return Object(J.jsx)("div",{children:"light"===t?Object(J.jsx)("p",{className:"text-toggle",children:Object(J.jsx)(pe.b,{})}):Object(J.jsx)("p",{className:"text-toggle",children:Object(J.jsx)(pe.a,{})})})},be=function(){var e=Object(o.useContext)(q),t=e.theme,a=e.toggleTheme;return Object(J.jsx)("div",{className:"flex justify-between items-center px-5 py-5",children:Object(J.jsx)("div",{children:Object($.a)(t)?null:Object(J.jsx)(ue.a,{checked:"light"===t,icons:{checked:Object(J.jsx)(je,{iconType:"light"}),unchecked:Object(J.jsx)(je,{iconType:"dark"})},onChange:a})})})},fe=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.context.colorTheme;return Object(J.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e," bg-").concat(e),style:{border:"solid",zIndex:1,borderColor:"darksalmon"},children:Object(J.jsxs)("div",{className:"container-fluid",children:[Object(J.jsx)(he.c,{className:"navbar-brand",to:{pathname:"/weather--react",search:"",hash:"",state:{}},children:"Home"}),Object(J.jsx)("button",{className:"navbar-toggler ms-sm-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(J.jsx)("span",{className:"navbar-toggler-icon"})}),Object(J.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(J.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(J.jsx)("li",{className:"nav-item",children:Object(J.jsx)(he.c,{className:"nav-link",to:"/MyFav",children:"MyFav"})})}),Object(J.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(J.jsx)("li",{className:"nav-item",children:Object(J.jsx)(be,{})})})]}),Object(J.jsx)("div",{className:"navbar-brand text-wrap",children:"Herolo - Weather App"})]})})}}]),a}(o.Component);fe.contextType=q;var ve=fe,me=function(e){var t=e.weatherData,a=e.selectedCity,n=e.code,c=e.selectedDay,r=(e.handleDaySelection,e.selectedConvert),s=e.fav;return Object(J.jsx)("div",{className:"col-11 flex-fill m-0 m-2 navbar-brand",children:Object(J.jsxs)("div",{id:a,code:n,className:"container h-100  mx-auto mt-2 gray  rounded text-white ",children:[t[0]?Object(J.jsx)(he.b,{className:" navbar-brand",to:{pathname:"/weather--react",search:"?selectedCity="+a+"&code="+n},children:Object(J.jsx)("div",{className:"d-flex p-2 bd-highlight justify-content-center text-light text-break ",children:Object(J.jsxs)("div",{className:"flex-row bd-highlight text-wrap",children:[Object(J.jsx)("h4",{children:a}),Object(J.jsx)(B.a,{format:"dddd",children:t[c].Date}),Object(J.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(J.jsx)("span",{className:"",children:r?t[c].Temperature.Minimum.Value+" F\xb0":((parseFloat(t[c].Temperature.Minimum.Value)-32)/1.8).toFixed(2)+" C\xb0"}),"                            ",Object(J.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(t[c].Day.Icon>=10?t[c].Day.Icon:"0"+t[c].Day.Icon,"-s.png"),alt:"weather-icon"}),Object(J.jsx)("span",{children:r?t[c].Temperature.Maximum.Value+" F\xb0":((parseFloat(t[c].Temperature.Maximum.Value)-32)/1.8).toFixed(2)+" C\xb0"}),Object(J.jsx)("p",{children:t[c].Day.IconPhrase})]})]})})}):null,Object(J.jsx)(z,{city:a,code:n,active:!0,handleOnChange:function(e){return s(e)}},n)]})})},Oe=function(){return Object(J.jsxs)("div",{className:"loading",children:[Object(J.jsx)("div",{}),Object(J.jsx)("div",{})]})},xe=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).data=function(){n.state.fav.length?Promise.all(n.state.fav.map(function(){var e=Object(M.a)(T.a.mark((function e(t,a){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.getForcast(t[1]);case 2:return e.abrupt("return",n.props.weatherData);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())).then((function(e){n.setState({weatherData:e})})):n.setState({fav:n.props.fav()})},n.fav=function(e){E()(e.target).toggleClass("active"),n.props.fav(e),n.data()},n.state={selectedDay:(new Date).getDay(),selectedConvert:!0,weatherData:[],fav:n.props.fav()},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.state.fav&&this.data(),X()}},{key:"componentWillMount",value:function(){this.setState({fav:this.props.initfav()})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.context,a=t.theme,c=t.colorTheme;return Object(J.jsxs)("div",{className:"pb-5 bg-".concat(c," text-").concat(a," text-center"),style:{minHeight:"inherit"},children:[Object(J.jsx)("h1",{className:"pt-4",children:"My favorites"}),this.state.weatherData.length?Object(J.jsx)(Y,{handleOnChange:function(t){e.setState({selectedConvert:e.props.temperatureConverter(t)})},checked:this.selectedConvert}):"",Object(J.jsx)("div",{className:"d-flex flex-lg-nowrap flex-wrap",children:this.state.weatherData.length?this.state.fav.map((function(t,a){var c=Object(n.a)(e.state.weatherData[a]).findIndex((function(t){return e.state.selectedDay===new Date(t.Date).getDay()}));return Object(J.jsx)(me,{handleDaySelection:function(t){e.setState({selectedDay:t})},selectedDay:c,selectedCity:t[0],code:t[1],weatherData:e.state.weatherData[a],selectedConvert:e.state.selectedConvert,fav:e.fav},a)})):this.state.fav.length?Object(J.jsx)(Oe,{},"Loading"):Object(J.jsx)("h1",{children:"No favorites found"})})]})}}]),a}(o.Component);xe.contextType=q;var ye=Object(u.b)((function(e){return{weatherData:e.weatherData,selectedOption:e.selectedOption,code:e.code,city:e.city,api_key:e.api_key}}),(function(e){return{getForcast:function(e){return I.dispatch(k(e))},selectedOption:function(e){return I.dispatch(N(e))}}}))(xe),ge=(a(138),a(139),function(){return Object(J.jsx)("footer",{children:Object(J.jsxs)("div",{className:"text-center",children:[Object(J.jsx)("span",{children:"made with love by yair \u2665"}),Object(J.jsx)("div",{style:{position:"fixed",bottom:0,border:0,left:0},children:Object(J.jsx)("a",{href:"https://github.com/",className:"github-corner","aria-label":"View source on GitHub",target:"_blank",rel:"noreferrer noopener",children:Object(J.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#292929",color:"#fff",transform:"scale(-1, -1)"},"aria-hidden":"true",children:[Object(J.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(J.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),Object(J.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})})})]})})}),we=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleDaySelection=function(e){return e},e.temperatureConverter=function(e){return e.target.checked},e.fav=function(t){var a=e.state.myfav;if(t){var c=t.target;if(-1===Object(n.a)(c.classList).indexOf("active")){var r=a.findIndex((function(e){return e[1]===c.getAttribute("code")}));a.splice(r,1)}else a.push([c.getAttribute("city"),c.getAttribute("code")]);localStorage.setItem("fav",JSON.stringify(a))}return a},e.initfav=function(){return e.state.myfav},e.state={myfav:localStorage.getItem("fav")?JSON.parse(localStorage.getItem("fav")):[]},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.context,a=t.theme,n=t.colorTheme;return Object(J.jsx)(u.a,{store:I,children:Object(J.jsx)(W,{children:Object(J.jsxs)(he.a,{children:[Object(J.jsx)(O.a,{}),Object(J.jsx)("header",{className:" bg-".concat(n," text-").concat(a),children:Object(J.jsx)(ve,{})}),Object(J.jsx)("main",{className:"flex-column",style:{minHeight:"450px"},children:Object(J.jsxs)(ce.c,{children:[Object(J.jsx)(ce.a,{path:"/MyFav",component:function(){return Object(J.jsx)(ye,{initfav:e.initfav,myfav:e.state.myfav,temperatureConverter:e.temperatureConverter,handleDaySelection:e.handleDaySelection,fav:e.fav})}}),Object(J.jsx)(ce.a,{path:"/weather--react",exact:!0,component:function(){return Object(J.jsx)(le,{initfav:e.initfav,temperatureConverter:e.temperatureConverter,handleDaySelection:e.handleDaySelection,fav:e.fav})}})]})}),Object(J.jsx)(ge,{})]})})})}}]),a}(o.Component);we.contextType=q,d.a.render(Object(J.jsx)(we,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,t,a){},95:function(e,t,a){}},[[141,1,2]]]);
//# sourceMappingURL=main.14a73d46.chunk.js.map