<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Protfolio</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <link rel="stylesheet" type="text/css" href="../../css/navigation.css">
  <link rel="stylesheet" type="text/css" href="../../css/footer.css">
  <link rel="stylesheet" href="../../css/style.css">
  <link rel="stylesheet" href="../../css/Home.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

</head>

<body>
  <?php include('../../includes/navigation.php'); ?>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js">
  </script>

  <!--start carousel-->
  <div id="carousel" class="carousel slide" data-bs-ride="carousel ">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../resource\image\img5.jpg" class="d-block w-100" alt="Banner1">
        <div class="carousel-caption">
          <h4>Find the perfect own <i>Design</i></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
          <a href="#" class="btn-banner mt3">Learn More</a>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../resource\image\home-img4.jpg" class="d-block w-100" alt="Banner2">
        <div class="carousel-caption">
          <h4>Let's Started</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. </p>
          <a href="#" class="btn-banner mt3"> Learn More</a>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!--end carousel-->

  <!--start About section-->
  <section id="about" class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-12 col-12">
          <div class="about-img">
            <img src="../../resource\image\img2.jpeg" alt="about-section-img" class="img-fluid">
          </div>
        </div>
        <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
          <div class="about-text sub-heading">
            <h5>Welcome</h5>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="about.php" class="primary_btn">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End About section-->

  <!--Start call to action section-->
  <section id="CTA-section" class="call section-padding">
    <div class="cta-section">
      <div class="background-img">

      </div>

      <div class="cta-content">
        <div class="cta-col col_1">
          <div class="col-content">
            <h2>Enough Talk, <br />Let's Build Something Together!</h2>
          </div>
        </div>
        <div class="cta-col col_2">
          <div class="btn-holder">
            <a href="contact.php" class="primary_btn cta_btn">Call Me</a>
          </div>
        </div>
      </div>

    </div>

  </section>
  <!--End call to action section-->

  <!--Start service section-->
  <div class="main_section_wrapper">
    <div id="services" class="services section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-header text-center sub-heading">
              <h5>Our Services</h5>
              <h2>Services provide for you.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut
                labore
                et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-4">
          <div class="card text-center">
            <div class="box-body">
              <i class="bi bi-layers"></i>
              <h3 class="box-title">Web Development</h3>
              <p class="box-content">Web development is the work involved in developing a website for the Internet or an
                intranet. Web development can range from developing a simple single static page of plain text to complex
                web applications.</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-12 col-lg-4">
          <div class="card text-center">
            <div class="box-body">
              <i class="bi bi-display"></i>
              <h3 class="box-title">Mobile App Development</h3>
              <p class="box-content">Mobile application development is the process of creating software applications
                that run on a mobile device, and a typical mobile application utilizes a network connection to work with
                remote computing resources. </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-12 col-lg-4">
          <div class="card text-center">
            <div class="box-body">
              <i class="bi bi-x-diamond"></i>
              <h3 class="box-title">Graphic Designing</h3>
              <p class="box-content">Graphic design is a profession, academic discipline and applied art whose activity
                consists in projecting visual communications intended to transmit specific messages to social groups,
                with specific objectives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End service section-->

  <!--Start My Project-->
  <section id="Project" class="project section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header text-center sub-heading">
            <h5>My completed Project</h5>
            <h2>Recent Works</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />tempor incididunt ut labore et dolore
              magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-4">
          <div class="card text-center">
            <div class="project-body">
              <img src="../../resource\image\proj1.jpg">
              <div class="content-wrapper">
                <h3 class="box-title">Project 1</h3>
                <p class="box-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut
                  labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-12 col-lg-4">
          <div class="card text-center">
            <div class="project-body">
              <img src="../../resource\image\proj2.jpg">
              <div class="content-wrapper">
                <h3 class="box-title">Project 2</h3>
                <p class="box-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut
                  labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-4">
          <div class="card text-center">
            <div class="project-body">
              <img src="../../resource\image\proj3..jpg">
              <div class="content-wrapper">
                <h3 class="box-title">Project 3</h3>
                <p class="box-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut
                  labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="btn-wrapper">
        <a href="project.php" class="primary_btn cta_btn">View More</a>
      </div>
  </section>
  <?php include('../../includes/footer.php'); ?>
  <!--End  My Project-->

  <script src="../../script/navigation.js"> </script>
</body>

</html>