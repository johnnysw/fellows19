//找到elem的下一个兄弟元素 nodeType=1
function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType != 1);
    return elem;
}

//找到elem的第一个孩子元素
function first(elem) {
    elem = elem.firstChild;
    return elem.nodeType == 1 ? elem : next(elem);
}

//封装函数，通过class的名字获取元素
function getByClassName(clsName, context) {
    context = context || document;
    if (context.getElementsByClassName) {//能力检测
        return context.getElementsByClassName(clsName);
    } else {
        var allList = context.getElementsByTagName('*');
        var result = [];
        for (var i = 0; i < allList.length; i++) {
            //暂时还不完善，完整的需要用到正则表达式
            if (allList[i].className.indexOf(clsName) != -1) {
                result.push(allList[i]);
            }
        }
        return result;
    }
}

function test(){
    alert(123);
}