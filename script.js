document.addEventListener('scroll', function() {
    const products = document.querySelectorAll('.product');
    const triggerPoint = window.innerHeight * 0.75;

    products.forEach(product => {
        const productTop = product.getBoundingClientRect().top;

        if (productTop < triggerPoint) {
            product.style.opacity = 1;
            product.style.transform = 'translateX(0)';
        }
    });
});