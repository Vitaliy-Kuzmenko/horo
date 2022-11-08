const userName =  document.getElementById('name_user'); //Подключил поле для ввода имени
const userDate = document.getElementById('date_user'); //подключил форму выбора даты
const btn_sumbit = document.getElementById('btn_sumbit'); // Подключил кнопку "получить результат"
const results = document.getElementById('results');//подключил блок для вывода результатов
const currentDate = new Date(); // Получили текущую дату 
console.log('Текущая дата ' + currentDate)
const nameHoro = ['пустой, чтоб несчитать 0','Год Свиньи','Год Крысы','Год Быка', 'Год Тигра','Год Кролика','Год Дракона','Год Змеи','Год Лошади','Год Козы','Год Обезьяны','Год Петуха','Год Собаки'];
const yearHoro = [1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945]; // минимальные даты для каждого знака
const arrCalcYearHoro = [] //массив вычитаний 12 лет от введённого года до заданного минимума
console.log(arrCalcYearHoro)
let UserCorrentHoro = 'Вы родились в '
console.log (UserCorrentHoro)
let testInput = 1988; // ввёдённая дата пользователем
const calcYearHoro = ()=> {//функция вычитающая по 12 лет от введённой даты до заданного лимита
  for(i=testInput; i>=1934; i= i-12){
    console.log(i)
    arrCalcYearHoro.push(i)// передал вычисления в массив
}
}
calcYearHoro ()

yearHoro.forEach((elem1, i1) =>{ // взял массив с датами и перебираю их в цикле до совпадения при вычитание в цикле -12 лет от введённой даты
  //console.log(elem)
  arrCalcYearHoro.forEach((elem2) =>{

    if  (elem1 === elem2){
      console.log(i1)
      console.log(nameHoro[i1])
      UserCorrentHoro = nameHoro[i1]
      console.log('bad')
    }
  } 
  )
}
)



btn_sumbit.onclick = ()=>{ 
  console.log('Имя пользователя ' + userName.value);
  console.log('Введена дата ' + userDate.value);
  let arrUserDate = userDate.value.split('-');//разбил строку с датой в массив, убрав разделитель[yyyy, mm, dd]
  console.log(arrUserDate);

    let ageUserY = currentDate.getFullYear() - arrUserDate[0]; // считаем возраст (года)
    let ageUserD = ageUserY * 365; // считаем возраст (дни)
    let ageUserM = ageUserD * 24; // считаем возраст (часы)   
    console.log ('Ваш возраст ' + ageUserY + ' лет, ' + ageUserD + ' дней, ' + ageUserM + ' минут');
  let b = arrUserDate[0];
  console.log(b)

 

}

// function test (){ //  вариант 1 добавляем в массив циклом года от и до для каждого знака
// for (i = 1911; i <= 2031; i = i + 12) {
//   yearHoro[0].push(i);
// }
// console.log(yearHoro[0]);
// }
// test ()

// function test2 (startYear, finishYear,AdressNameHoro){ // вариант 2 добавляем в массив циклом года от и до для каждого знака при новом вызове функции
//   for (i = startYear; i <= finishYear; i = i + 12) {
//     yearHoro[AdressNameHoro].push(i);
//   }
//   console.log(yearHoro[0]);
//   console.log(yearHoro[1]);
//   }
//   test2 (1934,2031,0)
//   test2 (1935,2032,1)





 // let b = 0
// const testF = ()=> {// функция отнимает по 12 лет до тех пор пока не остановится на минимальном значении
//   for (i = testInput; i >= yearHoro2[b]; i=i-12) {
//   console.log(i)
//   console.log('адресс в массиве ' + yearHoro2[6])
// }
// }

// for(i=0; i<=11; i++){
//   b = i;
//  testF()

// }
 
  





//   if(arrUserDate[0] == c){
//     console.log(nameHoro[0])
//    } else if (arrUserDate[0] == 1912) {
//     console.log(nameHoro[1])
//    } else if (arrUserDate[0] == 1913) {
//     console.log(nameHoro[2])
//    } else if (arrUserDate[0] == 1914) {
//     console.log(nameHoro[3])
//    } else if (arrUserDate[0] == 1915) {
//     console.log(nameHoro[4])
//    } else if (arrUserDate[0] == 1916) {
//     console.log(nameHoro[5])
//    } else if (arrUserDate[0] == 1917) {
//     console.log(nameHoro[6])
//    } else if (arrUserDate[0] == 1918) {
//     console.log(nameHoro[7])
//    } else if (arrUserDate[0] == 1919) {
//     console.log(nameHoro[8])
//    } else if (arrUserDate == 1920) {
//     console.log(nameHoro[9])
//    } else if (arrUserDate[0] == 1921) {
//     console.log(nameHoro[10])
//    } else if (arrUserDate[0] == 1922) {
//     console.log(nameHoro[11])
//    } 

  