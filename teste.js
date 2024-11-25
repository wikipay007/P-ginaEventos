// Script para alternar entre os formulários
document.addEventListener("DOMContentLoaded", () => {
    const btnFisica = document.getElementById('btnFisica');
    const btnJuridica = document.getElementById('btnJuridica');
    const formFisica = document.getElementById('formFisica');
    const formJuridica = document.getElementById('formJuridica');
  
    // Ao clicar no botão Pessoa Física
    btnFisica.addEventListener('click', () => {
      btnFisica.classList.add('btn-selecionado');
      btnJuridica.classList.remove('btn-selecionado');
      formFisica.classList.remove('oculto');
      formJuridica.classList.add('oculto');
    });
  
    // Ao clicar no botão Pessoa Jurídica
    btnJuridica.addEventListener('click', () => {
      btnJuridica.classList.add('btn-selecionado');
      btnFisica.classList.remove('btn-selecionado');
      formJuridica.classList.remove('oculto');
      formFisica.classList.add('oculto');
    });
  });
  