// questProjects is being added by an external script.
// The three fields we care about - name, teamName, and scope - are all strings

// Here's a little demo going through each project
for (var i = 0; i < questProjects.length; i++) {
  var project = questProjects[i];
  document.write(project.name);
  document.write('<br />');
  document.write(project.teamName);
  document.write('<br />');
  document.write(project.scope);
  document.write('<hr />');
}

var card = document.getElementById("table");

for (var i = 0; i < questProjects.length; i++) {
 
  if (i % 3 == 0) {
    var row = document.createElement("tr");
  }
  
  var td = document.createElement("td");
  td.style.border = "dashed #0000FF";
  td.style.padding = "15px";
  
  var pName = document.createElement("h3");
  var pTeam = document.createElement("h6");
  var pScope = document.createElement("p");
  
  pName.innerHTML = questProjects[i].name;
  pTeam.innerHTML = questProjects[i].teamName;
  pScope.innerHTML = questProjects[i].scope;
  
  td.appendChild(pName);
  td.appendChild(pTeam);
  td.appendChild(pScope);
  
  row.appendChild(td);
  
  if (i % 3 == 0) {
    card.appendChild(row);
  }
  
}
