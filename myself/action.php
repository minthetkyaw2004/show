<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Action</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">    <link rel="stylesheet" href="./node_modules/animate.css/animate.min.css">
    <style>
        .btn{
            position: relative;
            overflow: hidden;
        }
        .btn::before{
            content: '';
            width: 100%;
            height: 100%;
            background: linear-gradient(
            30deg,
            transparent 50%,
            red 50%
            );
            background-size: 10px;

            position: absolute;
            left: 0;
            top: 0;

            transform: translateY(-100%);
            transition: all 0.5s;
        }
        .btn::after{
            content: '';
            width: 100%;
            height: 100%;
            background: linear-gradient(
            30deg,
            blue 50%,
            transparent 50%
            );
            background-size: 10px;

            position: absolute;
            left: 0;
            top: 0;

            transform: translateY(100%);
            transition: all 0.5s;
        }
        .btn:active::before,.btn:active::after{
            transform: translateY(0%);
        }
    </style>
</head>
<body class='bg-success'>
    <div class="container col-12 vh-100">
        <div class="m-3 mt-4 card bg-primary h-25">
            <div class="card-header bg-light text-center">
                <h3>Thank You For Submitting</h3>
            </div>
            <div class="card-body bg-danger text-justify">
                <h2 class='text-warning'>Your Name </h2>
                <h4 class='px-3 text-dark '><?php echo $_POST['name']; ?></h4>
                <h2 class='text-warning'>Your Email </h2>
                <h4 class='px-3 text-dark '><?php echo $_POST['email']; ?></h4>
                <h2 class='text-warning'>Your Address </h2>
                <h4 class='px-3 text-dark '><?php echo $_POST['address']; ?></h4>
            </div>
            <div class="card-footer bg-light d-flex justify-content-end">
                <button id="submit" class='btn btn-primary' href="./index.html">Click To Get To The Home Page</button>
            </div>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>    
<script>
    document.getElementById('submit').addEventListener('mouseup',function(){
        setTimeout(() => {
            window.location = './index.html';
        }, 1000);
    })
</script>
</html>