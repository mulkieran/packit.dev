"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[2372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Propose downstream",sidebar_position:5},i="job: propose_downstream",s={unversionedId:"configuration/upstream/propose_downstream",id:"configuration/upstream/propose_downstream",title:"Propose downstream",description:"Land a new upstream release in Fedora. This job only makes sure the changes",source:"@site/docs/configuration/upstream/propose_downstream.md",sourceDirName:"configuration/upstream",slug:"/configuration/upstream/propose_downstream",permalink:"/docs/configuration/upstream/propose_downstream",draft:!1,editUrl:"https://github.com/packit/packit.dev/tree/main/docs/configuration/upstream/propose_downstream.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Propose downstream",sidebar_position:5},sidebar:"autogenerated",previous:{title:"VM Image Builds",permalink:"/docs/configuration/upstream/vm_image_build"},next:{title:"Downstream jobs",permalink:"/docs/category/downstream-jobs"}},p={},l=[{value:"Supported triggers",id:"supported-triggers",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"job-propose_downstream"},(0,o.kt)("inlineCode",{parentName:"h1"},"job: propose_downstream")),(0,o.kt)("p",null,"Land a new upstream release in Fedora. This job only makes sure the changes\nhappen in Fedora dist-git - no builds. A pull request is created as a result."),(0,o.kt)("h2",{id:"supported-triggers"},"Supported triggers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"release"))),(0,o.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"dist_git_branches")," - a (list of) branches in dist-git where packit should work (defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," which represents ",(0,o.kt)("em",{parentName:"li"},"Fedora Rawhide"),").\nYou can also use the ",(0,o.kt)("a",{parentName:"li",href:"/docs/configuration#aliases"},"aliases provided by Packit"),"\nto not need to change the config file when the new system version is released.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n- job: propose_downstream\n  trigger: release\n- job: propose_downstream\n  trigger: release\n  dist_git_branches:\n    - f35\n")),(0,o.kt)("p",null,"This config would update Fedora Rawhide and Fedora 35 dist-git branches."),(0,o.kt)("p",null,"If you need to do any change in the pull request, you need to locally fetch the source branch\nof the Packit's pull request and push it (with a fix) to your fork (as it is not possible to push to the branch\ncreated in the Packit's fork):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git fetch https://src.fedoraproject.org/forks/packit/rpms/$YOUR_PACKAGE.git refs/heads/*:refs/remotes/packit/*\ngit cherry-pick packit/$VERSION-$BRANCH-update-propose_downstream\n")))}d.isMDXComponent=!0}}]);