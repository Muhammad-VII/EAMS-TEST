import { Component, OnInit } from '@angular/core';
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
  onSnapshot,
  collectionSnapshots,
} from '@angular/fire/firestore';
@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})
export class StreamComponent implements OnInit {
  constructor(private _FireStore: Firestore) {}

  servers = {
    iceServers: [
      {
        urls: [
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302',
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  };
  pc: RTCPeerConnection = new RTCPeerConnection(this.servers);
  localStream: any = null;
  remoteStream: any = null;
  // screenShareVideo:HTMLVideoElement = document.getElementById('screenShareVideo')! as HTMLVideoElement;
  // screenShareButton:HTMLButtonElement = document.getElementById('screenShareButton')! as HTMLButtonElement;
  // callButton:HTMLButtonElement = document.getElementById('callButton')! as HTMLButtonElement;
  // answerButton:HTMLButtonElement = document.getElementById('answerButton')! as HTMLButtonElement;
  // hangupButton:HTMLElement = document.getElementById('hangupButton')! as HTMLElement;
  // callInput:HTMLInputElement = document.getElementById('callInput')! as HTMLInputElement;
  // remoteVideo:HTMLVideoElement = document.getElementById('remoteVideo')! as HTMLVideoElement;

  async initilizeStream() {
    this.localStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });
    this.remoteStream = new MediaStream();

    // push tracks from local stream to peer connection
    this.localStream.getTracks().forEach((track: any) => {
      this.pc.addTrack(track, this.localStream);
    });

    // Pull tracks from remote stream add to video stream
    this.pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        this.remoteStream.addTrack(track);
      });
    };
    const localStreamVideo: HTMLVideoElement = document.getElementById(
      'screenShareVideo'
    )! as HTMLVideoElement;
    const remoteStreamVideo: HTMLVideoElement = document.getElementById(
      'remoteVideo'
    )! as HTMLVideoElement;
    const callButton: HTMLButtonElement = document.getElementById(
      'callButton'
    )! as HTMLButtonElement;
    const answerButton: HTMLButtonElement = document.getElementById(
      'answerButton'
    )! as HTMLButtonElement;
    const screenShareButton: HTMLButtonElement = document.getElementById(
      'screenShareButton'
    )! as HTMLButtonElement;
    localStreamVideo.srcObject = this.localStream;
    remoteStreamVideo.srcObject = this.remoteStream;
    callButton.disabled = false;
    answerButton.disabled = false;
    screenShareButton.disabled = true;
  }

  async createAnOffer() {
    // Reference Firestore collection for signaling
    const callInput: HTMLInputElement = document.getElementById(
      'callInput'
    )! as HTMLInputElement;

    const callsRef = collection(this._FireStore, 'calls');
    const callData = await addDoc(callsRef, {
      offer: '',
    });
    callInput.value = callData.id;

    // Get candidates for caller, save to db
    this.pc.onicecandidate = async (event) => {
      event.candidate &&
        (await setDoc(callData, {
          offerCandidates: event.candidate.toJSON(),
        }));
    };

    const offerDescription = await this.pc.createOffer();
    const hangoutButton: HTMLButtonElement = document.getElementById(`hangupButton`)! as HTMLButtonElement
    await this.pc.setLocalDescription(offerDescription);
    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };
    await setDoc(callData, offer);

    onSnapshot(callData, (res) => {
      const data = res.data();
      if (!this.pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        this.pc.setRemoteDescription(answerDescription);
      }
    });

    hangoutButton.disabled = false
    
  }

  async answerCall() {
    const callInput:HTMLInputElement = document.getElementById('callInput')! as HTMLInputElement;
    const callId = callInput.value;
    const callsRef = collection(this._FireStore,'calls')
  
    this.pc.onicecandidate = (event) => {
      event.candidate && addDoc(callsRef, event.candidate.toJSON())
    };
    collectionData(callsRef, { idField: 'id' }).subscribe(data => {
      const offer = data.filter(offer => offer.id == callId)
      const answerCandidates = offer[0].answerCandidates
      const offerCandidates = offer[0].offerCandidates
      this.pc.onicecandidate = async (event) => {
        event.candidate && (await setDoc(offerCandidates, {
          offerCandidates: event.candidate.toJSON(),
        }));
      }
      const callData = onSnapshot(callsRef, (data) => {
        data
      })
    })
    
  }

  // answerButton.onclick = async () => {
  //   const callId = callInput.value;
  //   const callDoc = firestore.collection('calls').doc(callId);
  //   const answerCandidates = callDoc.collection('answerCandidates');
  //   const offerCandidates = callDoc.collection('offerCandidates');
  //   console.log(answerCandidates, offerCandidates);
  //   pc.onicecandidate = (event) => {
  //     event.candidate && answerCandidates.add(event.candidate.toJSON());
  //   };
  
  //   const callData = (await callDoc.get()).data();
  
  //   const offerDescription = callData.offer;
  //   await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));
  
  //   const answerDescription = await pc.createAnswer();
  //   await pc.setLocalDescription(answerDescription);
  
  //   const answer = {
  //     type: answerDescription.type,
  //     sdp: answerDescription.sdp,
  //   };
  
  //   await callDoc.update({ answer });
  
  //   offerCandidates.onSnapshot((snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       console.log(change);
  //       if (change.type === 'added') {
  //         let data = change.doc.data();
  //         pc.addIceCandidate(new RTCIceCandidate(data));
  //       }
  //     });
  //   });
  // };

  ngOnInit(): void {}
}
