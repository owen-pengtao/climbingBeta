import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

import { Beta } from "../model";
import 'rxjs/add/operator/map'

@Injectable()
export class RouteDetailService {

  constructor(private http: HttpClient) {
  }

  getBetasByRouteId(routeId: number): Observable<Beta[]> {
    return this.http.get("/api/betas?route=" + routeId)
      .map((res: Beta[]) => res);
  }
}