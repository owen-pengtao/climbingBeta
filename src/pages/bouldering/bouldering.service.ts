import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

import { Zone } from "../model";
import 'rxjs/add/operator/map'

@Injectable()
export class BoulderingService {

  constructor(private http: HttpClient) {
  }

  getZones(): Observable<Zone[]> {
    return this.http.get("/api/zones")
      .map((res: Zone[]) => res);
  }
}