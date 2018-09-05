import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

import { Route } from "../model";
import 'rxjs/add/operator/map'

@Injectable()
export class RouteListService {

  constructor(private http: HttpClient) {
  }

  getRoutesByZoneId(zoneId: number): Observable<Route[]> {
    return this.http.get("/api/routes?zone=" + zoneId)
      .map((res: Route[]) => res);
  }
}