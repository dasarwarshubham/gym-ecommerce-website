"use strict";(self.webpackChunkfitflex=self.webpackChunkfitflex||[]).push([[221],{7347:function(e,n,i){i.d(n,{OL:function(){return w},Wi:function(){return Z},w5:function(){return I},e$:function(){return g},xD:function(){return o}});var l=i(1413),a=i(5987),r=i(2791),s=i(2506),t=i(2879),c=i(184),d=["initialValues","onSubmit","validationSchema","enableReinitialize","children"];var o=function(e){var n=e.initialValues,i=e.onSubmit,r=e.validationSchema,o=e.enableReinitialize,u=e.children,h=(0,a.Z)(e,d);return(0,c.jsx)(s.J9,{enableReinitialize:o,initialValues:n,onSubmit:i,validationSchema:r,children:function(){return(0,c.jsx)(t.Z,(0,l.Z)((0,l.Z)({},h),{},{children:u}))}})},u=i(323),h=i(3392),m=i(4292),x=i(783),p=i(9743),b=i(2677),v=i(8613),f=["label","araiLabel","type","modal","name","fieldClass","children"],Z=function(e){var n=e.label,i=(e.araiLabel,e.type),r=void 0===i?"text":i,t=e.modal,d=void 0!==t&&t,o=e.name,Z=e.fieldClass,j=e.children,y=(0,a.Z)(e,f),g=(0,s.u6)(),S=g.handleChange,N=g.values,w=g.errors,C=g.touched,k=g.setFieldValue;return d?(0,c.jsxs)(u.Z,{as:p.Z,controlId:o,className:Z||"mb-3",children:[n&&(0,c.jsx)(h.Z,{column:!0,xs:12,md:4,children:n}),(0,c.jsxs)(b.Z,{xs:12,md:8,children:["select"===r?(0,c.jsx)(v.Z,(0,l.Z)((0,l.Z)({"aria-label":n,name:o,onChange:S,isInvalid:C[o]&&!!w[o],placeholder:"Type here"},y),{},{children:j})):(0,c.jsx)(m.Z,(0,l.Z)((0,l.Z)({"aria-label":n,type:r,name:o,value:N[o],onChange:S,isInvalid:C[o]&&!!w[o],placeholder:"Type here"},y),{},{children:j})),(0,c.jsx)(x.Z,{type:"invalid",children:w[o]})]})]}):"select"===r?(0,c.jsxs)(u.Z,{controlId:o,className:Z||"mb-5",children:[n&&(0,c.jsx)(h.Z,{children:n}),(0,c.jsx)(v.Z,(0,l.Z)((0,l.Z)({"aria-label":n,name:o,onChange:S,isInvalid:C[o]&&!!w[o],placeholder:"Type here"},y),{},{children:j})),(0,c.jsx)(x.Z,{type:"invalid",children:w[o]})]}):(0,c.jsxs)(u.Z,{controlId:o,className:Z||"mb-5",children:[n&&(0,c.jsx)(h.Z,{children:n}),(0,c.jsx)(m.Z,(0,l.Z)((0,l.Z)({"aria-label":n,type:r,name:o,value:"file"===r?null:N[o],onChange:"file"!==r?S:function(e){return k(o,e.target.files[0])},isInvalid:C[o]&&!!w[o],placeholder:"Type here"},y),{},{children:j})),(0,c.jsx)(x.Z,{type:"invalid",children:w[o]})]})},j=i(9439),y=i(3360),g=function(e){var n=e.display,i=void 0===n?"block":n,l=(0,s.u6)(),a=l.values,t=l.errors,d=l.touched,o=l.isSubmitting,u=(0,r.useState)(!1),h=(0,j.Z)(u,2),m=h[0],x=h[1];return"none"===i?null:(0,c.jsxs)("div",{style:{position:"fixed",bottom:0,right:0,width:m?"25%":"180px",height:m?"400px":"50px",borderRadius:"0.25rem",background:"#f6f8fa",boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",padding:"1rem",overflowY:"auto",display:i,zIndex:100},children:[(0,c.jsxs)("strong",{className:"d-inline-flex gap-1 justify-content-between w-100",children:["Form's state",(0,c.jsx)(y.Z,{onClick:function(){return x(!m)},size:"sm",children:m?"hide":"show"})]}),m&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("hr",{}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("code",{children:"touched:"}),(0,c.jsx)("pre",{children:JSON.stringify(d,null,2)})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("code",{children:"errors:"}),(0,c.jsx)("pre",{children:JSON.stringify(t,null,2)})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("code",{children:"values:"}),(0,c.jsx)("pre",{children:JSON.stringify(a,null,2)})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsx)("code",{children:"isSubmitting:"}),(0,c.jsx)("pre",{children:JSON.stringify(o,null,2)})]})]})]})},S=i(4849),N=["variant","type","children"],w=function(e){var n=e.variant,i=void 0===n?"primary":n,r=e.type,t=void 0===r?"submit":r,d=e.children,o=(0,a.Z)(e,N),u=(0,s.u6)(),h=u.handleSubmit,m=u.isSubmitting;return(0,c.jsx)(y.Z,(0,l.Z)((0,l.Z)({variant:i,onClick:m?null:h,disabled:m,type:t,style:{minWidth:"120px"}},o),{},{children:m?(0,c.jsx)(S.Z,{as:"span",size:"sm",animation:"border"}):d}))},C=i(4758),k=["label","araiLabel","modal","type","name","fieldClass","children","options"],I=function(e){var n=e.label,i=(e.araiLabel,e.modal),r=void 0!==i&&i,t=e.type,d=void 0===t?"radio":t,o=e.name,m=e.fieldClass,v=(e.children,e.options),f=(0,a.Z)(e,k),Z=(0,s.u6)(),j=Z.values,y=Z.errors,g=Z.touched,S=Z.setFieldValue;return r?(0,c.jsxs)(u.Z,{as:p.Z,controlId:o,className:m||"mb-3",children:[(0,c.jsx)(h.Z,{column:!0,xs:12,md:4,children:n}),(0,c.jsxs)(b.Z,{xs:12,md:8,children:[(0,c.jsx)("div",{className:"h-100 d-flex align-items-center",children:v.map((function(e){return(0,c.jsx)(C.Z,(0,l.Z)({inline:!0,label:e.label,name:o,type:d,"aria-label":e.label,onChange:function(){return S(o,e.value)},id:"inline-radio-".concat(e.value),isInvalid:g[o]&&!!y[o],checked:e.value===j[o]},f),"inline-radio-".concat(e.value))}))},"inline-radio"),(0,c.jsx)(x.Z,{type:"invalid",children:y[o]})]})]}):(0,c.jsxs)(u.Z,{controlId:o,className:m||"mb-5",children:[(0,c.jsx)(h.Z,{children:n}),(0,c.jsx)("br",{}),v.map((function(e){return(0,c.jsx)(C.Z,(0,l.Z)({inline:!0,label:e.label,name:o,type:d,"aria-label":e.label,onChange:function(){return S(o,e.value)},id:"inline-radio-".concat(e.value),isInvalid:g[o]&&!!y[o],checked:e.value===j[o]},f),"inline-radio-".concat(e.value))})),(0,c.jsx)(x.Z,{type:"invalid",children:y[o]})]})}},1528:function(e,n,i){i.r(n);var l=i(4165),a=i(5861),r=i(9439),s=i(2791),t=i(7689),c=i(7022),d=i(9743),o=i(2677),u=i(8007),h=i(7347),m=i(8155),x=i(752),p=i(184);n.default=function(){var e=(0,t.s0)(),n=(0,s.useState)(null),i=(0,r.Z)(n,2),b=i[0],v=i[1],f=function(){var n=(0,a.Z)((0,l.Z)().mark((function n(i,a,r){return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:v(null);try{(0,x.gF)(i),a(!1),r(),e(m.ym)}catch(b){console.log(b.message),v(b.message),a(!1)}finally{r()}case 2:case"end":return n.stop()}}),n)})));return function(e,i,l){return n.apply(this,arguments)}}();return(0,p.jsx)(c.Z,{children:(0,p.jsx)(d.Z,{className:"justify-content-center align-items-center",style:{minHeight:"70vh"},children:(0,p.jsxs)(o.Z,{xs:12,md:9,lg:8,xl:7,children:[(0,p.jsx)("h1",{className:"text-center mb-4",children:"Reset Your Password"}),(0,p.jsxs)(h.xD,{initialValues:{email:""},validationSchema:u.Ry().shape({email:u.Z_().required().email().label("Email")}),onSubmit:function(){var e=(0,a.Z)((0,l.Z)().mark((function e(n,i){var a,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.setSubmitting,r=i.resetForm,e.abrupt("return",f(n,a,r));case 2:case"end":return e.stop()}}),e)})));return function(n,i){return e.apply(this,arguments)}}(),children:[b&&(0,p.jsx)("p",{className:"text-danger",children:JSON.stringify(b)}),(0,p.jsx)(h.Wi,{label:"Enter your Email",type:"email",name:"email"}),(0,p.jsx)("div",{className:"d-grid col-9 col-mobile-8 col-sm-5 col-md-4 col-lg-3 mx-auto mb-4",children:(0,p.jsx)(h.OL,{children:"Reset Password"})})]})]})})})}}}]);
//# sourceMappingURL=forgotPasswordPage.40c5104a.chunk.js.map