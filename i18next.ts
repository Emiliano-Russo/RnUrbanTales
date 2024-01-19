// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Home: 'Home',
      Highlights: 'Highlights',
      Profile: 'Profile',
      "Let's Go": "Let's Go!",
      RegisterIntro: 'Immerse yourself in the fascinating world of Urban Tales',
      RegisterNow: 'Register Now',
      RegisterOutro: 'Let your stories come to life!',
      'My Tales': 'My Tales',
      'Liked Tales': 'Liked Tales',
      'Tales Read': 'Tales Read',
      'Welcome To': 'Welcome To',
      Explore: 'Explore',
      Share: 'Share',
      WelcomeText1: 'Step into Urban Tales, where every corner tells a unique story, unveiling mysteries and legends.',
      WelcomeText2:
        "Discover tales of romance, drama, and adventure. There's a story for every mood, waiting to resonate with you.",
      WelcomeText3: 'Join us and share your own story. Here, every narrative finds an audience, every voice is heard.',
      'Selected location': 'Selected Location',
      'Share your tale!': 'Share your tale!',
      'Select a location on the map': 'Select a location on the map',
      Narrate: 'Narrate',
      'New Tale': 'New Tale',
      'What name do you give to your tale?': 'What name do you give to your tale?',
      Next: 'Next',
      'Select a Cover': 'Select a Cover',
      'In which category do you place your tale?': 'In which category do you place your tale?',
      Category: 'Category',
      Coordinates: 'Coordinates',
      Finish: 'Finish',
      'Subscribe to': 'Subscribe to',
      Title: 'Title',
      Image: 'Image',
      Narration: 'Narration',
      Mark: 'Mark',
      Password: 'Password',
      'Confirm Password': 'Confirm Password',
      'Sign In': 'Sign In',
      "I'm New": "I'm New",
      Name: 'Name',
      'Sign Up': 'Sign Up',
      Hello: 'Hello',
      Read: 'Read',
      Favorites: 'Favorites',
      Creations: 'Creations',
      'Your story has been successfully created!': 'Your story has been successfully created!',
      'There was an error in creating your story.': 'There was an error in creating your story.',
      Standar: 'Standar',
      'It looks like you are far away. Zoom in to see the stories in this area.':
        'It looks like you are far away. Zoom in to see the stories in this area.',
      Anonymity: 'Anonymity',
      'Publish as anonymous': 'Publish as anonymous',
      Settings: 'Settings',
      'Edit User': 'Edit User',
      Save: 'Save',
      'Request Change Email': 'Request Change Email',
      'Request Change Password': 'Request Change Password',
      'Updated Successfully': 'Updated Successfully',
      Support: 'Support',
      Language: 'Language',
      About: 'About',
      AboutText1:
        'Urban Tales is a unique application designed for urban storytellers and curious explorers of the modern world. world. Combining interactive storytelling with geolocation technology, this app allows users to create and share stories set in specific locations on a map.users to create and share stories set in specific locations on a map. Each story becomes an adventure becomes an adventure, waiting to be discovered by other users who, by visiting those locations, can unlock the stories and immerse themselves in them. unlock the stories and immerse themselves in the legends that every corner of the city has to tell.',
      Version: 'Version',
      Contact: 'Contact',
      ContactText: 'Do you have questions or comments?',
      'Send Email': 'Send Email',
      'Visit our website': 'Visit our website',
      'Delete Account': 'Delete Account',
      "Are you sure you want to delete your account? Type 'Delete' to confirm":
        "Are you sure you want to delete your account? Type 'Delete' to confirm",
      'Yes, Delete my account': 'Yes, Delete my account',
      'Wrong email or password': 'Wrong email or password',
      'Log Out': 'Log Out',
      'You must be logged in to rate a tale': 'You must be logged in to rate a tale',
      'Loading...': 'Loading...',
      'Inappropriate Content': 'Inappropriate Content',
      'Hate Speech': 'Hate Speech',
      'Report Reason': 'Report Reason',
      Cancel: 'Cancel',
      Report: 'Report',
      'Report sent successfully': 'Report sent successfully',
      Humor: 'Humor',
      Sadness: 'Sadness',
      Terror: 'Terror',
      Love: 'Love',
      Anger: 'Anger',
      Surprise: 'Surprise',
      Nostalgia: 'Nostalgia',
      Euphoria: 'Euphoria',
      Mystery: 'Mystery',
      Adventure: 'Adventure',
      Reflection: 'Reflection',
      Anonymous: 'Anonymous',
      'Mark as Read': 'Mark as Read',
      'Your story has been marked as read!': 'Your story has been marked as read!',
      'You have reached your weekly limit of tales.': 'You have reached your weekly limit of tales.',
      'User not premimum to create anonymous tale.': 'User not premimum to create anonymous tale.',
      Empty: 'Empty',
      Filters: 'Filters',
      Any: 'Any',
      'Hide Read': 'Hide Read',
      Reset: 'Reset',
      Apply: 'Apply',
      Send: 'Send',
      Immerse: 'Immerse Yourself',
      WelcomeTextLocation: 'Share your location to fully dive into the Urban Tales experience.',
      'Allow Location Access': 'Allow Access',
      "If you don't allow us to access the map, we won't be able to start":
        "If you don't allow us to access the map, we won't be able to start",
      'Premium Access': 'Premium Access',
      Security: 'Security',
      'Create Account': 'Create Account',
      'Welcome!': 'Welcome!',
      'Forgot password?': 'Forgot password?',
      'Enter your email to receive a password reset link': 'Enter your email to receive a password reset link',
      'Do you have a story to tell?': 'Do you have a story to tell?',
      'Login now and let your voice be heard': 'Login now and let your voice be heard',
      'Back to Home': 'Back to Home',
      'Change Request Email': 'Change Request Email',
      'An email has been sent to your account': 'An email has been sent to your account',
      'Resend confirmation email': 'Resend confirmation email',
      'Email not yet verified': 'Email not yet verified',
    },
  },
  es: {
    translation: {
      Home: 'Inicio',
      Highlights: 'Destacados',
      Profile: 'Perfil',
      "Let's Go": '¡Vamos!',
      RegisterIntro: 'Sumérgete en el fascinante mundo de Urban Tales',
      RegisterNow: 'Regístrate Ahora',
      RegisterOutro: '¡Deja que tus historias cobren vida!',
      'My Tales': 'Mis Historias',
      'Liked Tales': 'Historias Favoritas',
      'Tales Read': 'Historias Leídas',
      'Welcome To': 'Bienvenido a',
      Explore: 'Explora',
      Share: 'Comparte',
      WelcomeText1:
        'Entra a Urban Tales, donde cada rincón relata una historia única, desvelando misterios y leyendas.',
      WelcomeText2:
        'Descubre relatos de romance, drama y aventura. Hay una historia para cada estado de ánimo, esperando resonar contigo.',
      WelcomeText3:
        'Únete a nosotros y comparte tu propia historia. Aquí, cada narrativa encuentra su público, cada voz se escucha.',
      'Selected location': 'Ubicación Seleccionada',
      'Share your tale!': '¡Comparte tu Relato!',
      'Select a location on the map': 'Selecciona una ubicación en el mapa',
      Narrate: 'Narrar',
      'New Tale': 'Nuevo Relato',
      'What name do you give to your tale?': '¿Qué nombre le das a tu historia?',
      Next: 'Siguiente',
      'Select a Cover': 'Selecciona una Portada',
      'In which category do you place your tale?': '¿En qué categoría colocas tu historia?',
      Category: 'Categoría',
      Coordinates: 'Coordenadas',
      Finish: 'Finalizar',
      'Subscribe to': 'Suscríbete a',
      Title: 'Título',
      Image: 'Imagen',
      Narration: 'Narración',
      Mark: 'Marcador',
      Password: 'Contraseña',
      'Sign In': 'Iniciar Sesión',
      "I'm New": 'Soy Nuevo',
      Name: 'Nombre',
      'Confirm Password': 'Confirmar Contraseña',
      'Sign Up': 'Registrarse',
      Hello: 'Hola',
      Read: 'Leídas',
      Favorites: 'Favoritas',
      Creations: 'Creaciones',
      'Your story has been successfully created!': '¡Tu historia ha sido creada con éxito!',
      'There was an error in creating your story.': 'Hubo un error al crear tu historia.',
      Standar: 'Estándar',
      'It looks like you are far away. Zoom in to see the stories in this area.':
        'Parece que estás muy lejos. Haz zoom para ver las historias en esta área.',
      Anonymity: 'Anonimato',
      'Publish as anonymous': 'Publicar como anónimo',
      Settings: 'Ajustes',
      'Edit User': 'Editar Usuario',
      Save: 'Guardar',
      'Request Change Email': 'Solicitar Cambio de Correo',
      'Request Change Password': 'Solicitar Cambio de Contraseña',
      'Updated Successfully': 'Actualizado con Éxito',
      Support: 'Soporte',
      Language: 'Idioma',
      About: 'Acerca de',
      AboutText1:
        'Urban Tales es una aplicación única diseñada para narradores urbanos y exploradores curiosos del mundo moderno. Combinando la narración interactiva con la tecnología de geolocalización, esta aplicación permite a los usuarios crear y compartir historias ambientadas en ubicaciones específicas en un mapa. Cada historia se convierte en una aventura, esperando ser descubierta por otros usuarios que, al visitar esas ubicaciones, pueden desbloquear las historias e inmerserse en las leyendas que cada rincón de la ciudad tiene que contar.',
      Version: 'Versión',
      Contact: 'Contacto',
      ContactText: '¿Tienes preguntas o comentarios?',
      'Send Email': 'Enviar Correo',
      'Visit our website': 'Visita nuestro sitio web',
      'Delete Account': 'Eliminar Cuenta',
      "Are you sure you want to delete your account? Type 'Delete' to confirm":
        "¿Estás seguro de que quieres eliminar tu cuenta? Escribe 'Delete' para confirmar",
      'Yes, Delete my account': 'Sí, Eliminar mi cuenta',
      'Wrong email or password': 'Correo o contraseña incorrectos',
      'Log Out': 'Cerrar Sesión',
      'You must be logged in to rate a tale': 'Debes iniciar sesión para calificar un relato',
      'Loading...': 'Cargando...',
      'Inappropriate Content': 'Contenido Inapropiado',
      'Hate Speech': 'Discurso de Odio',
      'Report Reason': 'Razón del Reporte',
      Cancel: 'Cancelar',
      Report: 'Reportar',
      'Report sent successfully': 'Reporte enviado exitosamente',
      Humor: 'Humor',
      Sadness: 'Tristeza',
      Terror: 'Terror',
      Love: 'Amor',
      Anger: 'Ira',
      Surprise: 'Sorpresa',
      Nostalgia: 'Nostalgia',
      Euphoria: 'Euforia',
      Mystery: 'Misterio',
      Adventure: 'Aventura',
      Reflection: 'Reflexión',
      Anonymous: 'Anónimo',
      'Mark as Read': 'Marcar como Leído',
      'Your story has been marked as read!': '¡Tu historia ha sido marcada como leída!',
      'You have reached your weekly limit of tales.': 'Has alcanzado tu límite semanal de relatos.',
      'User not premimum to create anonymous tale.': 'Usuario no premimum para crear relato anónimo.',
      Empty: 'Vacío',
      Filters: 'Filtros',
      Any: 'Cualquiera',
      'Hide Read': 'Ocultar Leídas',
      Reset: 'Reiniciar',
      Apply: 'Aplicar',
      Send: 'Enviar',
      Immerse: 'Sumérgete',
      WelcomeTextLocation: 'Comparte tu ubicación para sumergirte completamente en la experiencia de Urban Tales.',
      'Allow Location Access': 'Permitir Acceso',
      "If you don't allow us to access the map, we won't be able to start":
        'Si no nos permites acceder al mapa, no podremos comenzar',
      'Premium Access': 'Acceso Premium',
      Security: 'Seguridad',
      'Create Account': 'Crear Cuenta',
      'Welcome!': '¡Bienvenido!',
      'Forgot password?': '¿Olvidó su contraseña?',
      'Enter your email to receive a password reset link':
        'Introduzca su correo electrónico para recibir un enlace de restablecimiento de contraseña',
      'Do you have a story to tell?': '¿Tienes una historia que contar?',
      'Login now and let your voice be heard': 'Ingrese ahora y haga oír su voz',
      'Back to Home': 'Volver al Inicio',
      'Change Request Email': 'Email de solicitud de cambio',
      'An email has been sent to your account': 'Un email fue enviado a tu cuenta',
      'Resend confirmation email': 'Reenviar correo de confirmación',
      'Email not yet verified': 'Email aun sin verificar',
    },
  },
  pt: {
    translation: {
      Home: 'Início',
      Highlights: 'Destaques',
      Profile: 'Perfil',
      "Let's Go": '¡Vamos!',
      RegisterIntro: 'Mergulhe no fascinante mundo de Urban Tales',
      RegisterNow: 'Registre-se Agora',
      RegisterOutro: 'Deixe suas histórias ganharem vida!',
      'My Tales': 'Minhas Histórias',
      'Liked Tales': 'Histórias Favoritas',
      'Tales Read': 'Histórias Lidas',
      'Welcome To': 'Bem-vindo a',
      Explore: 'Explore',
      Share: 'Compartilhe',
      WelcomeText1: 'Entre em Urban Tales, onde cada canto conta uma história única, revelando mistérios e lendas.',
      WelcomeText2:
        'Descubra contos de romance, drama e aventura. Há uma história para cada humor, esperando para ressoar com você.',
      WelcomeText3:
        'Junte-se a nós e compartilhe sua própria história. Aqui, cada narrativa encontra uma audiência, cada voz é ouvida.',
      'Selected location': 'Localização Selecionada',
      'Share your tale!': 'Compartilhe seu conto!',
      'Select a location on the map': 'Selecione uma localização no mapa',
      Narrate: 'Narrar',
      'New Tale': 'Novo Conto',
      'What name do you give to your tale?': 'Que nome você dá à sua história?',
      Next: 'Próximo',
      'Select a Cover': 'Selecione uma Capa',
      'In which category do you place your tale?': 'Em qual categoria você coloca sua história?',
      Category: 'Categoria',
      Coordinates: 'Coordenadas',
      Finish: 'Finalizar',
      'Subscribe to': 'Inscreva-se em',
      Title: 'Título',
      Image: 'Imagem',
      Narration: 'Narração',
      Mark: 'Marcador',
      Password: 'Senha',
      'Sign In': 'Entrar',
      "I'm New": 'Sou Novo',
      Name: 'Nome',
      'Confirm Password': 'Confirmar Senha',
      'Sign Up': 'Inscrever-se',
      Hello: 'Olá',
      Read: 'Leituras',
      Favorites: 'Favoritos',
      Creations: 'Criações',
      'Your story has been successfully created!': 'Sua história foi criada com sucesso!',
      'There was an error in creating your story.': 'Houve um erro ao criar sua história.',
      Standar: 'Padrão',
      'It looks like you are far away. Zoom in to see the stories in this area.':
        'Parece que você está muito longe. Dê zoom para ver as histórias desta área.',
      Anonymity: 'Anonimato',
      'Publish as anonymous': 'Publicar como anônimo',
      Settings: 'Configurações',
      'Edit User': 'Editar Usuário',
      Save: 'Salvar',
      'Request Change Email': 'Solicitar Mudança de E-mail',
      'Request Change Password': 'Solicitar Mudança de Senha',
      'Updated Successfully': 'Atualizado com Sucesso',
      Support: 'Suporte',
      Language: 'Idioma',
      About: 'Sobre',
      AboutText1:
        'Urban Tales é um aplicativo único projetado para contadores de histórias urbanos e exploradores curiosos do mundo moderno. Combinando narrativa interativa com tecnologia de geolocalização, este aplicativo permite que os usuários criem e compartilhem histórias ambientadas em locais específicos em um mapa. Cada história se torna uma aventura, esperando ser descoberta por outros usuários que, ao visitar esses locais, podem desbloquear as histórias e mergulhar nas lendas que cada canto da cidade tem a contar.',
      Version: 'Versão',
      Contact: 'Contato',
      ContactText: 'Tem dúvidas ou comentários?',
      'Send Email': 'Enviar E-mail',
      'Visit our website': 'Visite nosso site',
      'Delete Account': 'Excluir Conta',
      "Are you sure you want to delete your account? Type 'Delete' to confirm":
        "Tem certeza de que deseja excluir sua conta? Digite 'Delete' para confirmar",
      'Yes, Delete my account': 'Sim, Excluir minha conta',
      'Wrong email or password': 'E-mail ou senha incorretos',
      'Log Out': 'Sair',
      'You must be logged in to rate a tale': 'Você deve estar logado para avaliar um conto',
      'Loading...': 'Carregando...',
      'Inappropriate Content': 'Conteúdo Inapropriado',
      'Hate Speech': 'Discurso de Ódio',
      'Report Reason': 'Motivo do Relatório',
      Cancel: 'Cancelar',
      Report: 'Relatar',
      'Report sent successfully': 'Relatório enviado com sucesso',
      Humor: 'Humor',
      Sadness: 'Tristeza',
      Terror: 'Terror',
      Love: 'Amor',
      Anger: 'Raiva',
      Surprise: 'Surpresa',
      Nostalgia: 'Nostalgia',
      Euphoria: 'Euforia',
      Mystery: 'Mistério',
      Adventure: 'Aventura',
      Reflection: 'Reflexão',
      Anonymous: 'Anônimo',
      'Mark as Read': 'Marcar como Lido',
      'Your story has been marked as read!': 'Sua história foi marcada como lida!',
      'You have reached your weekly limit of tales.': 'Você atingiu seu limite semanal de contos.',
      'User not premimum to create anonymous tale.': 'Usuário não premimum para criar conto anônimo.',
      Empty: 'Vazio',
      Filters: 'Filtros',
      Any: 'Qualquer',
      'Hide Read': 'Ocultar Lidas',
      Reset: 'Reiniciar',
      Apply: 'Aplicar',
      Send: 'Enviar',
      Immerse: 'Mergulhe',
      WelcomeTextLocation: 'Compartilhe sua localização para mergulhar completamente na experiência de Urban Tales.',
      'Allow Location Access': 'Permitir Acesso',
      "If you don't allow us to access the map, we won't be able to start":
        'Se você não nos permitir acessar o mapa, não poderemos começar',
      'Premium Access': 'Acesso Premium',
      Security: 'Segurança',
      'Create Account': 'Criar uma conta',
      'Welcome!': 'Bem-vindo!',
      'Forgot Password?': 'Esqueceu a senha?',
      'Enter your email to receive a password reset link':
        'Digite seu e-mail para receber um link de redefinição de senha',
      'Do you have a story to tell?': 'Você tem uma história para contar?',
      'Login now and let your voice be heard': 'Faça login agora e deixe sua voz ser ouvida',
      'Back to Home': 'Voltar ao início',
      'Change Request Email': 'E-mail de solicitação de alteração',
      'An email has been sent to your account': 'Um e-mail foi enviado para sua conta',
      'Resend confirmation email': 'Reenviar e-mail de confirmação',
      'Email not yet verified': 'Email ainda não verificado',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // lenguaje por defecto
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export const availableLanguages = [
  {
    code: 'en',
    name: 'English',
    flagUri: 'https://img.icons8.com/emoji/48/united-kingdom-emoji.png', // Añade la URL del ícono de la bandera aquí
  },
  {
    code: 'es',
    name: 'Español',
    flagUri: 'https://img.icons8.com/color/96/spain-2.png',
  },
  {
    code: 'pt',
    name: 'Português',
    flagUri: 'https://img.icons8.com/color/96/portugal.png', // URL de la bandera de Portugal
  },
  // Añade más idiomas y sus banderas aquí
];

export default i18n;
