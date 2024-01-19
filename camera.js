var introElement = document.querySelector(".intro");
var productFeatureElement = document.querySelector(".product-feature");
var productGalleryElement = document.querySelector(".product-gallery");
var showLeftElement = document.querySelector(".show-left");
var showRightElement = document.querySelector(".show-right");
var showLeftaElement = document.querySelector(".show-lefta");
var showRightaElement = document.querySelector(".show-righta");
var showLeftbElement = document.querySelector(".show-leftb");
var showRightbElement = document.querySelector(".show-rightb");
        
       

document.addEventListener("scroll", function() {
            var introPosition = introElement.getBoundingClientRect().top;
            var productFeaturePosition = productFeatureElement.getBoundingClientRect().top;
            var productGalleryPosition = productGalleryElement.getBoundingClientRect().top;
            var showLeftPosition = showLeftElement.getBoundingClientRect().top;
            var showRightPosition = showRightElement.getBoundingClientRect().top;
            var showLeftaPosition = showLeftaElement.getBoundingClientRect().top;
            var showRightaPosition = showRightaElement.getBoundingClientRect().top;
            var showLeftbPosition = showLeftbElement.getBoundingClientRect().top;
            var showRightbPosition = showRightbElement.getBoundingClientRect().top;
            

            // Check if the intro element is in the viewport
            if (introPosition < window.innerHeight * 0.75) {
                introElement.classList.add("visible");
            }

            // Check if the show-left element is in the viewport
            if (showLeftPosition < window.innerHeight * 0.75) {
                showLeftElement.classList.add("visible");
            }

            // Check if the show-right element is in the viewport
            if (showRightPosition < window.innerHeight * 0.75) {
                showRightElement.classList.add("visible");
            }

            // Check if the show-lefta element is in the viewport
            if (showLeftaPosition < window.innerHeight * 0.75) {
                showLeftaElement.classList.add("visible");
            }

            // Check if the show-righta element is in the viewport
            if (showRightaPosition < window.innerHeight * 0.75) {
                showRightaElement.classList.add("visible");
            }

            // Check if the show-leftb element is in the viewport
            if (showLeftbPosition < window.innerHeight * 0.75) {
                showLeftbElement.classList.add("visible");
            }

            // Check if the show-rightb element is in the viewport
            if (showRightbPosition < window.innerHeight * 0.75) {
                showRightbElement.classList.add("visible");
            }

            // Check if the product-feature element is in the viewport
            if (productFeaturePosition < window.innerHeight * 0.75) {
                productFeatureElement.classList.add("visible");
            }

            // Check if the product-gallery element is in the viewport
            if (productGalleryPosition < window.innerHeight * 0.75) {
                productGalleryElement.classList.add("visible");
            }

        
        });


        const imageHeader = document.querySelector('.image-header');
        const trigger = document.getElementById('trigger');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    imageHeader.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(trigger);

        
        document.addEventListener("DOMContentLoaded", function() {
            const A1Images = document.querySelector('.A1-images');
            A1Images.classList.add('animate');
        });