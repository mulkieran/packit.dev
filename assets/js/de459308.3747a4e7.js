"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[9432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={title:"Customizing 'source-git update-dist-git'",authors:"csomh"},o=void 0,s={unversionedId:"source-git/customize-update-dist-git",id:"source-git/customize-update-dist-git",title:"Customizing 'source-git update-dist-git'",description:"Starting question: How do we transform an upstream repository to dist-git?",source:"@site/research/source-git/customize-update-dist-git.md",sourceDirName:"source-git",slug:"/source-git/customize-update-dist-git",permalink:"/research/source-git/customize-update-dist-git",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/source-git/customize-update-dist-git.md",tags:[],version:"current",frontMatter:{title:"Customizing 'source-git update-dist-git'",authors:"csomh"},sidebar:"autogenerated",previous:{title:"Source-Git",permalink:"/research/source-git/"},next:{title:"Converting dist-git to source-git",permalink:"/research/source-git/dist-git-to-src-git/"}},c={},l=[{value:"Improvements to &#39;create-archive&#39;",id:"improvements-to-create-archive",level:2},{value:"Improvements to &#39;create-patches&#39;",id:"improvements-to-create-patches",level:2},{value:"Improvements to &#39;fix-spec-file&#39;",id:"improvements-to-fix-spec-file",level:2},{value:"Stories proposed",id:"stories-proposed",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starting question: How do we transform an upstream repository to dist-git?\nWhat are the steps that are required, and what actions or transformations\nhappen along the way?"),(0,r.kt)("mermaid",{value:'flowchart TD\n  git(Git) -- git format-patch --\x3e patches(Patches)\n  git -- git archive --\x3e archive(Source archive)\n  git -- make archive --\x3e archive\n  git -- copy other files --\x3e dist_git\n  rp(Official release page) -- download --\x3e archive\n  patches --\x3e bundle\n  archive --\x3e bundle{"."}\n  srpm(SRPM) -- unpack --\x3e dist_git(Dist-git)\n  spec(Specfile) --\x3e bundle\n  bundle -- build --\x3e srpm\n  patches -- update --\x3e spec\n  archive -- update --\x3e spec\n  version(Version) -- update --\x3e spec\n  release(Release) -- update --\x3e spec\n  style git fill:red,color:white'}),(0,r.kt)("p",null,"In the flowchart above the transformation process includes building and then\nunpacking an SRPM. This step serves as a (partial) validation of the integrity\nof the content to be committed to dist-git, and it is inspired from the\n",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/redhat/centos-stream/src/kernel/centos-stream-9/-/blob/main/redhat/scripts/rh-dist-git.sh#L60"},"Kernel source-git workflow"),"."),(0,r.kt)("p",null,"In order to build an SRPM 3 things need to be configurable:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"How the source archive is created."),(0,r.kt)("li",{parentName:"ol"},"How patches are produced from the Git-history."),(0,r.kt)("li",{parentName:"ol"},"The way the spec-file is generated or updated.")),(0,r.kt)("p",null,"Packit already has actions for all three of these, and all these actions run\nas part of ",(0,r.kt)("inlineCode",{parentName:"p"},"packit srpm"),". To make the three aspects above configurable,\n",(0,r.kt)("inlineCode",{parentName:"p"},"source-git update-dist-git")," could be updated to run ",(0,r.kt)("inlineCode",{parentName:"p"},"packit srpm")," under the\nhood, and use the unpacked SRPM to update dist-git."),(0,r.kt)("p",null,"The functionality provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"files_to_sync")," wouldn't be changed:\nadditionally to unpacking the SRPM to dist-git, ",(0,r.kt)("inlineCode",{parentName:"p"},"update-dist-git")," should also\nconsider syncing the content specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"files_to_sync"),"."),(0,r.kt)("p",null,"Besides this the following improvements could be made:"),(0,r.kt)("h2",{id:"improvements-to-create-archive"},"Improvements to 'create-archive'"),(0,r.kt)("p",null,"Currently ",(0,r.kt)("inlineCode",{parentName:"p"},"create-archive")," takes a command or a list of commands which are\nexecuted in a non-shell environment. There is also the top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"sources"),"\nkey, which has a similar role to ",(0,r.kt)("inlineCode",{parentName:"p"},"create-archive"),", but instead of running some\ncommands, it will download and save the archive."),(0,r.kt)("p",null,"These two could be merged, by allowing ",(0,r.kt)("inlineCode",{parentName:"p"},"create-archive")," to also be a\ndictionary, and introducing two new configuration sub-keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"download")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"script"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create-archive.script")," would take a single or multi-line string and run it as\na bash script. This behavior is similar how multi-line scripts are handled in\nGitHub or GitLab workflows."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create-archive.download")," would be synonymous to ",(0,r.kt)("inlineCode",{parentName:"p"},"sources"),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"actions:\n  create-archive:\n    download:\n      - url: https://my_website.com/\n        path: name\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"actions:\n  create-archive:\n    script: |\n      rm *.tar.gz\n      make archive\n")),(0,r.kt)("h2",{id:"improvements-to-create-patches"},"Improvements to 'create-patches'"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create-patches")," currently expects a command or a list of commands. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"script")," subkey could be introduced here, too, in order to make the\nconfiguration syntax similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"create-archive"),". Other subkeys could be\nintroduced later on, to provide some pre-defined (but still configurable) ways\nto generate patches."),(0,r.kt)("p",null,"Currently there is no mechanism to pass the patches produced by this action to\n",(0,r.kt)("inlineCode",{parentName:"p"},"fix-spec-file"),"."),(0,r.kt)("h2",{id:"improvements-to-fix-spec-file"},"Improvements to 'fix-spec-file'"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fix-spec-file")," currently expects a command or a list of commands. Similarly\nto the previous two changes, ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," could be introduced, to be consistent\nwith the other three."),(0,r.kt)("h2",{id:"stories-proposed"},"Stories proposed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introduce a ",(0,r.kt)("inlineCode",{parentName:"li"},"script")," key for all actions. This key would be a single or\nmulti-line string which is going to be executed as a bash script.\n(packit/packit#1641)"),(0,r.kt)("li",{parentName:"ul"},"Introduce ",(0,r.kt)("inlineCode",{parentName:"li"},"create-archive.download")," to be a synonym for ",(0,r.kt)("inlineCode",{parentName:"li"},"sources"),". Mark\n",(0,r.kt)("inlineCode",{parentName:"li"},"sources")," as deprecated. (packit/packit#1642)"),(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"source-git update-dist-git")," to use ",(0,r.kt)("inlineCode",{parentName:"li"},"packit srpm")," under the hood,\nunpacking the SRPM to dist-git. (packit/packit#1643)"),(0,r.kt)("li",{parentName:"ul"},"Provide patches produced by ",(0,r.kt)("inlineCode",{parentName:"li"},"create-patches")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"fix-spec-file"),".\n(packit/packit#1644)")))}u.isMDXComponent=!0}}]);