import { Component } from '@angular/core';
import { SHOWCASE } from '@data/showcase';
import { ShowcaseItem } from '@interfaces/showcase-item';
import { ICONS } from '@data/tool-icons';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from 'src/app/dialogs/contact-dialog/contact-dialog.component';
import { take } from 'rxjs';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

	projectShowcase: ShowcaseItem[] = SHOWCASE;
	toolIcons: any = ICONS;

	constructor(private dialog: MatDialog) { }

	showContactDialog() {
		this.dialog.open(ContactDialogComponent, {
			maxHeight: "calc(100vh - 2rem)",
			maxWidth: "calc(100vw - 2rem)",
			width: "800px"
		}).afterClosed().pipe(take(1)).subscribe();
	}

}
