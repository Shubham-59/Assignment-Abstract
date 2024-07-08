var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums', true);
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        
        var albums = JSON.parse(xhr.responseText);
        console.log(albums);
        console.log(albums);
      }
    }

    xhr.onerror = function() {
        console.error('Request failed');
    };
    xhr.send();