/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Resources/assets/admin/js/OrderCreateAddressSelect.js":
/*!*******************************************************************!*\
  !*** ./src/Resources/assets/admin/js/OrderCreateAddressSelect.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var parseKey = function parseKey(key) {
  return key.replace(/(_\w)/g, function (words) {
    return words[1].toUpperCase();
  });
};

$.fn.extend({
  addressBook: function addressBook() {
    var element = this;
    var select = element.parents('.js-address-container').prev().find('> *:first-child');

    var findByName = function findByName(name) {
      return element.find("[name*=\"[".concat(parseKey(name), "]\"]"));
    };

    select.dropdown({
      forceSelection: false,
      onChange: function onChange(name, text, choice) {
        var _choice$data = choice.data(),
            provinceCode = _choice$data.provinceCode,
            provinceName = _choice$data.provinceName;

        var provinceContainer = select.parent().find('.province-container').get(0);
        element.find('input:not([type="radio"]):not([type="checkbox"]), select').each(function (index, input) {
          $(input).val('');
        });
        Object.entries(choice.data()).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              property = _ref2[0],
              value = _ref2[1];

          var field = findByName(property);

          if (property.indexOf('countryCode') !== -1) {
            field.val(value).change();
            var exists = setInterval(function () {
              var provinceCodeField = findByName('provinceCode');
              var provinceNameField = findByName('provinceName');
              var provinceIsLoading = $(provinceContainer).attr('data-loading');

              if (!(typeof provinceIsLoading !== 'undefinded' && provinceIsLoading !== false)) {
                if (provinceCodeField.length !== 0 && (provinceCode !== '' || provinceCode != undefined)) {
                  provinceCodeField.val(provinceCode);
                  clearInterval(exists);
                } else if (provinceNameField.length !== 0 && (provinceName !== '' || provinceName != undefined)) {
                  provinceNameField.val(provinceName);
                  clearInterval(exists);
                }
              }
            }, 100);
          } else if (field.is('[type="radio"]') || field.is('[type="checkbox"]')) {
            field.prop('checked', false);
            field.filter("[value=\"".concat(value, "\"]")).prop('checked', true);
          } else {
            field.val(value);
          }
        });
      }
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  $('#sylius_admin_order_creation_new_order_shippingAddress').addressBook();
  $('#sylius_admin_order_creation_new_order_billingAddress').addressBook();
});

/***/ }),

/***/ "./src/Resources/assets/admin/js/index.js":
/*!************************************************!*\
  !*** ./src/Resources/assets/admin/js/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var semantic_ui_css_components_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-css/components/dropdown */ "./tests/Application/node_modules/semantic-ui-css/components/dropdown.js");
/* harmony import */ var semantic_ui_css_components_dropdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_components_dropdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_css_components_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/components/transition */ "./tests/Application/node_modules/semantic-ui-css/components/transition.js");
/* harmony import */ var semantic_ui_css_components_transition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_components_transition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrderCreateAddressSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderCreateAddressSelect */ "./src/Resources/assets/admin/js/OrderCreateAddressSelect.js");



$(function () {
  (0,_OrderCreateAddressSelect__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/Resources/assets/admin/scss/main.scss":
/*!***************************************************!*\
  !*** ./src/Resources/assets/admin/scss/main.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./tests/Application/node_modules/semantic-ui-css/components/dropdown.js":
/*!*******************************************************************************!*\
  !*** ./tests/Application/node_modules/semantic-ui-css/components/dropdown.js ***!
  \*******************************************************************************/
/***/ (() => {

/*!
 * # Semantic UI 2.4.1 - Dropdown
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ($, window, document, undefined) {

'use strict';

window = (typeof window != 'undefined' && window.Math == Math)
  ? window
  : (typeof self != 'undefined' && self.Math == Math)
    ? self
    : Function('return this')()
;

$.fn.dropdown = function(parameters) {
  var
    $allModules    = $(this),
    $document      = $(document),

    moduleSelector = $allModules.selector || '',

    hasTouch       = ('ontouchstart' in document.documentElement),
    time           = new Date().getTime(),
    performance    = [],

    query          = arguments[0],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
  ;

  $allModules
    .each(function(elementIndex) {
      var
        settings          = ( $.isPlainObject(parameters) )
          ? $.extend(true, {}, $.fn.dropdown.settings, parameters)
          : $.extend({}, $.fn.dropdown.settings),

        className       = settings.className,
        message         = settings.message,
        fields          = settings.fields,
        keys            = settings.keys,
        metadata        = settings.metadata,
        namespace       = settings.namespace,
        regExp          = settings.regExp,
        selector        = settings.selector,
        error           = settings.error,
        templates       = settings.templates,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,

        $module         = $(this),
        $context        = $(settings.context),
        $text           = $module.find(selector.text),
        $search         = $module.find(selector.search),
        $sizer          = $module.find(selector.sizer),
        $input          = $module.find(selector.input),
        $icon           = $module.find(selector.icon),

        $combo = ($module.prev().find(selector.text).length > 0)
          ? $module.prev().find(selector.text)
          : $module.prev(),

        $menu           = $module.children(selector.menu),
        $item           = $menu.find(selector.item),

        activated       = false,
        itemActivated   = false,
        internalChange  = false,
        element         = this,
        instance        = $module.data(moduleNamespace),

        initialLoad,
        pageLostFocus,
        willRefocus,
        elementNamespace,
        id,
        selectObserver,
        menuObserver,
        module
      ;

      module = {

        initialize: function() {
          module.debug('Initializing dropdown', settings);

          if( module.is.alreadySetup() ) {
            module.setup.reference();
          }
          else {

            module.setup.layout();

            if(settings.values) {
              module.change.values(settings.values);
            }

            module.refreshData();

            module.save.defaults();
            module.restore.selected();

            module.create.id();
            module.bind.events();

            module.observeChanges();
            module.instantiate();
          }

        },

        instantiate: function() {
          module.verbose('Storing instance of dropdown', module);
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous dropdown', $module);
          module.remove.tabbable();
          $module
            .off(eventNamespace)
            .removeData(moduleNamespace)
          ;
          $menu
            .off(eventNamespace)
          ;
          $document
            .off(elementNamespace)
          ;
          module.disconnect.menuObserver();
          module.disconnect.selectObserver();
        },

        observeChanges: function() {
          if('MutationObserver' in window) {
            selectObserver = new MutationObserver(module.event.select.mutation);
            menuObserver   = new MutationObserver(module.event.menu.mutation);
            module.debug('Setting up mutation observer', selectObserver, menuObserver);
            module.observe.select();
            module.observe.menu();
          }
        },

        disconnect: {
          menuObserver: function() {
            if(menuObserver) {
              menuObserver.disconnect();
            }
          },
          selectObserver: function() {
            if(selectObserver) {
              selectObserver.disconnect();
            }
          }
        },
        observe: {
          select: function() {
            if(module.has.input()) {
              selectObserver.observe($module[0], {
                childList : true,
                subtree   : true
              });
            }
          },
          menu: function() {
            if(module.has.menu()) {
              menuObserver.observe($menu[0], {
                childList : true,
                subtree   : true
              });
            }
          }
        },

        create: {
          id: function() {
            id = (Math.random().toString(16) + '000000000').substr(2, 8);
            elementNamespace = '.' + id;
            module.verbose('Creating unique id for element', id);
          },
          userChoice: function(values) {
            var
              $userChoices,
              $userChoice,
              isUserValue,
              html
            ;
            values = values || module.get.userValues();
            if(!values) {
              return false;
            }
            values = $.isArray(values)
              ? values
              : [values]
            ;
            $.each(values, function(index, value) {
              if(module.get.item(value) === false) {
                html         = settings.templates.addition( module.add.variables(message.addResult, value) );
                $userChoice  = $('<div />')
                  .html(html)
                  .attr('data-' + metadata.value, value)
                  .attr('data-' + metadata.text, value)
                  .addClass(className.addition)
                  .addClass(className.item)
                ;
                if(settings.hideAdditions) {
                  $userChoice.addClass(className.hidden);
                }
                $userChoices = ($userChoices === undefined)
                  ? $userChoice
                  : $userChoices.add($userChoice)
                ;
                module.verbose('Creating user choices for value', value, $userChoice);
              }
            });
            return $userChoices;
          },
          userLabels: function(value) {
            var
              userValues = module.get.userValues()
            ;
            if(userValues) {
              module.debug('Adding user labels', userValues);
              $.each(userValues, function(index, value) {
                module.verbose('Adding custom user value');
                module.add.label(value, value);
              });
            }
          },
          menu: function() {
            $menu = $('<div />')
              .addClass(className.menu)
              .appendTo($module)
            ;
          },
          sizer: function() {
            $sizer = $('<span />')
              .addClass(className.sizer)
              .insertAfter($search)
            ;
          }
        },

        search: function(query) {
          query = (query !== undefined)
            ? query
            : module.get.query()
          ;
          module.verbose('Searching for query', query);
          if(module.has.minCharacters(query)) {
            module.filter(query);
          }
          else {
            module.hide();
          }
        },

        select: {
          firstUnfiltered: function() {
            module.verbose('Selecting first non-filtered element');
            module.remove.selectedItem();
            $item
              .not(selector.unselectable)
              .not(selector.addition + selector.hidden)
                .eq(0)
                .addClass(className.selected)
            ;
          },
          nextAvailable: function($selected) {
            $selected = $selected.eq(0);
            var
              $nextAvailable = $selected.nextAll(selector.item).not(selector.unselectable).eq(0),
              $prevAvailable = $selected.prevAll(selector.item).not(selector.unselectable).eq(0),
              hasNext        = ($nextAvailable.length > 0)
            ;
            if(hasNext) {
              module.verbose('Moving selection to', $nextAvailable);
              $nextAvailable.addClass(className.selected);
            }
            else {
              module.verbose('Moving selection to', $prevAvailable);
              $prevAvailable.addClass(className.selected);
            }
          }
        },

        setup: {
          api: function() {
            var
              apiSettings = {
                debug   : settings.debug,
                urlData : {
                  value : module.get.value(),
                  query : module.get.query()
                },
                on    : false
              }
            ;
            module.verbose('First request, initializing API');
            $module
              .api(apiSettings)
            ;
          },
          layout: function() {
            if( $module.is('select') ) {
              module.setup.select();
              module.setup.returnedObject();
            }
            if( !module.has.menu() ) {
              module.create.menu();
            }
            if( module.is.search() && !module.has.search() ) {
              module.verbose('Adding search input');
              $search = $('<input />')
                .addClass(className.search)
                .prop('autocomplete', 'off')
                .insertBefore($text)
              ;
            }
            if( module.is.multiple() && module.is.searchSelection() && !module.has.sizer()) {
              module.create.sizer();
            }
            if(settings.allowTab) {
              module.set.tabbable();
            }
          },
          select: function() {
            var
              selectValues  = module.get.selectValues()
            ;
            module.debug('Dropdown initialized on a select', selectValues);
            if( $module.is('select') ) {
              $input = $module;
            }
            // see if select is placed correctly already
            if($input.parent(selector.dropdown).length > 0) {
              module.debug('UI dropdown already exists. Creating dropdown menu only');
              $module = $input.closest(selector.dropdown);
              if( !module.has.menu() ) {
                module.create.menu();
              }
              $menu = $module.children(selector.menu);
              module.setup.menu(selectValues);
            }
            else {
              module.debug('Creating entire dropdown from select');
              $module = $('<div />')
                .attr('class', $input.attr('class') )
                .addClass(className.selection)
                .addClass(className.dropdown)
                .html( templates.dropdown(selectValues) )
                .insertBefore($input)
              ;
              if($input.hasClass(className.multiple) && $input.prop('multiple') === false) {
                module.error(error.missingMultiple);
                $input.prop('multiple', true);
              }
              if($input.is('[multiple]')) {
                module.set.multiple();
              }
              if ($input.prop('disabled')) {
                module.debug('Disabling dropdown');
                $module.addClass(className.disabled);
              }
              $input
                .removeAttr('class')
                .detach()
                .prependTo($module)
              ;
            }
            module.refresh();
          },
          menu: function(values) {
            $menu.html( templates.menu(values, fields));
            $item = $menu.find(selector.item);
          },
          reference: function() {
            module.debug('Dropdown behavior was called on select, replacing with closest dropdown');
            // replace module reference
            $module  = $module.parent(selector.dropdown);
            instance = $module.data(moduleNamespace);
            element  = $module.get(0);
            module.refresh();
            module.setup.returnedObject();
          },
          returnedObject: function() {
            var
              $firstModules = $allModules.slice(0, elementIndex),
              $lastModules  = $allModules.slice(elementIndex + 1)
            ;
            // adjust all modules to use correct reference
            $allModules = $firstModules.add($module).add($lastModules);
          }
        },

        refresh: function() {
          module.refreshSelectors();
          module.refreshData();
        },

        refreshItems: function() {
          $item = $menu.find(selector.item);
        },

        refreshSelectors: function() {
          module.verbose('Refreshing selector cache');
          $text   = $module.find(selector.text);
          $search = $module.find(selector.search);
          $input  = $module.find(selector.input);
          $icon   = $module.find(selector.icon);
          $combo  = ($module.prev().find(selector.text).length > 0)
            ? $module.prev().find(selector.text)
            : $module.prev()
          ;
          $menu    = $module.children(selector.menu);
          $item    = $menu.find(selector.item);
        },

        refreshData: function() {
          module.verbose('Refreshing cached metadata');
          $item
            .removeData(metadata.text)
            .removeData(metadata.value)
          ;
        },

        clearData: function() {
          module.verbose('Clearing metadata');
          $item
            .removeData(metadata.text)
            .removeData(metadata.value)
          ;
          $module
            .removeData(metadata.defaultText)
            .removeData(metadata.defaultValue)
            .removeData(metadata.placeholderText)
          ;
        },

        toggle: function() {
          module.verbose('Toggling menu visibility');
          if( !module.is.active() ) {
            module.show();
          }
          else {
            module.hide();
          }
        },

        show: function(callback) {
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          if(!module.can.show() && module.is.remote()) {
            module.debug('No API results retrieved, searching before show');
            module.queryRemote(module.get.query(), module.show);
          }
          if( module.can.show() && !module.is.active() ) {
            module.debug('Showing dropdown');
            if(module.has.message() && !(module.has.maxSelections() || module.has.allResultsFiltered()) ) {
              module.remove.message();
            }
            if(module.is.allFiltered()) {
              return true;
            }
            if(settings.onShow.call(element) !== false) {
              module.animate.show(function() {
                if( module.can.click() ) {
                  module.bind.intent();
                }
                if(module.has.menuSearch()) {
                  module.focusSearch();
                }
                module.set.visible();
                callback.call(element);
              });
            }
          }
        },

        hide: function(callback) {
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          if( module.is.active() && !module.is.animatingOutward() ) {
            module.debug('Hiding dropdown');
            if(settings.onHide.call(element) !== false) {
              module.animate.hide(function() {
                module.remove.visible();
                callback.call(element);
              });
            }
          }
        },

        hideOthers: function() {
          module.verbose('Finding other dropdowns to hide');
          $allModules
            .not($module)
              .has(selector.menu + '.' + className.visible)
                .dropdown('hide')
          ;
        },

        hideMenu: function() {
          module.verbose('Hiding menu  instantaneously');
          module.remove.active();
          module.remove.visible();
          $menu.transition('hide');
        },

        hideSubMenus: function() {
          var
            $subMenus = $menu.children(selector.item).find(selector.menu)
          ;
          module.verbose('Hiding sub menus', $subMenus);
          $subMenus.transition('hide');
        },

        bind: {
          events: function() {
            if(hasTouch) {
              module.bind.touchEvents();
            }
            module.bind.keyboardEvents();
            module.bind.inputEvents();
            module.bind.mouseEvents();
          },
          touchEvents: function() {
            module.debug('Touch device detected binding additional touch events');
            if( module.is.searchSelection() ) {
              // do nothing special yet
            }
            else if( module.is.single() ) {
              $module
                .on('touchstart' + eventNamespace, module.event.test.toggle)
              ;
            }
            $menu
              .on('touchstart' + eventNamespace, selector.item, module.event.item.mouseenter)
            ;
          },
          keyboardEvents: function() {
            module.verbose('Binding keyboard events');
            $module
              .on('keydown' + eventNamespace, module.event.keydown)
            ;
            if( module.has.search() ) {
              $module
                .on(module.get.inputEvent() + eventNamespace, selector.search, module.event.input)
              ;
            }
            if( module.is.multiple() ) {
              $document
                .on('keydown' + elementNamespace, module.event.document.keydown)
              ;
            }
          },
          inputEvents: function() {
            module.verbose('Binding input change events');
            $module
              .on('change' + eventNamespace, selector.input, module.event.change)
            ;
          },
          mouseEvents: function() {
            module.verbose('Binding mouse events');
            if(module.is.multiple()) {
              $module
                .on('click'   + eventNamespace, selector.label,  module.event.label.click)
                .on('click'   + eventNamespace, selector.remove, module.event.remove.click)
              ;
            }
            if( module.is.searchSelection() ) {
              $module
                .on('mousedown' + eventNamespace, module.event.mousedown)
                .on('mouseup'   + eventNamespace, module.event.mouseup)
                .on('mousedown' + eventNamespace, selector.menu,   module.event.menu.mousedown)
                .on('mouseup'   + eventNamespace, selector.menu,   module.event.menu.mouseup)
                .on('click'     + eventNamespace, selector.icon,   module.event.icon.click)
                .on('focus'     + eventNamespace, selector.search, module.event.search.focus)
                .on('click'     + eventNamespace, selector.search, module.event.search.focus)
                .on('blur'      + eventNamespace, selector.search, module.event.search.blur)
                .on('click'     + eventNamespace, selector.text,   module.event.text.focus)
              ;
              if(module.is.multiple()) {
                $module
                  .on('click' + eventNamespace, module.event.click)
                ;
              }
            }
            else {
              if(settings.on == 'click') {
                $module
                  .on('click' + eventNamespace, module.event.test.toggle)
                ;
              }
              else if(settings.on == 'hover') {
                $module
                  .on('mouseenter' + eventNamespace, module.delay.show)
                  .on('mouseleave' + eventNamespace, module.delay.hide)
                ;
              }
              else {
                $module
                  .on(settings.on + eventNamespace, module.toggle)
                ;
              }
              $module
                .on('click' + eventNamespace, selector.icon, module.event.icon.click)
                .on('mousedown' + eventNamespace, module.event.mousedown)
                .on('mouseup'   + eventNamespace, module.event.mouseup)
                .on('focus'     + eventNamespace, module.event.focus)
              ;
              if(module.has.menuSearch() ) {
                $module
                  .on('blur' + eventNamespace, selector.search, module.event.search.blur)
                ;
              }
              else {
                $module
                  .on('blur' + eventNamespace, module.event.blur)
                ;
              }
            }
            $menu
              .on('mouseenter' + eventNamespace, selector.item, module.event.item.mouseenter)
              .on('mouseleave' + eventNamespace, selector.item, module.event.item.mouseleave)
              .on('click'      + eventNamespace, selector.item, module.event.item.click)
            ;
          },
          intent: function() {
            module.verbose('Binding hide intent event to document');
            if(hasTouch) {
              $document
                .on('touchstart' + elementNamespace, module.event.test.touch)
                .on('touchmove'  + elementNamespace, module.event.test.touch)
              ;
            }
            $document
              .on('click' + elementNamespace, module.event.test.hide)
            ;
          }
        },

        unbind: {
          intent: function() {
            module.verbose('Removing hide intent event from document');
            if(hasTouch) {
              $document
                .off('touchstart' + elementNamespace)
                .off('touchmove' + elementNamespace)
              ;
            }
            $document
              .off('click' + elementNamespace)
            ;
          }
        },

        filter: function(query) {
          var
            searchTerm = (query !== undefined)
              ? query
              : module.get.query(),
            afterFiltered = function() {
              if(module.is.multiple()) {
                module.filterActive();
              }
              if(query || (!query && module.get.activeItem().length == 0)) {
                module.select.firstUnfiltered();
              }
              if( module.has.allResultsFiltered() ) {
                if( settings.onNoResults.call(element, searchTerm) ) {
                  if(settings.allowAdditions) {
                    if(settings.hideAdditions) {
                      module.verbose('User addition with no menu, setting empty style');
                      module.set.empty();
                      module.hideMenu();
                    }
                  }
                  else {
                    module.verbose('All items filtered, showing message', searchTerm);
                    module.add.message(message.noResults);
                  }
                }
                else {
                  module.verbose('All items filtered, hiding dropdown', searchTerm);
                  module.hideMenu();
                }
              }
              else {
                module.remove.empty();
                module.remove.message();
              }
              if(settings.allowAdditions) {
                module.add.userSuggestion(query);
              }
              if(module.is.searchSelection() && module.can.show() && module.is.focusedOnSearch() ) {
                module.show();
              }
            }
          ;
          if(settings.useLabels && module.has.maxSelections()) {
            return;
          }
          if(settings.apiSettings) {
            if( module.can.useAPI() ) {
              module.queryRemote(searchTerm, function() {
                if(settings.filterRemoteData) {
                  module.filterItems(searchTerm);
                }
                afterFiltered();
              });
            }
            else {
              module.error(error.noAPI);
            }
          }
          else {
            module.filterItems(searchTerm);
            afterFiltered();
          }
        },

        queryRemote: function(query, callback) {
          var
            apiSettings = {
              errorDuration : false,
              cache         : 'local',
              throttle      : settings.throttle,
              urlData       : {
                query: query
              },
              onError: function() {
                module.add.message(message.serverError);
                callback();
              },
              onFailure: function() {
                module.add.message(message.serverError);
                callback();
              },
              onSuccess : function(response) {
                var
                  values          = response[fields.remoteValues],
                  hasRemoteValues = ($.isArray(values) && values.length > 0)
                ;
                if(hasRemoteValues) {
                  module.remove.message();
                  module.setup.menu({
                    values: response[fields.remoteValues]
                  });
                }
                else {
                  module.add.message(message.noResults);
                }
                callback();
              }
            }
          ;
          if( !$module.api('get request') ) {
            module.setup.api();
          }
          apiSettings = $.extend(true, {}, apiSettings, settings.apiSettings);
          $module
            .api('setting', apiSettings)
            .api('query')
          ;
        },

        filterItems: function(query) {
          var
            searchTerm = (query !== undefined)
              ? query
              : module.get.query(),
            results          =  null,
            escapedTerm      = module.escape.string(searchTerm),
            beginsWithRegExp = new RegExp('^' + escapedTerm, 'igm')
          ;
          // avoid loop if we're matching nothing
          if( module.has.query() ) {
            results = [];

            module.verbose('Searching for matching values', searchTerm);
            $item
              .each(function(){
                var
                  $choice = $(this),
                  text,
                  value
                ;
                if(settings.match == 'both' || settings.match == 'text') {
                  text = String(module.get.choiceText($choice, false));
                  if(text.search(beginsWithRegExp) !== -1) {
                    results.push(this);
                    return true;
                  }
                  else if (settings.fullTextSearch === 'exact' && module.exactSearch(searchTerm, text)) {
                    results.push(this);
                    return true;
                  }
                  else if (settings.fullTextSearch === true && module.fuzzySearch(searchTerm, text)) {
                    results.push(this);
                    return true;
                  }
                }
                if(settings.match == 'both' || settings.match == 'value') {
                  value = String(module.get.choiceValue($choice, text));
                  if(value.search(beginsWithRegExp) !== -1) {
                    results.push(this);
                    return true;
                  }
                  else if (settings.fullTextSearch === 'exact' && module.exactSearch(searchTerm, value)) {
                    results.push(this);
                    return true;
                  }
                  else if (settings.fullTextSearch === true && module.fuzzySearch(searchTerm, value)) {
                    results.push(this);
                    return true;
                  }
                }
              })
            ;
          }
          module.debug('Showing only matched items', searchTerm);
          module.remove.filteredItem();
          if(results) {
            $item
              .not(results)
              .addClass(className.filtered)
            ;
          }
        },

        fuzzySearch: function(query, term) {
          var
            termLength  = term.length,
            queryLength = query.length
          ;
          query = query.toLowerCase();
          term  = term.toLowerCase();
          if(queryLength > termLength) {
            return false;
          }
          if(queryLength === termLength) {
            return (query === term);
          }
          search: for (var characterIndex = 0, nextCharacterIndex = 0; characterIndex < queryLength; characterIndex++) {
            var
              queryCharacter = query.charCodeAt(characterIndex)
            ;
            while(nextCharacterIndex < termLength) {
              if(term.charCodeAt(nextCharacterIndex++) === queryCharacter) {
                continue search;
              }
            }
            return false;
          }
          return true;
        },
        exactSearch: function (query, term) {
          query = query.toLowerCase();
          term  = term.toLowerCase();
          if(term.indexOf(query) > -1) {
             return true;
          }
          return false;
        },
        filterActive: function() {
          if(settings.useLabels) {
            $item.filter('.' + className.active)
              .addClass(className.filtered)
            ;
          }
        },

        focusSearch: function(skipHandler) {
          if( module.has.search() && !module.is.focusedOnSearch() ) {
            if(skipHandler) {
              $module.off('focus' + eventNamespace, selector.search);
              $search.focus();
              $module.on('focus'  + eventNamespace, selector.search, module.event.search.focus);
            }
            else {
              $search.focus();
            }
          }
        },

        forceSelection: function() {
          var
            $currentlySelected = $item.not(className.filtered).filter('.' + className.selected).eq(0),
            $activeItem        = $item.not(className.filtered).filter('.' + className.active).eq(0),
            $selectedItem      = ($currentlySelected.length > 0)
              ? $currentlySelected
              : $activeItem,
            hasSelected = ($selectedItem.length > 0)
          ;
          if(hasSelected && !module.is.multiple()) {
            module.debug('Forcing partial selection to selected item', $selectedItem);
            module.event.item.click.call($selectedItem, {}, true);
            return;
          }
          else {
            if(settings.allowAdditions) {
              module.set.selected(module.get.query());
              module.remove.searchTerm();
            }
            else {
              module.remove.searchTerm();
            }
          }
        },

        change: {
          values: function(values) {
            if(!settings.allowAdditions) {
              module.clear();
            }
            module.debug('Creating dropdown with specified values', values);
            module.setup.menu({values: values});
            $.each(values, function(index, item) {
              if(item.selected == true) {
                module.debug('Setting initial selection to', item.value);
                module.set.selected(item.value);
                return true;
              }
            });
          }
        },

        event: {
          change: function() {
            if(!internalChange) {
              module.debug('Input changed, updating selection');
              module.set.selected();
            }
          },
          focus: function() {
            if(settings.showOnFocus && !activated && module.is.hidden() && !pageLostFocus) {
              module.show();
            }
          },
          blur: function(event) {
            pageLostFocus = (document.activeElement === this);
            if(!activated && !pageLostFocus) {
              module.remove.activeLabel();
              module.hide();
            }
          },
          mousedown: function() {
            if(module.is.searchSelection()) {
              // prevent menu hiding on immediate re-focus
              willRefocus = true;
            }
            else {
              // prevents focus callback from occurring on mousedown
              activated = true;
            }
          },
          mouseup: function() {
            if(module.is.searchSelection()) {
              // prevent menu hiding on immediate re-focus
              willRefocus = false;
            }
            else {
              activated = false;
            }
          },
          click: function(event) {
            var
              $target = $(event.target)
            ;
            // focus search
            if($target.is($module)) {
              if(!module.is.focusedOnSearch()) {
                module.focusSearch();
              }
              else {
                module.show();
              }
            }
          },
          search: {
            focus: function() {
              activated = true;
              if(module.is.multiple()) {
                module.remove.activeLabel();
              }
              if(settings.showOnFocus) {
                module.search();
              }
            },
            blur: function(event) {
              pageLostFocus = (document.activeElement === this);
              if(module.is.searchSelection() && !willRefocus) {
                if(!itemActivated && !pageLostFocus) {
                  if(settings.forceSelection) {
                    module.forceSelection();
                  }
                  module.hide();
                }
              }
              willRefocus = false;
            }
          },
          icon: {
            click: function(event) {
              if($icon.hasClass(className.clear)) {
                module.clear();
              }
              else if (module.can.click()) {
                module.toggle();
              }
            }
          },
          text: {
            focus: function(event) {
              activated = true;
              module.focusSearch();
            }
          },
          input: function(event) {
            if(module.is.multiple() || module.is.searchSelection()) {
              module.set.filtered();
            }
            clearTimeout(module.timer);
            module.timer = setTimeout(module.search, settings.delay.search);
          },
          label: {
            click: function(event) {
              var
                $label        = $(this),
                $labels       = $module.find(selector.label),
                $activeLabels = $labels.filter('.' + className.active),
                $nextActive   = $label.nextAll('.' + className.active),
                $prevActive   = $label.prevAll('.' + className.active),
                $range = ($nextActive.length > 0)
                  ? $label.nextUntil($nextActive).add($activeLabels).add($label)
                  : $label.prevUntil($prevActive).add($activeLabels).add($label)
              ;
              if(event.shiftKey) {
                $activeLabels.removeClass(className.active);
                $range.addClass(className.active);
              }
              else if(event.ctrlKey) {
                $label.toggleClass(className.active);
              }
              else {
                $activeLabels.removeClass(className.active);
                $label.addClass(className.active);
              }
              settings.onLabelSelect.apply(this, $labels.filter('.' + className.active));
            }
          },
          remove: {
            click: function() {
              var
                $label = $(this).parent()
              ;
              if( $label.hasClass(className.active) ) {
                // remove all selected labels
                module.remove.activeLabels();
              }
              else {
                // remove this label only
                module.remove.activeLabels( $label );
              }
            }
          },
          test: {
            toggle: function(event) {
              var
                toggleBehavior = (module.is.multiple())
                  ? module.show
                  : module.toggle
              ;
              if(module.is.bubbledLabelClick(event) || module.is.bubbledIconClick(event)) {
                return;
              }
              if( module.determine.eventOnElement(event, toggleBehavior) ) {
                event.preventDefault();
              }
            },
            touch: function(event) {
              module.determine.eventOnElement(event, function() {
                if(event.type == 'touchstart') {
                  module.timer = setTimeout(function() {
                    module.hide();
                  }, settings.delay.touch);
                }
                else if(event.type == 'touchmove') {
                  clearTimeout(module.timer);
                }
              });
              event.stopPropagation();
            },
            hide: function(event) {
              module.determine.eventInModule(event, module.hide);
            }
          },
          select: {
            mutation: function(mutations) {
              module.debug('<select> modified, recreating menu');
              var
                isSelectMutation = false
              ;
              $.each(mutations, function(index, mutation) {
                if($(mutation.target).is('select') || $(mutation.addedNodes).is('select')) {
                  isSelectMutation = true;
                  return true;
                }
              });
              if(isSelectMutation) {
                module.disconnect.selectObserver();
                module.refresh();
                module.setup.select();
                module.set.selected();
                module.observe.select();
              }
            }
          },
          menu: {
            mutation: function(mutations) {
              var
                mutation   = mutations[0],
                $addedNode = mutation.addedNodes
                  ? $(mutation.addedNodes[0])
                  : $(false),
                $removedNode = mutation.removedNodes
                  ? $(mutation.removedNodes[0])
                  : $(false),
                $changedNodes  = $addedNode.add($removedNode),
                isUserAddition = $changedNodes.is(selector.addition) || $changedNodes.closest(selector.addition).length > 0,
                isMessage      = $changedNodes.is(selector.message)  || $changedNodes.closest(selector.message).length > 0
              ;
              if(isUserAddition || isMessage) {
                module.debug('Updating item selector cache');
                module.refreshItems();
              }
              else {
                module.debug('Menu modified, updating selector cache');
                module.refresh();
              }
            },
            mousedown: function() {
              itemActivated = true;
            },
            mouseup: function() {
              itemActivated = false;
            }
          },
          item: {
            mouseenter: function(event) {
              var
                $target        = $(event.target),
                $item          = $(this),
                $subMenu       = $item.children(selector.menu),
                $otherMenus    = $item.siblings(selector.item).children(selector.menu),
                hasSubMenu     = ($subMenu.length > 0),
                isBubbledEvent = ($subMenu.find($target).length > 0)
              ;
              if( !isBubbledEvent && hasSubMenu ) {
                clearTimeout(module.itemTimer);
                module.itemTimer = setTimeout(function() {
                  module.verbose('Showing sub-menu', $subMenu);
                  $.each($otherMenus, function() {
                    module.animate.hide(false, $(this));
                  });
                  module.animate.show(false, $subMenu);
                }, settings.delay.show);
                event.preventDefault();
              }
            },
            mouseleave: function(event) {
              var
                $subMenu = $(this).children(selector.menu)
              ;
              if($subMenu.length > 0) {
                clearTimeout(module.itemTimer);
                module.itemTimer = setTimeout(function() {
                  module.verbose('Hiding sub-menu', $subMenu);
                  module.animate.hide(false, $subMenu);
                }, settings.delay.hide);
              }
            },
            click: function (event, skipRefocus) {
              var
                $choice        = $(this),
                $target        = (event)
                  ? $(event.target)
                  : $(''),
                $subMenu       = $choice.find(selector.menu),
                text           = module.get.choiceText($choice),
                value          = module.get.choiceValue($choice, text),
                hasSubMenu     = ($subMenu.length > 0),
                isBubbledEvent = ($subMenu.find($target).length > 0)
              ;
              // prevents IE11 bug where menu receives focus even though `tabindex=-1`
              if(module.has.menuSearch()) {
                $(document.activeElement).blur();
              }
              if(!isBubbledEvent && (!hasSubMenu || settings.allowCategorySelection)) {
                if(module.is.searchSelection()) {
                  if(settings.allowAdditions) {
                    module.remove.userAddition();
                  }
                  module.remove.searchTerm();
                  if(!module.is.focusedOnSearch() && !(skipRefocus == true)) {
                    module.focusSearch(true);
                  }
                }
                if(!settings.useLabels) {
                  module.remove.filteredItem();
                  module.set.scrollPosition($choice);
                }
                module.determine.selectAction.call(this, text, value);
              }
            }
          },

          document: {
            // label selection should occur even when element has no focus
            keydown: function(event) {
              var
                pressedKey    = event.which,
                isShortcutKey = module.is.inObject(pressedKey, keys)
              ;
              if(isShortcutKey) {
                var
                  $label            = $module.find(selector.label),
                  $activeLabel      = $label.filter('.' + className.active),
                  activeValue       = $activeLabel.data(metadata.value),
                  labelIndex        = $label.index($activeLabel),
                  labelCount        = $label.length,
                  hasActiveLabel    = ($activeLabel.length > 0),
                  hasMultipleActive = ($activeLabel.length > 1),
                  isFirstLabel      = (labelIndex === 0),
                  isLastLabel       = (labelIndex + 1 == labelCount),
                  isSearch          = module.is.searchSelection(),
                  isFocusedOnSearch = module.is.focusedOnSearch(),
                  isFocused         = module.is.focused(),
                  caretAtStart      = (isFocusedOnSearch && module.get.caretPosition() === 0),
                  $nextLabel
                ;
                if(isSearch && !hasActiveLabel && !isFocusedOnSearch) {
                  return;
                }

                if(pressedKey == keys.leftArrow) {
                  // activate previous label
                  if((isFocused || caretAtStart) && !hasActiveLabel) {
                    module.verbose('Selecting previous label');
                    $label.last().addClass(className.active);
                  }
                  else if(hasActiveLabel) {
                    if(!event.shiftKey) {
                      module.verbose('Selecting previous label');
                      $label.removeClass(className.active);
                    }
                    else {
                      module.verbose('Adding previous label to selection');
                    }
                    if(isFirstLabel && !hasMultipleActive) {
                      $activeLabel.addClass(className.active);
                    }
                    else {
                      $activeLabel.prev(selector.siblingLabel)
                        .addClass(className.active)
                        .end()
                      ;
                    }
                    event.preventDefault();
                  }
                }
                else if(pressedKey == keys.rightArrow) {
                  // activate first label
                  if(isFocused && !hasActiveLabel) {
                    $label.first().addClass(className.active);
                  }
                  // activate next label
                  if(hasActiveLabel) {
                    if(!event.shiftKey) {
                      module.verbose('Selecting next label');
                      $label.removeClass(className.active);
                    }
                    else {
                      module.verbose('Adding next label to selection');
                    }
                    if(isLastLabel) {
                      if(isSearch) {
                        if(!isFocusedOnSearch) {
                          module.focusSearch();
                        }
                        else {
                          $label.removeClass(className.active);
                        }
                      }
                      else if(hasMultipleActive) {
                        $activeLabel.next(selector.siblingLabel).addClass(className.active);
                      }
                      else {
                        $activeLabel.addClass(className.active);
                      }
                    }
                    else {
                      $activeLabel.next(selector.siblingLabel).addClass(className.active);
                    }
                    event.preventDefault();
                  }
                }
                else if(pressedKey == keys.deleteKey || pressedKey == keys.backspace) {
                  if(hasActiveLabel) {
                    module.verbose('Removing active labels');
                    if(isLastLabel) {
                      if(isSearch && !isFocusedOnSearch) {
                        module.focusSearch();
                      }
                    }
                    $activeLabel.last().next(selector.siblingLabel).addClass(className.active);
                    module.remove.activeLabels($activeLabel);
                    event.preventDefault();
                  }
                  else if(caretAtStart && !hasActiveLabel && pressedKey == keys.backspace) {
                    module.verbose('Removing last label on input backspace');
                    $activeLabel = $label.last().addClass(className.active);
                    module.remove.activeLabels($activeLabel);
                  }
                }
                else {
                  $activeLabel.removeClass(className.active);
                }
              }
            }
          },

          keydown: function(event) {
            var
              pressedKey    = event.which,
              isShortcutKey = module.is.inObject(pressedKey, keys)
            ;
            if(isShortcutKey) {
              var
                $currentlySelected = $item.not(selector.unselectable).filter('.' + className.selected).eq(0),
                $activeItem        = $menu.children('.' + className.active).eq(0),
                $selectedItem      = ($currentlySelected.length > 0)
                  ? $currentlySelected
                  : $activeItem,
                $visibleItems = ($selectedItem.length > 0)
                  ? $selectedItem.siblings(':not(.' + className.filtered +')').addBack()
                  : $menu.children(':not(.' + className.filtered +')'),
                $subMenu              = $selectedItem.children(selector.menu),
                $parentMenu           = $selectedItem.closest(selector.menu),
                inVisibleMenu         = ($parentMenu.hasClass(className.visible) || $parentMenu.hasClass(className.animating) || $parentMenu.parent(selector.menu).length > 0),
                hasSubMenu            = ($subMenu.length> 0),
                hasSelectedItem       = ($selectedItem.length > 0),
                selectedIsSelectable  = ($selectedItem.not(selector.unselectable).length > 0),
                delimiterPressed      = (pressedKey == keys.delimiter && settings.allowAdditions && module.is.multiple()),
                isAdditionWithoutMenu = (settings.allowAdditions && settings.hideAdditions && (pressedKey == keys.enter || delimiterPressed) && selectedIsSelectable),
                $nextItem,
                isSubMenuItem,
                newIndex
              ;
              // allow selection with menu closed
              if(isAdditionWithoutMenu) {
                module.verbose('Selecting item from keyboard shortcut', $selectedItem);
                module.event.item.click.call($selectedItem, event);
                if(module.is.searchSelection()) {
                  module.remove.searchTerm();
                }
              }

              // visible menu keyboard shortcuts
              if( module.is.visible() ) {

                // enter (select or open sub-menu)
                if(pressedKey == keys.enter || delimiterPressed) {
                  if(pressedKey == keys.enter && hasSelectedItem && hasSubMenu && !settings.allowCategorySelection) {
                    module.verbose('Pressed enter on unselectable category, opening sub menu');
                    pressedKey = keys.rightArrow;
                  }
                  else if(selectedIsSelectable) {
                    module.verbose('Selecting item from keyboard shortcut', $selectedItem);
                    module.event.item.click.call($selectedItem, event);
                    if(module.is.searchSelection()) {
                      module.remove.searchTerm();
                    }
                  }
                  event.preventDefault();
                }

                // sub-menu actions
                if(hasSelectedItem) {

                  if(pressedKey == keys.leftArrow) {

                    isSubMenuItem = ($parentMenu[0] !== $menu[0]);

                    if(isSubMenuItem) {
                      module.verbose('Left key pressed, closing sub-menu');
                      module.animate.hide(false, $parentMenu);
                      $selectedItem
                        .removeClass(className.selected)
                      ;
                      $parentMenu
                        .closest(selector.item)
                          .addClass(className.selected)
                      ;
                      event.preventDefault();
                    }
                  }

                  // right arrow (show sub-menu)
                  if(pressedKey == keys.rightArrow) {
                    if(hasSubMenu) {
                      module.verbose('Right key pressed, opening sub-menu');
                      module.animate.show(false, $subMenu);
                      $selectedItem
                        .removeClass(className.selected)
                      ;
                      $subMenu
                        .find(selector.item).eq(0)
                          .addClass(className.selected)
                      ;
                      event.preventDefault();
                    }
                  }
                }

                // up arrow (traverse menu up)
                if(pressedKey == keys.upArrow) {
                  $nextItem = (hasSelectedItem && inVisibleMenu)
                    ? $selectedItem.prevAll(selector.item + ':not(' + selector.unselectable + ')').eq(0)
                    : $item.eq(0)
                  ;
                  if($visibleItems.index( $nextItem ) < 0) {
                    module.verbose('Up key pressed but reached top of current menu');
                    event.preventDefault();
                    return;
                  }
                  else {
                    module.verbose('Up key pressed, changing active item');
                    $selectedItem
                      .removeClass(className.selected)
                    ;
                    $nextItem
                      .addClass(className.selected)
                    ;
                    module.set.scrollPosition($nextItem);
                    if(settings.selectOnKeydown && module.is.single()) {
                      module.set.selectedItem($nextItem);
                    }
                  }
                  event.preventDefault();
                }

                // down arrow (traverse menu down)
                if(pressedKey == keys.downArrow) {
                  $nextItem = (hasSelectedItem && inVisibleMenu)
                    ? $nextItem = $selectedItem.nextAll(selector.item + ':not(' + selector.unselectable + ')').eq(0)
                    : $item.eq(0)
                  ;
                  if($nextItem.length === 0) {
                    module.verbose('Down key pressed but reached bottom of current menu');
                    event.preventDefault();
                    return;
                  }
                  else {
                    module.verbose('Down key pressed, changing active item');
                    $item
                      .removeClass(className.selected)
                    ;
                    $nextItem
                      .addClass(className.selected)
                    ;
                    module.set.scrollPosition($nextItem);
                    if(settings.selectOnKeydown && module.is.single()) {
                      module.set.selectedItem($nextItem);
                    }
                  }
                  event.preventDefault();
                }

                // page down (show next page)
                if(pressedKey == keys.pageUp) {
                  module.scrollPage('up');
                  event.preventDefault();
                }
                if(pressedKey == keys.pageDown) {
                  module.scrollPage('down');
                  event.preventDefault();
                }

                // escape (close menu)
                if(pressedKey == keys.escape) {
                  module.verbose('Escape key pressed, closing dropdown');
                  module.hide();
                }

              }
              else {
                // delimiter key
                if(delimiterPressed) {
                  event.preventDefault();
                }
                // down arrow (open menu)
                if(pressedKey == keys.downArrow && !module.is.visible()) {
                  module.verbose('Down key pressed, showing dropdown');
                  module.show();
                  event.preventDefault();
                }
              }
            }
            else {
              if( !module.has.search() ) {
                module.set.selectedLetter( String.fromCharCode(pressedKey) );
              }
            }
          }
        },

        trigger: {
          change: function() {
            var
              events       = document.createEvent('HTMLEvents'),
              inputElement = $input[0]
            ;
            if(inputElement) {
              module.verbose('Triggering native change event');
              events.initEvent('change', true, false);
              inputElement.dispatchEvent(events);
            }
          }
        },

        determine: {
          selectAction: function(text, value) {
            module.verbose('Determining action', settings.action);
            if( $.isFunction( module.action[settings.action] ) ) {
              module.verbose('Triggering preset action', settings.action, text, value);
              module.action[ settings.action ].call(element, text, value, this);
            }
            else if( $.isFunction(settings.action) ) {
              module.verbose('Triggering user action', settings.action, text, value);
              settings.action.call(element, text, value, this);
            }
            else {
              module.error(error.action, settings.action);
            }
          },
          eventInModule: function(event, callback) {
            var
              $target    = $(event.target),
              inDocument = ($target.closest(document.documentElement).length > 0),
              inModule   = ($target.closest($module).length > 0)
            ;
            callback = $.isFunction(callback)
              ? callback
              : function(){}
            ;
            if(inDocument && !inModule) {
              module.verbose('Triggering event', callback);
              callback();
              return true;
            }
            else {
              module.verbose('Event occurred in dropdown, canceling callback');
              return false;
            }
          },
          eventOnElement: function(event, callback) {
            var
              $target      = $(event.target),
              $label       = $target.closest(selector.siblingLabel),
              inVisibleDOM = document.body.contains(event.target),
              notOnLabel   = ($module.find($label).length === 0),
              notInMenu    = ($target.closest($menu).length === 0)
            ;
            callback = $.isFunction(callback)
              ? callback
              : function(){}
            ;
            if(inVisibleDOM && notOnLabel && notInMenu) {
              module.verbose('Triggering event', callback);
              callback();
              return true;
            }
            else {
              module.verbose('Event occurred in dropdown menu, canceling callback');
              return false;
            }
          }
        },

        action: {

          nothing: function() {},

          activate: function(text, value, element) {
            value = (value !== undefined)
              ? value
              : text
            ;
            if( module.can.activate( $(element) ) ) {
              module.set.selected(value, $(element));
              if(module.is.multiple() && !module.is.allFiltered()) {
                return;
              }
              else {
                module.hideAndClear();
              }
            }
          },

          select: function(text, value, element) {
            value = (value !== undefined)
              ? value
              : text
            ;
            if( module.can.activate( $(element) ) ) {
              module.set.value(value, text, $(element));
              if(module.is.multiple() && !module.is.allFiltered()) {
                return;
              }
              else {
                module.hideAndClear();
              }
            }
          },

          combo: function(text, value, element) {
            value = (value !== undefined)
              ? value
              : text
            ;
            module.set.selected(value, $(element));
            module.hideAndClear();
          },

          hide: function(text, value, element) {
            module.set.value(value, text, $(element));
            module.hideAndClear();
          }

        },

        get: {
          id: function() {
            return id;
          },
          defaultText: function() {
            return $module.data(metadata.defaultText);
          },
          defaultValue: function() {
            return $module.data(metadata.defaultValue);
          },
          placeholderText: function() {
            if(settings.placeholder != 'auto' && typeof settings.placeholder == 'string') {
              return settings.placeholder;
            }
            return $module.data(metadata.placeholderText) || '';
          },
          text: function() {
            return $text.text();
          },
          query: function() {
            return $.trim($search.val());
          },
          searchWidth: function(value) {
            value = (value !== undefined)
              ? value
              : $search.val()
            ;
            $sizer.text(value);
            // prevent rounding issues
            return Math.ceil( $sizer.width() + 1);
          },
          selectionCount: function() {
            var
              values = module.get.values(),
              count
            ;
            count = ( module.is.multiple() )
              ? $.isArray(values)
                ? values.length
                : 0
              : (module.get.value() !== '')
                ? 1
                : 0
            ;
            return count;
          },
          transition: function($subMenu) {
            return (settings.transition == 'auto')
              ? module.is.upward($subMenu)
                ? 'slide up'
                : 'slide down'
              : settings.transition
            ;
          },
          userValues: function() {
            var
              values = module.get.values()
            ;
            if(!values) {
              return false;
            }
            values = $.isArray(values)
              ? values
              : [values]
            ;
            return $.grep(values, function(value) {
              return (module.get.item(value) === false);
            });
          },
          uniqueArray: function(array) {
            return $.grep(array, function (value, index) {
                return $.inArray(value, array) === index;
            });
          },
          caretPosition: function() {
            var
              input = $search.get(0),
              range,
              rangeLength
            ;
            if('selectionStart' in input) {
              return input.selectionStart;
            }
            else if (document.selection) {
              input.focus();
              range       = document.selection.createRange();
              rangeLength = range.text.length;
              range.moveStart('character', -input.value.length);
              return range.text.length - rangeLength;
            }
          },
          value: function() {
            var
              value = ($input.length > 0)
                ? $input.val()
                : $module.data(metadata.value),
              isEmptyMultiselect = ($.isArray(value) && value.length === 1 && value[0] === '')
            ;
            // prevents placeholder element from being selected when multiple
            return (value === undefined || isEmptyMultiselect)
              ? ''
              : value
            ;
          },
          values: function() {
            var
              value = module.get.value()
            ;
            if(value === '') {
              return '';
            }
            return ( !module.has.selectInput() && module.is.multiple() )
              ? (typeof value == 'string') // delimited string
                ? value.split(settings.delimiter)
                : ''
              : value
            ;
          },
          remoteValues: function() {
            var
              values = module.get.values(),
              remoteValues = false
            ;
            if(values) {
              if(typeof values == 'string') {
                values = [values];
              }
              $.each(values, function(index, value) {
                var
                  name = module.read.remoteData(value)
                ;
                module.verbose('Restoring value from session data', name, value);
                if(name) {
                  if(!remoteValues) {
                    remoteValues = {};
                  }
                  remoteValues[value] = name;
                }
              });
            }
            return remoteValues;
          },
          choiceText: function($choice, preserveHTML) {
            preserveHTML = (preserveHTML !== undefined)
              ? preserveHTML
              : settings.preserveHTML
            ;
            if($choice) {
              if($choice.find(selector.menu).length > 0) {
                module.verbose('Retrieving text of element with sub-menu');
                $choice = $choice.clone();
                $choice.find(selector.menu).remove();
                $choice.find(selector.menuIcon).remove();
              }
              return ($choice.data(metadata.text) !== undefined)
                ? $choice.data(metadata.text)
                : (preserveHTML)
                  ? $.trim($choice.html())
                  : $.trim($choice.text())
              ;
            }
          },
          choiceValue: function($choice, choiceText) {
            choiceText = choiceText || module.get.choiceText($choice);
            if(!$choice) {
              return false;
            }
            return ($choice.data(metadata.value) !== undefined)
              ? String( $choice.data(metadata.value) )
              : (typeof choiceText === 'string')
                ? $.trim(choiceText.toLowerCase())
                : String(choiceText)
            ;
          },
          inputEvent: function() {
            var
              input = $search[0]
            ;
            if(input) {
              return (input.oninput !== undefined)
                ? 'input'
                : (input.onpropertychange !== undefined)
                  ? 'propertychange'
                  : 'keyup'
              ;
            }
            return false;
          },
          selectValues: function() {
            var
              select = {}
            ;
            select.values = [];
            $module
              .find('option')
                .each(function() {
                  var
                    $option  = $(this),
                    name     = $option.html(),
                    disabled = $option.attr('disabled'),
                    value    = ( $option.attr('value') !== undefined )
                      ? $option.attr('value')
                      : name
                  ;
                  if(settings.placeholder === 'auto' && value === '') {
                    select.placeholder = name;
                  }
                  else {
                    select.values.push({
                      name     : name,
                      value    : value,
                      disabled : disabled
                    });
                  }
                })
            ;
            if(settings.placeholder && settings.placeholder !== 'auto') {
              module.debug('Setting placeholder value to', settings.placeholder);
              select.placeholder = settings.placeholder;
            }
            if(settings.sortSelect) {
              select.values.sort(function(a, b) {
                return (a.name > b.name)
                  ? 1
                  : -1
                ;
              });
              module.debug('Retrieved and sorted values from select', select);
            }
            else {
              module.debug('Retrieved values from select', select);
            }
            return select;
          },
          activeItem: function() {
            return $item.filter('.'  + className.active);
          },
          selectedItem: function() {
            var
              $selectedItem = $item.not(selector.unselectable).filter('.'  + className.selected)
            ;
            return ($selectedItem.length > 0)
              ? $selectedItem
              : $item.eq(0)
            ;
          },
          itemWithAdditions: function(value) {
            var
              $items       = module.get.item(value),
              $userItems   = module.create.userChoice(value),
              hasUserItems = ($userItems && $userItems.length > 0)
            ;
            if(hasUserItems) {
              $items = ($items.length > 0)
                ? $items.add($userItems)
                : $userItems
              ;
            }
            return $items;
          },
          item: function(value, strict) {
            var
              $selectedItem = false,
              shouldSearch,
              isMultiple
            ;
            value = (value !== undefined)
              ? value
              : ( module.get.values() !== undefined)
                ? module.get.values()
                : module.get.text()
            ;
            shouldSearch = (isMultiple)
              ? (value.length > 0)
              : (value !== undefined && value !== null)
            ;
            isMultiple = (module.is.multiple() && $.isArray(value));
            strict     = (value === '' || value === 0)
              ? true
              : strict || false
            ;
            if(shouldSearch) {
              $item
                .each(function() {
                  var
                    $choice       = $(this),
                    optionText    = module.get.choiceText($choice),
                    optionValue   = module.get.choiceValue($choice, optionText)
                  ;
                  // safe early exit
                  if(optionValue === null || optionValue === undefined) {
                    return;
                  }
                  if(isMultiple) {
                    if($.inArray( String(optionValue), value) !== -1 || $.inArray(optionText, value) !== -1) {
                      $selectedItem = ($selectedItem)
                        ? $selectedItem.add($choice)
                        : $choice
                      ;
                    }
                  }
                  else if(strict) {
                    module.verbose('Ambiguous dropdown value using strict type check', $choice, value);
                    if( optionValue === value || optionText === value) {
                      $selectedItem = $choice;
                      return true;
                    }
                  }
                  else {
                    if( String(optionValue) == String(value) || optionText == value) {
                      module.verbose('Found select item by value', optionValue, value);
                      $selectedItem = $choice;
                      return true;
                    }
                  }
                })
              ;
            }
            return $selectedItem;
          }
        },

        check: {
          maxSelections: function(selectionCount) {
            if(settings.maxSelections) {
              selectionCount = (selectionCount !== undefined)
                ? selectionCount
                : module.get.selectionCount()
              ;
              if(selectionCount >= settings.maxSelections) {
                module.debug('Maximum selection count reached');
                if(settings.useLabels) {
                  $item.addClass(className.filtered);
                  module.add.message(message.maxSelections);
                }
                return true;
              }
              else {
                module.verbose('No longer at maximum selection count');
                module.remove.message();
                module.remove.filteredItem();
                if(module.is.searchSelection()) {
                  module.filterItems();
                }
                return false;
              }
            }
            return true;
          }
        },

        restore: {
          defaults: function() {
            module.clear();
            module.restore.defaultText();
            module.restore.defaultValue();
          },
          defaultText: function() {
            var
              defaultText     = module.get.defaultText(),
              placeholderText = module.get.placeholderText
            ;
            if(defaultText === placeholderText) {
              module.debug('Restoring default placeholder text', defaultText);
              module.set.placeholderText(defaultText);
            }
            else {
              module.debug('Restoring default text', defaultText);
              module.set.text(defaultText);
            }
          },
          placeholderText: function() {
            module.set.placeholderText();
          },
          defaultValue: function() {
            var
              defaultValue = module.get.defaultValue()
            ;
            if(defaultValue !== undefined) {
              module.debug('Restoring default value', defaultValue);
              if(defaultValue !== '') {
                module.set.value(defaultValue);
                module.set.selected();
              }
              else {
                module.remove.activeItem();
                module.remove.selectedItem();
              }
            }
          },
          labels: function() {
            if(settings.allowAdditions) {
              if(!settings.useLabels) {
                module.error(error.labels);
                settings.useLabels = true;
              }
              module.debug('Restoring selected values');
              module.create.userLabels();
            }
            module.check.maxSelections();
          },
          selected: function() {
            module.restore.values();
            if(module.is.multiple()) {
              module.debug('Restoring previously selected values and labels');
              module.restore.labels();
            }
            else {
              module.debug('Restoring previously selected values');
            }
          },
          values: function() {
            // prevents callbacks from occurring on initial load
            module.set.initialLoad();
            if(settings.apiSettings && settings.saveRemoteData && module.get.remoteValues()) {
              module.restore.remoteValues();
            }
            else {
              module.set.selected();
            }
            module.remove.initialLoad();
          },
          remoteValues: function() {
            var
              values = module.get.remoteValues()
            ;
            module.debug('Recreating selected from session data', values);
            if(values) {
              if( module.is.single() ) {
                $.each(values, function(value, name) {
                  module.set.text(name);
                });
              }
              else {
                $.each(values, function(value, name) {
                  module.add.label(value, name);
                });
              }
            }
          }
        },

        read: {
          remoteData: function(value) {
            var
              name
            ;
            if(window.Storage === undefined) {
              module.error(error.noStorage);
              return;
            }
            name = sessionStorage.getItem(value);
            return (name !== undefined)
              ? name
              : false
            ;
          }
        },

        save: {
          defaults: function() {
            module.save.defaultText();
            module.save.placeholderText();
            module.save.defaultValue();
          },
          defaultValue: function() {
            var
              value = module.get.value()
            ;
            module.verbose('Saving default value as', value);
            $module.data(metadata.defaultValue, value);
          },
          defaultText: function() {
            var
              text = module.get.text()
            ;
            module.verbose('Saving default text as', text);
            $module.data(metadata.defaultText, text);
          },
          placeholderText: function() {
            var
              text
            ;
            if(settings.placeholder !== false && $text.hasClass(className.placeholder)) {
              text = module.get.text();
              module.verbose('Saving placeholder text as', text);
              $module.data(metadata.placeholderText, text);
            }
          },
          remoteData: function(name, value) {
            if(window.Storage === undefined) {
              module.error(error.noStorage);
              return;
            }
            module.verbose('Saving remote data to session storage', value, name);
            sessionStorage.setItem(value, name);
          }
        },

        clear: function() {
          if(module.is.multiple() && settings.useLabels) {
            module.remove.labels();
          }
          else {
            module.remove.activeItem();
            module.remove.selectedItem();
          }
          module.set.placeholderText();
          module.clearValue();
        },

        clearValue: function() {
          module.set.value('');
        },

        scrollPage: function(direction, $selectedItem) {
          var
            $currentItem  = $selectedItem || module.get.selectedItem(),
            $menu         = $currentItem.closest(selector.menu),
            menuHeight    = $menu.outerHeight(),
            currentScroll = $menu.scrollTop(),
            itemHeight    = $item.eq(0).outerHeight(),
            itemsPerPage  = Math.floor(menuHeight / itemHeight),
            maxScroll     = $menu.prop('scrollHeight'),
            newScroll     = (direction == 'up')
              ? currentScroll - (itemHeight * itemsPerPage)
              : currentScroll + (itemHeight * itemsPerPage),
            $selectableItem = $item.not(selector.unselectable),
            isWithinRange,
            $nextSelectedItem,
            elementIndex
          ;
          elementIndex      = (direction == 'up')
            ? $selectableItem.index($currentItem) - itemsPerPage
            : $selectableItem.index($currentItem) + itemsPerPage
          ;
          isWithinRange = (direction == 'up')
            ? (elementIndex >= 0)
            : (elementIndex < $selectableItem.length)
          ;
          $nextSelectedItem = (isWithinRange)
            ? $selectableItem.eq(elementIndex)
            : (direction == 'up')
              ? $selectableItem.first()
              : $selectableItem.last()
          ;
          if($nextSelectedItem.length > 0) {
            module.debug('Scrolling page', direction, $nextSelectedItem);
            $currentItem
              .removeClass(className.selected)
            ;
            $nextSelectedItem
              .addClass(className.selected)
            ;
            if(settings.selectOnKeydown && module.is.single()) {
              module.set.selectedItem($nextSelectedItem);
            }
            $menu
              .scrollTop(newScroll)
            ;
          }
        },

        set: {
          filtered: function() {
            var
              isMultiple       = module.is.multiple(),
              isSearch         = module.is.searchSelection(),
              isSearchMultiple = (isMultiple && isSearch),
              searchValue      = (isSearch)
                ? module.get.query()
                : '',
              hasSearchValue   = (typeof searchValue === 'string' && searchValue.length > 0),
              searchWidth      = module.get.searchWidth(),
              valueIsSet       = searchValue !== ''
            ;
            if(isMultiple && hasSearchValue) {
              module.verbose('Adjusting input width', searchWidth, settings.glyphWidth);
              $search.css('width', searchWidth);
            }
            if(hasSearchValue || (isSearchMultiple && valueIsSet)) {
              module.verbose('Hiding placeholder text');
              $text.addClass(className.filtered);
            }
            else if(!isMultiple || (isSearchMultiple && !valueIsSet)) {
              module.verbose('Showing placeholder text');
              $text.removeClass(className.filtered);
            }
          },
          empty: function() {
            $module.addClass(className.empty);
          },
          loading: function() {
            $module.addClass(className.loading);
          },
          placeholderText: function(text) {
            text = text || module.get.placeholderText();
            module.debug('Setting placeholder text', text);
            module.set.text(text);
            $text.addClass(className.placeholder);
          },
          tabbable: function() {
            if( module.is.searchSelection() ) {
              module.debug('Added tabindex to searchable dropdown');
              $search
                .val('')
                .attr('tabindex', 0)
              ;
              $menu
                .attr('tabindex', -1)
              ;
            }
            else {
              module.debug('Added tabindex to dropdown');
              if( $module.attr('tabindex') === undefined) {
                $module
                  .attr('tabindex', 0)
                ;
                $menu
                  .attr('tabindex', -1)
                ;
              }
            }
          },
          initialLoad: function() {
            module.verbose('Setting initial load');
            initialLoad = true;
          },
          activeItem: function($item) {
            if( settings.allowAdditions && $item.filter(selector.addition).length > 0 ) {
              $item.addClass(className.filtered);
            }
            else {
              $item.addClass(className.active);
            }
          },
          partialSearch: function(text) {
            var
              length = module.get.query().length
            ;
            $search.val( text.substr(0, length));
          },
          scrollPosition: function($item, forceScroll) {
            var
              edgeTolerance = 5,
              $menu,
              hasActive,
              offset,
              itemHeight,
              itemOffset,
              menuOffset,
              menuScroll,
              menuHeight,
              abovePage,
              belowPage
            ;

            $item       = $item || module.get.selectedItem();
            $menu       = $item.closest(selector.menu);
            hasActive   = ($item && $item.length > 0);
            forceScroll = (forceScroll !== undefined)
              ? forceScroll
              : false
            ;
            if($item && $menu.length > 0 && hasActive) {
              itemOffset = $item.position().top;

              $menu.addClass(className.loading);
              menuScroll = $menu.scrollTop();
              menuOffset = $menu.offset().top;
              itemOffset = $item.offset().top;
              offset     = menuScroll - menuOffset + itemOffset;
              if(!forceScroll) {
                menuHeight = $menu.height();
                belowPage  = menuScroll + menuHeight < (offset + edgeTolerance);
                abovePage  = ((offset - edgeTolerance) < menuScroll);
              }
              module.debug('Scrolling to active item', offset);
              if(forceScroll || abovePage || belowPage) {
                $menu.scrollTop(offset);
              }
              $menu.removeClass(className.loading);
            }
          },
          text: function(text) {
            if(settings.action !== 'select') {
              if(settings.action == 'combo') {
                module.debug('Changing combo button text', text, $combo);
                if(settings.preserveHTML) {
                  $combo.html(text);
                }
                else {
                  $combo.text(text);
                }
              }
              else {
                if(text !== module.get.placeholderText()) {
                  $text.removeClass(className.placeholder);
                }
                module.debug('Changing text', text, $text);
                $text
                  .removeClass(className.filtered)
                ;
                if(settings.preserveHTML) {
                  $text.html(text);
                }
                else {
                  $text.text(text);
                }
              }
            }
          },
          selectedItem: function($item) {
            var
              value      = module.get.choiceValue($item),
              searchText = module.get.choiceText($item, false),
              text       = module.get.choiceText($item, true)
            ;
            module.debug('Setting user selection to item', $item);
            module.remove.activeItem();
            module.set.partialSearch(searchText);
            module.set.activeItem($item);
            module.set.selected(value, $item);
            module.set.text(text);
          },
          selectedLetter: function(letter) {
            var
              $selectedItem         = $item.filter('.' + className.selected),
              alreadySelectedLetter = $selectedItem.length > 0 && module.has.firstLetter($selectedItem, letter),
              $nextValue            = false,
              $nextItem
            ;
            // check next of same letter
            if(alreadySelectedLetter) {
              $nextItem = $selectedItem.nextAll($item).eq(0);
              if( module.has.firstLetter($nextItem, letter) ) {
                $nextValue  = $nextItem;
              }
            }
            // check all values
            if(!$nextValue) {
              $item
                .each(function(){
                  if(module.has.firstLetter($(this), letter)) {
                    $nextValue = $(this);
                    return false;
                  }
                })
              ;
            }
            // set next value
            if($nextValue) {
              module.verbose('Scrolling to next value with letter', letter);
              module.set.scrollPosition($nextValue);
              $selectedItem.removeClass(className.selected);
              $nextValue.addClass(className.selected);
              if(settings.selectOnKeydown && module.is.single()) {
                module.set.selectedItem($nextValue);
              }
            }
          },
          direction: function($menu) {
            if(settings.direction == 'auto') {
              // reset position
              module.remove.upward();

              if(module.can.openDownward($menu)) {
                module.remove.upward($menu);
              }
              else {
                module.set.upward($menu);
              }
              if(!module.is.leftward($menu) && !module.can.openRightward($menu)) {
                module.set.leftward($menu);
              }
            }
            else if(settings.direction == 'upward') {
              module.set.upward($menu);
            }
          },
          upward: function($currentMenu) {
            var $element = $currentMenu || $module;
            $element.addClass(className.upward);
          },
          leftward: function($currentMenu) {
            var $element = $currentMenu || $menu;
            $element.addClass(className.leftward);
          },
          value: function(value, text, $selected) {
            var
              escapedValue = module.escape.value(value),
              hasInput     = ($input.length > 0),
              currentValue = module.get.values(),
              stringValue  = (value !== undefined)
                ? String(value)
                : value,
              newValue
            ;
            if(hasInput) {
              if(!settings.allowReselection && stringValue == currentValue) {
                module.verbose('Skipping value update already same value', value, currentValue);
                if(!module.is.initialLoad()) {
                  return;
                }
              }

              if( module.is.single() && module.has.selectInput() && module.can.extendSelect() ) {
                module.debug('Adding user option', value);
                module.add.optionValue(value);
              }
              module.debug('Updating input value', escapedValue, currentValue);
              internalChange = true;
              $input
                .val(escapedValue)
              ;
              if(settings.fireOnInit === false && module.is.initialLoad()) {
                module.debug('Input native change event ignored on initial load');
              }
              else {
                module.trigger.change();
              }
              internalChange = false;
            }
            else {
              module.verbose('Storing value in metadata', escapedValue, $input);
              if(escapedValue !== currentValue) {
                $module.data(metadata.value, stringValue);
              }
            }
            if(module.is.single() && settings.clearable) {
              // treat undefined or '' as empty
              if(!escapedValue) {
                module.remove.clearable();
              }
              else {
                module.set.clearable();
              }
            }
            if(settings.fireOnInit === false && module.is.initialLoad()) {
              module.verbose('No callback on initial load', settings.onChange);
            }
            else {
              settings.onChange.call(element, value, text, $selected);
            }
          },
          active: function() {
            $module
              .addClass(className.active)
            ;
          },
          multiple: function() {
            $module.addClass(className.multiple);
          },
          visible: function() {
            $module.addClass(className.visible);
          },
          exactly: function(value, $selectedItem) {
            module.debug('Setting selected to exact values');
            module.clear();
            module.set.selected(value, $selectedItem);
          },
          selected: function(value, $selectedItem) {
            var
              isMultiple = module.is.multiple(),
              $userSelectedItem
            ;
            $selectedItem = (settings.allowAdditions)
              ? $selectedItem || module.get.itemWithAdditions(value)
              : $selectedItem || module.get.item(value)
            ;
            if(!$selectedItem) {
              return;
            }
            module.debug('Setting selected menu item to', $selectedItem);
            if(module.is.multiple()) {
              module.remove.searchWidth();
            }
            if(module.is.single()) {
              module.remove.activeItem();
              module.remove.selectedItem();
            }
            else if(settings.useLabels) {
              module.remove.selectedItem();
            }
            // select each item
            $selectedItem
              .each(function() {
                var
                  $selected      = $(this),
                  selectedText   = module.get.choiceText($selected),
                  selectedValue  = module.get.choiceValue($selected, selectedText),

                  isFiltered     = $selected.hasClass(className.filtered),
                  isActive       = $selected.hasClass(className.active),
                  isUserValue    = $selected.hasClass(className.addition),
                  shouldAnimate  = (isMultiple && $selectedItem.length == 1)
                ;
                if(isMultiple) {
                  if(!isActive || isUserValue) {
                    if(settings.apiSettings && settings.saveRemoteData) {
                      module.save.remoteData(selectedText, selectedValue);
                    }
                    if(settings.useLabels) {
                      module.add.label(selectedValue, selectedText, shouldAnimate);
                      module.add.value(selectedValue, selectedText, $selected);
                      module.set.activeItem($selected);
                      module.filterActive();
                      module.select.nextAvailable($selectedItem);
                    }
                    else {
                      module.add.value(selectedValue, selectedText, $selected);
                      module.set.text(module.add.variables(message.count));
                      module.set.activeItem($selected);
                    }
                  }
                  else if(!isFiltered) {
                    module.debug('Selected active value, removing label');
                    module.remove.selected(selectedValue);
                  }
                }
                else {
                  if(settings.apiSettings && settings.saveRemoteData) {
                    module.save.remoteData(selectedText, selectedValue);
                  }
                  module.set.text(selectedText);
                  module.set.value(selectedValue, selectedText, $selected);
                  $selected
                    .addClass(className.active)
                    .addClass(className.selected)
                  ;
                }
              })
            ;
          },
          clearable: function() {
            $icon.addClass(className.clear);
          },
        },

        add: {
          label: function(value, text, shouldAnimate) {
            var
              $next  = module.is.searchSelection()
                ? $search
                : $text,
              escapedValue = module.escape.value(value),
              $label
            ;
            if(settings.ignoreCase) {
              escapedValue = escapedValue.toLowerCase();
            }
            $label =  $('<a />')
              .addClass(className.label)
              .attr('data-' + metadata.value, escapedValue)
              .html(templates.label(escapedValue, text))
            ;
            $label = settings.onLabelCreate.call($label, escapedValue, text);

            if(module.has.label(value)) {
              module.debug('User selection already exists, skipping', escapedValue);
              return;
            }
            if(settings.label.variation) {
              $label.addClass(settings.label.variation);
            }
            if(shouldAnimate === true) {
              module.debug('Animating in label', $label);
              $label
                .addClass(className.hidden)
                .insertBefore($next)
                .transition(settings.label.transition, settings.label.duration)
              ;
            }
            else {
              module.debug('Adding selection label', $label);
              $label
                .insertBefore($next)
              ;
            }
          },
          message: function(message) {
            var
              $message = $menu.children(selector.message),
              html     = settings.templates.message(module.add.variables(message))
            ;
            if($message.length > 0) {
              $message
                .html(html)
              ;
            }
            else {
              $message = $('<div/>')
                .html(html)
                .addClass(className.message)
                .appendTo($menu)
              ;
            }
          },
          optionValue: function(value) {
            var
              escapedValue = module.escape.value(value),
              $option      = $input.find('option[value="' + module.escape.string(escapedValue) + '"]'),
              hasOption    = ($option.length > 0)
            ;
            if(hasOption) {
              return;
            }
            // temporarily disconnect observer
            module.disconnect.selectObserver();
            if( module.is.single() ) {
              module.verbose('Removing previous user addition');
              $input.find('option.' + className.addition).remove();
            }
            $('<option/>')
              .prop('value', escapedValue)
              .addClass(className.addition)
              .html(value)
              .appendTo($input)
            ;
            module.verbose('Adding user addition as an <option>', value);
            module.observe.select();
          },
          userSuggestion: function(value) {
            var
              $addition         = $menu.children(selector.addition),
              $existingItem     = module.get.item(value),
              alreadyHasValue   = $existingItem && $existingItem.not(selector.addition).length,
              hasUserSuggestion = $addition.length > 0,
              html
            ;
            if(settings.useLabels && module.has.maxSelections()) {
              return;
            }
            if(value === '' || alreadyHasValue) {
              $addition.remove();
              return;
            }
            if(hasUserSuggestion) {
              $addition
                .data(metadata.value, value)
                .data(metadata.text, value)
                .attr('data-' + metadata.value, value)
                .attr('data-' + metadata.text, value)
                .removeClass(className.filtered)
              ;
              if(!settings.hideAdditions) {
                html = settings.templates.addition( module.add.variables(message.addResult, value) );
                $addition
                  .html(html)
                ;
              }
              module.verbose('Replacing user suggestion with new value', $addition);
            }
            else {
              $addition = module.create.userChoice(value);
              $addition
                .prependTo($menu)
              ;
              module.verbose('Adding item choice to menu corresponding with user choice addition', $addition);
            }
            if(!settings.hideAdditions || module.is.allFiltered()) {
              $addition
                .addClass(className.selected)
                .siblings()
                .removeClass(className.selected)
              ;
            }
            module.refreshItems();
          },
          variables: function(message, term) {
            var
              hasCount    = (message.search('{count}') !== -1),
              hasMaxCount = (message.search('{maxCount}') !== -1),
              hasTerm     = (message.search('{term}') !== -1),
              values,
              count,
              query
            ;
            module.verbose('Adding templated variables to message', message);
            if(hasCount) {
              count  = module.get.selectionCount();
              message = message.replace('{count}', count);
            }
            if(hasMaxCount) {
              count  = module.get.selectionCount();
              message = message.replace('{maxCount}', settings.maxSelections);
            }
            if(hasTerm) {
              query   = term || module.get.query();
              message = message.replace('{term}', query);
            }
            return message;
          },
          value: function(addedValue, addedText, $selectedItem) {
            var
              currentValue = module.get.values(),
              newValue
            ;
            if(module.has.value(addedValue)) {
              module.debug('Value already selected');
              return;
            }
            if(addedValue === '') {
              module.debug('Cannot select blank values from multiselect');
              return;
            }
            // extend current array
            if($.isArray(currentValue)) {
              newValue = currentValue.concat([addedValue]);
              newValue = module.get.uniqueArray(newValue);
            }
            else {
              newValue = [addedValue];
            }
            // add values
            if( module.has.selectInput() ) {
              if(module.can.extendSelect()) {
                module.debug('Adding value to select', addedValue, newValue, $input);
                module.add.optionValue(addedValue);
              }
            }
            else {
              newValue = newValue.join(settings.delimiter);
              module.debug('Setting hidden input to delimited value', newValue, $input);
            }

            if(settings.fireOnInit === false && module.is.initialLoad()) {
              module.verbose('Skipping onadd callback on initial load', settings.onAdd);
            }
            else {
              settings.onAdd.call(element, addedValue, addedText, $selectedItem);
            }
            module.set.value(newValue, addedValue, addedText, $selectedItem);
            module.check.maxSelections();
          },
        },

        remove: {
          active: function() {
            $module.removeClass(className.active);
          },
          activeLabel: function() {
            $module.find(selector.label).removeClass(className.active);
          },
          empty: function() {
            $module.removeClass(className.empty);
          },
          loading: function() {
            $module.removeClass(className.loading);
          },
          initialLoad: function() {
            initialLoad = false;
          },
          upward: function($currentMenu) {
            var $element = $currentMenu || $module;
            $element.removeClass(className.upward);
          },
          leftward: function($currentMenu) {
            var $element = $currentMenu || $menu;
            $element.removeClass(className.leftward);
          },
          visible: function() {
            $module.removeClass(className.visible);
          },
          activeItem: function() {
            $item.removeClass(className.active);
          },
          filteredItem: function() {
            if(settings.useLabels && module.has.maxSelections() ) {
              return;
            }
            if(settings.useLabels && module.is.multiple()) {
              $item.not('.' + className.active).removeClass(className.filtered);
            }
            else {
              $item.removeClass(className.filtered);
            }
            module.remove.empty();
          },
          optionValue: function(value) {
            var
              escapedValue = module.escape.value(value),
              $option      = $input.find('option[value="' + module.escape.string(escapedValue) + '"]'),
              hasOption    = ($option.length > 0)
            ;
            if(!hasOption || !$option.hasClass(className.addition)) {
              return;
            }
            // temporarily disconnect observer
            if(selectObserver) {
              selectObserver.disconnect();
              module.verbose('Temporarily disconnecting mutation observer');
            }
            $option.remove();
            module.verbose('Removing user addition as an <option>', escapedValue);
            if(selectObserver) {
              selectObserver.observe($input[0], {
                childList : true,
                subtree   : true
              });
            }
          },
          message: function() {
            $menu.children(selector.message).remove();
          },
          searchWidth: function() {
            $search.css('width', '');
          },
          searchTerm: function() {
            module.verbose('Cleared search term');
            $search.val('');
            module.set.filtered();
          },
          userAddition: function() {
            $item.filter(selector.addition).remove();
          },
          selected: function(value, $selectedItem) {
            $selectedItem = (settings.allowAdditions)
              ? $selectedItem || module.get.itemWithAdditions(value)
              : $selectedItem || module.get.item(value)
            ;

            if(!$selectedItem) {
              return false;
            }

            $selectedItem
              .each(function() {
                var
                  $selected     = $(this),
                  selectedText  = module.get.choiceText($selected),
                  selectedValue = module.get.choiceValue($selected, selectedText)
                ;
                if(module.is.multiple()) {
                  if(settings.useLabels) {
                    module.remove.value(selectedValue, selectedText, $selected);
                    module.remove.label(selectedValue);
                  }
                  else {
                    module.remove.value(selectedValue, selectedText, $selected);
                    if(module.get.selectionCount() === 0) {
                      module.set.placeholderText();
                    }
                    else {
                      module.set.text(module.add.variables(message.count));
                    }
                  }
                }
                else {
                  module.remove.value(selectedValue, selectedText, $selected);
                }
                $selected
                  .removeClass(className.filtered)
                  .removeClass(className.active)
                ;
                if(settings.useLabels) {
                  $selected.removeClass(className.selected);
                }
              })
            ;
          },
          selectedItem: function() {
            $item.removeClass(className.selected);
          },
          value: function(removedValue, removedText, $removedItem) {
            var
              values = module.get.values(),
              newValue
            ;
            if( module.has.selectInput() ) {
              module.verbose('Input is <select> removing selected option', removedValue);
              newValue = module.remove.arrayValue(removedValue, values);
              module.remove.optionValue(removedValue);
            }
            else {
              module.verbose('Removing from delimited values', removedValue);
              newValue = module.remove.arrayValue(removedValue, values);
              newValue = newValue.join(settings.delimiter);
            }
            if(settings.fireOnInit === false && module.is.initialLoad()) {
              module.verbose('No callback on initial load', settings.onRemove);
            }
            else {
              settings.onRemove.call(element, removedValue, removedText, $removedItem);
            }
            module.set.value(newValue, removedText, $removedItem);
            module.check.maxSelections();
          },
          arrayValue: function(removedValue, values) {
            if( !$.isArray(values) ) {
              values = [values];
            }
            values = $.grep(values, function(value){
              return (removedValue != value);
            });
            module.verbose('Removed value from delimited string', removedValue, values);
            return values;
          },
          label: function(value, shouldAnimate) {
            var
              $labels       = $module.find(selector.label),
              $removedLabel = $labels.filter('[data-' + metadata.value + '="' + module.escape.string(value) +'"]')
            ;
            module.verbose('Removing label', $removedLabel);
            $removedLabel.remove();
          },
          activeLabels: function($activeLabels) {
            $activeLabels = $activeLabels || $module.find(selector.label).filter('.' + className.active);
            module.verbose('Removing active label selections', $activeLabels);
            module.remove.labels($activeLabels);
          },
          labels: function($labels) {
            $labels = $labels || $module.find(selector.label);
            module.verbose('Removing labels', $labels);
            $labels
              .each(function(){
                var
                  $label      = $(this),
                  value       = $label.data(metadata.value),
                  stringValue = (value !== undefined)
                    ? String(value)
                    : value,
                  isUserValue = module.is.userValue(stringValue)
                ;
                if(settings.onLabelRemove.call($label, value) === false) {
                  module.debug('Label remove callback cancelled removal');
                  return;
                }
                module.remove.message();
                if(isUserValue) {
                  module.remove.value(stringValue);
                  module.remove.label(stringValue);
                }
                else {
                  // selected will also remove label
                  module.remove.selected(stringValue);
                }
              })
            ;
          },
          tabbable: function() {
            if( module.is.searchSelection() ) {
              module.debug('Searchable dropdown initialized');
              $search
                .removeAttr('tabindex')
              ;
              $menu
                .removeAttr('tabindex')
              ;
            }
            else {
              module.debug('Simple selection dropdown initialized');
              $module
                .removeAttr('tabindex')
              ;
              $menu
                .removeAttr('tabindex')
              ;
            }
          },
          clearable: function() {
            $icon.removeClass(className.clear);
          }
        },

        has: {
          menuSearch: function() {
            return (module.has.search() && $search.closest($menu).length > 0);
          },
          search: function() {
            return ($search.length > 0);
          },
          sizer: function() {
            return ($sizer.length > 0);
          },
          selectInput: function() {
            return ( $input.is('select') );
          },
          minCharacters: function(searchTerm) {
            if(settings.minCharacters) {
              searchTerm = (searchTerm !== undefined)
                ? String(searchTerm)
                : String(module.get.query())
              ;
              return (searchTerm.length >= settings.minCharacters);
            }
            return true;
          },
          firstLetter: function($item, letter) {
            var
              text,
              firstLetter
            ;
            if(!$item || $item.length === 0 || typeof letter !== 'string') {
              return false;
            }
            text        = module.get.choiceText($item, false);
            letter      = letter.toLowerCase();
            firstLetter = String(text).charAt(0).toLowerCase();
            return (letter == firstLetter);
          },
          input: function() {
            return ($input.length > 0);
          },
          items: function() {
            return ($item.length > 0);
          },
          menu: function() {
            return ($menu.length > 0);
          },
          message: function() {
            return ($menu.children(selector.message).length !== 0);
          },
          label: function(value) {
            var
              escapedValue = module.escape.value(value),
              $labels      = $module.find(selector.label)
            ;
            if(settings.ignoreCase) {
              escapedValue = escapedValue.toLowerCase();
            }
            return ($labels.filter('[data-' + metadata.value + '="' + module.escape.string(escapedValue) +'"]').length > 0);
          },
          maxSelections: function() {
            return (settings.maxSelections && module.get.selectionCount() >= settings.maxSelections);
          },
          allResultsFiltered: function() {
            var
              $normalResults = $item.not(selector.addition)
            ;
            return ($normalResults.filter(selector.unselectable).length === $normalResults.length);
          },
          userSuggestion: function() {
            return ($menu.children(selector.addition).length > 0);
          },
          query: function() {
            return (module.get.query() !== '');
          },
          value: function(value) {
            return (settings.ignoreCase)
              ? module.has.valueIgnoringCase(value)
              : module.has.valueMatchingCase(value)
            ;
          },
          valueMatchingCase: function(value) {
            var
              values   = module.get.values(),
              hasValue = $.isArray(values)
               ? values && ($.inArray(value, values) !== -1)
               : (values == value)
            ;
            return (hasValue)
              ? true
              : false
            ;
          },
          valueIgnoringCase: function(value) {
            var
              values   = module.get.values(),
              hasValue = false
            ;
            if(!$.isArray(values)) {
              values = [values];
            }
            $.each(values, function(index, existingValue) {
              if(String(value).toLowerCase() == String(existingValue).toLowerCase()) {
                hasValue = true;
                return false;
              }
            });
            return hasValue;
          }
        },

        is: {
          active: function() {
            return $module.hasClass(className.active);
          },
          animatingInward: function() {
            return $menu.transition('is inward');
          },
          animatingOutward: function() {
            return $menu.transition('is outward');
          },
          bubbledLabelClick: function(event) {
            return $(event.target).is('select, input') && $module.closest('label').length > 0;
          },
          bubbledIconClick: function(event) {
            return $(event.target).closest($icon).length > 0;
          },
          alreadySetup: function() {
            return ($module.is('select') && $module.parent(selector.dropdown).data(moduleNamespace) !== undefined && $module.prev().length === 0);
          },
          animating: function($subMenu) {
            return ($subMenu)
              ? $subMenu.transition && $subMenu.transition('is animating')
              : $menu.transition    && $menu.transition('is animating')
            ;
          },
          leftward: function($subMenu) {
            var $selectedMenu = $subMenu || $menu;
            return $selectedMenu.hasClass(className.leftward);
          },
          disabled: function() {
            return $module.hasClass(className.disabled);
          },
          focused: function() {
            return (document.activeElement === $module[0]);
          },
          focusedOnSearch: function() {
            return (document.activeElement === $search[0]);
          },
          allFiltered: function() {
            return( (module.is.multiple() || module.has.search()) && !(settings.hideAdditions == false && module.has.userSuggestion()) && !module.has.message() && module.has.allResultsFiltered() );
          },
          hidden: function($subMenu) {
            return !module.is.visible($subMenu);
          },
          initialLoad: function() {
            return initialLoad;
          },
          inObject: function(needle, object) {
            var
              found = false
            ;
            $.each(object, function(index, property) {
              if(property == needle) {
                found = true;
                return true;
              }
            });
            return found;
          },
          multiple: function() {
            return $module.hasClass(className.multiple);
          },
          remote: function() {
            return settings.apiSettings && module.can.useAPI();
          },
          single: function() {
            return !module.is.multiple();
          },
          selectMutation: function(mutations) {
            var
              selectChanged = false
            ;
            $.each(mutations, function(index, mutation) {
              if(mutation.target && $(mutation.target).is('select')) {
                selectChanged = true;
                return true;
              }
            });
            return selectChanged;
          },
          search: function() {
            return $module.hasClass(className.search);
          },
          searchSelection: function() {
            return ( module.has.search() && $search.parent(selector.dropdown).length === 1 );
          },
          selection: function() {
            return $module.hasClass(className.selection);
          },
          userValue: function(value) {
            return ($.inArray(value, module.get.userValues()) !== -1);
          },
          upward: function($menu) {
            var $element = $menu || $module;
            return $element.hasClass(className.upward);
          },
          visible: function($subMenu) {
            return ($subMenu)
              ? $subMenu.hasClass(className.visible)
              : $menu.hasClass(className.visible)
            ;
          },
          verticallyScrollableContext: function() {
            var
              overflowY = ($context.get(0) !== window)
                ? $context.css('overflow-y')
                : false
            ;
            return (overflowY == 'auto' || overflowY == 'scroll');
          },
          horizontallyScrollableContext: function() {
            var
              overflowX = ($context.get(0) !== window)
                ? $context.css('overflow-X')
                : false
            ;
            return (overflowX == 'auto' || overflowX == 'scroll');
          }
        },

        can: {
          activate: function($item) {
            if(settings.useLabels) {
              return true;
            }
            if(!module.has.maxSelections()) {
              return true;
            }
            if(module.has.maxSelections() && $item.hasClass(className.active)) {
              return true;
            }
            return false;
          },
          openDownward: function($subMenu) {
            var
              $currentMenu    = $subMenu || $menu,
              canOpenDownward = true,
              onScreen        = {},
              calculations
            ;
            $currentMenu
              .addClass(className.loading)
            ;
            calculations = {
              context: {
                offset    : ($context.get(0) === window)
                  ? { top: 0, left: 0}
                  : $context.offset(),
                scrollTop : $context.scrollTop(),
                height    : $context.outerHeight()
              },
              menu : {
                offset: $currentMenu.offset(),
                height: $currentMenu.outerHeight()
              }
            };
            if(module.is.verticallyScrollableContext()) {
              calculations.menu.offset.top += calculations.context.scrollTop;
            }
            onScreen = {
              above : (calculations.context.scrollTop) <= calculations.menu.offset.top - calculations.context.offset.top - calculations.menu.height,
              below : (calculations.context.scrollTop + calculations.context.height) >= calculations.menu.offset.top - calculations.context.offset.top + calculations.menu.height
            };
            if(onScreen.below) {
              module.verbose('Dropdown can fit in context downward', onScreen);
              canOpenDownward = true;
            }
            else if(!onScreen.below && !onScreen.above) {
              module.verbose('Dropdown cannot fit in either direction, favoring downward', onScreen);
              canOpenDownward = true;
            }
            else {
              module.verbose('Dropdown cannot fit below, opening upward', onScreen);
              canOpenDownward = false;
            }
            $currentMenu.removeClass(className.loading);
            return canOpenDownward;
          },
          openRightward: function($subMenu) {
            var
              $currentMenu     = $subMenu || $menu,
              canOpenRightward = true,
              isOffscreenRight = false,
              calculations
            ;
            $currentMenu
              .addClass(className.loading)
            ;
            calculations = {
              context: {
                offset     : ($context.get(0) === window)
                  ? { top: 0, left: 0}
                  : $context.offset(),
                scrollLeft : $context.scrollLeft(),
                width      : $context.outerWidth()
              },
              menu: {
                offset : $currentMenu.offset(),
                width  : $currentMenu.outerWidth()
              }
            };
            if(module.is.horizontallyScrollableContext()) {
              calculations.menu.offset.left += calculations.context.scrollLeft;
            }
            isOffscreenRight = (calculations.menu.offset.left - calculations.context.offset.left + calculations.menu.width >= calculations.context.scrollLeft + calculations.context.width);
            if(isOffscreenRight) {
              module.verbose('Dropdown cannot fit in context rightward', isOffscreenRight);
              canOpenRightward = false;
            }
            $currentMenu.removeClass(className.loading);
            return canOpenRightward;
          },
          click: function() {
            return (hasTouch || settings.on == 'click');
          },
          extendSelect: function() {
            return settings.allowAdditions || settings.apiSettings;
          },
          show: function() {
            return !module.is.disabled() && (module.has.items() || module.has.message());
          },
          useAPI: function() {
            return $.fn.api !== undefined;
          }
        },

        animate: {
          show: function(callback, $subMenu) {
            var
              $currentMenu = $subMenu || $menu,
              start = ($subMenu)
                ? function() {}
                : function() {
                  module.hideSubMenus();
                  module.hideOthers();
                  module.set.active();
                },
              transition
            ;
            callback = $.isFunction(callback)
              ? callback
              : function(){}
            ;
            module.verbose('Doing menu show animation', $currentMenu);
            module.set.direction($subMenu);
            transition = module.get.transition($subMenu);
            if( module.is.selection() ) {
              module.set.scrollPosition(module.get.selectedItem(), true);
            }
            if( module.is.hidden($currentMenu) || module.is.animating($currentMenu) ) {
              if(transition == 'none') {
                start();
                $currentMenu.transition('show');
                callback.call(element);
              }
              else if($.fn.transition !== undefined && $module.transition('is supported')) {
                $currentMenu
                  .transition({
                    animation  : transition + ' in',
                    debug      : settings.debug,
                    verbose    : settings.verbose,
                    duration   : settings.duration,
                    queue      : true,
                    onStart    : start,
                    onComplete : function() {
                      callback.call(element);
                    }
                  })
                ;
              }
              else {
                module.error(error.noTransition, transition);
              }
            }
          },
          hide: function(callback, $subMenu) {
            var
              $currentMenu = $subMenu || $menu,
              duration = ($subMenu)
                ? (settings.duration * 0.9)
                : settings.duration,
              start = ($subMenu)
                ? function() {}
                : function() {
                  if( module.can.click() ) {
                    module.unbind.intent();
                  }
                  module.remove.active();
                },
              transition = module.get.transition($subMenu)
            ;
            callback = $.isFunction(callback)
              ? callback
              : function(){}
            ;
            if( module.is.visible($currentMenu) || module.is.animating($currentMenu) ) {
              module.verbose('Doing menu hide animation', $currentMenu);

              if(transition == 'none') {
                start();
                $currentMenu.transition('hide');
                callback.call(element);
              }
              else if($.fn.transition !== undefined && $module.transition('is supported')) {
                $currentMenu
                  .transition({
                    animation  : transition + ' out',
                    duration   : settings.duration,
                    debug      : settings.debug,
                    verbose    : settings.verbose,
                    queue      : false,
                    onStart    : start,
                    onComplete : function() {
                      callback.call(element);
                    }
                  })
                ;
              }
              else {
                module.error(error.transition);
              }
            }
          }
        },

        hideAndClear: function() {
          module.remove.searchTerm();
          if( module.has.maxSelections() ) {
            return;
          }
          if(module.has.search()) {
            module.hide(function() {
              module.remove.filteredItem();
            });
          }
          else {
            module.hide();
          }
        },

        delay: {
          show: function() {
            module.verbose('Delaying show event to ensure user intent');
            clearTimeout(module.timer);
            module.timer = setTimeout(module.show, settings.delay.show);
          },
          hide: function() {
            module.verbose('Delaying hide event to ensure user intent');
            clearTimeout(module.timer);
            module.timer = setTimeout(module.hide, settings.delay.hide);
          }
        },

        escape: {
          value: function(value) {
            var
              multipleValues = $.isArray(value),
              stringValue    = (typeof value === 'string'),
              isUnparsable   = (!stringValue && !multipleValues),
              hasQuotes      = (stringValue && value.search(regExp.quote) !== -1),
              values         = []
            ;
            if(isUnparsable || !hasQuotes) {
              return value;
            }
            module.debug('Encoding quote values for use in select', value);
            if(multipleValues) {
              $.each(value, function(index, value){
                values.push(value.replace(regExp.quote, '&quot;'));
              });
              return values;
            }
            return value.replace(regExp.quote, '&quot;');
          },
          string: function(text) {
            text =  String(text);
            return text.replace(regExp.escape, '\\$&');
          }
        },

        setting: function(name, value) {
          module.debug('Changing setting', name, value);
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            if($.isPlainObject(settings[name])) {
              $.extend(true, settings[name], value);
            }
            else {
              settings[name] = value;
            }
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(!settings.silent && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(!settings.silent && settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          if(!settings.silent) {
            module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
            module.error.apply(console, arguments);
          }
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Element'        : element,
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 500);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
                module.error(error.method, query);
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
        }
      };

      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          instance.invoke('destroy');
        }
        module.initialize();
      }
    })
  ;
  return (returnedValue !== undefined)
    ? returnedValue
    : $allModules
  ;
};

$.fn.dropdown.settings = {

  silent                 : false,
  debug                  : false,
  verbose                : false,
  performance            : true,

  on                     : 'click',    // what event should show menu action on item selection
  action                 : 'activate', // action on item selection (nothing, activate, select, combo, hide, function(){})

  values                 : false,      // specify values to use for dropdown

  clearable              : false,      // whether the value of the dropdown can be cleared

  apiSettings            : false,
  selectOnKeydown        : true,       // Whether selection should occur automatically when keyboard shortcuts used
  minCharacters          : 0,          // Minimum characters required to trigger API call

  filterRemoteData       : false,      // Whether API results should be filtered after being returned for query term
  saveRemoteData         : true,       // Whether remote name/value pairs should be stored in sessionStorage to allow remote data to be restored on page refresh

  throttle               : 200,        // How long to wait after last user input to search remotely

  context                : window,     // Context to use when determining if on screen
  direction              : 'auto',     // Whether dropdown should always open in one direction
  keepOnScreen           : true,       // Whether dropdown should check whether it is on screen before showing

  match                  : 'both',     // what to match against with search selection (both, text, or label)
  fullTextSearch         : false,      // search anywhere in value (set to 'exact' to require exact matches)

  placeholder            : 'auto',     // whether to convert blank <select> values to placeholder text
  preserveHTML           : true,       // preserve html when selecting value
  sortSelect             : false,      // sort selection on init

  forceSelection         : true,       // force a choice on blur with search selection

  allowAdditions         : false,      // whether multiple select should allow user added values
  ignoreCase             : false,       // whether to consider values not matching in case to be the same
  hideAdditions          : true,       // whether or not to hide special message prompting a user they can enter a value

  maxSelections          : false,      // When set to a number limits the number of selections to this count
  useLabels              : true,       // whether multiple select should filter currently active selections from choices
  delimiter              : ',',        // when multiselect uses normal <input> the values will be delimited with this character

  showOnFocus            : true,       // show menu on focus
  allowReselection       : false,      // whether current value should trigger callbacks when reselected
  allowTab               : true,       // add tabindex to element
  allowCategorySelection : false,      // allow elements with sub-menus to be selected

  fireOnInit             : false,      // Whether callbacks should fire when initializing dropdown values

  transition             : 'auto',     // auto transition will slide down or up based on direction
  duration               : 200,        // duration of transition

  glyphWidth             : 1.037,      // widest glyph width in em (W is 1.037 em) used to calculate multiselect input width

  // label settings on multi-select
  label: {
    transition : 'scale',
    duration   : 200,
    variation  : false
  },

  // delay before event
  delay : {
    hide   : 300,
    show   : 200,
    search : 20,
    touch  : 50
  },

  /* Callbacks */
  onChange      : function(value, text, $selected){},
  onAdd         : function(value, text, $selected){},
  onRemove      : function(value, text, $selected){},

  onLabelSelect : function($selectedLabels){},
  onLabelCreate : function(value, text) { return $(this); },
  onLabelRemove : function(value) { return true; },
  onNoResults   : function(searchTerm) { return true; },
  onShow        : function(){},
  onHide        : function(){},

  /* Component */
  name           : 'Dropdown',
  namespace      : 'dropdown',

  message: {
    addResult     : 'Add <b>{term}</b>',
    count         : '{count} selected',
    maxSelections : 'Max {maxCount} selections',
    noResults     : 'No results found.',
    serverError   : 'There was an error contacting the server'
  },

  error : {
    action          : 'You called a dropdown action that was not defined',
    alreadySetup    : 'Once a select has been initialized behaviors must be called on the created ui dropdown',
    labels          : 'Allowing user additions currently requires the use of labels.',
    missingMultiple : '<select> requires multiple property to be set to correctly preserve multiple values',
    method          : 'The method you called is not defined.',
    noAPI           : 'The API module is required to load resources remotely',
    noStorage       : 'Saving remote data requires session storage',
    noTransition    : 'This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>'
  },

  regExp : {
    escape   : /[-[\]{}()*+?.,\\^$|#\s]/g,
    quote    : /"/g
  },

  metadata : {
    defaultText     : 'defaultText',
    defaultValue    : 'defaultValue',
    placeholderText : 'placeholder',
    text            : 'text',
    value           : 'value'
  },

  // property names for remote query
  fields: {
    remoteValues : 'results',  // grouping for api results
    values       : 'values',   // grouping for all dropdown values
    disabled     : 'disabled', // whether value should be disabled
    name         : 'name',     // displayed dropdown text
    value        : 'value',    // actual dropdown value
    text         : 'text'      // displayed text when selected
  },

  keys : {
    backspace  : 8,
    delimiter  : 188, // comma
    deleteKey  : 46,
    enter      : 13,
    escape     : 27,
    pageUp     : 33,
    pageDown   : 34,
    leftArrow  : 37,
    upArrow    : 38,
    rightArrow : 39,
    downArrow  : 40
  },

  selector : {
    addition     : '.addition',
    dropdown     : '.ui.dropdown',
    hidden       : '.hidden',
    icon         : '> .dropdown.icon',
    input        : '> input[type="hidden"], > select',
    item         : '.item',
    label        : '> .label',
    remove       : '> .label > .delete.icon',
    siblingLabel : '.label',
    menu         : '.menu',
    message      : '.message',
    menuIcon     : '.dropdown.icon',
    search       : 'input.search, .menu > .search > input, .menu input.search',
    sizer        : '> input.sizer',
    text         : '> .text:not(.icon)',
    unselectable : '.disabled, .filtered'
  },

  className : {
    active      : 'active',
    addition    : 'addition',
    animating   : 'animating',
    clear       : 'clear',
    disabled    : 'disabled',
    empty       : 'empty',
    dropdown    : 'ui dropdown',
    filtered    : 'filtered',
    hidden      : 'hidden transition',
    item        : 'item',
    label       : 'ui label',
    loading     : 'loading',
    menu        : 'menu',
    message     : 'message',
    multiple    : 'multiple',
    placeholder : 'default',
    sizer       : 'sizer',
    search      : 'search',
    selected    : 'selected',
    selection   : 'selection',
    upward      : 'upward',
    leftward    : 'left',
    visible     : 'visible'
  }

};

/* Templates */
$.fn.dropdown.settings.templates = {

  // generates dropdown from select values
  dropdown: function(select) {
    var
      placeholder = select.placeholder || false,
      values      = select.values || {},
      html        = ''
    ;
    html +=  '<i class="dropdown icon"></i>';
    if(select.placeholder) {
      html += '<div class="default text">' + placeholder + '</div>';
    }
    else {
      html += '<div class="text"></div>';
    }
    html += '<div class="menu">';
    $.each(select.values, function(index, option) {
      html += (option.disabled)
        ? '<div class="disabled item" data-value="' + option.value + '">' + option.name + '</div>'
        : '<div class="item" data-value="' + option.value + '">' + option.name + '</div>'
      ;
    });
    html += '</div>';
    return html;
  },

  // generates just menu from select
  menu: function(response, fields) {
    var
      values = response[fields.values] || {},
      html   = ''
    ;
    $.each(values, function(index, option) {
      var
        maybeText = (option[fields.text])
          ? 'data-text="' + option[fields.text] + '"'
          : '',
        maybeDisabled = (option[fields.disabled])
          ? 'disabled '
          : ''
      ;
      html += '<div class="'+ maybeDisabled +'item" data-value="' + option[fields.value] + '"' + maybeText + '>';
      html +=   option[fields.name];
      html += '</div>';
    });
    return html;
  },

  // generates label for multiselect
  label: function(value, text) {
    return text + '<i class="delete icon"></i>';
  },


  // generates messages like "No results"
  message: function(message) {
    return message;
  },

  // generates user addition to selection menu
  addition: function(choice) {
    return choice;
  }

};

})( jQuery, window, document );


/***/ }),

/***/ "./tests/Application/node_modules/semantic-ui-css/components/transition.js":
/*!*********************************************************************************!*\
  !*** ./tests/Application/node_modules/semantic-ui-css/components/transition.js ***!
  \*********************************************************************************/
/***/ (() => {

/*!
 * # Semantic UI 2.4.1 - Transition
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ($, window, document, undefined) {

'use strict';

window = (typeof window != 'undefined' && window.Math == Math)
  ? window
  : (typeof self != 'undefined' && self.Math == Math)
    ? self
    : Function('return this')()
;

$.fn.transition = function() {
  var
    $allModules     = $(this),
    moduleSelector  = $allModules.selector || '',

    time            = new Date().getTime(),
    performance     = [],

    moduleArguments = arguments,
    query           = moduleArguments[0],
    queryArguments  = [].slice.call(arguments, 1),
    methodInvoked   = (typeof query === 'string'),

    requestAnimationFrame = window.requestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.msRequestAnimationFrame
      || function(callback) { setTimeout(callback, 0); },

    returnedValue
  ;
  $allModules
    .each(function(index) {
      var
        $module  = $(this),
        element  = this,

        // set at run time
        settings,
        instance,

        error,
        className,
        metadata,
        animationEnd,
        animationName,

        namespace,
        moduleNamespace,
        eventNamespace,
        module
      ;

      module = {

        initialize: function() {

          // get full settings
          settings        = module.get.settings.apply(element, moduleArguments);

          // shorthand
          className       = settings.className;
          error           = settings.error;
          metadata        = settings.metadata;

          // define namespace
          eventNamespace  = '.' + settings.namespace;
          moduleNamespace = 'module-' + settings.namespace;
          instance        = $module.data(moduleNamespace) || module;

          // get vendor specific events
          animationEnd    = module.get.animationEndEvent();

          if(methodInvoked) {
            methodInvoked = module.invoke(query);
          }

          // method not invoked, lets run an animation
          if(methodInvoked === false) {
            module.verbose('Converted arguments into settings object', settings);
            if(settings.interval) {
              module.delay(settings.animate);
            }
            else  {
              module.animate();
            }
            module.instantiate();
          }
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, instance)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous module for', element);
          $module
            .removeData(moduleNamespace)
          ;
        },

        refresh: function() {
          module.verbose('Refreshing display type on next animation');
          delete module.displayType;
        },

        forceRepaint: function() {
          module.verbose('Forcing element repaint');
          var
            $parentElement = $module.parent(),
            $nextElement = $module.next()
          ;
          if($nextElement.length === 0) {
            $module.detach().appendTo($parentElement);
          }
          else {
            $module.detach().insertBefore($nextElement);
          }
        },

        repaint: function() {
          module.verbose('Repainting element');
          var
            fakeAssignment = element.offsetWidth
          ;
        },

        delay: function(interval) {
          var
            direction = module.get.animationDirection(),
            shouldReverse,
            delay
          ;
          if(!direction) {
            direction = module.can.transition()
              ? module.get.direction()
              : 'static'
            ;
          }
          interval = (interval !== undefined)
            ? interval
            : settings.interval
          ;
          shouldReverse = (settings.reverse == 'auto' && direction == className.outward);
          delay = (shouldReverse || settings.reverse == true)
            ? ($allModules.length - index) * settings.interval
            : index * settings.interval
          ;
          module.debug('Delaying animation by', delay);
          setTimeout(module.animate, delay);
        },

        animate: function(overrideSettings) {
          settings = overrideSettings || settings;
          if(!module.is.supported()) {
            module.error(error.support);
            return false;
          }
          module.debug('Preparing animation', settings.animation);
          if(module.is.animating()) {
            if(settings.queue) {
              if(!settings.allowRepeats && module.has.direction() && module.is.occurring() && module.queuing !== true) {
                module.debug('Animation is currently occurring, preventing queueing same animation', settings.animation);
              }
              else {
                module.queue(settings.animation);
              }
              return false;
            }
            else if(!settings.allowRepeats && module.is.occurring()) {
              module.debug('Animation is already occurring, will not execute repeated animation', settings.animation);
              return false;
            }
            else {
              module.debug('New animation started, completing previous early', settings.animation);
              instance.complete();
            }
          }
          if( module.can.animate() ) {
            module.set.animating(settings.animation);
          }
          else {
            module.error(error.noAnimation, settings.animation, element);
          }
        },

        reset: function() {
          module.debug('Resetting animation to beginning conditions');
          module.remove.animationCallbacks();
          module.restore.conditions();
          module.remove.animating();
        },

        queue: function(animation) {
          module.debug('Queueing animation of', animation);
          module.queuing = true;
          $module
            .one(animationEnd + '.queue' + eventNamespace, function() {
              module.queuing = false;
              module.repaint();
              module.animate.apply(this, settings);
            })
          ;
        },

        complete: function (event) {
          module.debug('Animation complete', settings.animation);
          module.remove.completeCallback();
          module.remove.failSafe();
          if(!module.is.looping()) {
            if( module.is.outward() ) {
              module.verbose('Animation is outward, hiding element');
              module.restore.conditions();
              module.hide();
            }
            else if( module.is.inward() ) {
              module.verbose('Animation is outward, showing element');
              module.restore.conditions();
              module.show();
            }
            else {
              module.verbose('Static animation completed');
              module.restore.conditions();
              settings.onComplete.call(element);
            }
          }
        },

        force: {
          visible: function() {
            var
              style          = $module.attr('style'),
              userStyle      = module.get.userStyle(),
              displayType    = module.get.displayType(),
              overrideStyle  = userStyle + 'display: ' + displayType + ' !important;',
              currentDisplay = $module.css('display'),
              emptyStyle     = (style === undefined || style === '')
            ;
            if(currentDisplay !== displayType) {
              module.verbose('Overriding default display to show element', displayType);
              $module
                .attr('style', overrideStyle)
              ;
            }
            else if(emptyStyle) {
              $module.removeAttr('style');
            }
          },
          hidden: function() {
            var
              style          = $module.attr('style'),
              currentDisplay = $module.css('display'),
              emptyStyle     = (style === undefined || style === '')
            ;
            if(currentDisplay !== 'none' && !module.is.hidden()) {
              module.verbose('Overriding default display to hide element');
              $module
                .css('display', 'none')
              ;
            }
            else if(emptyStyle) {
              $module
                .removeAttr('style')
              ;
            }
          }
        },

        has: {
          direction: function(animation) {
            var
              hasDirection = false
            ;
            animation = animation || settings.animation;
            if(typeof animation === 'string') {
              animation = animation.split(' ');
              $.each(animation, function(index, word){
                if(word === className.inward || word === className.outward) {
                  hasDirection = true;
                }
              });
            }
            return hasDirection;
          },
          inlineDisplay: function() {
            var
              style = $module.attr('style') || ''
            ;
            return $.isArray(style.match(/display.*?;/, ''));
          }
        },

        set: {
          animating: function(animation) {
            var
              animationClass,
              direction
            ;
            // remove previous callbacks
            module.remove.completeCallback();

            // determine exact animation
            animation      = animation || settings.animation;
            animationClass = module.get.animationClass(animation);

            // save animation class in cache to restore class names
            module.save.animation(animationClass);

            // override display if necessary so animation appears visibly
            module.force.visible();

            module.remove.hidden();
            module.remove.direction();

            module.start.animation(animationClass);

          },
          duration: function(animationName, duration) {
            duration = duration || settings.duration;
            duration = (typeof duration == 'number')
              ? duration + 'ms'
              : duration
            ;
            if(duration || duration === 0) {
              module.verbose('Setting animation duration', duration);
              $module
                .css({
                  'animation-duration':  duration
                })
              ;
            }
          },
          direction: function(direction) {
            direction = direction || module.get.direction();
            if(direction == className.inward) {
              module.set.inward();
            }
            else {
              module.set.outward();
            }
          },
          looping: function() {
            module.debug('Transition set to loop');
            $module
              .addClass(className.looping)
            ;
          },
          hidden: function() {
            $module
              .addClass(className.transition)
              .addClass(className.hidden)
            ;
          },
          inward: function() {
            module.debug('Setting direction to inward');
            $module
              .removeClass(className.outward)
              .addClass(className.inward)
            ;
          },
          outward: function() {
            module.debug('Setting direction to outward');
            $module
              .removeClass(className.inward)
              .addClass(className.outward)
            ;
          },
          visible: function() {
            $module
              .addClass(className.transition)
              .addClass(className.visible)
            ;
          }
        },

        start: {
          animation: function(animationClass) {
            animationClass = animationClass || module.get.animationClass();
            module.debug('Starting tween', animationClass);
            $module
              .addClass(animationClass)
              .one(animationEnd + '.complete' + eventNamespace, module.complete)
            ;
            if(settings.useFailSafe) {
              module.add.failSafe();
            }
            module.set.duration(settings.duration);
            settings.onStart.call(element);
          }
        },

        save: {
          animation: function(animation) {
            if(!module.cache) {
              module.cache = {};
            }
            module.cache.animation = animation;
          },
          displayType: function(displayType) {
            if(displayType !== 'none') {
              $module.data(metadata.displayType, displayType);
            }
          },
          transitionExists: function(animation, exists) {
            $.fn.transition.exists[animation] = exists;
            module.verbose('Saving existence of transition', animation, exists);
          }
        },

        restore: {
          conditions: function() {
            var
              animation = module.get.currentAnimation()
            ;
            if(animation) {
              $module
                .removeClass(animation)
              ;
              module.verbose('Removing animation class', module.cache);
            }
            module.remove.duration();
          }
        },

        add: {
          failSafe: function() {
            var
              duration = module.get.duration()
            ;
            module.timer = setTimeout(function() {
              $module.triggerHandler(animationEnd);
            }, duration + settings.failSafeDelay);
            module.verbose('Adding fail safe timer', module.timer);
          }
        },

        remove: {
          animating: function() {
            $module.removeClass(className.animating);
          },
          animationCallbacks: function() {
            module.remove.queueCallback();
            module.remove.completeCallback();
          },
          queueCallback: function() {
            $module.off('.queue' + eventNamespace);
          },
          completeCallback: function() {
            $module.off('.complete' + eventNamespace);
          },
          display: function() {
            $module.css('display', '');
          },
          direction: function() {
            $module
              .removeClass(className.inward)
              .removeClass(className.outward)
            ;
          },
          duration: function() {
            $module
              .css('animation-duration', '')
            ;
          },
          failSafe: function() {
            module.verbose('Removing fail safe timer', module.timer);
            if(module.timer) {
              clearTimeout(module.timer);
            }
          },
          hidden: function() {
            $module.removeClass(className.hidden);
          },
          visible: function() {
            $module.removeClass(className.visible);
          },
          looping: function() {
            module.debug('Transitions are no longer looping');
            if( module.is.looping() ) {
              module.reset();
              $module
                .removeClass(className.looping)
              ;
            }
          },
          transition: function() {
            $module
              .removeClass(className.visible)
              .removeClass(className.hidden)
            ;
          }
        },
        get: {
          settings: function(animation, duration, onComplete) {
            // single settings object
            if(typeof animation == 'object') {
              return $.extend(true, {}, $.fn.transition.settings, animation);
            }
            // all arguments provided
            else if(typeof onComplete == 'function') {
              return $.extend({}, $.fn.transition.settings, {
                animation  : animation,
                onComplete : onComplete,
                duration   : duration
              });
            }
            // only duration provided
            else if(typeof duration == 'string' || typeof duration == 'number') {
              return $.extend({}, $.fn.transition.settings, {
                animation : animation,
                duration  : duration
              });
            }
            // duration is actually settings object
            else if(typeof duration == 'object') {
              return $.extend({}, $.fn.transition.settings, duration, {
                animation : animation
              });
            }
            // duration is actually callback
            else if(typeof duration == 'function') {
              return $.extend({}, $.fn.transition.settings, {
                animation  : animation,
                onComplete : duration
              });
            }
            // only animation provided
            else {
              return $.extend({}, $.fn.transition.settings, {
                animation : animation
              });
            }
          },
          animationClass: function(animation) {
            var
              animationClass = animation || settings.animation,
              directionClass = (module.can.transition() && !module.has.direction())
                ? module.get.direction() + ' '
                : ''
            ;
            return className.animating + ' '
              + className.transition + ' '
              + directionClass
              + animationClass
            ;
          },
          currentAnimation: function() {
            return (module.cache && module.cache.animation !== undefined)
              ? module.cache.animation
              : false
            ;
          },
          currentDirection: function() {
            return module.is.inward()
              ? className.inward
              : className.outward
            ;
          },
          direction: function() {
            return module.is.hidden() || !module.is.visible()
              ? className.inward
              : className.outward
            ;
          },
          animationDirection: function(animation) {
            var
              direction
            ;
            animation = animation || settings.animation;
            if(typeof animation === 'string') {
              animation = animation.split(' ');
              // search animation name for out/in class
              $.each(animation, function(index, word){
                if(word === className.inward) {
                  direction = className.inward;
                }
                else if(word === className.outward) {
                  direction = className.outward;
                }
              });
            }
            // return found direction
            if(direction) {
              return direction;
            }
            return false;
          },
          duration: function(duration) {
            duration = duration || settings.duration;
            if(duration === false) {
              duration = $module.css('animation-duration') || 0;
            }
            return (typeof duration === 'string')
              ? (duration.indexOf('ms') > -1)
                ? parseFloat(duration)
                : parseFloat(duration) * 1000
              : duration
            ;
          },
          displayType: function(shouldDetermine) {
            shouldDetermine = (shouldDetermine !== undefined)
              ? shouldDetermine
              : true
            ;
            if(settings.displayType) {
              return settings.displayType;
            }
            if(shouldDetermine && $module.data(metadata.displayType) === undefined) {
              // create fake element to determine display state
              module.can.transition(true);
            }
            return $module.data(metadata.displayType);
          },
          userStyle: function(style) {
            style = style || $module.attr('style') || '';
            return style.replace(/display.*?;/, '');
          },
          transitionExists: function(animation) {
            return $.fn.transition.exists[animation];
          },
          animationStartEvent: function() {
            var
              element     = document.createElement('div'),
              animations  = {
                'animation'       :'animationstart',
                'OAnimation'      :'oAnimationStart',
                'MozAnimation'    :'mozAnimationStart',
                'WebkitAnimation' :'webkitAnimationStart'
              },
              animation
            ;
            for(animation in animations){
              if( element.style[animation] !== undefined ){
                return animations[animation];
              }
            }
            return false;
          },
          animationEndEvent: function() {
            var
              element     = document.createElement('div'),
              animations  = {
                'animation'       :'animationend',
                'OAnimation'      :'oAnimationEnd',
                'MozAnimation'    :'mozAnimationEnd',
                'WebkitAnimation' :'webkitAnimationEnd'
              },
              animation
            ;
            for(animation in animations){
              if( element.style[animation] !== undefined ){
                return animations[animation];
              }
            }
            return false;
          }

        },

        can: {
          transition: function(forced) {
            var
              animation         = settings.animation,
              transitionExists  = module.get.transitionExists(animation),
              displayType       = module.get.displayType(false),
              elementClass,
              tagName,
              $clone,
              currentAnimation,
              inAnimation,
              directionExists
            ;
            if( transitionExists === undefined || forced) {
              module.verbose('Determining whether animation exists');
              elementClass = $module.attr('class');
              tagName      = $module.prop('tagName');

              $clone = $('<' + tagName + ' />').addClass( elementClass ).insertAfter($module);
              currentAnimation = $clone
                .addClass(animation)
                .removeClass(className.inward)
                .removeClass(className.outward)
                .addClass(className.animating)
                .addClass(className.transition)
                .css('animationName')
              ;
              inAnimation = $clone
                .addClass(className.inward)
                .css('animationName')
              ;
              if(!displayType) {
                displayType = $clone
                  .attr('class', elementClass)
                  .removeAttr('style')
                  .removeClass(className.hidden)
                  .removeClass(className.visible)
                  .show()
                  .css('display')
                ;
                module.verbose('Determining final display state', displayType);
                module.save.displayType(displayType);
              }

              $clone.remove();
              if(currentAnimation != inAnimation) {
                module.debug('Direction exists for animation', animation);
                directionExists = true;
              }
              else if(currentAnimation == 'none' || !currentAnimation) {
                module.debug('No animation defined in css', animation);
                return;
              }
              else {
                module.debug('Static animation found', animation, displayType);
                directionExists = false;
              }
              module.save.transitionExists(animation, directionExists);
            }
            return (transitionExists !== undefined)
              ? transitionExists
              : directionExists
            ;
          },
          animate: function() {
            // can transition does not return a value if animation does not exist
            return (module.can.transition() !== undefined);
          }
        },

        is: {
          animating: function() {
            return $module.hasClass(className.animating);
          },
          inward: function() {
            return $module.hasClass(className.inward);
          },
          outward: function() {
            return $module.hasClass(className.outward);
          },
          looping: function() {
            return $module.hasClass(className.looping);
          },
          occurring: function(animation) {
            animation = animation || settings.animation;
            animation = '.' + animation.replace(' ', '.');
            return ( $module.filter(animation).length > 0 );
          },
          visible: function() {
            return $module.is(':visible');
          },
          hidden: function() {
            return $module.css('visibility') === 'hidden';
          },
          supported: function() {
            return(animationEnd !== false);
          }
        },

        hide: function() {
          module.verbose('Hiding element');
          if( module.is.animating() ) {
            module.reset();
          }
          element.blur(); // IE will trigger focus change if element is not blurred before hiding
          module.remove.display();
          module.remove.visible();
          module.set.hidden();
          module.force.hidden();
          settings.onHide.call(element);
          settings.onComplete.call(element);
          // module.repaint();
        },

        show: function(display) {
          module.verbose('Showing element', display);
          module.remove.hidden();
          module.set.visible();
          module.force.visible();
          settings.onShow.call(element);
          settings.onComplete.call(element);
          // module.repaint();
        },

        toggle: function() {
          if( module.is.visible() ) {
            module.hide();
          }
          else {
            module.show();
          }
        },

        stop: function() {
          module.debug('Stopping current animation');
          $module.triggerHandler(animationEnd);
        },

        stopAll: function() {
          module.debug('Stopping all animation');
          module.remove.queueCallback();
          $module.triggerHandler(animationEnd);
        },

        clear: {
          queue: function() {
            module.debug('Clearing animation queue');
            module.remove.queueCallback();
          }
        },

        enable: function() {
          module.verbose('Starting animation');
          $module.removeClass(className.disabled);
        },

        disable: function() {
          module.debug('Stopping animation');
          $module.addClass(className.disabled);
        },

        setting: function(name, value) {
          module.debug('Changing setting', name, value);
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            if($.isPlainObject(settings[name])) {
              $.extend(true, settings[name], value);
            }
            else {
              settings[name] = value;
            }
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(!settings.silent && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(!settings.silent && settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          if(!settings.silent) {
            module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
            module.error.apply(console, arguments);
          }
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Element'        : element,
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 500);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if($allModules.length > 1) {
              title += ' ' + '(' + $allModules.length + ')';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        // modified for transition to return invoke success
        invoke: function(query, passedArguments, context) {
          var
            object = instance,
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }

          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return (found !== undefined)
            ? found
            : false
          ;
        }
      };
      module.initialize();
    })
  ;
  return (returnedValue !== undefined)
    ? returnedValue
    : this
  ;
};

// Records if CSS transition is available
$.fn.transition.exists = {};

$.fn.transition.settings = {

  // module info
  name          : 'Transition',

  // hide all output from this component regardless of other settings
  silent        : false,

  // debug content outputted to console
  debug         : false,

  // verbose debug output
  verbose       : false,

  // performance data output
  performance   : true,

  // event namespace
  namespace     : 'transition',

  // delay between animations in group
  interval      : 0,

  // whether group animations should be reversed
  reverse       : 'auto',

  // animation callback event
  onStart       : function() {},
  onComplete    : function() {},
  onShow        : function() {},
  onHide        : function() {},

  // whether timeout should be used to ensure callback fires in cases animationend does not
  useFailSafe   : true,

  // delay in ms for fail safe
  failSafeDelay : 100,

  // whether EXACT animation can occur twice in a row
  allowRepeats  : false,

  // Override final display type on visible
  displayType   : false,

  // animation duration
  animation     : 'fade',
  duration      : false,

  // new animations will occur after previous ones
  queue         : true,

  metadata : {
    displayType: 'display'
  },

  className   : {
    animating  : 'animating',
    disabled   : 'disabled',
    hidden     : 'hidden',
    inward     : 'in',
    loading    : 'loading',
    looping    : 'looping',
    outward    : 'out',
    transition : 'transition',
    visible    : 'visible'
  },

  // possible errors
  error: {
    noAnimation : 'Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.',
    repeated    : 'That animation is already occurring, cancelling repeated animation',
    method      : 'The method you called is not defined',
    support     : 'This browser does not support CSS animations'
  }

};


})( jQuery, window, document );


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************************!*\
  !*** ./src/Resources/assets/admin/entry.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/Resources/assets/admin/scss/main.scss");
/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js */ "./src/Resources/assets/admin/js/index.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lsaXVzLW9yZGVyQ3JlYXRpb24tYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUcsU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDcEMsU0FBT0EsR0FBRyxDQUFDQyxPQUFKLENBQVksUUFBWixFQUFzQixVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxXQUFULEVBQUo7QUFBQSxHQUEzQixDQUFQO0FBQ0gsQ0FGRDs7QUFJQUMsQ0FBQyxDQUFDQyxFQUFGLENBQUtDLE1BQUwsQ0FBWTtBQUNSQyxFQUFBQSxXQURRLHlCQUNNO0FBQ1YsUUFBTUMsT0FBTyxHQUFHLElBQWhCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsdUJBQWhCLEVBQXlDQyxJQUF6QyxHQUFnREMsSUFBaEQsQ0FBcUQsaUJBQXJELENBQWY7O0FBRUEsUUFBTUMsVUFBVSxHQUFHLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3pDLGFBQU9OLE9BQU8sQ0FBQ0ksSUFBUixxQkFBeUJiLFFBQVEsQ0FBQ2UsSUFBRCxDQUFqQyxVQUFQO0FBQ0gsS0FGRDs7QUFJQUwsSUFBQUEsTUFBTSxDQUFDTSxRQUFQLENBQWdCO0FBQ1pDLE1BQUFBLGNBQWMsRUFBRSxLQURKO0FBR1pDLE1BQUFBLFFBSFksb0JBR0hILElBSEcsRUFHR0ksSUFISCxFQUdTQyxNQUhULEVBR2lCO0FBQ3pCLDJCQUF1Q0EsTUFBTSxDQUFDQyxJQUFQLEVBQXZDO0FBQUEsWUFBUUMsWUFBUixnQkFBUUEsWUFBUjtBQUFBLFlBQXNCQyxZQUF0QixnQkFBc0JBLFlBQXRCOztBQUNBLFlBQU1DLGlCQUFpQixHQUFHZCxNQUFNLENBQUNlLE1BQVAsR0FBZ0JaLElBQWhCLENBQXFCLHFCQUFyQixFQUE0Q2EsR0FBNUMsQ0FBZ0QsQ0FBaEQsQ0FBMUI7QUFFQWpCLFFBQUFBLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLDBEQUFiLEVBQXlFYyxJQUF6RSxDQUE4RSxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDNUZ4QixVQUFBQSxDQUFDLENBQUN3QixLQUFELENBQUQsQ0FBU0MsR0FBVCxDQUFhLEVBQWI7QUFDSCxTQUZEO0FBSUFDLFFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlWixNQUFNLENBQUNDLElBQVAsRUFBZixFQUE4QlksT0FBOUIsQ0FBc0MsZ0JBQXVCO0FBQUE7QUFBQSxjQUFyQkMsUUFBcUI7QUFBQSxjQUFYQyxLQUFXOztBQUN6RCxjQUFNQyxLQUFLLEdBQUd0QixVQUFVLENBQUNvQixRQUFELENBQXhCOztBQUVBLGNBQUlBLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQixhQUFqQixNQUFvQyxDQUFDLENBQXpDLEVBQTRDO0FBQ3hDRCxZQUFBQSxLQUFLLENBQUNOLEdBQU4sQ0FBVUssS0FBVixFQUFpQkcsTUFBakI7QUFFQSxnQkFBTUMsTUFBTSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUM3QixrQkFBTUMsaUJBQWlCLEdBQUczQixVQUFVLENBQUMsY0FBRCxDQUFwQztBQUNBLGtCQUFNNEIsaUJBQWlCLEdBQUc1QixVQUFVLENBQUMsY0FBRCxDQUFwQztBQUVBLGtCQUFNNkIsaUJBQWlCLEdBQUd0QyxDQUFDLENBQUNtQixpQkFBRCxDQUFELENBQXFCb0IsSUFBckIsQ0FBMEIsY0FBMUIsQ0FBMUI7O0FBRUEsa0JBQUksRUFBRSxPQUFPRCxpQkFBUCxLQUE2QixZQUE3QixJQUE2Q0EsaUJBQWlCLEtBQUssS0FBckUsQ0FBSixFQUFpRjtBQUM3RSxvQkFBSUYsaUJBQWlCLENBQUNJLE1BQWxCLEtBQTZCLENBQTdCLEtBQW1DdkIsWUFBWSxLQUFLLEVBQWpCLElBQXVCQSxZQUFZLElBQUl3QixTQUExRSxDQUFKLEVBQTBGO0FBQ3RGTCxrQkFBQUEsaUJBQWlCLENBQUNYLEdBQWxCLENBQXNCUixZQUF0QjtBQUVBeUIsa0JBQUFBLGFBQWEsQ0FBQ1IsTUFBRCxDQUFiO0FBQ0gsaUJBSkQsTUFJTyxJQUFJRyxpQkFBaUIsQ0FBQ0csTUFBbEIsS0FBNkIsQ0FBN0IsS0FBbUN0QixZQUFZLEtBQUssRUFBakIsSUFBdUJBLFlBQVksSUFBSXVCLFNBQTFFLENBQUosRUFBMEY7QUFDN0ZKLGtCQUFBQSxpQkFBaUIsQ0FBQ1osR0FBbEIsQ0FBc0JQLFlBQXRCO0FBRUF3QixrQkFBQUEsYUFBYSxDQUFDUixNQUFELENBQWI7QUFDSDtBQUNKO0FBQ0osYUFqQnlCLEVBaUJ2QixHQWpCdUIsQ0FBMUI7QUFrQkgsV0FyQkQsTUFxQk8sSUFBSUgsS0FBSyxDQUFDWSxFQUFOLENBQVMsZ0JBQVQsS0FBOEJaLEtBQUssQ0FBQ1ksRUFBTixDQUFTLG1CQUFULENBQWxDLEVBQWlFO0FBQ3BFWixZQUFBQSxLQUFLLENBQUNhLElBQU4sQ0FBVyxTQUFYLEVBQXNCLEtBQXRCO0FBQ0FiLFlBQUFBLEtBQUssQ0FBQ2MsTUFBTixvQkFBd0JmLEtBQXhCLFVBQW1DYyxJQUFuQyxDQUF3QyxTQUF4QyxFQUFtRCxJQUFuRDtBQUNILFdBSE0sTUFHQTtBQUNIYixZQUFBQSxLQUFLLENBQUNOLEdBQU4sQ0FBVUssS0FBVjtBQUNIO0FBQ0osU0E5QkQ7QUErQkg7QUExQ1csS0FBaEI7QUE0Q0g7QUFyRE8sQ0FBWjtBQXdEQSxpRUFBZSxZQUFNO0FBQ2pCOUIsRUFBQUEsQ0FBQyxDQUFDLHdEQUFELENBQUQsQ0FBNERHLFdBQTVEO0FBQ0FILEVBQUFBLENBQUMsQ0FBQyx1REFBRCxDQUFELENBQTJERyxXQUEzRDtBQUNILENBSEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFFQTtBQUVBSCxDQUFDLENBQUMsWUFBVztBQUNUOEMsRUFBQUEscUVBQXdCO0FBQzNCLENBRkEsQ0FBRDs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSw4QkFBOEI7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUEsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELDhDQUE4QyxTQUFTO0FBQ3ZELDhDQUE4QyxLQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLEtBQUs7QUFDL0M7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0QsZUFBZTtBQUNmO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3SEFBd0g7O0FBRXhIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQsb0RBQW9EOztBQUVwRCw2Q0FBNkM7QUFDN0MsMENBQTBDLGlCQUFpQjtBQUMzRCxvQ0FBb0MsY0FBYztBQUNsRCx5Q0FBeUMsY0FBYztBQUN2RCw4QkFBOEI7QUFDOUIsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsS0FBSztBQUNsQyxzQkFBc0IsT0FBTztBQUM3QiwwQkFBMEIsVUFBVTtBQUNwQztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7QUNsM0hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBCQUEwQjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLCtCQUErQjs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLENBQUM7Ozs7Ozs7VUN0a0NEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHN5bGl1cy9hZG1pbi1vcmRlci1jcmVhdGlvbi1wbHVnaW4vLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9PcmRlckNyZWF0ZUFkZHJlc3NTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vQHN5bGl1cy9hZG1pbi1vcmRlci1jcmVhdGlvbi1wbHVnaW4vLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac3lsaXVzL2FkbWluLW9yZGVyLWNyZWF0aW9uLXBsdWdpbi8uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL0BzeWxpdXMvYWRtaW4tb3JkZXItY3JlYXRpb24tcGx1Z2luLy4vdGVzdHMvQXBwbGljYXRpb24vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzIiwid2VicGFjazovL0BzeWxpdXMvYWRtaW4tb3JkZXItY3JlYXRpb24tcGx1Z2luLy4vdGVzdHMvQXBwbGljYXRpb24vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vQHN5bGl1cy9hZG1pbi1vcmRlci1jcmVhdGlvbi1wbHVnaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHN5bGl1cy9hZG1pbi1vcmRlci1jcmVhdGlvbi1wbHVnaW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQHN5bGl1cy9hZG1pbi1vcmRlci1jcmVhdGlvbi1wbHVnaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BzeWxpdXMvYWRtaW4tb3JkZXItY3JlYXRpb24tcGx1Z2luL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHN5bGl1cy9hZG1pbi1vcmRlci1jcmVhdGlvbi1wbHVnaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ac3lsaXVzL2FkbWluLW9yZGVyLWNyZWF0aW9uLXBsdWdpbi8uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhcnNlS2V5ID0gZnVuY3Rpb24gcGFyc2VLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKC8oX1xcdykvZywgd29yZHMgPT4gd29yZHNbMV0udG9VcHBlckNhc2UoKSk7XG59O1xuXG4kLmZuLmV4dGVuZCh7XG4gICAgYWRkcmVzc0Jvb2soKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzO1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBlbGVtZW50LnBhcmVudHMoJy5qcy1hZGRyZXNzLWNvbnRhaW5lcicpLnByZXYoKS5maW5kKCc+ICo6Zmlyc3QtY2hpbGQnKTtcblxuICAgICAgICBjb25zdCBmaW5kQnlOYW1lID0gZnVuY3Rpb24gZmluZEJ5TmFtZShuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5maW5kKGBbbmFtZSo9XCJbJHtwYXJzZUtleShuYW1lKX1dXCJdYCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZWN0LmRyb3Bkb3duKHtcbiAgICAgICAgICAgIGZvcmNlU2VsZWN0aW9uOiBmYWxzZSxcblxuICAgICAgICAgICAgb25DaGFuZ2UobmFtZSwgdGV4dCwgY2hvaWNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwcm92aW5jZUNvZGUsIHByb3ZpbmNlTmFtZSB9ID0gY2hvaWNlLmRhdGEoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm92aW5jZUNvbnRhaW5lciA9IHNlbGVjdC5wYXJlbnQoKS5maW5kKCcucHJvdmluY2UtY29udGFpbmVyJykuZ2V0KDApO1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJyYWRpb1wiXSk6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pLCBzZWxlY3QnKS5lYWNoKChpbmRleCwgaW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJChpbnB1dCkudmFsKCcnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNob2ljZS5kYXRhKCkpLmZvckVhY2goKFtwcm9wZXJ0eSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmluZEJ5TmFtZShwcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJ2NvdW50cnlDb2RlJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52YWwodmFsdWUpLmNoYW5nZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdHMgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvdmluY2VDb2RlRmllbGQgPSBmaW5kQnlOYW1lKCdwcm92aW5jZUNvZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm92aW5jZU5hbWVGaWVsZCA9IGZpbmRCeU5hbWUoJ3Byb3ZpbmNlTmFtZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvdmluY2VJc0xvYWRpbmcgPSAkKHByb3ZpbmNlQ29udGFpbmVyKS5hdHRyKCdkYXRhLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiBwcm92aW5jZUlzTG9hZGluZyAhPT0gJ3VuZGVmaW5kZWQnICYmIHByb3ZpbmNlSXNMb2FkaW5nICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpbmNlQ29kZUZpZWxkLmxlbmd0aCAhPT0gMCAmJiAocHJvdmluY2VDb2RlICE9PSAnJyB8fCBwcm92aW5jZUNvZGUgIT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2VDb2RlRmllbGQudmFsKHByb3ZpbmNlQ29kZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXhpc3RzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm92aW5jZU5hbWVGaWVsZC5sZW5ndGggIT09IDAgJiYgKHByb3ZpbmNlTmFtZSAhPT0gJycgfHwgcHJvdmluY2VOYW1lICE9IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpbmNlTmFtZUZpZWxkLnZhbChwcm92aW5jZU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGV4aXN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmlzKCdbdHlwZT1cInJhZGlvXCJdJykgfHwgZmllbGQuaXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmZpbHRlcihgW3ZhbHVlPVwiJHt2YWx1ZX1cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52YWwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICAkKCcjc3lsaXVzX2FkbWluX29yZGVyX2NyZWF0aW9uX25ld19vcmRlcl9zaGlwcGluZ0FkZHJlc3MnKS5hZGRyZXNzQm9vaygpO1xuICAgICQoJyNzeWxpdXNfYWRtaW5fb3JkZXJfY3JlYXRpb25fbmV3X29yZGVyX2JpbGxpbmdBZGRyZXNzJykuYWRkcmVzc0Jvb2soKTtcbn07XG4iLCJpbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9jb21wb25lbnRzL2Ryb3Bkb3duJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL2NvbXBvbmVudHMvdHJhbnNpdGlvbic7XG5cbmltcG9ydCBPcmRlckNyZWF0ZUFkZHJlc3NTZWxlY3QgZnJvbSAnLi9PcmRlckNyZWF0ZUFkZHJlc3NTZWxlY3QnO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgIE9yZGVyQ3JlYXRlQWRkcmVzc1NlbGVjdCgpO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiFcbiAqICMgU2VtYW50aWMgVUkgMi40LjEgLSBEcm9wZG93blxuICogaHR0cDovL2dpdGh1Yi5jb20vc2VtYW50aWMtb3JnL3NlbWFudGljLXVpL1xuICpcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKi9cblxuOyhmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbid1c2Ugc3RyaWN0Jztcblxud2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aClcbiAgPyB3aW5kb3dcbiAgOiAodHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGgpXG4gICAgPyBzZWxmXG4gICAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpXG47XG5cbiQuZm4uZHJvcGRvd24gPSBmdW5jdGlvbihwYXJhbWV0ZXJzKSB7XG4gIHZhclxuICAgICRhbGxNb2R1bGVzICAgID0gJCh0aGlzKSxcbiAgICAkZG9jdW1lbnQgICAgICA9ICQoZG9jdW1lbnQpLFxuXG4gICAgbW9kdWxlU2VsZWN0b3IgPSAkYWxsTW9kdWxlcy5zZWxlY3RvciB8fCAnJyxcblxuICAgIGhhc1RvdWNoICAgICAgID0gKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCksXG4gICAgdGltZSAgICAgICAgICAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBwZXJmb3JtYW5jZSAgICA9IFtdLFxuXG4gICAgcXVlcnkgICAgICAgICAgPSBhcmd1bWVudHNbMF0sXG4gICAgbWV0aG9kSW52b2tlZCAgPSAodHlwZW9mIHF1ZXJ5ID09ICdzdHJpbmcnKSxcbiAgICBxdWVyeUFyZ3VtZW50cyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICByZXR1cm5lZFZhbHVlXG4gIDtcblxuICAkYWxsTW9kdWxlc1xuICAgIC5lYWNoKGZ1bmN0aW9uKGVsZW1lbnRJbmRleCkge1xuICAgICAgdmFyXG4gICAgICAgIHNldHRpbmdzICAgICAgICAgID0gKCAkLmlzUGxhaW5PYmplY3QocGFyYW1ldGVycykgKVxuICAgICAgICAgID8gJC5leHRlbmQodHJ1ZSwge30sICQuZm4uZHJvcGRvd24uc2V0dGluZ3MsIHBhcmFtZXRlcnMpXG4gICAgICAgICAgOiAkLmV4dGVuZCh7fSwgJC5mbi5kcm9wZG93bi5zZXR0aW5ncyksXG5cbiAgICAgICAgY2xhc3NOYW1lICAgICAgID0gc2V0dGluZ3MuY2xhc3NOYW1lLFxuICAgICAgICBtZXNzYWdlICAgICAgICAgPSBzZXR0aW5ncy5tZXNzYWdlLFxuICAgICAgICBmaWVsZHMgICAgICAgICAgPSBzZXR0aW5ncy5maWVsZHMsXG4gICAgICAgIGtleXMgICAgICAgICAgICA9IHNldHRpbmdzLmtleXMsXG4gICAgICAgIG1ldGFkYXRhICAgICAgICA9IHNldHRpbmdzLm1ldGFkYXRhLFxuICAgICAgICBuYW1lc3BhY2UgICAgICAgPSBzZXR0aW5ncy5uYW1lc3BhY2UsXG4gICAgICAgIHJlZ0V4cCAgICAgICAgICA9IHNldHRpbmdzLnJlZ0V4cCxcbiAgICAgICAgc2VsZWN0b3IgICAgICAgID0gc2V0dGluZ3Muc2VsZWN0b3IsXG4gICAgICAgIGVycm9yICAgICAgICAgICA9IHNldHRpbmdzLmVycm9yLFxuICAgICAgICB0ZW1wbGF0ZXMgICAgICAgPSBzZXR0aW5ncy50ZW1wbGF0ZXMsXG5cbiAgICAgICAgZXZlbnROYW1lc3BhY2UgID0gJy4nICsgbmFtZXNwYWNlLFxuICAgICAgICBtb2R1bGVOYW1lc3BhY2UgPSAnbW9kdWxlLScgKyBuYW1lc3BhY2UsXG5cbiAgICAgICAgJG1vZHVsZSAgICAgICAgID0gJCh0aGlzKSxcbiAgICAgICAgJGNvbnRleHQgICAgICAgID0gJChzZXR0aW5ncy5jb250ZXh0KSxcbiAgICAgICAgJHRleHQgICAgICAgICAgID0gJG1vZHVsZS5maW5kKHNlbGVjdG9yLnRleHQpLFxuICAgICAgICAkc2VhcmNoICAgICAgICAgPSAkbW9kdWxlLmZpbmQoc2VsZWN0b3Iuc2VhcmNoKSxcbiAgICAgICAgJHNpemVyICAgICAgICAgID0gJG1vZHVsZS5maW5kKHNlbGVjdG9yLnNpemVyKSxcbiAgICAgICAgJGlucHV0ICAgICAgICAgID0gJG1vZHVsZS5maW5kKHNlbGVjdG9yLmlucHV0KSxcbiAgICAgICAgJGljb24gICAgICAgICAgID0gJG1vZHVsZS5maW5kKHNlbGVjdG9yLmljb24pLFxuXG4gICAgICAgICRjb21ibyA9ICgkbW9kdWxlLnByZXYoKS5maW5kKHNlbGVjdG9yLnRleHQpLmxlbmd0aCA+IDApXG4gICAgICAgICAgPyAkbW9kdWxlLnByZXYoKS5maW5kKHNlbGVjdG9yLnRleHQpXG4gICAgICAgICAgOiAkbW9kdWxlLnByZXYoKSxcblxuICAgICAgICAkbWVudSAgICAgICAgICAgPSAkbW9kdWxlLmNoaWxkcmVuKHNlbGVjdG9yLm1lbnUpLFxuICAgICAgICAkaXRlbSAgICAgICAgICAgPSAkbWVudS5maW5kKHNlbGVjdG9yLml0ZW0pLFxuXG4gICAgICAgIGFjdGl2YXRlZCAgICAgICA9IGZhbHNlLFxuICAgICAgICBpdGVtQWN0aXZhdGVkICAgPSBmYWxzZSxcbiAgICAgICAgaW50ZXJuYWxDaGFuZ2UgID0gZmFsc2UsXG4gICAgICAgIGVsZW1lbnQgICAgICAgICA9IHRoaXMsXG4gICAgICAgIGluc3RhbmNlICAgICAgICA9ICRtb2R1bGUuZGF0YShtb2R1bGVOYW1lc3BhY2UpLFxuXG4gICAgICAgIGluaXRpYWxMb2FkLFxuICAgICAgICBwYWdlTG9zdEZvY3VzLFxuICAgICAgICB3aWxsUmVmb2N1cyxcbiAgICAgICAgZWxlbWVudE5hbWVzcGFjZSxcbiAgICAgICAgaWQsXG4gICAgICAgIHNlbGVjdE9ic2VydmVyLFxuICAgICAgICBtZW51T2JzZXJ2ZXIsXG4gICAgICAgIG1vZHVsZVxuICAgICAgO1xuXG4gICAgICBtb2R1bGUgPSB7XG5cbiAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kdWxlLmRlYnVnKCdJbml0aWFsaXppbmcgZHJvcGRvd24nLCBzZXR0aW5ncyk7XG5cbiAgICAgICAgICBpZiggbW9kdWxlLmlzLmFscmVhZHlTZXR1cCgpICkge1xuICAgICAgICAgICAgbW9kdWxlLnNldHVwLnJlZmVyZW5jZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgbW9kdWxlLnNldHVwLmxheW91dCgpO1xuXG4gICAgICAgICAgICBpZihzZXR0aW5ncy52YWx1ZXMpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmNoYW5nZS52YWx1ZXMoc2V0dGluZ3MudmFsdWVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kdWxlLnJlZnJlc2hEYXRhKCk7XG5cbiAgICAgICAgICAgIG1vZHVsZS5zYXZlLmRlZmF1bHRzKCk7XG4gICAgICAgICAgICBtb2R1bGUucmVzdG9yZS5zZWxlY3RlZCgpO1xuXG4gICAgICAgICAgICBtb2R1bGUuY3JlYXRlLmlkKCk7XG4gICAgICAgICAgICBtb2R1bGUuYmluZC5ldmVudHMoKTtcblxuICAgICAgICAgICAgbW9kdWxlLm9ic2VydmVDaGFuZ2VzKCk7XG4gICAgICAgICAgICBtb2R1bGUuaW5zdGFudGlhdGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICBpbnN0YW50aWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1N0b3JpbmcgaW5zdGFuY2Ugb2YgZHJvcGRvd24nLCBtb2R1bGUpO1xuICAgICAgICAgIGluc3RhbmNlID0gbW9kdWxlO1xuICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgIC5kYXRhKG1vZHVsZU5hbWVzcGFjZSwgbW9kdWxlKVxuICAgICAgICAgIDtcbiAgICAgICAgfSxcblxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnRGVzdHJveWluZyBwcmV2aW91cyBkcm9wZG93bicsICRtb2R1bGUpO1xuICAgICAgICAgIG1vZHVsZS5yZW1vdmUudGFiYmFibGUoKTtcbiAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAub2ZmKGV2ZW50TmFtZXNwYWNlKVxuICAgICAgICAgICAgLnJlbW92ZURhdGEobW9kdWxlTmFtZXNwYWNlKVxuICAgICAgICAgIDtcbiAgICAgICAgICAkbWVudVxuICAgICAgICAgICAgLm9mZihldmVudE5hbWVzcGFjZSlcbiAgICAgICAgICA7XG4gICAgICAgICAgJGRvY3VtZW50XG4gICAgICAgICAgICAub2ZmKGVsZW1lbnROYW1lc3BhY2UpXG4gICAgICAgICAgO1xuICAgICAgICAgIG1vZHVsZS5kaXNjb25uZWN0Lm1lbnVPYnNlcnZlcigpO1xuICAgICAgICAgIG1vZHVsZS5kaXNjb25uZWN0LnNlbGVjdE9ic2VydmVyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb2JzZXJ2ZUNoYW5nZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIHNlbGVjdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobW9kdWxlLmV2ZW50LnNlbGVjdC5tdXRhdGlvbik7XG4gICAgICAgICAgICBtZW51T2JzZXJ2ZXIgICA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG1vZHVsZS5ldmVudC5tZW51Lm11dGF0aW9uKTtcbiAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnU2V0dGluZyB1cCBtdXRhdGlvbiBvYnNlcnZlcicsIHNlbGVjdE9ic2VydmVyLCBtZW51T2JzZXJ2ZXIpO1xuICAgICAgICAgICAgbW9kdWxlLm9ic2VydmUuc2VsZWN0KCk7XG4gICAgICAgICAgICBtb2R1bGUub2JzZXJ2ZS5tZW51KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRpc2Nvbm5lY3Q6IHtcbiAgICAgICAgICBtZW51T2JzZXJ2ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYobWVudU9ic2VydmVyKSB7XG4gICAgICAgICAgICAgIG1lbnVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3RPYnNlcnZlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihzZWxlY3RPYnNlcnZlcikge1xuICAgICAgICAgICAgICBzZWxlY3RPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvYnNlcnZlOiB7XG4gICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKG1vZHVsZS5oYXMuaW5wdXQoKSkge1xuICAgICAgICAgICAgICBzZWxlY3RPYnNlcnZlci5vYnNlcnZlKCRtb2R1bGVbMF0sIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3QgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWUgICA6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZW51OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKG1vZHVsZS5oYXMubWVudSgpKSB7XG4gICAgICAgICAgICAgIG1lbnVPYnNlcnZlci5vYnNlcnZlKCRtZW51WzBdLCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0IDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlICAgOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICBpZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZCA9IChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KSArICcwMDAwMDAwMDAnKS5zdWJzdHIoMiwgOCk7XG4gICAgICAgICAgICBlbGVtZW50TmFtZXNwYWNlID0gJy4nICsgaWQ7XG4gICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnQ3JlYXRpbmcgdW5pcXVlIGlkIGZvciBlbGVtZW50JywgaWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlckNob2ljZTogZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgJHVzZXJDaG9pY2VzLFxuICAgICAgICAgICAgICAkdXNlckNob2ljZSxcbiAgICAgICAgICAgICAgaXNVc2VyVmFsdWUsXG4gICAgICAgICAgICAgIGh0bWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcyB8fCBtb2R1bGUuZ2V0LnVzZXJWYWx1ZXMoKTtcbiAgICAgICAgICAgIGlmKCF2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVzID0gJC5pc0FycmF5KHZhbHVlcylcbiAgICAgICAgICAgICAgPyB2YWx1ZXNcbiAgICAgICAgICAgICAgOiBbdmFsdWVzXVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgJC5lYWNoKHZhbHVlcywgZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmKG1vZHVsZS5nZXQuaXRlbSh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaHRtbCAgICAgICAgID0gc2V0dGluZ3MudGVtcGxhdGVzLmFkZGl0aW9uKCBtb2R1bGUuYWRkLnZhcmlhYmxlcyhtZXNzYWdlLmFkZFJlc3VsdCwgdmFsdWUpICk7XG4gICAgICAgICAgICAgICAgJHVzZXJDaG9pY2UgID0gJCgnPGRpdiAvPicpXG4gICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtJyArIG1ldGFkYXRhLnZhbHVlLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLScgKyBtZXRhZGF0YS50ZXh0LCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUuYWRkaXRpb24pXG4gICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLml0ZW0pXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLmhpZGVBZGRpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICR1c2VyQ2hvaWNlLmFkZENsYXNzKGNsYXNzTmFtZS5oaWRkZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkdXNlckNob2ljZXMgPSAoJHVzZXJDaG9pY2VzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICA/ICR1c2VyQ2hvaWNlXG4gICAgICAgICAgICAgICAgICA6ICR1c2VyQ2hvaWNlcy5hZGQoJHVzZXJDaG9pY2UpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdDcmVhdGluZyB1c2VyIGNob2ljZXMgZm9yIHZhbHVlJywgdmFsdWUsICR1c2VyQ2hvaWNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gJHVzZXJDaG9pY2VzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlckxhYmVsczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICB1c2VyVmFsdWVzID0gbW9kdWxlLmdldC51c2VyVmFsdWVzKClcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmKHVzZXJWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdBZGRpbmcgdXNlciBsYWJlbHMnLCB1c2VyVmFsdWVzKTtcbiAgICAgICAgICAgICAgJC5lYWNoKHVzZXJWYWx1ZXMsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdBZGRpbmcgY3VzdG9tIHVzZXIgdmFsdWUnKTtcbiAgICAgICAgICAgICAgICBtb2R1bGUuYWRkLmxhYmVsKHZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVudTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbWVudSA9ICQoJzxkaXYgLz4nKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLm1lbnUpXG4gICAgICAgICAgICAgIC5hcHBlbmRUbygkbW9kdWxlKVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2l6ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHNpemVyID0gJCgnPHNwYW4gLz4nKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLnNpemVyKVxuICAgICAgICAgICAgICAuaW5zZXJ0QWZ0ZXIoJHNlYXJjaClcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VhcmNoOiBmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgIHF1ZXJ5ID0gKHF1ZXJ5ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICA/IHF1ZXJ5XG4gICAgICAgICAgICA6IG1vZHVsZS5nZXQucXVlcnkoKVxuICAgICAgICAgIDtcbiAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnU2VhcmNoaW5nIGZvciBxdWVyeScsIHF1ZXJ5KTtcbiAgICAgICAgICBpZihtb2R1bGUuaGFzLm1pbkNoYXJhY3RlcnMocXVlcnkpKSB7XG4gICAgICAgICAgICBtb2R1bGUuZmlsdGVyKHF1ZXJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBmaXJzdFVuZmlsdGVyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1NlbGVjdGluZyBmaXJzdCBub24tZmlsdGVyZWQgZWxlbWVudCcpO1xuICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5zZWxlY3RlZEl0ZW0oKTtcbiAgICAgICAgICAgICRpdGVtXG4gICAgICAgICAgICAgIC5ub3Qoc2VsZWN0b3IudW5zZWxlY3RhYmxlKVxuICAgICAgICAgICAgICAubm90KHNlbGVjdG9yLmFkZGl0aW9uICsgc2VsZWN0b3IuaGlkZGVuKVxuICAgICAgICAgICAgICAgIC5lcSgwKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUuc2VsZWN0ZWQpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBuZXh0QXZhaWxhYmxlOiBmdW5jdGlvbigkc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICRzZWxlY3RlZCA9ICRzZWxlY3RlZC5lcSgwKTtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAkbmV4dEF2YWlsYWJsZSA9ICRzZWxlY3RlZC5uZXh0QWxsKHNlbGVjdG9yLml0ZW0pLm5vdChzZWxlY3Rvci51bnNlbGVjdGFibGUpLmVxKDApLFxuICAgICAgICAgICAgICAkcHJldkF2YWlsYWJsZSA9ICRzZWxlY3RlZC5wcmV2QWxsKHNlbGVjdG9yLml0ZW0pLm5vdChzZWxlY3Rvci51bnNlbGVjdGFibGUpLmVxKDApLFxuICAgICAgICAgICAgICBoYXNOZXh0ICAgICAgICA9ICgkbmV4dEF2YWlsYWJsZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoaGFzTmV4dCkge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnTW92aW5nIHNlbGVjdGlvbiB0bycsICRuZXh0QXZhaWxhYmxlKTtcbiAgICAgICAgICAgICAgJG5leHRBdmFpbGFibGUuYWRkQ2xhc3MoY2xhc3NOYW1lLnNlbGVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnTW92aW5nIHNlbGVjdGlvbiB0bycsICRwcmV2QXZhaWxhYmxlKTtcbiAgICAgICAgICAgICAgJHByZXZBdmFpbGFibGUuYWRkQ2xhc3MoY2xhc3NOYW1lLnNlbGVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0dXA6IHtcbiAgICAgICAgICBhcGk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGFwaVNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIGRlYnVnICAgOiBzZXR0aW5ncy5kZWJ1ZyxcbiAgICAgICAgICAgICAgICB1cmxEYXRhIDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWUgOiBtb2R1bGUuZ2V0LnZhbHVlKCksXG4gICAgICAgICAgICAgICAgICBxdWVyeSA6IG1vZHVsZS5nZXQucXVlcnkoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb24gICAgOiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnRmlyc3QgcmVxdWVzdCwgaW5pdGlhbGl6aW5nIEFQSScpO1xuICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAuYXBpKGFwaVNldHRpbmdzKVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGF5b3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKCAkbW9kdWxlLmlzKCdzZWxlY3QnKSApIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnNldHVwLnNlbGVjdCgpO1xuICAgICAgICAgICAgICBtb2R1bGUuc2V0dXAucmV0dXJuZWRPYmplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCAhbW9kdWxlLmhhcy5tZW51KCkgKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5jcmVhdGUubWVudSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIG1vZHVsZS5pcy5zZWFyY2goKSAmJiAhbW9kdWxlLmhhcy5zZWFyY2goKSApIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0FkZGluZyBzZWFyY2ggaW5wdXQnKTtcbiAgICAgICAgICAgICAgJHNlYXJjaCA9ICQoJzxpbnB1dCAvPicpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZS5zZWFyY2gpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2F1dG9jb21wbGV0ZScsICdvZmYnKVxuICAgICAgICAgICAgICAgIC5pbnNlcnRCZWZvcmUoJHRleHQpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCBtb2R1bGUuaXMubXVsdGlwbGUoKSAmJiBtb2R1bGUuaXMuc2VhcmNoU2VsZWN0aW9uKCkgJiYgIW1vZHVsZS5oYXMuc2l6ZXIoKSkge1xuICAgICAgICAgICAgICBtb2R1bGUuY3JlYXRlLnNpemVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzZXR0aW5ncy5hbGxvd1RhYikge1xuICAgICAgICAgICAgICBtb2R1bGUuc2V0LnRhYmJhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIHNlbGVjdFZhbHVlcyAgPSBtb2R1bGUuZ2V0LnNlbGVjdFZhbHVlcygpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBtb2R1bGUuZGVidWcoJ0Ryb3Bkb3duIGluaXRpYWxpemVkIG9uIGEgc2VsZWN0Jywgc2VsZWN0VmFsdWVzKTtcbiAgICAgICAgICAgIGlmKCAkbW9kdWxlLmlzKCdzZWxlY3QnKSApIHtcbiAgICAgICAgICAgICAgJGlucHV0ID0gJG1vZHVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNlZSBpZiBzZWxlY3QgaXMgcGxhY2VkIGNvcnJlY3RseSBhbHJlYWR5XG4gICAgICAgICAgICBpZigkaW5wdXQucGFyZW50KHNlbGVjdG9yLmRyb3Bkb3duKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnVUkgZHJvcGRvd24gYWxyZWFkeSBleGlzdHMuIENyZWF0aW5nIGRyb3Bkb3duIG1lbnUgb25seScpO1xuICAgICAgICAgICAgICAkbW9kdWxlID0gJGlucHV0LmNsb3Nlc3Qoc2VsZWN0b3IuZHJvcGRvd24pO1xuICAgICAgICAgICAgICBpZiggIW1vZHVsZS5oYXMubWVudSgpICkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5jcmVhdGUubWVudSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICRtZW51ID0gJG1vZHVsZS5jaGlsZHJlbihzZWxlY3Rvci5tZW51KTtcbiAgICAgICAgICAgICAgbW9kdWxlLnNldHVwLm1lbnUoc2VsZWN0VmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ0NyZWF0aW5nIGVudGlyZSBkcm9wZG93biBmcm9tIHNlbGVjdCcpO1xuICAgICAgICAgICAgICAkbW9kdWxlID0gJCgnPGRpdiAvPicpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJGlucHV0LmF0dHIoJ2NsYXNzJykgKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUuc2VsZWN0aW9uKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUuZHJvcGRvd24pXG4gICAgICAgICAgICAgICAgLmh0bWwoIHRlbXBsYXRlcy5kcm9wZG93bihzZWxlY3RWYWx1ZXMpIClcbiAgICAgICAgICAgICAgICAuaW5zZXJ0QmVmb3JlKCRpbnB1dClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICBpZigkaW5wdXQuaGFzQ2xhc3MoY2xhc3NOYW1lLm11bHRpcGxlKSAmJiAkaW5wdXQucHJvcCgnbXVsdGlwbGUnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuZXJyb3IoZXJyb3IubWlzc2luZ011bHRpcGxlKTtcbiAgICAgICAgICAgICAgICAkaW5wdXQucHJvcCgnbXVsdGlwbGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZigkaW5wdXQuaXMoJ1ttdWx0aXBsZV0nKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQubXVsdGlwbGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoJGlucHV0LnByb3AoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ0Rpc2FibGluZyBkcm9wZG93bicpO1xuICAgICAgICAgICAgICAgICRtb2R1bGUuYWRkQ2xhc3MoY2xhc3NOYW1lLmRpc2FibGVkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkaW5wdXRcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignY2xhc3MnKVxuICAgICAgICAgICAgICAgIC5kZXRhY2goKVxuICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oJG1vZHVsZSlcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kdWxlLnJlZnJlc2goKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lbnU6IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgICAgICAgJG1lbnUuaHRtbCggdGVtcGxhdGVzLm1lbnUodmFsdWVzLCBmaWVsZHMpKTtcbiAgICAgICAgICAgICRpdGVtID0gJG1lbnUuZmluZChzZWxlY3Rvci5pdGVtKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZmVyZW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2R1bGUuZGVidWcoJ0Ryb3Bkb3duIGJlaGF2aW9yIHdhcyBjYWxsZWQgb24gc2VsZWN0LCByZXBsYWNpbmcgd2l0aCBjbG9zZXN0IGRyb3Bkb3duJyk7XG4gICAgICAgICAgICAvLyByZXBsYWNlIG1vZHVsZSByZWZlcmVuY2VcbiAgICAgICAgICAgICRtb2R1bGUgID0gJG1vZHVsZS5wYXJlbnQoc2VsZWN0b3IuZHJvcGRvd24pO1xuICAgICAgICAgICAgaW5zdGFuY2UgPSAkbW9kdWxlLmRhdGEobW9kdWxlTmFtZXNwYWNlKTtcbiAgICAgICAgICAgIGVsZW1lbnQgID0gJG1vZHVsZS5nZXQoMCk7XG4gICAgICAgICAgICBtb2R1bGUucmVmcmVzaCgpO1xuICAgICAgICAgICAgbW9kdWxlLnNldHVwLnJldHVybmVkT2JqZWN0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXR1cm5lZE9iamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgJGZpcnN0TW9kdWxlcyA9ICRhbGxNb2R1bGVzLnNsaWNlKDAsIGVsZW1lbnRJbmRleCksXG4gICAgICAgICAgICAgICRsYXN0TW9kdWxlcyAgPSAkYWxsTW9kdWxlcy5zbGljZShlbGVtZW50SW5kZXggKyAxKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgLy8gYWRqdXN0IGFsbCBtb2R1bGVzIHRvIHVzZSBjb3JyZWN0IHJlZmVyZW5jZVxuICAgICAgICAgICAgJGFsbE1vZHVsZXMgPSAkZmlyc3RNb2R1bGVzLmFkZCgkbW9kdWxlKS5hZGQoJGxhc3RNb2R1bGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kdWxlLnJlZnJlc2hTZWxlY3RvcnMoKTtcbiAgICAgICAgICBtb2R1bGUucmVmcmVzaERhdGEoKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWZyZXNoSXRlbXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRpdGVtID0gJG1lbnUuZmluZChzZWxlY3Rvci5pdGVtKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWZyZXNoU2VsZWN0b3JzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnUmVmcmVzaGluZyBzZWxlY3RvciBjYWNoZScpO1xuICAgICAgICAgICR0ZXh0ICAgPSAkbW9kdWxlLmZpbmQoc2VsZWN0b3IudGV4dCk7XG4gICAgICAgICAgJHNlYXJjaCA9ICRtb2R1bGUuZmluZChzZWxlY3Rvci5zZWFyY2gpO1xuICAgICAgICAgICRpbnB1dCAgPSAkbW9kdWxlLmZpbmQoc2VsZWN0b3IuaW5wdXQpO1xuICAgICAgICAgICRpY29uICAgPSAkbW9kdWxlLmZpbmQoc2VsZWN0b3IuaWNvbik7XG4gICAgICAgICAgJGNvbWJvICA9ICgkbW9kdWxlLnByZXYoKS5maW5kKHNlbGVjdG9yLnRleHQpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICA/ICRtb2R1bGUucHJldigpLmZpbmQoc2VsZWN0b3IudGV4dClcbiAgICAgICAgICAgIDogJG1vZHVsZS5wcmV2KClcbiAgICAgICAgICA7XG4gICAgICAgICAgJG1lbnUgICAgPSAkbW9kdWxlLmNoaWxkcmVuKHNlbGVjdG9yLm1lbnUpO1xuICAgICAgICAgICRpdGVtICAgID0gJG1lbnUuZmluZChzZWxlY3Rvci5pdGVtKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWZyZXNoRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1JlZnJlc2hpbmcgY2FjaGVkIG1ldGFkYXRhJyk7XG4gICAgICAgICAgJGl0ZW1cbiAgICAgICAgICAgIC5yZW1vdmVEYXRhKG1ldGFkYXRhLnRleHQpXG4gICAgICAgICAgICAucmVtb3ZlRGF0YShtZXRhZGF0YS52YWx1ZSlcbiAgICAgICAgICA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xlYXJEYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnQ2xlYXJpbmcgbWV0YWRhdGEnKTtcbiAgICAgICAgICAkaXRlbVxuICAgICAgICAgICAgLnJlbW92ZURhdGEobWV0YWRhdGEudGV4dClcbiAgICAgICAgICAgIC5yZW1vdmVEYXRhKG1ldGFkYXRhLnZhbHVlKVxuICAgICAgICAgIDtcbiAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAucmVtb3ZlRGF0YShtZXRhZGF0YS5kZWZhdWx0VGV4dClcbiAgICAgICAgICAgIC5yZW1vdmVEYXRhKG1ldGFkYXRhLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICAgIC5yZW1vdmVEYXRhKG1ldGFkYXRhLnBsYWNlaG9sZGVyVGV4dClcbiAgICAgICAgICA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnVG9nZ2xpbmcgbWVudSB2aXNpYmlsaXR5Jyk7XG4gICAgICAgICAgaWYoICFtb2R1bGUuaXMuYWN0aXZlKCkgKSB7XG4gICAgICAgICAgICBtb2R1bGUuc2hvdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sgPSAkLmlzRnVuY3Rpb24oY2FsbGJhY2spXG4gICAgICAgICAgICA/IGNhbGxiYWNrXG4gICAgICAgICAgICA6IGZ1bmN0aW9uKCl7fVxuICAgICAgICAgIDtcbiAgICAgICAgICBpZighbW9kdWxlLmNhbi5zaG93KCkgJiYgbW9kdWxlLmlzLnJlbW90ZSgpKSB7XG4gICAgICAgICAgICBtb2R1bGUuZGVidWcoJ05vIEFQSSByZXN1bHRzIHJldHJpZXZlZCwgc2VhcmNoaW5nIGJlZm9yZSBzaG93Jyk7XG4gICAgICAgICAgICBtb2R1bGUucXVlcnlSZW1vdGUobW9kdWxlLmdldC5xdWVyeSgpLCBtb2R1bGUuc2hvdyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKCBtb2R1bGUuY2FuLnNob3coKSAmJiAhbW9kdWxlLmlzLmFjdGl2ZSgpICkge1xuICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdTaG93aW5nIGRyb3Bkb3duJyk7XG4gICAgICAgICAgICBpZihtb2R1bGUuaGFzLm1lc3NhZ2UoKSAmJiAhKG1vZHVsZS5oYXMubWF4U2VsZWN0aW9ucygpIHx8IG1vZHVsZS5oYXMuYWxsUmVzdWx0c0ZpbHRlcmVkKCkpICkge1xuICAgICAgICAgICAgICBtb2R1bGUucmVtb3ZlLm1lc3NhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG1vZHVsZS5pcy5hbGxGaWx0ZXJlZCgpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2V0dGluZ3Mub25TaG93LmNhbGwoZWxlbWVudCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5hbmltYXRlLnNob3coZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYoIG1vZHVsZS5jYW4uY2xpY2soKSApIHtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5iaW5kLmludGVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihtb2R1bGUuaGFzLm1lbnVTZWFyY2goKSkge1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLmZvY3VzU2VhcmNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQudmlzaWJsZSgpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrID0gJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKVxuICAgICAgICAgICAgPyBjYWxsYmFja1xuICAgICAgICAgICAgOiBmdW5jdGlvbigpe31cbiAgICAgICAgICA7XG4gICAgICAgICAgaWYoIG1vZHVsZS5pcy5hY3RpdmUoKSAmJiAhbW9kdWxlLmlzLmFuaW1hdGluZ091dHdhcmQoKSApIHtcbiAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnSGlkaW5nIGRyb3Bkb3duJyk7XG4gICAgICAgICAgICBpZihzZXR0aW5ncy5vbkhpZGUuY2FsbChlbGVtZW50KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmFuaW1hdGUuaGlkZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUucmVtb3ZlLnZpc2libGUoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZU90aGVyczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0ZpbmRpbmcgb3RoZXIgZHJvcGRvd25zIHRvIGhpZGUnKTtcbiAgICAgICAgICAkYWxsTW9kdWxlc1xuICAgICAgICAgICAgLm5vdCgkbW9kdWxlKVxuICAgICAgICAgICAgICAuaGFzKHNlbGVjdG9yLm1lbnUgKyAnLicgKyBjbGFzc05hbWUudmlzaWJsZSlcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24oJ2hpZGUnKVxuICAgICAgICAgIDtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlTWVudTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0hpZGluZyBtZW51ICBpbnN0YW50YW5lb3VzbHknKTtcbiAgICAgICAgICBtb2R1bGUucmVtb3ZlLmFjdGl2ZSgpO1xuICAgICAgICAgIG1vZHVsZS5yZW1vdmUudmlzaWJsZSgpO1xuICAgICAgICAgICRtZW51LnRyYW5zaXRpb24oJ2hpZGUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlU3ViTWVudXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhclxuICAgICAgICAgICAgJHN1Yk1lbnVzID0gJG1lbnUuY2hpbGRyZW4oc2VsZWN0b3IuaXRlbSkuZmluZChzZWxlY3Rvci5tZW51KVxuICAgICAgICAgIDtcbiAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnSGlkaW5nIHN1YiBtZW51cycsICRzdWJNZW51cyk7XG4gICAgICAgICAgJHN1Yk1lbnVzLnRyYW5zaXRpb24oJ2hpZGUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBiaW5kOiB7XG4gICAgICAgICAgZXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKGhhc1RvdWNoKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5iaW5kLnRvdWNoRXZlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2R1bGUuYmluZC5rZXlib2FyZEV2ZW50cygpO1xuICAgICAgICAgICAgbW9kdWxlLmJpbmQuaW5wdXRFdmVudHMoKTtcbiAgICAgICAgICAgIG1vZHVsZS5iaW5kLm1vdXNlRXZlbnRzKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0b3VjaEV2ZW50czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2R1bGUuZGVidWcoJ1RvdWNoIGRldmljZSBkZXRlY3RlZCBiaW5kaW5nIGFkZGl0aW9uYWwgdG91Y2ggZXZlbnRzJyk7XG4gICAgICAgICAgICBpZiggbW9kdWxlLmlzLnNlYXJjaFNlbGVjdGlvbigpICkge1xuICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nIHNwZWNpYWwgeWV0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCBtb2R1bGUuaXMuc2luZ2xlKCkgKSB7XG4gICAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgICAub24oJ3RvdWNoc3RhcnQnICsgZXZlbnROYW1lc3BhY2UsIG1vZHVsZS5ldmVudC50ZXN0LnRvZ2dsZSlcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJG1lbnVcbiAgICAgICAgICAgICAgLm9uKCd0b3VjaHN0YXJ0JyArIGV2ZW50TmFtZXNwYWNlLCBzZWxlY3Rvci5pdGVtLCBtb2R1bGUuZXZlbnQuaXRlbS5tb3VzZWVudGVyKVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5Ym9hcmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0JpbmRpbmcga2V5Ym9hcmQgZXZlbnRzJyk7XG4gICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgIC5vbigna2V5ZG93bicgKyBldmVudE5hbWVzcGFjZSwgbW9kdWxlLmV2ZW50LmtleWRvd24pXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZiggbW9kdWxlLmhhcy5zZWFyY2goKSApIHtcbiAgICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAgIC5vbihtb2R1bGUuZ2V0LmlucHV0RXZlbnQoKSArIGV2ZW50TmFtZXNwYWNlLCBzZWxlY3Rvci5zZWFyY2gsIG1vZHVsZS5ldmVudC5pbnB1dClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIG1vZHVsZS5pcy5tdWx0aXBsZSgpICkge1xuICAgICAgICAgICAgICAkZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAub24oJ2tleWRvd24nICsgZWxlbWVudE5hbWVzcGFjZSwgbW9kdWxlLmV2ZW50LmRvY3VtZW50LmtleWRvd24pXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0RXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdCaW5kaW5nIGlucHV0IGNoYW5nZSBldmVudHMnKTtcbiAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UnICsgZXZlbnROYW1lc3BhY2UsIHNlbGVjdG9yLmlucHV0LCBtb2R1bGUuZXZlbnQuY2hhbmdlKVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbW91c2VFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0JpbmRpbmcgbW91c2UgZXZlbnRzJyk7XG4gICAgICAgICAgICBpZihtb2R1bGUuaXMubXVsdGlwbGUoKSkge1xuICAgICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycgICArIGV2ZW50TmFtZXNwYWNlLCBzZWxlY3Rvci5sYWJlbCwgIG1vZHVsZS5ldmVudC5sYWJlbC5jbGljaylcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJyAgICsgZXZlbnROYW1lc3BhY2UsIHNlbGVjdG9yLnJlbW92ZSwgbW9kdWxlLmV2ZW50LnJlbW92ZS5jbGljaylcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIG1vZHVsZS5pcy5zZWFyY2hTZWxlY3Rpb24oKSApIHtcbiAgICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAgIC5vbignbW91c2Vkb3duJyArIGV2ZW50TmFtZXNwYWNlLCBtb2R1bGUuZXZlbnQubW91c2Vkb3duKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2V1cCcgICArIGV2ZW50TmFtZXNwYWNlLCBtb2R1bGUuZXZlbnQubW91c2V1cClcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZG93bicgKyBldmVudE5hbWVzcGFjZSwgc2VsZWN0b3IubWVudSwgICBtb2R1bGUuZXZlbnQubWVudS5tb3VzZWRvd24pXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZXVwJyAgICsgZXZlbnROYW1lc3BhY2UsIHNlbGVjdG9yLm1lbnUsICAgbW9kdWxlLmV2ZW50Lm1lbnUubW91c2V1cClcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJyAgICAgKyBldmVudE5hbWVzcGFjZSwgc2VsZWN0b3IuaWNvbiwgICBtb2R1bGUuZXZlbnQuaWNvbi5jbGljaylcbiAgICAgICAgICAgICAgICAub24oJ2ZvY3VzJyAgICAgKyBldmVudE5hbWVzcGFjZSwgc2VsZWN0b3Iuc2VhcmNoLCBtb2R1bGUuZXZlbnQuc2VhcmNoLmZvY3VzKVxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snICAgICArIGV2ZW50TmFtZXNwYWNlLCBzZWxlY3Rvci5zZWFyY2gsIG1vZHVsZS5ldmVudC5zZWFyY2guZm9jdXMpXG4gICAgICAgICAgICAgICAgLm9uKCdibHVyJyAgICAgICsgZXZlbnROYW1lc3BhY2UsIHNlbGVjdG9yLnNlYXJjaCwgbW9kdWxlLmV2ZW50LnNlYXJjaC5ibHVyKVxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snICAgICArIGV2ZW50TmFtZXNwYWNlLCBzZWxlY3Rvci50ZXh0LCAgIG1vZHVsZS5ldmVudC50ZXh0LmZvY3VzKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIGlmKG1vZHVsZS5pcy5tdWx0aXBsZSgpKSB7XG4gICAgICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAgICAgLm9uKCdjbGljaycgKyBldmVudE5hbWVzcGFjZSwgbW9kdWxlLmV2ZW50LmNsaWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGlmKHNldHRpbmdzLm9uID09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgICAgICAub24oJ2NsaWNrJyArIGV2ZW50TmFtZXNwYWNlLCBtb2R1bGUuZXZlbnQudGVzdC50b2dnbGUpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYoc2V0dGluZ3Mub24gPT0gJ2hvdmVyJykge1xuICAgICAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgICAgIC5vbignbW91c2VlbnRlcicgKyBldmVudE5hbWVzcGFjZSwgbW9kdWxlLmRlbGF5LnNob3cpXG4gICAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnICsgZXZlbnROYW1lc3BhY2UsIG1vZHVsZS5kZWxheS5oaWRlKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgICAgICAub24oc2V0dGluZ3Mub24gKyBldmVudE5hbWVzcGFjZSwgbW9kdWxlLnRvZ2dsZSlcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snICsgZXZlbnROYW1lc3BhY2UsIHNlbGVjdG9yLmljb24sIG1vZHVsZS5ldmVudC5pY29uLmNsaWNrKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2Vkb3duJyArIGV2ZW50TmFtZXNwYWNlLCBtb2R1bGUuZXZlbnQubW91c2Vkb3duKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2V1cCcgICArIGV2ZW50TmFtZXNwYWNlLCBtb2R1bGUuZXZlbnQubW91c2V1cClcbiAgICAgICAgICAgICAgICAub24oJ2ZvY3VzJyAgICAgKyBldmVudE5hbWVzcGFjZSwgbW9kdWxlLmV2ZW50LmZvY3VzKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIGlmKG1vZHVsZS5oYXMubWVudVNlYXJjaCgpICkge1xuICAgICAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgICAgIC5vbignYmx1cicgKyBldmVudE5hbWVzcGFjZSwgc2VsZWN0b3Iuc2VhcmNoLCBtb2R1bGUuZXZlbnQuc2VhcmNoLmJsdXIpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgICAgIC5vbignYmx1cicgKyBldmVudE5hbWVzcGFjZSwgbW9kdWxlLmV2ZW50LmJsdXIpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkbWVudVxuICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXInICsgZXZlbnROYW1lc3BhY2UsIHNlbGVjdG9yLml0ZW0sIG1vZHVsZS5ldmVudC5pdGVtLm1vdXNlZW50ZXIpXG4gICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZScgKyBldmVudE5hbWVzcGFjZSwgc2VsZWN0b3IuaXRlbSwgbW9kdWxlLmV2ZW50Lml0ZW0ubW91c2VsZWF2ZSlcbiAgICAgICAgICAgICAgLm9uKCdjbGljaycgICAgICArIGV2ZW50TmFtZXNwYWNlLCBzZWxlY3Rvci5pdGVtLCBtb2R1bGUuZXZlbnQuaXRlbS5jbGljaylcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGludGVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnQmluZGluZyBoaWRlIGludGVudCBldmVudCB0byBkb2N1bWVudCcpO1xuICAgICAgICAgICAgaWYoaGFzVG91Y2gpIHtcbiAgICAgICAgICAgICAgJGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLm9uKCd0b3VjaHN0YXJ0JyArIGVsZW1lbnROYW1lc3BhY2UsIG1vZHVsZS5ldmVudC50ZXN0LnRvdWNoKVxuICAgICAgICAgICAgICAgIC5vbigndG91Y2htb3ZlJyAgKyBlbGVtZW50TmFtZXNwYWNlLCBtb2R1bGUuZXZlbnQudGVzdC50b3VjaClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGRvY3VtZW50XG4gICAgICAgICAgICAgIC5vbignY2xpY2snICsgZWxlbWVudE5hbWVzcGFjZSwgbW9kdWxlLmV2ZW50LnRlc3QuaGlkZSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5iaW5kOiB7XG4gICAgICAgICAgaW50ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdSZW1vdmluZyBoaWRlIGludGVudCBldmVudCBmcm9tIGRvY3VtZW50Jyk7XG4gICAgICAgICAgICBpZihoYXNUb3VjaCkge1xuICAgICAgICAgICAgICAkZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAub2ZmKCd0b3VjaHN0YXJ0JyArIGVsZW1lbnROYW1lc3BhY2UpXG4gICAgICAgICAgICAgICAgLm9mZigndG91Y2htb3ZlJyArIGVsZW1lbnROYW1lc3BhY2UpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRkb2N1bWVudFxuICAgICAgICAgICAgICAub2ZmKCdjbGljaycgKyBlbGVtZW50TmFtZXNwYWNlKVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgICBzZWFyY2hUZXJtID0gKHF1ZXJ5ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgID8gcXVlcnlcbiAgICAgICAgICAgICAgOiBtb2R1bGUuZ2V0LnF1ZXJ5KCksXG4gICAgICAgICAgICBhZnRlckZpbHRlcmVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmKG1vZHVsZS5pcy5tdWx0aXBsZSgpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmZpbHRlckFjdGl2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmKHF1ZXJ5IHx8ICghcXVlcnkgJiYgbW9kdWxlLmdldC5hY3RpdmVJdGVtKCkubGVuZ3RoID09IDApKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnNlbGVjdC5maXJzdFVuZmlsdGVyZWQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiggbW9kdWxlLmhhcy5hbGxSZXN1bHRzRmlsdGVyZWQoKSApIHtcbiAgICAgICAgICAgICAgICBpZiggc2V0dGluZ3Mub25Ob1Jlc3VsdHMuY2FsbChlbGVtZW50LCBzZWFyY2hUZXJtKSApIHtcbiAgICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLmFsbG93QWRkaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLmhpZGVBZGRpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnVXNlciBhZGRpdGlvbiB3aXRoIG5vIG1lbnUsIHNldHRpbmcgZW1wdHkgc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuc2V0LmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmhpZGVNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnQWxsIGl0ZW1zIGZpbHRlcmVkLCBzaG93aW5nIG1lc3NhZ2UnLCBzZWFyY2hUZXJtKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmFkZC5tZXNzYWdlKG1lc3NhZ2Uubm9SZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnQWxsIGl0ZW1zIGZpbHRlcmVkLCBoaWRpbmcgZHJvcGRvd24nLCBzZWFyY2hUZXJtKTtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5oaWRlTWVudSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUucmVtb3ZlLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5tZXNzYWdlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYoc2V0dGluZ3MuYWxsb3dBZGRpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuYWRkLnVzZXJTdWdnZXN0aW9uKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZihtb2R1bGUuaXMuc2VhcmNoU2VsZWN0aW9uKCkgJiYgbW9kdWxlLmNhbi5zaG93KCkgJiYgbW9kdWxlLmlzLmZvY3VzZWRPblNlYXJjaCgpICkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zaG93KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA7XG4gICAgICAgICAgaWYoc2V0dGluZ3MudXNlTGFiZWxzICYmIG1vZHVsZS5oYXMubWF4U2VsZWN0aW9ucygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHNldHRpbmdzLmFwaVNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZiggbW9kdWxlLmNhbi51c2VBUEkoKSApIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnF1ZXJ5UmVtb3RlKHNlYXJjaFRlcm0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLmZpbHRlclJlbW90ZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5maWx0ZXJJdGVtcyhzZWFyY2hUZXJtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWZ0ZXJGaWx0ZXJlZCgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtb2R1bGUuZXJyb3IoZXJyb3Iubm9BUEkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5maWx0ZXJJdGVtcyhzZWFyY2hUZXJtKTtcbiAgICAgICAgICAgIGFmdGVyRmlsdGVyZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcXVlcnlSZW1vdGU6IGZ1bmN0aW9uKHF1ZXJ5LCBjYWxsYmFjaykge1xuICAgICAgICAgIHZhclxuICAgICAgICAgICAgYXBpU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgIGVycm9yRHVyYXRpb24gOiBmYWxzZSxcbiAgICAgICAgICAgICAgY2FjaGUgICAgICAgICA6ICdsb2NhbCcsXG4gICAgICAgICAgICAgIHRocm90dGxlICAgICAgOiBzZXR0aW5ncy50aHJvdHRsZSxcbiAgICAgICAgICAgICAgdXJsRGF0YSAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmFkZC5tZXNzYWdlKG1lc3NhZ2Uuc2VydmVyRXJyb3IpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uRmFpbHVyZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmFkZC5tZXNzYWdlKG1lc3NhZ2Uuc2VydmVyRXJyb3IpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uU3VjY2VzcyA6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXMgICAgICAgICAgPSByZXNwb25zZVtmaWVsZHMucmVtb3RlVmFsdWVzXSxcbiAgICAgICAgICAgICAgICAgIGhhc1JlbW90ZVZhbHVlcyA9ICgkLmlzQXJyYXkodmFsdWVzKSAmJiB2YWx1ZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgaWYoaGFzUmVtb3RlVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICBtb2R1bGUucmVtb3ZlLm1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5zZXR1cC5tZW51KHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiByZXNwb25zZVtmaWVsZHMucmVtb3RlVmFsdWVzXVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLmFkZC5tZXNzYWdlKG1lc3NhZ2Uubm9SZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDtcbiAgICAgICAgICBpZiggISRtb2R1bGUuYXBpKCdnZXQgcmVxdWVzdCcpICkge1xuICAgICAgICAgICAgbW9kdWxlLnNldHVwLmFwaSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhcGlTZXR0aW5ncyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBhcGlTZXR0aW5ncywgc2V0dGluZ3MuYXBpU2V0dGluZ3MpO1xuICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgIC5hcGkoJ3NldHRpbmcnLCBhcGlTZXR0aW5ncylcbiAgICAgICAgICAgIC5hcGkoJ3F1ZXJ5JylcbiAgICAgICAgICA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsdGVySXRlbXM6IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgICBzZWFyY2hUZXJtID0gKHF1ZXJ5ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgID8gcXVlcnlcbiAgICAgICAgICAgICAgOiBtb2R1bGUuZ2V0LnF1ZXJ5KCksXG4gICAgICAgICAgICByZXN1bHRzICAgICAgICAgID0gIG51bGwsXG4gICAgICAgICAgICBlc2NhcGVkVGVybSAgICAgID0gbW9kdWxlLmVzY2FwZS5zdHJpbmcoc2VhcmNoVGVybSksXG4gICAgICAgICAgICBiZWdpbnNXaXRoUmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBlc2NhcGVkVGVybSwgJ2lnbScpXG4gICAgICAgICAgO1xuICAgICAgICAgIC8vIGF2b2lkIGxvb3AgaWYgd2UncmUgbWF0Y2hpbmcgbm90aGluZ1xuICAgICAgICAgIGlmKCBtb2R1bGUuaGFzLnF1ZXJ5KCkgKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gW107XG5cbiAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdTZWFyY2hpbmcgZm9yIG1hdGNoaW5nIHZhbHVlcycsIHNlYXJjaFRlcm0pO1xuICAgICAgICAgICAgJGl0ZW1cbiAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAgICRjaG9pY2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLm1hdGNoID09ICdib3RoJyB8fCBzZXR0aW5ncy5tYXRjaCA9PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgIHRleHQgPSBTdHJpbmcobW9kdWxlLmdldC5jaG9pY2VUZXh0KCRjaG9pY2UsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICBpZih0ZXh0LnNlYXJjaChiZWdpbnNXaXRoUmVnRXhwKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNldHRpbmdzLmZ1bGxUZXh0U2VhcmNoID09PSAnZXhhY3QnICYmIG1vZHVsZS5leGFjdFNlYXJjaChzZWFyY2hUZXJtLCB0ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2V0dGluZ3MuZnVsbFRleHRTZWFyY2ggPT09IHRydWUgJiYgbW9kdWxlLmZ1enp5U2VhcmNoKHNlYXJjaFRlcm0sIHRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLm1hdGNoID09ICdib3RoJyB8fCBzZXR0aW5ncy5tYXRjaCA9PSAndmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IFN0cmluZyhtb2R1bGUuZ2V0LmNob2ljZVZhbHVlKCRjaG9pY2UsIHRleHQpKTtcbiAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLnNlYXJjaChiZWdpbnNXaXRoUmVnRXhwKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNldHRpbmdzLmZ1bGxUZXh0U2VhcmNoID09PSAnZXhhY3QnICYmIG1vZHVsZS5leGFjdFNlYXJjaChzZWFyY2hUZXJtLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNldHRpbmdzLmZ1bGxUZXh0U2VhcmNoID09PSB0cnVlICYmIG1vZHVsZS5mdXp6eVNlYXJjaChzZWFyY2hUZXJtLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnU2hvd2luZyBvbmx5IG1hdGNoZWQgaXRlbXMnLCBzZWFyY2hUZXJtKTtcbiAgICAgICAgICBtb2R1bGUucmVtb3ZlLmZpbHRlcmVkSXRlbSgpO1xuICAgICAgICAgIGlmKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICRpdGVtXG4gICAgICAgICAgICAgIC5ub3QocmVzdWx0cylcbiAgICAgICAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZS5maWx0ZXJlZClcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZnV6enlTZWFyY2g6IGZ1bmN0aW9uKHF1ZXJ5LCB0ZXJtKSB7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgICB0ZXJtTGVuZ3RoICA9IHRlcm0ubGVuZ3RoLFxuICAgICAgICAgICAgcXVlcnlMZW5ndGggPSBxdWVyeS5sZW5ndGhcbiAgICAgICAgICA7XG4gICAgICAgICAgcXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHRlcm0gID0gdGVybS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmKHF1ZXJ5TGVuZ3RoID4gdGVybUxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihxdWVyeUxlbmd0aCA9PT0gdGVybUxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIChxdWVyeSA9PT0gdGVybSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlYXJjaDogZm9yICh2YXIgY2hhcmFjdGVySW5kZXggPSAwLCBuZXh0Q2hhcmFjdGVySW5kZXggPSAwOyBjaGFyYWN0ZXJJbmRleCA8IHF1ZXJ5TGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgcXVlcnlDaGFyYWN0ZXIgPSBxdWVyeS5jaGFyQ29kZUF0KGNoYXJhY3RlckluZGV4KVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgd2hpbGUobmV4dENoYXJhY3RlckluZGV4IDwgdGVybUxlbmd0aCkge1xuICAgICAgICAgICAgICBpZih0ZXJtLmNoYXJDb2RlQXQobmV4dENoYXJhY3RlckluZGV4KyspID09PSBxdWVyeUNoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlIHNlYXJjaDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZXhhY3RTZWFyY2g6IGZ1bmN0aW9uIChxdWVyeSwgdGVybSkge1xuICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB0ZXJtICA9IHRlcm0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZih0ZXJtLmluZGV4T2YocXVlcnkpID4gLTEpIHtcbiAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJBY3RpdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKHNldHRpbmdzLnVzZUxhYmVscykge1xuICAgICAgICAgICAgJGl0ZW0uZmlsdGVyKCcuJyArIGNsYXNzTmFtZS5hY3RpdmUpXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUuZmlsdGVyZWQpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGZvY3VzU2VhcmNoOiBmdW5jdGlvbihza2lwSGFuZGxlcikge1xuICAgICAgICAgIGlmKCBtb2R1bGUuaGFzLnNlYXJjaCgpICYmICFtb2R1bGUuaXMuZm9jdXNlZE9uU2VhcmNoKCkgKSB7XG4gICAgICAgICAgICBpZihza2lwSGFuZGxlcikge1xuICAgICAgICAgICAgICAkbW9kdWxlLm9mZignZm9jdXMnICsgZXZlbnROYW1lc3BhY2UsIHNlbGVjdG9yLnNlYXJjaCk7XG4gICAgICAgICAgICAgICRzZWFyY2guZm9jdXMoKTtcbiAgICAgICAgICAgICAgJG1vZHVsZS5vbignZm9jdXMnICArIGV2ZW50TmFtZXNwYWNlLCBzZWxlY3Rvci5zZWFyY2gsIG1vZHVsZS5ldmVudC5zZWFyY2guZm9jdXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICRzZWFyY2guZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9yY2VTZWxlY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhclxuICAgICAgICAgICAgJGN1cnJlbnRseVNlbGVjdGVkID0gJGl0ZW0ubm90KGNsYXNzTmFtZS5maWx0ZXJlZCkuZmlsdGVyKCcuJyArIGNsYXNzTmFtZS5zZWxlY3RlZCkuZXEoMCksXG4gICAgICAgICAgICAkYWN0aXZlSXRlbSAgICAgICAgPSAkaXRlbS5ub3QoY2xhc3NOYW1lLmZpbHRlcmVkKS5maWx0ZXIoJy4nICsgY2xhc3NOYW1lLmFjdGl2ZSkuZXEoMCksXG4gICAgICAgICAgICAkc2VsZWN0ZWRJdGVtICAgICAgPSAoJGN1cnJlbnRseVNlbGVjdGVkLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgID8gJGN1cnJlbnRseVNlbGVjdGVkXG4gICAgICAgICAgICAgIDogJGFjdGl2ZUl0ZW0sXG4gICAgICAgICAgICBoYXNTZWxlY3RlZCA9ICgkc2VsZWN0ZWRJdGVtLmxlbmd0aCA+IDApXG4gICAgICAgICAgO1xuICAgICAgICAgIGlmKGhhc1NlbGVjdGVkICYmICFtb2R1bGUuaXMubXVsdGlwbGUoKSkge1xuICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdGb3JjaW5nIHBhcnRpYWwgc2VsZWN0aW9uIHRvIHNlbGVjdGVkIGl0ZW0nLCAkc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgIG1vZHVsZS5ldmVudC5pdGVtLmNsaWNrLmNhbGwoJHNlbGVjdGVkSXRlbSwge30sIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzLmFsbG93QWRkaXRpb25zKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2VsZWN0ZWQobW9kdWxlLmdldC5xdWVyeSgpKTtcbiAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5zZWFyY2hUZXJtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5zZWFyY2hUZXJtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNoYW5nZToge1xuICAgICAgICAgIHZhbHVlczogZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICAgICAgICBpZighc2V0dGluZ3MuYWxsb3dBZGRpdGlvbnMpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2R1bGUuZGVidWcoJ0NyZWF0aW5nIGRyb3Bkb3duIHdpdGggc3BlY2lmaWVkIHZhbHVlcycsIHZhbHVlcyk7XG4gICAgICAgICAgICBtb2R1bGUuc2V0dXAubWVudSh7dmFsdWVzOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICQuZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAgIGlmKGl0ZW0uc2VsZWN0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnU2V0dGluZyBpbml0aWFsIHNlbGVjdGlvbiB0bycsIGl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2VsZWN0ZWQoaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBldmVudDoge1xuICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZighaW50ZXJuYWxDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdJbnB1dCBjaGFuZ2VkLCB1cGRhdGluZyBzZWxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgbW9kdWxlLnNldC5zZWxlY3RlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYoc2V0dGluZ3Muc2hvd09uRm9jdXMgJiYgIWFjdGl2YXRlZCAmJiBtb2R1bGUuaXMuaGlkZGVuKCkgJiYgIXBhZ2VMb3N0Rm9jdXMpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBwYWdlTG9zdEZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMpO1xuICAgICAgICAgICAgaWYoIWFjdGl2YXRlZCAmJiAhcGFnZUxvc3RGb2N1cykge1xuICAgICAgICAgICAgICBtb2R1bGUucmVtb3ZlLmFjdGl2ZUxhYmVsKCk7XG4gICAgICAgICAgICAgIG1vZHVsZS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYobW9kdWxlLmlzLnNlYXJjaFNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgIC8vIHByZXZlbnQgbWVudSBoaWRpbmcgb24gaW1tZWRpYXRlIHJlLWZvY3VzXG4gICAgICAgICAgICAgIHdpbGxSZWZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAvLyBwcmV2ZW50cyBmb2N1cyBjYWxsYmFjayBmcm9tIG9jY3VycmluZyBvbiBtb3VzZWRvd25cbiAgICAgICAgICAgICAgYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYobW9kdWxlLmlzLnNlYXJjaFNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgIC8vIHByZXZlbnQgbWVudSBoaWRpbmcgb24gaW1tZWRpYXRlIHJlLWZvY3VzXG4gICAgICAgICAgICAgIHdpbGxSZWZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC50YXJnZXQpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAvLyBmb2N1cyBzZWFyY2hcbiAgICAgICAgICAgIGlmKCR0YXJnZXQuaXMoJG1vZHVsZSkpIHtcbiAgICAgICAgICAgICAgaWYoIW1vZHVsZS5pcy5mb2N1c2VkT25TZWFyY2goKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5mb2N1c1NlYXJjaCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zaG93KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBhY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBpZihtb2R1bGUuaXMubXVsdGlwbGUoKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuYWN0aXZlTGFiZWwoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZihzZXR0aW5ncy5zaG93T25Gb2N1cykge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zZWFyY2goKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHBhZ2VMb3N0Rm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcyk7XG4gICAgICAgICAgICAgIGlmKG1vZHVsZS5pcy5zZWFyY2hTZWxlY3Rpb24oKSAmJiAhd2lsbFJlZm9jdXMpIHtcbiAgICAgICAgICAgICAgICBpZighaXRlbUFjdGl2YXRlZCAmJiAhcGFnZUxvc3RGb2N1cykge1xuICAgICAgICAgICAgICAgICAgaWYoc2V0dGluZ3MuZm9yY2VTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmZvcmNlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBtb2R1bGUuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aWxsUmVmb2N1cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmKCRpY29uLmhhc0NsYXNzKGNsYXNzTmFtZS5jbGVhcikpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuY2xlYXIoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmIChtb2R1bGUuY2FuLmNsaWNrKCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUudG9nZ2xlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICBhY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBtb2R1bGUuZm9jdXNTZWFyY2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYobW9kdWxlLmlzLm11bHRpcGxlKCkgfHwgbW9kdWxlLmlzLnNlYXJjaFNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5zZXQuZmlsdGVyZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb2R1bGUudGltZXIpO1xuICAgICAgICAgICAgbW9kdWxlLnRpbWVyID0gc2V0VGltZW91dChtb2R1bGUuc2VhcmNoLCBzZXR0aW5ncy5kZWxheS5zZWFyY2gpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAkbGFiZWwgICAgICAgID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAkbGFiZWxzICAgICAgID0gJG1vZHVsZS5maW5kKHNlbGVjdG9yLmxhYmVsKSxcbiAgICAgICAgICAgICAgICAkYWN0aXZlTGFiZWxzID0gJGxhYmVscy5maWx0ZXIoJy4nICsgY2xhc3NOYW1lLmFjdGl2ZSksXG4gICAgICAgICAgICAgICAgJG5leHRBY3RpdmUgICA9ICRsYWJlbC5uZXh0QWxsKCcuJyArIGNsYXNzTmFtZS5hY3RpdmUpLFxuICAgICAgICAgICAgICAgICRwcmV2QWN0aXZlICAgPSAkbGFiZWwucHJldkFsbCgnLicgKyBjbGFzc05hbWUuYWN0aXZlKSxcbiAgICAgICAgICAgICAgICAkcmFuZ2UgPSAoJG5leHRBY3RpdmUubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgID8gJGxhYmVsLm5leHRVbnRpbCgkbmV4dEFjdGl2ZSkuYWRkKCRhY3RpdmVMYWJlbHMpLmFkZCgkbGFiZWwpXG4gICAgICAgICAgICAgICAgICA6ICRsYWJlbC5wcmV2VW50aWwoJHByZXZBY3RpdmUpLmFkZCgkYWN0aXZlTGFiZWxzKS5hZGQoJGxhYmVsKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIGlmKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZUxhYmVscy5yZW1vdmVDbGFzcyhjbGFzc05hbWUuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAkcmFuZ2UuYWRkQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgJGxhYmVsLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZS5hY3RpdmUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICRhY3RpdmVMYWJlbHMucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgJGxhYmVsLmFkZENsYXNzKGNsYXNzTmFtZS5hY3RpdmUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNldHRpbmdzLm9uTGFiZWxTZWxlY3QuYXBwbHkodGhpcywgJGxhYmVscy5maWx0ZXIoJy4nICsgY2xhc3NOYW1lLmFjdGl2ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICRsYWJlbCA9ICQodGhpcykucGFyZW50KClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICBpZiggJGxhYmVsLmhhc0NsYXNzKGNsYXNzTmFtZS5hY3RpdmUpICkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgc2VsZWN0ZWQgbGFiZWxzXG4gICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5hY3RpdmVMYWJlbHMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhpcyBsYWJlbCBvbmx5XG4gICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5hY3RpdmVMYWJlbHMoICRsYWJlbCApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXN0OiB7XG4gICAgICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgIHRvZ2dsZUJlaGF2aW9yID0gKG1vZHVsZS5pcy5tdWx0aXBsZSgpKVxuICAgICAgICAgICAgICAgICAgPyBtb2R1bGUuc2hvd1xuICAgICAgICAgICAgICAgICAgOiBtb2R1bGUudG9nZ2xlXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgaWYobW9kdWxlLmlzLmJ1YmJsZWRMYWJlbENsaWNrKGV2ZW50KSB8fCBtb2R1bGUuaXMuYnViYmxlZEljb25DbGljayhldmVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYoIG1vZHVsZS5kZXRlcm1pbmUuZXZlbnRPbkVsZW1lbnQoZXZlbnQsIHRvZ2dsZUJlaGF2aW9yKSApIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2g6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZXRlcm1pbmUuZXZlbnRPbkVsZW1lbnQoZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LnR5cGUgPT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgICBtb2R1bGUudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgfSwgc2V0dGluZ3MuZGVsYXkudG91Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGV2ZW50LnR5cGUgPT0gJ3RvdWNobW92ZScpIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChtb2R1bGUudGltZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZXRlcm1pbmUuZXZlbnRJbk1vZHVsZShldmVudCwgbW9kdWxlLmhpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBtdXRhdGlvbjogZnVuY3Rpb24obXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnPHNlbGVjdD4gbW9kaWZpZWQsIHJlY3JlYXRpbmcgbWVudScpO1xuICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICBpc1NlbGVjdE11dGF0aW9uID0gZmFsc2VcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAkLmVhY2gobXV0YXRpb25zLCBmdW5jdGlvbihpbmRleCwgbXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZigkKG11dGF0aW9uLnRhcmdldCkuaXMoJ3NlbGVjdCcpIHx8ICQobXV0YXRpb24uYWRkZWROb2RlcykuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICBpc1NlbGVjdE11dGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmKGlzU2VsZWN0TXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuZGlzY29ubmVjdC5zZWxlY3RPYnNlcnZlcigpO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnNldHVwLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2VsZWN0ZWQoKTtcbiAgICAgICAgICAgICAgICBtb2R1bGUub2JzZXJ2ZS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVudToge1xuICAgICAgICAgICAgbXV0YXRpb246IGZ1bmN0aW9uKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICBtdXRhdGlvbiAgID0gbXV0YXRpb25zWzBdLFxuICAgICAgICAgICAgICAgICRhZGRlZE5vZGUgPSBtdXRhdGlvbi5hZGRlZE5vZGVzXG4gICAgICAgICAgICAgICAgICA/ICQobXV0YXRpb24uYWRkZWROb2Rlc1swXSlcbiAgICAgICAgICAgICAgICAgIDogJChmYWxzZSksXG4gICAgICAgICAgICAgICAgJHJlbW92ZWROb2RlID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzXG4gICAgICAgICAgICAgICAgICA/ICQobXV0YXRpb24ucmVtb3ZlZE5vZGVzWzBdKVxuICAgICAgICAgICAgICAgICAgOiAkKGZhbHNlKSxcbiAgICAgICAgICAgICAgICAkY2hhbmdlZE5vZGVzICA9ICRhZGRlZE5vZGUuYWRkKCRyZW1vdmVkTm9kZSksXG4gICAgICAgICAgICAgICAgaXNVc2VyQWRkaXRpb24gPSAkY2hhbmdlZE5vZGVzLmlzKHNlbGVjdG9yLmFkZGl0aW9uKSB8fCAkY2hhbmdlZE5vZGVzLmNsb3Nlc3Qoc2VsZWN0b3IuYWRkaXRpb24pLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgaXNNZXNzYWdlICAgICAgPSAkY2hhbmdlZE5vZGVzLmlzKHNlbGVjdG9yLm1lc3NhZ2UpICB8fCAkY2hhbmdlZE5vZGVzLmNsb3Nlc3Qoc2VsZWN0b3IubWVzc2FnZSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIGlmKGlzVXNlckFkZGl0aW9uIHx8IGlzTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnVXBkYXRpbmcgaXRlbSBzZWxlY3RvciBjYWNoZScpO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5yZWZyZXNoSXRlbXMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ01lbnUgbW9kaWZpZWQsIHVwZGF0aW5nIHNlbGVjdG9yIGNhY2hlJyk7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnJlZnJlc2goKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGl0ZW1BY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpdGVtQWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0ICAgICAgICA9ICQoZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICAgICAgICAkaXRlbSAgICAgICAgICA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgJHN1Yk1lbnUgICAgICAgPSAkaXRlbS5jaGlsZHJlbihzZWxlY3Rvci5tZW51KSxcbiAgICAgICAgICAgICAgICAkb3RoZXJNZW51cyAgICA9ICRpdGVtLnNpYmxpbmdzKHNlbGVjdG9yLml0ZW0pLmNoaWxkcmVuKHNlbGVjdG9yLm1lbnUpLFxuICAgICAgICAgICAgICAgIGhhc1N1Yk1lbnUgICAgID0gKCRzdWJNZW51Lmxlbmd0aCA+IDApLFxuICAgICAgICAgICAgICAgIGlzQnViYmxlZEV2ZW50ID0gKCRzdWJNZW51LmZpbmQoJHRhcmdldCkubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICBpZiggIWlzQnViYmxlZEV2ZW50ICYmIGhhc1N1Yk1lbnUgKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1vZHVsZS5pdGVtVGltZXIpO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5pdGVtVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1Nob3dpbmcgc3ViLW1lbnUnLCAkc3ViTWVudSk7XG4gICAgICAgICAgICAgICAgICAkLmVhY2goJG90aGVyTWVudXMsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUuYW5pbWF0ZS5oaWRlKGZhbHNlLCAkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLmFuaW1hdGUuc2hvdyhmYWxzZSwgJHN1Yk1lbnUpO1xuICAgICAgICAgICAgICAgIH0sIHNldHRpbmdzLmRlbGF5LnNob3cpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAkc3ViTWVudSA9ICQodGhpcykuY2hpbGRyZW4oc2VsZWN0b3IubWVudSlcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICBpZigkc3ViTWVudS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1vZHVsZS5pdGVtVGltZXIpO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5pdGVtVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0hpZGluZyBzdWItbWVudScsICRzdWJNZW51KTtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5hbmltYXRlLmhpZGUoZmFsc2UsICRzdWJNZW51KTtcbiAgICAgICAgICAgICAgICB9LCBzZXR0aW5ncy5kZWxheS5oaWRlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIHNraXBSZWZvY3VzKSB7XG4gICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICRjaG9pY2UgICAgICAgID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAkdGFyZ2V0ICAgICAgICA9IChldmVudClcbiAgICAgICAgICAgICAgICAgID8gJChldmVudC50YXJnZXQpXG4gICAgICAgICAgICAgICAgICA6ICQoJycpLFxuICAgICAgICAgICAgICAgICRzdWJNZW51ICAgICAgID0gJGNob2ljZS5maW5kKHNlbGVjdG9yLm1lbnUpLFxuICAgICAgICAgICAgICAgIHRleHQgICAgICAgICAgID0gbW9kdWxlLmdldC5jaG9pY2VUZXh0KCRjaG9pY2UpLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgICAgID0gbW9kdWxlLmdldC5jaG9pY2VWYWx1ZSgkY2hvaWNlLCB0ZXh0KSxcbiAgICAgICAgICAgICAgICBoYXNTdWJNZW51ICAgICA9ICgkc3ViTWVudS5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgICAgICBpc0J1YmJsZWRFdmVudCA9ICgkc3ViTWVudS5maW5kKCR0YXJnZXQpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgLy8gcHJldmVudHMgSUUxMSBidWcgd2hlcmUgbWVudSByZWNlaXZlcyBmb2N1cyBldmVuIHRob3VnaCBgdGFiaW5kZXg9LTFgXG4gICAgICAgICAgICAgIGlmKG1vZHVsZS5oYXMubWVudVNlYXJjaCgpKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5ibHVyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYoIWlzQnViYmxlZEV2ZW50ICYmICghaGFzU3ViTWVudSB8fCBzZXR0aW5ncy5hbGxvd0NhdGVnb3J5U2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIGlmKG1vZHVsZS5pcy5zZWFyY2hTZWxlY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgICAgaWYoc2V0dGluZ3MuYWxsb3dBZGRpdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS51c2VyQWRkaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuc2VhcmNoVGVybSgpO1xuICAgICAgICAgICAgICAgICAgaWYoIW1vZHVsZS5pcy5mb2N1c2VkT25TZWFyY2goKSAmJiAhKHNraXBSZWZvY3VzID09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5mb2N1c1NlYXJjaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIXNldHRpbmdzLnVzZUxhYmVscykge1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5maWx0ZXJlZEl0ZW0oKTtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2Nyb2xsUG9zaXRpb24oJGNob2ljZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vZHVsZS5kZXRlcm1pbmUuc2VsZWN0QWN0aW9uLmNhbGwodGhpcywgdGV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRvY3VtZW50OiB7XG4gICAgICAgICAgICAvLyBsYWJlbCBzZWxlY3Rpb24gc2hvdWxkIG9jY3VyIGV2ZW4gd2hlbiBlbGVtZW50IGhhcyBubyBmb2N1c1xuICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgcHJlc3NlZEtleSAgICA9IGV2ZW50LndoaWNoLFxuICAgICAgICAgICAgICAgIGlzU2hvcnRjdXRLZXkgPSBtb2R1bGUuaXMuaW5PYmplY3QocHJlc3NlZEtleSwga2V5cylcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICBpZihpc1Nob3J0Y3V0S2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgICAkbGFiZWwgICAgICAgICAgICA9ICRtb2R1bGUuZmluZChzZWxlY3Rvci5sYWJlbCksXG4gICAgICAgICAgICAgICAgICAkYWN0aXZlTGFiZWwgICAgICA9ICRsYWJlbC5maWx0ZXIoJy4nICsgY2xhc3NOYW1lLmFjdGl2ZSksXG4gICAgICAgICAgICAgICAgICBhY3RpdmVWYWx1ZSAgICAgICA9ICRhY3RpdmVMYWJlbC5kYXRhKG1ldGFkYXRhLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgIGxhYmVsSW5kZXggICAgICAgID0gJGxhYmVsLmluZGV4KCRhY3RpdmVMYWJlbCksXG4gICAgICAgICAgICAgICAgICBsYWJlbENvdW50ICAgICAgICA9ICRsYWJlbC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICBoYXNBY3RpdmVMYWJlbCAgICA9ICgkYWN0aXZlTGFiZWwubGVuZ3RoID4gMCksXG4gICAgICAgICAgICAgICAgICBoYXNNdWx0aXBsZUFjdGl2ZSA9ICgkYWN0aXZlTGFiZWwubGVuZ3RoID4gMSksXG4gICAgICAgICAgICAgICAgICBpc0ZpcnN0TGFiZWwgICAgICA9IChsYWJlbEluZGV4ID09PSAwKSxcbiAgICAgICAgICAgICAgICAgIGlzTGFzdExhYmVsICAgICAgID0gKGxhYmVsSW5kZXggKyAxID09IGxhYmVsQ291bnQpLFxuICAgICAgICAgICAgICAgICAgaXNTZWFyY2ggICAgICAgICAgPSBtb2R1bGUuaXMuc2VhcmNoU2VsZWN0aW9uKCksXG4gICAgICAgICAgICAgICAgICBpc0ZvY3VzZWRPblNlYXJjaCA9IG1vZHVsZS5pcy5mb2N1c2VkT25TZWFyY2goKSxcbiAgICAgICAgICAgICAgICAgIGlzRm9jdXNlZCAgICAgICAgID0gbW9kdWxlLmlzLmZvY3VzZWQoKSxcbiAgICAgICAgICAgICAgICAgIGNhcmV0QXRTdGFydCAgICAgID0gKGlzRm9jdXNlZE9uU2VhcmNoICYmIG1vZHVsZS5nZXQuY2FyZXRQb3NpdGlvbigpID09PSAwKSxcbiAgICAgICAgICAgICAgICAgICRuZXh0TGFiZWxcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgaWYoaXNTZWFyY2ggJiYgIWhhc0FjdGl2ZUxhYmVsICYmICFpc0ZvY3VzZWRPblNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHByZXNzZWRLZXkgPT0ga2V5cy5sZWZ0QXJyb3cpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGFjdGl2YXRlIHByZXZpb3VzIGxhYmVsXG4gICAgICAgICAgICAgICAgICBpZigoaXNGb2N1c2VkIHx8IGNhcmV0QXRTdGFydCkgJiYgIWhhc0FjdGl2ZUxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdTZWxlY3RpbmcgcHJldmlvdXMgbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgJGxhYmVsLmxhc3QoKS5hZGRDbGFzcyhjbGFzc05hbWUuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoaGFzQWN0aXZlTGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1NlbGVjdGluZyBwcmV2aW91cyBsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICRsYWJlbC5yZW1vdmVDbGFzcyhjbGFzc05hbWUuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnQWRkaW5nIHByZXZpb3VzIGxhYmVsIHRvIHNlbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGlzRmlyc3RMYWJlbCAmJiAhaGFzTXVsdGlwbGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkYWN0aXZlTGFiZWwuYWRkQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZUxhYmVsLnByZXYoc2VsZWN0b3Iuc2libGluZ0xhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZS5hY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZW5kKClcbiAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihwcmVzc2VkS2V5ID09IGtleXMucmlnaHRBcnJvdykge1xuICAgICAgICAgICAgICAgICAgLy8gYWN0aXZhdGUgZmlyc3QgbGFiZWxcbiAgICAgICAgICAgICAgICAgIGlmKGlzRm9jdXNlZCAmJiAhaGFzQWN0aXZlTGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxhYmVsLmZpcnN0KCkuYWRkQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBhY3RpdmF0ZSBuZXh0IGxhYmVsXG4gICAgICAgICAgICAgICAgICBpZihoYXNBY3RpdmVMYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBpZighZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnU2VsZWN0aW5nIG5leHQgbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAkbGFiZWwucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0FkZGluZyBuZXh0IGxhYmVsIHRvIHNlbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGlzTGFzdExhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYoaXNTZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFpc0ZvY3VzZWRPblNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZm9jdXNTZWFyY2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkbGFiZWwucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoaGFzTXVsdGlwbGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRhY3RpdmVMYWJlbC5uZXh0KHNlbGVjdG9yLnNpYmxpbmdMYWJlbCkuYWRkQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZUxhYmVsLmFkZENsYXNzKGNsYXNzTmFtZS5hY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAkYWN0aXZlTGFiZWwubmV4dChzZWxlY3Rvci5zaWJsaW5nTGFiZWwpLmFkZENsYXNzKGNsYXNzTmFtZS5hY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocHJlc3NlZEtleSA9PSBrZXlzLmRlbGV0ZUtleSB8fCBwcmVzc2VkS2V5ID09IGtleXMuYmFja3NwYWNlKSB7XG4gICAgICAgICAgICAgICAgICBpZihoYXNBY3RpdmVMYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnUmVtb3ZpbmcgYWN0aXZlIGxhYmVscycpO1xuICAgICAgICAgICAgICAgICAgICBpZihpc0xhc3RMYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VhcmNoICYmICFpc0ZvY3VzZWRPblNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmZvY3VzU2VhcmNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRhY3RpdmVMYWJlbC5sYXN0KCkubmV4dChzZWxlY3Rvci5zaWJsaW5nTGFiZWwpLmFkZENsYXNzKGNsYXNzTmFtZS5hY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUucmVtb3ZlLmFjdGl2ZUxhYmVscygkYWN0aXZlTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZihjYXJldEF0U3RhcnQgJiYgIWhhc0FjdGl2ZUxhYmVsICYmIHByZXNzZWRLZXkgPT0ga2V5cy5iYWNrc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1JlbW92aW5nIGxhc3QgbGFiZWwgb24gaW5wdXQgYmFja3NwYWNlJyk7XG4gICAgICAgICAgICAgICAgICAgICRhY3RpdmVMYWJlbCA9ICRsYWJlbC5sYXN0KCkuYWRkQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuYWN0aXZlTGFiZWxzKCRhY3RpdmVMYWJlbCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgJGFjdGl2ZUxhYmVsLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5hY3RpdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIHByZXNzZWRLZXkgICAgPSBldmVudC53aGljaCxcbiAgICAgICAgICAgICAgaXNTaG9ydGN1dEtleSA9IG1vZHVsZS5pcy5pbk9iamVjdChwcmVzc2VkS2V5LCBrZXlzKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoaXNTaG9ydGN1dEtleSkge1xuICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAkY3VycmVudGx5U2VsZWN0ZWQgPSAkaXRlbS5ub3Qoc2VsZWN0b3IudW5zZWxlY3RhYmxlKS5maWx0ZXIoJy4nICsgY2xhc3NOYW1lLnNlbGVjdGVkKS5lcSgwKSxcbiAgICAgICAgICAgICAgICAkYWN0aXZlSXRlbSAgICAgICAgPSAkbWVudS5jaGlsZHJlbignLicgKyBjbGFzc05hbWUuYWN0aXZlKS5lcSgwKSxcbiAgICAgICAgICAgICAgICAkc2VsZWN0ZWRJdGVtICAgICAgPSAoJGN1cnJlbnRseVNlbGVjdGVkLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICA/ICRjdXJyZW50bHlTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgOiAkYWN0aXZlSXRlbSxcbiAgICAgICAgICAgICAgICAkdmlzaWJsZUl0ZW1zID0gKCRzZWxlY3RlZEl0ZW0ubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgID8gJHNlbGVjdGVkSXRlbS5zaWJsaW5ncygnOm5vdCguJyArIGNsYXNzTmFtZS5maWx0ZXJlZCArJyknKS5hZGRCYWNrKClcbiAgICAgICAgICAgICAgICAgIDogJG1lbnUuY2hpbGRyZW4oJzpub3QoLicgKyBjbGFzc05hbWUuZmlsdGVyZWQgKycpJyksXG4gICAgICAgICAgICAgICAgJHN1Yk1lbnUgICAgICAgICAgICAgID0gJHNlbGVjdGVkSXRlbS5jaGlsZHJlbihzZWxlY3Rvci5tZW51KSxcbiAgICAgICAgICAgICAgICAkcGFyZW50TWVudSAgICAgICAgICAgPSAkc2VsZWN0ZWRJdGVtLmNsb3Nlc3Qoc2VsZWN0b3IubWVudSksXG4gICAgICAgICAgICAgICAgaW5WaXNpYmxlTWVudSAgICAgICAgID0gKCRwYXJlbnRNZW51Lmhhc0NsYXNzKGNsYXNzTmFtZS52aXNpYmxlKSB8fCAkcGFyZW50TWVudS5oYXNDbGFzcyhjbGFzc05hbWUuYW5pbWF0aW5nKSB8fCAkcGFyZW50TWVudS5wYXJlbnQoc2VsZWN0b3IubWVudSkubGVuZ3RoID4gMCksXG4gICAgICAgICAgICAgICAgaGFzU3ViTWVudSAgICAgICAgICAgID0gKCRzdWJNZW51Lmxlbmd0aD4gMCksXG4gICAgICAgICAgICAgICAgaGFzU2VsZWN0ZWRJdGVtICAgICAgID0gKCRzZWxlY3RlZEl0ZW0ubGVuZ3RoID4gMCksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJc1NlbGVjdGFibGUgID0gKCRzZWxlY3RlZEl0ZW0ubm90KHNlbGVjdG9yLnVuc2VsZWN0YWJsZSkubGVuZ3RoID4gMCksXG4gICAgICAgICAgICAgICAgZGVsaW1pdGVyUHJlc3NlZCAgICAgID0gKHByZXNzZWRLZXkgPT0ga2V5cy5kZWxpbWl0ZXIgJiYgc2V0dGluZ3MuYWxsb3dBZGRpdGlvbnMgJiYgbW9kdWxlLmlzLm11bHRpcGxlKCkpLFxuICAgICAgICAgICAgICAgIGlzQWRkaXRpb25XaXRob3V0TWVudSA9IChzZXR0aW5ncy5hbGxvd0FkZGl0aW9ucyAmJiBzZXR0aW5ncy5oaWRlQWRkaXRpb25zICYmIChwcmVzc2VkS2V5ID09IGtleXMuZW50ZXIgfHwgZGVsaW1pdGVyUHJlc3NlZCkgJiYgc2VsZWN0ZWRJc1NlbGVjdGFibGUpLFxuICAgICAgICAgICAgICAgICRuZXh0SXRlbSxcbiAgICAgICAgICAgICAgICBpc1N1Yk1lbnVJdGVtLFxuICAgICAgICAgICAgICAgIG5ld0luZGV4XG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgLy8gYWxsb3cgc2VsZWN0aW9uIHdpdGggbWVudSBjbG9zZWRcbiAgICAgICAgICAgICAgaWYoaXNBZGRpdGlvbldpdGhvdXRNZW51KSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1NlbGVjdGluZyBpdGVtIGZyb20ga2V5Ym9hcmQgc2hvcnRjdXQnLCAkc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICBtb2R1bGUuZXZlbnQuaXRlbS5jbGljay5jYWxsKCRzZWxlY3RlZEl0ZW0sIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBpZihtb2R1bGUuaXMuc2VhcmNoU2VsZWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuc2VhcmNoVGVybSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIHZpc2libGUgbWVudSBrZXlib2FyZCBzaG9ydGN1dHNcbiAgICAgICAgICAgICAgaWYoIG1vZHVsZS5pcy52aXNpYmxlKCkgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBlbnRlciAoc2VsZWN0IG9yIG9wZW4gc3ViLW1lbnUpXG4gICAgICAgICAgICAgICAgaWYocHJlc3NlZEtleSA9PSBrZXlzLmVudGVyIHx8IGRlbGltaXRlclByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgIGlmKHByZXNzZWRLZXkgPT0ga2V5cy5lbnRlciAmJiBoYXNTZWxlY3RlZEl0ZW0gJiYgaGFzU3ViTWVudSAmJiAhc2V0dGluZ3MuYWxsb3dDYXRlZ29yeVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnUHJlc3NlZCBlbnRlciBvbiB1bnNlbGVjdGFibGUgY2F0ZWdvcnksIG9wZW5pbmcgc3ViIG1lbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlc3NlZEtleSA9IGtleXMucmlnaHRBcnJvdztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoc2VsZWN0ZWRJc1NlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1NlbGVjdGluZyBpdGVtIGZyb20ga2V5Ym9hcmQgc2hvcnRjdXQnLCAkc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV2ZW50Lml0ZW0uY2xpY2suY2FsbCgkc2VsZWN0ZWRJdGVtLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKG1vZHVsZS5pcy5zZWFyY2hTZWxlY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuc2VhcmNoVGVybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHN1Yi1tZW51IGFjdGlvbnNcbiAgICAgICAgICAgICAgICBpZihoYXNTZWxlY3RlZEl0ZW0pIHtcblxuICAgICAgICAgICAgICAgICAgaWYocHJlc3NlZEtleSA9PSBrZXlzLmxlZnRBcnJvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlzU3ViTWVudUl0ZW0gPSAoJHBhcmVudE1lbnVbMF0gIT09ICRtZW51WzBdKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihpc1N1Yk1lbnVJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0xlZnQga2V5IHByZXNzZWQsIGNsb3Npbmcgc3ViLW1lbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuYW5pbWF0ZS5oaWRlKGZhbHNlLCAkcGFyZW50TWVudSk7XG4gICAgICAgICAgICAgICAgICAgICAgJHNlbGVjdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgJHBhcmVudE1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KHNlbGVjdG9yLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUuc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gcmlnaHQgYXJyb3cgKHNob3cgc3ViLW1lbnUpXG4gICAgICAgICAgICAgICAgICBpZihwcmVzc2VkS2V5ID09IGtleXMucmlnaHRBcnJvdykge1xuICAgICAgICAgICAgICAgICAgICBpZihoYXNTdWJNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1JpZ2h0IGtleSBwcmVzc2VkLCBvcGVuaW5nIHN1Yi1tZW51Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmFuaW1hdGUuc2hvdyhmYWxzZSwgJHN1Yk1lbnUpO1xuICAgICAgICAgICAgICAgICAgICAgICRzZWxlY3RlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhjbGFzc05hbWUuc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICRzdWJNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChzZWxlY3Rvci5pdGVtKS5lcSgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdXAgYXJyb3cgKHRyYXZlcnNlIG1lbnUgdXApXG4gICAgICAgICAgICAgICAgaWYocHJlc3NlZEtleSA9PSBrZXlzLnVwQXJyb3cpIHtcbiAgICAgICAgICAgICAgICAgICRuZXh0SXRlbSA9IChoYXNTZWxlY3RlZEl0ZW0gJiYgaW5WaXNpYmxlTWVudSlcbiAgICAgICAgICAgICAgICAgICAgPyAkc2VsZWN0ZWRJdGVtLnByZXZBbGwoc2VsZWN0b3IuaXRlbSArICc6bm90KCcgKyBzZWxlY3Rvci51bnNlbGVjdGFibGUgKyAnKScpLmVxKDApXG4gICAgICAgICAgICAgICAgICAgIDogJGl0ZW0uZXEoMClcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgIGlmKCR2aXNpYmxlSXRlbXMuaW5kZXgoICRuZXh0SXRlbSApIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnVXAga2V5IHByZXNzZWQgYnV0IHJlYWNoZWQgdG9wIG9mIGN1cnJlbnQgbWVudScpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1VwIGtleSBwcmVzc2VkLCBjaGFuZ2luZyBhY3RpdmUgaXRlbScpO1xuICAgICAgICAgICAgICAgICAgICAkc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAkbmV4dEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2Nyb2xsUG9zaXRpb24oJG5leHRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2V0dGluZ3Muc2VsZWN0T25LZXlkb3duICYmIG1vZHVsZS5pcy5zaW5nbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2VsZWN0ZWRJdGVtKCRuZXh0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gZG93biBhcnJvdyAodHJhdmVyc2UgbWVudSBkb3duKVxuICAgICAgICAgICAgICAgIGlmKHByZXNzZWRLZXkgPT0ga2V5cy5kb3duQXJyb3cpIHtcbiAgICAgICAgICAgICAgICAgICRuZXh0SXRlbSA9IChoYXNTZWxlY3RlZEl0ZW0gJiYgaW5WaXNpYmxlTWVudSlcbiAgICAgICAgICAgICAgICAgICAgPyAkbmV4dEl0ZW0gPSAkc2VsZWN0ZWRJdGVtLm5leHRBbGwoc2VsZWN0b3IuaXRlbSArICc6bm90KCcgKyBzZWxlY3Rvci51bnNlbGVjdGFibGUgKyAnKScpLmVxKDApXG4gICAgICAgICAgICAgICAgICAgIDogJGl0ZW0uZXEoMClcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgIGlmKCRuZXh0SXRlbS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0Rvd24ga2V5IHByZXNzZWQgYnV0IHJlYWNoZWQgYm90dG9tIG9mIGN1cnJlbnQgbWVudScpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0Rvd24ga2V5IHByZXNzZWQsIGNoYW5naW5nIGFjdGl2ZSBpdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgICRpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAkbmV4dEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2Nyb2xsUG9zaXRpb24oJG5leHRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2V0dGluZ3Muc2VsZWN0T25LZXlkb3duICYmIG1vZHVsZS5pcy5zaW5nbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2VsZWN0ZWRJdGVtKCRuZXh0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcGFnZSBkb3duIChzaG93IG5leHQgcGFnZSlcbiAgICAgICAgICAgICAgICBpZihwcmVzc2VkS2V5ID09IGtleXMucGFnZVVwKSB7XG4gICAgICAgICAgICAgICAgICBtb2R1bGUuc2Nyb2xsUGFnZSgndXAnKTtcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHByZXNzZWRLZXkgPT0ga2V5cy5wYWdlRG93bikge1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLnNjcm9sbFBhZ2UoJ2Rvd24nKTtcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gZXNjYXBlIChjbG9zZSBtZW51KVxuICAgICAgICAgICAgICAgIGlmKHByZXNzZWRLZXkgPT0ga2V5cy5lc2NhcGUpIHtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdFc2NhcGUga2V5IHByZXNzZWQsIGNsb3NpbmcgZHJvcGRvd24nKTtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZGVsaW1pdGVyIGtleVxuICAgICAgICAgICAgICAgIGlmKGRlbGltaXRlclByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRvd24gYXJyb3cgKG9wZW4gbWVudSlcbiAgICAgICAgICAgICAgICBpZihwcmVzc2VkS2V5ID09IGtleXMuZG93bkFycm93ICYmICFtb2R1bGUuaXMudmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnRG93biBrZXkgcHJlc3NlZCwgc2hvd2luZyBkcm9wZG93bicpO1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLnNob3coKTtcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgaWYoICFtb2R1bGUuaGFzLnNlYXJjaCgpICkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2VsZWN0ZWRMZXR0ZXIoIFN0cmluZy5mcm9tQ2hhckNvZGUocHJlc3NlZEtleSkgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB0cmlnZ2VyOiB7XG4gICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICBldmVudHMgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpLFxuICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQgPSAkaW5wdXRbMF1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnVHJpZ2dlcmluZyBuYXRpdmUgY2hhbmdlIGV2ZW50Jyk7XG4gICAgICAgICAgICAgIGV2ZW50cy5pbml0RXZlbnQoJ2NoYW5nZScsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgaW5wdXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGV0ZXJtaW5lOiB7XG4gICAgICAgICAgc2VsZWN0QWN0aW9uOiBmdW5jdGlvbih0ZXh0LCB2YWx1ZSkge1xuICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0RldGVybWluaW5nIGFjdGlvbicsIHNldHRpbmdzLmFjdGlvbik7XG4gICAgICAgICAgICBpZiggJC5pc0Z1bmN0aW9uKCBtb2R1bGUuYWN0aW9uW3NldHRpbmdzLmFjdGlvbl0gKSApIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1RyaWdnZXJpbmcgcHJlc2V0IGFjdGlvbicsIHNldHRpbmdzLmFjdGlvbiwgdGV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgICBtb2R1bGUuYWN0aW9uWyBzZXR0aW5ncy5hY3Rpb24gXS5jYWxsKGVsZW1lbnQsIHRleHQsIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoICQuaXNGdW5jdGlvbihzZXR0aW5ncy5hY3Rpb24pICkge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnVHJpZ2dlcmluZyB1c2VyIGFjdGlvbicsIHNldHRpbmdzLmFjdGlvbiwgdGV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgICBzZXR0aW5ncy5hY3Rpb24uY2FsbChlbGVtZW50LCB0ZXh0LCB2YWx1ZSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmVycm9yKGVycm9yLmFjdGlvbiwgc2V0dGluZ3MuYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGV2ZW50SW5Nb2R1bGU6IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICR0YXJnZXQgICAgPSAkKGV2ZW50LnRhcmdldCksXG4gICAgICAgICAgICAgIGluRG9jdW1lbnQgPSAoJHRhcmdldC5jbG9zZXN0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkubGVuZ3RoID4gMCksXG4gICAgICAgICAgICAgIGluTW9kdWxlICAgPSAoJHRhcmdldC5jbG9zZXN0KCRtb2R1bGUpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICQuaXNGdW5jdGlvbihjYWxsYmFjaylcbiAgICAgICAgICAgICAgPyBjYWxsYmFja1xuICAgICAgICAgICAgICA6IGZ1bmN0aW9uKCl7fVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoaW5Eb2N1bWVudCAmJiAhaW5Nb2R1bGUpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1RyaWdnZXJpbmcgZXZlbnQnLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdFdmVudCBvY2N1cnJlZCBpbiBkcm9wZG93biwgY2FuY2VsaW5nIGNhbGxiYWNrJyk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGV2ZW50T25FbGVtZW50OiBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAkdGFyZ2V0ICAgICAgPSAkKGV2ZW50LnRhcmdldCksXG4gICAgICAgICAgICAgICRsYWJlbCAgICAgICA9ICR0YXJnZXQuY2xvc2VzdChzZWxlY3Rvci5zaWJsaW5nTGFiZWwpLFxuICAgICAgICAgICAgICBpblZpc2libGVET00gPSBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGV2ZW50LnRhcmdldCksXG4gICAgICAgICAgICAgIG5vdE9uTGFiZWwgICA9ICgkbW9kdWxlLmZpbmQoJGxhYmVsKS5sZW5ndGggPT09IDApLFxuICAgICAgICAgICAgICBub3RJbk1lbnUgICAgPSAoJHRhcmdldC5jbG9zZXN0KCRtZW51KS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjYWxsYmFjayA9ICQuaXNGdW5jdGlvbihjYWxsYmFjaylcbiAgICAgICAgICAgICAgPyBjYWxsYmFja1xuICAgICAgICAgICAgICA6IGZ1bmN0aW9uKCl7fVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoaW5WaXNpYmxlRE9NICYmIG5vdE9uTGFiZWwgJiYgbm90SW5NZW51KSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdUcmlnZ2VyaW5nIGV2ZW50JywgY2FsbGJhY2spO1xuICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnRXZlbnQgb2NjdXJyZWQgaW4gZHJvcGRvd24gbWVudSwgY2FuY2VsaW5nIGNhbGxiYWNrJyk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWN0aW9uOiB7XG5cbiAgICAgICAgICBub3RoaW5nOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHRleHQsIHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICAgIDogdGV4dFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoIG1vZHVsZS5jYW4uYWN0aXZhdGUoICQoZWxlbWVudCkgKSApIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnNldC5zZWxlY3RlZCh2YWx1ZSwgJChlbGVtZW50KSk7XG4gICAgICAgICAgICAgIGlmKG1vZHVsZS5pcy5tdWx0aXBsZSgpICYmICFtb2R1bGUuaXMuYWxsRmlsdGVyZWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaGlkZUFuZENsZWFyKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbih0ZXh0LCB2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgICA6IHRleHRcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmKCBtb2R1bGUuY2FuLmFjdGl2YXRlKCAkKGVsZW1lbnQpICkgKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5zZXQudmFsdWUodmFsdWUsIHRleHQsICQoZWxlbWVudCkpO1xuICAgICAgICAgICAgICBpZihtb2R1bGUuaXMubXVsdGlwbGUoKSAmJiAhbW9kdWxlLmlzLmFsbEZpbHRlcmVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhpZGVBbmRDbGVhcigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGNvbWJvOiBmdW5jdGlvbih0ZXh0LCB2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgICA6IHRleHRcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIG1vZHVsZS5zZXQuc2VsZWN0ZWQodmFsdWUsICQoZWxlbWVudCkpO1xuICAgICAgICAgICAgbW9kdWxlLmhpZGVBbmRDbGVhcigpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBoaWRlOiBmdW5jdGlvbih0ZXh0LCB2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICAgICAgbW9kdWxlLnNldC52YWx1ZSh2YWx1ZSwgdGV4dCwgJChlbGVtZW50KSk7XG4gICAgICAgICAgICBtb2R1bGUuaGlkZUFuZENsZWFyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgaWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuZGF0YShtZXRhZGF0YS5kZWZhdWx0VGV4dCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuZGF0YShtZXRhZGF0YS5kZWZhdWx0VmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxhY2Vob2xkZXJUZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzLnBsYWNlaG9sZGVyICE9ICdhdXRvJyAmJiB0eXBlb2Ygc2V0dGluZ3MucGxhY2Vob2xkZXIgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuZGF0YShtZXRhZGF0YS5wbGFjZWhvbGRlclRleHQpIHx8ICcnO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJHRleHQudGV4dCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcXVlcnk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICQudHJpbSgkc2VhcmNoLnZhbCgpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlYXJjaFdpZHRoOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgICA6ICRzZWFyY2gudmFsKClcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgICRzaXplci50ZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgcm91bmRpbmcgaXNzdWVzXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCAkc2l6ZXIud2lkdGgoKSArIDEpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0aW9uQ291bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIHZhbHVlcyA9IG1vZHVsZS5nZXQudmFsdWVzKCksXG4gICAgICAgICAgICAgIGNvdW50XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb3VudCA9ICggbW9kdWxlLmlzLm11bHRpcGxlKCkgKVxuICAgICAgICAgICAgICA/ICQuaXNBcnJheSh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgPyB2YWx1ZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgIDogKG1vZHVsZS5nZXQudmFsdWUoKSAhPT0gJycpXG4gICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBmdW5jdGlvbigkc3ViTWVudSkge1xuICAgICAgICAgICAgcmV0dXJuIChzZXR0aW5ncy50cmFuc2l0aW9uID09ICdhdXRvJylcbiAgICAgICAgICAgICAgPyBtb2R1bGUuaXMudXB3YXJkKCRzdWJNZW51KVxuICAgICAgICAgICAgICAgID8gJ3NsaWRlIHVwJ1xuICAgICAgICAgICAgICAgIDogJ3NsaWRlIGRvd24nXG4gICAgICAgICAgICAgIDogc2V0dGluZ3MudHJhbnNpdGlvblxuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlclZhbHVlczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgdmFsdWVzID0gbW9kdWxlLmdldC52YWx1ZXMoKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoIXZhbHVlcykge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZXMgPSAkLmlzQXJyYXkodmFsdWVzKVxuICAgICAgICAgICAgICA/IHZhbHVlc1xuICAgICAgICAgICAgICA6IFt2YWx1ZXNdXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICByZXR1cm4gJC5ncmVwKHZhbHVlcywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChtb2R1bGUuZ2V0Lml0ZW0odmFsdWUpID09PSBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVuaXF1ZUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuICQuZ3JlcChhcnJheSwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkLmluQXJyYXkodmFsdWUsIGFycmF5KSA9PT0gaW5kZXg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhcmV0UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGlucHV0ID0gJHNlYXJjaC5nZXQoMCksXG4gICAgICAgICAgICAgIHJhbmdlLFxuICAgICAgICAgICAgICByYW5nZUxlbmd0aFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoJ3NlbGVjdGlvblN0YXJ0JyBpbiBpbnB1dCkge1xuICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgcmFuZ2UgICAgICAgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgcmFuZ2VMZW5ndGggPSByYW5nZS50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJhbmdlLnRleHQubGVuZ3RoIC0gcmFuZ2VMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgdmFsdWUgPSAoJGlucHV0Lmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgPyAkaW5wdXQudmFsKClcbiAgICAgICAgICAgICAgICA6ICRtb2R1bGUuZGF0YShtZXRhZGF0YS52YWx1ZSksXG4gICAgICAgICAgICAgIGlzRW1wdHlNdWx0aXNlbGVjdCA9ICgkLmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMSAmJiB2YWx1ZVswXSA9PT0gJycpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAvLyBwcmV2ZW50cyBwbGFjZWhvbGRlciBlbGVtZW50IGZyb20gYmVpbmcgc2VsZWN0ZWQgd2hlbiBtdWx0aXBsZVxuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGlzRW1wdHlNdWx0aXNlbGVjdClcbiAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIHZhbHVlID0gbW9kdWxlLmdldC52YWx1ZSgpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZih2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICggIW1vZHVsZS5oYXMuc2VsZWN0SW5wdXQoKSAmJiBtb2R1bGUuaXMubXVsdGlwbGUoKSApXG4gICAgICAgICAgICAgID8gKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykgLy8gZGVsaW1pdGVkIHN0cmluZ1xuICAgICAgICAgICAgICAgID8gdmFsdWUuc3BsaXQoc2V0dGluZ3MuZGVsaW1pdGVyKVxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3RlVmFsdWVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICB2YWx1ZXMgPSBtb2R1bGUuZ2V0LnZhbHVlcygpLFxuICAgICAgICAgICAgICByZW1vdGVWYWx1ZXMgPSBmYWxzZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYodmFsdWVzKSB7XG4gICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZXMgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkLmVhY2godmFsdWVzLCBmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAgIG5hbWUgPSBtb2R1bGUucmVhZC5yZW1vdGVEYXRhKHZhbHVlKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnUmVzdG9yaW5nIHZhbHVlIGZyb20gc2Vzc2lvbiBkYXRhJywgbmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmKCFyZW1vdGVWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlVmFsdWVzID0ge307XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZW1vdGVWYWx1ZXNbdmFsdWVdID0gbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlbW90ZVZhbHVlcztcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNob2ljZVRleHQ6IGZ1bmN0aW9uKCRjaG9pY2UsIHByZXNlcnZlSFRNTCkge1xuICAgICAgICAgICAgcHJlc2VydmVIVE1MID0gKHByZXNlcnZlSFRNTCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICA/IHByZXNlcnZlSFRNTFxuICAgICAgICAgICAgICA6IHNldHRpbmdzLnByZXNlcnZlSFRNTFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoJGNob2ljZSkge1xuICAgICAgICAgICAgICBpZigkY2hvaWNlLmZpbmQoc2VsZWN0b3IubWVudSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdSZXRyaWV2aW5nIHRleHQgb2YgZWxlbWVudCB3aXRoIHN1Yi1tZW51Jyk7XG4gICAgICAgICAgICAgICAgJGNob2ljZSA9ICRjaG9pY2UuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAkY2hvaWNlLmZpbmQoc2VsZWN0b3IubWVudSkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJGNob2ljZS5maW5kKHNlbGVjdG9yLm1lbnVJY29uKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKCRjaG9pY2UuZGF0YShtZXRhZGF0YS50ZXh0KSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gJGNob2ljZS5kYXRhKG1ldGFkYXRhLnRleHQpXG4gICAgICAgICAgICAgICAgOiAocHJlc2VydmVIVE1MKVxuICAgICAgICAgICAgICAgICAgPyAkLnRyaW0oJGNob2ljZS5odG1sKCkpXG4gICAgICAgICAgICAgICAgICA6ICQudHJpbSgkY2hvaWNlLnRleHQoKSlcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hvaWNlVmFsdWU6IGZ1bmN0aW9uKCRjaG9pY2UsIGNob2ljZVRleHQpIHtcbiAgICAgICAgICAgIGNob2ljZVRleHQgPSBjaG9pY2VUZXh0IHx8IG1vZHVsZS5nZXQuY2hvaWNlVGV4dCgkY2hvaWNlKTtcbiAgICAgICAgICAgIGlmKCEkY2hvaWNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoJGNob2ljZS5kYXRhKG1ldGFkYXRhLnZhbHVlKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICA/IFN0cmluZyggJGNob2ljZS5kYXRhKG1ldGFkYXRhLnZhbHVlKSApXG4gICAgICAgICAgICAgIDogKHR5cGVvZiBjaG9pY2VUZXh0ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICA/ICQudHJpbShjaG9pY2VUZXh0LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgOiBTdHJpbmcoY2hvaWNlVGV4dClcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0RXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGlucHV0ID0gJHNlYXJjaFswXVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoaW5wdXQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChpbnB1dC5vbmlucHV0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyAnaW5wdXQnXG4gICAgICAgICAgICAgICAgOiAoaW5wdXQub25wcm9wZXJ0eWNoYW5nZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgPyAncHJvcGVydHljaGFuZ2UnXG4gICAgICAgICAgICAgICAgICA6ICdrZXl1cCdcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0VmFsdWVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICBzZWxlY3QgPSB7fVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgc2VsZWN0LnZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAuZmluZCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9uICA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgICAgID0gJG9wdGlvbi5odG1sKCksXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gJG9wdGlvbi5hdHRyKCdkaXNhYmxlZCcpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICA9ICggJG9wdGlvbi5hdHRyKCd2YWx1ZScpICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgICAgICAgICAgICAgID8gJG9wdGlvbi5hdHRyKCd2YWx1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgOiBuYW1lXG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy5wbGFjZWhvbGRlciA9PT0gJ2F1dG8nICYmIHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3QucGxhY2Vob2xkZXIgPSBuYW1lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC52YWx1ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZSAgICAgOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgOiBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MucGxhY2Vob2xkZXIgJiYgc2V0dGluZ3MucGxhY2Vob2xkZXIgIT09ICdhdXRvJykge1xuICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ1NldHRpbmcgcGxhY2Vob2xkZXIgdmFsdWUgdG8nLCBzZXR0aW5ncy5wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgIHNlbGVjdC5wbGFjZWhvbGRlciA9IHNldHRpbmdzLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2V0dGluZ3Muc29ydFNlbGVjdCkge1xuICAgICAgICAgICAgICBzZWxlY3QudmFsdWVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYS5uYW1lID4gYi5uYW1lKVxuICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICA6IC0xXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdSZXRyaWV2ZWQgYW5kIHNvcnRlZCB2YWx1ZXMgZnJvbSBzZWxlY3QnLCBzZWxlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnUmV0cmlldmVkIHZhbHVlcyBmcm9tIHNlbGVjdCcsIHNlbGVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYWN0aXZlSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJGl0ZW0uZmlsdGVyKCcuJyAgKyBjbGFzc05hbWUuYWN0aXZlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgJHNlbGVjdGVkSXRlbSA9ICRpdGVtLm5vdChzZWxlY3Rvci51bnNlbGVjdGFibGUpLmZpbHRlcignLicgICsgY2xhc3NOYW1lLnNlbGVjdGVkKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgcmV0dXJuICgkc2VsZWN0ZWRJdGVtLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgID8gJHNlbGVjdGVkSXRlbVxuICAgICAgICAgICAgICA6ICRpdGVtLmVxKDApXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpdGVtV2l0aEFkZGl0aW9uczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAkaXRlbXMgICAgICAgPSBtb2R1bGUuZ2V0Lml0ZW0odmFsdWUpLFxuICAgICAgICAgICAgICAkdXNlckl0ZW1zICAgPSBtb2R1bGUuY3JlYXRlLnVzZXJDaG9pY2UodmFsdWUpLFxuICAgICAgICAgICAgICBoYXNVc2VySXRlbXMgPSAoJHVzZXJJdGVtcyAmJiAkdXNlckl0ZW1zLmxlbmd0aCA+IDApXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZihoYXNVc2VySXRlbXMpIHtcbiAgICAgICAgICAgICAgJGl0ZW1zID0gKCRpdGVtcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgID8gJGl0ZW1zLmFkZCgkdXNlckl0ZW1zKVxuICAgICAgICAgICAgICAgIDogJHVzZXJJdGVtc1xuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJGl0ZW1zO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaXRlbTogZnVuY3Rpb24odmFsdWUsIHN0cmljdCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICRzZWxlY3RlZEl0ZW0gPSBmYWxzZSxcbiAgICAgICAgICAgICAgc2hvdWxkU2VhcmNoLFxuICAgICAgICAgICAgICBpc011bHRpcGxlXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICA/IHZhbHVlXG4gICAgICAgICAgICAgIDogKCBtb2R1bGUuZ2V0LnZhbHVlcygpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyBtb2R1bGUuZ2V0LnZhbHVlcygpXG4gICAgICAgICAgICAgICAgOiBtb2R1bGUuZ2V0LnRleHQoKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgc2hvdWxkU2VhcmNoID0gKGlzTXVsdGlwbGUpXG4gICAgICAgICAgICAgID8gKHZhbHVlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgIDogKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpc011bHRpcGxlID0gKG1vZHVsZS5pcy5tdWx0aXBsZSgpICYmICQuaXNBcnJheSh2YWx1ZSkpO1xuICAgICAgICAgICAgc3RyaWN0ICAgICA9ICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IDApXG4gICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICA6IHN0cmljdCB8fCBmYWxzZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoc2hvdWxkU2VhcmNoKSB7XG4gICAgICAgICAgICAgICRpdGVtXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAgICAgJGNob2ljZSAgICAgICA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblRleHQgICAgPSBtb2R1bGUuZ2V0LmNob2ljZVRleHQoJGNob2ljZSksXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlICAgPSBtb2R1bGUuZ2V0LmNob2ljZVZhbHVlKCRjaG9pY2UsIG9wdGlvblRleHQpXG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAvLyBzYWZlIGVhcmx5IGV4aXRcbiAgICAgICAgICAgICAgICAgIGlmKG9wdGlvblZhbHVlID09PSBudWxsIHx8IG9wdGlvblZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYoaXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZigkLmluQXJyYXkoIFN0cmluZyhvcHRpb25WYWx1ZSksIHZhbHVlKSAhPT0gLTEgfHwgJC5pbkFycmF5KG9wdGlvblRleHQsIHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkc2VsZWN0ZWRJdGVtID0gKCRzZWxlY3RlZEl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICRzZWxlY3RlZEl0ZW0uYWRkKCRjaG9pY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICRjaG9pY2VcbiAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdBbWJpZ3VvdXMgZHJvcGRvd24gdmFsdWUgdXNpbmcgc3RyaWN0IHR5cGUgY2hlY2snLCAkY2hvaWNlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBvcHRpb25WYWx1ZSA9PT0gdmFsdWUgfHwgb3B0aW9uVGV4dCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkc2VsZWN0ZWRJdGVtID0gJGNob2ljZTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCBTdHJpbmcob3B0aW9uVmFsdWUpID09IFN0cmluZyh2YWx1ZSkgfHwgb3B0aW9uVGV4dCA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdGb3VuZCBzZWxlY3QgaXRlbSBieSB2YWx1ZScsIG9wdGlvblZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgJHNlbGVjdGVkSXRlbSA9ICRjaG9pY2U7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJHNlbGVjdGVkSXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hlY2s6IHtcbiAgICAgICAgICBtYXhTZWxlY3Rpb25zOiBmdW5jdGlvbihzZWxlY3Rpb25Db3VudCkge1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MubWF4U2VsZWN0aW9ucykge1xuICAgICAgICAgICAgICBzZWxlY3Rpb25Db3VudCA9IChzZWxlY3Rpb25Db3VudCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gc2VsZWN0aW9uQ291bnRcbiAgICAgICAgICAgICAgICA6IG1vZHVsZS5nZXQuc2VsZWN0aW9uQ291bnQoKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIGlmKHNlbGVjdGlvbkNvdW50ID49IHNldHRpbmdzLm1heFNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ01heGltdW0gc2VsZWN0aW9uIGNvdW50IHJlYWNoZWQnKTtcbiAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy51c2VMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAgICRpdGVtLmFkZENsYXNzKGNsYXNzTmFtZS5maWx0ZXJlZCk7XG4gICAgICAgICAgICAgICAgICBtb2R1bGUuYWRkLm1lc3NhZ2UobWVzc2FnZS5tYXhTZWxlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ05vIGxvbmdlciBhdCBtYXhpbXVtIHNlbGVjdGlvbiBjb3VudCcpO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUubWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuZmlsdGVyZWRJdGVtKCk7XG4gICAgICAgICAgICAgICAgaWYobW9kdWxlLmlzLnNlYXJjaFNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICBtb2R1bGUuZmlsdGVySXRlbXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzdG9yZToge1xuICAgICAgICAgIGRlZmF1bHRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZHVsZS5jbGVhcigpO1xuICAgICAgICAgICAgbW9kdWxlLnJlc3RvcmUuZGVmYXVsdFRleHQoKTtcbiAgICAgICAgICAgIG1vZHVsZS5yZXN0b3JlLmRlZmF1bHRWYWx1ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGRlZmF1bHRUZXh0ICAgICA9IG1vZHVsZS5nZXQuZGVmYXVsdFRleHQoKSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0ID0gbW9kdWxlLmdldC5wbGFjZWhvbGRlclRleHRcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmKGRlZmF1bHRUZXh0ID09PSBwbGFjZWhvbGRlclRleHQpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdSZXN0b3JpbmcgZGVmYXVsdCBwbGFjZWhvbGRlciB0ZXh0JywgZGVmYXVsdFRleHQpO1xuICAgICAgICAgICAgICBtb2R1bGUuc2V0LnBsYWNlaG9sZGVyVGV4dChkZWZhdWx0VGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdSZXN0b3JpbmcgZGVmYXVsdCB0ZXh0JywgZGVmYXVsdFRleHQpO1xuICAgICAgICAgICAgICBtb2R1bGUuc2V0LnRleHQoZGVmYXVsdFRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxhY2Vob2xkZXJUZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZHVsZS5zZXQucGxhY2Vob2xkZXJUZXh0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IG1vZHVsZS5nZXQuZGVmYXVsdFZhbHVlKClcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnUmVzdG9yaW5nIGRlZmF1bHQgdmFsdWUnLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgICBpZihkZWZhdWx0VmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnNldC52YWx1ZShkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2VsZWN0ZWQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUucmVtb3ZlLmFjdGl2ZUl0ZW0oKTtcbiAgICAgICAgICAgICAgICBtb2R1bGUucmVtb3ZlLnNlbGVjdGVkSXRlbSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MuYWxsb3dBZGRpdGlvbnMpIHtcbiAgICAgICAgICAgICAgaWYoIXNldHRpbmdzLnVzZUxhYmVscykge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5lcnJvcihlcnJvci5sYWJlbHMpO1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLnVzZUxhYmVscyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdSZXN0b3Jpbmcgc2VsZWN0ZWQgdmFsdWVzJyk7XG4gICAgICAgICAgICAgIG1vZHVsZS5jcmVhdGUudXNlckxhYmVscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kdWxlLmNoZWNrLm1heFNlbGVjdGlvbnMoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZHVsZS5yZXN0b3JlLnZhbHVlcygpO1xuICAgICAgICAgICAgaWYobW9kdWxlLmlzLm11bHRpcGxlKCkpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdSZXN0b3JpbmcgcHJldmlvdXNseSBzZWxlY3RlZCB2YWx1ZXMgYW5kIGxhYmVscycpO1xuICAgICAgICAgICAgICBtb2R1bGUucmVzdG9yZS5sYWJlbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ1Jlc3RvcmluZyBwcmV2aW91c2x5IHNlbGVjdGVkIHZhbHVlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnRzIGNhbGxiYWNrcyBmcm9tIG9jY3VycmluZyBvbiBpbml0aWFsIGxvYWRcbiAgICAgICAgICAgIG1vZHVsZS5zZXQuaW5pdGlhbExvYWQoKTtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzLmFwaVNldHRpbmdzICYmIHNldHRpbmdzLnNhdmVSZW1vdGVEYXRhICYmIG1vZHVsZS5nZXQucmVtb3RlVmFsdWVzKCkpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnJlc3RvcmUucmVtb3RlVmFsdWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnNldC5zZWxlY3RlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5pbml0aWFsTG9hZCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3RlVmFsdWVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICB2YWx1ZXMgPSBtb2R1bGUuZ2V0LnJlbW90ZVZhbHVlcygpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBtb2R1bGUuZGVidWcoJ1JlY3JlYXRpbmcgc2VsZWN0ZWQgZnJvbSBzZXNzaW9uIGRhdGEnLCB2YWx1ZXMpO1xuICAgICAgICAgICAgaWYodmFsdWVzKSB7XG4gICAgICAgICAgICAgIGlmKCBtb2R1bGUuaXMuc2luZ2xlKCkgKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKHZhbHVlcywgZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQudGV4dChuYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkLmVhY2godmFsdWVzLCBmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLmFkZC5sYWJlbCh2YWx1ZSwgbmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDoge1xuICAgICAgICAgIHJlbW90ZURhdGE6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYod2luZG93LlN0b3JhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBtb2R1bGUuZXJyb3IoZXJyb3Iubm9TdG9yYWdlKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmFtZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIChuYW1lICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgID8gbmFtZVxuICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNhdmU6IHtcbiAgICAgICAgICBkZWZhdWx0czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2R1bGUuc2F2ZS5kZWZhdWx0VGV4dCgpO1xuICAgICAgICAgICAgbW9kdWxlLnNhdmUucGxhY2Vob2xkZXJUZXh0KCk7XG4gICAgICAgICAgICBtb2R1bGUuc2F2ZS5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgdmFsdWUgPSBtb2R1bGUuZ2V0LnZhbHVlKClcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdTYXZpbmcgZGVmYXVsdCB2YWx1ZSBhcycsIHZhbHVlKTtcbiAgICAgICAgICAgICRtb2R1bGUuZGF0YShtZXRhZGF0YS5kZWZhdWx0VmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmF1bHRUZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICB0ZXh0ID0gbW9kdWxlLmdldC50ZXh0KClcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdTYXZpbmcgZGVmYXVsdCB0ZXh0IGFzJywgdGV4dCk7XG4gICAgICAgICAgICAkbW9kdWxlLmRhdGEobWV0YWRhdGEuZGVmYXVsdFRleHQsIHRleHQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcGxhY2Vob2xkZXJUZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZihzZXR0aW5ncy5wbGFjZWhvbGRlciAhPT0gZmFsc2UgJiYgJHRleHQuaGFzQ2xhc3MoY2xhc3NOYW1lLnBsYWNlaG9sZGVyKSkge1xuICAgICAgICAgICAgICB0ZXh0ID0gbW9kdWxlLmdldC50ZXh0KCk7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdTYXZpbmcgcGxhY2Vob2xkZXIgdGV4dCBhcycsIHRleHQpO1xuICAgICAgICAgICAgICAkbW9kdWxlLmRhdGEobWV0YWRhdGEucGxhY2Vob2xkZXJUZXh0LCB0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW90ZURhdGE6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZih3aW5kb3cuU3RvcmFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5lcnJvcihlcnJvci5ub1N0b3JhZ2UpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnU2F2aW5nIHJlbW90ZSBkYXRhIHRvIHNlc3Npb24gc3RvcmFnZScsIHZhbHVlLCBuYW1lKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odmFsdWUsIG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYobW9kdWxlLmlzLm11bHRpcGxlKCkgJiYgc2V0dGluZ3MudXNlTGFiZWxzKSB7XG4gICAgICAgICAgICBtb2R1bGUucmVtb3ZlLmxhYmVscygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuYWN0aXZlSXRlbSgpO1xuICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5zZWxlY3RlZEl0ZW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbW9kdWxlLnNldC5wbGFjZWhvbGRlclRleHQoKTtcbiAgICAgICAgICBtb2R1bGUuY2xlYXJWYWx1ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsZWFyVmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG1vZHVsZS5zZXQudmFsdWUoJycpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNjcm9sbFBhZ2U6IGZ1bmN0aW9uKGRpcmVjdGlvbiwgJHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgIHZhclxuICAgICAgICAgICAgJGN1cnJlbnRJdGVtICA9ICRzZWxlY3RlZEl0ZW0gfHwgbW9kdWxlLmdldC5zZWxlY3RlZEl0ZW0oKSxcbiAgICAgICAgICAgICRtZW51ICAgICAgICAgPSAkY3VycmVudEl0ZW0uY2xvc2VzdChzZWxlY3Rvci5tZW51KSxcbiAgICAgICAgICAgIG1lbnVIZWlnaHQgICAgPSAkbWVudS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgY3VycmVudFNjcm9sbCA9ICRtZW51LnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgaXRlbUhlaWdodCAgICA9ICRpdGVtLmVxKDApLm91dGVySGVpZ2h0KCksXG4gICAgICAgICAgICBpdGVtc1BlclBhZ2UgID0gTWF0aC5mbG9vcihtZW51SGVpZ2h0IC8gaXRlbUhlaWdodCksXG4gICAgICAgICAgICBtYXhTY3JvbGwgICAgID0gJG1lbnUucHJvcCgnc2Nyb2xsSGVpZ2h0JyksXG4gICAgICAgICAgICBuZXdTY3JvbGwgICAgID0gKGRpcmVjdGlvbiA9PSAndXAnKVxuICAgICAgICAgICAgICA/IGN1cnJlbnRTY3JvbGwgLSAoaXRlbUhlaWdodCAqIGl0ZW1zUGVyUGFnZSlcbiAgICAgICAgICAgICAgOiBjdXJyZW50U2Nyb2xsICsgKGl0ZW1IZWlnaHQgKiBpdGVtc1BlclBhZ2UpLFxuICAgICAgICAgICAgJHNlbGVjdGFibGVJdGVtID0gJGl0ZW0ubm90KHNlbGVjdG9yLnVuc2VsZWN0YWJsZSksXG4gICAgICAgICAgICBpc1dpdGhpblJhbmdlLFxuICAgICAgICAgICAgJG5leHRTZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgICBlbGVtZW50SW5kZXhcbiAgICAgICAgICA7XG4gICAgICAgICAgZWxlbWVudEluZGV4ICAgICAgPSAoZGlyZWN0aW9uID09ICd1cCcpXG4gICAgICAgICAgICA/ICRzZWxlY3RhYmxlSXRlbS5pbmRleCgkY3VycmVudEl0ZW0pIC0gaXRlbXNQZXJQYWdlXG4gICAgICAgICAgICA6ICRzZWxlY3RhYmxlSXRlbS5pbmRleCgkY3VycmVudEl0ZW0pICsgaXRlbXNQZXJQYWdlXG4gICAgICAgICAgO1xuICAgICAgICAgIGlzV2l0aGluUmFuZ2UgPSAoZGlyZWN0aW9uID09ICd1cCcpXG4gICAgICAgICAgICA/IChlbGVtZW50SW5kZXggPj0gMClcbiAgICAgICAgICAgIDogKGVsZW1lbnRJbmRleCA8ICRzZWxlY3RhYmxlSXRlbS5sZW5ndGgpXG4gICAgICAgICAgO1xuICAgICAgICAgICRuZXh0U2VsZWN0ZWRJdGVtID0gKGlzV2l0aGluUmFuZ2UpXG4gICAgICAgICAgICA/ICRzZWxlY3RhYmxlSXRlbS5lcShlbGVtZW50SW5kZXgpXG4gICAgICAgICAgICA6IChkaXJlY3Rpb24gPT0gJ3VwJylcbiAgICAgICAgICAgICAgPyAkc2VsZWN0YWJsZUl0ZW0uZmlyc3QoKVxuICAgICAgICAgICAgICA6ICRzZWxlY3RhYmxlSXRlbS5sYXN0KClcbiAgICAgICAgICA7XG4gICAgICAgICAgaWYoJG5leHRTZWxlY3RlZEl0ZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdTY3JvbGxpbmcgcGFnZScsIGRpcmVjdGlvbiwgJG5leHRTZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgJGN1cnJlbnRJdGVtXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhjbGFzc05hbWUuc2VsZWN0ZWQpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAkbmV4dFNlbGVjdGVkSXRlbVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLnNlbGVjdGVkKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoc2V0dGluZ3Muc2VsZWN0T25LZXlkb3duICYmIG1vZHVsZS5pcy5zaW5nbGUoKSkge1xuICAgICAgICAgICAgICBtb2R1bGUuc2V0LnNlbGVjdGVkSXRlbSgkbmV4dFNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkbWVudVxuICAgICAgICAgICAgICAuc2Nyb2xsVG9wKG5ld1Njcm9sbClcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiB7XG4gICAgICAgICAgZmlsdGVyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGlzTXVsdGlwbGUgICAgICAgPSBtb2R1bGUuaXMubXVsdGlwbGUoKSxcbiAgICAgICAgICAgICAgaXNTZWFyY2ggICAgICAgICA9IG1vZHVsZS5pcy5zZWFyY2hTZWxlY3Rpb24oKSxcbiAgICAgICAgICAgICAgaXNTZWFyY2hNdWx0aXBsZSA9IChpc011bHRpcGxlICYmIGlzU2VhcmNoKSxcbiAgICAgICAgICAgICAgc2VhcmNoVmFsdWUgICAgICA9IChpc1NlYXJjaClcbiAgICAgICAgICAgICAgICA/IG1vZHVsZS5nZXQucXVlcnkoKVxuICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgIGhhc1NlYXJjaFZhbHVlICAgPSAodHlwZW9mIHNlYXJjaFZhbHVlID09PSAnc3RyaW5nJyAmJiBzZWFyY2hWYWx1ZS5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgICAgc2VhcmNoV2lkdGggICAgICA9IG1vZHVsZS5nZXQuc2VhcmNoV2lkdGgoKSxcbiAgICAgICAgICAgICAgdmFsdWVJc1NldCAgICAgICA9IHNlYXJjaFZhbHVlICE9PSAnJ1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoaXNNdWx0aXBsZSAmJiBoYXNTZWFyY2hWYWx1ZSkge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnQWRqdXN0aW5nIGlucHV0IHdpZHRoJywgc2VhcmNoV2lkdGgsIHNldHRpbmdzLmdseXBoV2lkdGgpO1xuICAgICAgICAgICAgICAkc2VhcmNoLmNzcygnd2lkdGgnLCBzZWFyY2hXaWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihoYXNTZWFyY2hWYWx1ZSB8fCAoaXNTZWFyY2hNdWx0aXBsZSAmJiB2YWx1ZUlzU2V0KSkge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnSGlkaW5nIHBsYWNlaG9sZGVyIHRleHQnKTtcbiAgICAgICAgICAgICAgJHRleHQuYWRkQ2xhc3MoY2xhc3NOYW1lLmZpbHRlcmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoIWlzTXVsdGlwbGUgfHwgKGlzU2VhcmNoTXVsdGlwbGUgJiYgIXZhbHVlSXNTZXQpKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdTaG93aW5nIHBsYWNlaG9sZGVyIHRleHQnKTtcbiAgICAgICAgICAgICAgJHRleHQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmZpbHRlcmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVtcHR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRtb2R1bGUuYWRkQ2xhc3MoY2xhc3NOYW1lLmVtcHR5KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvYWRpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJG1vZHVsZS5hZGRDbGFzcyhjbGFzc05hbWUubG9hZGluZyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbGFjZWhvbGRlclRleHQ6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0IHx8IG1vZHVsZS5nZXQucGxhY2Vob2xkZXJUZXh0KCk7XG4gICAgICAgICAgICBtb2R1bGUuZGVidWcoJ1NldHRpbmcgcGxhY2Vob2xkZXIgdGV4dCcsIHRleHQpO1xuICAgICAgICAgICAgbW9kdWxlLnNldC50ZXh0KHRleHQpO1xuICAgICAgICAgICAgJHRleHQuYWRkQ2xhc3MoY2xhc3NOYW1lLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRhYmJhYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKCBtb2R1bGUuaXMuc2VhcmNoU2VsZWN0aW9uKCkgKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnQWRkZWQgdGFiaW5kZXggdG8gc2VhcmNoYWJsZSBkcm9wZG93bicpO1xuICAgICAgICAgICAgICAkc2VhcmNoXG4gICAgICAgICAgICAgICAgLnZhbCgnJylcbiAgICAgICAgICAgICAgICAuYXR0cigndGFiaW5kZXgnLCAwKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICRtZW51XG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RhYmluZGV4JywgLTEpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ0FkZGVkIHRhYmluZGV4IHRvIGRyb3Bkb3duJyk7XG4gICAgICAgICAgICAgIGlmKCAkbW9kdWxlLmF0dHIoJ3RhYmluZGV4JykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCd0YWJpbmRleCcsIDApXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICRtZW51XG4gICAgICAgICAgICAgICAgICAuYXR0cigndGFiaW5kZXgnLCAtMSlcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGluaXRpYWxMb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdTZXR0aW5nIGluaXRpYWwgbG9hZCcpO1xuICAgICAgICAgICAgaW5pdGlhbExvYWQgPSB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYWN0aXZlSXRlbTogZnVuY3Rpb24oJGl0ZW0pIHtcbiAgICAgICAgICAgIGlmKCBzZXR0aW5ncy5hbGxvd0FkZGl0aW9ucyAmJiAkaXRlbS5maWx0ZXIoc2VsZWN0b3IuYWRkaXRpb24pLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAgICRpdGVtLmFkZENsYXNzKGNsYXNzTmFtZS5maWx0ZXJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgJGl0ZW0uYWRkQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYXJ0aWFsU2VhcmNoOiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgbGVuZ3RoID0gbW9kdWxlLmdldC5xdWVyeSgpLmxlbmd0aFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgJHNlYXJjaC52YWwoIHRleHQuc3Vic3RyKDAsIGxlbmd0aCkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uKCRpdGVtLCBmb3JjZVNjcm9sbCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGVkZ2VUb2xlcmFuY2UgPSA1LFxuICAgICAgICAgICAgICAkbWVudSxcbiAgICAgICAgICAgICAgaGFzQWN0aXZlLFxuICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICAgICAgICAgIGl0ZW1PZmZzZXQsXG4gICAgICAgICAgICAgIG1lbnVPZmZzZXQsXG4gICAgICAgICAgICAgIG1lbnVTY3JvbGwsXG4gICAgICAgICAgICAgIG1lbnVIZWlnaHQsXG4gICAgICAgICAgICAgIGFib3ZlUGFnZSxcbiAgICAgICAgICAgICAgYmVsb3dQYWdlXG4gICAgICAgICAgICA7XG5cbiAgICAgICAgICAgICRpdGVtICAgICAgID0gJGl0ZW0gfHwgbW9kdWxlLmdldC5zZWxlY3RlZEl0ZW0oKTtcbiAgICAgICAgICAgICRtZW51ICAgICAgID0gJGl0ZW0uY2xvc2VzdChzZWxlY3Rvci5tZW51KTtcbiAgICAgICAgICAgIGhhc0FjdGl2ZSAgID0gKCRpdGVtICYmICRpdGVtLmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgZm9yY2VTY3JvbGwgPSAoZm9yY2VTY3JvbGwgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgPyBmb3JjZVNjcm9sbFxuICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZigkaXRlbSAmJiAkbWVudS5sZW5ndGggPiAwICYmIGhhc0FjdGl2ZSkge1xuICAgICAgICAgICAgICBpdGVtT2Zmc2V0ID0gJGl0ZW0ucG9zaXRpb24oKS50b3A7XG5cbiAgICAgICAgICAgICAgJG1lbnUuYWRkQ2xhc3MoY2xhc3NOYW1lLmxvYWRpbmcpO1xuICAgICAgICAgICAgICBtZW51U2Nyb2xsID0gJG1lbnUuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgIG1lbnVPZmZzZXQgPSAkbWVudS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAgIGl0ZW1PZmZzZXQgPSAkaXRlbS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAgIG9mZnNldCAgICAgPSBtZW51U2Nyb2xsIC0gbWVudU9mZnNldCArIGl0ZW1PZmZzZXQ7XG4gICAgICAgICAgICAgIGlmKCFmb3JjZVNjcm9sbCkge1xuICAgICAgICAgICAgICAgIG1lbnVIZWlnaHQgPSAkbWVudS5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBiZWxvd1BhZ2UgID0gbWVudVNjcm9sbCArIG1lbnVIZWlnaHQgPCAob2Zmc2V0ICsgZWRnZVRvbGVyYW5jZSk7XG4gICAgICAgICAgICAgICAgYWJvdmVQYWdlICA9ICgob2Zmc2V0IC0gZWRnZVRvbGVyYW5jZSkgPCBtZW51U2Nyb2xsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ1Njcm9sbGluZyB0byBhY3RpdmUgaXRlbScsIG9mZnNldCk7XG4gICAgICAgICAgICAgIGlmKGZvcmNlU2Nyb2xsIHx8IGFib3ZlUGFnZSB8fCBiZWxvd1BhZ2UpIHtcbiAgICAgICAgICAgICAgICAkbWVudS5zY3JvbGxUb3Aob2Zmc2V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkbWVudS5yZW1vdmVDbGFzcyhjbGFzc05hbWUubG9hZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICBpZihzZXR0aW5ncy5hY3Rpb24gIT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgICAgIGlmKHNldHRpbmdzLmFjdGlvbiA9PSAnY29tYm8nKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdDaGFuZ2luZyBjb21ibyBidXR0b24gdGV4dCcsIHRleHQsICRjb21ibyk7XG4gICAgICAgICAgICAgICAgaWYoc2V0dGluZ3MucHJlc2VydmVIVE1MKSB7XG4gICAgICAgICAgICAgICAgICAkY29tYm8uaHRtbCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkY29tYm8udGV4dCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYodGV4dCAhPT0gbW9kdWxlLmdldC5wbGFjZWhvbGRlclRleHQoKSkge1xuICAgICAgICAgICAgICAgICAgJHRleHQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdDaGFuZ2luZyB0ZXh0JywgdGV4dCwgJHRleHQpO1xuICAgICAgICAgICAgICAgICR0ZXh0XG4gICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmZpbHRlcmVkKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy5wcmVzZXJ2ZUhUTUwpIHtcbiAgICAgICAgICAgICAgICAgICR0ZXh0Lmh0bWwodGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgJHRleHQudGV4dCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkSXRlbTogZnVuY3Rpb24oJGl0ZW0pIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICB2YWx1ZSAgICAgID0gbW9kdWxlLmdldC5jaG9pY2VWYWx1ZSgkaXRlbSksXG4gICAgICAgICAgICAgIHNlYXJjaFRleHQgPSBtb2R1bGUuZ2V0LmNob2ljZVRleHQoJGl0ZW0sIGZhbHNlKSxcbiAgICAgICAgICAgICAgdGV4dCAgICAgICA9IG1vZHVsZS5nZXQuY2hvaWNlVGV4dCgkaXRlbSwgdHJ1ZSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnU2V0dGluZyB1c2VyIHNlbGVjdGlvbiB0byBpdGVtJywgJGl0ZW0pO1xuICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5hY3RpdmVJdGVtKCk7XG4gICAgICAgICAgICBtb2R1bGUuc2V0LnBhcnRpYWxTZWFyY2goc2VhcmNoVGV4dCk7XG4gICAgICAgICAgICBtb2R1bGUuc2V0LmFjdGl2ZUl0ZW0oJGl0ZW0pO1xuICAgICAgICAgICAgbW9kdWxlLnNldC5zZWxlY3RlZCh2YWx1ZSwgJGl0ZW0pO1xuICAgICAgICAgICAgbW9kdWxlLnNldC50ZXh0KHRleHQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0ZWRMZXR0ZXI6IGZ1bmN0aW9uKGxldHRlcikge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICRzZWxlY3RlZEl0ZW0gICAgICAgICA9ICRpdGVtLmZpbHRlcignLicgKyBjbGFzc05hbWUuc2VsZWN0ZWQpLFxuICAgICAgICAgICAgICBhbHJlYWR5U2VsZWN0ZWRMZXR0ZXIgPSAkc2VsZWN0ZWRJdGVtLmxlbmd0aCA+IDAgJiYgbW9kdWxlLmhhcy5maXJzdExldHRlcigkc2VsZWN0ZWRJdGVtLCBsZXR0ZXIpLFxuICAgICAgICAgICAgICAkbmV4dFZhbHVlICAgICAgICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgICAgJG5leHRJdGVtXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAvLyBjaGVjayBuZXh0IG9mIHNhbWUgbGV0dGVyXG4gICAgICAgICAgICBpZihhbHJlYWR5U2VsZWN0ZWRMZXR0ZXIpIHtcbiAgICAgICAgICAgICAgJG5leHRJdGVtID0gJHNlbGVjdGVkSXRlbS5uZXh0QWxsKCRpdGVtKS5lcSgwKTtcbiAgICAgICAgICAgICAgaWYoIG1vZHVsZS5oYXMuZmlyc3RMZXR0ZXIoJG5leHRJdGVtLCBsZXR0ZXIpICkge1xuICAgICAgICAgICAgICAgICRuZXh0VmFsdWUgID0gJG5leHRJdGVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjaGVjayBhbGwgdmFsdWVzXG4gICAgICAgICAgICBpZighJG5leHRWYWx1ZSkge1xuICAgICAgICAgICAgICAkaXRlbVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICBpZihtb2R1bGUuaGFzLmZpcnN0TGV0dGVyKCQodGhpcyksIGxldHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgJG5leHRWYWx1ZSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgbmV4dCB2YWx1ZVxuICAgICAgICAgICAgaWYoJG5leHRWYWx1ZSkge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnU2Nyb2xsaW5nIHRvIG5leHQgdmFsdWUgd2l0aCBsZXR0ZXInLCBsZXR0ZXIpO1xuICAgICAgICAgICAgICBtb2R1bGUuc2V0LnNjcm9sbFBvc2l0aW9uKCRuZXh0VmFsdWUpO1xuICAgICAgICAgICAgICAkc2VsZWN0ZWRJdGVtLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICRuZXh0VmFsdWUuYWRkQ2xhc3MoY2xhc3NOYW1lLnNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgaWYoc2V0dGluZ3Muc2VsZWN0T25LZXlkb3duICYmIG1vZHVsZS5pcy5zaW5nbGUoKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2VsZWN0ZWRJdGVtKCRuZXh0VmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXJlY3Rpb246IGZ1bmN0aW9uKCRtZW51KSB7XG4gICAgICAgICAgICBpZihzZXR0aW5ncy5kaXJlY3Rpb24gPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICAgIC8vIHJlc2V0IHBvc2l0aW9uXG4gICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUudXB3YXJkKCk7XG5cbiAgICAgICAgICAgICAgaWYobW9kdWxlLmNhbi5vcGVuRG93bndhcmQoJG1lbnUpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS51cHdhcmQoJG1lbnUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQudXB3YXJkKCRtZW51KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZighbW9kdWxlLmlzLmxlZnR3YXJkKCRtZW51KSAmJiAhbW9kdWxlLmNhbi5vcGVuUmlnaHR3YXJkKCRtZW51KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQubGVmdHdhcmQoJG1lbnUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHNldHRpbmdzLmRpcmVjdGlvbiA9PSAndXB3YXJkJykge1xuICAgICAgICAgICAgICBtb2R1bGUuc2V0LnVwd2FyZCgkbWVudSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cHdhcmQ6IGZ1bmN0aW9uKCRjdXJyZW50TWVudSkge1xuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJGN1cnJlbnRNZW51IHx8ICRtb2R1bGU7XG4gICAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUudXB3YXJkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxlZnR3YXJkOiBmdW5jdGlvbigkY3VycmVudE1lbnUpIHtcbiAgICAgICAgICAgIHZhciAkZWxlbWVudCA9ICRjdXJyZW50TWVudSB8fCAkbWVudTtcbiAgICAgICAgICAgICRlbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZS5sZWZ0d2FyZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24odmFsdWUsIHRleHQsICRzZWxlY3RlZCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGVzY2FwZWRWYWx1ZSA9IG1vZHVsZS5lc2NhcGUudmFsdWUodmFsdWUpLFxuICAgICAgICAgICAgICBoYXNJbnB1dCAgICAgPSAoJGlucHV0Lmxlbmd0aCA+IDApLFxuICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSBtb2R1bGUuZ2V0LnZhbHVlcygpLFxuICAgICAgICAgICAgICBzdHJpbmdWYWx1ZSAgPSAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgICAgICAgICA6IHZhbHVlLFxuICAgICAgICAgICAgICBuZXdWYWx1ZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoaGFzSW5wdXQpIHtcbiAgICAgICAgICAgICAgaWYoIXNldHRpbmdzLmFsbG93UmVzZWxlY3Rpb24gJiYgc3RyaW5nVmFsdWUgPT0gY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1NraXBwaW5nIHZhbHVlIHVwZGF0ZSBhbHJlYWR5IHNhbWUgdmFsdWUnLCB2YWx1ZSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZighbW9kdWxlLmlzLmluaXRpYWxMb2FkKCkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiggbW9kdWxlLmlzLnNpbmdsZSgpICYmIG1vZHVsZS5oYXMuc2VsZWN0SW5wdXQoKSAmJiBtb2R1bGUuY2FuLmV4dGVuZFNlbGVjdCgpICkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnQWRkaW5nIHVzZXIgb3B0aW9uJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5hZGQub3B0aW9uVmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnVXBkYXRpbmcgaW5wdXQgdmFsdWUnLCBlc2NhcGVkVmFsdWUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgIGludGVybmFsQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgJGlucHV0XG4gICAgICAgICAgICAgICAgLnZhbChlc2NhcGVkVmFsdWUpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgaWYoc2V0dGluZ3MuZmlyZU9uSW5pdCA9PT0gZmFsc2UgJiYgbW9kdWxlLmlzLmluaXRpYWxMb2FkKCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ0lucHV0IG5hdGl2ZSBjaGFuZ2UgZXZlbnQgaWdub3JlZCBvbiBpbml0aWFsIGxvYWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUudHJpZ2dlci5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnRlcm5hbENoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdTdG9yaW5nIHZhbHVlIGluIG1ldGFkYXRhJywgZXNjYXBlZFZhbHVlLCAkaW5wdXQpO1xuICAgICAgICAgICAgICBpZihlc2NhcGVkVmFsdWUgIT09IGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICRtb2R1bGUuZGF0YShtZXRhZGF0YS52YWx1ZSwgc3RyaW5nVmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihtb2R1bGUuaXMuc2luZ2xlKCkgJiYgc2V0dGluZ3MuY2xlYXJhYmxlKSB7XG4gICAgICAgICAgICAgIC8vIHRyZWF0IHVuZGVmaW5lZCBvciAnJyBhcyBlbXB0eVxuICAgICAgICAgICAgICBpZighZXNjYXBlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5jbGVhcmFibGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuc2V0LmNsZWFyYWJsZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzZXR0aW5ncy5maXJlT25Jbml0ID09PSBmYWxzZSAmJiBtb2R1bGUuaXMuaW5pdGlhbExvYWQoKSkge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnTm8gY2FsbGJhY2sgb24gaW5pdGlhbCBsb2FkJywgc2V0dGluZ3Mub25DaGFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHNldHRpbmdzLm9uQ2hhbmdlLmNhbGwoZWxlbWVudCwgdmFsdWUsIHRleHQsICRzZWxlY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhY3RpdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG11bHRpcGxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRtb2R1bGUuYWRkQ2xhc3MoY2xhc3NOYW1lLm11bHRpcGxlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJG1vZHVsZS5hZGRDbGFzcyhjbGFzc05hbWUudmlzaWJsZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleGFjdGx5OiBmdW5jdGlvbih2YWx1ZSwgJHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdTZXR0aW5nIHNlbGVjdGVkIHRvIGV4YWN0IHZhbHVlcycpO1xuICAgICAgICAgICAgbW9kdWxlLmNsZWFyKCk7XG4gICAgICAgICAgICBtb2R1bGUuc2V0LnNlbGVjdGVkKHZhbHVlLCAkc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkOiBmdW5jdGlvbih2YWx1ZSwgJHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGlzTXVsdGlwbGUgPSBtb2R1bGUuaXMubXVsdGlwbGUoKSxcbiAgICAgICAgICAgICAgJHVzZXJTZWxlY3RlZEl0ZW1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgICRzZWxlY3RlZEl0ZW0gPSAoc2V0dGluZ3MuYWxsb3dBZGRpdGlvbnMpXG4gICAgICAgICAgICAgID8gJHNlbGVjdGVkSXRlbSB8fCBtb2R1bGUuZ2V0Lml0ZW1XaXRoQWRkaXRpb25zKHZhbHVlKVxuICAgICAgICAgICAgICA6ICRzZWxlY3RlZEl0ZW0gfHwgbW9kdWxlLmdldC5pdGVtKHZhbHVlKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoISRzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdTZXR0aW5nIHNlbGVjdGVkIG1lbnUgaXRlbSB0bycsICRzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgaWYobW9kdWxlLmlzLm11bHRpcGxlKCkpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5zZWFyY2hXaWR0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobW9kdWxlLmlzLnNpbmdsZSgpKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuYWN0aXZlSXRlbSgpO1xuICAgICAgICAgICAgICBtb2R1bGUucmVtb3ZlLnNlbGVjdGVkSXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihzZXR0aW5ncy51c2VMYWJlbHMpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5zZWxlY3RlZEl0ZW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNlbGVjdCBlYWNoIGl0ZW1cbiAgICAgICAgICAgICRzZWxlY3RlZEl0ZW1cbiAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgICAkc2VsZWN0ZWQgICAgICA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFRleHQgICA9IG1vZHVsZS5nZXQuY2hvaWNlVGV4dCgkc2VsZWN0ZWQpLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZSAgPSBtb2R1bGUuZ2V0LmNob2ljZVZhbHVlKCRzZWxlY3RlZCwgc2VsZWN0ZWRUZXh0KSxcblxuICAgICAgICAgICAgICAgICAgaXNGaWx0ZXJlZCAgICAgPSAkc2VsZWN0ZWQuaGFzQ2xhc3MoY2xhc3NOYW1lLmZpbHRlcmVkKSxcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlICAgICAgID0gJHNlbGVjdGVkLmhhc0NsYXNzKGNsYXNzTmFtZS5hY3RpdmUpLFxuICAgICAgICAgICAgICAgICAgaXNVc2VyVmFsdWUgICAgPSAkc2VsZWN0ZWQuaGFzQ2xhc3MoY2xhc3NOYW1lLmFkZGl0aW9uKSxcbiAgICAgICAgICAgICAgICAgIHNob3VsZEFuaW1hdGUgID0gKGlzTXVsdGlwbGUgJiYgJHNlbGVjdGVkSXRlbS5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgaWYoaXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgaWYoIWlzQWN0aXZlIHx8IGlzVXNlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLmFwaVNldHRpbmdzICYmIHNldHRpbmdzLnNhdmVSZW1vdGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnNhdmUucmVtb3RlRGF0YShzZWxlY3RlZFRleHQsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHNldHRpbmdzLnVzZUxhYmVscykge1xuICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5hZGQubGFiZWwoc2VsZWN0ZWRWYWx1ZSwgc2VsZWN0ZWRUZXh0LCBzaG91bGRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuYWRkLnZhbHVlKHNlbGVjdGVkVmFsdWUsIHNlbGVjdGVkVGV4dCwgJHNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuc2V0LmFjdGl2ZUl0ZW0oJHNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZmlsdGVyQWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnNlbGVjdC5uZXh0QXZhaWxhYmxlKCRzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5hZGQudmFsdWUoc2VsZWN0ZWRWYWx1ZSwgc2VsZWN0ZWRUZXh0LCAkc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQudGV4dChtb2R1bGUuYWRkLnZhcmlhYmxlcyhtZXNzYWdlLmNvdW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnNldC5hY3RpdmVJdGVtKCRzZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIWlzRmlsdGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdTZWxlY3RlZCBhY3RpdmUgdmFsdWUsIHJlbW92aW5nIGxhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuc2VsZWN0ZWQoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYoc2V0dGluZ3MuYXBpU2V0dGluZ3MgJiYgc2V0dGluZ3Muc2F2ZVJlbW90ZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnNhdmUucmVtb3RlRGF0YShzZWxlY3RlZFRleHQsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbW9kdWxlLnNldC50ZXh0KHNlbGVjdGVkVGV4dCk7XG4gICAgICAgICAgICAgICAgICBtb2R1bGUuc2V0LnZhbHVlKHNlbGVjdGVkVmFsdWUsIHNlbGVjdGVkVGV4dCwgJHNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICAgICRzZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGVhcmFibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGljb24uYWRkQ2xhc3MoY2xhc3NOYW1lLmNsZWFyKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZDoge1xuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbih2YWx1ZSwgdGV4dCwgc2hvdWxkQW5pbWF0ZSkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICRuZXh0ICA9IG1vZHVsZS5pcy5zZWFyY2hTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICAgID8gJHNlYXJjaFxuICAgICAgICAgICAgICAgIDogJHRleHQsXG4gICAgICAgICAgICAgIGVzY2FwZWRWYWx1ZSA9IG1vZHVsZS5lc2NhcGUudmFsdWUodmFsdWUpLFxuICAgICAgICAgICAgICAkbGFiZWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzLmlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgICAgZXNjYXBlZFZhbHVlID0gZXNjYXBlZFZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkbGFiZWwgPSAgJCgnPGEgLz4nKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLmxhYmVsKVxuICAgICAgICAgICAgICAuYXR0cignZGF0YS0nICsgbWV0YWRhdGEudmFsdWUsIGVzY2FwZWRWYWx1ZSlcbiAgICAgICAgICAgICAgLmh0bWwodGVtcGxhdGVzLmxhYmVsKGVzY2FwZWRWYWx1ZSwgdGV4dCkpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAkbGFiZWwgPSBzZXR0aW5ncy5vbkxhYmVsQ3JlYXRlLmNhbGwoJGxhYmVsLCBlc2NhcGVkVmFsdWUsIHRleHQpO1xuXG4gICAgICAgICAgICBpZihtb2R1bGUuaGFzLmxhYmVsKHZhbHVlKSkge1xuICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ1VzZXIgc2VsZWN0aW9uIGFscmVhZHkgZXhpc3RzLCBza2lwcGluZycsIGVzY2FwZWRWYWx1ZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHNldHRpbmdzLmxhYmVsLnZhcmlhdGlvbikge1xuICAgICAgICAgICAgICAkbGFiZWwuYWRkQ2xhc3Moc2V0dGluZ3MubGFiZWwudmFyaWF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHNob3VsZEFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdBbmltYXRpbmcgaW4gbGFiZWwnLCAkbGFiZWwpO1xuICAgICAgICAgICAgICAkbGFiZWxcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLmhpZGRlbilcbiAgICAgICAgICAgICAgICAuaW5zZXJ0QmVmb3JlKCRuZXh0KVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKHNldHRpbmdzLmxhYmVsLnRyYW5zaXRpb24sIHNldHRpbmdzLmxhYmVsLmR1cmF0aW9uKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdBZGRpbmcgc2VsZWN0aW9uIGxhYmVsJywgJGxhYmVsKTtcbiAgICAgICAgICAgICAgJGxhYmVsXG4gICAgICAgICAgICAgICAgLmluc2VydEJlZm9yZSgkbmV4dClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICRtZXNzYWdlID0gJG1lbnUuY2hpbGRyZW4oc2VsZWN0b3IubWVzc2FnZSksXG4gICAgICAgICAgICAgIGh0bWwgICAgID0gc2V0dGluZ3MudGVtcGxhdGVzLm1lc3NhZ2UobW9kdWxlLmFkZC52YXJpYWJsZXMobWVzc2FnZSkpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZigkbWVzc2FnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICRtZXNzYWdlXG4gICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICRtZXNzYWdlID0gJCgnPGRpdi8+JylcbiAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJG1lbnUpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlvblZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGVzY2FwZWRWYWx1ZSA9IG1vZHVsZS5lc2NhcGUudmFsdWUodmFsdWUpLFxuICAgICAgICAgICAgICAkb3B0aW9uICAgICAgPSAkaW5wdXQuZmluZCgnb3B0aW9uW3ZhbHVlPVwiJyArIG1vZHVsZS5lc2NhcGUuc3RyaW5nKGVzY2FwZWRWYWx1ZSkgKyAnXCJdJyksXG4gICAgICAgICAgICAgIGhhc09wdGlvbiAgICA9ICgkb3B0aW9uLmxlbmd0aCA+IDApXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZihoYXNPcHRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGVtcG9yYXJpbHkgZGlzY29ubmVjdCBvYnNlcnZlclxuICAgICAgICAgICAgbW9kdWxlLmRpc2Nvbm5lY3Quc2VsZWN0T2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgIGlmKCBtb2R1bGUuaXMuc2luZ2xlKCkgKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdSZW1vdmluZyBwcmV2aW91cyB1c2VyIGFkZGl0aW9uJyk7XG4gICAgICAgICAgICAgICRpbnB1dC5maW5kKCdvcHRpb24uJyArIGNsYXNzTmFtZS5hZGRpdGlvbikucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCc8b3B0aW9uLz4nKVxuICAgICAgICAgICAgICAucHJvcCgndmFsdWUnLCBlc2NhcGVkVmFsdWUpXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUuYWRkaXRpb24pXG4gICAgICAgICAgICAgIC5odG1sKHZhbHVlKVxuICAgICAgICAgICAgICAuYXBwZW5kVG8oJGlucHV0KVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0FkZGluZyB1c2VyIGFkZGl0aW9uIGFzIGFuIDxvcHRpb24+JywgdmFsdWUpO1xuICAgICAgICAgICAgbW9kdWxlLm9ic2VydmUuc2VsZWN0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyU3VnZ2VzdGlvbjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAkYWRkaXRpb24gICAgICAgICA9ICRtZW51LmNoaWxkcmVuKHNlbGVjdG9yLmFkZGl0aW9uKSxcbiAgICAgICAgICAgICAgJGV4aXN0aW5nSXRlbSAgICAgPSBtb2R1bGUuZ2V0Lml0ZW0odmFsdWUpLFxuICAgICAgICAgICAgICBhbHJlYWR5SGFzVmFsdWUgICA9ICRleGlzdGluZ0l0ZW0gJiYgJGV4aXN0aW5nSXRlbS5ub3Qoc2VsZWN0b3IuYWRkaXRpb24pLmxlbmd0aCxcbiAgICAgICAgICAgICAgaGFzVXNlclN1Z2dlc3Rpb24gPSAkYWRkaXRpb24ubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgaHRtbFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MudXNlTGFiZWxzICYmIG1vZHVsZS5oYXMubWF4U2VsZWN0aW9ucygpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHZhbHVlID09PSAnJyB8fCBhbHJlYWR5SGFzVmFsdWUpIHtcbiAgICAgICAgICAgICAgJGFkZGl0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihoYXNVc2VyU3VnZ2VzdGlvbikge1xuICAgICAgICAgICAgICAkYWRkaXRpb25cbiAgICAgICAgICAgICAgICAuZGF0YShtZXRhZGF0YS52YWx1ZSwgdmFsdWUpXG4gICAgICAgICAgICAgICAgLmRhdGEobWV0YWRhdGEudGV4dCwgdmFsdWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtJyArIG1ldGFkYXRhLnZhbHVlLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS0nICsgbWV0YWRhdGEudGV4dCwgdmFsdWUpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5maWx0ZXJlZClcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICBpZighc2V0dGluZ3MuaGlkZUFkZGl0aW9ucykge1xuICAgICAgICAgICAgICAgIGh0bWwgPSBzZXR0aW5ncy50ZW1wbGF0ZXMuYWRkaXRpb24oIG1vZHVsZS5hZGQudmFyaWFibGVzKG1lc3NhZ2UuYWRkUmVzdWx0LCB2YWx1ZSkgKTtcbiAgICAgICAgICAgICAgICAkYWRkaXRpb25cbiAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdSZXBsYWNpbmcgdXNlciBzdWdnZXN0aW9uIHdpdGggbmV3IHZhbHVlJywgJGFkZGl0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAkYWRkaXRpb24gPSBtb2R1bGUuY3JlYXRlLnVzZXJDaG9pY2UodmFsdWUpO1xuICAgICAgICAgICAgICAkYWRkaXRpb25cbiAgICAgICAgICAgICAgICAucHJlcGVuZFRvKCRtZW51KVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdBZGRpbmcgaXRlbSBjaG9pY2UgdG8gbWVudSBjb3JyZXNwb25kaW5nIHdpdGggdXNlciBjaG9pY2UgYWRkaXRpb24nLCAkYWRkaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIXNldHRpbmdzLmhpZGVBZGRpdGlvbnMgfHwgbW9kdWxlLmlzLmFsbEZpbHRlcmVkKCkpIHtcbiAgICAgICAgICAgICAgJGFkZGl0aW9uXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhjbGFzc05hbWUuc2VsZWN0ZWQpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZHVsZS5yZWZyZXNoSXRlbXMoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhcmlhYmxlczogZnVuY3Rpb24obWVzc2FnZSwgdGVybSkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGhhc0NvdW50ICAgID0gKG1lc3NhZ2Uuc2VhcmNoKCd7Y291bnR9JykgIT09IC0xKSxcbiAgICAgICAgICAgICAgaGFzTWF4Q291bnQgPSAobWVzc2FnZS5zZWFyY2goJ3ttYXhDb3VudH0nKSAhPT0gLTEpLFxuICAgICAgICAgICAgICBoYXNUZXJtICAgICA9IChtZXNzYWdlLnNlYXJjaCgne3Rlcm19JykgIT09IC0xKSxcbiAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdBZGRpbmcgdGVtcGxhdGVkIHZhcmlhYmxlcyB0byBtZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgICAgICAgICBpZihoYXNDb3VudCkge1xuICAgICAgICAgICAgICBjb3VudCAgPSBtb2R1bGUuZ2V0LnNlbGVjdGlvbkNvdW50KCk7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ3tjb3VudH0nLCBjb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihoYXNNYXhDb3VudCkge1xuICAgICAgICAgICAgICBjb3VudCAgPSBtb2R1bGUuZ2V0LnNlbGVjdGlvbkNvdW50KCk7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ3ttYXhDb3VudH0nLCBzZXR0aW5ncy5tYXhTZWxlY3Rpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGhhc1Rlcm0pIHtcbiAgICAgICAgICAgICAgcXVlcnkgICA9IHRlcm0gfHwgbW9kdWxlLmdldC5xdWVyeSgpO1xuICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCd7dGVybX0nLCBxdWVyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihhZGRlZFZhbHVlLCBhZGRlZFRleHQsICRzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSBtb2R1bGUuZ2V0LnZhbHVlcygpLFxuICAgICAgICAgICAgICBuZXdWYWx1ZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYobW9kdWxlLmhhcy52YWx1ZShhZGRlZFZhbHVlKSkge1xuICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ1ZhbHVlIGFscmVhZHkgc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoYWRkZWRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdDYW5ub3Qgc2VsZWN0IGJsYW5rIHZhbHVlcyBmcm9tIG11bHRpc2VsZWN0Jyk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV4dGVuZCBjdXJyZW50IGFycmF5XG4gICAgICAgICAgICBpZigkLmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5jb25jYXQoW2FkZGVkVmFsdWVdKTtcbiAgICAgICAgICAgICAgbmV3VmFsdWUgPSBtb2R1bGUuZ2V0LnVuaXF1ZUFycmF5KG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBuZXdWYWx1ZSA9IFthZGRlZFZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFkZCB2YWx1ZXNcbiAgICAgICAgICAgIGlmKCBtb2R1bGUuaGFzLnNlbGVjdElucHV0KCkgKSB7XG4gICAgICAgICAgICAgIGlmKG1vZHVsZS5jYW4uZXh0ZW5kU2VsZWN0KCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuZGVidWcoJ0FkZGluZyB2YWx1ZSB0byBzZWxlY3QnLCBhZGRlZFZhbHVlLCBuZXdWYWx1ZSwgJGlucHV0KTtcbiAgICAgICAgICAgICAgICBtb2R1bGUuYWRkLm9wdGlvblZhbHVlKGFkZGVkVmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZS5qb2luKHNldHRpbmdzLmRlbGltaXRlcik7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnU2V0dGluZyBoaWRkZW4gaW5wdXQgdG8gZGVsaW1pdGVkIHZhbHVlJywgbmV3VmFsdWUsICRpbnB1dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHNldHRpbmdzLmZpcmVPbkluaXQgPT09IGZhbHNlICYmIG1vZHVsZS5pcy5pbml0aWFsTG9hZCgpKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdTa2lwcGluZyBvbmFkZCBjYWxsYmFjayBvbiBpbml0aWFsIGxvYWQnLCBzZXR0aW5ncy5vbkFkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0dGluZ3Mub25BZGQuY2FsbChlbGVtZW50LCBhZGRlZFZhbHVlLCBhZGRlZFRleHQsICRzZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kdWxlLnNldC52YWx1ZShuZXdWYWx1ZSwgYWRkZWRWYWx1ZSwgYWRkZWRUZXh0LCAkc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgIG1vZHVsZS5jaGVjay5tYXhTZWxlY3Rpb25zKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IHtcbiAgICAgICAgICBhY3RpdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJG1vZHVsZS5yZW1vdmVDbGFzcyhjbGFzc05hbWUuYWN0aXZlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGl2ZUxhYmVsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRtb2R1bGUuZmluZChzZWxlY3Rvci5sYWJlbCkucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbW9kdWxlLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5lbXB0eSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsb2FkaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRtb2R1bGUucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmxvYWRpbmcpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5pdGlhbExvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5pdGlhbExvYWQgPSBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwd2FyZDogZnVuY3Rpb24oJGN1cnJlbnRNZW51KSB7XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkY3VycmVudE1lbnUgfHwgJG1vZHVsZTtcbiAgICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZS51cHdhcmQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVmdHdhcmQ6IGZ1bmN0aW9uKCRjdXJyZW50TWVudSkge1xuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJGN1cnJlbnRNZW51IHx8ICRtZW51O1xuICAgICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmxlZnR3YXJkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJG1vZHVsZS5yZW1vdmVDbGFzcyhjbGFzc05hbWUudmlzaWJsZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhY3RpdmVJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRpdGVtLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5hY3RpdmUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmlsdGVyZWRJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzLnVzZUxhYmVscyAmJiBtb2R1bGUuaGFzLm1heFNlbGVjdGlvbnMoKSApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2V0dGluZ3MudXNlTGFiZWxzICYmIG1vZHVsZS5pcy5tdWx0aXBsZSgpKSB7XG4gICAgICAgICAgICAgICRpdGVtLm5vdCgnLicgKyBjbGFzc05hbWUuYWN0aXZlKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUuZmlsdGVyZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICRpdGVtLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5maWx0ZXJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2R1bGUucmVtb3ZlLmVtcHR5KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25WYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICBlc2NhcGVkVmFsdWUgPSBtb2R1bGUuZXNjYXBlLnZhbHVlKHZhbHVlKSxcbiAgICAgICAgICAgICAgJG9wdGlvbiAgICAgID0gJGlucHV0LmZpbmQoJ29wdGlvblt2YWx1ZT1cIicgKyBtb2R1bGUuZXNjYXBlLnN0cmluZyhlc2NhcGVkVmFsdWUpICsgJ1wiXScpLFxuICAgICAgICAgICAgICBoYXNPcHRpb24gICAgPSAoJG9wdGlvbi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoIWhhc09wdGlvbiB8fCAhJG9wdGlvbi5oYXNDbGFzcyhjbGFzc05hbWUuYWRkaXRpb24pKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRlbXBvcmFyaWx5IGRpc2Nvbm5lY3Qgb2JzZXJ2ZXJcbiAgICAgICAgICAgIGlmKHNlbGVjdE9ic2VydmVyKSB7XG4gICAgICAgICAgICAgIHNlbGVjdE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1RlbXBvcmFyaWx5IGRpc2Nvbm5lY3RpbmcgbXV0YXRpb24gb2JzZXJ2ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnUmVtb3ZpbmcgdXNlciBhZGRpdGlvbiBhcyBhbiA8b3B0aW9uPicsIGVzY2FwZWRWYWx1ZSk7XG4gICAgICAgICAgICBpZihzZWxlY3RPYnNlcnZlcikge1xuICAgICAgICAgICAgICBzZWxlY3RPYnNlcnZlci5vYnNlcnZlKCRpbnB1dFswXSwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdCA6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZSAgIDogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJG1lbnUuY2hpbGRyZW4oc2VsZWN0b3IubWVzc2FnZSkucmVtb3ZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWFyY2hXaWR0aDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2VhcmNoLmNzcygnd2lkdGgnLCAnJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWFyY2hUZXJtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdDbGVhcmVkIHNlYXJjaCB0ZXJtJyk7XG4gICAgICAgICAgICAkc2VhcmNoLnZhbCgnJyk7XG4gICAgICAgICAgICBtb2R1bGUuc2V0LmZpbHRlcmVkKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyQWRkaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGl0ZW0uZmlsdGVyKHNlbGVjdG9yLmFkZGl0aW9uKS5yZW1vdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkOiBmdW5jdGlvbih2YWx1ZSwgJHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgJHNlbGVjdGVkSXRlbSA9IChzZXR0aW5ncy5hbGxvd0FkZGl0aW9ucylcbiAgICAgICAgICAgICAgPyAkc2VsZWN0ZWRJdGVtIHx8IG1vZHVsZS5nZXQuaXRlbVdpdGhBZGRpdGlvbnModmFsdWUpXG4gICAgICAgICAgICAgIDogJHNlbGVjdGVkSXRlbSB8fCBtb2R1bGUuZ2V0Lml0ZW0odmFsdWUpXG4gICAgICAgICAgICA7XG5cbiAgICAgICAgICAgIGlmKCEkc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNlbGVjdGVkSXRlbVxuICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAgICRzZWxlY3RlZCAgICAgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXh0ICA9IG1vZHVsZS5nZXQuY2hvaWNlVGV4dCgkc2VsZWN0ZWQpLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IG1vZHVsZS5nZXQuY2hvaWNlVmFsdWUoJHNlbGVjdGVkLCBzZWxlY3RlZFRleHQpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIGlmKG1vZHVsZS5pcy5tdWx0aXBsZSgpKSB7XG4gICAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy51c2VMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS52YWx1ZShzZWxlY3RlZFZhbHVlLCBzZWxlY3RlZFRleHQsICRzZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUubGFiZWwoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS52YWx1ZShzZWxlY3RlZFZhbHVlLCBzZWxlY3RlZFRleHQsICRzZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKG1vZHVsZS5nZXQuc2VsZWN0aW9uQ291bnQoKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5zZXQucGxhY2Vob2xkZXJUZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnNldC50ZXh0KG1vZHVsZS5hZGQudmFyaWFibGVzKG1lc3NhZ2UuY291bnQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUudmFsdWUoc2VsZWN0ZWRWYWx1ZSwgc2VsZWN0ZWRUZXh0LCAkc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhjbGFzc05hbWUuZmlsdGVyZWQpXG4gICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmFjdGl2ZSlcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgaWYoc2V0dGluZ3MudXNlTGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgICAkc2VsZWN0ZWQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLnNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJGl0ZW0ucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLnNlbGVjdGVkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihyZW1vdmVkVmFsdWUsIHJlbW92ZWRUZXh0LCAkcmVtb3ZlZEl0ZW0pIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICB2YWx1ZXMgPSBtb2R1bGUuZ2V0LnZhbHVlcygpLFxuICAgICAgICAgICAgICBuZXdWYWx1ZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoIG1vZHVsZS5oYXMuc2VsZWN0SW5wdXQoKSApIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0lucHV0IGlzIDxzZWxlY3Q+IHJlbW92aW5nIHNlbGVjdGVkIG9wdGlvbicsIHJlbW92ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgIG5ld1ZhbHVlID0gbW9kdWxlLnJlbW92ZS5hcnJheVZhbHVlKHJlbW92ZWRWYWx1ZSwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5vcHRpb25WYWx1ZShyZW1vdmVkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdSZW1vdmluZyBmcm9tIGRlbGltaXRlZCB2YWx1ZXMnLCByZW1vdmVkVmFsdWUpO1xuICAgICAgICAgICAgICBuZXdWYWx1ZSA9IG1vZHVsZS5yZW1vdmUuYXJyYXlWYWx1ZShyZW1vdmVkVmFsdWUsIHZhbHVlcyk7XG4gICAgICAgICAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUuam9pbihzZXR0aW5ncy5kZWxpbWl0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2V0dGluZ3MuZmlyZU9uSW5pdCA9PT0gZmFsc2UgJiYgbW9kdWxlLmlzLmluaXRpYWxMb2FkKCkpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ05vIGNhbGxiYWNrIG9uIGluaXRpYWwgbG9hZCcsIHNldHRpbmdzLm9uUmVtb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzZXR0aW5ncy5vblJlbW92ZS5jYWxsKGVsZW1lbnQsIHJlbW92ZWRWYWx1ZSwgcmVtb3ZlZFRleHQsICRyZW1vdmVkSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2R1bGUuc2V0LnZhbHVlKG5ld1ZhbHVlLCByZW1vdmVkVGV4dCwgJHJlbW92ZWRJdGVtKTtcbiAgICAgICAgICAgIG1vZHVsZS5jaGVjay5tYXhTZWxlY3Rpb25zKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcnJheVZhbHVlOiBmdW5jdGlvbihyZW1vdmVkVmFsdWUsIHZhbHVlcykge1xuICAgICAgICAgICAgaWYoICEkLmlzQXJyYXkodmFsdWVzKSApIHtcbiAgICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZXMgPSAkLmdyZXAodmFsdWVzLCBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICAgIHJldHVybiAocmVtb3ZlZFZhbHVlICE9IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1JlbW92ZWQgdmFsdWUgZnJvbSBkZWxpbWl0ZWQgc3RyaW5nJywgcmVtb3ZlZFZhbHVlLCB2YWx1ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbih2YWx1ZSwgc2hvdWxkQW5pbWF0ZSkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICRsYWJlbHMgICAgICAgPSAkbW9kdWxlLmZpbmQoc2VsZWN0b3IubGFiZWwpLFxuICAgICAgICAgICAgICAkcmVtb3ZlZExhYmVsID0gJGxhYmVscy5maWx0ZXIoJ1tkYXRhLScgKyBtZXRhZGF0YS52YWx1ZSArICc9XCInICsgbW9kdWxlLmVzY2FwZS5zdHJpbmcodmFsdWUpICsnXCJdJylcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdSZW1vdmluZyBsYWJlbCcsICRyZW1vdmVkTGFiZWwpO1xuICAgICAgICAgICAgJHJlbW92ZWRMYWJlbC5yZW1vdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFjdGl2ZUxhYmVsczogZnVuY3Rpb24oJGFjdGl2ZUxhYmVscykge1xuICAgICAgICAgICAgJGFjdGl2ZUxhYmVscyA9ICRhY3RpdmVMYWJlbHMgfHwgJG1vZHVsZS5maW5kKHNlbGVjdG9yLmxhYmVsKS5maWx0ZXIoJy4nICsgY2xhc3NOYW1lLmFjdGl2ZSk7XG4gICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnUmVtb3ZpbmcgYWN0aXZlIGxhYmVsIHNlbGVjdGlvbnMnLCAkYWN0aXZlTGFiZWxzKTtcbiAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUubGFiZWxzKCRhY3RpdmVMYWJlbHMpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWxzOiBmdW5jdGlvbigkbGFiZWxzKSB7XG4gICAgICAgICAgICAkbGFiZWxzID0gJGxhYmVscyB8fCAkbW9kdWxlLmZpbmQoc2VsZWN0b3IubGFiZWwpO1xuICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1JlbW92aW5nIGxhYmVscycsICRsYWJlbHMpO1xuICAgICAgICAgICAgJGxhYmVsc1xuICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICAgJGxhYmVsICAgICAgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgdmFsdWUgICAgICAgPSAkbGFiZWwuZGF0YShtZXRhZGF0YS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICBzdHJpbmdWYWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICA/IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGlzVXNlclZhbHVlID0gbW9kdWxlLmlzLnVzZXJWYWx1ZShzdHJpbmdWYWx1ZSlcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgaWYoc2V0dGluZ3Mub25MYWJlbFJlbW92ZS5jYWxsKCRsYWJlbCwgdmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdMYWJlbCByZW1vdmUgY2FsbGJhY2sgY2FuY2VsbGVkIHJlbW92YWwnKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5tZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgaWYoaXNVc2VyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUudmFsdWUoc3RyaW5nVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5sYWJlbChzdHJpbmdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0ZWQgd2lsbCBhbHNvIHJlbW92ZSBsYWJlbFxuICAgICAgICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5zZWxlY3RlZChzdHJpbmdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFiYmFibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYoIG1vZHVsZS5pcy5zZWFyY2hTZWxlY3Rpb24oKSApIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdTZWFyY2hhYmxlIGRyb3Bkb3duIGluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICAgICRzZWFyY2hcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cigndGFiaW5kZXgnKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICRtZW51XG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3RhYmluZGV4JylcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnU2ltcGxlIHNlbGVjdGlvbiBkcm9wZG93biBpbml0aWFsaXplZCcpO1xuICAgICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3RhYmluZGV4JylcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAkbWVudVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCd0YWJpbmRleCcpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsZWFyYWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkaWNvbi5yZW1vdmVDbGFzcyhjbGFzc05hbWUuY2xlYXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoYXM6IHtcbiAgICAgICAgICBtZW51U2VhcmNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAobW9kdWxlLmhhcy5zZWFyY2goKSAmJiAkc2VhcmNoLmNsb3Nlc3QoJG1lbnUpLmxlbmd0aCA+IDApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VhcmNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAoJHNlYXJjaC5sZW5ndGggPiAwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAoJHNpemVyLmxlbmd0aCA+IDApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0SW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICggJGlucHV0LmlzKCdzZWxlY3QnKSApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWluQ2hhcmFjdGVyczogZnVuY3Rpb24oc2VhcmNoVGVybSkge1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MubWluQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgICBzZWFyY2hUZXJtID0gKHNlYXJjaFRlcm0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IFN0cmluZyhzZWFyY2hUZXJtKVxuICAgICAgICAgICAgICAgIDogU3RyaW5nKG1vZHVsZS5nZXQucXVlcnkoKSlcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICByZXR1cm4gKHNlYXJjaFRlcm0ubGVuZ3RoID49IHNldHRpbmdzLm1pbkNoYXJhY3RlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaXJzdExldHRlcjogZnVuY3Rpb24oJGl0ZW0sIGxldHRlcikge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgIGZpcnN0TGV0dGVyXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZighJGl0ZW0gfHwgJGl0ZW0ubGVuZ3RoID09PSAwIHx8IHR5cGVvZiBsZXR0ZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHQgICAgICAgID0gbW9kdWxlLmdldC5jaG9pY2VUZXh0KCRpdGVtLCBmYWxzZSk7XG4gICAgICAgICAgICBsZXR0ZXIgICAgICA9IGxldHRlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgZmlyc3RMZXR0ZXIgPSBTdHJpbmcodGV4dCkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gKGxldHRlciA9PSBmaXJzdExldHRlcik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKCRpbnB1dC5sZW5ndGggPiAwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAoJGl0ZW0ubGVuZ3RoID4gMCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZW51OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAoJG1lbnUubGVuZ3RoID4gMCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAoJG1lbnUuY2hpbGRyZW4oc2VsZWN0b3IubWVzc2FnZSkubGVuZ3RoICE9PSAwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGVzY2FwZWRWYWx1ZSA9IG1vZHVsZS5lc2NhcGUudmFsdWUodmFsdWUpLFxuICAgICAgICAgICAgICAkbGFiZWxzICAgICAgPSAkbW9kdWxlLmZpbmQoc2VsZWN0b3IubGFiZWwpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZihzZXR0aW5ncy5pZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICAgIGVzY2FwZWRWYWx1ZSA9IGVzY2FwZWRWYWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICgkbGFiZWxzLmZpbHRlcignW2RhdGEtJyArIG1ldGFkYXRhLnZhbHVlICsgJz1cIicgKyBtb2R1bGUuZXNjYXBlLnN0cmluZyhlc2NhcGVkVmFsdWUpICsnXCJdJykubGVuZ3RoID4gMCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXhTZWxlY3Rpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAoc2V0dGluZ3MubWF4U2VsZWN0aW9ucyAmJiBtb2R1bGUuZ2V0LnNlbGVjdGlvbkNvdW50KCkgPj0gc2V0dGluZ3MubWF4U2VsZWN0aW9ucyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbGxSZXN1bHRzRmlsdGVyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICRub3JtYWxSZXN1bHRzID0gJGl0ZW0ubm90KHNlbGVjdG9yLmFkZGl0aW9uKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgcmV0dXJuICgkbm9ybWFsUmVzdWx0cy5maWx0ZXIoc2VsZWN0b3IudW5zZWxlY3RhYmxlKS5sZW5ndGggPT09ICRub3JtYWxSZXN1bHRzLmxlbmd0aCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyU3VnZ2VzdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKCRtZW51LmNoaWxkcmVuKHNlbGVjdG9yLmFkZGl0aW9uKS5sZW5ndGggPiAwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHF1ZXJ5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAobW9kdWxlLmdldC5xdWVyeSgpICE9PSAnJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAoc2V0dGluZ3MuaWdub3JlQ2FzZSlcbiAgICAgICAgICAgICAgPyBtb2R1bGUuaGFzLnZhbHVlSWdub3JpbmdDYXNlKHZhbHVlKVxuICAgICAgICAgICAgICA6IG1vZHVsZS5oYXMudmFsdWVNYXRjaGluZ0Nhc2UodmFsdWUpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZU1hdGNoaW5nQ2FzZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICB2YWx1ZXMgICA9IG1vZHVsZS5nZXQudmFsdWVzKCksXG4gICAgICAgICAgICAgIGhhc1ZhbHVlID0gJC5pc0FycmF5KHZhbHVlcylcbiAgICAgICAgICAgICAgID8gdmFsdWVzICYmICgkLmluQXJyYXkodmFsdWUsIHZhbHVlcykgIT09IC0xKVxuICAgICAgICAgICAgICAgOiAodmFsdWVzID09IHZhbHVlKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgcmV0dXJuIChoYXNWYWx1ZSlcbiAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlSWdub3JpbmdDYXNlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIHZhbHVlcyAgID0gbW9kdWxlLmdldC52YWx1ZXMoKSxcbiAgICAgICAgICAgICAgaGFzVmFsdWUgPSBmYWxzZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoISQuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJC5lYWNoKHZhbHVlcywgZnVuY3Rpb24oaW5kZXgsIGV4aXN0aW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYoU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpID09IFN0cmluZyhleGlzdGluZ1ZhbHVlKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaGFzVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGlzOiB7XG4gICAgICAgICAgYWN0aXZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkbW9kdWxlLmhhc0NsYXNzKGNsYXNzTmFtZS5hY3RpdmUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5pbWF0aW5nSW53YXJkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkbWVudS50cmFuc2l0aW9uKCdpcyBpbndhcmQnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFuaW1hdGluZ091dHdhcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtZW51LnRyYW5zaXRpb24oJ2lzIG91dHdhcmQnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJ1YmJsZWRMYWJlbENsaWNrOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuICQoZXZlbnQudGFyZ2V0KS5pcygnc2VsZWN0LCBpbnB1dCcpICYmICRtb2R1bGUuY2xvc2VzdCgnbGFiZWwnKS5sZW5ndGggPiAwO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYnViYmxlZEljb25DbGljazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgkaWNvbikubGVuZ3RoID4gMDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFscmVhZHlTZXR1cDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKCRtb2R1bGUuaXMoJ3NlbGVjdCcpICYmICRtb2R1bGUucGFyZW50KHNlbGVjdG9yLmRyb3Bkb3duKS5kYXRhKG1vZHVsZU5hbWVzcGFjZSkgIT09IHVuZGVmaW5lZCAmJiAkbW9kdWxlLnByZXYoKS5sZW5ndGggPT09IDApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5pbWF0aW5nOiBmdW5jdGlvbigkc3ViTWVudSkge1xuICAgICAgICAgICAgcmV0dXJuICgkc3ViTWVudSlcbiAgICAgICAgICAgICAgPyAkc3ViTWVudS50cmFuc2l0aW9uICYmICRzdWJNZW51LnRyYW5zaXRpb24oJ2lzIGFuaW1hdGluZycpXG4gICAgICAgICAgICAgIDogJG1lbnUudHJhbnNpdGlvbiAgICAmJiAkbWVudS50cmFuc2l0aW9uKCdpcyBhbmltYXRpbmcnKVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVmdHdhcmQ6IGZ1bmN0aW9uKCRzdWJNZW51KSB7XG4gICAgICAgICAgICB2YXIgJHNlbGVjdGVkTWVudSA9ICRzdWJNZW51IHx8ICRtZW51O1xuICAgICAgICAgICAgcmV0dXJuICRzZWxlY3RlZE1lbnUuaGFzQ2xhc3MoY2xhc3NOYW1lLmxlZnR3YXJkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpc2FibGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkbW9kdWxlLmhhc0NsYXNzKGNsYXNzTmFtZS5kaXNhYmxlZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb2N1c2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gJG1vZHVsZVswXSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb2N1c2VkT25TZWFyY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSAkc2VhcmNoWzBdKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFsbEZpbHRlcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiggKG1vZHVsZS5pcy5tdWx0aXBsZSgpIHx8IG1vZHVsZS5oYXMuc2VhcmNoKCkpICYmICEoc2V0dGluZ3MuaGlkZUFkZGl0aW9ucyA9PSBmYWxzZSAmJiBtb2R1bGUuaGFzLnVzZXJTdWdnZXN0aW9uKCkpICYmICFtb2R1bGUuaGFzLm1lc3NhZ2UoKSAmJiBtb2R1bGUuaGFzLmFsbFJlc3VsdHNGaWx0ZXJlZCgpICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBoaWRkZW46IGZ1bmN0aW9uKCRzdWJNZW51KSB7XG4gICAgICAgICAgICByZXR1cm4gIW1vZHVsZS5pcy52aXNpYmxlKCRzdWJNZW51KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluaXRpYWxMb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsTG9hZDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluT2JqZWN0OiBmdW5jdGlvbihuZWVkbGUsIG9iamVjdCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgICQuZWFjaChvYmplY3QsIGZ1bmN0aW9uKGluZGV4LCBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICBpZihwcm9wZXJ0eSA9PSBuZWVkbGUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbXVsdGlwbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuaGFzQ2xhc3MoY2xhc3NOYW1lLm11bHRpcGxlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW90ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MuYXBpU2V0dGluZ3MgJiYgbW9kdWxlLmNhbi51c2VBUEkoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpbmdsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gIW1vZHVsZS5pcy5tdWx0aXBsZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0TXV0YXRpb246IGZ1bmN0aW9uKG11dGF0aW9ucykge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIHNlbGVjdENoYW5nZWQgPSBmYWxzZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgJC5lYWNoKG11dGF0aW9ucywgZnVuY3Rpb24oaW5kZXgsIG11dGF0aW9uKSB7XG4gICAgICAgICAgICAgIGlmKG11dGF0aW9uLnRhcmdldCAmJiAkKG11dGF0aW9uLnRhcmdldCkuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0Q2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdENoYW5nZWQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWFyY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuaGFzQ2xhc3MoY2xhc3NOYW1lLnNlYXJjaCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWFyY2hTZWxlY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICggbW9kdWxlLmhhcy5zZWFyY2goKSAmJiAkc2VhcmNoLnBhcmVudChzZWxlY3Rvci5kcm9wZG93bikubGVuZ3RoID09PSAxICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuaGFzQ2xhc3MoY2xhc3NOYW1lLnNlbGVjdGlvbik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyVmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKCQuaW5BcnJheSh2YWx1ZSwgbW9kdWxlLmdldC51c2VyVmFsdWVzKCkpICE9PSAtMSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cHdhcmQ6IGZ1bmN0aW9uKCRtZW51KSB7XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkbWVudSB8fCAkbW9kdWxlO1xuICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZS51cHdhcmQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24oJHN1Yk1lbnUpIHtcbiAgICAgICAgICAgIHJldHVybiAoJHN1Yk1lbnUpXG4gICAgICAgICAgICAgID8gJHN1Yk1lbnUuaGFzQ2xhc3MoY2xhc3NOYW1lLnZpc2libGUpXG4gICAgICAgICAgICAgIDogJG1lbnUuaGFzQ2xhc3MoY2xhc3NOYW1lLnZpc2libGUpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2ZXJ0aWNhbGx5U2Nyb2xsYWJsZUNvbnRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIG92ZXJmbG93WSA9ICgkY29udGV4dC5nZXQoMCkgIT09IHdpbmRvdylcbiAgICAgICAgICAgICAgICA/ICRjb250ZXh0LmNzcygnb3ZlcmZsb3cteScpXG4gICAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgcmV0dXJuIChvdmVyZmxvd1kgPT0gJ2F1dG8nIHx8IG92ZXJmbG93WSA9PSAnc2Nyb2xsJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBob3Jpem9udGFsbHlTY3JvbGxhYmxlQ29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgb3ZlcmZsb3dYID0gKCRjb250ZXh0LmdldCgwKSAhPT0gd2luZG93KVxuICAgICAgICAgICAgICAgID8gJGNvbnRleHQuY3NzKCdvdmVyZmxvdy1YJylcbiAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICByZXR1cm4gKG92ZXJmbG93WCA9PSAnYXV0bycgfHwgb3ZlcmZsb3dYID09ICdzY3JvbGwnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FuOiB7XG4gICAgICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCRpdGVtKSB7XG4gICAgICAgICAgICBpZihzZXR0aW5ncy51c2VMYWJlbHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighbW9kdWxlLmhhcy5tYXhTZWxlY3Rpb25zKCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihtb2R1bGUuaGFzLm1heFNlbGVjdGlvbnMoKSAmJiAkaXRlbS5oYXNDbGFzcyhjbGFzc05hbWUuYWN0aXZlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wZW5Eb3dud2FyZDogZnVuY3Rpb24oJHN1Yk1lbnUpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAkY3VycmVudE1lbnUgICAgPSAkc3ViTWVudSB8fCAkbWVudSxcbiAgICAgICAgICAgICAgY2FuT3BlbkRvd253YXJkID0gdHJ1ZSxcbiAgICAgICAgICAgICAgb25TY3JlZW4gICAgICAgID0ge30sXG4gICAgICAgICAgICAgIGNhbGN1bGF0aW9uc1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgJGN1cnJlbnRNZW51XG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUubG9hZGluZylcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNhbGN1bGF0aW9ucyA9IHtcbiAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIG9mZnNldCAgICA6ICgkY29udGV4dC5nZXQoMCkgPT09IHdpbmRvdylcbiAgICAgICAgICAgICAgICAgID8geyB0b3A6IDAsIGxlZnQ6IDB9XG4gICAgICAgICAgICAgICAgICA6ICRjb250ZXh0Lm9mZnNldCgpLFxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCA6ICRjb250ZXh0LnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgIGhlaWdodCAgICA6ICRjb250ZXh0Lm91dGVySGVpZ2h0KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWVudSA6IHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6ICRjdXJyZW50TWVudS5vZmZzZXQoKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRjdXJyZW50TWVudS5vdXRlckhlaWdodCgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZihtb2R1bGUuaXMudmVydGljYWxseVNjcm9sbGFibGVDb250ZXh0KCkpIHtcbiAgICAgICAgICAgICAgY2FsY3VsYXRpb25zLm1lbnUub2Zmc2V0LnRvcCArPSBjYWxjdWxhdGlvbnMuY29udGV4dC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvblNjcmVlbiA9IHtcbiAgICAgICAgICAgICAgYWJvdmUgOiAoY2FsY3VsYXRpb25zLmNvbnRleHQuc2Nyb2xsVG9wKSA8PSBjYWxjdWxhdGlvbnMubWVudS5vZmZzZXQudG9wIC0gY2FsY3VsYXRpb25zLmNvbnRleHQub2Zmc2V0LnRvcCAtIGNhbGN1bGF0aW9ucy5tZW51LmhlaWdodCxcbiAgICAgICAgICAgICAgYmVsb3cgOiAoY2FsY3VsYXRpb25zLmNvbnRleHQuc2Nyb2xsVG9wICsgY2FsY3VsYXRpb25zLmNvbnRleHQuaGVpZ2h0KSA+PSBjYWxjdWxhdGlvbnMubWVudS5vZmZzZXQudG9wIC0gY2FsY3VsYXRpb25zLmNvbnRleHQub2Zmc2V0LnRvcCArIGNhbGN1bGF0aW9ucy5tZW51LmhlaWdodFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmKG9uU2NyZWVuLmJlbG93KSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdEcm9wZG93biBjYW4gZml0IGluIGNvbnRleHQgZG93bndhcmQnLCBvblNjcmVlbik7XG4gICAgICAgICAgICAgIGNhbk9wZW5Eb3dud2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCFvblNjcmVlbi5iZWxvdyAmJiAhb25TY3JlZW4uYWJvdmUpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0Ryb3Bkb3duIGNhbm5vdCBmaXQgaW4gZWl0aGVyIGRpcmVjdGlvbiwgZmF2b3JpbmcgZG93bndhcmQnLCBvblNjcmVlbik7XG4gICAgICAgICAgICAgIGNhbk9wZW5Eb3dud2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0Ryb3Bkb3duIGNhbm5vdCBmaXQgYmVsb3csIG9wZW5pbmcgdXB3YXJkJywgb25TY3JlZW4pO1xuICAgICAgICAgICAgICBjYW5PcGVuRG93bndhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRjdXJyZW50TWVudS5yZW1vdmVDbGFzcyhjbGFzc05hbWUubG9hZGluZyk7XG4gICAgICAgICAgICByZXR1cm4gY2FuT3BlbkRvd253YXJkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb3BlblJpZ2h0d2FyZDogZnVuY3Rpb24oJHN1Yk1lbnUpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAkY3VycmVudE1lbnUgICAgID0gJHN1Yk1lbnUgfHwgJG1lbnUsXG4gICAgICAgICAgICAgIGNhbk9wZW5SaWdodHdhcmQgPSB0cnVlLFxuICAgICAgICAgICAgICBpc09mZnNjcmVlblJpZ2h0ID0gZmFsc2UsXG4gICAgICAgICAgICAgIGNhbGN1bGF0aW9uc1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgJGN1cnJlbnRNZW51XG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUubG9hZGluZylcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNhbGN1bGF0aW9ucyA9IHtcbiAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIG9mZnNldCAgICAgOiAoJGNvbnRleHQuZ2V0KDApID09PSB3aW5kb3cpXG4gICAgICAgICAgICAgICAgICA/IHsgdG9wOiAwLCBsZWZ0OiAwfVxuICAgICAgICAgICAgICAgICAgOiAkY29udGV4dC5vZmZzZXQoKSxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0IDogJGNvbnRleHQuc2Nyb2xsTGVmdCgpLFxuICAgICAgICAgICAgICAgIHdpZHRoICAgICAgOiAkY29udGV4dC5vdXRlcldpZHRoKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWVudToge1xuICAgICAgICAgICAgICAgIG9mZnNldCA6ICRjdXJyZW50TWVudS5vZmZzZXQoKSxcbiAgICAgICAgICAgICAgICB3aWR0aCAgOiAkY3VycmVudE1lbnUub3V0ZXJXaWR0aCgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZihtb2R1bGUuaXMuaG9yaXpvbnRhbGx5U2Nyb2xsYWJsZUNvbnRleHQoKSkge1xuICAgICAgICAgICAgICBjYWxjdWxhdGlvbnMubWVudS5vZmZzZXQubGVmdCArPSBjYWxjdWxhdGlvbnMuY29udGV4dC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNPZmZzY3JlZW5SaWdodCA9IChjYWxjdWxhdGlvbnMubWVudS5vZmZzZXQubGVmdCAtIGNhbGN1bGF0aW9ucy5jb250ZXh0Lm9mZnNldC5sZWZ0ICsgY2FsY3VsYXRpb25zLm1lbnUud2lkdGggPj0gY2FsY3VsYXRpb25zLmNvbnRleHQuc2Nyb2xsTGVmdCArIGNhbGN1bGF0aW9ucy5jb250ZXh0LndpZHRoKTtcbiAgICAgICAgICAgIGlmKGlzT2Zmc2NyZWVuUmlnaHQpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0Ryb3Bkb3duIGNhbm5vdCBmaXQgaW4gY29udGV4dCByaWdodHdhcmQnLCBpc09mZnNjcmVlblJpZ2h0KTtcbiAgICAgICAgICAgICAgY2FuT3BlblJpZ2h0d2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGN1cnJlbnRNZW51LnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5sb2FkaW5nKTtcbiAgICAgICAgICAgIHJldHVybiBjYW5PcGVuUmlnaHR3YXJkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIChoYXNUb3VjaCB8fCBzZXR0aW5ncy5vbiA9PSAnY2xpY2snKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4dGVuZFNlbGVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MuYWxsb3dBZGRpdGlvbnMgfHwgc2V0dGluZ3MuYXBpU2V0dGluZ3M7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAhbW9kdWxlLmlzLmRpc2FibGVkKCkgJiYgKG1vZHVsZS5oYXMuaXRlbXMoKSB8fCBtb2R1bGUuaGFzLm1lc3NhZ2UoKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VBUEk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICQuZm4uYXBpICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICBzaG93OiBmdW5jdGlvbihjYWxsYmFjaywgJHN1Yk1lbnUpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAkY3VycmVudE1lbnUgPSAkc3ViTWVudSB8fCAkbWVudSxcbiAgICAgICAgICAgICAgc3RhcnQgPSAoJHN1Yk1lbnUpXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbigpIHt9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5oaWRlU3ViTWVudXMoKTtcbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5oaWRlT3RoZXJzKCk7XG4gICAgICAgICAgICAgICAgICBtb2R1bGUuc2V0LmFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKVxuICAgICAgICAgICAgICA/IGNhbGxiYWNrXG4gICAgICAgICAgICAgIDogZnVuY3Rpb24oKXt9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnRG9pbmcgbWVudSBzaG93IGFuaW1hdGlvbicsICRjdXJyZW50TWVudSk7XG4gICAgICAgICAgICBtb2R1bGUuc2V0LmRpcmVjdGlvbigkc3ViTWVudSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uID0gbW9kdWxlLmdldC50cmFuc2l0aW9uKCRzdWJNZW51KTtcbiAgICAgICAgICAgIGlmKCBtb2R1bGUuaXMuc2VsZWN0aW9uKCkgKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5zZXQuc2Nyb2xsUG9zaXRpb24obW9kdWxlLmdldC5zZWxlY3RlZEl0ZW0oKSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggbW9kdWxlLmlzLmhpZGRlbigkY3VycmVudE1lbnUpIHx8IG1vZHVsZS5pcy5hbmltYXRpbmcoJGN1cnJlbnRNZW51KSApIHtcbiAgICAgICAgICAgICAgaWYodHJhbnNpdGlvbiA9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICAgICAgICAgICRjdXJyZW50TWVudS50cmFuc2l0aW9uKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKCQuZm4udHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkICYmICRtb2R1bGUudHJhbnNpdGlvbignaXMgc3VwcG9ydGVkJykpIHtcbiAgICAgICAgICAgICAgICAkY3VycmVudE1lbnVcbiAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uICA6IHRyYW5zaXRpb24gKyAnIGluJyxcbiAgICAgICAgICAgICAgICAgICAgZGVidWcgICAgICA6IHNldHRpbmdzLmRlYnVnLFxuICAgICAgICAgICAgICAgICAgICB2ZXJib3NlICAgIDogc2V0dGluZ3MudmVyYm9zZSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gICA6IHNldHRpbmdzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBxdWV1ZSAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb25TdGFydCAgICA6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmVycm9yKGVycm9yLm5vVHJhbnNpdGlvbiwgdHJhbnNpdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGhpZGU6IGZ1bmN0aW9uKGNhbGxiYWNrLCAkc3ViTWVudSkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICRjdXJyZW50TWVudSA9ICRzdWJNZW51IHx8ICRtZW51LFxuICAgICAgICAgICAgICBkdXJhdGlvbiA9ICgkc3ViTWVudSlcbiAgICAgICAgICAgICAgICA/IChzZXR0aW5ncy5kdXJhdGlvbiAqIDAuOSlcbiAgICAgICAgICAgICAgICA6IHNldHRpbmdzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICBzdGFydCA9ICgkc3ViTWVudSlcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uKCkge31cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgaWYoIG1vZHVsZS5jYW4uY2xpY2soKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnVuYmluZC5pbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuYWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbiA9IG1vZHVsZS5nZXQudHJhbnNpdGlvbigkc3ViTWVudSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKVxuICAgICAgICAgICAgICA/IGNhbGxiYWNrXG4gICAgICAgICAgICAgIDogZnVuY3Rpb24oKXt9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZiggbW9kdWxlLmlzLnZpc2libGUoJGN1cnJlbnRNZW51KSB8fCBtb2R1bGUuaXMuYW5pbWF0aW5nKCRjdXJyZW50TWVudSkgKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdEb2luZyBtZW51IGhpZGUgYW5pbWF0aW9uJywgJGN1cnJlbnRNZW51KTtcblxuICAgICAgICAgICAgICBpZih0cmFuc2l0aW9uID09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgJGN1cnJlbnRNZW51LnRyYW5zaXRpb24oJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYoJC5mbi50cmFuc2l0aW9uICE9PSB1bmRlZmluZWQgJiYgJG1vZHVsZS50cmFuc2l0aW9uKCdpcyBzdXBwb3J0ZWQnKSkge1xuICAgICAgICAgICAgICAgICRjdXJyZW50TWVudVxuICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24gIDogdHJhbnNpdGlvbiArICcgb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gICA6IHNldHRpbmdzLmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBkZWJ1ZyAgICAgIDogc2V0dGluZ3MuZGVidWcsXG4gICAgICAgICAgICAgICAgICAgIHZlcmJvc2UgICAgOiBzZXR0aW5ncy52ZXJib3NlLFxuICAgICAgICAgICAgICAgICAgICBxdWV1ZSAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9uU3RhcnQgICAgOiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5lcnJvcihlcnJvci50cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlQW5kQ2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG1vZHVsZS5yZW1vdmUuc2VhcmNoVGVybSgpO1xuICAgICAgICAgIGlmKCBtb2R1bGUuaGFzLm1heFNlbGVjdGlvbnMoKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobW9kdWxlLmhhcy5zZWFyY2goKSkge1xuICAgICAgICAgICAgbW9kdWxlLmhpZGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5yZW1vdmUuZmlsdGVyZWRJdGVtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkZWxheToge1xuICAgICAgICAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0RlbGF5aW5nIHNob3cgZXZlbnQgdG8gZW5zdXJlIHVzZXIgaW50ZW50Jyk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW9kdWxlLnRpbWVyKTtcbiAgICAgICAgICAgIG1vZHVsZS50aW1lciA9IHNldFRpbWVvdXQobW9kdWxlLnNob3csIHNldHRpbmdzLmRlbGF5LnNob3cpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnRGVsYXlpbmcgaGlkZSBldmVudCB0byBlbnN1cmUgdXNlciBpbnRlbnQnKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb2R1bGUudGltZXIpO1xuICAgICAgICAgICAgbW9kdWxlLnRpbWVyID0gc2V0VGltZW91dChtb2R1bGUuaGlkZSwgc2V0dGluZ3MuZGVsYXkuaGlkZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVzY2FwZToge1xuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIG11bHRpcGxlVmFsdWVzID0gJC5pc0FycmF5KHZhbHVlKSxcbiAgICAgICAgICAgICAgc3RyaW5nVmFsdWUgICAgPSAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyksXG4gICAgICAgICAgICAgIGlzVW5wYXJzYWJsZSAgID0gKCFzdHJpbmdWYWx1ZSAmJiAhbXVsdGlwbGVWYWx1ZXMpLFxuICAgICAgICAgICAgICBoYXNRdW90ZXMgICAgICA9IChzdHJpbmdWYWx1ZSAmJiB2YWx1ZS5zZWFyY2gocmVnRXhwLnF1b3RlKSAhPT0gLTEpLFxuICAgICAgICAgICAgICB2YWx1ZXMgICAgICAgICA9IFtdXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZihpc1VucGFyc2FibGUgfHwgIWhhc1F1b3Rlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2R1bGUuZGVidWcoJ0VuY29kaW5nIHF1b3RlIHZhbHVlcyBmb3IgdXNlIGluIHNlbGVjdCcsIHZhbHVlKTtcbiAgICAgICAgICAgIGlmKG11bHRpcGxlVmFsdWVzKSB7XG4gICAgICAgICAgICAgICQuZWFjaCh2YWx1ZSwgZnVuY3Rpb24oaW5kZXgsIHZhbHVlKXtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZS5yZXBsYWNlKHJlZ0V4cC5xdW90ZSwgJyZxdW90OycpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShyZWdFeHAucXVvdGUsICcmcXVvdDsnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0cmluZzogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgICAgdGV4dCA9ICBTdHJpbmcodGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJlZ0V4cC5lc2NhcGUsICdcXFxcJCYnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0dGluZzogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICBtb2R1bGUuZGVidWcoJ0NoYW5naW5nIHNldHRpbmcnLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgaWYoICQuaXNQbGFpbk9iamVjdChuYW1lKSApIHtcbiAgICAgICAgICAgICQuZXh0ZW5kKHRydWUsIHNldHRpbmdzLCBuYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZigkLmlzUGxhaW5PYmplY3Qoc2V0dGluZ3NbbmFtZV0pKSB7XG4gICAgICAgICAgICAgICQuZXh0ZW5kKHRydWUsIHNldHRpbmdzW25hbWVdLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0dGluZ3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3NbbmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnRlcm5hbDogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICBpZiggJC5pc1BsYWluT2JqZWN0KG5hbWUpICkge1xuICAgICAgICAgICAgJC5leHRlbmQodHJ1ZSwgbW9kdWxlLCBuYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtb2R1bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlW25hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVidWc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFzZXR0aW5ncy5zaWxlbnQgJiYgc2V0dGluZ3MuZGVidWcpIHtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzLnBlcmZvcm1hbmNlKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5wZXJmb3JtYW5jZS5sb2coYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtb2R1bGUuZGVidWcgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKGNvbnNvbGUuaW5mbywgY29uc29sZSwgc2V0dGluZ3MubmFtZSArICc6Jyk7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmVyYm9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoIXNldHRpbmdzLnNpbGVudCAmJiBzZXR0aW5ncy52ZXJib3NlICYmIHNldHRpbmdzLmRlYnVnKSB7XG4gICAgICAgICAgICBpZihzZXR0aW5ncy5wZXJmb3JtYW5jZSkge1xuICAgICAgICAgICAgICBtb2R1bGUucGVyZm9ybWFuY2UubG9nKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKGNvbnNvbGUuaW5mbywgY29uc29sZSwgc2V0dGluZ3MubmFtZSArICc6Jyk7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoIXNldHRpbmdzLnNpbGVudCkge1xuICAgICAgICAgICAgbW9kdWxlLmVycm9yID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChjb25zb2xlLmVycm9yLCBjb25zb2xlLCBzZXR0aW5ncy5uYW1lICsgJzonKTtcbiAgICAgICAgICAgIG1vZHVsZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGVyZm9ybWFuY2U6IHtcbiAgICAgICAgICBsb2c6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICBjdXJyZW50VGltZSxcbiAgICAgICAgICAgICAgZXhlY3V0aW9uVGltZSxcbiAgICAgICAgICAgICAgcHJldmlvdXNUaW1lXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZihzZXR0aW5ncy5wZXJmb3JtYW5jZSkge1xuICAgICAgICAgICAgICBjdXJyZW50VGltZSAgID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgIHByZXZpb3VzVGltZSAgPSB0aW1lIHx8IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgICBleGVjdXRpb25UaW1lID0gY3VycmVudFRpbWUgLSBwcmV2aW91c1RpbWU7XG4gICAgICAgICAgICAgIHRpbWUgICAgICAgICAgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgcGVyZm9ybWFuY2UucHVzaCh7XG4gICAgICAgICAgICAgICAgJ05hbWUnICAgICAgICAgICA6IG1lc3NhZ2VbMF0sXG4gICAgICAgICAgICAgICAgJ0FyZ3VtZW50cycgICAgICA6IFtdLnNsaWNlLmNhbGwobWVzc2FnZSwgMSkgfHwgJycsXG4gICAgICAgICAgICAgICAgJ0VsZW1lbnQnICAgICAgICA6IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgJ0V4ZWN1dGlvbiBUaW1lJyA6IGV4ZWN1dGlvblRpbWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW9kdWxlLnBlcmZvcm1hbmNlLnRpbWVyKTtcbiAgICAgICAgICAgIG1vZHVsZS5wZXJmb3JtYW5jZS50aW1lciA9IHNldFRpbWVvdXQobW9kdWxlLnBlcmZvcm1hbmNlLmRpc3BsYXksIDUwMCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXNwbGF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICB0aXRsZSA9IHNldHRpbmdzLm5hbWUgKyAnOicsXG4gICAgICAgICAgICAgIHRvdGFsVGltZSA9IDBcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb2R1bGUucGVyZm9ybWFuY2UudGltZXIpO1xuICAgICAgICAgICAgJC5lYWNoKHBlcmZvcm1hbmNlLCBmdW5jdGlvbihpbmRleCwgZGF0YSkge1xuICAgICAgICAgICAgICB0b3RhbFRpbWUgKz0gZGF0YVsnRXhlY3V0aW9uIFRpbWUnXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGl0bGUgKz0gJyAnICsgdG90YWxUaW1lICsgJ21zJztcbiAgICAgICAgICAgIGlmKG1vZHVsZVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIHRpdGxlICs9ICcgXFwnJyArIG1vZHVsZVNlbGVjdG9yICsgJ1xcJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggKGNvbnNvbGUuZ3JvdXAgIT09IHVuZGVmaW5lZCB8fCBjb25zb2xlLnRhYmxlICE9PSB1bmRlZmluZWQpICYmIHBlcmZvcm1hbmNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCh0aXRsZSk7XG4gICAgICAgICAgICAgIGlmKGNvbnNvbGUudGFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKHBlcmZvcm1hbmNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkLmVhY2gocGVyZm9ybWFuY2UsIGZ1bmN0aW9uKGluZGV4LCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhWydOYW1lJ10gKyAnOiAnICsgZGF0YVsnRXhlY3V0aW9uIFRpbWUnXSsnbXMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZXJmb3JtYW5jZSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbihxdWVyeSwgcGFzc2VkQXJndW1lbnRzLCBjb250ZXh0KSB7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgICBvYmplY3QgPSBpbnN0YW5jZSxcbiAgICAgICAgICAgIG1heERlcHRoLFxuICAgICAgICAgICAgZm91bmQsXG4gICAgICAgICAgICByZXNwb25zZVxuICAgICAgICAgIDtcbiAgICAgICAgICBwYXNzZWRBcmd1bWVudHMgPSBwYXNzZWRBcmd1bWVudHMgfHwgcXVlcnlBcmd1bWVudHM7XG4gICAgICAgICAgY29udGV4dCAgICAgICAgID0gZWxlbWVudCAgICAgICAgIHx8IGNvbnRleHQ7XG4gICAgICAgICAgaWYodHlwZW9mIHF1ZXJ5ID09ICdzdHJpbmcnICYmIG9iamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeSAgICA9IHF1ZXJ5LnNwbGl0KC9bXFwuIF0vKTtcbiAgICAgICAgICAgIG1heERlcHRoID0gcXVlcnkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICQuZWFjaChxdWVyeSwgZnVuY3Rpb24oZGVwdGgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgIHZhciBjYW1lbENhc2VWYWx1ZSA9IChkZXB0aCAhPSBtYXhEZXB0aClcbiAgICAgICAgICAgICAgICA/IHZhbHVlICsgcXVlcnlbZGVwdGggKyAxXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHF1ZXJ5W2RlcHRoICsgMV0uc2xpY2UoMSlcbiAgICAgICAgICAgICAgICA6IHF1ZXJ5XG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgaWYoICQuaXNQbGFpbk9iamVjdCggb2JqZWN0W2NhbWVsQ2FzZVZhbHVlXSApICYmIChkZXB0aCAhPSBtYXhEZXB0aCkgKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gb2JqZWN0W2NhbWVsQ2FzZVZhbHVlXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKCBvYmplY3RbY2FtZWxDYXNlVmFsdWVdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBvYmplY3RbY2FtZWxDYXNlVmFsdWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKCAkLmlzUGxhaW5PYmplY3QoIG9iamVjdFt2YWx1ZV0gKSAmJiAoZGVwdGggIT0gbWF4RGVwdGgpICkge1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IG9iamVjdFt2YWx1ZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZiggb2JqZWN0W3ZhbHVlXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gb2JqZWN0W3ZhbHVlXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmVycm9yKGVycm9yLm1ldGhvZCwgcXVlcnkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICggJC5pc0Z1bmN0aW9uKCBmb3VuZCApICkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBmb3VuZC5hcHBseShjb250ZXh0LCBwYXNzZWRBcmd1bWVudHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKGZvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gZm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKCQuaXNBcnJheShyZXR1cm5lZFZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuZWRWYWx1ZS5wdXNoKHJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihyZXR1cm5lZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybmVkVmFsdWUgPSBbcmV0dXJuZWRWYWx1ZSwgcmVzcG9uc2VdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybmVkVmFsdWUgPSByZXNwb25zZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZihtZXRob2RJbnZva2VkKSB7XG4gICAgICAgIGlmKGluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtb2R1bGUuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5pbnZva2UocXVlcnkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKGluc3RhbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpbnN0YW5jZS5pbnZva2UoJ2Rlc3Ryb3knKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaW5pdGlhbGl6ZSgpO1xuICAgICAgfVxuICAgIH0pXG4gIDtcbiAgcmV0dXJuIChyZXR1cm5lZFZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgPyByZXR1cm5lZFZhbHVlXG4gICAgOiAkYWxsTW9kdWxlc1xuICA7XG59O1xuXG4kLmZuLmRyb3Bkb3duLnNldHRpbmdzID0ge1xuXG4gIHNpbGVudCAgICAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgZGVidWcgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxuICB2ZXJib3NlICAgICAgICAgICAgICAgIDogZmFsc2UsXG4gIHBlcmZvcm1hbmNlICAgICAgICAgICAgOiB0cnVlLFxuXG4gIG9uICAgICAgICAgICAgICAgICAgICAgOiAnY2xpY2snLCAgICAvLyB3aGF0IGV2ZW50IHNob3VsZCBzaG93IG1lbnUgYWN0aW9uIG9uIGl0ZW0gc2VsZWN0aW9uXG4gIGFjdGlvbiAgICAgICAgICAgICAgICAgOiAnYWN0aXZhdGUnLCAvLyBhY3Rpb24gb24gaXRlbSBzZWxlY3Rpb24gKG5vdGhpbmcsIGFjdGl2YXRlLCBzZWxlY3QsIGNvbWJvLCBoaWRlLCBmdW5jdGlvbigpe30pXG5cbiAgdmFsdWVzICAgICAgICAgICAgICAgICA6IGZhbHNlLCAgICAgIC8vIHNwZWNpZnkgdmFsdWVzIHRvIHVzZSBmb3IgZHJvcGRvd25cblxuICBjbGVhcmFibGUgICAgICAgICAgICAgIDogZmFsc2UsICAgICAgLy8gd2hldGhlciB0aGUgdmFsdWUgb2YgdGhlIGRyb3Bkb3duIGNhbiBiZSBjbGVhcmVkXG5cbiAgYXBpU2V0dGluZ3MgICAgICAgICAgICA6IGZhbHNlLFxuICBzZWxlY3RPbktleWRvd24gICAgICAgIDogdHJ1ZSwgICAgICAgLy8gV2hldGhlciBzZWxlY3Rpb24gc2hvdWxkIG9jY3VyIGF1dG9tYXRpY2FsbHkgd2hlbiBrZXlib2FyZCBzaG9ydGN1dHMgdXNlZFxuICBtaW5DaGFyYWN0ZXJzICAgICAgICAgIDogMCwgICAgICAgICAgLy8gTWluaW11bSBjaGFyYWN0ZXJzIHJlcXVpcmVkIHRvIHRyaWdnZXIgQVBJIGNhbGxcblxuICBmaWx0ZXJSZW1vdGVEYXRhICAgICAgIDogZmFsc2UsICAgICAgLy8gV2hldGhlciBBUEkgcmVzdWx0cyBzaG91bGQgYmUgZmlsdGVyZWQgYWZ0ZXIgYmVpbmcgcmV0dXJuZWQgZm9yIHF1ZXJ5IHRlcm1cbiAgc2F2ZVJlbW90ZURhdGEgICAgICAgICA6IHRydWUsICAgICAgIC8vIFdoZXRoZXIgcmVtb3RlIG5hbWUvdmFsdWUgcGFpcnMgc2hvdWxkIGJlIHN0b3JlZCBpbiBzZXNzaW9uU3RvcmFnZSB0byBhbGxvdyByZW1vdGUgZGF0YSB0byBiZSByZXN0b3JlZCBvbiBwYWdlIHJlZnJlc2hcblxuICB0aHJvdHRsZSAgICAgICAgICAgICAgIDogMjAwLCAgICAgICAgLy8gSG93IGxvbmcgdG8gd2FpdCBhZnRlciBsYXN0IHVzZXIgaW5wdXQgdG8gc2VhcmNoIHJlbW90ZWx5XG5cbiAgY29udGV4dCAgICAgICAgICAgICAgICA6IHdpbmRvdywgICAgIC8vIENvbnRleHQgdG8gdXNlIHdoZW4gZGV0ZXJtaW5pbmcgaWYgb24gc2NyZWVuXG4gIGRpcmVjdGlvbiAgICAgICAgICAgICAgOiAnYXV0bycsICAgICAvLyBXaGV0aGVyIGRyb3Bkb3duIHNob3VsZCBhbHdheXMgb3BlbiBpbiBvbmUgZGlyZWN0aW9uXG4gIGtlZXBPblNjcmVlbiAgICAgICAgICAgOiB0cnVlLCAgICAgICAvLyBXaGV0aGVyIGRyb3Bkb3duIHNob3VsZCBjaGVjayB3aGV0aGVyIGl0IGlzIG9uIHNjcmVlbiBiZWZvcmUgc2hvd2luZ1xuXG4gIG1hdGNoICAgICAgICAgICAgICAgICAgOiAnYm90aCcsICAgICAvLyB3aGF0IHRvIG1hdGNoIGFnYWluc3Qgd2l0aCBzZWFyY2ggc2VsZWN0aW9uIChib3RoLCB0ZXh0LCBvciBsYWJlbClcbiAgZnVsbFRleHRTZWFyY2ggICAgICAgICA6IGZhbHNlLCAgICAgIC8vIHNlYXJjaCBhbnl3aGVyZSBpbiB2YWx1ZSAoc2V0IHRvICdleGFjdCcgdG8gcmVxdWlyZSBleGFjdCBtYXRjaGVzKVxuXG4gIHBsYWNlaG9sZGVyICAgICAgICAgICAgOiAnYXV0bycsICAgICAvLyB3aGV0aGVyIHRvIGNvbnZlcnQgYmxhbmsgPHNlbGVjdD4gdmFsdWVzIHRvIHBsYWNlaG9sZGVyIHRleHRcbiAgcHJlc2VydmVIVE1MICAgICAgICAgICA6IHRydWUsICAgICAgIC8vIHByZXNlcnZlIGh0bWwgd2hlbiBzZWxlY3RpbmcgdmFsdWVcbiAgc29ydFNlbGVjdCAgICAgICAgICAgICA6IGZhbHNlLCAgICAgIC8vIHNvcnQgc2VsZWN0aW9uIG9uIGluaXRcblxuICBmb3JjZVNlbGVjdGlvbiAgICAgICAgIDogdHJ1ZSwgICAgICAgLy8gZm9yY2UgYSBjaG9pY2Ugb24gYmx1ciB3aXRoIHNlYXJjaCBzZWxlY3Rpb25cblxuICBhbGxvd0FkZGl0aW9ucyAgICAgICAgIDogZmFsc2UsICAgICAgLy8gd2hldGhlciBtdWx0aXBsZSBzZWxlY3Qgc2hvdWxkIGFsbG93IHVzZXIgYWRkZWQgdmFsdWVzXG4gIGlnbm9yZUNhc2UgICAgICAgICAgICAgOiBmYWxzZSwgICAgICAgLy8gd2hldGhlciB0byBjb25zaWRlciB2YWx1ZXMgbm90IG1hdGNoaW5nIGluIGNhc2UgdG8gYmUgdGhlIHNhbWVcbiAgaGlkZUFkZGl0aW9ucyAgICAgICAgICA6IHRydWUsICAgICAgIC8vIHdoZXRoZXIgb3Igbm90IHRvIGhpZGUgc3BlY2lhbCBtZXNzYWdlIHByb21wdGluZyBhIHVzZXIgdGhleSBjYW4gZW50ZXIgYSB2YWx1ZVxuXG4gIG1heFNlbGVjdGlvbnMgICAgICAgICAgOiBmYWxzZSwgICAgICAvLyBXaGVuIHNldCB0byBhIG51bWJlciBsaW1pdHMgdGhlIG51bWJlciBvZiBzZWxlY3Rpb25zIHRvIHRoaXMgY291bnRcbiAgdXNlTGFiZWxzICAgICAgICAgICAgICA6IHRydWUsICAgICAgIC8vIHdoZXRoZXIgbXVsdGlwbGUgc2VsZWN0IHNob3VsZCBmaWx0ZXIgY3VycmVudGx5IGFjdGl2ZSBzZWxlY3Rpb25zIGZyb20gY2hvaWNlc1xuICBkZWxpbWl0ZXIgICAgICAgICAgICAgIDogJywnLCAgICAgICAgLy8gd2hlbiBtdWx0aXNlbGVjdCB1c2VzIG5vcm1hbCA8aW5wdXQ+IHRoZSB2YWx1ZXMgd2lsbCBiZSBkZWxpbWl0ZWQgd2l0aCB0aGlzIGNoYXJhY3RlclxuXG4gIHNob3dPbkZvY3VzICAgICAgICAgICAgOiB0cnVlLCAgICAgICAvLyBzaG93IG1lbnUgb24gZm9jdXNcbiAgYWxsb3dSZXNlbGVjdGlvbiAgICAgICA6IGZhbHNlLCAgICAgIC8vIHdoZXRoZXIgY3VycmVudCB2YWx1ZSBzaG91bGQgdHJpZ2dlciBjYWxsYmFja3Mgd2hlbiByZXNlbGVjdGVkXG4gIGFsbG93VGFiICAgICAgICAgICAgICAgOiB0cnVlLCAgICAgICAvLyBhZGQgdGFiaW5kZXggdG8gZWxlbWVudFxuICBhbGxvd0NhdGVnb3J5U2VsZWN0aW9uIDogZmFsc2UsICAgICAgLy8gYWxsb3cgZWxlbWVudHMgd2l0aCBzdWItbWVudXMgdG8gYmUgc2VsZWN0ZWRcblxuICBmaXJlT25Jbml0ICAgICAgICAgICAgIDogZmFsc2UsICAgICAgLy8gV2hldGhlciBjYWxsYmFja3Mgc2hvdWxkIGZpcmUgd2hlbiBpbml0aWFsaXppbmcgZHJvcGRvd24gdmFsdWVzXG5cbiAgdHJhbnNpdGlvbiAgICAgICAgICAgICA6ICdhdXRvJywgICAgIC8vIGF1dG8gdHJhbnNpdGlvbiB3aWxsIHNsaWRlIGRvd24gb3IgdXAgYmFzZWQgb24gZGlyZWN0aW9uXG4gIGR1cmF0aW9uICAgICAgICAgICAgICAgOiAyMDAsICAgICAgICAvLyBkdXJhdGlvbiBvZiB0cmFuc2l0aW9uXG5cbiAgZ2x5cGhXaWR0aCAgICAgICAgICAgICA6IDEuMDM3LCAgICAgIC8vIHdpZGVzdCBnbHlwaCB3aWR0aCBpbiBlbSAoVyBpcyAxLjAzNyBlbSkgdXNlZCB0byBjYWxjdWxhdGUgbXVsdGlzZWxlY3QgaW5wdXQgd2lkdGhcblxuICAvLyBsYWJlbCBzZXR0aW5ncyBvbiBtdWx0aS1zZWxlY3RcbiAgbGFiZWw6IHtcbiAgICB0cmFuc2l0aW9uIDogJ3NjYWxlJyxcbiAgICBkdXJhdGlvbiAgIDogMjAwLFxuICAgIHZhcmlhdGlvbiAgOiBmYWxzZVxuICB9LFxuXG4gIC8vIGRlbGF5IGJlZm9yZSBldmVudFxuICBkZWxheSA6IHtcbiAgICBoaWRlICAgOiAzMDAsXG4gICAgc2hvdyAgIDogMjAwLFxuICAgIHNlYXJjaCA6IDIwLFxuICAgIHRvdWNoICA6IDUwXG4gIH0sXG5cbiAgLyogQ2FsbGJhY2tzICovXG4gIG9uQ2hhbmdlICAgICAgOiBmdW5jdGlvbih2YWx1ZSwgdGV4dCwgJHNlbGVjdGVkKXt9LFxuICBvbkFkZCAgICAgICAgIDogZnVuY3Rpb24odmFsdWUsIHRleHQsICRzZWxlY3RlZCl7fSxcbiAgb25SZW1vdmUgICAgICA6IGZ1bmN0aW9uKHZhbHVlLCB0ZXh0LCAkc2VsZWN0ZWQpe30sXG5cbiAgb25MYWJlbFNlbGVjdCA6IGZ1bmN0aW9uKCRzZWxlY3RlZExhYmVscyl7fSxcbiAgb25MYWJlbENyZWF0ZSA6IGZ1bmN0aW9uKHZhbHVlLCB0ZXh0KSB7IHJldHVybiAkKHRoaXMpOyB9LFxuICBvbkxhYmVsUmVtb3ZlIDogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHRydWU7IH0sXG4gIG9uTm9SZXN1bHRzICAgOiBmdW5jdGlvbihzZWFyY2hUZXJtKSB7IHJldHVybiB0cnVlOyB9LFxuICBvblNob3cgICAgICAgIDogZnVuY3Rpb24oKXt9LFxuICBvbkhpZGUgICAgICAgIDogZnVuY3Rpb24oKXt9LFxuXG4gIC8qIENvbXBvbmVudCAqL1xuICBuYW1lICAgICAgICAgICA6ICdEcm9wZG93bicsXG4gIG5hbWVzcGFjZSAgICAgIDogJ2Ryb3Bkb3duJyxcblxuICBtZXNzYWdlOiB7XG4gICAgYWRkUmVzdWx0ICAgICA6ICdBZGQgPGI+e3Rlcm19PC9iPicsXG4gICAgY291bnQgICAgICAgICA6ICd7Y291bnR9IHNlbGVjdGVkJyxcbiAgICBtYXhTZWxlY3Rpb25zIDogJ01heCB7bWF4Q291bnR9IHNlbGVjdGlvbnMnLFxuICAgIG5vUmVzdWx0cyAgICAgOiAnTm8gcmVzdWx0cyBmb3VuZC4nLFxuICAgIHNlcnZlckVycm9yICAgOiAnVGhlcmUgd2FzIGFuIGVycm9yIGNvbnRhY3RpbmcgdGhlIHNlcnZlcidcbiAgfSxcblxuICBlcnJvciA6IHtcbiAgICBhY3Rpb24gICAgICAgICAgOiAnWW91IGNhbGxlZCBhIGRyb3Bkb3duIGFjdGlvbiB0aGF0IHdhcyBub3QgZGVmaW5lZCcsXG4gICAgYWxyZWFkeVNldHVwICAgIDogJ09uY2UgYSBzZWxlY3QgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYmVoYXZpb3JzIG11c3QgYmUgY2FsbGVkIG9uIHRoZSBjcmVhdGVkIHVpIGRyb3Bkb3duJyxcbiAgICBsYWJlbHMgICAgICAgICAgOiAnQWxsb3dpbmcgdXNlciBhZGRpdGlvbnMgY3VycmVudGx5IHJlcXVpcmVzIHRoZSB1c2Ugb2YgbGFiZWxzLicsXG4gICAgbWlzc2luZ011bHRpcGxlIDogJzxzZWxlY3Q+IHJlcXVpcmVzIG11bHRpcGxlIHByb3BlcnR5IHRvIGJlIHNldCB0byBjb3JyZWN0bHkgcHJlc2VydmUgbXVsdGlwbGUgdmFsdWVzJyxcbiAgICBtZXRob2QgICAgICAgICAgOiAnVGhlIG1ldGhvZCB5b3UgY2FsbGVkIGlzIG5vdCBkZWZpbmVkLicsXG4gICAgbm9BUEkgICAgICAgICAgIDogJ1RoZSBBUEkgbW9kdWxlIGlzIHJlcXVpcmVkIHRvIGxvYWQgcmVzb3VyY2VzIHJlbW90ZWx5JyxcbiAgICBub1N0b3JhZ2UgICAgICAgOiAnU2F2aW5nIHJlbW90ZSBkYXRhIHJlcXVpcmVzIHNlc3Npb24gc3RvcmFnZScsXG4gICAgbm9UcmFuc2l0aW9uICAgIDogJ1RoaXMgbW9kdWxlIHJlcXVpcmVzIHVpIHRyYW5zaXRpb25zIDxodHRwczovL2dpdGh1Yi5jb20vU2VtYW50aWMtT3JnL1VJLVRyYW5zaXRpb24+J1xuICB9LFxuXG4gIHJlZ0V4cCA6IHtcbiAgICBlc2NhcGUgICA6IC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZyxcbiAgICBxdW90ZSAgICA6IC9cIi9nXG4gIH0sXG5cbiAgbWV0YWRhdGEgOiB7XG4gICAgZGVmYXVsdFRleHQgICAgIDogJ2RlZmF1bHRUZXh0JyxcbiAgICBkZWZhdWx0VmFsdWUgICAgOiAnZGVmYXVsdFZhbHVlJyxcbiAgICBwbGFjZWhvbGRlclRleHQgOiAncGxhY2Vob2xkZXInLFxuICAgIHRleHQgICAgICAgICAgICA6ICd0ZXh0JyxcbiAgICB2YWx1ZSAgICAgICAgICAgOiAndmFsdWUnXG4gIH0sXG5cbiAgLy8gcHJvcGVydHkgbmFtZXMgZm9yIHJlbW90ZSBxdWVyeVxuICBmaWVsZHM6IHtcbiAgICByZW1vdGVWYWx1ZXMgOiAncmVzdWx0cycsICAvLyBncm91cGluZyBmb3IgYXBpIHJlc3VsdHNcbiAgICB2YWx1ZXMgICAgICAgOiAndmFsdWVzJywgICAvLyBncm91cGluZyBmb3IgYWxsIGRyb3Bkb3duIHZhbHVlc1xuICAgIGRpc2FibGVkICAgICA6ICdkaXNhYmxlZCcsIC8vIHdoZXRoZXIgdmFsdWUgc2hvdWxkIGJlIGRpc2FibGVkXG4gICAgbmFtZSAgICAgICAgIDogJ25hbWUnLCAgICAgLy8gZGlzcGxheWVkIGRyb3Bkb3duIHRleHRcbiAgICB2YWx1ZSAgICAgICAgOiAndmFsdWUnLCAgICAvLyBhY3R1YWwgZHJvcGRvd24gdmFsdWVcbiAgICB0ZXh0ICAgICAgICAgOiAndGV4dCcgICAgICAvLyBkaXNwbGF5ZWQgdGV4dCB3aGVuIHNlbGVjdGVkXG4gIH0sXG5cbiAga2V5cyA6IHtcbiAgICBiYWNrc3BhY2UgIDogOCxcbiAgICBkZWxpbWl0ZXIgIDogMTg4LCAvLyBjb21tYVxuICAgIGRlbGV0ZUtleSAgOiA0NixcbiAgICBlbnRlciAgICAgIDogMTMsXG4gICAgZXNjYXBlICAgICA6IDI3LFxuICAgIHBhZ2VVcCAgICAgOiAzMyxcbiAgICBwYWdlRG93biAgIDogMzQsXG4gICAgbGVmdEFycm93ICA6IDM3LFxuICAgIHVwQXJyb3cgICAgOiAzOCxcbiAgICByaWdodEFycm93IDogMzksXG4gICAgZG93bkFycm93ICA6IDQwXG4gIH0sXG5cbiAgc2VsZWN0b3IgOiB7XG4gICAgYWRkaXRpb24gICAgIDogJy5hZGRpdGlvbicsXG4gICAgZHJvcGRvd24gICAgIDogJy51aS5kcm9wZG93bicsXG4gICAgaGlkZGVuICAgICAgIDogJy5oaWRkZW4nLFxuICAgIGljb24gICAgICAgICA6ICc+IC5kcm9wZG93bi5pY29uJyxcbiAgICBpbnB1dCAgICAgICAgOiAnPiBpbnB1dFt0eXBlPVwiaGlkZGVuXCJdLCA+IHNlbGVjdCcsXG4gICAgaXRlbSAgICAgICAgIDogJy5pdGVtJyxcbiAgICBsYWJlbCAgICAgICAgOiAnPiAubGFiZWwnLFxuICAgIHJlbW92ZSAgICAgICA6ICc+IC5sYWJlbCA+IC5kZWxldGUuaWNvbicsXG4gICAgc2libGluZ0xhYmVsIDogJy5sYWJlbCcsXG4gICAgbWVudSAgICAgICAgIDogJy5tZW51JyxcbiAgICBtZXNzYWdlICAgICAgOiAnLm1lc3NhZ2UnLFxuICAgIG1lbnVJY29uICAgICA6ICcuZHJvcGRvd24uaWNvbicsXG4gICAgc2VhcmNoICAgICAgIDogJ2lucHV0LnNlYXJjaCwgLm1lbnUgPiAuc2VhcmNoID4gaW5wdXQsIC5tZW51IGlucHV0LnNlYXJjaCcsXG4gICAgc2l6ZXIgICAgICAgIDogJz4gaW5wdXQuc2l6ZXInLFxuICAgIHRleHQgICAgICAgICA6ICc+IC50ZXh0Om5vdCguaWNvbiknLFxuICAgIHVuc2VsZWN0YWJsZSA6ICcuZGlzYWJsZWQsIC5maWx0ZXJlZCdcbiAgfSxcblxuICBjbGFzc05hbWUgOiB7XG4gICAgYWN0aXZlICAgICAgOiAnYWN0aXZlJyxcbiAgICBhZGRpdGlvbiAgICA6ICdhZGRpdGlvbicsXG4gICAgYW5pbWF0aW5nICAgOiAnYW5pbWF0aW5nJyxcbiAgICBjbGVhciAgICAgICA6ICdjbGVhcicsXG4gICAgZGlzYWJsZWQgICAgOiAnZGlzYWJsZWQnLFxuICAgIGVtcHR5ICAgICAgIDogJ2VtcHR5JyxcbiAgICBkcm9wZG93biAgICA6ICd1aSBkcm9wZG93bicsXG4gICAgZmlsdGVyZWQgICAgOiAnZmlsdGVyZWQnLFxuICAgIGhpZGRlbiAgICAgIDogJ2hpZGRlbiB0cmFuc2l0aW9uJyxcbiAgICBpdGVtICAgICAgICA6ICdpdGVtJyxcbiAgICBsYWJlbCAgICAgICA6ICd1aSBsYWJlbCcsXG4gICAgbG9hZGluZyAgICAgOiAnbG9hZGluZycsXG4gICAgbWVudSAgICAgICAgOiAnbWVudScsXG4gICAgbWVzc2FnZSAgICAgOiAnbWVzc2FnZScsXG4gICAgbXVsdGlwbGUgICAgOiAnbXVsdGlwbGUnLFxuICAgIHBsYWNlaG9sZGVyIDogJ2RlZmF1bHQnLFxuICAgIHNpemVyICAgICAgIDogJ3NpemVyJyxcbiAgICBzZWFyY2ggICAgICA6ICdzZWFyY2gnLFxuICAgIHNlbGVjdGVkICAgIDogJ3NlbGVjdGVkJyxcbiAgICBzZWxlY3Rpb24gICA6ICdzZWxlY3Rpb24nLFxuICAgIHVwd2FyZCAgICAgIDogJ3Vwd2FyZCcsXG4gICAgbGVmdHdhcmQgICAgOiAnbGVmdCcsXG4gICAgdmlzaWJsZSAgICAgOiAndmlzaWJsZSdcbiAgfVxuXG59O1xuXG4vKiBUZW1wbGF0ZXMgKi9cbiQuZm4uZHJvcGRvd24uc2V0dGluZ3MudGVtcGxhdGVzID0ge1xuXG4gIC8vIGdlbmVyYXRlcyBkcm9wZG93biBmcm9tIHNlbGVjdCB2YWx1ZXNcbiAgZHJvcGRvd246IGZ1bmN0aW9uKHNlbGVjdCkge1xuICAgIHZhclxuICAgICAgcGxhY2Vob2xkZXIgPSBzZWxlY3QucGxhY2Vob2xkZXIgfHwgZmFsc2UsXG4gICAgICB2YWx1ZXMgICAgICA9IHNlbGVjdC52YWx1ZXMgfHwge30sXG4gICAgICBodG1sICAgICAgICA9ICcnXG4gICAgO1xuICAgIGh0bWwgKz0gICc8aSBjbGFzcz1cImRyb3Bkb3duIGljb25cIj48L2k+JztcbiAgICBpZihzZWxlY3QucGxhY2Vob2xkZXIpIHtcbiAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJkZWZhdWx0IHRleHRcIj4nICsgcGxhY2Vob2xkZXIgKyAnPC9kaXY+JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwidGV4dFwiPjwvZGl2Pic7XG4gICAgfVxuICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJtZW51XCI+JztcbiAgICAkLmVhY2goc2VsZWN0LnZhbHVlcywgZnVuY3Rpb24oaW5kZXgsIG9wdGlvbikge1xuICAgICAgaHRtbCArPSAob3B0aW9uLmRpc2FibGVkKVxuICAgICAgICA/ICc8ZGl2IGNsYXNzPVwiZGlzYWJsZWQgaXRlbVwiIGRhdGEtdmFsdWU9XCInICsgb3B0aW9uLnZhbHVlICsgJ1wiPicgKyBvcHRpb24ubmFtZSArICc8L2Rpdj4nXG4gICAgICAgIDogJzxkaXYgY2xhc3M9XCJpdGVtXCIgZGF0YS12YWx1ZT1cIicgKyBvcHRpb24udmFsdWUgKyAnXCI+JyArIG9wdGlvbi5uYW1lICsgJzwvZGl2PidcbiAgICAgIDtcbiAgICB9KTtcbiAgICBodG1sICs9ICc8L2Rpdj4nO1xuICAgIHJldHVybiBodG1sO1xuICB9LFxuXG4gIC8vIGdlbmVyYXRlcyBqdXN0IG1lbnUgZnJvbSBzZWxlY3RcbiAgbWVudTogZnVuY3Rpb24ocmVzcG9uc2UsIGZpZWxkcykge1xuICAgIHZhclxuICAgICAgdmFsdWVzID0gcmVzcG9uc2VbZmllbGRzLnZhbHVlc10gfHwge30sXG4gICAgICBodG1sICAgPSAnJ1xuICAgIDtcbiAgICAkLmVhY2godmFsdWVzLCBmdW5jdGlvbihpbmRleCwgb3B0aW9uKSB7XG4gICAgICB2YXJcbiAgICAgICAgbWF5YmVUZXh0ID0gKG9wdGlvbltmaWVsZHMudGV4dF0pXG4gICAgICAgICAgPyAnZGF0YS10ZXh0PVwiJyArIG9wdGlvbltmaWVsZHMudGV4dF0gKyAnXCInXG4gICAgICAgICAgOiAnJyxcbiAgICAgICAgbWF5YmVEaXNhYmxlZCA9IChvcHRpb25bZmllbGRzLmRpc2FibGVkXSlcbiAgICAgICAgICA/ICdkaXNhYmxlZCAnXG4gICAgICAgICAgOiAnJ1xuICAgICAgO1xuICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cIicrIG1heWJlRGlzYWJsZWQgKydpdGVtXCIgZGF0YS12YWx1ZT1cIicgKyBvcHRpb25bZmllbGRzLnZhbHVlXSArICdcIicgKyBtYXliZVRleHQgKyAnPic7XG4gICAgICBodG1sICs9ICAgb3B0aW9uW2ZpZWxkcy5uYW1lXTtcbiAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG4gICAgfSk7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH0sXG5cbiAgLy8gZ2VuZXJhdGVzIGxhYmVsIGZvciBtdWx0aXNlbGVjdFxuICBsYWJlbDogZnVuY3Rpb24odmFsdWUsIHRleHQpIHtcbiAgICByZXR1cm4gdGV4dCArICc8aSBjbGFzcz1cImRlbGV0ZSBpY29uXCI+PC9pPic7XG4gIH0sXG5cblxuICAvLyBnZW5lcmF0ZXMgbWVzc2FnZXMgbGlrZSBcIk5vIHJlc3VsdHNcIlxuICBtZXNzYWdlOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgLy8gZ2VuZXJhdGVzIHVzZXIgYWRkaXRpb24gdG8gc2VsZWN0aW9uIG1lbnVcbiAgYWRkaXRpb246IGZ1bmN0aW9uKGNob2ljZSkge1xuICAgIHJldHVybiBjaG9pY2U7XG4gIH1cblxufTtcblxufSkoIGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCApO1xuIiwiLyohXG4gKiAjIFNlbWFudGljIFVJIDIuNC4xIC0gVHJhbnNpdGlvblxuICogaHR0cDovL2dpdGh1Yi5jb20vc2VtYW50aWMtb3JnL3NlbWFudGljLXVpL1xuICpcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKi9cblxuOyhmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbid1c2Ugc3RyaWN0Jztcblxud2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aClcbiAgPyB3aW5kb3dcbiAgOiAodHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGgpXG4gICAgPyBzZWxmXG4gICAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpXG47XG5cbiQuZm4udHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXJcbiAgICAkYWxsTW9kdWxlcyAgICAgPSAkKHRoaXMpLFxuICAgIG1vZHVsZVNlbGVjdG9yICA9ICRhbGxNb2R1bGVzLnNlbGVjdG9yIHx8ICcnLFxuXG4gICAgdGltZSAgICAgICAgICAgID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgcGVyZm9ybWFuY2UgICAgID0gW10sXG5cbiAgICBtb2R1bGVBcmd1bWVudHMgPSBhcmd1bWVudHMsXG4gICAgcXVlcnkgICAgICAgICAgID0gbW9kdWxlQXJndW1lbnRzWzBdLFxuICAgIHF1ZXJ5QXJndW1lbnRzICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICBtZXRob2RJbnZva2VkICAgPSAodHlwZW9mIHF1ZXJ5ID09PSAnc3RyaW5nJyksXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgIHx8IGZ1bmN0aW9uKGNhbGxiYWNrKSB7IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApOyB9LFxuXG4gICAgcmV0dXJuZWRWYWx1ZVxuICA7XG4gICRhbGxNb2R1bGVzXG4gICAgLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhclxuICAgICAgICAkbW9kdWxlICA9ICQodGhpcyksXG4gICAgICAgIGVsZW1lbnQgID0gdGhpcyxcblxuICAgICAgICAvLyBzZXQgYXQgcnVuIHRpbWVcbiAgICAgICAgc2V0dGluZ3MsXG4gICAgICAgIGluc3RhbmNlLFxuXG4gICAgICAgIGVycm9yLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIG1ldGFkYXRhLFxuICAgICAgICBhbmltYXRpb25FbmQsXG4gICAgICAgIGFuaW1hdGlvbk5hbWUsXG5cbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBtb2R1bGVOYW1lc3BhY2UsXG4gICAgICAgIGV2ZW50TmFtZXNwYWNlLFxuICAgICAgICBtb2R1bGVcbiAgICAgIDtcblxuICAgICAgbW9kdWxlID0ge1xuXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgLy8gZ2V0IGZ1bGwgc2V0dGluZ3NcbiAgICAgICAgICBzZXR0aW5ncyAgICAgICAgPSBtb2R1bGUuZ2V0LnNldHRpbmdzLmFwcGx5KGVsZW1lbnQsIG1vZHVsZUFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAvLyBzaG9ydGhhbmRcbiAgICAgICAgICBjbGFzc05hbWUgICAgICAgPSBzZXR0aW5ncy5jbGFzc05hbWU7XG4gICAgICAgICAgZXJyb3IgICAgICAgICAgID0gc2V0dGluZ3MuZXJyb3I7XG4gICAgICAgICAgbWV0YWRhdGEgICAgICAgID0gc2V0dGluZ3MubWV0YWRhdGE7XG5cbiAgICAgICAgICAvLyBkZWZpbmUgbmFtZXNwYWNlXG4gICAgICAgICAgZXZlbnROYW1lc3BhY2UgID0gJy4nICsgc2V0dGluZ3MubmFtZXNwYWNlO1xuICAgICAgICAgIG1vZHVsZU5hbWVzcGFjZSA9ICdtb2R1bGUtJyArIHNldHRpbmdzLm5hbWVzcGFjZTtcbiAgICAgICAgICBpbnN0YW5jZSAgICAgICAgPSAkbW9kdWxlLmRhdGEobW9kdWxlTmFtZXNwYWNlKSB8fCBtb2R1bGU7XG5cbiAgICAgICAgICAvLyBnZXQgdmVuZG9yIHNwZWNpZmljIGV2ZW50c1xuICAgICAgICAgIGFuaW1hdGlvbkVuZCAgICA9IG1vZHVsZS5nZXQuYW5pbWF0aW9uRW5kRXZlbnQoKTtcblxuICAgICAgICAgIGlmKG1ldGhvZEludm9rZWQpIHtcbiAgICAgICAgICAgIG1ldGhvZEludm9rZWQgPSBtb2R1bGUuaW52b2tlKHF1ZXJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBtZXRob2Qgbm90IGludm9rZWQsIGxldHMgcnVuIGFuIGFuaW1hdGlvblxuICAgICAgICAgIGlmKG1ldGhvZEludm9rZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnQ29udmVydGVkIGFyZ3VtZW50cyBpbnRvIHNldHRpbmdzIG9iamVjdCcsIHNldHRpbmdzKTtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzLmludGVydmFsKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWxheShzZXR0aW5ncy5hbmltYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmFuaW1hdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZHVsZS5pbnN0YW50aWF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpbnN0YW50aWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1N0b3JpbmcgaW5zdGFuY2Ugb2YgbW9kdWxlJywgbW9kdWxlKTtcbiAgICAgICAgICBpbnN0YW5jZSA9IG1vZHVsZTtcbiAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAuZGF0YShtb2R1bGVOYW1lc3BhY2UsIGluc3RhbmNlKVxuICAgICAgICAgIDtcbiAgICAgICAgfSxcblxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnRGVzdHJveWluZyBwcmV2aW91cyBtb2R1bGUgZm9yJywgZWxlbWVudCk7XG4gICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgLnJlbW92ZURhdGEobW9kdWxlTmFtZXNwYWNlKVxuICAgICAgICAgIDtcbiAgICAgICAgfSxcblxuICAgICAgICByZWZyZXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnUmVmcmVzaGluZyBkaXNwbGF5IHR5cGUgb24gbmV4dCBhbmltYXRpb24nKTtcbiAgICAgICAgICBkZWxldGUgbW9kdWxlLmRpc3BsYXlUeXBlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZvcmNlUmVwYWludDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0ZvcmNpbmcgZWxlbWVudCByZXBhaW50Jyk7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgICAkcGFyZW50RWxlbWVudCA9ICRtb2R1bGUucGFyZW50KCksXG4gICAgICAgICAgICAkbmV4dEVsZW1lbnQgPSAkbW9kdWxlLm5leHQoKVxuICAgICAgICAgIDtcbiAgICAgICAgICBpZigkbmV4dEVsZW1lbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAkbW9kdWxlLmRldGFjaCgpLmFwcGVuZFRvKCRwYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkbW9kdWxlLmRldGFjaCgpLmluc2VydEJlZm9yZSgkbmV4dEVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXBhaW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnUmVwYWludGluZyBlbGVtZW50Jyk7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgICBmYWtlQXNzaWdubWVudCA9IGVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgICA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsYXk6IGZ1bmN0aW9uKGludGVydmFsKSB7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBtb2R1bGUuZ2V0LmFuaW1hdGlvbkRpcmVjdGlvbigpLFxuICAgICAgICAgICAgc2hvdWxkUmV2ZXJzZSxcbiAgICAgICAgICAgIGRlbGF5XG4gICAgICAgICAgO1xuICAgICAgICAgIGlmKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IG1vZHVsZS5jYW4udHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgID8gbW9kdWxlLmdldC5kaXJlY3Rpb24oKVxuICAgICAgICAgICAgICA6ICdzdGF0aWMnXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGludGVydmFsID0gKGludGVydmFsICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICA/IGludGVydmFsXG4gICAgICAgICAgICA6IHNldHRpbmdzLmludGVydmFsXG4gICAgICAgICAgO1xuICAgICAgICAgIHNob3VsZFJldmVyc2UgPSAoc2V0dGluZ3MucmV2ZXJzZSA9PSAnYXV0bycgJiYgZGlyZWN0aW9uID09IGNsYXNzTmFtZS5vdXR3YXJkKTtcbiAgICAgICAgICBkZWxheSA9IChzaG91bGRSZXZlcnNlIHx8IHNldHRpbmdzLnJldmVyc2UgPT0gdHJ1ZSlcbiAgICAgICAgICAgID8gKCRhbGxNb2R1bGVzLmxlbmd0aCAtIGluZGV4KSAqIHNldHRpbmdzLmludGVydmFsXG4gICAgICAgICAgICA6IGluZGV4ICogc2V0dGluZ3MuaW50ZXJ2YWxcbiAgICAgICAgICA7XG4gICAgICAgICAgbW9kdWxlLmRlYnVnKCdEZWxheWluZyBhbmltYXRpb24gYnknLCBkZWxheSk7XG4gICAgICAgICAgc2V0VGltZW91dChtb2R1bGUuYW5pbWF0ZSwgZGVsYXkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFuaW1hdGU6IGZ1bmN0aW9uKG92ZXJyaWRlU2V0dGluZ3MpIHtcbiAgICAgICAgICBzZXR0aW5ncyA9IG92ZXJyaWRlU2V0dGluZ3MgfHwgc2V0dGluZ3M7XG4gICAgICAgICAgaWYoIW1vZHVsZS5pcy5zdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgbW9kdWxlLmVycm9yKGVycm9yLnN1cHBvcnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtb2R1bGUuZGVidWcoJ1ByZXBhcmluZyBhbmltYXRpb24nLCBzZXR0aW5ncy5hbmltYXRpb24pO1xuICAgICAgICAgIGlmKG1vZHVsZS5pcy5hbmltYXRpbmcoKSkge1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MucXVldWUpIHtcbiAgICAgICAgICAgICAgaWYoIXNldHRpbmdzLmFsbG93UmVwZWF0cyAmJiBtb2R1bGUuaGFzLmRpcmVjdGlvbigpICYmIG1vZHVsZS5pcy5vY2N1cnJpbmcoKSAmJiBtb2R1bGUucXVldWluZyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnQW5pbWF0aW9uIGlzIGN1cnJlbnRseSBvY2N1cnJpbmcsIHByZXZlbnRpbmcgcXVldWVpbmcgc2FtZSBhbmltYXRpb24nLCBzZXR0aW5ncy5hbmltYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5xdWV1ZShzZXR0aW5ncy5hbmltYXRpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoIXNldHRpbmdzLmFsbG93UmVwZWF0cyAmJiBtb2R1bGUuaXMub2NjdXJyaW5nKCkpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdBbmltYXRpb24gaXMgYWxyZWFkeSBvY2N1cnJpbmcsIHdpbGwgbm90IGV4ZWN1dGUgcmVwZWF0ZWQgYW5pbWF0aW9uJywgc2V0dGluZ3MuYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnTmV3IGFuaW1hdGlvbiBzdGFydGVkLCBjb21wbGV0aW5nIHByZXZpb3VzIGVhcmx5Jywgc2V0dGluZ3MuYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoIG1vZHVsZS5jYW4uYW5pbWF0ZSgpICkge1xuICAgICAgICAgICAgbW9kdWxlLnNldC5hbmltYXRpbmcoc2V0dGluZ3MuYW5pbWF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXJyb3IoZXJyb3Iubm9BbmltYXRpb24sIHNldHRpbmdzLmFuaW1hdGlvbiwgZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2R1bGUuZGVidWcoJ1Jlc2V0dGluZyBhbmltYXRpb24gdG8gYmVnaW5uaW5nIGNvbmRpdGlvbnMnKTtcbiAgICAgICAgICBtb2R1bGUucmVtb3ZlLmFuaW1hdGlvbkNhbGxiYWNrcygpO1xuICAgICAgICAgIG1vZHVsZS5yZXN0b3JlLmNvbmRpdGlvbnMoKTtcbiAgICAgICAgICBtb2R1bGUucmVtb3ZlLmFuaW1hdGluZygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHF1ZXVlOiBmdW5jdGlvbihhbmltYXRpb24pIHtcbiAgICAgICAgICBtb2R1bGUuZGVidWcoJ1F1ZXVlaW5nIGFuaW1hdGlvbiBvZicsIGFuaW1hdGlvbik7XG4gICAgICAgICAgbW9kdWxlLnF1ZXVpbmcgPSB0cnVlO1xuICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgIC5vbmUoYW5pbWF0aW9uRW5kICsgJy5xdWV1ZScgKyBldmVudE5hbWVzcGFjZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS5xdWV1aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIG1vZHVsZS5yZXBhaW50KCk7XG4gICAgICAgICAgICAgIG1vZHVsZS5hbmltYXRlLmFwcGx5KHRoaXMsIHNldHRpbmdzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBtb2R1bGUuZGVidWcoJ0FuaW1hdGlvbiBjb21wbGV0ZScsIHNldHRpbmdzLmFuaW1hdGlvbik7XG4gICAgICAgICAgbW9kdWxlLnJlbW92ZS5jb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgbW9kdWxlLnJlbW92ZS5mYWlsU2FmZSgpO1xuICAgICAgICAgIGlmKCFtb2R1bGUuaXMubG9vcGluZygpKSB7XG4gICAgICAgICAgICBpZiggbW9kdWxlLmlzLm91dHdhcmQoKSApIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0FuaW1hdGlvbiBpcyBvdXR3YXJkLCBoaWRpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgICBtb2R1bGUucmVzdG9yZS5jb25kaXRpb25zKCk7XG4gICAgICAgICAgICAgIG1vZHVsZS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCBtb2R1bGUuaXMuaW53YXJkKCkgKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdBbmltYXRpb24gaXMgb3V0d2FyZCwgc2hvd2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICAgIG1vZHVsZS5yZXN0b3JlLmNvbmRpdGlvbnMoKTtcbiAgICAgICAgICAgICAgbW9kdWxlLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnU3RhdGljIGFuaW1hdGlvbiBjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgbW9kdWxlLnJlc3RvcmUuY29uZGl0aW9ucygpO1xuICAgICAgICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlLmNhbGwoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGZvcmNlOiB7XG4gICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgc3R5bGUgICAgICAgICAgPSAkbW9kdWxlLmF0dHIoJ3N0eWxlJyksXG4gICAgICAgICAgICAgIHVzZXJTdHlsZSAgICAgID0gbW9kdWxlLmdldC51c2VyU3R5bGUoKSxcbiAgICAgICAgICAgICAgZGlzcGxheVR5cGUgICAgPSBtb2R1bGUuZ2V0LmRpc3BsYXlUeXBlKCksXG4gICAgICAgICAgICAgIG92ZXJyaWRlU3R5bGUgID0gdXNlclN0eWxlICsgJ2Rpc3BsYXk6ICcgKyBkaXNwbGF5VHlwZSArICcgIWltcG9ydGFudDsnLFxuICAgICAgICAgICAgICBjdXJyZW50RGlzcGxheSA9ICRtb2R1bGUuY3NzKCdkaXNwbGF5JyksXG4gICAgICAgICAgICAgIGVtcHR5U3R5bGUgICAgID0gKHN0eWxlID09PSB1bmRlZmluZWQgfHwgc3R5bGUgPT09ICcnKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoY3VycmVudERpc3BsYXkgIT09IGRpc3BsYXlUeXBlKSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdPdmVycmlkaW5nIGRlZmF1bHQgZGlzcGxheSB0byBzaG93IGVsZW1lbnQnLCBkaXNwbGF5VHlwZSk7XG4gICAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgICAuYXR0cignc3R5bGUnLCBvdmVycmlkZVN0eWxlKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGVtcHR5U3R5bGUpIHtcbiAgICAgICAgICAgICAgJG1vZHVsZS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICBzdHlsZSAgICAgICAgICA9ICRtb2R1bGUuYXR0cignc3R5bGUnKSxcbiAgICAgICAgICAgICAgY3VycmVudERpc3BsYXkgPSAkbW9kdWxlLmNzcygnZGlzcGxheScpLFxuICAgICAgICAgICAgICBlbXB0eVN0eWxlICAgICA9IChzdHlsZSA9PT0gdW5kZWZpbmVkIHx8IHN0eWxlID09PSAnJylcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmKGN1cnJlbnREaXNwbGF5ICE9PSAnbm9uZScgJiYgIW1vZHVsZS5pcy5oaWRkZW4oKSkge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnT3ZlcnJpZGluZyBkZWZhdWx0IGRpc3BsYXkgdG8gaGlkZSBlbGVtZW50Jyk7XG4gICAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGVtcHR5U3R5bGUpIHtcbiAgICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzOiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBmdW5jdGlvbihhbmltYXRpb24pIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICBoYXNEaXJlY3Rpb24gPSBmYWxzZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgYW5pbWF0aW9uID0gYW5pbWF0aW9uIHx8IHNldHRpbmdzLmFuaW1hdGlvbjtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBhbmltYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAkLmVhY2goYW5pbWF0aW9uLCBmdW5jdGlvbihpbmRleCwgd29yZCl7XG4gICAgICAgICAgICAgICAgaWYod29yZCA9PT0gY2xhc3NOYW1lLmlud2FyZCB8fCB3b3JkID09PSBjbGFzc05hbWUub3V0d2FyZCkge1xuICAgICAgICAgICAgICAgICAgaGFzRGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhc0RpcmVjdGlvbjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlubGluZURpc3BsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIHN0eWxlID0gJG1vZHVsZS5hdHRyKCdzdHlsZScpIHx8ICcnXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICByZXR1cm4gJC5pc0FycmF5KHN0eWxlLm1hdGNoKC9kaXNwbGF5Lio/Oy8sICcnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIGFuaW1hdGluZzogZnVuY3Rpb24oYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uQ2xhc3MsXG4gICAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzIGNhbGxiYWNrc1xuICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5jb21wbGV0ZUNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIC8vIGRldGVybWluZSBleGFjdCBhbmltYXRpb25cbiAgICAgICAgICAgIGFuaW1hdGlvbiAgICAgID0gYW5pbWF0aW9uIHx8IHNldHRpbmdzLmFuaW1hdGlvbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbkNsYXNzID0gbW9kdWxlLmdldC5hbmltYXRpb25DbGFzcyhhbmltYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBzYXZlIGFuaW1hdGlvbiBjbGFzcyBpbiBjYWNoZSB0byByZXN0b3JlIGNsYXNzIG5hbWVzXG4gICAgICAgICAgICBtb2R1bGUuc2F2ZS5hbmltYXRpb24oYW5pbWF0aW9uQ2xhc3MpO1xuXG4gICAgICAgICAgICAvLyBvdmVycmlkZSBkaXNwbGF5IGlmIG5lY2Vzc2FyeSBzbyBhbmltYXRpb24gYXBwZWFycyB2aXNpYmx5XG4gICAgICAgICAgICBtb2R1bGUuZm9yY2UudmlzaWJsZSgpO1xuXG4gICAgICAgICAgICBtb2R1bGUucmVtb3ZlLmhpZGRlbigpO1xuICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5kaXJlY3Rpb24oKTtcblxuICAgICAgICAgICAgbW9kdWxlLnN0YXJ0LmFuaW1hdGlvbihhbmltYXRpb25DbGFzcyk7XG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGR1cmF0aW9uOiBmdW5jdGlvbihhbmltYXRpb25OYW1lLCBkdXJhdGlvbikge1xuICAgICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBzZXR0aW5ncy5kdXJhdGlvbjtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gKHR5cGVvZiBkdXJhdGlvbiA9PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgPyBkdXJhdGlvbiArICdtcydcbiAgICAgICAgICAgICAgOiBkdXJhdGlvblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoZHVyYXRpb24gfHwgZHVyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1NldHRpbmcgYW5pbWF0aW9uIGR1cmF0aW9uJywgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAnYW5pbWF0aW9uLWR1cmF0aW9uJzogIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlyZWN0aW9uOiBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCBtb2R1bGUuZ2V0LmRpcmVjdGlvbigpO1xuICAgICAgICAgICAgaWYoZGlyZWN0aW9uID09IGNsYXNzTmFtZS5pbndhcmQpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnNldC5pbndhcmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtb2R1bGUuc2V0Lm91dHdhcmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvb3Bpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdUcmFuc2l0aW9uIHNldCB0byBsb29wJyk7XG4gICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUubG9vcGluZylcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUudHJhbnNpdGlvbilcbiAgICAgICAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZS5oaWRkZW4pXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbndhcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdTZXR0aW5nIGRpcmVjdGlvbiB0byBpbndhcmQnKTtcbiAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5vdXR3YXJkKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLmlud2FyZClcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG91dHdhcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdTZXR0aW5nIGRpcmVjdGlvbiB0byBvdXR3YXJkJyk7XG4gICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhjbGFzc05hbWUuaW53YXJkKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLm91dHdhcmQpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZS50cmFuc2l0aW9uKVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lLnZpc2libGUpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBmdW5jdGlvbihhbmltYXRpb25DbGFzcykge1xuICAgICAgICAgICAgYW5pbWF0aW9uQ2xhc3MgPSBhbmltYXRpb25DbGFzcyB8fCBtb2R1bGUuZ2V0LmFuaW1hdGlvbkNsYXNzKCk7XG4gICAgICAgICAgICBtb2R1bGUuZGVidWcoJ1N0YXJ0aW5nIHR3ZWVuJywgYW5pbWF0aW9uQ2xhc3MpO1xuICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAuYWRkQ2xhc3MoYW5pbWF0aW9uQ2xhc3MpXG4gICAgICAgICAgICAgIC5vbmUoYW5pbWF0aW9uRW5kICsgJy5jb21wbGV0ZScgKyBldmVudE5hbWVzcGFjZSwgbW9kdWxlLmNvbXBsZXRlKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MudXNlRmFpbFNhZmUpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmFkZC5mYWlsU2FmZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kdWxlLnNldC5kdXJhdGlvbihzZXR0aW5ncy5kdXJhdGlvbik7XG4gICAgICAgICAgICBzZXR0aW5ncy5vblN0YXJ0LmNhbGwoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNhdmU6IHtcbiAgICAgICAgICBhbmltYXRpb246IGZ1bmN0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICAgICAgaWYoIW1vZHVsZS5jYWNoZSkge1xuICAgICAgICAgICAgICBtb2R1bGUuY2FjaGUgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZHVsZS5jYWNoZS5hbmltYXRpb24gPSBhbmltYXRpb247XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXNwbGF5VHlwZTogZnVuY3Rpb24oZGlzcGxheVR5cGUpIHtcbiAgICAgICAgICAgIGlmKGRpc3BsYXlUeXBlICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgJG1vZHVsZS5kYXRhKG1ldGFkYXRhLmRpc3BsYXlUeXBlLCBkaXNwbGF5VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cmFuc2l0aW9uRXhpc3RzOiBmdW5jdGlvbihhbmltYXRpb24sIGV4aXN0cykge1xuICAgICAgICAgICAgJC5mbi50cmFuc2l0aW9uLmV4aXN0c1thbmltYXRpb25dID0gZXhpc3RzO1xuICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1NhdmluZyBleGlzdGVuY2Ugb2YgdHJhbnNpdGlvbicsIGFuaW1hdGlvbiwgZXhpc3RzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzdG9yZToge1xuICAgICAgICAgIGNvbmRpdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbiA9IG1vZHVsZS5nZXQuY3VycmVudEFuaW1hdGlvbigpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZihhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhhbmltYXRpb24pXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1JlbW92aW5nIGFuaW1hdGlvbiBjbGFzcycsIG1vZHVsZS5jYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2R1bGUucmVtb3ZlLmR1cmF0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZDoge1xuICAgICAgICAgIGZhaWxTYWZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICBkdXJhdGlvbiA9IG1vZHVsZS5nZXQuZHVyYXRpb24oKVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgbW9kdWxlLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJG1vZHVsZS50cmlnZ2VySGFuZGxlcihhbmltYXRpb25FbmQpO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24gKyBzZXR0aW5ncy5mYWlsU2FmZURlbGF5KTtcbiAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlKCdBZGRpbmcgZmFpbCBzYWZlIHRpbWVyJywgbW9kdWxlLnRpbWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiB7XG4gICAgICAgICAgYW5pbWF0aW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRtb2R1bGUucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmFuaW1hdGluZyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbmltYXRpb25DYWxsYmFja3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kdWxlLnJlbW92ZS5xdWV1ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICBtb2R1bGUucmVtb3ZlLmNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHF1ZXVlQ2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJG1vZHVsZS5vZmYoJy5xdWV1ZScgKyBldmVudE5hbWVzcGFjZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRtb2R1bGUub2ZmKCcuY29tcGxldGUnICsgZXZlbnROYW1lc3BhY2UpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlzcGxheTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbW9kdWxlLmNzcygnZGlzcGxheScsICcnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpcmVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhjbGFzc05hbWUuaW53YXJkKVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLm91dHdhcmQpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkdXJhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkbW9kdWxlXG4gICAgICAgICAgICAgIC5jc3MoJ2FuaW1hdGlvbi1kdXJhdGlvbicsICcnKVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbFNhZmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1JlbW92aW5nIGZhaWwgc2FmZSB0aW1lcicsIG1vZHVsZS50aW1lcik7XG4gICAgICAgICAgICBpZihtb2R1bGUudGltZXIpIHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1vZHVsZS50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBoaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJG1vZHVsZS5yZW1vdmVDbGFzcyhjbGFzc05hbWUuaGlkZGVuKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJG1vZHVsZS5yZW1vdmVDbGFzcyhjbGFzc05hbWUudmlzaWJsZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsb29waW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnVHJhbnNpdGlvbnMgYXJlIG5vIGxvbmdlciBsb29waW5nJyk7XG4gICAgICAgICAgICBpZiggbW9kdWxlLmlzLmxvb3BpbmcoKSApIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnJlc2V0KCk7XG4gICAgICAgICAgICAgICRtb2R1bGVcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLmxvb3BpbmcpXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRyYW5zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJG1vZHVsZVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLnZpc2libGUpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhjbGFzc05hbWUuaGlkZGVuKVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgc2V0dGluZ3M6IGZ1bmN0aW9uKGFuaW1hdGlvbiwgZHVyYXRpb24sIG9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIC8vIHNpbmdsZSBzZXR0aW5ncyBvYmplY3RcbiAgICAgICAgICAgIGlmKHR5cGVvZiBhbmltYXRpb24gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHRydWUsIHt9LCAkLmZuLnRyYW5zaXRpb24uc2V0dGluZ3MsIGFuaW1hdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbGwgYXJndW1lbnRzIHByb3ZpZGVkXG4gICAgICAgICAgICBlbHNlIGlmKHR5cGVvZiBvbkNvbXBsZXRlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHt9LCAkLmZuLnRyYW5zaXRpb24uc2V0dGluZ3MsIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24gIDogYW5pbWF0aW9uLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUgOiBvbkNvbXBsZXRlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uICAgOiBkdXJhdGlvblxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG9ubHkgZHVyYXRpb24gcHJvdmlkZWRcbiAgICAgICAgICAgIGVsc2UgaWYodHlwZW9mIGR1cmF0aW9uID09ICdzdHJpbmcnIHx8IHR5cGVvZiBkdXJhdGlvbiA9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICByZXR1cm4gJC5leHRlbmQoe30sICQuZm4udHJhbnNpdGlvbi5zZXR0aW5ncywge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA6IGFuaW1hdGlvbixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiAgOiBkdXJhdGlvblxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGR1cmF0aW9uIGlzIGFjdHVhbGx5IHNldHRpbmdzIG9iamVjdFxuICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgZHVyYXRpb24gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHt9LCAkLmZuLnRyYW5zaXRpb24uc2V0dGluZ3MsIGR1cmF0aW9uLCB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uIDogYW5pbWF0aW9uXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZHVyYXRpb24gaXMgYWN0dWFsbHkgY2FsbGJhY2tcbiAgICAgICAgICAgIGVsc2UgaWYodHlwZW9mIGR1cmF0aW9uID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHt9LCAkLmZuLnRyYW5zaXRpb24uc2V0dGluZ3MsIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24gIDogYW5pbWF0aW9uLFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUgOiBkdXJhdGlvblxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG9ubHkgYW5pbWF0aW9uIHByb3ZpZGVkXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHt9LCAkLmZuLnRyYW5zaXRpb24uc2V0dGluZ3MsIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24gOiBhbmltYXRpb25cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbmltYXRpb25DbGFzczogZnVuY3Rpb24oYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uQ2xhc3MgPSBhbmltYXRpb24gfHwgc2V0dGluZ3MuYW5pbWF0aW9uLFxuICAgICAgICAgICAgICBkaXJlY3Rpb25DbGFzcyA9IChtb2R1bGUuY2FuLnRyYW5zaXRpb24oKSAmJiAhbW9kdWxlLmhhcy5kaXJlY3Rpb24oKSlcbiAgICAgICAgICAgICAgICA/IG1vZHVsZS5nZXQuZGlyZWN0aW9uKCkgKyAnICdcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lLmFuaW1hdGluZyArICcgJ1xuICAgICAgICAgICAgICArIGNsYXNzTmFtZS50cmFuc2l0aW9uICsgJyAnXG4gICAgICAgICAgICAgICsgZGlyZWN0aW9uQ2xhc3NcbiAgICAgICAgICAgICAgKyBhbmltYXRpb25DbGFzc1xuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VycmVudEFuaW1hdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKG1vZHVsZS5jYWNoZSAmJiBtb2R1bGUuY2FjaGUuYW5pbWF0aW9uICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgID8gbW9kdWxlLmNhY2hlLmFuaW1hdGlvblxuICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGUuaXMuaW53YXJkKClcbiAgICAgICAgICAgICAgPyBjbGFzc05hbWUuaW53YXJkXG4gICAgICAgICAgICAgIDogY2xhc3NOYW1lLm91dHdhcmRcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpcmVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmlzLmhpZGRlbigpIHx8ICFtb2R1bGUuaXMudmlzaWJsZSgpXG4gICAgICAgICAgICAgID8gY2xhc3NOYW1lLmlud2FyZFxuICAgICAgICAgICAgICA6IGNsYXNzTmFtZS5vdXR3YXJkXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbmltYXRpb25EaXJlY3Rpb246IGZ1bmN0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgYW5pbWF0aW9uID0gYW5pbWF0aW9uIHx8IHNldHRpbmdzLmFuaW1hdGlvbjtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBhbmltYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggYW5pbWF0aW9uIG5hbWUgZm9yIG91dC9pbiBjbGFzc1xuICAgICAgICAgICAgICAkLmVhY2goYW5pbWF0aW9uLCBmdW5jdGlvbihpbmRleCwgd29yZCl7XG4gICAgICAgICAgICAgICAgaWYod29yZCA9PT0gY2xhc3NOYW1lLmlud2FyZCkge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gY2xhc3NOYW1lLmlud2FyZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih3b3JkID09PSBjbGFzc05hbWUub3V0d2FyZCkge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gY2xhc3NOYW1lLm91dHdhcmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJldHVybiBmb3VuZCBkaXJlY3Rpb25cbiAgICAgICAgICAgIGlmKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZHVyYXRpb246IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IHNldHRpbmdzLmR1cmF0aW9uO1xuICAgICAgICAgICAgaWYoZHVyYXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uID0gJG1vZHVsZS5jc3MoJ2FuaW1hdGlvbi1kdXJhdGlvbicpIHx8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgID8gKGR1cmF0aW9uLmluZGV4T2YoJ21zJykgPiAtMSlcbiAgICAgICAgICAgICAgICA/IHBhcnNlRmxvYXQoZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgOiBwYXJzZUZsb2F0KGR1cmF0aW9uKSAqIDEwMDBcbiAgICAgICAgICAgICAgOiBkdXJhdGlvblxuICAgICAgICAgICAgO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlzcGxheVR5cGU6IGZ1bmN0aW9uKHNob3VsZERldGVybWluZSkge1xuICAgICAgICAgICAgc2hvdWxkRGV0ZXJtaW5lID0gKHNob3VsZERldGVybWluZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICA/IHNob3VsZERldGVybWluZVxuICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmKHNldHRpbmdzLmRpc3BsYXlUeXBlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncy5kaXNwbGF5VHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHNob3VsZERldGVybWluZSAmJiAkbW9kdWxlLmRhdGEobWV0YWRhdGEuZGlzcGxheVR5cGUpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgLy8gY3JlYXRlIGZha2UgZWxlbWVudCB0byBkZXRlcm1pbmUgZGlzcGxheSBzdGF0ZVxuICAgICAgICAgICAgICBtb2R1bGUuY2FuLnRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJG1vZHVsZS5kYXRhKG1ldGFkYXRhLmRpc3BsYXlUeXBlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVzZXJTdHlsZTogZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgIHN0eWxlID0gc3R5bGUgfHwgJG1vZHVsZS5hdHRyKCdzdHlsZScpIHx8ICcnO1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlLnJlcGxhY2UoL2Rpc3BsYXkuKj87LywgJycpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJhbnNpdGlvbkV4aXN0czogZnVuY3Rpb24oYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gJC5mbi50cmFuc2l0aW9uLmV4aXN0c1thbmltYXRpb25dO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5pbWF0aW9uU3RhcnRFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgZWxlbWVudCAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgICAgYW5pbWF0aW9ucyAgPSB7XG4gICAgICAgICAgICAgICAgJ2FuaW1hdGlvbicgICAgICAgOidhbmltYXRpb25zdGFydCcsXG4gICAgICAgICAgICAgICAgJ09BbmltYXRpb24nICAgICAgOidvQW5pbWF0aW9uU3RhcnQnLFxuICAgICAgICAgICAgICAgICdNb3pBbmltYXRpb24nICAgIDonbW96QW5pbWF0aW9uU3RhcnQnLFxuICAgICAgICAgICAgICAgICdXZWJraXRBbmltYXRpb24nIDond2Via2l0QW5pbWF0aW9uU3RhcnQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFuaW1hdGlvblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZm9yKGFuaW1hdGlvbiBpbiBhbmltYXRpb25zKXtcbiAgICAgICAgICAgICAgaWYoIGVsZW1lbnQuc3R5bGVbYW5pbWF0aW9uXSAhPT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbnNbYW5pbWF0aW9uXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5pbWF0aW9uRW5kRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgIGVsZW1lbnQgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICAgIGFuaW1hdGlvbnMgID0ge1xuICAgICAgICAgICAgICAgICdhbmltYXRpb24nICAgICAgIDonYW5pbWF0aW9uZW5kJyxcbiAgICAgICAgICAgICAgICAnT0FuaW1hdGlvbicgICAgICA6J29BbmltYXRpb25FbmQnLFxuICAgICAgICAgICAgICAgICdNb3pBbmltYXRpb24nICAgIDonbW96QW5pbWF0aW9uRW5kJyxcbiAgICAgICAgICAgICAgICAnV2Via2l0QW5pbWF0aW9uJyA6J3dlYmtpdEFuaW1hdGlvbkVuZCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBmb3IoYW5pbWF0aW9uIGluIGFuaW1hdGlvbnMpe1xuICAgICAgICAgICAgICBpZiggZWxlbWVudC5zdHlsZVthbmltYXRpb25dICE9PSB1bmRlZmluZWQgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uc1thbmltYXRpb25dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FuOiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogZnVuY3Rpb24oZm9yY2VkKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uICAgICAgICAgPSBzZXR0aW5ncy5hbmltYXRpb24sXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25FeGlzdHMgID0gbW9kdWxlLmdldC50cmFuc2l0aW9uRXhpc3RzKGFuaW1hdGlvbiksXG4gICAgICAgICAgICAgIGRpc3BsYXlUeXBlICAgICAgID0gbW9kdWxlLmdldC5kaXNwbGF5VHlwZShmYWxzZSksXG4gICAgICAgICAgICAgIGVsZW1lbnRDbGFzcyxcbiAgICAgICAgICAgICAgdGFnTmFtZSxcbiAgICAgICAgICAgICAgJGNsb25lLFxuICAgICAgICAgICAgICBjdXJyZW50QW5pbWF0aW9uLFxuICAgICAgICAgICAgICBpbkFuaW1hdGlvbixcbiAgICAgICAgICAgICAgZGlyZWN0aW9uRXhpc3RzXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZiggdHJhbnNpdGlvbkV4aXN0cyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlZCkge1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnRGV0ZXJtaW5pbmcgd2hldGhlciBhbmltYXRpb24gZXhpc3RzJyk7XG4gICAgICAgICAgICAgIGVsZW1lbnRDbGFzcyA9ICRtb2R1bGUuYXR0cignY2xhc3MnKTtcbiAgICAgICAgICAgICAgdGFnTmFtZSAgICAgID0gJG1vZHVsZS5wcm9wKCd0YWdOYW1lJyk7XG5cbiAgICAgICAgICAgICAgJGNsb25lID0gJCgnPCcgKyB0YWdOYW1lICsgJyAvPicpLmFkZENsYXNzKCBlbGVtZW50Q2xhc3MgKS5pbnNlcnRBZnRlcigkbW9kdWxlKTtcbiAgICAgICAgICAgICAgY3VycmVudEFuaW1hdGlvbiA9ICRjbG9uZVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhhbmltYXRpb24pXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5pbndhcmQpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5vdXR3YXJkKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUuYW5pbWF0aW5nKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUudHJhbnNpdGlvbilcbiAgICAgICAgICAgICAgICAuY3NzKCdhbmltYXRpb25OYW1lJylcbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICBpbkFuaW1hdGlvbiA9ICRjbG9uZVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUuaW53YXJkKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2FuaW1hdGlvbk5hbWUnKVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIGlmKCFkaXNwbGF5VHlwZSkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlID0gJGNsb25lXG4gICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCBlbGVtZW50Q2xhc3MpXG4gICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGNsYXNzTmFtZS5oaWRkZW4pXG4gICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lLnZpc2libGUpXG4gICAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0RldGVybWluaW5nIGZpbmFsIGRpc3BsYXkgc3RhdGUnLCBkaXNwbGF5VHlwZSk7XG4gICAgICAgICAgICAgICAgbW9kdWxlLnNhdmUuZGlzcGxheVR5cGUoZGlzcGxheVR5cGUpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJGNsb25lLnJlbW92ZSgpO1xuICAgICAgICAgICAgICBpZihjdXJyZW50QW5pbWF0aW9uICE9IGluQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdEaXJlY3Rpb24gZXhpc3RzIGZvciBhbmltYXRpb24nLCBhbmltYXRpb24pO1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbkV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihjdXJyZW50QW5pbWF0aW9uID09ICdub25lJyB8fCAhY3VycmVudEFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnTm8gYW5pbWF0aW9uIGRlZmluZWQgaW4gY3NzJywgYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnKCdTdGF0aWMgYW5pbWF0aW9uIGZvdW5kJywgYW5pbWF0aW9uLCBkaXNwbGF5VHlwZSk7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uRXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbW9kdWxlLnNhdmUudHJhbnNpdGlvbkV4aXN0cyhhbmltYXRpb24sIGRpcmVjdGlvbkV4aXN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHRyYW5zaXRpb25FeGlzdHMgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgPyB0cmFuc2l0aW9uRXhpc3RzXG4gICAgICAgICAgICAgIDogZGlyZWN0aW9uRXhpc3RzXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbmltYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGNhbiB0cmFuc2l0aW9uIGRvZXMgbm90IHJldHVybiBhIHZhbHVlIGlmIGFuaW1hdGlvbiBkb2VzIG5vdCBleGlzdFxuICAgICAgICAgICAgcmV0dXJuIChtb2R1bGUuY2FuLnRyYW5zaXRpb24oKSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXM6IHtcbiAgICAgICAgICBhbmltYXRpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuaGFzQ2xhc3MoY2xhc3NOYW1lLmFuaW1hdGluZyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbndhcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuaGFzQ2xhc3MoY2xhc3NOYW1lLmlud2FyZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvdXR3YXJkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAkbW9kdWxlLmhhc0NsYXNzKGNsYXNzTmFtZS5vdXR3YXJkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvb3Bpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuaGFzQ2xhc3MoY2xhc3NOYW1lLmxvb3BpbmcpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb2NjdXJyaW5nOiBmdW5jdGlvbihhbmltYXRpb24pIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbiB8fCBzZXR0aW5ncy5hbmltYXRpb247XG4gICAgICAgICAgICBhbmltYXRpb24gPSAnLicgKyBhbmltYXRpb24ucmVwbGFjZSgnICcsICcuJyk7XG4gICAgICAgICAgICByZXR1cm4gKCAkbW9kdWxlLmZpbHRlcihhbmltYXRpb24pLmxlbmd0aCA+IDAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuaXMoJzp2aXNpYmxlJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBoaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRtb2R1bGUuY3NzKCd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VwcG9ydGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybihhbmltYXRpb25FbmQgIT09IGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ0hpZGluZyBlbGVtZW50Jyk7XG4gICAgICAgICAgaWYoIG1vZHVsZS5pcy5hbmltYXRpbmcoKSApIHtcbiAgICAgICAgICAgIG1vZHVsZS5yZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtZW50LmJsdXIoKTsgLy8gSUUgd2lsbCB0cmlnZ2VyIGZvY3VzIGNoYW5nZSBpZiBlbGVtZW50IGlzIG5vdCBibHVycmVkIGJlZm9yZSBoaWRpbmdcbiAgICAgICAgICBtb2R1bGUucmVtb3ZlLmRpc3BsYXkoKTtcbiAgICAgICAgICBtb2R1bGUucmVtb3ZlLnZpc2libGUoKTtcbiAgICAgICAgICBtb2R1bGUuc2V0LmhpZGRlbigpO1xuICAgICAgICAgIG1vZHVsZS5mb3JjZS5oaWRkZW4oKTtcbiAgICAgICAgICBzZXR0aW5ncy5vbkhpZGUuY2FsbChlbGVtZW50KTtcbiAgICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlLmNhbGwoZWxlbWVudCk7XG4gICAgICAgICAgLy8gbW9kdWxlLnJlcGFpbnQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzaG93OiBmdW5jdGlvbihkaXNwbGF5KSB7XG4gICAgICAgICAgbW9kdWxlLnZlcmJvc2UoJ1Nob3dpbmcgZWxlbWVudCcsIGRpc3BsYXkpO1xuICAgICAgICAgIG1vZHVsZS5yZW1vdmUuaGlkZGVuKCk7XG4gICAgICAgICAgbW9kdWxlLnNldC52aXNpYmxlKCk7XG4gICAgICAgICAgbW9kdWxlLmZvcmNlLnZpc2libGUoKTtcbiAgICAgICAgICBzZXR0aW5ncy5vblNob3cuY2FsbChlbGVtZW50KTtcbiAgICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlLmNhbGwoZWxlbWVudCk7XG4gICAgICAgICAgLy8gbW9kdWxlLnJlcGFpbnQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCBtb2R1bGUuaXMudmlzaWJsZSgpICkge1xuICAgICAgICAgICAgbW9kdWxlLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuc2hvdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2R1bGUuZGVidWcoJ1N0b3BwaW5nIGN1cnJlbnQgYW5pbWF0aW9uJyk7XG4gICAgICAgICAgJG1vZHVsZS50cmlnZ2VySGFuZGxlcihhbmltYXRpb25FbmQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0b3BBbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnU3RvcHBpbmcgYWxsIGFuaW1hdGlvbicpO1xuICAgICAgICAgIG1vZHVsZS5yZW1vdmUucXVldWVDYWxsYmFjaygpO1xuICAgICAgICAgICRtb2R1bGUudHJpZ2dlckhhbmRsZXIoYW5pbWF0aW9uRW5kKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbGVhcjoge1xuICAgICAgICAgIHF1ZXVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnQ2xlYXJpbmcgYW5pbWF0aW9uIHF1ZXVlJyk7XG4gICAgICAgICAgICBtb2R1bGUucmVtb3ZlLnF1ZXVlQ2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW5hYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtb2R1bGUudmVyYm9zZSgnU3RhcnRpbmcgYW5pbWF0aW9uJyk7XG4gICAgICAgICAgJG1vZHVsZS5yZW1vdmVDbGFzcyhjbGFzc05hbWUuZGlzYWJsZWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRpc2FibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG1vZHVsZS5kZWJ1ZygnU3RvcHBpbmcgYW5pbWF0aW9uJyk7XG4gICAgICAgICAgJG1vZHVsZS5hZGRDbGFzcyhjbGFzc05hbWUuZGlzYWJsZWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldHRpbmc6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgbW9kdWxlLmRlYnVnKCdDaGFuZ2luZyBzZXR0aW5nJywgbmFtZSwgdmFsdWUpO1xuICAgICAgICAgIGlmKCAkLmlzUGxhaW5PYmplY3QobmFtZSkgKSB7XG4gICAgICAgICAgICAkLmV4dGVuZCh0cnVlLCBzZXR0aW5ncywgbmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYoJC5pc1BsYWluT2JqZWN0KHNldHRpbmdzW25hbWVdKSkge1xuICAgICAgICAgICAgICAkLmV4dGVuZCh0cnVlLCBzZXR0aW5nc1tuYW1lXSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHNldHRpbmdzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzW25hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJuYWw6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgaWYoICQuaXNQbGFpbk9iamVjdChuYW1lKSApIHtcbiAgICAgICAgICAgICQuZXh0ZW5kKHRydWUsIG1vZHVsZSwgbmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbW9kdWxlW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZVtuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlYnVnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZighc2V0dGluZ3Muc2lsZW50ICYmIHNldHRpbmdzLmRlYnVnKSB7XG4gICAgICAgICAgICBpZihzZXR0aW5ncy5wZXJmb3JtYW5jZSkge1xuICAgICAgICAgICAgICBtb2R1bGUucGVyZm9ybWFuY2UubG9nKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbW9kdWxlLmRlYnVnID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChjb25zb2xlLmluZm8sIGNvbnNvbGUsIHNldHRpbmdzLm5hbWUgKyAnOicpO1xuICAgICAgICAgICAgICBtb2R1bGUuZGVidWcuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZlcmJvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFzZXR0aW5ncy5zaWxlbnQgJiYgc2V0dGluZ3MudmVyYm9zZSAmJiBzZXR0aW5ncy5kZWJ1Zykge1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MucGVyZm9ybWFuY2UpIHtcbiAgICAgICAgICAgICAgbW9kdWxlLnBlcmZvcm1hbmNlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1vZHVsZS52ZXJib3NlID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChjb25zb2xlLmluZm8sIGNvbnNvbGUsIHNldHRpbmdzLm5hbWUgKyAnOicpO1xuICAgICAgICAgICAgICBtb2R1bGUudmVyYm9zZS5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFzZXR0aW5ncy5zaWxlbnQpIHtcbiAgICAgICAgICAgIG1vZHVsZS5lcnJvciA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoY29uc29sZS5lcnJvciwgY29uc29sZSwgc2V0dGluZ3MubmFtZSArICc6Jyk7XG4gICAgICAgICAgICBtb2R1bGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBlcmZvcm1hbmNlOiB7XG4gICAgICAgICAgbG9nOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgY3VycmVudFRpbWUsXG4gICAgICAgICAgICAgIGV4ZWN1dGlvblRpbWUsXG4gICAgICAgICAgICAgIHByZXZpb3VzVGltZVxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgaWYoc2V0dGluZ3MucGVyZm9ybWFuY2UpIHtcbiAgICAgICAgICAgICAgY3VycmVudFRpbWUgICA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICBwcmV2aW91c1RpbWUgID0gdGltZSB8fCBjdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgZXhlY3V0aW9uVGltZSA9IGN1cnJlbnRUaW1lIC0gcHJldmlvdXNUaW1lO1xuICAgICAgICAgICAgICB0aW1lICAgICAgICAgID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgIHBlcmZvcm1hbmNlLnB1c2goe1xuICAgICAgICAgICAgICAgICdOYW1lJyAgICAgICAgICAgOiBtZXNzYWdlWzBdLFxuICAgICAgICAgICAgICAgICdBcmd1bWVudHMnICAgICAgOiBbXS5zbGljZS5jYWxsKG1lc3NhZ2UsIDEpIHx8ICcnLFxuICAgICAgICAgICAgICAgICdFbGVtZW50JyAgICAgICAgOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgICdFeGVjdXRpb24gVGltZScgOiBleGVjdXRpb25UaW1lXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1vZHVsZS5wZXJmb3JtYW5jZS50aW1lcik7XG4gICAgICAgICAgICBtb2R1bGUucGVyZm9ybWFuY2UudGltZXIgPSBzZXRUaW1lb3V0KG1vZHVsZS5wZXJmb3JtYW5jZS5kaXNwbGF5LCA1MDApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlzcGxheTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgdGl0bGUgPSBzZXR0aW5ncy5uYW1lICsgJzonLFxuICAgICAgICAgICAgICB0b3RhbFRpbWUgPSAwXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICB0aW1lID0gZmFsc2U7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW9kdWxlLnBlcmZvcm1hbmNlLnRpbWVyKTtcbiAgICAgICAgICAgICQuZWFjaChwZXJmb3JtYW5jZSwgZnVuY3Rpb24oaW5kZXgsIGRhdGEpIHtcbiAgICAgICAgICAgICAgdG90YWxUaW1lICs9IGRhdGFbJ0V4ZWN1dGlvbiBUaW1lJ107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRpdGxlICs9ICcgJyArIHRvdGFsVGltZSArICdtcyc7XG4gICAgICAgICAgICBpZihtb2R1bGVTZWxlY3Rvcikge1xuICAgICAgICAgICAgICB0aXRsZSArPSAnIFxcJycgKyBtb2R1bGVTZWxlY3RvciArICdcXCcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJGFsbE1vZHVsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICB0aXRsZSArPSAnICcgKyAnKCcgKyAkYWxsTW9kdWxlcy5sZW5ndGggKyAnKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggKGNvbnNvbGUuZ3JvdXAgIT09IHVuZGVmaW5lZCB8fCBjb25zb2xlLnRhYmxlICE9PSB1bmRlZmluZWQpICYmIHBlcmZvcm1hbmNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCh0aXRsZSk7XG4gICAgICAgICAgICAgIGlmKGNvbnNvbGUudGFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKHBlcmZvcm1hbmNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkLmVhY2gocGVyZm9ybWFuY2UsIGZ1bmN0aW9uKGluZGV4LCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhWydOYW1lJ10gKyAnOiAnICsgZGF0YVsnRXhlY3V0aW9uIFRpbWUnXSsnbXMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZXJmb3JtYW5jZSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gbW9kaWZpZWQgZm9yIHRyYW5zaXRpb24gdG8gcmV0dXJuIGludm9rZSBzdWNjZXNzXG4gICAgICAgIGludm9rZTogZnVuY3Rpb24ocXVlcnksIHBhc3NlZEFyZ3VtZW50cywgY29udGV4dCkge1xuICAgICAgICAgIHZhclxuICAgICAgICAgICAgb2JqZWN0ID0gaW5zdGFuY2UsXG4gICAgICAgICAgICBtYXhEZXB0aCxcbiAgICAgICAgICAgIGZvdW5kLFxuICAgICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgICA7XG4gICAgICAgICAgcGFzc2VkQXJndW1lbnRzID0gcGFzc2VkQXJndW1lbnRzIHx8IHF1ZXJ5QXJndW1lbnRzO1xuICAgICAgICAgIGNvbnRleHQgICAgICAgICA9IGVsZW1lbnQgICAgICAgICB8fCBjb250ZXh0O1xuICAgICAgICAgIGlmKHR5cGVvZiBxdWVyeSA9PSAnc3RyaW5nJyAmJiBvYmplY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcXVlcnkgICAgPSBxdWVyeS5zcGxpdCgvW1xcLiBdLyk7XG4gICAgICAgICAgICBtYXhEZXB0aCA9IHF1ZXJ5Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAkLmVhY2gocXVlcnksIGZ1bmN0aW9uKGRlcHRoLCB2YWx1ZSkge1xuICAgICAgICAgICAgICB2YXIgY2FtZWxDYXNlVmFsdWUgPSAoZGVwdGggIT0gbWF4RGVwdGgpXG4gICAgICAgICAgICAgICAgPyB2YWx1ZSArIHF1ZXJ5W2RlcHRoICsgMV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBxdWVyeVtkZXB0aCArIDFdLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgOiBxdWVyeVxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgIGlmKCAkLmlzUGxhaW5PYmplY3QoIG9iamVjdFtjYW1lbENhc2VWYWx1ZV0gKSAmJiAoZGVwdGggIT0gbWF4RGVwdGgpICkge1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IG9iamVjdFtjYW1lbENhc2VWYWx1ZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZiggb2JqZWN0W2NhbWVsQ2FzZVZhbHVlXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gb2JqZWN0W2NhbWVsQ2FzZVZhbHVlXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZiggJC5pc1BsYWluT2JqZWN0KCBvYmplY3RbdmFsdWVdICkgJiYgKGRlcHRoICE9IG1heERlcHRoKSApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QgPSBvYmplY3RbdmFsdWVdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYoIG9iamVjdFt2YWx1ZV0gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IG9iamVjdFt2YWx1ZV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICggJC5pc0Z1bmN0aW9uKCBmb3VuZCApICkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBmb3VuZC5hcHBseShjb250ZXh0LCBwYXNzZWRBcmd1bWVudHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKGZvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gZm91bmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoJC5pc0FycmF5KHJldHVybmVkVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm5lZFZhbHVlLnB1c2gocmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHJldHVybmVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuZWRWYWx1ZSA9IFtyZXR1cm5lZFZhbHVlLCByZXNwb25zZV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYocmVzcG9uc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuZWRWYWx1ZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKGZvdW5kICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICA/IGZvdW5kXG4gICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbW9kdWxlLmluaXRpYWxpemUoKTtcbiAgICB9KVxuICA7XG4gIHJldHVybiAocmV0dXJuZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgID8gcmV0dXJuZWRWYWx1ZVxuICAgIDogdGhpc1xuICA7XG59O1xuXG4vLyBSZWNvcmRzIGlmIENTUyB0cmFuc2l0aW9uIGlzIGF2YWlsYWJsZVxuJC5mbi50cmFuc2l0aW9uLmV4aXN0cyA9IHt9O1xuXG4kLmZuLnRyYW5zaXRpb24uc2V0dGluZ3MgPSB7XG5cbiAgLy8gbW9kdWxlIGluZm9cbiAgbmFtZSAgICAgICAgICA6ICdUcmFuc2l0aW9uJyxcblxuICAvLyBoaWRlIGFsbCBvdXRwdXQgZnJvbSB0aGlzIGNvbXBvbmVudCByZWdhcmRsZXNzIG9mIG90aGVyIHNldHRpbmdzXG4gIHNpbGVudCAgICAgICAgOiBmYWxzZSxcblxuICAvLyBkZWJ1ZyBjb250ZW50IG91dHB1dHRlZCB0byBjb25zb2xlXG4gIGRlYnVnICAgICAgICAgOiBmYWxzZSxcblxuICAvLyB2ZXJib3NlIGRlYnVnIG91dHB1dFxuICB2ZXJib3NlICAgICAgIDogZmFsc2UsXG5cbiAgLy8gcGVyZm9ybWFuY2UgZGF0YSBvdXRwdXRcbiAgcGVyZm9ybWFuY2UgICA6IHRydWUsXG5cbiAgLy8gZXZlbnQgbmFtZXNwYWNlXG4gIG5hbWVzcGFjZSAgICAgOiAndHJhbnNpdGlvbicsXG5cbiAgLy8gZGVsYXkgYmV0d2VlbiBhbmltYXRpb25zIGluIGdyb3VwXG4gIGludGVydmFsICAgICAgOiAwLFxuXG4gIC8vIHdoZXRoZXIgZ3JvdXAgYW5pbWF0aW9ucyBzaG91bGQgYmUgcmV2ZXJzZWRcbiAgcmV2ZXJzZSAgICAgICA6ICdhdXRvJyxcblxuICAvLyBhbmltYXRpb24gY2FsbGJhY2sgZXZlbnRcbiAgb25TdGFydCAgICAgICA6IGZ1bmN0aW9uKCkge30sXG4gIG9uQ29tcGxldGUgICAgOiBmdW5jdGlvbigpIHt9LFxuICBvblNob3cgICAgICAgIDogZnVuY3Rpb24oKSB7fSxcbiAgb25IaWRlICAgICAgICA6IGZ1bmN0aW9uKCkge30sXG5cbiAgLy8gd2hldGhlciB0aW1lb3V0IHNob3VsZCBiZSB1c2VkIHRvIGVuc3VyZSBjYWxsYmFjayBmaXJlcyBpbiBjYXNlcyBhbmltYXRpb25lbmQgZG9lcyBub3RcbiAgdXNlRmFpbFNhZmUgICA6IHRydWUsXG5cbiAgLy8gZGVsYXkgaW4gbXMgZm9yIGZhaWwgc2FmZVxuICBmYWlsU2FmZURlbGF5IDogMTAwLFxuXG4gIC8vIHdoZXRoZXIgRVhBQ1QgYW5pbWF0aW9uIGNhbiBvY2N1ciB0d2ljZSBpbiBhIHJvd1xuICBhbGxvd1JlcGVhdHMgIDogZmFsc2UsXG5cbiAgLy8gT3ZlcnJpZGUgZmluYWwgZGlzcGxheSB0eXBlIG9uIHZpc2libGVcbiAgZGlzcGxheVR5cGUgICA6IGZhbHNlLFxuXG4gIC8vIGFuaW1hdGlvbiBkdXJhdGlvblxuICBhbmltYXRpb24gICAgIDogJ2ZhZGUnLFxuICBkdXJhdGlvbiAgICAgIDogZmFsc2UsXG5cbiAgLy8gbmV3IGFuaW1hdGlvbnMgd2lsbCBvY2N1ciBhZnRlciBwcmV2aW91cyBvbmVzXG4gIHF1ZXVlICAgICAgICAgOiB0cnVlLFxuXG4gIG1ldGFkYXRhIDoge1xuICAgIGRpc3BsYXlUeXBlOiAnZGlzcGxheSdcbiAgfSxcblxuICBjbGFzc05hbWUgICA6IHtcbiAgICBhbmltYXRpbmcgIDogJ2FuaW1hdGluZycsXG4gICAgZGlzYWJsZWQgICA6ICdkaXNhYmxlZCcsXG4gICAgaGlkZGVuICAgICA6ICdoaWRkZW4nLFxuICAgIGlud2FyZCAgICAgOiAnaW4nLFxuICAgIGxvYWRpbmcgICAgOiAnbG9hZGluZycsXG4gICAgbG9vcGluZyAgICA6ICdsb29waW5nJyxcbiAgICBvdXR3YXJkICAgIDogJ291dCcsXG4gICAgdHJhbnNpdGlvbiA6ICd0cmFuc2l0aW9uJyxcbiAgICB2aXNpYmxlICAgIDogJ3Zpc2libGUnXG4gIH0sXG5cbiAgLy8gcG9zc2libGUgZXJyb3JzXG4gIGVycm9yOiB7XG4gICAgbm9BbmltYXRpb24gOiAnRWxlbWVudCBpcyBubyBsb25nZXIgYXR0YWNoZWQgdG8gRE9NLiBVbmFibGUgdG8gYW5pbWF0ZS4gIFVzZSBzaWxlbnQgc2V0dGluZyB0byBzdXJwcmVzcyB0aGlzIHdhcm5pbmcgaW4gcHJvZHVjdGlvbi4nLFxuICAgIHJlcGVhdGVkICAgIDogJ1RoYXQgYW5pbWF0aW9uIGlzIGFscmVhZHkgb2NjdXJyaW5nLCBjYW5jZWxsaW5nIHJlcGVhdGVkIGFuaW1hdGlvbicsXG4gICAgbWV0aG9kICAgICAgOiAnVGhlIG1ldGhvZCB5b3UgY2FsbGVkIGlzIG5vdCBkZWZpbmVkJyxcbiAgICBzdXBwb3J0ICAgICA6ICdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBDU1MgYW5pbWF0aW9ucydcbiAgfVxuXG59O1xuXG5cbn0pKCBqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQgKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5pbXBvcnQgJy4vanMnXG4iXSwibmFtZXMiOlsicGFyc2VLZXkiLCJrZXkiLCJyZXBsYWNlIiwid29yZHMiLCJ0b1VwcGVyQ2FzZSIsIiQiLCJmbiIsImV4dGVuZCIsImFkZHJlc3NCb29rIiwiZWxlbWVudCIsInNlbGVjdCIsInBhcmVudHMiLCJwcmV2IiwiZmluZCIsImZpbmRCeU5hbWUiLCJuYW1lIiwiZHJvcGRvd24iLCJmb3JjZVNlbGVjdGlvbiIsIm9uQ2hhbmdlIiwidGV4dCIsImNob2ljZSIsImRhdGEiLCJwcm92aW5jZUNvZGUiLCJwcm92aW5jZU5hbWUiLCJwcm92aW5jZUNvbnRhaW5lciIsInBhcmVudCIsImdldCIsImVhY2giLCJpbmRleCIsImlucHV0IiwidmFsIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsInZhbHVlIiwiZmllbGQiLCJpbmRleE9mIiwiY2hhbmdlIiwiZXhpc3RzIiwic2V0SW50ZXJ2YWwiLCJwcm92aW5jZUNvZGVGaWVsZCIsInByb3ZpbmNlTmFtZUZpZWxkIiwicHJvdmluY2VJc0xvYWRpbmciLCJhdHRyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2xlYXJJbnRlcnZhbCIsImlzIiwicHJvcCIsImZpbHRlciIsIk9yZGVyQ3JlYXRlQWRkcmVzc1NlbGVjdCJdLCJzb3VyY2VSb290IjoiIn0=