/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/dataFormatter.js":
/*!*****************************************!*\
  !*** ./src/js/modules/dataFormatter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function dataGeneralFormatted(data = {}, defaultFiller = '') {
  let {
    desc,
    email,
    firstPhone,
    secondaryPhone,
    name,
    workers
  } = data;
  let dataFormatted = {
    name,
    email,
    primaryPhone: firstPhone,
    secondaryPhone,
    description: desc
  };
  return dataFormatted;
}

/* harmony default export */ __webpack_exports__["default"] = (dataGeneralFormatted);

/***/ }),

/***/ "./src/js/modules/fillerMainForm.js":
/*!******************************************!*\
  !*** ./src/js/modules/fillerMainForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function fillerMainForm(generalFormFields, dataForGeneralForm, defaultFiller = '') {
  generalFormFields.forEach((item, key) => {
    let fieldInput = item.querySelector('input');
    let parentItem = item.querySelector('MuiFormLabel-root', 'MuiFormLabel-filled');
    let startValue = fieldInput.value;
    item.querySelector('.MuiFormLabel-root').classList.add('MuiInputLabel-shrink', 'MuiFormLabel-filled');
    item.querySelector('.MuiFormLabel-root').dataset.shrink = true;
    item.addEventListener('keypress', e => {
      let valueTemporary = fieldInput.value;
      console.log('test temp', valueTemporary);
    });
    item.addEventListener('click', e => {
      let valueTemporary = fieldInput.value;
      startValue = valueTemporary;
    });

    if (fieldInput.value != '') {
      return;
    }

    if (dataForGeneralForm[key] == null) {
      item.querySelector('.MuiFormLabel-root').classList.add('MuiInputLabel-shrink', 'MuiFormLabel-filled');
      item.querySelector('.MuiFormLabel-root').dataset.shrink = true;
      fieldInput.value = defaultFiller;
      return;
    }

    if (fieldInput.value == '') {
      if (startValue != undefined) {
        fieldInput.value = startValue;
      }

      fieldInput.value = `${dataForGeneralForm[key]}`;
      item.querySelector('.MuiFormLabel-root').classList.add('MuiInputLabel-shrink', 'MuiFormLabel-filled');
      item.querySelector('.MuiFormLabel-root').dataset.shrink = true;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (fillerMainForm);

/***/ }),

/***/ "./src/js/modules/generateWorkerRow.js":
/*!*********************************************!*\
  !*** ./src/js/modules/generateWorkerRow.js ***!
  \*********************************************/
/*! exports provided: generateWorkerRow, removeParentNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateWorkerRow", function() { return generateWorkerRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeParentNode", function() { return removeParentNode; });
/* harmony import */ var _getDataWorkers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataWorkers */ "./src/js/modules/getDataWorkers.js");


function generateWorkerRow(data, parentSelector, defaultFiller = '-') {
  let dataWorkers = Object(_getDataWorkers__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
  let rowGenerated;
  dataWorkers.forEach(item => {
    let {
      fullName,
      birthDay,
      profession,
      experience,
      gender
    } = item;
    rowGenerated = `<tr class="MuiTableRow-root">
                <th class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall" role="cell" scope="row">${fullName}</th>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">${birthDay != null ? birthDay : defaultFiller}</td>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">${profession != null ? profession : defaultFiller}</td>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">${experience != null ? experience : defaultFiller}</td>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">${gender != null ? gender : defaultFiller}</td>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
                    <div class="MuiBox-root jss26">
                        <svg class="MuiSvgIcon-root jss2" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                            ></path>
                        </svg>
                    </div>
                </td>
            </tr>`;
    parentSelector.insertAdjacentHTML('beforeEnd', rowGenerated);
  });
}

function removeParentNode(actionElem, parentEl) {
  let removeBtns = document.querySelectorAll(actionElem);
  removeBtns.forEach(item => {
    item.addEventListener('click', () => {
      let findParent = item.closest(parentEl);
      findParent.remove();
    });
  });
}



/***/ }),

