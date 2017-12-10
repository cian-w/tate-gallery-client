<template>
  <div class="footer">
    <div class="address">
      <b>Address</b> <br>
      Millbank,<br>
      Westminster,<br>
      London SW1P 4RG, <br>
      UK
    </div>
    <div class="contact">
      <b>Contact Details</b> <br>
      <a href="tel:+4402078878888">Call +44 (0)20 7887 8888</a><br>
      <a href="mailto:visiting.britain@tate.org.uk">Email visiting.britain@tate.org.uk</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TateFooter'
}
</script>

<style>
  .footer {
    position: relative;
    width: 100%;
    height: 150px;
    background-color: black;
    top: 200px;
    color: white;
  }

  .address {
    position: relative;
    left: -300px;
    top: 20px;
  }

  .contact {
    position: relative;
    top: -80px;
    left: 320px;
  }
</style>
