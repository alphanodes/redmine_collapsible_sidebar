// Function based on https://www.redmine.org/issues/21808#note-27 patch.
// collapsible sidebar jQuery plugin

(function ($) {
  // main container this is applied to
  var main; // triggers show/hide

  var button; // the key to use in local storage
  // this will later be expanded using the current controller and action to
  // allow for different sidebar states for different pages

  var localStorageKey; // true if local storage is available

  var canUseLocalStorage = function () {
    try {
      if ('localStorage' in window) {
        localStorage.setItem('redmine.test.storage', 'ok');
        var item = localStorage.getItem('redmine.test.storage');
        localStorage.removeItem('redmine.test.storage');
        if (item === 'ok') return true;
      }
    } catch (e) {
      console.error(e);
    }

    return false;
  }(); // function to set current sidebar state


  var setState = function setState(state) {
    if (canUseLocalStorage) {
      localStorage.setItem(localStorageKey, state);
    }
  };

  var applyState = function applyState() {
    if (main.hasClass('visible-sidebar')) {
      setState('visible');
    } else {
      setState('hidden');
    }
  };

  var setupToggleButton = function setupToggleButton() {
    button = $('#sidebar-switch-button');
    button.click(function () {
      main.addClass('animate');
      main.toggleClass('visible-sidebar');
      applyState();
      return false;
    });
    applyState();
  };

  $.fn.collapsibleSidebar = function () {
    main = this; // determine previously stored sidebar state for this page

    if (canUseLocalStorage) {
      // determine current controller/action pair and use them as storage key
      var bodyClass = $('body').attr('class');

      if (bodyClass) {
        try {
          localStorageKey = 'redmine-sidebar-state-' + bodyClass.split(/\s+/).filter(function (s) {
            return s.match(/(action|controller)-.*/);
          }).sort().join('-');
        } catch (e) {
          // in case of error (probably IE8), continue with the default key.
          localStorageKey = 'redmine-sidebar-state';
        }
      }

      var storedState = localStorage.getItem(localStorageKey);
      main.toggleClass('visible-sidebar', storedState === 'visible' || !storedState);
    } else {
      main.toggleClass('visible-sidebar', true);
    } // draw the toggle button once the DOM is complete

    $(document).ready(setupToggleButton);
  };
})(jQuery);

window.addEventListener('DOMContentLoaded', function () {
  if (!$('#main').hasClass('nosidebar')) {
    if ($('#sidebar-switch-panel').length == 0) {
      $('#content').prepend('<div id="sidebar-switch-panel"><a id="sidebar-switch-button" href="#"></a></div>');
    }

    try {
      $('#main').collapsibleSidebar();
    } catch (e) {
      $('#main').toggleClass('visible-sidebar', true);
      $('div#sidebar-switch-panel').remove();
      console.error(e);
    }
  }
});
