class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background: linear-gradient(135deg, #d10000 0%, #ff4d4d 10%);
                    color: white;
                    padding: 1.2rem 2rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .header-content {
                    max-width: 800px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-weight: 600;
                    font-size: 1.5rem;
                }
.maplebear-logo {
                    height: 2rem;
                }
                @media (max-width: 640px) {
                    header {
                        padding: 1rem;
                    }
                    .logo {
                        font-size: 1.25rem;
                    }
.maplebear-logo {
                        height: 1.2rem;
                    }
                }
            </style>
            <header>
                <div class="header-content">
                    <div class="logo">
                        <img src="https://raw.githubusercontent.com/silviobonilha/database/refs/heads/image/logo-educ.png" alt="logotipo da Maple Bear" class="w-1/3 h-1/3 object-cover">
                        <span>Portal de Relatórios</span>
</div>
</div>
            </header>
        `;
    }
}
customElements.define('custom-header', CustomHeader);
