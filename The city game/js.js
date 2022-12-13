'use strict';


let text = document.querySelector('.text');
let field   = document.querySelector('#field');
let message = document.querySelector('#message');
let city = document.querySelector('.city');
let you = document.querySelector('.you ol');
let computer = document.querySelector('.computer ol');
let link = document.querySelector('.link');
let timer = document.querySelector('.timer');

// массив городов робота
let allcities = [
'Абакан','Анапа','Абдулино','Абзаково','Абинск','Аборино','Абрамцево','Абрау-Дюрсо','Абрашино','Авдоши','Агалатово','Агой','Агрыз','Адворица','Адлер','Азов',
'Аксаково','Алабушево','Алапаевск','Алатырь','Алауксу','Алдан','Алейск','Алекка','Александров','Александровка','Алексеевка',
'Алексин','Алексино','Алешкино','Алпатьево','Алтайское','Алтун','Алупка','Алушта','Альметьевск','Аманат','Амерево','Анадырь','Анапа','Анапская','Анашкино','Ангарск',
'Ангарские Хутора','Ангелово','Андреаполь','Андреевка','Анухино','Апатиты','Апрелевка','Апшеронск','Арамиль','Аргун','Арзамас','Армавир','Армхи','Арнеево','Арсеньев',
'Арск','Артем','Артыбаш','Архангельск','Архангельское','Архиповка','Архыз','Аршан','Асбест','Аскат','Астрахань','Атепцево','Аушигер','Афанасьево','Афипский','Афонино',
'Ахметовская','Ахпаевка','Ахсау','Ахтубинск','Ахтырский','Ачинск','Астрахань',
'Байкал','Балашов','Балашиха','Балтийск','Барнаул','Белгород','Белогорск','Беломорск','Бугры','Борисоглебск',
'Валдай','Великие Луки','Великий Новгород','Великий Устюг','Владивосток','Владикавказ','Владимир','Волгоград','Выборг','Воскресенск','Воронеж','Вологда',
'Галицино','Гатчина','Гдов','Геленджик','Горно-Алтайск','Горячий Ключ','Грозный','Гурьевск','Гусев','Гусь-Хрустальный',
'Дальнегорск','Дедовичи','Дмитров','Донецк','Днепропетровск',
'Евпатория','Ейск','Екатеринбург','Ессентуки','Ефремово',
'Железноводск','Жемчуг','Жигулeвск','Жуковский','Журавка',
'Забайкальск','Заостровье','Заринск','Зеленогорск','Змеиногорск','Звенигород',
'Иваново','Ижевск','Изборск','Иркутск','Ирбит',
'Йошкар-ола',
'Краснодар','Калининград','Кострома','Киров','Казань','Коммунарка','Ковров','Кировск','Кемерово','Коломна','Кисловодск','Калуга','Курск','Красноярск',
'Липецк','Лобня','Луга','Луганск','Льгов','левь',
'Магадан','Магнитогорск','Медногорск','Мирный','Москва','Муром',
'Нальчик','Находка','Нефтекамск','Нижневартовск','Новодвинск','Новосибирск','Новгород',
'Обь','Одинцово','Озерки','Омск','Опочка','Орел','Орджоникидзе','Оренбург','Остров',
'Павловск','Партизанск','Печора','Псков','Подольск','Покров','Порхов','Приморск','Пятигорск','Пермь',
'Ржев','Рязань','Райево','Рассоха','Репино','Ростов',
'Салехард','Санкт-Петербург','Суздаль','Самара','Саранск','Саратов','Светогорск','Светлогорск','Себеж','Северодвинск','Симферополь','Сочи','Сыктывкар','Смоленск',
'Таврово','Таганрог','Тамбов','Тверь','Тимашевск','Тихвин','Тобольск','Тольятти','Томск','Торжок','Тюмень','Тула',
'Углич','Ульяновск','Урюпинск','Уфа','Ухта',
'Фадеево','Фатеж','Федино','Фенино','Фокино','Феодосия', 
'Хабаровск','Ханты-Мансийск','Химки','Храброво','Хужир',
'Царево','Цвелодубово','Цветочный','Цемдолина','Цимлянск',
'Чаган','Чайковский','Чапаевск','Чаплыгин','Челябинск','Черемушки','Череповец','Черняховск','Чкаловский','Чебоксары',
'Шадринск','Шеломово','Шера','Шлиссельбург','Шуя',
'Щербинка','Щелково','Щепачиха','Щекино','Щелейки',
'Элекмонар','Электрогорск','Электросталь','Электроугли','Элиста','Эльбрус','Энгельс','Энгозеро','Энергетик',
'Югорск','Южа','Юрга','Юхнов','Юшково',
'Язово','Яйва','Якутск','Ялта','Ярославль','Ясногорск',
];

let count = 2; //счет ходов

message.textContent = countRolls(count);

// field.addEventListener('keydown',function(ev){
//     let value = field.value.replace(/[\d,!,@,#,$,%,^,&,*,(,),_,-,=,+,'',",.,/,;,:,]/g, '');
//     field.value = value;

