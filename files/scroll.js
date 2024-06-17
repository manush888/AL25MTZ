window.addEventListener('load', function() {
    let hasScrolledToSection2 = false;
  
    document.addEventListener('scroll', function() {
      const section1 = document.getElementById('page1');
      const section2 = document.getElementById('page2');

      if (!section1 || !section2) {
        // If either section is not found, do not proceed
        console.log('404');
        return;
      }
  
      const scrollPosition = window.scrollY;
      const section1Top = section1.offsetTop;
  
      // Debug output to verify conditions
      console.log('Scroll position:', scrollPosition);
      console.log('Section 1 top:', section1Top);
      console.log('Has scrolled to section 2:', hasScrolledToSection2);
  
      // Check if the user has scrolled to the top of the first section
      if (!hasScrolledToSection2 && scrollPosition >= section1Top) {
        hasScrolledToSection2 = true;
        console.log('Scrolling to section 2');
  
        // Calculate the position to scroll to
        const section2Top = section2.offsetTop;
  
        // Smoothly scroll to the second section
        window.scrollTo({ top: section2Top, behavior: 'smooth' });
  
        // Reset the flag when the user scrolls back up to the top of section 1
      } else if (scrollPosition <= section1Top) {
        hasScrolledToSection2 = false;
      }
    });
  });
  