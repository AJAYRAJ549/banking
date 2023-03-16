import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  @Input() item:String|undefined
  @Output() oncancel=new EventEmitter()

// event creation




  constructor() { }

  ngOnInit(): void {
    
  }

  onCancel(){
   // event start
   this.oncancel.emit()
  }

}
