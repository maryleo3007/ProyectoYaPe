'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div></div>');

  if (state.screen == "") {
    wrapper.append(yapeInicio(_ =>render(root)));
    root.append(wrapper);
  }else if(state.screen == "screen2"){
    wrapper.append(screenValidarNumero());
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
