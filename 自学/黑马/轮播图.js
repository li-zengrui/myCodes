window.addEventListener("load", function () {
  // 使左右按钮显示隐藏
  var focus = document.querySelector(".focus");
  var arrow_l = document.querySelector(".arrow-l");
  var arrow_r = document.querySelector(".arrow-r");
  focus.addEventListener("mouseover", function () {
    arrow_l.style.display = "block";
    arrow_r.style.display = "block";
    clearInterval(timer);
    timer = null;
  });
  focus.addEventListener("mouseout", function () {
    arrow_l.style.display = "none";
    arrow_r.style.display = "none";
    timer = setInterval(function () {
      arrow_r.click();
    }, 2000);
  });

  //   动态生成小圆圈
  var ul = focus.querySelector("ul");
  var ol = focus.querySelector(".circle");
  for (var i = 0; i < ul.children.length; i++) {
    //   设置小圆圈索引号
    var li = document.createElement("li");
    li.setAttribute("index", i);
    ol.appendChild(li);
    // 小圆圈点击变色事件
    li.addEventListener("click", function () {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";
      //   点击小圆圈ul移动
      var index = this.getAttribute("index");
      // 解决小bug
      num = index;
      circle = index;
      animate(ul, -index * focus.offsetWidth);
    });
  }
  ol.children[0].className = "current";
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  //   点击按钮实现图片滚动
  var num = 0;
  var circle = 0;
  //   节流阀
  var flag = true;
  arrow_l.addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == 0) {
        ul.style.left = -focus.offsetWidth * (ul.children.length - 1) + "px";
        num = ul.children.length - 1;
      }
      num--;
      animate(ul, -num * focus.offsetWidth, function () {
        flag = true;
      });
      // 小圆圈跟着图片滚动变化
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      circle--;
      if (circle == -1) {
        circle = 2;
      }
      ol.children[circle].className = "current";
    }
  });
  arrow_r.addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focus.offsetWidth, function () {
        flag = true;
      });
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      circle++;
      if (circle == ol.children.length) {
        circle = 0;
      }
      ol.children[circle].className = "current";
      console.log(circle);
    }
  });

  //图片移动函数
  function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      if (obj.offsetLeft == target) {
        clearInterval(obj.timer);
        if (callback) {
          callback();
        }
      } else if (obj.offsetLeft < target) {
        obj.style.left = obj.offsetLeft + 2 + "px";
      } else {
        obj.style.left = obj.offsetLeft - 2 + "px";
      }
    }, 1);
  }
  var timer = setInterval(function () {
    arrow_r.click();
  }, 4000);
});
