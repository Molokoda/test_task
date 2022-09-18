import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})

export class NavComponent{
    @Input() nav: string = ""
    @Input() index: number = 0
    @Input() tab: number = 0
}