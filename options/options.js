/**
 * 加载所有单词
 */
(function wordsList(){
    var words = localStorage.words || "";
    words = words.split(',');
    var h = '<h1>'
    words.forEach(function(e, i) {
      h += i + ': ' + e + '</h1><h1>'
    })
    h += '</h1>'
    document.getElementById('container').innerHTML = h;
})()