/**
 * Copiar Chave PIX e exibir feedback ao usuário
 */
function copiarPix() {
  const chavePix = document.getElementById("chavePix").innerText.trim();

  navigator.clipboard.writeText(chavePix)
    .then(() => {
      // Exibe a notificação Toast do Bootstrap
      const toastEl = document.getElementById('pixToast');
      if (toastEl) {
        const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
        toast.show();
      }

      // Altera temporariamente o texto do botão
      const btn = document.getElementById("btnCopiarPix");
      if (btn) {
        const originalContent = btn.innerHTML;
        btn.innerHTML = `<i class="bi bi-check2 me-1"></i> Copiado!`;
        btn.classList.replace("btn-outline-emerald", "btn-emerald");

        setTimeout(() => {
          btn.innerHTML = originalContent;
          btn.classList.replace("btn-emerald", "btn-outline-emerald");
        }, 3000);
      }
    })
    .catch(err => {
      console.error("Erro ao copiar chave PIX: ", err);
      alert("Chave PIX: " + chavePix);
    });
}

/**
 * Atualiza o estado da Navbar ao rolar a página
 */
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  /**
   * Atualiza o link ativo da Navbar conforme a seção visível na tela
   */
  const sections = document.querySelectorAll("section[id], body[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
});