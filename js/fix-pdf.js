const pdfLinks = document.querySelectorAll('a[href*=".pdf"]');
console.log('Found PDF links:', pdfLinks.length);

pdfLinks.forEach(function(link, index) {
  console.log(`PDF Link ${index + 1}:`, link.href);
  
  fetch(link.href)
    .then(response => {
      console.log(`PDF ${index + 1} Status:`, response.status);
      console.log(`PDF ${index + 1} Content-Type:`, response.headers.get('content-type'));
      console.log(`PDF ${index + 1} Content-Length:`, response.headers.get('content-length'));
      return response.text();
    })
    .then(text => {
      console.log(`PDF ${index + 1} Content (first 200 chars):`, text.substring(0, 200));
      if (text.length < 1000) {
        console.log(`PDF ${index + 1} FULL CONTENT:`, text);
      }
    })
    .catch(error => {
      console.error(`PDF ${index + 1} Error:`, error);
    });
  
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const pdfUrl = this.href;
    const filename = pdfUrl.split('/').pop();
    
    console.log('Attempting to download:', filename);
    console.log('Full URL:', pdfUrl);
    
    fetch(pdfUrl)
      .then(response => {
        console.log('Download fetch status:', response.status);
        console.log('Download fetch ok:', response.ok);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.blob();
      })
      .then(blob => {
        console.log('PDF Blob size:', blob.size);
        console.log('PDF Blob type:', blob.type);
        
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = filename;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        setTimeout(() => {
          window.URL.revokeObjectURL(downloadUrl);
          console.log('Download URL cleaned up');
        }, 100);
        
        console.log('Download triggered successfully');
      })
      .catch(error => {
        console.error('Download failed:', error);
        console.log('Falling back to direct link');
        
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

console.log('Current URL:', window.location.href);
console.log('Base URL:', document.baseURI);
console.log('GitHub Pages environment:', window.location.hostname.includes('github.io'));

