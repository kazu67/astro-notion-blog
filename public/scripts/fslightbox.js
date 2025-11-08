!(function (e, t) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = t();
  else if (typeof define === 'function' && define.amd) define([], t);
  else {
    const n = t();
    for (const o in n) (typeof exports === 'object' ? exports : e)[o] = n[o];
  }
}(window, () => (function (e) {
  const t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    const i = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      typeof Symbol !== 'undefined'
          && Symbol.toStringTag
          && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' });
      Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
      const o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && typeof e !== 'string')
      ) {
        for (const i in e) {
          n.d(
            o,
            i,
            ((t) => e[t]).bind(null, i),
          );
        }
      }
      return o;
    }),
    (n.n = function (e) {
      const t = e && e.__esModule
        ? function () {
          return e.default;
        }
        : function () {
          return e;
        };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 0))
  );
}([
  function (e, t, n) {
    n.r(t);
    let o;
    const i = 'fslightbox-';
    const r = ''.concat(i, 'styles');
    const s = ''.concat(i, 'cursor-grabbing');
    const a = ''.concat(i, 'full-dimension');
    const c = ''.concat(i, 'flex-centered');
    const l = ''.concat(i, 'open');
    const u = ''.concat(i, 'transform-transition');
    const d = ''.concat(i, 'absoluted');
    const f = ''.concat(i, 'slide-btn');
    const p = ''.concat(f, '-container');
    const h = ''.concat(i, 'fade-in');
    const m = ''.concat(i, 'fade-out');
    const g = `${h}-strong`;
    const v = `${m}-strong`;
    const b = ''.concat(i, 'opacity-');
    const x = ''.concat(b, '1');
    const y = ''.concat(i, 'source');
    function w(e) {
      return (w = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function (e) {
          return typeof e;
        }
        : function (e) {
          return e
                  && typeof Symbol === 'function'
                  && e.constructor === Symbol
                  && e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
    }
    function S(e) {
      const t = e.stageIndexes;
      const n = e.core.stageManager;
      const o = e.props.sources.length - 1;
      (n.getPreviousSlideIndex = function () {
        return t.current === 0 ? o : t.current - 1;
      }),
      (n.getNextSlideIndex = function () {
        return t.current === o ? 0 : t.current + 1;
      }),
      (n.updateStageIndexes = o === 0
        ? function () {}
        : o === 1
          ? function () {
            t.current === 0
              ? ((t.next = 1), delete t.previous)
              : ((t.previous = 0), delete t.next);
          }
          : function () {
            (t.previous = n.getPreviousSlideIndex()),
            (t.next = n.getNextSlideIndex());
          }),
      (n.i = o <= 2
        ? function () {
          return !0;
        }
        : function (e) {
          const n = t.current;
          if ((n === 0 && e === o) || (n === o && e === 0)) return !0;
          const i = n - e;
          return i === -1 || i === 0 || i === 1;
        });
    }
    (typeof document === 'undefined' ? 'undefined' : w(document))
        === 'object'
        && (((o = document.createElement('style')).className = r),
        o.appendChild(
          document.createTextNode(
            '.fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}',
          ),
        ),
        document.head.appendChild(o));
    function L(e) {
      let t;
      const n = e.props;
      let o = 0;
      const i = {};
      (this.getSourceTypeFromLocalStorageByUrl = function (e) {
        return t[e] ? t[e] : r(e);
      }),
      (this.handleReceivedSourceTypeForUrl = function (e, n) {
        if (
          !1 === i[n]
              && (o--, e !== 'invalid' ? (i[n] = e) : delete i[n], o === 0)
        ) {
          !(function (e, t) {
            for (const n in t) e[n] = t[n];
          }(t, i));
          try {
            localStorage.setItem('fslightbox-types', JSON.stringify(t));
          } catch (e) {}
        }
      });
      var r = function (e) {
        o++, (i[e] = !1);
      };
      if (n.disableLocalStorage) {
        (this.getSourceTypeFromLocalStorageByUrl = function () {}),
        (this.handleReceivedSourceTypeForUrl = function () {});
      } else {
        try {
          t = JSON.parse(localStorage.getItem('fslightbox-types'));
        } catch (e) {}
        t || ((t = {}), (this.getSourceTypeFromLocalStorageByUrl = r));
      }
    }
    function A(e, t, n, o) {
      const i = e.data;
      const r = e.elements.sources;
      const s = n / o;
      let a = 0;
      this.adjustSize = function () {
        if ((a = i.maxSourceWidth / s) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = o), c();
        (a = o > i.maxSourceHeight ? i.maxSourceHeight : o), c();
      };
      var c = function () {
        (r[t].style.width = `${a * s}px`), (r[t].style.height = `${a}px`);
      };
    }
    function C(e, t) {
      const n = this;
      const o = e.collections.sourceSizers;
      const i = e.elements;
      const r = i.sourceAnimationWrappers;
      const s = i.sources;
      const a = e.isl;
      const c = e.resolve;
      function l(e, n) {
        (o[t] = c(A, [t, e, n])), o[t].adjustSize();
      }
      this.runActions = function (e, o) {
        (a[t] = !0),
        s[t].classList.add(x),
        r[t].classList.add(g),
        r[t].removeChild(r[t].firstChild),
        l(e, o),
        (n.runActions = l);
      };
    }
    function E(e, t) {
      let n;
      const o = this;
      const i = e.elements.sources;
      const r = e.props;
      const s = (0, e.resolve)(C, [t]);
      (this.handleImageLoad = function (e) {
        const t = e.target;
        const n = t.naturalWidth;
        const o = t.naturalHeight;
        s.runActions(n, o);
      }),
      (this.handleVideoLoad = function (e) {
        const t = e.target;
        const o = t.videoWidth;
        const i = t.videoHeight;
        (n = !0), s.runActions(o, i);
      }),
      (this.handleNotMetaDatedVideoLoad = function () {
        n || o.handleYoutubeLoad();
      }),
      (this.handleYoutubeLoad = function () {
        let e = 1920;
        let t = 1080;
        r.maxYoutubeDimensions
              && ((e = r.maxYoutubeDimensions.width),
              (t = r.maxYoutubeDimensions.height)),
        s.runActions(e, t);
      }),
      (this.handleCustomLoad = function () {
        const e = i[t];
        const n = e.offsetWidth;
        const r = e.offsetHeight;
        n && r ? s.runActions(n, r) : setTimeout(o.handleCustomLoad);
      });
    }
    function F(e, t, n) {
      const o = e.elements.sources;
      const i = e.props.customClasses;
      const r = i[t] ? i[t] : '';
      o[t].className = `${n} ${r}`;
    }
    function I(e, t) {
      const n = e.elements.sources;
      const o = e.props.customAttributes;
      for (const i in o[t]) n[t].setAttribute(i, o[t][i]);
    }
    function T(e, t) {
      const n = e.collections.sourceLoadHandlers;
      const o = e.elements;
      const i = o.sources;
      const r = o.sourceAnimationWrappers;
      const s = e.props.sources;
      (i[t] = document.createElement('img')),
      F(e, t, y),
      (i[t].src = s[t]),
      (i[t].onload = n[t].handleImageLoad),
      I(e, t),
      r[t].appendChild(i[t]);
    }
    function N(e, t) {
      const n = e.collections.sourceLoadHandlers;
      const o = e.elements;
      const i = o.sources;
      const r = o.sourceAnimationWrappers;
      const s = e.props;
      const a = s.sources;
      const c = s.videosPosters;
      (i[t] = document.createElement('video')),
      F(e, t, y),
      (i[t].src = a[t]),
      (i[t].onloadedmetadata = function (e) {
        n[t].handleVideoLoad(e);
      }),
      (i[t].controls = !0),
      I(e, t),
      c[t] && (i[t].poster = c[t]);
      const l = document.createElement('source');
      (l.src = a[t]),
      i[t].appendChild(l),
      setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3),
      r[t].appendChild(i[t]);
    }
    function z(e, t) {
      const n = e.collections.sourceLoadHandlers;
      const o = e.elements;
      const r = o.sources;
      const s = o.sourceAnimationWrappers;
      const a = e.props.sources;
      (r[t] = document.createElement('iframe')),
      F(e, t, ''.concat(y, ' ').concat(i, 'youtube-iframe'));
      const c = a[t];
      const l = c.split('?')[1];
      (r[t].src = 'https://www.youtube.com/embed/'
        .concat(
          c.match(
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
          )[2],
          '?',
        )
        .concat(l || '')),
      (r[t].allowFullscreen = !0),
      I(e, t),
      s[t].appendChild(r[t]),
      n[t].handleYoutubeLoad();
    }
    function P(e, t) {
      const n = e.collections.sourceLoadHandlers;
      const o = e.elements;
      const i = o.sources;
      const r = o.sourceAnimationWrappers;
      const s = e.props.sources;
      (i[t] = s[t]),
      F(e, t, ''.concat(i[t].className, ' ').concat(y)),
      r[t].appendChild(i[t]),
      n[t].handleCustomLoad();
    }
    function k(e, t) {
      const n = e.elements;
      const o = n.sources;
      const r = n.sourceAnimationWrappers;
      e.props.sources;
      (o[t] = document.createElement('div')),
      (o[t].className = ''.concat(i, 'invalid-file-wrapper ').concat(c)),
      (o[t].innerHTML = 'Invalid source'),
      r[t].classList.add(g),
      r[t].removeChild(r[t].firstChild),
      r[t].appendChild(o[t]);
    }
    function H(e) {
      const t = e.collections;
      const n = t.sourceLoadHandlers;
      const o = t.sourcesRenderFunctions;
      const i = e.core.sourceDisplayFacade;
      const r = e.resolve;
      this.runActionsForSourceTypeAndIndex = function (t, s) {
        let a;
        switch ((t !== 'invalid' && (n[s] = r(E, [s])), t)) {
          case 'image':
            a = T;
            break;
          case 'video':
            a = N;
            break;
          case 'youtube':
            a = z;
            break;
          case 'custom':
            a = P;
            break;
          default:
            a = k;
        }
        (o[s] = function () {
          return a(e, s);
        }),
        i.displaySourcesWhichShouldBeDisplayed();
      };
    }
    function W() {
      let e;
      let t;
      let n;
      const o = {
        isUrlYoutubeOne(e) {
          const t = document.createElement('a');
          return (
            (t.href = e),
            t.hostname === 'www.youtube.com' || t.hostname === 'youtu.be'
          );
        },
        getTypeFromResponseContentType(e) {
          return e.slice(0, e.indexOf('/'));
        },
      };
      function i() {
        if (n.readyState !== 4) {
          if (n.readyState === 2) {
            let e;
            switch (
              o.getTypeFromResponseContentType(
                n.getResponseHeader('content-type'),
              )
            ) {
              case 'image':
                e = 'image';
                break;
              case 'video':
                e = 'video';
                break;
              default:
                e = 'invalid';
            }
            (n.onreadystatechange = null), n.abort(), t(e);
          }
        } else t('invalid');
      }
      (this.setUrlToCheck = function (t) {
        e = t;
      }),
      (this.getSourceType = function (r) {
        if (o.isUrlYoutubeOne(e)) return r('youtube');
        (t = r),
        ((n = new XMLHttpRequest()).onreadystatechange = i),
        n.open('GET', e, !0),
        n.send();
      });
    }
    function R(e, t, n) {
      const o = e.props;
      const i = o.types;
      const r = o.type;
      const s = o.sources;
      const a = e.resolve;
      (this.getTypeSetByClientForIndex = function (e) {
        let t;
        return i && i[e] ? (t = i[e]) : r && (t = r), t;
      }),
      (this.retrieveTypeWithXhrForIndex = function (e) {
        const o = a(W);
        o.setUrlToCheck(s[e]),
        o.getSourceType((o) => {
          t.handleReceivedSourceTypeForUrl(o, s[e]),
          n.runActionsForSourceTypeAndIndex(o, e);
        });
      });
    }
    function D(e, t) {
      const n = e.core.stageManager;
      const o = e.elements;
      const i = o.smw;
      const r = o.sourceWrappersContainer;
      const s = e.props;
      let l = 0;
      const f = document.createElement('div');
      function p(e) {
        (f.style.transform = 'translateX('.concat(e + l, 'px)')), (l = 0);
      }
      function h() {
        return (1 + s.slideDistance) * innerWidth;
      }
      (f.className = ''.concat(d, ' ').concat(a, ' ').concat(c)),
      (f.s = function () {
        f.style.display = 'flex';
      }),
      (f.h = function () {
        f.style.display = 'none';
      }),
      (f.a = function () {
        f.classList.add(u);
      }),
      (f.d = function () {
        f.classList.remove(u);
      }),
      (f.n = function () {
        f.style.removeProperty('transform');
      }),
      (f.v = function (e) {
        return (l = e), f;
      }),
      (f.ne = function () {
        p(-h());
      }),
      (f.z = function () {
        p(0);
      }),
      (f.p = function () {
        p(h());
      }),
      n.i(t) || f.h(),
      (i[t] = f),
      r.appendChild(f),
      (function (e, t) {
        const n = e.elements;
        const o = n.smw;
        const i = n.sourceAnimationWrappers;
        const r = document.createElement('div');
        const s = document.createElement('div');
        s.className = 'fslightboxl';
        for (let a = 0; a < 3; a++) {
          const c = document.createElement('div');
          s.appendChild(c);
        }
        r.appendChild(s), o[t].appendChild(r), (i[t] = r);
      }(e, t));
    }
    function O(e, t, n, o) {
      const r = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      r.setAttributeNS(null, 'width', t),
      r.setAttributeNS(null, 'height', t),
      r.setAttributeNS(null, 'viewBox', n);
      const s = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      return (
        s.setAttributeNS(null, 'class', ''.concat(i, 'svg-path')),
        s.setAttributeNS(null, 'd', o),
        r.appendChild(s),
        e.appendChild(r),
        r
      );
    }
    function M(e, t) {
      const n = document.createElement('div');
      return (
        (n.className = ''.concat(i, 'toolbar-button ').concat(c)),
        (n.title = t),
        e.appendChild(n),
        n
      );
    }
    function j(e, t) {
      const n = document.createElement('div');
      (n.className = ''.concat(i, 'toolbar')),
      t.appendChild(n),
      (function (e, t) {
        const n = e.componentsServices;
        const o = e.data;
        const i = e.fs;
        const r = 'M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z';
        const s = M(t);
        s.title = 'Enter fullscreen';
        const a = O(s, '20px', '0 0 18 18', r);
        (n.ofs = function () {
          (o.ifs = !0),
          (s.title = 'Exit fullscreen'),
          a.setAttributeNS(null, 'width', '24px'),
          a.setAttributeNS(null, 'height', '24px'),
          a.setAttributeNS(null, 'viewBox', '0 0 950 1024'),
          a.firstChild.setAttributeNS(
            null,
            'd',
            'M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z',
          );
        }),
        (n.xfs = function () {
          (o.ifs = !1),
          (s.title = 'Enter fullscreen'),
          a.setAttributeNS(null, 'width', '20px'),
          a.setAttributeNS(null, 'height', '20px'),
          a.setAttributeNS(null, 'viewBox', '0 0 18 18'),
          a.firstChild.setAttributeNS(null, 'd', r);
        }),
        (s.onclick = i.t);
      }(e, n)),
      (function (e, t) {
        const n = M(t, 'Close');
        (n.onclick = e.core.lightboxCloser.closeLightbox),
        O(
          n,
          '20px',
          '0 0 24 24',
          'M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z',
        );
      }(e, n));
    }
    function X(e) {
      const t = e.props.sources;
      const n = e.elements.container;
      const o = document.createElement('div');
      (o.className = ''.concat(i, 'nav')),
      n.appendChild(o),
      j(e, o),
      t.length > 1
            && (function (e, t) {
              const n = e.componentsServices;
              const o = e.props.sources;
              const r = (e.stageIndexes, document.createElement('div'));
              r.className = ''.concat(i, 'slide-number-container');
              const s = document.createElement('div');
              s.className = c;
              const a = document.createElement('span');
              n.setSlideNumber = function (e) {
                return (a.innerHTML = e);
              };
              const l = document.createElement('span');
              l.className = ''.concat(i, 'slash');
              const u = document.createElement('div');
              (u.innerHTML = o.length),
              r.appendChild(s),
              s.appendChild(a),
              s.appendChild(l),
              s.appendChild(u),
              t.appendChild(r),
              setTimeout(() => {
                s.offsetWidth > 55 && (r.style.justifyContent = 'flex-start');
              });
            }(e, o));
    }
    function B(e, t, n, o) {
      const i = e.elements.container;
      const r = n.charAt(0).toUpperCase() + n.slice(1);
      const s = document.createElement('div');
      (s.className = ''.concat(p, ' ').concat(p, '-').concat(n)),
      (s.title = ''.concat(r, ' slide')),
      (s.onclick = t),
      (function (e, t) {
        const n = document.createElement('div');
        (n.className = ''.concat(f, ' ').concat(c)),
        O(n, '20px', '0 0 20 20', t),
        e.appendChild(n);
      }(s, o)),
      i.appendChild(s);
    }
    function U(e) {
      const t = e.core;
      const n = t.lightboxCloser;
      const o = t.slideChangeFacade;
      const i = e.fs;
      this.listener = function (e) {
        switch (e.key) {
          case 'Escape':
            n.closeLightbox();
            break;
          case 'ArrowLeft':
            o.changeToPrevious();
            break;
          case 'ArrowRight':
            o.changeToNext();
            break;
          case 'F11':
            e.preventDefault(), i.t();
        }
      };
    }
    function q(e) {
      const t = e.elements;
      const n = e.sourcePointerProps;
      const o = e.stageIndexes;
      function i(e, o) {
        t.smw[e].v(n.swipedX)[o]();
      }
      this.runActionsForEvent = function (e) {
        let r; let a; let
          c;
        t.container.contains(t.slideSwipingHoverer)
            || t.container.appendChild(t.slideSwipingHoverer),
        (r = t.container),
        (a = s),
        (c = r.classList).contains(a) || c.add(a),
        (n.swipedX = e.screenX - n.downScreenX);
        const l = o.previous;
        const u = o.next;
        i(o.current, 'z'),
        void 0 !== l && n.swipedX > 0
          ? i(l, 'ne')
          : void 0 !== u && n.swipedX < 0 && i(u, 'p');
      };
    }
    function V(e) {
      const t = e.props.sources;
      const n = e.resolve;
      const o = e.sourcePointerProps;
      const i = n(q);
      t.length === 1
        ? (this.listener = function () {
          o.swipedX = 1;
        })
        : (this.listener = function (e) {
          o.isPointering && i.runActionsForEvent(e);
        });
    }
    function _(e) {
      const t = e.core.slideIndexChanger;
      const n = e.elements.smw;
      const o = e.stageIndexes;
      const i = e.sws;
      function r(e) {
        const t = n[o.current];
        t.a(), t[e]();
      }
      function s(e, t) {
        void 0 !== e && (n[e].s(), n[e][t]());
      }
      (this.runPositiveSwipedXActions = function () {
        const e = o.previous;
        if (void 0 === e) r('z');
        else {
          r('p');
          const n = o.next;
          t.changeTo(e);
          const a = o.previous;
          i.d(a), i.b(n), r('z'), s(a, 'ne');
        }
      }),
      (this.runNegativeSwipedXActions = function () {
        const e = o.next;
        if (void 0 === e) r('z');
        else {
          r('ne');
          const n = o.previous;
          t.changeTo(e);
          const a = o.next;
          i.d(a), i.b(n), r('z'), s(a, 'p');
        }
      });
    }
    function Y(e, t) {
      e.contains(t) && e.removeChild(t);
    }
    function J(e) {
      const t = e.core.lightboxCloser;
      const n = e.elements;
      const o = e.resolve;
      const i = e.sourcePointerProps;
      const r = o(_);
      (this.runNoSwipeActions = function () {
        Y(n.container, n.slideSwipingHoverer),
        i.isSourceDownEventTarget || t.closeLightbox(),
        (i.isPointering = !1);
      }),
      (this.runActions = function () {
        i.swipedX > 0
          ? r.runPositiveSwipedXActions()
          : r.runNegativeSwipedXActions(),
        Y(n.container, n.slideSwipingHoverer),
        n.container.classList.remove(s),
        (i.isPointering = !1);
      });
    }
    function G(e) {
      const t = e.resolve;
      const n = e.sourcePointerProps;
      const o = t(J);
      this.listener = function () {
        n.isPointering
            && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
      };
    }
    function $(e) {
      const t = this;
      const n = e.core;
      const o = n.eventsDispatcher;
      const i = n.globalEventsController;
      const r = n.scrollbarRecompensor;
      const s = e.data;
      const a = e.elements;
      const c = e.fs;
      const u = e.props;
      const d = e.sourcePointerProps;
      (this.isLightboxFadingOut = !1),
      (this.runActions = function () {
        (t.isLightboxFadingOut = !0),
        a.container.classList.add(v),
        i.removeListeners(),
        u.exitFullscreenOnClose && s.ifs && c.x(),
        setTimeout(() => {
          (t.isLightboxFadingOut = !1),
          (d.isPointering = !1),
          a.container.classList.remove(v),
          document.documentElement.classList.remove(l),
          r.removeRecompense(),
          document.body.removeChild(a.container),
          o.dispatch('onClose');
        }, 270);
      });
    }
    function K(e, t) {
      const n = e.classList;
      n.contains(t) && n.remove(t);
    }
    function Q(e) {
      let t; let n; let
        o;
      (n = (t = e).core.eventsDispatcher),
      (o = t.props),
      (n.dispatch = function (e) {
        o[e] && o[e]();
      }),
      (function (e) {
        const t = e.componentsServices;
        const n = e.data;
        const o = e.fs;
        const i = [
          'fullscreenchange',
          'webkitfullscreenchange',
          'mozfullscreenchange',
          'MSFullscreenChange',
        ];
        function r(e) {
          for (let t = 0; t < i.length; t++) document[e](i[t], s);
        }
        function s() {
          document.fullscreenElement
              || document.webkitIsFullScreen
              || document.mozFullScreen
              || document.msFullscreenElement
            ? t.ofs()
            : t.xfs();
        }
        (o.o = function () {
          t.ofs();
          const e = document.documentElement;
          e.requestFullscreen
            ? e.requestFullscreen()
            : e.mozRequestFullScreen
              ? e.mozRequestFullScreen()
              : e.webkitRequestFullscreen
                ? e.webkitRequestFullscreen()
                : e.msRequestFullscreen && e.msRequestFullscreen();
        }),
        (o.x = function () {
          t.xfs(),
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.mozCancelFullScreen
              ? document.mozCancelFullScreen()
              : document.webkitExitFullscreen
                ? document.webkitExitFullscreen()
                : document.msExitFullscreen && document.msExitFullscreen();
        }),
        (o.t = function () {
          n.ifs ? o.x() : o.o();
        }),
        (o.l = function () {
          r('addEventListener');
        }),
        (o.q = function () {
          r('removeEventListener');
        });
      }(e)),
      (function (e) {
        const t = e.core;
        const n = t.globalEventsController;
        const o = t.windowResizeActioner;
        const i = e.fs;
        const r = e.resolve;
        const s = r(U);
        const a = r(V);
        const c = r(G);
        (n.attachListeners = function () {
          document.addEventListener('pointermove', a.listener),
          document.addEventListener('pointerup', c.listener),
          addEventListener('resize', o.runActions),
          document.addEventListener('keydown', s.listener),
          i.l();
        }),
        (n.removeListeners = function () {
          document.removeEventListener('pointermove', a.listener),
          document.removeEventListener('pointerup', c.listener),
          removeEventListener('resize', o.runActions),
          document.removeEventListener('keydown', s.listener),
          i.q();
        });
      }(e)),
      (function (e) {
        const t = e.core.lightboxCloser;
        const n = (0, e.resolve)($);
        t.closeLightbox = function () {
          n.isLightboxFadingOut || n.runActions();
        };
      }(e)),
      (function (e) {
        const t = e.data;
        const n = e.core.scrollbarRecompensor;
        function o() {
          document.body.offsetHeight > innerHeight
                && (document.body.style.marginRight = `${t.scrollbarWidth}px`);
        }
        (n.addRecompense = function () {
          document.readyState === 'complete'
            ? o()
            : addEventListener('load', () => {
              o(), (n.addRecompense = o);
            });
        }),
        (n.removeRecompense = function () {
          document.body.style.removeProperty('margin-right');
        });
      }(e)),
      (function (e) {
        const t = e.core;
        const n = t.slideChangeFacade;
        const o = t.slideIndexChanger;
        const i = t.stageManager;
        e.props.sources.length > 1
          ? ((n.changeToPrevious = function () {
            o.jumpTo(i.getPreviousSlideIndex());
          }),
          (n.changeToNext = function () {
            o.jumpTo(i.getNextSlideIndex());
          }))
          : ((n.changeToPrevious = function () {}),
          (n.changeToNext = function () {}));
      }(e)),
      (function (e) {
        const t = e.componentsServices;
        const n = e.core;
        const o = n.slideIndexChanger;
        const i = n.sourceDisplayFacade;
        const r = n.stageManager;
        const s = e.elements;
        const a = s.smw;
        const c = s.sourceAnimationWrappers;
        const l = e.isl;
        const u = e.stageIndexes;
        const d = e.sws;
        (o.changeTo = function (e) {
          (u.current = e),
          r.updateStageIndexes(),
          t.setSlideNumber(e + 1),
          i.displaySourcesWhichShouldBeDisplayed();
        }),
        (o.jumpTo = function (e) {
          const t = u.previous;
          const n = u.current;
          const i = u.next;
          const s = l[n];
          const f = l[e];
          o.changeTo(e);
          for (let p = 0; p < a.length; p++) a[p].d();
          d.d(n),
          d.c(),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const e = u.previous;
              const o = u.next;
              function p() {
                r.i(n)
                  ? n === u.previous
                    ? a[n].ne()
                    : n === u.next && a[n].p()
                  : (a[n].h(), a[n].n());
              }
              s && c[n].classList.add(m),
              f && c[u.current].classList.add(h),
              d.a(),
              void 0 !== e && e !== n && a[e].ne(),
              a[u.current].n(),
              void 0 !== o && o !== n && a[o].p(),
              d.b(t),
              d.b(i),
              l[n] ? setTimeout(p, 260) : p();
            });
          });
        });
      }(e)),
      (function (e) {
        const t = e.core.sourcesPointerDown;
        const n = e.elements;
        const o = n.smw;
        const i = n.sources;
        const r = e.sourcePointerProps;
        const s = e.stageIndexes;
        t.listener = function (e) {
          e.target.tagName !== 'VIDEO' && e.preventDefault(),
          (r.isPointering = !0),
          (r.downScreenX = e.screenX),
          (r.swipedX = 0);
          const t = i[s.current];
          t && t.contains(e.target)
            ? (r.isSourceDownEventTarget = !0)
            : (r.isSourceDownEventTarget = !1);
          for (let n = 0; n < o.length; n++) o[n].d();
        };
      }(e)),
      (function (e) {
        const t = e.collections.sourcesRenderFunctions;
        const n = e.core.sourceDisplayFacade;
        const o = e.props;
        const i = e.stageIndexes;
        function r(e) {
          t[e] && (t[e](), delete t[e]);
        }
        n.displaySourcesWhichShouldBeDisplayed = function () {
          if (o.loadOnlyCurrentSource) r(i.current);
          else for (const e in i) r(i[e]);
        };
      }(e)),
      (function (e) {
        const t = e.core.stageManager;
        const n = e.elements;
        const o = n.smw;
        const i = n.sourceAnimationWrappers;
        const r = e.isl;
        const s = e.stageIndexes;
        const a = e.sws;
        (a.a = function () {
          for (const e in s) o[s[e]].s();
        }),
        (a.b = function (e) {
          void 0 === e || t.i(e) || (o[e].h(), o[e].n());
        }),
        (a.c = function () {
          for (const e in s) a.d(s[e]);
        }),
        (a.d = function (e) {
          if (r[e]) {
            const t = i[e];
            K(t, g), K(t, h), K(t, m);
          }
        });
      }(e)),
      (function (e) {
        const t = e.collections.sourceSizers;
        const n = e.core.windowResizeActioner;
        const o = e.data;
        const i = e.elements.smw;
        const r = e.stageIndexes;
        n.runActions = function () {
          innerWidth < 992
            ? (o.maxSourceWidth = innerWidth)
            : (o.maxSourceWidth = 0.9 * innerWidth),
          (o.maxSourceHeight = 0.9 * innerHeight);
          for (let e = 0; e < i.length; e++) i[e].d(), t[e] && t[e].adjustSize();
          const n = r.previous;
          const s = r.next;
          void 0 !== n && i[n].ne(), void 0 !== s && i[s].p();
        };
      }(e));
    }
    function Z(e) {
      const t = e.componentsServices;
      const n = e.core;
      const o = n.eventsDispatcher;
      const r = n.globalEventsController;
      const s = n.scrollbarRecompensor;
      const c = n.sourceDisplayFacade;
      const u = n.stageManager;
      const f = n.windowResizeActioner;
      const p = e.data;
      const h = e.elements;
      const m = (e.props, e.stageIndexes);
      const v = e.sws;
      function b() {
        let t; let
          n;
        (p.i = !0),
        (p.scrollbarWidth = (function () {
          const e = document.createElement('div');
          const t = e.style;
          const n = document.createElement('div');
          (t.visibility = 'hidden'),
          (t.width = '100px'),
          (t.msOverflowStyle = 'scrollbar'),
          (t.overflow = 'scroll'),
          (n.style.width = '100%'),
          document.body.appendChild(e);
          const o = e.offsetWidth;
          e.appendChild(n);
          const i = n.offsetWidth;
          return document.body.removeChild(e), o - i;
        }())),
        Q(e),
        (h.container = document.createElement('div')),
        (h.container.className = ''
          .concat(i, 'container ')
          .concat(a, ' ')
          .concat(g)),
        (function (e) {
          const t = e.elements;
          (t.slideSwipingHoverer = document.createElement('div')),
          (t.slideSwipingHoverer.className = ''
            .concat(i, 'slide-swiping-hoverer ')
            .concat(a, ' ')
            .concat(d));
        }(e)),
        X(e),
        (function (e) {
          const t = e.core.sourcesPointerDown;
          const n = e.elements;
          const o = e.props.sources;
          const i = document.createElement('div');
          (i.className = ''.concat(d, ' ').concat(a)),
          n.container.appendChild(i),
          i.addEventListener('pointerdown', t.listener),
          (n.sourceWrappersContainer = i);
          for (let r = 0; r < o.length; r++) D(e, r);
        }(e)),
        e.props.sources.length > 1
              && ((n = (t = e).core.slideChangeFacade),
              B(
                t,
                n.changeToPrevious,
                'previous',
                'M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z',
              ),
              B(
                t,
                n.changeToNext,
                'next',
                'M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z',
              )),
        (function (e) {
          for (
            let t = e.props.sources,
              n = e.resolve,
              o = n(L),
              i = n(H),
              r = n(R, [o, i]),
              s = 0;
            s < t.length;
            s++
          ) {
            if (typeof t[s] === 'string') {
              const a = r.getTypeSetByClientForIndex(s);
              if (a) i.runActionsForSourceTypeAndIndex(a, s);
              else {
                const c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
                c
                  ? i.runActionsForSourceTypeAndIndex(c, s)
                  : r.retrieveTypeWithXhrForIndex(s);
              }
            } else i.runActionsForSourceTypeAndIndex('custom', s);
          }
        }(e)),
        o.dispatch('onInit');
      }
      e.open = function () {
        const n = arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : 0;
        const i = m.previous;
        const a = m.current;
        const d = m.next;
        (m.current = n),
        p.i || S(e),
        u.updateStageIndexes(),
        p.i
          ? (v.c(), v.a(), v.b(i), v.b(a), v.b(d), o.dispatch('onShow'))
          : b(),
        c.displaySourcesWhichShouldBeDisplayed(),
        t.setSlideNumber(n + 1),
        document.body.appendChild(h.container),
        document.documentElement.classList.add(l),
        s.addRecompense(),
        r.attachListeners(),
        f.runActions(),
        h.smw[m.current].n(),
        o.dispatch('onOpen');
      };
    }
    function ee(e, t, n) {
      return (ee = te()
        ? Reflect.construct.bind()
        : function (e, t, n) {
          const o = [null];
          o.push.apply(o, t);
          const i = new (Function.bind.apply(e, o))();
          return n && ne(i, n.prototype), i;
        }).apply(null, arguments);
    }
    function te() {
      if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if (typeof Proxy === 'function') return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], () => {}),
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function ne(e, t) {
      return (ne = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function oe(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return ie(e);
        }(e))
          || (function (e) {
            if (
              (typeof Symbol !== 'undefined' && e[Symbol.iterator] != null)
              || e['@@iterator'] != null
            ) return Array.from(e);
          }(e))
          || (function (e, t) {
            if (!e) return;
            if (typeof e === 'string') return ie(e, t);
            let n = Object.prototype.toString.call(e).slice(8, -1);
            n === 'Object' && e.constructor && (n = e.constructor.name);
            if (n === 'Map' || n === 'Set') return Array.from(e);
            if (
              n === 'Arguments'
              || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) return ie(e, t);
          }(e))
          || (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          }())
      );
    }
    function ie(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    function re() {
      for (
        var e = document.getElementsByTagName('a'),
          t = function (t) {
            if (!e[t].hasAttribute('data-fslightbox')) return 'continue';
            const n = e[t].hasAttribute('data-href')
              ? e[t].getAttribute('data-href')
              : e[t].getAttribute('href');
            if (!n) {
              return (
                console.warn(
                  'The "data-fslightbox" attribute was set without the "href" attribute.',
                ),
                'continue'
              );
            }
            const o = e[t].getAttribute('data-fslightbox');
            fsLightboxInstances[o]
                || (fsLightboxInstances[o] = new FsLightbox());
            let i = null;
            n.charAt(0) === '#'
              ? (i = document
                .getElementById(n.substring(1))
                .cloneNode(!0)).removeAttribute('id')
              : (i = n),
            fsLightboxInstances[o].props.sources.push(i),
            fsLightboxInstances[o].elements.a.push(e[t]);
            const r = fsLightboxInstances[o].props.sources.length - 1;
            (e[t].onclick = function (e) {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              e.preventDefault(), fsLightboxInstances[o].open(r);
            }),
            d('types', 'data-type'),
            d('videosPosters', 'data-video-poster'),
            d('customClasses', 'data-class'),
            d('customClasses', 'data-custom-class');
            for (
              let s = [
                  'href',
                  'data-fslightbox',
                  'data-href',
                  'data-type',
                  'data-video-poster',
                  'data-class',
                  'data-custom-class',
                ],
                a = e[t].attributes,
                c = fsLightboxInstances[o].props.customAttributes,
                l = 0;
              l < a.length;
              l++
            ) {
              if (
                s.indexOf(a[l].name) === -1
                  && a[l].name.substr(0, 5) === 'data-'
              ) {
                c[r] || (c[r] = {});
                const u = a[l].name.substr(5);
                c[r][u] = a[l].value;
              }
            }
            function d(n, i) {
              e[t].hasAttribute(i)
                  && (fsLightboxInstances[o].props[n][r] = e[t].getAttribute(i));
            }
          },
          n = 0;
        n < e.length;
        n++
      ) t(n);
      const o = Object.keys(fsLightboxInstances);
      window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
    }
    (window.FsLightbox = function () {
      const e = this;
      (this.props = {
        sources: [],
        customAttributes: [],
        customClasses: [],
        types: [],
        videosPosters: [],
        slideDistance: 0.3,
      }),
      (this.data = {
        isFullscreenOpen: !1,
        maxSourceWidth: 0,
        maxSourceHeight: 0,
        scrollbarWidth: 0,
      }),
      (this.isl = []),
      (this.sourcePointerProps = {
        downScreenX: null,
        isPointering: !1,
        isSourceDownEventTarget: !1,
        swipedX: 0,
      }),
      (this.stageIndexes = {}),
      (this.elements = {
        a: [],
        container: null,
        slideSwipingHoverer: null,
        smw: [],
        sourceWrappersContainer: null,
        sources: [],
        sourceAnimationWrappers: [],
      }),
      (this.componentsServices = { setSlideNumber() {} }),
      (this.resolve = function (t) {
        const n = arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : [];
        return n.unshift(e), ee(t, oe(n));
      }),
      (this.collections = {
        sourceLoadHandlers: [],
        sourcesRenderFunctions: [],
        sourceSizers: [],
      }),
      (this.core = {
        eventsDispatcher: {},
        globalEventsController: {},
        lightboxCloser: {},
        lightboxUpdater: {},
        scrollbarRecompensor: {},
        slideChangeFacade: {},
        slideIndexChanger: {},
        sourcesPointerDown: {},
        sourceDisplayFacade: {},
        stageManager: {},
        windowResizeActioner: {},
      }),
      (this.fs = {}),
      (this.sws = {}),
      Z(this),
      (this.close = function () {
        return e.core.lightboxCloser.closeLightbox();
      });
    }),
    (window.fsLightboxInstances = {}),
    re(),
    (window.refreshFsLightbox = function () {
      for (const e in fsLightboxInstances) {
        const t = fsLightboxInstances[e].props;
        (fsLightboxInstances[e] = new FsLightbox()),
        (fsLightboxInstances[e].props = t),
        (fsLightboxInstances[e].props.sources = []),
        (fsLightboxInstances[e].elements.a = []);
      }
      re();
    });
  },
]))));
