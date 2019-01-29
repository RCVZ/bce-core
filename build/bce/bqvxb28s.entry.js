const t=window.bce.h;class e{constructor(){this.value=!1,this.onChange=(t=>{const e=t.target;e&&(this.value=e.checked),this.inputEvent.emit(t)})}render(){return t("label",null,t("input",{type:"checkbox",checked:this.value,onChange:this.onChange}),t("div",{"data-on":this.value,"data-off":!this.value}))}static get is(){return"bce-switch"}static get properties(){return{color:{type:String,attr:"color",reflectToAttr:!0},value:{type:Boolean,attr:"value",mutable:!0}}}static get events(){return[{name:"input",method:"inputEvent",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"bce-switch{--bce-color-l:var(--bce-color-primary-l);--bce-color-n:var(--bce-color-primary-n);--bce-color-d:var(--bce-color-primary-d);--bce-color-t:var(--bce-color-primary-t);position:relative;display:inline-block;width:36px;height:20px}bce-switch label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%}bce-switch label>input{display:none}bce-switch label>div{width:36px;height:12px;border-radius:14px}bce-switch label>div:after{z-index:1;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);content:\"\";position:absolute;top:0;right:0;width:20px;height:20px;border-radius:50%}bce-switch label>div[data-off]{background-color:var(--bce-color-light-d)}bce-switch label>div[data-off]:after{left:0;background-color:var(--bce-color-light-n)}bce-switch label>div[data-on]{background-color:var(--bce-color-l)}bce-switch label>div[data-on]:after{background-color:var(--bce-color-n)}"}}export{e as BceSwitch};