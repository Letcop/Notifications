// =================MAIN====================
notifs()
create()
edit()
del()
whom()
// =================MAIN====================




// =============Функция левой части (нотификации)================
function notifs() {

    if (document.querySelectorAll('.notifications__item').length == 0) {
        document.querySelector('.notifications__items').innerHTML = 'Нет уведомлений'
        document.querySelector('.notifications__items').style.overflow = 'hidden'
    }
}
// =============Функция левой части (нотификации)================

// ================Функция правой части (создание)===================
function create() {

    document.querySelector('#template').addEventListener('change', () => {

        if (document.querySelector('.selected_icon') != null){
            document.querySelector('.selected_icon').classList.remove('selected_icon')
        }

        switch(document.querySelector('#template').value){
            case 'remind':
                document.querySelectorAll('.create__icon')[0].children[1].checked = true
                document.querySelectorAll('.create__icon')[0].classList.add('selected_icon')
                document.querySelector('#heading').value = 'Напоминание'
                document.querySelector('#short_description').value = 'Действие вашего тарифа истекает через 1 день!'
                break
            case 'attainment':
                document.querySelectorAll('.create__icon')[1].children[1].checked = true
                document.querySelectorAll('.create__icon')[1].classList.add('selected_icon')
                document.querySelector('#heading').value = 'Достижение'
                document.querySelector('#short_description').value = 'Вы получили новое достижение "Торговец"!'
                break
            case 'rating':
                document.querySelectorAll('.create__icon')[2].children[1].checked = true
                document.querySelectorAll('.create__icon')[2].classList.add('selected_icon')
                document.querySelector('#heading').value = 'Рейтинг'
                document.querySelector('#short_description').value = 'Ваш рейтинг повысилься! Посмотрите новый отзыв от Hamillioner.'
                break
            case 'gift':
                document.querySelectorAll('.create__icon')[3].children[1].checked = true
                document.querySelectorAll('.create__icon')[3].classList.add('selected_icon')
                document.querySelector('#heading').value = 'Подарок'
                document.querySelector('#short_description').value = 'Вы получили подарок от Hamillioner.'
                break
            case 'warning':
                document.querySelectorAll('.create__icon')[4].children[1].checked = true
                document.querySelectorAll('.create__icon')[4].classList.add('selected_icon')
                document.querySelector('#heading').value = 'Предупреждение'
                document.querySelector('#short_description').value = 'Не пишите оскорбительные слова в адрес других пользователей!'
                break
                
        }
    })

    for (const createIcon of document.querySelectorAll('.create__icon')) {
        createIcon.addEventListener('click', () => {
            createIcon.children[1].checked = !createIcon.children[1].checked

            if (createIcon.children[1].checked) {
                
                if (document.querySelector('.selected_icon') != null){
                    document.querySelector('.selected_icon').classList.remove('selected_icon')
                }
                
                createIcon.classList.add('selected_icon')
                
                for (const choose of document.querySelector('#template').children) {
                    choose.removeAttribute('selected')    
                }

                switch (document.querySelector('.selected_icon').children[1].id) {
                    case 'fa-bullhorn':
                        document.querySelector('#template').children[1].setAttribute('selected', 'selected')
                        document.querySelector('#heading').value = 'Напоминание'
                        document.querySelector('#short_description').value = 'Действие вашего тарифа истекает через 1 день!'
                        break
                    case 'fa-award':
                        document.querySelector('#template').children[2].setAttribute('selected', 'selected')
                        document.querySelector('#heading').value = 'Достижение'
                        document.querySelector('#short_description').value = 'Вы получили новое достижение "Торговец"!'
                        break
                    case 'fa-star':
                        document.querySelector('#template').children[3].setAttribute('selected', 'selected')
                        document.querySelector('#heading').value = 'Рейтинг'
                        document.querySelector('#short_description').value = 'Ваш рейтинг повысилься! Посмотрите новый отзыв от Hamillioner.'
                        break
                    case 'fa-gift':
                        document.querySelector('#template').children[4].setAttribute('selected', 'selected')
                        document.querySelector('#heading').value = 'Подарок'
                        document.querySelector('#short_description').value = 'Вы получили подарок от Hamillioner.'
                        break
                    case 'fa-exclamation-circle':
                        document.querySelector('#template').children[5].setAttribute('selected', 'selected')
                        document.querySelector('#heading').value = 'Предупреждение'
                        document.querySelector('#short_description').value = 'Не пишите оскорбительные слова в адрес других пользователей!'
                        break
                }
            }
        })

    }
}
// ================Функция правой части (создание)===================

