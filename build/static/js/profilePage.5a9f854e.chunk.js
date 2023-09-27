"use strict";(self.webpackChunkfitflex=self.webpackChunkfitflex||[]).push([[919],{8325:function(e,n,i){var r=i(9439),a=i(2791),l=i(3360),s=i(9140),t=i(6856),d=i(7347),o=i(8007),c=i(9434),u=i(1872),m=i(9256),h=i(184),x=o.Ry().shape({full_name:o.Z_().required().label("Full Name"),address_line_1:o.Z_().required().label("Address Line 1"),address_line_2:o.Z_().required().label("Address Line 2"),city:o.Z_().required().label("City"),state:o.Z_().required().label("State"),country:o.Z_().required().label("Country"),zip:o.Z_().required().label("Zip Code"),phone:o.Z_().required().label("Phone Number").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid")}),j={full_name:"",address_line_1:"",address_line_2:"",city:"",state:"",country:"",zip:"",phone:""};n.Z=function(e){var n=e.isButton,i=(0,a.useState)(!1),o=(0,r.Z)(i,2),v=o[0],p=o[1],f=(0,c.v9)(m.s6),Z=(0,c.v9)(m.XD),b=(0,c.I0)();if(n&&!v)return(0,h.jsx)(l.Z,{variant:"primary mx-auto",onClick:function(){return p(!0)},children:"Add New Address"});if(!v)return(0,h.jsx)(s.Z,{onClick:function(){return p(!0)},className:"d-flex justify-content-center align-items-center",style:{height:"218px"},children:(0,h.jsx)(s.Z.Body,{className:"d-flex justify-content-center align-items-center",children:(0,h.jsx)(t.QNf,{size:28})})});return(0,h.jsx)(s.Z,{className:"w-100",children:(0,h.jsx)(s.Z.Body,{children:(0,h.jsxs)(d.xD,{initialValues:j,validationSchema:x,onSubmit:function(e,n){return function(e,n,i){b((0,u.Nb)(e)).unwrap().then((function(){b((0,u.Ft)())})).catch((function(e){console.log(e)})).finally((function(){i(),n(!1),p(!v)}))}(e,n.setSubmitting,n.resetForm)},children:[Z&&(0,h.jsx)("p",{className:"text-danger",children:Z}),(0,h.jsx)(d.Wi,{label:"Full Name",name:"full_name",disabled:!v||f,modal:!0}),(0,h.jsx)(d.Wi,{label:"Address Line 1",name:"address_line_1",disabled:!v||f,modal:!0}),(0,h.jsx)(d.Wi,{label:"Address Line 2",name:"address_line_2",disabled:!v||f,modal:!0}),(0,h.jsx)(d.Wi,{label:"City",name:"city",disabled:!v||f,modal:!0}),(0,h.jsx)(d.Wi,{label:"State",name:"state",disabled:!v||f,modal:!0}),(0,h.jsx)(d.Wi,{label:"Country",name:"country",disabled:!v||f,modal:!0}),(0,h.jsx)(d.Wi,{label:"Zip Code",name:"zip",inputMode:"numeric",disabled:!v||f,modal:!0}),(0,h.jsx)(d.Wi,{label:"Phone Number",name:"phone",inputMode:"numeric",disabled:!v||f,modal:!0}),(0,h.jsxs)("div",{className:"mb-4",children:[(0,h.jsx)(l.Z,{className:"me-3",variant:"danger",onClick:function(){return p(!1)},children:"Cancel"}),(0,h.jsx)(d.OL,{children:"Submit"})]})]})})})}},7347:function(e,n,i){i.d(n,{OL:function(){return _},Wi:function(){return f},w5:function(){return N},xD:function(){return o}});var r=i(1413),a=i(5987),l=(i(2791),i(2506)),s=i(2879),t=i(184),d=["initialValues","onSubmit","validationSchema","enableReinitialize","children"];var o=function(e){var n=e.initialValues,i=e.onSubmit,o=e.validationSchema,c=e.enableReinitialize,u=e.children,m=(0,a.Z)(e,d);return(0,t.jsx)(l.J9,{enableReinitialize:c,initialValues:n,onSubmit:i,validationSchema:o,children:function(){return(0,t.jsx)(s.Z,(0,r.Z)((0,r.Z)({},m),{},{children:u}))}})},c=i(323),u=i(3392),m=i(4292),h=i(783),x=i(9743),j=i(2677),v=i(8613),p=["label","araiLabel","type","modal","name","fieldClass","children"],f=function(e){var n=e.label,i=(e.araiLabel,e.type),s=void 0===i?"text":i,d=e.modal,o=void 0!==d&&d,f=e.name,Z=e.fieldClass,b=e.children,y=(0,a.Z)(e,p),_=(0,l.u6)(),g=_.handleChange,w=_.values,N=_.errors,C=_.touched,S=_.setFieldValue;return o?(0,t.jsxs)(c.Z,{as:x.Z,controlId:f,className:Z||"mb-3",children:[n&&(0,t.jsx)(u.Z,{column:!0,xs:12,md:4,children:n}),(0,t.jsxs)(j.Z,{xs:12,md:8,children:["select"===s?(0,t.jsx)(v.Z,(0,r.Z)((0,r.Z)({"aria-label":n,name:f,onChange:g,isInvalid:C[f]&&!!N[f],placeholder:"Type here"},y),{},{children:b})):(0,t.jsx)(m.Z,(0,r.Z)((0,r.Z)({"aria-label":n,type:s,name:f,value:w[f],onChange:g,isInvalid:C[f]&&!!N[f],placeholder:"Type here"},y),{},{children:b})),(0,t.jsx)(h.Z,{type:"invalid",children:N[f]})]})]}):"select"===s?(0,t.jsxs)(c.Z,{controlId:f,className:Z||"mb-5",children:[n&&(0,t.jsx)(u.Z,{children:n}),(0,t.jsx)(v.Z,(0,r.Z)((0,r.Z)({"aria-label":n,name:f,onChange:g,isInvalid:C[f]&&!!N[f],placeholder:"Type here"},y),{},{children:b})),(0,t.jsx)(h.Z,{type:"invalid",children:N[f]})]}):(0,t.jsxs)(c.Z,{controlId:f,className:Z||"mb-5",children:[n&&(0,t.jsx)(u.Z,{children:n}),(0,t.jsx)(m.Z,(0,r.Z)((0,r.Z)({"aria-label":n,type:s,name:f,value:"file"===s?null:w[f],onChange:"file"!==s?g:function(e){return S(f,e.target.files[0])},isInvalid:C[f]&&!!N[f],placeholder:"Type here"},y),{},{children:b})),(0,t.jsx)(h.Z,{type:"invalid",children:N[f]})]})},Z=i(3360),b=i(4849),y=["variant","type","children"],_=function(e){var n=e.variant,i=void 0===n?"primary":n,s=e.type,d=void 0===s?"submit":s,o=e.children,c=(0,a.Z)(e,y),u=(0,l.u6)(),m=u.handleSubmit,h=u.isSubmitting;return(0,t.jsx)(Z.Z,(0,r.Z)((0,r.Z)({variant:i,onClick:h?null:m,disabled:h,type:d,style:{minWidth:"120px"}},c),{},{children:h?(0,t.jsx)(b.Z,{as:"span",size:"sm",animation:"border"}):o}))},g=i(4758),w=["label","araiLabel","modal","type","name","fieldClass","children","options"],N=function(e){var n=e.label,i=(e.araiLabel,e.modal),s=void 0!==i&&i,d=e.type,o=void 0===d?"radio":d,m=e.name,v=e.fieldClass,p=(e.children,e.options),f=(0,a.Z)(e,w),Z=(0,l.u6)(),b=Z.values,y=Z.errors,_=Z.touched,N=Z.setFieldValue;return s?(0,t.jsxs)(c.Z,{as:x.Z,controlId:m,className:v||"mb-3",children:[(0,t.jsx)(u.Z,{column:!0,xs:12,md:4,children:n}),(0,t.jsxs)(j.Z,{xs:12,md:8,children:[(0,t.jsx)("div",{className:"h-100 d-flex align-items-center",children:p.map((function(e){return(0,t.jsx)(g.Z,(0,r.Z)({inline:!0,label:e.label,name:m,type:o,"aria-label":e.label,onChange:function(){return N(m,e.value)},id:"inline-radio-".concat(e.value),isInvalid:_[m]&&!!y[m],checked:e.value===b[m]},f),"inline-radio-".concat(e.value))}))},"inline-radio"),(0,t.jsx)(h.Z,{type:"invalid",children:y[m]})]})]}):(0,t.jsxs)(c.Z,{controlId:m,className:v||"mb-5",children:[(0,t.jsx)(u.Z,{children:n}),(0,t.jsx)("br",{}),p.map((function(e){return(0,t.jsx)(g.Z,(0,r.Z)({inline:!0,label:e.label,name:m,type:o,"aria-label":e.label,onChange:function(){return N(m,e.value)},id:"inline-radio-".concat(e.value),isInvalid:_[m]&&!!y[m],checked:e.value===b[m]},f),"inline-radio-".concat(e.value))})),(0,t.jsx)(h.Z,{type:"invalid",children:y[m]})]})}},4859:function(e,n,i){i.r(n),i.d(n,{default:function(){return A}});var r=i(4165),a=i(5861),l=i(2791),s=i(7689),t=i(9434),d=i(7022),o=i(9743),c=i(2677),u=i(3360),m=i(4849),h=i(7369),x=i(9537),j=i(8155),v=i(1872),p=i(9256),f=i(9439),Z=i(7347),b=i(8007),y=i(184),_=b.Ry().shape({first_name:b.Z_().required().label("First Name"),last_name:b.Z_().required().label("Last Name"),email:b.Z_().required().email().label("Email"),phone:b.Z_().label("Phone Number").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").nullable(),gender:b.Z_().label("Gender").oneOf(["M","F","NA",null])}),g=function(){var e=(0,t.v9)(p.s6),n=(0,t.v9)(p.pp),i=(0,t.v9)(p.XD),r=(0,t.I0)(),a=(0,s.s0)(),d=(0,l.useState)(!1),o=(0,f.Z)(d,2),c=o[0],h=o[1];return e?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center w-100",style:{minHeight:"25vh"},children:(0,y.jsx)(m.Z,{as:"span",animation:"border"})}):(0,y.jsxs)(y.Fragment,{children:[i&&(0,y.jsx)("p",{className:"text-danger",children:i}),(0,y.jsxs)(Z.xD,{initialValues:{first_name:null===n||void 0===n?void 0:n.first_name,last_name:null===n||void 0===n?void 0:n.last_name,email:null===n||void 0===n?void 0:n.email,phone:null!==n&&void 0!==n&&n.phone?null===n||void 0===n?void 0:n.phone:"",gender:null!==n&&void 0!==n&&n.gender?null===n||void 0===n?void 0:n.gender:""},validationSchema:_,onSubmit:function(e,i){var l=i.setSubmitting,s=i.resetForm;e.phone=e.phone?e.phone:null,e.gender=e.gender?e.gender:null,function(e,i,l){r((0,v.Nw)(e)).unwrap().then((function(i){l({values:i}),i&&(null===e||void 0===e?void 0:e.email)!==(null===n||void 0===n?void 0:n.email)&&r((0,v.kY)()).then((function(){a(j.ym)}))})).catch((function(e){console.log(e),l()})).finally((function(){i(!1),h(!c)}))}(e,l,s)},enableReinitialize:!0,children:[(0,y.jsx)(Z.Wi,{label:"First Name",name:"first_name",disabled:!c||e,modal:!0}),(0,y.jsx)(Z.Wi,{label:"Last Name",name:"last_name",disabled:!c||e,modal:!0}),(0,y.jsx)(Z.Wi,{label:"Email",type:"email",name:"email",disabled:!c||e,modal:!0}),(0,y.jsx)(Z.Wi,{label:"Phone Number",name:"phone",inputMode:"numeric",disabled:!c||e,modal:!0}),(0,y.jsx)(Z.w5,{label:"Gender",name:"gender",options:[{label:"Male",value:"M"},{label:"Female",value:"F"},{label:"Prefer Not to Say",value:"NA"}],disabled:!c||e,modal:!0}),c?(0,y.jsxs)("div",{className:"mb-4",children:[(0,y.jsx)(u.Z,{className:"me-3",variant:"danger",onClick:function(){return!e&&h(!1)},children:"Cancel"}),(0,y.jsx)(Z.OL,{children:"Submit"})]}):(0,y.jsx)(u.Z,{variant:"primary",onClick:function(){return!e&&h(!0)},disabled:e,children:(0,y.jsx)(y.Fragment,{children:"Edit"})})]})]})},w=i(9140),N=i(5736),C=i(1398),S=i(1087),P=function(e){var n=e.order;return(0,y.jsxs)(w.Z,{className:"mb-4",children:[(0,y.jsxs)(w.Z.Header,{className:"d-inline-flex justify-content-between g-2 ",children:["Order #",n.id,(0,y.jsx)(N.Z,{pill:!0,bg:"primary",className:"d-flex align-items-center",children:n.order_status})]}),(0,y.jsx)(w.Z.Body,{children:(0,y.jsx)(C.Z,{variant:"flush",children:n.items.map((function(e,n){return(0,y.jsx)(C.Z.Item,{className:"mb-3",children:(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(c.Z,{xs:3,children:(0,y.jsx)(S.rU,{to:"".concat(j.B$,"/").concat(e.product.category,"/").concat(e.product.slug),children:(0,y.jsx)("img",{src:e.product.image,alt:e.product.title,width:64,height:64,className:"mr-3"})})}),(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(S.rU,{to:"".concat(j.B$,"/").concat(e.product.category,"/").concat(e.product.slug),children:(0,y.jsx)("h6",{children:e.product.title})}),(0,y.jsxs)("p",{children:["Quantity: ",e.quantity]}),(0,y.jsxs)("p",{children:["Price: $",e.unit_price]})]})]})},n)}))})}),(0,y.jsxs)(w.Z.Footer,{children:[(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(c.Z,{xs:3,children:"Date:"}),(0,y.jsx)(c.Z,{children:new Date(n.placed_at).toString()})]}),(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(c.Z,{xs:3,children:"Shipping Address: "}),(0,y.jsxs)(c.Z,{children:[n.address.full_name," ",(0,y.jsx)("br",{}),n.address.address_line_1,", ",n.address.address_line_2,",",(0,y.jsx)("br",{}),n.address.city,", ",n.address.state," ",n.address.zip," ",(0,y.jsx)("br",{}),n.address.phone,","]})]}),(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(c.Z,{xs:3,children:"Total: "}),(0,y.jsxs)(c.Z,{children:["$",n.total]})]})]})]})},k=function(){var e=(0,s.s0)(),n=(0,t.v9)(p.s6),i=(0,t.v9)(p.ny),r=i.currentOrders,a=i.pastOrders;return n?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center w-100",style:{minHeight:"25vh"},children:(0,y.jsx)(m.Z,{as:"span",animation:"border"})}):null!==r&&void 0!==r&&r.length||null!==a&&void 0!==a&&a.length?(0,y.jsxs)(y.Fragment,{children:[(null===r||void 0===r?void 0:r.length)>0&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h4",{children:"Current Order"}),null===r||void 0===r?void 0:r.map((function(e){return(0,y.jsx)(P,{order:e},e.id)}))]}),(null===a||void 0===a?void 0:a.length)>0&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h4",{children:"Past Orders"}),null===a||void 0===a?void 0:a.map((function(e){return(0,y.jsx)(P,{order:e},e.id)}))]})]}):(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("p",{children:"No have not ordered anything yet."}),(0,y.jsx)("p",{children:" Start you Fit and flexible journey with us."}),(0,y.jsx)(u.Z,{onClick:function(){return e(j.B$)},children:"Continue Shopping"})]})},F=i(6856),W=i(6355),q=b.Ry().shape({full_name:b.Z_().required().label("Full Name"),address_line_1:b.Z_().required().label("Address Line 1"),address_line_2:b.Z_().required().label("Address Line 2"),city:b.Z_().required().label("City"),state:b.Z_().required().label("State"),country:b.Z_().required().label("Country"),zip:b.Z_().required().label("Zip Code"),phone:b.Z_().required().label("Phone Number").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid")}),L=function(e){var n=e.address,i=(0,l.useState)(!1),r=(0,f.Z)(i,2),a=r[0],s=r[1],d=(0,t.v9)(p.s6),o=(0,t.v9)(p.XD),c=(0,t.I0)();if(!a)return(0,y.jsx)(w.Z,{children:(0,y.jsxs)(w.Z.Body,{children:[(0,y.jsx)(w.Z.Title,{children:n.full_name}),(0,y.jsx)(w.Z.Text,{children:n.address_line_1}),(0,y.jsx)(w.Z.Text,{children:n.address_line_2}),(0,y.jsxs)(w.Z.Text,{children:[n.city,", ",n.zip]}),(0,y.jsxs)(w.Z.Text,{children:[n.state,", ",n.country]}),(0,y.jsxs)(w.Z.Text,{children:["Phone: ",n.phone]}),(0,y.jsx)(u.Z,{variant:"primary",onClick:function(){return s(!0)},className:"me-3",children:d?(0,y.jsx)(m.Z,{as:"span",size:"sm",animation:"border"}):(0,y.jsx)(F.zmo,{})}),(0,y.jsx)(u.Z,{variant:"danger",onClick:function(){c((0,v.z5)(n.id)).unwrap().then((function(){c((0,v.Ft)())})).catch((function(e){console.log(e)})).finally((function(){s(!a)}))},children:(0,y.jsx)(W.Xm5,{size:14})})]})});return(0,y.jsx)(w.Z,{children:(0,y.jsx)(w.Z.Body,{children:(0,y.jsxs)(Z.xD,{initialValues:{id:null===n||void 0===n?void 0:n.id,full_name:null===n||void 0===n?void 0:n.full_name,address_line_1:null===n||void 0===n?void 0:n.address_line_1,address_line_2:null===n||void 0===n?void 0:n.address_line_2,city:null===n||void 0===n?void 0:n.city,state:null===n||void 0===n?void 0:n.state,country:null===n||void 0===n?void 0:n.country,zip:null===n||void 0===n?void 0:n.zip,phone:null===n||void 0===n?void 0:n.phone},validationSchema:q,onSubmit:function(e,i){return function(e,i,r){c((0,v.y_)({addressId:n.id,updatedAddress:e})).unwrap().then((function(e){r({values:e}),c((0,v.Ft)())})).catch((function(e){console.log(e),r()})).finally((function(){i(!1),s(!a)}))}(e,i.setSubmitting,i.resetForm)},children:[o&&(0,y.jsx)("p",{className:"text-danger",children:o}),(0,y.jsx)(Z.Wi,{label:"Full Name",name:"full_name",disabled:!a||d,modal:!0}),(0,y.jsx)(Z.Wi,{label:"Address Line 1",name:"address_line_1",disabled:!a||d,modal:!0}),(0,y.jsx)(Z.Wi,{label:"Address Line 2",name:"address_line_2",disabled:!a||d,modal:!0}),(0,y.jsx)(Z.Wi,{label:"City",name:"city",disabled:!a||d,modal:!0}),(0,y.jsx)(Z.Wi,{label:"State",name:"state",disabled:!a||d,modal:!0}),(0,y.jsx)(Z.Wi,{label:"Country",name:"country",disabled:!a||d,modal:!0}),(0,y.jsx)(Z.Wi,{label:"Zip Code",name:"zip",inputMode:"numeric",disabled:!a||d,modal:!0}),(0,y.jsx)(Z.Wi,{label:"Phone Number",name:"phone",inputMode:"numeric",disabled:!a||d,modal:!0}),(0,y.jsxs)("div",{className:"mb-4",children:[(0,y.jsx)(u.Z,{className:"me-3",variant:"danger",onClick:function(){return s(!1)},children:"Cancel"}),(0,y.jsx)(Z.OL,{children:"Submit"})]})]})})})},z=i(8325),I=function(){var e=(0,t.v9)(p.jK),n=(0,t.v9)(p.s6),i=(0,t.v9)(p.XD);return n?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center w-100",style:{minHeight:"25vh"},children:(0,y.jsx)(m.Z,{as:"span",animation:"border"})}):(0,y.jsxs)(y.Fragment,{children:[i&&(0,y.jsx)("p",{className:"text-danger",children:i}),(0,y.jsxs)(o.Z,{className:"g-4",children:[(null===e||void 0===e?void 0:e.length)>0&&(null===e||void 0===e?void 0:e.map((function(e){return(0,y.jsx)(c.Z,{md:6,children:(0,y.jsx)(L,{address:e})},"address-".concat(e.id))}))),(0,y.jsx)(c.Z,{md:6,children:(0,y.jsx)(z.Z,{})},"add-address")]})]})},O=function(){var e=(0,t.v9)(p.s6),n=(0,t.I0)(),i=(0,s.s0)(),d=(0,l.useState)(!1),o=(0,f.Z)(d,2),c=o[0],h=o[1],x=(0,l.useState)(),_=(0,f.Z)(x,2),g=_[0],w=_[1],N=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,v.kY)()).then((function(){i(j.ym)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(i,l,s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(null),delete i.confirm_new_password,e.next=4,n((0,v.oi)(i)).unwrap().then((0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:case"end":return e.stop()}}),e)})))).catch((function(e){console.log(e),w(e)})).finally((function(){l(!1),s()}));case 4:case"end":return e.stop()}}),e)})));return function(n,i,r){return e.apply(this,arguments)}}();return e?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center w-100",style:{minHeight:"25vh"},children:(0,y.jsx)(m.Z,{as:"span",animation:"border"})}):(0,y.jsxs)(y.Fragment,{children:[g&&(0,y.jsx)("p",{className:"text-danger",children:g}),c?(0,y.jsxs)(Z.xD,{initialValues:{old_password:"",new_password:"",confirm_new_password:""},validationSchema:b.Ry().shape({old_password:b.Z_().label("Password").required("Password is required").min(8,"Your password is too short."),new_password:b.Z_().label("Password").required("Password is required").min(8,"Your password is too short."),confirm_new_password:b.Z_().required("Please type your password again").oneOf([b.iH("new_password")],"Passwords must match")}),onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,i){var a,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.setSubmitting,l=i.resetForm,e.abrupt("return",C(n,a,l));case 2:case"end":return e.stop()}}),e)})));return function(n,i){return e.apply(this,arguments)}}(),children:[g&&(0,y.jsx)("p",{className:"text-danger",children:JSON.stringify(g)}),(0,y.jsx)(Z.Wi,{label:"Enter Old Password",type:"password",name:"old_password",modal:!0}),(0,y.jsx)(Z.Wi,{label:"Enter New Password",type:"password",name:"new_password",modal:!0}),(0,y.jsx)(Z.Wi,{label:"Confirm New Password",type:"password",name:"confirm_new_password",modal:!0}),(0,y.jsxs)("div",{className:"mb-4",children:[(0,y.jsx)(u.Z,{className:"me-3",variant:"danger",onClick:function(){return!e&&h(!1)},children:"Cancel"}),(0,y.jsx)(Z.OL,{children:"Submit"})]})]}):(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(Z.xD,{initialValues:{password:"********"},enableReinitialize:!0,onSubmit:function(){return h(!0)},children:[g&&(0,y.jsx)("p",{className:"text-danger",children:JSON.stringify(g)}),(0,y.jsx)(Z.Wi,{label:"Password",type:"password",name:"password",value:"********",modal:!0,disabled:!0}),(0,y.jsx)(u.Z,{variant:"primary",onClick:function(){return h(!0)},children:(0,y.jsx)(y.Fragment,{children:"Change Password"})})]})}),(0,y.jsx)("hr",{}),(0,y.jsx)(u.Z,{variant:"danger",title:"logout",onClick:N,children:e?(0,y.jsx)(m.Z,{as:"span",size:"sm",animation:"border"}):(0,y.jsx)(y.Fragment,{children:"Logout from all devices"})})]})},A=function(){var e=(0,s.s0)(),n=(0,t.I0)(),i=(0,t.v9)(p.s6),l=function(){var i=(0,a.Z)((0,r.Z)().mark((function i(){return(0,r.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:n((0,v.TX)()).then((function(){e(j.ym)}));case 1:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}();return(0,y.jsx)(d.Z,{className:"my-5 py-5",style:{minHeight:"70vh"},children:(0,y.jsx)(o.Z,{className:"justify-content-center mx-0 mt-5",children:(0,y.jsxs)(c.Z,{md:12,children:[(0,y.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,y.jsx)("h2",{children:"User Profile"}),(0,y.jsx)("div",{children:(0,y.jsx)(u.Z,{variant:"danger",title:"logout",onClick:l,className:"me-3",children:i?(0,y.jsx)(m.Z,{as:"span",size:"sm",animation:"border"}):(0,y.jsx)(y.Fragment,{children:"Logout"})})})]}),(0,y.jsx)("hr",{}),(0,y.jsx)(h.Z.Container,{id:"profile-tabs",defaultActiveKey:"account",children:(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(c.Z,{sm:3,children:(0,y.jsxs)(x.Z,{variant:"pills",className:"flex-column",children:[(0,y.jsx)(x.Z.Item,{children:(0,y.jsx)(x.Z.Link,{eventKey:"account",children:"Account Details"})}),(0,y.jsx)(x.Z.Item,{children:(0,y.jsx)(x.Z.Link,{eventKey:"orders",children:"Your Orders"})}),(0,y.jsx)(x.Z.Item,{children:(0,y.jsx)(x.Z.Link,{eventKey:"address",children:"Manage Address"})}),(0,y.jsx)(x.Z.Item,{children:(0,y.jsx)(x.Z.Link,{eventKey:"security",children:"Security"})})]})}),(0,y.jsx)(c.Z,{sm:9,children:(0,y.jsxs)(h.Z.Content,{children:[(0,y.jsx)(h.Z.Pane,{eventKey:"account",children:(0,y.jsx)(g,{})}),(0,y.jsx)(h.Z.Pane,{eventKey:"orders",children:(0,y.jsx)(k,{})}),(0,y.jsx)(h.Z.Pane,{eventKey:"address",children:(0,y.jsx)(I,{})}),(0,y.jsx)(h.Z.Pane,{eventKey:"security",children:(0,y.jsx)(O,{})})]})})]})})]})})})}},9256:function(e,n,i){i.d(n,{XD:function(){return t},jK:function(){return o},ny:function(){return d},pp:function(){return l},s6:function(){return s}});var r=i(6916),a=function(e){return e.account},l=((0,r.P1)([a],(function(e){return null!==e.token})),(0,r.P1)([a],(function(e){return e.user}))),s=(0,r.P1)([a],(function(e){return e.loading})),t=(0,r.P1)([a],(function(e){return e.error})),d=(0,r.P1)([a],(function(e){var n=e.orders;return{currentOrders:null===n||void 0===n?void 0:n.filter((function(e){return"Pending"===e.order_status})),pastOrders:null===n||void 0===n?void 0:n.filter((function(e){return"Delivered"===e.order_status||"Failed"===e.order_status}))}})),o=(0,r.P1)([a],(function(e){return e.address}))}}]);
//# sourceMappingURL=profilePage.5a9f854e.chunk.js.map