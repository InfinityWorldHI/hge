import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  //This for specifing the user
  @Input() role: number;
  //The user avatar
  @Input() image: string;

  avatar: string = '/assets/images/avatar.png';

  imagePreview: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.role);
    console.log(this.image);

    this.imagePreview = document.getElementById('imagePreview');

    if (this.image != '') {
      this.imagePreview.style.setProperty('background-image', 'url('+ this.image +')');
    } else {
      this.imagePreview.style.setProperty('background-image', 'url('+ this.avatar +')');
    }

  }

  previewImg(input) {
    this.readURL(input.explicitOriginalTarget);
  }

  readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
            this.imagePreview.style.setProperty('background-image', 'url('+ e.target.result +')');
        }
        reader.readAsDataURL(input.files[0]);
    }
  }

}
