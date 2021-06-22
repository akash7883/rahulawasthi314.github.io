window.addEventListener('load',()=>{

    const url = (new URL(document.location)).searchParams;
    if (url.get('name') =='')
    {
        document.querySelector('h1').innerHTML = "hello, world!";
    }
    document.querySelector('h1').innerHTML = "hello, " + url.get('name') + "!";
})
