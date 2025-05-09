// Function Download CV
document.getElementById('down').addEventListener('click', function () {

    let filename = encodeURIComponent("KirollusMeshmesh's_CV.pdf");
    let link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Function Switch to About
function aboutFun() {
    event.preventDefault();

    let aboutBtn = document.getElementById('aboutBtn');
    aboutBtn.classList.add('active');

    // Remove 'active' class from other buttons
    let otherBtns = document.querySelectorAll('.bar');
    otherBtns.forEach(function (btn) {
        if (btn.id !== 'aboutBtn') {
            btn.classList.remove('active');
        }
    });

    // Hide all sections except the one with id 'aboutSection'
    let sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        if (section.id !== 'aboutSection') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block'; // Ensure 'skillSection' is displayed
        }
    });
}


// Function Switch ti skills
function skillFun() {
    event.preventDefault();

    let skillBtn = document.getElementById('skillBtn');
    skillBtn.classList.add('active');

    // Remove 'active' class from other buttons
    let otherBtns = document.querySelectorAll('.bar');
    otherBtns.forEach(function (btn) {
        if (btn.id !== 'skillBtn') {
            btn.classList.remove('active');
        }
    });

    // Hide all sections except the one with id 'skillSection'
    let sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        if (section.id !== 'skillSection') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block'; // Ensure 'skillSection' is displayed
        }
    });
}

// Function Switch to works
function workFun() {
    event.preventDefault();

    let workBtn = document.getElementById('workBtn');
    workBtn.classList.add('active');

    // Remove 'active' class from other buttons
    let otherBtns = document.querySelectorAll('.bar');
    otherBtns.forEach(function (btn) {
        if (btn.id !== 'workBtn') {
            btn.classList.remove('active');
        }
    });

    // Hide all sections except the one with id 'skillSection'
    let sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        if (section.id !== 'workSection') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block'; // Ensure 'skillSection' is displayed
        }
    });
}


// Function Switch to About
function contactFun() {
    event.preventDefault();

    let contactBtn = document.getElementById('contactBtn');
    contactBtn.classList.add('active');

    // Remove 'active' class from other buttons
    let otherBtns = document.querySelectorAll('.bar');
    otherBtns.forEach(function (btn) {
        if (btn.id !== 'contactBtn') {
            btn.classList.remove('active');
        }
    });

    // Hide all sections except the one with id 'aboutSection'
    let sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        if (section.id !== 'contactSection') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block'; // Ensure 'skillSection' is displayed
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.workCont .image');

    if (window.innerWidth <= 768) {
        images.forEach(image => {
            image.addEventListener('click', function (e) {
                e.preventDefault();

                const text = image.querySelector('.text');
                if (text) {
                    text.style.left = '0';
                }
            });
        });
    }
});

document.getElementById('proj1').addEventListener('click', function (event) {
    event.preventDefault(); // لمنع الرابط من فتح الصفحة مباشرة
    window.location.href = 'Demo.mp4'; // إعادة توجيه المستخدم إلى الصفحة المطلوبة
});
document.getElementById('proj2').addEventListener('click', function (event) {
    event.preventDefault(); // لمنع الرابط من فتح الصفحة مباشرة
    window.location.href = 'https://agecalculator-drab.vercel.app/'; // إعادة توجيه المستخدم إلى الصفحة المطلوبة
});
document.getElementById('proj3').addEventListener('click', function (event) {
    event.preventDefault(); // لمنع الرابط من فتح الصفحة مباشرة
    window.location.href = 'https://countingdown-virid.vercel.app/'; // إعادة توجيه المستخدم إلى الصفحة المطلوبة
});
document.getElementById('proj4').addEventListener('click', function (event) {
    event.preventDefault(); // لمنع الرابط من فتح الصفحة مباشرة
    window.location.href = 'https://currencyapi-vert.vercel.app/'; // إعادة توجيه المستخدم إلى الصفحة المطلوبة
});
document.getElementById('proj5').addEventListener('click', function (event) {
    event.preventDefault(); // لمنع الرابط من فتح الصفحة مباشرة
    window.location.href = 'https://productmanagmentsystem.vercel.app/'; // إعادة توجيه المستخدم إلى الصفحة المطلوبة
});
document.getElementById('proj6').addEventListener('click', function (event) {
    event.preventDefault(); // لمنع الرابط من فتح الصفحة مباشرة
    window.location.href = 'https://recipe-app-phi-ten.vercel.app/'; // إعادة توجيه المستخدم إلى الصفحة المطلوبة
});
document.getElementById('proj7').addEventListener('click', function (event) {
    event.preventDefault(); // لمنع الرابط من فتح الصفحة مباشرة
    window.location.href = 'https://coffeeshoplandingpage-eight.vercel.app/'; // إعادة توجيه المستخدم إلى الصفحة المطلوبة
});

