const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const api_url = 'https://api.chucknorris.io/jokes/random';


async function getQuote(url) {
    btn.disabled = true;
    text.textContent = 'Loading...';
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Request failed');
        const data = await response.json();
        text.textContent = data.value;
        btn.disabled = false;
    }
    catch (error) {
        console.log(error);
        text.textContent = "Something went wrong!";
        btn.disabled = false;

    }
}

btn.addEventListener('click', () => {
    getQuote(api_url)
});

getQuote(api_url);


