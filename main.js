import "./informacion.js";

class FormularioElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <form id="miform">
            <img src="/images/yo.jpg" alt="">
            <label for="nombre"><strong>Nombre:</strong></label>
            <input type="text" id="nombre" required> 

            <label for="edad"><strong>Edad:</strong></label>
            <input type="number" id="edad" required> 

            <label for="correo"><strong>Correo Electrónico:</strong></label>
            <input type="email" id="correo" required>

            <label for="direccion"><strong>Dirección:</strong></label>
            <input type="text" id="direccion" required> 

            <label for="hobbies"><strong>Hobbies:</strong></label>
            <input type="text" id="hobbies" required>

            <button type="submit">Enviar</button>
        </form>
       ` ;
    }

    connectedCallback() {
        const form = this.querySelector("#miform");
        
        form.addEventListener("submit", (event) => {
            event.preventDefault(); 
            
            const nombre = this.querySelector("#nombre").value;
            const edad = this.querySelector("#edad").value;
            const correo = this.querySelector("#correo").value;
            const direccion = this.querySelector("#direccion").value;
            const hobbies = this.querySelector("#hobbies").value;

            const resultados = document.createElement('elidallana-element');
            resultados.setAttribute('data-nombre', nombre);
            resultados.setAttribute('data-edad', edad);
            resultados.setAttribute('data-correo', correo);
            resultados.setAttribute('data-direccion', direccion);
            resultados.setAttribute('data-hobbies', hobbies);
            document.body.appendChild(resultados);
        });

        
    }
}

customElements.define("formulario-element", FormularioElement); 