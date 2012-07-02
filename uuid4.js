(function(window, Math){

var rand = Math.random;

function uuid4() {
  var uuid = "", r = rand, i, v;
  for (i = 0; i < 32; i++) {
    v = r() * 16 | 0;

    switch (i) {
      case 12:
        uuid += '-4'; break;
      case 8:
      case 16:
      case 20:
        uuid += '-';
      default:
        uuid += (i === 16 ? (v & 3 | 8) : v).toString(16);
    }
  }
  return uuid;
}

window.uuid4 = uuid4;

})(this, Math);
