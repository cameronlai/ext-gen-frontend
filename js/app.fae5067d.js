(function(e){function t(t){for(var o,s,a=t[0],c=t[1],l=t[2],d=0,m=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/ext-gen-frontend/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",[n("b-row",[n("h1",{staticClass:"mx-auto"},[e._v("Exam Timetable Generator")])]),n("b-row",[n("p",{staticClass:"mx-auto"},[e._v("Optimizing exam timetables by maximizing revision time between exams")])]),n("hr"),n("b-row",[n("b-col",[n("b-row",{staticClass:"m-2"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.show("TimeSlots")}}},[e._v("Edit Time Slots")])],1),n("b-row",{staticClass:"m-2"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.show("StudentRecord")}}},[e._v("Edit Student Record")])],1),n("b-row",{staticClass:"m-2"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.show("Visualize")}}},[e._v("Visualize")])],1),n("b-row",{staticClass:"m-2"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.generate()}}},[e._v("Generate Timetable")])],1)],1),n("b-col",["TimeSlots"===e.rightColPageName?n("div",[n("EditTableTimeSlots",{attrs:{items:e.timeSlotsItems}})],1):e._e(),"StudentRecord"===e.rightColPageName?n("div",[n("EditTableStudentRecord",{attrs:{items:e.studentRecordItems}})],1):e._e()])],1),n("hr"),n("b-row",[n("p",{staticClass:"mx-auto"},[e._v(" Designed by "),n("a",{attrs:{href:"http://cameronlai.com"}},[e._v("Cameron Lai")])])])],1)],1)},i=[],s=(n("b0c0"),n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-table",{attrs:{striped:"",hover:"",selectable:"",items:e.items},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(start)",fn:function(t){return[n("b-form-input",{model:{value:t.item.start,callback:function(n){e.$set(t.item,"start",n)},expression:"row.item.start"}})]}},{key:"cell(end)",fn:function(t){return[n("b-form-input",{model:{value:t.item.end,callback:function(n){e.$set(t.item,"end",n)},expression:"row.item.end"}})]}}])}),n("b-row",[n("b-col",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.add()}}},[e._v("Add Row")])],1),n("b-col",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.remove()}}},[e._v("Remove Selected")])],1)],1)],1)}),a=[],c=(n("c975"),n("a434"),{props:["items"],data:function(){return{selected:[]}},methods:{add:function(){this.$props.items.push({start:"2015-11-11,9:00",end:"2015-11-11,12:00"})},remove:function(){for(var e=0;e<this.selected.length;e++){var t=this.$props.items.indexOf(this.selected[e]);t>-1&&this.$props.items.splice(t,1)}},onRowSelected:function(e){this.selected=e}}}),l=c,u=n("2877"),d=Object(u["a"])(l,s,a,!1,null,null,null),m=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-table",{attrs:{striped:"",hover:"",selectable:"",items:e.items},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(name)",fn:function(t){return[n("b-form-input",{model:{value:t.item.name,callback:function(n){e.$set(t.item,"name",n)},expression:"row.item.name"}})]}},{key:"cell(subjects)",fn:function(t){return[n("b-form-input",{model:{value:t.item.subjects,callback:function(n){e.$set(t.item,"subjects",n)},expression:"row.item.subjects"}})]}}])}),n("b-row",[n("b-col",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.add()}}},[e._v("Add Row")])],1),n("b-col",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.remove()}}},[e._v("Remove Selected")])],1)],1)],1)},p=[],b={props:["items"],data:function(){return{selected:[]}},methods:{add:function(){this.$props.items.push({name:"Student Name",subjects:""})},remove:function(){for(var e=0;e<this.selected.length;e++){var t=this.$props.items.indexOf(this.selected[e]);t>-1&&this.$props.items.splice(t,1)}},onRowSelected:function(e){this.selected=e}}},h=b,v=Object(u["a"])(h,f,p,!1,null,null,null),g=v.exports,w=n("bc3a"),y=n.n(w),S={name:"App",components:{EditTableTimeSlots:m,EditTableStudentRecord:g},data:function(){return{rightColPageName:"StudentRecord",timeSlotsItems:[{start:"2015-11-12,9:00",end:"2015-11-12,12:00"},{start:"2015-11-12,15:00",end:"2015-11-12,18:00"}],studentRecordItems:[{name:"A",subjects:"Chinese,English"},{name:"B",subjects:"Chinese,English,Math"},{name:"C",subjects:"Chinese,English,Math"}]}},methods:{generate:function(){console.log("here");var e={};e["timeSlots"]=this.timeSlotsItems,e["studentRecord"]=[];for(var t=0;t<this.studentRecordItems.length;t++){var n=this.studentRecordItems[t],o=n["subjects"].split(",");o.unshift(n.name),console.log(o),e["studentRecord"].push(o)}console.log(e),y.a.post("https://asia-east2-personal-279606.cloudfunctions.net/ext-gen-backend",e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},show:function(e){this.rightColPageName=e}}},_=S,x=(n("034f"),Object(u["a"])(_,r,i,!1,null,null,null)),j=x.exports,k=n("5f5b");n("f9e3"),n("2dd8");o["default"].use(k["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.fae5067d.js.map