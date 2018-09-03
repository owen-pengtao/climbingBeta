import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

import { Beta } from "../model";
import 'rxjs/add/operator/map'

@Injectable()
export class RouteDetailService {

  constructor(private http: HttpClient) {
  }

  getBeta(betaId: number): Observable<Beta> {
    return this.http.get("http://localhost:3000/betas?id=" + betaId)
      .map((res: Beta) => res);
  }
}