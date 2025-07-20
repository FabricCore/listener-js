prelude.eval("let {removeEventListener} = module.globals.listener");
prelude.eval(
    "function addEventListener(a, b, o = {}) { o.source = module.path[1]; module.globals.listener.addEventListener(a, b, o) }",
);
