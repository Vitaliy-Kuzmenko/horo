const inputUserName =  document.getElementById('name_user'); //Подключил поле для ввода имени
const inputUserDate = document.getElementById('date_user'); //подключил форму выбора даты
const btn_sumbit = document.getElementById('btn_sumbit'); // Подключил кнопку "получить результат"
const btn_sumbitAlluser = document.getElementById('btn_sumbitAlluser'); // Подключил кнопку "получить результат"
const btn_bgr_color = document.getElementById('btn_bgr_color');//подключил кнопку смены цвета фона
const btn_resBgr_color = document.getElementById('btn_resBgr_color');//подключил кнопку смены цвета фона

const results = document.getElementById('results');//подключил блок для вывода результатов
const currentDate = new Date(); // Получили текущую дату 
console.log('Текущая дата ' + currentDate)
console.log('Текущий месяц ' + currentDate.getMonth() )
const nameHoro = ['Год Обезьяны','Год Петуха','Год Собаки', 'Год Свиньи','Год Крысы','Год Быка', 'Год Тигра','Год Кролика','Год Дракона','Год Змеи','Год Лошади','Год Козы',];
const yearHoro = [1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945]; // минимальные даты для каждого знака

let userCorrentHoro // объявил переменную в которую запишем животное пользователя по китайцам
let ageUserY // сколько лет пользователю
let ageUserM // сколько месяцев пользователю
let ageUserD // сколько дней пользователю
let ageUserT// сколько часов
let arrinputUserDate // объявил переменную в которую запишем ввдённую дату без разделителя [yyyy, mm, dd]

const fun_change_bgrc = (color)=>{
document.querySelector('.center').style.backgroundColor = color
}
const fun_resChange_bgrc = (color)=>{
  document.querySelector('.center').style.backgroundColor = color
  }


btn_bgr_color.onclick = ()=>{
  fun_change_bgrc("green")
}
btn_resBgr_color.onclick = ()=>{
  fun_resChange_bgrc("")
}

const calcYearHoro = () => {
  //функция вычесляющая остаток от деления на 12 лет от введённой даты
  let a = arrinputUserDate[0] % 12;
  userCorrentHoro = nameHoro[a];
};

const getFullUserYear = () => {
  arrinputUserDate = inputUserDate.value.split("-"); //разбил строку с датой в массив, убрав разделитель[yyyy, mm, dd]
  console.log(arrinputUserDate);
  //ageUserY = currentDate.getFullYear() - arrinputUserDate[0]; // считаем возраст (года)
  if ((currentDate.getFullYear() - arrinputUserDate[0])==0){
    // расчёт если возраст 0 лет
    ageUserY = currentDate.getFullYear() - arrinputUserDate[0]; //тек.год-введён.год
    ageUserM = (currentDate.getMonth() + 1) - arrinputUserDate[1];// (тек.мес+1) - введён.мес
    ageUserD = (ageUserY * 365 + ageUserM * 30)+ (currentDate.getUTCDate() - arrinputUserDate[2]); // (возраст.лет*365+возраст.мес *30)+ (тек.дата - введ.дата) считаем возраст (дни)
    ageUserT = ageUserD * 24; // считаем возраст (часы)
console.log('если 0 лет')
  }
  else if(currentDate.getMonth() + 1 < arrinputUserDate[1]) {
    // расчёт если ДР не наступило
    ageUserY = currentDate.getFullYear() - arrinputUserDate[0]-1;
    ageUserM = (12 - arrinputUserDate[1]) + (currentDate.getMonth()-1)+1;
    ageUserD = (ageUserY * 365 + ageUserM * 30)+ (currentDate.getUTCDate() - arrinputUserDate[2]); // (возраст.лет*365+возраст.мес *30)+ (тек.дата - введ.дата) считаем возраст (дни)
    ageUserT = ageUserD * 24; // считаем возраст (часы)
    console.log('если др ещё не наступило')
  } else {
    ageUserY = currentDate.getFullYear() - arrinputUserDate[0];
    ageUserM = (currentDate.getMonth() + 1) - arrinputUserDate[1];
    ageUserD = (ageUserY * 365 + ageUserM * 30)+ (currentDate.getUTCDate() - arrinputUserDate[2]); // (возраст.лет*365+возраст.мес *30)+ (тек.дата - введ.дата) считаем возраст (дни)
    ageUserT = ageUserD * 24; // считаем возраст (часы)
    console.log('если др наступило' + ageUserM)
  }
  
  
  console.log(
    "Ваш возраст " +
      ageUserY +
      " лет, " +
      ageUserD +
      " дней, " +
      ageUserT +
      " часа"
  );
  //console.log(ageUserM + " Полных Месяцев");
  console.log(currentDate.getMonth() + 1);
  console.log(arrinputUserDate[1])
  console.log((currentDate.getMonth() + 1) - arrinputUserDate[1])
  //console.log(ageUserM = (12 - arrinputUserDate[1]) + (currentDate.getMonth()-1)+1)
};


