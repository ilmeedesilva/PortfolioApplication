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
  <link rel="stylesheet" href="../../css/loaders.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
  <?php include('../../includes/navigation.php'); ?>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js">
  </script>

  <!--start carousel-->
  <!-- <div id="carousel" class="carousel slide" data-bs-ride="carousel ">
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
    </div>
  </div> -->

  <div class="main_banner banner-wrapper">
    <div class="banner_content_wrapper">
      <div class="banner_text_section">
        <h2>Hi I'm Ilmee</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla mollitia vero officiis laboriosam
          vitae dolor eaque et unde, consequatur suscipit! Ullam hic molestias eveniet autem unde officia illum aut.</p>
        <button class="primary_btn main-btn">Learn More</button>
      </div>
      <div class="banner_img_section">
        <!-- <img src="" alt="Image"> -->
      </div>
    </div>
  </div>

  <!--end carousel-->

  <!--start About section-->
  <section id="about" class="about section-padding">
    <div class="container">
      <div class="row about_home_Wrapper">
        <div class="col-lg-4 col-md-12 col-12 about_home_img">
          <div class="about-img section_appear">
          </div>
        </div>
        <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 section_appear about_text">
          <div class="about-text sub-heading">
            <h5>Welcome</h5>
            <h2>About Me</h2>
            <p class="about_desc_home">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad
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
            <h2 class="title text-light">Want to work with me?</h6>
              <p>Always feel Free to Contact & Hire me</p>
          </div>
        </div>
        <div class="cta-col col_2">
          <div class="btn-holder">
            <a href="contact.php" class="primary_btn cta_btn">Hire Me</a>
          </div>
        </div>
      </div>

    </div>

  </section>
  <!--End call to action section-->

  <!--Start service section-->
  <div class="main_section_wrapper section_appear">
    <div id="services" class="services section-padding ">
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
  <section id="Project" class="project section-padding section_appear">
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
        <div class="col-12 col-md-12 col-lg-4 ">
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
  <script src="../../script/mobileNav.js"></script>
  <script src="../../script/getLogo.js"> </script>
  <script src="../../script/home.js"> </script>
  <script src="../../script/getContactInfo.js"></script>
  <script src="../../script/getAllSocialMedias.js"></script>
  <!-- <script src="../../script/loaders.js"></script> -->
  <script src="../../script/getAbout.js"></script>
  <script src="../../script/getHomeAboutImage.js"></script>
</body>

</html>