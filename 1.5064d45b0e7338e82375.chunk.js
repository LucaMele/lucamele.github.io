webpackJsonp([1],{806:function(n,e,t){"use strict";var o=t(1),a=t(127),r=function(){function n(){}return n.prototype.ngOnInit=function(){console.log("hello `Detail` component")},n=__decorate([o.Component({selector:"detail",directives:a.ROUTER_DIRECTIVES.slice(),template:"\n    <router-outlet></router-outlet>\n  "}),__metadata("design:paramtypes",[])],n)}();e.Detail=r},807:function(n,e,t){"use strict";var o=t(1),a=function(){function n(){}return n.prototype.ngOnInit=function(){console.log("hello `Index` component")},n=__decorate([o.Component({selector:"index",styles:["\n    md-card{\n      margin: 25px;\n    }\n  "],template:"\n    <md-card>Hello from Index</md-card>\n  "}),__metadata("design:paramtypes",[])],n)}();e.Index=a},441:function(n,e,t){"use strict";function o(n){for(var t in n)e.hasOwnProperty(t)||(e[t]=n[t])}var a=t(806);e.Detail=a.Detail;var r=t(807);e.Index=r.Index,console.log("`Detail` bundle loaded asynchronously"),o(t(808))},808:function(n,e,t){"use strict";var o=t(806),a=t(807);e.routes={path:"detail",component:o.Detail,children:[{path:"",component:a.Index}]}}});
//# sourceMappingURL=1.5064d45b0e7338e82375.bundle.map