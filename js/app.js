'use strict';

//////////////////// Globlas /////////////////////////////////

let right_section = document.getElementById('right-section');
let form = document.getElementById('form');
let clear = document.getElementById('clear');

// let articles_counter = 0;
// let articles = [];

///////////////////////// LocalStorage /////////////////////////

if (localStorage.getItem('articles') === null) {
  localStorage.setItem('articles', JSON.stringify([]));
}
if (localStorage.getItem('articles_counter') === null) {
  localStorage.setItem('articles_counter', JSON.stringify(0));
}

let LSarticles = JSON.parse(localStorage.getItem('articles'));
let articles_counter = JSON.parse(localStorage.getItem('articles_counter'));

/////////////////// Constructer //////////////////////
function Articles(name, title, subject, content, day, month, year) {
  this.name = name;
  this.title = title;
  this.subject = subject;
  this.content = content;
  this.day = day;
  this.month = month;
  this.year = year;
  this.articles_counter = articles_counter;
  this.likes = this.random_likes(1, 500);
  articles_counter++;
  LSarticles.push(this);
  localStorage.setItem('articles', JSON.stringify(LSarticles));
  localStorage.setItem('articles_counter', JSON.stringify(articles_counter));
}



Articles.prototype.random_likes = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

////////////////////////// Listners ////////////////////////////
form.addEventListener('submit', fHandler);
clear.addEventListener('click', cHandler);

////////////////////////////// Events //////////////////////////
function fHandler(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let title = event.target.title.value;
  let subject = event.target.subjects.value;
  let content = event.target.content.value;
  let day = event.target.day.value;
  let month = event.target.month.value;
  let year = event.target.year.value;

  new Articles(name, title, subject, content, day, month, year);
  render();
  console.log(LSarticles);

}


function cHandler(event) {
  if (event.target.id === 'clear') {
    localStorage.clear();
    LSarticles = [];
      right_section.innerHTML = '';
      articles_counter = 0;

  }

}



///////////////////////////////Render ///////////////////////

function render() {
  right_section.innerHTML = ' ';
  let counter = 0;
  let counter_p = document.createElement('p');
  counter_p.className = 'counter_p';
  right_section.appendChild(counter_p);
  for (let i = 0; i < LSarticles.length; i++) {


    let article = document.createElement('div');
    article.className = 'article';
    right_section.appendChild(article);


    let title = document.createElement('h2');
    title.innerHTML = LSarticles[i].title;
    article.appendChild(title);

    let img = document.createElement('img');
    img.src = 'img/asac_ltuc.jpg';
    img.className = 'article-img';
    article.appendChild(img);

    let author = document.createElement('p');
    author.innerHTML = 'Author: ' + LSarticles[i].name;
    article.appendChild(author);

    let date = document.createElement('p');
    date.innerHTML = 'Date: ' + LSarticles[i].day + '-' + LSarticles[i].month + '-' + LSarticles[i].year;
    article.appendChild(date);

    let likes = document.createElement('p');
    likes.innerHTML = LSarticles[i].likes +' like';
    article.appendChild(likes);

    let subject = document.createElement('p');
    subject.innerHTML = LSarticles[i].subject;
    article.appendChild(subject);

    let content = document.createElement('p');
    content.innerHTML = LSarticles[i].content;
    article.appendChild(content);

    let id = document.createElement('p');
    id.innerHTML = 'This article ID is: ' + parseInt(LSarticles[i].articles_counter + 1) ;
    article.appendChild(id);
    counter++;
  }
  counter_p.innerHTML = 'Number of Articles is : ' + counter;
}



render();