////////////////////////////////////////////////////////////////
//добавление пользователей в массив объектов//
///////////////////////////////////////////////////////////////
let userInfo = [] // переменая для хранения данных пользователей

const userInfoTemp = ()=>{ //функция собирающая в объект все данные пользователя
 let a
  a = {
  name: inputUserName.value,
  'ageUserY1':  ageUserY,
  'ageUserM': ageUserM,
  'ageUserD': ageUserD,
  'ageUserT': ageUserT,
  'userCorrentHoro': userCorrentHoro,
  }
  userInfo.push(a)
}

////////////////////////////////////////////////////////////////
//текст гороскопа на страницу//
///////////////////////////////////////////////////////////////
const resHoroRandom = () => {
  const arrHoroRandom = [
    "всё будет хорошо",
    "всё сбудется, 18 лет не срок!",
    "всё получится",
    "всё сбудется, ты продолжаешь начатое 18 лет назад",
    "правильно, продолжай в том-же духе",
    "всё отлично",
    "финансовые дела пойдут только вверх",
    "только смотрите в оба глаза",
    "могут быть трудности, но они все решаемы!",
    "с вышим талантом положительный результат обеспечен",
    "путь к js составил более 18 лет ))",
  ];
  let horoRandom = Math.floor(Math.random() * arrHoroRandom.length); // получил случайный номер массива
  //console.log(horoRandom)
  //console.log(resHoroRandom(horoRandom))
  let horoTxt =
    "Впереди вас ждет очень интересная финансовая операция, " +
    arrHoroRandom[horoRandom];
  return horoTxt;
};

////////////////////////////////////////////////////////////////
//вывод результатов на страницу//
///////////////////////////////////////////////////////////////

///////////////////////////////
//вывод всех пользователей на страницу
///////////////////////////////
const printAlluser = () => {
  results.innerHTML = ""; // затёр блок результатов

  userInfo.forEach((user, i) => {
    const userNode = document.createElement("div"); // создаём блок
    // Шаблонными литерал $
    userNode.innerHTML = `
  <div>
  <br>
  <b>Пользователь - </b> ${i + 1}
  <br>
  <b>Имя - </b> ${user.name}
  <br>
  <b>Возраст - </b> ${user.ageUserY1}
  <br>
  <b>Гороскоп - </b> ${user.userCorrentHoro}
  <br>
  </div>
  `;
    results.appendChild(userNode);
  });
};
///////////////////////////////
//вывод текущего результатата на страницу
///////////////////////////////
const printRes = () => { 
  results.innerHTML =
    "<p><b>Текущая дата </b></p>" +
    currentDate +
    "<p><b>Ваше имя </b></p>" +
    inputUserName.value +
    "<p><b>Ваш гороскоп</b></p>"+
    resHoroRandom() +
    "<p><b>Ваш китайский гороскоп</b></p>" +
    userCorrentHoro +
    "<p><b>Ваш возраст </b></p>" +
    ageUserY +
    " лет " +
    "<p></p>" +
    ageUserM +
    " Месяцев, " +
    "<p></p>" +
    ageUserD +
    " Всего дней, " +
    ageUserT +
    " Всего часа " 
};

////////////////////////////////////////////////////////////////
//Проверка на одинаковую дату//
///////////////////////////////////////////////////////////////