//     if(cities.length === 0){
//         if(ev.keyCode === 13){
//             if(field.value.slice(-1) === 'ь'){
//                 cities.push(field.value.slice(-2,-1).toLowerCase())
//                 createLiYou(this.value)
//             }else{
//                 cities.push(field.value.toLowerCase());
//                 createLiYou(this.value)
//             }
//             console.log(cities);
//             field.value = '';
//             message.textContent = "Xод робота";
//             city.textContent = writeText() + cities[0].slice(-1);

//             if(cities[0].slice(-1) === 'ь'){
//                 city.textContent = writeText() + cities[0].slice(-2,-1)
//             }
//                count++; 
//         }
//     }else if(getFirstWord(this.value.toLowerCase()) === getLastWordInArr(cities) && checkElemInArr(cities,field.value.toLowerCase()) && ev.keyCode === 13){
//         if(field.value.slice(-1) === 'ь'){
//             cities.push(field.value.slice(0,-1).toLowerCase())
//         }else{
//             cities.push(field.value.toLowerCase());
//         }
//         console.log(cities);
        
//         if(count % 2 !== 0){
//            message.textContent = "Ходит 1 игрок" ;
//            city.textContent = writeText() + getLast(field.value);
//            createLiYou(this.value)
//         }else{
//             message.textContent = "Xод робота";
//             city.textContent = writeText() + getLast(field.value);
//             createLiYou(this.value)
//         }
        
//         field.value = '';

//         count++;

//     }else if(!checkElemInArr(cities,field.value.toLowerCase()) && ev.keyCode === 13){
//         city.textContent ='Такой город уже есть';
        
//         field.value = '';

       
//     }
//     getColor(random(0,colors.length-1));
       
// })

let cities = []; // запись городов игрока
let idTimer; //таймер
let i = 0; //счетчик крайнего слова
//преобразование массива начальных букв в маленькие
let arrCity = allcities.map(function(elem){
    return elem.toLowerCase()
})

let time = 60; //время до проигрыша

let valu; //значение компьютера

