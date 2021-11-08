(this["webpackJsonpreact-ws-chat"]=this["webpackJsonpreact-ws-chat"]||[]).push([[0],{106:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a,s=n(0),i=n.n(s),c=n(26),o=n.n(c),r=(n(106),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,176)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))}),l=n(40),u=n.n(l),d=n(55),j=n(13),f=n(169),m=n(171),b=n(165),h=Object(b.a)({root:{justifyContent:"center"},title:{display:"grid",gridTemplateRows:"1fr 1fr",justifyItems:"flex-end","&:last-child span":{color:"grey"}}});a=s.createContext(undefined);var O,g=n(28),x=n(2),p=Object(g.a)((function(){var e=Object(s.useContext)(a),t=Object(j.a)(e,2),n=t[0],i=(t[1],n.connectionCounter),c=h();return Object(x.jsx)(f.a,{color:"transparent",variant:"outlined",position:"static",children:Object(x.jsx)(m.a,{className:c.root,children:Object(x.jsxs)("div",{className:c.title,children:[Object(x.jsx)("strong",{children:"\u0416\u0438\u0432\u044b\u0435 \u0438 \u043f\u0440\u043e\u0447\u0438\u0435".toUpperCase()}),Object(x.jsxs)("span",{children:["\u0441\u0435\u0439\u0447\u0430\u0441 \u043e\u043d\u043b\u0430\u0439\u043d: ",i," ",1===i?"\u0447\u0435\u043b\u043e\u0432\u0435\u043a":"\u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u0432"]})]})})})})),v=n(16),C=n(87),y=n(172),N=n(168),w=n(164),k=n(166),S=n(173),M=function(e){return Object(x.jsx)(y.a,{children:Object(x.jsx)(N.a,{container:!0,alignItems:"center",justifyContent:"center",style:{height:window.innerHeight-30},children:Object(x.jsx)(S.a,{color:"primary"})})})},V=Object(b.a)({messagesRoot:{maxHeight:window.innerHeight-30},messages:{width:"100%",height:"70vh",backgroundColor:"#354765",overflowY:"auto"},newMessageRoot:{position:"relative",width:"100%",rowGap:20,color:"#ffffff"},sendButton:{backgroundColor:"#354765",color:"#ffffff",width:"20%",height:56,"&:hover":{backgroundColor:"#7094d2",color:"#354765"}},textField:{width:"80%"}}),T=n(88),E=n.n(T),I=Object(b.a)({mainBlock:{minWidth:"120px",margin:10,borderRadius:"4%",maxWidth:"60%",width:"fit-content",padding:15,display:"grid",justifyContent:"flexStart",rowGap:20,fontFamily:"serif",position:"relative"},info:{color:"#afbed2",margin:"20px 30px"},name:{fontFamily:"sans-serif",display:"block",maxWidth:"max-content"},copy:{cursor:"pointer",position:"absolute",opacity:.7,top:8}}),R=n(58),L=n(59),F=n(18);!function(e){e.MESSAGE="message",e.QUIT="quit",e.CONNECTION="connection"}(O||(O={}));var B=function(){function e(){Object(R.a)(this,e),this.me={name:""},this.messages=[],this.messageValue="",this.nameValue="",this.isLoading=!1,this.isConnected=!1,this.connectionCounter=0,Object(F.d)(this,{},{deep:!0})}return Object(L.a)(e,[{key:"setMe",value:function(e){this.me=e}},{key:"setConnected",value:function(e){this.isConnected=e}},{key:"setLoading",value:function(e){this.isLoading=e}},{key:"setMessageValue",value:function(e){this.messageValue=e}},{key:"setNameValue",value:function(e){this.nameValue=e}},{key:"setMessages",value:function(e){this.messages.push(e)}},{key:"setConnectionCounter",value:function(e){this.connectionCounter=e}}]),e}(),J=Object(g.a)((function(e){var t=e.isMe,n=e.message,a=e.ref,s=I(),i={backgroundColor:t?"#3a64a8":"#536f9b",color:t?"#f6dbaa":"#eee4cc",marginLeft:t?"auto":"10%",marginRight:t?"10%":0};return Object(x.jsxs)(N.a,{direction:"column",container:!0,children:[n.event===O.MESSAGE?Object(x.jsxs)("div",{className:s.mainBlock,style:i,children:[Object(x.jsx)("h3",{className:s.name,style:{justifySelf:"".concat(!t&&"flex-end"),borderBottom:"2px solid ".concat(t?"#f6dbaa":"#eee4cc")},children:n.name.toUpperCase()}),Object(x.jsx)("span",{children:n.body}),Object(x.jsx)("div",{onClick:function(){return navigator.clipboard.writeText(n.body)},style:t?{right:2}:{left:6},title:"\u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",className:s.copy,children:Object(x.jsx)(E.a,{})})]}):n.event===O.CONNECTION?Object(x.jsxs)("span",{className:s.info,children:[n.name," \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0441\u044f \u043a \u0447\u0430\u0442\u0443.. ."]}):Object(x.jsxs)("span",{className:s.info,children:[n.name," \u0432\u044b\u0448\u0435\u043b \u0438\u0437 \u0447\u0430\u0442\u0430.. ."]}),Object(x.jsx)("div",{ref:a})]},n.id)})),W=n(5),A=n(89),D=n.n(A),H=n(74),P=n.n(H),U=n(90),_=n.n(U),G=Object(b.a)({emojiRoot:{position:"absolute",zIndex:1,top:10},picker:{top:-350}}),K=Object(g.a)((function(e){e.children;var t=e.frameWidth,n=void 0===t?0:t,i=Object(s.useContext)(a),c=Object(j.a)(i,2),o=c[0],r=(c[1],G()),l=Object(s.useState)(!1),u=Object(j.a)(l,2),d=u[0],f=u[1];return Object(x.jsx)("div",{style:{right:"".concat(.2*n,"px")},className:D()(r.emojiRoot,Object(W.a)({},r.picker,d)),onBlur:function(){return f(!1)},children:d?Object(x.jsx)(P.a,{native:!0,groupNames:{smileys_people:"PEOPLE"},disableAutoFocus:!0,onEmojiClick:function(e,t){o.setMessageValue(t.emoji)},skinTone:H.SKIN_TONE_MEDIUM_DARK}):Object(x.jsx)(k.a,{onClick:function(){return f(!0)},children:Object(x.jsx)(_.a,{})})})})),q=Object(g.a)((function(e){var t;Object(C.a)(e);var n=Object(s.useContext)(a),i=Object(j.a)(n,2),c=i[0],o=i[1],r=Object(s.useRef)(null),l=V(),u=c.messages,d=u.length;d>1&&c.setConnectionCounter(u[d-1].connectionCounter);Object(s.useEffect)((function(){!function(){var e;null===(e=r.current)||void 0===e||e.scrollTo(0,r.current.scrollHeight)}()}));return c.isLoading?Object(x.jsx)(M,{}):Object(x.jsx)(y.a,{children:Object(x.jsxs)(N.a,{container:!0,className:l.messagesRoot,alignItems:"center",children:[Object(x.jsx)(N.a,{ref:r,className:l.messages,children:d&&c.messages.map((function(e){var t=c.nameValue===e.name;return Object(x.jsx)(J,{ref:r,isMe:t,message:e})}))}),Object(x.jsxs)(N.a,{className:l.newMessageRoot,container:!0,direction:"row",alignItems:"flex-end",children:[Object(x.jsx)(w.a,{variant:"filled",onChange:function(e){return c.setMessageValue(e.currentTarget.value)},value:c.messageValue,className:l.textField}),Object(x.jsx)(K,{frameWidth:null===(t=r.current)||void 0===t?void 0:t.clientWidth}),Object(x.jsx)(k.a,{onClick:function(){if(c.messageValue.trim()){var e={event:"message",id:Date.now().toString(),name:c.me.name,body:c.messageValue};null===o||void 0===o||o.send(JSON.stringify(e)),c.setMessageValue("")}},variant:"outlined",classes:{outlined:l.sendButton},children:Object(x.jsx)("strong",{children:"send"})})]})]})})})),z=(n(174),"/CHAT_ROUTE"),Q=[{path:z,Component:q}],Y=function(){return Object(x.jsxs)(v.d,{children:[Q.map((function(e){var t=e.path,n=e.Component;return Object(x.jsx)(v.b,{path:t,component:n,exact:!0},t)})),Object(x.jsx)(v.a,{to:z})]})},X=(n(117),n(69)),Z=Object(g.a)((function(){var e,t=Object(s.useState)((function(){return new B})),n=Object(j.a)(t,1)[0],i=Object(s.useState)(null),c=Object(j.a)(i,2),o=c[0],r=c[1],l=s.useMemo((function(){return[n,o]}),[n,o]),f=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setMe({id:Date.now().toString(),name:n.nameValue}),n.setLoading(!0),e.t0=r,e.next=5,new WebSocket("wss://ws-simple-chat-api.herokuapp.com");case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(o&&(o.onmessage=function(e){n.setMessages(JSON.parse(e.data))},o.onopen=function(){n.setConnected(!0);var e={event:O.CONNECTION,id:n.me.id,name:n.nameValue,body:""};null===o||void 0===o||o.send(JSON.stringify(e)),n.setLoading(!1)},o.onmessage=function(e){var t=JSON.parse(e.data);n.setMessages(t)},o.onclose=function(){n.setConnected(!1);var e={event:O.CONNECTION,id:n.me.id,name:n.nameValue,body:""};o.send(JSON.stringify(e))},o.onerror=function(){n.setConnected(!1),setTimeout((function(){return f()}),1e3)}),n.isLoading)return Object(x.jsx)(M,{});var m=(null===(e=n.nameValue)||void 0===e?void 0:e.trim().length)<3;return Object(x.jsx)(X.a,{children:Object(x.jsxs)(a.Provider,{value:l,children:[Object(x.jsx)(p,{}),n.isConnected?Object(x.jsx)(Y,{}):Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(N.a,{container:!0,justifyContent:"center",alignItems:"stretch",children:[Object(x.jsx)(w.a,{variant:"filled",onChange:function(e){return n.setNameValue(e.currentTarget.value)},value:n.nameValue}),Object(x.jsx)(k.a,{disabled:m,color:"info",onClick:f,variant:"contained",children:"connect"})]})})]})})})),$=Z;o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)($,{})}),document.getElementById("root")),r()}},[[118,1,2]]]);
//# sourceMappingURL=main.562e826d.chunk.js.map