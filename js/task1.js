const delay = ms => {
     return new Promise(resolve =>{
     setTimeout(()=> {
     resolve(ms)  
   },ms)
     })
};
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
  // Вызовы функции для проверки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms

//   const btn = document.querySelector('#js-button');

// const onClick = () => {
//   setTimeout(() => {
//     alert('I love async JS!');
//   }, 2000);
// };

// // через 2 секунды после нажатия на кнопку 
// // появится alert указаный внутри колбека setTimeout
// btn.addEventListener('click', onClick);