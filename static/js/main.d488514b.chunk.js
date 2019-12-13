(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{18:function(e,a,t){e.exports=t(31)},23:function(e,a,t){},24:function(e,a,t){e.exports=t.p+"static/media/logo.25bf045c.svg"},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),m=(t(23),t(7)),o=(t(24),t(25),t(2)),i=t(6);function s(){var e=l.a.useState(""),a=Object(m.a)(e,2),t=a[0],n=a[1],r=l.a.useState(""),c=Object(m.a)(r,2),i=c[0],s=c[1],p=l.a.useState(""),u=Object(m.a)(p,2),E=u[0],d=u[1],h=l.a.useState(""),g=Object(m.a)(h,2),b=g[0],f=g[1],y=l.a.useState(""),N=Object(m.a)(y,2),z=N[0],v=N[1],k=l.a.useState(0),x=Object(m.a)(k,2),C=(x[0],x[1]),S=l.a.useState(0),T=Object(m.a)(S,2),L=(T[0],T[1]);function D(e){C(e.currentTarget.value)}function P(e){L(e.currentTarget.value)}document.querySelectorAll('input[type="checkbox"]:checked').length;return l.a.createElement("div",{className:"header"},l.a.createElement("nav",null,l.a.createElement(o.b,{to:"/"},"Home"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/menu"},"Menu"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/about"},"About"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/contact"},"Contact")),l.a.createElement("h2",{className:"pageTitle"},l.a.createElement("span",{className:"firstLetter"},"W"),"elcome to Pretty Popular Pizza Place!"),l.a.createElement("h3",{className:"formTitle"},l.a.createElement("span",{className:"firstLetter"},"W"),"ant to order a pizza? Take a look at our menu and give us a call! Or fill out the form below and we will send you an email to confirm your order."),l.a.createElement("form",null,l.a.createElement("p",{id:"fNameClass"},l.a.createElement("label",{for:"fName"},"First Name:"),l.a.createElement("input",{type:"text",className:"fNameID",id:"fNameID",placeholder:"First Name",onChange:function(e){n(e.currentTarget.value)},value:t}),null==t.match(/[a-zA-Z]/)&&l.a.createElement("strong",null,l.a.createElement("span",{className:"errorMessage"}," -- Error, invalid first name entered"))),l.a.createElement("p",{id:"lNameClass"},l.a.createElement("label",{for:"lName"},"Last Name:"),l.a.createElement("input",{type:"text",className:"lNameID",id:"lNameID",placeholder:"Last Name",onChange:function(e){s(e.currentTarget.value)},value:i}),null==i.match(/[a-zA-Z]/)&&l.a.createElement("strong",null,l.a.createElement("span",{className:"errorMessage"}," -- Error, invalid last name entered"))),l.a.createElement("p",{id:"addressClass"},l.a.createElement("label",{for:"addressID"},"Delivery Address:"),l.a.createElement("input",{type:"text",className:"addressID",id:"addressID",placeholder:"Address",onChange:function(e){d(e.currentTarget.value)},value:E}),""==E&&l.a.createElement("strong",null,l.a.createElement("span",{className:"errorMessage"}," -- Error, no address entered"))),l.a.createElement("p",{id:"phoneClass"},l.a.createElement("label",{for:"phoneID"},"Phone Number:"),l.a.createElement("input",{type:"text",className:"phoneID",id:"phoneID",placeholder:"Phone",onChange:function(e){f(e.currentTarget.value)},value:b}),null==b.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)&&l.a.createElement("strong",null,l.a.createElement("span",{className:"errorMessage"}," -- Error, invalid phone number"))),l.a.createElement("p",{id:"emailClass"},l.a.createElement("label",{for:"emailID"},"Email Address:"),l.a.createElement("input",{type:"text",className:"emailID",id:"emailID",placeholder:"Email",onChange:function(e){v(e.currentTarget.value)},value:z}),null==z.match(/\S+@\S+\.\S+/)&&l.a.createElement("strong",null,l.a.createElement("span",{className:"errorMessage"}," -- Error, invalid email"))),l.a.createElement("p",{id:"sizeClass"},l.a.createElement("label",{for:"pizzaSize"},l.a.createElement("span",{className:"firstLetter"},"S"),"elect your pizza size")),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"pizzaSize",id:"sizeS",checked:7,onChange:P}),' Small (9") ...... $7.00'),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"pizzaSize",id:"sizeM",checked:9,onChange:P}),' Medium ("12") ...... $9.00'),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"pizzaSize",id:"sizeL",checked:11,onChange:P}),' Large (15") ...... $11.00'),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"pizzaSize",id:"sizeXL",checked:13,onChange:P}),' X-Large (18") ...... $13.00'),l.a.createElement("p",{id:"doughClass"},l.a.createElement("label",{for:"doughType"},l.a.createElement("span",{className:"firstLetter"},"S"),"elect the type of dough you want")),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"doughType",id:"dough1",checked:0,onChange:D})," Original"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"doughType",id:"dough2",checked:0,onChange:D})," Whole Wheat"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"doughType",id:"dough3",checked:0,onChange:D})," Rye"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"doughType",id:"dough4",checked:1,onChange:D})," Gluten Free ...... $1.00 Extra"),l.a.createElement("div",{id:"toppingClass"},l.a.createElement("label",{for:"toppingsList"},l.a.createElement("span",{className:"firstLetter"},"S"),"elect your toppings that you want ($0.50 each)"),"Pepperoni",l.a.createElement("input",{type:"checkbox",name:"topping1",id:"topping1"}),"\xa0\xa0\xa0 Extra Mozzerella Cheese",l.a.createElement("input",{type:"checkbox",name:"topping2",id:"topping2"}),"\xa0\xa0\xa0 Cheddar Cheese",l.a.createElement("input",{type:"checkbox",name:"topping3",id:"topping3"}),"\xa0\xa0\xa0 Feta Cheese",l.a.createElement("input",{type:"checkbox",name:"topping4",id:"topping4"}),"\xa0\xa0\xa0 Onions",l.a.createElement("input",{type:"checkbox",name:"topping5",id:"topping5"}),"\xa0\xa0\xa0 Sausages",l.a.createElement("input",{type:"checkbox",name:"topping6",id:"topping6"}),"\xa0\xa0\xa0 Ground Beef",l.a.createElement("input",{type:"checkbox",name:"topping7",id:"topping7"}),"\xa0\xa0\xa0 Bacon",l.a.createElement("input",{type:"checkbox",name:"topping8",id:"topping8"}),"\xa0\xa0\xa0 Peppers",l.a.createElement("input",{type:"checkbox",name:"topping9",id:"topping9"}),"\xa0\xa0\xa0 Mushrooms",l.a.createElement("input",{type:"checkbox",name:"topping10",id:"topping10"}),"\xa0\xa0\xa0 Olives",l.a.createElement("input",{type:"checkbox",name:"topping11",id:"topping11"}),"\xa0\xa0\xa0 Pineapples",l.a.createElement("input",{type:"checkbox",name:"topping12",id:"topping12"}),"\xa0\xa0\xa0 Ham",l.a.createElement("input",{type:"checkbox",name:"topping13",id:"topping13"}),"\xa0\xa0\xa0 Chicken",l.a.createElement("input",{type:"checkbox",name:"topping14",id:"topping14"}),"\xa0\xa0\xa0 Basil",l.a.createElement("input",{type:"checkbox",name:"topping15",id:"topping15"}),"\xa0\xa0\xa0 Kale",l.a.createElement("input",{type:"checkbox",name:"topping16",id:"topping16"}),"\xa0\xa0\xa0 Anchovies",l.a.createElement("input",{type:"checkbox",name:"topping17",id:"topping17"}),"\xa0\xa0\xa0 Tomatoes",l.a.createElement("input",{type:"checkbox",name:"topping18",id:"topping18"})),l.a.createElement("p",null,l.a.createElement("label",null,"Subtotal: "),l.a.createElement("input",{type:"text",name:"tSubtotal",id:"tSubtotal",readOnly:"true",value:"$"+Number(14).toFixed(2)})),l.a.createElement("p",null,l.a.createElement("label",null,"GST: "),l.a.createElement("input",{type:"text",name:"tGST",id:"tGST",readOnly:"true"})),l.a.createElement("p",null,l.a.createElement("label",null,"PST: "),l.a.createElement("input",{type:"text",name:"tPST",id:"tPST",readOnly:"true"})),l.a.createElement("p",null,l.a.createElement("label",null,"Grand Total: "),l.a.createElement("input",{type:"text",name:"tTotal",id:"tTtoal",readOnly:"true"}))))}function p(){return l.a.createElement("div",{className:"header"},l.a.createElement("nav",null,l.a.createElement(o.b,{to:"/"},"Home"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/menu"},"Menu"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/about"},"About"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/contact"},"Contact")),l.a.createElement("h2",{className:"pageTitle"},l.a.createElement("span",{className:"firstLetter"},"M"),"enu"),l.a.createElement("h3",{className:"menuDesc"},l.a.createElement("span",{className:"firstLetter"},"N"),"ote: All Pizzas come with our made from scratch tomato sauce and mozzerella cheese."),l.a.createElement("h3",{className:"menuTitle"},l.a.createElement("span",{className:"firstLetter"},"S"),"ize"),l.a.createElement("p",{className:"menuDesc"},l.a.createElement("span",{className:"firstLetter"},"W"),"e have a variety of pizzas sizes, from feeding 1 person to feeding a who group!"),l.a.createElement("ul",null,l.a.createElement("li",null,'Small - 9" ..... ($7.00)'),l.a.createElement("li",null,'Medium - 12" ..... ($9.00)'),l.a.createElement("li",null,'Large - 15" ..... ($11.00)'),l.a.createElement("li",null,'Extra Large - 18" ..... ($13.00)')),l.a.createElement("h3",{className:"menuTitle"},l.a.createElement("span",{className:"firstLetter"},"D"),"ough Types"),l.a.createElement("p",{className:"menuDesc"},l.a.createElement("span",{className:"firstLetter"},"O"),"ur dough is made right here, hot and fresh, just for you!"),l.a.createElement("ul",null,l.a.createElement("li",null,"Original"),l.a.createElement("li",null,"Whole Wheat"),l.a.createElement("li",null,"Rye"),l.a.createElement("li",null,"Gluten Free ...... $1.00 Extra")),l.a.createElement("h3",{className:"menuTitle"},l.a.createElement("span",{className:"firstLetter"},"T"),"oppings"),l.a.createElement("p",{className:"menuDesc"},l.a.createElement("span",{className:"firstLetter"},"H"),"eaps of tasty toppings to choose from to customize your perfect dream pizza! All toppings are an extra $0.50 each."),l.a.createElement("ul",{className:"toppings"},l.a.createElement("li",null,"Pepperoni"),l.a.createElement("li",null,"Extra Mozzerella Cheese"),l.a.createElement("li",null,"Cheddar Cheese"),l.a.createElement("li",null,"Feta Cheese"),l.a.createElement("li",null,"Onions"),l.a.createElement("li",null,"Sausage"),l.a.createElement("li",null,"Ground Beef"),l.a.createElement("li",null,"Bacon"),l.a.createElement("li",null,"Peppers"),l.a.createElement("li",null,"Mushrooms"),l.a.createElement("li",null,"Olives"),l.a.createElement("li",null,"Pineapple"),l.a.createElement("li",null,"Ham"),l.a.createElement("li",null,"Chicken"),l.a.createElement("li",null,"Basil"),l.a.createElement("li",null,"Kale"),l.a.createElement("li",null,"Anchovies"),l.a.createElement("li",null,"Tomatoes")))}function u(){return l.a.createElement("div",{className:"header"},l.a.createElement("nav",null,l.a.createElement(o.b,{to:"/"},"Home"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/menu"},"Menu"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/about"},"About"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/contact"},"Contact")),l.a.createElement("h2",{className:"pageTitle"},l.a.createElement("span",{className:"firstLetter"},"A"),"bout"))}function E(){return l.a.createElement("div",{className:"header"},l.a.createElement("nav",null,l.a.createElement(o.b,{to:"/"},"Home"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/menu"},"Menu"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/about"},"About"),"\xa0|\xa0",l.a.createElement(o.b,{to:"/contact"},"Contact")),l.a.createElement("h2",{className:"pageTitle"},l.a.createElement("span",{className:"firstLetter"},"C"),"ontact Us"),l.a.createElement("div",{className:"contactInfo"},l.a.createElement("p",null,l.a.createElement("span",{className:"symbol"},"\u260e")," - Phone: (306) 123-4567"),l.a.createElement("p",null,l.a.createElement("span",{className:"symbol"},"\u2709")," - Email: pp-pizzaplace-questions@mail.com"),l.a.createElement("p",null,l.a.createElement("span",{className:"symbol"},"\ud83c\udfe0")," - Address: 123 Fake St. Saskatoon, SK")))}function d(){return l.a.createElement("div",{className:"errorDiv"},l.a.createElement("h2",{className:"error"}," Oh no! - 404 Error"),l.a.createElement("h3",{className:"error"},"File or directory not found or doesn't exist!"),l.a.createElement("h3",{className:"error"},"Something seems to have gone wrong. ",l.a.createElement(o.b,{to:"/",className:"errorLink"},"Click here")," to return back to the main page!"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement((function(){return l.a.createElement(o.a,{basename:""},l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement("span",{className:"heading"},"Pretty")," ",l.a.createElement("span",{className:"heading"},"Popular "),l.a.createElement("span",{className:"heading"},"Pizza")," ",l.a.createElement("span",{className:"heading"},"Place"))),l.a.createElement("div",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(s,null)),l.a.createElement(i.a,{path:"/menu"},l.a.createElement(p,null)),l.a.createElement(i.a,{path:"/about"},l.a.createElement(u,null)),l.a.createElement(i.a,{path:"/contact"},l.a.createElement(E,null)),l.a.createElement(i.a,{path:"/*"},l.a.createElement(d,null)))),l.a.createElement("footer",null,"\xa9Isaak Dyck. Code made for the ComIT React course!"))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d488514b.chunk.js.map