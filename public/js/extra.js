
       $.get('http://127.0.0.1:8000/all_data',  // url
       function (data, ) {  
           var html = '';

                   
   jQuery.each(data, function (row) {

       html += '<tr>'
       html += '<td>' + data[row].id + '</td>'
       html += '<td>' + data[row].name + '</td>'
       html += '<td>' + data[row].adress + '</td>'
   
       html += '<td>'

       html += '<button type="button" testid=' + data[row].id + ' id="testedit" class="btn btn-success"> <i class="fa fa-edit" aria-hidden="false"> </i></button>'
html += ' <button type="button" id="testdelete" testid=' + data[row].id + '  class="btn btn-danger" > <i class="fa fa-trash" aria-hidden="false"> </i></button>'


       html += '</td> </tr>'; ``
       $("#mytable").html(html);

     
     });


     });











 $('#btn2').click(function(){


  $.get('my',  // url
  function (data, ) {  
      $('#name').val(data[0]);
    $('#adress').val(data[1]);
});



});

  $('#btn1').click(function () {
    
      var name = $('#name').val();
      var adress = $('#adress').val();
      
  });


  //  http://127.0.0.1:800/my
  // $('#btn2').click(function () {
  //   $.get('', function(data){
  //       alert(data);
  // //    $('#name').val(data[0]);
  // //    $('#adress').val(data[1]);
    
  //   });

      
  // });














$(document).ready(function(){
  $("button").click(function(){
    $.get("demo_test.asp", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});





$.ajax({
    url: '/add_test',
    type: 'post',
    data: $('#submit_form').serialize(),
    success:function(data){
        console.log(data);
       
    }
    

    $('#form_button').click(function(){

        $.ajax({
            url: 'add_test',
            type: 'POST',
            data: $('#submit_form').serialize(),
            success:function(data){
                console.log(data);
            } 
        })
        
      
        
        });
    
    


    $('#show_data').click(function(){
        $.get("http://127.0.0.1:8000/data"), function (data, status) {
          

            var html = '';
          
        
    jQuery.each(data, function (row) {

        html += '<tr>'
        html += '<td>' + data[row].id + '</td>'
        html += '<td>' + data[row].first_name + '</td>'
        html += '<td>' + data[row].last_name + '</td>'
        html += '<td>' + data[row].email + '</td>'
        html += '<td>' + data[row].phone + '</td>'
        html += '<td>'

        html += '</td> </tr>'; ``
        $("#mytable").html(html);

      
      });
      
      
          });
    
    });
   

});




$(document).ready(function(){

    $("#show_data").click(function(){
      $.get("http://127.0.0.1:8000/data", function(data, status){
        var html = '';
            
          
            jQuery.each(data, function (row) {
        
                html += '<tr>'
                html += '<td>' + data[row].id + '</td>'
                html += '<td>' + data[row].first_name + '</td>'
                html += '<td>' + data[row].last_name + '</td>'
                html += '<td>' + data[row].email + '</td>'
                html += '<td>' + data[row].phone + '</td>'
                html += '<td>'
        
                html += '</td> </tr>'; ``
                $("#mytable").html(html);
        
              
              });
      });
    });
  });