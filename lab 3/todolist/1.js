function add(){
    var element = document.getElementById('add.text');
    var text = element.value;
    if (text != ""){
      var item = document.createElement("li");
      item.innerHTML = '<input type="button" value="&#x2713" onclick="tick(this.parentNode)" id="tick" class="class1"/> ' + '<input type="button" value="&#x2715" onclick="delte(this.parentNode)" class="todo" id="delete"/>' + '<input type="button" value="!" onclick="priori(this.parentNode)" class="prio" id="prr"/>' + text;
      var x = document.getElementById('tasks');
      x.appendChild(item);
    }
    element.value = "";
  }

  function delte(item){
    if (item.className == 'done'){
      item.remove();
    }
  }

  function tick(item){
    item.className = 'done';
  }
  
  function priori(item){
    if (item.className == 'p'){
      item.className = 'prio';
    }
    else{
      item.className = 'p';
    }
  }