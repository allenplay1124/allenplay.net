(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{294:function(t,n,e){"use strict";e.r(n);var r={props:["newPosts"]},o=e(23),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10"},[e("h3",{staticClass:"text-center text-3xl text-gray-100 py-5"},[t._v("最新文章")]),t._v(" "),e("div",{staticClass:"lg:container m-auto py-5 lg:px-10"},[e("div",{staticClass:"grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"},t._l(t.newPosts,(function(n,r){return e("div",{key:r,staticClass:"\n                    group\n                    bg-gray-100\n                    dark:bg-gray-700\n                    rounded-lg\n                    shadow-md\n                    relative\n                    hover:shadow-2xl\n                    transform\n                    hover:-translate-y-1 hover:scale-110\n                "},[e("div",{staticClass:"\n                        text-center\n                        absolute\n                        top-0\n                        right-0\n                        font-extrabold\n                        bg-sky-500\n                        text-gray-100\n                        group-hover:bg-opacity-75\n                        m-auto\n                        rounded-tr-md rounded-bl-xl\n                        p-2\n                    "},[e("nuxt-link",{attrs:{to:n.category.path}},[t._v("\n                        "+t._s(n.category.title)+"\n                    ")])],1),t._v(" "),e("nuxt-link",{attrs:{to:"/articles/"+n.slug}},[e("img",{staticClass:"object-cover rounded-t-md",attrs:{src:n.image,alt:n.title}})]),t._v(" "),e("div",{staticClass:"\n                        w-40\n                        p-1\n                        text-center\n                        mt-2\n                        ml-2\n                        rounded-full\n                        bg-sky-500\n                        text-gray-100\n                        top-40\n                        left-2\n                        group-hover:bg-opacity-75\n                        dark:group-hover:bg-sky-400\n                        text-sm\n                    "},[t._v("\n                    📅   \n                    "+t._s(n.createdAt.substring(0,10))+"\n                ")]),t._v(" "),e("div",{staticClass:"px-5 py-5"},[e("nuxt-link",{attrs:{to:"/articles/"+n.slug}},[e("h3",{staticClass:"\n                                text-left\n                                lg:text-xl\n                                md:text-xl\n                                xs:text-xl\n                                text-sky-500\n                                font-medium\n                                group-hover:border-b\n                                border-sky-500\n                                transition\n                                group-hover:ease-in-out\n                                group-hover:duration-150\n                            "},[t._v("\n                            "+t._s(n.title)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"py-3 dark:text-sky-100 text-justify text-sm"},[t._v("\n                        "+t._s(n.summary)+"\n                    ")]),t._v(" "),e("div",{staticClass:"\n                            text-justify\n                            flex flex-wrap\n                            gap-x-2 gap-y-1\n                            text-xs\n                            mt-3\n                        "},t._l(n.tags,(function(n,r){return e("div",{key:r,staticClass:"\n                                bg-gray-200\n                                text-gray-500\n                                p-1\n                                text-xs\n                                rounded\n                                hover:bg-sky-500 hover:text-gray-100\n                                dark:bg-sky-500\n                                dark:hover:bg-gray-100\n                                dark:text-gray-100\n                                dark:hover:text-sky-500\n                            "},[e("nuxt-link",{attrs:{to:n.path}},[t._v("\n                                "+t._s(n.title)+"\n                            ")])],1)})),0)],1)],1)})),0),t._v(" "),e("div",{staticClass:"text-center py-10 mt-2"},[e("nuxt-link",{staticClass:"bg-sky-500 text-gray-100 p-5 mt-3 rounded-full",attrs:{to:"/articles"}},[t._v("\n                全部文章\n            ")])],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);