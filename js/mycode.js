var apiBaseUrl = "http://127.0.0.1:10010";

function getTasks() {
    $("textarea#tasks").val("Refrershing task list...");
    $.ajax({
        type: 'GET',
        url: apiBaseUrl + "/tasks",
    }).done(function(data) { // data is the body of returned JSON object
        var output = "";
        for (var i = 0; i < data.length; i++) {
            output += data[i].task_id + " " + data[i].task_description + " " + data[i].status + "\n";
        }
        $("textarea#tasks").val(output);
    });
}