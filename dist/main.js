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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Cliente/Cliente.js":
/*!********************************!*\
  !*** ./src/Cliente/Cliente.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cliente; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Cliente = function Cliente(_ref) {\n  var id = _ref.id,\n      nome = _ref.nome,\n      email = _ref.email,\n      cpf = _ref.cpf;\n\n  _classCallCheck(this, Cliente);\n\n  this.id = id;\n  this.nome = nome;\n  this.email = email;\n  this.cpf = cpf;\n};\n\n\n\n//# sourceURL=webpack:///./src/Cliente/Cliente.js?");

/***/ }),

/***/ "./src/ContaCorrente/ContaCorrente.js":
/*!********************************************!*\
  !*** ./src/ContaCorrente/ContaCorrente.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContaCorrente; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ContaCorrente = /*#__PURE__*/function () {\n  function ContaCorrente(_ref) {\n    var cliente = _ref.cliente,\n        id = _ref.id,\n        saldoPoupanca = _ref.saldoPoupanca;\n\n    _classCallCheck(this, ContaCorrente);\n\n    this.id = id;\n    this.saldoPoupanca = saldoPoupanca;\n    this.cliente = cliente;\n    this._movimentacoes = [];\n  }\n\n  _createClass(ContaCorrente, [{\n    key: \"addMovimentacao\",\n    value: function addMovimentacao(valor) {\n      this._movimentacoes.push(valor);\n    }\n  }, {\n    key: \"saldoContaCorrente\",\n    get: function get() {\n      var total = 0;\n      total = this._movimentacoes.map(function (value) {\n        return value.custo;\n      }).reduce(function (ac, cc) {\n        return ac += cc;\n      }, 0);\n      return total.toFixed(2);\n    }\n  }]);\n\n  return ContaCorrente;\n}();\n\n\n\n//# sourceURL=webpack:///./src/ContaCorrente/ContaCorrente.js?");

/***/ }),

/***/ "./src/Movimentacoes/movimentacoes.js":
/*!********************************************!*\
  !*** ./src/Movimentacoes/movimentacoes.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Movimentacoes; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Movimentacoes = function Movimentacoes(_ref) {\n  var operacao = _ref.operacao,\n      custo = _ref.custo,\n      action = _ref.action;\n\n  _classCallCheck(this, Movimentacoes);\n\n  this.operacao = operacao;\n  this.custo = custo;\n  this.action = action;\n};\n\n\n\n//# sourceURL=webpack:///./src/Movimentacoes/movimentacoes.js?");

/***/ }),

