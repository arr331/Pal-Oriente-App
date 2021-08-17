import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Commentary } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private db: AngularFireDatabase) { }

  public getAll(region: string, municipality: string, site: string): AngularFireList<Commentary> {
    return this.db.list(`${region}/COMMENTS/${municipality}/${site}`);
  }

  public save(com: Commentary, idSite: string, region: string, idMun: string): Promise<void> {
    com.idOpinion = com.idOpinion || this.db.createPushId();
    return this.db
      .list(`${region}/COMMENTS/${idMun}/${idSite}`)
      .update(com.idOpinion, com);
  }

  public delete(idOpinion: string, idSite: string, region: string, idMun: string): Promise<void> {
    return this.db
      .list(`${region}/COMMENTS/${idMun}/${idSite}`)
      .remove(idOpinion);
  }
}
