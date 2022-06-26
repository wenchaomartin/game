### 多项式求职

有个多项式 F =A+BX+C(X) \
A,B 均为 Double 类型的常数 \
C为sin, cos,tan,exp,log,abs \
整体上为 三项的任意组合

`本题是一家公式面试题，当时觉得，可能要学点编译原理的知识`

`加上自己虽是科班但是却没有学过编译原理`

`兜兜转转急着找工作就没有选择,继续做下去`

### 解题步骤

1. 解析成token
2. 生成ast(生成的时候需要用到递归下降)
3. 解析ast

### todo

1. tan ,exp, log ，abs 函数目前不支持(逻辑上和 sin cos 是一样的 加上if 分支或者switch-case)
2. 应该还有个打印方法，prettyPrint() 将一tree 完美打印出来
3. 解析tree的时候，可以用下visitor pattern

### 参考

[tosding在eval.js中的思路](https://github.com/tsoding/emoteJAM/blob/master/js/eval.js)

[java 中自制编译器中表达式解析章节的递归下降的求解思路](https://craftinginterpreters.com/parsing-expressions.html)

[jackmott中解析tree中处理X节点或者说是求值](https://github.com/jackmott/gameswithgo-public/blob/master/evolvingpictures/apt/parser.go)





