import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  error = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
    ) 
  {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    
    // this.http.get('https://api.myjson.com/bins/7xq2x1').subscribe(() => {
    //   console.log('Http Call is success from compoennt');
    // }, (error) => {
    //   console.log('Http Call is failed from component');
    // })
    // if(this.authenticationService.login(this.model.username, this.model.password))
    // {
    //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    // }
    // else
    // {
    //   alert('FAIL!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    // }

    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }
}
