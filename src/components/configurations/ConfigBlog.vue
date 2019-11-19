<template>
  <form class="row needs-validation" id="configBlog">

    <div class="col-12 configurations__form-group">

      <h4 style="font-weight:bold">Blog</h4>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="Opinion">Opinion</label>
          <input 
            class="form-control" 
            type="email" 
            name="Opinion" 
            placeholder="Approval email"
          />
        </div>

        <div class="form-group col-md-6">
          <label for="Technical">Technical</label>
          <input 
            class="form-control" 
            type="email" 
            name="Technical" 
            placeholder="Approval email"
          />
        </div>
      </div>
    </div>

    <div class="col-12">
      <div class="d-flex form-group flex-row-reverse">
        <button class="btn btn-danger" type="submit" @click.prevent="submitForm()">Cancel</button>
        <button class="btn btn-primary" style="margin-right:20px" type="submit" @click.prevent="submitForm()">Save</button>
      </div>
    </div>

  </form>
</template>

<script>
export default {
  name: "ConfigBlog"
}
</script>
