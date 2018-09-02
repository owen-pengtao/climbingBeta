import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BoulderingService {

  constructor(private http: HttpClient) {
  }

  getZones() {
    return this.http.get("http://localhost:3000/zones");
  }
}