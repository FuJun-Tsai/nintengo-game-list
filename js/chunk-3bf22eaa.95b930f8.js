(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bf22eaa"],{"04eb":function(t,e,n){t.exports=n.p+"img/4.56696e3d.jpg"},"05e7":function(t,e,n){t.exports=n.p+"img/1.bcca1d77.jpg"},"0ab2":function(t,e,n){t.exports=n.p+"img/4.f02762e2.jpg"},"0cb2":function(t,e,n){var r=n("7b0b"),c=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,u,s,l){var f=n+t.length,p=u.length,d=o;return void 0!==s&&(s=r(s),d=i),a.call(l,d,(function(r,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":i=s[a.slice(1,-1)];break;default:var o=+a;if(0===o)return r;if(o>p){var l=c(o/10);return 0===l?r:l<=p?void 0===u[l-1]?a.charAt(1):u[l-1]+a.charAt(1):r}i=u[o-1]}return void 0===i?"":i}))}},"107c":function(t,e,n){var r=n("d039"),c=n("da84"),a=c.RegExp;t.exports=r((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("d784"),c=n("44e7"),a=n("825a"),i=n("1d80"),o=n("4840"),u=n("8aa5"),s=n("50c4"),l=n("577e"),f=n("dc4a"),p=n("14c3"),d=n("9263"),g=n("9f7f"),b=n("d039"),v=g.UNSUPPORTED_Y,h=[].push,x=Math.min,j=4294967295,m=!b((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=l(i(this)),a=void 0===n?j:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!c(t))return e.call(r,t,a);var o,u,s,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,b=new RegExp(t.source,p+"g");while(o=d.call(b,r)){if(u=b.lastIndex,u>g&&(f.push(r.slice(g,o.index)),o.length>1&&o.index<r.length&&h.apply(f,o.slice(1)),s=o[0].length,g=u,f.length>=a))break;b.lastIndex===o.index&&b.lastIndex++}return g===r.length?!s&&b.test("")||f.push(""):f.push(r.slice(g)),f.length>a?f.slice(0,a):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var c=i(this),a=void 0==e?void 0:f(e,t);return a?a.call(e,c,n):r.call(l(c),e,n)},function(t,c){var i=a(this),f=l(t),d=n(r,i,f,c,r!==e);if(d.done)return d.value;var g=o(i,RegExp),b=i.unicode,h=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(v?"g":"y"),m=new g(v?"^(?:"+i.source+")":i,h),O=void 0===c?j:c>>>0;if(0===O)return[];if(0===f.length)return null===p(m,f)?[f]:[];var y=0,E=0,w=[];while(E<f.length){m.lastIndex=v?0:E;var I,R=p(m,v?f.slice(E):f);if(null===R||(I=x(s(m.lastIndex+(v?E:0)),f.length))===y)E=u(f,E,b);else{if(w.push(f.slice(y,E)),w.length===O)return w;for(var k=1;k<=R.length-1;k++)if(w.push(R[k]),w.length===O)return w;E=y=I}}return w.push(f.slice(y)),w}]}),!m,v)},"14c3":function(t,e,n){var r=n("825a"),c=n("1626"),a=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if(c(n)){var o=n.call(t,e);return null!==o&&r(o),o}if("RegExp"===a(t))return i.call(t,e);throw TypeError("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,n){var r=n("da84"),c=n("fdbc"),a=n("785a"),i=n("17c2"),o=n("9112"),u=function(t){if(t&&t.forEach!==i)try{o(t,"forEach",i)}catch(e){t.forEach=i}};for(var s in c)c[s]&&u(r[s]&&r[s].prototype);u(a)},1691:function(t,e,n){},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,c=n("a640"),a=c("forEach");t.exports=a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),a=n("2d00"),i=c("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f95":function(t,e,n){t.exports=n.p+"img/2.9f935ac1.jpg"},3103:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("a4d3"),n("e01a"),n("99af"),n("a15b"),n("ac1f"),n("1276");var r=n("7a23"),c={class:"container"},a={class:"row"},i={class:"col-12"},o={class:"mb-2 ps-2 name"},u={class:"col-12 mb-4 ps-3"},s={key:0},l={class:"color-red"},f={class:"mb-1 letter-space-1"},p=Object(r["g"])("hr",{class:"mt-0"},null,-1),d=["innerHTML"],g=["src"],b={class:"col-12 mb-5 text-center"};function v(t,e,v,h,x,j){var m=Object(r["z"])("banner");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(m),Object(r["g"])("div",c,[Object(r["g"])("div",a,[Object(r["g"])("div",i,[Object(r["g"])("h1",o,Object(r["B"])(x.name),1)]),Object(r["g"])("div",u,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(x.attr,(function(t,e){return Object(r["s"])(),Object(r["f"])("span",{key:t},[e>0?(Object(r["s"])(),Object(r["f"])("span",s,"／")):Object(r["e"])("",!0),Object(r["g"])("span",l,Object(r["B"])(t),1)])})),128))]),(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(x.content.length,(function(t,e){return Object(r["s"])(),Object(r["f"])("div",{key:e,class:"col-12 mb-5"},[Object(r["g"])("h3",f,Object(r["B"])(x.content.title[e]),1),p,Object(r["g"])("p",{innerHTML:x.content.description[e],class:"mb-3 letter-space-1"},null,8,d),Object(r["g"])("img",{src:n("9308")("./".concat(x.name.split(" ").join("-"),"/").concat(e+1,".jpg")),class:"m-auto col-md-8 d-block",alt:"圖片不完整或者沒有圖片"},null,8,g)])})),128)),Object(r["g"])("div",b,[Object(r["g"])("span",{class:"btn",onClick:e[0]||(e[0]=function(t){return j.goList()})},"返回列表")])])])],64)}n("a434"),n("d3b7"),n("ddb0"),n("159b"),n("5319");var h=n("b9ad"),x={components:{banner:h["a"]},data:function(){return{name:"",attr:"",content:{title:[],description:[],length:0}}},methods:{getData:function(){var t=this,e=[this.$route.params.name],n=e[0],r="https://sheets.googleapis.com/v4/spreadsheets/1ZAFezd3cItauJwNMB4mRqTHOck_8usjE5RFcgzowiso/values/".concat(n,"?alt=json&key=AIzaSyA1tZh-XNAsEOc4sxWjyGoFznw-JlITBpE");this.$http.get(r).then((function(e){var n=/\n/gi,r=[e.data.values[0][0],e.data.values[1]];t.name=r[0],t.attr=r[1],e.data.values.splice(0,2),e.data.values.forEach((function(e,r){if(r%2===1){var c="";c=e[0].replace(n,"<br>"),t.content.description.push(c)}else t.content.title.push(e[0]),t.content.length+=1}))})).catch((function(){t.$router.replace({name:"Error"})}))},goList:function(){this.$router.back()}},created:function(){this.getData()}},j=(n("a92f"),n("6b0d")),m=n.n(j);const O=m()(x,[["render",v]]);e["default"]=O},"44e7":function(t,e,n){var r=n("861d"),c=n("c6b6"),a=n("b622"),i=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==c(t))}},"4e37":function(t,e,n){t.exports=n.p+"img/3.2356e625.jpg"},5319:function(t,e,n){"use strict";var r=n("d784"),c=n("d039"),a=n("825a"),i=n("1626"),o=n("a691"),u=n("50c4"),s=n("577e"),l=n("1d80"),f=n("8aa5"),p=n("dc4a"),d=n("0cb2"),g=n("14c3"),b=n("b622"),v=b("replace"),h=Math.max,x=Math.min,j=function(t){return void 0===t?t:String(t)},m=function(){return"$0"==="a".replace(/./,"$0")}(),O=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),y=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=O?"$":"$0";return[function(t,n){var r=l(this),c=void 0==t?void 0:p(t,v);return c?c.call(t,r,n):e.call(s(r),t,n)},function(t,c){var l=a(this),p=s(t);if("string"===typeof c&&-1===c.indexOf(r)&&-1===c.indexOf("$<")){var b=n(e,l,p,c);if(b.done)return b.value}var v=i(c);v||(c=s(c));var m=l.global;if(m){var O=l.unicode;l.lastIndex=0}var y=[];while(1){var E=g(l,p);if(null===E)break;if(y.push(E),!m)break;var w=s(E[0]);""===w&&(l.lastIndex=f(p,u(l.lastIndex),O))}for(var I="",R=0,k=0;k<y.length;k++){E=y[k];for(var $=s(E[0]),A=h(x(o(E.index),p.length),0),T=[],M=1;M<E.length;M++)T.push(j(E[M]));var S=E.groups;if(v){var _=[$].concat(T,A,p);void 0!==S&&_.push(S);var N=s(c.apply(void 0,_))}else N=d($,p,A,T,S,c);A>=R&&(I+=p.slice(R,A)+N,R=A+$.length)}return I+p.slice(R)}]}),!y||!m||O)},5948:function(t,e,n){t.exports=n.p+"img/1.7d18a945.jpg"},"6b88":function(t,e,n){t.exports=n.p+"img/4.534965e1.jpg"},"6ec2":function(t,e,n){t.exports=n.p+"img/1.5bd46b6c.jpg"},7189:function(t,e,n){t.exports=n.p+"img/3.098ab2a6.jpg"},7731:function(t,e,n){t.exports=n.p+"img/3.9b81aac5.jpg"},"7e5d":function(t,e,n){t.exports=n.p+"img/4.4702939a.jpg"},"7ee8":function(t,e,n){t.exports=n.p+"img/4.ac74b9e3.jpg"},8418:function(t,e,n){"use strict";var r=n("a04b"),c=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?c.f(t,i,a(0,n)):t[i]=n}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8e84":function(t,e,n){t.exports=n.p+"img/3.b2bc1f61.jpg"},9263:function(t,e,n){"use strict";var r=n("577e"),c=n("ad6d"),a=n("9f7f"),i=n("5692"),o=n("7c73"),u=n("69f3").get,s=n("fce3"),l=n("107c"),f=RegExp.prototype.exec,p=i("native-string-replace",String.prototype.replace),d=f,g=function(){var t=/a/,e=/b*/g;return f.call(t,"a"),f.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),b=a.UNSUPPORTED_Y||a.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],h=g||v||b||s||l;h&&(d=function(t){var e,n,a,i,s,l,h,x=this,j=u(x),m=r(t),O=j.raw;if(O)return O.lastIndex=x.lastIndex,e=d.call(O,m),x.lastIndex=O.lastIndex,e;var y=j.groups,E=b&&x.sticky,w=c.call(x),I=x.source,R=0,k=m;if(E&&(w=w.replace("y",""),-1===w.indexOf("g")&&(w+="g"),k=m.slice(x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==m.charAt(x.lastIndex-1))&&(I="(?: "+I+")",k=" "+k,R++),n=new RegExp("^(?:"+I+")",w)),v&&(n=new RegExp("^"+I+"$(?!\\s)",w)),g&&(a=x.lastIndex),i=f.call(E?n:x,k),E?i?(i.input=i.input.slice(R),i[0]=i[0].slice(R),i.index=x.lastIndex,x.lastIndex+=i[0].length):x.lastIndex=0:g&&i&&(x.lastIndex=x.global?i.index+i[0].length:a),v&&i&&i.length>1&&p.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i&&y)for(i.groups=l=o(null),s=0;s<y.length;s++)h=y[s],l[h[0]]=i[h[1]];return i}),t.exports=d},9308:function(t,e,n){var r={"./健身環大冒險/1.jpg":"e799","./健身環大冒險/2.jpg":"eade","./健身環大冒險/3.jpg":"af7f","./健身環大冒險/4.jpg":"6b88","./瓦利歐製造/1.jpg":"6ec2","./瓦利歐製造/2.jpg":"f539","./瓦利歐製造/3.jpg":"7189","./瓦利歐製造/4.jpg":"7ee8","./聖劍傳說-3/1.jpg":"05e7","./聖劍傳說-3/2.jpg":"1f95","./聖劍傳說-3/3.jpg":"b31c","./聖劍傳說-3/4.jpg":"04eb","./薩爾達傳說-曠野之息/1.jpg":"a276","./薩爾達傳說-曠野之息/2.jpg":"e6fb","./薩爾達傳說-曠野之息/3.jpg":"7731","./薩爾達傳說-曠野之息/4.jpg":"9a8d","./超級瑪利歐-奧德賽/1.jpg":"fcca","./超級瑪利歐-奧德賽/2.jpg":"c7dc","./超級瑪利歐-奧德賽/3.jpg":"8e84","./超級瑪利歐-奧德賽/4.jpg":"7e5d","./路易吉洋樓-3/1.jpg":"5948","./路易吉洋樓-3/2.jpg":"f777","./路易吉洋樓-3/3.jpg":"4e37","./路易吉洋樓-3/4.jpg":"0ab2"};function c(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}c.keys=function(){return Object.keys(r)},c.resolve=a,t.exports=c,c.id="9308"},"99af":function(t,e,n){"use strict";var r=n("23e7"),c=n("d039"),a=n("e8b5"),i=n("861d"),o=n("7b0b"),u=n("50c4"),s=n("8418"),l=n("65f0"),f=n("1dde"),p=n("b622"),d=n("2d00"),g=p("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",h=d>=51||!c((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),x=f("concat"),j=function(t){if(!i(t))return!1;var e=t[g];return void 0!==e?!!e:a(t)},m=!h||!x;r({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,r,c,a,i=o(this),f=l(i,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?i:arguments[e],j(a)){if(c=u(a.length),p+c>b)throw TypeError(v);for(n=0;n<c;n++,p++)n in a&&s(f,p,a[n])}else{if(p>=b)throw TypeError(v);s(f,p++,a)}return f.length=p,f}})},"9f7f":function(t,e,n){var r=n("d039"),c=n("da84"),a=c.RegExp;e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var r=n("23e7"),c=n("44ad"),a=n("fc6a"),i=n("a640"),o=[].join,u=c!=Object,s=i("join",",");r({target:"Array",proto:!0,forced:u||!s},{join:function(t){return o.call(a(this),void 0===t?",":t)}})},a434:function(t,e,n){"use strict";var r=n("23e7"),c=n("23cb"),a=n("a691"),i=n("50c4"),o=n("7b0b"),u=n("65f0"),s=n("8418"),l=n("1dde"),f=l("splice"),p=Math.max,d=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var n,r,l,f,v,h,x=o(this),j=i(x.length),m=c(t,j),O=arguments.length;if(0===O?n=r=0:1===O?(n=0,r=j-m):(n=O-2,r=d(p(a(e),0),j-m)),j+n-r>g)throw TypeError(b);for(l=u(x,r),f=0;f<r;f++)v=m+f,v in x&&s(l,f,x[v]);if(l.length=r,n<r){for(f=m;f<j-r;f++)v=f+r,h=f+n,v in x?x[h]=x[v]:delete x[h];for(f=j;f>j-r+n;f--)delete x[f-1]}else if(n>r)for(f=j-r;f>m;f--)v=f+r-1,h=f+n-1,v in x?x[h]=x[v]:delete x[h];for(f=0;f<n;f++)x[f+m]=arguments[f+2];return x.length=j-r+n,l}})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a92f:function(t,e,n){"use strict";n("f434")},ac1f:function(t,e,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},af7f:function(t,e,n){t.exports=n.p+"img/3.025a460e.jpg"},b0c0:function(t,e,n){var r=n("83ab"),c=n("5e77").EXISTS,a=n("9bf2").f,i=Function.prototype,o=i.toString,u=/^\s*function ([^ (]*)/,s="name";r&&!c&&a(i,s,{configurable:!0,get:function(){try{return o.call(this).match(u)[1]}catch(t){return""}}})},b31c:function(t,e,n){t.exports=n.p+"img/3.11532bf0.jpg"},b9ad:function(t,e,n){"use strict";var r=n("7a23"),c=n("a276"),a=n.n(c),i=function(t){return Object(r["v"])("data-v-df61c244"),t=t(),Object(r["t"])(),t},o={class:"container-fluid mb-5"},u=i((function(){return Object(r["g"])("div",{class:"row"},[Object(r["g"])("div",{class:"col-12 p-0"},[Object(r["g"])("img",{src:a.a,alt:""})])],-1)})),s=[u];function l(t,e,n,c,a,i){return Object(r["s"])(),Object(r["f"])("div",o,s)}var f={name:"",props:{msg:String}},p=(n("d99b"),n("6b0d")),d=n.n(p);const g=d()(f,[["render",l],["__scopeId","data-v-df61c244"]]);e["a"]=g},c7dc:function(t,e,n){t.exports=n.p+"img/2.ea5aadc9.jpg"},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),c=n("9263"),a=n("d039"),i=n("b622"),o=n("9112"),u=i("species"),s=RegExp.prototype;t.exports=function(t,e,n,l){var f=i(t),p=!a((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),d=p&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!p||!d||n){var g=/./[f],b=e(f,""[t],(function(t,e,n,r,a){var i=e.exec;return i===c||i===s.exec?p&&!a?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,b[0]),r(s,f,b[1])}l&&o(s[f],"sham",!0)}},d99b:function(t,e,n){"use strict";n("1691")},e799:function(t,e,n){t.exports=n.p+"img/1.d57b8d4b.jpg"},eade:function(t,e,n){t.exports=n.p+"img/2.fb9aa36b.jpg"},f434:function(t,e,n){},f539:function(t,e,n){t.exports=n.p+"img/2.7d8d5d1a.jpg"},f777:function(t,e,n){t.exports=n.p+"img/2.6ab86668.jpg"},fce3:function(t,e,n){var r=n("d039"),c=n("da84"),a=c.RegExp;t.exports=r((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-3bf22eaa.95b930f8.js.map