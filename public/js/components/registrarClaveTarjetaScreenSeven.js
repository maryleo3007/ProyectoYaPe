'use strict';
const RegistrarClave = (update) => {

  const containerCod = $('<div id = "containerCod" class="container"></div>');
  const row = $('<div class="row containerValidar"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');

  const image = $('<img src="img/icons/bcp-logo.png" class="img-responsive imgValidarPhone" alt="">');
  const p = $('<h2 class="text-center"><strong>Ingresa la clave de tu tarjeta<strong><br><small class="smallValidar">Tarjeta *****<strong>'+(state.cardNumber).slice(-4)+'</strong> </small></h2>');

  const form  = $('<form  id="searchForm"></form>');
  const formGroupInput = $('<div class="form-group formGroupInput"></div>');
  const labelInput = $('<label for="inputCodigo" id="labelInputCodigo"></label>');
  const input = $('<input type="password" id="inputCodigo" placeholder=" * * * *">');
  const message = $('<p class="errorInputValidator"><p>');

  const formGroupButton = $('<div class="form-group"></div>');
  const divButton = $('<div class="offset-sm-2 col-sm-10"></div>');
  const button = $('<button type="submit" class="btn btnValidarPhone">CREAR CUENTA</button>');

  containerCod.append(row);
  row.append(col);
  col.append(image);
  col.append(p);
  col.append(formGroupInput);
  formGroupInput.append(labelInput);
  formGroupInput.append(input);
  formGroupInput.append(message);
  col.append(formGroupButton);
  formGroupButton.append(divButton);
  divButton.append(button);



  return containerCod;
}
