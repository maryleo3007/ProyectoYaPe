'use strict';
const yapeInicio = (update) => {
  const container = $('<div class="container"></div>');
  const row = $('<div class="row containerInicio"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');
  const carousel = $('<div class="owl-carousel owl-theme"></div>');
  const contenidoOne = $('<div class="item"></div>');
  const imageOne = $('<img src="img/icons/icon-people.png" class="img-responsive" alt="">');
  const h1ItemOne = $('<h1 class="text-center">Paga a tus amigos</h1>');
  const h4ItemOne = $('<h4 class="text-center">Paga a quien quieras desde donde quieras,sin usar efectivo.</h4>');
  const contenidoTwo = $('<div class="item"></div>');
  const h1ItemTwo = $('<h1 class="text-center">Paga a tus amigos</h1>');
  const h4ItemTwo = $('<small class="text-center">Paga a quien quieras desde donde quieras,sin usar efectivo.</small>');
  const imageTwo = $('<img src="img/icons/icon.png" class="img-responsive" alt="">');
  const contenidoThree = $('<div class="item"></div>');
  const h1ItemThree = $('<h1 class="text-center">Paga a tus amigos</h1>');
  const h4ItemThree = $('<h4 class="text-center">Paga a quien quieras desde donde quieras,sin usar efectivo.</h4>');
  const imageThree = $('<img src="img/icons/group-people.png" class="img-responsive" alt="">');
  const button = $('<button id="btnInicio" type="button" class="btn btn-primary btn-lg">REGISTRARME</button>');

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

  button.on('click',_ => {
   state.screen = "screen2";
   update();
 });

  return container
}
