class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-red-700 text-white shadow-md max-w-[800px] mx-auto rounded-md">
                
                <div class="text-center px-4 py-3">
<--! substituido  -->
                 <!--img src="https://raw.githubusercontent.com/silviobonilha/database/refs/heads/image/logo-educ.png" alt="logotipo" class="w-1/3 h-1/3 object-cover">
                        <span>Portal de Relatórios</span -->

<img
  src="https://raw.githubusercontent.com/silviobonilha/database/refs/heads/image/logo-educ.png"
  alt="logotipo"
  class="w-24 h-auto" >
                       
                    <!-- a href="index.html" class="text-2xl font-bold hover:text-red-200 transition-colors block" -->
                  <h1> Relatório em Sala de Aula </h1>
                    <!--/a -->
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

