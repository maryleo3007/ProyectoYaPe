'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div></div>');

  if (state.screen == "") {
    wrapper.append(yapeInicio(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == "screen2"){
    wrapper.append(screenValidarNumero(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == "screen3"){
    wrapper.append(IngresarCodigo(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == "screen4"){
    wrapper.append(CreaUsuarioYape(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == "screen5"){
    wrapper.append(CreaUsuarioOk(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == "screen6"){
    wrapper.append(RegistoTarjeta(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == "screen7"){
    wrapper.append(RegistrarClave(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == "screen8"){
    wrapper.append(MostrarMovimiento(_ =>render(root)));
    root.append(wrapper);
  }
}
const state = {
  screen: "",
  phoneNumber:null,
  code: null,
  name:null,
  email:null,
  password:null,
  cardNumber:null,
  month:null,
  year:null
}

$(_ => {
  const root = $("#root");
  render(root);
})
