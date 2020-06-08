(function(e){function t(t){for(var r,s,a=t[0],c=t[1],l=t[2],d=0,m=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",[n("b-row",[n("h1",{staticClass:"mx-auto"},[e._v("Exam Timetable Generator")])]),n("b-row",[n("p",{staticClass:"mx-auto"},[e._v("Optimizing exam timetables by maximizing revision time between exams")])]),n("hr"),n("b-row",[n("b-col",{attrs:{cols:"3"}},[n("b-row",{staticClass:"m-2"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.show("TimeSlots")}}},[e._v("Edit Time Slots")])],1),n("b-row",{staticClass:"m-2"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.show("StudentRecord")}}},[e._v("Edit Student Record")])],1),n("b-row",{staticClass:"m-2"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.show("Visualize")}}},[e._v("Visualize")])],1),n("b-row",{staticClass:"m-2"},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){e.show("Visualize"),e.generate()}}},[e._v("Generate Timetable")])],1)],1),n("b-col",{attrs:{cols:"9"}},["TimeSlots"===e.rightColPageName?n("div",[n("EditTableTimeSlots",{attrs:{items:e.timeSlotsItems}})],1):e._e(),"StudentRecord"===e.rightColPageName?n("div",[n("EditTableStudentRecord",{attrs:{items:e.studentRecordItems}})],1):e._e(),"Visualize"===e.rightColPageName?n("div",[n("FullCalendar",{attrs:{defaultView:"timeGridWeek",weekends:!1,plugins:e.calendarPlugins,events:e.events,defaultDate:e.defaultDate}})],1):e._e()])],1),n("hr"),n("b-row",[n("p",{staticClass:"mx-auto"},[e._v(" Designed by "),n("a",{attrs:{href:"http://cameronlai.com"}},[e._v("Cameron Lai")])])]),n("hr")],1)],1)},o=[],s=(n("b0c0"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-table",{attrs:{striped:"",hover:"",selectable:"",items:e.items},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(start)",fn:function(t){return[n("b-form-input",{model:{value:t.item.start,callback:function(n){e.$set(t.item,"start",n)},expression:"row.item.start"}})]}},{key:"cell(end)",fn:function(t){return[n("b-form-input",{model:{value:t.item.end,callback:function(n){e.$set(t.item,"end",n)},expression:"row.item.end"}})]}}])}),n("b-row",[n("b-col",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.add()}}},[e._v("Add Row")])],1),n("b-col",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.remove()}}},[e._v("Remove Selected")])],1)],1)],1)},c=[],l=(n("c975"),n("a434"),{props:["items"],data:function(){return{selected:[]}},methods:{add:function(){this.$props.items.push({start:"2015-11-11,9:00",end:"2015-11-11,12:00"})},remove:function(){for(var e=0;e<this.selected.length;e++){var t=this.$props.items.indexOf(this.selected[e]);t>-1&&this.$props.items.splice(t,1)}},onRowSelected:function(e){this.selected=e}}}),u=l,d=n("2877"),m=Object(d["a"])(u,a,c,!1,null,null,null),f=m.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-table",{attrs:{striped:"",hover:"",selectable:"",items:e.items},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(name)",fn:function(t){return[n("b-form-input",{model:{value:t.item.name,callback:function(n){e.$set(t.item,"name",n)},expression:"row.item.name"}})]}},{key:"cell(subjects)",fn:function(t){return[n("b-form-input",{model:{value:t.item.subjects,callback:function(n){e.$set(t.item,"subjects",n)},expression:"row.item.subjects"}})]}}])}),n("b-row",[n("b-col",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.add()}}},[e._v("Add Row")])],1),n("b-col",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.remove()}}},[e._v("Remove Selected")])],1)],1)],1)},b=[],h={props:["items"],data:function(){return{selected:[]}},methods:{add:function(){this.$props.items.push({name:"Student Name",subjects:""})},remove:function(){for(var e=0;e<this.selected.length;e++){var t=this.$props.items.indexOf(this.selected[e]);t>-1&&this.$props.items.splice(t,1)}},onRowSelected:function(e){this.selected=e}}},v=h,g=Object(d["a"])(v,p,b,!1,null,null,null),w=g.exports,y=n("bc3a"),S=n.n(y),_=n("dc09"),x=n("a7c0"),k={name:"App",components:{EditTableTimeSlots:f,EditTableStudentRecord:w,FullCalendar:_["a"]},data:function(){return{calendarPlugins:[x["a"]],rightColPageName:"StudentRecord",timeSlotsItems:[{start:"2015-11-12,9:00",end:"2015-11-12,12:00"},{start:"2015-11-12,15:00",end:"2015-11-12,18:00"}],studentRecordItems:[{name:"A",subjects:"Chinese,English"},{name:"B",subjects:"Chinese,English,Math"},{name:"C",subjects:"Chinese,English,Math"}],defaultDate:"2015-11-11",events:[{description:"",end:"2015-11-11T10:00:00",start:"2015-11-11T09:00:00",title:"Math"},{description:"",end:"2015-11-12T12:00:00",id:"timeSlots",rendering:"background",start:"2015-11-11T09:00:00"},{description:"",end:"2015-11-11T11:00:00",start:"2015-11-11T10:00:00",title:"English"},{description:"",end:"2015-11-11T12:00:00",start:"2015-11-11T11:00:00",title:"Chinese"}]}},methods:{generate:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(this.events=[],t={},t["timeSlots"]=this.timeSlotsItems,t["studentRecord"]=[],n=0;n<this.studentRecordItems.length;n++)r=this.studentRecordItems[n],i=r["subjects"].split(","),i.unshift(r.name),console.log(i),t["studentRecord"].push(i);return console.log(t),e.next=8,S.a.post("https://asia-east2-personal-279606.cloudfunctions.net/ext-gen-backend",t).then((function(e){console.log(e);var t=e.data;o.defaultDate=t.defaultDate,o.events=t.events})).catch((function(e){console.log(e)}));case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),show:function(e){this.rightColPageName=e}}},j=k,R=(n("034f"),n("b184"),Object(d["a"])(j,i,o,!1,null,null,null)),T=R.exports,C=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(C["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(T)}}).$mount("#app")},"85ec":function(e,t,n){},b184:function(e,t,n){"use strict";var r=n("fca8"),i=n.n(r);i.a},fca8:function(e,t,n){}});
//# sourceMappingURL=app.8070689d.js.map