function changerecord(matchup, WLT, pID, opponent, oppWLT, opppID){
  var recordletter = document.getElementById(matchup);
  var opponentletter = document.getElementById(opponent);
  var recordW = document.getElementsByClassName(WLT)[0];
  var recordL = document.getElementsByClassName(WLT)[1];
  var recordT = document.getElementsByClassName(WLT)[2];
  var recordP = document.getElementById(pID);
  var oppW = document.getElementsByClassName(oppWLT)[0];
  var oppL = document.getElementsByClassName(oppWLT)[1];
  var oppT = document.getElementsByClassName(oppWLT)[2];
  var oppP = document.getElementById(opppID);
  var wins = parseInt(recordW.innerText);
  var losses = parseInt(recordL.innerText);
  var ties = parseInt(recordT.innerText);
  var oppwins = parseInt(oppW.innerText);
  var opplosses = parseInt(oppL.innerText);
  var oppties = parseInt(oppT.innerText);
  var points = 0;
  var opppoints = 0;
  if(recordletter.innerText == "W") {
    recordletter.innerText = "L";
    opponentletter.innerText = "W";
    losses+=1;
    wins-=1;
    oppwins+=1;
    opplosses-=1;
    recordletter.style.backgroundColor = '#E78587';
    opponentletter.style.backgroundColor = '#85E787';
  } else if(recordletter.innerText == "L"){
    recordletter.innerText = "T";
    opponentletter.innerText = "T";
    ties+=1;
    losses-=1;
    oppties+=1;
    oppwins-=1;
    recordletter.style.backgroundColor = '#B7B7B7';
    opponentletter.style.backgroundColor = '#B7B7B7';
  } else if(recordletter.innerText == "Change"){
    recordletter.innerText = "W";
    opponentletter.innerText = "L";
    wins+=1;
    opplosses+=1;
    recordletter.style.backgroundColor = '#85E787';
    opponentletter.style.backgroundColor = '#E78587';
  } else {
    recordletter.innerText = "W";
    opponentletter.innerText = "L";
    wins+=1;
    ties-=1;
    opplosses+=1;
    oppties-=1;
    recordletter.style.backgroundColor = '#85E787';
    opponentletter.style.backgroundColor = '#E78587';
  }
  recordW.innerText = wins;
  recordL.innerText = losses;
  recordT.innerText = ties;
  points = wins*3+ties;
  recordP.innerText = points;
  oppW.innerText = oppwins;
  oppL.innerText = opplosses;
  oppT.innerText = oppties;
  opppoints = oppwins*3+oppties;
  oppP.innerText = opppoints;
}


function sortTable(type, colIndex) {
  var table, rows, switching, i, x, y, shouldSwitch
  table = document.getElementById("soccerTable")
  switching = true;
  while(switching) {
    switching = false;
    rows = table.rows;
    for(i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[colIndex];
      y = rows[i + 1].getElementsByTagName("TD")[colIndex];
      if(type=="word" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      } else if (type=="num" && parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if(type=="word" && shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    } else {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
