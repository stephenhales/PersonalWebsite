exports.render = (req, res) => {
	let ctx = {url: req.originalUrl};
	let page = req.vue.renderToStream(ctx);
}