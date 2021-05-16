var xhr = new XMLHttpRequest();

xhr.open("GET", "https://www.instagram.com/sudonims/?__a=1");
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.status === 200) {
    var b = JSON.parse(xhr.response);
    var a = document.getElementsByTagName("html")[0];
    a.setAttribute("id", b.graphql.user.id);
  }
};
