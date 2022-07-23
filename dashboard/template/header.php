

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="./css/home.css">
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="./lib/fontawesome/css/all.min.css">
    <link rel="shortcut icon" href="./lib/feather/globe.svg" type="image/x-icon">
</head>
<body>
    <i onclick="$('#navbtn').fadeOut('slow',function(){$('#navbar').slideDown()});document.getElementById('dashboard').classList.toggle('full')" id="navbtn" class="fa-solid fa-angles-down"></i>

<nav class="navbar" id="navbar">
    <h4 class="navbar-top">
        <i onclick="$('#navbar').slideUp('slow', function(){$('#navbtn').fadeIn('slow')});document.getElementById('dashboard').classList.toggle('full')" id="toggleNavbar" class="fa-solid fa-angles-up"></i>
        Dashboard
    </h4>

    <ul class="navbar-trunks" id="navbar-grid">
        <li class="navbar-trunk">
            HOME <i class="fa-solid fa-home"></i>
        </li>
        <li class="navbar-trunk">
            <h3 onclick="file1.classList.toggle('hide');">
                Basic Language <i class="fa-solid fa-file-code"></i>
            </h3>
            <ul class="navbar-languages hide" id="basicLanguage">
                <li class="navbar-language">
                    <span> HTML </span><i class="fa-brands fa-html5"></i>
                </li>
                <li class="navbar-language">
                    <span> CSS </span><i class="fa-brands fa-css3-alt"></i>
                </li>
                <li class="navbar-language">
                    <span> JS </span><i class="fa-brands fa-js"></i>
                </li>
            </ul>            
        </li>
        <li class="navbar-trunk">
            <h3 onclick="file2.classList.toggle('hide')">
                Library usages <i class="fa-solid fa-book"></i>
            </h3>
            <ul class="navbar-languages hide" id="libraryUsage">
                <li class="navbar-language">
                    <span> BOOTSTRAP </span><i class="fa-brands fa-bootstrap"></i>
                </li>
                <li class="navbar-language">
                    <span> JQUERY </span><i class="fa-solid fa-book-bookmark"></i>
                </li>
            </ul>
        </li>
        <li class="navbar-trunk">
            <h3 onclick="file3.classList.toggle('hide')">
                Frameworks <i class="fa-solid fa-crop-simple"></i>
            </h3>
            <ul class="navbar-languages hide" id="framework">
                <li class="navbar-language">
                    <span> SCSS </span><i class="fa-brands fa-sass"></i>
                </li>
                <li class="navbar-language">
                    <span> REACT </span><i class="fa-brands fa-react"></i>
                </li>
            </ul>  
        </li>
        <li class="navbar-trunk">
            <span> Planned schemes </span><i class="fa-solid fa-calendar"></i>
        </li>
        <li class="navbar-trunk">
            <span> Goals </span><i class="fa-solid fa-flag"></i>
        </li>
    </ul>
</nav>