import { Component, Input } from '@angular/core'
import { dataItemInterface, initialItem } from 'src/models/dataItem'

@Component({
    selector: "app-data-item",
    templateUrl: "./dataItem.component.html",
    styleUrls: ['./dataItem.component.scss']
})

export class DataItem{
    @Input() item: dataItemInterface = initialItem
}