import{S as d,N as u,A as f}from"./assets/vendor-c29207ad.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){new d(".gallery-swiper",{modules:[u],breakpoints:{320:{slidesPerView:1.5,spaceBetween:10},1200:{slidesPerView:3,spaceBetween:20},1400:{slidesPerView:3,spaceBetween:10}},centeredSlides:!0,loop:!0,slideClass:"gallery-swiper-slide",wrapperClass:"gallery-swiper-wrapper",direction:"horizontal",navigation:{nextEl:".custom-next",prevEl:".custom-prev"},on:{reachBeginning:function(){document.querySelector(".custom-prev").classList.add("swiper-button-disabled")},reachEnd:function(){document.querySelector(".custom-next").classList.add("swiper-button-disabled")},slideChange:function(){const o=this.realIndex;document.querySelectorAll(".pagination-item").forEach((r,n)=>{n===o?r.classList.add("active"):r.classList.remove("active")})}}})});new f(".faq-acc",{duration:500,showMultiple:!0,collapse:!0,elementClass:"faq-acc-el",triggerClass:"faq-acc-el-trigger",panelClass:"faq-acc-el-descr-frame",openOnInit:[-1]});document.querySelectorAll(".faq-acc-el-trigger").forEach(o=>{o.addEventListener("click",()=>{const s=o.closest(".faq-acc-el");s.classList.contains("open")?s.classList.remove("open"):(document.querySelectorAll(".faq-acc-el").forEach(r=>r.classList.remove("open")),s.classList.add("open"))})});const m=document.querySelector(".menu-button"),p=document.querySelector(".modal-close-button"),i=document.querySelector(".modal"),y=document.querySelectorAll(".menu-list-item"),c=document.querySelector(".header");document.querySelectorAll(".links");m.addEventListener("click",h);p.addEventListener("click",a);y.forEach(o=>o.addEventListener("click",a));window.addEventListener("scroll",g);function h(){i.style.display="block"}function a(o){i.style.display="none"}function g(){window.scrollY>60?(c.classList.add("header-scroll"),c.classList.add("header")):(c.classList.remove("header-scroll"),c.classList.add("header"))}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(s){s.preventDefault();const r=this.getAttribute("href").substring(1),n=document.getElementById(r);if(n){const t=n.offsetTop-90;window.scrollTo({top:t,behavior:"smooth"})}})})});
//# sourceMappingURL=commonHelpers.js.map
