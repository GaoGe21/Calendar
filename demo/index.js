 var date = new Date();
 var nowYear = date.getFullYear();
 var nowMonth = date.getMonth();
 var nowDate = date.getDate();

 var elements = document.getElementsByTagName("Calendar");
 for (var i in elements) {
     if (elements[i].nodeType === 1) {
         elements[i].innerHTML = this.generateCalendarHtml(getCalendarData(nowYear, nowMonth), nowMonth, nowDate, nowYear);
     }
 }

 function getCalendarData(nowYear, nowMonth) {
     var myDay = new Date(nowYear, nowMonth, 1).getDay();
     var data = [];
     var currentPosition = -myDay; // 假如1号周三，前边三个坑-3
     while (new Date(nowYear, nowMonth, currentPosition + 1).getMonth() <= nowMonth) {
         var week = [];
         for (var i = 0; i < 7; i++) {
             week.push(new Date(nowYear, nowMonth, currentPosition + 1).getDate());
             currentPosition += 1;
         }
         data.push(week);
     }
     return data;
 }

 function generateCalendarHtml(data, nowMonth, nowDate, nowYear) {
     var currentMonth = nowMonth + 1;
     var result = `<div class="calendar">
                        <div class="head">
                            <div class="current">` +
                                currentMonth + ` / ` + nowDate + ` / ` + nowYear +
                            `</div>
                            <button class="left"><<</button>
                            <button class="right">>></button>
                            <hr/>
                        </div>
                        <table class="table">
                            <tr class="thead">
                                <td>SUN</td>
                                <td>MON</td>
                                <td>TUE</td>
                                <td>WEN</td>
                                <td>THU</td>
                                <td>FRI</td>
                                <td>SAT</td>
                            </tr>`;
     for (var i in data) {
         var tr = `<tr class="tbody">`;
         for (var j in data[i]) {
             tr += `<td>` + data[i][j] + `</td>`;
         }
         tr += `</tr>`;
         result += tr;
     }
     result += `</table></div>`;
     return result;
 }