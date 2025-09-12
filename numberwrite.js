function slotwrite() {
  function div2_write(output, h_id) {
    if (h_id < 1 || h_id > 6) h_id = 6; // 範囲外なら h6 に
    div2.innerHTML = "<h" + h_id + ">" + output + "</h" + h_id + ">";
  }
  function speed_slot(time,kaitensuu){
    for (let i=0;i!=kaitensuu;i++){
      setTimeout(()=>{
        
      },(time*i))
    }
  }
  // div2_write("Hello!", 2);
  /*-この下からSlot Programを書いていく。*/
  
  
}
