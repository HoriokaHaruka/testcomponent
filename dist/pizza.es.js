import { resolveComponent as l, openBlock as o, createBlock as u, withCtx as d, renderSlot as i, createElementBlock as a, createElementVNode as c } from "vue";
const r = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [s, _] of n)
    e[s] = _;
  return e;
}, f = {};
function p(t, n) {
  const e = l("v-btn");
  return o(), u(e, null, {
    default: d(() => [
      i(t.$slots, "default")
    ]),
    _: 3
  });
}
const m = /* @__PURE__ */ r(f, [["render", p]]), v = {}, h = /* @__PURE__ */ c("div", null, "インプット", -1), x = /* @__PURE__ */ c("input", null, null, -1), B = [
  h,
  x
];
function k(t, n) {
  return o(), a("div", null, B);
}
const C = /* @__PURE__ */ r(v, [["render", k]]), b = {
  install(t, n = {}) {
    t.component("CButton", m), t.component("CInput", C);
  }
};
export {
  b as default
};
