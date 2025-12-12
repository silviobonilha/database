class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-red-700 text-white shadow-md">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex justify-between items-center">
                        <a href="index.html" class="text-xl font-bold hover:text-red-200 transition-colors">
                            Prof Bonilha - Sistema de Relatórios
                        </a>
                        <nav class="space-x-4">
                            <a href="index.html" class="hover:text-red-200 transition-colors">Início</a>
                            <a href="json-editor.html" class="hover:text-red-200 transition-colors">Editor</a>
                            <a href="reports.html" class="hover:text-red-200 transition-colors">Relatórios</a>
                        </nav>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('custom-header', CustomHeader);

