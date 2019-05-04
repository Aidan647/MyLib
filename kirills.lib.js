function make_pos(x, y, z = false){
    let pos = []
    pos.x = x
    pos.y = y
    pos.z = z
    return pos
}
function DeepCopy(x) {
	let y = []
	for (key in x) {
		if (typeof (x[key]) == "object" || typeof (x[key]) == "array") {
			y[key] = DeepCopy(x[key]);
		} else {
			y[key] = x[key]
		}
	}
	return y
}
function arr2obj2json(arr, js=false) {
	let obj = {}
	for (key in arr) {
		if (typeof (arr[key]) == "object" || typeof (arr[key]) == "array") {
			obj[key] = arr2obj2json(arr[key]);
		} else {
			obj[key] = arr[key]
		}
	}
	if(js){
		return JSON.stringify(obj)
	}else{
	return obj
	}
}
function json2obj2arr(obj, js=false) {
	let arr = []
	if (js) {
		obj = JSON.parse(obj)
	}
	for (key in obj) {
		if (typeof (obj[key]) == "object" || typeof (obj[key]) == "array") {
			arr[key] = json2obj2arr(obj[key]);
		} else {
			arr[key] = obj[key]
		}
	}
	return arr
} 