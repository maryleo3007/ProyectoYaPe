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
  }
}
const state = {
  screen: "",
  phoneNumber:null,
  code: null
}

$(_ => {
  const root = $("#root");
  render(root);
})
