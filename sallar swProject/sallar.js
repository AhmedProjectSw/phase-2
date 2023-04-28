document.getElementById('circle').addEventListener('click', function() {
    var list = document.getElementById('list');
    if (list.style.display === 'none') {
        list.style.display = 'flex';
    } else {
        list.style.display = 'none';
    }
});