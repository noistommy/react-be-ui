import le, { useState as A, useRef as se, useEffect as K, useMemo as X, Children as ae, isValidElement as oe } from "react";
var z = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee;
function ce() {
  if (ee) return G;
  ee = 1;
  var c = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function a(r, s, t) {
    var d = null;
    if (t !== void 0 && (d = "" + t), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      t = {};
      for (var i in s)
        i !== "key" && (t[i] = s[i]);
    } else t = s;
    return s = t.ref, {
      $$typeof: c,
      type: r,
      key: d,
      ref: s !== void 0 ? s : null,
      props: t
    };
  }
  return G.Fragment = o, G.jsx = a, G.jsxs = a, G;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function ie() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === F ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case g:
          return "Profiler";
        case j:
          return "StrictMode";
        case O:
          return "Suspense";
        case N:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case k:
            return "Portal";
          case S:
            return (e.displayName || "Context") + ".Provider";
          case C:
            return (e._context.displayName || "Context") + ".Consumer";
          case y:
            var l = e.render;
            return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case R:
            return l = e.displayName || null, l !== null ? l : c(e.type) || "Memo";
          case T:
            l = e._payload, e = e._init;
            try {
              return c(e(l));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function a(e) {
      try {
        o(e);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var x = l.error, $ = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return x.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), o(e);
      }
    }
    function r(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var l = c(e);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = Y.A;
      return e === null ? null : e.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (V.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function i(e, l) {
      function x() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: x,
        configurable: !0
      });
    }
    function u() {
      var e = c(this.type);
      return M[e] || (M[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function f(e, l, x, $, I, _, H, Z) {
      return x = _.ref, e = {
        $$typeof: v,
        type: e,
        key: l,
        props: _,
        _owner: I
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function m(e, l, x, $, I, _, H, Z) {
      var E = l.children;
      if (E !== void 0)
        if ($)
          if (q(E)) {
            for ($ = 0; $ < E.length; $++)
              h(E[$]);
            Object.freeze && Object.freeze(E);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(E);
      if (V.call(l, "key")) {
        E = c(e);
        var U = Object.keys(l).filter(function(re) {
          return re !== "key";
        });
        $ = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", w[E + $] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          E,
          U,
          E
        ), w[E + $] = !0);
      }
      if (E = null, x !== void 0 && (a(x), E = "" + x), d(l) && (a(l.key), E = "" + l.key), "key" in l) {
        x = {};
        for (var Q in l)
          Q !== "key" && (x[Q] = l[Q]);
      } else x = l;
      return E && i(
        x,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), f(
        e,
        E,
        _,
        I,
        s(),
        x,
        H,
        Z
      );
    }
    function h(e) {
      typeof e == "object" && e !== null && e.$$typeof === v && e._store && (e._store.validated = 1);
    }
    var p = le, v = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), S = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), Y = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, q = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var B, M = {}, L = p["react-stack-bottom-frame"].bind(
      p,
      t
    )(), W = D(r(t)), w = {};
    J.Fragment = b, J.jsx = function(e, l, x, $, I) {
      var _ = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return m(
        e,
        l,
        x,
        !1,
        $,
        I,
        _ ? Error("react-stack-top-frame") : L,
        _ ? D(r(e)) : W
      );
    }, J.jsxs = function(e, l, x, $, I) {
      var _ = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return m(
        e,
        l,
        x,
        !0,
        $,
        I,
        _ ? Error("react-stack-top-frame") : L,
        _ ? D(r(e)) : W
      );
    };
  }()), J;
}
var te;
function ue() {
  return te || (te = 1, process.env.NODE_ENV === "production" ? z.exports = ce() : z.exports = ie()), z.exports;
}
var n = ue();
const de = ({
  children: c,
  onClick: o = () => {
  },
  ...a
}) => {
  const {
    selected: r,
    contentText: s,
    brand: t,
    state: d,
    color: i,
    text: u,
    border: f,
    disabled: m,
    fluid: h,
    circle: p,
    compact: v,
    outline: k,
    icon: b,
    withIcon: j,
    iconPos: g = "left",
    badge: C,
    badgeOption: S = "primary"
  } = a, y = [
    t,
    d,
    i,
    r && "selected",
    u && "text",
    f && "border",
    m && "disabled",
    h && "fluid",
    p && "circle",
    v && "compact",
    k && "outline",
    b && "icon",
    C && "badge"
  ].filter((N) => !!N).join(" "), O = (N) => {
    m || o(N);
  };
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      className: `be-button ${y}`,
      onClick: O,
      children: c || /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        j && (g === "left" || g === "both") && /* @__PURE__ */ n.jsx("i", { className: `icon left ${j}` }),
        b && !j && /* @__PURE__ */ n.jsx("i", { className: `icon ${b}` }),
        s && /* @__PURE__ */ n.jsx("span", { className: "button-text", children: s }),
        j && (g === "right" || g === "both") && /* @__PURE__ */ n.jsx("i", { className: `icon right ${j}` }),
        C && /* @__PURE__ */ n.jsx("div", { className: `in-badge ${S}`, children: C })
      ] })
    }
  );
}, pe = ({
  children: c,
  buttons: o = null,
  border: a = !1,
  outline: r = !1,
  selectIndex: s = 0
}) => {
  const [t, d] = A(s), i = (u) => {
    console.log(u);
    const f = o.findIndex((m) => m.contentText === u.target.textContent);
    d(f);
  };
  return /* @__PURE__ */ n.jsx("div", { className: `be-buttons ${a ? "border" : ""} ${r ? "outline" : ""}`, children: c || /* @__PURE__ */ n.jsx(n.Fragment, { children: o.map((u, f) => /* @__PURE__ */ n.jsx(
    de,
    {
      props: u,
      selected: t === f,
      onClick: i,
      children: u.contentText
    }
  )) }) });
}, be = ({
  children: c,
  value: o = "",
  onChange: a = () => {
  },
  onFocus: r = () => {
  },
  onButtonClick: s = () => {
  },
  ...t
}) => {
  const {
    type: d = "input",
    inputType: i = "text",
    align: u = "left",
    status: f,
    placeholder: m = "입력하세요",
    readonly: h = !1,
    underline: p = !1,
    transparent: v = !1,
    compact: k = !1,
    fluid: b = !1,
    iconLeft: j = null,
    iconRight: g = null,
    clear: C = !1,
    badge: S = null,
    badgeOption: y = {},
    disabled: O = !1,
    unit: N = null,
    labeled: R = null,
    button: T = null
  } = t, [P, F] = A(o), [Y, V] = A(!1), q = se(null);
  K(() => {
    F(o);
  }, [o]);
  const D = X(() => j && (g || C) ? "both" : j ? "left" : g || C ? "right" : null, [j, g, C]), B = (l) => {
    const x = l.target.value;
    F(x), a(x);
  }, M = () => {
    Y || (V(!0), r(!0));
  }, L = () => {
    V(!1), r(!1);
  }, W = (l) => {
    l.stopPropagation(), F(""), a("");
  }, w = () => {
    s(P);
  }, e = [
    f,
    h && "readonly",
    p && "underline",
    v && "transparent",
    k && "compact",
    b && "fluid",
    (j || g || C) && "icon",
    D,
    S && "badge",
    N && "unit",
    O && "disabled",
    R && "labeled",
    (R == null ? void 0 : R.pos) || "right",
    T && "button",
    (T == null ? void 0 : T.pos) || "right"
  ].filter((l) => !!l).join(" ");
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `be-input ${e}`,
      "data-unit": N,
      children: [
        j && /* @__PURE__ */ n.jsx("i", { className: `icon ${j}` }),
        d === "input" ? /* @__PURE__ */ n.jsx(
          "input",
          {
            type: i,
            value: P,
            onChange: B,
            placeholder: m,
            className: `align-${u}`,
            ref: q,
            onClick: M,
            onBlur: L,
            readOnly: h,
            disabled: O
          }
        ) : /* @__PURE__ */ n.jsx(
          "textarea",
          {
            value: P,
            onChange: B,
            rows: 3,
            placeholder: m,
            onBlur: L,
            readOnly: h,
            disabled: O
          }
        ),
        C ? /* @__PURE__ */ n.jsx(
          "i",
          {
            className: `icon clear-btn xi-close ${P === "" ? "disabled" : ""}`,
            onClick: W
          }
        ) : g && !C ? /* @__PURE__ */ n.jsx("i", { className: `icon ${g}` }) : S ? /* @__PURE__ */ n.jsx("span", { className: `be-badge ${y || ""}`, children: S }) : null,
        R ? c || /* @__PURE__ */ n.jsx("div", { className: `label ${R.option}`, children: c || R.contents }) : T ? c || /* @__PURE__ */ n.jsx("button", { className: `be-button ${T.option}`, onClick: w, children: T.contents }) : null
      ]
    }
  );
}, xe = ({
  children: c,
  value: o = 0,
  onChange: a = () => {
  },
  onFocus: r = () => {
  },
  ...s
}) => {
  const {
    status: t = null,
    placeholder: d = "0",
    readonly: i = !1,
    underline: u = !1,
    transparent: f = !1,
    compact: m = !1,
    fluid: h = !1,
    iconLeft: p = null,
    iconRight: v = null,
    step: k = 1,
    controller: b = "between",
    min: j = null,
    max: g = null,
    incIcon: C = "xi-plus",
    decIcon: S = "xi-minus",
    disabled: y = !1,
    width: O = 150
  } = s, [N, R] = A(o), [T, P] = A(!1), F = se(null);
  K(() => {
    j && o < j && R(j), g && o > g && R(g);
  }, [o, j, g]);
  const Y = X(() => p && conRight ? "both" : p ? "left" : v ? "right" : "", [p, v]), V = (w) => {
    const e = w.target.value;
    R(parseInt(e)), a(parseInt(e));
  }, q = () => {
    T || (P(!0), r(!0));
  }, D = () => {
    P(!1), r(!1);
  }, B = () => {
    g && N + k > g || (R(N + k), a(N + k));
  }, M = () => {
    j && N - k > j || (R(N - k), a(N - k));
  }, L = (w) => {
    y || (w.keyCode === 38 && B(), w.keyCode === 40 && M());
  }, W = [
    t,
    i && "readonly",
    u && "underline",
    f && "transparent",
    m && "compact",
    h && "fluid",
    (p || v) && "icon",
    Y,
    y && "disabled",
    b
  ].filter((w) => !!w).join(" ");
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `be-input button number ${W}`,
      tabIndex: "-1",
      style: { width: `${O}px` },
      onKeyDown: L,
      children: [
        c,
        p && /* @__PURE__ */ n.jsx("i", { className: `icon ${p}` }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "number",
            value: N,
            onChange: V,
            placeholder: d,
            ref: F,
            onClick: q,
            onBlur: D,
            readOnly: i,
            disabled: y
          }
        ),
        v && /* @__PURE__ */ n.jsx("i", { className: `icon ${v}` }),
        /* @__PURE__ */ n.jsx("button", { className: `be-button compact icon dec ${y}`, onClick: M, children: /* @__PURE__ */ n.jsx("i", { className: `icon ${S}` }) }),
        /* @__PURE__ */ n.jsx("button", { className: `be-button compact icon inc ${y}`, onClick: B, children: /* @__PURE__ */ n.jsx("i", { className: `icon ${C}` }) })
      ]
    }
  );
}, je = ({ children: c, ...o }) => {
  const {
    divide: a = null,
    md: r = null,
    sm: s = null,
    xs: t = null,
    justify: d = null,
    align: i = null,
    leftSide: u = null,
    rightSide: f = null
  } = o, m = [
    a && `divide-${a}`,
    a && r && `divide-md-${r}`,
    a && s && `divide-sm-${s}`,
    a && t && `divide-xs-${t}`,
    d && `justify-${d}`,
    i && `align-${i}`,
    u && "left-side",
    f && "right-side"
  ].filter((h) => !!h).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: `be-grid ${m}`, children: c });
}, ge = ({
  children: c,
  span: o,
  spanName: a,
  offset: r,
  order: s,
  md: t,
  sm: d,
  xs: i,
  offset_md: u,
  offset_sm: f,
  offset_xs: m
}) => {
  const h = [
    o && `span-${o}`,
    a,
    r && `offset-${r}`,
    s && `order-${s}`,
    t && `span-md-${t}`,
    d && `span-sm-${d}`,
    i && `span-xs-${i}`,
    u && `offset-md-${u}`,
    f && `offset-sm-${f}`,
    m && `offset-xs-${m}`
  ].filter((p) => !!p).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: `column ${h}`, children: c });
}, ve = ({ children: c, ...o }) => {
  const {
    contents: a = "",
    brand: r = null,
    state: s = null,
    color: t = null,
    mark: d = !1,
    shadow: i = !0,
    align: u = "center",
    icon: f = null
  } = o, m = [
    r,
    s,
    t,
    d && "mark",
    i && "shadow",
    u && `align-${u}`,
    f && "icon"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: `be-badge ${m}`, children: c || /* @__PURE__ */ n.jsx(n.Fragment, { children: f ? /* @__PURE__ */ n.jsx("i", { className: `icon ${f}` }) : a }) });
}, ke = ({
  children: c,
  onChange: o,
  ...a
}) => {
  const {
    labelText: r = "",
    type: s = "checkbox",
    name: t = "checkbox",
    indeter: d = !1,
    checked: i = !1
  } = a, [u, f] = A(i), m = [
    s,
    d && "indeter"
  ].filter((p) => !!p).join(" "), h = (p) => {
    const v = p.target.checked;
    f(v), o == null || o(v);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: `be-checkbox ${m} ${u ? "checked" : ""}`, children: [
    /* @__PURE__ */ n.jsx("label", { htmlFor: t, children: c || r }),
    /* @__PURE__ */ n.jsx(
      "input",
      {
        name: t,
        id: t,
        type: "checkbox",
        onChange: h,
        checked: u
      }
    )
  ] });
}, fe = {
  success: "xi-check-circle",
  info: "xi-info",
  error: "xi-emoticon-devil",
  attention: "xi-warning",
  importance: "xi-star"
}, Ne = ({
  children: c,
  onClick: o = () => {
  },
  ...a
}) => {
  const {
    title: r = "",
    contents: s = "",
    icon: t = !1,
    state: d = null,
    selected: i = !1,
    disabled: u = !1
  } = a, f = [
    t && "icon",
    d,
    i && "selected",
    u && u
  ].filter((p) => !!p).join(" "), m = X(() => d ? fe[d] : t, [d, t]), h = (p) => {
    o(p);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: `be-message ${f}`, onClick: h, children: [
    t && /* @__PURE__ */ n.jsx("i", { className: `icon ${m}` }),
    c || /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("div", { className: "title", children: r }),
      s && /* @__PURE__ */ n.jsx("div", { className: "contents", children: s })
    ] })
  ] });
}, $e = ({
  children: c,
  onClick: o = () => {
  },
  ...a
}) => {
  const {
    title: r = "",
    contents: s = "",
    border: t = !1,
    toggleIcon: d = null,
    iconPos: i = "left",
    open: u = !1,
    collapse: f = !1,
    maxHeight: m = 200
  } = a, [h, p] = A(u), v = [
    t && "border",
    f && "collapse",
    d && "icon"
  ].filter((b) => !!b).join(" "), k = () => {
    const b = !h;
    p(b), o(b);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: `be-panel ${v} ${h && "open"}`, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "panel-header", onClick: k, children: [
      /* @__PURE__ */ n.jsx("div", { className: "title", children: r }),
      f && d && /* @__PURE__ */ n.jsx("i", { className: `icon ${d}` })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "panel-content", style: { "--max-height": `${m}px` }, children: /* @__PURE__ */ n.jsx("div", { className: "content-wrapper", children: s }) })
  ] });
}, Ee = ({
  children: c,
  onChange: o = () => {
  },
  ...a
}) => {
  const {
    type: r = "slide",
    inside: s = !1,
    round: t = !1,
    onText: d = "ON",
    offText: i = "OFF",
    color: u = null,
    checked: f = !1,
    disabled: m = !1
  } = a, [h, p] = A(f), v = [
    r,
    s && "inside",
    t && "round",
    u,
    m && "disabled"
  ].filter((b) => !!b).join(" "), k = () => {
    const b = !h;
    p(b), o(b);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: `be-switch ${v}`, onClick: k, children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        type: "checkbox",
        onChange: k,
        checked: h
      }
    ),
    r === "slide" ? /* @__PURE__ */ n.jsx("div", { className: "switch" }) : /* @__PURE__ */ n.jsx(n.Fragment, { children: c || /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("span", { className: `on ${h && "active"}`, children: d }),
      /* @__PURE__ */ n.jsx("span", { className: `off ${!h && "active"}`, children: i })
    ] }) })
  ] });
}, Re = ({
  children: c,
  onSelectColumn: o,
  ...a
}) => {
  const {
    columns: r = [],
    values: s = [],
    headAlign: t = "center",
    useFoot: d = !1,
    border: i = !1,
    gridType: u = null,
    divideNum: f = 3,
    selection: m = !1,
    striped: h = null
  } = a, p = X(() => u === "divide" ? `divide-${f}` : u, [u, f]), v = [
    i && "border",
    m && "selection",
    h && `striped ${h}`,
    p
  ].filter((b) => !!b).join(" "), k = (b) => {
    console.log(b);
  };
  return /* @__PURE__ */ n.jsx("table", { className: `be-table ${v}`, children: c || /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("thead", { className: `align-${t}`, children: /* @__PURE__ */ n.jsx("tr", { children: r.map((b) => /* @__PURE__ */ n.jsx("th", { className: `align-${t}`, children: b.name }, b.key)) }) }),
    /* @__PURE__ */ n.jsx("tbody", { children: s.map((b, j) => /* @__PURE__ */ n.jsx("tr", { className: "", onClick: () => k(j), children: r.map((g) => /* @__PURE__ */ n.jsx("td", { className: `align-${g.align || "center"} col-${g.col}`, children: /* @__PURE__ */ n.jsx("div", { className: "cell", children: b[g.key] }) }, `cell-${j}-${g.key}`)) }, `row-${j}`)) })
  ] }) });
}, Ce = ({
  children: c,
  onClick: o = () => {
  },
  ...a
}) => {
  const {
    type: r = "label",
    // line, dot
    color: s = null,
    light: t = !1,
    round: d = !1,
    icon: i = null,
    iconPos: u = null,
    // 'right'
    pointDirect: f = "up",
    disabled: m = !1
  } = a, h = [
    r,
    s,
    t && "light",
    d && "round",
    i && "icon",
    r === "pointing" && f,
    m && "disabled"
  ].filter(Boolean).join(" "), p = (v) => {
    m || o(v);
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `be-tag ${h}`,
      onClick: p,
      children: [
        i && u === "left" && /* @__PURE__ */ n.jsx("i", { className: `icon left ${i}` }),
        (r === "label" || r === "pointing") && c,
        i && u === "right" && /* @__PURE__ */ n.jsx("i", { className: `icon right ${i}` })
      ]
    }
  );
}, Te = ({ children: c }) => /* @__PURE__ */ n.jsx(n.Fragment, { children: c }), me = (c, o) => {
  const a = {};
  return ae.forEach(c, (r) => {
    if (oe(r)) {
      const s = r.props.name;
      s && o.includes(s) && (a[s] = r.props.children);
    }
  }), a;
}, ye = ({
  children: c,
  type: o = "push",
  direct: a = "left",
  sideWidth: r = 250,
  minSideWidth: s = 0,
  isShow: t = !0,
  duration: d = 500
}) => {
  const i = me(c, ["side", "main"]), [u, f] = A(t);
  K(() => {
    f(t);
  }, [t]);
  const m = [
    o,
    a
  ].filter((h) => !!h).join(" ");
  return /* @__PURE__ */ n.jsxs("div", { className: `slide-side-layout ${m} ${u ? "show" : "hide"}`, style: { "--dur": d }, children: [
    /* @__PURE__ */ n.jsx("div", { className: "side-pane", style: { "--side": r, "--min-side": s }, children: i.side || "Side" }),
    /* @__PURE__ */ n.jsx("div", { className: "main-pane", children: i.main || "Main" })
  ] });
};
export {
  ve as BeBadge,
  de as BeButton,
  pe as BeButtonGroup,
  ke as BeCheckbox,
  je as BeGrid,
  be as BeInput,
  xe as BeInputNumber,
  Ne as BeMessage,
  $e as BePanel,
  Ee as BeSwitch,
  Re as BeTable,
  Ce as BeTag,
  ge as Column,
  ye as SlideSideLayout,
  Te as Slot,
  me as createSlots
};
//# sourceMappingURL=be-ui.es.js.map
