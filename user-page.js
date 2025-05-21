document.addEventListener('DOMContentLoaded', () => {
  const logout = document.getElementById('logout');

  // Проверка авторизации
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
    return; // остановить дальнейшее выполнение
  }

  // Обработка выхода
  logout.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
  });
});
