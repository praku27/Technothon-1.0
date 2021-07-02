const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  
      <style>
          .container1{
        justify-content: center;
        align-items: center;
        background-color: black;
        color: whitesmoke;
        height: 20px;
        padding: 40px;
    }
    #client-section{
   height: 240px; 
  
  }
  #client-section::before{
      content:"";
      position: absolute;  
      background: url("basket.png") center no-repeat;
      width: 100%;
      z-index: -1;
      height: 65%;
      opacity: .8;
  }
  #clients{
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .client-item{
      padding: 12px;
  }
  .client-item img{
      height: 85px;
  }
  .h-primary{
      font-size: 2.8rem;
      padding: 20px;
      text-align: center;
      color: black;
  }
  
  #logo img{
      height:50px;
      width:50px;
      border-radius: 250px 250px;
      margin: 3px 6px;
  
  }
  /* .bb{
    position: relative;
    display: flex;
    margin: auto;
    padding: 10px 50px;
    border: 2px solid white;
    background-color: grey;
      color: black;
      border-radius: 16px; */
    
    /* padding: 8px 50px;
      border: 2px solid white;
      background-color: grey;
      color: black;
      
      font-size: 1.5rem;
      border-radius: 16px;
      cursor: pointer;
     */ 
  /* } */
  
  .bb{
    padding: 8px 50px;
      border: 2px solid white;
      background-color: grey;
      color: black;
      margin: 541px;
      font-size: 1.5rem;
      border-radius: 16px;
      cursor: pointer;
  }
   .btn1{
    opacity: -1;
   }
   body{
    width: 100%;
    height: 100%;
     background-image: url('eth1.jpg') ;
     background-repeat: no-repeat;
     /* background-size: cover; */
     background-attachment: fixed;
     background-size: 100% 100%;
     
   }
  
      </style>
    </head>
    <body>
        <div class="h">
        
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
              <div id="logo">
                  <img src="nlogo.png" alt="this is a logo"> 
              </div>
            <a class="navbar-brand" href="#">crkpto-Kart</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link " aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/t1.html">Products</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link " href="/about.html">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact.html">Contact Us</a>
                </li>
                
                
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="gadget.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="tv.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="cloth.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> -->
        
        <section id="client-section">  
          <a class="navbar-brand" href="index.html">     <button type="button" class="btn1 btn-primary btn-lg">Large button</button></a>
          <a class="navbar-brand" href="t1.html">  <button class="bb "><b>Shop now</b></button></a>
  
              <!-- <a class="navbar-brand" href="index.html">  <button class="btn btn-secondary my-2" href="index.html" type="button">VIEW THE MARKET</button></a> -->
      </section>
    </div>
     
       
      <!-- <div class="d-grid gap-2 col-6 mx-auto">
         
          <button class="btn btn-danger" type="button">Button</button>
        </div> -->
      <!-- Optional JavaScript; choose one of the two! -->
  
      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  
      <!-- Option 2: Separate Popper and Bootstrap JS -->
      <!--
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
      -->
     
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
 <style>
  .card-body{
      border: 3px solid gray;
  }
  .card-title{
    border: 5px solid black;
    text-align: center;
  }
  .card-img-top{
    border: 3px solid gray;
  }
  .container1{
      justify-content: center;
      align-items: center;
      background-color: black;
      color: whitesmoke;
      height: 20px;
      padding: 40px;
  }
  #client-section{
 height: 240px; 

}
#client-section::before{
    content:"";
    position: absolute;  
    width: 100%;
    z-index: -1;
    height: 45%;
    opacity: .8;
}
#clients{
display: flex;
justify-content: center;
align-items: center;
}
.client-item{
    padding: 12px;
}
.client-item img{
    height: 85px;
}
.h-primary{
    font-size: 2.8rem;
    padding: 20px;
    text-align: center;
    color: black;
}

#logo img{
    height:50px;
    width:50px;
    border-radius: 250px 250px;
    margin: 3px 6px;

}
 
 </style>
</head>

