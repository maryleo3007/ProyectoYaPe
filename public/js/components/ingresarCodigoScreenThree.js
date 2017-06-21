'use strict';
const IngresarCodigo = (update) => {

  const container = $('<div class="container"></div>');
  const row = $('<div class="row containerValidar"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');

  const image = $('<img src="img/icons/message.png" class="img-responsive imgValidarPhone" alt="">');
  const p = $('<h2 class="text-center"><strong>Ahora Ingresa tu código<strong><br><small class="smallValidar">Enviamos un SMS con el código de validación al numero <strong>'+state.phoneNumber+'</strong> </small></h2>');

  const form  = $('<form  id="searchForm"></form>');
  const formGroupInput = $('<div class="form-group formGroupInput"></div>');
  const labelInput = $('<label for="inputCodigo" id="labelInputCodigo"></label>');
  const input = $('<input type="text" id="inputCodigo">');
  const small = $('<small class="smallValidar">Reintentar en </small>');
  const span = $('<br><span id="errorInputValidator"></span>');

  container.append(row);
  row.append(col);
  col.append(image);
  col.append(p);
  col.append(formGroupInput);
  formGroupInput.append(labelInput);
  formGroupInput.append(input);
  formGroupInput.append(small);
  formGroupInput.append(span);

  input.on('keyup',(e) => {

    const valor = (e.target).value;
    if(valor == state.code){
      state.screen = "";
      update();
    }
  });

  return container
}
