$(function () {
  load();
  $(".num1").text($(".ul1 li").length);
  $(".num2").text($(".ul2 li").length);

  $(".ul1,.ul2").on("click", ".btn", function (i, n) {
    var data = getDate();
    var index = $(this).siblings(".del").attr("id");
    data[index].done = $(this).prop("checked");
    saveData(data);
    load();
    $(".num1").text($(".ul1 li").length);
    $(".num2").text($(".ul2 li").length);
  });

  $("#write").on("keydown", function (e) {
    if (e.keyCode == 13) {
      if ($(this).val() === "") {
        alert("请输入您要的操作");
      } else {
        // 1.读取本地存储中以数组形式的数据
        var local = getDate();
        // 2.更新该数组
        local.push({ title: $(this).val(), done: false });
        //3.将数组存进本地存储
        saveData(local);
        // 4.渲染数据
        load();
        // 5.清空文本框
        $(this).val("");
        // 6.动态更新li数量
        $(".num1").text($(".ul1 li").length);
        $(".num2").text($(".ul2 li").length);
      }
    }
  });

  //删除操作
  $(".ul1").on("click", ".del", function () {
    var data = getDate();
    var index = $(this).attr("id");
    data.splice(index, 1);
    saveData(data);
    load();
    $(".num1").text($(".ul1 li").length);
    $(".num2").text($(".ul2 li").length);
  });

  //   函数：读取数据，数组格式返回
  function getDate() {
    var data = localStorage.getItem("todolist");
    if (data !== null) {
      // 将字符串格式转换为对象格式
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  //   函数：存储数据
  function saveData(data) {
    localStorage.setItem("todolist", JSON.stringify(data));
  }

  // 函数：渲染数据
  function load() {
    $(".ul1").empty();
    $(".ul2").empty();
    var data = getDate();
    $.each(data, function (i, n) {
      if (n.done) {
        $(".ul2").prepend(
          "<li><input type='checkbox' class='btn' checked><span class='why'>" +
            n.title +
            "</span><span class='del' id=" +
            i +
            "></span></li>"
        );
      } else {
        $(".ul1").prepend(
          "<li><input type='checkbox' class='btn'><span class='why'>" +
            n.title +
            "</span><span class='del' id=" +
            i +
            "></span></li>"
        );
      }
    });
  }
});
