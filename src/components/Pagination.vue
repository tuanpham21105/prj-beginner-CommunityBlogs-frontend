<template>
    <ul ref="pagination" id="pagination" class="pagination">
        <li v-on:click.left="OnClickPage">1</li>
        <li v-for="number in renderNumbers" v-show="enableFrontNumbers" v-on:click.left="OnClickPage">{{ number }}</li>
        <li v-show="enableFrontDots" v-on:click.self="ToggleQty" data-type="frontQty">
            <div v-show="!enbaleFrontQty" v-on:click.self="ToggleQty" data-type="frontQty">...</div>
            <div ref="frontQty" class="qty" data-min="1" data-max="99" data-step="1" v-show="enbaleFrontQty">
                <!-- <button type="button" class="decrement">−</button> -->
                <input type="number" class="qty-input" :value="toIndex" inputmode="numeric" @change="SetToIndex"/>
                <!-- <button type="button" class="increment">+</button> -->
                <button type="button" class="increment" @click="JumpToPage"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </li>
        <li v-for="number in renderNumbers" v-show="enableMiddleNumbers" v-on:click.left="OnClickPage" ref="middlepages">{{ number }}</li>
        <li v-show="enableEndDots" v-on:click.self="ToggleQty" data-type="endQty">
            <div v-show="!enbaleEndQty" v-on:click.self="ToggleQty" data-type="endQty">...</div>
            <div ref="endQty" class="qty" data-min="1" data-max="99" data-step="1" v-show="enbaleEndQty">
                <!-- <button type="button" class="decrement">−</button> -->
                <input type="number" class="qty-input" :value="toIndex" inputmode="numeric" @change="SetToIndex"/>
                <!-- <button type="button" class="increment">+</button> -->
                <button type="button" class="increment" @click="JumpToPage"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </li>
        <li v-for="number in renderNumbers" v-show="enableEndNumbers" v-on:click.left="OnClickPage">{{ number }}</li>
        <li v-show="enableLastNumber" v-on:click.left="OnClickPage">{{ total }}</li>
    </ul>
</template>

<script setup>
	import {onMounted, ref, nextTick} from 'vue';

    const props = defineProps({
        inputData: {
            type: Object,
            required: true,
        }
    });

    const emits = defineEmits(['onClickPage']);

    const pagination = ref(null);
    const middlepages = ref(null);
    const frontQty = ref(null);
    const endQty = ref(null);

    const index = ref(1);
    const total = ref(1);

    const renderNumbers = ref([]);
    const enableFrontNumbers = ref(true);
    const enableFrontDots = ref(true);
    const enableMiddleNumbers = ref(true);
    const enableEndDots = ref(true);
    const enableEndNumbers = ref(true);
    const enableLastNumber = ref(true);

    const enbaleFrontQty = ref(false);
    const enbaleEndQty = ref(false);

    const toIndex = ref(1);

    onMounted(() => {
        index.value = props.inputData.index;
        total.value = props.inputData.total;
        ClampIndex();
        RenderPagination();
    });

    function ClampIndex() {
        if (index.value > total.value) index.value = total.value;
        else if (index.value < 1) index.value = 1;
    }

    function RenderPagination() {
        renderNumbers.value.splice(0);
        if (index.value < 4) {
            for (let i = 2; i <= 4; i++) {
                if (i <= total.value) renderNumbers.value.push(i);
            }

            enableFrontNumbers.value = true;
            if (total.value > 5) {
                enableFrontDots.value = true;
            }
            else {
                enableFrontDots.value = false;
            }
            enableMiddleNumbers.value = false;
            enableEndDots.value = false;
            enableEndNumbers.value = false;
            
            SetActiveFirstOrEndPage();
        }
        else if (index.value > total.value - 3) {
            for (let i = total.value - 3; i < total.value; i++) {
                renderNumbers.value.push(i);
            }

            enableFrontNumbers.value = false;
            enableFrontDots.value = false;
            enableMiddleNumbers.value = false;
            enableEndDots.value = true;
            enableEndNumbers.value = true;
            
            SetActiveFirstOrEndPage();
        }
        else {
            for (let i = index.value - 1; i <= index.value + 1; i++) {
                renderNumbers.value.push(i);
            }

            enableFrontNumbers.value = false;
            enableFrontDots.value = true;
            enableMiddleNumbers.value = true;
            enableEndDots.value = true;
            enableEndNumbers.value = false;
            SetActiveMiddlePage();
        }

        if (total.value < 5) enableLastNumber.value = false
        else enableLastNumber.value = true;
    }

    function OnClickPage(event) {
        if (index.value === parseInt(event.target.textContent)) return;
        index.value = parseInt(event.target.textContent);
        ChangePage();
    }

    function SetActiveFirstOrEndPage() {
        nextTick(() => {
            const pageButtons = pagination.value.getElementsByTagName('li');

            for (let element of pageButtons) {
                element.classList.remove('active');
                if (element.textContent == index.value.toString()) {
                    element.classList.add('active');
                }
            }
        });
    }

    function SetActiveMiddlePage() {
        nextTick(() => {
            const pageButtons = pagination.value.getElementsByTagName('li');

            for (let element of pageButtons) {
                element.classList.remove('active');
            }

            middlepages.value[1].classList.add('active');
        });
    }

    function ToggleQty(event) {
        if (event.target.dataset.type === 'frontQty') {
            enbaleFrontQty.value = !enbaleFrontQty.value;
            enbaleEndQty.value = false;
        }
        else {
            enbaleEndQty.value = !enbaleEndQty.value;
            enbaleFrontQty.value = false;
        }
    }

    function SetToIndex(event) {
        toIndex.value = parseInt(event.target.value);
    }

    function JumpToPage() {
        document.activeElement.blur();
        enbaleFrontQty.value = false;
        enbaleEndQty.value = false;
        index.value = parseInt(toIndex.value);
        ChangePage();
    }

    function ChangePage() {
        ClampIndex();
        RenderPagination();
        enbaleFrontQty.value = false;
        enbaleEndQty.value = false;
        emits('onClickPage', index.value);
    }
</script>

<style>
    .pagination {
        display: flex;
        justify-content: center; /* căn giữa */
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 20px 0;
        gap: 6px; /* khoảng cách giữa các nút */
    }

    .pagination li {
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        background: #fff;
        transition: all 0.2s ease;
        user-select: none;
        color: #333;
        width: fit-content;
    }

    .pagination li:hover {
        background: #fff;
        color: #333;    
        border-color: #333;
    }

    .pagination li.active {
        background: #333;
        color: #fff;    
        font-weight: bold;
        border-color: #333;
    }

    .qty {
        display: inline-flex;
        /* align-items: center; */
        width: auto !important;
        max-width: none !important;
        flex: 0 0 auto !important;  
        gap: 5px;
    }

    .qty button {
        width: fit-content;
        height: 100%;
        outline: 2px solid #cfcfcf;
        border: none;
        background: #fff;
        color: #111;
        border-radius: 6px;
        font-size:100%;
        line-height: 1;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        padding: 1px 5px;
    }

    .qty button:active { transform: translateY(1px); }
    .qty button:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .qty input[type="number"] {
        width: 50px;
        height: 100%;
        text-align: center;
        outline: 2px solid #cfcfcf;
        border: none;
        border-radius: 6px;
        font-size:100%;
        padding: 0 8px;
        -moz-appearance: textfield;
    }

    .qty input[type="number"]::-webkit-outer-spin-button,
    .qty input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>