import {Component, OnInit} from '@angular/core';
import {SharedService} from "./servises/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'To-Do';

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
