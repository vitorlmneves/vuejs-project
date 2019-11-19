<template>
  <div class="d-flex flex-wrap mb-4 justify-content-between configurations">
    <b-card no-body>
      <b-tabs pills vertical>
        <b-tab title="General" active>
          <ConfigGeneral />
        </b-tab>
        <b-tab title="Social Networks">    
          <ConfigSocialNetworks />
        </b-tab>
        <b-tab title="Layout">
          <ConfigLayout />
        </b-tab>
        <b-tab title="Podcast">
          <ConfigPodcast />
        </b-tab>
        <b-tab title="Apps">
          <ConfigApps />
        </b-tab>
        <b-tab title="Feeds">
          <ConfigFeeds />
        </b-tab>
        <b-tab title="Products">
          <b-card-text>Products Configuration...</b-card-text>
        </b-tab>
        <b-tab title="Interests">
          <b-card-text>Interests Configuration..</b-card-text>
        </b-tab>
        <b-tab title="Blog">
          <ConfigBlog />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import ConfigGeneral from "@/components/configurations/ConfigGeneral";
import ConfigSocialNetworks from "@/components/configurations/ConfigSocialNetworks";
import ConfigLayout from "@/components/configurations/ConfigLayout";
import ConfigPodcast from "@/components/configurations/ConfigPodcast";
import ConfigFeeds from "@/components/configurations/ConfigFeeds";
import ConfigBlog from "@/components/configurations/ConfigBlog";
import ConfigApps from "@/components/configurations/ConfigApps";

export default {
  components: {
    ConfigGeneral,
    ConfigSocialNetworks,
    ConfigLayout,
    ConfigPodcast,
    ConfigFeeds,
    ConfigBlog,
    ConfigApps
  }
}
</script>
