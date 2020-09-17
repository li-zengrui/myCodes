document.addEventListener("DOMContentLoaded", function () {
  var that;
  class Tab {
    constructor(id) {
      that = this;
      // 获取整个tab、添加按钮、删除按钮、ul、main
      this.tab = document.querySelector(id);
      this.add = this.tab.querySelector("#tabadd");
      this.ul = this.tab.querySelector(".ul");
      this.main = this.tab.querySelector(".secfa");
      this.init();
    }
    // 增
    addTab() {
      // 干掉所有人的样式
      that.removeClass();
      // 留下我自己的样式
      var newli =
        '<li class="liactive"><span>新选项卡</span><strong class="del">×</strong></li>';
      var newsection = "<section class='sectionon'>新内容</section>";
      that.ul.insertAdjacentHTML("beforeend", newli);
      that.main.insertAdjacentHTML("beforeend", newsection);
      // 更新一下新增的li和section和删除按钮
      that.init();
    }

    // 删
    removeTab(e) {
      // 阻止冒泡，防止触发li点击事件
      e.stopPropagation();
      that.lis[this.index].remove();
      that.sections[this.index].remove();
      that.init();
      if (document.querySelector(".liactive")) return;
      if (this.index > 0) {
        this.index--;
        that.lis[this.index].click();
      } else if (this.index === 0) {
        that.lis[this.index] && that.lis[this.index].click();
      }
    }
    // 改
    editTab() {
      var str = this.innerHTML;
      window.getSelection
        ? window.getSelection().removeAllRanges()
        : document.selection.empty();
      this.innerHTML = '<input type="text">';
      var input = this.children[0];
      input.value = str;
      input.select();
      input.onblur = function () {
        this.parentNode.innerHTML = this.value;
      };
      input.onkeyup = function (e) {
        if (e.keyCode == 13) {
          this.blur();
        }
      };
    }
    // 查
    toggleTab() {
      that.removeClass();
      that.lis[this.index].className = "liactive";
      that.sections[this.index].className = "sectionon";
    }
    // 初始化函数，给元素添加事件
    init() {
      that.update();
      that.add.addEventListener("click", that.addTab);
      for (var i = 0; i < that.lis.length; i++) {
        that.remove[i].index = i;
        that.lis[i].index = i;
        that.remove[i].addEventListener("click", that.removeTab);
        that.lis[i].addEventListener("click", that.toggleTab);
        that.spans[i].ondblclick = that.editTab;
        that.sections[i].addEventListener("dblclick", that.editTab);
      }
    }
    // 更新li和section和删除按钮
    update() {
      that.lis = that.ul.querySelectorAll("li");
      that.sections = that.main.querySelectorAll("section");
      that.remove = that.tab.querySelectorAll(".del");
      that.spans = that.ul.querySelectorAll("span");
    }
    // 清除li和section的样式
    removeClass() {
      for (var i = 0; i < this.lis.length; i++) {
        that.lis[i].className = "";
        that.sections[i].className = "";
      }
    }
  }
  new Tab("#tab1");
});
