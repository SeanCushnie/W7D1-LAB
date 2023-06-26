document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handle_title_input = () => {
    const new_list_element = document.createElement('li');
    const text_input_title = document.querySelector('#title').value;
    new_list_element.textContent = text_input_title;

    const list = document.querySelector('ul#reading-list');
    list.appendChild(new_list_element);
  };

  const handle_author_input = () => {
    const new_list_element = document.createElement('li');
    const text_input_author = document.querySelector('#author').value;
    new_list_element.textContent = text_input_author;

    const list = document.querySelector('ul#reading-list');
    list.appendChild(new_list_element);
  };

  const handle_category_selection = () => {
    const new_list_element = document.createElement('li');
    const text_selection_category = document.querySelector('#category').value;
    new_list_element.textContent = text_selection_category;

    const list = document.querySelector('ul#reading-list');
    list.appendChild(new_list_element);
  };


const form = document.querySelector('#new-item-form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  handle_title_input();
  handle_author_input();
  handle_category_selection();
  form.reset();
});