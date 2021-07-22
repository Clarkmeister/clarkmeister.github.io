export function openFullscreen() {
    var elem = document.getElementById("fullscreen-div");
    if (elem.requestFullscreen) 
    {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) 
    { /* Safari */
        elem.webkitRequestFullscreen();
    }
    elem.addEventListener('fullscreenchange', (event) => {
        if (document.fullscreenElement) 
        {
            console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
        } else 
        {
            console.log('Leaving full-screen mode.');
        }
    });
}