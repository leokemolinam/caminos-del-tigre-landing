const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#site-nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menu.classList.toggle('open',!open)});
menu.addEventListener('click',event=>{if(event.target.matches('a')){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}});

const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}

if(window.matchMedia('(max-width: 768px)').matches){const details=[...document.querySelectorAll('.accordion details')];details.forEach(item=>item.addEventListener('toggle',()=>{if(item.open)details.forEach(other=>{if(other!==item)other.open=false})}))}

const toast=document.querySelector('#toast');let toastTimer;
function showToast(message){clearTimeout(toastTimer);toast.textContent=message;toast.classList.add('show');toastTimer=setTimeout(()=>toast.classList.remove('show'),5000)}
document.querySelectorAll('.demo-action').forEach(button=>button.addEventListener('click',()=>showToast(button.dataset.message)));

const form=document.querySelector('#contact-form');
form.addEventListener('submit',event=>{event.preventDefault();const status=form.querySelector('.form-status');if(!form.checkValidity()){form.reportValidity();status.textContent='Revise los campos obligatorios antes de continuar.';status.className='form-status error';return}status.textContent='Validación completada. Este prototipo no envía ni almacena información.';status.className='form-status success';showToast('Formulario validado. No se enviaron datos.')});
