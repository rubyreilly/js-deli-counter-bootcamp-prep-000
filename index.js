var katzDeliLine= [];

function takeANumber(katzDeliLine){
  katzDeliLine.push(katzDeliLine.length+1);
  return (`You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return ('There is nobody waiting to be served!');
  }
  else{
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return ('The line is currently empty.');
  }
  else{
    var current= [];
    for (var i=0;i<katzDeliLine.length;i++){
      current.push(`${katzDeliLine[i]}`);
    }
    return(`The line is currently:${current}`);
  }
}