(function(doc, win) {
    var docEl = doc.documentElement,
        //orientationchange为ios的旋转事件
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        //重置rem
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
  //DOMContentLoaded dom内容加载完毕
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
