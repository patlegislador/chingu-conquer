const collapseBtn = document.querySelector('.btn-toggle-nav');
const navBar = document.querySelector('.collapse-nav');

collapseBtn.addEventListener('click', function() {
    navBar.classList.toggle('show');
});

const collapselinks_node = document.querySelectorAll('.collapselink');
const collapselinks = Array.from(collapselinks_node);

collapselinks.forEach(e => {
    e.addEventListener('click', function() {
        navBar.classList.remove('show');
    });
})

/** HIGHLIGHT ON CLICK **/

const navlinks = Array.from(document.querySelectorAll('.section'));

navlinks.forEach(el => el.addEventListener('click', e => setActive(el)));


function setActive(el) {
    [...el.parentElement.children].forEach(sib => sib.classList.remove('active'))
    el.classList.add('active')
}

/** HIGHLIGHT ON SCROLL **/


const sections = Array.from(document.querySelectorAll('section'));

sections.forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    var anchors = Array.from(document.querySelectorAll('a'));
    anchors.forEach(function(el) {
      el.classList.remove('active');
    })
  
    var menu = document.querySelector("a[href='#" + this.id + "']");
    menu.classList.add('active');
    console.log(menu);
  });
});