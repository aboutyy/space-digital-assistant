document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('top');
    var nextSection = header.nextElementSibling;
    var scrollThreshold = 50; // 滚动阈值
    var lastScrollTime = 0;
    var scrollCooldown = 1000; // 滚动冷却时间（毫秒）

    function setHeaderHeight() {
        var windowHeight = window.innerHeight;
        header.style.height = windowHeight + 'px';
    }

    function scrollToNextSection() {
        var currentTime = new Date().getTime();
        if (currentTime - lastScrollTime > scrollCooldown) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
            lastScrollTime = currentTime;
        }
    }

    function handleScroll(e) {
        var rect = header.getBoundingClientRect();
        if (rect.bottom > 0 && e.deltaY > scrollThreshold) {
            e.preventDefault();
            scrollToNextSection();
        }
    }

    // 使用 passive: false 来允许 preventDefault
    window.addEventListener('wheel', handleScroll, { passive: false });

    // 为触摸设备添加滑动检测
    var touchStartY = 0;
    header.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    header.addEventListener('touchmove', function(e) {
        var touchEndY = e.touches[0].clientY;
        var deltaY = touchStartY - touchEndY;
        if (deltaY > scrollThreshold) {
            e.preventDefault();
            scrollToNextSection();
        }
    }, { passive: false });

    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);

    // 添加调试信息
    console.log('header-fix.js loaded');
    console.log('Header height:', header.offsetHeight);
    console.log('Next section:', nextSection);
});