function convertToObj(jsonAsString) {
    let json = JSON.parse(jsonAsString);

    Object.keys(json).forEach(key => {
        console.log(`${key}: ${json[key]}`);
    });
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')