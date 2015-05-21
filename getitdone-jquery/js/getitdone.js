$(document).ready(function() {	// waits for whole page to load
    $('#taskForm').submit(
        function() {
            var task = $('#taskEntry').val();  // store the user submitted value

            if (task != '') {  //only perform if user entered input

                // func to run when tasks are completed
                var taskDone = function () {
                    $('#done ul').append(this.parentNode.parentNode);
                        /* this will refer to the obj on which .click is called,
                           a glyphicon span element whose parent node li contains
                           the entire newTask obj */
                    $('.glyphicon-ok', '#done').remove();  //remove any elements with class glyphicon-ok
                    $(infoDiv).append(repeatIcon.click(taskRepeat));
                };

                // func that puts the task back on the #list
                var taskRepeat = function () {
                    $('#list ul').append(this.parentNode.parentNode);
                    $('.glyphicon-repeat', '#list').remove();
                    $(infoDiv).append(doneIcon.click(taskDone));
                };

                // func that removes tasks
                var taskDelete = function () {
                    $(this.parentNode.parentNode).remove();
                };

                //glyphicon HTML and .click callback funcs
                var deleteIcon = $('<div class="col-sm-3 glyphicon glyphicon-trash"></div>').click(taskDelete);
                var doneIcon = $('<div class="col-sm-3 glyphicon glyphicon-ok"></div>').click(taskDone);
                var repeatIcon = $('<div class="col-sm-3 glyphicon glyphicon-repeat"></div>').click(taskRepeat);

                var currDate = new Date($.now());  //get current date

                //determine AM or PM, store as strings
                var amPm;
                if (currDate.getHours() >= 12) amPm = " p.m.";
                else amPm = " a.m.";

                //if single digit minutes, display w/ 0 in front of the single digit
                if (currDate.getMinutes() < 10) var minutes = "0" + currDate.getMinutes();
                else minutes = currDate.getMinutes();

                //mod getHours() by 12 - if noon, display as "12:00", not "0:00"
                var hours = currDate.getHours();
                if (hours == 12) hours = "12";
                else hours = currDate.getHours() % 12;

                //format current time and date, wrap as jQuery obj
                var time = $('<div class="col-sm-3 time">' + hours + ':' + minutes + amPm + '</div>');
                var date = $('<div class="col-sm-3 date">' + currDate.getMonth() + '/'
                    + currDate.getDate() + '/' + currDate.getFullYear() + '</div>');

                //build up new task HTML w/ icons appended
                var newTask = $('<li class="row"></li>');
                var taskDiv = $('<div class="col-lg-6 taskInfo">' + task + '</div>');
                var infoDiv = $('<div class="col-lg-6 infoDiv"></div>');
                infoDiv.append(time, date, deleteIcon, doneIcon);
                newTask.append(taskDiv, infoDiv);

                $('#list ul').append(newTask);  //add newTask
            }

            $('#taskEntry').val('');
            //don't return to server
            return false;
    })
})
