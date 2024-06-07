let logo_nav = document.getElementById('logo');

logo_nav.addEventListener('click', function() {
    let nav = document.getElementById('nav');
    let novo = document.getElementById('novo')
    let home = document.getElementById('home')
    let criar = document.getElementById('criar')
    let perfil = document.getElementById('perfil')
    let logout = document.getElementById('logout')
    let texto_home = document.getElementById('texto-home')
    let texto_perfil = document.getElementById('texto-perfil')
    let texto_logout = document.getElementById('texto-logout')

    if (nav.style.width === '15vw') {
        criar.style.width = '94vw';
        novo.style.width = '90vw';
        nav.style.width = '6vw';

        home.style.width = '5vw';
        perfil.style.width = '5vw'
        logout.style.width = '5vw'



        texto_home.style.display = 'none'
        texto_perfil.style.display = 'none'
        texto_logout.style.display = 'none'

        texto_home.style.opacity = '0'
        texto_perfil.style.opacity = '0'
        texto_logout.style.opacity = '0'
    } else {
        criar.style.width = '85vw';
        novo.style.width = '80vw';
        nav.style.width = '15vw';

        home.style.width = '13vw';
        perfil.style.width = '13vw'
        logout.style.width = '13vw'

        texto_home.style.display = 'flex'
        texto_perfil.style.display = 'flex'
        texto_logout.style.display = 'flex'

        texto_home.style.opacity = '1'
        texto_perfil.style.opacity = '1'
        texto_logout.style.opacity = '1'
    }
});


let logout = document.getElementById('logout')

logout.addEventListener('click', function() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "info",
        title: "Logout feito com sucesso"
      });

      setTimeout(function() {
        window.location.href = 'login.html'
      },1200)
})

let novo = document.getElementById('novo');
let formContainer = document.getElementById('form-container');
let closeForm = document.getElementById('closeForm');
let projetos = document.getElementById('projetos');

novo.addEventListener('click', function() {
  formContainer.style.display = 'block';
});

closeForm.addEventListener('click', function() {
  formContainer.style.display = 'none';
});

document.getElementById('createWorkspaceForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const workspaceName = document.getElementById('workspaceName').value;
  if (workspaceName) {
      // Create a new card element
      let newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.textContent = workspaceName;

      // Append the new card to the projetos div
      projetos.appendChild(newCard);

      // Hide the form and reset the input field
      formContainer.style.display = 'none';
      document.getElementById('workspaceName').value = '';
  }
});