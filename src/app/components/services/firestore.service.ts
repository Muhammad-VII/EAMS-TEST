import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  deleteDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { onSnapshot } from 'firebase/firestore';
import { Observable } from 'rxjs';
export interface Note {
  id?: string;
  title: string;
  text: string;
}
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}
  webcamButton: HTMLElement = document.getElementById('webcamButton') as HTMLButtonElement;
  webcamVideo: HTMLElement = document.getElementById('webcamVideo') as HTMLVideoElement;
  callButton: HTMLElement = document.getElementById('callButton') as HTMLButtonElement;
  callInput: HTMLElement | any = document.getElementById('callInput') as HTMLInputElement;
  answerButton: HTMLElement = document.getElementById('answerButton') as HTMLButtonElement;
  remoteVideo: HTMLElement = document.getElementById('remoteVideo') as HTMLVideoElement;
  hangupButton: HTMLElement = document.getElementById('hangupButton') as HTMLButtonElement;
  server = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
      },
    ],
    iceCandidatePoolSize: 10,
  };
  localStream: any = null;
  remoteStream: any = null
  pc = new RTCPeerConnection(this.server)

  async getMedia() {

    this.localStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
    this.remoteStream = new MediaStream();
    // console.log();
  
    // Push tracks from local stream to peer connection
    this.localStream.getTracks().forEach((track:any) => {
      this.pc.addTrack(track, this.localStream);
    });
  
    // Pull tracks from remote stream, add to video stream
    this.pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        this.remoteStream.addTrack(track);
      });
   }
  }

  async shareScreen() {
    const screenRef = collection(this.firestore, 'screen');
    const callDoc = collection(this.firestore,'calls');
    const offerDoc = collection(this.firestore,'offerCandidates');
    const answerDoc = collection(this.firestore,'answerCandidates');
    const screenData = collectionData(screenRef) as Observable<any>
    const callsData = collectionData(callDoc) as Observable<any>
    const offersData = collectionData(offerDoc) as Observable<any>
    const answersData = collectionData(answerDoc) as Observable<any>

    this.callInput.value = callDoc.id;

    // Get candidates for caller, save to db
    this.pc.onicecandidate = (event) => {
      event.candidate && addDoc(offerDoc, event.candidate.toJSON());
    };

    // Create offer
    const offerDescription = await this.pc.createOffer();
    await this.pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };
    await addDoc(callDoc, offer);

    // Listen for remote answer
    onSnapshot(answerDoc, (snapshot:any) => {
      const data = snapshot.docs.map((doc:any) => doc.data());
      if (!this.pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        this.pc.setRemoteDescription(answerDescription);
      }
    });

    // When answered, add candidate to peer connection
    onSnapshot(answerDoc, (snapshot:any) => {
      snapshot.docChanges().forEach((change:any) => {
        if (change.type === 'added') {
          const candidate = new RTCIceCandidate(change.doc.data());
          this.pc.addIceCandidate(candidate);
        }
      });
    });
  }

  getNotes(): Observable<any> {
    const notesRef = collection(this.firestore, 'API');
    return collectionData(notesRef, { idField: 'id' }) as Observable<any>;
  }

  getNoteById(id: any): Observable<Note> {
    const noteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<Note>;
  }

  addNote(note: Note) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note);
  }

  deleteNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(noteDocRef);
  }

  updateNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return updateDoc(noteDocRef, { title: note.title, text: note.text });
  }
}
