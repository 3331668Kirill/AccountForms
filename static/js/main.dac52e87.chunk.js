(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(8),i=n.n(l),r=(n(14),n(9)),s=n(6),u=n(3),o=n(2),j=n.n(o),b=(n(15),n(0)),d=function(e){var t=e.active,n=e.setActive,c=e.children;return Object(b.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return n(!1)},children:Object(b.jsx)("div",{className:t?"modal_content active":"modal_content",onClick:function(e){return e.stopPropagation()},children:c})})},v=a.a.memo((function(e){var t=e.unp,n=e.changeUnp,a=e.changeNameFirm,l=e.changeAddress,i=e.changeBankAccount,r=e.nameFirm,s=e.bankAccount,o=e.address,j=Object(c.useState)(!1),v=Object(u.a)(j,2),h=v[0],O=v[1];return console.log("render Form"),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{style:{margin:"10px 20px",padding:"20px",fontSize:"1rem",backgroundColor:"lightgreen"},onClick:function(){return O(!0)},children:" \u0420\u0415\u041a\u0412\u0418\u0417\u0418\u0422\u042b \u0417\u0410\u041a\u0410\u0417\u0427\u0418\u041a\u0410"}),Object(b.jsxs)(d,{active:h,setActive:O,children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0423\u041d\u041f: "}),Object(b.jsx)("input",{type:"text",id:"unp",value:t,onChange:n,maxLength:9}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: "}),Object(b.jsx)("input",{type:"text",id:"nameFirm",value:r,onChange:a,maxLength:20})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: "}),Object(b.jsx)("input",{type:"text",id:"address",style:{width:"250px"},value:o,onChange:l,maxLength:40})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: "}),Object(b.jsx)("input",{type:"text",id:"bankAccount",style:{width:"250px"},value:s,onChange:i,maxLength:28})]})]})]})}));function h(e){var t=Object(c.useState)(e),n=Object(u.a)(t,2),a=n[0],l=n[1];return{value:a,onChange:function(e){l(e.currentTarget.value),localStorage.setItem(e.currentTarget.id,e.currentTarget.value)},reset:function(e){l(e)}}}function O(e){var t=Object(c.useState)(e),n=Object(u.a)(t,2),a=n[0],l=n[1];return{value:a,onChange:function(e){localStorage.setItem(e.currentTarget.id,e.currentTarget.value);var t=e.currentTarget.value;return isFinite(+t)?l(t):null},reset:function(e){l(e)}}}var _=a.a.memo((function(e){var t=e.docNumber,n=e.changeDocNumber,c=e.service,a=e.vat,l=e.changeVat,i=e.docDate,r=e.changeQuantity,s=e.quantity,u=e.changePrice,o=e.price,d=e.changeService,v=e.unit,h=e.changeUnit,O=e.changeDocDate,_=e.clearButton;return console.log("render Act"),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430: "}),Object(b.jsx)("input",{type:"date",id:"docDate",value:i,onChange:O})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430: "}),Object(b.jsx)("input",{type:"text",id:"docNumber",value:t,onChange:n,maxLength:9})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438: "}),Object(b.jsx)("input",{type:"text",className:""===c?j.a.service:"",id:"service",value:c,onChange:d})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0434 \u0438\u0437\u043c: "}),Object(b.jsx)("input",{type:"text",id:"unit",value:v,onChange:h,maxLength:3})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e: "}),Object(b.jsx)("input",{type:"text",id:"quantity",className:""===s?j.a.service:"",value:s,onChange:r})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043d\u0443: "}),Object(b.jsx)("input",{type:"text",id:"price",className:""===o?j.a.service:"",value:o,onChange:u})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u041d\u0414\u0421 %: "}),Object(b.jsx)("input",{list:"vat-list",id:"vat",value:a,onChange:l})]}),Object(b.jsxs)("datalist",{id:"vat-list",children:[Object(b.jsx)("option",{value:"20"}),Object(b.jsx)("option",{value:"10"}),Object(b.jsx)("option",{value:"0"}),Object(b.jsx)("option",{value:"\u0411\u0435\u0437 \u041d\u0414\u0421"})]}),Object(b.jsx)("button",{onClick:_,children:" \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u044f \u0432\u0432\u043e\u0434\u0430"})]})})}));var x=a.a.forwardRef((function(e,t){var n=Object(c.useState)([]),a=Object(u.a)(n,2),l=a[0],i=a[1],r=Object(c.useState)([]),o=Object(u.a)(r,2),d=o[0],x=o[1],g=Object(c.useState)(0),p=Object(u.a)(g,2),m=p[0],f=p[1],C=Object(c.useState)(!1),N=Object(u.a)(C,2),k=N[0],y=N[1],F=h(""),S=h(""),A=h(""),D=h(""),T=h(localStorage.getItem("nameFirm")),w=h(localStorage.getItem("address")),I=h(localStorage.getItem("bankAccount")),L=O(""),M=O(""),B=O(localStorage.getItem("unp")),P=h(""),U=+(+M.value*+L.value).toFixed(2),E="\u0411\u0435\u0437 \u041d\u0414\u0421"===P.value?0:+(U*+P.value/100).toFixed(2);Object(c.useEffect)((function(){x(["","","","","","\u0418\u0442\u043e\u0433\u043e:",m<0?0:+m.toFixed(2),null])}),[l,m]);for(var R=Object(c.useCallback)((function(){D.reset(""),L.reset(""),M.reset(""),A.reset(""),P.reset(""),y(!1)}),[D.value,L.value,M.value,A.value]),q=[],H=0;H<=6;H++)q[H]=Object(b.jsx)("div",{className:j.a.cell,children:" "},H);var J=S.value.toString(),V="".concat(J[8]).concat(J[9],".").concat(J[5]).concat(J[6],".").concat(J[0]).concat(J[1]).concat(J[2]).concat(J[3]),z=function(e){var t=[["","",""],[["\u043e\u0434\u0438\u043d","\u043e\u0434\u043d\u0430"],["\u0434\u0435\u0441\u044f\u0442\u044c","\u043e\u0434\u0438\u043d\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0442\u0440\u0438\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0447\u0435\u0442\u044b\u0440\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u043f\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0432\u043e\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0434\u0435\u0432\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c"],"\u0441\u0442\u043e"],[["\u0434\u0432\u0430","\u0434\u0432\u0435"],"\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c","\u0434\u0432\u0435\u0441\u0442\u0438"],["\u0442\u0440\u0438","\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c","\u0442\u0440\u0438\u0441\u0442\u0430"],["\u0447\u0435\u0442\u044b\u0440\u0435","\u0441\u043e\u0440\u043e\u043a","\u0447\u0435\u0442\u044b\u0440\u0435\u0441\u0442\u0430"],["\u043f\u044f\u0442\u044c","\u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442","\u043f\u044f\u0442\u044c\u0441\u043e\u0442"],["\u0448\u0435\u0441\u0442\u044c","\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442","\u0448\u0435\u0441\u0442\u044c\u0441\u043e\u0442"],["\u0441\u0435\u043c\u044c","\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442","\u0441\u0435\u043c\u044c\u0441\u043e\u0442"],["\u0432\u043e\u0441\u0435\u043c\u044c","\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442","\u0432\u043e\u0441\u0435\u043c\u044c\u0441\u043e\u0442"],["\u0434\u0435\u0432\u044f\u0442\u044c","\u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e","\u0434\u0435\u0432\u044f\u0442\u044c\u0441\u043e\u0442"]],n=[["\u043a\u043e\u043f\u0435\u0439\u043a\u0430","\u043a\u043e\u043f\u0435\u0439\u043a\u0438","\u043a\u043e\u043f\u0435\u0435\u043a"],["\u0431\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c"," \u0431\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f","\u0431\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u0435\u0439"],["\u0442\u044b\u0441\u044f\u0447\u0430","\u0442\u044b\u0441\u044f\u0447\u0438","\u0442\u044b\u0441\u044f\u0447"],["\u043c\u0438\u043b\u043b\u0438\u043e\u043d","\u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430","\u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432"],["\u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434","\u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u0430","\u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u043e\u0432"]];function c(e,n,c){var a="",l=t[Math.floor(e/100)%10][2];l&&(a+=l+" ");var i=Math.floor(e/10)%10;return(l=t[i][1])instanceof Array?(l=l[e%10])&&(a+=l+" "):(l&&(a+=l+" "),(l=t[e%10][0])instanceof Array&&(l=l[0===c||2===c?1:0]),l&&(a+=l)),a+" "+function(e,t){return t[e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]}(e,n[c])+(c>1?" ":"")}for(var a=Math.floor(e+.005),l=Math.floor(100*(e-a)+.5),i="",r=1;a>.9999;a/=1e3)i=c(Math.floor(a%1e3),n,r)+i,r++;return l>0&&(i=i+" "+c(l,n,0)),i}(d[6]).toUpperCase();return Object(b.jsxs)("div",{children:[Object(b.jsx)("style",{type:"text/css",media:"print",children:"@media print { body { -webkit-print-color-adjust: exact; } @page { size: A4; margin-left: 15mm !important }}"}),Object(b.jsx)(v,{bankAccount:I.value,changeBankAccount:Object(c.useCallback)((function(e){return I.onChange(e)}),[I.value]),nameFirm:T.value,address:w.value,changeAddress:Object(c.useCallback)((function(e){return w.onChange(e)}),[w.value]),changeUnp:Object(c.useCallback)((function(e){return B.onChange(e)}),[B.value]),changeNameFirm:Object(c.useCallback)((function(e){return T.onChange(e)}),[T.value]),unp:B.value}),Object(b.jsx)(_,{docNumber:F.value,changeDocNumber:Object(c.useCallback)((function(e){return F.onChange(e)}),[F.value]),changeService:Object(c.useCallback)((function(e){return A.onChange(e)}),[A.value]),changeUnit:Object(c.useCallback)((function(e){return D.onChange(e)}),[D.value]),changeQuantity:Object(c.useCallback)((function(e){return M.onChange(e)}),[M.value]),changePrice:Object(c.useCallback)((function(e){return L.onChange(e)}),[L.value]),changeVat:Object(c.useCallback)((function(e){return P.onChange(e)}),[P.value]),changeDocDate:Object(c.useCallback)((function(e){return S.onChange(e)}),[S.value]),clearButton:R,service:A.value,docDate:S.value,vat:P.value,price:L.value,quantity:M.value,unit:D.value}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){if(y(!0),""!==A.value&&""!==L.value&&""!==M.value){var e=Object(s.a)(l);i([].concat(Object(s.a)(e),[A.value,D.value,M.value,L.value,U,P.value,+(+E+ +U).toFixed(2),null])),f((function(e){return+e.toFixed(2)+ +E.toFixed(2)+ +U.toFixed(2)})),y(!1)}},children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443"}),Object(b.jsx)("button",{onClick:function(){if(l.length>=8){i(Object(s.a)(l).filter((function(e,t){return t<l.length-8})));var e=l.filter((function(e,t){return t>=l.length-8}));f((function(t){return+t.toFixed(2)-e[6]}))}},children:" \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443"})]}),k&&Object(b.jsx)("p",{style:{color:"red"},children:'"\u041f\u043e\u043b\u044f \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u043a\u0440\u0430\u0441\u043d\u044b\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f!!!"'}),Object(b.jsxs)("div",{ref:t,className:j.a.grid,children:[Object(b.jsx)("div",{className:j.a.cell_1,children:"\u0410\u041a\u0422 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442"}),Object(b.jsxs)("div",{className:j.a.cell_3,children:["\u2116",F.value," \u043e\u0442 ",S.value&&V]}),Object(b.jsx)("div",{className:j.a.cell_5,children:"\u0433.\u041c\u0438\u043d\u0441\u043a"}),Object(b.jsxs)("div",{className:j.a.customer,children:[" \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a: ",Object(b.jsxs)("span",{children:[T.value,Object(b.jsxs)("div",{children:["\u044e\u0440. \u0430\u0434\u0440\u0435\u0441: ",w.value]}),Object(b.jsxs)("div",{children:["\u0423\u041d\u041f: ",B.value]}),Object(b.jsxs)("div",{children:[" \u0440/\u0441: ",I.value]})]})]}),q.map((function(e){return e})),Object(b.jsx)("div",{className:j.a.cell,children:' \u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c: OOO "\u0420\u041e\u0413\u0410 \u0418 \u041a\u041e\u041f\u042b\u0422\u0410"'}),q.map((function(e){return e})),Object(b.jsx)("div",{className:j.a.table,children:" \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 (\u0440\u0430\u0431\u043e\u0442\u044b)"}),Object(b.jsx)("div",{className:j.a.table_2,children:" \u0415\u0434. \u0438\u0437\u043c."}),Object(b.jsx)("div",{className:j.a.table_2,children:" \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(b.jsx)("div",{className:j.a.table_2,children:" \u0426\u0435\u043d\u0430 \u0437\u0430 \u0435\u0434, \u0431\u0435\u043b.\u0440\u0443\u0431"}),Object(b.jsx)("div",{className:j.a.table_2,children:" \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0431\u0435\u0437 \u041d\u0414\u0421, \u0431\u0435\u043b.\u0440\u0443\u0431"}),Object(b.jsx)("div",{className:j.a.table_2,children:" \u041d\u0414\u0421, %"}),Object(b.jsx)("div",{className:j.a.table_2,children:" \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0441 \u041d\u0414\u0421, \u0431\u0435\u043b.\u0440\u0443\u0431"}),Object(b.jsx)("div",{className:j.a.table_5}),l.map((function(e,t){return Object(b.jsxs)("div",{className:null!==e?j.a.table_4:j.a.table_5,children:[" ",e," "]},t)})),d.map((function(e,t){return Object(b.jsxs)("div",{className:null!==e?j.a.table_4:j.a.table_5,children:[" ",e," "]},t)})),Object(b.jsxs)("div",{className:j.a.cell_4,children:[Object(b.jsxs)("div",{className:j.a.total_of_string,children:["\u0418\u0422\u041e\u0413\u041e \u041a \u041e\u041f\u041b\u0410\u0422\u0415: ",z]}),"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a ________________"]}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{className:j.a.cell_6,children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c_______________"})]})]})})),g=function(){var e=Object(c.useRef)(null),t=Object(r.useReactToPrint)({content:function(){return e.current}});return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{ref:e}),Object(b.jsx)("button",{style:{width:"150px",height:"125px",backgroundColor:"yellow"},onClick:t,children:"\u0420\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0438\u043b\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u0444\u0430\u0439\u043b"})]})};n(17);var p=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(g,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),l(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),m()},2:function(e,t,n){e.exports={grid:"print_grid__1MsHo",cell_1:"print_cell_1__19slu",customer:"print_customer__8_EfK",cell_2:"print_cell_2__1sUf-",cell_3:"print_cell_3__2AEs2",cell_4:"print_cell_4__3tbOH",cell_6:"print_cell_6__1HVAl",total_of_string:"print_total_of_string__n10Yh",cell_5:"print_cell_5__2tydo",table:"print_table__1XRJ7",table_2:"print_table_2__1Nfoc",table_3:"print_table_3__3tKi8",table_4:"print_table_4__2a6f3",table_5:"print_table_5__1u907",service:"print_service__TlFkW"}}},[[18,1,2]]]);
//# sourceMappingURL=main.dac52e87.chunk.js.map