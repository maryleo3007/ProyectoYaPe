'use strict';
const IngresarCodigo = (update) => {

  const containerCod = $('<div id = "containerCod" class="container"></div>');
  const row = $('<div class="row containerValidar"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');

  const image = $('<img src="img/icons/message.png" class="img-responsive imgValidarPhone" alt="">');
  const p = $('<h2 class="text-center"><strong>Ahora Ingresa tu código<strong><br><small class="smallValidar">Enviamos un SMS con el código de validación al numero <strong>'+state.phoneNumber+'</strong> </small></h2>');

  const form  = $('<form  id="searchForm"></form>');
  const formGroupInput = $('<div class="form-group formGroupInput"></div>');
  const labelInput = $('<label for="inputCodigo" id="labelInputCodigo"></label>');
  const input = $('<input type="text" id="inputCodigo">');
  const message = $('<p class="errorInputValidator"><p>');
  const small = $('<p class="pReintentar">Reintentar en</p>');
  const label= $('<label id="labelReloj"></label>');
  const span = $('<span id="segundos"></span>');

  containerCod.append(row);
  row.append(col);
  col.append(image);
  col.append(p);
  col.append(formGroupInput);
  formGroupInput.append(labelInput);
  formGroupInput.append(input);
  formGroupInput.append(message);
  col.append(small);
  col.append(label);
  col.append(span);

<<<<<<< HEAD
  input.NumberOnly();
  let count = 21;
    const timer = setInterval(_ => {
        count -= 1;
        if (count == 0) {count = 21;}
        $('#segundos').text(count);
    }, 1000);
    const resend = () => {
    $.post('./api/resendCode', {
        phone: state.phoneNumber
    }, (response) => {
        if (response.succes != false) {
            state.code = response.data;
            $('.errorInputValidator').html('El nuevo código generado es: '+state.code);
            console.log(state.code);
        }
    },"json");
    }

    const generateNewCode= setInterval(_ => {
        resend();
    }, 21000);

    input.on('keyup',(e) => {
      const valor = (e.target).value;
      if(valor == state.code){
        clearInterval(generateNewCode);
        state.screen = "screen4";
        update();
      }
    });

  return containerCod;
}
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
