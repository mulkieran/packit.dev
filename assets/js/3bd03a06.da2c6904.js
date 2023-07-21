"use strict";(self.webpackChunkpackit_dev=self.webpackChunkpackit_dev||[]).push([[2248],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),k=i,h=m["".concat(l,".").concat(k)]||m[k]||d[k]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},58472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const o={title:"Code refactoring",authors:"mmassari"},r=void 0,p={unversionedId:"monorepo-support/refactoring",id:"monorepo-support/refactoring",title:"Code refactoring",description:"CLI",source:"@site/research/monorepo-support/refactoring.md",sourceDirName:"monorepo-support",slug:"/monorepo-support/refactoring",permalink:"/research/monorepo-support/refactoring",draft:!1,editUrl:"https://github.com/packit/research/tree/main/research/monorepo-support/refactoring.md",tags:[],version:"current",frontMatter:{title:"Code refactoring",authors:"mmassari"},sidebar:"autogenerated",previous:{title:"Monorepos",permalink:"/research/monorepo-support/"},next:{title:"How to manage outages",permalink:"/research/outages/"}},l={},s=[{value:"CLI",id:"cli",level:2},{value:"What is missing",id:"what-is-missing",level:3},{value:"Packit Service",id:"packit-service",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cli"},"CLI"),(0,i.kt)("p",null,"With the monorepo support, multiple ",(0,i.kt)("em",{parentName:"p"},"dist-git repositories")," can be mapped to a single ",(0,i.kt)("em",{parentName:"p"},"upstream monorepo"),"."),(0,i.kt)("p",null,"Three different ways to modify our ",(0,i.kt)("inlineCode",{parentName:"p"},"CLI")," existing code to support mapping ",(0,i.kt)("em",{parentName:"p"},"one upstream repo")," with ",(0,i.kt)("em",{parentName:"p"},"multiple dist-git repos")," have been researched."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"get_packit_api")," to return multiple ",(0,i.kt)("inlineCode",{parentName:"strong"},"PackitAPI")," objects"),": ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1838"},"https://github.com/packit/packit/pull/1838"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"deal with the ",(0,i.kt)("em",{parentName:"strong"},"package configs")," outside of ",(0,i.kt)("inlineCode",{parentName:"strong"},"get_packit_api")),": ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/pull/1840"},"https://github.com/packit/packit/pull/1840"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"change ",(0,i.kt)("inlineCode",{parentName:"strong"},"PackitAPI")),": ",(0,i.kt)("em",{parentName:"li"},"not done."))),(0,i.kt)("p",null,"Solution 3 has not been followed since a lot of code changes would have been required: to accomplish a ",(0,i.kt)("em",{parentName:"p"},"koji build")," (as in the linked PR) we need to create new objects inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"PackitAPI")," which would bind togheter, as an examples, this attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/blob/edfbde6e77552293e3c8888460b68f6726d5f115/packit/utils/changelog_helper.py#L52"},"https://github.com/packit/packit/blob/edfbde6e77552293e3c8888460b68f6726d5f115/packit/utils/changelog_helper.py#L52")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/packit/packit/blob/edfbde6e77552293e3c8888460b68f6726d5f115/packit/cli/builds/koji_build.py#L92"},"https://github.com/packit/packit/blob/edfbde6e77552293e3c8888460b68f6726d5f115/packit/cli/builds/koji_build.py#L92"))),(0,i.kt)("p",null,"and after having created this new objects inside ",(0,i.kt)("inlineCode",{parentName:"p"},"PackitAPI")," we should change this existing lines of code and many others in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CLI")," commands."),(0,i.kt)("p",null,"We decided to follow one of solution 1 or 2 which have a much narrow code impact, try them out, and if they will not work we can discuss solution 3 later."),(0,i.kt)("p",null,"Solution 1 has two downsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it binds together ",(0,i.kt)("inlineCode",{parentName:"li"},"PackitAPI")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PackageConfig")," management inside the method ",(0,i.kt)("inlineCode",{parentName:"li"},"get_packit_api"),": with the monorepo support, the effort to manage the ",(0,i.kt)("inlineCode",{parentName:"li"},"PackageConfig")," will increase a lot, for this reason probably it is better to move its management in a new class/method."),(0,i.kt)("li",{parentName:"ul"},"it returns a collection where before there was just a single object, so it has a broader impact on our code with respect of solution 2")),(0,i.kt)("p",null,"Solution 2) has just one downsides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it uses a decorator which is not always easy to debug/understand.")),(0,i.kt)("p",null,"Probably the best solution is the second one."),(0,i.kt)("h3",{id:"what-is-missing"},"What is missing"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PackageConfig")," management has to be improved. The ",(0,i.kt)("inlineCode",{parentName:"p"},"CommonPackageConfig")," used by solution 1 and 2 is not complete. As an example it does not have the ",(0,i.kt)("inlineCode",{parentName:"p"},"jobs")," details on it."),(0,i.kt)("p",null,"We should probably enrich the ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiplePackages")," object with new functionalities and probably create a new package config class. Something like a ",(0,i.kt)("inlineCode",{parentName:"p"},"PackageConfigView")," that would mean, let me say, a ",(0,i.kt)("em",{parentName:"p"},"package config viewed through the eyes of a single package in it"),"."),(0,i.kt)("h2",{id:"packit-service"},"Packit Service"),(0,i.kt)("p",null,"The handlers in ",(0,i.kt)("inlineCode",{parentName:"p"},"packit-service")," are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfig")," class to access most of the job data and the ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfig")," objects, passed to an handler, are taken from the ",(0,i.kt)("inlineCode",{parentName:"p"},"self.event.package_config.jobs")," call ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/blob/451f24b9ff08803e852f6245e6b3806c2767b10e/packit_service/worker/jobs.py#L555"},"here")," and are used ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/packit/packit-service/blob/451f24b9ff08803e852f6245e6b3806c2767b10e/packit_service/worker/jobs.py#L400"},"here"),"."),(0,i.kt)("p",null,"I see two possible solutions to support monorepos."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For a ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfig")," referencing multiple packages create as many ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfigView"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/majamassarini/packit/blob/multiple_distgit_external_package_config/packit/config/job_config.py#L108-L143"},"here a draft example"),", as the packages ",(0,i.kt)("strong",{parentName:"p"},"but do not group them together")),(0,i.kt)("p",{parentName:"li"},"Substitute the ",(0,i.kt)("inlineCode",{parentName:"p"},"self.event.package_config.jobs")," calls like in this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/majamassarini/packit-service/commit/10d012bfddef815ad03781c2e3907998e20d8c7f"},"commit"),". Where the ",(0,i.kt)("inlineCode",{parentName:"p"},"package_config.get_job_views")," method looks like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/majamassarini/packit/blob/multiple_distgit_external_package_config/packit/config/package_config.py#L157-L172"},"this"),"."),(0,i.kt)("p",{parentName:"li"},"The above solution resolves a test like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/majamassarini/packit-service/blob/multiple_distgit_packit_api/tests/unit/test_jobs.py#L3134-L3234"},"this"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PROS"),": we don't need to touch much more code than this. Our handlers are designed to work with one ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfig")," and they will keep doing that, working in the same way with a ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfigView")," (or just pick another name for it) and a ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfig"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CONS"),": if, for supporting monorepos, we need to deal with multiple packages in the same handler. Then we need to group together the ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfigView"),"s, like in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package_config.get_grouped_job_views")," method ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/majamassarini/packit/blob/multiple_distgit_external_package_config/packit/config/package_config.py#L174-L196"},"here"),". And we should ",(0,i.kt)("strong",{parentName:"p"},"add a new way to match jobs and handlers")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"steve_job.process_jobs")," method.\nCreate new ",(0,i.kt)("inlineCode",{parentName:"p"},"steve_job.get_handlers_for_event")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"steve_job.get_config_for_handler_kls")," methods that instead of calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"steve_job.get_jobs_matching_event")," will call a new method named something like ",(0,i.kt)("inlineCode",{parentName:"p"},"steve_job.get_grouped_jobs_matching_event"),".\nAnd the ",(0,i.kt)("inlineCode",{parentName:"p"},"steve_job.process_jobs")," at the end will create both the old handlers taking just one ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfig")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfigView")," and also the ",(0,i.kt)("strong",{parentName:"p"},"brand new handlers")," taking a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfigView"),"s.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For a ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfig")," referencing multiple packages create as many ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfigView"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/majamassarini/packit/blob/multiple_distgit_external_package_config/packit/config/job_config.py#L108-L143"},"here a draft example"),", as the packages and ",(0,i.kt)("strong",{parentName:"p"},"group them together")),(0,i.kt)("p",{parentName:"li"},"Substitute the ",(0,i.kt)("inlineCode",{parentName:"p"},"self.event.package_config.jobs")," with a call like the ",(0,i.kt)("inlineCode",{parentName:"p"},"package_config.get_grouped_job_views")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/majamassarini/packit/blob/multiple_distgit_external_package_config/packit/config/package_config.py#L174-L196"},"here"),".\nModify ",(0,i.kt)("inlineCode",{parentName:"p"},"steve_job.process_jobs"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"steve_job.get_handlers_for_event"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"steve_job.get_config_for_handler_kls")," methods to work with the new data structure returned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"package_config.get_grouped_job_views"),"."),(0,i.kt)("p",{parentName:"li"},"At the end the ",(0,i.kt)("inlineCode",{parentName:"p"},"steve_job.process_jobs")," will create only handlers taking a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfig")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"JobConfigView")," and for this reason we will modify all our handlers to loop over all the given configs."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PROS"),": one single way to ",(0,i.kt)("em",{parentName:"p"},"match jobs and handlers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CONS"),": we are suggesting that all the handlers should be able to handle multiple configs, but this is probably not true."))))),(0,i.kt)("p",null,"Personally I prefer solution 1. I see it as more simple and explicit. We probably could/should re-think the job/handler matching code from the point of view of a monorepo. I feel like it is worth doing that when we have a clear understanding of what we need in a handler capable of supporting multiple packages."))}d.isMDXComponent=!0}}]);