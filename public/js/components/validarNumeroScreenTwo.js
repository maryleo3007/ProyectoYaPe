const screenValidarNumero = (update) => {
  const container = $('<div class="container"></div>');
  const row = $('<div class="row containerValidar"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');

  const image = $('<img src="img/icons/phone.png" class="img-responsive imgValidarPhone" alt="">');
  const p = $('<h2 class="text-center"><strong>Para comenzar validemos tu número<strong><br><small class="smallValidar">Recibirás un SMS con un código de validación.</small></h2>');

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

  input.NumberOnly();
  $('.btnValidarPhone').attr('disabled','disabled');
      checkbox.change(function(){
          if($(this).checked !== false){
              $('.btnValidarPhone').removeAttr('disabled');
              $('.btnValidarPhone').addClass('btnValidarPhoneEnabled');
          }
      });

      button.click(function( event ) {
          event.preventDefault();
           const phone = input.val();
           const terms = true;
           if (phone.length < 9 || phone.length>9){
              $('.errorInputValidator').html('<span>El teléfono es un número de 9 dígitos<span>');
           }else {
               $.post( '/api/registerNumber', {phone:phone,terms:terms},
                (response)=>{
                  if (response.success == true) {
                    state.phoneNumber = response.data.phone;
                    state.code = response.data.code;
                    alert(response.data.code);
                    state.screen = "screen3";
                    update();
                  }else{
                    $('.errorInputValidator').html(response.message);
                  }
               } ,"json");
           }
        });
  return container
}
//code plugin validate number
jQuery.fn.NumberOnly = function() {
    return this.each(function() {
        $(this).keydown(function(e) {
            const key = e.charCode || e.keyCode || 0;
            return (
                key == 8 || key == 9 ||
                key == 13 || key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};
