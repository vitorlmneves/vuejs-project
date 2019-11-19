<template>
  <span>
    <form class="row needs-validation" id="configLayout">

      <div class="col-12 configurations__form-group">

        <h4 style="font-weight:bold">Layout</h4>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="logo">Logo</label>
            <input 
              class="form-control" 
              type="file" 
              name="logo" 
              placeholder="Logo"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="loginImage">Login image</label>
            <input 
              class="form-control" 
              type="file" 
              name="loginImage" 
              placeholder="Background Login Page"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="mainColor">Main Color</label>
            <input 
              class="form-control" 
              type="text" 
              name="mainColor" 
              placeholder="Main Color HexCode"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="secondaryColor">Secondary Color</label>
            <input 
              class="form-control" 
              type="text" 
              name="secondaryColor" 
              placeholder="Secondary Color HexCode"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="menuBgColor">Menu Background Color</label>
            <input 
              class="form-control" 
              type="text" 
              name="menuBgColor" 
              placeholder="Menu Background Color HexCode"
            />
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 configurations__form-group">
        <div class="form-group">
          <label for="mainMenu">Main Menu</label>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="Team" id="Team">
            <input type="number" name="orderMenu" id="" style="width:50px;">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">Team</span>
          </div>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="Technologies" id="Technologies">
            <input type="number" name="orderMenu" id="" style="width:50px;">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">Technologies</span>
          </div>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="Interests" id="Interests">
            <input type="number" name="orderMenu" id="" style="width:50px;">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">Interests</span>
          </div>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="Events" id="Events">
            <input type="number" name="orderMenu" id="" style="width:50px;">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">Events</span>
          </div>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="News" id="News">
            <input type="number" name="orderMenu" id="" style="width:50px;">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">News</span>
          </div>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="Blog" id="Blog">
            <input type="number" name="orderMenu" id="" style="width:50px;">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">Blog</span>
          </div>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="Products" id="Products">
            <input type="number" name="orderMenu" id="" style="width:50px;">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">Products</span>
          </div>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input style="margin-right:5px;" type="checkbox" name="Apps" id="Apps">
            <input type="number" name="orderMenu" id="" style="width:50px;">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">Apps</span>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 configurations__form-group">
        <div class="form-group">
          <label for="mainMenu">Languages</label>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input type="checkbox" name="Portuguese" id="Portuguese">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">Portuguese</span>
          </div>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input type="checkbox" name="English" id="English">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">English</span>
          </div>
          <div style="align-items:center; display:flex;" class="form-group col-md-3">
            <input type="checkbox" name="French" id="French">
            <span style="display:inline-block; font-size:1rem; width:250px; margin-left:10px;">French</span>
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
