const project3 = document.getElementById('project3');
project3.style.display = 'none';
const project4 = document.getElementById('project4');
project4.style.display = 'none';
const seeProjects = document.getElementById('seeProjects');
seeProjects.addEventListener('click', () => {
  project3.style.display = 'block';
  project4.style.display = 'block';
})