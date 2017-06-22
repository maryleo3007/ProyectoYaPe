'use strict';
const RegistoTarjeta = (update) =>{
    const container = $('<div class="container"></div>');
    const row = $('<div class="row containerValidar"></div>');
    const col = $('<div class="col-md-12 col-sm-12"></div>');

    const image = $('<img src="img/icons/bcp-logo.png" class="img-responsive imgValidarPhone" alt="">');
    const p = $('<h3 class="text-center"><strong>Registra tu tarjeta de débito BCP<strong><br><small class="smallValidar">Por ahora solo aceptamos cuentas de ahorro y/o soles</small></h3>');

    const form  = $('<form  id="searchForm"></form>');
    const formGroupInput = $('<div class="form-group formGroupInput"></div>');
    const labelInput = $('<label for="inputPhone" id="labelInputPhone"></label>');
    const input = $('<input type="text" id="inputPhone">');
    const span = $('<p class="errorCard errorInputValidator"></p>');
    const labelSmall = $('<label for="inputPhone" id="labelSmall"></label>');
    const small = $('<p class="scanearTarjeta">Escanear tarjeta<p>');

    const formGroupDate = $('<div class="form-date"></div>');
    const labelDate = $('<label for="inputDate" id="labelInputDate">Fecha de Vencimiento</label>');
    const inputMonth = $('<input type="text" id="inputMonth"><strong>/</strong>');
    const inputYeaar = $('<input type="text" id="inputYeaar">');
    const spandate= $('<br><span class="errordate errorInputValidator"></span>');

    const formGroupButton = $('<div class="form-group"></div>');
    const divButton = $('<div class="offset-sm-2 col-sm-10"></div>');
    const button = $('<button type="submit" id="btnRegistrarTarjeta" class="btn btnValidarPhone">CREAR CUENTA</button>');

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
    formGroupInput.append(labelSmall);
    formGroupInput.append(small);
    col.append(formGroupDate);
    formGroupDate.append(labelDate);
    formGroupDate.append(inputMonth);
    formGroupDate.append(inputYeaar);
    formGroupDate.append(spandate);

    col.append(formGroupButton);
    formGroupButton.append(divButton);
    divButton.append(button);

    inputMonth.attr('disabled','disabled');
    inputYeaar.attr('disabled','disabled');
    button.attr('disabled','disabled');

    input.keyup(function(){
          const inputCard = $.trim(input.val())
          if(inputCard.length > 0){
            $('.errorCard').html('<span></span>');
             inputMonth.removeAttr('disabled');
          }else {
            $('.errorCard').html('<span>Ingresa el número de tarjeta</span>');
          }
    });

    inputMonth.keyup(function(){
          const inputUserMonth = $.trim(inputMonth.val())
          console.log(inputUserMonth);
          if(inputUserMonth.length > 0 || !/^([0-9])*$/.test(inputUserMonth) || inputUserMonth<13){
            $('.errordate').html('<span></span>');
             inputYeaar.removeAttr('disabled');
          }else {
            $('.errordate').html('<span>Ingresa el mes 1-12</span>');
          }
    });

    inputYeaar.keyup(function(){
          const inputUserYear = $.trim(inputYeaar.val())
          if(inputUserYear.length > 0 || !/^([0-9])*$/.test(inputUserYear)){
            $('.errordate').html('<span></span>');
            $("#btnRegistrarTarjeta").removeAttr('disabled');
            $('#btnRegistrarTarjeta').addClass('btnValidarPhoneEnabled');
          }else {
            $('.errordate').html('<span>Ingresa los 2 digitos finales del año</span>');
          }
    });



    button.click(function( event ) {
        event.preventDefault();
         const cardNumber = input.val();
         const month = inputMonth.val();
         const year = inputYeaar.val();

         if (!/^([0-9])*$/.test(cardNumber) || cardNumber.length > 16 || cardNumber.length < 16){
            $('.errorCard').html('<span>La tarjeta es un número de 16 dígitos<span>');
         }else {
           $.post( '/api/registerCard',
          {
            phone:state.phoneNumber,
            cardNumber:cardNumber,
            cardMonth:month,
            cardYear:year,
            cardPassword: state.password
          },
         (response)=>{
           if (response.success == true) {
             state.cardNumber = response.data.cardNumber;
             state.month = response.data.cardMonth;
             state.year = response.data.cardYear;
             console.log(response);
             state.screen = "screen7";
             update();
           }else{
             $('.errorInputValidator').html(response.message);
           }
        } ,"json");
          }
      });

    return container;

}
