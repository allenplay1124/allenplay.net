(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{284:function(t,n,r){"use strict";r.r(n);var o={props:["tags"]},e=r(24),component=Object(e.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("ul",{staticClass:"clear-both"},[r("li",{staticClass:"\n                float-left\n                p-1\n                mx-2\n                shadow\n                rounded\n                bg-gray-800\n                dark:bg-gray-800\n                text-gray-100\n            "},[t._v("\n            Tags:\n        ")]),t._v(" "),t._l(t.tags,(function(n,o){return r("li",{key:o,staticClass:"\n                float-left\n                p-1\n                mx-2\n                shadow\n                rounded\n                bg-gray-200\n                text-gray-600\n                hover:bg-sky-500 hover:text-gray-50\n                dark:bg-sky-500\n                dark:text-gray-50\n                dark:hover:bg-gray-100\n                dark:hover:text-sky-600\n                hover:shadow-xl\n            "},[r("nuxt-link",{attrs:{to:n.path}},[t._v("\n                "+t._s(n.title)+"\n            ")])],1)}))],2)])}),[],!1,null,null,null);n.default=component.exports},285:function(t,n,r){"use strict";r.r(n);var o={props:["post"],components:{TagList:r(284).default}},e=r(24),component=Object(e.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"\n        bg-gray-100\n        dark:bg-gray-600 dark:text-gray-100\n        shadow\n        rounded\n        w-full\n        columns-1\n        lg:columns-2\n        gap-4\n        my-4\n        p-4\n    "},[r("div",{staticClass:"w-full"},[r("nuxt-link",{attrs:{to:t.post.path}},[r("img",{staticClass:"\n                    rounded\n                    shadow\n                    object-cover\n                    h-[280px]\n                    hover:shadow-xl\n                    w-full\n                ",attrs:{src:t.post.image,alt:t.post.title}})])],1),t._v(" "),r("div",{staticClass:"mt-2 w-full"},[r("nuxt-link",{attrs:{to:t.post.path}},[r("h2",{staticClass:"text-2xl"},[t._v(t._s(t.post.title))])]),t._v(" "),r("div",{staticClass:"mb-10 mt-3 dark:text-gray-50"},[r("font-awesome-icon",{attrs:{icon:["fas","fa-calendar-alt"]}}),t._v("\n\n              \n\n            "+t._s(t.post.pubDate.substring(0,19).replace("T"," "))+"\n\n              \n\n            "),r("font-awesome-icon",{attrs:{icon:["fas","fa-folder-open"]}}),t._v("\n\n              \n\n            "),r("nuxt-link",{attrs:{to:t.post.category.path}},[t._v("\n                "+t._s(t.post.category.title)+"\n            ")])],1),t._v(" "),r("div",{staticClass:"h-32 overflow-hidden"},[t._v("\n            "+t._s(t.post.summary)+"\n        ")]),t._v(" "),r("div",[r("TagList",{attrs:{tags:t.post.tags}})],1),t._v(" "),r("div",{staticClass:"text-right"},[r("div",[r("nuxt-link",{staticClass:"\n                        hover:bg-gradient-to-r\n                        from-cyan-500\n                        via-sky-500\n                        to-lime-500\n                        hover:text-gray-100\n                        dark:hover:from-cyan-500 dark:hover:to-blue-500\n                        p-3\n                        hover:rounded hover:shadow\n                    ",attrs:{to:t.post.path}},[t._v("\n                    More ...\n                ")])],1)])],1)])}),[],!1,null,null,null);n.default=component.exports}}]);