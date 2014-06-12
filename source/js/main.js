$(document).ready(function() {
  "use strict";
  var Event = {
    search: function() {
      var date = new Date();
      var defer = $.Deferred();
      $.ajax({
        url: "http://api.doorkeeper.jp/groups/ginzarb/events",
          data: {since: date.toISOString()},
          dataType: 'jsonp',
          success: defer.resolve,
          error: defer.reject
      });
      return defer.promise();
    },
    format: function(event) {
      var dateStr = $.format.date(event.starts_at, "yyyy/MM/dd");
      var text = "<h3>次回は <strong>" + dateStr + "</strong> 開催予定です。<br>お題は「" + event.title +
        "」です。<br>申し込みは<a href=" + event.public_url + ">こちら</a>から。</h3><br>"
      return text;
    }
  };

  Event.search().done(function(events) {
    if (events.length !=0) {
      console.log(events)
      $('.next-event').html(Event.format(events[0].event));
    }
  });
});
