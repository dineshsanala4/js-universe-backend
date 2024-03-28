const debounce = (fn, delay = 500) => {
  let timerContext;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timerContext);

    timerContext = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export default debounce;
