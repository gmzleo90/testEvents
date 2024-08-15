import { LightningElement } from 'lwc';

export default class Publisher extends LightningElement {
    value;

    handleChange(event){
        this.value = event.target.value;
    }

    handleClick(){
        let event = new CustomEvent('tortolito',{
            detail: {
                value: this.value
            },
            bubbles:true
        });
        this.dispatchEvent(event);
    }
}



