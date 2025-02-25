class ElidallanaElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const nombre = this.getAttribute('data-nombre');
        const edad = this.getAttribute('data-edad');
        const correo = this.getAttribute('data-correo');
        const direccion = this.getAttribute('data-direccion');
        const hobbies = this.getAttribute('data-hobbies');

        this.innerHTML = `
            <div id="resultados" style="margin-top: 20px;">
                <h3>Información ingresada:</h3>
                <img src="/images/yo.jpg" alt="">
                <p><strong>Nombre:</strong> <span id="resultado-nombre">${nombre}</span></p>
                <p><strong>Edad:</strong> <span id="resultado-edad">${edad}</span></p>
                <p><strong>Correo Electrónico:</strong> <span id="resultado-correo">${correo}</span></p>
                <p><strong>Dirección:</strong> <span id="resultado-direccion">${direccion}</span></p>
                <p><strong>Hobbies:</strong> <span id="resultado-hobbies">${hobbies}</span></p>
            </div>
        `;
    }
}

customElements.define("elidallana-element", ElidallanaElement);

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
       `;
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

            this.style.display = "none";
            document.body.appendChild(resultados);
        });
    }
}

customElements.define("formulario-element", FormularioElement);