//exports = module.exports = global;
QUnit = require("./qunit/qunit.js").QUnit;
var qunitTap = require("./qunit/qunit-tap.js").qunitTap;
jQuery = require( "../index.js" );

var sys = tryRequireThese("util", "system");
puts = (typeof sys.puts === 'function') ? sys.log : sys.print;

qunitTap(QUnit, puts, {noPlan: true});

QUnit.init();
QUnit.config.blocking = false;
QUnit.config.autorun = true;
QUnit.config.updateRate = 0;
QUnit.tap.showDetailsOnFailure = true;

assert = QUnit;
extend(global, QUnit);

function extend(a, b) {
	for ( var prop in b ) {
		a[prop] = b[prop];
	}
	return a;
}

function tryRequireThese() {
	var args = Array.prototype.slice.apply(arguments);
	for(var i=0; i < args.length; i+=1) {
		try {
			return require(args[i]);
		} catch(e) {
			// ignore
		}
	}
	throw new Error("cannot find moduele: " + args);
}
