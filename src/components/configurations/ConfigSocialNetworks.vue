<template>
  <span>
    <form class="row needs-validation" id="configSocialNetworksEdit">

      <div class="col-12 configurations__form-group">

        <h4 style="font-weight:bold">Social Networks</h4>
        <div class="form-row">
          <div style="align-items:center; display:flex; padding-top:30px" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="facebook" id="facebook">
            <i style="color:#3b5998; display: inline-block; margin-right:5px; text-align:center; width:40px;" class="fab fa-facebook-f fa-2x"></i>
            <span style="display:inline-block; font-size:1rem; width: 75%">Facebook</span>
          </div>
          <div class="form-group col-md-3">
            <label for="name">Name</label>
            <input 
              class="form-control" 
              type="text" 
              name="name" 
              placeholder="Name"
              value="Facebook"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="socialNetworkUrl">URL</label>
            <input 
              class="form-control" 
              type="url" 
              name="socialNetworkUrl" 
              placeholder="https://"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="icon">Icon</label>
            <input 
              class="form-control" 
              type="text" 
              name="icon" 
              placeholder="Fontawesome code"
              value="fab fa-facebook-f"
            />
          </div>
          <!-- <div class="form-group col-md-4">
            <label for="color">Color</label>
            <input 
              class="form-control" 
              type="text" 
              name="color" 
              placeholder="Icon color"
              value="#3b5998"
            />
          </div> -->
        </div>

        <div class="form-row">
          <div style="align-items:center; display:flex; padding-top:30px" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="twiter" id="twitter">
            <i style="color:#0084b4; display: inline-block; margin-right:5px; text-align:center; width:40px;" class="fab fa-twitter fa-2x"></i>
            <span style="display:inline-block; font-size:1rem; width: 75%">Twitter</span>
          </div>
          <div class="form-group col-md-3">
            <label for="name">Name</label>
            <input 
              class="form-control" 
              type="text" 
              name="name" 
              placeholder="Name"
              value="Twitter"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="socialNetworkUrl">URL</label>
            <input 
              class="form-control" 
              type="url" 
              name="socialNetworkUrl" 
              placeholder="https://"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="icon">Icon</label>
            <input 
              class="form-control" 
              type="text" 
              name="icon" 
              placeholder="Fontawesome code"
              value="fab fa-twitter"
            />
          </div>
          <!-- <div class="form-group col-md-4">
            <label for="color">Color</label>
            <input 
              class="form-control" 
              type="text" 
              name="color" 
              placeholder="Icon color"
              value="#0084b4"
            />
          </div> -->
        </div>

        <div class="form-row">
          <div style="align-items:center; display:flex; padding-top:30px" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="linkedin" id="linkedin">
            <i style="color:#0077b5; display: inline-block; margin-right:5px; text-align:center; width:40px;" class="fab fa-linkedin fa-2x"></i>
            <span style="display:inline-block; font-size:1rem; width: 75%">LinkedIn</span>
          </div>
          <div class="form-group col-md-3">
            <label for="name">Name</label>
            <input 
              class="form-control" 
              type="text" 
              name="name" 
              placeholder="Name"
              value="LinkedIn"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="socialNetworkUrl">URL</label>
            <input 
              class="form-control" 
              type="url" 
              name="socialNetworkUrl" 
              placeholder="https://"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="icon">Icon</label>
            <input 
              class="form-control" 
              type="text" 
              name="icon" 
              placeholder="Fontawesome code"
              value="fab fa-linkedin"
            />
          </div>
          <!-- <div class="form-group col-md-4">
            <label for="color">Color</label>
            <input 
              class="form-control" 
              type="text" 
              name="color" 
              placeholder="Icon color"
              value="#0077b5"
            />
          </div> -->
        </div>

        <div class="form-row">
          <div style="align-items:center; display:flex; padding-top:30px;" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="instagram" id="instagram">
            <i style="color:#405de6; display: inline-block; margin-right:5px; text-align:center; width:40px;" class="fab fa-instagram fa-2x"></i>
            <span style="display:inline-block; font-size:1rem; width: 75%">Instagram</span>
          </div>
          <div class="form-group col-md-3">
            <label for="name">Name</label>
            <input 
              class="form-control" 
              type="text" 
              name="name" 
              placeholder="Name"
              value="Instagram"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="socialNetworkUrl">URL</label>
            <input 
              class="form-control" 
              type="url" 
              name="socialNetworkUrl" 
              placeholder="https://"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="icon">Icon</label>
            <input 
              class="form-control" 
              type="text" 
              name="icon" 
              placeholder="Fontawesome code"
              value="fab fa-instagram"
            />
          </div>
          <!-- <div class="form-group col-md-4">
            <label for="color">Color</label>
            <input 
              class="form-control" 
              type="text" 
              name="color" 
              placeholder="Icon color"
              value="#00aff0"
            />
          </div> -->
        </div>
      </div>

      <div class="col-12">
        <div class="d-flex form-group flex-row-reverse">
          <button class="btn btn-danger" type="submit" @click.prevent="submitForm()">Cancel</button>
          <button class="btn btn-primary" style="margin-right:20px" type="submit" @click.prevent="submitForm()">Save</button>
        </div>
      </div>

    </form>
    <hr>
    <br>
    <form class="row needs-validation" id="configSocialNetworksAdd">

      <div class="col-12 configurations__form-group">

        <h4 style="font-weight:bold">Add Social Network</h4>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="name">Name</label>
            <input 
              class="form-control" 
              type="text" 
              name="name" 
              placeholder="Name"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="socialNetworkUrl">URL</label>
            <input 
              class="form-control" 
              type="url" 
              name="socialNetworkUrl" 
              placeholder="https://"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="icon">Icon</label>
            <input 
              class="form-control" 
              type="text" 
              name="icon" 
              placeholder="Fontawesome code"
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
  </span>
</template>

<script>
export default {
  name: "ConfigGeneral"
}
</script>
