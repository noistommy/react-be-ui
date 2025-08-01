import * as P from "react";
import de, { useState as G, useRef as fe, useEffect as re, useMemo as ee, Children as qn, isValidElement as Un, useCallback as Fe, useLayoutEffect as rn } from "react";
import * as sn from "react-dom";
import _e from "react-dom";
function zn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ie = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function Hn() {
  if (jt) return Te;
  jt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var a in s)
        a !== "key" && (o[a] = s[a]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return Te.Fragment = t, Te.jsx = r, Te.jsxs = r, Te;
}
var Ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Gn() {
  return Ot || (Ot = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === z ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case b:
          return "Fragment";
        case E:
          return "Profiler";
        case g:
          return "StrictMode";
        case x:
          return "Suspense";
        case D:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case v:
            return "Portal";
          case C:
            return (d.displayName || "Context") + ".Provider";
          case R:
            return (d._context.displayName || "Context") + ".Consumer";
          case S:
            var y = d.render;
            return d = d.displayName, d || (d = y.displayName || y.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case O:
            return y = d.displayName || null, y !== null ? y : e(d.type) || "Memo";
          case I:
            y = d._payload, d = d._init;
            try {
              return e(d(y));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function r(d) {
      try {
        t(d);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var N = y.error, $ = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return N.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(d);
      }
    }
    function n(d) {
      if (d === b) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === I)
        return "<...>";
      try {
        var y = e(d);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var d = K.A;
      return d === null ? null : d.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(d) {
      if (Q.call(d, "key")) {
        var y = Object.getOwnPropertyDescriptor(d, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function a(d, y) {
      function N() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: N,
        configurable: !0
      });
    }
    function c() {
      var d = e(this.type);
      return M[d] || (M[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function l(d, y, N, $, T, w, A, L) {
      return N = w.ref, d = {
        $$typeof: m,
        type: d,
        key: y,
        props: w,
        _owner: T
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function u(d, y, N, $, T, w, A, L) {
      var _ = y.children;
      if (_ !== void 0)
        if ($)
          if (Z(_)) {
            for ($ = 0; $ < _.length; $++)
              p(_[$]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(_);
      if (Q.call(y, "key")) {
        _ = e(d);
        var Y = Object.keys(y).filter(function(ne) {
          return ne !== "key";
        });
        $ = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", U[_ + $] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          _,
          Y,
          _
        ), U[_ + $] = !0);
      }
      if (_ = null, N !== void 0 && (r(N), _ = "" + N), i(y) && (r(y.key), _ = "" + y.key), "key" in y) {
        N = {};
        for (var q in y)
          q !== "key" && (N[q] = y[q]);
      } else N = y;
      return _ && a(
        N,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), l(
        d,
        _,
        w,
        T,
        s(),
        N,
        A,
        L
      );
    }
    function p(d) {
      typeof d == "object" && d !== null && d.$$typeof === m && d._store && (d._store.validated = 1);
    }
    var h = de, m = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), C = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), K = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, Z = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(d) {
        return d();
      }
    };
    var B, M = {}, W = h["react-stack-bottom-frame"].bind(
      h,
      o
    )(), k = H(n(o)), U = {};
    Ne.Fragment = b, Ne.jsx = function(d, y, N, $, T) {
      var w = 1e4 > K.recentlyCreatedOwnerStacks++;
      return u(
        d,
        y,
        N,
        !1,
        $,
        T,
        w ? Error("react-stack-top-frame") : W,
        w ? H(n(d)) : k
      );
    }, Ne.jsxs = function(d, y, N, $, T) {
      var w = 1e4 > K.recentlyCreatedOwnerStacks++;
      return u(
        d,
        y,
        N,
        !0,
        $,
        T,
        w ? Error("react-stack-top-frame") : W,
        w ? H(n(d)) : k
      );
    };
  }()), Ne;
}
var $t;
function Xn() {
  return $t || ($t = 1, process.env.NODE_ENV === "production" ? Ie.exports = Hn() : Ie.exports = Gn()), Ie.exports;
}
var f = Xn();
const Jn = ({
  children: e,
  onClick: t = () => {
  },
  ...r
}) => {
  const {
    selected: n,
    contentText: s,
    brand: o,
    state: i,
    color: a,
    light: c = !1,
    text: l,
    border: u,
    disabled: p,
    fluid: h,
    round: m,
    size: v,
    compact: b,
    outline: g,
    icon: E,
    withIcon: R,
    iconPos: C = "left",
    badge: S,
    badgeOption: x = "primary"
  } = r, D = [
    o,
    i,
    v,
    a && (c ? `${a}-light` : a),
    n && "selected",
    l && "text",
    u && "border",
    p && "disabled",
    h && "fluid",
    m && "round",
    b && "compact",
    g && "outline",
    E && "icon",
    S && "badge"
  ].filter((I) => !!I).join(" "), O = (I) => {
    p || t(I);
  };
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      className: `be-button ${D}`,
      onClick: O,
      children: e || /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        R && (C === "left" || C === "both") && /* @__PURE__ */ f.jsx("i", { className: `icon left ${R}` }),
        E && !R && /* @__PURE__ */ f.jsx("i", { className: `icon ${E}` }),
        s && /* @__PURE__ */ f.jsx("span", { className: "button-text", children: s }),
        R && (C === "right" || C === "both") && /* @__PURE__ */ f.jsx("i", { className: `icon right ${R}` }),
        S && /* @__PURE__ */ f.jsx("div", { className: `in-badge ${x}`, children: S })
      ] })
    }
  );
}, co = ({
  children: e,
  buttons: t = null,
  border: r = !1,
  round: n = !1,
  selectIndex: s = 0
}) => {
  const [o, i] = G(s), a = (c) => {
    const l = t.findIndex((u) => u.contentText === c.target.textContent);
    i(l);
  };
  return /* @__PURE__ */ f.jsx("div", { className: `be-buttons ${r ? "border" : ""} ${n ? "round" : ""}`, children: e || /* @__PURE__ */ f.jsx(f.Fragment, { children: t.map((c, l) => /* @__PURE__ */ f.jsx(
    Jn,
    {
      props: c,
      selected: o === l,
      onClick: a,
      children: c.contentText
    },
    `btn-${l}`
  )) }) });
}, uo = ({
  children: e,
  value: t = "",
  onChange: r = () => {
  },
  onFocus: n = () => {
  },
  onButtonClick: s = () => {
  },
  ...o
}) => {
  const {
    type: i = "input",
    inputType: a = "text",
    align: c = "left",
    status: l,
    placeholder: u = "입력하세요",
    readonly: p = !1,
    underline: h = !1,
    transparent: m = !1,
    compact: v = !1,
    fluid: b = !1,
    iconLeft: g = null,
    iconRight: E = null,
    clear: R = !1,
    badge: C = null,
    badgeOption: S = {},
    disabled: x = !1,
    unit: D = null,
    labeled: O = null,
    button: I = null,
    short: V = !1
  } = o, [z, K] = G(t), [Q, Z] = G(!1), H = fe(null);
  re(() => {
    K(t);
  }, [t]);
  const B = ee(() => g && (E || R) ? "both" : g ? "left" : E || R ? "right" : null, [g, E, R]), M = (N) => {
    const $ = N.target.value;
    K($), r($);
  }, W = () => {
    Q || (Z(!0), n(!0));
  }, k = () => {
    Z(!1), n(!1);
  }, U = (N) => {
    N.stopPropagation(), K(""), r("");
  }, d = () => {
    s(z);
  }, y = [
    l,
    p && "readonly",
    h && "underline",
    m && "transparent",
    v && "compact",
    b && "fluid",
    (g || E || R) && "icon",
    B,
    C && "badge",
    D && "unit",
    x && "disabled",
    O && "labeled",
    O && (O.pos || "right"),
    I && "button",
    I && (I.pos || "right"),
    i === "textarea" && V ? "short" : ""
  ].filter((N) => !!N).join(" ");
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `be-input ${y}`,
      "data-unit": D,
      children: [
        g && /* @__PURE__ */ f.jsx("i", { className: `icon ${g}` }),
        i === "input" ? /* @__PURE__ */ f.jsx(
          "input",
          {
            type: a,
            value: z,
            onChange: M,
            placeholder: u,
            className: `align-${c}`,
            ref: H,
            onClick: W,
            onBlur: k,
            readOnly: p,
            disabled: x
          }
        ) : /* @__PURE__ */ f.jsx(
          "textarea",
          {
            value: z,
            onChange: M,
            rows: 3,
            placeholder: u,
            onBlur: k,
            readOnly: p,
            disabled: x
          }
        ),
        R ? /* @__PURE__ */ f.jsx(
          "i",
          {
            className: `icon clear-btn xi-close ${z === "" ? "disabled" : ""}`,
            onClick: U
          }
        ) : E && !R ? /* @__PURE__ */ f.jsx("i", { className: `icon ${E}` }) : C ? /* @__PURE__ */ f.jsx("span", { className: `be-badge ${S || ""}`, children: C }) : null,
        O ? e || /* @__PURE__ */ f.jsx("div", { className: `label ${O.option}`, children: e || O.contents }) : I ? e || /* @__PURE__ */ f.jsx("button", { className: `be-button ${I.option}`, onClick: d, children: I.contents }) : null
      ]
    }
  );
}, fo = ({
  children: e,
  value: t = 0,
  onChange: r = () => {
  },
  onFocus: n = () => {
  },
  ...s
}) => {
  const {
    status: o = null,
    placeholder: i = "0",
    readonly: a = !1,
    underline: c = !1,
    transparent: l = !1,
    compact: u = !1,
    fluid: p = !1,
    iconLeft: h = null,
    iconRight: m = null,
    step: v = 1,
    controller: b = "between",
    min: g = null,
    max: E = null,
    incIcon: R = "xi-plus",
    decIcon: C = "xi-minus",
    disabled: S = !1,
    width: x = null
  } = s, [D, O] = G(t), [I, V] = G(!1), z = fe(null);
  re(() => {
    g && t < g && O(g), E && t > E && O(E);
  }, [t, g, E]);
  const K = ee(() => h && conRight ? "both" : h ? "left" : m ? "right" : "", [h, m]), Q = (U) => {
    const d = U.target.value;
    O(parseInt(d)), r(parseInt(d));
  }, Z = () => {
    I || (V(!0), n(!0));
  }, H = () => {
    V(!1), n(!1);
  }, B = () => {
    E && D + v > E || (O(D + v), r(D + v));
  }, M = () => {
    g && D - v < g || (O(D - v), r(D - v));
  }, W = (U) => {
    S || (U.keyCode === 38 && B(), U.keyCode === 40 && M());
  }, k = [
    o,
    a && "readonly",
    c && "underline",
    l && "transparent",
    u && "compact",
    p && "fluid",
    (h || m) && "icon",
    K,
    S && "disabled",
    b
  ].filter((U) => !!U).join(" ");
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `be-input button number ${k}`,
      tabIndex: "-1",
      style: x ? { width: `${x}px` } : {},
      onKeyDown: W,
      children: [
        e,
        h && /* @__PURE__ */ f.jsx("i", { className: `icon ${h}` }),
        /* @__PURE__ */ f.jsx(
          "input",
          {
            type: "number",
            value: D,
            onChange: Q,
            placeholder: i,
            ref: z,
            onClick: Z,
            onBlur: H,
            readOnly: a,
            disabled: S
          }
        ),
        m && /* @__PURE__ */ f.jsx("i", { className: `icon ${m}` }),
        /* @__PURE__ */ f.jsx("button", { className: `be-button compact icon dec ${S ? "disabled" : ""}`, onClick: M, children: /* @__PURE__ */ f.jsx("i", { className: `icon ${C}` }) }),
        /* @__PURE__ */ f.jsx("button", { className: `be-button compact icon inc ${S ? "disabled" : ""}`, onClick: B, children: /* @__PURE__ */ f.jsx("i", { className: `icon ${R}` }) })
      ]
    }
  );
}, po = ({ children: e, ...t }) => {
  const {
    divide: r = null,
    md: n = null,
    sm: s = null,
    xs: o = null,
    justify: i = null,
    align: a = null,
    leftSide: c = null,
    rightSide: l = null
  } = t, u = [
    r && `divide-${r}`,
    r && n && `divide-md-${n}`,
    r && s && `divide-sm-${s}`,
    r && o && `divide-xs-${o}`,
    i && `justify-${i}`,
    a && `align-${a}`,
    c && "left-side",
    l && "right-side"
  ].filter((p) => !!p).join(" ");
  return /* @__PURE__ */ f.jsx("div", { className: `be-grid ${u}`, children: e });
}, mo = ({ children: e }) => /* @__PURE__ */ f.jsx("div", { className: "rows", children: e }), ho = ({
  children: e,
  span: t,
  spanName: r,
  offset: n,
  order: s,
  md: o,
  sm: i,
  xs: a,
  offset_md: c,
  offset_sm: l,
  offset_xs: u
}) => {
  const p = [
    t && `span-${t}`,
    r,
    n && `offset-${n}`,
    s && `order-${s}`,
    o && `span-md-${o}`,
    i && `span-sm-${i}`,
    a && `span-xs-${a}`,
    c && `offset-md-${c}`,
    l && `offset-sm-${l}`,
    u && `offset-xs-${u}`
  ].filter((h) => !!h).join(" ");
  return /* @__PURE__ */ f.jsx("div", { className: `column ${p}`, children: e });
}, vo = ({
  children: e,
  title: t = null
}) => /* @__PURE__ */ f.jsxs("div", { className: "be-form", children: [
  t && /* @__PURE__ */ f.jsx("div", { className: "header", children: /* @__PURE__ */ f.jsx("div", { className: "title", children: t }) }),
  e
] }), go = ({ children: e, ...t }) => {
  const {
    divide: r = null,
    md: n = null,
    sm: s = null,
    xs: o = null,
    justify: i = null,
    align: a = null,
    leftSide: c = null,
    rightSide: l = null
  } = t, u = [
    r && `divide-${r}`,
    r && n && `divide-md-${n}`,
    r && s && `divide-sm-${s}`,
    r && o && `divide-xs-${o}`,
    i && `justify-${i}`,
    a && `align-${a}`,
    c && "left-side",
    l && "right-side"
  ].filter((p) => !!p).join(" ");
  return /* @__PURE__ */ f.jsx("div", { className: `fields ${u}`, children: e });
}, xo = ({
  children: e,
  fieldLabel: t = null,
  inline: r = !1,
  short: n = !1,
  disabled: s = !1
}) => /* @__PURE__ */ f.jsxs(
  "div",
  {
    className: `field ${r ? "inline" : ""} ${s ? "disabled" : ""} ${n ? "short" : ""}`,
    children: [
      t && /* @__PURE__ */ f.jsx("label", { children: t }),
      e
    ]
  }
), bo = ({ children: e, ...t }) => {
  const {
    contents: r = "",
    brand: n = null,
    state: s = null,
    color: o = null,
    mark: i = !1,
    shadow: a = !0,
    align: c = "center",
    icon: l = null
  } = t, u = [
    n,
    s,
    o,
    i && "mark",
    a && "shadow",
    c && `align-${c}`,
    l && "icon"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f.jsx("div", { className: `be-badge ${u}`, children: e || /* @__PURE__ */ f.jsx(f.Fragment, { children: l ? /* @__PURE__ */ f.jsx("i", { className: `icon ${l}` }) : r }) });
}, yt = ({
  children: e,
  onChange: t = () => {
  },
  ...r
}) => {
  const {
    labelText: n = "",
    type: s = "checkbox",
    inputType: o = "checkbox",
    group: i = "",
    name: a = "",
    indeter: c = !1,
    checked: l = !1
  } = r, [u, p] = G(l);
  re(() => {
    p(l);
  }, [l]);
  const h = [
    s,
    c && "indeter"
  ].filter((v) => !!v).join(" "), m = (v) => {
    const b = v.target.checked;
    p(b), t(a, b);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: `be-checkbox ${h} ${u ? "checked" : ""}`, children: [
    /* @__PURE__ */ f.jsx("label", { htmlFor: a, children: e || n }),
    /* @__PURE__ */ f.jsx(
      "input",
      {
        name: s === "radio" ? i : a,
        id: a,
        type: o,
        onChange: m,
        checked: u
      }
    )
  ] });
}, yo = ({
  children: e,
  onChange: t = () => {
  },
  // { name, label, state }
  checkboxList: r = [],
  checkedList: n = []
}) => {
  const [s, o] = G(n), i = (a, c) => {
    const l = new Set(s);
    c ? l.add(a) : l.delete(a), o([...l]), t([...l]);
  };
  return /* @__PURE__ */ f.jsx("div", { className: "be-checkbox-group", children: e || /* @__PURE__ */ f.jsx(f.Fragment, { children: r.map((a) => /* @__PURE__ */ f.jsx(
    yt,
    {
      name: a.name,
      onChange: i,
      checked: s.includes(a.name),
      children: a.label || a.name
    },
    a.name
  )) }) });
}, Eo = ({
  children: e,
  onChange: t = () => {
  },
  group: r = "",
  radioList: n = [],
  selectedValue: s = ""
}) => {
  const [o, i] = G(s), a = (c, l) => {
    l && (i(c), t(c));
  };
  return /* @__PURE__ */ f.jsx("div", { className: "be-radio", children: e || /* @__PURE__ */ f.jsx(f.Fragment, { children: n.map((c) => /* @__PURE__ */ f.jsx(
    yt,
    {
      type: "radio",
      inputType: "radio",
      name: c.name,
      group: r,
      checked: o === c.name,
      onChange: a,
      children: c.label || c.name
    },
    c.name
  )) }) });
}, Kn = {
  success: "xi-check-circle",
  info: "xi-info",
  error: "xi-emoticon-devil",
  danger: "xi-emoticon-devil",
  attention: "xi-warning",
  importance: "xi-star"
}, wo = ({
  children: e,
  onClick: t = () => {
  },
  ...r
}) => {
  const {
    title: n = "",
    contents: s = "",
    icon: o = !1,
    state: i = null,
    selected: a = !1,
    disabled: c = !1
  } = r, l = [
    o && "icon",
    i,
    a && "selected",
    c && "disabled"
  ].filter((h) => !!h).join(" "), u = ee(() => i ? Kn[i] : o, [i, o]), p = (h) => {
    t(h);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: `be-message ${l}`, onClick: p, children: [
    o && /* @__PURE__ */ f.jsx("i", { className: `icon ${u}` }),
    e || /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx("div", { className: "title", children: n }),
      s && /* @__PURE__ */ f.jsx("div", { className: "contents", children: s })
    ] })
  ] });
}, Co = ({
  children: e,
  onClick: t = () => {
  },
  ...r
}) => {
  const {
    title: n = "",
    contents: s = "",
    border: o = !1,
    toggleIcon: i = "xi-angle-down",
    iconPos: a = "left",
    open: c = !1,
    collapse: l = !1,
    // maxHeight = 200,
    maxLine: u = 5
  } = r, [p, h] = G(c), m = [
    o && "border",
    l && "collapse",
    i && "icon",
    a
  ].filter((b) => !!b).join(" "), v = () => {
    const b = !p;
    h(b), t(b);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: `be-panel ${m} ${p ? "open" : ""}`, children: [
    /* @__PURE__ */ f.jsxs("div", { className: "panel-header", onClick: v, children: [
      /* @__PURE__ */ f.jsx("div", { className: "title", children: n }),
      l && i && /* @__PURE__ */ f.jsx("i", { className: `icon ${i}` })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "panel-content", style: { "--max-height": `${u * 1.5 + 1}em` }, children: /* @__PURE__ */ f.jsx("div", { className: "content-wrapper", children: e || s }) })
  ] });
}, Ro = ({
  children: e,
  onChange: t = () => {
  },
  ...r
}) => {
  const {
    type: n = "slide",
    inside: s = !1,
    round: o = !1,
    onText: i = "ON",
    offText: a = "OFF",
    color: c = null,
    checked: l = !1,
    disabled: u = !1
  } = r, [p, h] = G(l), m = [
    n,
    s && "inside",
    o && "round",
    c,
    u && "disabled"
  ].filter((b) => !!b).join(" "), v = () => {
    const b = !p;
    h(b), t(b);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: `be-switch ${m}`, onClick: v, children: [
    /* @__PURE__ */ f.jsx(
      "input",
      {
        type: "checkbox",
        onChange: v,
        checked: p
      }
    ),
    n === "slide" ? /* @__PURE__ */ f.jsx("div", { className: "switch" }) : /* @__PURE__ */ f.jsx(f.Fragment, { children: e || /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx("span", { className: `on ${p && "active"}`, children: i }),
      /* @__PURE__ */ f.jsx("span", { className: `off ${!p && "active"}`, children: a })
    ] }) })
  ] });
}, So = ({
  children: e,
  onSelect: t = () => {
  },
  onSelectColumn: r,
  ...n
}) => {
  const {
    columns: s = [],
    values: o = [],
    headAlign: i = "center",
    useFoot: a = !1,
    border: c = !1,
    gridType: l = null,
    divideNum: u = 3,
    selection: p = !1,
    striped: h = null
  } = n, m = ee(() => l === "divide" ? `divide-${u}` : l, [l, u]), v = [
    c && "border",
    p && "selection",
    h && `striped ${h}`,
    m
  ].filter((g) => !!g).join(" "), b = (g) => {
    p && t(g, o[g]);
  };
  return /* @__PURE__ */ f.jsx("table", { className: `be-table ${v}`, children: e || /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("thead", { className: `align-${i}`, children: /* @__PURE__ */ f.jsx("tr", { children: s.map((g) => /* @__PURE__ */ f.jsx("th", { className: `align-${i}`, children: g.name }, g.key)) }) }),
    /* @__PURE__ */ f.jsx("tbody", { children: o.map((g, E) => /* @__PURE__ */ f.jsx("tr", { className: "", onClick: () => b(E), children: s.map((R) => /* @__PURE__ */ f.jsx("td", { className: `align-${R.align || "center"} col-${R.col}`, children: /* @__PURE__ */ f.jsx("div", { className: "cell", children: g[R.key] }) }, `cell-${E}-${R.key}`)) }, `row-${E}`)) })
  ] }) });
}, To = ({
  children: e,
  onClick: t = () => {
  },
  ...r
}) => {
  const {
    type: n = "label",
    // line, dot
    color: s = null,
    light: o = !1,
    round: i = !1,
    icon: a = null,
    iconPos: c = null,
    // 'right'
    pointDirect: l = "up",
    disabled: u = !1
  } = r, p = [
    n,
    s,
    o && "light",
    i && "round",
    a && "icon",
    n === "pointing" && l,
    u && "disabled"
  ].filter(Boolean).join(" "), h = (m) => {
    u || t(m);
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `be-tag ${p}`,
      onClick: h,
      children: [
        a && c !== "right" && /* @__PURE__ */ f.jsx("i", { className: `icon ${c} ${a}` }),
        (n === "label" || n === "pointing") && e,
        a && c === "right" && /* @__PURE__ */ f.jsx("i", { className: `icon right ${a}` })
      ]
    }
  );
}, No = ({
  children: e,
  surf: t,
  border: r,
  float: n,
  align: s = "left",
  round: o = "l"
}) => {
  const i = [
    t && "surface",
    r && "border",
    n && "float",
    s && `align-${s}`,
    `round-${o}`
  ].filter((a) => !!a).join(" ");
  return /* @__PURE__ */ f.jsx("div", { className: `be-segment ${i}`, children: /* @__PURE__ */ f.jsx("div", { className: "contents", children: e }) });
}, Xe = (e, t) => {
  const r = {};
  return qn.forEach(e, (n) => {
    if (Un(n)) {
      const s = n.props.name;
      s && t.includes(s) && (r[s] = n.props.children);
    }
  }), r;
}, jo = ({
  children: e,
  title: t,
  surf: r,
  border: n = !0,
  float: s,
  align: o,
  round: i = "l"
}) => {
  const a = Xe(e, ["image", "header", "contents", "extra", "footer"]), c = [
    r && "surface",
    n && "border",
    s && "float",
    o && `align-${o}`,
    `round-${i}`,
    a.header || a.footer && "atteched"
  ].filter((l) => !!l).join(" ");
  return /* @__PURE__ */ f.jsxs("div", { className: `be-card ${c}`, children: [
    a.header && /* @__PURE__ */ f.jsx("div", { className: "header", children: a.header }),
    a.image && /* @__PURE__ */ f.jsx("div", { className: "image", children: a.image }),
    a.contents ? /* @__PURE__ */ f.jsxs("div", { className: "contents", children: [
      t && /* @__PURE__ */ f.jsx("div", { className: "title", children: t }),
      a.contents
    ] }) : e,
    a.extra && /* @__PURE__ */ f.jsx("div", { className: "extra", children: a.extra }),
    a.footer && /* @__PURE__ */ f.jsx("div", { className: "footer", children: a.footer })
  ] });
}, Oo = ({
  children: e,
  onChange: t = () => {
  },
  options: r = [],
  selection: n = !1,
  selectedType: s = "bg",
  icon: o = !1,
  image: i = !1,
  border: a = !1,
  itemClass: c = ""
}) => {
  const [l, u] = G(null), p = [
    n && "selection",
    a && "border",
    s
  ].filter((m) => !!m).join(" "), h = (m) => {
    u(m), t(m);
  };
  return /* @__PURE__ */ f.jsx("div", { className: `be-list ${p}`, children: e || /* @__PURE__ */ f.jsx(f.Fragment, { children: r.map((m) => /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `item ${c} ${l && l.option === m.option ? "selected" : ""}`,
      onClick: () => h(m),
      children: [
        i ? /* @__PURE__ */ f.jsx("div", { className: "item-img", children: m.image && /* @__PURE__ */ f.jsx("img", { src: m.image, alt: m.option }) }) : o ? /* @__PURE__ */ f.jsx("i", { className: `icon list-icon ${m.icon}` }) : null,
        /* @__PURE__ */ f.jsxs("div", { className: "item-title", children: [
          m.option,
          m.sub && /* @__PURE__ */ f.jsx("div", { className: "sub-title", children: m.sub })
        ] })
      ]
    },
    m.id || m.option
  )) }) });
}, $o = ({
  onChange: e = () => {
  },
  type: t = "number",
  ...r
}) => {
  const {
    round: n = !1,
    compact: s = !1,
    border: o = !1,
    align: i = "left",
    limits: a = 5,
    currentPage: c = 1,
    pageLength: l = 1,
    itemClass: u = "",
    ellipsis: p = !1,
    color: h = null
  } = r, m = fe(null), [v, b] = G(c), [g, E] = G(l), R = ee(() => l <= a || !a, [l, a]), C = ee(() => Math.max(v - Math.ceil(a * 0.5) + 1, 1), [v, a]), S = ee(() => v > Math.floor(a / 2) + 2 && a < g, [v, a, g]), x = ee(() => v <= g - a && a < g, [v, a, g]), D = ee(() => v - 1 <= 0, [v]), O = ee(() => v + 1 > g, [v, g]), I = ee(() => {
    let B, M;
    if (R)
      M = new Array(l).fill(1).map((W, k) => W + k);
    else if (p) {
      B = 2;
      const W = Math.floor(a / 2);
      S && (B = v - W), !x && S && (B = g - a), M = new Array(a).fill(B).map((k, U) => k + U);
    } else
      B = Math.min(C, l - a + 1), M = new Array(a).fill(B).map((W, k) => W + k);
    return M;
  }, [R, l, p, a, g, v, S, x, C]);
  re(() => {
    m.current.focus(), E(l);
  }, [l]);
  const V = (B) => {
    B > g || B <= 0 || (b(B), e(B));
  }, z = () => {
    D || V(v - 1);
  }, K = () => {
    O || V(v + 1);
  }, Q = () => {
    const B = v - a <= 0 ? v - 1 : v - a;
    V(B);
  }, Z = () => {
    const B = v + a > g ? v + 1 : v + a;
    V(B);
  }, H = [
    t,
    o && "border",
    n && "round",
    s && "compact",
    i && `align-${i}`,
    h
  ].filter((B) => !!B).join(" ");
  return /* @__PURE__ */ f.jsxs("div", { className: `be-pagination ${H}`, ref: m, tabIndex: -1, children: [
    !p && !R && /* @__PURE__ */ f.jsx(
      "div",
      {
        className: `${u} pagination-nav first ${D && "disabled"}`,
        onClick: () => V(1),
        children: "F"
      }
    ),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        className: `${u} pagination-nav prev ${D && "disabled"}`,
        onClick: z,
        children: /* @__PURE__ */ f.jsx("i", { className: "xi-angle-left" })
      }
    ),
    p && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        "div",
        {
          className: `${u} pagination-num ${v === 1 && "active"}`,
          onClick: () => V(1),
          children: "1"
        }
      ),
      S && /* @__PURE__ */ f.jsx(
        "div",
        {
          className: `${u} pagination-num`,
          onClick: Q,
          children: /* @__PURE__ */ f.jsx("i", { className: "xi-ellipsis-h" })
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "pagination-page-wrapper", children: /* @__PURE__ */ f.jsx(
      Zn,
      {
        type: t,
        itemClass: u,
        pageList: I,
        current: v,
        last: g,
        onClick: V
      }
    ) }),
    p && a < l && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      x && /* @__PURE__ */ f.jsx(
        "div",
        {
          className: `${u} pagination-nav`,
          onClick: Z,
          children: /* @__PURE__ */ f.jsx("i", { className: "xi-ellipsis-h" })
        }
      ),
      /* @__PURE__ */ f.jsx(
        "div",
        {
          className: `${u} pagination-num ${g === v && "active"}`,
          onClick: () => V(g),
          children: g
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        className: `${u} pagination-nav next ${O && "disabled"}`,
        onClick: K,
        children: /* @__PURE__ */ f.jsx("i", { className: "xi-angle-right" })
      }
    ),
    !p && !R && /* @__PURE__ */ f.jsx(
      "div",
      {
        className: `${u} pagination-nav last ${O && "disabled"}`,
        onClick: () => V(g),
        children: "L"
      }
    )
  ] });
};
function Zn({ type: e, itemClass: t, pageList: r, current: n, onClick: s, last: o }) {
  return e === "page" ? /* @__PURE__ */ f.jsxs("div", { className: "pagination-info", children: [
    /* @__PURE__ */ f.jsx("div", { className: "pagination-nav current", children: n }),
    /* @__PURE__ */ f.jsx("span", { className: "slash", children: "/" }),
    /* @__PURE__ */ f.jsx("div", { className: "pagination-nav last", children: o })
  ] }) : r && r.map((i) => /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `${t} pagination-num ${i === n && "active"}`,
      onClick: () => s(i),
      children: i
    },
    i
  ));
}
const Ao = ({
  onChange: e = () => {
  },
  resultValue: t = null,
  ...r
}) => {
  const {
    // id = null,
    trackType: n = "normal",
    min: s = 0,
    max: o = 100,
    unitText: i = null,
    showStep: a = !1,
    stepSize: c = 10,
    showLabel: l = !1,
    showValue: u = !1,
    showTooltip: p = !1,
    // titleText = null,
    disabled: h = !1,
    color: m = null
  } = r, v = fe(null), b = fe(null), [g, E] = G(0), [R, C] = G(!1), [S, x] = G(null), [D, O] = G(null), [I, V] = G(500), z = ee(() => ({ width: `${g}px`, left: "0%" }), [g]), K = ee(() => ({ left: `${g}px` }), [g]), Q = ee(() => Math.ceil((o - s) * (g / I)) + s + i, [o, s, g, I, i]), Z = ee(() => (o - s) / c, [s, o, c]), H = ee(() => 100 / Z, [Z]), B = Fe((T) => (T - s) / (o - s), [s, o]), M = Fe((T) => I * B(T), [I, B]), W = Fe(() => {
    t > o ? E(M(o)) : t < s ? E(M(s)) : E(M(t));
  }, [t, o, s, M]), k = (T) => {
    const w = D + T;
    return w < 0 ? 0 : w > I ? I : w;
  }, U = ({ target: T, pageX: w }) => {
    T.classList.contains("control-btn") ? (x(w), O(b.current.offsetWidth), C(!0), window.addEventListener("mousemove", y), window.addEventListener("mouseup", d)) : E(k(w - S));
  }, d = ({ target: T, pageX: w }) => {
    T.classList.contains("control-btn") && E(k(w - S)), e(Q), C(!1), window.removeEventListener("mousemove", y), window.removeEventListener("mouseup", d);
  }, y = ({ pageX: T }) => {
    E(k(T - S));
  }, N = ({ target: T }) => {
    console.log(T);
  };
  re(() => {
    let T;
    if (v.current) {
      const w = v.current.getBoundingClientRect();
      V(w.width), x(w.left), W(), T = new ResizeObserver((A) => {
        for (const L of A) {
          const _ = L.contentRect;
          V(_.width), W();
        }
      }), T.observe(v.current);
    }
    return () => {
      T && v.current && T.disconnect();
    };
  }, [v, W]), re(() => {
    W();
  }, [W]);
  const $ = [
    n,
    h && "disabled",
    l && "labeled"
  ].filter((T) => !!T).join(" ");
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `be-slider ${$}`,
      ref: v,
      onMouseDown: U,
      onMouseUp: d,
      children: [
        /* @__PURE__ */ f.jsx(
          "div",
          {
            className: `result-slider primary ${m && `be-${m}`}`,
            ref: b,
            style: z
          }
        ),
        a && Array.from({ length: Z }).map((T, w) => /* @__PURE__ */ f.jsx(
          "div",
          {
            className: "break-point",
            style: { left: `${(w + 1) * H}%` },
            onClick: (A) => {
              A.stopPropagation(), N();
            }
          },
          w
        )),
        /* @__PURE__ */ f.jsx("div", { className: `control-btn ${R && "catching"}`, style: K, children: p && /* @__PURE__ */ f.jsx("div", { className: "tooltip", children: Q }) }),
        u && /* @__PURE__ */ f.jsx("div", { className: "label-text", children: /* @__PURE__ */ f.jsxs("div", { className: "current-label", style: { left: `${g}px` }, children: [
          Q,
          i
        ] }) }),
        l && /* @__PURE__ */ f.jsxs("div", { className: "label-text", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "start-label", children: [
            s,
            i
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "end-label", children: [
            o,
            i
          ] })
        ] })
      ]
    }
  );
};
function We() {
  return We = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, We.apply(null, arguments);
}
function on(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function dt(e, t) {
  return dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, dt(e, t);
}
function an(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, dt(e, t);
}
var De = { exports: {} }, Me = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function Qn() {
  if (At) return X;
  At = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function C(x) {
    if (typeof x == "object" && x !== null) {
      var D = x.$$typeof;
      switch (D) {
        case t:
          switch (x = x.type, x) {
            case c:
            case l:
            case n:
            case o:
            case s:
            case p:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case a:
                case u:
                case v:
                case m:
                case i:
                  return x;
                default:
                  return D;
              }
          }
        case r:
          return D;
      }
    }
  }
  function S(x) {
    return C(x) === l;
  }
  return X.AsyncMode = c, X.ConcurrentMode = l, X.ContextConsumer = a, X.ContextProvider = i, X.Element = t, X.ForwardRef = u, X.Fragment = n, X.Lazy = v, X.Memo = m, X.Portal = r, X.Profiler = o, X.StrictMode = s, X.Suspense = p, X.isAsyncMode = function(x) {
    return S(x) || C(x) === c;
  }, X.isConcurrentMode = S, X.isContextConsumer = function(x) {
    return C(x) === a;
  }, X.isContextProvider = function(x) {
    return C(x) === i;
  }, X.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, X.isForwardRef = function(x) {
    return C(x) === u;
  }, X.isFragment = function(x) {
    return C(x) === n;
  }, X.isLazy = function(x) {
    return C(x) === v;
  }, X.isMemo = function(x) {
    return C(x) === m;
  }, X.isPortal = function(x) {
    return C(x) === r;
  }, X.isProfiler = function(x) {
    return C(x) === o;
  }, X.isStrictMode = function(x) {
    return C(x) === s;
  }, X.isSuspense = function(x) {
    return C(x) === p;
  }, X.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === l || x === o || x === s || x === p || x === h || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === m || x.$$typeof === i || x.$$typeof === a || x.$$typeof === u || x.$$typeof === g || x.$$typeof === E || x.$$typeof === R || x.$$typeof === b);
  }, X.typeOf = C, X;
}
var J = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function er() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function C(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === l || j === o || j === s || j === p || j === h || typeof j == "object" && j !== null && (j.$$typeof === v || j.$$typeof === m || j.$$typeof === i || j.$$typeof === a || j.$$typeof === u || j.$$typeof === g || j.$$typeof === E || j.$$typeof === R || j.$$typeof === b);
    }
    function S(j) {
      if (typeof j == "object" && j !== null) {
        var ie = j.$$typeof;
        switch (ie) {
          case t:
            var ke = j.type;
            switch (ke) {
              case c:
              case l:
              case n:
              case o:
              case s:
              case p:
                return ke;
              default:
                var Nt = ke && ke.$$typeof;
                switch (Nt) {
                  case a:
                  case u:
                  case v:
                  case m:
                  case i:
                    return Nt;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var x = c, D = l, O = a, I = i, V = t, z = u, K = n, Q = v, Z = m, H = r, B = o, M = s, W = p, k = !1;
    function U(j) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(j) || S(j) === c;
    }
    function d(j) {
      return S(j) === l;
    }
    function y(j) {
      return S(j) === a;
    }
    function N(j) {
      return S(j) === i;
    }
    function $(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function T(j) {
      return S(j) === u;
    }
    function w(j) {
      return S(j) === n;
    }
    function A(j) {
      return S(j) === v;
    }
    function L(j) {
      return S(j) === m;
    }
    function _(j) {
      return S(j) === r;
    }
    function Y(j) {
      return S(j) === o;
    }
    function q(j) {
      return S(j) === s;
    }
    function ne(j) {
      return S(j) === p;
    }
    J.AsyncMode = x, J.ConcurrentMode = D, J.ContextConsumer = O, J.ContextProvider = I, J.Element = V, J.ForwardRef = z, J.Fragment = K, J.Lazy = Q, J.Memo = Z, J.Portal = H, J.Profiler = B, J.StrictMode = M, J.Suspense = W, J.isAsyncMode = U, J.isConcurrentMode = d, J.isContextConsumer = y, J.isContextProvider = N, J.isElement = $, J.isForwardRef = T, J.isFragment = w, J.isLazy = A, J.isMemo = L, J.isPortal = _, J.isProfiler = Y, J.isStrictMode = q, J.isSuspense = ne, J.isValidElementType = C, J.typeOf = S;
  }()), J;
}
var kt;
function ln() {
  return kt || (kt = 1, process.env.NODE_ENV === "production" ? Me.exports = Qn() : Me.exports = er()), Me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var nt, _t;
function tr() {
  if (_t) return nt;
  _t = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var i = {}, a = 0; a < 10; a++)
        i["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(i).map(function(u) {
        return i[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return nt = s() ? Object.assign : function(o, i) {
    for (var a, c = n(o), l, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var p in a)
        t.call(a, p) && (c[p] = a[p]);
      if (e) {
        l = e(a);
        for (var h = 0; h < l.length; h++)
          r.call(a, l[h]) && (c[l[h]] = a[l[h]]);
      }
    }
    return c;
  }, nt;
}
var rt, It;
function Et() {
  if (It) return rt;
  It = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return rt = e, rt;
}
var st, Dt;
function cn() {
  return Dt || (Dt = 1, st = Function.call.bind(Object.prototype.hasOwnProperty)), st;
}
var ot, Mt;
function nr() {
  if (Mt) return ot;
  Mt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Et(), r = {}, n = /* @__PURE__ */ cn();
    e = function(o) {
      var i = "Warning: " + o;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function s(o, i, a, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (n(o, u)) {
          var p;
          try {
            if (typeof o[u] != "function") {
              var h = Error(
                (c || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = o[u](i, u, c, a, null, t);
          } catch (v) {
            p = v;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var m = l ? l() : "";
            e(
              "Failed " + a + " type: " + p.message + (m ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ot = s, ot;
}
var it, Lt;
function rr() {
  if (Lt) return it;
  Lt = 1;
  var e = ln(), t = tr(), r = /* @__PURE__ */ Et(), n = /* @__PURE__ */ cn(), s = /* @__PURE__ */ nr(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return it = function(a, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function p(d) {
      var y = d && (l && d[l] || d[u]);
      if (typeof y == "function")
        return y;
    }
    var h = "<<anonymous>>", m = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: R(),
      arrayOf: C,
      element: S(),
      elementType: x(),
      instanceOf: D,
      node: z(),
      objectOf: I,
      oneOf: O,
      oneOfType: V,
      shape: Q,
      exact: Z
    };
    function v(d, y) {
      return d === y ? d !== 0 || 1 / d === 1 / y : d !== d && y !== y;
    }
    function b(d, y) {
      this.message = d, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function g(d) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, N = 0;
      function $(w, A, L, _, Y, q, ne) {
        if (_ = _ || h, q = q || L, ne !== r) {
          if (c) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = _ + ":" + L;
            !y[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[ie] = !0, N++);
          }
        }
        return A[L] == null ? w ? A[L] === null ? new b("The " + Y + " `" + q + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new b("The " + Y + " `" + q + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : d(A, L, _, Y, q);
      }
      var T = $.bind(null, !1);
      return T.isRequired = $.bind(null, !0), T;
    }
    function E(d) {
      function y(N, $, T, w, A, L) {
        var _ = N[$], Y = M(_);
        if (Y !== d) {
          var q = W(_);
          return new b(
            "Invalid " + w + " `" + A + "` of type " + ("`" + q + "` supplied to `" + T + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return g(y);
    }
    function R() {
      return g(i);
    }
    function C(d) {
      function y(N, $, T, w, A) {
        if (typeof d != "function")
          return new b("Property `" + A + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var L = N[$];
        if (!Array.isArray(L)) {
          var _ = M(L);
          return new b("Invalid " + w + " `" + A + "` of type " + ("`" + _ + "` supplied to `" + T + "`, expected an array."));
        }
        for (var Y = 0; Y < L.length; Y++) {
          var q = d(L, Y, T, w, A + "[" + Y + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return g(y);
    }
    function S() {
      function d(y, N, $, T, w) {
        var A = y[N];
        if (!a(A)) {
          var L = M(A);
          return new b("Invalid " + T + " `" + w + "` of type " + ("`" + L + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(d);
    }
    function x() {
      function d(y, N, $, T, w) {
        var A = y[N];
        if (!e.isValidElementType(A)) {
          var L = M(A);
          return new b("Invalid " + T + " `" + w + "` of type " + ("`" + L + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(d);
    }
    function D(d) {
      function y(N, $, T, w, A) {
        if (!(N[$] instanceof d)) {
          var L = d.name || h, _ = U(N[$]);
          return new b("Invalid " + w + " `" + A + "` of type " + ("`" + _ + "` supplied to `" + T + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return g(y);
    }
    function O(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function y(N, $, T, w, A) {
        for (var L = N[$], _ = 0; _ < d.length; _++)
          if (v(L, d[_]))
            return null;
        var Y = JSON.stringify(d, function(ne, j) {
          var ie = W(j);
          return ie === "symbol" ? String(j) : j;
        });
        return new b("Invalid " + w + " `" + A + "` of value `" + String(L) + "` " + ("supplied to `" + T + "`, expected one of " + Y + "."));
      }
      return g(y);
    }
    function I(d) {
      function y(N, $, T, w, A) {
        if (typeof d != "function")
          return new b("Property `" + A + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var L = N[$], _ = M(L);
        if (_ !== "object")
          return new b("Invalid " + w + " `" + A + "` of type " + ("`" + _ + "` supplied to `" + T + "`, expected an object."));
        for (var Y in L)
          if (n(L, Y)) {
            var q = d(L, Y, T, w, A + "." + Y, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return g(y);
    }
    function V(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var y = 0; y < d.length; y++) {
        var N = d[y];
        if (typeof N != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + k(N) + " at index " + y + "."
          ), i;
      }
      function $(T, w, A, L, _) {
        for (var Y = [], q = 0; q < d.length; q++) {
          var ne = d[q], j = ne(T, w, A, L, _, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && Y.push(j.data.expectedType);
        }
        var ie = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new b("Invalid " + L + " `" + _ + "` supplied to " + ("`" + A + "`" + ie + "."));
      }
      return g($);
    }
    function z() {
      function d(y, N, $, T, w) {
        return H(y[N]) ? null : new b("Invalid " + T + " `" + w + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return g(d);
    }
    function K(d, y, N, $, T) {
      return new b(
        (d || "React class") + ": " + y + " type `" + N + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function Q(d) {
      function y(N, $, T, w, A) {
        var L = N[$], _ = M(L);
        if (_ !== "object")
          return new b("Invalid " + w + " `" + A + "` of type `" + _ + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var Y in d) {
          var q = d[Y];
          if (typeof q != "function")
            return K(T, w, A, Y, W(q));
          var ne = q(L, Y, T, w, A + "." + Y, r);
          if (ne)
            return ne;
        }
        return null;
      }
      return g(y);
    }
    function Z(d) {
      function y(N, $, T, w, A) {
        var L = N[$], _ = M(L);
        if (_ !== "object")
          return new b("Invalid " + w + " `" + A + "` of type `" + _ + "` " + ("supplied to `" + T + "`, expected `object`."));
        var Y = t({}, N[$], d);
        for (var q in Y) {
          var ne = d[q];
          if (n(d, q) && typeof ne != "function")
            return K(T, w, A, q, W(ne));
          if (!ne)
            return new b(
              "Invalid " + w + " `" + A + "` key `" + q + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(N[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var j = ne(L, q, T, w, A + "." + q, r);
          if (j)
            return j;
        }
        return null;
      }
      return g(y);
    }
    function H(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(H);
          if (d === null || a(d))
            return !0;
          var y = p(d);
          if (y) {
            var N = y.call(d), $;
            if (y !== d.entries) {
              for (; !($ = N.next()).done; )
                if (!H($.value))
                  return !1;
            } else
              for (; !($ = N.next()).done; ) {
                var T = $.value;
                if (T && !H(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(d, y) {
      return d === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function M(d) {
      var y = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : B(y, d) ? "symbol" : y;
    }
    function W(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var y = M(d);
      if (y === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function k(d) {
      var y = W(d);
      switch (y) {
        case "array":
        case "object":
          return "an " + y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + y;
        default:
          return y;
      }
    }
    function U(d) {
      return !d.constructor || !d.constructor.name ? h : d.constructor.name;
    }
    return m.checkPropTypes = s, m.resetWarningCache = s.resetWarningCache, m.PropTypes = m, m;
  }, it;
}
var at, Ft;
function sr() {
  if (Ft) return at;
  Ft = 1;
  var e = /* @__PURE__ */ Et();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, at = function() {
    function n(i, a, c, l, u, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function s() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: s,
      element: n,
      elementType: n,
      instanceOf: s,
      node: n,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, at;
}
var Bt;
function or() {
  if (Bt) return De.exports;
  if (Bt = 1, process.env.NODE_ENV !== "production") {
    var e = ln(), t = !0;
    De.exports = /* @__PURE__ */ rr()(e.isElement, t);
  } else
    De.exports = /* @__PURE__ */ sr()();
  return De.exports;
}
var ir = /* @__PURE__ */ or();
const F = /* @__PURE__ */ zn(ir);
function ar(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function lr(e, t) {
  e.classList ? e.classList.add(t) : ar(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function Wt(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function cr(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Wt(e.className, t) : e.setAttribute("class", Wt(e.className && e.className.baseVal || "", t));
}
const Vt = {
  disabled: !1
};
var ur = process.env.NODE_ENV !== "production" ? F.oneOfType([F.number, F.shape({
  enter: F.number,
  exit: F.number,
  appear: F.number
}).isRequired]) : null, fr = process.env.NODE_ENV !== "production" ? F.oneOfType([F.string, F.shape({
  enter: F.string,
  exit: F.string,
  active: F.string
}), F.shape({
  enter: F.string,
  enterDone: F.string,
  enterActive: F.string,
  exit: F.string,
  exitDone: F.string,
  exitActive: F.string
})]) : null;
const un = de.createContext(null);
var fn = function(t) {
  return t.scrollTop;
}, je = "unmounted", he = "exited", ve = "entering", we = "entered", pt = "exiting", ce = /* @__PURE__ */ function(e) {
  an(t, e);
  function t(n, s) {
    var o;
    o = e.call(this, n, s) || this;
    var i = s, a = i && !i.isMounting ? n.enter : n.appear, c;
    return o.appearStatus = null, n.in ? a ? (c = he, o.appearStatus = ve) : c = we : n.unmountOnExit || n.mountOnEnter ? c = je : c = he, o.state = {
      status: c
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(s, o) {
    var i = s.in;
    return i && o.status === je ? {
      status: he
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(s) {
    var o = null;
    if (s !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== ve && i !== we && (o = ve) : (i === ve || i === we) && (o = pt);
    }
    this.updateStatus(!1, o);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var s = this.props.timeout, o, i, a;
    return o = i = a = s, s != null && typeof s != "number" && (o = s.exit, i = s.enter, a = s.appear !== void 0 ? s.appear : i), {
      exit: o,
      enter: i,
      appear: a
    };
  }, r.updateStatus = function(s, o) {
    if (s === void 0 && (s = !1), o !== null)
      if (this.cancelNextCallback(), o === ve) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : _e.findDOMNode(this);
          i && fn(i);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === he && this.setState({
      status: je
    });
  }, r.performEnter = function(s) {
    var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : s, c = this.props.nodeRef ? [a] : [_e.findDOMNode(this), a], l = c[0], u = c[1], p = this.getTimeouts(), h = a ? p.appear : p.enter;
    if (!s && !i || Vt.disabled) {
      this.safeSetState({
        status: we
      }, function() {
        o.props.onEntered(l);
      });
      return;
    }
    this.props.onEnter(l, u), this.safeSetState({
      status: ve
    }, function() {
      o.props.onEntering(l, u), o.onTransitionEnd(h, function() {
        o.safeSetState({
          status: we
        }, function() {
          o.props.onEntered(l, u);
        });
      });
    });
  }, r.performExit = function() {
    var s = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : _e.findDOMNode(this);
    if (!o || Vt.disabled) {
      this.safeSetState({
        status: he
      }, function() {
        s.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: pt
    }, function() {
      s.props.onExiting(a), s.onTransitionEnd(i.exit, function() {
        s.safeSetState({
          status: he
        }, function() {
          s.props.onExited(a);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(s, o) {
    o = this.setNextCallback(o), this.setState(s, o);
  }, r.setNextCallback = function(s) {
    var o = this, i = !0;
    return this.nextCallback = function(a) {
      i && (i = !1, o.nextCallback = null, s(a));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(s, o) {
    this.setNextCallback(o);
    var i = this.props.nodeRef ? this.props.nodeRef.current : _e.findDOMNode(this), a = s == null && !this.props.addEndListener;
    if (!i || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], l = c[0], u = c[1];
      this.props.addEndListener(l, u);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, r.render = function() {
    var s = this.state.status;
    if (s === je)
      return null;
    var o = this.props, i = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var a = on(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ de.createElement(un.Provider, {
        value: null
      }, typeof i == "function" ? i(s, a) : de.cloneElement(de.Children.only(i), a))
    );
  }, t;
}(de.Component);
ce.contextType = un;
ce.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: F.shape({
    current: typeof Element > "u" ? F.any : function(e, t, r, n, s, o) {
      var i = e[t];
      return F.instanceOf(i && "ownerDocument" in i ? i.ownerDocument.defaultView.Element : Element)(e, t, r, n, s, o);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: F.oneOfType([F.func.isRequired, F.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: F.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: F.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: F.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: F.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: F.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: F.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = ur;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      s[o - 1] = arguments[o];
    return r.apply(void 0, [t].concat(s));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: F.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: F.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: F.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: F.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: F.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: F.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: F.func
} : {};
function Ee() {
}
ce.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ee,
  onEntering: Ee,
  onEntered: Ee,
  onExit: Ee,
  onExiting: Ee,
  onExited: Ee
};
ce.UNMOUNTED = je;
ce.EXITED = he;
ce.ENTERING = ve;
ce.ENTERED = we;
ce.EXITING = pt;
var dr = function(t, r) {
  return t && r && r.split(" ").forEach(function(n) {
    return lr(t, n);
  });
}, lt = function(t, r) {
  return t && r && r.split(" ").forEach(function(n) {
    return cr(t, n);
  });
}, Je = /* @__PURE__ */ function(e) {
  an(t, e);
  function t() {
    for (var n, s = arguments.length, o = new Array(s), i = 0; i < s; i++)
      o[i] = arguments[i];
    return n = e.call.apply(e, [this].concat(o)) || this, n.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, n.onEnter = function(a, c) {
      var l = n.resolveArguments(a, c), u = l[0], p = l[1];
      n.removeClasses(u, "exit"), n.addClass(u, p ? "appear" : "enter", "base"), n.props.onEnter && n.props.onEnter(a, c);
    }, n.onEntering = function(a, c) {
      var l = n.resolveArguments(a, c), u = l[0], p = l[1], h = p ? "appear" : "enter";
      n.addClass(u, h, "active"), n.props.onEntering && n.props.onEntering(a, c);
    }, n.onEntered = function(a, c) {
      var l = n.resolveArguments(a, c), u = l[0], p = l[1], h = p ? "appear" : "enter";
      n.removeClasses(u, h), n.addClass(u, h, "done"), n.props.onEntered && n.props.onEntered(a, c);
    }, n.onExit = function(a) {
      var c = n.resolveArguments(a), l = c[0];
      n.removeClasses(l, "appear"), n.removeClasses(l, "enter"), n.addClass(l, "exit", "base"), n.props.onExit && n.props.onExit(a);
    }, n.onExiting = function(a) {
      var c = n.resolveArguments(a), l = c[0];
      n.addClass(l, "exit", "active"), n.props.onExiting && n.props.onExiting(a);
    }, n.onExited = function(a) {
      var c = n.resolveArguments(a), l = c[0];
      n.removeClasses(l, "exit"), n.addClass(l, "exit", "done"), n.props.onExited && n.props.onExited(a);
    }, n.resolveArguments = function(a, c) {
      return n.props.nodeRef ? [n.props.nodeRef.current, a] : [a, c];
    }, n.getClassNames = function(a) {
      var c = n.props.classNames, l = typeof c == "string", u = l && c ? c + "-" : "", p = l ? "" + u + a : c[a], h = l ? p + "-active" : c[a + "Active"], m = l ? p + "-done" : c[a + "Done"];
      return {
        baseClassName: p,
        activeClassName: h,
        doneClassName: m
      };
    }, n;
  }
  var r = t.prototype;
  return r.addClass = function(s, o, i) {
    var a = this.getClassNames(o)[i + "ClassName"], c = this.getClassNames("enter"), l = c.doneClassName;
    o === "appear" && i === "done" && l && (a += " " + l), i === "active" && s && fn(s), a && (this.appliedClasses[o][i] = a, dr(s, a));
  }, r.removeClasses = function(s, o) {
    var i = this.appliedClasses[o], a = i.base, c = i.active, l = i.done;
    this.appliedClasses[o] = {}, a && lt(s, a), c && lt(s, c), l && lt(s, l);
  }, r.render = function() {
    var s = this.props;
    s.classNames;
    var o = on(s, ["classNames"]);
    return /* @__PURE__ */ de.createElement(ce, We({}, o, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(de.Component);
Je.defaultProps = {
  classNames: ""
};
Je.propTypes = process.env.NODE_ENV !== "production" ? We({}, ce.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: fr,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: F.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: F.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: F.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: F.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: F.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: F.func
}) : {};
function Ke() {
  return typeof window < "u";
}
function Se(e) {
  return dn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ue(e) {
  var t;
  return (t = (dn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function dn(e) {
  return Ke() ? e instanceof Node || e instanceof se(e).Node : !1;
}
function te(e) {
  return Ke() ? e instanceof Element || e instanceof se(e).Element : !1;
}
function le(e) {
  return Ke() ? e instanceof HTMLElement || e instanceof se(e).HTMLElement : !1;
}
function mt(e) {
  return !Ke() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
const pr = /* @__PURE__ */ new Set(["inline", "contents"]);
function Pe(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: s
  } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !pr.has(s);
}
const mr = /* @__PURE__ */ new Set(["table", "td", "th"]);
function hr(e) {
  return mr.has(Se(e));
}
const vr = [":popover-open", ":modal"];
function Ze(e) {
  return vr.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const gr = ["transform", "translate", "scale", "rotate", "perspective"], xr = ["transform", "translate", "scale", "rotate", "perspective", "filter"], br = ["paint", "layout", "strict", "content"];
function wt(e) {
  const t = Ct(), r = te(e) ? oe(e) : e;
  return gr.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || xr.some((n) => (r.willChange || "").includes(n)) || br.some((n) => (r.contain || "").includes(n));
}
function yr(e) {
  let t = me(e);
  for (; le(t) && !Re(t); ) {
    if (wt(t))
      return t;
    if (Ze(t))
      return null;
    t = me(t);
  }
  return null;
}
function Ct() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Er = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Re(e) {
  return Er.has(Se(e));
}
function oe(e) {
  return se(e).getComputedStyle(e);
}
function Qe(e) {
  return te(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function me(e) {
  if (Se(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    mt(e) && e.host || // Fallback.
    ue(e)
  );
  return mt(t) ? t.host : t;
}
function pn(e) {
  const t = me(e);
  return Re(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : le(t) && Pe(t) ? t : pn(t);
}
function $e(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = pn(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), i = se(s);
  if (o) {
    const a = ht(i);
    return t.concat(i, i.visualViewport || [], Pe(s) ? s : [], a && r ? $e(a) : []);
  }
  return t.concat(s, $e(s, [], r));
}
function ht(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const Ve = Math.min, ge = Math.max, Ye = Math.round, Le = Math.floor, ae = (e) => ({
  x: e,
  y: e
}), wr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Cr = {
  start: "end",
  end: "start"
};
function Yt(e, t, r) {
  return ge(e, Ve(t, r));
}
function et(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function be(e) {
  return e.split("-")[0];
}
function tt(e) {
  return e.split("-")[1];
}
function mn(e) {
  return e === "x" ? "y" : "x";
}
function hn(e) {
  return e === "y" ? "height" : "width";
}
const Rr = /* @__PURE__ */ new Set(["top", "bottom"]);
function pe(e) {
  return Rr.has(be(e)) ? "y" : "x";
}
function vn(e) {
  return mn(pe(e));
}
function Sr(e, t, r) {
  r === void 0 && (r = !1);
  const n = tt(e), s = vn(e), o = hn(s);
  let i = s === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = qe(i)), [i, qe(i)];
}
function Tr(e) {
  const t = qe(e);
  return [vt(e), t, vt(t)];
}
function vt(e) {
  return e.replace(/start|end/g, (t) => Cr[t]);
}
const qt = ["left", "right"], Ut = ["right", "left"], Nr = ["top", "bottom"], jr = ["bottom", "top"];
function Or(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Ut : qt : t ? qt : Ut;
    case "left":
    case "right":
      return t ? Nr : jr;
    default:
      return [];
  }
}
function $r(e, t, r, n) {
  const s = tt(e);
  let o = Or(be(e), r === "start", n);
  return s && (o = o.map((i) => i + "-" + s), t && (o = o.concat(o.map(vt)))), o;
}
function qe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wr[t]);
}
function Ar(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pr(e) {
  return typeof e != "number" ? Ar(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ue(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: s
  } = e;
  return {
    width: n,
    height: s,
    top: r,
    left: t,
    right: t + n,
    bottom: r + s,
    x: t,
    y: r
  };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var kr = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], gt = /* @__PURE__ */ kr.join(","), gn = typeof Element > "u", Ae = gn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ze = !gn && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, He = function e(t, r) {
  var n;
  r === void 0 && (r = !0);
  var s = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), o = s === "" || s === "true", i = o || r && t && e(t.parentNode);
  return i;
}, _r = function(t) {
  var r, n = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "contenteditable");
  return n === "" || n === "true";
}, Ir = function(t, r, n) {
  if (He(t))
    return [];
  var s = Array.prototype.slice.apply(t.querySelectorAll(gt));
  return r && Ae.call(t, gt) && s.unshift(t), s = s.filter(n), s;
}, Dr = function e(t, r, n) {
  for (var s = [], o = Array.from(t); o.length; ) {
    var i = o.shift();
    if (!He(i, !1))
      if (i.tagName === "SLOT") {
        var a = i.assignedElements(), c = a.length ? a : i.children, l = e(c, !0, n);
        n.flatten ? s.push.apply(s, l) : s.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var u = Ae.call(i, gt);
        u && n.filter(i) && (r || !t.includes(i)) && s.push(i);
        var p = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), h = !He(p, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
        if (p && h) {
          var m = e(p === !0 ? i.children : p.children, !0, n);
          n.flatten ? s.push.apply(s, m) : s.push({
            scopeParent: i,
            candidates: m
          });
        } else
          o.unshift.apply(o, i.children);
      }
  }
  return s;
}, xn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, bn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || _r(t)) && !xn(t) ? 0 : t.tabIndex;
}, Mr = function(t, r) {
  var n = bn(t);
  return n < 0 && r && !xn(t) ? 0 : n;
}, Lr = function(t, r) {
  return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex;
}, yn = function(t) {
  return t.tagName === "INPUT";
}, Fr = function(t) {
  return yn(t) && t.type === "hidden";
}, Br = function(t) {
  var r = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, Wr = function(t, r) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === r)
      return t[n];
}, Vr = function(t) {
  if (!t.name)
    return !0;
  var r = t.form || ze(t), n = function(a) {
    return r.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, s;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    s = n(window.CSS.escape(t.name));
  else
    try {
      s = n(t.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var o = Wr(s, t.form);
  return !o || o === t;
}, Yr = function(t) {
  return yn(t) && t.type === "radio";
}, qr = function(t) {
  return Yr(t) && !Vr(t);
}, Ur = function(t) {
  var r, n = t && ze(t), s = (r = n) === null || r === void 0 ? void 0 : r.host, o = !1;
  if (n && n !== t) {
    var i, a, c;
    for (o = !!((i = s) !== null && i !== void 0 && (a = i.ownerDocument) !== null && a !== void 0 && a.contains(s) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !o && s; ) {
      var l, u, p;
      n = ze(s), s = (l = n) === null || l === void 0 ? void 0 : l.host, o = !!((u = s) !== null && u !== void 0 && (p = u.ownerDocument) !== null && p !== void 0 && p.contains(s));
    }
  }
  return o;
}, zt = function(t) {
  var r = t.getBoundingClientRect(), n = r.width, s = r.height;
  return n === 0 && s === 0;
}, zr = function(t, r) {
  var n = r.displayCheck, s = r.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var o = Ae.call(t, "details>summary:first-of-type"), i = o ? t.parentElement : t;
  if (Ae.call(i, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || n === "legacy-full") {
    if (typeof s == "function") {
      for (var a = t; t; ) {
        var c = t.parentElement, l = ze(t);
        if (c && !c.shadowRoot && s(c) === !0)
          return zt(t);
        t.assignedSlot ? t = t.assignedSlot : !c && l !== t.ownerDocument ? t = l.host : t = c;
      }
      t = a;
    }
    if (Ur(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return zt(t);
  return !1;
}, Hr = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var r = t.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var n = 0; n < r.children.length; n++) {
          var s = r.children.item(n);
          if (s.tagName === "LEGEND")
            return Ae.call(r, "fieldset[disabled] *") ? !0 : !s.contains(t);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, Gr = function(t, r) {
  return !(r.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  He(r) || Fr(r) || zr(r, t) || // For a details element with a summary, the summary element gets the focus
  Br(r) || Hr(r));
}, Ht = function(t, r) {
  return !(qr(r) || bn(r) < 0 || !Gr(t, r));
}, Xr = function(t) {
  var r = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, Jr = function e(t) {
  var r = [], n = [];
  return t.forEach(function(s, o) {
    var i = !!s.scopeParent, a = i ? s.scopeParent : s, c = Mr(a, i), l = i ? e(s.candidates) : a;
    c === 0 ? i ? r.push.apply(r, l) : r.push(a) : n.push({
      documentOrder: o,
      tabIndex: c,
      item: s,
      isScope: i,
      content: l
    });
  }), n.sort(Lr).reduce(function(s, o) {
    return o.isScope ? s.push.apply(s, o.content) : s.push(o.content), s;
  }, []).concat(r);
}, En = function(t, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = Dr([t], r.includeContainer, {
    filter: Ht.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: Xr
  }) : n = Ir(t, r.includeContainer, Ht.bind(null, r)), Jr(n);
};
function Kr() {
  return /apple/i.test(navigator.vendor);
}
function Zr(e) {
  let t = e.activeElement;
  for (; ((r = t) == null || (r = r.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Qr(e, t) {
  if (!e || !t)
    return !1;
  const r = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && mt(r)) {
    let n = t;
    for (; n; ) {
      if (e === n)
        return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function Rt(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
var es = typeof document < "u", ts = function() {
}, xe = es ? rn : ts;
const ns = {
  ...P
}, rs = ns.useInsertionEffect, ss = rs || ((e) => e());
function os(e) {
  const t = P.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return ss(() => {
    t.current = e;
  }), P.useCallback(function() {
    for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++)
      n[s] = arguments[s];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
const wn = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Cn(e, t) {
  const r = En(e, wn()), n = r.length;
  if (n === 0) return;
  const s = Zr(Rt(e)), o = r.indexOf(s), i = o === -1 ? t === 1 ? 0 : n - 1 : o + t;
  return r[i];
}
function is(e) {
  return Cn(Rt(e).body, 1) || e;
}
function as(e) {
  return Cn(Rt(e).body, -1) || e;
}
function ct(e, t) {
  const r = t || e.currentTarget, n = e.relatedTarget;
  return !n || !Qr(r, n);
}
function ls(e) {
  En(e, wn()).forEach((r) => {
    r.dataset.tabindex = r.getAttribute("tabindex") || "", r.setAttribute("tabindex", "-1");
  });
}
function Gt(e) {
  e.querySelectorAll("[data-tabindex]").forEach((r) => {
    const n = r.dataset.tabindex;
    delete r.dataset.tabindex, n ? r.setAttribute("tabindex", n) : r.removeAttribute("tabindex");
  });
}
function Xt(e, t, r) {
  let {
    reference: n,
    floating: s
  } = e;
  const o = pe(t), i = vn(t), a = hn(i), c = be(t), l = o === "y", u = n.x + n.width / 2 - s.width / 2, p = n.y + n.height / 2 - s.height / 2, h = n[a] / 2 - s[a] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: u,
        y: n.y - s.height
      };
      break;
    case "bottom":
      m = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      m = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      m = {
        x: n.x - s.width,
        y: p
      };
      break;
    default:
      m = {
        x: n.x,
        y: n.y
      };
  }
  switch (tt(t)) {
    case "start":
      m[i] -= h * (r && l ? -1 : 1);
      break;
    case "end":
      m[i] += h * (r && l ? -1 : 1);
      break;
  }
  return m;
}
const cs = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: s = "absolute",
    middleware: o = [],
    platform: i
  } = r, a = o.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: u,
    y: p
  } = Xt(l, n, c), h = n, m = {}, v = 0;
  for (let b = 0; b < a.length; b++) {
    const {
      name: g,
      fn: E
    } = a[b], {
      x: R,
      y: C,
      data: S,
      reset: x
    } = await E({
      x: u,
      y: p,
      initialPlacement: n,
      placement: h,
      strategy: s,
      middlewareData: m,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = R ?? u, p = C ?? p, m = {
      ...m,
      [g]: {
        ...m[g],
        ...S
      }
    }, x && v <= 50 && (v++, typeof x == "object" && (x.placement && (h = x.placement), x.rects && (l = x.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : x.rects), {
      x: u,
      y: p
    } = Xt(l, h, c)), b = -1);
  }
  return {
    x: u,
    y: p,
    placement: h,
    strategy: s,
    middlewareData: m
  };
};
async function Rn(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: s,
    platform: o,
    rects: i,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: p = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = et(t, e), v = Pr(m), g = a[h ? p === "floating" ? "reference" : "floating" : p], E = Ue(await o.getClippingRect({
    element: (r = await (o.isElement == null ? void 0 : o.isElement(g))) == null || r ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), R = p === "floating" ? {
    x: n,
    y: s,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), S = await (o.isElement == null ? void 0 : o.isElement(C)) ? await (o.getScale == null ? void 0 : o.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = Ue(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: R,
    offsetParent: C,
    strategy: c
  }) : R);
  return {
    top: (E.top - x.top + v.top) / S.y,
    bottom: (x.bottom - E.bottom + v.bottom) / S.y,
    left: (E.left - x.left + v.left) / S.x,
    right: (x.right - E.right + v.right) / S.x
  };
}
const us = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: s,
        middlewareData: o,
        rects: i,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: p = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: b = !0,
        ...g
      } = et(e, t);
      if ((r = o.arrow) != null && r.alignmentOffset)
        return {};
      const E = be(s), R = pe(a), C = be(a) === a, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), x = h || (C || !b ? [qe(a)] : Tr(a)), D = v !== "none";
      !h && D && x.push(...$r(a, b, v, S));
      const O = [a, ...x], I = await Rn(t, g), V = [];
      let z = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && V.push(I[E]), p) {
        const H = Sr(s, i, S);
        V.push(I[H[0]], I[H[1]]);
      }
      if (z = [...z, {
        placement: s,
        overflows: V
      }], !V.every((H) => H <= 0)) {
        var K, Q;
        const H = (((K = o.flip) == null ? void 0 : K.index) || 0) + 1, B = O[H];
        if (B && (!(p === "alignment" ? R !== pe(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((k) => k.overflows[0] > 0 && pe(k.placement) === R)))
          return {
            data: {
              index: H,
              overflows: z
            },
            reset: {
              placement: B
            }
          };
        let M = (Q = z.filter((W) => W.overflows[0] <= 0).sort((W, k) => W.overflows[1] - k.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!M)
          switch (m) {
            case "bestFit": {
              var Z;
              const W = (Z = z.filter((k) => {
                if (D) {
                  const U = pe(k.placement);
                  return U === R || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((U) => U > 0).reduce((U, d) => U + d, 0)]).sort((k, U) => k[1] - U[1])[0]) == null ? void 0 : Z[0];
              W && (M = W);
              break;
            }
            case "initialPlacement":
              M = a;
              break;
          }
        if (s !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
}, fs = /* @__PURE__ */ new Set(["left", "top"]);
async function ds(e, t) {
  const {
    placement: r,
    platform: n,
    elements: s
  } = e, o = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)), i = be(r), a = tt(r), c = pe(r) === "y", l = fs.has(i) ? -1 : 1, u = o && c ? -1 : 1, p = et(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof v == "number" && (m = a === "end" ? v * -1 : v), c ? {
    x: m * u,
    y: h * l
  } : {
    x: h * l,
    y: m * u
  };
}
const ps = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: s,
        y: o,
        placement: i,
        middlewareData: a
      } = t, c = await ds(t, e);
      return i === ((r = a.offset) == null ? void 0 : r.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: s + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, ms = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: s
      } = t, {
        mainAxis: o = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x: E,
              y: R
            } = g;
            return {
              x: E,
              y: R
            };
          }
        },
        ...c
      } = et(e, t), l = {
        x: r,
        y: n
      }, u = await Rn(t, c), p = pe(be(s)), h = mn(p);
      let m = l[h], v = l[p];
      if (o) {
        const g = h === "y" ? "top" : "left", E = h === "y" ? "bottom" : "right", R = m + u[g], C = m - u[E];
        m = Yt(R, m, C);
      }
      if (i) {
        const g = p === "y" ? "top" : "left", E = p === "y" ? "bottom" : "right", R = v + u[g], C = v - u[E];
        v = Yt(R, v, C);
      }
      const b = a.fn({
        ...t,
        [h]: m,
        [p]: v
      });
      return {
        ...b,
        data: {
          x: b.x - r,
          y: b.y - n,
          enabled: {
            [h]: o,
            [p]: i
          }
        }
      };
    }
  };
};
function Sn(e) {
  const t = oe(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const s = le(e), o = s ? e.offsetWidth : r, i = s ? e.offsetHeight : n, a = Ye(r) !== o || Ye(n) !== i;
  return a && (r = o, n = i), {
    width: r,
    height: n,
    $: a
  };
}
function St(e) {
  return te(e) ? e : e.contextElement;
}
function Ce(e) {
  const t = St(e);
  if (!le(t))
    return ae(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: s,
    $: o
  } = Sn(t);
  let i = (o ? Ye(r.width) : r.width) / n, a = (o ? Ye(r.height) : r.height) / s;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const hs = /* @__PURE__ */ ae(0);
function Tn(e) {
  const t = se(e);
  return !Ct() || !t.visualViewport ? hs : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function vs(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== se(e) ? !1 : t;
}
function ye(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), o = St(e);
  let i = ae(1);
  t && (n ? te(n) && (i = Ce(n)) : i = Ce(e));
  const a = vs(o, r, n) ? Tn(o) : ae(0);
  let c = (s.left + a.x) / i.x, l = (s.top + a.y) / i.y, u = s.width / i.x, p = s.height / i.y;
  if (o) {
    const h = se(o), m = n && te(n) ? se(n) : n;
    let v = h, b = ht(v);
    for (; b && n && m !== v; ) {
      const g = Ce(b), E = b.getBoundingClientRect(), R = oe(b), C = E.left + (b.clientLeft + parseFloat(R.paddingLeft)) * g.x, S = E.top + (b.clientTop + parseFloat(R.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, p *= g.y, c += C, l += S, v = se(b), b = ht(v);
    }
  }
  return Ue({
    width: u,
    height: p,
    x: c,
    y: l
  });
}
function Tt(e, t) {
  const r = Qe(e).scrollLeft;
  return t ? t.left + r : ye(ue(e)).left + r;
}
function Nn(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), s = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Tt(e, n)
  )), o = n.top + t.scrollTop;
  return {
    x: s,
    y: o
  };
}
function gs(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: s
  } = e;
  const o = s === "fixed", i = ue(n), a = t ? Ze(t.floating) : !1;
  if (n === i || a && o)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = ae(1);
  const u = ae(0), p = le(n);
  if ((p || !p && !o) && ((Se(n) !== "body" || Pe(i)) && (c = Qe(n)), le(n))) {
    const m = ye(n);
    l = Ce(n), u.x = m.x + n.clientLeft, u.y = m.y + n.clientTop;
  }
  const h = i && !p && !o ? Nn(i, c, !0) : ae(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + u.x + h.x,
    y: r.y * l.y - c.scrollTop * l.y + u.y + h.y
  };
}
function xs(e) {
  return Array.from(e.getClientRects());
}
function bs(e) {
  const t = ue(e), r = Qe(e), n = e.ownerDocument.body, s = ge(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), o = ge(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Tt(e);
  const a = -r.scrollTop;
  return oe(n).direction === "rtl" && (i += ge(t.clientWidth, n.clientWidth) - s), {
    width: s,
    height: o,
    x: i,
    y: a
  };
}
function ys(e, t) {
  const r = se(e), n = ue(e), s = r.visualViewport;
  let o = n.clientWidth, i = n.clientHeight, a = 0, c = 0;
  if (s) {
    o = s.width, i = s.height;
    const l = Ct();
    (!l || l && t === "fixed") && (a = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: a,
    y: c
  };
}
const Es = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ws(e, t) {
  const r = ye(e, !0, t === "fixed"), n = r.top + e.clientTop, s = r.left + e.clientLeft, o = le(e) ? Ce(e) : ae(1), i = e.clientWidth * o.x, a = e.clientHeight * o.y, c = s * o.x, l = n * o.y;
  return {
    width: i,
    height: a,
    x: c,
    y: l
  };
}
function Jt(e, t, r) {
  let n;
  if (t === "viewport")
    n = ys(e, r);
  else if (t === "document")
    n = bs(ue(e));
  else if (te(t))
    n = ws(t, r);
  else {
    const s = Tn(e);
    n = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Ue(n);
}
function jn(e, t) {
  const r = me(e);
  return r === t || !te(r) || Re(r) ? !1 : oe(r).position === "fixed" || jn(r, t);
}
function Cs(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = $e(e, [], !1).filter((a) => te(a) && Se(a) !== "body"), s = null;
  const o = oe(e).position === "fixed";
  let i = o ? me(e) : e;
  for (; te(i) && !Re(i); ) {
    const a = oe(i), c = wt(i);
    !c && a.position === "fixed" && (s = null), (o ? !c && !s : !c && a.position === "static" && !!s && Es.has(s.position) || Pe(i) && !c && jn(e, i)) ? n = n.filter((u) => u !== i) : s = a, i = me(i);
  }
  return t.set(e, n), n;
}
function Rs(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: s
  } = e;
  const i = [...r === "clippingAncestors" ? Ze(t) ? [] : Cs(t, this._c) : [].concat(r), n], a = i[0], c = i.reduce((l, u) => {
    const p = Jt(t, u, s);
    return l.top = ge(p.top, l.top), l.right = Ve(p.right, l.right), l.bottom = Ve(p.bottom, l.bottom), l.left = ge(p.left, l.left), l;
  }, Jt(t, a, s));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ss(e) {
  const {
    width: t,
    height: r
  } = Sn(e);
  return {
    width: t,
    height: r
  };
}
function Ts(e, t, r) {
  const n = le(t), s = ue(t), o = r === "fixed", i = ye(e, !0, o, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ae(0);
  function l() {
    c.x = Tt(s);
  }
  if (n || !n && !o)
    if ((Se(t) !== "body" || Pe(s)) && (a = Qe(t)), n) {
      const m = ye(t, !0, o, t);
      c.x = m.x + t.clientLeft, c.y = m.y + t.clientTop;
    } else s && l();
  o && !n && s && l();
  const u = s && !n && !o ? Nn(s, a) : ae(0), p = i.left + a.scrollLeft - c.x - u.x, h = i.top + a.scrollTop - c.y - u.y;
  return {
    x: p,
    y: h,
    width: i.width,
    height: i.height
  };
}
function ut(e) {
  return oe(e).position === "static";
}
function Kt(e, t) {
  if (!le(e) || oe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return ue(e) === r && (r = r.ownerDocument.body), r;
}
function On(e, t) {
  const r = se(e);
  if (Ze(e))
    return r;
  if (!le(e)) {
    let s = me(e);
    for (; s && !Re(s); ) {
      if (te(s) && !ut(s))
        return s;
      s = me(s);
    }
    return r;
  }
  let n = Kt(e, t);
  for (; n && hr(n) && ut(n); )
    n = Kt(n, t);
  return n && Re(n) && ut(n) && !wt(n) ? r : n || yr(e) || r;
}
const Ns = async function(e) {
  const t = this.getOffsetParent || On, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Ts(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function js(e) {
  return oe(e).direction === "rtl";
}
const Os = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gs,
  getDocumentElement: ue,
  getClippingRect: Rs,
  getOffsetParent: On,
  getElementRects: Ns,
  getClientRects: xs,
  getDimensions: Ss,
  getScale: Ce,
  isElement: te,
  isRTL: js
};
function $n(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function $s(e, t) {
  let r = null, n;
  const s = ue(e);
  function o() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), r = null;
  }
  function i(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), o();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: p,
      width: h,
      height: m
    } = l;
    if (a || t(), !h || !m)
      return;
    const v = Le(p), b = Le(s.clientWidth - (u + h)), g = Le(s.clientHeight - (p + m)), E = Le(u), C = {
      rootMargin: -v + "px " + -b + "px " + -g + "px " + -E + "px",
      threshold: ge(0, Ve(1, c)) || 1
    };
    let S = !0;
    function x(D) {
      const O = D[0].intersectionRatio;
      if (O !== c) {
        if (!S)
          return i();
        O ? i(!1, O) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !$n(l, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      r = new IntersectionObserver(x, {
        ...C,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(x, C);
    }
    r.observe(e);
  }
  return i(!0), o;
}
function An(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = St(e), u = s || o ? [...l ? $e(l) : [], ...$e(t)] : [];
  u.forEach((E) => {
    s && E.addEventListener("scroll", r, {
      passive: !0
    }), o && E.addEventListener("resize", r);
  });
  const p = l && a ? $s(l, r) : null;
  let h = -1, m = null;
  i && (m = new ResizeObserver((E) => {
    let [R] = E;
    R && R.target === l && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var C;
      (C = m) == null || C.observe(t);
    })), r();
  }), l && !c && m.observe(l), m.observe(t));
  let v, b = c ? ye(e) : null;
  c && g();
  function g() {
    const E = ye(e);
    b && !$n(b, E) && r(), b = E, v = requestAnimationFrame(g);
  }
  return r(), () => {
    var E;
    u.forEach((R) => {
      s && R.removeEventListener("scroll", r), o && R.removeEventListener("resize", r);
    }), p == null || p(), (E = m) == null || E.disconnect(), m = null, c && cancelAnimationFrame(v);
  };
}
const As = ps, Ps = ms, ks = us, _s = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), s = {
    platform: Os,
    ...r
  }, o = {
    ...s.platform,
    _c: n
  };
  return cs(e, t, {
    ...s,
    platform: o
  });
};
var Is = typeof document < "u", Ds = function() {
}, Be = Is ? rn : Ds;
function Ge(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Ge(e[n], t[n]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), r = s.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const o = s[n];
      if (!(o === "_owner" && e.$$typeof) && !Ge(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Pn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zt(e, t) {
  const r = Pn(e);
  return Math.round(t * r) / r;
}
function ft(e) {
  const t = P.useRef(e);
  return Be(() => {
    t.current = e;
  }), t;
}
function Ms(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: s,
    elements: {
      reference: o,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, p] = P.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, m] = P.useState(n);
  Ge(h, n) || m(n);
  const [v, b] = P.useState(null), [g, E] = P.useState(null), R = P.useCallback((k) => {
    k !== D.current && (D.current = k, b(k));
  }, []), C = P.useCallback((k) => {
    k !== O.current && (O.current = k, E(k));
  }, []), S = o || v, x = i || g, D = P.useRef(null), O = P.useRef(null), I = P.useRef(u), V = c != null, z = ft(c), K = ft(s), Q = ft(l), Z = P.useCallback(() => {
    if (!D.current || !O.current)
      return;
    const k = {
      placement: t,
      strategy: r,
      middleware: h
    };
    K.current && (k.platform = K.current), _s(D.current, O.current, k).then((U) => {
      const d = {
        ...U,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Q.current !== !1
      };
      H.current && !Ge(I.current, d) && (I.current = d, sn.flushSync(() => {
        p(d);
      }));
    });
  }, [h, t, r, K, Q]);
  Be(() => {
    l === !1 && I.current.isPositioned && (I.current.isPositioned = !1, p((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [l]);
  const H = P.useRef(!1);
  Be(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Be(() => {
    if (S && (D.current = S), x && (O.current = x), S && x) {
      if (z.current)
        return z.current(S, x, Z);
      Z();
    }
  }, [S, x, Z, z, V]);
  const B = P.useMemo(() => ({
    reference: D,
    floating: O,
    setReference: R,
    setFloating: C
  }), [R, C]), M = P.useMemo(() => ({
    reference: S,
    floating: x
  }), [S, x]), W = P.useMemo(() => {
    const k = {
      position: r,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return k;
    const U = Zt(M.floating, u.x), d = Zt(M.floating, u.y);
    return a ? {
      ...k,
      transform: "translate(" + U + "px, " + d + "px)",
      ...Pn(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: U,
      top: d
    };
  }, [r, a, M.floating, u.x, u.y]);
  return P.useMemo(() => ({
    ...u,
    update: Z,
    refs: B,
    elements: M,
    floatingStyles: W
  }), [u, Z, B, M, W]);
}
const kn = (e, t) => ({
  ...As(e),
  options: [e, t]
}), _n = (e, t) => ({
  ...Ps(e),
  options: [e, t]
}), In = (e, t) => ({
  ...ks(e),
  options: [e, t]
}), Ls = {
  ...P
};
let Qt = !1, Fs = 0;
const en = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Fs++
);
function Bs() {
  const [e, t] = P.useState(() => Qt ? en() : void 0);
  return xe(() => {
    e == null && t(en());
  }, []), P.useEffect(() => {
    Qt = !0;
  }, []), e;
}
const Ws = Ls.useId, Dn = Ws || Bs;
let xt;
process.env.NODE_ENV !== "production" && (xt = /* @__PURE__ */ new Set());
function Vs() {
  for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  const s = "Floating UI: " + r.join(" ");
  if (!((e = xt) != null && e.has(s))) {
    var o;
    (o = xt) == null || o.add(s), console.error(s);
  }
}
function Ys() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((s) => s(r));
    },
    on(t, r) {
      e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(r);
    },
    off(t, r) {
      var n;
      (n = e.get(t)) == null || n.delete(r);
    }
  };
}
const qs = /* @__PURE__ */ P.createContext(null), Us = /* @__PURE__ */ P.createContext(null), zs = () => {
  var e;
  return ((e = P.useContext(qs)) == null ? void 0 : e.id) || null;
}, Hs = () => P.useContext(Us);
function Mn(e) {
  return "data-floating-ui-" + e;
}
const Ln = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
}, tn = /* @__PURE__ */ P.forwardRef(function(t, r) {
  const [n, s] = P.useState();
  xe(() => {
    Kr() && s("button");
  }, []);
  const o = {
    ref: r,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: n,
    "aria-hidden": n ? void 0 : !0,
    [Mn("focus-guard")]: "",
    style: Ln
  };
  return /* @__PURE__ */ f.jsx("span", {
    ...t,
    ...o
  });
}), Fn = /* @__PURE__ */ P.createContext(null), nn = /* @__PURE__ */ Mn("portal");
function Gs(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: r
  } = e, n = Dn(), s = Xs(), [o, i] = P.useState(null), a = P.useRef(null);
  return xe(() => () => {
    o == null || o.remove(), queueMicrotask(() => {
      a.current = null;
    });
  }, [o]), xe(() => {
    if (!n || a.current) return;
    const c = t ? document.getElementById(t) : null;
    if (!c) return;
    const l = document.createElement("div");
    l.id = n, l.setAttribute(nn, ""), c.appendChild(l), a.current = l, i(l);
  }, [t, n]), xe(() => {
    if (r === null || !n || a.current) return;
    let c = r || (s == null ? void 0 : s.portalNode);
    c && !te(c) && (c = c.current), c = c || document.body;
    let l = null;
    t && (l = document.createElement("div"), l.id = t, c.appendChild(l));
    const u = document.createElement("div");
    u.id = n, u.setAttribute(nn, ""), c = l || c, c.appendChild(u), a.current = u, i(u);
  }, [t, r, n, s]), o;
}
function Bn(e) {
  const {
    children: t,
    id: r,
    root: n,
    preserveTabOrder: s = !0
  } = e, o = Gs({
    id: r,
    root: n
  }), [i, a] = P.useState(null), c = P.useRef(null), l = P.useRef(null), u = P.useRef(null), p = P.useRef(null), h = i == null ? void 0 : i.modal, m = i == null ? void 0 : i.open, v = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!i && // Guards are only for non-modal focus management.
    !i.modal && // Don't render if unmount is transitioning.
    i.open && s && !!(n || o)
  );
  return P.useEffect(() => {
    if (!o || !s || h)
      return;
    function b(g) {
      o && ct(g) && (g.type === "focusin" ? Gt : ls)(o);
    }
    return o.addEventListener("focusin", b, !0), o.addEventListener("focusout", b, !0), () => {
      o.removeEventListener("focusin", b, !0), o.removeEventListener("focusout", b, !0);
    };
  }, [o, s, h]), P.useEffect(() => {
    o && (m || Gt(o));
  }, [m, o]), /* @__PURE__ */ f.jsxs(Fn.Provider, {
    value: P.useMemo(() => ({
      preserveTabOrder: s,
      beforeOutsideRef: c,
      afterOutsideRef: l,
      beforeInsideRef: u,
      afterInsideRef: p,
      portalNode: o,
      setFocusManagerState: a
    }), [s, o]),
    children: [v && o && /* @__PURE__ */ f.jsx(tn, {
      "data-type": "outside",
      ref: c,
      onFocus: (b) => {
        if (ct(b, o)) {
          var g;
          (g = u.current) == null || g.focus();
        } else {
          const E = i ? i.domReference : null, R = as(E);
          R == null || R.focus();
        }
      }
    }), v && o && /* @__PURE__ */ f.jsx("span", {
      "aria-owns": o.id,
      style: Ln
    }), o && /* @__PURE__ */ sn.createPortal(t, o), v && o && /* @__PURE__ */ f.jsx(tn, {
      "data-type": "outside",
      ref: l,
      onFocus: (b) => {
        if (ct(b, o)) {
          var g;
          (g = p.current) == null || g.focus();
        } else {
          const E = i ? i.domReference : null, R = is(E);
          R == null || R.focus(), i != null && i.closeOnFocusOut && (i == null || i.onOpenChange(!1, b.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const Xs = () => P.useContext(Fn);
function Js(e) {
  const {
    open: t = !1,
    onOpenChange: r,
    elements: n
  } = e, s = Dn(), o = P.useRef({}), [i] = P.useState(() => Ys()), a = zs() != null;
  if (process.env.NODE_ENV !== "production") {
    const m = n.reference;
    m && !te(m) && Vs("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, l] = P.useState(n.reference), u = os((m, v, b) => {
    o.current.openEvent = m ? v : void 0, i.emit("openchange", {
      open: m,
      event: v,
      reason: b,
      nested: a
    }), r == null || r(m, v, b);
  }), p = P.useMemo(() => ({
    setPositionReference: l
  }), []), h = P.useMemo(() => ({
    reference: c || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [c, n.reference, n.floating]);
  return P.useMemo(() => ({
    dataRef: o,
    open: t,
    onOpenChange: u,
    elements: h,
    events: i,
    floatingId: s,
    refs: p
  }), [t, u, h, i, s, p]);
}
function Wn(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, r = Js({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), n = e.rootContext || r, s = n.elements, [o, i] = P.useState(null), [a, c] = P.useState(null), u = (s == null ? void 0 : s.domReference) || o, p = P.useRef(null), h = Hs();
  xe(() => {
    u && (p.current = u);
  }, [u]);
  const m = Ms({
    ...e,
    elements: {
      ...s,
      ...a && {
        reference: a
      }
    }
  }), v = P.useCallback((C) => {
    const S = te(C) ? {
      getBoundingClientRect: () => C.getBoundingClientRect(),
      getClientRects: () => C.getClientRects(),
      contextElement: C
    } : C;
    c(S), m.refs.setReference(S);
  }, [m.refs]), b = P.useCallback((C) => {
    (te(C) || C === null) && (p.current = C, i(C)), (te(m.refs.reference.current) || m.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    C !== null && !te(C)) && m.refs.setReference(C);
  }, [m.refs]), g = P.useMemo(() => ({
    ...m.refs,
    setReference: b,
    setPositionReference: v,
    domReference: p
  }), [m.refs, b, v]), E = P.useMemo(() => ({
    ...m.elements,
    domReference: u
  }), [m.elements, u]), R = P.useMemo(() => ({
    ...m,
    ...n,
    refs: g,
    elements: E,
    nodeId: t
  }), [m, g, E, t, n]);
  return xe(() => {
    n.dataRef.current.floatingContext = R;
    const C = h == null ? void 0 : h.nodesRef.current.find((S) => S.id === t);
    C && (C.context = R);
  }), P.useMemo(() => ({
    ...m,
    context: R,
    refs: g,
    elements: E
  }), [m, g, E, R]);
}
const Po = ({
  onSelect: e = () => {
  },
  ...t
}) => {
  const {
    target: r = null,
    options: n = [],
    selectedValue: s = null,
    boxType: o = "dropdown",
    placeholder: i = "선택하세요",
    isSearch: a = !1,
    useIcon: c = !1,
    multiple: l = !1,
    maxOptHeight: u = 260,
    selectedType: p = "bg",
    optionKey: h = "option",
    resultKey: m = "val",
    isAll: v = !1,
    fluid: b = !1,
    compact: g = !1,
    disabled: E = !1
  } = t, R = fe(null), C = fe(null), [S, x] = G(!1), { refs: D, floatingStyles: O } = Wn({
    placement: "bottom-start",
    whileElementsMounted: An,
    middleware: [kn(10), In(), _n()],
    open: S,
    onOpenChange: x
  }), [I, V] = G(null), [z, K] = G([]), [Q, Z] = G(null), H = ee(() => {
    if (l)
      return z.length > 0 ? `${z.length}개 선택` : null;
    {
      const w = n.findIndex((A) => A[m] === I);
      return n[w] ? n[w][h] : null;
    }
  }, [l, m, h, n, I, z]), B = ee(() => a && Q ? n.filter((w) => w[h].toLowerCase().indexOf(Q.toLowerCase()) > -1) : n, [a, Q, h, n]), M = ee(() => {
    if (u)
      return { maxHeight: `${u}px` };
  }, [u]), W = Fe(() => {
    l ? (K(s || []), V(s ? `${s.length}개 선택` : null)) : V(s);
  }, [l, s]);
  re(() => {
    W();
  }, [W]), re(() => (window.addEventListener("click", () => k(!1)), window.removeEventListener("click", () => k(!1))));
  const k = (w = !0) => {
    var A, L;
    (A = R.current) != null && A.contains(event.target) || (L = C.current) != null && L.contains(event.target) || (S && (w = !1), x(w));
  }, U = (w) => {
    l ? d(w) : (Z(null), V(w[m]), e(w[m], r));
  }, d = (w) => {
    const A = new Set(z);
    A.has(w[m]) ? A.delete(w[m]) : A.add(w[m]), K([...A]), e([...A], r);
  }, y = () => {
    const w = [...B].map((A) => A[m]);
    K(w), e(w, r);
  }, N = () => {
    l && S || x(!S);
  }, $ = ({ target: w }) => {
    console.log(w.value), Z(w.value);
  }, T = [
    o,
    l && "multiple",
    b && "fluid",
    g && "compact",
    E && "disabled"
  ].filter((w) => !!w).join(" ");
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `be-select-box ${T} ${S ? "show" : ""}`,
      ref: R,
      onClick: N,
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "selected-item", ref: D.setReference, children: [
          a ? /* @__PURE__ */ f.jsx("div", { className: `be-input icon right ${E} ${I ? "has" : ""}`, children: /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              placeholder: H || i,
              readOnly: !a || !S,
              onChange: $
            }
          ) }) : /* @__PURE__ */ f.jsx("div", { className: `default-text ${I ? "has" : ""}`, children: H || i }),
          S && l ? /* @__PURE__ */ f.jsx(
            "i",
            {
              className: "icon xi-close",
              style: { pointerEvents: "auto" },
              onClick: (w) => {
                w.stopPropagation(), x(!1);
              }
            }
          ) : /* @__PURE__ */ f.jsx("i", { className: "icon xi-angle-down" })
        ] }),
        S && /* @__PURE__ */ f.jsx(Bn, { children: /* @__PURE__ */ f.jsx("div", { className: "be-popper-container", ref: D.setFloating, style: O, children: /* @__PURE__ */ f.jsx(Je, { nodeRef: C, in: S, timeout: 250, classNames: "extend-fade", children: /* @__PURE__ */ f.jsx("div", { ref: C, className: "select-menu be-popper", style: { ...M, width: `${R.current.clientWidth}px` }, children: /* @__PURE__ */ f.jsx("div", { className: `be-list selection ${p}`, children: a && B.length === 0 ? /* @__PURE__ */ f.jsx("div", { className: "no-searched", children: "검색 결과가 없습니다." }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          v && l && /* @__PURE__ */ f.jsx("div", { className: "item option-item", onClick: y, children: "전체" }),
          B.map((w, A) => /* @__PURE__ */ f.jsxs(
            "div",
            {
              className: `item option-item ${w[m] === I ? "selected" : ""} ${z.includes(w[m]) ? "include" : ""}
                          `,
              onClick: () => U(w),
              children: [
                c && /* @__PURE__ */ f.jsx("i", { className: `list-icon icon ${w.icon}` }),
                /* @__PURE__ */ f.jsx("div", { className: "item-title", children: w[h] })
              ]
            },
            `option-${A}`
          ))
        ] }) }) }) }) }) }),
        /* @__PURE__ */ f.jsx("style", { jsx: !0, children: `
        .be-select-box .option-item.item {33333
          padding: 1rem;
        }
        .be-select-box .select-menu {
          transform: translateY(0);
        }
        .extend-fade-enter {
            opacity: 0;
            transform: translateY(-10px);
        }
        .extend-fade-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 500ms, transform 500ms;
        }
        .extend-fade-exit {
            opacity: 1;
            transform: translateY(0);
        }
        .extend-fade-exit-active {
            opacity: 0;
            transform: translateY(-10px);
            transition: opacity 500ms, transform 500ms;
        }
      ` })
      ]
    }
  );
}, ko = ({
  children: e,
  onSelectTab: t = () => {
  },
  tabList: r = [],
  directType: n = "horizontal",
  tabType: s = null,
  selected: o = null
}) => {
  const i = Xe(e, ["nav", "contents"]), [a, c] = G(o), l = [
    n,
    s
  ].filter((p) => !!p).join(" "), u = (p) => {
    c(p.option), t(p.option);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: `be-tabs ${l}`, children: [
    i.nav || /* @__PURE__ */ f.jsx("div", { className: "tab-menu", children: r.map((p) => /* @__PURE__ */ f.jsx(
      "div",
      {
        className: `tab-item tab ${a === p.option ? "active" : ""}`,
        onClick: () => u(p),
        children: p.option
      }
    )) }),
    i.contents || /* @__PURE__ */ f.jsx("div", { className: "tab-contents", children: a })
  ] });
}, Vn = ({
  node: e = null,
  level: t = 0,
  useCheck: r = !1,
  useMark: n = !1,
  check: s = !1
}) => {
  var u, p;
  const [o, i] = G(!1), [a, c] = G(s), l = (h) => {
    h.target.tagName !== "LABEL" && i(!o);
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `be-tree ${o ? "show" : ""}`,
      style: { "--level": t },
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "node custom-node", onClick: l, children: /* @__PURE__ */ f.jsxs("div", { className: "node-title", children: [
          n && /* @__PURE__ */ f.jsx("i", { className: `icon expend-icon ${((u = e.children) == null ? void 0 : u.length) > 0 ? "xi-caret-down-min" : ""}` }),
          /* @__PURE__ */ f.jsxs("div", { className: "node-label", children: [
            r && /* @__PURE__ */ f.jsx(yt, { checked: a, onChange: (h) => c(h) }),
            /* @__PURE__ */ f.jsx("div", { className: "title", children: e.label }),
            e.sub && /* @__PURE__ */ f.jsx("div", { className: "sub-title", children: e.sub })
          ] })
        ] }) }),
        o && ((p = e.children) == null ? void 0 : p.length) > 0 && /* @__PURE__ */ f.jsx("div", { className: "node-children", children: e.children.map((h, m) => /* @__PURE__ */ f.jsx(
          Vn,
          {
            node: h,
            level: t + 1,
            useCheck: r,
            useMark: n,
            check: s
          },
          `level-${t}-${m + 1}`
        )) })
      ]
    }
  );
}, _o = ({
  children: e,
  treeList: t = [],
  userClass: r = "",
  useCheck: n = !1,
  useMark: s = !1
}) => /* @__PURE__ */ f.jsx("div", { className: `be-tree-list ${r}`, children: e || /* @__PURE__ */ f.jsx(f.Fragment, { children: t.map((o, i) => /* @__PURE__ */ f.jsx(
  Vn,
  {
    node: o,
    level: 1,
    useCheck: n,
    useMark: s,
    check: !1
  },
  `level-${i + 1}`
)) }) }), Oe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], bt = (e = /* @__PURE__ */ new Date()) => {
  const t = typeof e == "string" ? new Date(e) : e, r = t.getFullYear(), n = t.getMonth() + 1, s = t.getDate();
  return { year: r, month: n, date: s };
}, Ks = (e, t) => {
  let r = 0;
  const n = 365 * (e - 1), s = Math.floor((e - 1) / 4) - Math.floor((e - 1) / 100) + Math.floor((e - 1) / 400);
  let o = 1;
  t > 1 && e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0) ? Oe[1] = 29 : Oe[1] = 28;
  for (let i = 0; i < t - 1; i++)
    o += Oe[i];
  return r = (n + s + o) % 7, r;
}, Zs = (e) => {
  const { year: t, month: r, date: n = 1 } = e, s = bt(), o = Ks(t, r), i = [], a = Oe[r - 1], c = r === 1 ? 31 : Oe[r - 2];
  let l = 1, u = 1;
  for (let p = 0; p < 6; p++)
    for (let h = 0; h < 7; h++) {
      const m = {
        position: {
          x: 0,
          y: 0
        },
        disabled: !1,
        type: [],
        name: ""
      };
      m.position.x = h, m.position.y = p, p === 0 && h < o ? (m.type.push("prev"), m.name = c + (h - o) + 1) : l <= a ? (h === 0 && m.type.push("sun"), h === 6 && m.type.push("sat"), s.year === t && s.month === r && l === s.date && m.type.push("today"), m.name = l, l++) : (m.type.push("next"), m.name = u, u++), i.push(m);
    }
  return u > 7 ? i.slice(0, -7) : i;
}, Qs = ["일", "월", "화", "수", "목", "금", "토"], eo = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일"
], to = ["S", "M", "T", "W", "T", "F", "S"], no = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], ro = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Yn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], so = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "Jun.",
  "Jul.",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec."
], oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MONTH_TEXT_LIST: Yn,
  MONTH_TEXT_LIST_SHORT: so,
  WEEK_LONG_EN: ro,
  WEEK_LONG_KR: eo,
  WEEK_MIDDLE_EN: no,
  WEEK_SHORT_EN: to,
  WEEK_SHORT_KR: Qs
}, Symbol.toStringTag, { value: "Module" })), io = ({
  children: e,
  onSelect: t = () => {
  },
  selectedDate: r = /* @__PURE__ */ new Date(),
  cellSize: n = "37px",
  border: s = !1,
  lang: o = "EN",
  contentType: i = "MIDDLE",
  today: a = !1
}) => {
  const c = oo[`WEEK_${i}_${o}`], l = Yn, [u, p] = G(null), [h, m] = G(null), [v, b] = G([]), g = Xe(e, ["current", "control", "extra"]), E = ee(() => (v == null ? void 0 : v.length) / 7, [v]);
  re(() => {
    const O = typeof r == "string" ? new Date(r) : r;
    p(bt(O)), m(bt(O));
  }, []), re(() => {
    if (u) {
      const O = Zs(u);
      b(O);
    }
  }, [u]);
  const R = () => {
    u.month === 1 ? p({ ...u, year: u.year - 1, month: 12 }) : p({ ...u, month: u.month - 1 });
  }, C = () => {
    u.month === 12 ? p({ ...u, year: u.year + 1, month: 1 }) : p({ ...u, month: u.month + 1 });
  }, S = (O) => {
    const { year: I, month: V } = u;
    p({ ...u, date: O }), m({
      year: I,
      month: V,
      date: O
    }), t(new Date(I, V - 1, O));
  }, x = (O) => {
    if (u && h)
      return u.year === h.year && u.month === h.month && u.date === O;
  }, D = () => {
    p(setDateInfo()), m(setDateInfo());
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `be-calendar ${s ? "border" : ""}`,
      style: { "--cell-size": n },
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "calendar-header", children: [
          g.current || /* @__PURE__ */ f.jsxs("div", { className: "current-date", children: [
            /* @__PURE__ */ f.jsx("span", { className: "month", children: l[(u == null ? void 0 : u.month) - 1] }),
            /* @__PURE__ */ f.jsx("span", { className: "year", children: u == null ? void 0 : u.year })
          ] }),
          g.control || /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
            /* @__PURE__ */ f.jsx("div", { className: "prev-month be-button text icon small", onClick: R, children: /* @__PURE__ */ f.jsx("i", { className: "icon xi-angle-left" }) }),
            /* @__PURE__ */ f.jsx("div", { className: "next-month be-button text icon small", onClick: C, children: /* @__PURE__ */ f.jsx("i", { className: "icon xi-angle-right" }) })
          ] }),
          a && /* @__PURE__ */ f.jsx(
            "div",
            {
              className: "be-button tiny circle outline deepblue",
              onClick: D,
              children: "Today"
            }
          )
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "week-wrapper", children: c.map((O, I) => /* @__PURE__ */ f.jsx("div", { className: "cell week-cell", "data-name": O }, `week-${O}-${I}`)) }),
        /* @__PURE__ */ f.jsx("div", { className: "cell-wrapper", style: { "--cell-rows": E }, children: v.map((O, I) => /* @__PURE__ */ f.jsx(
          "div",
          {
            className: `cell ${O.type} ${x(O.name) ? "selected" : ""}`,
            style: { "--x": O.position.x, "--y": O.position.y },
            q: !0,
            "data-name": O.name,
            onClick: () => S(O.name)
          },
          `day-${I}`
        )) }),
        /* @__PURE__ */ f.jsx("div", { className: "calendar-footer", children: g.extra })
      ]
    }
  );
}, Io = ({
  selectedDate: e = null,
  updateChange: t = () => {
  }
}) => {
  const r = fe(), n = fe(), [s, o] = G(e || /* @__PURE__ */ new Date()), [i, a] = G(!1), { refs: c, floatingStyles: l } = Wn({
    placement: "bottom-start",
    whileElementsMounted: An,
    middleware: [kn(10), In(), _n()],
    open: i,
    onOpenChange: a
  }), u = ee(() => {
    if (!s) return;
    const v = s.getFullYear(), b = s.getMonth() + 1, g = s.getDate();
    return `${v}.${String(b).padStart(2, "0")}.${String(g).padStart(2, "0")}`;
  }, [s]);
  re(() => {
    const v = typeof e == "string" ? new Date(e) : e;
    o(v);
  }, [e]), re(() => (window.addEventListener("click", () => p(!1)), window.removeEventListener("click", () => p(!1))));
  const p = (v = !0) => {
    var b, g;
    (b = r.current) != null && b.contains(event.target) || (g = n.current) != null && g.contains(event.target) || (i && (v = !1), a(v));
  }, h = () => a(!i), m = (v) => {
    o(v), t(v);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "be-date-picker", ref: r, children: [
    /* @__PURE__ */ f.jsx("div", { className: "default-date-text", ref: c.setReference, onClick: h, children: /* @__PURE__ */ f.jsxs("div", { className: "be-button", children: [
      u,
      " ",
      i
    ] }) }),
    i && /* @__PURE__ */ f.jsx(Bn, { children: /* @__PURE__ */ f.jsx(
      "div",
      {
        className: "be-popper-container",
        ref: c.setFloating,
        style: l,
        children: /* @__PURE__ */ f.jsx(Je, { nodeRef: n, in: i, timeout: 250, classNames: "extend-fade", children: /* @__PURE__ */ f.jsx("div", { className: "calender-wrapper be-popper", ref: n, children: /* @__PURE__ */ f.jsx(io, { selectedDate: s, onSelect: m }) }) })
      }
    ) })
  ] });
}, Do = ({ children: e }) => /* @__PURE__ */ f.jsx(f.Fragment, { children: e }), Mo = ({
  children: e,
  type: t = "push",
  direct: r = "left",
  sideWidth: n = 250,
  minSideWidth: s = 0,
  isShow: o = !0,
  duration: i = 500
}) => {
  const a = Xe(e, ["side", "main"]), [c, l] = G(o), [u, p] = G("desktop");
  re(() => {
    function v() {
      const b = navigator.userAgent;
      /mobile/i.test(b) ? p("mobile") : /tablet|ipad|playbook|silk/i.test(b) ? p("tablet") : p("desktop");
    }
    return v(), window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, []);
  const h = ee(() => u === "mobile" ? "overlay" : t, [u, t]);
  re(() => {
    l(o);
  }, [o]);
  const m = [
    r
  ].filter((v) => !!v).join(" ");
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `slide-side-layout ${m} ${h} ${u} ${c ? "show" : "hide"}`,
      style: { "--dur": i },
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "side-pane", style: { "--side": n, "--min-side": s }, children: a.side || "Side" }),
        /* @__PURE__ */ f.jsx("div", { className: "main-pane", children: a.main || "Main" })
      ]
    }
  );
};
export {
  bo as BeBadge,
  Jn as BeButton,
  co as BeButtons,
  io as BeCalendar,
  jo as BeCard,
  yt as BeCheckbox,
  yo as BeCheckboxGroup,
  Io as BeDatePicker,
  vo as BeForm,
  po as BeGrid,
  uo as BeInput,
  fo as BeInputNumber,
  Oo as BeList,
  wo as BeMessage,
  $o as BePagination,
  Co as BePanel,
  Eo as BeRadios,
  No as BeSegment,
  Po as BeSelectbox,
  Ao as BeSlider,
  Ro as BeSwitch,
  So as BeTable,
  ko as BeTabs,
  To as BeTag,
  _o as BeTree,
  Vn as BeTreeNode,
  ho as Column,
  xo as Field,
  go as Fields,
  mo as Rows,
  Mo as SlideSideLayout,
  Do as Slot,
  Xe as createSlots
};
//# sourceMappingURL=be-ui.es.js.map
