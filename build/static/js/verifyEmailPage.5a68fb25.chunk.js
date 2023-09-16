"use strict";(self.webpackChunkfitflex=self.webpackChunkfitflex||[]).push([[77],{7347:function(e,n,i){i.d(n,{OL:function(){return N},Wi:function(){return Z},w5:function(){return w},e$:function(){return g},xD:function(){return o}});var l=i(1413),r=i(5987),a=i(2791),s=i(2506),t=i(2879),c=i(184),d=["initialValues","onSubmit","validationSchema","enableReinitialize","children"];var o=function(e){var n=e.initialValues,i=e.onSubmit,a=e.validationSchema,o=e.enableReinitialize,u=e.children,h=(0,r.Z)(e,d);return(0,c.jsx)(s.J9,{enableReinitialize:o,initialValues:n,onSubmit:i,validationSchema:a,children:function(){return(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({},h),{},{children:u}))}})},u=i(323),h=i(3392),x=i(4292),m=i(783),p=i(9743),v=i(2677),b=i(8613),f=["label","araiLabel","type","modal","name","fieldClass","children"],Z=function(e){var n=e.label,i=(e.araiLabel,e.type),a=void 0===i?"text":i,t=e.modal,d=void 0!==t&&t,o=e.name,Z=e.fieldClass,j=e.children,y=(0,r.Z)(e,f),g=(0,s.u6)(),S=g.handleChange,k=g.values,N=g.errors,C=g.touched,I=g.setFieldValue;return d?(0,c.jsxs)(u.Z,{as:p.Z,controlId:o,className:Z||"mb-3",children:[n&&(0,c.jsx)(h.Z,{column:!0,xs:12,md:4,children:n}),(0,c.jsxs)(v.Z,{xs:12,md:8,children:["select"===a?(0,c.jsx)(b.Z,(0,l.Z)((0,l.Z)({"aria-label":n,name:o,onChange:S,isInvalid:C[o]&&!!N[o],placeholder:"Type here"},y),{},{children:j})):(0,c.jsx)(x.Z,(0,l.Z)((0,l.Z)({"aria-label":n,type:a,name:o,value:k[o],onChange:S,isInvalid:C[o]&&!!N[o],placeholder:"Type here"},y),{},{children:j})),(0,c.jsx)(m.Z,{type:"invalid",children:N[o]})]})]}):"select"===a?(0,c.jsxs)(u.Z,{controlId:o,className:Z||"mb-5",children:[n&&(0,c.jsx)(h.Z,{children:n}),(0,c.jsx)(b.Z,(0,l.Z)((0,l.Z)({"aria-label":n,name:o,onChange:S,isInvalid:C[o]&&!!N[o],placeholder:"Type here"},y),{},{children:j})),(0,c.jsx)(m.Z,{type:"invalid",children:N[o]})]}):(0,c.jsxs)(u.Z,{controlId:o,className:Z||"mb-5",children:[n&&(0,c.jsx)(h.Z,{children:n}),(0,c.jsx)(x.Z,(0,l.Z)((0,l.Z)({"aria-label":n,type:a,name:o,value:"file"===a?null:k[o],onChange:"file"!==a?S:function(e){return I(o,e.target.files[0])},isInvalid:C[o]&&!!N[o],placeholder:"Type here"},y),{},{children:j})),(0,c.jsx)(m.Z,{type:"invalid",children:N[o]})]})},j=i(9439),y=i(3360),g=function(e){var n=e.display,i=void 0===n?"block":n,l=(0,s.u6)(),r=l.values,t=l.errors,d=l.touched,o=l.isSubmitting,u=(0,a.useState)(!1),h=(0,j.Z)(u,2),x=h[0],m=h[1];return"none"===i?null:(0,c.jsxs)("div",{style:{position:"fixed",bottom:0,right:0,width:x?"25%":"180px",height:x?"400px":"50px",borderRadius:"0.25rem",background:"#f6f8fa",boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",padding:"1rem",overflowY:"auto",display:i,zIndex:100},children:[(0,c.jsxs)("strong",{className:"d-inline-flex gap-1 justify-content-between w-100",children:["Form's state",(0,c.jsx)(y.Z,{onClick:function(){return m(!x)},size:"sm",children:x?"hide":"show"})]}),x&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("hr",{}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("code",{children:"touched:"}),(0,c.jsx)("pre",{children:JSON.stringify(d,null,2)})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("code",{children:"errors:"}),(0,c.jsx)("pre",{children:JSON.stringify(t,null,2)})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("code",{children:"values:"}),(0,c.jsx)("pre",{children:JSON.stringify(r,null,2)})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("code",{children:"isSubmitting:"}),(0,c.jsx)("pre",{children:JSON.stringify(o,null,2)})]})]})]})},S=i(4849),k=["variant","type","children"],N=function(e){var n=e.variant,i=void 0===n?"primary":n,a=e.type,t=void 0===a?"submit":a,d=e.children,o=(0,r.Z)(e,k),u=(0,s.u6)(),h=u.handleSubmit,x=u.isSubmitting;return(0,c.jsx)(y.Z,(0,l.Z)((0,l.Z)({variant:i,onClick:x?null:h,disabled:x,type:t,style:{minWidth:"120px"}},o),{},{children:x?(0,c.jsx)(S.Z,{as:"span",size:"sm",animation:"border"}):d}))},C=i(4758),I=["label","araiLabel","modal","type","name","fieldClass","children","options"],w=function(e){var n=e.label,i=(e.araiLabel,e.modal),a=void 0!==i&&i,t=e.type,d=void 0===t?"radio":t,o=e.name,x=e.fieldClass,b=(e.children,e.options),f=(0,r.Z)(e,I),Z=(0,s.u6)(),j=Z.values,y=Z.errors,g=Z.touched,S=Z.setFieldValue;return a?(0,c.jsxs)(u.Z,{as:p.Z,controlId:o,className:x||"mb-3",children:[(0,c.jsx)(h.Z,{column:!0,xs:12,md:4,children:n}),(0,c.jsxs)(v.Z,{xs:12,md:8,children:[(0,c.jsx)("div",{className:"h-100 d-flex align-items-center",children:b.map((function(e){return(0,c.jsx)(C.Z,(0,l.Z)({inline:!0,label:e.label,name:o,type:d,"aria-label":e.label,onChange:function(){return S(o,e.value)},id:"inline-radio-".concat(e.value),isInvalid:g[o]&&!!y[o],checked:e.value===j[o]},f),"inline-radio-".concat(e.value))}))},"inline-radio"),(0,c.jsx)(m.Z,{type:"invalid",children:y[o]})]})]}):(0,c.jsxs)(u.Z,{controlId:o,className:x||"mb-5",children:[(0,c.jsx)(h.Z,{children:n}),(0,c.jsx)("br",{}),b.map((function(e){return(0,c.jsx)(C.Z,(0,l.Z)({inline:!0,label:e.label,name:o,type:d,"aria-label":e.label,onChange:function(){return S(o,e.value)},id:"inline-radio-".concat(e.value),isInvalid:g[o]&&!!y[o],checked:e.value===j[o]},f),"inline-radio-".concat(e.value))})),(0,c.jsx)(m.Z,{type:"invalid",children:y[o]})]})}},1155:function(e,n,i){i.r(n);var l=i(4165),r=i(5861),a=i(9439),s=i(2791),t=i(7689),c=i(7022),d=i(9743),o=i(2677),u=i(8007),h=i(7347),x=i(8155),m=i(752),p=i(184);n.default=function(){var e=(0,t.UO)(),n=e.user_id,i=e.token,v=(0,t.s0)(),b=(0,s.useState)(null),f=(0,a.Z)(b,2),Z=f[0],j=f[1],y=function(){var e=(0,r.Z)((0,l.Z)().mark((function e(n,i,r){var a,s;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.user_id,s=n.token,j(null),e.prev=2,e.next=5,(0,m.lm)(a,s);case 5:v(x.ym),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0),j(e.t0.message);case 12:return e.prev=12,i(!1),r(),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[2,8,12,16]])})));return function(n,i,l){return e.apply(this,arguments)}}();return(0,p.jsx)(c.Z,{children:(0,p.jsx)(d.Z,{className:"justify-content-center align-items-center",style:{minHeight:"70vh"},children:(0,p.jsxs)(o.Z,{xs:12,md:9,lg:8,xl:7,children:[(0,p.jsx)("h1",{className:"text-center mb-4",children:"Email Verification"}),(0,p.jsxs)(h.xD,{initialValues:{user_id:n,token:i},validationSchema:u.Ry().shape({user_id:u.Z_().label("User Id").required("User Id is required"),token:u.Z_().label("Verification Token").required("verification token is required")}),onSubmit:function(){var e=(0,r.Z)((0,l.Z)().mark((function e(n,i){var r,a;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.setSubmitting,a=i.resetForm,e.abrupt("return",y(n,r,a));case 2:case"end":return e.stop()}}),e)})));return function(n,i){return e.apply(this,arguments)}}(),children:[Z&&(0,p.jsx)("p",{className:"text-danger text-center",children:JSON.stringify(Z)}),(0,p.jsx)(h.Wi,{type:"hidden",name:"user_id"}),(0,p.jsx)(h.Wi,{type:"hidden",name:"token"}),(0,p.jsx)("div",{className:"d-grid col-9 col-mobile-8 col-sm-5 col-md-4 col-lg-3 mx-auto mb-4",children:(0,p.jsx)(h.OL,{children:"Verify"})})]})]})})})}}}]);
//# sourceMappingURL=verifyEmailPage.5a68fb25.chunk.js.map