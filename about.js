function previous(el) {
    var prev = el.previousElementSibling;
  
    if (prev && prev.offsetHeight > 0) {
      prev.style.height = "0px";
    }
  }
  
  function down(e) {
    var nextt = e.nextElementSibling;
    if (nextt.offsetHeight > 0) {
      nextt.style.height = "0px";
    } else {
      previous(e);
      nextt.style.height = `${nextt.scrollHeight}px`;
    }
  }
  