```javascript
// Smooth fade-in animation on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.feature-card, .episode, .community')
.forEach(el => observer.observe(el));

console.log("Limited Edition website loaded.");
```
