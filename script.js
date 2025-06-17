window.onload = function () {
    console.log('OBJ Project Limited Loaded Successfully');
  
    // Example interaction: scroll to bio
    document.querySelector('.title').addEventListener('click', () => {
      document.querySelector('.bio').scrollIntoView({ behavior: 'smooth' });
    });
  };