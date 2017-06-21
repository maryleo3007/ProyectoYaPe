'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div></div>');

  if (state.screen == "") {
    wrapper.append(RegistoTarjeta(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == ""){
    wrapper.append(screenValidarNumero(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == ""){
    wrapper.append(IngresarCodigo(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == ""){
    wrapper.append(CreaUsuarioYape(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == ""){
    wrapper.append(CreaUsuarioOk(_ =>render(root)));
    root.append(wrapper);}
  // }else if(state.screen == "screen6"){
  //   wrapper.append(RegistoTarjeta(_ =>render(root)));
  //   root.append(wrapper);
  // }

}
const state = {
  screen: "",
}

$(_ => {
  const root = $("#root");
  render(root);
})
