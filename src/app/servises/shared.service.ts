import {Injectable} from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore} from "@angular/fire/firestore";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs: Firestore) {
  }
  getNotes(){
    let notesCollection = collection(this.fs,'notes');
    return collectionData(notesCollection,{idField: 'id'});
  }

  addNotes(desc: string) {
    let data: DocumentData = { description: desc };
    let notesCollection = collection(this.fs, 'notes');
    return addDoc(notesCollection, data);
  }

  deleteNotes(id:string){
    let docRef = doc(this.fs,'notes/'+id);
    return deleteDoc(docRef);
  }
}
