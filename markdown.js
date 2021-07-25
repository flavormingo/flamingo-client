const marked = require('marked');

function update(e) {
  let md_content = document.querySelector('#md-content').value
  let html_content = marked(md_content);
  document.querySelector('#html-content').innerHTML = html_content;
}
