let numberOfSites =  0 , current = 1 , center = 1;
var sites = {"1":2,"2":1,"3":3}

function setCenter(sites){
  if (sites  % 2 == 0) {
    return  sites / 2;
  }else{
    return (sites+1) / 2;
  }
}

function define(){

  $(".card").each(function(){
    numberOfSites ++;
  })

  current = setCenter(numberOfSites);
  center = current;

  setCards()
}

function setCards() {
  for (let i=1 ; i <= numberOfSites ; i++) {
    locate(i,center);
  }
}

function locate(index,center){
  if(sites[index] == center){
    active(index)
  }else if (sites[index] < center) {
    goLeft(index)
  }else{
    goRight(index)
  }
}

function active(item){
  $("#site_" + item).css({"width":"40%","left":"30%","margin-top":"2.5rem","z-index":"90","opacity":"1.0"})
}

function goRight(item) {
  $("#site_" + item).css({"width":"30%","left":"60%","margin-top":"4.5rem","z-index":"80","opacity":"0.7"})
}

function goLeft(item){
  $("#site_" + item).css({"width":"30%","left":"10%","margin-top":"4.5rem","z-index":"80","opacity":"0.7"})
}

function rightReorder() {
  for (let i=1 ; i <= numberOfSites ; i++) {
    if (sites[i] == 1) {
      sites[i] = 2
    }else if (sites[i] == 2) {
      sites[i] = 3
    }else {
      sites[i] = 1
    }
  }
  setCards()
}

function leftReorder() {
  for (let i=1 ; i <= numberOfSites ; i++) {
    if (sites[i] == 1) {
      sites[i] = 3
    }else if (sites[i] == 2) {
      sites[i] = 1
    }else {
      sites[i] = 2
    }
  }
  setCards()
}

function next(){current--;rightReorder()}

function prev(){current++;leftReorder()}


define()

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function copyToClipboard(element){
  var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
}

function toggleElem(element){
  if ($(element).css("opacity") == '1') {
    $(element).css({"opacity":"0","display":"block"})
  }else{$(element).css({"opacity":"1","display":"block"})}
}
