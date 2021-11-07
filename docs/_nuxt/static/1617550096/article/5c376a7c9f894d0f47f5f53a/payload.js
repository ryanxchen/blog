__NUXT_JSONP__("/article/5c376a7c9f894d0f47f5f53a", {data:[{article:{_id:"5c376a7c9f894d0f47f5f53a",meta:{createDate:"2019-01-10 23:53:32",updateDate:"2019-01-15 17:03:36"},tags:["javascript"],title:"简单实现浅拷贝与深拷贝",content:"\u003Ch3\u003E深浅拷贝区别\u003C\u002Fh3\u003E\n\u003Cp\u003E浅拷贝只复制第一层可枚举的属性值，深拷贝对每一层里的可枚举的属性值都进行复制。\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Ch3\u003E简单实现浅拷贝\u003C\u002Fh3\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cpre class=\"language-js\"\u003E\u003Ccode\u003E\u003Cspan class=\"token keyword\"\u003Efunction\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003Ecopy\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token parameter\"\u003Esource\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"token keyword\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003Esource \u003Cspan class=\"token operator\"\u003E===\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Enull\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E||\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Etypeof\u003C\u002Fspan\u003E source \u003Cspan class=\"token operator\"\u003E!==\u003C\u002Fspan\u003E \u003Cspan class=\"token string\"\u003E'object'\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Ereturn\u003C\u002Fspan\u003E source\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"token keyword\"\u003Econst\u003C\u002Fspan\u003E copy \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E Array\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"token function\"\u003EisArray\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003Esource\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E?\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E]\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n\u003Cp\u003EObject\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"token function\"\u003Ekeys\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003Esource\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"token function\"\u003EforEach\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token parameter\"\u003Ekey\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E{\u003C\u002Fspan\u003E\ncopy\u003Cspan class=\"token punctuation\"\u003E[\u003C\u002Fspan\u003Ekey\u003Cspan class=\"token punctuation\"\u003E]\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E source\u003Cspan class=\"token punctuation\"\u003E[\u003C\u002Fspan\u003Ekey\u003Cspan class=\"token punctuation\"\u003E]\u003C\u002Fspan\u003E\n\u003Cspan class=\"token punctuation\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"token keyword\"\u003Ereturn\u003C\u002Fspan\u003E copy\n\u003Cspan class=\"token punctuation\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E浅拷贝的实现有\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Ccode\u003EObject.assign\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003E...\u003C\u002Fcode\u003E展开语法\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003EArray.prototype.slice()\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E数组的\u003Ccode\u003Econcat\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Ch3\u003E简单实现深拷贝\u003C\u002Fh3\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cpre class=\"language-js\"\u003E\u003Ccode\u003E\u003Cspan class=\"token keyword\"\u003Efunction\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003EdeepCopy\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token parameter\"\u003Esource\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E{\u003C\u002Fspan\u003E\n  \u003Cspan class=\"token keyword\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003Esource \u003Cspan class=\"token operator\"\u003E===\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Enull\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E||\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Etypeof\u003C\u002Fspan\u003E source \u003Cspan class=\"token operator\"\u003E!==\u003C\u002Fspan\u003E \u003Cspan class=\"token string\"\u003E'object'\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Ereturn\u003C\u002Fspan\u003E source\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"token keyword\"\u003Econst\u003C\u002Fspan\u003E copy \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E Array\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"token function\"\u003EisArray\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003Esource\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E?\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E]\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E{\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n\u003Cp\u003EObject\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"token function\"\u003Ekeys\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003Esource\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"token function\"\u003EforEach\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token parameter\"\u003Ekey\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E=&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E{\u003C\u002Fspan\u003E\ncopy\u003Cspan class=\"token punctuation\"\u003E[\u003C\u002Fspan\u003Ekey\u003Cspan class=\"token punctuation\"\u003E]\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003EdeepCopy\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003Esource\u003Cspan class=\"token punctuation\"\u003E[\u003C\u002Fspan\u003Ekey\u003Cspan class=\"token punctuation\"\u003E]\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"token punctuation\"\u003E}\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\n\u003Cspan class=\"token keyword\"\u003Ereturn\u003C\u002Fspan\u003E copy\n\u003Cspan class=\"token punctuation\"\u003E}\u003C\u002Fspan\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ccode\u003EJSON.parse(JSON.stringify(source))\u003C\u002Fcode\u003E 是对深拷贝的实现\u003C\u002Fp\u003E\n\u003Cp\u003E但存在如下问题：\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E拷贝JSON中不支持的类型会有问题，如\u003Ccode\u003EDate\u003C\u002Fcode\u003E类型拷贝时，会转化为带T格式的日期字符串\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n",__v:0}}],fetch:{},mutations:void 0});