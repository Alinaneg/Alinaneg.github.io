document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const currentPageEl = document.querySelector(".current-page");
    const totalPagesEl = document.querySelector(".total-pages");
    
    let currentPage = 0;
    let slidesPerView = 1;
    let totalPages = 0;

    function updateSlidesPerView() {
        if (window.innerWidth >= 768) {
            slidesPerView = 3;
        } else {
            slidesPerView = 1;
        }
        totalPages = Math.ceil(slides.length / slidesPerView);
        updateSlider();
        updatePager();
    }
    
    function updateSlider() {
        let translateX;
        
        if (window.innerWidth >= 768) {
            if (currentPage === 0) {
                translateX = 0; 
            } else if (currentPage === 1) {
                translateX = -100;
            } else if (currentPage === 2) {
                translateX = -166.666; 
            }
        } else {
            translateX = -currentPage * 100;
        }
        
        slider.style.transform = "translateX(" + translateX + "%)";
    }

    function updatePager() {
        currentPageEl.textContent = currentPage + 1;
        totalPagesEl.textContent = totalPages;
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;
    }

    function nextPage() {
        if (currentPage < totalPages - 1) {
            currentPage += 1;
            updateSlider();
            updatePager();
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage -= 1;
            updateSlider();
            updatePager();
        }
    }

    prevBtn.addEventListener("click", prevPage);
    nextBtn.addEventListener("click", nextPage);
    window.addEventListener("resize", updateSlidesPerView);
    updateSlidesPerView();
});