const images = document.querySelectorAll('.booklist img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    const description = image.nextElementSibling;
    description.classList.toggle('show');
    description.scrollIntoView({ behavior: 'smooth' });

    if (!description.classList.contains('show')) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }
  });
});
  