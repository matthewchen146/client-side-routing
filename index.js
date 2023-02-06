

const anchors = document.querySelectorAll('a');


anchors.forEach((anchor) => {
    console.log(anchor.href);
    const href = anchor.href;

    anchor.href = '';

    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({html: "index.html", pageTitle: "test title"}, '', '/sub');
        // window.history.replaceState({html: "index.html", pageTitle: "test title"}, '', href);
        // window.location.href = href;
        // console.log(window.location.href);
    });

});

window.addEventListener('popstate', (e) => {
    console.log(e);

    if (e.state.pageTitle) {
        document.title = e.state.pageTitle;
    }
    
});
