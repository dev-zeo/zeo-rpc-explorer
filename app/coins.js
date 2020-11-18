var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var zeo = require("./coins/zeo.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	'ZEO':zeo,

	"coins":["BTC", "LTC","ZEO"]
};