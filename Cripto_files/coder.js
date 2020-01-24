Vue.component('CoinDetail', {
    props: ['changePercent', 'title'],
    
    data () {
        return {
            showPrices: false
        }
    },
    
    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices
            this.color = this.color.split('').reverse().join('')
        }
    },
    
    template: `
        <h1 v-bind:class="changePercent > 0 ? 'green' : 'red'">
            <!--{{ name }} - {{ symbol }}-->
            {{ title }}
            <span v-if="changePercent > 0">👍</span>
            <span v-if="changePercent < 0">👎</span>
            <span v-else>🤞</span>

            <span v-on:click="toggleShowPrices">
                {{ showPrices ? '🙈' : '🙉' }}
            </span>
        </h1>
    `
})

new Vue({
    el: '#app',
    
    data () {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: -10,
            
            price: 8400,
            color: 'F4F4F4',
            value: 0,
            
            pricesWhithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Mastes', value: 7900 },
                { day: 'Miércoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sábado', value: 10000 },
                { day: 'Domingo', value: 10200 }
            ],
            
            showPrices: false
        }
    },
    
    computed: {
        title () {
            return `${this.name} - ${this.symbol}`
        },
        
        convertedValue () {
            if(!this.value) {
                return 0
            }
            return this.value / this.price
        }
    },
    
    watch: {
        showPrices (newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },
    
    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices
            this.color = this.color.split('').reverse().join('')
        }
    },
    
    created () {
        console.log('Created CoinDetail...')
    },

    mounted () {
        console.log('Mounted CoinDetail...')
    }
})