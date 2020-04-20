<template>
    <div v-if="status === true">
        <ion-card>
            <ion-item>
                <ion-label>{{symbol}}</ion-label>
            </ion-item>
            <ion-card-content>
                <p>Cela fait {{resultData}} en {{symbol}} </p>
            </ion-card-content>
        </ion-card>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        name:'Result',
        computed:{
            ...mapGetters(['resultData','symbol'])
        },
        props:{
            status:Boolean
        }
    }
</script>
<style scoped lang="css">
    ion-item{
        text-align: center;
    }
</style>