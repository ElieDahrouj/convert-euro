<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Euro Conversion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <img alt="Vue logo" src="../assets/undraw_wallet_aym5.png">
      <formCustom></formCustom>
    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src
import formCustom from '@/components/formCustom'
export default {
  name: 'Home',
    components:{
        formCustom,
    }
}
</script>
<style scoped lang="css">
  ion-toolbar{
    --background:#504f5f
  }
  ion-title{
    color: whitesmoke;
  }
</style>
