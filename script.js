const accordian = document.querySelectorAll('.accordian');

accordian.forEach(accordian =>{
    const ans = accordian.querySelector('.ans');
    const icon = accordian.querySelector('.icon');

    accordian.addEventListener('click',()=>{
        icon.classList.toggle('active');
        ans.classList.toggle('active');
    })

})
