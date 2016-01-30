function CustomSet (arr){
	this.set = arr;
}

CustomSet.prototype.delete = function(val) {
	var index = this.set.indexOf(val);
		if(index === -1){
			return this
		}
		else{
	this.set.splice(index, 1)
	return this
	}	
}

CustomSet.prototype.eql = function(instance) {
	var thisArraySorted = this.set.sort()
	var instanceSorted = instance.set.sort()
	for (var i = 0; i<thisArraySorted.length; i++){
		if (thisArraySorted[i] !== instanceSorted[i]){
			return false
		}
	}
	return true
}

CustomSet.prototype.difference = function(instance){
	var array=[]
	for(var i=0; i< this.set.length; i++){
		if (instance.set.indexOf(this.set[i])=== -1){
			array.push(this.set[i])
		}
	};
	this.set = array;
	return this;
}


module.exports = CustomSet;
