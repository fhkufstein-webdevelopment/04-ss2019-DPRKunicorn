$(document).ready(function() {

    var userListBody = $('.userList tbody');


    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values

        //2. create a new element

        //3. somehow add them to userListBody

        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)
        //your code follows here

        var userCt=$(userListBody).find("tr").length,
            username=$(this).find("input#username").first().val();
        var tr='<tr><td>'+(userCt+1)+'</td><td>'+username+'</td><td><button type="button" class="btn btn-secondary btn-danger deleteTrigger" title="Löschen"><i class="fa fa-trash"></i></button></td></tr>';
            userListBody.append(tr);
        return false;
    });


    $(userListBody).on('click', '.deleteTrigger', function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here

        $(this).parent().parent().first().remove();

        userListBody.find('tr').each(function (userCt)
         {
        $(this).find('td:first-child').text(++userCt);
    });
    });

    //maybe some code follows here

});
