var url = "https://projects.questumd.com/COVID-10-08-2020.json";
function display(url) {
  $.get(url,
    function (covidData) {
    $('#student-table tr').remove();
      // Make rows for each state
      var newTable = document.getElementById("student-table");
      covidData.sort(function (a, b){return b.confirmed - a.confirmed});
      for (var i = 0; i < covidData.length; i++) {
        var state = covidData[i];
        var row = document.createElement("tr");

        var td = document.createElement("td");
        var pState = document.createElement("p");
        pState.innerHTML = covidData[i].state;
        td.appendChild(pState);
        row.appendChild(td);

        td = document.createElement("td");
        var pConfirmed = document.createElement("p");
        pConfirmed.innerHTML = covidData[i].confirmed;
        td.appendChild(pConfirmed);
        row.appendChild(td);

        td = document.createElement("td");
        var pDeaths = document.createElement("p");
        pDeaths.innerHTML = covidData[i].deaths;
        td.appendChild(pDeaths);
        row.appendChild(td);

        td = document.createElement("td");
        var pPeopleTested = document.createElement("p");
        pPeopleTested.innerHTML = covidData[i].peopleTested;
        td.appendChild(pPeopleTested);
        row.appendChild(td);

        newTable.appendChild(row);
      }
      console.log(covidData);
    }
  );
}
