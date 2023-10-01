(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e),t.d(e,{extend:()=>l});const o=flarum.core.compat["common/extenders"];var r=t.n(o);function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}const i=flarum.core.compat["common/Model"];var c=t.n(i),s=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).client_id=c().attribute("client_id"),e.client_secret=c().attribute("client_secret"),e.redirect_uri=c().attribute("redirect_uri"),e.grant_types=c().attribute("grant_types"),e.scope=c().attribute("scope"),e.user_id=c().attribute("user_id"),e.client_name=c().attribute("client_name"),e.client_icon=c().attribute("client_icon"),e.client_desc=c().attribute("client_desc"),e.client_home=c().attribute("client_home"),e}return a(e,t),e}(c()),u=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).scope=c().attribute("scope"),e.is_default=c().attribute("is_default",(function(t){return 1===t})),e.scope_name=c().attribute("scope_name"),e.scope_icon=c().attribute("scope_icon"),e.scope_desc=c().attribute("scope_desc"),e}return a(e,t),e}(c());const l=[(new(r().Store)).add("oauth-clients",s).add("oauth-scopes",u)],p=flarum.core.compat["forum/app"];var d=t.n(p);const h=flarum.core.compat["common/extend"],f=flarum.core.compat["forum/components/UserPage"];var _=t.n(f);const b=flarum.core.compat["common/components/LinkButton"];var y=t.n(b);flarum.core.compat["common/components/Page"];const v=flarum.core.compat["forum/components/IndexPage"];var g=t.n(v);const x=flarum.core.compat["forum/components/LogInModal"];var k=t.n(x);const z=flarum.core.compat["common/utils/extractText"];var O=t.n(z);const j=flarum.core.compat["common/components/Tooltip"];var w=t.n(j),P=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).params=[],e.client=null,e}a(e,t);var o=e.prototype;return o.oninit=function(e){var o=this;t.prototype.oninit.call(this,e),d().session.user||setTimeout((function(){return d().modal.show(k())}),500);var r=m.route.param();null==r.client_id||null==r.response_type||null==r.redirect_uri?m.route.set("/"):(this.params=r,d().store.find("oauth-clients",r.client_id).then((function(t){if(0===t.length)m.route.set("/");else{o.client=t[0];var e=null;e=o.client.redirect_uri().indexOf(" ")>-1?o.client.redirect_uri().split(" "):[o.client.redirect_uri()],d().forum.attribute("foskym-oauth-center.require_exact_redirect_uri")&&-1==e.indexOf(r.redirect_uri)&&m.route.set("/"),d().forum.attribute("foskym-oauth-center.allow_implicit")&&"token"==r.response_type&&m.route.set("/"),d().forum.attribute("foskym-oauth-center.enforce_state")&&null==r.enforce_state&&m.route.set("/")}})))},o.setTitle=function(){d().setTitle(O()(d().translator.trans("foskym-oauth-center.forum.page.title.authorize"))),d().setTitleCount(0)},o.view=function(){return this.client?m("div",{className:"AuthorizePage"},m("div",{className:"container"},m("div",{class:"oauth-area"},m("div",{class:"oauth-main"},m("div",{class:"oauth-box oauth-header"},m("h2",null,d().forum.attribute("title")),m("p",null,d().translator.trans("foskym-oauth-center.forum.authorize.access")," ",m("a",{href:this.client.client_home(),target:"_blank"},this.client.client_name()))),m("div",{class:"oauth-box oauth-body"},m("div",{class:"oauth-top"},m("img",{src:d().forum.attribute("faviconUrl")}),m("i",{class:"fas fa-exchange-alt fa-2x"}),m(w(),{text:this.client.client_desc()},m("img",{src:this.client.client_icon()}))),m("div",{class:"oauth-scope-area"},m("div",{class:"oauth-scope"},m("div",{class:"oauth-scope-left"},m("img",{class:"oauth-scope-object",src:"/static/icon.jpg",style:"width:32px"})),m("div",{class:"oauth-scope-body"},m("h6",{class:"oauth-scope-heading"},"保持对已向 计量便民平台 授予访问权限的数据的访问权限 "),m("small",null,"即使当前没有使用该应用，也允许 计量便民平台 查看和更新你授予其访问权限的数据。这不会向 计量便民平台 授予任何其他权限。 "))),m("div",{class:"oauth-scope"},m("div",{class:"oauth-scope-left"},m("i",{class:"oauth-scope-object fa-2x fa fa-user",style:"margin-left:2px;color:#000"})),m("div",{class:"oauth-scope-body"},m("h6",{class:"oauth-scope-heading"},"读取用户个人资料 "),m("small",null,"访问该用户(mouse123)的个人信息、最新动态等 ")))),m("form",{class:"oauth-form",method:"post",id:"form"},m("input",{type:"hidden",name:"response_type",value:"code"}),m("input",{type:"hidden",name:"client_id",value:"0eaCTcndUqIGo9LymQ3YVZGYVpEXcHer"}),m("input",{type:"hidden",name:"redirect_uri",value:"http://cjludev.top/user/auth/callback"}),m("input",{type:"hidden",name:"state",value:"123"}),m("input",{type:"hidden",name:"scope",value:"basic get_user_info"}),m("div",{style:"display: flex;"},m("button",{class:"btn btn-success btn-block",type:"submit",id:"authorize",style:"width: 50%;"},"授权"),m("button",{class:"btn btn-danger btn-block",id:"refuse",style:"width: 50%;"},"拒绝")))))))):""},e}(g()),T=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.loadUser(m.route.param("username"))},o.content=function(){return m("div",{className:"AuthorizedPage"})},e}(_());d().initializers.add("foskym/flarum-oauth-center",(function(){d().routes["oauth.authorize"]={path:"/oauth/authorize",component:P},d().routes["user.authorized"]={path:"/u/:username/authorized",component:T},(0,h.extend)(_().prototype,"navItems",(function(t){d().session.user&&d().session.user.id()===this.user.id()&&t.add("authorized",y().component({href:d().route("user.authorized",{username:this.user.username()}),icon:"fas fa-user-friends"},[d().translator.trans("foskym-oauth-center.forum.page.label.authorized")]),-110)}))}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map