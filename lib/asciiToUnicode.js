var fs = require("fs");

String.prototype.allReplace = function(obj) {
  var retStr = this;
  for (var x in obj) {
      retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
  }
  return retStr;
};

var asciiToUnicode = {
  convert: function(args) {
    if (!args || !args.lang) throw 'INVALID: method arguments.';
    if (!args.asciiFontId) throw 'REQUIRED: ASCII font ID.';
    if (!args.text) throw 'NOTHING TO CONVERT.';

    var text = args.text;

    var fp = `./charse/${args.lang}/${args.asciiFontId}.cmp`;
    var mapJSONObj = JSON.parse(fs.readFileSync(fp, "utf8"));

    return text.allReplace(mapJSONObj)
  }
};

module.exports = asciiToUnicode;
