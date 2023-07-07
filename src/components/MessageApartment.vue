<script>
export default {
  name: 'MessageApartment'
}
</script>
<template>
  <div class="row">
    <div class="col-12 m-auto">
      <div class="card mt-3 shadow rounded-3">
        <div class="p-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control mb-4" name="name" id="name" aria-describedby="nameHelpId"
            placeholder="Insert your name here">

          <label for="surname" class="form-label">Surname</label>
          <input type="text" class="form-control mb-4" name="surname" id="surname" aria-describedby="surnameHelpId"
            placeholder="Insert your surname here">

          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control mb-4" name="email" id="email" aria-describedby="emailHelpId"
            placeholder="insert your email here">

          <label for="content" class="form-label">Message</label>
          <textarea class="w-100 border-0" name="content" id="content" rows="5"
            placeholder="insert your message here"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>