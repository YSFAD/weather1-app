(this["webpackJsonpweather1-app"]=this["webpackJsonpweather1-app"]||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(0),n=s.n(i),c=s(9),l=s.n(c),r=s(16),o=s(29),h=s(30),j=s(34),d=s(33),x=(s(40),s(41),s(65)),b=s(66),O=s(67),m=s(64),f=(s(42),s(8)),g=s.n(f),w=s(23),p=s.n(w),y=s(31),u=s.n(y),S=(s(57),[]),v=[],_=[],T=[],k=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).setNews=function(e,t){var s=S,i=v,n=_,c=T;"news_img"==e?a.setState((function(e){return Object(r.a)(e),s.push(t),{news_img:s}})):"news_title"==e?a.setState((function(e){return Object(r.a)(e),i.push(t),{news_title:i}})):"news_desc"==e?a.setState((function(e){return Object(r.a)(e),n.push(t),{news_desc:n}})):"news_link"==e&&a.setState((function(e){return Object(r.a)(e),c.push(t),{news_link:c}}))},a.handleModal=function(){a.setState((function(e){return{settingsModal:!e.settingsModal}}))},a.handleTextChange=function(e){a.setState({tempname:e.target.value})},a.modalSubmit=function(){a.setState({name:a.state.tempname}),localStorage.setItem("name",a.state.tempname),a.handleModal()},a.state={news_img:[],news_title:[],news_desc:[],news_link:[],exchangeRates:{rates:{CAD:1.3,USD:1,EUR:.8}},settingsModal:!1,tempname:"",name:"name"},a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;void 0!=typeof localStorage.name&&this.setState({name:localStorage.name});try{for(var t=0;t<6;t++)this.setNews("news_img",JSON.parse(localStorage.news).articles[t].image),this.setNews("news_title",JSON.parse(localStorage.news).articles[t].title),this.setNews("news_desc",JSON.parse(localStorage.news).articles[t].description),this.setNews("news_link",JSON.parse(localStorage.news).articles[t].url)}catch(s){console.log(s)}localStorage.alreadyVisited?(localStorage.getItem("visitedDay")==g()().format("Do")&&localStorage.getItem("visitedHour")!=g()().format("h")&&(console.log("Fetching News..."),fetch("https://gnews.io/api/v4/top-headlines?country=ca&max=6&token=580244180445e3cdfd828edd675c4bcd&lang=en").then((function(e){return e.json()})).then((function(e){return localStorage.setItem("news",JSON.stringify(e))}))),localStorage.setItem("visitedDay",g()().format("Do")),localStorage.setItem("visitedHour",g()().format("h"))):(localStorage.alreadyVisited=!0,localStorage.setItem("visitedDay",g()().format("Do")),localStorage.setItem("visitedHour",g()().format("h")),fetch("https://gnews.io/api/v4/top-headlines?country=ca&max=6&token=580244180445e3cdfd828edd675c4bcd&lang=en").then((function(e){return e.json()})).then((function(e){return localStorage.setItem("news",JSON.stringify(e))}))),fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,EUR,CAD").then((function(e){return e.json()})).then((function(t){return e.setState({exchangeRates:t})}))}},{key:"render",value:function(){var e=this.state.exchangeRates.rates.EUR,t=this.state.exchangeRates.rates.CAD;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(x.a,{centered:!0,show:this.state.settingsModal,onHide:this.handleModal,dialogClassName:"myModal","aria-labelledby":"modal-styling-title",children:[Object(a.jsx)(x.a.Header,{closeButton:!0,children:Object(a.jsx)(x.a.Title,{id:"modal-styling-title",children:"Settings"})}),Object(a.jsxs)(x.a.Body,{children:[Object(a.jsx)("p",{style:{fontSize:"10px",margin:"0"},children:"Name"}),Object(a.jsx)("form",{onSubmit:this.handleSubmit,children:Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"text",value:this.state.tempname,onChange:this.handleTextChange})})})]}),Object(a.jsxs)(x.a.Footer,{children:[Object(a.jsx)(b.a,{style:{fontSize:"15px"},variant:"secondary",onClick:this.handleModal,children:"Close"}),Object(a.jsx)(b.a,{style:{fontSize:"15px"},variant:"primary",onClick:this.modalSubmit,children:"Save Changes"})]})]}),Object(a.jsx)("div",{className:"page"}),Object(a.jsxs)("div",{className:"navBar",children:[Object(a.jsx)(p.a,{className:"momentDate",interval:1e3,format:"MMM Do YY"}),Object(a.jsx)("button",{onClick:this.handleModal,className:"settingsButton",children:"\u2699"}),Object(a.jsx)(p.a,{className:"momentTime",interval:1e3,format:"h:mm:ss a"})]}),Object(a.jsx)("div",{style:{height:"125px"},children:Object(a.jsxs)("p",{style:{fontFamily:"arial",fontSize:"70px",color:"#555",float:"left",margin:"10px 50px 20px"},children:[" Hello, ",this.state.name]})}),Object(a.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css",type:"text/css"}),Object(a.jsxs)("div",{className:"topBlock",children:[Object(a.jsx)("div",{style:{width:"calc(45% - 20px)",marginLeft:"50px"},children:Object(a.jsx)(u.a,{forecast:"5days",apikey:"bc92be6ae5846695bc92f21bdb5e2730",type:"geo",lat:"43.941870",lon:"-79.442100"})}),Object(a.jsxs)("div",{className:"newsDiv",children:[Object(a.jsxs)(O.a,{style:{width:"33.3%",float:"left"},children:[Object(a.jsx)(O.a.Img,{variant:"top",src:this.state.news_img[0]}),Object(a.jsxs)(O.a.Body,{children:[Object(a.jsx)(O.a.Title,{children:this.state.news_title[0]}),Object(a.jsx)(O.a.Text,{children:this.state.news_desc[0]}),Object(a.jsx)(b.a,{href:this.state.news_link[0],variant:"primary",children:"View Article"})]})]}),Object(a.jsxs)(O.a,{style:{width:"33.3%",float:"left"},children:[Object(a.jsx)(O.a.Img,{variant:"top",src:this.state.news_img[1]}),Object(a.jsxs)(O.a.Body,{children:[Object(a.jsx)(O.a.Title,{children:this.state.news_title[1]}),Object(a.jsx)(O.a.Text,{children:this.state.news_desc[1]}),Object(a.jsx)(b.a,{href:this.state.news_link[1],variant:"primary",children:"View Article"})]})]}),Object(a.jsxs)(O.a,{style:{width:"33.3%",float:"left"},children:[Object(a.jsx)(O.a.Img,{variant:"top",src:this.state.news_img[2]}),Object(a.jsxs)(O.a.Body,{children:[Object(a.jsx)(O.a.Title,{children:this.state.news_title[2]}),Object(a.jsx)(O.a.Text,{children:this.state.news_desc[2]}),Object(a.jsx)(b.a,{href:this.state.news_link[2],variant:"primary",children:"View Article"})]})]}),Object(a.jsxs)(O.a,{style:{width:"33.3%",float:"left"},children:[Object(a.jsx)(O.a.Img,{variant:"top",src:this.state.news_img[3]}),Object(a.jsxs)(O.a.Body,{children:[Object(a.jsx)(O.a.Title,{children:this.state.news_title[3]}),Object(a.jsx)(O.a.Text,{children:this.state.news_desc[3]}),Object(a.jsx)(b.a,{href:this.state.news_link[3],variant:"primary",children:"View Article"})]})]}),Object(a.jsxs)(O.a,{style:{width:"33.3%",float:"left"},children:[Object(a.jsx)(O.a.Img,{variant:"top",src:this.state.news_img[4]}),Object(a.jsxs)(O.a.Body,{children:[Object(a.jsx)(O.a.Title,{children:this.state.news_title[4]}),Object(a.jsx)(O.a.Text,{children:this.state.news_desc[4]}),Object(a.jsx)(b.a,{href:this.state.news_link[4],variant:"primary",children:"View Article"})]})]}),Object(a.jsxs)(O.a,{style:{width:"33.3%",float:"left"},children:[Object(a.jsx)(O.a.Img,{variant:"top",src:this.state.news_img[5]}),Object(a.jsxs)(O.a.Body,{children:[Object(a.jsx)(O.a.Title,{children:this.state.news_title[5]}),Object(a.jsx)(O.a.Text,{children:this.state.news_desc[5]}),Object(a.jsx)(b.a,{href:this.state.news_link[5],variant:"primary",children:"View Article"})]})]}),Object(a.jsxs)("div",{className:"fillerDiv",children:[Object(a.jsx)(m.a,{style:{float:"left"},height:"100%",src:"https://yt3.ggpht.com/ytc/AAUvwngbYg8TP_H793FX5ZZ9T_7NWp05y5kl-ivLOI3XuyI=s900-c-k-c0x00ffffff-no-rj",rounded:!0}),Object(a.jsx)(O.a,{style:{width:"auto",height:"100%"},children:Object(a.jsx)(O.a.Body,{children:Object(a.jsx)(O.a.Text,{children:Object(a.jsxs)("p",{style:{fontSize:"3.7vh",lineHeight:"100%"},children:["For more of the latest news, visit ",Object(a.jsx)("a",{href:"https://www.ctv.ca/",children:"CTV.ca"})]})})})})]})]}),Object(a.jsxs)("div",{className:"currencyContainer",children:[Object(a.jsx)(O.a,{style:{width:"auto",textAlign:"center"},children:Object(a.jsxs)(O.a.Body,{children:[Object(a.jsxs)(O.a.Title,{style:{fontSize:"60px",color:"#333"},children:["USD",Object(a.jsx)("br",{}),Object(a.jsx)("p",{style:{fontSize:"35px",color:"#555",fontWeight:"500"},children:"1.000"})]}),Object(a.jsx)(O.a.Text,{})]})}),Object(a.jsx)(O.a,{style:{width:"auto",textAlign:"center"},children:Object(a.jsxs)(O.a.Body,{children:[Object(a.jsxs)(O.a.Title,{style:{fontSize:"60px",color:"#333"},children:["CAD",Object(a.jsx)("br",{}),Object(a.jsx)("p",{style:{fontSize:"35px",color:"#555",fontWeight:"500"},children:t.toString().substring(0,6)})]}),Object(a.jsx)(O.a.Text,{})]})}),Object(a.jsx)(O.a,{style:{width:"auto",textAlign:"center"},children:Object(a.jsxs)(O.a.Body,{children:[Object(a.jsxs)(O.a.Title,{style:{fontSize:"60px",color:"#333"},children:["EUR",Object(a.jsx)("br",{}),Object(a.jsx)("p",{style:{fontSize:"35px",color:"#555",fontWeight:"500"},children:e.toString().substring(0,6)})]}),Object(a.jsx)(O.a.Text,{})]})})]})]})]})}}]),s}(n.a.Component),N=document.getElementById("root");l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(k,{})}),N)}},[[61,1,2]]]);
//# sourceMappingURL=main.f9eeef37.chunk.js.map