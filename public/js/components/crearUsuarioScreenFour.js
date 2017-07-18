const CreaUsuarioYape = (update) => {
  const container = $('<div class="container"></div>');
  const row = $('<div class="row containerCrearUsuario"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');
  const image = $('<img src="img/icons/lockone.png" class="img-responsive imgValidarUser" alt="">');
  const p = $('<h2 class="text-center"><strong>Crea tu usuario Yape<strong><br><small class="smallValidar">Ingresa un nombre, email y clave de usuario.</small></h2>');

  const form  = $('<form  id="searchForm"></form>');
  const formGroupInputUser = $('<div class="form-group formGroupInputUser"></div>');
  const labelInputUser = $('<label for="inputUser" id="labelInputUser"></label>');
  const inputUser = $('<input type="text" id="inputUser">');
  const spanUser = $('<br><span class="errorInputValidator"></span>');

  const formGroupInputEmail = $('<div class="form-group formGroupInputUser"></div>');
  const labelInputEmail = $('<label for="inputPhone" id="labelInputEmail"></label>');
  const inputEmail = $('<input type="email" id="inputEmail">');
  const spanEmail = $('<br><span class="errorEmail errorInputValidator"></span>');

  const formGroupInputPass = $('<div class="form-group formGroupInputUser"></div>');
  const labelInputPass = $('<label for="inputPass" id="labelInputPass"></label>');
  const inputPass = $('<input type="password" id="inputPass">');
  const spanPass = $('<br><span class="errorPassword errorInputValidator"></span>');
  const small = $('<p class="pUser text-center"><small>Cuida esta clave como oro, es tu acceso a Yape.</small><p>');

  const formGroupButton = $('<div class="form-group"></div>');
  const divButton = $('<div class="col-sm-10 col-sm-offset-5"></div>');
  const button = $('<button type="submit" class="btn btnCrearCuenta">CREAR CUENTA</button>');


  container.append(row);
  row.append(col);
  col.append(image);
  col.append(p);
  col.append(formGroupInputUser);
  formGroupInputUser.append(labelInputUser);
  formGroupInputUser.append(inputUser);
  formGroupInputUser.append(spanUser);
  col.append(formGroupInputEmail);
  formGroupInputEmail.append(labelInputEmail);
  formGroupInputEmail.append(inputEmail);
  formGroupInputEmail.append(spanEmail);
  col.append(formGroupInputPass);
  formGroupInputPass.append(labelInputPass);
  formGroupInputPass.append(inputPass);
  formGroupInputPass.append(spanPass);
  formGroupInputPass.append(small);
  col.append(formGroupButton);
  formGroupButton.append(divButton);
  formGroupButton.append(button);

  button.click(function( event ) {
          event.preventDefault();
           const userValue = inputUser.val();
           const emailValue = inputEmail.val();
           const codeValue = inputPass.val();

           const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/ ;

           if (!expresion.test(emailValue)){
              $('.errorEmail').html('<span>Email inválido: Ingrese Ej: hola@hola.hi</span>');
           }else if (codeValue.length == 0 || codeValue =="password") {
             $('.errorEmail').html('<span> </span>');
             $('.errorPassword').html('<span>Password inválido</span>');
           }else{
             $.post( '/api/createUser',
               {
                 phone:state.phoneNumber,
                 name:userValue,
                 email:emailValue,
                 password:codeValue
               },
              (response)=>{
                if (response.success == true) {
                  state.name = response.data.name;
                  state.email = response.data.email;
                  state.password = response.data.password;
                  console.log(response);
                  state.screen = "screen5";
                  update();
                }else{
                  $('.errorInputValidator').html(response.message);
                }
             } ,"json");
           }
        });

  return container;
}
