import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list-app';
  ngOnInit(){
    var listContainer:any=document.getElementById("list-container");
    listContainer.addEventListener("click",function(e:any){
      debugger
         if(e.target.tagName=="LI")
         e.target.classList.toggle("checked")
         else if(e.target.tagName=="SPAN")
         e.target.parentElement.remove();
    },false);
  }
  addBtn(){
    var listContainer:any=document.getElementById("list-container");
    var inputBox:any=document.getElementById("input-box");
    if(inputBox.value==''){
      alert("must enter something")
    }
    else{
      let li=document.createElement("li");
      li.innerHTML=inputBox.value;
      listContainer.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span)
    }
    inputBox.value='';
    
  }
 


}
