var apiBaseUrl = "http://127.0.0.1:10010";

function refreshTaskList(data) {
    var output = "";
    for (var i = 0; i < data.length; i++) {
        output += data[i].task_id + " " + data[i].task_description + " " + data[i].status + "\n";
    }
    $("textarea#tasks").val(output);
}

function getTasks() {
    $("textarea#tasks").val("Refrershing task list...");
    $.ajax({
        type: 'GET',
        url: apiBaseUrl + "/tasks",
    }).done(function(data) { // data is the body of returned JSON object
        refreshTaskList(data);
    });
}

function createTask() {
    var taskID = $("input#task_id").val();
    var taskDescription = $("input#task_description").val();
    $.ajax({
        type: 'PUT',
        url: apiBaseUrl + "/tasks",
        contentType: 'application/json',
        data: JSON.stringify({'task_id': taskID, 'task_description': taskDescription})
    }).done(function(data) {
        refreshTaskList(data);
    })
}

function deleteTask() {
    var taskID = $("input#task_id").val();
    // var taskDescription = $("input#task_description").val();
    $.ajax({
        type: 'DELETE',
        url: apiBaseUrl + "/tasks",
        contentType: 'application/json',
        data: JSON.stringify({'task_id': taskID})
    }).done(function(data) {
        refreshTaskList(data);
    })
}

function startTask() {
    var taskID = $("input#task_id").val();
    $.ajax({
        type: 'PUT',
        url: apiBaseUrl + "/task/start",
        contentType: 'application/json',
        data: JSON.stringify({'task_id': taskID})
    }).done(function(data) {
        refreshTaskList(data);
    })
}

function closeTask() {
    var taskID = $("input#task_id").val();
    $.ajax({
        type: 'PUT',
        url: apiBaseUrl + "/task/close",
        contentType: 'application/json',
        data: JSON.stringify({'task_id': taskID})
    }).done(function(data) {
        refreshTaskList(data);
    })
}

function stopTask() {
    var taskID = $("input#task_id").val();
    $.ajax({
        type: 'PUT',
        url: apiBaseUrl + "/task/stop",
        contentType: 'application/json',
        data: JSON.stringify({'task_id': taskID})
    }).done(function(data) {
        refreshTaskList(data);
    })
}