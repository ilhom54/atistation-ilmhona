function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    } else {
      menu.classList.add("show");
    }
  }
  
  function activateContent(id) {
    const elements = document.querySelectorAll(".svgTexts div");
    elements.forEach((element) => {
      element.classList.remove("active");
    });
  
    // Добавляем класс 'active' к выбранному элементу
    const activeElement = document.getElementById(id);
    activeElement.classList.add("active");
  }
  
  
  
  function activeContent1() {
    document.getElementById("content-1").style.display = "flex";
    document.getElementById("content-2").style.display = "none";
    document.getElementById("content-3").style.display = "none";
  }
  
  function activeContent2() {
    document.getElementById("content-1").style.display = "none";
    document.getElementById("content-2").style.display = "flex";
    document.getElementById("content-3").style.display = "none";
  }
  
  function activeContent3() {
    document.getElementById("content-1").style.display = "none";
    document.getElementById("content-2").style.display = "none";
    document.getElementById("content-3").style.display = "flex";
  }
  
  // Hide all contents initially
  window.onload = function () {
    document.getElementById("content-1").style.display = "flex";
    document.getElementById("content-2").style.display = "none";
    document.getElementById("content-3").style.display = "none";
  };
  
  function Testimonial(id) {
    const elements = document.querySelectorAll(".Clientsblock div");
    elements.forEach((element) => {
      element.classList.remove("active2");
    });
  
    const activeElement = document.getElementById(id);
    activeElement.classList.add("active2");
  }
  
  //ClientButton
  
  function clickButton1() {
    document.getElementById("Clientsblock1").style.display = "flex";
    document.getElementById("Clientsblock2").style.display = "none";
    document.getElementById("Clientsblock3").style.display = "none";
  
    resetButtonStyles();
    document.getElementById("button1").style.backgroundColor = "orange";
  }
  
  function clickButton2() {
    document.getElementById("Clientsblock1").style.display = "none";
    document.getElementById("Clientsblock2").style.display = "flex";
    document.getElementById("Clientsblock3").style.display = "none";
  
    resetButtonStyles();
    document.getElementById("button2").style.backgroundColor = "orange";
  }
  
  function clickButton3() {
    document.getElementById("Clientsblock1").style.display = "none";
    document.getElementById("Clientsblock2").style.display = "none";
    document.getElementById("Clientsblock3").style.display = "flex";
  
    resetButtonStyles();
    document.getElementById("button3").style.backgroundColor = "orange";
  }
  
  function resetButtonStyles() {
    document.getElementById("button1").style.backgroundColor = "white";
    document.getElementById("button2").style.backgroundColor = "white";
    document.getElementById("button3").style.backgroundColor = "white";
  }
  
  // Инициализация: показываем только первый блок
  document.addEventListener("DOMContentLoaded", function () {
    clickButton1();
  });
  
  
  
  
  
    document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы
  
    const inputs = document.querySelectorAll("input, textarea, select");
    let formIsValid = true;
  
    // Скрываем все сообщения об ошибке перед проверкой
    document.getElementById("errorMessage").classList.remove("showMessage");
    document.getElementById("errorMessage").classList.add("error-message");
  
    // Проходим по всем полям и проверяем их на пустоту
    inputs.forEach(function (input) {
      if (input.value.trim() === "") {
        input.classList.add("error");
        formIsValid = false; // Форма невалидна, если хотя бы одно поле пусто
  
        // Показываем сообщение об ошибке
        document.getElementById("errorMessage").classList.add("showMessage");
        document.getElementById("errorMessage").classList.remove("error-message");
      } else {
        input.classList.remove("error");
      }
    });
  
    // Если форма валидна, скрываем сообщение об ошибке
    if (formIsValid) {
      document.getElementById("errorMessage").classList.remove("showMessage");
      document.getElementById("errorMessage").classList.add("error-message"); // Скрываем элемент
    }
  });
  
  
  