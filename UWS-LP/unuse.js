var uncss = require("uncss");

var files = ["my", "array", "of", "HTML", "files", "or", "http://urls.com"],
	options = {
		banner: false,
		csspath: "css/",
		htmlroot: "UWS-LP",
		ignore: ["#added_at_runtime", /test\-[0-9]+/],
		ignoreSheets: [/fonts.googleapis/],
		inject: function (window) {
			window.document
				.querySelector("html")
				.classList.add("no-csscalc", "csscalc");
		},
		jsdom: {
			userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)",
		},
		media: ["(min-width: 700px) handheld and (orientation: landscape)"],
		raw: "h1 { color: green }",
		report: false,
		strictSSL: true,
		stylesheets: [
			"lib/bootstrap/dist/css/bootstrap.css",
			"src/public/css/main.css",
		],
		timeout: 1000,
		uncssrc: ".uncssrc",
		userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)",
	};

uncss(files, options, function (error, output) {
	console.log(output);
});

/* Look Ma, no options! */
uncss(files, function (error, output) {
	console.log(output);
});

/* Specifying raw HTML */
var rawHtml = "...";

uncss(rawHtml, options, function (error, output) {
	console.log(output);
});
