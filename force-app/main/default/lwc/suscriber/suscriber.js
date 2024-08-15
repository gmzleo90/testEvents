import { LightningElement, track } from 'lwc';

export default class Suscriber extends LightningElement {
     @track itemList = [];

    connectedCallback(){
        window.addEventListener('tortolito', this.handleMessage, false);
    }

    handleMessage = (event) => {
        let detail = event.detail.value;
        this.itemList.push(detail);
    }

    disconnectedCallback(){
        window.removeEventListener('tortoito', this.handleMessage, false);
    }

    get showItemList(){
        return this.itemList.length >= 1;
    }
}