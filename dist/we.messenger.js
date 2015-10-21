/**
 * We.js client side messenger lib
 */

(function($) {

var messenger = {

  host: null,
  /**
   * Websockets
   * @type {Object}
   */
  ws: {},

  cache: {},

  room : {

    /**
     * Find rooms from API server,
     *
     * @param {Object} opts
     * @return {Object} jQuery ajax request promisse
     */
    findAll: function(opts){
      var cfgs = {
        url: we.messenger.host + '/room',
        query: { my: true }
      };
      $.extend(cfgs, (opts || {}) );
      return $.ajax(cfgs);
    },

    /**
     * Find one room from API server,
     *
     * @param {Number} id   room id
     * @param {Object} opts
     * @return {Object} jQuery ajax request promisse
     */
    findOne: function(id, opts) {
      var cfgs = {
        url: we.messenger.host + '/room/'+id
      };
      $.extend(cfgs, (opts || {}));
      return $.ajax(cfgs);
    },
    create: function(opts) {
      var cfgs = {
        url: we.messenger.host + '/room',
        type: 'POST',
        dataType: 'json'
      };
      $.extend(cfgs, (opts || {}));
      return $.ajax(cfgs);
    },
    update: function(id, opts) {
      var cfgs = {
        url: we.messenger.host + '/room/'+id,
        type: 'PUT',
        dataType: 'json'
      };
      $.extend(cfgs, (opts || {}));
      return $.ajax(cfgs);
    },
    destroy: function(id, opts) {
      var cfgs = {
        url: we.messenger.host + '/room/'+id,
        type: 'DELETE',
        dataType: 'json'
      };
      $.extend(cfgs, (opts || {}));
      return $.ajax(cfgs);
    },
    addMember: function(id, userId, opts) {
      var cfgs = {
        url: we.messenger.host + '/room/'+id
      };
      $.extend(cfgs, (opts || {}));
      return $.ajax(cfgs);
    },
    removeMember: function() {

    },
    accept: function() {

    },
    ignore: function() {

    },
    findAllMembers: function() {

    }
  },

  message : {
    cache: {},

    /**
     * Find messages from API server,
     *
     * @param {Number} roomId
     * @param {Object} opts
     * @return {Object} jQuery ajax request promisse
     */
    findAll: function(roomId, opts) {
      var cfgs = {
        url: we.messenger.host + '/room/'+roomId+'/message'
      };
      $.extend(cfgs, (opts || {}));
      return $.ajax(cfgs);
    },
    findOne: function(id, roomId, opts) {
      var cfgs = {
        url: we.messenger.host + '/room/' + roomId + '/message/' + id
      };
      $.extend(cfgs, (opts || {}));
      return $.ajax(cfgs);
    },
    create: function(roomId, opts) {
      var cfgs = {
        url: we.messenger.host + '/room/'+roomId+'/message',
        type: 'POST',
        dataType: 'json'
      };

      $.extend(cfgs, (opts || {}));
      return $.ajax(cfgs);
    }
  },

  contact: {
    cache: {},

    /**
     * Find rooms from API server,
     *
     * @param {Object} opts
     * @return {Object} jQuery ajax request promisse
     */
    findAll: function(opts){
      var cfgs = {
        url: we.messenger.host + '/contact'
      };
      $.extend(cfgs, (opts || {}) );
      return $.ajax(cfgs);
    },

    /**
     * Find one room from API server,
     *
     * @param {Number} id   room id
     * @param {Object} opts
     * @return {Object} jQuery ajax request promisse
     */
    findOne: function(id, opts) {
      var cfgs = {
        url: we.messenger.host + '/contact/'+id
      };
      $.extend(cfgs, (opts || {}));
      return $.ajax(cfgs);
    },
  },

  init: function(options) {

  }
};

if (!window.we) {
  window.we = {};
}

// exports as we.messenger
window.we.messenger = messenger;

})(window.jQuery);