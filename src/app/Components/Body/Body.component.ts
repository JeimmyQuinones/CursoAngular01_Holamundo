import{Component } from '@angular/core';

@Component({
    selector:'app-Body',
    templateUrl:'./Body.component.html'
})

export class BodyComponent{
    Statebutton= false;
    frase:any={
        mensaje:'un poder conlleva una gran responsabilidad',
        autor:'Ben Parker',
    };
    personajes:string[]= ["Spiderman", "Venom", "Octupus"];

}