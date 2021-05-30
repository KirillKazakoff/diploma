/**
 * Класс UserWidget отвечает за
 * отображение информации о имени пользователя
 * после авторизации или его выхода из системы
 * */

class UserWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
    constructor(element){
        try {
            if (!element) throw new Error("empty data");
            this.element = element;
        }
        catch(e) {
            console.log(e.message);
        }
    }

  /**
   * Получает информацию о текущем пользователе
   * с помощью User.current()
   * Если пользователь авторизован,
   * в элемент .user-name устанавливает имя
   * авторизованного пользователя
   * */
    update(){
        const {name} = User.current();
        const nameHTML = document.querySelector(".user-name");
        if (name) nameHTML.textContent = name;
    }
}
