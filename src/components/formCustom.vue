<template>
    <div>
        <ion-item>
            <ion-label position="stacked">Amount </ion-label>
            <ion-input type="number" id="number" @input="$v.convert.number.$model=$event.target.value" placeholder="EUR"></ion-input>
        </ion-item>
        <ion-item>
            <ion-label>To </ion-label>
            <ion-select @ionChange = "$v.convert.oneSymbol.$model = JSON.parse($event.target.value)">
                <ion-select-option  v-for="(symbol,index) in devise" :key="index" :value="JSON.stringify({name:index,data:symbol})">{{index}}</ion-select-option>
            </ion-select>
        </ion-item>

        <div class="ion-padding">
            <ion-button @click.prevent="send()" expand="block" type="submit" class="ion-no-margin">Cherchez</ion-button>
        </div>
        <result :status="status"></result>
    </div>
</template>
<script>
    import result from '@/components/Result'
    import {mapActions , mapGetters} from 'vuex'
    import { required , decimal} from 'vuelidate/lib/validators'
    export default {
        name:'formCustom',
        data(){
            return{
                convert: {
                    oneSymbol: null,
                    number: null
                },
                status:false
            }
        },
        components:{
          result
        },
        validations: {
            convert: {
                number: {
                    required,
                    decimal
                },
                oneSymbol: {
                    required
                }
            }
        },
        computed:{
            ...mapGetters(['devise'])
        },
        methods: {
            ...mapActions([
                'money','result'
            ]),
            send(){
                if (this.$v.convert.number.decimal !==false && this.$v.convert.number.required !== false && this.$v.convert.oneSymbol.required !== false) {
                    this.result(this.convert)
                    this.convert.number = null
                    document.querySelector('#number').value = ''
                    this.status = true
                }
                else{
                    this.error()
                }
            },
            error(){
                return this.$ionic.alertController
                    .create({
                        header: 'Erreur !! 😅',
                        message: "Les deux champs sont obligatoire ou l'information renseignée n'est pas un nombre",
                        buttons: ['OK'],
                    })
                    .then(a => a.present())
            },
        },
        beforeMount(){
            this.money()
        }
    }
</script>