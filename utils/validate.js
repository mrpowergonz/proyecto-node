const validationDNI = (dni) => {/^(?:\d{8}([A-Z]))|(?:[XYZ]\d{7}([A-Z]))$/i.test(dni);};
module.exports= {validationDNI}