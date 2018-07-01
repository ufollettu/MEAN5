import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '/app.component.html',
    styleUrls: ['/app.component.css']
})
export class AppComponent {
    message = {
        content:  'contenuto',
        author: 'Io'
    }
}

// GIST sync
// token 9656fd70fb1710abde11bdcc72ccbe0f1400173d
// id 37e1c9cd5cce91f1dad6193512d577b6