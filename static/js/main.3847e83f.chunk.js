(this["webpackJsonpreact-ws-chat"]=this["webpackJsonpreact-ws-chat"]||[]).push([[0],{85:function(e,n,t){},94:function(e,n,t){},95:function(e,n,t){"use strict";t.r(n);var a,s=t(0),c=t.n(s),o=t(31),r=t.n(o),i=(t(85),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,151)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),s(e),c(e),o(e)}))}),l=t(33),u=t.n(l),d=t(43),f=t(13),j=t(144),m=t(146),g=t(14),b=t(42);a=s.createContext(undefined);var O,h={me:{name:""},messages:[],messageValue:"",nameValue:"",isLoading:!1,isConnected:!1},p=function(e,n){switch(n.type){case"set_me":case"set_loading":case"set_message_value":case"set_name_value":case"set_connected":return Object(b.a)(Object(b.a)({},e),n.payload);case"set_messages":return Object(b.a)(Object(b.a)({},e),{},{messages:[].concat(Object(g.a)(e.messages),[n.payload.messages])});default:throw new Error}},v=function(e){return{type:"set_connected",payload:{isConnected:e}}},x=function(e){return{type:"set_loading",payload:{isLoading:e}}},y=function(e){return{type:"set_message_value",payload:{messageValue:e}}},w=function(e){return{type:"set_messages",payload:{messages:e}}};!function(e){e.MESSAGE="message",e.QUIT="quit",e.CONNECTION="connection"}(O||(O={}));var C=t(140),N=Object(C.a)({root:{justifyContent:"center"},title:{display:"grid",gridTemplateRows:"1fr 1fr"}}),S=t(2),_=function(){var e=Object(s.useContext)(a),n=Object(f.a)(e,3),t=(n[0],n[1],n[2],N());return Object(S.jsx)(j.a,{color:"transparent",variant:"outlined",position:"static",children:Object(S.jsx)(m.a,{className:t.root,children:Object(S.jsx)("div",{className:t.title,children:Object(S.jsx)("strong",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u0438 \u0428\u0430\u043b\u0442\u0430\u0439 \u0411\u043e\u043b\u0442\u0430\u044f"})})})})},E=t(16),T=t(147),I=t(143),V=t(139),k=t(141),J=t(148),L=function(e){return Object(S.jsx)(T.a,{children:Object(S.jsx)(I.a,{container:!0,alignItems:"center",justifyContent:"center",style:{height:window.innerHeight-30},children:Object(S.jsx)(J.a,{color:"primary"})})})},F=Object(C.a)({info:{color:"#afbed2",margin:"20px 30px"}}),R=(t(149),"/CHAT_ROUTE"),H=[{path:R,Component:function(e){var n=Object(s.useContext)(a),t=Object(f.a)(n,3),c=t[0],o=t[1],r=t[2],i=Object(s.useRef)(null),l=F();Object(s.useEffect)((function(){!function(){var e;null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[c]);return c.isLoading?Object(S.jsx)(L,{}):Object(S.jsx)(T.a,{children:Object(S.jsxs)(I.a,{container:!0,alignItems:"center",style:{maxHeight:window.innerHeight-30},children:[Object(S.jsx)("div",{style:{width:"80%",height:"70vh",backgroundColor:"#354765",overflowY:"auto"},children:c.messages.length&&c.messages.map((function(e){var n=c.nameValue===e.name,t={minWidth:"20vw",margin:10,backgroundColor:n?"#3a64a8":"#224e94",color:"#ffffff",borderRadius:"4%",marginLeft:n?"auto":"10%",marginRight:n?"10%":0,maxWidth:"40%",width:"fit-content",padding:15,display:"grid",rowGap:20,fontFamily:"serif","&:first-child":{fontFamily:"sans-serif"}};return Object(S.jsxs)(I.a,{direction:"column",container:!0,children:[e.event===O.MESSAGE?Object(S.jsxs)("div",{style:t,children:[Object(S.jsx)("h3",{children:e.name}),Object(S.jsx)("span",{children:e.body})]}):e.event===O.CONNECTION?Object(S.jsxs)("span",{className:l.info,children:[e.name," \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0441\u044f \u043a \u0447\u0430\u0442\u0443.. ."]}):Object(S.jsxs)("span",{className:l.info,children:[e.name," \u0432\u044b\u0448\u0435\u043b \u0438\u0437 \u0447\u0430\u0442\u0430.. ."]}),Object(S.jsx)("div",{ref:i})]})}))}),Object(S.jsxs)(I.a,{container:!0,direction:"column",alignItems:"flex-end",style:{width:"80%",rowGap:20,color:"#ffffff"},children:[Object(S.jsx)(V.a,{variant:"filled",onChange:function(e){return o(y(e.currentTarget.value))},value:c.messageValue,fullWidth:!0}),Object(S.jsx)(k.a,{style:{backgroundColor:"#354765",color:"#ffffff"},onClick:function(){var e,n={event:"message",id:Date.now().toString(),name:c.me.name,body:c.messageValue};null===r||void 0===r||r.send(JSON.stringify(n)),o(y("")),null===(e=i.current)||void 0===e||e.scrollTo(0,i.current.scrollHeight)},variant:"outlined",children:"send"})]})]})})}}],G=function(){return Object(S.jsxs)(E.d,{children:[H.map((function(e){var n=e.path,t=e.Component;return Object(S.jsx)(E.b,{path:n,component:t,exact:!0},n)})),Object(S.jsx)(E.a,{to:R})]})},M=(t(94),t(55)),W=function(){var e,n=Object(s.useReducer)(p,h),t=Object(f.a)(n,2),c=t[0],o=t[1],r=Object(s.useState)(null),i=Object(f.a)(r,2),l=i[0],j=i[1],m=s.useMemo((function(){return[c,o,l]}),[c,l]),g=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"set_me",payload:{me:{id:Date.now().toString(),name:c.nameValue}}});case 2:return o(x(!0)),e.t0=j,e.next=6,new WebSocket("ws://ws-simple-chat-api.herokuapp.com");case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(s.useEffect)((function(){g()}),[]),l&&(l.onmessage=function(e){o(w(JSON.parse(e.data)))},l.onopen=function(){o(v(!0));var e={event:O.CONNECTION,id:c.me.id,name:c.nameValue,body:""};null===l||void 0===l||l.send(JSON.stringify(e)),o(x(!1)),console.log("ws on")},l.onmessage=function(e){var n=JSON.parse(e.data);o(w(n)),console.log("message send")},l.onclose=function(){o(v(!1));var e={event:O.CONNECTION,id:c.me.id,name:c.nameValue,body:""};console.log("ws close"),l.send(JSON.stringify(e))},l.onerror=function(){o(v(!1)),setTimeout((function(){return g()}),1e3),console.log("ws error")}),c.isLoading)return Object(S.jsx)(L,{});null===(e=c.nameValue)||void 0===e||e.trim().length;return Object(S.jsx)(M.a,{children:Object(S.jsxs)(a.Provider,{value:m,children:[Object(S.jsx)(_,{}),Object(S.jsx)(G,{})]})})};r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(W,{})}),document.getElementById("root")),i()}},[[95,1,2]]]);
//# sourceMappingURL=main.3847e83f.chunk.js.map