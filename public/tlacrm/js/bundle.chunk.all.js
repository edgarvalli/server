(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    325: function(e, t, a) {
      e.exports = a(604);
    },
    489: function(e, t) {},
    491: function(e, t) {},
    526: function(e, t) {},
    527: function(e, t) {},
    599: function(e, t) {},
    602: function(e, t, a) {},
    603: function(e, t) {
      var a, n;
      "undefined" !== typeof document.hidden
        ? ((a = "hidden"), (n = "visibilitychange"))
        : "undefined" !== typeof document.mozHidden
        ? ((a = "mozHidden"), (n = "mozvisibilitychange"))
        : "undefined" !== typeof document.msHidden
        ? ((a = "msHidden"), (n = "msvisibilitychange"))
        : "undefined" !== typeof document.webkitHidden &&
          ((a = "webkitHidden"), (n = "webkitvisibilitychange")),
        document.addEventListener(
          n,
          function() {
            document[a] ||
              (navigator.userAgent.includes("mobile") &&
                window.location.reload());
          },
          !1
        );
    },
    604: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        i = a(34),
        o = a.n(i),
        s = a(15),
        c = a(16),
        l = a(18),
        u = a(17),
        m = a(19),
        p = a(1),
        d =
          localStorage.getItem("session") || sessionStorage.getItem("session"),
        h = (JSON.parse(d), "https://ev-server.ddns.net"),
        f = h + "/api/tlacrm",
        g =
          "BH54HR9NEeTIQ36JskmMCoKMsM1EseYPAEv7O575VrgJ9xtXW3gh8nVO23PVwNWB8CDUCypLRBGU9jCiXkQVUZY",
        v = localStorage;
      null === v.getItem("user") && (v = sessionStorage);
      var b = JSON.parse(v.getItem("user"));
      window.addEventListener("scroll", function() {
        var e = document.querySelector("#navigation-bar");
        if (null === e) return null;
        window.pageYOffset > e.offsetTop
          ? e.classList.add("sticky")
          : e.classList.remove("sticky");
      });
      var E = function() {
          return r.a.createElement(
            p.i,
            { open: !1, fullScreen: !0 },
            r.a.createElement(
              "div",
              { className: "searchview-bar" },
              r.a.createElement("input", { type: "text" })
            )
          );
        },
        y = function(e) {
          return r.a.createElement(
            "div",
            { className: "main-navbar bg-color-primary" },
            r.a.createElement(
              "header",
              null,
              r.a.createElement(p.b, { src: f + "/get-avatar/" + b._id }),
              r.a.createElement(
                "h4",
                { id: "title", style: { color: "#ffffff" } },
                v.getItem("option-label")
              ),
              r.a.createElement(
                "span",
                null,
                r.a.createElement(
                  p.p,
                  { style: { color: "#ffffff", cursor: "pointer" } },
                  "search"
                ),
                r.a.createElement(
                  p.p,
                  { style: { color: "#ffffff", cursor: "pointer" } },
                  "more_vert"
                )
              )
            ),
            r.a.createElement(
              "nav",
              { id: "navigation-bar" },
              r.a.createElement(
                "ul",
                null,
                [
                  { label: "Inicio", icon: "home", path: "Home" },
                  { label: "Clientes", icon: "group", path: "Clients" },
                  {
                    label: "Presupuestos",
                    icon: "speaker_notes",
                    path: "Budgets"
                  },
                  { label: "Trabajos", icon: "work", path: "Jobs" }
                ].map(function(t, a) {
                  return r.a.createElement(
                    "li",
                    {
                      key: t.path + a,
                      onClick: function() {
                        return (function(t) {
                          v.setItem("option-label", t.label),
                            (document.getElementById("title").innerText =
                              t.label),
                            e.navigation.goMain(t.path);
                        })(t);
                      }
                    },
                    r.a.createElement(p.p, null, t.icon),
                    r.a.createElement("span", null, t.label)
                  );
                })
              )
            ),
            r.a.createElement(E, null)
          );
        },
        x = function(e) {
          return r.a.createElement(
            p.a,
            null,
            r.a.createElement(
              p.z,
              null,
              r.a.createElement(
                p.p,
                {
                  onClick: function() {
                    return e.navigation.goBack();
                  }
                },
                "arrow_back"
              ),
              r.a.createElement(
                p.A,
                {
                  variant: "h6",
                  style: { flexGrow: 1, marginLeft: "2rem", color: "#FFFFFF" }
                },
                e.navbarParams.title
              )
            )
          );
        },
        k = function(e) {
          return e.route.length <= 1
            ? r.a.createElement(y, e)
            : r.a.createElement(x, e);
        },
        w = a(32),
        C = r.a.memo(
          function(e) {
            var t = Object(n.useState)("flex"),
              a = Object(w.a)(t, 2),
              i = a[0],
              o = a[1],
              s = Object(n.useState)("Cargando...."),
              c = Object(w.a)(s, 2),
              l = c[0],
              u = c[1];
            return (
              Object(n.useEffect)(
                function() {
                  e.show ? o("flex") : o("none"),
                    e.title ? u(l) : u("Cargando....");
                },
                [i, l, e]
              ),
              r.a.createElement(
                "div",
                { className: "loader", style: { display: i } },
                r.a.createElement(p.h, {
                  variant: "indeterminate",
                  color: "primary"
                }),
                r.a.createElement(
                  p.A,
                  { variant: "caption", style: { marginLeft: 20 } },
                  l || e.title
                )
              )
            );
          },
          function(e, t) {
            return e === t;
          }
        ),
        j = a(3),
        S = a.n(j),
        O = a(9),
        N = a(95),
        I = a(260),
        P = new (a.n(I)).a(
          "ckUQU!@YtN%8Phtp9tXtC6W96PeV8Kd4mcMpB==Bs9JUK8B=*JKNX!C$K%3a"
        ),
        A = localStorage;
      "true" === sessionStorage.getItem("isLogginIn") && (A = sessionStorage);
      var L = {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            token: A.getItem("token")
          }
        },
        T = function() {
          var e = "=".repeat((4 - (g.length % 4)) % 4),
            t = (g + e).replace(/_/g, "/"),
            a = window.atob(t);
          return Uint8Array.from(
            Object(N.a)(a).map(function(e) {
              return e.charCodeAt(0);
            })
          );
        };
      function _() {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = Object(O.a)(
          S.a.mark(function e() {
            var t, a, n;
            return S.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = T()),
                      (a = h + "/webpush/subscribe"),
                      (e.next = 4),
                      window.reg.pushManager
                        .subscribe({
                          userVisibleOnly: !0,
                          applicationServerKey: t
                        })
                        .catch(function(e) {
                          return console.log(
                            "Error to subscribe to push manager ".concat(e)
                          );
                        })
                    );
                  case 4:
                    return (
                      (n = e.sent),
                      (L.body = JSON.stringify(n)),
                      (L.method = "post"),
                      (e.next = 9),
                      fetch(a, L)
                    );
                  case 9:
                    window.location.reload();
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var M = (function() {
          var e = Object(O.a)(
            S.a.mark(function e(t) {
              var a, n;
              return S.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          fetch("".concat(f).concat(t), L)
                        );
                      case 3:
                        return (a = e.sent), (e.next = 6), a.json();
                      case 6:
                        return (n = e.sent), e.abrupt("return", n);
                      case 10:
                        return (
                          (e.prev = 10),
                          (e.t0 = e.catch(0)),
                          e.t0.message,
                          e.abrupt("return", {
                            error: !0,
                            message: "Servidor fuera de linea"
                          })
                        );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 10]]
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        J = {
          subscribeNotificacion: function(e) {
            e.error ||
              Notification.requestPermission().then(
                (function() {
                  var e = Object(O.a)(
                    S.a.mark(function e(t) {
                      return S.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("granted" !== t) {
                                e.next = 3;
                                break;
                              }
                              return (e.next = 3), _();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
          },
          login: (function() {
            var e = Object(O.a)(
              S.a.mark(function e(t, a, n) {
                var r, i, o;
                return S.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("".concat(f, "/users/login"), {
                              method: "post",
                              body: JSON.stringify({
                                username: t,
                                password: a,
                                autoLogin: n
                              }),
                              headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                              }
                            })
                          );
                        case 2:
                          if ((r = e.sent).ok) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return", {
                            error: !0,
                            message: r.statusText
                          });
                        case 5:
                          return (e.next = 7), r.json();
                        case 7:
                          if (!(i = e.sent).error) {
                            e.next = 10;
                            break;
                          }
                          return e.abrupt("return", i);
                        case 10:
                          return (
                            (o = JSON.stringify({
                              autoLogin: n,
                              _id: i.user._id,
                              avatar: i.user.avatar,
                              profile: i.user.profile,
                              displayName: i.user.name,
                              username: i.user.username,
                              password: n ? P.encrypt(a) : ""
                            })),
                            (A = n ? localStorage : sessionStorage).setItem(
                              "token",
                              i.token
                            ),
                            A.setItem("user", o),
                            A.setItem("isLoggedIn", !0),
                            A.setItem("current-view", "Home"),
                            this.subscribeNotificacion(i),
                            e.abrupt("return", i)
                          );
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t, a, n) {
              return e.apply(this, arguments);
            };
          })(),
          autoLogin: (function() {
            var e = Object(O.a)(
              S.a.mark(function e() {
                var t, a, n, r, i;
                return S.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((t = JSON.parse(A.getItem("user"))).autoLogin) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", {
                          error: !0,
                          message: "No se puede regenerar el token"
                        });
                      case 3:
                        return (
                          (a = t.username),
                          (n = P.decrypt(t.password)),
                          (e.next = 7),
                          fetch(f + "/users/login", {
                            method: "post",
                            headers: {
                              "Content-Type": "Application/Json",
                              Accept: "Application/Json"
                            },
                            body: JSON.stringify({
                              username: a,
                              password: n,
                              autoLogin: !0
                            })
                          })
                        );
                      case 7:
                        if (!((r = e.sent).status >= 400)) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt("return", console.log(r.statusText));
                      case 10:
                        return (e.next = 12), r.json();
                      case 12:
                        if (!(i = e.sent).error) {
                          e.next = 15;
                          break;
                        }
                        return e.abrupt("return", i);
                      case 15:
                        return (
                          A.setItem("token", i.token),
                          e.abrupt("return", i.token)
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function() {
              return e.apply(this, arguments);
            };
          })(),
          Upload: (function() {
            var e = Object(O.a)(
              S.a.mark(function e(t, a) {
                var n;
                return S.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (L.headers["Content-Type"] = "multipart/form-data"),
                            (L.method = "post"),
                            (L.body = a),
                            (e.next = 5),
                            M(t)
                          );
                        case 5:
                          if (!(n = e.sent).tokenExpired) {
                            e.next = 13;
                            break;
                          }
                          return (e.next = 9), this.autoLogin();
                        case 9:
                          return (
                            (L.headers.token = e.sent), (e.next = 12), M(t)
                          );
                        case 12:
                          n = e.sent;
                        case 13:
                          return e.abrupt("return", n);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t, a) {
              return e.apply(this, arguments);
            };
          })(),
          Get: (function() {
            var e = Object(O.a)(
              S.a.mark(function e(t) {
                var a, n;
                return S.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (L.method = "get"),
                            L.body && delete L.body,
                            (e.next = 4),
                            M(t)
                          );
                        case 4:
                          if (!(a = e.sent).tokenExpired) {
                            e.next = 17;
                            break;
                          }
                          return (e.next = 8), this.autoLogin();
                        case 8:
                          if (!(n = e.sent).error) {
                            e.next = 13;
                            break;
                          }
                          return e.abrupt("return", n);
                        case 13:
                          return (L.headers.token = n), (e.next = 16), M(t);
                        case 16:
                          a = e.sent;
                        case 17:
                          return e.abrupt("return", a);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })(),
          Put: (function() {
            var e = Object(O.a)(
              S.a.mark(function e(t, a) {
                var n, r;
                return S.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (L.method = "put"),
                            (L.body = JSON.stringify(a)),
                            (e.next = 4),
                            M(t)
                          );
                        case 4:
                          if (!(n = e.sent).tokenExpired) {
                            e.next = 17;
                            break;
                          }
                          return (e.next = 8), this.autoLogin();
                        case 8:
                          if (!(r = e.sent).error) {
                            e.next = 13;
                            break;
                          }
                          return e.abrupt("return", r);
                        case 13:
                          return (L.headers.token = r), (e.next = 16), M(t);
                        case 16:
                          n = e.sent;
                        case 17:
                          return e.abrupt("return", n);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t, a) {
              return e.apply(this, arguments);
            };
          })(),
          Post: (function() {
            var e = Object(O.a)(
              S.a.mark(function e(t, a) {
                var n, r;
                return S.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (L.method = "post"),
                            (L.body = JSON.stringify(a)),
                            (e.next = 4),
                            M(t)
                          );
                        case 4:
                          if (!(n = e.sent).tokenExpired) {
                            e.next = 17;
                            break;
                          }
                          return (e.next = 8), this.autoLogin();
                        case 8:
                          if (!(r = e.sent).error) {
                            e.next = 13;
                            break;
                          }
                          return e.abrupt("return", r);
                        case 13:
                          return (L.headers.token = r), (e.next = 16), M(t);
                        case 16:
                          n = e.sent;
                        case 17:
                          return e.abrupt("return", n);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t, a) {
              return e.apply(this, arguments);
            };
          })(),
          Delete: (function() {
            var e = Object(O.a)(
              S.a.mark(function e(t) {
                var a, n;
                return S.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (L.method = "delete"),
                            L.body && delete L.body,
                            (e.next = 4),
                            M(t)
                          );
                        case 4:
                          if (!(a = e.sent).tokenExpired) {
                            e.next = 17;
                            break;
                          }
                          return (e.next = 8), this.autoLogin();
                        case 8:
                          if (!(n = e.sent).error) {
                            e.next = 13;
                            break;
                          }
                          return e.abrupt("return", n);
                        case 13:
                          return (L.headers.token = n), (e.next = 16), M(t);
                        case 16:
                          a = e.sent;
                        case 17:
                          return e.abrupt("return", a);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })()
        },
        B = {
          container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            position: "fixed"
          },
          msg: { color: "grey" }
        },
        F = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { open: !1, imageFile: null }),
              (a.position = 1),
              (a.canvas = null),
              (a.ctx = null),
              (a.img = null),
              (a.canvasRef = function(e) {
                null !== e &&
                  ((a.canvas = e),
                  (a.ctx = a.canvas.getContext("2d")),
                  a.renderImagePreview());
              }),
              (a.rotate = function() {
                var e = a.canvas.width,
                  t = a.canvas.height;
                switch (
                  (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height),
                  a.ctx.save(),
                  a.position)
                ) {
                  case 0:
                    a.ctx.drawImage(a.img, 0, 0, e, t), (a.position = 1);
                    break;
                  case 1:
                    a.ctx.translate(e / 2, t / 2),
                      a.ctx.rotate((90 * Math.PI) / 180),
                      a.ctx.translate(-t / 2, -e / 2),
                      a.ctx.drawImage(a.img, 0, 0, t, e),
                      (a.position = 2);
                    break;
                  case 2:
                    a.ctx.translate(e / 2, t / 2),
                      a.ctx.rotate((180 * Math.PI) / 180),
                      a.ctx.translate(-e / 2, -t / 2),
                      a.ctx.drawImage(a.img, 0, 0, e, t),
                      (a.position = 3);
                    break;
                  case 3:
                    a.ctx.translate(e / 2, t / 2),
                      a.ctx.rotate((270 * Math.PI) / 180),
                      a.ctx.translate(-t / 2, -e / 2),
                      a.ctx.drawImage(a.img, 0, 0, t, e),
                      (a.position = 0);
                    break;
                  default:
                    alert("nothing to di");
                }
                a.ctx.restore();
              }),
              (a.handleClose = function() {
                return a.setState({ open: !1 });
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  null !== e &&
                    this.setState({ open: e.open, imageFile: e.imageFile });
                }
              },
              {
                key: "renderImagePreview",
                value: function() {
                  var e = this;
                  if (null !== this.canvas) {
                    var t = document.querySelector("#pic");
                    (t.src = window.URL.createObjectURL(this.state.imageFile)),
                      (t.onload = function() {
                        (e.img = t),
                          (e.ctx = e.canvas.getContext("2d")),
                          e.ctx.drawImage(
                            t,
                            0,
                            0,
                            e.canvas.width,
                            e.canvas.height
                          );
                      });
                  }
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state.open;
                  return r.a.createElement(
                    p.i,
                    {
                      open: t,
                      onClose: this.handleClose,
                      "aria-labelledby": "alert-dialog-title",
                      "aria-describedby": "alert-dialog-description",
                      style: { height: "60vh", width: "80wh" }
                    },
                    r.a.createElement(
                      p.k,
                      { itemRef: "dialog-el" },
                      r.a.createElement("img", {
                        id: "pic",
                        alt: "pc",
                        width: "800",
                        height: "400",
                        style: { display: "none" }
                      }),
                      r.a.createElement("canvas", {
                        ref: this.canvasRef,
                        id: this.props.id,
                        style: { width: "100%", height: "100%" }
                      })
                    ),
                    r.a.createElement(
                      p.j,
                      null,
                      r.a.createElement(p.c, { onClick: this.rotate }, "Rotar"),
                      r.a.createElement(
                        p.c,
                        {
                          onClick: function() {
                            var t = e.canvas.toDataURL();
                            e.props.onSave(t);
                          }
                        },
                        "Guardar"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        V = k,
        W = C,
        U = function(e) {
          var t = e.date ? new Date(e.date) : new Date();
          return (
            (t = t.toLocaleString("es-MX")),
            r.a.createElement(
              p.q,
              null,
              r.a.createElement(
                p.r,
                null,
                r.a.createElement(
                  p.s,
                  null,
                  r.a.createElement(p.b, null, e.clientName[0])
                ),
                r.a.createElement(
                  p.v,
                  { secondary: t },
                  r.a.createElement(p.A, null, e.clientName)
                )
              )
            )
          );
        },
        R = function(e) {
          return r.a.createElement(
            "span",
            { className: "fab-fixed" },
            r.a.createElement(
              p.m,
              {
                color: "primary",
                "aria-label": "Add",
                onClick: function() {
                  return e.onClick();
                }
              },
              r.a.createElement(p.p, null, "add")
            )
          );
        },
        q = function(e) {
          return r.a.createElement(
            "div",
            { style: B.container },
            r.a.createElement("h5", { style: B.msg }, e.message)
          );
        },
        G = F,
        H = function(e) {
          var t = "";
          return r.a.createElement(
            p.i,
            { open: e.open, onClose: e.onClose },
            r.a.createElement(p.l, null, "Nueva contrase\xf1a"),
            r.a.createElement(
              p.k,
              null,
              r.a.createElement(p.y, {
                type: "password",
                label: "Contrase\xf1a",
                onChange: function(a) {
                  (t = a.target.value),
                    e.onChange && e.onChange(a.target.value);
                }
              })
            ),
            r.a.createElement(
              p.j,
              null,
              r.a.createElement(p.c, { onClick: e.onClose }, "Cancelar"),
              r.a.createElement(
                p.c,
                {
                  onClick: function() {
                    return e.onSave(t);
                  }
                },
                "Cambiar"
              )
            )
          );
        },
        z = function(e) {
          var t = e.inputs,
            a = void 0 === t ? [] : t,
            n = e.onChange,
            i =
              void 0 === n
                ? function() {
                    return null;
                  }
                : n,
            o = e.values,
            s = void 0 === o ? {} : o;
          return r.a.createElement(
            "div",
            null,
            a.map(function(e, t) {
              return r.a.createElement(p.y, {
                key: t + "__" + e.key,
                value: s[e.key] || "",
                type: s[e.type || "text"],
                label: e.label || "Input",
                onChange: function(a) {
                  var n = a.target;
                  return i(e.key, n.value, t);
                },
                fullWidth: !0,
                required: e.required || !1,
                tabIndex: 1,
                autoComplete: e.autoComplete || "off"
              });
            })
          );
        },
        $ = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                show: !1,
                username: "",
                password: "",
                autoLogin: !1
              }),
              (a.login = (function() {
                var e = Object(O.a)(
                  S.a.mark(function e(t) {
                    var n, r, i, o, s;
                    return S.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              a.setState({ show: !0 }),
                              (n = a.state),
                              (r = n.username),
                              (i = n.password),
                              (o = n.autoLogin),
                              (e.next = 5),
                              J.login(r, i, o)
                            );
                          case 5:
                            if (
                              ((s = e.sent), a.setState({ show: !1 }), !s.error)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", alert(s.message));
                          case 9:
                            window.location.reload();
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })()),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    a = t.show,
                    n = t.username,
                    i = t.password;
                  return r.a.createElement(
                    p.o,
                    {
                      container: !0,
                      justify: "center",
                      alignItems: "center",
                      style: { height: "100vh" }
                    },
                    r.a.createElement(W, { show: a }),
                    r.a.createElement(
                      "form",
                      { onSubmit: this.login },
                      r.a.createElement("div", { className: "bg-login" }),
                      r.a.createElement(
                        p.d,
                        { style: { width: "90%", margin: "auto" } },
                        r.a.createElement(p.g, null),
                        r.a.createElement(
                          p.f,
                          null,
                          r.a.createElement(p.y, {
                            label: "Usuario",
                            fullWidth: !0,
                            value: n || "",
                            onChange: function(t) {
                              return e.setState({ username: t.target.value });
                            },
                            tabIndex: 1
                          }),
                          r.a.createElement(p.y, {
                            label: "Contrase\xf1a",
                            type: "password",
                            fullWidth: !0,
                            value: i || "",
                            onChange: function(t) {
                              return e.setState({ password: t.target.value });
                            },
                            tabIndex: 2
                          })
                        ),
                        r.a.createElement(
                          p.e,
                          null,
                          r.a.createElement(
                            p.o,
                            { container: !0 },
                            r.a.createElement(p.o, { item: !0, xs: 3 }),
                            r.a.createElement(
                              p.o,
                              { item: !0, xs: 6 },
                              r.a.createElement(p.n, {
                                control: r.a.createElement(p.x, {
                                  value: !0,
                                  color: "primary",
                                  onChange: function(t) {
                                    return e.setState({
                                      autoLogin: t.target.checked
                                    });
                                  }
                                }),
                                label: "Auto Login",
                                tabIndex: 3
                              })
                            ),
                            r.a.createElement(p.o, { item: !0, xs: 3 }),
                            r.a.createElement(
                              p.o,
                              { item: !0, xs: 12 },
                              r.a.createElement(
                                p.c,
                                {
                                  fullWidth: !0,
                                  variant: "contained",
                                  color: "primary",
                                  type: "submit"
                                },
                                "Login"
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        X = function(e) {
          var t = e.client,
            a = void 0 === t ? {} : t,
            n = e.onClose,
            i = e.open,
            o = void 0 !== i && i,
            s = function(e) {
              return window.open("tel:".concat(e));
            };
          return r.a.createElement(
            p.i,
            { open: o, onClose: n },
            r.a.createElement(p.l, null, "Elige que numero marcar"),
            r.a.createElement(
              p.k,
              null,
              r.a.createElement(
                p.A,
                {
                  onClick: function() {
                    return s(a.cellphone || "");
                  }
                },
                a.cellphone || ""
              ),
              a.phone &&
                r.a.createElement(
                  p.A,
                  {
                    onClick: function() {
                      return s(a.phone || "");
                    },
                    style: { marginTop: 10 }
                  },
                  a.phone || ""
                )
            )
          );
        },
        K = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).watcher = null),
              (a.navigation = a.props.navigation),
              (a.state = {
                clients: [],
                loading: !0,
                messageError: "",
                openPhoneDialog: !1,
                clientSelected: {}
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  this.navigation.setNavbarParams({
                    type: "parent",
                    moreMenu: !0,
                    placeholder: "Buscar Clientes",
                    onSearch: function(t) {
                      e.setState({ loading: !0 }),
                        clearTimeout(e.watcher),
                        (e.watcher = setTimeout(
                          Object(O.a)(
                            S.a.mark(function a() {
                              var n;
                              return S.a.wrap(function(a) {
                                for (;;)
                                  switch ((a.prev = a.next)) {
                                    case 0:
                                      if ("" !== t) {
                                        a.next = 6;
                                        break;
                                      }
                                      return (
                                        (a.next = 3),
                                        J.Get("/clients/fetch/50/0")
                                      );
                                    case 3:
                                      (n = a.sent), (a.next = 9);
                                      break;
                                    case 6:
                                      return (
                                        (a.next = 8),
                                        J.Get("/clients/search/" + t)
                                      );
                                    case 8:
                                      n = a.sent;
                                    case 9:
                                      if (!n.error) {
                                        a.next = 11;
                                        break;
                                      }
                                      return a.abrupt(
                                        "return",
                                        e.setState({
                                          loading: !1,
                                          messageError: n.message
                                        })
                                      );
                                    case 11:
                                      e.setState({
                                        loading: !1,
                                        clients: n.clients
                                      });
                                    case 12:
                                    case "end":
                                      return a.stop();
                                  }
                              }, a);
                            })
                          ),
                          500
                        ));
                    }
                  }),
                    this.fetchClients();
                }
              },
              {
                key: "fetchClients",
                value: (function() {
                  var e = Object(O.a)(
                    S.a.mark(function e() {
                      var t;
                      return S.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), J.Get("/clients/fetch/50/0")
                                );
                              case 2:
                                if (!(t = e.sent).error) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.setState({
                                    loading: !1,
                                    messageError: t.message
                                  })
                                );
                              case 5:
                                this.setState({
                                  clients: t.clients,
                                  loading: !1
                                });
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    a = t.loading,
                    n = t.clients,
                    i = t.messageError,
                    o = t.openPhoneDialog,
                    s = t.clientSelected,
                    c = ["#303f9f", "#f44336", "#7b1fa2", "#388e3c", "#ffeb3b"];
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(W, { show: a }),
                    r.a.createElement(X, {
                      open: o,
                      onClose: function() {
                        e.setState({ openPhoneDialog: !1 });
                      },
                      client: s
                    }),
                    n.length > 0
                      ? r.a.createElement(
                          p.q,
                          null,
                          n.map(function(t) {
                            var a = Math.floor(Math.random() * c.length),
                              n = { background: c[a] };
                            return r.a.createElement(
                              p.r,
                              {
                                key: t._id,
                                alignItems: "flex-start",
                                onClick: function() {
                                  e.navigation.go("ClientForm", {
                                    action: "update",
                                    client: t
                                  });
                                }
                              },
                              r.a.createElement(
                                p.s,
                                null,
                                r.a.createElement(p.b, { style: n }, t.name[0])
                              ),
                              r.a.createElement(p.v, {
                                style: { borderBottom: "solid thin #e1e1e1" },
                                primary: t.name,
                                secondary: r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement(
                                    p.A,
                                    {
                                      component: "span",
                                      variant: "subheading",
                                      color: "textSecondary"
                                    },
                                    t.cellphone
                                  )
                                )
                              }),
                              r.a.createElement(
                                p.u,
                                { style: { marginRight: 10 } },
                                r.a.createElement(
                                  p.p,
                                  {
                                    color: "action",
                                    onClick: function() {
                                      return e.setState({
                                        openPhoneDialog: !0,
                                        clientSelected: t
                                      });
                                    }
                                  },
                                  "phone"
                                )
                              )
                            );
                          })
                        )
                      : r.a.createElement(q, { message: i }),
                    r.a.createElement(R, {
                      onClick: function() {
                        return e.navigation.go("ClientForm", { action: "add" });
                      }
                    })
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        Y = {
          baseInputs: [
            { key: "name", type: "text", label: "Nombre", required: !0 },
            { key: "cellphone", label: "Celular", type: "tel", required: !0 },
            { key: "phone", label: "Telefono", type: "tel" },
            { key: "address", label: "Direcci\xf3n" },
            { key: "hood", label: "Colonia" },
            { key: "county", label: "Municipio" },
            { key: "state", label: "Estado" },
            { key: "country", label: "Pais" },
            { key: "zip", label: "Codigo Postal", type: "number" }
          ],
          invoices: [
            { key: "rfc", label: "RFC" },
            { key: "forma_de_pago", label: "Forma de Pago" },
            { key: "uso_de_factura", label: "Uso de factura" }
          ]
        },
        Q = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).params = a.props.navigation.getParams()),
              (a.state = {
                values: {},
                loader: !0,
                fetchError: { status: !1, message: "" }
              }),
              (a.handleChange = function(e, t) {
                var n = a.state.values;
                (n[e] = t), a.setState({ values: n });
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.navigation;
                  e.setNavbarParams({
                    child: !0,
                    parentView: "Clients",
                    title: "Datos Clientes"
                  }),
                    "update" === e.getParams().action
                      ? this.setState({
                          loader: !1,
                          values: this.params.client
                        })
                      : this.setState({ loader: !1 });
                }
              },
              {
                key: "handleSubmit",
                value: function(e) {
                  e.preventDefault(),
                    "update" === this.props.navigation.getParams().action
                      ? this.updateClient()
                      : this.addClient();
                }
              },
              {
                key: "updateClient",
                value: (function() {
                  var e = Object(O.a)(
                    S.a.mark(function e() {
                      var t, a, n;
                      return S.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (t = this.state.values),
                                  delete (a = { id: t._id, data: t }).data._id,
                                  (e.next = 6),
                                  J.Put("/clients", a)
                                );
                              case 6:
                                if (!(n = e.sent).error) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("return", alert(n.message));
                              case 9:
                                this.props.navigation.go("Clients"),
                                  (e.next = 15);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0);
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 12]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "addClient",
                value: (function() {
                  var e = Object(O.a)(
                    S.a.mark(function e() {
                      var t, a;
                      return S.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (t = this.state.values),
                                  (e.next = 4),
                                  J.Post("/clients", { client: t })
                                );
                              case 4:
                                if (!(a = e.sent).error) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return", alert(a.message));
                              case 7:
                                this.props.navigation.go("Clients"),
                                  (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0);
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 10]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    "div",
                    { className: "container padding-1" },
                    this.state.fetchError.status
                      ? r.a.createElement(q, {
                          message: this.state.fetchError.message
                        })
                      : r.a.createElement(
                          "form",
                          {
                            onSubmit: function(t) {
                              return e.handleSubmit(t);
                            }
                          },
                          r.a.createElement(
                            p.o,
                            { container: !0, spacing: 16 },
                            r.a.createElement(W, { show: this.state.loader }),
                            r.a.createElement(
                              p.o,
                              { item: !0, xs: 12 },
                              r.a.createElement(z, {
                                values: this.state.values,
                                inputs: Y.baseInputs,
                                onChange: this.handleChange
                              })
                            ),
                            r.a.createElement(
                              p.o,
                              { item: !0, xs: 12 },
                              r.a.createElement(p.n, {
                                control: r.a.createElement(p.x, {
                                  checked: this.state.values.invoiceInfo || !1,
                                  color: "default",
                                  value: "invoiceInfo",
                                  onChange: function(t) {
                                    var a = t.target;
                                    return e.handleChange(
                                      "invoiceInfo",
                                      a.checked
                                    );
                                  }
                                }),
                                label: "Datos de factura",
                                tabIndex: 1
                              })
                            ),
                            r.a.createElement(
                              p.o,
                              { item: !0, xs: 12 },
                              this.state.values.invoiceInfo &&
                                r.a.createElement(z, {
                                  values: this.state.values,
                                  inputs: Y.invoices,
                                  onChange: this.handleChange
                                })
                            ),
                            r.a.createElement(
                              p.o,
                              { xs: 12, item: !0 },
                              r.a.createElement(
                                p.c,
                                {
                                  variant: "contained",
                                  color: "inherit",
                                  fullWidth: !0,
                                  type: "submit"
                                },
                                "Enviar"
                              )
                            )
                          )
                        )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        Z = a(611),
        ee = Object(Z.a)({
          flatCard: {
            padding: ".5rem",
            borderBottomStyle: "solid",
            borderBottomWidth: 1,
            borderBottomColor: "#e1e1e1",
            minHeight: "8rem"
          },
          mt: { marginTop: ".5rem" }
        });
      var te = function(e) {
          var t = ee(),
            a = r.a.useState(e.budget.budgetDescription || ""),
            n = Object(w.a)(a, 2),
            i = n[0],
            o = n[1],
            s = r.a.useState(!1),
            c = Object(w.a)(s, 2),
            l = c[0],
            u = c[1],
            m = r.a.useState(e.budget.visited || !1),
            d = Object(w.a)(m, 2),
            h = d[0],
            f = d[1],
            g = function() {
              return r.a.createElement(
                p.o,
                null,
                r.a.createElement(
                  p.c,
                  { color: "default", disabled: h },
                  h ? "Visitado" : "Sin Visitar"
                ),
                r.a.createElement(
                  p.c,
                  {
                    color: "primary",
                    onClick: function() {
                      e.navigation.go("BudgetComments", { budget: e.budget });
                    }
                  },
                  "Comentarios"
                ),
                r.a.createElement(
                  p.c,
                  {
                    color: "primary",
                    onClick: function() {
                      return u(!0);
                    }
                  },
                  "Editar"
                )
              );
            },
            v = function() {
              return r.a.createElement(
                p.o,
                null,
                r.a.createElement(
                  p.c,
                  {
                    variant: "contained",
                    color: "primary",
                    onClick: Object(O.a)(
                      S.a.mark(function t() {
                        return S.a.wrap(function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  J.Put("/budgets/update", {
                                    id: e.budget._id,
                                    data: { budgetDescription: i, visited: h }
                                  })
                                );
                              case 2:
                                u(!1);
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    )
                  },
                  "Guardar"
                )
              );
            };
          return r.a.createElement(
            p.o,
            { container: !0, className: t.flatCard },
            r.a.createElement(
              p.o,
              { xs: 2, item: !0 },
              r.a.createElement(p.b, null, e.budget.clientName[0])
            ),
            r.a.createElement(
              p.o,
              { xs: 10, item: !0 },
              r.a.createElement(
                p.o,
                { container: !0 },
                r.a.createElement(
                  p.o,
                  { xs: 12, item: !0 },
                  r.a.createElement(
                    p.A,
                    { variant: "button" },
                    e.budget.clientName
                  )
                ),
                r.a.createElement(
                  p.o,
                  { xs: 12, item: !0 },
                  r.a.createElement(
                    p.A,
                    { variant: "subtitle2", color: "textSecondary" },
                    new Date(e.budget.createDate).toLocaleString("es-MX")
                  )
                ),
                r.a.createElement(
                  p.o,
                  { xs: 12, item: !0, className: t.mt },
                  l
                    ? r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(p.y, {
                          label: "Editar informaci\xf3n del presupuesto",
                          value: i,
                          rows: "4",
                          variant: "outlined",
                          multiline: !0,
                          fullWidth: !0,
                          onChange: function(e) {
                            var t = e.target;
                            return o(t.value);
                          }
                        }),
                        r.a.createElement(p.n, {
                          label: "Visitado",
                          control: r.a.createElement(p.x, {
                            value: "visited",
                            onChange: function(e) {
                              var t = e.target;
                              return f(t.checked);
                            },
                            color: "primary",
                            checked: h
                          })
                        })
                      )
                    : r.a.createElement(
                        p.o,
                        { container: !0 },
                        r.a.createElement(
                          p.o,
                          { item: !0, xs: 12 },
                          r.a.createElement(
                            p.A,
                            { paragraph: !0 },
                            i.split("\n").map(function(e, t) {
                              return r.a.createElement(
                                "span",
                                { key: e + t },
                                e,
                                " ",
                                r.a.createElement("br", null)
                              );
                            })
                          )
                        )
                      )
                ),
                r.a.createElement(
                  p.o,
                  { xs: 12, item: !0 },
                  r.a.createElement(function() {
                    return l
                      ? r.a.createElement(v, null)
                      : r.a.createElement(g, null);
                  }, null)
                )
              )
            )
          );
        },
        ae = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { budgets: [], show: !0, errorMessage: "" }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  this.props.navigation.setNavbarParams({
                    type: "parent",
                    title: "Presupuestos",
                    placeholder: "Buscar Presupuesto",
                    onSearch: function(t) {
                      e.setState({ loading: !0 }),
                        clearTimeout(e.watcher),
                        (e.watcher = setTimeout(
                          Object(O.a)(
                            S.a.mark(function a() {
                              var n;
                              return S.a.wrap(function(a) {
                                for (;;)
                                  switch ((a.prev = a.next)) {
                                    case 0:
                                      if ("" !== t) {
                                        a.next = 6;
                                        break;
                                      }
                                      return (
                                        (a.next = 3),
                                        J.Get("/budgets/fetch/50/0")
                                      );
                                    case 3:
                                      (n = a.sent), (a.next = 9);
                                      break;
                                    case 6:
                                      return (
                                        (a.next = 8),
                                        J.Get("/budgets/search/" + t)
                                      );
                                    case 8:
                                      n = a.sent;
                                    case 9:
                                      if (!n.error) {
                                        a.next = 11;
                                        break;
                                      }
                                      return a.abrupt(
                                        "return",
                                        e.setState({
                                          loading: !1,
                                          messageError: n.message
                                        })
                                      );
                                    case 11:
                                      e.setState({
                                        loading: !1,
                                        budgets: n.budgets
                                      });
                                    case 12:
                                    case "end":
                                      return a.stop();
                                  }
                              }, a);
                            })
                          ),
                          500
                        ));
                    }
                  }),
                    this.fetchBudgets();
                }
              },
              {
                key: "fetchBudgets",
                value: (function() {
                  var e = Object(O.a)(
                    S.a.mark(function e() {
                      var t;
                      return S.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), J.Get("/budgets/fetch/50/0")
                                );
                              case 2:
                                (t = e.sent),
                                  Array.isArray(t.budgets) || (t.budgets = []),
                                  t.error
                                    ? this.setState({
                                        show: !1,
                                        errorMessage: t.messange
                                      })
                                    : this.setState({
                                        budgets: t.budgets,
                                        show: !1
                                      });
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      p.o,
                      {
                        container: !0,
                        spacing: 16,
                        style: { marginBottom: "3rem" }
                      },
                      r.a.createElement(W, { show: this.state.show }),
                      this.state.budgets
                        .map(function(t) {
                          return r.a.createElement(
                            p.o,
                            { item: !0, xs: 12, key: t._id },
                            r.a.createElement(
                              te,
                              Object.assign({ ctx: e, budget: t }, e.props)
                            )
                          );
                        })
                        .reverse()
                    ),
                    r.a.createElement(R, {
                      onClick: function() {
                        return e.props.navigation.go("SelectClient", {
                          parentView: "Budgets",
                          childView: "AddBudget"
                        });
                      }
                    })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ne = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { budgets: [], values: {} }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.navigation,
                    t = e.setNavbarParams,
                    a = e.getParams;
                  t({
                    title: "Agregar Presupuestos",
                    child: !0,
                    parentView: "SelectClient",
                    params: { parentView: "Budgets", childView: "AddBudget" }
                  }),
                    this.setState({
                      values: {
                        clientId: a()._id,
                        clientName: a().name,
                        clientCellphone: a().cellphone,
                        budgetDescription: ""
                      }
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state.values;
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(U, { clientName: t.clientName || "" }),
                    r.a.createElement("textarea", {
                      className: "add-budget",
                      rows: "4",
                      placeholder: "Agregar Informaci\xf3n del presupuesto",
                      required: !0,
                      value: t.budgetDescription,
                      onChange: function(a) {
                        var n = a.target;
                        (t.budgetDescription = n.value),
                          e.setState({ values: t });
                      },
                      ref: "textbox"
                    }),
                    r.a.createElement(
                      "div",
                      { className: "fab-fixed" },
                      r.a.createElement(
                        p.m,
                        {
                          "ev-target": "add",
                          color: "primary",
                          onClick: Object(O.a)(
                            S.a.mark(function a() {
                              var n;
                              return S.a.wrap(function(a) {
                                for (;;)
                                  switch ((a.prev = a.next)) {
                                    case 0:
                                      if ("" === t.budgetDescription) {
                                        a.next = 9;
                                        break;
                                      }
                                      return (
                                        (a.next = 3),
                                        J.Post("/budgets/save", { budget: t })
                                      );
                                    case 3:
                                      if (!(n = a.sent).error) {
                                        a.next = 6;
                                        break;
                                      }
                                      return a.abrupt(
                                        "return",
                                        alert(n.message)
                                      );
                                    case 6:
                                      e.props.navigation.go("Budgets"),
                                        (a.next = 10);
                                      break;
                                    case 9:
                                      alert(
                                        "Debe de llenar la informaci\xf3n solicitada"
                                      );
                                    case 10:
                                    case "end":
                                      return a.stop();
                                  }
                              }, a);
                            })
                          )
                        },
                        r.a.createElement(p.p, null, "check")
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        re = a(264),
        ie = a.n(re)()(h + "/tlacrm", { query: { room: "budgets" } }),
        oe = function(e) {
          return r.a.createElement(
            p.d,
            null,
            r.a.createElement(p.g, {
              avatar: r.a.createElement(p.b, { src: e.avatar }),
              title: e.username,
              subheader: e.createDate
            }),
            r.a.createElement(
              p.f,
              null,
              e.comment.split("\n").map(function(e, t) {
                return r.a.createElement(p.A, { key: e + t }, e);
              })
            )
          );
        },
        se = function(e) {
          if (e.comments.length > 0) {
            return e.comments
              .map(function(e, t) {
                return r.a.createElement(oe, {
                  key: e.username + t,
                  username: e.username,
                  comment: e.comment,
                  createDate: ((a = e.createDate),
                  void 0 === a ? "" : new Date(a).toLocaleString("es-MX")),
                  avatar: f + "/get-avatar/" + (e.userId || 1)
                });
                var a;
              })
              .reverse();
          }
          return r.a.createElement("div", null);
        },
        ce = function(e) {
          var t = setTimeout(function() {
            return ie.emit("client_stop_typing");
          }, 3e3);
          return r.a.createElement(
            "div",
            { className: "add-comment-input" },
            r.a.createElement(p.y, {
              defaultValue: e.value,
              label: "Agrega un comentario",
              onChange: function() {
                clearTimeout(t),
                  ie.emit("client_typing", { user: e.username }),
                  (t = setTimeout(function() {
                    return ie.emit("client_stop_typing");
                  }, 3e3));
              },
              id: "comment-input"
            }),
            r.a.createElement(
              p.p,
              {
                style: { marginRight: 10, cursor: "pointer" },
                onClick: function() {
                  var t = document.querySelector("#comment-input").value;
                  if ("" === t)
                    return alert("No debes dejar el comentario en blanco");
                  ie.emit("add_commnet", {
                    id: e.budgetId,
                    comment: { comment: t, username: e.username, userId: e.id }
                  }),
                    (document.querySelector("#comment-input").value = "");
                }
              },
              "send"
            )
          );
        },
        le = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).store = window.localStorage),
              (a.user = {}),
              (a.handleTyping = ""),
              (a.state = {
                typing: "",
                comment: "",
                comments: [],
                clientName: "",
                budgetDescription: "",
                createDate: "",
                typingState: ""
              }),
              (a.budget = a.props.navigation.getParams().budget),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: (function() {
                  var e = Object(O.a)(
                    S.a.mark(function e() {
                      var t;
                      return S.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.props.navigation.setNavbarParams({
                                    child: !0,
                                    title: "Prospectos",
                                    parentView: "Budgets"
                                  }),
                                  this.socketEvents(),
                                  (e.next = 4),
                                  J.Get("/budgets/find-one/" + this.budget._id)
                                );
                              case 4:
                                if (!(t = e.sent).error) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return", alert(t.message));
                              case 7:
                                this.setState({
                                  comments: t.budget.comments || [],
                                  clientName: t.budget.clientName,
                                  budgetDescription: t.budget.budgetDescription,
                                  createDate: t.budget.createDate
                                });
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "componentWillMount",
                value: function() {
                  null === this.store.getItem("ev-token") &&
                    (this.store = sessionStorage),
                    (this.store = window.localStorage),
                    (this.user = JSON.parse(this.store.getItem("user")));
                }
              },
              {
                key: "socketEvents",
                value: function() {
                  var e = this;
                  ie.on("client_typing", function() {
                    "" === e.state.typingState &&
                      e.setState({
                        typingState: "estan escribiendo un comentario"
                      });
                  }),
                    ie.on("client_stop_typing", function() {
                      return e.setState({ typingState: "" });
                    }),
                    ie.on("add_comment", function(t) {
                      var a = e.state.comments;
                      a.push(t), e.setState({ comments: a });
                    });
                }
              },
              {
                key: "addComment",
                value: function() {
                  var e = this.state,
                    t = e.budget,
                    a = e.comment,
                    n = t._id;
                  t.comments.push({ comment: a, username: this.user.name }),
                    this.setState({ budget: t, comment: "" }),
                    delete t._id,
                    this.socket.emit("add_comment", { id: n, budget: t });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.comment,
                    a = e.comments,
                    n = e.clientName,
                    i = e.createDate,
                    o = e.typingState,
                    s = e.budgetDescription;
                  return r.a.createElement(
                    p.o,
                    { container: !0, className: "container" },
                    r.a.createElement(
                      p.o,
                      { item: !0, sm: 12, xs: 6 },
                      r.a.createElement(
                        p.d,
                        { style: { width: "100vw" } },
                        r.a.createElement(p.g, {
                          avatar: r.a.createElement(p.b, null, n[0]),
                          title: n,
                          subheader: i.replace("T", " ")
                        }),
                        r.a.createElement(
                          p.f,
                          null,
                          s.split("\n").map(function(e, t) {
                            return r.a.createElement(p.A, { key: e + t }, e);
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      p.o,
                      { item: !0, sm: 12, xl: 6, style: { marginTop: "1rem" } },
                      r.a.createElement(
                        p.d,
                        { style: { width: "100vw" } },
                        r.a.createElement(p.g, {
                          avatar: r.a.createElement(p.b, {
                            src: f + "/get-avatar/" + this.user._id
                          }),
                          title: this.user.displayName,
                          subheader: r.a.createElement(ce, {
                            value: t,
                            username: this.user.displayName,
                            id: this.user._id,
                            budgetId: this.budget._id
                          })
                        }),
                        r.a.createElement(
                          p.f,
                          null,
                          r.a.createElement(
                            p.o,
                            { item: !0, sm: 12, xs: 6 },
                            r.a.createElement(p.A, { variant: "caption" }, o)
                          ),
                          r.a.createElement(se, { comments: a })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ue = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { clients: [], show: !0 }),
              (a.params = a.props.navigation.getParams()),
              (a.searching = null),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.navigation.setNavbarParams({
                    title: "Selecciona un cliente",
                    child: !0,
                    parentView: this.params.parentView || "Clients"
                  }),
                    this.fetchClients();
                }
              },
              {
                key: "fetchClients",
                value: (function() {
                  var e = Object(O.a)(
                    S.a.mark(function e() {
                      var t;
                      return S.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), J.Get("/clients/fetch/50/0")
                                );
                              case 2:
                                if (!(t = e.sent).error) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return", alert(t.message));
                              case 5:
                                this.setState({ clients: t.clients, show: !1 });
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "searchClient",
                value: function(e) {
                  var t = this;
                  clearTimeout(this.searching),
                    (this.searching = setTimeout(
                      Object(O.a)(
                        S.a.mark(function a() {
                          var n;
                          return S.a.wrap(function(a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    t.setState({ show: !0 }),
                                    (a.next = 3),
                                    J.Get("/clients/search/" + e)
                                  );
                                case 3:
                                  if (!(n = a.sent).error) {
                                    a.next = 6;
                                    break;
                                  }
                                  return a.abrupt("return", alert(n.message));
                                case 6:
                                  t.setState({ clients: n.clients, show: !1 });
                                case 7:
                                case "end":
                                  return a.stop();
                              }
                          }, a);
                        })
                      ),
                      1e3
                    ));
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(W, { show: this.state.show }),
                    r.a.createElement(
                      p.o,
                      { container: !0, spacing: 16 },
                      r.a.createElement(
                        p.o,
                        { item: !0, xs: 12, style: { padding: "1rem" } },
                        r.a.createElement(p.y, {
                          variant: "standard",
                          type: "search",
                          label: "Buscar Cliente",
                          fullWidth: !0,
                          onChange: function(t) {
                            var a = t.target;
                            "" === a.value
                              ? e.fetchClients()
                              : e.searchClient(a.value);
                          }
                        })
                      ),
                      r.a.createElement(
                        p.o,
                        { item: !0, xs: 12 },
                        r.a.createElement(
                          p.q,
                          null,
                          this.state.clients.map(function(t) {
                            return r.a.createElement(
                              p.r,
                              {
                                key: t._id,
                                onClick: function() {
                                  e.props.navigation.go(e.params.childView, t);
                                }
                              },
                              r.a.createElement(
                                p.v,
                                { secondary: t.cellphone || "" },
                                t.name
                              ),
                              r.a.createElement(
                                p.t,
                                null,
                                r.a.createElement(p.p, null, "next")
                              )
                            );
                          })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        me = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                users: [],
                error: { status: !1, message: "" },
                loader: !0
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: (function() {
                  var e = Object(O.a)(
                    S.a.mark(function e() {
                      var t;
                      return S.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.props.navigation.setNavbarParams({
                                    type: "parent",
                                    title: "Usuarios",
                                    moreMenu: !0,
                                    placeholder: "Buscar Cliente"
                                  }),
                                  (e.next = 3),
                                  J.Get("/users/fetch")
                                );
                              case 3:
                                if (void 0 !== (t = e.sent)) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.setState({
                                    error: {
                                      status: !0,
                                      message:
                                        "Ocurrio un error con el servidor"
                                    },
                                    loader: !1
                                  })
                                );
                              case 6:
                                t.error
                                  ? this.setState({
                                      error: { status: !0, message: t.message },
                                      loader: !1
                                    })
                                  : this.setState({
                                      loader: !1,
                                      users: t.users
                                    });
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    a = t.loader,
                    n = t.error,
                    i = t.users;
                  return r.a.createElement(
                    p.o,
                    {
                      container: !0,
                      className: "container",
                      style: { minHeight: "70vh" }
                    },
                    r.a.createElement(p.o, { xs: "auto", md: 2, item: !0 }),
                    r.a.createElement(
                      p.o,
                      { item: !0, xs: 12, md: 8 },
                      n.status
                        ? r.a.createElement(q, { message: n.message })
                        : r.a.createElement(
                            p.q,
                            null,
                            i.map(function(t) {
                              return r.a.createElement(
                                p.r,
                                {
                                  key: t._id,
                                  onClick: function() {
                                    return e.props.navigation.go("UserForm", {
                                      parentView: "Users",
                                      user: t,
                                      action: "update"
                                    });
                                  }
                                },
                                r.a.createElement(
                                  p.s,
                                  null,
                                  r.a.createElement(p.b, {
                                    src: f + "/get-avatar/" + t._id
                                  })
                                ),
                                r.a.createElement(
                                  p.v,
                                  { secondary: t.username },
                                  r.a.createElement(p.A, null, t.name)
                                )
                              );
                            })
                          )
                    ),
                    r.a.createElement(W, { show: a })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        pe = a(92),
        de = a(44),
        he = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).params = a.props.navigation.getParams()),
              (a.state = {
                showPreview: !1,
                values: {},
                loading: !1,
                imageFile: null,
                angle: 0,
                avatarUri: "",
                openChangePassword: !1
              }),
              (a.imageBase64 = null),
              (a.avatarChange = function(e) {
                var t = e.target.files[0],
                  n = Object(pe.a)(a);
                if (
                  !(
                    t.type.includes("jpeg") ||
                    t.type.includes("jpg") ||
                    t.type.includes("png")
                  )
                )
                  return alert(
                    "No es una imagen o no es un formato soportado (jpg o png)"
                  );
                var r = new Image();
                (r.src = URL.createObjectURL(t)),
                  (r.onload = function() {
                    n.setState({ showPreview: !0, imageFile: t });
                  });
              }),
              (a.handleChange = function(e) {
                var t = a.state.values;
                (t[e.target.getAttribute("name")] = e.target.value),
                  a.setState(function() {
                    return { values: t };
                  });
              }),
              (a.handleSubmit = Object(O.a)(
                S.a.mark(function e() {
                  var t;
                  return S.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            delete (t = {
                              data: a.state.values,
                              avatar: a.imageBase64,
                              id: a.state.values._id
                            }).data._id,
                            (e.next = 4),
                            J.Put("/users/", t)
                          );
                        case 4:
                          a.props.navigation.go(a.params.parentView);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  (document.body.style.background = "#e1e1e1"),
                    this.OnResize(),
                    window.addEventListener("resize", function() {
                      return e.OnResize();
                    }),
                    this.setState({ values: this.params.user });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  (document.body.style.background = "#ffffff"),
                    window.removeEventListener("resize", this.OnResize);
                }
              },
              {
                key: "OnResize",
                value: function() {
                  window.innerWidth > 768
                    ? this.props.navigation.setNavbarParams({
                        title: "Profiles",
                        parentView: this.params.parentView,
                        child: !0
                      })
                    : this.props.navigation.setNavbarParams({ visible: !1 });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    a = t.imageFile,
                    n = t.showPreview,
                    i = t.loading,
                    o = t.openChangePassword;
                  return r.a.createElement(
                    p.o,
                    { container: !0 },
                    r.a.createElement(W, { show: i }),
                    r.a.createElement(G, {
                      open: n,
                      imageFile: a,
                      id: "preview-img",
                      onSave: function(t) {
                        (e.imageBase64 = t),
                          (e.refs.avatar.src = t),
                          e.setState({ showPreview: !1 });
                      }
                    }),
                    r.a.createElement(H, {
                      open: o,
                      onClose: function() {
                        return e.setState({ openChangePassword: !1 });
                      },
                      onSave: (function() {
                        var t = Object(O.a)(
                          S.a.mark(function t(a) {
                            return S.a.wrap(function(t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.next = 2),
                                      J.Put("/users/update-password", {
                                        id: e.params.user._id,
                                        password: a
                                      })
                                    );
                                  case 2:
                                    e.setState({ openChangePassword: !1 });
                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function(e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    }),
                    r.a.createElement(
                      p.o,
                      { item: !0, xs: 12 },
                      r.a.createElement(
                        "div",
                        {
                          className: "user-profile-banner",
                          id: "user-profile-banner"
                        },
                        r.a.createElement(
                          "div",
                          { className: "user-profile-banner-bar" },
                          r.a.createElement(
                            p.p,
                            {
                              style: { color: "#ffffff" },
                              onClick: function() {
                                return e.props.navigation.go(
                                  e.params.parentView
                                );
                              }
                            },
                            "arrow_back"
                          ),
                          r.a.createElement("input", {
                            type: "file",
                            name: "picture",
                            ref: "file",
                            style: { display: "none" },
                            accept: "image/*",
                            capture: "camera",
                            onChange: this.avatarChange
                          }),
                          r.a.createElement(
                            "div",
                            null,
                            r.a.createElement(
                              p.p,
                              {
                                style: { color: "#ffffff" },
                                onClick: function() {
                                  return e.setState({ openChangePassword: !0 });
                                }
                              },
                              "restore"
                            ),
                            r.a.createElement(
                              p.p,
                              {
                                style: {
                                  color: "#ffffff",
                                  marginLeft: ".5rem"
                                },
                                onClick: function() {
                                  return e.refs.file.click();
                                }
                              },
                              "camera_alt"
                            )
                          )
                        ),
                        r.a.createElement("img", {
                          id: "avatar",
                          ref: "avatar",
                          onClick: function() {
                            return e.refs.file.click();
                          },
                          src: f + "/get-avatar/" + this.params.user._id,
                          alt: this.state.values.name || "profile"
                        })
                      )
                    ),
                    r.a.createElement(
                      p.o,
                      { item: !0, xs: 12 },
                      r.a.createElement(
                        p.d,
                        null,
                        r.a.createElement(
                          p.f,
                          null,
                          r.a.createElement(
                            p.A,
                            null,
                            "Usuario",
                            r.a.createElement("br", null),
                            this.state.values.username || ""
                          ),
                          r.a.createElement(p.y, {
                            label: "Nombre",
                            fullWidth: !0,
                            value: this.state.values.name || "",
                            name: "name",
                            onChange: this.handleChange,
                            InputLabelProps: {
                              shrink: !!this.state.values.name
                            }
                          }),
                          r.a.createElement(p.y, {
                            label: "Celular",
                            fullWidth: !0,
                            value: this.state.values.cellphone || "",
                            name: "cellphone",
                            onChange: this.handleChange,
                            type: "text"
                          }),
                          r.a.createElement(p.y, {
                            label: "Correo",
                            fullWidth: !0,
                            value: this.state.values.email || "",
                            onChange: this.handleChange,
                            name: "cellphone"
                          })
                        ),
                        r.a.createElement(
                          p.e,
                          null,
                          r.a.createElement(
                            p.c,
                            {
                              variant: "contained",
                              color: "primary",
                              onClick: this.handleSubmit
                            },
                            "Guardar"
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        fe = Object(de.withStyles)(function(e) {
          return { buttonTopContainer: { marginLeft: e.spacing.unit } };
        })(he),
        ge = function() {
          return r.a.createElement(
            p.o,
            { container: !0 },
            r.a.createElement(p.o, { item: !0, xs: 5 }, "Descripcion"),
            r.a.createElement(p.o, { item: !0, xs: 3 }, "Cantidad"),
            r.a.createElement(p.o, { item: !0, xs: 2 }, "Precio"),
            r.a.createElement(p.o, { item: !0, xs: 2 }, "Subtotal")
          );
        },
        ve = function(e) {
          return e.jobs.map(function(e, t) {
            return r.a.createElement(
              p.o,
              { container: !0, key: t },
              r.a.createElement(
                p.o,
                { item: !0, xs: 5 },
                r.a.createElement(p.A, { variant: "caption" }, e.trabajo)
              ),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                r.a.createElement(p.A, { variant: "caption" }, e.cantidad)
              ),
              r.a.createElement(
                p.o,
                { item: !0, xs: 2 },
                r.a.createElement(
                  p.A,
                  { variant: "caption" },
                  "$",
                  parseFloat(e.precio).toLocaleString()
                )
              ),
              r.a.createElement(
                p.o,
                { item: !0, xs: 2 },
                r.a.createElement(
                  p.A,
                  { variant: "caption" },
                  "$",
                  (
                    parseFloat(e.cantidad) * parseFloat(e.precio)
                  ).toLocaleString()
                )
              )
            );
          });
        },
        be = function(e) {
          var t = e.job;
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              p.o,
              { container: !0 },
              r.a.createElement(p.o, { item: !0, xs: 5 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                r.a.createElement(p.A, { align: "right" }, "Subtotal")
              ),
              r.a.createElement(p.o, { item: !0, xs: 1 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                "$",
                parseFloat(t.subtotal).toLocaleString()
              )
            ),
            r.a.createElement(
              p.o,
              { container: !0 },
              r.a.createElement(p.o, { item: !0, xs: 5 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                r.a.createElement(p.A, { align: "right" }, "Iva")
              ),
              r.a.createElement(p.o, { item: !0, xs: 1 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                "$",
                parseFloat(t.iva).toLocaleString()
              )
            ),
            r.a.createElement(
              p.o,
              { container: !0 },
              r.a.createElement(p.o, { item: !0, xs: 5 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                r.a.createElement(p.A, { align: "right" }, "Total")
              ),
              r.a.createElement(p.o, { item: !0, xs: 1 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                "$",
                parseFloat(t.total).toLocaleString()
              )
            )
          );
        },
        Ee = function(e) {
          return e.jobs.map(function(e) {
            return r.a.createElement(
              p.o,
              { key: e._id, item: !0, xs: 12, style: { marginTop: 5 } },
              r.a.createElement(
                p.d,
                null,
                r.a.createElement(p.g, {
                  title: e.client.name,
                  subheader: e.create_date
                }),
                r.a.createElement(
                  p.f,
                  null,
                  r.a.createElement(ge, null),
                  r.a.createElement(ve, { jobs: e.jobs }),
                  r.a.createElement(be, { job: e })
                ),
                r.a.createElement(
                  p.e,
                  null,
                  r.a.createElement(
                    p.o,
                    { container: !0 },
                    r.a.createElement(
                      p.o,
                      { item: !0, xs: 9 },
                      r.a.createElement(
                        p.A,
                        { variant: "caption" },
                        e.tax && "El documento contiene iva"
                      )
                    ),
                    r.a.createElement(
                      p.o,
                      { item: !0, xs: 3 },
                      r.a.createElement(p.c, { color: "secondary" }, "Detalle")
                    )
                  )
                )
              )
            );
          });
        },
        ye = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = { jobs: [], errorMsg: "", loading: !0 }),
              (a.fetchJobs = Object(O.a)(
                S.a.mark(function e() {
                  var t;
                  return S.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), J.Get("/jobs/fetch/1");
                        case 2:
                          (t = e.sent).error
                            ? a.setState({ errorMsg: t.message, loading: !1 })
                            : a.setState({ jobs: t.jobs, loading: !1 });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.navigation.setNavbarParams({
                    type: "parent",
                    title: "Trabajos",
                    placeholder: "Buscar Trabajos",
                    onSearch: function() {
                      return null;
                    }
                  }),
                    this.fetchJobs();
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    a = t.jobs,
                    n = t.errorMsg,
                    i = t.loading;
                  return r.a.createElement(
                    p.o,
                    { container: !0, className: "container" },
                    r.a.createElement(Ee, { jobs: a }),
                    r.a.createElement(W, { show: i }),
                    r.a.createElement(R, {
                      onClick: function() {
                        return e.props.navigation.go("SelectClient", {
                          parentView: "Jobs",
                          childView: "AddJob"
                        });
                      }
                    }),
                    "" !== n && r.a.createElement(q, { msg: n })
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        xe = Object(Z.a)({
          appBar: { position: "relative" },
          title: { marginLeft: "1rem", flex: 1 },
          padding: { padding: "1rem" },
          description: { height: "4rem", marginTop: "1rem" }
        }),
        ke = r.a.forwardRef(function(e, t) {
          return r.a.createElement(
            p.w,
            Object.assign({ direction: "up", ref: t }, e)
          );
        }),
        we = function(e) {
          var t = e.subtotal,
            a = e.iva,
            n = e.total,
            i = e.anticipo;
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              p.o,
              { container: !0 },
              r.a.createElement(p.o, { item: !0, xs: 5 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                r.a.createElement(p.A, { align: "right" }, "Subtotal")
              ),
              r.a.createElement(p.o, { item: !0, xs: 1 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                "$",
                parseFloat(t).toLocaleString()
              )
            ),
            r.a.createElement(
              p.o,
              { container: !0 },
              r.a.createElement(p.o, { item: !0, xs: 5 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                r.a.createElement(p.A, { align: "right" }, "Iva")
              ),
              r.a.createElement(p.o, { item: !0, xs: 1 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                "$",
                parseFloat(a).toLocaleString()
              )
            ),
            r.a.createElement(
              p.o,
              { container: !0 },
              r.a.createElement(p.o, { item: !0, xs: 5 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                r.a.createElement(p.A, { align: "right" }, "Anticipo")
              ),
              r.a.createElement(p.o, { item: !0, xs: 1 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                "$",
                parseFloat(i).toLocaleString()
              )
            ),
            r.a.createElement(
              p.o,
              { container: !0 },
              r.a.createElement(p.o, { item: !0, xs: 5 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                r.a.createElement(p.A, { align: "right" }, "Total")
              ),
              r.a.createElement(p.o, { item: !0, xs: 1 }),
              r.a.createElement(
                p.o,
                { item: !0, xs: 3 },
                "$",
                (parseFloat(n) - parseFloat(i)).toLocaleString()
              )
            )
          );
        },
        Ce = function(e) {
          var t = e.ctx,
            a = xe(),
            n = r.a.useState(!1),
            i = Object(w.a)(n, 2),
            o = i[0],
            s = i[1],
            c = r.a.useState({}),
            l = Object(w.a)(c, 2),
            u = l[0],
            m = l[1];
          function d() {
            m({}), s(!1);
          }
          function h(e) {
            var t = e.target.getAttribute("name");
            (u[t] = e.target.value), m(u);
          }
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              p.c,
              {
                color: "inherit",
                onClick: function() {
                  s(!0);
                }
              },
              "Nuevo"
            ),
            r.a.createElement(
              p.i,
              { fullScreen: !0, open: o, onClose: d },
              r.a.createElement(
                "div",
                null,
                r.a.createElement(p.p, { onClick: d }, "close")
              ),
              r.a.createElement(
                "form",
                { className: a.padding },
                r.a.createElement(p.y, {
                  label: "Trabajo",
                  fullWidth: !0,
                  type: "text",
                  onChange: h,
                  name: "trabajo",
                  value: u.trabajo,
                  tabIndex: 1
                }),
                r.a.createElement(p.y, {
                  label: "Material",
                  fullWidth: !0,
                  type: "text",
                  onChange: h,
                  name: "material",
                  value: u.material,
                  tabIndex: 2
                }),
                r.a.createElement(p.y, {
                  label: "Cantidad",
                  type: "number",
                  fullWidth: !0,
                  onChange: h,
                  name: "cantidad",
                  value: u.cantidad,
                  tabIndex: 3
                }),
                r.a.createElement(p.y, {
                  label: "Precio",
                  fullWidth: !0,
                  type: "number",
                  onChange: h,
                  name: "precio",
                  value: u.precio,
                  tabIndex: 4
                }),
                r.a.createElement(p.y, {
                  label: "Descripcion",
                  multiline: !0,
                  rowsMax: 5,
                  fullWidth: !0,
                  variant: "outlined",
                  className: a.description,
                  onChange: h,
                  name: "descripcion",
                  value: u.descripcion,
                  tabIndex: 5
                }),
                r.a.createElement(
                  p.c,
                  {
                    variant: "contained",
                    color: "primary",
                    onClick: function() {
                      t.addJobToObject(u), d();
                    }
                  },
                  "Agregar"
                )
              )
            )
          );
        },
        je = function(e) {
          var t = e.ctx,
            a = void 0 === t ? void 0 : t,
            n = xe(),
            i = r.a.useState(!1),
            o = Object(w.a)(i, 2),
            s = o[0],
            c = o[1];
          function l() {
            c(!1);
          }
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              p.c,
              {
                variant: "outlined",
                color: "primary",
                fullWidth: !0,
                onClick: function() {
                  c(!0);
                }
              },
              a.state.values.jobs.length > 0
                ? "Mostrar Trabajos"
                : "Agregar Trabajo"
            ),
            r.a.createElement(
              p.i,
              { fullScreen: !0, open: s, onClose: l, TransitionComponent: ke },
              r.a.createElement(
                p.a,
                { className: n.appBar, color: "default" },
                r.a.createElement(
                  p.z,
                  null,
                  r.a.createElement(p.p, { onClick: l }, "close"),
                  r.a.createElement(
                    p.A,
                    { variant: "h6", className: n.title },
                    "Agregar Trabajo"
                  ),
                  r.a.createElement(Ce, { ctx: a })
                )
              ),
              r.a.createElement(
                p.q,
                null,
                a.state.values.jobs.map(function(e, t) {
                  var n = parseFloat(e.cantidad) * parseFloat(e.precio);
                  return (
                    (n = "$" + n.toLocaleString()),
                    r.a.createElement(
                      p.r,
                      { key: e.trabajo + "_" + t },
                      r.a.createElement(
                        p.o,
                        { container: !0 },
                        r.a.createElement(p.o, { item: !0, xs: 6 }, e.trabajo),
                        r.a.createElement(p.o, { item: !0, xs: 3 }, n),
                        r.a.createElement(p.o, { item: !0, xs: 1 }),
                        r.a.createElement(
                          p.o,
                          { item: !0, xs: 2 },
                          r.a.createElement(
                            p.p,
                            {
                              style: { cursor: "pointer" },
                              onClick: function() {
                                return a.quitJobToObject(t);
                              }
                            },
                            "delete"
                          )
                        )
                      )
                    )
                  );
                })
              )
            )
          );
        },
        Se = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).params = {}),
              (a.state = {
                values: {
                  iva: 0,
                  jobs: [
                    {
                      trabajo: "Sillas",
                      material: "Vinil",
                      cantidad: "6",
                      precio: "450"
                    },
                    {
                      trabajo: "Sala",
                      material: "Vinil",
                      cantidad: "1",
                      precio: "9550"
                    }
                  ],
                  total: 0,
                  tax: !1,
                  anticipo: 0,
                  subtotal: 0,
                  payments: []
                }
              }),
              (a.handleChange = function(e, t) {
                var n = a.state.values;
                (n[e] = t), a.setState({ values: n });
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.navigation,
                    t = e.setNavbarParams,
                    a = e.getParams;
                  (this.params = a()),
                    t({
                      title: "Agregar Trabajo",
                      child: !0,
                      parentView: "SelectClient",
                      params: { parentView: "Jobs", childView: "AddJob" }
                    }),
                    this.calculateTax();
                }
              },
              {
                key: "calculateTax",
                value: function() {
                  var e = this.state.values;
                  if (e.tax) {
                    var t = 0.16 * parseFloat(e.subtotal);
                    this.handleChange("iva", t);
                  } else this.handleChange("iva", 0);
                }
              },
              {
                key: "addJobToObject",
                value: function(e) {
                  var t = this.state.values;
                  t.jobs.push(e), this.setState(t);
                }
              },
              {
                key: "quitJobToObject",
                value: function(e) {
                  var t = this.state.values;
                  t.jobs.splice(e, 1), this.setState(t);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state.values;
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      p.o,
                      { item: !0, xs: 12 },
                      r.a.createElement(
                        p.d,
                        null,
                        r.a.createElement(p.g, {
                          title: this.params.name || "",
                          subheader: this.params.cellphone || ""
                        }),
                        r.a.createElement(
                          p.f,
                          null,
                          r.a.createElement(
                            p.o,
                            { container: !0 },
                            r.a.createElement(
                              p.o,
                              { item: !0, xs: 12 },
                              r.a.createElement(p.y, {
                                label: "Anticipo",
                                type: "number",
                                fullWidth: !0,
                                tabIndex: 1,
                                onChange: function(t) {
                                  var a = t.target;
                                  return e.handleChange("anticipo", a.value);
                                }
                              })
                            ),
                            r.a.createElement(
                              p.o,
                              { item: !0, xs: 12, style: { marginTop: 20 } },
                              r.a.createElement(je, { ctx: this })
                            ),
                            r.a.createElement(
                              p.o,
                              {
                                item: !0,
                                xs: 12,
                                style: { height: "13rem", overflowY: "auto" }
                              },
                              r.a.createElement(
                                p.o,
                                { container: !0 },
                                r.a.createElement(
                                  p.o,
                                  { item: !0, xs: 12 },
                                  r.a.createElement(
                                    p.A,
                                    { variant: "h6" },
                                    "Lista de Trabajos"
                                  )
                                ),
                                r.a.createElement(
                                  p.o,
                                  { item: !0, xs: 12 },
                                  r.a.createElement(
                                    p.q,
                                    null,
                                    r.a.createElement(
                                      p.r,
                                      null,
                                      r.a.createElement(
                                        p.o,
                                        { container: !0 },
                                        r.a.createElement(
                                          p.o,
                                          { item: !0, xs: 6 },
                                          r.a.createElement(
                                            "strong",
                                            null,
                                            "Trabajo"
                                          )
                                        ),
                                        r.a.createElement(p.o, {
                                          item: !0,
                                          xs: 2
                                        }),
                                        r.a.createElement(
                                          p.o,
                                          { item: !0, xs: 4 },
                                          r.a.createElement(
                                            "strong",
                                            null,
                                            "Precio"
                                          )
                                        )
                                      )
                                    ),
                                    this.state.values.jobs.map(function(t, a) {
                                      var n =
                                        parseFloat(t.cantidad) *
                                        parseFloat(t.precio);
                                      return (
                                        (n = "$" + n.toLocaleString()),
                                        r.a.createElement(
                                          p.r,
                                          { key: t.trabajo + "_" + a },
                                          r.a.createElement(
                                            p.o,
                                            { container: !0 },
                                            r.a.createElement(
                                              p.o,
                                              { item: !0, xs: 6 },
                                              t.trabajo
                                            ),
                                            r.a.createElement(
                                              p.o,
                                              { item: !0, xs: 3 },
                                              n
                                            ),
                                            r.a.createElement(p.o, {
                                              item: !0,
                                              xs: 1
                                            }),
                                            r.a.createElement(
                                              p.o,
                                              { item: !0, xs: 2 },
                                              r.a.createElement(
                                                p.p,
                                                {
                                                  style: { cursor: "pointer" },
                                                  onClick: function() {
                                                    return e.quitJobToObject(a);
                                                  }
                                                },
                                                "delete"
                                              )
                                            )
                                          )
                                        )
                                      );
                                    })
                                  )
                                )
                              )
                            ),
                            r.a.createElement(
                              p.o,
                              { item: !0, xs: 12, style: { marginTop: 20 } },
                              r.a.createElement(p.n, {
                                control: r.a.createElement(p.x, {
                                  checked: t.tax || !1,
                                  color: "default",
                                  value: "tax",
                                  onChange: function(t) {
                                    var a = t.target;
                                    e.handleChange("tax", a.checked),
                                      e.calculateTax();
                                  }
                                }),
                                label: "Calcular IVA",
                                tabIndex: 1
                              })
                            ),
                            r.a.createElement(
                              p.o,
                              { item: !0, xs: 12, style: { marginTop: 20 } },
                              r.a.createElement(we, {
                                subtotal: t.subtotal,
                                iva: t.iva,
                                total: t.total,
                                anticipo: t.anticipo
                              })
                            )
                          )
                        ),
                        r.a.createElement(
                          p.e,
                          null,
                          r.a.createElement(
                            p.c,
                            {
                              variant: "contained",
                              color: "primary",
                              fullWidth: !0
                            },
                            "Guardar"
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      function Oe(e) {
        return (
          Object(n.useEffect)(function() {
            e.navigation.setNavbarParams({ type: "parent", title: "Inicio" });
          }),
          r.a.createElement("div", { className: "container" }, "Home")
        );
      }
      var Ne = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                views: {
                  Jobs: ye,
                  Home: Oe,
                  Login: $,
                  Users: me,
                  AddJob: Se,
                  Budgets: ae,
                  Clients: K,
                  UserForm: fe,
                  AddBudget: ne,
                  ClientForm: Q,
                  SelectClient: ue,
                  BudgetComments: le
                },
                route: ["Home"],
                params: {},
                loggedIn: !1,
                isMobile: !1,
                navbarParams: { title: "TlaCRM" }
              }),
              (a.store = localStorage),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentWillMount",
                value: function() {
                  this.breakPoints(),
                    null === this.store.getItem("isLoggedIn") &&
                      (this.store = sessionStorage),
                    "true" === this.store.getItem("isLoggedIn") &&
                      this.setState({
                        loggedIn: !0,
                        route: JSON.parse(this.store.getItem("route"))
                      });
                }
              },
              {
                key: "breakPoints",
                value: function() {
                  var e = window.innerWidth;
                  /Mobile/.test(navigator.userAgent)
                    ? this.setState({ isMobile: !0 })
                    : e > 768 && this.setState({ isMobile: !0 });
                }
              },
              {
                key: "currentView",
                value: function() {
                  var e = this.state.route;
                  return e[e.length - 1];
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    a = t.views,
                    n = t.isMobile,
                    i = t.route,
                    o = t.navbarParams,
                    s = a[this.currentView()],
                    c = {
                      go: function(t) {
                        var a =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        i.push(t),
                          e.store.setItem("route", JSON.stringify(i)),
                          e.store.setItem("params", JSON.stringify(a)),
                          e.setState({ route: i, params: a });
                      },
                      goMain: function(t) {
                        var a =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = [t];
                        e.store.setItem("route", JSON.stringify(n)),
                          e.store.setItem("params", JSON.stringify(a)),
                          e.setState({ route: n, params: a });
                      },
                      goBack: function() {
                        i.pop(),
                          e.store.setItem("route", JSON.stringify(i)),
                          e.setState({ route: i });
                      },
                      setNavbarParams: function(t) {
                        return e.setState({ navbarParams: t });
                      },
                      isMobile: n,
                      getParams: function() {
                        var e = {};
                        return (
                          (e = localStorage.getItem("params")
                            ? localStorage.getItem("params")
                            : sessionStorage.getItem("params")),
                          JSON.parse(e)
                        );
                      }
                    };
                  return this.state.loggedIn
                    ? r.a.createElement(
                        "div",
                        { className: "main" },
                        r.a.createElement(
                          "div",
                          { className: "navigation-bar" },
                          r.a.createElement(V, {
                            navigation: c,
                            params: this.state.navbarParams,
                            route: i,
                            navbarParams: o
                          })
                        ),
                        r.a.createElement(s, { navigation: c })
                      )
                    : r.a.createElement($, null);
                }
              }
            ]),
            t
          );
        })(n.Component),
        Ie = (a(602),
        a(603),
        Object(O.a)(
          S.a.mark(function e() {
            return S.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!("serviceWorker" in navigator)) {
                      e.next = 6;
                      break;
                    }
                    return (
                      (e.next = 3),
                      navigator.serviceWorker
                        .register("sw.js", { scope: "/tlacrm/" })
                        .catch(function(e) {
                          return console.log(
                            "Error when try to register service worker, ".concat(
                              e
                            )
                          );
                        })
                    );
                  case 3:
                    (window.reg = e.sent), (e.next = 7);
                    break;
                  case 6:
                    console.log("Service Worker is not supported");
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ));
      Ie(),
        o.a.render(
          r.a.createElement(Ne, null),
          document.getElementById("root")
        );
    }
  },
  [[325, 1, 2]]
]);
//# sourceMappingURL=main.23fe16bf.chunk.js.map
