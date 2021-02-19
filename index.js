var recipes = {Eggs: 3}

var updateObjectWithKeyAndValue = (obj, key, value) => Object.assign({}, obj, {[key]: value});

var destructivelyUpdateObjectWithKeyAndValue = (obj, key, value) => Object.assign(obj, {[key]: value});
