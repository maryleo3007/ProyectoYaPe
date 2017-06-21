'use strict';
const MostrarMovimiento = (update) => {

  const container = $('<div id = "containerMovimiento" class="container-fluid"></div>');
  const row = $('<div class="row rowMovimiento"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');
  const image = $('<img src="img/icons/happy-face.png" class="img-responsive imgMovimiento" alt="">');
  const p = $('<h3 class="text-center">Hola<br><small>Mostrar Saldo</small></h3>');

  const message = $('<p class="">Últimos movimientos<p>');
  const labelInput = $('<label for="inputCodigo" id="labelInputCodigo"></label>');
  const hr = $('<hr>');

  const row2 = $('<div class="row rowMovimientoPago"></div>');
  const col2 = $('<div class="col-md-12 col-sm-12"></div>');
  const image2 = $('<img src="img/icons/code-qr.png" class="img-responsive imgMovimientoPago" alt="">');
  const p2 = $('<h2 class="text-center"><strong><br><small class="smallValidar">RECIBIR PAGO<strong></strong> </small></h2>');

  container.append(row);
  row.append(col);
  col.append(image);
  col.append(p);
  container.append(row2);
  row2.append(col2);
  col2.append(image2);
  col2.append(p2);

  return container;
}
