"use strict";

$(function() {
  $("#topics").change(function() {
    let topic = $(this).find("option:selected");
    let section = topic.attr("value");
    console.log(section);

    var url = "https://api.nytimes.com/svc/topstories/v2/{section}.json";
    url +=
      "?" +
      $.param({
        "api-key": "14bcc5d04435458ba00c5d1853898e15"
      });
    $.ajax({
      url: url,
      method: "GET"
    })
      .done(function(result) {
        console.log(result);
      })
      .fail(function(err) {
        throw err;
      });
  });
});
