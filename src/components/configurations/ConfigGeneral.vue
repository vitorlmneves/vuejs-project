<template>
  <form style="width:100%" class="row needs-validation" id="configGeneral">

    <div class="col-12 col-md-6 configurations__form-group">
      <!-- <b-card bg-variant="light">
        <b-form-group
          label-cols-lg="3"
          label="Company"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label-cols-sm="3"
            label="Name"
            label-align-sm="right"
            label-for="companyName"
          >
            <b-form-input id="companyName"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="LDAP"
            label-align-sm="right"
            label-for="companyLdap"
          >
            <b-form-input id="companyLdap"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Domain"
            label-align-sm="right"
            label-for="ldapDomain"
          >
            <b-form-input id="ldapDomain"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Password"
            label-align-sm="right"
            label-for="companyPassword"
          >
            <b-form-input type="password" id="companyPassword"></b-form-input>
          </b-form-group>
        </b-form-group>
      </b-card> -->

      <h4 style="font-weight:bold">Company</h4>
      <div class="form-group">
        <label for="companyName">Name</label>
        <input 
          class="form-control" 
          type="text" 
          name="companyName" 
          placeholder="Company Name"
        />
      </div>
      <div class="form-group">
        <label for="companyLdap">LDAP</label>
        <input 
          class="form-control" 
          type="url" 
          name="companyLdap" 
          placeholder="LDAP URL"
        />
      </div>
      <div class="form-group">
        <label for="companyDomain">Domain</label>
        <input 
          class="form-control" 
          type="text" 
          name="companyDomain" 
          placeholder="Domain"
        />
      </div>
      <div class="form-group">
        <label for="companyPassword">Password</label>
        <input 
          class="form-control" 
          type="password" 
          name="companyPassword" 
          placeholder="Password"
        />
      </div>
    </div>

    <div class="col-12 col-md-6 configurations__form-group">
      <!-- <b-card bg-variant="light">
        <b-form-group
          label-cols-lg="3"
          label="Email"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label-cols-sm="3"
            label="User"
            label-align-sm="right"
            label-for="emailUser"
          >
            <b-form-input type="email" id="emailUser"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Domain"
            label-align-sm="right"
            label-for="emailDomain"
          >
            <b-form-input type="email" id="emailDomain"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Password"
            label-align-sm="right"
            label-for="emailPassword"
          >
            <b-form-input type="password" id="emailPassword"></b-form-input>
          </b-form-group>
        </b-form-group>
      </b-card> -->

      <h4 style="font-weight:bold">Email</h4>
      <div class="form-group">
        <label for="emailUser">User Email</label>
        <input 
          class="form-control" 
          type="text" 
          name="emailUser" 
          placeholder="User Email"
        />
      </div>
      <div class="form-group">
        <label for="userPassword">Password</label>
        <input 
          class="form-control" 
          type="password" 
          name="userPassword" 
          placeholder="User Password"
        />
      </div>
      <div class="form-group">
        <label for="userExchangeUrl">Exchange URL</label>
        <input 
          class="form-control" 
          type="url" 
          name="userExchangeUrl" 
          placeholder="Exchange URL"
        />
      </div>
    </div>

    <div class="col-12 col-md-6 configurations__form-group">
      <h4 style="font-weight:bold">Cloudinary</h4>
      <div class="form-group">
        <label for="cloudinaryName">Name</label>
        <input 
          class="form-control" 
          type="text" 
          name="cloudinaryName" 
          placeholder="Name"
        />
      </div>
      <div class="form-group">
        <label for="cloudinaryKey">Key</label>
        <input 
          class="form-control" 
          type="text" 
          name="cloudinaryKey" 
          placeholder="LDAP URL"
        />
      </div>
      <div class="form-group">
        <label for="cloudinarySecret">Secret</label>
        <input 
          class="form-control" 
          type="password" 
          name="cloudinarySecret" 
          placeholder="Secret"
        />
      </div>
    </div>

    <div class="col-12 col-md-6 configurations__form-group">
      <h4 style="font-weight:bold">DataBase</h4>
      <div class="form-group">
        <label for="dbServer">Server</label>
        <input
          class="form-control"
          type="text"
          name="dbServer"
          readonly
        />
      </div>
      <div class="form-group">
        <label for="dbName">DataBase</label>
        <input
          class="form-control"
          type="text"
          name="dbName"
          readonly
        />
      </div>
    </div>

    <div class="col-12 col-md-6 configurations__form-group">
      <h4 style="font-weight:bold">Google Maps API</h4>
      <div class="form-group">
        <label for="gmapsKey">API Key</label>
        <input
          class="form-control"
          type="text"
          name="gmapsKey"
          placeholder="API Key"
        />
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
  name: "ConfigGeneral"
}
</script>
