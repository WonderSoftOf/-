function checkForm() {
    // 1. Получаем значения из полей формы
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('result');

    // 2. Проверяем логин и пароль по очереди
    if (login.length < 4) {
        resultDiv.textContent = "❌ Ошибка: Логин должен быть не короче 4 символов.";
        resultDiv.className = "error";
        return; // Останавливаем выполнение функции, если нашли ошибку
    }

    if (login.includes(" ")) {
        resultDiv.textContent = "❌ Ошибка: Логин не должен содержать пробелы.";
        resultDiv.className = "error";
        return; 
    }

    if (password.length < 8) {
        resultDiv.textContent = "❌ Ошибка: Пароль должен быть не короче 8 символов.";
        resultDiv.className = "error";
        return; 
    }

    // 3. Если ни одно условие выше не сработало — значит, всё правильно!
    resultDiv.textContent = "абэма пидарас!";
    resultDiv.className = "success";
}
