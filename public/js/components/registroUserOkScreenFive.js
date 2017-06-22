const CreaUsuarioOk = (update) => {
  const container = $('<div class="container-fluid containerOK"></div>');
  const row = $('<div class="row containerCrearUsuarioOk"></div>');
  const col = $('<div class="col-md-12 col-sm-12"></div>');
  const image = $('<img src="img/icons/check.png" class="img-responsive imgValidarUser" alt="">');
  const p = $('<h2 class="text-center">¡Bien!<br>Ahora puedes usar Yape</small></h2>');

  container.append(row);
  row.append(col);
  col.append(image);
  col.append(p);

  setTimeout(function() {
      state.screen = "screen6"
      update();
    },3000);

  return container;
}
