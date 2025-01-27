class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <div class="profile-card">
        <div class="profile-photo"><img src="Assets/Image/img.dev.webp" alt="Kawsar Ahmed"></div>
        <div class="profile-info">
            <h3 class="dev-name">Kawsar Ahmed</h3>
            <p>Computer Science & Engineering, UIU</p>
            <div class="socialIcons">
                <a href="https://www.github.com/scriptglitch">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.youtube.com/@scriptglitch">
                    <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/scriptglitch/">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/fxnuub/">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>
        </div>
    </div>
        </div>
        <div class="footerBottom">
            <!-- <p>Copyright &copy; 2025 | All rights reserved <span class="designer"> Kawsar Ahmed</span></p> -->
            <p>Copyright &copy; 2023 | All rights reserved @ <a href="https://www.github.com/scriptglitch"
                    class="copyright-link"> Script Glitch</a></p>
        </div>
    </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)


