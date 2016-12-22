/**
 * 加载最新的3个单词
 */
(function wordsList(){
    var words = localStorage.words || "";
    words =words.split(",").reverse().slice(0, 3);
    var h = '<h1>'
    words.forEach(function(e, i) {
      h += e + '</h1><h1>'
    })
    h += '</h1>'
    document.getElementById('container').innerHTML = h;
})()