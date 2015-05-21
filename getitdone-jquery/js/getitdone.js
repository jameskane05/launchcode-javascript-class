$(document).ready(function() {	// waits for whole page to load
    $('#taskForm').submit(
        function() {
            var task = $('#taskEntry').val();  // store the submitted value

            if (task != '') {
                // func to run when tasks are completed
                var taskDone = function () {
                    $('#done ul').append(this.parentNode);
                    $('.glyphicon-ok', '#done').remove();
                    $(newTask).append(repeatIcon.click(taskRepeat));
                };

                // func that puts the task back on the #list
                var taskRepeat = function () {
                    $('#list ul').append(this.parentNode);
                    $('.glyphicon-repeat', '#list').remove();
                    $(newTask).append(doneIcon.click(taskDone));
                };

                // func that removes tasks
                var taskDelete = function () {
                    $(this.parentNode).remove();
                };

                //glyphicon HTML and .click callback funcs
                var deleteIcon = $('<span class="glyphicon glyphicon-trash"></span>').click(taskDelete);
                var doneIcon = $('<span class="glyphicon glyphicon-ok"></span>').click(taskDone);
                var repeatIcon = $('<span class="glyphicon glyphicon-repeat"></span>').click(taskRepeat);

                var currDate = new Date($.now());  //get current date

                //determine AM or PM, store as strings
                var amPm;
                if (currDate.getHours() >= 12) amPm = " p.m.";
                else amPm = " a.m.";

                //if single digit minutes, display w/ 0 in front of the single digit
                if (currDate.getMinutes() < 10) var minutes = "0" + currDate.getMinutes();
                else minutes = currDate.getMinutes();

                //format current time, wrap as jQuery obj
                var timeEntered = $('<span class="time">' + (currDate.getHours() % 12) + ':' + minutes + amPm + '</span>');

                //format current date, wrap as jQuery obj
                var dateEntered = $('<span class="date">' + currDate.getMonth() + '/'
                    + currDate.getDate() + '/' + currDate.getFullYear() + '</span>');

                //new task HTML w/ icons appended
                var newTask = $('<li class="task">' + task + '</li>')
                    .append(timeEntered, dateEntered, deleteIcon, doneIcon);

                $('#list ul').append(newTask);  // add newTask
            }

            //don't return to server
            return false;
    })
})
