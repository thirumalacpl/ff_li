document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert('ready thiru changes');
  var db = window.sqlitePlugin.openDatabase({name: "my.db"});
show();
  db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS mydata (id integer primary key, name text, email text, eventa text)');
  });

$(document).on('click', '#creat', function(){
    var name =  $("#name").val();
    var email =  $("#email").val();
    var eventa =  $("#eventa").val();
    db.transaction(function(transaction) {
    var executeQuery = "INSERT INTO mydata (name, email, eventa) VALUES (?,?,?)";
    transaction.executeSql(executeQuery, [name,email,eventa]
    , function(tx, result) {
       show();
    },
    function(error){
        //filter(function(aSome) {alert('Error occurred');
    });
    });
});


function show(){
db.transaction(function(transaction) {
transaction.executeSql('SELECT * FROM mydata', [], function (tx, results) { 
var key = "";
       var pair="<tr><th data-priority=\"1\"><center>Id</center></th><th data-priority=\"1\"><center>Name</center></th><th data-priority=\"2\"><center>Email</center></th><th data-priority=\"3\"><center>Event</center></th><th><center>Update</center></th><th><center>Delete</center></th></tr>";
       var i=0;
       var len = results.rows.length, i;
       for (i=0; i<=len-1; i++) {
         key = results.rows.item(i).name;
         eventa = results.rows.item(i).eventa;
         id = results.rows.item(i).id;
         pair += "<tr><td><center>"+id+"</center></td><td><center>"+key+"</center></td><td><center>"+results.rows.item(i).email+"</center></td><td><center>"+eventa+"</center></td><td><a class=\"update\" href=\"#myPopupDialog\"  data-custom="+"'"+ id+ "'" +"data-rel=\"popup\" data-position-to=\"window\" data-transition=\"pop\"><center><i class='fa fa-pencil-square-o'></i></center></a></td><td><a  id=\"delete\" data=\""+id+"\"><center><i class='fa fa-trash'></i></center></a></td></tr>";
       alert(key+'keey for');
           alert(eventa+'eventa for');
               alert(id+'id for');
       }
       if (pair == "<tr><th>Name</th><th>Day</th><th>Event</th></tr>") {
         pair += "<tr><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td></tr>";
       }
$("#myTable").html(pair);
}, null);
});
}

/*$(document).on('click', '#syncc', function(){

       $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim-four/offline.php?id="+id+"&key="+key+"&emaill="+results.rows.item(i).email+"&eventa="+eventa,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
});*/

$(document).off('click', '#ssy').on('click', '#ssy', function() {
//alert(region+'refresh');

db.transaction(function(transaction) {
transaction.executeSql('SELECT * FROM mydata', [], function (tx, results) { 
var key = "";
       var pair="<tr><th data-priority=\"1\"><center>Id</center></th><th data-priority=\"1\"><center>Name</center></th><th data-priority=\"2\"><center>Email</center></th><th data-priority=\"3\"><center>Event</center></th><th><center>Update</center></th><th><center>Delete</center></th></tr>";
       var i=0;
       var len = results.rows.length, i;
       for (i=0; i<=len-1; i++) {
         key = results.rows.item(i).name;
         eventa = results.rows.item(i).eventa;
         id = results.rows.item(i).id;
         pair += "<tr><td><center>"+id+"</center></td><td><center>"+key+"</center></td><td><center>"+results.rows.item(i).email+"</center></td><td><center>"+eventa+"</center></td><td><a class=\"update\" href=\"#myPopupDialog\"  data-custom="+"'"+ id+ "'" +"data-rel=\"popup\" data-position-to=\"window\" data-transition=\"pop\"><center><i class='fa fa-pencil-square-o'></i></center></a></td><td><a  id=\"delete\" data=\""+id+"\"><center><i class='fa fa-trash'></i></center></a></td></tr>";
       alert(key+'keey for');
           alert(eventa+'eventa for');
               alert(id+'id for');
emaill='asd';
$.ajax({url: 'http://staging.eimpressive.com/slim-four/offline.php?id='+id+'&key='+key+'&emaill='+emaill+'&eventa='+eventa,
  data:$('#new').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
alert('sessionStorage return');
sessionStorage.setItem("collectionArray",JSON.stringify(result[0]));
// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

       }
      

}, null);
});


});

$(document).off('click', '#syncc').on('click', '#syncc', function() {
//alert(region+'refresh');
alert(key+'key');
alert(eventa+'eventa');
alert(id+'id');
var id=1;
var key='key';
var emaill='emaill';
var eventa='eventa';

$.ajax({url: 'http://staging.eimpressive.com/slim-four/offline.php?id='+id+'&key='+key+'&emaill='+emaill+'&eventa='+eventa,
  data:$('#new').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
alert('sessionStorage return');
sessionStorage.setItem("collectionArray",JSON.stringify(result[0]));
// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});

$(document).on('click', '#delete', function(){
var id = $(this).attr("data");
db.transaction(function(transaction) {
 transaction.executeSql("DELETE FROM mydata where id=?", [id],
  function(tx, result) {
    show();
  },
  function(error){
  //  alert('Something went Wrong');
  });
 });
});
$(document).on('click', '#upd', function(){
  var id = $("#id").val();
  var name =  $("#uname").val();
  var email =  $("#uemail").val();
   var eventa =  $("#ueventa").val();
   db.transaction(function(transaction) {
 var executeQuery = "";
 transaction.executeSql("UPDATE mydata SET name=?, email=?, eventa=? WHERE id=?", [name,email,eventa,id],
 function(tx, result) {alert('Updated successfully');
show();
},
 function(error){alert('Something went Wrong');});
 });
});
$(document).on('click', '.update', function(){
 var id =  $(this).attr('data-custom');
$("#id").val(id);
db.transaction(function(transaction) {
    transaction.executeSql('SELECT name,email,eventa FROM mydata where id=?', [id], function (tx, results) {
   var name = results.rows.item(0).name;
   var email = results.rows.item(0).email;
    var eventa = results.rows.item(0).eventa;
    $("#uname").val(name);
    $("#uemail").val(email);
     $("#ueventa").val(eventa);
  },
  function(error){
    alert('Something went Wrong');
  });
 });
});
$(document).on('click', '#clearall', function(){
  db.transaction(function(transaction) {
 transaction.executeSql("DELETE FROM mydata", [],
 function(tx, result) {alert('Delete successfully');
show();
},
 function(error){alert('Something went Wrong');});
 });
  });
}
