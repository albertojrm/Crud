// This is a JavaScript file
$(document).on("click","#btnEnviar",function(){
var parametros={
  "nome":$("#txtNome").val(),
  "cpf":$("#txtCPF").val()
};
$.ajax({
  type:"post", 
  url:"https://crudmobile-albertojrm.c9users.io/Cadastro.php?com=123",
  data: parametros,
  success:function(data){
    $("#txtNome").val("");
    $("#txtCPF").val("");
    navigator.notification.alert(data);
  },error:function(data){
    navigator.notification.alert("erro "+data);
  } 
});
});
