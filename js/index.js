Array.prototype.RetArrFromOnlyPlace = function (
		fromWherex = 0, 
		fromWherey = this.length,
		LOrR = false,
		all = true
	) {
		let newArr = [];
		for(let i = 0; i < this.length; i++) {
			if(all) {
				if(LOrR && i <= fromWherex && i >= fromWherey) 
					newArr.push(this[i]); 
				else if(!LOrR && i >= fromWherex && i <= fromWherey)
					newArr.push(this[i]);
			}else{
				if(LOrR && i < fromWherex && i > fromWherey) 
					newArr.push(this[i]); 
				else if(!LOrR && i > fromWherex && i < fromWherey)
					newArr.push(this[i]);
			}
		}
		if(newArr.length === 0) 
			console.log('error')
		else 
	return newArr;
}

Object.prototype.iterator = function() {
	let Arr = []
	for(let iterator in this)
		if(typeof this[iterator] !== 'function')
			Arr.push(this[iterator]);
	return Arr;
}

Array.prototype.iterator = function() {
	let Arr = []
	for(let i = 0; i < this.length; i++)
		if(typeof this[iterator] !== 'function') {
			Arr.push(this[i]);
			arguments[0](this[i],i);
		}
	return Arr;
}

const CreateElement = (array, num, type) => {
	let Arr = array;
	for(let i = 0; i < num; i++) 
		Arr[i] = document.createElement(type)			
	return Arr;
}

function AppendElement() {
	this.first = function(source, luck) {
		for(let i = 0; i < luck.length; i++)
			source.appendChild(luck[i]);
	}
	this.second = function(source, luck) {
		for(let i = 0; i < luck.length; i++)
			source[i].appendChild(luck[i]);
	}
}

const setIds = (idArr, sourArr) => {
	let sour = idArr;
		for(let i = 0; i < sourArr.length; i++)
			sourArr[i].id = sour[i]
}

function addStylesCSS() {
	this.withoutArr = function(objectCSS, elem, ...args) {
		elem.style.cssText += objectCSS.style
		if(args.length != 0)
			for(let i = 0; i < args.length; i++)
				args[i].style.cssText += objectCSS.style;	
	}
	this.ArrCSS = function(objectCSS, arr, callback, ...args) {
		for(let i = 0; i < arr.length; i++) 
			arr[i].style.cssText += objectCSS.style;
		if(args.length !== 0) 
			for(let i = 0; i < args.length; i++)
				for(let x = 0; x < args[i].length; x++)
					args[i][x].style.cssText += callback(x);
	}	
}