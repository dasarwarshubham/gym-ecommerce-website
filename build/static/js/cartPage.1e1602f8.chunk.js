"use strict";(self.webpackChunkfitflex=self.webpackChunkfitflex||[]).push([[63],{849:function(e,t,n){var i=n(9140),a=n(9743),r=n(2677),s=n(4026),c=n(184);t.Z=function(e){var t=e.item,n=e.showQtyHandler;return(0,c.jsx)(i.Z,{className:"mb-3",children:(0,c.jsx)(i.Z.Body,{children:(0,c.jsxs)(a.Z,{className:"g-2",children:[(0,c.jsx)(r.Z,{xs:4,md:3,lg:2,xl:2,children:(0,c.jsx)("img",{src:t.product.image,alt:t.product.title,className:"img-fluid w-100"})}),(0,c.jsx)(r.Z,{xs:8,md:9,lg:10,xl:10,className:"px-3",children:(0,c.jsxs)(a.Z,{className:"h-100 ",children:[(0,c.jsxs)(r.Z,{xs:12,lg:7,xl:8,children:[(0,c.jsx)("h5",{children:t.product.title}),(0,c.jsxs)("p",{children:["Price: $",t.product.price]}),n?(0,c.jsx)(s.Z,{item:t}):(0,c.jsxs)("p",{children:["Quantity: ",t.quantity]})]}),(0,c.jsx)(r.Z,{xs:12,lg:5,xl:4,className:"text-lg-end",children:(0,c.jsxs)("p",{children:["Subtotal: $",t.total_price.toFixed(2)]})})]})})]})})})}},4026:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(9439),a=n(2791),r=n(9434),s=n(6355),c=n(6444),o=n(3360),l=n(4292),d=(0,c.ZP)(o.Z).attrs((function(e){return{variant:e.trash?"outline-danger":"outline-primary"}})).withConfig({displayName:"cartCard__QuantityBtn",componentId:"sc-1ql729n-0"})(["border-radius:0;text-align:center;border-color:",";width:40px;"],(function(e){return e.trash?"none":"#111111"})),m=(0,c.ZP)(l.Z).withConfig({displayName:"cartCard__QuantityCount",componentId:"sc-1ql729n-1"})(["border-radius:0;text-align:center;border-color:#111111;width:40px;border-right:0;border-left:0;"]),x=n(5792),u=n(3563),p=n(184),h=function(e){var t=e.item,n=e.removeTrash,c=(0,a.useState)(null),o=(0,i.Z)(c,2),l=o[0],h=o[1],f=(0,a.useState)(!1),j=(0,i.Z)(f,2),y=j[0],v=j[1],Z=(0,r.I0)(),g=(0,r.v9)(u.OL);(0,a.useEffect)((function(){setTimeout((function(){h(null),v(!1)}),3e3)}),[l]);var N=function(){Z((0,x.wz)(t.id)).then((function(){Z((0,x.x7)())}))},b=function(e){var n=t.quantity+e;n>5?(h("Max quantity for this item is reached."),v(!0)):n>0?Z((0,x.$R)({product_id:t.id,quantity:n})).unwrap().then((function(e){Z((0,x.x7)())})).catch((function(e){h(null===e||void 0===e?void 0:e.message),v(!0)})):N()};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"d-flex align-items-center my-4",children:[(0,p.jsx)("span",{children:"Quantity"}),"\xa0\xa0",(0,p.jsx)(d,{title:"decrease quantity",onClick:function(){return b(-1)},disabled:g,children:"-"}),(0,p.jsx)(m,{type:"number",min:"1",max:"5",value:t.quantity,readOnly:!0,"aria-label":"item quantity"}),(0,p.jsx)(d,{title:"increase quantity",onClick:function(){return b(1)},disabled:g,children:"+"}),!n&&(0,p.jsx)(d,{title:"remove item from cart",trash:"true",onClick:N,disabled:g,className:"ms-3",children:(0,p.jsx)(s.Xm5,{})})]}),y&&(0,p.jsx)("span",{className:"text-danger",children:l})]})}},4834:function(e,t,n){n.r(t);n(2791);var i=n(9434),a=n(1087),r=n(4270),s=n(7022),c=n(9743),o=n(2677),l=n(4849),d=n(3360),m=n(9140),x=n(849),u=n(3563),p=n(5792),h=n(8155),f=n(184);t.default=function(){var e=(0,i.I0)(),t=(0,i.v9)(u.OL),n=(0,i.v9)(u.rL),j=(0,i.v9)(u.KY),y=(0,i.v9)(u.zh);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(r.q,{children:[(0,f.jsx)("link",{rel:"canonical",href:"https://fitflex.site/cart"}),(0,f.jsx)("meta",{name:"description",content:"View and manage items in your shopping cart on Fitflex. Shop for gym equipment and fitness gear. Your fitness journey starts here."}),(0,f.jsx)("meta",{name:"keywords",content:"Shopping Cart, Gym Equipment, Fitflex Cart, Fitness Gear"}),(0,f.jsx)("meta",{property:"og:title",content:"Your Shopping Cart | Fitflex - Gym Equipment Store"}),(0,f.jsx)("meta",{property:"og:description",content:"View and manage items in your shopping cart on Fitflex. Shop for gym equipment and fitness gear. Your fitness journey starts here."}),(0,f.jsx)("meta",{property:"og:url",content:"https://fitflex.site/cart"}),(0,f.jsx)("meta",{name:"twitter:title",content:"Your Shopping Cart | Fitflex - Gym Equipment Store"}),(0,f.jsx)("meta",{name:"twitter:description",content:"View and manage items in your shopping cart on Fitflex. Shop for gym equipment and fitness gear. Your fitness journey starts here."}),(0,f.jsx)("title",{children:"Your Shopping Cart | Fitflex - Gym Equipment Store"})]}),(0,f.jsx)(s.Z,{className:"my-5 py-5",style:{minHeight:"65vh"},children:(0,f.jsxs)(c.Z,{className:"g-4 mx-0",children:[(0,f.jsx)(o.Z,{xs:12,children:(0,f.jsxs)("h2",{className:"d-flex align-items-center ".concat(0===n&&"justify-content-center"),children:["Your Cart",t&&(0,f.jsx)(l.Z,{className:"ms-2",animation:"grow",children:(0,f.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),y&&(0,f.jsx)("span",{className:"text-danger",children:y})]})}),0===n?(0,f.jsxs)(o.Z,{xs:12,className:"text-center",children:[(0,f.jsx)("p",{children:"Your cart is empty."}),(0,f.jsx)(a.rU,{to:h.Sd,className:"btn btn-primary",children:"Continue Shopping"})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o.Z,{md:8,children:[j.items.map((function(e){return(0,f.jsx)(x.Z,{item:e,showQtyHandler:!0},e.id)})),(0,f.jsx)("div",{className:"d-flex d-sm-block",children:(0,f.jsx)(d.Z,{className:"mx-auto",onClick:function(){e((0,p.Pz)()).then((function(){e((0,p.x7)())}))},variant:"danger",disabled:t,children:"Clear Cart"})})]}),(0,f.jsx)(o.Z,{children:(0,f.jsxs)(m.Z,{children:[(0,f.jsx)(m.Z.Header,{children:(0,f.jsx)(m.Z.Title,{children:"Order Summary"})}),(0,f.jsxs)(m.Z.Body,{children:[(0,f.jsxs)(m.Z.Text,{children:["Total Items: ",n]}),(0,f.jsxs)(m.Z.Text,{children:["Total Amount: $",j.cart_total_price.toFixed(2)]})]}),(0,f.jsx)(m.Z.Footer,{className:"d-grid",children:(0,f.jsx)(d.Z,{as:a.rU,to:h.o0,variant:"primary",children:"Proceed to Checkout"})})]})})]})]})})]})}},3360:function(e,t,n){var i=n(1413),a=n(9439),r=n(5987),s=n(1694),c=n.n(s),o=n(2791),l=n(5341),d=n(162),m=n(184),x=["as","bsPrefix","variant","size","active","disabled","className"],u=o.forwardRef((function(e,t){var n=e.as,s=e.bsPrefix,o=e.variant,u=void 0===o?"primary":o,p=e.size,h=e.active,f=void 0!==h&&h,j=e.disabled,y=void 0!==j&&j,v=e.className,Z=(0,r.Z)(e,x),g=(0,d.vE)(s,"btn"),N=(0,l.FT)((0,i.Z)({tagName:n,disabled:y},Z)),b=(0,a.Z)(N,2),C=b[0],w=b[1].tagName;return(0,m.jsx)(w,(0,i.Z)((0,i.Z)((0,i.Z)({},C),Z),{},{ref:t,disabled:y,className:c()(v,g,f&&"active",u&&"".concat(g,"-").concat(u),p&&"".concat(g,"-").concat(p),Z.href&&y&&"disabled")}))}));u.displayName="Button",t.Z=u},783:function(e,t,n){var i=n(1413),a=n(5987),r=n(1694),s=n.n(r),c=n(2791),o=n(2007),l=n.n(o),d=n(184),m=["as","className","type","tooltip"],x={type:l().string,tooltip:l().bool,as:l().elementType},u=c.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,c=e.className,o=e.type,l=void 0===o?"valid":o,x=e.tooltip,u=void 0!==x&&x,p=(0,a.Z)(e,m);return(0,d.jsx)(r,(0,i.Z)((0,i.Z)({},p),{},{ref:t,className:s()(c,"".concat(l,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=x,t.Z=u},4934:function(e,t,n){var i=n(2791).createContext({});t.Z=i},4292:function(e,t,n){var i=n(1413),a=n(4942),r=n(5987),s=n(1694),c=n.n(s),o=n(2791),l=(n(2391),n(783)),d=n(4934),m=n(162),x=n(184),u=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],p=o.forwardRef((function(e,t){var n,s,l=e.bsPrefix,p=e.type,h=e.size,f=e.htmlSize,j=e.id,y=e.className,v=e.isValid,Z=void 0!==v&&v,g=e.isInvalid,N=void 0!==g&&g,b=e.plaintext,C=e.readOnly,w=e.as,q=void 0===w?"input":w,F=(0,r.Z)(e,u),S=(0,o.useContext)(d.Z).controlId;(l=(0,m.vE)(l,"form-control"),b)?n=(0,a.Z)({},"".concat(l,"-plaintext"),!0):(s={},(0,a.Z)(s,l,!0),(0,a.Z)(s,"".concat(l,"-").concat(h),h),n=s);return(0,x.jsx)(q,(0,i.Z)((0,i.Z)({},F),{},{type:p,size:f,ref:t,readOnly:C,id:j||S,className:c()(y,n,Z&&"is-valid",N&&"is-invalid","color"===p&&"".concat(l,"-color"))}))}));p.displayName="FormControl",t.Z=Object.assign(p,{Feedback:l.Z})},2391:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=cartPage.1e1602f8.chunk.js.map