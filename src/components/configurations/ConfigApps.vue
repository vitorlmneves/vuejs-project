<template>
  <span>
    <form class="row needs-validation" id="configAppsEdit">

      <div class="col-12 configurations__form-group">
        <h4 style="font-weight:bold">Apps</h4>
        <table class="table table--apps">
          <thead>
            <tr>
              <th>
              </th>
              <th>
                <label for="Original">Name</label>
              </th>
              <th>
                <label for="name">Rename to...</label>
              </th>
              <th>
                <label for="appkUrl">URL</label>
              </th>
              <th style="width:120px">
                <label for="appOrder">Order</label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input style="margin-right:5px;" type="checkbox" name="Abc" id="Abc">
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="text" 
                    name="Original" 
                    placeholder="Name"
                    value="Abc"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="text" 
                    name="name" 
                    placeholder="New name"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="url" 
                    name="appUrl" 
                    placeholder="https://www.abc.com"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="number" 
                    name="appOrder"
                  />
              </td>
            </tr>
            
            <tr>
              <td>
                <input style="margin-right:5px;" type="checkbox" name="Efh" id="Efh">
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="text" 
                    name="Original" 
                    placeholder="Name"
                    value="Efh"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="text" 
                    name="name" 
                    placeholder="New name"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="url" 
                    name="appkUrl" 
                    placeholder="https://www.efh.com"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="number" 
                    name="appOrder"
                  />
              </td>
            </tr>
            
            <tr>
              <td>
                <input style="margin-right:5px;" type="checkbox" name="Jlm" id="Jlm">
              </td>
              <td>
                <input 
                  class="form-control" 
                  type="text" 
                  name="Original" 
                  placeholder="Name"
                  value="Jlm"
                />
              </td>
              <td>
                <input 
                  class="form-control" 
                  type="text" 
                  name="name" 
                  placeholder="New name"
                />
              </td>
              <td>
                <input 
                  class="form-control" 
                  type="url" 
                  name="appkUrl" 
                  placeholder="https://www.jlm.com"
                />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="number" 
                    name="appOrder"
                  />
              </td>
            </tr>
            
            <tr>
              <td>
                <input style="margin-right:5px;" type="checkbox" name="Opq" id="Opq">
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="text" 
                    name="Original" 
                    placeholder="Name"
                    value="Opq"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="text" 
                    name="name" 
                    placeholder="New name"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="url" 
                    name="appkUrl" 
                    placeholder="https://www.opq.com"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="number" 
                    name="appOrder"
                  />
              </td>
            </tr>
          </tbody>
        </table>
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
    <form class="row needs-validation" id="configAppsAdd">

      <div class="col-12 configurations__form-group">

        <h4 style="font-weight:bold">Add App</h4>
        <table class="table table--apps">
          <thead>
            <tr>
              <th>
                <label for="Original">Name</label>
              </th>
              <th>
                <label for="appkUrl">URL</label>
              </th>
              <th style="width:120px">
                <label for="appOrder">Order</label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <input 
                    class="form-control" 
                    type="text" 
                    name="Original" 
                    placeholder="Name"
                    value="App Name"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="url" 
                    name="appUrl" 
                    placeholder="https://"
                  />
              </td>
              <td>
                  <input 
                    class="form-control" 
                    type="number" 
                    name="appOrder"
                  />
              </td>
            </tr>
            
          </tbody>
        </table>
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
  name: "ConfigApps"
}
</script>
