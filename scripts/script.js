let list = $('#list');

//reorder list
list.sortable();

//listen to list and add strike through list items that are clicked
list.on('dblclick', (e)=>{
    $(e.target).toggleClass('strike');
});

//when crossoutbutton is pushed it should remove an item from the list
list.on('click', (e)=>{
    let eventTarget = $(e.target)
    let parent =   eventTarget.parent();
    parent.remove();
});

//add button to list item
function addButton(){
    let li = $('<li></li>');
    console.log(li);
    let crossOut = '<crossOutButton>X</crossOutButton>';
    li.append(crossOut);
}


function addLi(){
    let input = $('input');
    if(input.val() === ''){
        alert('You must input something');
    } else {
        let li = '<li>' +  input.val() + '</li>';
        list.append(li);
        addButton();
    }
}

//add new list item
// function addLi(){
//     if(input.val() === ''){
//         alert('You must input something');
//     } else {
//         let newElement = '<li>' +  input.val() + '<crossoutbutton> X </crossoutbutton></li>';
//         list.append(newElement);
//         console.log(crossout);
//     }
// }

$('#button').on('click',  addLi);