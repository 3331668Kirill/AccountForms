(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={grid:"print_grid__1MsHo",cell_1:"print_cell_1__19slu",customer:"print_customer__8_EfK",cell_2:"print_cell_2__1sUf-",cell_3:"print_cell_3__2AEs2",cell_4:"print_cell_4__3tbOH",cell_6:"print_cell_6__1HVAl",cell_7:"print_cell_7__3JVBE",total_of_string:"print_total_of_string__n10Yh",cell_5:"print_cell_5__2tydo",table:"print_table__1XRJ7",table_2:"print_table_2__1Nfoc",table_3:"print_table_3__3tKi8",table_4:"print_table_4__2a6f3",table_5:"print_table_5__1u907",service:"print_service__TlFkW"}},,,function(e,t,n){e.exports={nav:"navbar_nav__1qu4T",nav_div:"navbar_nav_div__3moL5",item:"navbar_item__3hqwi",active:"navbar_active__edz2G"}},function(e,t,n){e.exports={up:"printTTN_up__174m2",unp_string:"printTTN_unp_string__2LYfZ",unp_1:"printTTN_unp_1__1G25A",unp_2:"printTTN_unp_2__3asFb",date:"printTTN_date__2thP0",auto:"printTTN_auto__2nLTQ"}},,,,,,,,function(e,t,n){e.exports={form:"form_form__QVyAX"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(13),l=n.n(r),i=(n(20),n(2)),s=(n(21),n(0));var j=function(){return Object(s.jsx)("div",{className:"home",children:"\u0413\u041b\u0410\u0412\u041d\u0410\u042f"})},u=n(6),o=n.n(u),d=n(8),b=function(){return Object(s.jsx)("div",{className:o.a.nav_div,children:Object(s.jsxs)("nav",{className:o.a.nav,children:[Object(s.jsx)("div",{className:o.a.item,children:Object(s.jsx)(d.b,{to:"/home",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(s.jsx)("div",{className:o.a.item,children:Object(s.jsx)(d.b,{to:"/act_form",children:"\u0410\u043a\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442"})}),Object(s.jsx)("div",{className:"".concat(o.a.item," ").concat(o.a.active),children:Object(s.jsx)(d.b,{to:"/ttn_form",children:"\u0422\u0422\u041d"})}),Object(s.jsx)("div",{className:"".concat(o.a.item," ").concat(o.a.active),children:Object(s.jsx)(d.b,{to:"/tn",children:"\u0422\u041d"})}),Object(s.jsx)("div",{className:o.a.item,children:Object(s.jsx)(d.b,{to:"/invoice_form",children:"\u0421\u0447\u0435\u0442-\u0444\u0430\u043a\u0442\u0443\u0440\u0430"})}),Object(s.jsx)("div",{className:o.a.item,children:Object(s.jsx)(d.b,{to:"/contract",children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440"})})]})})},v=n(14),_=n(10),h=n(4),O=n(3),x=n.n(O),m=(n(23),function(e){var t=e.active,n=e.setActive,c=e.children;return Object(s.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return n(!1)},children:Object(s.jsx)("div",{className:t?"modal_content active":"modal_content",onClick:function(e){return e.stopPropagation()},children:c})})}),p=a.a.memo((function(e){var t=e.unp,n=e.changeUnp,a=e.changeNameFirm,r=e.changeAddress,l=e.changeBankAccount,i=e.nameFirm,j=e.bankAccount,u=e.address,o=e.val,d=Object(c.useState)(!1),b=Object(h.a)(d,2),v=b[0],_=b[1];return console.log("render Form"),Object(s.jsxs)("div",{children:["customer"===o&&Object(s.jsx)("button",{style:{margin:"10px 20px",padding:"20px",fontSize:"1rem",backgroundColor:"lightgreen"},onClick:function(){return _(!0)},children:" \u0420\u0415\u041a\u0412\u0418\u0417\u0418\u0422\u042b \u0417\u0410\u041a\u0410\u0417\u0427\u0418\u041a\u0410"}),"executor"===o&&Object(s.jsx)("div",{children:Object(s.jsx)("button",{style:{margin:"10px 20px",padding:"20px",fontSize:"1rem",backgroundColor:"lightgreen"},onClick:function(){return _(!0)},children:" \u0420\u0415\u041a\u0412\u0418\u0417\u0418\u0422\u042b \u0418\u0421\u041f\u041e\u041b\u041d\u0418\u0422\u0415\u041b\u042f"})}),Object(s.jsxs)(m,{active:v,setActive:_,children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0423\u041d\u041f: "}),Object(s.jsx)("input",{type:"text",id:"customer"===o?"unp":"unpOwn",value:t,onChange:n,maxLength:9}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: "}),Object(s.jsx)("input",{type:"text",id:"customer"===o?"nameFirm":"nameFirmOwn",value:i,onChange:a,maxLength:30})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: "}),Object(s.jsx)("input",{type:"text",id:"customer"===o?"address":"addressOwn",style:{width:"250px"},value:u,onChange:r,maxLength:40})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: "}),Object(s.jsx)("input",{type:"text",id:"customer"===o?"bankAccount":"bankAccountOwn",style:{width:"250px"},value:j,onChange:l,maxLength:28})]})]})]})}));function f(e){var t=Object(c.useState)(e),n=Object(h.a)(t,2),a=n[0],r=n[1];return{value:a,onChange:function(e){r(e.currentTarget.value),localStorage.setItem(e.currentTarget.id,e.currentTarget.value)},reset:function(e){r(e)}}}function g(e){var t=Object(c.useState)(e),n=Object(h.a)(t,2),a=n[0],r=n[1];return{value:a,onChange:function(e){localStorage.setItem(e.currentTarget.id,e.currentTarget.value);var t=e.currentTarget.value;return isFinite(+t)?r(t):null},reset:function(e){r(e)}}}var N=a.a.memo((function(e){var t=e.docNumber,n=e.changeDocNumber,c=e.service,a=e.vat,r=e.changeVat,l=e.docDate,i=e.changeQuantity,j=e.quantity,u=e.changePrice,o=e.price,d=e.changeService,b=e.unit,v=e.changeUnit,_=e.changeDocDate,h=e.clearButton;return console.log("render Act"),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430: "}),Object(s.jsx)("input",{type:"date",id:"docDate",value:l,onChange:_})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430: "}),Object(s.jsx)("input",{type:"text",id:"docNumber",value:t,onChange:n,maxLength:9})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438: "}),Object(s.jsx)("input",{type:"text",className:""===c?x.a.service:"",id:"service",value:c,onChange:d})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0434 \u0438\u0437\u043c: "}),Object(s.jsx)("input",{type:"text",id:"unit",value:b,onChange:v,maxLength:3})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e: "}),Object(s.jsx)("input",{type:"text",id:"quantity",className:""===j?x.a.service:"",value:j,onChange:i})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043d\u0443: "}),Object(s.jsx)("input",{type:"text",id:"price",className:""===o?x.a.service:"",value:o,onChange:u})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u041d\u0414\u0421 %: "}),Object(s.jsx)("input",{list:"vat-list",id:"vat",value:a,onChange:r})]}),Object(s.jsxs)("datalist",{id:"vat-list",children:[Object(s.jsx)("option",{value:"20"}),Object(s.jsx)("option",{value:"10"}),Object(s.jsx)("option",{value:"0"}),Object(s.jsx)("option",{value:"\u0411\u0435\u0437 \u041d\u0414\u0421"})]}),Object(s.jsx)("button",{onClick:h,children:" \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u044f \u0432\u0432\u043e\u0434\u0430"})]})})}));var C=a.a.memo((function(e){var t=e.nameOfForm,n=e.docNumber,c=e.docDate,a=e.raw,r=e.endRaw,l=e.dateStr,i=e.nameFirm,j=e.nameFirmOwn,u=e.address,o=e.addressOwn,d=e.arrDiv,b=e.vat,v=e.unp,_=e.unpOwn,h=e.bankAccount,O=e.bankAccountOwn,m=e.totalOfString;return console.log("render FormToPrintAct"),Object(s.jsxs)("div",{className:x.a.grid,children:["act_form"===t&&Object(s.jsx)("div",{className:x.a.cell_1,children:"\u0410\u041a\u0422 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442"}),"invoice_form"===t&&Object(s.jsx)("div",{className:x.a.cell_1,children:"\u0421\u0447\u0435\u0442-\u0444\u0430\u043a\u0442\u0443\u0440\u0430"}),Object(s.jsxs)("div",{className:x.a.cell_3,children:["\u2116",n," \u043e\u0442 ",c&&l]}),Object(s.jsx)("div",{className:x.a.cell_5,children:"\u0433.\u041c\u0438\u043d\u0441\u043a"}),Object(s.jsxs)("div",{className:x.a.customer,children:[" \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a: ",Object(s.jsxs)("span",{children:[i,Object(s.jsxs)("div",{children:["\u044e\u0440. \u0430\u0434\u0440\u0435\u0441: ",u]}),Object(s.jsxs)("div",{children:["\u0423\u041d\u041f: ",v]}),Object(s.jsxs)("div",{children:[" \u0440/\u0441: ",h]})]})]}),d.map((function(e){return e})),Object(s.jsxs)("div",{className:x.a.cell,children:[" \u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c: ",Object(s.jsxs)("span",{children:[j,Object(s.jsxs)("div",{children:["\u044e\u0440. \u0430\u0434\u0440\u0435\u0441: ",o]}),Object(s.jsxs)("div",{children:["\u0423\u041d\u041f: ",_]}),Object(s.jsxs)("div",{children:[" \u0440/\u0441: ",O]})]})]}),d.map((function(e){return e})),Object(s.jsx)("div",{className:x.a.table,children:" \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 (\u0440\u0430\u0431\u043e\u0442\u044b)"}),Object(s.jsx)("div",{className:x.a.table_2,children:" \u0415\u0434. \u0438\u0437\u043c."}),Object(s.jsx)("div",{className:x.a.table_2,children:" \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(s.jsx)("div",{className:x.a.table_2,children:" \u0426\u0435\u043d\u0430 \u0437\u0430 \u0435\u0434, \u0431\u0435\u043b.\u0440\u0443\u0431"}),Object(s.jsx)("div",{className:x.a.table_2,children:" \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0431\u0435\u0437 \u041d\u0414\u0421, \u0431\u0435\u043b.\u0440\u0443\u0431"}),Object(s.jsx)("div",{className:x.a.table_2,children:" \u041d\u0414\u0421, %"}),Object(s.jsx)("div",{className:x.a.table_2,children:" \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0441 \u041d\u0414\u0421, \u0431\u0435\u043b.\u0440\u0443\u0431"}),Object(s.jsx)("div",{className:x.a.table_5,children:" "}),a.map((function(e,t){return Object(s.jsxs)("div",{className:null!==e?x.a.table_4:x.a.table_5,children:[" ",e," "]},t)})),r.map((function(e,t){return Object(s.jsxs)("div",{className:null!==e?x.a.table_4:x.a.table_5,children:[" ",e," "]},t)})),Object(s.jsxs)("div",{className:x.a.cell_4,children:[Object(s.jsxs)("div",{className:x.a.total_of_string,children:["\u0418\u0422\u041e\u0413\u041e \u041a \u041e\u041f\u041b\u0410\u0422\u0415: ",m,", \u0432 \u0442.\u0447. \u041d\u0414\u0421: ",b,"% - ",null!==r[6]&&"\u0411\u0435\u0437 \u041d\u0414\u0421"!==b?(r[6]*+b/(+b+100)).toFixed(2):"0"," \u0440\u0443\u0431.","act_form"===t&&Object(s.jsxs)("div",{className:x.a.cell_7,children:[" \u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0430\u043a\u0442 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b \u0432 \u0441\u0440\u043e\u043a \u0438 \u0441\u0434\u0430\u043b \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0443, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432\u044b\u0448\u0435 \u0440\u0430\u0431\u043e\u0442\u044b (\u0443\u0441\u043b\u0443\u0433\u0438).",Object(s.jsx)("div",{children:"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u0434\u0440\u0443\u0433 \u043a \u0434\u0440\u0443\u0433\u0443 \u043f\u0440\u0435\u0442\u0435\u043d\u0437\u0438\u0439 \u043d\u0435 \u0438\u043c\u0435\u044e\u0442."})]})]}),"act_form"===t&&Object(s.jsx)("span",{children:"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a ________________"})]}),d.map((function(e){return e})),Object(s.jsx)("div",{className:x.a.cell_6,children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c____________________"})]})})),k=n(7),w=n.n(k);var F=a.a.memo((function(e){var t=e.docDate,n=(e.raw,e.endRaw),c=e.rawTTN,a=e.dateStr,r=(e.nameFirm,e.nameFirmOwn,e.address,e.addressOwn,e.arrDiv,e.vat,e.unp),l=e.unpOwn;e.bankAccount,e.bankAccountOwn,e.totalOfString;console.log("render FormToPrintTTN");var i=function(e,t){var n=0,c=e.length,a=[];for(n=0;n<c;n+=t){var r=e.slice(n,n+t);a.push(r)}return a}(c,11);return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:w.a.unp_string,children:[Object(s.jsx)("span",{className:w.a.unp_1,children:r}),Object(s.jsx)("span",{className:w.a.unp_1,children:l}),Object(s.jsx)("span",{className:w.a.unp_2,children:" "})]}),Object(s.jsx)("div",{className:w.a.date,children:t&&a}),Object(s.jsxs)("div",{className:w.a.auto,children:[Object(s.jsx)("span",{children:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c"}),Object(s.jsx)("span",{children:"______________"}),Object(s.jsx)("span",{children:"\u041f\u0440\u0438\u0446\u0435\u043f"}),Object(s.jsx)("span",{children:"_______________"}),Object(s.jsx)("span",{children:"\u041a \u043f\u0443\u0442\u0435\u0432\u043e\u043c\u0443 \u043b\u0438\u0441\u0442\u0443"}),Object(s.jsx)("span",{children:"_______________"})]}),Object(s.jsxs)("table",{children:[Object(s.jsxs)("tr",{className:w.a.up,children:[Object(s.jsx)("th",{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(s.jsx)("th",{children:"\u0415\u0434\u0435\u043d\u0438\u0446\u0430 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f"}),Object(s.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(s.jsx)("th",{children:"\u0426\u0435\u043d\u0430, \u0440\u0443\u0431."}),Object(s.jsx)("th",{children:"\u0421\u0442\u043e\u0438\u043e\u043c\u043e\u0441\u0442\u044c, \u0440\u0443\u0431."}),Object(s.jsx)("th",{children:"\u041d\u0414\u0421, %"}),Object(s.jsx)("th",{children:"\u0421\u0443\u043c\u043c\u0430 \u041d\u0414\u0421, \u0440\u0443\u0431"}),Object(s.jsx)("th",{children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0441 \u041d\u0414\u0421, \u0440\u0443\u0431."}),Object(s.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0433\u0440\u0443\u0437\u043e\u0432\u044b\u0445 \u043c\u0435\u0441\u0442"}),Object(s.jsx)("th",{children:"\u041c\u0430\u0441\u0441\u0430 \u0433\u0440\u0443\u0437\u0430"}),Object(s.jsx)("th",{children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"})]}),Object(s.jsxs)("tr",{className:w.a.up,children:[Object(s.jsx)("td",{children:"1"}),Object(s.jsx)("td",{children:"2"}),Object(s.jsx)("td",{children:"3"}),Object(s.jsx)("td",{children:"4"}),Object(s.jsx)("td",{children:"5"}),Object(s.jsx)("td",{children:"6"}),Object(s.jsx)("td",{children:"7"}),Object(s.jsx)("td",{children:"8"}),Object(s.jsx)("td",{children:"9"}),Object(s.jsx)("td",{children:"10"}),Object(s.jsx)("td",{children:"11"})]}),i.map((function(e){return Object(s.jsxs)("tr",{children:[" ",e.map((function(e,t){return Object(s.jsxs)("td",{children:[" ",e," "]},t)}))]})})),Object(s.jsx)("tr",{children:n.map((function(e,t){return Object(s.jsxs)("td",{className:null!==e?w.a.table_4:w.a.table_5,children:[" ",e," "]},t)}))})]})]})})),A=a.a.forwardRef((function(e,t){var n=[],a=Object(c.useState)(n),r=Object(h.a)(a,2),l=r[0],i=r[1],j=Object(c.useState)(n),u=Object(h.a)(j,2),o=u[0],d=u[1],b=Object(c.useState)([]),v=Object(h.a)(b,2),O=v[0],m=v[1],k=Object(c.useState)(0),w=Object(h.a)(k,2),A=w[0],y=w[1],S=Object(c.useState)(!1),T=Object(h.a)(S,2),D=T[0],I=T[1],L=f(""),P=f(""),B=f(""),R=f(""),M=f(localStorage.getItem("nameFirm")),U=f(localStorage.getItem("nameFirmOwn")),q=f(localStorage.getItem("address")),E=f(localStorage.getItem("addressOwn")),V=f(localStorage.getItem("bankAccount")),z=f(localStorage.getItem("bankAccountOwn")),J=g(""),Q=g(""),H=g(localStorage.getItem("unp")),G=g(localStorage.getItem("unpOwn")),K=f(""),X=+(+Q.value*+J.value).toFixed(2),Y="\u0411\u0435\u0437 \u041d\u0414\u0421"===K.value?0:+(X*+K.value/100).toFixed(2);Object(c.useEffect)((function(){m(["","","","","","\u0418\u0442\u043e\u0433\u043e:",A<0?0:+A.toFixed(2),null])}),[l,A]);var W=Object(c.useCallback)((function(){R.reset(""),J.reset(""),Q.reset(""),B.reset(""),K.reset(""),I(!1)}),[R.value,J.value,Q.value,B.value]),Z=new Array(7).fill("1").map((function(e,t){return Object(s.jsx)("div",{className:x.a.cell,children:" "},t)})),$=P.value.toString(),ee="".concat($[8]).concat($[9],".").concat($[5]).concat($[6],".").concat($[0]).concat($[1]).concat($[2]).concat($[3]),te=function(e){var t=[["","",""],[["\u043e\u0434\u0438\u043d","\u043e\u0434\u043d\u0430"],["\u0434\u0435\u0441\u044f\u0442\u044c","\u043e\u0434\u0438\u043d\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0442\u0440\u0438\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0447\u0435\u0442\u044b\u0440\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u043f\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0432\u043e\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c","\u0434\u0435\u0432\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c"],"\u0441\u0442\u043e"],[["\u0434\u0432\u0430","\u0434\u0432\u0435"],"\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c","\u0434\u0432\u0435\u0441\u0442\u0438"],["\u0442\u0440\u0438","\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c","\u0442\u0440\u0438\u0441\u0442\u0430"],["\u0447\u0435\u0442\u044b\u0440\u0435","\u0441\u043e\u0440\u043e\u043a","\u0447\u0435\u0442\u044b\u0440\u0435\u0441\u0442\u0430"],["\u043f\u044f\u0442\u044c","\u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442","\u043f\u044f\u0442\u044c\u0441\u043e\u0442"],["\u0448\u0435\u0441\u0442\u044c","\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442","\u0448\u0435\u0441\u0442\u044c\u0441\u043e\u0442"],["\u0441\u0435\u043c\u044c","\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442","\u0441\u0435\u043c\u044c\u0441\u043e\u0442"],["\u0432\u043e\u0441\u0435\u043c\u044c","\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442","\u0432\u043e\u0441\u0435\u043c\u044c\u0441\u043e\u0442"],["\u0434\u0435\u0432\u044f\u0442\u044c","\u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e","\u0434\u0435\u0432\u044f\u0442\u044c\u0441\u043e\u0442"]],n=[["\u043a\u043e\u043f\u0435\u0439\u043a\u0430","\u043a\u043e\u043f\u0435\u0439\u043a\u0438","\u043a\u043e\u043f\u0435\u0435\u043a"],["\u0431\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c"," \u0431\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u044f","\u0431\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0445 \u0440\u0443\u0431\u043b\u0435\u0439"],["\u0442\u044b\u0441\u044f\u0447\u0430","\u0442\u044b\u0441\u044f\u0447\u0438","\u0442\u044b\u0441\u044f\u0447"],["\u043c\u0438\u043b\u043b\u0438\u043e\u043d","\u043c\u0438\u043b\u043b\u0438\u043e\u043d\u0430","\u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432"],["\u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434","\u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u0430","\u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u043e\u0432"]];function c(e,n,c){var a="",r=t[Math.floor(e/100)%10][2];r&&(a+=r+" ");var l=Math.floor(e/10)%10;return(r=t[l][1])instanceof Array?(r=r[e%10])&&(a+=r+" "):(r&&(a+=r+" "),(r=t[e%10][0])instanceof Array&&(r=r[0===c||2===c?1:0]),r&&(a+=r)),a+" "+function(e,t){return t[e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]}(e,n[c])+(c>1?" ":"")}for(var a=Math.floor(e+.005),r=Math.floor(100*(e-a)+.5),l="",i=1;a>.9999;a/=1e3)l=c(Math.floor(a%1e3),n,i)+l,i++;return r>0&&(l=l+" "+c(r,n,0)),l}(O[6]).toUpperCase();return Object(s.jsxs)("div",{children:[Object(s.jsx)(p,{bankAccount:V.value,changeBankAccount:Object(c.useCallback)((function(e){return V.onChange(e)}),[V.value]),nameFirm:M.value,address:q.value,changeAddress:Object(c.useCallback)((function(e){return q.onChange(e)}),[q.value]),changeUnp:Object(c.useCallback)((function(e){return H.onChange(e)}),[H.value]),changeNameFirm:Object(c.useCallback)((function(e){return M.onChange(e)}),[M.value]),unp:H.value,val:"customer"}),Object(s.jsx)(p,{bankAccount:z.value,changeBankAccount:Object(c.useCallback)((function(e){return z.onChange(e)}),[z.value]),nameFirm:U.value,address:E.value,changeAddress:Object(c.useCallback)((function(e){return E.onChange(e)}),[E.value]),changeUnp:Object(c.useCallback)((function(e){return G.onChange(e)}),[G.value]),changeNameFirm:Object(c.useCallback)((function(e){return U.onChange(e)}),[U.value]),unp:G.value,val:"executor"}),Object(s.jsx)(N,{docNumber:L.value,changeDocNumber:Object(c.useCallback)((function(e){return L.onChange(e)}),[L.value]),changeService:Object(c.useCallback)((function(e){return B.onChange(e)}),[B.value]),changeUnit:Object(c.useCallback)((function(e){return R.onChange(e)}),[R.value]),changeQuantity:Object(c.useCallback)((function(e){return Q.onChange(e)}),[Q.value]),changePrice:Object(c.useCallback)((function(e){return J.onChange(e)}),[J.value]),changeVat:Object(c.useCallback)((function(e){return K.onChange(e)}),[K.value]),changeDocDate:Object(c.useCallback)((function(e){return P.onChange(e)}),[P.value]),clearButton:W,service:B.value,docDate:P.value,vat:K.value,price:J.value,quantity:Q.value,unit:R.value}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){if(I(!0),""!==B.value&&""!==J.value&&""!==Q.value){var e=Object(_.a)(l);i([].concat(Object(_.a)(e),[B.value,R.value,Q.value,J.value,X,K.value,+(+Y+ +X).toFixed(2),null])),d([].concat(Object(_.a)(o),[B.value,R.value,Q.value,J.value,X,K.value,Y,+(+Y+ +X).toFixed(2),null,null,null])),y((function(e){return+e.toFixed(2)+ +Y.toFixed(2)+ +X.toFixed(2)})),I(!1)}},children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443"}),Object(s.jsx)("button",{onClick:function(){if(l.length>=8){i(Object(_.a)(l).filter((function(e,t){return t<l.length-8}))),d(Object(_.a)(o).filter((function(e,t){return t<o.length-11})));var e=l.filter((function(e,t){return t>=l.length-8}));y((function(t){return+t.toFixed(2)-e[6]}))}},children:" \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443"})]}),D&&Object(s.jsx)("p",{style:{color:"red"},children:'"\u041f\u043e\u043b\u044f \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u043a\u0440\u0430\u0441\u043d\u044b\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f!!!"'}),Object(s.jsx)("style",{type:"text/css",media:"print",children:"@media print { body { -webkit-print-color-adjust: exact; } @page { size: A4; margin-left: 15mm !important }}"}),Object(s.jsxs)("div",{ref:t,children:["ttn_form"!==e.val&&Object(s.jsx)(C,{nameOfForm:e.val,docNumber:L.value,docDate:P.value,dateStr:ee,raw:l,vat:K.value,endRaw:O,arrDiv:Z,totalOfString:te,address:q.value,addressOwn:E.value,bankAccount:V.value,bankAccountOwn:z.value,nameFirm:M.value,nameFirmOwn:U.value,unp:H.value,unpOwn:G.value}),"ttn_form"===e.val&&Object(s.jsx)(F,{rawTTN:o,docDate:P.value,dateStr:ee,raw:l,vat:K.value,endRaw:O,arrDiv:Z,totalOfString:te,address:q.value,addressOwn:E.value,bankAccount:V.value,bankAccountOwn:z.value,nameFirm:M.value,nameFirmOwn:U.value,unp:H.value,unpOwn:G.value})]})]})})),y=n(15),S=n.n(y),T=function(e){var t=e.form,n=Object(c.useRef)(null),a=Object(v.useReactToPrint)({content:function(){return n.current}});return Object(s.jsxs)("div",{className:S.a.form,children:[Object(s.jsx)("button",{style:{margin:"20px 20px",width:"150px",height:"70px",backgroundColor:"yellow"},onClick:a,children:"\u0420\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0438\u043b\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u0444\u0430\u0439\u043b"}),Object(s.jsxs)("div",{children:["act_form"===t&&Object(s.jsx)(A,{ref:n,val:"act_form"}),"invoice_form"===t&&Object(s.jsx)(A,{ref:n,val:"invoice_form"}),"ttn_form"===t&&Object(s.jsx)(A,{ref:n,val:"ttn_form"})]})]})};var D=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsxs)(i.c,{children:[Object(s.jsx)(i.a,{path:"home",element:Object(s.jsx)(j,{})}),Object(s.jsx)(i.a,{path:"act_form",element:Object(s.jsx)(T,{form:"act_form"})}),Object(s.jsx)(i.a,{path:"invoice_form",element:Object(s.jsx)(T,{form:"invoice_form"})}),Object(s.jsx)(i.a,{path:"ttn_form",element:Object(s.jsx)(T,{form:"ttn_form"})})]})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),r(e),l(e)}))};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d.a,{children:Object(s.jsx)(D,{})})}),document.getElementById("root")),I()}],[[24,1,2]]]);
//# sourceMappingURL=main.bc4286e4.chunk.js.map