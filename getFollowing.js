function sendReq(next) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var result = {
      hasNext: false,
      next: "",
      data: null,
    };
    xhr.open(
      "GET",
      `https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables=` +
        encodeURIComponent(
          JSON.stringify({
            id: document.getElementsByTagName("html")[0].getAttribute("id"),
            include_reel: true,
            fetch_mutual: true,
            first: 50,
            after: next,
          })
        )
    );

    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.status === 200) {
        var res = JSON.parse(xhr.responseText);
        result.hasNext = res.data.user.edge_follow.page_info.has_next_page;
        result.next = res.data.user.edge_follow.page_info.end_cursor;
        console.log(res.data.user.edge_follow.page_info.edges);
        result.data = res.data.user.edge_follow.edges.map((edge) => {
          return {
            id: edge.node.id,
            username: edge.node.username,
          };
        });
        resolve(result);
      }
    };
  });
}

async function getFollowing() {
  return new Promise(async function (resolve, reject) {
    var following = [];
    var result = {
      hasNext: true,
      next: undefined,
    };
    while (result.hasNext) {
      var d = await sendReq(result.next)
        .then(function (data) {
          return data;
        })
        .catch(function (err) {
          reject(err);
          console.log(err);
        });
      console.log("data", d);
      result.hasNext = d.hasNext;
      result.next = d.next;
      following = following.concat(d.data);
      if (!d.hasNext) {
        console.log(following);
        resolve(following);
      }
    }
  });
}

return getFollowing().then((data) => data);
