!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i)
                    return i(g, !0);
                if (f)
                    return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
        e(d[g]);
    return e
}({"./app/vendor/sidebar/js/main.js": [function(a) {
            a("./_breakpoints"), a("./_sidebar-menu"), a("./_collapsible"), a("./_dropdown"), a("./_sidebar-toggle"), function(a) {
                "use strict";
                a.fn.tkSidebar = function(b) {
                    if (this.length) {
                        var c = a.extend({menuType: !1,toggleBar: !1}, b), d = this;
                        "collapse" == c.menuType && d.tkSidebarCollapse(), "dropdown" == c.menuType && d.tkSidebarDropdown(), c.toggleBar === !0 && d.tkSidebarToggleBar()
                    }
                }
            }(jQuery)
        }, {"./_breakpoints": "/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_breakpoints.js","./_collapsible": "/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_collapsible.js","./_dropdown": "/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_dropdown.js","./_sidebar-menu": "/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_sidebar-menu.js","./_sidebar-toggle": "/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_sidebar-toggle.js"}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_breakpoints.js": [function() {
            !function(a) {
                "use strict";
                var b = function() {
                    a("html").addClass("show-sidebar"), a(".sidebar.sidebar-visible-desktop").not(":visible").each(function() {
                        var b = sidebar.options(a(this));
                        sidebar.open(a(this).attr("id"), b)
                    })
                }, c = function() {
                    a("html").removeClass("show-sidebar"), a(".sidebar:visible").each(function() {
                        sidebar.close(a(this).attr("id"))
                    })
                };
                if (a(window).bind("enterBreakpoint768", function() {
                    a(".sidebar").length && (a(".hide-sidebar").length || b())
                }), a(window).bind("enterBreakpoint1024", function() {
                    a(".sidebar").length && (a(".hide-sidebar").length || b())
                }), a(window).bind("enterBreakpoint480", function() {
                    a(".sidebar").length && c()
                }), a(window).width() <= 480) {
                    if (!a(".sidebar").length)
                        return;
                    c()
                }
            }(jQuery)
        }, {}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_collapsible.js": [function() {
            !function(a) {
                "use strict";
                a.fn.tkSidebarCollapse = function() {
                    if (this.length) {
                        var b = this;
                        b.find(".sidebar-menu > li > a").off("mouseenter"), b.find(".sidebar-menu > li.dropdown > a").off("mouseenter"), b.find(".sidebar-menu > li > a").off("mouseenter"), b.find(".sidebar-menu > li > a").off("click"), b.off("mouseleave"), b.find(".dropdown").off("mouseover"), b.find(".dropdown").off("mouseout"), a("body").off("mouseout", "#dropdown-temp .dropdown"), b.find("ul.collapse").off("shown.bs.collapse").off("show.bs.collapse").off("hide.bs.collapse").off("hidden.bs.collapse"), b.find("#dropdown-temp").remove(), b.find(".hasSubmenu").removeClass("dropdown").find("> ul").addClass("collapse").removeClass("dropdown-menu submenu-hide submenu-show").end().find("> a").attr("data-toggle", "collapse").on("click", function(a) {
                            a.preventDefault()
                        }), b.find(".collapse").on("shown.bs.collapse", function() {
                            b.find("[data-scrollable]").getNiceScroll().resize()
                        }), b.find(".collapse").on("show.bs.collapse", function(b) {
                            b.stopPropagation();
                            var c = a(this).parents("ul:first").find('> li.open [data-toggle="collapse"]');
                            c.length && c.trigger("click"), a(this).closest(".hasSubmenu").addClass("open")
                        }), b.find(".collapse").on("hidden.bs.collapse", function(b) {
                            b.stopPropagation(), a(this).closest(".hasSubmenu").removeClass("open")
                        }), b.find(".collapse").collapse({toggle: !1})
                    }
                }, a('.sidebar[data-type="collapse"]').each(function() {
                    a(this).tkSidebarCollapse()
                })
            }(jQuery)
        }, {}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_dropdown.js": [function() {
            !function(a) {
                "use strict";
                function b() {
                    a('.sidebar[data-type="collapse"][data-transformed]').length && (a('.sidebar[data-type="collapse"][data-transformed]').attr("data-type", "dropdown").attr("data-transformed", !0), c())
                }
                a.fn.tkSidebarDropdown = function() {
                    if (this.length) {
                        var b = this;
                        b.find(".collapse").off("shown.bs.collapse").off("show.bs.collapse").off("hidden.bs.collapse");
                        var c = b.find("[data-scrollable]").getNiceScroll()[0];
                        c.scrollstart(function() {
                            b.is('[data-type="dropdown"]') && (b.addClass("scrolling"), b.find("#dropdown-temp > ul > li").empty(), b.find("#dropdown-temp").hide(), b.find(".open").removeClass("open"))
                        }), c.scrollend(function() {
                            b.is('[data-type="dropdown"]') && (a.data(this, "lastScrollTop", c.getScrollTop()), b.removeClass("scrolling"))
                        }), b.find(".hasSubmenu").addClass("dropdown").removeClass("open").find("> ul").addClass("dropdown-menu").removeClass("collapse in").removeAttr("style").end().find("> a").removeClass("collapsed").removeAttr("data-toggle"), b.find(".sidebar-menu > li.dropdown > a").on("mouseenter", function() {
                            var c = b.find("#dropdown-temp");
                            if (b.find(".open").removeClass("open"), c.hide(), !a(this).parent(".dropdown").is(".open") && !b.is(".scrolling")) {
                                var d = a(this).parent(".dropdown"), e = d.find("> .dropdown-menu").clone().removeClass("submenu-hide");
                                c.length || (c = a("<div/>").attr("id", "dropdown-temp").appendTo(b), c.html("<ul><li></li></ul>")), c.show(), c.find(".dropdown-menu").remove(), c = c.find("> ul > li").css({overflow: "visible"}).addClass("dropdown open"), d.addClass("open"), e.appendTo(c).css({top: d.offset().top - c.offset().top,left: "100%"}).show(), b.is(".right") && e.css({left: "auto",right: "100%"})
                            }
                        }), b.find(".sidebar-menu > li > a").on("mouseenter", function() {
                            if (!a(this).parent().is(".dropdown")) {
                                var b = a(this).closest(".sidebar");
                                b.find(".open").removeClass("open"), b.find("#dropdown-temp").hide()
                            }
                        }), b.find(".sidebar-menu > li > a").on("click", function(b) {
                            a(this).parent().is(".dropdown") && (b.preventDefault(), b.stopPropagation())
                        }), b.on("mouseleave", function() {
                            a(this).find("#dropdown-temp").hide(), a(this).find(".open").removeClass("open")
                        }), b.find(".dropdown").on("mouseover", function() {
                            a(this).addClass("open").children("ul").removeClass("submenu-hide").addClass("submenu-show")
                        }).on("mouseout", function() {
                            a(this).children("ul").removeClass(".submenu-show").addClass("submenu-hide")
                        }), a("body").on("mouseout", "#dropdown-temp .dropdown", function() {
                            a(".sidebar-menu .open", a(this).closest(".sidebar")).removeClass(".open")
                        })
                    }
                };
                var c = function() {
                    a('.sidebar[data-type="dropdown"]').each(function() {
                        a(this).tkSidebarDropdown()
                    })
                }, d = function() {
                    a('.sidebar[data-type="collapse"]').each(function() {
                        a(this).tkSidebarCollapse()
                    })
                };
                c(), a(window).bind("enterBreakpoint480", function() {
                    a('.sidebar[data-type="dropdown"]').length && (a('.sidebar[data-type="dropdown"]').attr("data-type", "collapse").attr("data-transformed", !0), d())
                }), a(window).bind("enterBreakpoint768", b), a(window).bind("enterBreakpoint1024", b)
            }(jQuery)
        }, {}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_options.js": [function(a, b) {
            b.exports = function(a) {
                return {"transform-button": a.data("transformButton") === !0,"transform-button-icon": a.data("transformButtonIcon") || "fa-ellipsis-h"}
            }
        }, {}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_sidebar-menu.js": [function(a) {
            !function(b) {
                var c = b(".sidebar");
                c.each(function() {
                    var c = b(this), d = a("./_options")(c);
                    if (d["transform-button"]) {
                        var e = b('<button type="button"></button>');
                        e.attr("data-toggle", "sidebar-transform").addClass("btn btn-default").html('<i class="fa ' + d["transform-button-icon"] + '"></i>'), c.find(".sidebar-menu").append(e)
                    }
                })
            }(jQuery)
        }, {"./_options": "/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_options.js"}],"/persistent/var/www/html/themekit-3.6.2/dev/app/vendor/sidebar/js/_sidebar-toggle.js": [function() {
            !function(a) {
                "use strict";
                function b() {
                    var a = !1;
                    return function(b) {
                        (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
                    }(navigator.userAgent || navigator.vendor || window.opera), a
                }
                a("#subnav").collapse({toggle: !1}), function() {
                    var c = {effect: "st-effect-1",duration: 550,overlay: !1}, d = ".st-container", e = b() ? "touchstart" : "click", f = function(b, c) {
                        var d = b.data("layoutClasses");
                        if (!d) {
                            var e = b.data("toggleLayout");
                            if ("string" == typeof e)
                                return d = e.split(",").join(" "), b.data("layoutClasses", d), d;
                            var f = new RegExp("sidebar-" + c + "(\\S+)", "ig");
                            d = a("html").get(0).className.match(f), null !== d && d.length && (d = d.join(" "), b.data("layoutClasses", d))
                        }
                        return d
                    }, g = function(a) {
                        return {effect: a.data("effect"),overlay: a.data("overlay")}
                    }, h = function() {
                        return a("body").hasClass("animating") ? !0 : (a("body").addClass("animating"), setTimeout(function() {
                            a("body").removeClass("animating")
                        }, c.duration), !1)
                    }, i = function(b, e) {
                        var g = a(d), h = "undefined" != typeof b ? "#" + b : g.data("stMenuTarget"), i = a(h);
                        if (!i.length)
                            return !1;
                        if (!i.is(":visible"))
                            return !1;
                        if (i.hasClass("sidebar-closed"))
                            return !1;
                        var j = "undefined" != typeof e && e.effect ? e.effect : g.data("stMenuEffect"), k = i.is(".left") ? "l" : "r", l = i.get(0).className.match(/sidebar-size-(\S+)/).pop(), m = "st-effect-" + k + l, n = i.data("toggleLayout"), o = f(i, k), p = {sidebar: i,target: h};
                        a(document).trigger("sidebar.hide", p), a('[data-toggle="sidebar-menu"][href="' + h + '"]').removeClass("active").closest("li").removeClass("active"), a("html").addClass(m), i.addClass(j), g.addClass(j), g.removeClass("st-menu-open st-pusher-overlay"), setTimeout(function() {
                            a("html").removeClass(m), n && a("html").removeClass(o), i.removeClass(j), g.get(0).className = "st-container", i.addClass("sidebar-closed").hide(), a(document).trigger("sidebar.hidden", p)
                        }, c.duration)
                    }, j = function(b, e) {
                        var g = a(d), h = a(b);
                        if (!h.length)
                            return !1;
                        if (a(window).width() < 768 && g.hasClass("st-menu-open"))
                            return i();
                        a('[data-toggle="sidebar-menu"][href="' + b + '"]').addClass("active").closest("li").addClass("active");
                        var j = e.effect, k = e.overlay, l = h.is(".left") ? "l" : "r", m = h.get(0).className.match(/sidebar-size-(\S+)/).pop(), n = "st-effect-" + l + m, o = h.data("toggleLayout"), p = f(h, l), q = {sidebar: h,target: b};
                        a(document).trigger("sidebar.show", q), a("html").addClass(n), h.show().removeClass("sidebar-closed"), g.data("stMenuEffect", j), g.data("stMenuTarget", b), h.addClass(j), g.addClass(j), k && g.addClass("st-pusher-overlay"), setTimeout(function() {
                            g.addClass("st-menu-open"), h.find("[data-scrollable]").getNiceScroll().resize(), a(window).trigger("resize")
                        }, 25), setTimeout(function() {
                            o && a("html").addClass(p), a(document).trigger("sidebar.shown", q)
                        }, c.duration)
                    }, k = function(b) {
                        b.stopPropagation(), b.preventDefault();
                        var d = h();
                        if (d)
                            return !1;
                        var e, f = a(this), k = f.attr("href");
                        if (k.length > 3 && (e = a(k), !e.length))
                            return !1;
                        if (k.length < 3) {
                            var l = a('[data-toggle="sidebar-menu"]').not(this).closest("li").length ? a('[data-toggle="sidebar-menu"]').not(this).closest("li") : a('[data-toggle="sidebar-menu"]').not(this), m = a(this).closest("li").length ? a(this).closest("li") : a(this);
                            return l.removeClass("active"), m.addClass("active"), a("html").hasClass("show-sidebar") && m.removeClass("active"), a("html").removeClass("show-sidebar"), void (m.hasClass("active") && a("html").addClass("show-sidebar"))
                        }
                        var n = g(e), o = {};
                        f.data("effect") && (o.effect = f.data("effect")), f.data("overlay") && (o.overlay = f.data("overlay"));
                        var p = a.extend({}, c, n, o);
                        return !e.hasClass("sidebar-closed") && e.is(":visible") ? void i(e.attr("id"), p) : void j(k, p)
                    };
                    a("body").on(e, '[data-toggle="sidebar-menu"]', k), a(document).on("keydown", null, "esc", function() {
                        var b = a(d);
                        return b.hasClass("st-menu-open") ? (i(), !1) : void 0
                    }), a.fn.tkSidebarToggleBar = function() {
                        if (this.length) {
                            var b = this;
                            if (b.data("toggleBar")) {
                                var c = a("<a></a>");
                                c.attr("href", "#" + b.attr("id")).attr("data-toggle", "sidebar-menu").addClass("sidebar-toggle-bar"), b.append(c)
                            }
                        }
                    }, a(".sidebar").each(function() {
                        a(this).tkSidebarToggleBar()
                    }), window.sidebar = {open: function(b, d) {
                            var e = h();
                            return e ? !1 : (d = a.extend({}, c, d), j("#" + b, d))
                        },close: function(b, d) {
                            return d = a.extend({}, c, d), i(b, d)
                        },options: g}
                }()
            }(jQuery)
        }, {}]}, {}, ["./app/vendor/sidebar/js/main.js"]);
