import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(public http:HttpClient) { }


  getUser():Observable<any[]> {
    return this.http.get<any[]>('https:randomuser.me/api/?results=5&inc=id,name,email,phone,gender');
  }
}
