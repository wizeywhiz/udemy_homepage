document.querySelectorAll('.course').forEach(course =>{
    course.addEventListener('mouseover', e =>{
        let data = `<h3 class="heading">${course.querySelector('.course-title').textContent}</h3>
        <h4>And any other data</h4>`;
        let infoBox = course.querySelector('#course-info');
        infoBox.innerHTML = data;
        infoBox.classList.remove('hidden');
        infoBox.classList.add('pop-up');
    });
    course.addEventListener('mouseleave', e =>{
        let infoBox = course.querySelector('#course-info');
        infoBox.classList.remove('pop-up');
        infoBox.classList.add('hidden');
    })
})