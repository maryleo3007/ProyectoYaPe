'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div></div>');

  if (state.screen == "") {
    wrapper.append(yapeInicio(_ =>render(root)));
    root.append(wrapper);
  }
  if(state.screen == "screen2"){
    wrapper.append(screenValidarNumero(_ =>render(root)));
    root.append(wrapper);
  }
}
const state = {
  screen: ""
}

$(_ => {
  const root = $("#root");
  render(root);
})
