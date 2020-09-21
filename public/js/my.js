
$.get('http://127.0.0.1:8000/all_data',  // url
    function (data,) {
        var html = '';


        jQuery.each(data, function (row) {

            html += '<tr>'
            html += '<td>' + data[row].id + '</td>'
            html += '<td>' + data[row].name + '</td>'
            html += '<td>' + data[row].adress + '</td>'

            html += '<td>'


            html += '<button type="button" testid=' + data[row].id + ' id="testedit" class="btn btn-success"> <i class="fa fa-edit" aria-hidden="false"> </i></button>'
            html += ' <button type="button" id="testdelete" testid=' + data[row].id + '  class="btn btn-danger" > <i class="fa fa-trash" aria-hidden="false"> </i></button>'

            html += '</td> </tr>';
            $("#mytable").html(html);


        });


    });

$('#btn1').click(function () {

    var data = $('#submit_form').serialize();
    var url = 'http://127.0.0.1:8000/store_data'


    $.ajax({

        type: 'post',
        data: data,
        url: url,
        success: function () {
            console.log("success");
           $('#name2').val('');
           $('#adress2').val('');
        },
        error: function () {
            console.log("not saved");
        },
    });

    $.get('http://127.0.0.1:8000/all_data',  // url
        function (data,) {
            var html = '';


            jQuery.each(data, function (row) {

                html += '<tr>'
                html += '<td>' + data[row].id + '</td>'
                html += '<td>' + data[row].name + '</td>'
                html += '<td>' + data[row].adress + '</td>'

                html += '<td>'

                html += '<button type="button" testid=' + data[row].id + ' id="testedit" class="btn btn-success btn-sm"> <i class="fa fa-edit" aria-hidden="false"> </i></button>'
                html += ' <button type="button" id="testdelete" testid=' + data[row].id + '  class="btn btn-danger btn-sm" > <i class="fa fa-trash" aria-hidden="false"> </i></button>'


                html += '</td> </tr>'; ``
                $("#mytable").html(html);


            });


        });
});


$("body").on("click", "#testdelete", function () {
    var testid = $(this).attr('testid');
    console.log('clicked on ' + testid)
    $.ajax({

        type: 'get',
        data: testid,
        url: 'http://127.0.0.1:8000/destroy/' + testid,
        success: function () {
            console.log("successfully deleted");
            location.reload();
        },
        error: function () {
            console.log("not deleted");
        },
    });



});

$("body").on("click", "#testedit", function () {

    $('#editTable').show();
    var testid = $(this).attr('testid');
    $tr = $(this).closest('tr')

    var data = $tr.children('td').map(function () {

        return $(this).text();

    });

    console.log(data);

    $('#id').val(data[0]);
    $('#name').val(data[1]);
    $('#adress').val(data[2]);


});


$('#btn4').click(function () {
    var id = $('#id').val();
    var data = $('#editSection').serialize();
   
    $.ajax({
         
      type : 'post',
      url : '/update/'+id,
      data: data,
      success: function () {
        console.log("successfully updated");
        location.reload();
        $('#editTable').hide(); 
    },
    error: function () {
        console.log("not updated");
    },


    });

});

