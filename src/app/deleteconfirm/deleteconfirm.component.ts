import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  @Input() item:String|undefined

  constructor() { }

  ngOnInit(): void {
    
  }

}
