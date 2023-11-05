import {Component, OnInit} from '@angular/core';
import {SharedService} from "../servises/shared.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  constructor(private service: SharedService) {
  }

  notes: any = [];

  refreshNotes() {
    this.service.getNotes().subscribe((res) => {
      this.notes = res;
    })
  }

  ngOnInit() {
    this.refreshNotes();
  }

  addNotes(newNotes: string) {
    this.service.addNotes(newNotes).then((res)=>{
      console.log(res);
      this.refreshNotes();
    })
  }

  deleteNotes(id: string) {
    this.service.deleteNotes(id).then((res)=>{
      console.log(res);
      this.refreshNotes();
    })
  }
}
