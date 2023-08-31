export const changeTheme = () => {
    const html = document.querySelector('html');
    const button = document.querySelector('.mode__controller');
    const userPreference = localStorage.getItem('darkmode');

    const image = document.querySelector('.mode__controller > img');


    if(userPreference === 'true'){
        html.classList.add('dark__mode')
        image.src = "https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t"
    } 

    button.addEventListener('click', () => {
        html.classList.toggle('dark__mode')

        if(html.classList.contains('dark__mode')){
            image.src = "https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t"
            localStorage.setItem('darkmode', true)
        } else {
            localStorage.setItem('darkmode', false)
            image.src = "https://media.graphassets.com/AWCWFFLPSEWh4lhYs68c"
        }
    })

}