const checkData = () => {
  // проверка на одинаковую дату
  let arrDateCurrent = new Date() // выводит в строке текущую дату(в реверсе) (гггг,мм,дд)
    .toLocaleDateString() // взял только дату без времени
    .split(".") //убрал разделитель и добавил всё в массив
    .reverse() // перевернул массив с [дд мм гггг] в [гггг мм дд]
    .join(); // перевёл массив строку (гггг,мм,дд)
  console.log(arrDateCurrent);
console.log(arrinputUserDate)
  if (
    arrDateCurrent === arrinputUserDate.join() ||
    (arrinputUserDate !== null && !isNaN(arrinputUserDate))
  ) {
    alert("wrong date");
    return true;
  } else {
    return false;
  }
};

const checkName = () => {
  // проверка пустой строки или цифры
  if (inputUserName.value !== null && !isNaN(inputUserName.value)) {
    return true;
  } else {
    return false;
  }
};

////////////////////////////////////////////////////////////////
//Кнопки//
///////////////////////////////////////////////////////////////

btn_sumbit.onclick = ()=>{ 
  getFullUserYear()//Считаем полный возраст года, месяц, часы, минуты

  if(checkName()){ // проверка пустой строки или цифры
    alert('wrong name!')
  } else if(checkData()) {
    alert('wrong input Date')
  } else {

  calcYearHoro () //Находим какой знак по китайскому гороскопу
  userInfoTemp() // вызываем функцию собирающую в объект все данные пользователя и добавлющаяя  эти данные в массив  
  printRes() //выводим результат на страницу
  resHoroRandom()
 
  console.log (userInfo )

  inputUserDate.value = '' // сбросил дату
  inputUserName.value = '' //сбросил имя
  //alert('download complead')
}
}

btn_sumbitAlluser.onclick = ()=>{
  printAlluser()
}

//new Date('1988-03-21')






 // складываем год, месяц и день (2022+12+12)
  // let summDateCurrent = 1+ currentDate.getFullYear()+currentDate.getMonth() + currentDate.getDate()
  // console.log(summDateCurrent)
  // let summDateUser = +arrinputUserDate[0] + +arrinputUserDate[1] + +arrinputUserDate[2]
  // console.log(summDateUser)
  //Сравниваю результат сложения
  // if( summDateCurrent === summDateUser){
  //   alert('Wrong data')
  // }
  
  //   if(currentDate.getFullYear() == arrinputUserDate[0], 
  //   currentDate.getMonth() + 1 == arrinputUserDate[1],
  //   currentDate.getDay() == arrinputUserDate[0]
  //   ) {
  //   console.log('wrong data')
  // }



// const test = [1,2,3,4,5,6]
  //  for (let test1 of test){
  //   let newList = document.createElement('p');
  //   newList.textContent = test1
  //   results.appendChild(newList)
  //  }
   
// const printAlluser = () => { //вывод результатов на страницу (69 строка)
//   for(let i = 0; i <=userInfo.length - 1; i++){
//     results.innerHTML = 
//     "<b>Пользователь - </b>" + userInfo.length  + // Всего пользователей
//     "<p></p>"+
//     "<b>Имя - </b>" + userInfo[i].name + 
//    "<p></p>"+
//     "<b>Возраст - </b>" + userInfo[i].ageUserY1 +
//     "<p></p>"+
//     "<b>Гороскоп - </b>" + userCorrentHoro
  
//   };
  
//   const test = [1,2,3,4,5,6]
//    for (let test1 of test){
//     let newList = document.createElement('p');
//     newList.textContent = test1
//     results.appendChild(newList)
//    }
   
  
//   }


// const printAlluser = () => { //вывод результатов на страницу
//   results.innerHTML= "<b>Всего пользователей - </b>" + userInfo.length  // Всего пользователей и обнулил блок

//   let testUserBase
// for(let i = 0; i <=userInfo.length - 1; i++){
//    testUserBase = 
//   "<b>Пользователь - </b>" + userInfo.length  + // Всего пользователей
//   "<p></p>"+
//   "<b>Имя - </b>" + userInfo[i].name + 
//  "<p></p>"+
//   "<b>Возраст - </b>" + userInfo[i].ageUserY1 +
//   "<p></p>"+
//   "<b>Гороскоп - </b>" + userCorrentHoro
// };
// results.appendChild(testUserBase)

//  const test = [1,2,3,4,5,6]
//  for (let test1 of test){
//   let newList = document.createElement('p');
//   newList.textContent = test1
//   results.appendChild(newList)
//  }
 
// }


