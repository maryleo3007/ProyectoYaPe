const IngresarCodigo = (update) => {
  const container = $('<div class="container"></div>');
  const row = $('<div class="row containerValidar"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');

  const image = $('<img src="img/icons/message.png" class="img-responsive imgValidarPhone" alt="">');
  const p = $('<h2 class="text-center"><strong>Ahora Ingresa tu código<strong><br><small class="smallValidar">Enviamos.</small></h2>');

  const form  = $('<form  id="searchForm"></form>');
  const formGroupInput = $('<div class="form-group formGroupInput"></div>');
  const labelInput = $('<label for="inputPhone" id="labelInputPhone"></label>');
  const input = $('<input type="text" id="inputPhone">');
  const span = $('<br><span class="errorInputValidator"></span>');

  const formGroupCheck = $('<div class="form-check"></div>');
  const labelCheck = $('<label class="form-check-label"></label>');
  const checkbox = $('<input id="inputchecked" class="form-check-input" type="checkbox" value="termValue">Acepto los <a class="terminos"> Terminos y condiciones</a>');

  const formGroupButton = $('<div class="form-group"></div>');
  const divButton = $('<div class="offset-sm-2 col-sm-10"></div>');
  const button = $('<button type="submit" class="btn btnValidarPhone">CONTINUAR</button>');

  container.append(row);
  row.append(col);
  col.append(image);
  col.append(p);
  //col.append(form);
  //form.append(formGroupInput);
  col.append(formGroupInput);
  formGroupInput.append(labelInput);
  formGroupInput.append(input);
  formGroupInput.append(span);
  col.append(formGroupCheck);
  formGroupCheck.append(labelCheck);
  labelCheck.append(checkbox);
  col.append(formGroupButton);
  formGroupButton.append(divButton);
  divButton.append(button);

  // $( _ => {

  // });

  return container
}
