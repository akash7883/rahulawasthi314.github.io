window.addEventListener('load',function greet() {
    const url = (new URL(document.location)).searchParams;
    if (url.get('name') === null)
    {
        document.querySelector('h1').innerHTML = "hello, world!";
    }
    document.querySelector('h1').innerHTML = "hello, " + url.get('name') + "!";
})