// const printAlluser = () => { //вывод результатов на страницу
//   results.innerHTML= "<b>Всего пользователей - </b>" + userInfo.length  // Всего пользователей и обнулил блок

//   let testUserBase
// for(let i = 0; i <=userInfo.length - 1; i++){
//    testUserBase = 
//   "<b>Пользователь - </b>" + userInfo.length  + // Всего пользователей
//   "<p></p>"+
//   "<b>Имя - </b>" + userInfo[i].name + 
//  "<p></p>"+
//   "<b>Возраст - </b>" + userInfo[i].ageUserY1 +
//   "<p></p>"+
//   "<b>Гороскоп - </b>" + userCorrentHoro
// };
// results.appendChild(testUserBase)

//  const test = [1,2,3,4,5,6]
//  for (let test1 of test){
//   let newList = document.createElement('p');
//   newList.textContent = test1
//   results.appendChild(newList)
//  }
 
// }
 


// const printAlluser = () => { //вывод результатов на страницу
//   for(let i = 0; i <=userInfo.length - 1; i++){
//   results.innerHTML =
//   "<b>Все пользователи - </b>" + userInfo.length  + // Всего пользователей
//   "<p></p>"+
//   "<b>Имя - </b>" + userInfo[i].name + 
//  "<p></p>"+
//   "<b>Возраст - </b>" + userInfo[i].ageUserY1 +
//   "<p></p>"+
//   "<b>Гороскоп - </b>" + userCorrentHoro
// };
// }



/////////////////////////////////////////////////////////////////////////
// const arrCalcYearHoro = [] //массив вычитаний 12 лет от введённого года до заданного минимума
// console.log(arrCalcYearHoro)

//   for(let i=testInput; i>=1934; i= i-12){
//     console.log(i)
//     arrCalcYearHoro.push(i)// передал вычисления в массив
// }



// yearHoro.forEach((elem1, i1) =>{ // взял массив с датами и перебираю их в цикле до совпадения при вычитание в цикле -12 лет от введённой даты
//   //console.log(elem)
//   arrCalcYearHoro.forEach((elem2) =>{

//     if  (elem1 === elem2){
//       console.log(i1)
//       userCorrentHoro = 'Вы родились в ' +  nameHoro[i1]
//           } else {
//             console.log('bad')
//           }
//   } 
//   )
// }
// )


//////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////
// function test (){ //  вариант 1 добавляем в массив циклом года от и до для каждого знака
// for (i = 1911; i <= 2031; i = i + 12) {
//   yearHoro[0].push(i);
// }
// console.log(yearHoro[0]);
// }
// test ()
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// function test2 (startYear, finishYear,AdressNameHoro){ // вариант 2 добавляем в массив циклом года от и до для каждого знака при новом вызове функции
//   for (i = startYear; i <= finishYear; i = i + 12) {
//     yearHoro[AdressNameHoro].push(i);
//   }
//   console.log(yearHoro[0]);
//   console.log(yearHoro[1]);
//   }
//   test2 (1934,2031,0)
//   test2 (1935,2032,1)
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////// 

////////////////////////////////////////////////////////////////////////////////////////////////////
//   if(arrinputUserDate[0] == c){
//     console.log(nameHoro[0])
//    } else if (arrinputUserDate[0] == 1912) {
//     console.log(nameHoro[1])
//    } else if (arrinputUserDate[0] == 1913) {
//     console.log(nameHoro[2])
//    } else if (arrinputUserDate[0] == 1914) {
//     console.log(nameHoro[3])
//    } else if (arrinputUserDate[0] == 1915) {
//     console.log(nameHoro[4])
//    } else if (arrinputUserDate[0] == 1916) {
//     console.log(nameHoro[5])
//    } else if (arrinputUserDate[0] == 1917) {
//     console.log(nameHoro[6])
//    } else if (arrinputUserDate[0] == 1918) {
//     console.log(nameHoro[7])
//    } else if (arrinputUserDate[0] == 1919) {
//     console.log(nameHoro[8])
//    } else if (arrinputUserDate == 1920) {
//     console.log(nameHoro[9])
//    } else if (arrinputUserDate[0] == 1921) {
//     console.log(nameHoro[10])
//    } else if (arrinputUserDate[0] == 1922) {
//     console.log(nameHoro[11])
//    } 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
  
