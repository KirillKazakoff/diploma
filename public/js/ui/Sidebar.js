/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
    static init() {
        this.initAuthLinks();
        this.initToggleButton();
    }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
    static initToggleButton() {
        const button = document.querySelector('.sidebar-toggle');
        button.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-open') ;
            document.body.classList.toggle('sidebar-collapse');
        })
    }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
    static initAuthLinks() {
        // const loginButton = document.querySelector(".menu-item_login");
        // const logoutButton = document.querySelector(".menu-item_logout");
        // const registerButon = document.querySelector(".menu-item_register");
        const buttons = document.querySelectorAll(".menu-item");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const buttonClass = button.className.split('_').pop();
                
                if (buttonClass == "logout") {
                    const user = User.current();
                    User.logout(user, (err, response) => {
                        err ? err : App.setState('init')
                        if (response.success) App.setState('init')
                    })
                }
                else {
                    const modal = App.getModal(buttonClass);
                    modal.open();
                }
            })
        })
    }
}

// static getModal(modalName) {
//     return this.modals[modalName];
//   }