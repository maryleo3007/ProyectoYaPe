const CreaUsuarioYape = (update) => {
  const container = $('<div class="container"></div>');
  const row = $('<div class="row containerCrearUsuario"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');
  const imageOne = $('<img src="img/icons/lockone.png" class="img-responsive" alt="">');
  const p = $('<h2 class="text-center"><strong>Crea tu usuario Yape<strong><br><small class="smallValidar">Ingresa un nombre, email y clave de usuario.</small></h2>');

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
  col.append(carousel);
  carousel.append(contenidoOne);
  contenidoOne.append(imageOne);
  contenidoOne.append(h1ItemOne);
  contenidoOne.append(h4ItemOne);
  carousel.append(contenidoTwo);
  contenidoTwo.append(imageTwo);
  contenidoTwo.append(h1ItemTwo);
  contenidoTwo.append(h4ItemTwo);
  carousel.append(contenidoThree);
  contenidoThree.append(imageThree);
  contenidoThree.append(h1ItemThree);
  contenidoThree.append(h4ItemThree);
  col.append(button);


  return container
