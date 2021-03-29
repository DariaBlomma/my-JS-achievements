const tabs = document.querySelector('.tabs');
const innerTabs = document.querySelector('.inner-tabs');

const content = document.querySelectorAll('.content');
const innerContent = document.querySelectorAll('.inner-content');
//variant 2
const contents = document.querySelector('.contents');
const innerContents = document.querySelector('.inner-contents');

//working with wrapper Tabs. 


const changeClass = (div, el) => {
    for (let i = 0; i < div.children.length; i++) { 
        div.children[i].classList.remove('active');
    }
    el.classList.add('active');
    
};

//working with content. 

//if we get each content
    // const changeContent = (div, currentTab) => {
    //     for (let i = 0; i < div.length; i++) {
    //         div[i].classList.remove('active');
    //         if (div[i].dataset.content === currentTab) {
    //             div[i].classList.add('active');
    //         };
    //     };
    // };

//if we get content wrapper
const changeContent = (div, currentTab) => {
    for (let i = 0; i < div.children.length; i++) {
        div.children[i].classList.remove('active');
        if (div.children[i].dataset.content === currentTab) {
            div.children[i].classList.add('active');
        };
    };
};


tabs.addEventListener('click', (e) => {
    const currentTab = e.target.dataset.btn; //without dataset we get only html tag, but need a number
    changeClass(tabs, e.target);
    //for changing content with tabs
    changeContent(contents, currentTab);
});


innerTabs.addEventListener('click', (e) => {
    const currentTab = e.target.dataset.btn; //without dataset we get only html tag, but need a number
    changeClass(innerTabs, e.target);
    //for changing content with tabs
    changeContent(innerContents, currentTab);
});
