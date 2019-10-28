(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{279:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"export-default-被认为是有害的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-default-被认为是有害的","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("export default")]),t._v(" 被认为是有害的")]),t._v(" "),a("p",[t._v("假如你有一个包含以下内容的 "),a("code",[t._v("foo.ts")]),t._v(" 文件：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("你可能会使用 ES6 语法导入它（在 "),a("code",[t._v("bar.ts")]),t._v(" 里）：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这存在一些可维护性的问题：")]),t._v(" "),a("ul",[a("li",[t._v("如果你在 "),a("code",[t._v("foo.ts")]),t._v(" 里重构 "),a("code",[t._v("Foo")]),t._v("，在 "),a("code",[t._v("bar.ts")]),t._v(" 文件中，它将不会被重新命名；")]),t._v(" "),a("li",[t._v("如果你最终需要从 "),a("code",[t._v("foo.ts")]),t._v(" 文件中导出更多有用的信息（在你的很多文件中都存在这种情景），那么你必须兼顾导入语法。")])]),t._v(" "),a("p",[t._v("由于这些原因，我推荐在导入时使用简单的 "),a("code",[t._v("export")]),t._v(" 与解构的形式，如 "),a("code",[t._v("foo.ts")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("接着：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("下面，我将会介绍更多的原因。")]),t._v(" "),a("h2",{attrs:{id:"可发现性差"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可发现性差","aria-hidden":"true"}},[t._v("#")]),t._v(" 可发现性差")]),t._v(" "),a("p",[t._v("默认导出的可发现性非常差，你不能智能的辨别一个模块它是否有默认导出。")]),t._v(" "),a("p",[t._v("在使用默认导出时，你什么也没有得到（可能它有默认导出，可能它没有）。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* here */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("没有默认导出，你可以用以下方式获取智能提示：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* here */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"自动完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动完成","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动完成")]),t._v(" "),a("p",[t._v("不管你是否了解导出，你都可以在 "),a("code",[t._v("import { /* here */ } from './foo'")]),t._v(" 的 "),a("code",[t._v("here")]),t._v(" 位置，来了解导出模块的信息。")]),t._v(" "),a("h2",{attrs:{id:"commonjs-互用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-互用","aria-hidden":"true"}},[t._v("#")]),t._v(" CommonJS 互用")]),t._v(" "),a("p",[t._v("对于必须使用 "),a("code",[t._v("const { default } = require('module/foo')")]),t._v(" 而不是 "),a("code",[t._v("const { Foo } = require('module/foo')")]),t._v(" 的 CommonJS 的用户来说，这会是一个糟糕的体验。当你导入一个模块时，你很可能想重命名 "),a("code",[t._v("default")]),t._v(" 作为导入的名字。")]),t._v(" "),a("h2",{attrs:{id:"防止拼写错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防止拼写错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 防止拼写错误")]),t._v(" "),a("p",[t._v("当你在开发时使用 "),a("code",[t._v("import Foo from './foo'")]),t._v(" 时，并不会得到有关于拼写的任何错误，其他人可能会这么写 "),a("code",[t._v("import foo from './foo'")]),t._v("；")]),t._v(" "),a("h2",{attrs:{id:"再次导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再次导出","aria-hidden":"true"}},[t._v("#")]),t._v(" 再次导出")]),t._v(" "),a("p",[t._v("再次导出是没必要的，但是在 "),a("code",[t._v("npm")]),t._v(" 包的根文件 "),a("code",[t._v("index")]),t._v(" 却是很常见。如："),a("code",[t._v("import Foo from './foo'；export { Foo }")]),t._v("（默认导出）VS "),a("code",[t._v("export * from './foo'")]),t._v(" （命名导出）。")]),t._v(" "),a("h2",{attrs:{id:"动态导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态导入","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态导入")]),t._v(" "),a("p",[t._v("在动态的 "),a("code",[t._v("import")]),t._v(" 中，默认导出会以 "),a("code",[t._v("default")]),t._v(" 的名字暴露自己，如：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HighChart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://code.highcharts.com/js/es-modules/masters/highcharts.src.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nHighcharts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'container'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Notice `.default`")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);