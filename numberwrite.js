function slotwrite() {
  function div1_write(output, h_id) {
    if (h_id === 1) {
      div1.innerHTML = "<h1>" + output + "</h1>";
    } else if (h_id === 2) {
      div1.innerHTML = "<h2>" + output + "</h2>";
    } else if (h_id === 3) {
      div1.innerHTML = "<h3>" + output + "</h3>";
    } else if (h_id === 4) {
      div1.innerHTML = "<h4>" + output + "</h4>";
    } else if (h_id === 5) {
      div1.innerHTML = "<h5>" + output + "</h5>";
    } else {
      div1.innerHTML = "<h6>" + output + "</h6>";
    }
  }

  // ここで呼び出せる
  // div1_write("テスト出力", 3);
}
