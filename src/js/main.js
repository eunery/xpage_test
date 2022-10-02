const picker = datepicker(document.querySelector('.date_date-picker'), {
    formatter: (input, date, instance) => {
        let day= date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        input.value = `${day}/${month}/${year}`;
    },
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    showAllDates: true,
    customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    dateSelected: new Date(),
});

function menu(){
    document.querySelector(".nav-bar__burger_menu").classList.toggle("burger_opened");
    document.querySelector(".nav-bar__burger-menu_icon").classList.toggle("burger_black");
    var bar = document.querySelector(".bar");
    bar.classList.toggle("bar_horizontal")
    bar.style.display = bar.style.display === 'flex' ? 'none' : 'flex';
    bar.style.position = bar.style.position === 'absolute' ? 'unset' : 'absolute';
}




