// Download button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Download URLs - These will be set by you later
    const downloadLinks = {
        python: '', // Add Python download URL here
        java: '',   // Add Java SDK download URL here
        codebendr: '' // Add CodeBendr IDE download URL here
    };

    // Python download button
    const pythonBtn = document.getElementById('download-python');
    if (pythonBtn) {
        pythonBtn.addEventListener('click', function() {
            if (downloadLinks.python) {
                // Create temporary link and trigger download
                const link = document.createElement('a');
                link.href = downloadLinks.python;
                link.download = '';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                alert('Python download link not configured yet. Please contact the administrator.');
            }
        });
    }

    // Java SDK download button
    const javaBtn = document.getElementById('download-java');
    if (javaBtn) {
        javaBtn.addEventListener('click', function() {
            if (downloadLinks.java) {
                // Create temporary link and trigger download
                const link = document.createElement('a');
                link.href = downloadLinks.java;
                link.download = '';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                alert('Java SDK download link not configured yet. Please contact the administrator.');
            }
        });
    }

    // CodeBendr IDE download button
    const codebendrBtn = document.getElementById('download-codebendr');
    if (codebendrBtn) {
        codebendrBtn.addEventListener('click', function() {
            if (downloadLinks.codebendr) {
                // Create temporary link and trigger download
                const link = document.createElement('a');
                link.href = downloadLinks.codebendr;
                link.download = '';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                alert('CodeBendr IDE download link not configured yet. Please contact the administrator.');
            }
        });
    }
});
