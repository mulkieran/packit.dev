"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[7782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=i,d=u["".concat(l,".").concat(g)]||u[g]||h[g]||n;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},95845:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={title:"GitLab integration",authors:[{name:"Shreyas Papinwar",email:"spapinwar@gmail.com",url:"https://github.com/shreyaspapi",image_url:"https://github.com/shreyaspapi.png"}]},o=void 0,s={unversionedId:"integrations/gitlab/index",id:"integrations/gitlab/index",title:"GitLab integration",description:"Project Webhooks",source:"@site/research/integrations/gitlab/index.md",sourceDirName:"integrations/gitlab",slug:"/integrations/gitlab/",permalink:"/research/integrations/gitlab/",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/integrations/gitlab/index.md",tags:[],version:"current",frontMatter:{title:"GitLab integration",authors:[{name:"Shreyas Papinwar",email:"spapinwar@gmail.com",url:"https://github.com/shreyaspapi",image_url:"https://github.com/shreyaspapi.png"}]},sidebar:"autogenerated",previous:{title:"Automation of the downstream part of the workflow",permalink:"/research/integrations/downstream/"},next:{title:"Image Builder",permalink:"/research/integrations/image-builder/"}},l={},c=[{value:"Project Webhooks",id:"project-webhooks",level:2},{value:"Project integrations",id:"project-integrations",level:2},{value:"Integration",id:"integration",level:2},{value:"1) Project Webhook:",id:"1-project-webhook",level:3},{value:"2) Project Services / Project Integration:",id:"2-project-services--project-integration",level:3},{value:"Pros and Cons of having Packit as a Project Integration in Gitlab",id:"pros-and-cons-of-having-packit-as-a-project-integration-in-gitlab",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"TODO",id:"todo",level:2},{value:"FAQ",id:"faq",level:2},{value:"Where and how does the Project Integration run?",id:"where-and-how-does-the-project-integration-run",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"project-webhooks"},"Project Webhooks"),(0,i.kt)("p",null,"Project webhooks allow you to trigger a URL if for example new code is pushed or a new issue, merge request is created. You can configure webhooks to listen for specific events like pushes, issues, merge requests. GitLab will send a POST request with data to the webhook URL."),(0,i.kt)("h2",{id:"project-integrations"},"Project integrations"),(0,i.kt)("p",null,'Just like github apps, GitLab has an equivalent concept of Integrations, but those need to be added to the GitLab codebase itself. There\'s no extensible "app" model.'),(0,i.kt)("p",null,"Project integrations allow you to integrate GitLab with other applications. They are a bit like plugins in that they allow a lot of freedom in adding functionality to GitLab."),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("p",null,"There are many ways available for us to move forward."),(0,i.kt)("h3",{id:"1-project-webhook"},"1) Project Webhook:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For adding packit-service to any gitlab project a webhook can be added by the project maintainers by going to project settings -> webhooks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We can process events from GitLab and to return feedback of successful builds or failed tests back into the merge request we can have a ",(0,i.kt)("strong",{parentName:"p"},"Packit Gitlab User")," that needs to have access to the repository in which the webhook is added.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This way is a start forward way and will work with gitlab.com and all the custom instances like ",(0,i.kt)("a",{parentName:"p",href:"http://gitlab.gnome.org/"},"http://gitlab.gnome.org/"),", ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.freedesktop.org"},"https://gitlab.freedesktop.org")))),(0,i.kt)("h3",{id:"2-project-services--project-integration"},"2) Project Services / Project Integration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For us to integrate our Packit-Service to gitlab integrations we need to change the gitlab codebase itself as mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/project/integrations/overview.html#contributing-to-integrations"},"docs"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This service can then be enabled by the project maintainer by going to Project settings -> Integrations -> Packit service, eg. ",(0,i.kt)("a",{parentName:"p",href:"http://52.183.132.26:3000/testpackit/testing/-/settings/integrations"},"test-instance"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For adding project integration to gitlab instances we have two options to move forward:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We contribute to the ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/gitlab-org/gitlab/tree/master/app/models/project_services"},"GitLab")," and can reach large audiance, but for contributing to gitlab is a time taking process. (Currently looking into it)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add our project integration code directly to the custom gitlab instances that we currently want to support."))))),(0,i.kt)("h2",{id:"pros-and-cons-of-having-packit-as-a-project-integration-in-gitlab"},"Pros and Cons of having Packit as a Project Integration in Gitlab"),(0,i.kt)("p",null,"A integration / project service in gitlab works in a way that the service does not have the access to the repository and can only work as a webhook to report events based on permissions given (issues, merge requests etc)."),(0,i.kt)("h3",{id:"pros"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users dont have to setup webhook for each project."),(0,i.kt)("li",{parentName:"ul"},"We can setup a settings page for the packit-service in gitlab which will act as a config for the service instead of tweeking packit config file in the repository."),(0,i.kt)("li",{parentName:"ul"},"We can add more options in the future in the settings of our integration.")),(0,i.kt)("h3",{id:"cons"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users will still have to give access to a ",(0,i.kt)("strong",{parentName:"li"},"packit service user")," for getting the build updates."),(0,i.kt)("li",{parentName:"ul"},'As Gitlab is written in ruby for us "Packit" to contribute to the project, introduces new language ',(0,i.kt)("strong",{parentName:"li"},"Ruby")," that we will need to work on for maintaining the service in gitlab."),(0,i.kt)("li",{parentName:"ul"},"Less documentation for for adding Integrations - ",(0,i.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/project/integrations/overview.html"},"https://docs.gitlab.com/ee/user/project/integrations/overview.html"))),(0,i.kt)("p",null,"For now, we dont have to worry about adding project service to gitlab, as it is the same thing as creating a new webhook."),(0,i.kt)("h2",{id:"todo"},"TODO"),(0,i.kt)("p",null,"Research on authentication:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unlike Github the auth token for a webhook need to be filled by the user."),(0,i.kt)("li",{parentName:"ul"},"We will need to think of having unique token for each project we give access to.")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"where-and-how-does-the-project-integration-run"},"Where and how does the Project Integration run?"),(0,i.kt)("p",null,"Just like github apps which are created in github using GUI, GitLab has an equivalent concept of Integrations, but those need to be added to the GitLab codebase itself. There's no GUI for addding integrations as it is a core part of GitLab."))}h.isMDXComponent=!0}}]);