/***/ "./src/js/modules/getDataWorkers.js":
/*!******************************************!*\
  !*** ./src/js/modules/getDataWorkers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getDataForWorkers(data, defaultFiller = '-') {
  let dataWorkers = data.workers.flatMap(item => {
    let {
      dob,
      experience,
      firstName,
      gender,
      job,
      lastName
    } = item;
    let fullName = `${firstName === null ? '' : firstName} ${lastName === null ? '' : lastName}`;
    if (lastName === null && firstName === null) fullName = defaultFiller;
    return {
      fullName,
      birthDay: dob,
      profession: job,
      experience,
      gender
    };
  });
  return dataWorkers;
}

/* harmony default export */ __webpack_exports__["default"] = (getDataForWorkers);

/***/ }),

/***/ "./src/js/modules/showModalByTime.js":
/*!*******************************************!*\
  !*** ./src/js/modules/showModalByTime.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showModalByTime(selector, time = getRandomInt(), autoHide = false) {
  setTimeout(() => {
    document.querySelector(selector).style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (autoHide) {
      setTimeout(() => {
        document.querySelector(selector).style.display = 'none';
        document.body.style.overflow = 'visible';
      }, time * 3);
    }
  }, time);
}

/* harmony default export */ __webpack_exports__["default"] = (showModalByTime);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dataFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dataFormatter */ "./src/js/modules/dataFormatter.js");
/* harmony import */ var _modules_generateWorkerRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/generateWorkerRow */ "./src/js/modules/generateWorkerRow.js");
/* harmony import */ var _modules_showModalByTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showModalByTime */ "./src/js/modules/showModalByTime.js");
/* harmony import */ var _modules_fillerMainForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/fillerMainForm */ "./src/js/modules/fillerMainForm.js");




$(window).load(() => {
  let startValue;
  let defaultFiller = '-';
  let inputsReset = document.querySelectorAll('input');
  inputsReset.forEach(item => {
    item.addEventListener('click', e => {
      item.value = e.target.value;
    });
  });
  $("button.MuiFab-root:contains('Fill')").click(() => {
    let dataFormatted = Object(_modules_dataFormatter__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    let dataForGeneralForm = Object.values(dataFormatted);
    let generalForm = document.querySelector('.MuiBox-root.jss1');
    let generalFormFields = generalForm.querySelectorAll('.MuiFormControl-root');
    generalFormFields.forEach(item => {
      item.addEventListener('click', e => {
        Object(_modules_fillerMainForm__WEBPACK_IMPORTED_MODULE_3__["default"])(generalFormFields, dataForGeneralForm, defaultFiller);
      });
    });

    function getRandomInt(max = 9) {
      return Math.floor(Math.random() * max) * 1000;
    }

    const validationField = (selector, pattern = '') => {
      const fields = document.querySelectorAll(selector);
      fields.forEach(item => {
        item.setAttribute(pattern, regex);
      });
    };

    var workerTableParent = document.querySelector('.jss4 .MuiTableBody-root');
    Object(_modules_showModalByTime__WEBPACK_IMPORTED_MODULE_2__["default"])('#modal', getRandomInt(), true);
    Object(_modules_generateWorkerRow__WEBPACK_IMPORTED_MODULE_1__["generateWorkerRow"])(data, workerTableParent);
    Object(_modules_fillerMainForm__WEBPACK_IMPORTED_MODULE_3__["default"])(generalFormFields, dataForGeneralForm, defaultFiller);
    Object(_modules_generateWorkerRow__WEBPACK_IMPORTED_MODULE_1__["removeParentNode"])('.jss26', '.MuiTableRow-root');
  });
  let checkForm = document.querySelector('.jss6 button');
  checkForm.addEventListener('click', e => {//e.stopImmediatePropagation();
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map