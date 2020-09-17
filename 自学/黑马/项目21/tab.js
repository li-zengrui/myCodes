$(function () {
  var that;
  class Tab {
    constructor(id) {
      that = this;
      //   获取元素
      this.main = document.querySelector(id);
      this.ul = document.querySelector(".ul");
      this.add = document.querySelector("#tabadd");
      this.secfa = document.querySelector(".secfa");
      this.init();
    }

    //   初始化函数,让相关元素绑定事件
    init() {
      this.updateNode();
      this.add.onclick = this.addTab;
      for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].index = i;
        this.lis[i].onclick = this.toggleTab;
        this.del[i].onclick = this.removeTab;
        this.spans[i].ondblclick = this.editTab;
        this.sections[i].ondblclick = this.editTab;
      }
    }
    // 切换
    toggleTab() {
      that.clearClass();
      this.className = "liactive";
      that.sections[this.index].className = "sectionon";
    }
    // 获取所有的li和section
    updateNode() {
      this.lis = document.querySelectorAll("li");
      this.sections = document.querySelectorAll("section");
      this.del = document.querySelectorAll(".del");
      this.spans = document.querySelectorAll("span");
    }
    // 清除所有li和section的类
    clearClass() {
      for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].className = "";
        this.sections[i].className = "";
      }
    }
    // 添加
    addTab() {
      that.clearClass();
      var newli =
        '<li class="liactive"><span>新选项卡</span><strong class="del">×</strong></li>';
      var newsection = "<section class='sectionon'>新内容</section>";
      that.ul.insertAdjacentHTML("beforeend", newli);
      that.secfa.insertAdjacentHTML("beforeend", newsection);
      that.init();
    }
    // 删除
    removeTab(e) {
      // 防止触发li点击事件
      e.stopPropagation();
      var index = this.parentNode.index;
      that.lis[index].remove();
      that.sections[index].remove();
      that.init();
      //   当删除非选定li之后，不变
      if (document.querySelector(".liactive")) return;
      //   当删除选定li之后，让前一个li处于选定状态
      //   自动调用点击事件.click()
      if (index > 0) {
        index--;
        that.lis[index].click();
      } else if (index === 0) {
        that.lis[index] && that.lis[index].click();
      }
    }
    // 修改
    editTab() {
      var str = this.innerHTML;
      console.log(str);
      //   双击禁止选定文字
      window.getSelection
        ? window.getSelection().removeAllRanges()
        : document.selection.empty();
      //生成文本框
      this.innerHTML = '<input type="text">';
      var input = this.children[0];
      input.value = str;
      //   文字处于选定状态
      input.select();
      // 离开文本框(失去焦点)时，值给span
      input.onblur = function () {
        this.parentNode.innerHTML = this.value;
      };
      // 离开文本框(按下回车)时，值给span
      input.onkeyup = function (e) {
        if (e.keyCode == 13) {
          this.blur();
        }
      };
    }
  }
  var tab1 = new Tab("#tab1");
});
