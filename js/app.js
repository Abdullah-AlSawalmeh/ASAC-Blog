'use strict';

let right_section = document.getElementById('right-section');
let form = document.getElementById('form');

let articles_counter = 0;
// let articles = [];

if (localStorage.getItem('articles') === null) {
    localStorage.setItem('articles', JSON.stringify([]));
}

let LSarticles = JSON.parse(localStorage.getItem('articles'));



function Articles(name, title, subject, content, day, month, year) {
  this.name = name;
  this.title = title;
  this.subject = subject;
  this.content = content;
  this.day = day;
  this.month = month;
  this.year = year;
  this.articles_counter = articles_counter;
  this.likes = random_likes(1, 500);
  articles_counter++;
    LSarticles.push(this);
    localStorage.setItem('articles', JSON.stringify(LSarticles));
}


form.addEventListener('submit', fHandler);

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

function render() {
  right_section.innerHTML = ' ';
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
        id.innerHTML = 'This article ID is:' + LSarticles[i].articles_counter;
    article.appendChild(id);
  }

}


function random_likes(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
render()