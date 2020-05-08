var el = document.querySelectorAll('.tabs');
var instance = M.Tabs.init(el, {});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });