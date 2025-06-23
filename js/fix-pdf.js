document.addEventListener('DOMContentLoaded', function() {
  const pdfLinks = document.querySelectorAll('a[href*=".pdf"]');

  pdfLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const pdfUrl = this.href;
      const filename = pdfUrl.split('/').pop();
      
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = filename;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
});

