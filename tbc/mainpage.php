<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/product.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <style>
        a:link {
        color: white;
        text-decoration: none;
        }
        a:visited {
        color: white;
        text-decoration: none;
        }
        a:hover {
        color: red;
        text-decoration: underline;
        }
        a:active {
        color: yellow;
        text-decoration: underline;
        }
        .align-right {
        text-align: right;
        border: 0;
        margin-right: 50px;
        }
        .title {
        margin-left: 50px;
        }
    </style>
    
    <title>Main Page</title>
</head>


<body>
    <?php include('navbar.php');?>  
    <div class="title">
        <h1>Clubs and Societies<br></h1>
    </div>
    <div class="align-right">
        <a href="#" class="btn1 btn-primary" data-toggle="modal" data-target="#exampleModal">Create Club</a>
    </div>
    <br>
    <div class ="container">
        <div class="row">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a onclick="location.href='club.php';" class="btn btn-primary"> View More Details</a>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div class ="container">
        <div class="row">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Club Creation Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <form>
                <div class="form-group">
                    <label><h5>Club Details</h5></label>
                    <br>
                    <label for="clubname">Club Name</label>
                    <input type="name" class="form-control" id="inputclubname">
                </div>
                <div class="form-group">
                    <label for="fullname">Description</label>
                    <input type="description" class="form-control" id="inputdescription">
                </div>
                <div class="form-group">
                    <label for="purpose">Briefly explain the purpose of your club</label>
                    <textarea class="form-control" id="input purpose" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label><h5>Club President Details</h5></label>
                    <br>
                    <label for="fullname">Full Name</label>
                    <input type="name" class="form-control" id="inputfullname">
                </div>
                <div class="form-group">
                    <label for="studentid">Student ID</label>
                    <input type="id" class="form-control" id="inputstudentid">
                </div>
                <div class="form-group">
                    <label for="intakecode">Intake Code</label>
                    <input type="code" class="form-control" id="inputintakecode">
                </div>
                <div class="form-group">
                    <label for="contactnumber">Contact Number</label>
                    <input type="number" class="form-control" id="inputcontactnumber">
                </div>

            </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
    <div>
    <footer class="footer_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 footer-col">
                    <div class="col-md-4 footer-col">
                        <div class="footer_detail">
                            <a class="footer-logo">
                                ClubExpress
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis non corporis cupiditate ad totam pariatur accusamus vel, dolores maxime? Optio recusa
                            </p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4 footer-col">
                    <h4>
                            Quick Links
                        </h4>
                        <p>
                            <a href="">Clubs</a>
                            </p>
                        <p>
                            <a href="">Events</a>
                        </p>
                        <p>
                            <a href="">About Us</a>
                        </p>
                        <p>
                            <a href="">Contact Us   </a>
                        </p>
                    </div>
                    <div class="col-md-4 footer-col">
                    <div class="footer_contact">
                            <h4>
                                Information
                            </h4>
                            <div class="contact_link_box">
                                <a>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Email: admin@gmail.com
                                    </span>
                                </a>
                                <a>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        Phone: 012-3456789
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-info">
                    <p>
                        &copy; <span id="displayYear"></span> 2022 ClubExpress
                        <a>All Rights Reserved</a><br><br>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>

