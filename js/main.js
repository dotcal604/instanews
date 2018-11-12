console.log('Hello');
let x = 9;

$.ajax({
    method: 'GET',
    url: 'http://api.nytimes.com/svc/topstories/v2/{section}.{response-format}?api-key=14bcc5d04435458ba00c5d1853898e15'
})