<body>
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div id="logo">
            <img src="nlogo.png" alt="this is a logo"> 
        </div>
          <a class="navbar-brand" href="#">crkpto-Kart</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <a class="nav-link " aria-current="page" href="/">Home </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/t1.html">Products</a>
              </li>
              <li class="nav-item  ">
                <a class="nav-link" href="/about.html">About Us</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/contact.html">Contact Us</a>
              </li>
              
              
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div class="mx-2">
              <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
              <button class="btn btn-danger"data-bs-toggle="modal" data-bs-target="#signupModal">SignUp</button>
            </div>
          </div>
        </div>
      </nav>


<!-- Login Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="loginModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Signup Modal -->
<div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="signupModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      <div class="card-group">
        <div class="card mx-5 my-5">
          <img src="laptop.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Dell G3 15</h5>
            <p class="card-text"><b>₹ 81,990</b><br>10th Generation Intel® Core™ i5-10300H<br>(8MB Cache, up to 4.5 GHz, 4 cores)
            <br>NVIDIA® GeForce® GTX 1650 Ti 4GB GDDR6<br>8GB DDR4-2933MHz, 2x4G</p>
            <div class="d-grid gap-2 col-6 mx-auto">
                <!-- <button class="btn btn-outline-success" type="button">BUY</button> -->
                <!-- Button trigger modal -->
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 BUY
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Product bill in</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <h1>Conversion of₹ to ETH<span id="stock-price">
   
          </span></h1>
           
       </div>
       <script>
           let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
           let stockPriceElement = document.getElementById('stock-price');
           let lastPrice = null;
           ws.onmessage = (event) => {
               let stockObject = JSON.parse(event.data);
               let price = parseFloat(stockObject.p*74).toFixed(2);
               stockPriceElement.innerText = (81990/price).toFixed(2);
               stockPriceElement.style.color =  price > lastPrice ? 'green' : 'red';
               lastPrice = price;
           };
       </script>
        <img src="laptop.jpg" alt="">
        <p>Seller ID.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
              </div>
          </div>
        </div>
        <div class="card mx-5 my-5">
          <img src="iphone.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Apple iPhone 11</h5>
            <p class="card-text"><b>₹57,600</b> <br>64 GB ROM<br>
              15.49 cm (6.1 inch) Liquid Retina HD Display<br>
              12MP + 12MP | 12MP Front Camera<br>
              A13 Bionic Chip Processor</p>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                BUY
               </button>
               
               <!-- Modal -->
               <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                 <div class="modal-dialog">
                   <div class="modal-content">
                     <div class="modal-header">
                       <h5 class="modal-title" id="staticBackdropLabel">Product bill in</h5>
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                       <img src="laptop.jpg"  alt="">
                       <p>SEller ID-</p>
                       <div>
                        <h1> Conversion of₹ to ETH <span id="stock-price">
                 
                        </span></h1>
                         
                     </div>
                     </div>
                     <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     </div>
                   </div>
                 </div>
               </div>
              </div>
          </div>
        </div>
        <div class="card mx-5 my-5">
          <img src="camera .jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Canon EOS 1500D </h5>
            <p class="card-text"><b>₹40,200</b><br>Lens Type: Double Zoom Kit(18-55mm+55-250mm)<br>
              Megapixel & Sensor Type: 24.1 MEGAPIXEL CMOS <br>
              ISO Range: ISO 100-12800<br>
              Monitor or Display size, type: 7.62cm (3INCH) FIXED 
          </p>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                BUY
               </button>
               
               <!-- Modal -->
               <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                 <div class="modal-dialog">
                   <div class="modal-content">
                     <div class="modal-header">
                       <h5 class="modal-title" id="staticBackdropLabel">Product bill in</h5>
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                       <img src="laptop.jpg" alt="">
                       <p>Seller ID-</p>
                     </div>
                     
                     <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     </div>
                   </div>
                 </div>
               </div>
              </div>
          </div>
        </div>
      </div>
      <div class="card-group">
        <div class="card mx-5 my-5">
          <img src="ps.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">PS-5</h5>
            <p class="card-text"><b>₹ 79,900</b><br>PS5 - 4.5kg PS5 Digital Edition - 3.9kg<br>PS5 - 350W PS5 Digital Edition - 340W
            <br>PS5 - 390mm x 104mm x 260mm (width x height x depth) PS5 Digital Edition</p>
            <div class="d-grid gap-2 col-6 mx-auto">
                <!-- <button class="btn btn-outline-success" type="button">BUY</button> -->
                <!-- Button trigger modal -->
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 BUY
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Product bill in</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <h1>Conversion of₹ to ETH<span id="stock-price">
   
          </span></h1>
           
       </div>
       <script>
           let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
           let stockPriceElement = document.getElementById('stock-price');
           let lastPrice = null;
           ws.onmessage = (event) => {
               let stockObject = JSON.parse(event.data);
               let price = parseFloat(stockObject.p*74).toFixed(2);
               stockPriceElement.innerText = (81990/price).toFixed(2);
               stockPriceElement.style.color =  price > lastPrice ? 'green' : 'red';
               lastPrice = price;
           };
       </script>
        <img src="speaker.jpg" alt="">
        <p>Seller ID.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
              </div>
          </div>
        </div>
        <div class="card mx-5 my-5">
          <img src="speaker.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Sony BDV-N9200 </h5>
            <p class="card-text"><b>₹49,000</b> <br>Nos. of Ch.: 5.1 Ch<br>
              Source type: BLU-RAY 3D<br>
              Speaker Type: Tower<br>
              Soundoutput: 1200W</p>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                BUY
               </button>
               
               <!-- Modal -->
               <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                 <div class="modal-dialog">
                   <div class="modal-content">
                     <div class="modal-header">
                       <h5 class="modal-title" id="staticBackdropLabel">Product bill in</h5>
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                       <img src="laptop.jpg"  alt="">
                       <p>SEller ID-</p>
                       <div>
                        <h1> Conversion of₹ to ETH <span id="stock-price">
                 
                        </span></h1>
                         
                     </div>
                     </div>
                     <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     </div>
                   </div>
                 </div>
               </div>
              </div>
          </div>
        </div>
        <div class="card mx-5 my-5">
          <img src="alexa.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Amazon Echo Dot (3rd Gen) </h5>
            <p class="card-text"><b>₹2,999</b><br>Amazon’s Most Popular Smart Speaker <br>
              Alexa Is Always Ready To Help <br>
              Just Ask Alexa For Music, News<br>
              Stream Millions Of Songs 
          </p>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                BUY
               </button>
               
               <!-- Modal -->
               <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                 <div class="modal-dialog">
                   <div class="modal-content">
                     <div class="modal-header">
                       <h5 class="modal-title" id="staticBackdropLabel">Product bill in</h5>
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                       <img src="laptop.jpg" alt="">
                       <p>Seller ID-</p>
                     </div>
                     
                     <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     </div>
                   </div>
                 </div>
               </div>
              </div>
          </div>
        </div>
      </div>
      <section id="client-section"> 
        <h1 class="h-primary ">Our Clients</h1>
        <div id="clients">
            <div class="client-item">
                <img src="alibaba.jpg">
            </div>
            <div class="client-item">
                <img src="card.png">
            </div>
            <div class="client-item">
                <img src="paypal.png">
            </div>
            <div class="client-item">
                <img src="reliance-digital.png">
            </div>
        </div>
    </section>
    
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="gadget.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="tv.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="cloth.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <footer class="container1 d-flex">
        <span>  © 2020–2021 crypto-Kart, Inc. </span>
      </footer>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
    -->
 <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      <style>
          .container1{
        justify-content: center;
        align-items: center;
        background-color: black;
        color: whitesmoke;
        height: 20px;
        padding: 40px;
    }
    #b{
        justify-content: center;
        align-items: center;
    }
    #client-section{
   height: 315px; 
  
  }
  #client-section::before{
      content:"";
      position: absolute;  
      width: 100%;
      z-index: -1;
      height: 45%;
      opacity: .8;
  }
  #clients{
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .client-item{
      padding: 12px;
  }
  .client-item img{
      height: 85px;
  }
  .h-primary{
      font-size: 2.8rem;
      padding: 20px;
      text-align: center;
      color: black;
  }
  #logo img{
      height:50px;
      width:50px;
      border-radius: 250px 250px;
      margin: 3px 6px;
  
  }
      </style>
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="logo">
              <img src="nlogo.png" alt="this is a logo"> 
          </div>
            <a class="navbar-brand" href="#">crkpto-Kart</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/t1.html">Products</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link " href="/about.html">About Us</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/contact.html">Contact Us</a>
                </li>
                
                
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div class="container">
            <h2>
                Contact Us
            </h2>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-outline-primary">Submit</button>
        </div>
        <section id="client-section"> 
          <div id="clients">
              <div class="client-item">
                  <img src="INSTAGRAM.png">
              </div>
              <div class="client-item">
                  <img src="twitter.png">
              </div>
              <div class="client-item">
                  <img src="Facebook.png">
              </div>
              <div class="client-item">
                  <img src="linkedin.png">
              </div>
          </div>
      </section>
        <footer class="container1 d-flex">
          <span>  © 2020–2021 crypto-Kart, Inc. </span>
        </footer>
  
      <!-- Optional JavaScript; choose one of the two! -->
  
      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  
      <!-- Option 2: Separate Popper and Bootstrap JS -->
      <!--
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
      -->
  <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      <style>
          .container1{
        justify-content: center;
        align-items: center;
        background-color: black;
        color: whitesmoke;
        height: 20px;
        padding: 40px;
    }
    #logo img{
      height:50px;
      width:50px;
      border-radius: 250px 250px;
      margin: 3px 6px;
  
  }
      </style>
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="logo">
              <img src="nlogo.png" alt="this is a logo"> 
          </div>
            <a class="navbar-brand" href="#">crkpto-Kart</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/t1.html">Products</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link " href="/about.html">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact.html">Contact Us</a>
                </li>
                
                
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div class="row featurette my-5 mx-4">
          <div class="col-md-7 order-md-1">
            <h2 class="featurette-heading">krypto-kart <span class="text-muted">It’ll blow your mind.</span></h2>
            <p class="lead">crypto-Kart is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s Most Customer-Centric Company, Earth’s Best Employer, and Earth’s Safest Place to Work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out techn</p>
          </div>
          <div class="col-md-5 ">
              <img class =" img-fluid" src="s3.jpg">
           
      
          </div>
        </div>
        <div class="row featurette my-5 mx-4">
          <div class="col-md-7 ">
            <h2 class="featurette-heading">Technology Used </h2>
            <p class="lead">E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to app</p>
          </div>
          <div class="col-md-5 order-md-2">
              <img class =" img-fluid" src="s2.jpg">
           
      
          </div>
        </div>
        <div class="row featurette my-5 mx-4">
          <div class="col-md-7 order-md-1">
            <h2 class="featurette-heading">Path-Way<span class="text-muted"></span></h2>
            <p class="lead"> E-commerce is revolutionizing the way we all shop. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Crypto-kart  houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes. 
              We follow the latest on going trend and craze for cryptocurrency and acceps Ethereum as payment</p>
          </div>
          <div class="col-md-5 ">
              <img class =" img-fluid" src="s1.jpeg">
           
          </div>
        </div>
        <footer class="container1 d-flex">
          <span>  © 2020–2021 crypto-Kart, Inc. </span>
        </footer>
      
  
      <!-- Optional JavaScript; choose one of the two! -->
  
      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  
      <!-- Option 2: Separate Popper and Bootstrap JS -->
      <!--
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
      -->
      </body>
      </html>
      </body>
      </html>
      </body>
      </html>
      </body>
      </html>
      </html>
      </body>
      </html>
      </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
