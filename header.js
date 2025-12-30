class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-red-700 text-white shadow-md max-w-[800px] mx-auto rounded-md">
                
                <div class="text-center px-4 py-3">

<img
  src="https://raw.githubusercontent.com/silviobonilha/database/refs/heads/image/logo-educ.png"
  alt="logotipo" </span>  

                <!-- p>
                    <span style="font-size: 24px;">
                        class="w-24 h-auto">    <span> Relatório em Sala de Aula</span>
                </p -->

<p>
    <span style="font-size: 24px;" class="w-24 h-auto">
        Relatório em Sala de Aula
    </span>
</p>

                
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

