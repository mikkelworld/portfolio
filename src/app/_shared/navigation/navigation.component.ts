import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { ContactDialogComponent } from 'src/app/dialogs/contact-dialog/contact-dialog.component';

@Component({
	selector: 'header-nav',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

	constructor(private dialog: MatDialog) { }

	showContactDialog() {
		this.dialog.open(ContactDialogComponent, {
			maxHeight: "calc(100vh - 2rem)",
			maxWidth: "calc(100vw - 2rem)",
			width: "800px"
		}).afterClosed().pipe(take(1)).subscribe();
	}

}
