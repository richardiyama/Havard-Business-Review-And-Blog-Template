window.googletag&&typeof googletag._=='function'&&googletag._(function(_){var It=function(a,b){return _.aa[a]=b},Jt=function(a){var b=a._html_,c=b;if(_.v(b)){for(var d=/v[uv]\(\s*["']([^)]+?)["']\s*\);?/g,e;null!==(e=d.exec(b));){var f=e[1];!f||-1==f.indexOf("/adview")&&-1==f.indexOf("/pcs/view")||(f=f.replace(/\\x([a-f0-9]{2})/ig,function(a,b){return String.fromCharCode((0,window.parseInt)(b,16))}),c=c.replace(e[0],""),_.be(window,f,void 0))}a._html_=c}},Kt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Lt=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Kt.length;f++)c=Kt[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},Mt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},Nt=function(a,b){_.Kb(b,function(b,d){b&&b.lb&&(b=b.Sa());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Mt.hasOwnProperty(d)?a.setAttribute(Mt[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Ot=function(a){if(a&&"number"==typeof a.length){if(_.Ka(a))return"function"==typeof a.item||"string"==typeof a.item;if(_.Ia(a))return"function"==typeof a.item}return!1},Pt=function(a,b,c){function d(c){c&&b.appendChild(_.v(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!_.Ha(f)||_.Ka(f)&&0<f.nodeType?d(f):_.A(Ot(f)?_.Ab(f):f,d)}};_.ud.prototype.l=It(6,function(a,b,c){var d=this.j,e=arguments,f=String(e[0]),g=e[1];if(!_.pd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',_.fb(g.name),'"');if(g.type){f.push(' type="',_.fb(g.type),'"');var h={};Lt(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=d.createElement(f);g&&(_.v(g)?f.className=g:_.x(g)?f.className=g.join(" "):Nt(f,g));2<e.length&&Pt(d,f,e);return f});var Qt={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Rt={"'":"\\'"},St=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0),f=c+1,g;if(!(g=Qt[d])){if(!(31<e&&127>e))if(d in Rt)d=Rt[d];else if(d in Qt)d=Rt[d]=Qt[d];else{g=d.charCodeAt(0);if(31<g&&127>g)e=d;else{if(256>g){if(e="\\x",16>g||256<g)e+="0"}else e="\\u",4096>g&&(e+="0");e+=g.toString(16).toUpperCase()}d=Rt[d]=e}g=d}b[f]=g}b.push('"');return b.join("")},Tt=function(){var a=["allow-top-navigation","allow-modals","allow-orientation-lock","allow-presentation"];return _.ha("allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation".split(" "),function(b){return!_.vb(a,b)}).join(" ")},Ut=function(a){"number"==typeof a&&(a=Math.round(a)+"px");return a},Vt=function(a,b){var c=a.ampInaboxIframes=a.ampInaboxIframes||[];b&&c.push(b);a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[];c.google_amp_listener_added||(c.google_amp_listener_added=!0,_.D(a,"message",function(b){var c;a.ampInaboxPendingMessages&&(c=/^amp-(\d{15,20})?/.exec(b.data))&&(a.ampInaboxPendingMessages.push(b),a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||_.fd(a.document,"https://cdn.ampproject.org/"+(c[1]?"rtv/"+c[1]+"/":"")+"amp4ads-host-v0.js"))}))},Wt=function(a,b){return _.be(window,a,b)},Xt=function(){this.l=this.l;this.m=this.m};Xt.prototype.l=!1;Xt.prototype.v=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var Yt=function(){},Zt={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},$t=function(a,b){b.push('"',a.replace(_.oe,function(a){var b=Zt[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Zt[a]=b);return b}),'"')},au=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(_.x(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),au(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),$t(d,c),c.push(":"),au(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":$t(b,c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},bu=function(a){var b=[];au(new Yt,a,b);return b.join("")},cu=function(a){this.j=a;this.l=_.lb()},du=function(a){var b={};_.A(a,function(a){b[a.j]=a.l});return b},eu=function(a){var b={};b.c=a.C;b.i=a.A;a.I&&(b.e=a.I);a.o.postMessage(bu(b),a.D)},fu=function(a,b,c,d,e,f){Xt.call(this);this.C=a;this.status=1;this.o=b;this.D=c;this.N=d;this.Ja=!!e;this.A=Math.random();this.F={};this.j=null;this.H=(0,_.z)(this.L,this);this.I=f};_.Ra(fu,Xt);fu.prototype.L=function(a){if(a.origin===this.D&&(this.Ja||a.source==this.o)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(_.Ka(b)&&(a=b.i,b.c===this.C&&a!=this.A&&(2!==this.status&&(this.status=2,eu(this),this.j&&(this.j(),this.j=null)),a=b.s,b=b.p,_.v(a)&&(_.v(b)||_.Ka(b))&&this.F.hasOwnProperty(a))))this.F[a](b)}};fu.prototype.J=function(){if(1===this.status){try{this.o.postMessage&&eu(this)}catch(a){}window.setTimeout((0,_.z)(this.J,this),50)}};fu.prototype.connect=function(a){a&&(this.j=a);_.D(window,"message",this.H);this.N&&this.J()};fu.prototype.v=function(){this.status=3;_.Ud(window,"message",this.H);fu.cc.v.call(this)};var gu=function(a,b,c){a.F[b]=c},hu=function(a,b,c){var d={};d.c=a.C;d.i=a.A;d.s=b;d.p=c;a.o.postMessage(bu(d),a.D)},iu=function(a){return bu({windowCoords_t:a.m.top,windowCoords_r:a.m.right,windowCoords_b:a.m.bottom,windowCoords_l:a.m.left,frameCoords_t:a.l.top,frameCoords_r:a.l.right,frameCoords_b:a.l.bottom,frameCoords_l:a.l.left,styleZIndex:a.o,allowedExpansion_t:a.j.top,allowedExpansion_r:a.j.right,allowedExpansion_b:a.j.bottom,allowedExpansion_l:a.j.left,xInView:a.v,yInView:a.A})},ju=function(a){this.m=a;this.v=null;this.J=this.status=0;this.l=null;this.ga="sfchannel"+a},ku=function(a){this.j=a},lu=function(a,b){this.Pa=a;this.Qa=b},mu=function(a,b,c,d,e,f,g,h){h=void 0===h?[]:h;this.v=a;this.l=b;this.m=c;this.permissions=d;this.o=e;this.A=f;this.Ja=g;this.hostpageLibraryTokens=h;this.j=""},nu=function(a){this.j=a},ou=function(a,b){this.j=a;this.version=b};_.Ra(ou,nu);ou.prototype.m=function(){return bu({uid:this.j,version:this.version})};var pu=function(a,b,c){this.j=a;this.o=b;this.l=c};_.Ra(pu,nu);pu.prototype.m=function(){return bu({uid:this.j,initialWidth:this.o,initialHeight:this.l})};var qu=function(a,b){this.j=a;this.l=b};_.Ra(qu,nu);qu.prototype.m=function(){return bu({uid:this.j,description:this.l})};var ru=function(a,b,c){this.j=a;this.l=b;this.push=c};_.Ra(ru,nu);ru.prototype.m=function(){return bu({uid:this.j,expand_t:this.l.top,expand_r:this.l.right,expand_b:this.l.bottom,expand_l:this.l.left,push:this.push})};var su=function(a){this.j=a};_.Ra(su,nu);su.prototype.m=function(){return bu({uid:this.j})};var tu=function(a,b){this.j=a;this.o=b};_.Ra(tu,nu);tu.prototype.m=function(){var a={uid:this.j,newGeometry:iu(this.o)};return bu(a)};var uu=function(a,b,c,d,e){tu.call(this,a,c);this.v=b;this.l=d;this.push=e};_.Ra(uu,tu);uu.prototype.m=function(){var a={uid:this.j,success:this.v,newGeometry:iu(this.o),expand_t:this.l.top,expand_r:this.l.right,expand_b:this.l.bottom,expand_l:this.l.left,push:this.push};return bu(a)};var vu=function(a,b,c,d){this.j=a;this.width=b;this.height=c;this.l=void 0===d?"":d};_.Ra(vu,nu);vu.prototype.m=function(){var a={uid:this.j,width:this.width,height:this.height};this.l&&(a.sentinel=this.l);return bu(a)};var wu=function(){this.j=[]},xu=function(a,b,c,d){this.m=a;this.j=(this.l=!!(_.u(d)&&a.style&&a.style.getPropertyPriority))?String(b).replace(/([A-Z])/g,"-$1").toLowerCase():b;this.o=this.l?a.style.getPropertyValue(this.j):a.style[this.j];this.v=this.l?a.style.getPropertyPriority(this.j):void 0;this.l?(a.style.removeProperty(this.j),a.style.setProperty(this.j,String(c),d)):a.style[this.j]=String(c)},yu=function(a,b,c,d,e){a.j.push(new xu(b,c,d,e))},zu=function(a,b,c,d){yu(a,b,c,d+"px",void 0)},Au=1,Bu=!1,Cu=function(a,b,c){a.H?(b.style.width=Ut("100%"),b.style.height=Ut("auto")):(b.style.width=Ut(c.width),b.style.height=Ut(c.height))},Du=function(a,b,c){c=_.yf(b,a.O,a.$,c);var d=[];a.V&&(b=_.od(b.location.href),d.push([0<b.length?"google_debug"+(b?"="+b:"")+"&":"","xpc=","sf-gdn-exp-"+a.m,"&p=",(0,window.encodeURIComponent)(_.t.document.location.protocol),"//",(0,window.encodeURIComponent)(_.t.document.location.host)].join("")));a.X.length&&d.push("eid="+a.X.join());d.length&&(c+="#"+d.join("&"));return c},Eu=function(a,b,c,d,e,f,g){var h;if(a.H){var l=h=0;d="min-width:100%"}else h=d.width,l=d.height,d="";b={id:b,title:f||"",name:c,src:Du(a,_.Cd(e),g),scrolling:"no",marginWidth:"0",marginHeight:"0",width:String(h),height:String(l),"data-is-safeframe":"true"};c=_.bc&&!_.uc(9)?"javascript:\"<html><body style='background:transparent'></body></html>\"":"about:blank";c={frameborder:0,style:"border:0;vertical-align:bottom;"+(d||""),allowTransparency:"true",src:c};b&&Lt(c,b);e=e.l("IFRAME",c);a.Z&&(e.sandbox=Tt());a.A.appendChild(e);return e},Fu=function(a,b){var c=_.wd(a.A),d=b.content;d=a.O+";"+d.length+";"+d;var e=new mu(a.m,a.ca,a.Y,a.T,new ku({shared:{sf_ver:a.O,ck_on:window.navigator.cookieEnabled?1:0,flash_ver:_.ye?_.ze:"0"}}),a.H,a.da,a.fa);var f={};f.uid=e.v;f.hostPeerName=e.l;f.initialGeometry=iu(e.m);var g=e.permissions;g=bu({expandByOverlay:g.Pa,expandByPush:g.Qa,readCookie:!1,writeCookie:!1});f=(f.permissions=g,f.metadata=bu(e.o.j),f.reportCreativeGeometry=e.A,f.isDifferentSourceWindow=e.Ja,f.goog_safeframe_hlt=du(e.hostpageLibraryTokens),f);e.j&&(f.sentinel=e.j);e=bu(f);e=d+e;d=!1===b.hc;if(a.V&&b.size instanceof _.td){f=b.kb;g=b.size;var h=_.wd(a.A);Bu||(_.fd(h.j,(a.ha?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe"),Bu=!0);h=_.Cd(h);h.google_eas_queue=h.google_eas_queue||[];h.google_eas_queue.push({a:f,b:h.location.protocol+"//tpc.googlesyndication.com",c:g.width,d:g.height,e:"sf-gdn-exp-"+a.m,f:void 0,g:void 0,h:void 0,i:void 0})}if(b.$d)if(h=b.kb,f=b.size,b=b.Ob,g=window.document.getElementById(h)){a:{try{var l=g.contentWindow||(g.contentDocument?_.zd(g.contentDocument):null);break a}catch(n){}l=null}l.name=e;_.Sb()&&0<=_.nb(_.Vb(),10)&&(g.name=e);a.H?(f=e=0,g.style.minWidth="100%"):(e=f.width,f=f.height);g.width=String(e);g.height=String(f);g.title=b||"";g.setAttribute("data-is-safeframe","true");l.location.replace(Du(a,_.Cd(c),d));a.Z&&(g.sandbox=Tt());a.j=g}else a.j=Eu(a,h,e,f,c,b,d);else a.j=Eu(a,b.kb,e,b.size,c,b.Ob,d)},Gu=function(a){a.v=_.xf(a.j,a.I,a.P);a.P=null;hu(a.l,"geometry_update",(new tu(a.m,a.v)).m())},Hu=function(a){ju.call(this,Au++);this.D=a.td;this.H=1==a.size;this.T=new lu(a.permissions.Pa&&!this.H,a.permissions.Qa&&!this.H);this.A=a.qb;this.X=a.Ud||[];this.fa=a.hostpageLibraryTokens||[];var b=window.location;this.ca="file:"==b.protocol?"*":b.protocol+"//"+b.host;this.da=!!a.Ja;this.aa=(!1===a.hc?"https:":window.location.protocol)+"//tpc.googlesyndication.com";this.V=!!a.ed;this.ha=!!a.ae;this.Z=a.sandbox||!1;this.o=new wu;Cu(this,a.qb,a.size);this.I=a.gd||!1;this.v=this.Y=_.xf(a.qb,this.I);this.O=a.Vd||"1-0-13";this.$=a.ad||"";Fu(this,a);this.P=null;this.L=(0,_.z)(this.hb,this);this.N=-1;this.C=0;this.F=null;!a.pd||"function"!==typeof window.IntersectionObserver||_.jc||_.gc||(this.F=new window.IntersectionObserver((0,_.z)(function(a){this.P=a[a.length-1];this.hb()},this)));this.l=new fu(this.ga,this.j.contentWindow,this.aa,!1);gu(this.l,"init_done",(0,_.z)(this.qd,this));gu(this.l,"register_done",(0,_.z)(this.Rd,this));gu(this.l,"report_error",(0,_.z)(this.Td,this));gu(this.l,"expand_request",(0,_.z)(this.fd,this));gu(this.l,"collapse_request",(0,_.z)(this.bd,this));gu(this.l,"creative_geometry_update",(0,_.z)(this.dd,this));this.l.connect((0,_.z)(this.Pd,this));var c=(0,_.z)(function(){this.j&&(this.j.name="",a.Ub&&a.Ub(),_.Ud(this.j,"load",c))},this);_.D(this.j,"load",c)};_.Ra(Hu,ju);_.k=Hu.prototype;_.k.Pd=function(){this.F&&this.j?this.F.observe(this.j):(_.D(window,"resize",this.L),_.D(window,"scroll",this.L))};_.k.qd=function(a){try{if(0!=this.status)throw Error("Container already initialized");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.Ka(b)&&_.m(b.uid)&&_.v(b.version)))throw Error("Cannot parse JSON message");var c=new ou(b.uid,b.version);if(this.m!=c.j||this.O!=c.version)throw Error("Wrong source container");this.status=1}catch(d){this.D.error("Invalid INITIALIZE_DONE message. Reason: "+d.message)}};_.k.Rd=function(a){try{if(1!=this.status)throw Error("Container not initialized");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.Ka(b)&&_.m(b.uid)&&_.m(b.initialWidth)&&_.m(b.initialHeight)))throw Error("Cannot parse JSON message");if(this.m!=(new pu(b.uid,b.initialWidth,b.initialHeight)).j)throw Error("Wrong source container");this.status=2}catch(c){this.D.error("Invalid REGISTER_DONE message. Reason: "+c.message)}};_.k.Td=function(a){try{if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.Ka(b)&&_.m(b.uid)&&_.v(b.description)))throw Error("Cannot parse JSON message");var c=new qu(b.uid,b.description);if(this.m!=c.j)throw Error("Wrong source container");this.D.info("Ext reported an error. Description: "+c.l)}catch(d){this.D.error("Invalid REPORT_ERROR message. Reason: "+d.message)}};_.k.fd=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(0!=this.J)throw Error("Container is not collapsed");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.Ka(b)&&_.m(b.uid)&&_.m(b.expand_t)&&_.m(b.expand_r)&&_.m(b.expand_b)&&_.m(b.expand_l)&&_.Da(b.push)))throw Error("Cannot parse JSON message");var c=new ru(b.uid,new _.Dd(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push);if(this.m!=c.j)throw Error("Wrong source container");if(!(0<=c.l.top&&0<=c.l.left&&0<=c.l.bottom&&0<=c.l.right))throw Error("Invalid expansion amounts");var d;if(d=c.push&&this.T.Qa||!c.push&&this.T.Pa){var e=c.l,f=c.push,g=this.v=_.xf(this.j,this.I);if(e.top<=g.j.top&&e.right<=g.j.right&&e.bottom<=g.j.bottom&&e.left<=g.j.left){if(!f)for(var h=this.j.parentNode;h&&h.style;h=h.parentNode)yu(this.o,h,"overflowX","visible","important"),yu(this.o,h,"overflowY","visible","important");var l=this.v.l,n=this.v.l,p=_.Gd(new _.Fd(0,0,l.right-l.left,n.bottom-n.top));_.Ka(e)?(p.top-=e.top,p.right+=e.right,p.bottom+=e.bottom,p.left-=e.left):(p.top-=e,p.right+=Number(void 0),p.bottom+=Number(void 0),p.left-=Number(void 0));yu(this.o,this.A,"position","relative");yu(this.o,this.j,"position","absolute");f?(zu(this.o,this.A,"width",p.right-p.left),zu(this.o,this.A,"height",p.bottom-p.top)):yu(this.o,this.j,"zIndex","10000");zu(this.o,this.j,"width",p.right-p.left);zu(this.o,this.j,"height",p.bottom-p.top);zu(this.o,this.j,"left",p.left);zu(this.o,this.j,"top",p.top);this.J=2;this.v=_.xf(this.j,this.I);d=!0}else d=!1}a=d;hu(this.l,"expand_response",(new uu(this.m,a,this.v,c.l,c.push)).m());if(!a)throw Error("Viewport or document body not large enough to expand into.");}catch(w){this.D.error("Invalid EXPAND_REQUEST message. Reason: "+w.message)}};_.k.bd=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(2!=this.J)throw Error("Container is not expanded");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!_.Ka(b)||!_.m(b.uid))throw Error("Cannot parse JSON message");if(this.m!=(new su(b.uid)).j)throw Error("Wrong source container");_.zf(this);hu(this.l,"collapse_response",(new tu(this.m,this.v)).m())}catch(c){this.D.error("Invalid COLLAPSE_REQUEST message. Reason: "+c.message)}};_.k.hb=function(){if(1==this.status||2==this.status)switch(this.C){case 0:Gu(this);this.N=window.setTimeout((0,_.z)(this.Mb,this),1E3);this.C=1;break;case 1:this.C=2;break;case 2:this.C=2}};_.k.dd=function(a){try{if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.Ka(b)&&_.m(b.uid)&&_.m(b.width)&&_.m(b.height))||b.sentinel&&!_.v(b.sentinel))throw Error("Cannot parse JSON message");var c=new vu(b.uid,b.width,b.height,b.sentinel);if(this.m!=c.j)throw Error("Wrong source container");var d=String(c.height);this.H?d!=this.j.height&&(this.j.height=d,this.hb()):this.D.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")}catch(e){this.D.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: "+e.message)}};_.k.Mb=function(){if(1==this.status||2==this.status)switch(this.C){case 1:this.C=0;break;case 2:Gu(this),this.N=window.setTimeout((0,_.z)(this.Mb,this),1E3),this.C=1}};var Iu=function(){_.ai.is(_.og.Pc)?_.G(_.bi,_.pg.Ma):_.Xf(_.ai)||_.G(_.bi,_.pg.ba);return _.ha(_.Xe(),function(a){return _.Tf[a]})},Ju=function(a){for(var b={},c=0;c<a.length;++c)_.C(a[c],function(a,c){b[c]=a});return b},Ku=function(){var a=_.Gb;return null!=a&&-1!=a.indexOf("MSIE ")&&-1==a.indexOf("IEMobile")},Lu=function(a){if(!a||0==_.tl()||"hidden"!=a.style.visibility||"none"!=a.style.display)return!1;a.parentNode.removeChild(a);return!0},Mu=function(a,b,c,d,e,f,g,h,l,n,p){var w=_.zr,y;_.x(e)?y=new _.td(e[0],e[1]):y=1;e=_.$h.is(_.ng.w);var I=_.Li.is(_.$g.w);return new Hu({qb:b,kb:c,Ob:w,content:_.Pl(d),size:y,td:{info:function(){},G:function(){},error:function(){}},ed:l,Ub:f,sandbox:_.u(g.sandbox)?g.sandbox:!1,permissions:{Pa:_.u(g.allowOverlayExpansion)?g.allowOverlayExpansion:!h,Qa:_.u(g.allowPushExpansion)?g.allowPushExpansion:!1},gd:_.Th.is(_.ig.w),Ja:!!_.Ef().fifWin,pd:e,Ud:Iu(),$d:n,Vd:_.fl(),ad:_.gl(a.location.host),ae:_.rl(a,!0),hc:_.rl(a,I),hostpageLibraryTokens:p})},Nu=function(a,b,c,d){_.Qm(a,"ad_fetch_period",b,d);_.gf(_.jl.u(),(4).toString(),b);_.$m(a,c,"ad."+b)},Ou=function(a){return a.U?!!a.U._is_afc_:null},Pu=function(a){return a.U?!!a.U._afc_expandable_:!0},Qu=function(){var a=_.Uq.u();if((0,_.Ap)()){var b=_.Vq(window);2!==a.j[b]&&3!==a.j[b]&&(a.j[b]=2,_.Wq(a,b,"preload"))}},Ru=function(a,b){var c=Wt(b,_.N(290,function(){a.j[b]=3;_.xb(window.google_image_requests,c)}))},Su=function(a,b,c){a.Ta||(a.Ta=!0,a=function(){try{var a=b.document.createElement("iframe");a.id="ace-frame";a.src=c;a.style.visibility="hidden";a.style.display="none";b.document.body.appendChild(a)}catch(e){}},b.requestIdleCallback?b.requestIdleCallback(a):b.setTimeout(a,0))},Tu=function(a,b){if(!a.Va&&b==b.top){a.Va=!0;try{_.D(b,"beforeunload",function(){try{var a=_.Il()+"//www.googletagservices.com/tag/js/gpt.js";_.Bp(b.document,a,"prefetch")}catch(d){}})}catch(c){}}},Uu=function(a,b,c){b.U=c;b.fetchEnded();null!=c._host_page_libraries_&&_.A(c._host_page_libraries_,function(c){var d=a.la;if(!_.vb(d.l,c))switch(c){case 1:var e=c+"_hostpage_library",f=_.fd(window.document,_.uf[c]);f&&(f.id=e);d.l.push(c);e=new cu(c);d.m.push(e);d=_.Ef();d.hostpageLibraryTokens||(d.hostpageLibraryTokens={});d.hostpageLibraryTokens[e.j]=e.l}d=a.la;d.j[c]||(d.j[c]=[]);d.j[c].push(b)});null!=c._cookies_&&_.Eq(a.Y,c);c._persistent_for_stream_&&(a.j.O[_.K(b)]=null);var d=c._a_exps_;if(d)for(var e=0,f=d.length;e<f;e++)_.Mh(d[e].toString(),!0);_.Mi.is(_.ah.w)&&a.v(c)&&Qu();(_.oj.is(_.Bh.w)||_.pj.is(_.Ch.w)||_.pj.is(_.Ch.yc))&&Jt(c)},Vu=function(a,b,c){var d=void 0===d?window:d;if(a.l&&!_.x(b))return a=new _.L("sra_legacy_ad_response"),_.q(a),_.M(a),[];if(c.length){var e=c[0];Nu(a.Ea,e.getCsiId(),e.T,e.j)}_.x(b)||(b=[b]);e=[];for(var f=0;f<c.length;++f){var g=c[f],h=b[f][g.getAdUnitPath()];h&&(Uu(a,g,h),e.push(g))}switch(_.Zf(_.Oi)){case _.ch.xc:Su(a,d,"https://www.googletagservices.com/cb/ace_frame.html");break;case _.ch.wc:Su(a,d,"https://www.googletagservices.com/cb/ace_frame.html#cbu=https%3A%2F%2Fwww.googletagservices.com%2Ftag%2Fjs%2Fgpt.js")}_.Wi.is(_.kh.w)&&Tu(a,d);return e},Wu=function(a){(a=(a=a.U)&&a._resources_)&&_.A(a,function(a){if(a){var b=a.url;a=a.as;if(b&&a){var d=_.Uq.u();2!==d.j[b]&&3!==d.j[b]&&(d.j[b]=2,"image"==a?Ru(d,b):(0,_.Ap)()&&_.Wq(d,b,"preload",a))}}})},Xu=function(a,b,c){a=a.Ea;var d=b.getCsiId(),e=b.j,f=Pu(b);b=!!Ou(b);_.Qm(a,"start_ad_render_period",d,e);_.Pm(a,"exr",d,e,f?1:0);_.gf(_.jl.u(),(5).toString(),d);_.t.google_timing_params=_.t.google_timing_params||{};_.t.google_timing_params["qqid."+d]=c;_.Vm(a,"is_backfill_at_render",""+d+"_"+b,e);_.Vm(a,"qqid",""+d+"_"+c,e)},Yu=function(a,b){if(a.Mc){var c=b.U;c&&!c._empty_&&(c=c._html_)&&-1==c.indexOf("adpnt")&&(b=b.getEscapedQemQueryId(),c=new _.L("gpt_qse_missing",_.sl(),1),_.r(c,"qemQueryId",b),_.q(c,a.j),_.M(c))}},Zu=function(a){var b=new _.L("gpt_fluid_not_sf",_.sl(),_.E.u().get(23));_.r(b,"impl",a.X());_.q(b,a.j);_.M(b)},$u=function(a,b,c){Vt(a);_.t.setTimeout(_.N(214,function(){var d=_.xn(c,b);d?Vt(a,d):(d=new _.L("amp_inabox_failed"),_.q(d),_.M(d))}),0)},av=function(a,b,c){var d={};d=(d[_.Mg.Vc]=1.5,d[_.Mg.Wc]=2,d[_.Mg.Xc]=2.5,d[_.Mg.Yc]=3,d)[_.Zf(_.yi)];var e=b.pageYOffset;b=b.innerHeight;if(d&&_.m(e)&&_.m(b)){var f=e+b*d,g=function(a,b){a=(a=a.U)&&a._height_||0;return!!b&&b.y+a>=e&&b.y<f};_.Db(c,function(b,c){var d=_.xq(a.j,b),e=_.xq(a.j,c);b=g(b,d);return b!=g(c,e)?b?-1:1:b?d.y-e.y:0})}},bv=function(a,b){_.Zf(_.Xi)&&_.t.IntersectionObserver&&(a.aa||(a.aa=new _.t.IntersectionObserver(function(a){_.A(a,function(a){var b=_.In(_.Kn(),a.target.id);if(b.da=a.isIntersecting)b.ka=a.time})},{rootMargin:"0px"})),a.aa.observe(b))},cv=function(a,b,c){_.kr(a,b,c,a.ha);b=_.vn(c);b.slotContentChanged=a.ha;c.renderEnded(b)},dv=function(a,b,c,d,e,f,g,h){var l=_.Bn(d,c);if(null!=l){var n=_.gi.is(_.ug.w);if(!n)for(var p;p=l.firstChild;)l.removeChild(p);a.j.o||(l.style.display="inline-block");h=Ju([h,a.j.N,d.Z]);b=Mu(b,l,_.An(d),f,e,g,h,!!Ou(d),Pu(d),n,a.la.m);d.m=b;d.A=!1;_.xr(a,_.xn(d,c),_.K(d))}},ev=function(a,b,c,d,e){var f=_.An(c),g=_.xn(c,b);if(null==g)if(a.Da){var h=_.Bn(c,b);g=_.bs(a,b,c,h,d);delete a.F[f]}else return;_.v(d)?Zu(a):(g.width=String(d[0]),g.height=String(d[1]),a.Da&&(h=_.Bn(c,b),h.style.width="",h.style.height=""));_.Tl(g,e,!0);c.A=!1;_.xr(a,g,_.K(c))},fv=function(a,b,c){var d=c.U,e=c.getEscapedQemQueryId(),f=_.P(c,b);f&&f.setAttribute("data-google-query-id",e);Xu(a,c,e);c.renderStarted();if(null==d||d._empty_)cv(a,b,c);else if(a.N)c.renderEnded(_.vn(c));else{e=d._html_;if(!_.v(e)){_.Zr(a,c);return}_.rj.is(_.Fh.w)||_.Ml(_.P(c,b),!0);_.gs(a,c);var g;"height"==d._fluid_?g="fluid":g=[d._width_,d._height_];$u(_.t,b,c);a.v(d)?dv(a,_.t,b,c,g,e,function(){_.as(a,c);a.loaded(c)},{sandbox:d._use_sandbox_||!1}):ev(a,b,c,g,e);_.uq(c,_.un(c,d))}d=c.getSlotElementId();Lu(a.T[d])&&delete a.T[d];a.ga(b,c);Yu(a,c)},gv=function(a,b,c,d){var e=c.getSlotElementId(),f=_.P(c);if(!_.sf(f))return!1;var g=_.mr(a,c);if(!g)return!1;var h=!!a.H[e];a.H[e]=function(){d&&(_.t.cancelIdleCallback?_.t.cancelIdleCallback(d):_.t.clearTimeout(d));fv(a,b,c)};h||g.observe(f);return!0},hv=function(a,b,c,d){var e=_.P(c,b),f=c.getSlotElementId(),g=function(){_.Gr(a,e,f,c);fv(a,b,c)};return _.t.requestIdleCallback?_.t.requestIdleCallback(g,{timeout:d}):_.t.setTimeout(g,d)},iv=function(a,b,c){if(!_.Si.is(_.gh.Oa)&&!_.Ui.is(_.ih.w)&&!_.cj.is(_.qh.w)||!Ou(c)||!_.fo()||_.Er(a,_.t,0,c))return!1;_.Fr(a);if(!a.I)return!1;a.A[c.getSlotElementId()]=function(){return fv(a,b,c)};return!0},jv=function(a,b){(a=_.P(a,b))&&a.parentNode&&""===a.innerHTML&&a.parentNode.removeChild(a)},kv=function(a,b,c,d,e,f,g,h){jv(d,c);var l=_.An(d)+"__container__";l='<div id="'+_.fb(l)+'"></div>';c.write(l);l=_.Bn(d,c);null!=l&&(a.j.o?l.style.margin="auto":l.style.display="inline-block",h=Ju([h,a.j.N,d.Z]),b=Mu(b,l,_.An(d),f,e,g,h,Ou(d)||!1,Pu(d)),d.m=b,_.xr(a,_.xn(d,c),_.K(d)))},lv=function(a,b,c,d){b=b.getSlotElementId()+"_ad_container";var e='<div id="'+_.fb(b)+'"';d&&"height"==d._fluid_?e+=' style="width:100%;">':a.j.o&&d?(e+=' style="width:'+d._width_,e+='px;margin:auto;">'):e+=">";d&&(e+=d._html_);c.write(e+"\n</div>\n");return b},mv=function(a,b,c){jv(b,c);var d=b.U;if(null!=d){var e=lv(a,b,c,d);d=_.un(b,d);b.renderEnded(d);(c=c.getElementById(e))&&_.xr(a,c,_.K(b))}},nv=function(a,b,c,d,e,f,g){g=void 0===g?window.document:g;jv(b,g);var h=_.An(b),l=[],n=0,p=0;_.x(e)?(n=e[0],p=e[1]):Zu(a);c=_.ol(c);l.push('<iframe id="',_.fb(h),'" title="',_.zr,'" name="',_.fb(h),'" width="',n,'" height="',p,'" vspace="0" hspace="0" allowtransparency="true" ','scrolling="no"',' marginwidth="0" marginheight="0" frameborder="0" style=','"border:0px;left:0;position:absolute;top:0;"',' src="',c,'"');null!=d&&l.push(' onload="',d,'"');l.push("></iframe>");d=[];c=b.getSlotElementId()+"_ad_container";d.push('<div id="',_.fb(c),'"');f&&d.push(' style="text-align:center" ');d.push(">");d.push('<ins style="position:relative;width:'+n+"px;height:"+p+'px;border:none;display:inline-table;vertical-align:bottom;">'+('<ins style="position:relative;width:'+n+"px;height:"+p+'px;border:none;display:block;">'+l.join("")+"</ins>")+"</ins>");d.push("</div>");g.write(d.join(""));(f=g.getElementById(h))&&_.xr(a,f,_.K(b))},ov=function(a,b,c){jv(b,c||window.document);return lv(a,b,c||window.document)};_.Cs.prototype.I=It(5,function(a,b,c){var d=this,e=c.U,f=c.getEscapedQemQueryId(),g=_.P(c,b);g&&g.setAttribute("data-google-query-id",f);Xu(this,c,f);if(null==e||e._empty_)_.kr(this,b,c,!1),c.renderEnded(_.vn(c));else if(this.N)c.renderEnded(_.vn(c));else if(this.v(e))if(f=function(){d.loaded(c)},g=e._html_){var h;"height"==e._fluid_?h="fluid":h=[e._width_,e._height_];$u(a,b,c);kv(this,a,b,c,h,g,f,{sandbox:e._use_sandbox_||!1});_.uq(c,_.un(c,e))}else c.renderEnded(_.vn(c));else if(e._snippet_&&!e._is_afc_)mv(this,c,b);else if(Ku()){h="googletag.impl.pubads.syncAdSlotLoaded(this, '"+_.K(c)+"',"+c.j+");";f="about:blank";if(g=_.Hq(this.o,"google_domain_reset_url")){var l=_.se(g.match(_.re)[3]||null);if(null===l||0<=l.indexOf(window.document.domain))f=g}$u(a,b,c);if("height"==e._fluid_){Zu(this);return}nv(this,c,f,h,[e._width_,e._height_],this.j.o,b)}else $u(a,b,c),a=ov(this,c,b),b.write("<script>googletag.impl.pubads.createDomIframe("+St(a)+" ,"+St(_.K(c))+","+this.j.o+","+c.j+");\x3c/script>");this.ga(b,c);Yu(this,c);c.renderStarted()});_.Cs.prototype.ac=It(4,function(a){window.clearTimeout(this.T);Vu(this,a,this.F);this.F=null;this.C||(this.C=!0,_.Fs(this,this.D));this.A.length&&_.Ds(this,this.A.shift())});_.vs.prototype.Wa=It(3,function(a,b,c,d,e){var f=this;e=void 0===e?window.document:e;var g=_.K(b);if(this.C[g]==a)if(this.N)delete this.C[g],b.renderEnded(_.vn(b));else if(d&&delete this.C[g],a=b.U,a._empty_)cv(this,e,b);else{a._html_+=c;if(this.v(a))d&&(Xu(this,b,b.getEscapedQemQueryId()),dv(this,window,e,b,"height"==a._fluid_?"fluid":[a._width_,a._height_],a._html_,function(){return f.loaded(b)},{sandbox:!!a._use_sandbox_}));else if(e=_.xn(b,e)){var h=b.A;h&&Xu(this,b,b.getEscapedQemQueryId());_.zs(b,e,c,h,d);d&&_.xr(this,e,g)}d&&_.uq(b,_.un(b,a))}});_.vs.prototype.Zb=It(2,function(a,b,c,d){d=void 0===d?window.document:d;this.mc[a]||(this.mc[a]=!0,Nu(_.Hm(),b.getCsiId(),b.T,b.j));var e=_.K(b);(c=c[b.getAdUnitPath()])&&_.tq(this.j,b)&&!this.C[e]&&(Uu(this,b,c),b.renderStarted(),this.C[e]=a,_.ys(this,b,d))});_.V.prototype.ya=It(1,function(a,b){b=void 0===b?window.document:b;try{var c=a.U,d=!1;if(null!=c&&!c._empty_&&!this.N){_.rj.is(_.Fh.w)&&_.Ml(_.P(a,b),!0);c=b;var e=a.U,f=e&&e._timeout_render_;var g=_.m(f)&&-1<f?f:null;var h=_.lr(a),l=_.P(a);l&&bv(this,l);if(null==h&&null==g||_.Er(this,_.t,(h||0)/100,a))var n=!1;else{e=null;null!=g&&(e=hv(this,c,a,g));var p=null!=h&&gv(this,c,a,e);n=null!=e||p}d=n||iv(this,b,a)}d?Wu(a):fv(this,b,a)}catch(w){}});_.V.prototype.$b=It(0,function(a,b,c){var d=this,e=this.da[c];e?(b=Vu(this,b,e),delete this.da[c],av(this,a,b),_.A(b,function(a){return d.ya(a)}),this.l||c!=this.sa||(window.clearTimeout(this.xb[_.K(e[0])]),_.ds(this))):(a=new _.L("gpt_req_undef"),_.q(a),_.r(a,"req_id",String(c)),_.M(a))});var pv={},qv=(pv[1]=_.V.prototype.$b,pv[2]=_.Cs.prototype.ac,pv[3]=_.V.prototype.ya,pv[4]=_.Cs.prototype.I,pv[5]=_.vs.prototype.Wa,pv[6]=_.vs.prototype.Zb,pv);window.googletag._=function(a,b){b=void 0===b?qv:b;_.jm.push=_.N(339,function(a){var c=a&&b[a.xa];c&&c.apply(a.Ia,a.wa);return 0});_.A(_.jm,function(a){return _.jm.push(a)});_.jm.length=0};})