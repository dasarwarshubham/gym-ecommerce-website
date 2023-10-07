"use strict";(self.webpackChunkfitflex=self.webpackChunkfitflex||[]).push([[97],{849:function(e,t,i){var n=i(9140),r=i(9743),s=i(2677),a=i(4026),l=i(184);t.Z=function(e){var t=e.item,i=e.showQtyHandler;return(0,l.jsx)(n.Z,{className:"mb-3",children:(0,l.jsx)(n.Z.Body,{children:(0,l.jsxs)(r.Z,{className:"g-2",children:[(0,l.jsx)(s.Z,{xs:4,md:3,lg:2,xl:2,children:(0,l.jsx)("img",{src:t.product.image,alt:t.product.title,className:"img-fluid w-100"})}),(0,l.jsx)(s.Z,{xs:8,md:9,lg:10,xl:10,className:"px-3",children:(0,l.jsxs)(r.Z,{className:"h-100 ",children:[(0,l.jsxs)(s.Z,{xs:12,lg:7,xl:8,children:[(0,l.jsx)("h5",{children:t.product.title}),(0,l.jsxs)("p",{children:["Price: $",t.product.price]}),i?(0,l.jsx)(a.Z,{item:t}):(0,l.jsxs)("p",{children:["Quantity: ",t.quantity]})]}),(0,l.jsx)(s.Z,{xs:12,lg:5,xl:4,className:"text-lg-end",children:(0,l.jsxs)("p",{children:["Subtotal: $",t.total_price.toFixed(2)]})})]})})]})})})}},4026:function(e,t,i){i.d(t,{Z:function(){return h}});var n=i(9439),r=i(2791),s=i(9434),a=i(6355),l=i(6444),c=i(3360),o=i(4292),d=(0,l.ZP)(c.Z).attrs((function(e){return{variant:e.trash?"outline-danger":"outline-primary"}})).withConfig({displayName:"cartCard__QuantityBtn",componentId:"sc-1ql729n-0"})(["border-radius:0;text-align:center;border-color:",";width:40px;"],(function(e){return e.trash?"none":"#111111"})),m=(0,l.ZP)(o.Z).withConfig({displayName:"cartCard__QuantityCount",componentId:"sc-1ql729n-1"})(["border-radius:0;text-align:center;border-color:#111111;width:40px;border-right:0;border-left:0;"]),x=i(5792),u=i(3563),p=i(184),h=function(e){var t=e.item,i=e.removeTrash,l=(0,r.useState)(null),c=(0,n.Z)(l,2),o=c[0],h=c[1],f=(0,r.useState)(!1),v=(0,n.Z)(f,2),j=v[0],y=v[1],Z=(0,s.I0)(),g=(0,s.v9)(u.OL);(0,r.useEffect)((function(){setTimeout((function(){h(null),y(!1)}),3e3)}),[o]);var N=function(){Z((0,x.wz)(t.id)).then((function(){Z((0,x.x7)())}))},b=function(e){var i=t.quantity+e;i>5?(h("Max quantity for this item is reached."),y(!0)):i>0?Z((0,x.$R)({product_id:t.id,quantity:i})).unwrap().then((function(e){Z((0,x.x7)())})).catch((function(e){h(null===e||void 0===e?void 0:e.message),y(!0)})):N()};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"d-flex align-items-center my-4",children:[(0,p.jsx)("span",{children:"Quantity"}),"\xa0\xa0",(0,p.jsx)(d,{title:"decrease quantity",onClick:function(){return b(-1)},disabled:g,children:"-"}),(0,p.jsx)(m,{type:"number",min:"1",max:"5",value:t.quantity,readOnly:!0,"aria-label":"item quantity"}),(0,p.jsx)(d,{title:"increase quantity",onClick:function(){return b(1)},disabled:g,children:"+"}),!i&&(0,p.jsx)(d,{title:"remove item from cart",trash:"true",onClick:N,disabled:g,className:"ms-3",children:(0,p.jsx)(a.Xm5,{})})]}),j&&(0,p.jsx)("span",{className:"text-danger",children:o})]})}},7156:function(e,t,i){i.r(t);i(2791);var n=i(9434),r=i(1087),s=i(4270),a=i(7022),l=i(9743),c=i(2677),o=i(4849),d=i(9140),m=i(3360),x=i(6856),u=i(3563),p=i(849),h=i(8155),f=i(184);t.default=function(){var e=(0,n.v9)(u.OL),t=(0,n.v9)(u.KY),i=(0,n.v9)(u.rL),v=(0,n.v9)(u.zh),j=(0,n.v9)(u.iK),y=null===t||void 0===t?void 0:t.items.reduce((function(e,t){return e+t.product.price*t.quantity}),0);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(s.q,{children:[(0,f.jsx)("link",{rel:"canonical",href:"https://fitflex.site/review"}),(0,f.jsx)("meta",{name:"description",content:"Review and confirm your gym equipment selections. Ensure your fitness gear order is accurate before proceeding to payment."}),(0,f.jsx)("meta",{name:"keywords",content:"Review Gym Equipment, Confirm Order, Gym Gear Selection"}),(0,f.jsx)("meta",{property:"og:title",content:"Cart Review | Fitflex - Confirm Your Gym Equipment Selections"}),(0,f.jsx)("meta",{property:"og:description",content:"Review and confirm your gym equipment selections. Ensure your fitness gear order is accurate before proceeding to payment."}),(0,f.jsx)("meta",{property:"og:url",content:"https://fitflex.site/review"}),(0,f.jsx)("meta",{name:"twitter:title",content:"Cart Review | Fitflex - Confirm Your Gym Equipment Selections"}),(0,f.jsx)("meta",{name:"twitter:description",content:"Review and confirm your gym equipment selections. Ensure your fitness gear order is accurate before proceeding to payment."}),(0,f.jsx)("title",{children:"Cart Review | Fitflex - Confirm Your Gym Equipment Selections"})]}),(0,f.jsx)(a.Z,{className:"my-5 py-5",style:{minHeight:"65vh"},children:(0,f.jsxs)(l.Z,{className:"g-4 mx-0",children:[(0,f.jsx)(c.Z,{xs:12,children:(0,f.jsxs)("h2",{className:"d-flex align-items-center ".concat(0===i&&"justify-content-center"),children:["Review Your Order",e&&(0,f.jsx)(o.Z,{className:"ms-2",animation:"grow",children:(0,f.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),v&&(0,f.jsx)("span",{className:"text-danger",children:v})]})}),0===i?(0,f.jsxs)(c.Z,{xs:12,className:"text-center",children:[(0,f.jsx)("p",{children:"Your cart is empty."}),(0,f.jsx)(r.rU,{to:h.Sd,className:"btn btn-primary",children:"Continue Shopping"})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{xs:{span:12,order:1},lg:{span:8,order:1},children:(0,f.jsxs)(d.Z,{children:[(0,f.jsxs)(d.Z.Header,{className:"d-flex justify-content-between align-items-center",children:[(0,f.jsx)(d.Z.Title,{className:"mb-0",children:"Cart Items"}),(0,f.jsx)(m.Z,{as:r.rU,to:h.$L,variant:"primary",children:(0,f.jsx)(x.zmo,{})})]}),(0,f.jsx)(d.Z.Body,{children:null===t||void 0===t?void 0:t.items.map((function(e){return(0,f.jsx)(p.Z,{item:e},e.product.id)}))})]})}),(0,f.jsx)(c.Z,{xs:{span:12,order:2},lg:{span:8,order:3},children:(0,f.jsxs)(d.Z,{children:[(0,f.jsxs)(d.Z.Header,{className:"d-flex justify-content-between align-items-center",children:[(0,f.jsx)(d.Z.Title,{className:"mb-0",children:"Shipping Address"}),(0,f.jsx)(m.Z,{as:r.rU,to:h.o0,variant:"primary",children:(0,f.jsx)(x.zmo,{})})]}),(0,f.jsx)(d.Z.Body,{children:j?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z.Title,{children:null===j||void 0===j?void 0:j.full_name}),(0,f.jsx)(d.Z.Text,{children:null===j||void 0===j?void 0:j.address_line_1}),(0,f.jsx)(d.Z.Text,{children:null===j||void 0===j?void 0:j.address_line_2}),(0,f.jsxs)(d.Z.Text,{children:[null===j||void 0===j?void 0:j.city,", ",null===j||void 0===j?void 0:j.state,","," ",null===j||void 0===j?void 0:j.zip]}),(0,f.jsxs)(d.Z.Text,{children:["Phone: ",null===j||void 0===j?void 0:j.phone]})]}):(0,f.jsx)(d.Z.Text,{className:"text-danger",children:"Delivery Address Not Provided"})})]})}),(0,f.jsx)(c.Z,{xs:{span:12,order:3},lg:{span:4,order:2},children:(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(d.Z.Header,{className:"d-flex justify-content-between align-items-center",children:(0,f.jsx)(d.Z.Title,{className:"my-2",children:"Order Summary"})}),(0,f.jsxs)(d.Z.Body,{children:[(0,f.jsxs)(d.Z.Text,{children:["Total Items: ",t.cart_total_price]}),(0,f.jsxs)(d.Z.Text,{children:["Total Amount: $",y.toFixed(2)]})]}),(0,f.jsx)(d.Z.Footer,{className:"d-grid",children:(0,f.jsx)(m.Z,{as:r.rU,to:j?h.xc:h.o0,variant:"primary",children:"Proceed To Pay"})})]})})]})]})})]})}},3360:function(e,t,i){var n=i(1413),r=i(9439),s=i(5987),a=i(1694),l=i.n(a),c=i(2791),o=i(5341),d=i(162),m=i(184),x=["as","bsPrefix","variant","size","active","disabled","className"],u=c.forwardRef((function(e,t){var i=e.as,a=e.bsPrefix,c=e.variant,u=void 0===c?"primary":c,p=e.size,h=e.active,f=void 0!==h&&h,v=e.disabled,j=void 0!==v&&v,y=e.className,Z=(0,s.Z)(e,x),g=(0,d.vE)(a,"btn"),N=(0,o.FT)((0,n.Z)({tagName:i,disabled:j},Z)),b=(0,r.Z)(N,2),w=b[0],C=b[1].tagName;return(0,m.jsx)(C,(0,n.Z)((0,n.Z)((0,n.Z)({},w),Z),{},{ref:t,disabled:j,className:l()(y,g,f&&"active",u&&"".concat(g,"-").concat(u),p&&"".concat(g,"-").concat(p),Z.href&&j&&"disabled")}))}));u.displayName="Button",t.Z=u},783:function(e,t,i){var n=i(1413),r=i(5987),s=i(1694),a=i.n(s),l=i(2791),c=i(2007),o=i.n(c),d=i(184),m=["as","className","type","tooltip"],x={type:o().string,tooltip:o().bool,as:o().elementType},u=l.forwardRef((function(e,t){var i=e.as,s=void 0===i?"div":i,l=e.className,c=e.type,o=void 0===c?"valid":c,x=e.tooltip,u=void 0!==x&&x,p=(0,r.Z)(e,m);return(0,d.jsx)(s,(0,n.Z)((0,n.Z)({},p),{},{ref:t,className:a()(l,"".concat(o,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=x,t.Z=u},4934:function(e,t,i){var n=i(2791).createContext({});t.Z=n},4292:function(e,t,i){var n=i(1413),r=i(4942),s=i(5987),a=i(1694),l=i.n(a),c=i(2791),o=(i(2391),i(783)),d=i(4934),m=i(162),x=i(184),u=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],p=c.forwardRef((function(e,t){var i,a,o=e.bsPrefix,p=e.type,h=e.size,f=e.htmlSize,v=e.id,j=e.className,y=e.isValid,Z=void 0!==y&&y,g=e.isInvalid,N=void 0!==g&&g,b=e.plaintext,w=e.readOnly,C=e.as,q=void 0===C?"input":C,T=(0,s.Z)(e,u),F=(0,c.useContext)(d.Z).controlId;(o=(0,m.vE)(o,"form-control"),b)?i=(0,r.Z)({},"".concat(o,"-plaintext"),!0):(a={},(0,r.Z)(a,o,!0),(0,r.Z)(a,"".concat(o,"-").concat(h),h),i=a);return(0,x.jsx)(q,(0,n.Z)((0,n.Z)({},T),{},{type:p,size:f,ref:t,readOnly:w,id:v||F,className:l()(j,i,Z&&"is-valid",N&&"is-invalid","color"===p&&"".concat(o,"-color"))}))}));p.displayName="FormControl",t.Z=Object.assign(p,{Feedback:o.Z})},2391:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=reviewPage.f5294278.chunk.js.map