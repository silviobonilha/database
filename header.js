class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-red-700 text-white shadow-md max-w-[800px] mx-auto rounded-md">
                
                <div class="text-center px-4 py-3">
                 <img src="images/logo-educ.png" alt="logotipo" class="w-1/3 h-1/4 object-cover">
                    <a href="index.html" class="text-2xl font-bold hover:text-red-200 transition-colors block">
                        Relatório em Sala de Aula
                    </a>
                </div>

                <div class="px-4 pb-3 flex justify-center">
                    <nav class="space-x-4">
                        <a href="index.html" class="hover:text-red-200 transition-colors">Início</a>
                        <a href="json-editor.html" class="hover:text-red-200 transition-colors">Editor</a>
                        <a href="reports.html" class="hover:text-red-200 transition-colors">Relatórios</a>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define('custom-header', CustomHeader);

