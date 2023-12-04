const images = document.querySelectorAll('.booklist img');

images.forEach((image) => {
    image.addEventListener('click', () => {
      const description = image.nextElementSibling;
      description.classList.toggle('show');
      if (description.classList.contains('show')) {
        description.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        description.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        window.scrollTo({
          top: window.pageYOffset + description.getBoundingClientRect().top,
          behavior: 'smooth',
        });
      }
    });
  });
  