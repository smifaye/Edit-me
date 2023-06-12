document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login').addEventListener('click', function() {
        chrome.tabs.update({ url: 'https://epi.citizensadvice.org.uk/' });
    });
});
