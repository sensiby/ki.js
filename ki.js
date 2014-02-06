/*!
 * ki.js - jQuery-like API super-tiny JavaScript library
 * Copyright (c) 2014 Denis Ciccale (@tdecs)
 * Released under MIT license
 */
! function (b, c, d) {

  /*
   * init function (internal use)
   * a = selector, dom element or function
   */
  function i(a) {
    c.push.apply(this, a && a.nodeType ? [a] : '' + a === a ? c.slice.call(b.querySelectorAll(a)) : /^f/.test(typeof a) ? $(b).r(a) : null);
  }

  /*
   * $ main method
   * a = css selector, dom object, or function
   * returns instance
   */
  $ = function (a) {
    return new i(a);
  };

  // set ki prototype
  $[d] = i[d] = {
    // default length
    length: 0,

    /*
     * ready method
     * Smallest DOMReady code, ever
     * http://www.dustindiaz.com/smallest-domready-ever
     * a = function to call when dom is ready
     * return this
     */
    r: function (a) {
      return /c/.test(b.readyState) ? a() : $(b).on('DOMContentLoaded', a), this;
    },

    /*
     * on method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    on: function (a, b) {
      return this.each(function (c) {
        c.addEventListener(a, b);
      });
    },

    /*
     * off method
     * a = string event type i.e 'click'
     * b = function
     * return this
     */
    off: function (a, b) {
      return this.each(function (c) {
        c.removeEventListener(a, b);
      });
    },

    /*
     * each method
     * use native forEach to iterate collection
     * a = the function to call each loop
     * b = the this value for that function
     * (d = internal use)
     * return this
     */
    each: function (a, b) {
      c.forEach.call(this, a, b);
      return this;
    },

    // for some reason is needed to get an array-like
    // representation instead of an object
    splice: c.splice
  };
}(document, [], 'prototype');
