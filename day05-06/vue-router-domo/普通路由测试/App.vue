<template>
  <div>
    <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header">
            <h2>Router Basic - 01</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <router-link to="/about" class="list-group-item">About</router-link>
            <router-link to="/home" class="list-group-item">Home</router-link>
            <router-link to="/user" class="list-group-item">User</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div data-v-957c9522 class="col-xs-6">
            <div data-v-957c9522 class="panel">
              <div data-v-957c9522 class="panel-body">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>