export default `<style>
/* Header */

.container {
max-width: 1100px;
margin: auto;
}

* {
    padding : 0;
    margin : 0;
    font-family: 'Poppins', sans-serif;
    box-sizing : border-box;
    color : white ;
}



header {
    position: fixed;
    top : 0;
    right : 0;
    width: 100%;
    z-index: 300;
    padding: 10px 0;
    transition: .5s linear;
}

header.overflow {
    background-color: #395b648e;
}

header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 20px 0px;
}

header nav .navbrand {
    font-size : var(--font-xl)
}


header nav .search-wrapper {
    position: relative;
}


header nav .search-wrapper.active input {
    width: 100%;
}

header nav .search-wrapper input {
    transform-origin: left;
    width: 0;
    transition: .3s linear;
    padding : 13px 25px;
    border-radius : 30px;
    padding-left: 60px;
    outline: none;
    border : none;
    background-color: #323838;
    color : white;
    font-weight: 600;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.222);
    cursor: pointer;
}

header nav .search-wrapper .search-icon {
    position: absolute;
    top : 50%;
    left : 20px;
    transform: translateY(-50%);
    font-size : 18px;
    cursor: pointer;
    color : white;
}

header nav .search-wrapper .search-icon:hover {
    color : var(--third-color);
}

.icon {
    color : white;
}





@media only screen and (max-width: 630px) {
    header nav {
        padding : 20px;
    }
    header nav .nav-page {
        display: none;
    }

    .search-input {
        max-width : 200px;
    }

    .container {
        padding : 0px 30px;
    }
}
</style>
`