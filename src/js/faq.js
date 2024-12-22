import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-acc', {
    duration: 500,
    showMultiple: true,
    collapse: true,
    elementClass: 'faq-acc-el',
    triggerClass: 'faq-acc-el-trigger',
    panelClass: 'faq-acc-el-descr-frame',
    openOnInit: [-1],
});

document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');


        if (parentElement.classList.contains('open')) {
            parentElement.classList.remove('open');
        } else {
            document.querySelectorAll('.faq-acc-el').forEach(el => el.classList.remove('open')); // Закриваємо інші
            parentElement.classList.add('open');
        }
    });
});
