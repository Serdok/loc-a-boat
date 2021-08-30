export class Avis { 
    id: string = null;
    idBoat: string = null;
    commentaire: string = null;
    note: number = 0;    
  
    constructor(obj: Partial<Avis>) {
      this.id = obj?.id;
      this.idBoat = obj?.idBoat;
      this.commentaire = obj?.commentaire;
      this.note = obj?.note;
      console.log('Avis constructor() from ', obj, ': ', this);
    }
  
    toObject(): object {
      return { ...this};
    }
  }
  