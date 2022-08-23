function isString(val) {
	return typeof(val) === 'string';
}

function concatStrings(firstStr, separator) {
	let result;
	let prevArg = firstStr;
	
	if ( isString(firstStr) ) {
		result = firstStr;
	} else {
		result = '';
	}
	
	function func(str) {
		if ( !isString(prevArg) && str ) {
			return  func;
		}

		prevArg = str;

		if ( isString(str) ) {
			if ( isString(separator) ) {
			result += separator + str;
			} else {
				result += str;
			} 
			
			return func;
		} else if (str === undefined ) {
			return result;
		} else {
			return func;
		}
	}
	
	return func;	
}

function notValid(val) {
	return typeof(val) !== 'number' || val === Infinity || val === -Infinity || isNaN(val); 
}

class Calculator {
	constructor(first, second) {
		if ( notValid(first) || notValid(second) ) {
			throw new Error('Ошибка!');
		}

		this.X = first;
		this.Y = second;
		this.setX = this.setX.bind(this);
		this.setY = this.setY.bind(this);
		this.logSum = this.logSum.bind(this);
		this.logMul = this.logMul.bind(this);
		this.logSub = this.logSub.bind(this);
		this.logDiv = this.logDiv.bind(this);
  }
	
	setX(num) {
		if ( notValid(num) ) {
      throw new Error('Ошибка!');
    }

		return this.X = num;
	} 

	setY(num) {
		if ( notValid(num) ) {
      throw new Error('Ошибка!');
    }

		return this.Y = num;
	}
	
	logSum() {
		return this.X + this.Y;
	}
	
	logMul() {
		return this.X * this.Y;
	}

	logSub() {
		return this.X - this.Y;
	}

	logDiv() {
		if (this.Y === 0) {
      throw new Error('Ошибка!');
    }

		return this.X / this.Y;
	}
}