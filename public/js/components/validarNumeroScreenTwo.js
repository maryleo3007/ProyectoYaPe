const screenValidarNumero = (update) => {
  const container = $('<div class="container"></div>');
  const row = $('<div class="row containerValidar"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');

  const image = $('<img src="img/icons/phone.png" class="img-responsive imgValidarPhone" alt="">');
  const p = $('<h2 class="text-center"><strong>Para comenzar validemos tu número<strong><br><small class="smallValidar">Recibirás un SMS con un código de validación.</small></h2>');

  const form  = $('<form role="form"></form>');
  const formGroupInput = $('<div class="form-group formGroupInput"></div>');
  const labelInput = $('<label for="inputPhone" id="labelInputPhone"></label>');
  const input = $('<input type="text" id="inputPhone">');

  const formGroupCheck = $('<div class="form-check"></div>');
  const labelCheck = $('<label class="form-check-label"></label>');
  const checkbox = $('<input class="form-check-input" type="checkbox" value="">Acepto los <a class="terminos"> Terminos y condiciones</a>');

  const formGroupButton = $('<div class="form-group"></div>');
  const divButton = $('<div class="offset-sm-2 col-sm-10"></div>');
  const button = $('<button type="submit" class="btn btnValidarPhone">CONTINUAR</button>');

  container.append(row);
  row.append(col);
  col.append(image);
  col.append(p);
  col.append(form);
  form.append(formGroupInput);
  formGroupInput.append(labelInput);
  formGroupInput.append(input);
  form.append(formGroupCheck);
  formGroupCheck.append(labelCheck);
  labelCheck.append(checkbox);
  form.append(formGroupButton);
  formGroupButton.append(divButton);
  divButton.append(button);

  $( _ => {
    $('.btnValidarPhone').attr('disabled','disabled');
    $('input[type="checkbox"]').change(function(){
        if($(this).cheked == true){
            $('input[type="submit"]').removeAttr('disabled');
            $('input[type="submit"]').addClass('btnValidarPhoneEnabled');
        }
    });
  });

  return container
}
