<template>
  <main class="container-fluid">
    <HeaderHubProduct />
    <div class="d-flex">
      <aside class="col-md-3">
        <MenuHubProduct />
        <FilesHub />
      </aside>
      <div class="col-md-9">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import HubTitle from "@/components/hub/HubTitle";
import HeaderHubProduct from "@/components/hub/HeaderHubProduct";
import MenuHubProduct from "@/components/hub/MenuHubProduct";
import FilesHub from "@/components/hub/FilesHub";

export default {
  components: {
    HubTitle,
    HeaderHubProduct,
    MenuHubProduct,
    FilesHub
  }
};
</script>
