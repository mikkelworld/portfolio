import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export class ContactFormErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
	selector: 'app-contact-dialog',
	templateUrl: './contact-dialog.component.html',
	styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent {

	contactForm = this.fb.group({
		name: ["", [Validators.required, Validators.minLength(3)]],
		email: ["", [Validators.required, Validators.email]],
		message: ["", [Validators.required, Validators.minLength(20)]]
	});

	errorMatcher = new ContactFormErrorStateMatcher();

	constructor(private fb: FormBuilder, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<ContactDialogComponent>) { }

	onCancel() {
		this.dialogRef.close({ success: false });
	}

	onSubmit() {
		const formValues = this.contactForm.value;

		this.snackBar.open("Your message has been sent", "Dismiss", {
			duration: 5000,
		});

		this.dialogRef.close({ success: true, formValues: formValues });
	}

	get name(): FormControl {
		return this.contactForm.get("name") as FormControl;
	}

	get email(): FormControl {
		return this.contactForm.get("email") as FormControl;
	}

	get message(): FormControl {
		return this.contactForm.get("message") as FormControl;
	}
}
