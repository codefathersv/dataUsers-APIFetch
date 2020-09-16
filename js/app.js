(() => {

    const $datos = document.getElementById("datos");

    $datos.addEventListener("click", (e) => {
        const $filas = document.getElementById("filas");

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {

                // console.log(res);
                // se convierte a formato json
                return res.ok ? res.json() : Promise.reject(res);

            })
            .then((json) => {

                json.forEach(el => {
                    $filas.innerHTML += `
                        <tr>
                            <td>${el.name}</td>
                            <td>${el.email}</td>
                            <td>${el.phone}</td>
                        </tr>
                    `;
                })
            
                $datos.disabled = true;

            })
            .catch((err) => {

                let message = err.statusText || "Ocurrio un error";
                $filas.innerHTML = `
                    <tr>
                        <td colspan="3">Error ${err.status}: ${message}</td>
                    </tr>
                `;

            })
            .finally();
    })

})();