function edit() {
    for (const notifItem of document.querySelectorAll('.notifications__item')) {
        
        notifItem.children[2].children[0].addEventListener('click', () => {
            
            document.querySelector('.edit').style.display = 'block'

            for (const editIcon of document.querySelectorAll('.edit__icon')) {
                if (editIcon.children[1].id.toString() == notifItem.children[0].classList.value.split(' ')[2].toString()){
                    notifItem.children[1].checked = true;
                    if (document.querySelector('.edit__selected_icon') != null){
                        document.querySelector('.edit__selected_icon').classList.remove('edit__selected_icon')
                    }
                    editIcon.classList.add('edit__selected_icon')
                }
                editIcon.addEventListener('click', () => {
                    editIcon.children[1].checked = !editIcon.children[1].checked
                    
                    if(editIcon.children[1].checked){

                        if (document.querySelector('.edit__selected_icon') != null){
                            document.querySelector('.edit__selected_icon').classList.remove('edit__selected_icon')
                        }

                        editIcon.classList.add('edit__selected_icon')
                    }
                })
            }

            document.querySelector('#edit__heading').value = `${notifItem.children[1].children[0].innerHTML}`
            document.querySelector('#edit__short_description').value = `${notifItem.children[1].children[1].innerHTML}`
            
            document.querySelector('.close').addEventListener('click', ()=>{
                document.querySelector('.edit').style.display = 'none'
            })
            document.querySelector('.edit__submit').children[0].addEventListener('click', () =>{
                document.querySelector('.edit').style.display = 'none'
            })
            document.querySelector('.edit__save').addEventListener('click', () => {
                notifItem.children[1].children[0].innerHTML = document.querySelector('#edit__heading').value
                notifItem.children[1].children[1].innerHTML = document.querySelector('#edit__short_description').value
                notifItem.children[0].classList.remove(notifItem.children[0].classList.value.split(' ')[2])
                console.log(document.querySelector('.edit__selected_icon').children[1].id)
                notifItem.children[0].classList.add(document.querySelector('.edit__selected_icon').children[1].id.toString())
            })
        })  
    }
}

// ================Функция удаление уведомлений (удаление)===================
function del(){
    for (const del of document.querySelectorAll('.delete')) {
        del.addEventListener('click', () => {
          let conf = confirm('Вы действительно хотите удалить уведомления?')
          if(conf){
            del.parentElement.parentElement.remove()
            console.log(document.querySelectorAll('.notifications__item').length)
            if (document.querySelectorAll('.notifications__item').length == 0) {
                document.querySelector('.notifications__items').innerHTML = 'Нет уведомлений'
                document.querySelector('.notifications__items').style.overflow = 'hidden'
            }
          }  
        })
    }
}
// ================Функция удаление уведомлений (удаление)===================

// ================Функция удаление уведомлений (удаление)===================
function whom(){
    document.querySelector('#choose').addEventListener('change', () => {
        if (document.querySelector('#choose').checked){
            document.querySelector('.whom_choose').style.display = 'block'
        }
        else{
            document.querySelector('.whom_choose').style.display = 'none'
        }
    })

    document.querySelector('.whom_close').addEventListener('click', ()=>{
        document.querySelector('.whom_choose').style.display = 'none'
        document.querySelector('#choose').checked = false
    })
}
// ================Функция удаление уведомлений (удаление)===================