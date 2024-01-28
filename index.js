const list = [];

function addTodo() {
    const input = document.querySelector('.nameInput');
    const name = input.value;


    var date = new Date();

    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();


    if(d <= 9){
        var dateString = `${y}-${m}-${"0"+d}`;
            }
        
    else if(m <= 9){
                var dateString = `${y}-${"0"+m}-${d}`;
            }
    else{
            var dateString = `${y}-${m}-${d}`;
        }

        
    const dateInput = document.getElementById('calendar');
    const dueDate = dateInput.value || `${dateString}`;


    if(name != ''){
            list.push({
                name ,
                dueDate
            });

            input.value = '';
            display();
    }
}


function display() {
    const taskList = document.getElementById('list');
    let item = taskList.innerHTML = '';

    list.forEach((task, index) => {
        
        const html = `<div class="all">
            <div id="listName">${task.name}</div>
            <div class="tasksDate">${task.dueDate}</div>
            <button id="deleteBtn" onclick="deleteTask(${index})">Remove</button>
        </div>`;
        
        item += html;
        document.getElementById('list').innerHTML = item;
    });
}


function deleteTask(index) {
    console.log(index);
    list.splice(index, 1);
    display();
}