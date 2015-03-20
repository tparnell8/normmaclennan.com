'use strict';

function makeUL(array) {
  var list = document.createElement('ul');

  array.slice(0,10).forEach(function(e){
    var item = document.createElement('li');
    var link = document.createElement('a');
    link.href = e.link;
    link.appendChild(document.createTextNode(e.title));
    item.appendChild(link);

    list.appendChild(item);
  });

  return list;
}

jQuery.getFeed({
  url: 'https://blog.normmaclennan.com/rss/',
  success: function(feed) {
    document.getElementById('blog-items').appendChild(makeUL(feed.items));
    var placeholder = document.getElementById('blog-placeholder');
    placeholder.parentNode.removeChild(placeholder);
  }
});
