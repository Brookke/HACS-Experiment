function createCookie(name,value,days) {
	localStorage.setItem(name,value)
}

function readCookie(name) {
	return localStorage.getItem(name)
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getID() {
	if (!readCookie("userID")) {
		var hashids = new Hashids("zAfLJIzNlzh455bDguM1"),
	  	id = hashids.encode(Date.now())
	  	createCookie("userID", id, 30)
	  	return id
	} else {
		return readCookie("userID")
	}
}