(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{312:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类","aria-hidden":"true"}},[t._v("#")]),t._v(" 类")]),t._v(" "),a("h2",{attrs:{id:"为什么这些空类的行为很奇怪？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么这些空类的行为很奇怪？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么这些空类的行为很奇怪？")]),t._v(" "),a("blockquote",[a("p",[t._v("我写下这段代码，并期望它抛出错误")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Empty")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* empty */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" e2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Empty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("请参阅此问题「"),a("router-link",{attrs:{to:"/faqs/type-system-behavior.html#为什么所有的类型，都能赋值给一个空的接口？"}},[t._v("为什么所有的内容都能赋值给空的接口")]),t._v("」。值得重新思考一下这个答案的建议：一般来说，你永远不应该声明一个没有属性的类。即使对于子类也是如此：")],1),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Base")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  important"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alpha")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Base")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bravo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Base")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("Alpha")]),t._v(" 和 "),a("code",[t._v("Bravo")]),t._v(" 的结构相同，都是继承自 "),a("code",[t._v("Base")]),t._v("，这会产生许多令人惊讶的效果，所以别这么做。如果你想让 "),a("code",[t._v("Alpha")]),t._v(" 与 "),a("code",[t._v("Bravo")]),t._v(" 不相同，为它们各自提供一个属性。")]),t._v(" "),a("h2",{attrs:{id:"什么是名义上的类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是名义上的类","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是名义上的类")]),t._v(" "),a("p",[t._v("这两段代码该如何解释：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alpha")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bravo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Charlie")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Delta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alpha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bravo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Charlie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Delta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OK")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error")]),t._v("\n")])])]),a("p",[t._v("在 TypeScript 中，类进行结构上的比较，有一个例外是对于 "),a("code",[t._v("private")]),t._v(" 与 "),a("code",[t._v("protected")]),t._v(" 的成员。当一个成员是 "),a("code",[t._v("private")]),t._v(" 或者 "),a("code",[t._v("protected")]),t._v(" 时，它们必须来自同一个声明，才能被视为与另一个 "),a("code",[t._v("private")]),t._v(" 或者 "),a("code",[t._v("protected")]),t._v(" 的成员相同。")]),t._v(" "),a("h2",{attrs:{id:"为什么在我的实例方法中，this-成了一个「孤儿」？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么在我的实例方法中，this-成了一个「孤儿」？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么在我的实例方法中，"),a("code",[t._v("this")]),t._v(" 成了一个「孤儿」？")]),t._v(" "),a("blockquote",[a("p",[t._v("我写下如下代码")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prints 'undefined', not 10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Throws error "this.method is not a function"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("可能会提出一些相似的问题：")]),t._v(" "),a("ul",[a("li",[t._v("为什么在我的回调函数中类的属性没有定义？")]),t._v(" "),a("li",[t._v("为什么在我的回调函数中，"),a("code",[t._v("this")]),t._v(" 指向 "),a("code",[t._v("window")]),t._v("？")]),t._v(" "),a("li",[t._v("为什么在我的回调函数中，"),a("code",[t._v("this")]),t._v(" 指向 "),a("code",[t._v("undefined")]),t._v("？")]),t._v(" "),a("li",[t._v("为什么我会得到 "),a("code",[t._v("this.someMethod is not a function")]),t._v(" 的错误？")]),t._v(" "),a("li",[t._v("为什么我会得到 "),a("code",[t._v("Cannot read property 'someMethod' of undefined")]),t._v(" 的错误？")])]),t._v(" "),a("p",[t._v("在 JavaScript 中，"),a("code",[t._v("this")]),t._v(" 值由以下确定：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("该函数是调用 "),a("code",[t._v(".bind")]),t._v(" 的结果吗？如果是这样，"),a("code",[t._v("this")]),t._v(" 由传递给 "),a("code",[t._v("bind")]),t._v(" 的第一个参数确定")])]),t._v(" "),a("li",[a("p",[t._v("该函数是通过属性表达式 "),a("code",[t._v("expr.method() ?")]),t._v(" 直接调用吗？如果是这样，"),a("code",[t._v("this")]),t._v(" 指向 "),a("code",[t._v("expr")])])]),t._v(" "),a("li",[a("p",[t._v("否则，"),a("code",[t._v("this")]),t._v(" 是 "),a("code",[t._v("undefined")]),t._v("（在严格模式中），或者是 "),a("code",[t._v("window")]),t._v(" （非严格模式中）。")])])]),t._v(" "),a("p",[t._v("在上一个例子中，影响结果的是这行代码：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在这里，我们提供了 "),a("code",[t._v("obj.someCallback")]),t._v(" 到 "),a("code",[t._v("setTimeout")]),t._v(" 的函数引用，然后该函数并不是作为 "),a("code",[t._v("bind")]),t._v(" 的结果调用，也不是直接作为一个方法调用。因此在 "),a("code",[t._v("someCallback")]),t._v(" 里的 "),a("code",[t._v("this")]),t._v(" 指向 "),a("code",[t._v("window")]),t._v("（或者在严格模式下的 "),a("code",[t._v("undefied")]),t._v("）。")]),t._v(" "),a("p",[t._v("这里概述了一些解决办法：http://stackoverflow.com/a/20627988/1704166")]),t._v(" "),a("h2",{attrs:{id:"当-bar-是一个-class-时，bar-和-typeof-bar-有什么区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当-bar-是一个-class-时，bar-和-typeof-bar-有什么区别？","aria-hidden":"true"}},[t._v("#")]),t._v(" 当 "),a("code",[t._v("Bar")]),t._v(" 是一个 "),a("code",[t._v("class")]),t._v(" 时，"),a("code",[t._v("Bar")]),t._v(" 和 "),a("code",[t._v("typeof Bar")]),t._v(" 有什么区别？")]),t._v(" "),a("blockquote",[a("p",[t._v("我写下这段代码，但是我不理解我为什么会得到错误：")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Cannot assign 'typeof MyClass' to MyClass? Huh?")]),t._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在 JavaScript 中，类仅仅是个函数，这点很重要。我们将类对象本身 -- "),a("code",[t._v("MyClass")]),t._v(" 的值，作为是构造函数。当一个构造函数被 "),a("code",[t._v("new")]),t._v(" 调用时，我们得到一个对象，它是该类的实例。")]),t._v(" "),a("p",[t._v("因此，当我们定义一个类时，实际上，我们定义了两个不同的类型。")]),t._v(" "),a("p",[t._v("第一个是由类的名字推导而来，在这个例子中是 "),a("code",[t._v("MyClass")]),t._v("。这个是类实例的类型，它定义了类的实例具有的属性和方法，它是一个通过调用类的构造函数来返回的类型。")]),t._v(" "),a("p",[t._v("第二个类型是一个匿名的类型，它是构造函数具有的类型。它包含一个返回类实例的构造函数签名（可以使用 "),a("code",[t._v("new")]),t._v(" 调用），同时，它也包含类中可能含有的 "),a("code",[t._v("static")]),t._v(" 属性和方法。它也通常被称为「静态方面」，因为它包含那些静态成员（以及作为类的构造函数）。我们可以用 "),a("code",[t._v("typeof")]),t._v(" 来引用此类型。")]),t._v(" "),a("p",[t._v("当在类型位置使用 "),a("code",[t._v("typeof")]),t._v(" 操作符时，描述了表达式的类型。因此 "),a("code",[t._v("typeof MyClass")]),t._v(" 是指 "),a("code",[t._v("MyClass")]),t._v(" 的类型。")]),t._v(" "),a("h2",{attrs:{id:"为什么我的子类属性初始值设定会覆盖基类构造函数中设置的值？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么我的子类属性初始值设定会覆盖基类构造函数中设置的值？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么我的子类属性初始值设定会覆盖基类构造函数中设置的值？")]),t._v(" "),a("p",[t._v("有关此问题，和其他初始化顺序问题，请参阅 "),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/1617",target:"_blank",rel:"noopener noreferrer"}},[t._v("#1617"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"声明类和接口有什么区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明类和接口有什么区别？","aria-hidden":"true"}},[t._v("#")]),t._v(" 声明类和接口有什么区别？")]),t._v(" "),a("p",[t._v("参阅: http://stackoverflow.com/a/14348084/1704166")]),t._v(" "),a("h2",{attrs:{id:"接口继承类，意味着什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口继承类，意味着什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口继承类，意味着什么？")]),t._v(" "),a("blockquote",[a("p",[t._v("这段代码是什么意思？")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这创建了一个名叫 "),a("code",[t._v("Bar")]),t._v(" 的类型，它与 "),a("code",[t._v("Foo")]),t._v(" 的实例具有相同的成员。当 "),a("code",[t._v("Foo")]),t._v(" 具有私有成员时，"),a("code",[t._v("Bar")]),t._v(" 内的相同属性，必须由一个继承自 "),a("code",[t._v("Foo")]),t._v(" 的类实现。总的来说，这种模式是应当避免的，尤其是在 "),a("code",[t._v("Foo")]),t._v(" 由私有成员时。")]),t._v(" "),a("h2",{attrs:{id:"为什么我会得到错误：typeerror-base-class-name-is-not-defined-in-extends？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么我会得到错误：typeerror-base-class-name-is-not-defined-in-extends？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么我会得到错误："),a("code",[t._v("TypeError: [base class name] is not defined in __extends")]),t._v("？")]),t._v(" "),a("blockquote",[a("p",[t._v("我写下一段代码，")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** file1.ts **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alpha")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** file2.ts **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bravo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alpha")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在运行时，有如下错误发生在 "),a("code",[t._v("_extends")]),t._v(" 中：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("Uncaught TypeError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Alpha is not defined\n")])])]),a("p",[t._v("最常见的原因是在你的 HTML 中包含有 file2.ts 的 "),a("code",[t._v("script")]),t._v("，但是并没有包含 "),a("code",[t._v("file1.ts")]),t._v(" 的 "),a("code",[t._v("script")]),t._v("。因此你需要在引用 "),a("code",[t._v("file2.ts")]),t._v(" 之前引用 "),a("code",[t._v("file1.ts")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"为什么我会得到-typeerror-cannot-read-property-prototype-of-undefined-in-extends-的错误？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么我会得到-typeerror-cannot-read-property-prototype-of-undefined-in-extends-的错误？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么我会得到 "),a("code",[t._v("TypeError: Cannot read property 'prototype' of undefined\" in __extends")]),t._v(" 的错误？")]),t._v(" "),a("blockquote",[a("p",[t._v("我写下如下代码：")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** file1.ts **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alpha")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** file2.ts **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bravo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alpha")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在运行时，有如下错误发生在 "),a("code",[t._v("_extends")]),t._v(" 中：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("Uncaught TypeError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cannot read property "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prototype'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" undefined\n")])])]),a("p",[t._v("出现这种情况，原因可能有一些。")]),t._v(" "),a("p",[t._v("首先，在单个文件中，你在基类之前定义了派生类，那么你应该重新排序文件，以便在派生类之前声明基类。")]),t._v(" "),a("p",[t._v("如果你使用了 "),a("code",[t._v("--out")]),t._v(" 的编译选项，编译器可能会对你希望文件的顺序感到困惑。请参阅常见问题简答中「如果控制文件排序」部分")]),t._v(" "),a("p",[t._v("如果您没有使用 "),a("code",[t._v("--out")]),t._v("，HTML 文件中的 "),a("code",[t._v("script")]),t._v(" 引用文件的顺序可能出现错误。重新排序 "),a("code",[t._v("script")]),t._v(" 对文件的引用，以便在定义派生类的文件之前包含定义基类的文件。")]),t._v(" "),a("p",[t._v("最后，如果你使用某种类型的第三方包，该包可能会错误地排序了文件。请参阅该工具的文档以了解如何在结果输出中正确排序输入文件。")]),t._v(" "),a("h2",{attrs:{id:"为什么不扩展-error、array、map-内置函数？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么不扩展-error、array、map-内置函数？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么不扩展 "),a("code",[t._v("Error")]),t._v("、"),a("code",[t._v("Array")]),t._v("、"),a("code",[t._v("Map")]),t._v(" 内置函数？")]),t._v(" "),a("p",[t._v("在 ES2015 中，返回一个对象的构造函数将 "),a("code",[t._v("this")]),t._v(" 的值隐式替换为 "),a("code",[t._v("super(...)")]),t._v(" 的任何调用者。这对于构造函数代码捕获 "),a("code",[t._v("super(...)")]),t._v(" 的任何潜在返回值并将其替换为 "),a("code",[t._v("this")]),t._v(" 是必要的。")]),t._v(" "),a("p",[t._v("这样导致的结果是："),a("code",[t._v("Error")]),t._v("、"),a("code",[t._v("Array")]),t._v(" 等子类将不再按预期工作。这是由于 "),a("code",[t._v("Error")]),t._v("、"),a("code",[t._v("Array")]),t._v(" 等的构造函数使用 ECMAScript6 中的 "),a("code",[t._v("new.target")]),t._v(" 来调整原型链。但是，在 ECMAScript 5 中调用构造函数时，无法确保 "),a("code",[t._v("new.target")]),t._v(" 的值。在其他一些低水平的编译器通常都有相同的限制。")]),t._v(" "),a("h3",{attrs:{id:"例如："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例如：","aria-hidden":"true"}},[t._v("#")]),t._v(" 例如：")]),t._v(" "),a("p",[t._v("如下做为一个子类：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FooError")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("你可能会发现：")]),t._v(" "),a("ul",[a("li",[t._v("通过这些子类的构造函数返回的对象中，方法可能是 "),a("code",[t._v("undefined")]),t._v("。因此，当调用 "),a("code",[t._v("sayHello")]),t._v(" 时，会抛出一个错误。")]),t._v(" "),a("li",[a("code",[t._v("instanceof")]),t._v(" 将会在子类的实例和自身实例中被中断。因此 "),a("code",[t._v("new FooError() instanceof FooError")]),t._v(" 将返回 "),a("code",[t._v("false")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐","aria-hidden":"true"}},[t._v("#")]),t._v(" 推荐")]),t._v(" "),a("p",[t._v("做为一个推荐方式，你可以在 "),a("code",[t._v("super(...)")]),t._v(" 被调用之后手动调整原型。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FooError")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set the prototype explicitly.")]),t._v("\n    Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPrototypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FooError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然而，任何 "),a("code",[t._v("FooError")]),t._v(" 的子类将不得不手动设置原型。在运行时，对于那些不支持 "),a("code",[t._v("Object.setPrototypeOf")]),t._v(" 属性的，你可能用要 "),a("code",[t._v("__proto__")]),t._v(" 来替代他。")]),t._v(" "),a("p",[t._v("不幸的是，"),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/microsoft-edge/dev-guide/whats-new/javascript-version-information",target:"_blank",rel:"noopener noreferrer"}},[t._v("IE 10 及其一下不兼容这些方法"),a("OutboundLink")],1),t._v("。你可以手动将原型中的方法复制到实例本身，(例如："),a("code",[t._v("FooError.prototype")]),t._v(" 复制到 "),a("code",[t._v("this")]),t._v(" 上)，但是对于原型链本身是无法修复的。")])])},[],!1,null,null,null);s.default=e.exports}}]);