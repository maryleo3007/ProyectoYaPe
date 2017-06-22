'use strict';
const MostrarMovimiento = (update) => {

  const container = $('<div id = "containerMovimiento" class="container-fluid"></div>');
  const row = $('<div class="row rowMovimiento"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');
  const image = $('<img src="img/icons/happy-face.png" class="img-responsive imgMovimiento" alt="">');
  const p = $('<h3 class="text-center">Hola<br><label id="labelMostrarSaldo"></label><small>Mostrar Saldo</small></h3>');

  const row2 = $('<div class="row rowMovimientoPago"></div>');
  const col2 = $('<div class="col-md-12 col-sm-12"></div>');
  const message = $('<p class="lastMove">ÚLTIMOS MOVIMIENTOS</p>');
  const labelMovimientos= $('<label id="labelMovimientos"></label>');
  const hr = $('<hr>');
  const image2 = $('<img src="img/icons/code-qr.png" class="img-responsive imgMovimientoPago" alt="">');
  const p2 = $('<h3 class="pago"><small class="">RECIBIR PAGO</small></h3>');

  container.append(row);
  row.append(col);
  col.append(image);
  col.append(p);
  container.append(row2);
  row2.append(col2);
  col2.append(message);

  col2.append(labelMovimientos);
  col2.append(hr);
  col2.append(image2);
  col2.append(p2);

  return container;
}
