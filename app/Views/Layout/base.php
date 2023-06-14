<?= $this->include("Layout/header"); ?>

<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">
 
  <!-- Preloader -->
      <?= $this->include("Layout/Preloader"); ?>


   <!-- Navbar -->
     <?= $this->include("Layout/Navigation_Bar"); ?>

        <!-- Main Sidebar Container -->
             <aside class="main-sidebar sidebar-dark-primary elevation-4">

      <!-- Brand Logo -->
      <?= $this->include("Layout/Brand_Logo"); ?>


      <!-- Sidebar -->
      <?= $this->include("Layout/sidebar"); ?>



<!-- jQuery -->
  <?= $this->include("Layout/jQuery"); ?>
<!-- Bootstrap 4 -->
  <?= $this->include("Layout/Bootstrap"); ?>


<!-- Main Content -->
<?= $this->renderSection("content"); ?>

</body>

</html>