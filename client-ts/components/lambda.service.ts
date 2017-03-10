import { Injectable }     from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { IFoodItem }      from './fooditem';

@Injectable()
export class LambdaService {

  private foodsUrl = 'https://74my6h7jf4.execute-api.us-east-2.amazonaws.com/prod/getData';  // URL to web API
  constructor(private http: Http) { }

  getFoodItems(): Promise<IFoodItem[]> {
    return this.http.get(this.foodsUrl).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
