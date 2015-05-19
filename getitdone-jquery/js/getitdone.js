$(document).ready(function() {	// waits for whole page to load
    $('#taskForm').submit(
        function() {
            var task = $('#taskEntry').val();  // store the submitted value

            // func to run when tasks are completed as a .click callback
            var taskDone = function () {
                $('#done ul').append(this);
                $('.glyphicon-ok').remove();
                $('#done ul li').append(refreshIcon);
                $(this).css("text-decoration", "line-through");
            };

            // func that puts the task back on the #list
            var taskRepeat = function () {
                $('#list ul').append(this);
                $('.glyphicon-repeat').remove();
                $('#list ul li').append(doneIcon);
                $('#list ul li').css("text-decoration", "none");
            };

            //glyphicon HTML vars and click behaviors
            var deleteIcon = $('<span class="glyphicon glyphicon-trash"></span>');
            var doneIcon = $('<span class="glyphicon glyphicon-ok"></span>').click(taskDone());
            var refreshIcon = $('<span class="glyphicon glyphicon-repeat"></span>');

            //new task, icon HTML, plus click behaviors
            var newTask = $('<li class="task">' + task + '</li>').append(doneIcon).append(deleteIcon);

            $('#list ul').append(newTask);  // add newTask

            return false;
        })
})
