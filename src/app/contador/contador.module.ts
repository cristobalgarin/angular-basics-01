import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    // imports[
    //     //Podria ir el common aca si se usan directivas
    // ]
})
export class ContadorModule{}