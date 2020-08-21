import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Orientation} from '../modules/orientation';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrientationService {
  private OrientationsUrl: string;
  constructor(private http: HttpClient) {
    this.OrientationsUrl = 'http://localhost:8081/orientations';
  }
  public getAllOrientation(): Observable<Orientation[]> {
    console.log('getAllOrientation??');
    return this.http.get<Orientation[]>(this.OrientationsUrl + '/all');
  }
  public saveOrientation(orientation: Orientation) {
    console.log('saveOrientation ca marche ou pas');
    return this.http.post<Orientation>(this.OrientationsUrl + '/save', orientation);
  }
  deleteOrient(orientation: Orientation) {
    console.log('delete fonctionne ou pas..');
    console.log(orientation.numOrientation);
    return this.http.delete(this.OrientationsUrl + '/delete/'+ orientation.numOrientation);
  }

}