/***/ "./src/aberturaDeContas.js":
/*!*********************************!*\
  !*** ./src/aberturaDeContas.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar aberturaDeContas = [{\n  clienteID: \"asd23423-sad3211-ssd546ad\",\n  clienteNome: \"João Faria\",\n  clienteEmail: \"joao@mail.com\",\n  clienteCPF: \"222.222.222-22\",\n  contaPoupanca: 1500.00,\n  contaCorrente: {\n    id: \"2h3i12uh-0ggh0d9h-93hb9fh\",\n    saldo: 253.22,\n    movimentacao: [{\n      operacao: \"Pizza Express\",\n      custo: 120.22,\n      action: \"remove\"\n    }, {\n      operacao: \"O Rei Merlin\",\n      custo: 40.22,\n      action: \"remove\"\n    }, {\n      operacao: \"Deposito Cliente\",\n      custo: 120.22,\n      action: \"add\"\n    }]\n  }\n}, {\n  clienteID: \"aasd3f54ndc-09n5058376-29385029v8n\",\n  clienteNome: \"Pedro Faria\",\n  clienteEmail: \"pedro@mail.com\",\n  clienteCPF: \"333.333.333-22\",\n  contaPoupanca: 200.00,\n  contaCorrente: {\n    id: \"2sadas12-123adhsadh-93hb23ra\",\n    saldo: 2253.22,\n    movimentacao: [{\n      operacao: \"Autoposto SuperGas\",\n      custo: 30.22,\n      action: \"remove\"\n    }, {\n      operacao: \"Restaurante BoFood\",\n      custo: 230.22,\n      action: \"remove\"\n    }, {\n      operacao: \"Fast soup\",\n      custo: 80.22,\n      action: \"remove\"\n    }]\n  }\n}, {\n  clienteID: \"bhj3b1pk2-hhad43287-8h9h9g873g94\",\n  clienteNome: \"João Rubens de Souza\",\n  clienteEmail: \"joao@mail.com\",\n  clienteCPF: \"132.321.456-22\",\n  contaPoupanca: 1500.00,\n  contaCorrente: {\n    id: \"2saasd12-asdsad2312dh-45sdhb2ra\",\n    saldo: 253.22,\n    movimentacao: [{\n      operacao: \"Deposito Luiz da Silva\",\n      custo: 998.44,\n      action: \"add\"\n    }, {\n      operacao: \"Deposito Mapple LTDA\",\n      custo: 575.89,\n      action: \"add\"\n    }, {\n      operacao: \"Compra BestBuyer\",\n      custo: 1320.22,\n      action: \"remove\"\n    }]\n  }\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (aberturaDeContas);\n\n//# sourceURL=webpack:///./src/aberturaDeContas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cliente_Cliente_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cliente/Cliente.js */ \"./src/Cliente/Cliente.js\");\n/* harmony import */ var _ContaCorrente_ContaCorrente_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContaCorrente/ContaCorrente.js */ \"./src/ContaCorrente/ContaCorrente.js\");\n/* harmony import */ var _aberturaDeContas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aberturaDeContas.js */ \"./src/aberturaDeContas.js\");\n/* harmony import */ var _Movimentacoes_movimentacoes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Movimentacoes/movimentacoes.js */ \"./src/Movimentacoes/movimentacoes.js\");\n\n\n\n\nvar contasCorrentesCriadas = [];\n_aberturaDeContas_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach(function (conta) {\n  var novaContaCorrente = addContaCorrente(conta);\n  conta.contaCorrente.movimentacao.forEach(function (value) {\n    addMovimentacao(novaContaCorrente, value);\n  });\n  contasCorrentesCriadas.push(novaContaCorrente);\n});\n\nfunction addContaCorrente(conta) {\n  var novoCliente = new _Cliente_Cliente_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    id: conta.clienteID,\n    nome: conta.clienteNome,\n    email: conta.clienteEmail,\n    cpf: conta.clienteCPF\n  });\n  var novaContaCorrente = new _ContaCorrente_ContaCorrente_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    id: conta.contaCorrente.id,\n    contaPoupanca: conta.contaPoupanca,\n    cliente: novoCliente\n  });\n  return novaContaCorrente;\n}\n\nfunction addMovimentacao(novaContaCorrente, movimento) {\n  var _movimentacao = new _Movimentacoes_movimentacoes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    operacao: movimento.operacao,\n    custo: movimento.custo,\n    action: movimento.action\n  });\n\n  novaContaCorrente.addMovimentacao(_movimentacao);\n}\n\nfunction exibirContas(contas) {\n  contas.forEach(function (conta, index) {\n    console.log(\"____ Dados do Cliente: \".concat(index, \" ________________\"));\n    console.log(\"ID:\", conta.cliente.id);\n    console.log(\"Nome:\", conta.cliente.nome);\n    console.log(\"E-mail:\", conta.cliente.email);\n    console.log(\"Cpf:\", conta.cliente.cpf);\n    console.log(\"Saldo Poupança: \", conta.saldo);\n    console.log(\"Saldo Conta corrente: \", conta.saldoContaCorrente);\n    console.log(\"__________Movimentacoes____________\");\n\n    conta._movimentacoes.forEach(function (movimentacao) {\n      console.log(\"Opercao: \", movimentacao.operacao);\n      console.log(\"Custo: \", movimentacao.custo);\n      console.log(\"Action: \", movimentacao.action);\n    });\n  });\n}\n\nexibirContas(contasCorrentesCriadas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });