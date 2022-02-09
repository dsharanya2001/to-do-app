console.log("hey this is my first js");
shownotes();

addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    addTxt=document.getElementById('addTxt');
    console.log(addTxt);
    notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addTxt="";
    shownotes();
    console.log(notesObj);
}
)
function shownotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html +=` <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button href="#" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>`;
    });
    notesElement=document.getElementById("notes");
    if(notesObj.length!=0){
        notesElement.innerHTML=html;
    }
    else{
        notesElement.innerHTML=`nothing to show`;
    }
    
}
function deleteNote(index){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    shownotes();
}

let search=document.getElementById("searchText");
search.addEventListener("input",function(){
    let input=search.value.toLowerCase();
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let noteText=element.getElementsByTagName("p")[0].innerText;
        if(noteText.includes(input)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})