field.addEventListener('keydown',function(ev){
    let value = field.value.replace(/[\d,!,@,#,$,%,^,&,*,(,),_,-,=,+,'',",.,/,;,:,]/g, '');
    field.value = value.toLowerCase();
    
        if(countRolls(count) === "Xод игрока" && count === 2){
          
            if(checkCity(this.value,arrCity) && ev.keyCode === 13){
            i++
            count++
            cities.push((this.value))
          
            createLiYou(upperText(this.value))
            field.value = '';
            
            if(cities[0].slice(-1) === 'ь' || cities[0].slice(-1) === 'ы' ){
                city.textContent = writeText() + cities[0].slice(-2,-1);
            }else{
                city.textContent = writeText() + cities[0].slice(-1);
                }
            } 
            
            message.textContent = countRolls(count);  
            
        }
        if(countRolls(count) === "Xод игрока"){
            //проверка города
            if(checkCity(this.value,arrCity) && checkMyCity(this.value,cities) && ev.keyCode === 13){
             count++
             cities.push((this.value))
             createLiYou(upperText(this.value))
             field.value = '';
            i++
            
             city.textContent = writeText() + getLastWordInArr(cities);
             
             message.textContent = countRolls(count)
             }else if(ev.keyCode === 13 && (!checkMyCity(this.value,cities))){
                message.textContent = 'Такой города уже введен, введите другой город'
                this.value = ''
             }else if(!checkCity(this.value,arrCity) && ev.keyCode === 13){
                message.textContent = 'Такого города нет, введите другой город'
                this.value = ''
             }
             
        }

        if(countRolls(count) === 'Xод робота'){
            field.setAttribute('disabled','disabled')
            clearInterval(idTimer)
            
            time = 60;
            idTimer = setInterval(function(){
                time --;
                timer.classList.add('active')
                timer.innerHTML = 'Вы проиграете через: '+ time
                
                if(time === 0){
                    let str = 'Вы проиграли';
                    str = str.toUpperCase()
                    message.textContent = str;
                    field.setAttribute('disabled','disabled');
                    city.textContent = '';
                    link.classList.add('active')
                    clearInterval(idTimer)
                    timer.classList.remove('active')

                }
            },1000)

            let word = getLastWordInArr(cities);
          
            let takecitys = takeCity(word,arrCity);

            valu = check(takecitys,cities)

            count++

            cities.push(valu)

            i++

            setTimeout(fun,3000)

            if(valu === false){
                let str = 'Вы выиграли';
                str = str.toLocaleUpperCase()
                message.textContent = str;
                field.setAttribute('disabled','disabled');
                city.textContent = '';
                link.classList.add('active')
                clearInterval(idTimer)
                timer.classList.remove('active')
                cities.push('')
            }
            
        }

    // код для игры друг с другом
    //     if(ev.keyCode === 13){
    //         if(field.value.slice(-1) === 'ь'){
    //             cities.push(field.value.slice(-2,-1).toLowerCase())
    //             createLiYou(this.value)
    //         }else{
    //             cities.push(field.value.toLowerCase());
    //             createLiYou(this.value)
    //         }
    //         console.log(cities);
    //         field.value = '';
    //         message.textContent = "Xод робота";
    //         city.textContent = writeText() + cities[0].slice(-1);

    //         if(cities[0].slice(-1) === 'ь'){
    //             city.textContent = writeText() + cities[0].slice(-2,-1)
    //         }
    //            count++; 
               
    //     }else if(getFirstWord(this.value.toLowerCase()) === getLastWordInArr(cities) && checkElemInArr(cities,field.value.toLowerCase()) && ev.keyCode === 13){
    //     if(field.value.slice(-1) === 'ь'){
    //         cities.push(field.value.slice(0,-1).toLowerCase())
    //     }else{
    //         cities.push(field.value.toLowerCase());
    //     }
    //     console.log(cities);
        
    //     if(count % 2 !== 0){

    //        message.textContent = "Ходит 1 игрок" ;
    //        city.textContent = writeText() + getLast(field.value);
    //        createLiYou(this.value)
    //     }else{


    //         message.textContent = "Xод робота";
            
    //         city.textContent = writeText() + getLast(field.value);
    //         createLiYou(this.value)
    //     }
        
    //     field.value = '';

    //     count++;

    // }else if(!checkElemInArr(cities,field.value.toLowerCase()) && ev.keyCode === 13){
    //     city.textContent ='Такой город уже есть';
        
    //     field.value = ''; 
    // }
    getColor(random(0,colors.length-1));
       
})

//создание задержки перед выводом значения от робота
function fun(){
    
    return createLiComputer(upperText(valu)),message.textContent = countRolls(count),
    city.textContent = writeText() + getLastWordInArr(cities),
    field.removeAttribute('disabled','disabled')
}


// города которые мы получили из массива робота и сравниваем с нашим массивов
function takeCity(str,arr){
    let res = [];
    for(let elem of arr){
        if(str === elem[0]){
            res.push(elem)
        }
    } 
    return res
   
}
// проверка города в массиве робота и челова, чтобы робот выводил города которых еще не было в игре
function check(rob,hum){
   for(let elem of shuffle(rob)){
    for(let elem1 of hum){
        if(elem !== elem1 && checkMyCity(elem,hum)){
            return elem
        } 
    }
   }
   return false
}

// проверка слова в массиве(есть или нет)
function checkElemInArr(arr,str){
    for(let elem of arr){
        if(elem === str){
            return true
        }
    }
    
    return false
}

// проверка первой буквы
function getFirstWord(str){
    let elem = str[0];
    return elem
}

function checkLastWord(str){
    if(str.slice(-1) === 'ь'){
        return str.slice(0,-1)
    }
}

// проверка последнего буквы
function getLastWordInArr(arr){
    let last = arr[arr.length-1]
    let word = last.slice(-1);
    if(word === 'ь' || word === 'ы'){
        word = last.slice(-2,-1)
        return word
    }else{
       return word  
    }
          
}

// проверка горорда из массива компьютера который уже был
function checkCity(value,arr){ 
    for(let elem of arr){
        if(elem === value){
            return true
        }
    }
    
    return false
    
}
// проверка слова уже которое есть в массиве человека
function checkMyCity(value,arr){ 
    for(let elem of arr){
        if(elem === value){

            return false
        }
    }
    return true
}

// colors
let colors = ['red','blue','orange', 'pink','chartreuse','firebrick','fuchsia','teal'];

function random(min,max){
    return colors[Math.floor(Math.random() * (max - min + 1)) + min];   
}

function getColor(){
    return text.style = 'color: ' + random(0,colors.length-1);
}


// сообщение на какую букву ввести
function writeText(str){
    return 'Нужно ввести город на букву ';
}

//счетчик ходов игроков
function countRolls(count){
    if(count % 2 === 0){
        return 'Xод игрока';
    }else{
        return 'Xод робота';
    }
}

// добавление списка городов человека
function createLiYou(str){
    let li = document.createElement('li');
    li.textContent = str;
    you.appendChild(li);
}
// добавление списка городов робота
function createLiComputer(str){
    let li = document.createElement('li');
    li.textContent = str
    computer.appendChild(li)
}


//проверка крайней буквы если ь
function getLast(str){
    if(str.slice(-1) === 'ь'){
        return str.slice(-2,-1);
    }else{
        return str.slice(-1);
    }   
}

// сслыка на обновление игры
link.addEventListener('click',function(){
    location.reload()
})


// сортировка городов случайным образом
function shuffle(arr){
    return arr.map(i => [Math.random(), i]).sort().map(i => i[1])
}

// первый символ с большой буквы
function upperText(str){
   return str.replace(/(^|\s)\S/g, function(a){return a.toUpperCase()})

}
