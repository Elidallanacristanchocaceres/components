class ElidallanaElement extends HTMLElement {
    constructor() {
        super();
        
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="resultados" style="display:none; margin-top: 20px;">
                <h3>Información ingresada:</h3>
                <img src="/images/yo.jpg" alt="">
                <p><strong>Nombre:</strong> <span id="resultado-nombre"></span></p>
                <p><strong>Edad:</strong> <span id="resultado-edad"></span></p>
                <p><strong>Correo Electrónico:</strong> <span id="resultado-correo"></span></p>
                <p><strong>Dirección:</strong> <span id="resultado-direccion"></span></p>
                <p><strong>Hobbies:</strong> <span id="resultado-hobbies"></span></p>
            </div>
        `;

        const resultados = this.querySelector("#resultados");

        const nombre = this.getAttribute('data-nombre');
        const edad = this.getAttribute('data-edad');
        const correo = this.getAttribute('data-correo');
        const direccion = this.getAttribute('data-direccion');
        const hobbies = this.getAttribute('data-hobbies');

        this.querySelector("#resultado-nombre").textContent = nombre;
        this.querySelector("#resultado-edad").textContent = edad;
        this.querySelector("#resultado-correo").textContent = correo;
        this.querySelector("#resultado-direccion").textContent = direccion;
        this.querySelector("#resultado-hobbies").textContent = hobbies;

        resultados.style.display = "block";
    }
}

customElements.define("elidallana-element", ElidallanaElement);
