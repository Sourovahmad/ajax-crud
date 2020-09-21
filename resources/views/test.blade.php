@extends('layout.app')
@section('content')
<div class="container">

  <h4></h4>
  <div class="row">
   
   <div class="col-4">
     <h4> Add section</h4>
    <form method="post" action="" id="submit_form">
      @csrf

      <div class="form-group">
        <label for="exampleInputEmail1">name </label>
        <input type="text" class="form-control" name="name" id="name2" aria-describedby="emailHelp" placeholder="Enter name">

      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">adress</label>
        <input type="text" class="form-control" name="adress" id="adress2" placeholder="adress">
      </div>

      <button type="button" id="btn1" class="btn btn-primary btn-sm">Submit</button>
    </form>
    </div>

    <div class="col-4">
  

<div id='editTable' style='display:none'>

  <form class="text-center border border-light " action="" method="POST" id="editSection">
    @csrf
    <p class="h4 mb-4">Edit Section</p>
    <input type="text" id="id" name="id" class="form-control mb-4" placeholder="ID" readonly>
    <input type="text" id="name" name="name" class="form-control mb-4" placeholder="Name">
    <input type="text" id="adress" name="adress" class="form-control mb-4" placeholder="Phone">
    <button class="btn btn-info btn-block my-4" type="button" id="btn4">Submit</button>
  </form>
</div>
</div>

  </div>


  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">adress</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody id="mytable">
      <tr>
        <th></th>
        <td></td>
        <td></td>
        <td></td>
      </tr>

    </tbody>
  </table>


</div>




@endsection