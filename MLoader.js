function MLoader(url) {
	scriptTag = document.createElement("Script");
	scriptTag.setAttribute("type", "text/javascript");
	scriptTag.setAttribute("src", url);
	
	this.attachedHandler = function() {
		document.head.appendChild(scriptTag);
	};
	
	if (document.body){
		this.attachedHandler();
	} else {
		if(window.addEventListener){
			window.addEventListener("load", this.attachedHandler);
		} else {
			window.attachEvent("load", this.attachedHandler);
		};
	}
}