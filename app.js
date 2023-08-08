const cuilCalculate = () => {
        let dni = document.getElementById("dni").value;
        let datos = '';
        if (document.getElementById("man").checked) {
                datos = '20' + dni.toString();
        } else if (document.getElementById("woman").checked) {
                datos = '27' + dni.toString();
        } else if (document.getElementById("buss").checked) {
                datos = '30' + dni.toString();
        }

        let numeros = [];
        for (var i = 0; i < datos.length; i++) {
                numeros.push(parseInt(datos[i]));
        }

        let multiplicadores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        let suma = 0;
        for (let i = 0; i < multiplicadores.length; i++) {
                if (numeros[i] !== undefined) {
                        let multiplicacion = numeros[i] * multiplicadores[i];
                        suma += multiplicacion;
                }
        }

        let final = suma % 11;
        document.getElementById("return").innerHTML = `Su nro de cuil es ${datos}-${final}`;
}