<template>
  <header class="header">
    <div class="container-fluid d-flex mb-4">	
      <div class="w-50">
        <Logo />
      </div>
      <div class="w-50">
        <Languages />
        <MenuUser />
      </div>
    </div>
    <Menu />
  </header>
</template>

<script>
import Logo from "@/components/base/Logo";
import Languages from "@/components/base/Languages";
import MenuUser from "@/components/users/MenuUser";
import Menu from "@/components/base/Menu";
export default {
  components: {
    Logo,
    Languages,
    MenuUser,
    Menu
  }
}
</script>
