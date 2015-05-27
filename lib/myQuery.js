function Library(string){
	if(/^\./.test(string)){
		var selectedString = document.getElementsByClassName(string.slice(1));
	}else if (/^\#/.test(string)) {
		var selectedString = document.getElementById(string.slice(1));
	}else{
		var selectedString = document.getElementsByTagName(string);
	}
	this[0] = selectedString;
};

	Library.prototype.css = function(attribute, value){
		for(var i = 0; i < this[0].length; i++){
			this[0][i].style[attribute] = value
		};
	}

	Library.prototype.remove = function () {
		var arrayLength = this[0].length;
		for(var i = 0; i < arrayLength; i++){
			this[0][0].parentNode.removeChild(this[0][0]);
		}
	};

	Library.prototype.append = function (html) {
		for(var i = 0 ; i < this[0].length; i++){
			this[0][i].innerHTML = this[0][i].innerHTML + html;
		}
	};
var myQuery = function(string){
	return new Library(string);
};
